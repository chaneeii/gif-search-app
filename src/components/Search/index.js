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

const mapDispatchToProps = {
    getSearchResults
};

export default connect(null, mapDispatchToProps)(Search);
