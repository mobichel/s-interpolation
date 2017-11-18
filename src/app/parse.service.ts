import { Injectable } from '@angular/core';

enum ControlTypes {
  number,
  range,
  list,
  string
};

@Injectable()
export class ParseService {

  constructor() { }

  public validate(input: string = '') {
    const stack = [];
    let valid = true;

    for (let char of input) {
      if (char === "{") {
        stack.push("{");
      }
      if (char === "}") {
        const matchingBrace = stack.pop();
        if (matchingBrace !== "{") {
          valid = false;
          break;
        }
      }
    }

    valid = valid && stack.length === 0;

    return valid;
  }

  public parse(input: string = '') {
    let template = input;
    if (!this.validate(input)) {
      return '';
    }

    const Separator = ":";

    template = template.replace(/({[^{}]+})/g, (match: string) => {
      const pattern = match.replace(/{|}/g, '');
      let separatorIdx = pattern.indexOf(Separator);
      if (separatorIdx < 0) {
        separatorIdx = pattern.length;
      }
      let type = pattern.substr(0, separatorIdx).trim();
      if (type in ControlTypes) {
        let config = pattern.substr(separatorIdx + 1, pattern.length);
        return `<${type} config="${config}"></${type}>`;
      }
      return `<span>{{"${match}"}}</span>`;
    });

    return template;
  }
}
