import React , {Component} from 'react';

class Jumbotron extends  Component{
    render() {
        return(
            <div className='container'>
                <div className="jumbotron mt-4 bg-light">
                    <h1 className="display-4 text-primary">Welcome to HCL Corporate</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet fugiat libero quas? Accusamus adipisci asperiores aspernatur aut corporis culpa cum dolorum earum excepturi fugiat iusto nam, possimus quod. Aspernatur consequatur culpa cumque cupiditate esse minima nostrum quis quod repellat!</p>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet fugiat libero quas? Accusamus adipisci asperiores aspernatur aut corporis culpa cum dolorum earum excepturi fugiat iusto nam, possimus quod. Aspernatur consequatur culpa cumque cupiditate esse minima nostrum quis quod repellat!</p>
                    <hr className="my-4"/>
                        <p>It uses utility classes for typography and spacing to space content out within the larger
                            container.</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
        );
    }
}
export default Jumbotron;