
import cardAtionTyps from './card.actionTypes';


export const cardFetch = (log) => (
  {
    type: cardAtionTyps.CARD_FETCH,
    payload: log
  }
);
