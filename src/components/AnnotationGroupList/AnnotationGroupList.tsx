import * as React from "react";
import { ReactNode } from "react";
import { FileAnnotationCollection } from "../../domain/Annotation/Annotation";
import * as classnames from "classnames";

export interface AnnotationGroupListProps {
    className?: string;
    fileAnnotationCollections: FileAnnotationCollection[];
    render: (fileAnnotationCollection: FileAnnotationCollection) => ReactNode;
}

export class AnnotationGroupList extends React.Component<AnnotationGroupListProps, {}> {
    render() {
        const list = this.props.fileAnnotationCollections.map(collection => {
            return this.props.render(collection);
        });
        return <div className={classnames("AnnotationGroupList", this.props.className)}>{list}</div>;
    }
}
