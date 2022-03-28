//no_di 는 no dependency injection 라는말
class ProductService {
  constructor(productClient) {
    //클래스 내부에서 스스로의 의존을 결정하고 정의하고 만들어서 사용하는것은
    //의존성 주입의 원칙에 어긋나는 나쁜코드이다.
    //필요한것은 내부적으로 직접만들어서 사용하는것이아니라.외부에서 받아와야한다
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
