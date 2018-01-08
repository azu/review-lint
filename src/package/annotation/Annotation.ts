import { Entity, Identifier } from "ddd-base";

export class AnnotationIdentifier extends Identifier<string> {}

export interface AnnotationArgs {
    id: AnnotationIdentifier;
    ruleId: string;
    message: string;
    severity: number;
    range: number[];
    details: any;
}

export class Annotation extends Entity<AnnotationIdentifier> {
    id: AnnotationIdentifier;
    ruleId: string;
    message: string;
    severity: number;
    range: number[];
    details: any;

    constructor(args: AnnotationArgs) {
        super(args.id);
        this.ruleId = args.ruleId;
        this.message = args.message;
        this.severity = args.severity;
        this.range = args.range;
        this.details = args.details;
    }
}
