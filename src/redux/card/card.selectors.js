
import {createSelector} from 'reselect';


const cardSelector = state => state.card;



export const selectCardCountry = createSelector(
  [cardSelector],
  (card) => card.country
);

export const selectCardInfo = createSelector(
  [cardSelector],
  (card) => card.cardInfo
);

export const selectCardLoading = createSelector([cardSelector], (card) => card.loading);
