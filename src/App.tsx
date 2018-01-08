import * as React from "react";
import { AnnotationEditor } from "./components/AnnotationEditor/AnnotationEditor";
import { Annotation } from "./components/Annotation";
import { AnnotationList } from "./components/AnnotationList/AnnotationList";

const { parse } = require("markdown-to-ast");
const statResults: Annotation[] = [];

function requireAll(r: any) {
    r.keys().forEach(r);
}

requireAll((require as any).context("./", true, /\.css$/));
[
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
        filePath: "/Users/azu/.ghq/github.com/textlint/textstat/packages/@textstat/textstat/README.md"
    }
].forEach(result => {
    result.messages.forEach(message => {
        statResults.push({
            filePath: result.filePath,
            ruleId: message.ruleId,
            message: message.message,
            index: message.index,
            line: message.line,
            column: message.column,
            severity: message.severity,
            data: message.data
        });
    });
});
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

// Define our app...
export class App extends React.Component {
    render() {
        return (
            <div className={"App"}>
                <AnnotationEditor
                    text={text}
                    parse={parse}
                    annotations={statResults}
                    focusAnnotation={statResults[0]}
                />
                <AnnotationList annotations={statResults} />
            </div>
        );
    }
}
