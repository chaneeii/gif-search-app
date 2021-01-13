import SearchSaga from "../components/Search/redux/SearchSaga";
import {fork, all} from 'redux-saga/effects';

function* RootSaga() {
    yield all([
        fork(SearchSaga),
        // fork(나중에 사가 이렇게 추가하기)
    ])
}


export default RootSaga;