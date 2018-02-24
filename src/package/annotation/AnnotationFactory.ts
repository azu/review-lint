import { ulid } from "ulid";
import { AnnotationCollection, AnnotationCollectionIdentifier } from "./AnnotationCollection";
import { Annotation, AnnotationIdentifier } from "./Annotation";

export class FromResult {
    // DIFFERENCE POINT with kernel
    raw: string;
    // file path
    filePath: string;
    // message
    messages: FromResultMessage[];
}

export class FromResultMessage {
    [index: string]: any;
    id?: string;
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

export function convertToFileAnnotationCollection(result: FromResult): AnnotationCollection {
    const annotations = result.messages.map(message => {
        return new Annotation({
            id: new AnnotationIdentifier(message.id || ulid()),
            ruleId: message.ruleId,
            message: message.message,
            severity: message.severity,
            range: message.data && message.data.range ? message.data.range : [message.index, message.index + 1],
            details: message.data && message.data.details
        });
    });
    return new AnnotationCollection({
        id: new AnnotationCollectionIdentifier(ulid()),
        raw: result.raw,
        filePath: result.filePath,
        annotations: annotations
    });
}
