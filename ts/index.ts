import * as plugins from './smartyaml.plugins';

export let yamlStringToObject = async (
  yamlStringArg,
  optionsArg: plugins.jsYaml.LoadOptions = {}
): Promise<any> => {
  return plugins.jsYaml.safeLoad(yamlStringArg);
};

export let objectToYamlString = async (
  objectArg,
  optionsArg: plugins.jsYaml.DumpOptions = {}
): Promise<string> => {
  return plugins.jsYaml.safeDump(objectArg);
};
