import * as React from "react";
import { traverse } from "txt-ast-traverse";
import { ASTNodeTypes, TxtParentNode } from "@textlint/ast-node-types";
import { Annotation } from "../../../package/annotation/Annotation";
import { deserialize, serialize } from "./ValueRule";

const { Editor } = require("slate-react");
const { Data } = require("slate");

export type ValueType = {
    document: any;
    change(): any;
    toJSON(): object;
};

export interface AnnotationEditorProps {
    text: string;

    parse(text: string): TxtParentNode;

    annotations: Annotation[];
    // Focus Annotation
    focusAnnotation?: Annotation;
}

export class AnnotationEditor extends React.Component<AnnotationEditorProps> {
    // Set the initial value when the app is first constructed.
    state = {
        value: serialize(this.props.text)
    };

    private refreshEditorWithValue(value: ValueType) {
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
            range: number[];
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

        // focus highlight
        if (this.props.focusAnnotation) {
            decorations.push(
                highlightRange({
                    range: this.props.focusAnnotation.range,
                    type: "highlight"
                })
            );
        }

        // highlight nodes
        deserialize(value);
        const txtAST = this.props.parse(this.props.text);
        traverse(txtAST, {
            enter(node) {
                switch (node.type) {
                    case ASTNodeTypes.Link: {
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
            decorations.push(
                highlightRange({
                    range: annotation.range,
                    type: "underline",
                    data: annotation
                })
            );
        });
        const change = value.change().setValue({ decorations });
        return change.value;
    }

    private scrollIntoViewAnnotation = (annotation: Annotation) => {
        const range = annotation.range;
        const textAtOffset = this.state.value.document.getTextAtOffset(range[0]);
        if (!textAtOffset) {
            return;
        }
        const node = document.querySelector(`[data-key="${textAtOffset.key}"]`);
        if (node) {
            node.scrollIntoView();
        }
    };

    // On change, update the app's React state with the new editor value.
    onChange = ({ value }: { value: ValueType }) => {
        const newValue = this.refreshEditorWithValue(value);
        this.setState({ value: newValue });
    };

    componentDidMount() {
        const newValue = this.refreshEditorWithValue(this.state.value);
        this.setState({ value: newValue });
    }

    componentWillReceiveProps(nextProps: AnnotationEditorProps) {
        if (this.props.focusAnnotation !== nextProps.focusAnnotation && nextProps.focusAnnotation) {
            this.scrollIntoViewAnnotation(nextProps.focusAnnotation);
        }
    }

    // Render the editor.
    render() {
        return (
            <div className={"AnnotationEditor"}>
                <Editor
                    value={this.state.value}
                    onChange={this.onChange}
                    renderNode={this.renderNode}
                    renderMark={this.renderMark}
                />
            </div>
        );
    }

    renderNode = (props: any) => {
        const { node } = props;
        switch (node.type) {
            case "linebreak":
                return <br />;
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
                return (
                    <span
                        style={{
                            borderBottom: "2px solid #ff3333"
                        }}
                    >
                        {props.children}
                    </span>
                );
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
