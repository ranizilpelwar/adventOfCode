import { Stack } from './stack.js';

export function Drawing() {
  var stack1 = new Stack();
  var stack2 = new Stack();
  var stack3 = new Stack();

  this.getStack1 = function() {
    return stack1;
  }

  this.getStack2 = function() {
    return stack2;
  }

  this.getStack3 = function() {
    return stack3;
  }

  this.processInputLine = function(inputLine) {
    const data = inputLine.split(' ');
    console.log({data});
    if (data[0] !== '') {
      stack1.push(data[0]);
    }
    if (data[1] !== '') {
      stack2.push(data[1]);
    }
    if (data[2] !== '') {
      stack3.push(data[2]);
    }
  }
}
