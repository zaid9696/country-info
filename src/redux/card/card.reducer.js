
import cardActionTypes from './card.actionTypes';

const initState = {

  cardInfo: '',
  country: null
};


const cardReducer = (state = initState, action) => {


    switch (action.type) {
      case cardActionTypes.CARD_FETCH:
          return {
            ...state,
            cardInfo: action.payload
          };
      case cardActionTypes.CARD_FETCH_SUCCESS:
        return {
          ...state,
          country: action.payload
        };


      default: return state;

    }

}


export default cardReducer;
