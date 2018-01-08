export interface Annotation {
    [index: string]: any;

    ruleId: string;
    message: string;
    index: number;
    line: number;
    column: number;
    severity: number;
    data: {
        [index: string]: any;
        range: number[];
        details: any;
    };
}

export interface FileAnnotationCollection {
    raw: string;
    filePath: string;
    annotations: Annotation[];
}
