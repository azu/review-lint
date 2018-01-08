import { Store } from "almin";
import { AnnotationIdentifier } from "./Annotation";
import { FocusAnnotationUseCasePayload } from "./use-case/FocusAnnotationUseCase";
import { AnnotationCollection } from "./AnnotationCollection";
import { ConvertToAnnotationCollectionUseCasePayload } from "./use-case/ConvertToAnnotationCollectionUseCase";

export interface AnnotationState {
    collections: AnnotationCollection[];
    focusAnnotationId?: AnnotationIdentifier;
}

// prev state => new state
export const annotationReducer = (state: AnnotationState, payload: any): AnnotationState => {
    if (payload instanceof FocusAnnotationUseCasePayload) {
        return {
            ...state,
            focusAnnotationId: payload.annotationId
        };
    } else if (payload instanceof ConvertToAnnotationCollectionUseCasePayload) {
        return {
            ...state,
            collections: payload.collections
        };
    }
    return state;
};

export class AnnotationStore extends Store<AnnotationState> {
    state: AnnotationState;

    constructor() {
        super();
        this.state = {
            collections: []
        };
    }

    receivePayload(payload: any) {
        this.setState(annotationReducer(this.state, payload));
    }

    getState() {
        return this.state;
    }
}
