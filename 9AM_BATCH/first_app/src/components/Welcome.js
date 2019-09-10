import React from 'react';

let Welcome = () => {

    let styles = {
        color : 'white',
        backgroundColor : 'orangered',
        padding : '10px'
    };

    return(
        <div>
            <h1 style={styles}>Iam from functional Component</h1>
        </div>
    );
};

export default Welcome;
