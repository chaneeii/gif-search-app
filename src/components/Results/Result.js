import React from 'react';
import {Spring} from 'react-spring/renderprops';
import {ResultWrapper} from './styled';

function Result({result, i}) {
    // console.log(result.toJS().images.original.url);
    return(
        <ResultWrapper>
            <Spring
                from={{ opacity: 0, transform: 'tanslateY(30px)' }}
                to={{ opacity: 1, transform: 'tanslateY(0px)' }}
                config={{ delay: i * 100 }}>
                {springProps => <div style={springProps}>
                    <img src={result.toJS().images.original.url} alt='gif' />
                </div>
                }
            </Spring>
        </ResultWrapper>

    );
}

export default Result;