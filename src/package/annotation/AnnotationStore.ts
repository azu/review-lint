import { Store } from "almin";
import { Annotation, AnnotationIdentifier } from "./Annotation";
import { BlurAnnotationUseCasePayload, FocusAnnotationUseCasePayload } from "./use-case/FocusAnnotationUseCase";
import { AnnotationCollection } from "./AnnotationCollection";
import { ConvertToAnnotationCollectionUseCasePayload } from "./use-case/ConvertToAnnotationCollectionUseCase";

export interface AnnotationStateProps {
    readonly collections: AnnotationCollection[];
    readonly focusAnnotationId?: AnnotationIdentifier;
}

export class AnnotationState {
    readonly collections: AnnotationCollection[];
    readonly focusAnnotationId?: AnnotationIdentifier;

    constructor(props: AnnotationStateProps) {
        this.collections = props.collections;
        this.focusAnnotationId = props.focusAnnotationId;
    }

    get focusAnnotation() {
        let resultAnnotation: Annotation | undefined;
        this.collections.forEach(collection => {
            collection.annotations.forEach(annotation => {
                if (annotation.id.equals(this.focusAnnotationId)) {
                    resultAnnotation = annotation;
                }
            });
        });
        return resultAnnotation;
    }

    reduce(payload: any): AnnotationState {
        if (payload instanceof FocusAnnotationUseCasePayload) {
            return new AnnotationState({
                ...(this as AnnotationStateProps),
                focusAnnotationId: payload.annotationId
            });
        } else if (payload instanceof BlurAnnotationUseCasePayload) {
            return new AnnotationState({
                ...(this as AnnotationStateProps),
                focusAnnotationId: undefined
            });
        } else if (payload instanceof ConvertToAnnotationCollectionUseCasePayload) {
            return new AnnotationState({
                ...(this as AnnotationStateProps),
                collections: payload.collections
            });
        }
        return this;
    }
}

export class AnnotationStore extends Store<AnnotationState> {
    state: AnnotationState;

    constructor() {
        super();
        this.state = new AnnotationState({
            collections: []
        });
    }

    receivePayload(payload: any) {
        this.setState(this.state.reduce(payload));
    }

    getState() {
        return this.state;
    }
}
