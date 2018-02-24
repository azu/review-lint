import * as React from "react";
import { FileList } from "./FileContainer/FileContainer";
import { AnnotationListContainer } from "./AnnotationGroupList/AnnotationListContainer";
import { storeGroup } from "../AppStoreGroup";
import { BaseContainer } from "./BaseContainer";
import { ConvertToAnnotationCollectionUseCase } from "../package/annotation/use-case/ConvertToAnnotationCollectionUseCase";
import { FromResult } from "../package/annotation/AnnotationFactory";
import { AnEditor } from "./FileContainer/AnEditor/AnEditor";

const { parse } = require("markdown-to-ast");

function requireAll(r: any) {
    r.keys().forEach(r);
}

requireAll((require as any).context("./", true, /\.css$/));
const fileAnnotationCollections: FromResult[] = require("./input.json");

export class App extends BaseContainer<typeof storeGroup.state> {
    componentDidMount() {
        this.useCase(new ConvertToAnnotationCollectionUseCase()).executor(useCase =>
            useCase.execute(fileAnnotationCollections)
        );
    }

    render() {
        console.log(this.props.annotation);
        return (
            <div className={"App"}>
                <FileList
                    fileAnnotationCollections={this.props.annotation.collections}
                    render={collection => {
                        return (
                            <div className={"App-file"}>
                                <AnEditor
                                    className={"App-editor"}
                                    text={collection.raw}
                                    parse={parse}
                                    annotations={collection.annotations}
                                    focusAnnotation={this.props.annotation.focusAnnotation}
                                />
                                <div className={"App-annotationList"}>
                                    <AnnotationListContainer
                                        title={"Annotations"}
                                        key={collection.filePath}
                                        annotationCollection={collection}
                                    />
                                </div>
                            </div>
                        );
                    }}
                />
            </div>
        );
    }
}
