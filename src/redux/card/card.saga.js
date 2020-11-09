
import {takeLatest, put, call, all} from 'redux-saga/effects';
import axios from 'axios';
import cardActionTypes from './card.actionTypes';


export function* onFetchData({payload: log}) {

    yield axios.get('https://restcountries.eu/rest/v2/name/somalia').then(res => {

        const data = res.data;

      console.log(data);
    }).catch(err => console.log(err));

}


export function* fetchData() {

    yield takeLatest(cardActionTypes.CARD_FETCH, onFetchData)
}



export function* cardSagas() {

    yield all([
      call(fetchData)
    ])
}
