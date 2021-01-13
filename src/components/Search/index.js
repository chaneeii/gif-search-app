import React from "react";
import axios from "axios";
import {connect} from'react-redux';
import {getSearchResults} from "./action";

function Search(props) {
    console.log(props);
    return(
        <div>
            <input onChange={ e => onInputChange(e,props)} />
        </div>
    );
}


async function onInputChange(e, props) {
    if(e.target.value.trim() !== '') {
        props.getSearchResults(e.target.value);
    }
}

// mapStateToProps 는 리덕스 스토어의 상태를 조회해서 어떤 것들을 props 로 넣어줄지 정의합니다.
// 현재 리덕스 상태를 파라미터로 받아옵니다.
const mapDispatchToProps = {
    getSearchResults
};

export default connect(null, mapDispatchToProps)(Search);
