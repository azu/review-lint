/// <reference path="../../../../node_modules/monaco-editor/monaco.d.ts" />
import * as React from "react";
import * as classnames from "classnames";

const ResizeObserver = require("react-resize-observer").default;
const StructureSource = require("structured-source");
declare namespace StructuredSource {
    interface SourcePosition {
        // Line number starts with 1.
        line: number;
        // Column number starts with 0.
        column: number;
    }

    interface SourceLocation {
        start: SourcePosition;
        end: SourcePosition;
    }
}

declare class StructuredSource {
    /**
     * @param source - source code text.
     */
    constructor(source: string);

    locationToRange(loc: StructuredSource.SourceLocation): [number, number];

    rangeToLocation(range: [number, number]): StructuredSource.SourceLocation;

    positionToIndex(pos: StructuredSource.SourcePosition): number;

    indexToPosition(index: number): StructuredSource.SourcePosition;
}

import MonacoEditor from "react-monaco-editor";
import { Annotation } from "../../../package/annotation/Annotation";
import { TxtParentNode } from "@textlint/ast-node-types";

export interface AnEditorProps {
    className?: string;
    text: string;

    parse(text: string): TxtParentNode;

    annotations: Annotation[];
    // Focus Annotation
    focusAnnotation?: Annotation;
}

/**
 * Ensure that a given value is a positive value.
 * @param {number|undefined} value The value to check.
 * @param {number} defaultValue The default value which is used if the `value` is undefined.
 * @returns {number} The positive value as the result.
 */
function ensurePositiveInt(value: number, defaultValue: number) {
    return Math.max(1, (value !== undefined ? value : defaultValue) | 0);
}

/**
 * Convert a message of ESLint to a marker of MonacoEditor.
 */
function messageToMarker(source: StructuredSource, message: Annotation): monaco.editor.IMarkerData {
    const start = source.indexToPosition(message.range[0]);
    const end = source.indexToPosition(message.range[1]);
    const startLineNumber = ensurePositiveInt(start.line, 1);
    const startColumn = ensurePositiveInt(start.column + 1, 1);
    const endLineNumber = ensurePositiveInt(end.line, start.line);
    const endColumn = ensurePositiveInt(end.column + 1, start.column + 1 + 1);
    return {
        severity: monaco.Severity.Error,
        source: "textlint",
        message: `${message.message} (${message.ruleId || "FATAL"})`,
        startLineNumber,
        startColumn,
        endLineNumber,
        endColumn
    };
}

export class AnEditor extends React.PureComponent<AnEditorProps> {
    private component: {
        editor: monaco.editor.ICodeEditor;
    } | null;

    private monaco: typeof monaco;
    private source: StructuredSource;

    constructor(props: AnEditorProps) {
        super(props);
        this.source = new StructureSource(props.text);
    }

    editorDidMount = (editor: monaco.editor.ICodeEditor, monacoModule: typeof monaco) => {
        this.monaco = monacoModule;
        editor.focus();
        this.updateMarkers(this.props.annotations);
    };

    onChange = (newValue: string, event: monaco.editor.IModelContentChangedEvent) => {
        this.source = new StructureSource(newValue);
        console.log("onChange", newValue, event);
    };

    focusAnnotation = (annotation: Annotation) => {
        if (!this.component) {
            return;
        }
        const marker = messageToMarker(this.source, annotation);
        this.component.editor.setScrollPosition({
            scrollTop: marker.startLineNumber,
            scrollLeft: marker.startColumn
        });
        this.component.editor.setSelection(marker);
        this.component.editor.focus();
    };
    updateMarkers = (messages: Annotation[]) => {
        if (!this.component) {
            return;
        }
        const model = this.component.editor.getModel();
        const id = this.component.editor.getId();
        const markers = messages.map(message => messageToMarker(this.source, message));
        this.monaco.editor.setModelMarkers(model, id, markers);
    };

    private updateLayout = () => {
        if (!this.component) {
            return;
        }
        this.component.editor.layout();
    };

    render() {
        const code = this.props.text;
        const options: monaco.editor.IEditorOptions = {
            wordWrap: "wordWrapColumn",
            selectOnLineNumbers: true
        };
        return (
            <div className={classnames("AnEditor", this.props.className)}>
                <ResizeObserver onResize={this.updateLayout} />
                <MonacoEditor
                    ref={c => (this.component = c)}
                    width="100%"
                    height="100%"
                    language="markdown"
                    theme="vs-dark"
                    value={code}
                    options={options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                />
            </div>
        );
    }

    componentDidUpdate(prevProps: AnEditorProps) {
        if (this.props.focusAnnotation && this.props.focusAnnotation !== prevProps.focusAnnotation) {
            this.focusAnnotation(this.props.focusAnnotation);
        }
    }
}
