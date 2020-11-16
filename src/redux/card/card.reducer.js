
import cardActionTypes from './card.actionTypes';

const initState = {

  cardInfo: '',
  country: null,
  loading: false
};


const cardReducer = (state = initState, action) => {


    switch (action.type) {
      case cardActionTypes.CARD_FETCH:
          return {
            ...state,
            cardInfo: action.payload,
            loading: true
          };

      case cardActionTypes.CARD_FETCH_SUCCESS:
        return {
          ...state,
          country: action.payload,
          loading: false
        };


      default: return state;

    }

}


export default cardReducer;
