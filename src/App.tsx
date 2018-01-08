import * as React from "react";
import { Annotation, AnnotationEditor, ValueType } from "./components/AnnotationEditor/AnnotationEditor";

const { Value } = require("slate");
const { parse } = require("markdown-to-ast");
const statResults: Annotation[] = [
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
                    range: [0, 20],
                    details: {
                        "File Size": "851 B"
                    }
                }
            }
        ],
        filePath: "/Users/azu/.ghq/github.com/textlint/textstat/packages/@textstat/textstat/README.md"
    }
];
const text = `# Title
This is text.
This is [link](http://examople.com) \`code\`
- list [link](http://example.com)

> BlockQuote

**STRONG** STRING

\`\`\`
var a = 1;
\`\`\`

text.`;
const txtAST = parse(text);
const createValue = (text: string): ValueType => {
    return Value.fromJSON({
        object: "value",
        document: {
            object: "document",
            data: {},
            nodes: text.split("\n").map(line => {
                return {
                    type: "line",
                    object: "block",
                    isVoid: false,
                    data: {},
                    nodes: [
                        {
                            object: "text",
                            leaves: [
                                {
                                    object: "leaf",
                                    text: line + "\n"
                                }
                            ]
                        }
                    ]
                };
            })
        }
    });
};
const initialValue = createValue(text);

// Define our app...
export class App extends React.Component {
    render() {
        return <AnnotationEditor value={initialValue} txtAST={txtAST} annotations={statResults} />;
    }
}
