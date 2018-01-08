import * as React from "react";
import { FileList } from "./FileContainer/FileContainer";
import { AnnotationGroupList } from "./AnnotationGroupList/AnnotationGroupList";
import { AnnotationListContainer } from "./AnnotationGroupList/AnnotationListContainer";
import { AnnotationEditor } from "./FileContainer/AnnotationEditor/AnnotationEditor";
import { storeGroup } from "../AppStoreGroup";
import { BaseContainer } from "./BaseContainer";
import { ConvertToAnnotationCollectionUseCase } from "../package/annotation/use-case/ConvertToAnnotationCollectionUseCase";
import { FromResult } from "../package/annotation/AnnotationFactory";

const { parse } = require("markdown-to-ast");

function requireAll(r: any) {
    r.keys().forEach(r);
}

requireAll((require as any).context("./", true, /\.css$/));
const text = `# Title
This is text.
This is [link](http://examople.com) \`code\`
- list [link](http://example.com)

> BlockQuote

**STRONG** STRING

\`\`\`
var a = 1;
\`\`\`

text.# Title
This is text.
This is [link](http://examople.com) \`code\`
- list [link](http://example.com)

> BlockQuote

**STRONG** STRING

\`\`\`
var a = 1;
\`\`\`

text.# Title
This is text.
This is [link](http://examople.com) \`code\`
- list [link](http://example.com)

> BlockQuote

**STRONG** STRING

\`\`\`
var a = 1;
\`\`\`

text.# Title
This is text.
This is [link](http://examople.com) \`code\`
- list [link](http://example.com)

> BlockQuote

**STRONG** STRING

\`\`\`
var a = 1;
\`\`\`

text.# Title
This is text.
This is [link](http://examople.com) \`code\`
- list [link](http://example.com)

> BlockQuote

**STRONG** STRING

\`\`\`
var a = 1;
\`\`\`

text.# Title
This is text.
This is [link](http://examople.com) \`code\` This is [link](http://examople.com) \`code\` This is [link](http://examople.com) \`code\` This is [link](http://examople.com) \`code\`
- list [link](http://example.com)

> BlockQuote

**STRONG** STRING

\`\`\`
var a = 1;
\`\`\`

text.`;
const fileAnnotationCollections: FromResult[] = [
    {
        messages: [
            {
                type: "lint",
                ruleId: "file-size",
                message: "File size in the document",
                index: 0,
                line: 1,
                column: 1,
                severity: 2,
                data: {
                    message: "File size in the document",
                    range: [22, 27],
                    details: {
                        "File Size": "851 B"
                    }
                }
            },
            {
                type: "lint",
                ruleId: "file-size",
                message: "h!",
                index: 0,
                line: 1,
                column: 1,
                severity: 2,
                data: {
                    message: "70-75",
                    range: [70, 75],
                    details: {
                        "File Size": "851 B"
                    }
                }
            },

            {
                type: "lint",
                ruleId: "file-size",
                message: "100, 120!",
                index: 0,
                line: 1,
                column: 1,
                severity: 2,
                data: {
                    message: "100, 120",
                    range: [100, 120],
                    details: {
                        "File Size": "851 B"
                    }
                }
            }
        ],
        raw: text,
        filePath: "/Users/azu/.ghq/github.com/textlint/textstat/packages/@textstat/textstat/README.md"
    },
    {
        messages: [
            {
                type: "lint",
                ruleId: "file-size",
                message: "File size in the document",
                index: 0,
                line: 1,
                column: 1,
                severity: 2,
                data: {
                    message: "File size in the document",
                    range: [22, 27],
                    details: {
                        "File Size": "851 B"
                    }
                }
            },
            {
                type: "lint",
                ruleId: "file-size",
                message: "h!",
                index: 0,
                line: 1,
                column: 1,
                severity: 2,
                data: {
                    message: "70-75",
                    range: [70, 75],
                    details: {
                        "File Size": "851 B"
                    }
                }
            },

            {
                type: "lint",
                ruleId: "file-size",
                message: "100, 120!",
                index: 0,
                line: 1,
                column: 1,
                severity: 2,
                data: {
                    message: "100, 120",
                    range: [100, 120],
                    details: {
                        "File Size": "851 B"
                    }
                }
            }
        ],
        raw: text,
        filePath: "/Users/azu/.ghq/github.com/tes/README.md"
    }
];

export class App extends BaseContainer<typeof storeGroup.state> {
    componentWillMount() {
        this.useCase(new ConvertToAnnotationCollectionUseCase()).executor(useCase =>
            useCase.execute(fileAnnotationCollections)
        );
    }

    render() {
        return (
            <div className={"App"}>
                <div className={"App-file"}>
                    <FileList
                        fileAnnotationCollections={this.props.annotation.collections}
                        render={collection => {
                            return (
                                <AnnotationEditor
                                    text={collection.raw}
                                    parse={parse}
                                    annotations={collection.annotations}
                                    focusAnnotation={collection.annotations[0]}
                                />
                            );
                        }}
                    />
                </div>
                <div className={"App-annotation"}>
                    <AnnotationGroupList
                        className={"App-annotationGroupList"}
                        fileAnnotationCollections={this.props.annotation.collections}
                        render={fileAnnotationCollection => {
                            return (
                                <AnnotationListContainer
                                    key={fileAnnotationCollection.filePath}
                                    annotationCollection={fileAnnotationCollection}
                                />
                            );
                        }}
                    />
                </div>
            </div>
        );
    }
}
