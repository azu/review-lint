import * as React from "react";
import { AnnotationEditor } from "./components/FileContainer/AnnotationEditor/AnnotationEditor";
import { FileAnnotationCollection } from "./domain/Annotation/Annotation";
import { FileContainer } from "./components/FileContainer/FileContainer";
import { FileHeader } from "./components/FileContainer/FileHeader/FileHeader";
import { AnnotationGroupList } from "./components/AnnotationGroupList/AnnotationGroupList";
import { AnnotationListContainer } from "./components/AnnotationGroupList/AnnotationListContainer";

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
const fileAnnotationCollections: FileAnnotationCollection[] = [
    {
        annotations: [
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
        annotations: [
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

// Define our app...
export class App extends React.Component {
    render() {
        const fileContainerList = fileAnnotationCollections.map(collection => {
            return (
                <FileContainer key={collection.filePath}>
                    <FileHeader title={collection.filePath} />
                    <AnnotationEditor
                        text={collection.raw}
                        parse={parse}
                        annotations={collection.annotations}
                        focusAnnotation={collection.annotations[0]}
                    />
                </FileContainer>
            );
        });
        return (
            <div className={"App"}>
                <div className={"App-file"}>{fileContainerList}</div>
                <div className={"App-annotation"}>
                    <AnnotationGroupList
                        className={"App-annotationGroupList"}
                        fileAnnotationCollections={fileAnnotationCollections}
                        render={fileAnnotationCollection => {
                            return (
                                <AnnotationListContainer
                                    key={fileAnnotationCollection.filePath}
                                    fileAnnotationCollection={fileAnnotationCollection}
                                />
                            );
                        }}
                    />
                </div>
            </div>
        );
    }
}
