import * as React from "react";

export interface FileHeaderProps {
    title: string;
}

export class FileHeader extends React.Component<FileHeaderProps, {}> {
    render() {
        return (
            <header className={"FileHeader"}>
                <h1 className={"FileHeader-title"}>{this.props.title}</h1>
            </header>
        );
    }
}
