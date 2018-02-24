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
        const filteredResults = results.filter(result => {
            return result.messages.length > 0;
        });
        const collections = filteredResults.map(result => convertToFileAnnotationCollection(result));
        this.dispatch(new ConvertToAnnotationCollectionUseCasePayload(collections));
    }
}
