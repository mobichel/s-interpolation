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

  public escape(input: string = '') {
    return input.replace(/{|}/g, (match: string) => {
      return `{{'${match}'}}`;
    });
  }

  public parse(input: string = '') {
    let template = input;
    if (!this.validate(input)) {
      return '';
    }

    template = template.replace(/({[^{}]*})/g, (match: string) => {
      const pattern = match.replace(/{|}/g, '');
      let separatorIdx = pattern.indexOf(":");
      if (separatorIdx < 0) {
        separatorIdx = pattern.length;
      }
      const type = pattern.substr(0, separatorIdx).trim();
      if (type in ControlTypes) {
        let config = pattern.substr(separatorIdx + 1, pattern.length);
        return `<${type} config="${config}"></${type}>`;
      }
      return match;
    });

    return this.escape(template);
  }
}
