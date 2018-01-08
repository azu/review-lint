import * as React from "react";
import { traverse } from "txt-ast-traverse";
import { ASTNodeTypes, TxtParentNode } from "@textlint/ast-node-types";

const { Editor } = require("slate-react");
const { Data } = require("slate");

export type ValueType = {
    document: any;
    change(): any;
};

export interface Annotation {
    [index: string]: any;

    messages: {
        [index: string]: any;
        ruleId: string;
        message: string;
        index: number;
        line: number;
        column: number;
        severity: number;
        data: {
            [index: string]: any;
            range: [number, number];
            details: any;
        };
    }[];
    filePath: string;
}

export interface AnnotationEditorProps {
    value: ValueType;
    txtAST: TxtParentNode;
    annotations: Annotation[];
}

export class AnnotationEditor extends React.Component<AnnotationEditorProps> {
    // Set the initial value when the app is first constructed.
    state = {
        value: this.props.value
    };

    // On change, update the app's React state with the new editor value.
    onChange = ({ value }: { value: ValueType }) => {
        this.setState({ value });
    };

    componentDidMount() {
        const { value } = this.state;
        const document = value.document;
        const decorations: {
            anchorKey: string;
            anchorOffset: number;
            focusKey: string;
            focusOffset: number;
            marks: { type: string; data: any }[];
        }[] = [];

        const getOffset = (targetOffset: number) => {
            const startNode = document.getTextAtOffset(targetOffset);
            const offset = document.getOffset(startNode.key);
            return targetOffset - offset;
        };
        const getKeyAtOffset = (targetOffset: number) => {
            const textAtOffset = document.getTextAtOffset(targetOffset);
            if (!textAtOffset) {
                return "";
            }
            return textAtOffset.key;
        };
        const highlightRange = ({
            range,
            type = "highlight",
            data
        }: {
            range: [number, number];
            type?: string;
            data?: any;
        }) => {
            return {
                anchorKey: getKeyAtOffset(range[0]),
                anchorOffset: getOffset(range[0]),
                focusKey: getKeyAtOffset(range[1]),
                focusOffset: getOffset(range[1]),
                marks: [{ type: type, data: Data.fromJSON(data) }]
            };
        };
        decorations.push(
            highlightRange({
                range: [7, 10]
            })
        );

        // highlight nodes
        traverse(this.props.txtAST, {
            enter(node) {
                switch (node.type) {
                    case ASTNodeTypes.Link: {
                        console.log("link", node);
                        return decorations.push(
                            highlightRange({
                                range: node.range,
                                type: "link",
                                data: {
                                    href: node.url || ""
                                }
                            })
                        );
                    }
                    case ASTNodeTypes.Header: {
                        return decorations.push(
                            highlightRange({
                                range: node.range,
                                type: "bold"
                            })
                        );
                    }
                    case ASTNodeTypes.Code: {
                        return decorations.push(
                            highlightRange({
                                range: node.range,
                                type: "code"
                            })
                        );
                    }
                    case ASTNodeTypes.Strong: {
                        return decorations.push(
                            highlightRange({
                                range: node.range,
                                type: "bold"
                            })
                        );
                    }
                    case ASTNodeTypes.Emphasis: {
                        return decorations.push(
                            highlightRange({
                                range: node.range,
                                type: "bold"
                            })
                        );
                    }
                    case ASTNodeTypes.CodeBlock: {
                        return decorations.push(
                            highlightRange({
                                range: node.range,
                                type: "code"
                            })
                        );
                    }
                    case ASTNodeTypes.Delete: {
                        return decorations.push(
                            highlightRange({
                                range: node.range,
                                type: "del"
                            })
                        );
                    }
                    case ASTNodeTypes.HtmlBlock: {
                        return decorations.push(
                            highlightRange({
                                range: node.range,
                                type: "code"
                            })
                        );
                    }
                    case ASTNodeTypes.Html: {
                        return decorations.push(
                            highlightRange({
                                range: node.range,
                                type: "code"
                            })
                        );
                    }
                    case ASTNodeTypes.BlockQuote: {
                        return decorations.push(
                            highlightRange({
                                range: node.range,
                                type: "quote"
                            })
                        );
                    }
                    default:
                        return;
                }
            }
        });
        this.props.annotations.forEach(annotation => {
            annotation.messages.forEach(message => {
                decorations.push(
                    highlightRange({
                        range: message.data.range as [number, number],
                        type: "underline",
                        data: message
                    })
                );
            });
        });
        const change = value.change().setValue({ decorations });
        this.setState({ value: change.value });
    }

    // Render the editor.
    render() {
        return (
            <Editor
                readOnly
                style={{
                    whiteSpace: "",
                    lineHeight: 1.5
                }}
                value={this.state.value}
                onChange={this.onChange}
                renderNode={this.renderNode}
                renderMark={this.renderMark}
            />
        );
    }

    renderNode = (props: any) => {
        const { node } = props;
        switch (node.type) {
            default: {
                return;
            }
        }
    };

    // Add a `renderMark` method to render marks.
    renderMark = (props: any) => {
        const onClick = () => {
            console.log("test");
        };
        const mark = props.mark;
        // other type is span
        switch (mark.type) {
            case "code":
                return <code>{props.children}</code>;
            case "bold":
                return <strong>{props.children}</strong>;
            case "italic":
                return <em>{props.children}</em>;
            case "underline": {
                const onClick = () => {
                    console.log(props.mark.toJSON());
                };
                return <u onClick={onClick}>{props.children}</u>;
            }
            case "link": {
                const href = mark.data.get("href");
                return (
                    <a href={href} onClick={event => event.preventDefault()}>
                        {props.children}
                    </a>
                );
            }
            case "quote": {
                return <span style={{ opacity: 0.5 }}>{props.children}</span>;
            }
            case "highlight":
                return (
                    <span style={{ backgroundColor: "#ffeeba" }} onClick={onClick}>
                        {props.children}
                    </span>
                );

            default: {
                return;
            }
        }
    };
}
