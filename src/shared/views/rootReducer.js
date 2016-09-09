import { combineReducers } from 'redux'

import { ShowsReducer } from './shows/ShowsReducer'

const rootReducer = combineReducers({
  shows: ShowsReducer,
})

export default rootReducer
