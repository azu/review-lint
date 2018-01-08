import { ReactNode } from "react";

const React = require("react");

export interface FileContainerProps {
    children: ReactNode[];
}

export const FileContainer = (props: FileContainerProps) => {
    return <div className={"FileContainer"}>{props.children}</div>;
};
