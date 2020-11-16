
import cardActionTypes from './card.actionTypes';

export const cardFetch = (log) => (
  {
    type: cardActionTypes.CARD_FETCH,
    payload: log
  }
);


export const cardFetchSuccess = (items) => ({

  type: cardActionTypes.CARD_FETCH_SUCCESS,
  payload: items
});
