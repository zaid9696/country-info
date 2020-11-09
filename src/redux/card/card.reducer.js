
import cardAtionTyps from './card.actionTypes';


const initState = {

  cardInfo: ''
};


const cardReducer = (state = initState, action) => {


    switch (action.type) {
      case cardAtionTyps.CARD_FETCH:
          return {
            ...state,
            cardInfo: action.payload
          };

      default: return state;

    }

}



export default cardReducer;
