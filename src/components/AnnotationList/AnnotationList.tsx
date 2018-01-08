import * as React from "react";
import { Annotation } from "../Annotation";

export interface AnnotationListItemProps {
    annotation: Annotation;
}

export class AnnotationListItem extends React.Component<AnnotationListItemProps, {}> {
    render() {
        return (
            <li>
                {this.props.annotation.message}
                {JSON.stringify(this.props.annotation.data.details)}
            </li>
        );
    }
}

export interface AnnotationListProps {
    annotations: Annotation[];
}

export class AnnotationList extends React.Component<AnnotationListProps, {}> {
    render() {
        const list = this.props.annotations.map((annotation, index) => {
            return <AnnotationListItem key={annotation.ruleId + index} annotation={annotation} />;
        });
        return (
            <div className={"AnnotationListContainer"}>
                <ul className={"AnnotationList"}>{list}</ul>
            </div>
        );
    }
}
