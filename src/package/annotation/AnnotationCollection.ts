import { Entity, Identifier } from "ddd-base";
import { Annotation } from "./Annotation";

export class AnnotationCollectionIdentifier extends Identifier<string> {}

export interface AnnotationCollectionArgs {
    id: AnnotationCollectionIdentifier;
    raw: string;
    filePath: string;
    annotations: Annotation[];
}

export class AnnotationCollection extends Entity<AnnotationCollectionIdentifier> {
    raw: string;
    filePath: string;
    annotations: Annotation[];

    constructor(args: AnnotationCollectionArgs) {
        super(args.id);
        this.raw = args.raw;
        this.filePath = args.filePath;
        this.annotations = args.annotations;
    }
}
