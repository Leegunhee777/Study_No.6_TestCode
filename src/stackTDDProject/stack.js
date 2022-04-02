class Stack {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  }
  push(item) {
    //.push는 script 내장함수임
    this.array.push(item);
  }
  pop() {
    if (this.array.length === 0) {
      throw new Error('Stack is Empty');
    }
    //.pop은 script 내장함수임
    return this.array.pop();
  }
  peek() {
    if (this.array.length === 0) {
      throw new Error('Stack is Empty');
    }
    return this.array[this.size() - 1];
  }
}

module.exports = Stack;
