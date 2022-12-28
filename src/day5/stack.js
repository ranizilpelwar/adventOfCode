export function Stack() {
  var items = [];
  var top = 0;//location of the next element

  this.push = function(element) {
    items[top++] = element;
  }

  this.pop = function() {
    return items[--top];
  }

  this.peek = function() {
    return items[top-1];
  }

  this.size = function() {
    return top;
  }
}