//add.test.js 는 내가 add.js라는 파일에 한해서 단위테스트를 작성하겠다 명시하는것임
//(형식적으로 문제되는게아니라 관례상 그렇게 사용함)
//jest에서 자동으로 .test로 명시되어있는 파일을 인식하여 자동으로 테스트 시켜줌
const add = require('../add.js')
test('add', () => {
  //테스트 코드 작성!
  expect(add(1, 2)).toBe(3)
})
