//mock을 사용하는것이아닌 stub를 통해 test를 작성하는방법
//network의 영향을 고려하지 않는 올바른 테스팅
class StubProductClient {
  async fetchItems() {
    return [
      { item: 'milk', available: true },
      { item: 'banana', available: false },
    ];
  }
}

module.exports = StubProductClient;
