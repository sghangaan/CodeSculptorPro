import parse from "./syntax.js";
import { lexical, lex } from "./lexical.js";

function analyze(input, isFile) {
  if (parse(lexical(lex(input, isFile)))) {
    input = lex(input);
    if (input.length === 3) return true;
    try {
      const dataType = input[0];
      const value = input[3];

      if (
        dataType === "int" &&
        !value.includes(".") &&
        !value.includes("'") &&
        !value.includes('"')
      )
        return true;
      else if (
        (dataType === "double" || dataType === "float") &&
        value.includes(".") &&
        !value.includes("'") &&
        !value.includes('"')
      )
        return true;
      else if (dataType === "String" && value.includes('"')) return true;
      else if (
        dataType === "boolean" &&
        (value.includes("true") || value.includes("false")) &&
        !value.includes(".") &&
        !value.includes("'") &&
        !value.includes('"')
      )
        return true;
      else if (dataType === "char" && value.length === 3 && value.includes("'"))
        return true;
    } catch (e) {
      return false;
    }
  }
  return false;
}

export default analyze;
