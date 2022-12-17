import { convert, getOutcomeScore, getRoundChoice, getRoundScore, getTotalScore, getValue } from "../../src/day2/day2_helpers.js";

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

//Rock     A X
//Paper    B Y
//Scissors C Z
// Score:
    //0 if you lost, 
    //3 if the round was a draw, 
    //and 6 if you won
  describe('getOutcomeScore', () => {
    [
      {input: ['A', 'X'], expected: 3},
      {input: ['A', 'Y'], expected: 6},
      {input: ['A', 'Z'], expected: 0},
      {input: ['B', 'X'], expected: 0},
      {input: ['B', 'Y'], expected: 3},
      {input: ['B', 'Z'], expected: 6},
      {input: ['C', 'X'], expected: 6},
      {input: ['C', 'Y'], expected: 0},
      {input: ['C', 'Z'], expected: 3},
    ].forEach(({input, expected}) => {
      it(`should return correct value for choice ${input[0]}, ${input[1]}`, () => {
        expect(getOutcomeScore(input)).toBe(expected);
      });     
    });
  });

  describe('getRoundScore', () => {
    [
      {input: ['A', 'X'], expected: 4},
      {input: ['A', 'Y'], expected: 8},
      {input: ['A', 'Z'], expected: 3},
    ].forEach(({input, expected}) => {
      it(`should return correct value for choice ${input[0]}, ${input[1]}`, () => {
        expect(getRoundScore(input)).toBe(expected);
      });     
    });
  }); 

  describe('getTotalScore', () => {
    it("should return correct value for choice", () => {
      const input = [['A', 'Y'], ['B', 'X'], ['C', 'Z']];
      expect(getTotalScore(input)).toBe(15);
    });     
  }); 

  describe('convert', () => {
    it("should return correct value", () => {
      const input = 
`A Y
B X
C Z`;
      const expected = [['A', 'Y'], ['B', 'X'], ['C', 'Z']];
      expect(convert(input)).toEqual(expected);
    });     
  }); 

  describe('getRoundChoice', () => {
    //X need to lose
    //Y need to draw
    //Z need to win
    [
      {round: ['A', 'Y'], expected: 'X'},
      {round: ['B', 'X'], expected: 'X'},
      {round: ['C', 'Z'], expected: 'X'}
    ].forEach(({round, expected}) => {
      it(`should return ${expected} selection when round is ${round[0]}, ${round[1]}`, () => {
        const result = getRoundChoice(round);

        expect(result).toEqual(expected);
      });
    });
  });
});
