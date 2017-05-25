"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartyaml.plugins");
exports.yamlStringToObject = (yamlStringArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    return plugins.jsYaml.safeLoad(yamlStringArg);
});
exports.objectToYamlString = (objectArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    return plugins.jsYaml.safeDump(objectArg);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRW5DLFFBQUEsa0JBQWtCLEdBQUcsQ0FBTyxhQUFhLEVBQUUsYUFBeUMsRUFBRTtJQUMvRixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDL0MsQ0FBQyxDQUFBLENBQUE7QUFFVSxRQUFBLGtCQUFrQixHQUFHLENBQU8sU0FBUyxFQUFFLGFBQXdDLEVBQUU7SUFDMUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzNDLENBQUMsQ0FBQSxDQUFBIn0=