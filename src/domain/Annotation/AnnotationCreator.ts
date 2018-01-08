import { FileAnnotationCollection } from "./Annotation";

export class FromResult {
    // DIFFERENCE POINT with kernel
    raw: string;
    // file path
    filePath: string;
    // message
    messages: FromResultMessage[];
}

export class FromResultMessage {
    // Rule Id
    ruleId: string;
    message: string;
    // optional data
    data?: any;
    // FixCommand
    fix?: {
        text: string;
        range: [number, number];
    };
    // location info
    // Text -> AST TxtNode(0-based columns) -> textlint -> TextlintMessage(**1-based columns**)
    line: number; // start with 1
    column: number; // start with 1
    // indexed-location
    index: number; // start with 0
    // Severity Level
    // See src/shared/type/SeverityLevel.js
    severity: number;
}

export function convertToFileAnnotationCollection(result: FromResult): FileAnnotationCollection {
    const annotations = result.messages.map(message => {
        return {
            filePath: result.filePath,
            ruleId: message.ruleId,
            message: message.message,
            index: message.index,
            line: message.line,
            column: message.column,
            severity: message.severity,
            data: message.data
        };
    });
    return {
        raw: result.raw,
        filePath: result.filePath,
        annotations: annotations
    };
}
