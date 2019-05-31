export interface Controller {
    fileName: "";
    methods: {
        [methodName: string]: {
            responseTs: string[];
        };
    };
}
export interface ApiIndex {
}
export declare function genApiTsIndex({ tsConfig, apiDir, apiSuffix }: {
    apiDir: string;
    tsConfig: string;
    apiSuffix: string;
}): {};
