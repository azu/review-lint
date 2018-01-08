import { Payload, UseCase } from "almin";
import { AnnotationIdentifier } from "../Annotation";

export class FocusAnnotationUseCasePayload extends Payload {
    readonly type = "FocusAnnotationUseCasePayload";

    constructor(public annotationId: AnnotationIdentifier) {
        super();
    }
}

export class FocusAnnotationUseCase extends UseCase {
    execute(annotationId: AnnotationIdentifier) {
        this.dispatch(new FocusAnnotationUseCasePayload(annotationId));
    }
}

export class BlurAnnotationUseCasePayload extends Payload {
    readonly type = "BlurAnnotationUseCasePayload";

    constructor() {
        super();
    }
}

export class BlurAnnotationUseCase extends UseCase {
    execute() {
        this.dispatch(new BlurAnnotationUseCasePayload());
    }
}
