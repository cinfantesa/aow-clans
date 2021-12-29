import { combineReducers } from 'redux'
import DashboardReducer from './DashboardReducer';

const RootReducer = combineReducers({
    dashboard: DashboardReducer,
})

export default RootReducer
