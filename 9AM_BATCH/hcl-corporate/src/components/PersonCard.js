import React , {Component} from 'react';

class PersonCard extends  Component{
    render() {
        return(
            <div>
                <div className="card text-center">
                    <div className="card-header bg-primary text-white">
                        <img src={this.props.image} alt='' className='img-fluid img-thumbnail rounded-circle w-50 p_image'/>
                    </div>
                    <div className="card-body">
                        <h2>{this.props.name}</h2>
                        <h4>{this.props.age} yrs</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error est itaque libero omnis quibusdam voluptas!</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default PersonCard;