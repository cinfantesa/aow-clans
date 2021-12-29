export default class Member {
  constructor({id, name, rank, trophies, clan}) {
    this._id = id;
    this._name = name;
    this._rank = rank;
    this._trophies = trophies;
    this._clan = clan;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get rank() {
    return this._rank;
  }

  get trophies() {
    return this._trophies;
  }

  get clan() {
    return this._clan;
  }

  get isGodOfWar() {
    return this._trophies >= 6000;
  }

  get isConqueror() {
    return this._trophies >= 4500 && this._trophies < 6000;
  }

  get isKing() {
    return this._trophies >= 3200 && this._trophies < 4500;
  }

  get isDiamond() {
    return this._trophies >= 2700 && this._trophies < 3200;
  }

  get isPlatinum() {
    return this._trophies >= 2200 && this._trophies < 2700;
  }

  get isGold() {
    return this._trophies >= 1600 && this._trophies < 2200;
  }

  get isSilver() {
    return this._trophies >= 1100 && this._trophies < 1600;
  }

  get isBronze() {
    return this._trophies < 1100;
  }

  get isInactive() {
    return this.isGold || this.isSilver || this.isBronze;
  }
}
