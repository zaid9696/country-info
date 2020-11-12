
import {takeLatest, put, call, all} from 'redux-saga/effects';
// import axios from 'axios';

import cardActionTypes from './card.actionTypes';
import {cardFetchSuccess} from './card.actions';


export function* onFetchData({payload: log})  {


    try {

         const res = yield fetch(`https://restcountries.eu/rest/v2/alpha/${log}`);
          const data = yield res.json();
          yield put(cardFetchSuccess(data));
          // console.log(data);


    } catch (e) {
        console.log(e);
    }

    //  axios.get(`https://restcountries.eu/rest/v2/alpha/${log}`).then(res => {
    //
    //     const data = res.data;
    //
    //      put(cardFetchSuccess(data));
    //
    //   console.log(data);
    // }).catch(err => console.log(err));

}


export function* fetchData() {

    yield takeLatest(cardActionTypes.CARD_FETCH, onFetchData)
}



export function* cardSagas() {

    yield all([
      call(fetchData)
    ])
}
