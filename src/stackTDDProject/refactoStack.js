//리팩토링을 하더라도 테스트 코드가있기 때문에 안전하게 진행할수있다.
//테스트코드를 작성할땐 디테일한 내부 구현사항을 테스트하는것이 아니기떄문에,
//리펙토링시 내부 디테일한 코드를 리펙토링하여도
//기존 테스트코드만 패스하면 주요기능에 문제가 없기떄문에,
//안전하게 부담없이 리펙토링을 진행할수있다.
class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
  }

  size() {
    return this._size;
  }

  push(item) {
    const node = { item, next: this.head };
    this.head = node;
    this._size++;
  }

  pop() {
    if (this.head === null) {
      throw new Error('Stack is Empty');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.item;
  }

  peek() {
    if (this.head === null) {
      throw new Error('Stack is Empty');
    }
    return this.head.item;
  }
}

module.exports = Stack;
