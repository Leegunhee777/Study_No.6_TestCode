//jest mock의 활용에 대한 예제이다.
function check(predicate, onSuccess, onFail) {
  if (predicate()) {
    onSuccess("yes");
  } else {
    onFail("no");
  }
}

module.exports = check;
