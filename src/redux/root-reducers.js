
import {combineReducers} from 'redux';

import searchReducer from './search/search.reducer';

const rootReducers = combineReducers({

  search: searchReducer

});



export default rootReducers;
