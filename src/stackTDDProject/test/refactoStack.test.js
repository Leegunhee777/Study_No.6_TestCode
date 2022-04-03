const Stack = require('../refactoStack.js');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty at First', () => {
    expect(stack.size()).toBe(0);
  });

  it('allows to push Item', () => {
    stack.push('item1');
    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('throws an error if stack is Empty', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is Empty');
    });
    it('returns the last pushed item and remove it from the stack', () => {
      stack.push('item2');
      stack.push('item3');
      expect(stack.pop()).toBe('item3');
      expect(stack.size()).toBe(1);
    });
  });

  //peek은 옅보다 라는 뜻이있음
  describe('peek', () => {
    it('throws an error if stack is Empty', () => {
      //아무것도 볼게없는데 보려하는 경우 에러테스트
      expect(() => {
        stack.peek();
      }).toThrow('Stack is Empty');
    });

    it('returns the last pushed item but keeps it in the stack', () => {
      stack.push('item2');
      stack.push('item3');
      expect(stack.peek()).toBe('item3');
      expect(stack.size()).toBe(2);
    });
  });
});
