import Clan from './Clan';
import Movement from './movement';

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
    return this._clans.reduce((previous, current) => {
      return previous + current.totalMembers;
    }, 0);
  }

  get totalInactiveMembers() {
    return this._clans.reduce((previous, current) => {
      return previous + current.statistics.inactiveMembers;
    }, 0);
  }

  get totalGoWMembers() {
    return this._clans.reduce((previous, current) => {
      return previous + current.statistics.godOfWarMembers;
    }, 0);
  }

  calculateMovements() {
    const sortByTrophies = (a,b) => {
      if ( a.trophies < b.trophies ){
        return 1;
      }
      if ( a.trophies > b.trophies ){
        return -1;
      }
      return 0;
    };

    const sortByClan = (a,b) => {
      if ( a.member.clan < b.member.clan ){
        return -1;
      }
      if ( a.member.clan > b.member.clan ){
        return 1;
      }
      return 0;
    };

    const membersOrderedByTrophies = this.members.sort(sortByTrophies);
    const movements = [];
    membersOrderedByTrophies
      .forEach((member, index) => {
        const targetClan = (Math.trunc(index / 50) + 1).toString();
        if (targetClan !== member.clan) {
          movements.push(new Movement({member, targetClan}))  ;
        }
      });

    return movements.sort(sortByClan);
  }

  _generateClansFrom(members) {
    const clanNames = [...new Set(members.map(it => it.clan))];
    return clanNames.map((name) => {
      const clanMembers = members.filter(member => member.clan === name);
      return new Clan({name, members: clanMembers});
    });
  }
}
