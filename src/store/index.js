import { combineReducers, createStore } from 'redux'

import campaigns from './campaigns'
import cards from './cards'

const reduce = combineReducers({ campaigns, cards })

export default createStore(reduce)


