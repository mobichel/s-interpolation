import { Injectable } from '@angular/core';

export enum Templates {
  FatalError = '<span>Illegal Syntax</span>'
}

export class ParseResult {
  private template: string;
  private options: object;

  constructor(template: string = '', options: object = {}) {
      this.template = template;
      this.options = options;
  }

  getTemplate(): string {
      return this.template;
  }

  getOptions(): object {
      return this.options;
  }
}

// TODO: make control types plug-able
const TemplateBuilders = {
  'number': (options) => '<app-number></app-number>',
  'string': (options) => '<app-string></app-string>',
  'range': (options) => '<app-range></app-range>',
  'list': (options) => '<app-list></app-list>',
  'unknown': (options) => {}
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

    template = template.replace(/({[^{}]+})/g, (match: string) => {
      const pattern = match.replace('{', '').replace('}', ''); 
      const parts = pattern.split(':');
      let type = parts[0] || '';
      type = type.toLowerCase();
      const templateBuilder = TemplateBuilders[type] || TemplateBuilders.unknown;
      return templateBuilder(parts);
    });

    return new ParseResult(template);
  }
}
