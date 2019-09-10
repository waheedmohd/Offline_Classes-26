import React , {Component} from 'react';

class Footer extends  Component{
    render() {
        return(
            <div>
                <footer className='bg-primary text-white text-center p-3 mt-4'>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h3>Copyright &copy; 2019 , HCL Corporate</h3>
                                <h6>All Rights Reserved</h6>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;