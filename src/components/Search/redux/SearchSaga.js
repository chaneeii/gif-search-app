import { takeLatest, debounce, put} from 'redux-saga/effects';
import {setSearchResults} from "../action";
import types from '../types';
import axios from "axios";


function* setSearch({value}) {
    // call api하기
    try{
        //e.target.value를 api call 할때 q 다음에 붙는
        const url = `http://api.giphy.com/v1/gifs/search?api_key=0R21PuWoC57NsH27jsI8fh9Xy1ZdFITF&q=${value}?limit=20`;
        const data = yield axios.get(url); //반환되는 결과를 기다려서 결과를 바로 받도록
        // console.log(data.data.data);
        return yield put(setSearchResults(data.data.data));
    }catch (e) {
        console.log(e);
    }

}

function* watchSearch() {
    //yield : 1by1
    // yield takeLatest(types.watchGetSearchResults, setSearch); //'WATCH_GET_SEARCH_RESULTS' 이벤트감지하면 takeLatest하구 setSearch실

    //debounce
    yield debounce(1000,types.watchGetSearchResults, setSearch);
}

export default watchSearch;