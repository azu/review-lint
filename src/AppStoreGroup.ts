import { StoreGroup } from "almin";
import { FileStore } from "./store/FileStore";
import { AnnotationStore } from "./package/annotation/AnnotationStore";

export const storeGroup = new StoreGroup({
    file: new FileStore(),
    annotation: new AnnotationStore()
});
