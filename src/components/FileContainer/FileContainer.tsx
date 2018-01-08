import { FileHeader } from "./FileHeader/FileHeader";
import { ReactNode } from "react";
import { AnnotationCollection } from "../../package/annotation/AnnotationCollection";

const React = require("react");

export interface FileContainerProps {
    fileAnnotationCollections: AnnotationCollection[];

    render(props: AnnotationCollection): ReactNode;
}

export const FileList = (props: FileContainerProps) => {
    const items = props.fileAnnotationCollections.map(collection => {
        return (
            <div className={"FileContainer"} key={collection.filePath}>
                <FileHeader title={collection.filePath} />
                {props.render(collection)}
            </div>
        );
    });
    return <div className={"FileList"}>{items}</div>;
};
