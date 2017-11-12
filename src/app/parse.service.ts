import { Injectable } from '@angular/core';

export enum Templates {
  FatalError = '<span>Illegal Syntax</span>'
}

enum Types { 
  number,
  range,
  list,
  string
};

@Injectable()
export class ParseService {

  constructor() { }

  validate(input: string = '') {
    const LBrace = "{";
    const RBrace = "}";
    const stack = [];
    let valid = true;

    for (let char of input) {
      if (char === LBrace) {
        stack.push(LBrace);
      }
      if (char === RBrace) {
        const matchingBrace = stack.pop();
        if (matchingBrace !== LBrace) {
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
      template = Templates.FatalError;
    }

    const Separator = ":";

    template = template.replace(/({[^{}]+})/g, (match: string) => {
      const pattern = match.replace('{', '').replace('}', '');
      let separatorIdx = pattern.indexOf(Separator);
      if (separatorIdx < 0) {
        separatorIdx = pattern.length;
      }
      let type = pattern.substr(0, separatorIdx).trim();
      if (!(type in Types)) {
        type = 'unknown';
      }
      let config = pattern.substr(separatorIdx + 1, pattern.length);
      return `<${type} config="${config}"></${type}>`;
    });

    return template;
  }
}
