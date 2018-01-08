import * as React from "react";
import { ReactNode } from "react";
import * as classnames from "classnames";
import { AnnotationCollection } from "../../package/annotation/AnnotationCollection";

export interface AnnotationGroupListProps {
    className?: string;
    fileAnnotationCollections: AnnotationCollection[];
    render: (fileAnnotationCollection: AnnotationCollection) => ReactNode;
}

export class AnnotationGroupList extends React.Component<AnnotationGroupListProps, {}> {
    render() {
        const list = this.props.fileAnnotationCollections.map(collection => {
            return this.props.render(collection);
        });
        return <div className={classnames("AnnotationGroupList", this.props.className)}>{list}</div>;
    }
}
