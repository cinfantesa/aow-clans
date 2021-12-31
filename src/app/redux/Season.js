import Clan from './Clan';

export default class Season {
  constructor({seasonNumber, members}) {
    this._seasonNumber = seasonNumber;
    this._clans = this._generateClansFrom(members);
    this._members = members;
  }

  get seasonNumber() {
    return this._seasonNumber;
  }

  get members() {
    return this._members;
  }

  get clans() {
    return this._clans;
  }

  get totalClans() {
    return this._clans.length;
  }

  get totalMembers() {
    return this._clans.reduce((previous,current) => { return previous + current.totalMembers;}, 0);
  }

  get totalInactiveMembers() {
    return this._clans.reduce((previous,current) => { return previous + current.statistics.inactiveMembers;}, 0);
  }

  _generateClansFrom(members) {
    const clanNames = [...new Set(members.map(it => it.clan))];
    return clanNames.map((name) => {
      const clanMembers = members.filter(member => member.clan === name);
      return new Clan({name, members: clanMembers});
    });
  }
}
