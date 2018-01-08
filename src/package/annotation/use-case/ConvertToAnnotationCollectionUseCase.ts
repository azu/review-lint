import { Payload, UseCase } from "almin";
import { convertToFileAnnotationCollection, FromResult } from "../AnnotationFactory";
import { AnnotationCollection } from "../AnnotationCollection";

export class ConvertToAnnotationCollectionUseCasePayload extends Payload {
    readonly type = "ConvertToAnnotationCollectionUseCasePayload";

    constructor(public collections: AnnotationCollection[]) {
        super();
    }
}

export class ConvertToAnnotationCollectionUseCase extends UseCase {
    execute(results: FromResult[]) {
        const collections = results.map(result => convertToFileAnnotationCollection(result));
        this.dispatch(new ConvertToAnnotationCollectionUseCasePayload(collections));
    }
}
