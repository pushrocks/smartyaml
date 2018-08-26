import { expect, tap } from '@pushrocks/tapbundle';

import * as smartyaml from '../ts/index';

let yamlString = `someKey: someValue
someKey2: someValue2
`;

tap.test('should convert yaml string to object', async () => {
  let myObject = await smartyaml.yamlStringToObject(yamlString);
  expect(myObject.someKey).to.equal('someValue');
  expect(myObject.someKey2).to.equal('someValue2');
});

tap.test('should convert an object to a string', async () => {
  let myObject = await smartyaml.yamlStringToObject(yamlString);
  let myString = await smartyaml.objectToYamlString(myObject);
  expect(myString).to.equal(yamlString);
});

// test some behaviours
tap.test('should allow dots in key', async () => {
  let testString = `myKey.with.dots: some`;
  let testObject = await smartyaml.yamlStringToObject(testString);
  expect(testObject['myKey.with.dots']).to.equal('some');
});

tap.start();
