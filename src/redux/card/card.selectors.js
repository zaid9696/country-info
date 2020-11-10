
import {createSelector} from 'reselect';


const cardSelector = state => state.card;



export const selectCardCountry = createSelector(
  [cardSelector],
  (card) => card.country
);
