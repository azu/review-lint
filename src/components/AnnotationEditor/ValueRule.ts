import { ValueType } from "./AnnotationEditor";

const { Value } = require("slate");
export type ValueType = {
    document: any;
    change(): any;
};
/**
 * text to slate's Value object
 * @param {string} text
 * @returns {ValueType}
 */
export const serialize = (text: string): ValueType => {
    const nodes: any[] = [];
    text.split("\n").forEach(line => {
        nodes.push({
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
                            text: line + "\r" // adjust position by "\r"
                        }
                    ]
                }
            ]
        });
    });

    return Value.fromJSON({
        object: "value",
        document: {
            object: "document",
            data: {},
            nodes: nodes
        }
    });
};

/**
 * slate's Value object to text
 */
export const deserialize = (value: ValueType): string => {
    // console.log(value.toJSON());
    return "";
};
