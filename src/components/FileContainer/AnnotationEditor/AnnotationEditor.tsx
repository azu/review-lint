import * as React from "react";
import { traverse } from "txt-ast-traverse";
import { ASTNodeTypes, TxtParentNode } from "@textlint/ast-node-types";
import { Annotation } from "../../../package/annotation/Annotation";
import { deserialize, serialize } from "./ValueRule";

const { Editor } = require("slate-react");
const { Data, Range } = require("slate");
const Source = require("structured-source");
const getOffset = (value: ValueType, targetOffset: number) => {
    const document = value.document;
    console.log("getOffset", targetOffset);
    const startNode = document.getTextAtOffset(targetOffset);
    const offset = document.getOffset(startNode.key);
    return targetOffset - offset;
};
const getKeyAtOffset = (value: ValueType, targetOffset: number) => {
    const document = value.document;
    const textAtOffset = document.getTextAtOffset(targetOffset);
    if (!textAtOffset) {
        return "";
    }
    return textAtOffset.key;
};
const highlightRange = (
    value: ValueType,
    {
        range,
        type = "highlight",
        data
    }: {
        range: number[];
        type?: string;
        data?: any;
    }
): SlateMark => {
    return {
        anchorKey: getKeyAtOffset(value, range[0]),
        anchorOffset: getOffset(value, range[0]),
        focusKey: getKeyAtOffset(value, range[1]),
        focusOffset: getOffset(value, range[1]),
        marks: [{ type: type, data: Data.fromJSON(data) }]
    };
};

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

type SlateMark = {
    anchorKey: string;
    anchorOffset: number;
    focusKey: string;
    focusOffset: number;
    marks: { type: string; data: any }[];
};

export interface AnnotationEditorState {
    value: ValueType;
}

export class AnnotationEditor extends React.Component<AnnotationEditorProps, AnnotationEditorState> {
    // Set the initial value when the app is first constructed.
    private source = new Source(this.props.text);
    state = {
        value: serialize(this.props.text)
    };
    // current highlight mark
    private highlightMark?: SlateMark;

    private refreshEditorWithValue(props: AnnotationEditorProps, value: ValueType) {
        const focusAnnotation = props.focusAnnotation;
        const annotations = props.annotations;
        const decorations: SlateMark[] = [];
        // focus highlight
        if (focusAnnotation) {
            this.highlightMark = highlightRange(value, {
                range: focusAnnotation.range,
                type: "highlight"
            });
            decorations.push(this.highlightMark);
        }
        // highlight nodes
        deserialize(value);
        const txtAST = this.props.parse(this.props.text);
        traverse(txtAST, {
            enter(node) {
                switch (node.type) {
                    case ASTNodeTypes.Link: {
                        return decorations.push(
                            highlightRange(value, {
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
                            highlightRange(value, {
                                range: node.range,
                                type: "bold"
                            })
                        );
                    }
                    case ASTNodeTypes.Code: {
                        return decorations.push(
                            highlightRange(value, {
                                range: node.range,
                                type: "code"
                            })
                        );
                    }
                    case ASTNodeTypes.Strong: {
                        return decorations.push(
                            highlightRange(value, {
                                range: node.range,
                                type: "bold"
                            })
                        );
                    }
                    case ASTNodeTypes.Emphasis: {
                        return decorations.push(
                            highlightRange(value, {
                                range: node.range,
                                type: "bold"
                            })
                        );
                    }
                    case ASTNodeTypes.CodeBlock: {
                        return decorations.push(
                            highlightRange(value, {
                                range: node.range,
                                type: "code"
                            })
                        );
                    }
                    case ASTNodeTypes.Delete: {
                        return decorations.push(
                            highlightRange(value, {
                                range: node.range,
                                type: "del"
                            })
                        );
                    }
                    case ASTNodeTypes.HtmlBlock: {
                        return decorations.push(
                            highlightRange(value, {
                                range: node.range,
                                type: "code"
                            })
                        );
                    }
                    case ASTNodeTypes.Html: {
                        return decorations.push(
                            highlightRange(value, {
                                range: node.range,
                                type: "code"
                            })
                        );
                    }
                    case ASTNodeTypes.BlockQuote: {
                        return decorations.push(
                            highlightRange(value, {
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
        annotations.forEach(annotation => {
            decorations.push(
                highlightRange(value, {
                    range: annotation.range,
                    type: "underline",
                    data: annotation
                })
            );
        });
        const change = value.change().setValue({ decorations });
        return change.value;
    }

    private updateHighlight(value: ValueType, focusAnnotation?: Annotation) {
        // focus highlight
        let currentChange = value.change().removeMark("highlight");
        if (!focusAnnotation) {
            return this.setState({
                value: currentChange.value
            });
        }
        // start <-> next line -1
        const currentLocationStart = this.source.indexToPosition(focusAnnotation.range[0]);
        const startLocation = {
            line: currentLocationStart.line,
            column: 0
        };
        const startIndex = this.source.positionToIndex(startLocation);
        const currentLocationEnd = this.source.indexToPosition(focusAnnotation.range[1]);
        const nextLineLocation = {
            line: currentLocationEnd.line + 1,
            column: 0
        };
        const endIndexPlus1 = this.source.positionToIndex(nextLineLocation);
        const range = [startIndex, endIndexPlus1 ? endIndexPlus1 - 1 : focusAnnotation.range[1]];
        console.log(range);
        this.highlightMark = highlightRange(value, {
            range: range,
            type: "highlight"
        });
        const change = currentChange.addMarkAtRange(
            Range.fromJSON({
                anchorKey: this.highlightMark.anchorKey,
                anchorOffset: this.highlightMark.anchorOffset,
                focusKey: this.highlightMark.focusKey,
                focusOffset: this.highlightMark.focusOffset
            }),
            this.highlightMark.marks[0]
        );
        return this.setState({
            value: change.value
        });
    }

    private scrollIntoViewAnnotation = (value: ValueType, annotation: Annotation) => {
        const range = annotation.range;
        const textAtOffset = value.document.getTextAtOffset(range[0]);
        if (!textAtOffset) {
            return;
        }
        const node = document.querySelector(`[data-key="${textAtOffset.key}"]`);
        if (node) {
            node.scrollIntoView({
                behavior: "auto",
                block: "center",
                inline: "nearest"
            });
        }
    };

    // On change, update the app's React state with the new editor value.
    onChange = ({ value }: { value: ValueType }) => {
        const newValue = this.refreshEditorWithValue(this.props, value);
        this.setState({ value: newValue });
    };

    componentDidMount() {
        const newValue = this.refreshEditorWithValue(this.props, this.state.value);
        this.setState({ value: newValue });
    }

    componentWillReceiveProps(nextProps: AnnotationEditorProps) {
        if (this.props.focusAnnotation !== nextProps.focusAnnotation) {
            if (nextProps.focusAnnotation) {
                this.scrollIntoViewAnnotation(this.state.value, nextProps.focusAnnotation);
            }
            this.updateHighlight(this.state.value, nextProps.focusAnnotation);
        }
        if (this.props.text !== nextProps.text && nextProps.text) {
            const newValue = serialize(nextProps.text);
            this.source = new Source(nextProps.text);
            this.setState({ value: newValue });
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
