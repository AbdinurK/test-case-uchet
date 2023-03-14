export default class MockRepository {
  /**
   * @constructor
   * @public
   * @param {HttpClient} http - main Http client
   */
  constructor(http) {
    this.$http = http
  }

  async getProducts() {
    const data = await this.$http.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    console.log(
      '🐞 ~ file: index.js ~ line 6 ~ ProductMock ~ getProducts ~ data',
      data
    )
    return data
  }
}
