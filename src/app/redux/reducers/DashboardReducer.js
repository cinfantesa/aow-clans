import { LOAD_MEMBERS } from '../actions/DashboardActions';

const initialState = {
  members: [],
  stats: {
    totalMembers: 0,
    inactiveMembers: 0,
    bronzeMembers: 0,
    silverMembers: 0,
    goldMembers: 0,
    platinumMembers: 0,
    diamondMembers: 0,
    kingMembers: 0,
    conquerorMembers: 0,
    godOfWarMembers: 0,
  },
  clans: [],
}

const DashboardReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_MEMBERS: {
      return {
        ...state,
        members: [...action.payload],
        stats: {
          totalMembers: action.payload.length,
          godOfWarMembers: action.payload.filter(it => it.isGodOfWar).length,
          conquerorMembers: action.payload.filter(it => it.isConqueror).length,
          kingMembers: action.payload.filter(it => it.isKing).length,
          diamondMembers: action.payload.filter(it => it.isDiamond).length,
          platinumMembers: action.payload.filter(it => it.isPlatinum).length,
          goldMembers: action.payload.filter(it => it.isGold).length,
          silverMembers: action.payload.filter(it => it.isSilver).length,
          bronzeMembers: action.payload.filter(it => it.isBronze).length,
          inactiveMembers: action.payload.filter(it => it.isInactive).length,
        },
        clans: [...new Set(action.payload.map(it => it.clan))],
      }
    }
    default: {
      return state
    }
  }
}

export default DashboardReducer
