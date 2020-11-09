
import searchAtionTyps from './search.actionTypes';


export const searchLog = (log) => (
  {
    type: searchAtionTyps.SEARCHlOG,
    payload: log
  }
);
