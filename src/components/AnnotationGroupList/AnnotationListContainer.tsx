import * as React from "react";
import { Annotation } from "../../package/annotation/Annotation";
import { AnnotationCollection } from "../../package/annotation/AnnotationCollection";
import { BaseContainer } from "../BaseContainer";
import {
    BlurAnnotationUseCase,
    FocusAnnotationUseCase
} from "../../package/annotation/use-case/FocusAnnotationUseCase";

export interface AnnotationListItemProps {
    annotation: Annotation;
    onOpen: (event: React.MouseEvent<any>, annotation: Annotation) => void;
    onClose: (event: React.MouseEvent<any>, annotation: Annotation) => void;
}

export class AnnotationListItem extends React.Component<AnnotationListItemProps, {}> {
    private onClick = (event: React.MouseEvent<any>) => {
        if ((event.currentTarget as any).open) {
            this.props.onClose(event, this.props.annotation);
        } else {
            this.props.onOpen(event, this.props.annotation);
        }
    };

    render() {
        return (
            <li className={"AnnotationListItem"}>
                <details className={"AnnotationListItem-details"} onClick={this.onClick}>
                    <summary>{this.props.annotation.message}</summary>
                    {JSON.stringify(this.props.annotation.details)}
                </details>
            </li>
        );
    }
}

export interface AnnotationListContainerProps {
    title: string;
    annotationCollection: AnnotationCollection;
}

export class AnnotationListContainer extends BaseContainer<AnnotationListContainerProps, {}> {
    private onOpen = (event: React.MouseEvent<any>, annotation: Annotation) => {
        this.useCase(new FocusAnnotationUseCase()).executor(useCase => useCase.execute(annotation.id));
    };
    private onClose = (event: React.MouseEvent<any>, annotation: Annotation) => {
        this.useCase(new BlurAnnotationUseCase()).executor(useCase => useCase.execute());
    };

    render() {
        const fileAnnotationCollection = this.props.annotationCollection;
        const list = fileAnnotationCollection.annotations.map((annotation, index) => {
            return (
                <AnnotationListItem
                    key={annotation.ruleId + index}
                    annotation={annotation}
                    onOpen={this.onOpen}
                    onClose={this.onClose}
                />
            );
        });
        return (
            <div className={"AnnotationListContainer"} key={fileAnnotationCollection.filePath}>
                <header className={"AnnotationListContainer-header"}>
                    <h2 className={"AnnotationListContainer-title"}>{this.props.title}</h2>
                </header>
                <ul className={"AnnotationList"}>{list}</ul>
            </div>
        );
    }
}
