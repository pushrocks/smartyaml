/// <reference types="js-yaml" />
export declare let yamlStringToObject: (yamlStringArg: any, optionsArg?: jsyaml.LoadOptions) => Promise<any>;
export declare let objectToYamlString: (objectArg: any, optionsArg?: jsyaml.DumpOptions) => Promise<string>;
