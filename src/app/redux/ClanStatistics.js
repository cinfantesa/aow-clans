export default class ClanStatistics {
  constructor({members}) {
    this._godOfWarMembers = this._calculateGoW(members);
    this._conquerorMembers = this._calculateConquerors(members);
    this._kingMembers = this._calculateKings(members);
    this._diamondMembers = this._calculateDiamonds(members);
    this._platinumMembers = this._calculatePlatinum(members);
    this._goldMembers = this._calculateGold(members);
    this._silverMembers = this._calculateSilver(members);
    this._bronzeMembers = this._calculateBronze(members);
    this._inactiveMembers = this._calculateInactive(members);
  }

  get godOfWarMembers() {
    return this._godOfWarMembers;
  }

  get conquerorMembers() {
    return this._conquerorMembers;
  }

  get kingMembers() {
    return this._kingMembers;
  }

  get diamondMembers() {
    return this._diamondMembers;
  }

  get platinumMembers() {
    return this._platinumMembers;
  }

  get goldMembers() {
    return this._goldMembers;
  }

  get silverMembers() {
    return this._silverMembers;
  }

  get bronzeMembers() {
    return this._bronzeMembers;
  }

  get inactiveMembers() {
    return this._inactiveMembers;
  }

  _calculateGoW(members) {
    return members.filter(member => member.isGodOfWar).length;
  }

  _calculateConquerors(members) {
    return members.filter(member => member.isConqueror).length;
  }

  _calculateKings(members) {
    return members.filter(member => member.isKing).length;
  }

  _calculateDiamonds(members) {
    return members.filter(member => member.isDiamond).length;
  }

  _calculatePlatinum(members) {
    return members.filter(member => member.isPlatinum).length;
  }

  _calculateGold(members) {
    return members.filter(member => member.isGold).length;
  }

  _calculateSilver(members) {
    return members.filter(member => member.isSilver).length;
  }

  _calculateBronze(members) {
    return members.filter(member => member.isBronze).length;
  }

  _calculateInactive(members) {
    return members.filter(member => member.isInactive).length;
  }
}
