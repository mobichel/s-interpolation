import { TestBed, inject } from '@angular/core/testing';

import { ParseService } from './parse.service';

describe('ParseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParseService]
    });
  });

  it('should be created', inject([ParseService], (service: ParseService) => {
    expect(service).toBeTruthy();
  }));

  describe('validate method', () => {
    it('should return true for empty string', inject([ParseService], (service: ParseService) => {
      const result: boolean = service.validate('');

      expect(result).toBeTruthy();
    }));

    it('should return true if not braces', inject([ParseService], (service: ParseService) => {
      const result: boolean = service.validate('abcd');

      expect(result).toBeTruthy();
    }));

    it('should return true for matching braces', inject([ParseService], (service: ParseService) => {
      const result: boolean = service.validate('{abcd}');

      expect(result).toBeTruthy();
    }));

    it('should return false for single left brace', inject([ParseService], (service: ParseService) => {
      const result: boolean = service.validate('{ abcde ');

      expect(result).toBeFalsy();
    }));

    it('should return false for single right brace', inject([ParseService], (service: ParseService) => {
      const result: boolean = service.validate('abcd }');

      expect(result).toBeFalsy();
    }));

    it('should return false for unmatching left brace', inject([ParseService], (service: ParseService) => {
      const result: boolean = service.validate('{{ abcde }');

      expect(result).toBeFalsy();
    }));

    it('should return false for unmatching right brace', inject([ParseService], (service: ParseService) => {
      const result: boolean = service.validate('{ abcd }}');

      expect(result).toBeFalsy();
    }));
  });

  describe('escape method', () => {
    it('should return same for empty string', inject([ParseService], (service: ParseService) => {
      const result: string = service.escape('');

      expect(result).toEqual('');
    }));

    it('should return escaped left brace', inject([ParseService], (service: ParseService) => {
      const result: string = service.escape('{ abcd');

      expect(result).toEqual("{{'{'}} abcd");
    }));

    it('should return escaped right brace', inject([ParseService], (service: ParseService) => {
      const result: string = service.escape('abcd }');

      expect(result).toEqual("abcd {{'}'}}");
    }));


    it('should return escaped both braces', inject([ParseService], (service: ParseService) => {
      const result: string = service.escape('{ abcd }');

      expect(result).toEqual("{{'{'}} abcd {{'}'}}");
    }));
  });

  describe('parse method', () => {
    it('should return same for empty input', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('');

      expect(result).toEqual('');
    }));

    it('should return same for simple string', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('abcd efgh');

      expect(result).toEqual('abcd efgh');
    }));

    it('should return escaped string for string with braces', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse("{ abcd }");

      expect(result).toEqual("{{'{'}} abcd {{'}'}}");
    }));

    it('should return number control for string with {number}', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('{number}');

      expect(result).toEqual('<number config=""></number>');
    }));

    it('should return number control with config for string with {number:100}', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('{number:100}');

      expect(result).toEqual('<number config="100"></number>');
    }));

    it('should return string control for string with {string}', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('{string}');

      expect(result).toEqual('<string config=""></string>');
    }));

    it('should return string control with config for string with {string:hello}', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('{string:hello}');

      expect(result).toEqual('<string config="hello"></string>');
    }));

    it('should return list control for string with {list}', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('{list}');

      expect(result).toEqual('<list config=""></list>');
    }));

    it('should return list control with config for string with {list:option1,option2:value}', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('{list:option1,option2:value}');

      expect(result).toEqual('<list config="option1,option2:value"></list>');
    }));

    it('should return range control for string with {range}', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('{range}');

      expect(result).toEqual('<range config=""></range>');
    }));

    it('should return range control with config for string with {range:option1,option2}', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('{range:option1,option2}');

      expect(result).toEqual('<range config="option1,option2"></range>');
    }));
  });
});
