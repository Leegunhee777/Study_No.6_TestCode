const Calculator = require('../calculator.js')

//이런식으로 노가다성으로 적을수도있지만 관련된 describe로 관련 테스트들을 묶어서 적을수도있음
// test('add',()=>{})
// test('sub',()=>{})

// describe('Calculator', () => {
//     //각각의 it내부의 테스트 코드는 절대연관되지않게 독립적으로 만드는것이 중요하다.
//     // 어?! 안에 new Calculator()가중복되네?
//     //그럼 밖에다 const cal = new Calcularot()를 써야 효율적은거아님?? ㄴㄴ!!! 무조건 각각의 내부가
//     //독립적으로 작성되어야함
//     //그렇다고 해서 매번 new Calculator()를 적기엔 너무 무식하지 않아요??
//     //그래서 beforeEach: 각각의 it내부테스트가 실행되기 전에 발동됨
//     //와 afterEach: 각각의 it 내부테스트가 실행되고난후에 발동됨
//     // or beforeAll: 테스트코드가 시작하기이전에 1번발동됨
//     //afterAll: 테스트코드가 전부 끝나고 1번발동됨 를 사용하면됨!!!
//   it('inits with 0', () => {
//     //테스트 코드 작성
//     const cal = new Calculator()
//     expect(cal.value).toBe(0)
//   })

//   it('sets', () => {
//     const cal = new Calculator()
//     cal.set(9)

//     expect(cal.value).toBe(9)
//   })
// })

describe('Calculator', () => {
  it('inits with 0', () => {
    //테스트 코드 작성
    const cal = new Calculator()
    expect(cal.value).toBe(0)
  })

  it('sets', () => {
    const cal = new Calculator()
    cal.set(9)

    expect(cal.value).toBe(9)
  })
})
