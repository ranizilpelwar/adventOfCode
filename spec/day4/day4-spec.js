import { convert, getOverlappingCount, getResult, getAnyOverlappingCount,
getPart2Result } from "../../src/day4/day4_helpers.js";

describe('day4', () => {
  describe('convert:', () => {
    it('should generate the expected output', () => {
      const input = 
`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

      const output = convert(input);
      
      expect(output).toEqual([
        [2, 4, 6, 8],
        [2, 3, 4, 5],
        [5, 7, 7, 9],
        [2, 8, 3, 7],
        [6, 6, 4, 6],
        [2, 6, 4, 8]
      ]);
    });
  });

  describe('getOverlappingCount', () => {
    it('should return expected count', () => {
    const input= [[2, 4, 6, 8],
      [2, 3, 4, 5],
      [5, 7, 7, 9],
      [2, 8, 3, 7],//yes
      [6, 6, 4, 6],//yes
      [2, 6, 4, 8]];

      expect(getOverlappingCount(input)).toEqual(2);
    });
  });

  describe('getResult', () => {
    it('should parse string and return correct count', () => {
      const input = 
      `2-4,6-8
      2-3,4-5
      5-7,7-9
      2-8,3-7
      6-6,4-6
      2-6,4-8`; 

      expect(getResult(input)).toEqual(2);
    });
  });

  describe('getAnyOverlappingCount', () => {
    it('should return expected count', () => {
    const input= [[2, 4, 6, 8],
      [2, 3, 4, 5],
      [5, 7, 7, 9],//yes
      [2, 8, 3, 7],//yes
      [6, 6, 4, 6],//yes
      [2, 6, 4, 8]];//yes

      expect(getAnyOverlappingCount(input)).toEqual(4);
    });
  });

  describe('getPart2Result', () => {
    it('should parse the string and get the correct result', () => {
      const input = 
      `2-4,6-8
      2-3,4-5
      5-7,7-9
      2-8,3-7
      6-6,4-6
      2-6,4-8`; 

      expect(getPart2Result(input)).toEqual(4);
    });
  });
});