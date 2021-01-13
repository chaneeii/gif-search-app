import {combineReducers} from "redux";
import SearchReducer from "../components/Search/redux/SearchReducer";


export default combineReducers( { //map형식
    search: SearchReducer
});
