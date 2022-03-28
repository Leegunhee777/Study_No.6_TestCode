//product폴더내의 테스트 코드는 mock를 사용한 반면
//productRefacto폴더내의 테스트 코드는 stub를 사용한것이다.
//클래스를 인터페이스와 함께 통쨰로 구현해놓는게 stub방식임
const ProductService = require("../product_service_di.js");
const StubProductClient = require("./stub_product_client.js");

describe("ProductService - Stub", () => {
  let productService;
  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: "milk", available: true }]);
  });
});
