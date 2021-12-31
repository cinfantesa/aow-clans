import ClanStatistics from './ClanStatistics';

export default class Clan {
  constructor({name, members}) {
    this._name = name;
    this._members = members;
    this._statistics = new ClanStatistics({members});
  }

  get totalMembers() {
    return this._members.length;
  }

  get name() {
    return this._name;
  }

  get members() {
    return this._members;
  }

  get statistics() {
    return this._statistics;
  }
}
