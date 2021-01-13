import {Map, fromJS} from 'immutable';
import types from '../types';

const initialState = Map({
    searchResults: []
});

const SearchReducer = (state=initialState, action) => {


    switch (action.type) { //액션의 타입값을 가져와서
        case types.setSearchResults: { //ADD_SEARCH_RESULTS
            // console.log(action); //액션을 콘솔에 출력해보기
            return state.merge( { //merge해서 새로운 맵 생성해냄
                searchResults: fromJS(action.results)
            });
        }
        default: {
            return state;
        }
    }


};

export default SearchReducer;