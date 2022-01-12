export default class Movement {
  constructor({member, targetClan}) {
    this._member = member;
    this._targetClan = targetClan;
  }

  get member() {
    return this._member;
  }

  get targetClan() {
    return this._targetClan;
  }
}
