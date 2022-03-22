const fetchProduct = require("../async.js");

describe("Async", () => {
  it("async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      //비동기코드를 처리할떄는 done을사용해야함
      //그래야 jest에서 then을 기다려줬다가 결과를 확인하고, 테스트를 끝낼수있음
      done();
    });
  });

  //위의 방식과 동작은 같지만 return 을 쓰면 더 깔끔하게 처리가능하다.
  //이 방식을 더 선호
  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  //async await 를 통해 promise를 테스팅할수도있음
  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  //try - catch를 이용해서 본코드의 에러 handle 테스트를할수도있음
  it("async-error", async () => {
    try {
      const product = await fetchProduct("error");
    } catch (e) {
      expect(e).toBe("network error");
    }
  });

  //비동기코드의 성공 resolve , 실패 reject도 따로따로!!!!!! 테스팅할수있다.
  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });
  //본코드의 예외처리에러코드가있다면 그것마저도 테스트되어야 coverage 채워진다.
  it("async - reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
