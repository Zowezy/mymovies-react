import { combineReducers } from 'redux';
import { compose } from 'redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import trendsReducer from './reducers/trendsReducer';
import filterReducer from './reducers/filterReducer';
import movieReducer from './reducers/movieReducer';
import tvReducer from './reducers/tvReducer';
import searchReducer from './reducers/searchReducer'
import singleReducer from './reducers/singleReducer';
import personReducer from './reducers/personReducer';

const reducers = combineReducers({
    auth:authReducer,
    trending:trendsReducer,
    filter:filterReducer,
    movie:movieReducer,
    tv:tvReducer,
    search:searchReducer,
    single:singleReducer,
    person:personReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;