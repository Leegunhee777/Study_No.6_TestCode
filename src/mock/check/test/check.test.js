const check = require("../check.js");
//jest mock의 활용에 대한 예제이다.

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    //jest의 mock을 이용하면 간편하게 테스팅할수있음
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccessFunc when predicate is true", () => {
    check(() => true, onSuccess, onFail);
    //check라는 첫번째콜백애서 true가 반환될경우
    //onSuceess의 콜수(calls.length)가 1번은 호출되어야한다를 테스트하는코드임
    expect(onSuccess.mock.calls.length).toBe(1);
    expect(onFail.mock.calls.length).toBe(0);
    //위에 calls.lenth랑 같은 의미임
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledTimes(0);

    //onSuceess의 mock의 calls의 첫번쨰로 호출되는함수의[0] 첫번째인자[0]
    //에는 'yes' 가 들어가야한다도 테스팅가능함
    expect(onSuccess.mock.calls[0][0]).toBe("yes");
    //위에랑 같은 의미임
    expect(onSuccess).toHaveBeenCalledWith("yes");
  });

  it("should call FailFunc when predicate is false", () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledWith("no");
  });
});
