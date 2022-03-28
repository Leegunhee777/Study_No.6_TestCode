const ProductClient = require("../product_client.js");
const ProductService = require("../product_service_no_di.js");

// describe("ProductService", () => {
//   let productService;
//   beforeEach(() => {
//     // 그냥 단순히 mock 사용안하고 ProductService 끌어와 단위테스트를 이딴식으로 작성하면 문제가 있다!!
//     // why? 딘위테스트는 모듈간에 상호작용이있으면안되고 딱! 특정 단위 하나만 테스트해야한다.
//     // 헌데 그냥 테스트하게되면 ProductService안에서 ProductClient를 사용하니까
//     // productService를 사용하면 우리가 의도하지 않았더라도 ProductClient의 로직이 사용된다.
//     // 그래서 ProductClient의 로직에 문제가 생길경우 productService 테스트결과에 영향을 끼칠수있게되고
//     // 이는 올바른 단위테스트가아니게된다.
//     //그래서 의존하지 않게 하기위해
//     //ProductClient 자체를 mock하여 사용하여 해결할수있다.
//     productService = new ProductService();
//   });
// });

//해결법은 아래와같다 ProductService내부에 ProductClient가 사용되므로,
//서로 의존되게 하면서 테스트하면안된다.
//그래서 ProductClient를 mock으로 만들어서 해당 클래스의 로직을 mock으로 만들어 테스팅하면
//위에서 설명한 문제점을 해결할수있다.
//1. jest.mock("../product_client.js");
//:ProductClient class 를 mock 화한다.
//2.  const fetchItems = jest.fn(async () => [
//     { item: "milk", available: true },
//     { item: "banana", available: false },
//   ]);
//: ProductClient안에서 사용되는 함수를 만들어 mock 화한다.
//3. mock화 된 ProductClient클래스에  mockImplementation api를 사용하여, mock화된 ProductClient클래스에
//fetchItems를 심어준다.
//그럼 의존때문에 생긴 단위테스트의 문제점을 해결할수있게된다.

//이아래코드를 써줘야.mockImplementation 함수를 쓸수있게됨,
//.mockImplementation은 진짜 ProductClient와 mock을 연결해주는 함수임
//테스트코드 작성을위해 실제 ProductClient를 끌어다 가져와서
//여기서만 mock화해서 실제를 대체하여 사용한다는말임
//그럼 productService.fetchAvailableItems() 내부에서 사용되는
//ProductClient도 실제 ProductClient가 사용되는것이아니라
//여기서 끌어 가져와 mock화한 ProductClient로 적용되어 테스팅된다
jest.mock("../product_client.js"); //모듈 전체를 mock을 해준거임

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "milk", available: true },
    { item: "banana", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems: fetchItems, //이름이 동일하니 fetchItems 하나만 적어도 같은 의미임
    };
  });
  let productService;
  beforeEach(() => {
    productService = new ProductService();
    //원래는
    //fetchItems.mockClear()
    //ProductClient.mockClear()
    //를통해 우리가 생성한 mock도 매 테스트마다 초기화를해주는 코드가 필요하지만 jest.config.js 에서
    //mock을 매 테스트마다 clear해주는 option을 설정했기떄문에(  clearMocks: true,), 수동으로 초기화안해줘도됨
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: "milk", available: true }]);
  });
});
