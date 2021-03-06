import { all, takeLatest } from 'redux-saga/effects';

import { PlayerTypes } from '~/store/ducks/player';
import { PodCastsTypes } from '~/store/ducks/podcasts';
import { load } from './podcasts';
import {
  init, setPodcast, play, pause, next, prev, reset,
} from './player';

export default function* rootSaga() {
  return yield all([
    init(),
    takeLatest(PodCastsTypes.LOAD_REQUEST, load),
    takeLatest(PlayerTypes.SET_PODCAST_REQUEST, setPodcast),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.NEXT, next),
    takeLatest(PlayerTypes.PREV, prev),
    takeLatest(PlayerTypes.RESET, reset),
  ]);
}
