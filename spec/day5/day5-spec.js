import { Drawing } from '../../src/day5/drawing.js';

describe('day 5', () => {
  describe('processInputLine', () => {
    it('should add crates to respective drawing', () => {
      const obj = new Drawing();
      const input = 
`    [D]    `;

      obj.processInputLine(input);
      expect(obj.getStack1().size()).toEqual(0);
      expect(obj.getStack2().size()).toEqual(1);
      expect(obj.getStack3().size()).toEqual(0);
    });
  });

  xdescribe('processInput', () => {
    it('should create the three stacks of crates', () => {
      const input = 
`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

      const obj = processInput(input);
      expect(obj.stack1.size()).toEqual(2);
    });
  });
});