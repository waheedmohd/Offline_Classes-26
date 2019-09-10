import React from 'react';

let Employee = (props) => {
    console.log(props);
    return(
        <div>
            <div className="card m-3 text-center">
                <div className={`card-body text-white ${props.color}`}>
                    <h2>Welcome to React Mr. {props.name} with {props.age} yrs</h2>
                </div>
            </div>
        </div>
    );
};

export  default Employee;