
import searchAtionTyps from './search.actionTypes';


const initState = {

  searchLog: ''
};


const searchReducer = (state = initState, action) => {


    switch (action.type) {
      case searchAtionTyps.SEARCHlOG:
          return {
            ...state,
            searchLog: action.payload
          };

      default: return state;

    }

}



export default searchReducer;
