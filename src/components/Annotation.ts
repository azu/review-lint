export interface Annotation {
    [index: string]: any;
    filePath: string;
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
