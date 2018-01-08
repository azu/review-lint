import { NullableRepository } from "ddd-base";
import { AnnotationCollection } from "./AnnotationCollection";

export class AnnotationRepository extends NullableRepository<AnnotationCollection> {}

export const annotationRepository = new AnnotationRepository();
