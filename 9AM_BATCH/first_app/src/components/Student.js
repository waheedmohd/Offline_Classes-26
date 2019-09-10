import React , {Component} from 'react';

class Student extends Component{
    render() {
        return(
            <div>
                <div className="card m-3">
                    <div className="card-header bg-warning text-white">
                       <h2>Welcome {this.props.name}</h2>
                    </div>
                    <div className="card-body bg-light">
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                NAME : {this.props.name}
                            </li>
                            <li className='list-group-item'>
                                AGE : {this.props.age}
                            </li>
                            <li className='list-group-item'>
                                COURSE : {this.props.course}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export  default Student;