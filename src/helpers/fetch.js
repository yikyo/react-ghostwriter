export default class Fetch {
  constructor() {
    this.methods = ['GET', 'POST', 'PUT', 'DELETE'];
  }

  static get() {
    console.log(this._request);
  }
}
