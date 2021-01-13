import React from 'react';

function Result({result}) {
    // console.log(result.toJS().images.original.url);
    return(
        <>
            <img src = {result.toJS().images.original.url}/>
        </>
    );
}

export default Result;