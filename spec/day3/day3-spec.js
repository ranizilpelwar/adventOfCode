import { getAllDuplicates, getDuplicates, getPrioritySum, getPriorityValue } from "../../src/day3/day3_helpers.js";

describe('day 3', () => {
  describe('getPriorityValue', () => {
    [
      {input: 'a', expected: 1},
      {input: 'z', expected: 26},
      {input: 'A', expected: 27},
      {input: 'Z', expected: 52},
      {input: 'p', expected: 16},
      {input: 'L', expected: 38},
      {input: 'P', expected: 42},
      {input: 'v', expected: 22},
      {input: 't', expected: 20},
      {input: 's', expected: 19}
    ].forEach(({input, expected}) => {
      it(`for value ${input} it should return ${expected}`, () => {
        expect(getPriorityValue(input)).toEqual(expected);
      });
    });
  });

  describe('getDuplicates', () => {
    [
      {input: '', expected: []},
      {input: 'vJr', expected: []},
      {input: 'vJrwpWtwJgWrhcsFMMfFFhFp', expected: ['p']},
      {input: 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', expected: ['L']},
      {input: 'CrZsJsPPZsGzwwsLwLmpwMDw', expected: ['s']}, 
    ].forEach(({input, expected}) => {
      it(`for a given string ${input}, it should return duplicates as ${JSON.stringify(expected)}`, () => {
        expect(getDuplicates(input)).toEqual(expected);
      });
    });
  });

  describe('getAllDuplicates', () => {
    [
      {input: ['vJrwpWtwJgWrhcsFMMfFFhFp', 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'], expected: ['p', 'L']},
      {input: ['vJrwpWtwJgWrhcsFMMfFFhFp', 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', 'PmmdzqPrVvPwwTWBwg', 'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn', 'ttgJtRGJQctTZtZT', 'CrZsJsPPZsGzwwsLwLmpwMDw'], expected: ['p', 'L', 'P', 'v', 't', 's']}
    ].forEach(({input, expected}) => {
      it('should concat the results', () => {
        const result = getAllDuplicates(input);
        expect(result).toEqual(expected);
      });
    });
  });

  describe('getPrioritySum', () => {
    it('should return expected sum of all priorities of inputs', () => {
      const input = ['p', 'L', 'P', 'v', 't', 's'];

      expect(getPrioritySum(input)).toEqual(157);
    });
  });
});