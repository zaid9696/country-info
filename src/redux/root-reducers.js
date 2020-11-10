
import {combineReducers} from 'redux';

import searchReducer from './search/search.reducer';
import cardReducer from './card/card.reducer';

const rootReducers = combineReducers({

  search: searchReducer,
  card: cardReducer

});



export default rootReducers;
