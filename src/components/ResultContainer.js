import React from 'react';

const ResultContainer = (props) => {

    return (
        <div className="result-container">
            <div className="rc-background"></div>
            <div className="rc-foreground">
              {props.children}
            </div>
        </div>
    )
}

export default ResultContainer;