import React from 'react';
import {connect} from 'react-redux';
import Result from "./Result";


function Results(props){
    console.log(props.searchResults);
    if(props.searchResults) { //만약 searchResults 가 존재한다면,
        return (
            <>
                {renderSearchResults(props.searchResults)}
            </>
        );
    }

    return null;
}

const renderSearchResults = (searchResults) => {

    //일반 자바스크립트 객체로 변환
    return searchResults.map((result , i )=> {
        return <Result i={i} result={result} />
    });

};


// mapStateToProps 는 리덕스 스토어의 상태를 조회해서 어떤 것들을 props 로 넣어줄지 정의합니다.
// 현재 리덕스 상태를 파라미터로 받아옵니다.
const mapStateToProps = state => {
    return {
        searchResults: state.search.get('searchResults')
    }
};

export default connect(mapStateToProps)(Results);