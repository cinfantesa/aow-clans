import { LOAD_SEASONS } from '../actions/DashboardActions';

const initialState = {
  seasons: [],
  lastSeason: {},
  stats: {
    seasonNames: [],
    gowBySeason: [],
    membersBySeason: [],
    inactiveMembersBySeason: [],
  },
}

const DashboardReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_SEASONS: {
      const newState = {
        ...state,
        seasons: [...action.payload],
        lastSeason: [...action.payload].pop(),
        stats: {
          seasonNames: action.payload.map(season => season.seasonNumber),
          gowBySeason: action.payload.map(season => season.totalGoWMembers),
          membersBySeason: action.payload.map(season => season.totalMembers),
          inactiveMembersBySeason: action.payload.map(season => season.totalInactiveMembers),
        },
      };
      console.log(':::newState', newState)
      return newState;
    }
    default: {
      return state
    }
  }
}

export default DashboardReducer
