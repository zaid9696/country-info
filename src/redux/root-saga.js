
import {all, call} from 'redux-saga/effects';

import {cardSagas} from './card/card.saga';


export default function* rootSaga() {

    yield all([
      call(cardSagas),
    ])

};
