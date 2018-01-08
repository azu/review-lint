import * as React from "react";
import * as path from "path";
import { Annotation } from "../../package/annotation/Annotation";
import { AnnotationCollection } from "../../package/annotation/AnnotationCollection";

export interface AnnotationListItemProps {
    annotation: Annotation;
}

export class AnnotationListItem extends React.Component<AnnotationListItemProps, {}> {
    render() {
        return (
            <li className={"AnnotationListItem"}>
                <details className={"AnnotationListItem-details"}>
                    <summary>{this.props.annotation.message}</summary>
                    {JSON.stringify(this.props.annotation.details)}
                </details>
            </li>
        );
    }
}

export interface AnnotationListContainerProps {
    annotationCollection: AnnotationCollection;
}

export class AnnotationListContainer extends React.Component<AnnotationListContainerProps, {}> {
    render() {
        const fileAnnotationCollection = this.props.annotationCollection;
        const list = fileAnnotationCollection.annotations.map((annotation, index) => {
            return <AnnotationListItem key={annotation.ruleId + index} annotation={annotation} />;
        });
        return (
            <div className={"AnnotationListContainer"} key={fileAnnotationCollection.filePath}>
                <header className={"AnnotationListContainer-header"}>
                    <h2 className={"AnnotationListContainer-title"}>
                        {path.basename(fileAnnotationCollection.filePath)}
                    </h2>
                </header>
                <ul className={"AnnotationList"}>{list}</ul>
            </div>
        );
    }
}
