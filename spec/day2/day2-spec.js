import { getValue } from "../../src/day2/day2_helpers.js";

describe('day2', () => {
  describe('getValue', () => {
    [{input: '', expected: 0},
    {input: 'X', expected: 1},
    {input: 'Y', expected: 2},
    {input: 'Z', expected: 3}].forEach(({input, expected}) => {
    it('should return correct value for choice', () => {
      expect(getValue(input)).toBe(expected);
    });     
  });
  });
});