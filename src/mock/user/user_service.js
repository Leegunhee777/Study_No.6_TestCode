class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      //만약 네트워크관심사인 userClient를 따로 분리하지않고,
      //UserService클래스 안에서
      //     return fetch('http://example.com/login/id+password').then(response =>
      //   response.json() 직접선언하면 테스트하기가 좋지않다. 네트워크에 의존적이게 되기 때문이다.
      return this.userClient
        .login(id, password)
        .then(data => (this.isLogedIn = true));
    }
  }
}

module.exports = UserService;
