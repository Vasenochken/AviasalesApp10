import { combineReducers } from 'redux'

import { reducerFilter } from './reducerFilter'
import { reducerSortTab } from './reducerSortTab'
import { reducerTickets } from './reducerTickets'

const rootReducer = combineReducers({
  reducerFilter,
  reducerSortTab,
  reducerTickets,
})

export default rootReducer
