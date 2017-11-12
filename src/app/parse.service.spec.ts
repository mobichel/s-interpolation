import { TestBed, inject } from '@angular/core/testing';

import { ParseService, Templates } from './parse.service';

describe('ParseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParseService]
    });
  });

  it('should be created', inject([ParseService], (service: ParseService) => {
    expect(service).toBeTruthy();
  }));

  describe('parse method', () => {
    it('should return empty string template for empty input', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('');
      
      expect(result).toEqual('');
    }));

    it('should return same string if not braces', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('abcd');
      
      expect(result).toEqual('abcd');
    }));

    it('should return illegal syntax template for single left brace', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('{ abcde ');
      
      expect(result).toEqual(Templates.FatalError);
    }));

    it('should return illegal syntax template for single right brace', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('abcd }');
      
      expect(result).toEqual(Templates.FatalError);
    }));

    it('should return illegal syntax template for unmatching left brace', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('{{ abcde }');
      
      expect(result).toEqual(Templates.FatalError);
    }));

    it('should return illegal syntax template for unmatching right brace', inject([ParseService], (service: ParseService) => {
      const result: string = service.parse('{ abcd }}');
      
      expect(result).toEqual(Templates.FatalError);
    }));
  }); 
});
