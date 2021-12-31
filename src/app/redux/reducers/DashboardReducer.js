import { LOAD_SEASONS } from '../actions/DashboardActions';

const initialState = {
  seasons: [],
  lastSeason: {},
}

const DashboardReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_SEASONS: {
      return {
        ...state,
        seasons: [...action.payload],
        lastSeason: action.payload.pop(),
      }
    }
    default: {
      return state
    }
  }
}

export default DashboardReducer
