import React , {Component} from 'react';

class Jumbotron  extends Component{
    render() {
        return(
            <div>
                <div className="jumbotron bg-light">
                    <h1 className="display-4">Welcome to Bootstrap</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, aliquid aut, autem commodi distinctio dolore eaque esse fuga fugiat illo iusto minima modi natus nostrum, praesentium quas reiciendis vero vitae voluptatibus? A debitis hic id pariatur sed tenetur voluptate.</p>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut cupiditate ex in natus nostrum, odio, quas sapiente sequi sit tempora ut! Architecto autem consequuntur debitis dicta est iste obcaecati quam quas sit voluptates? Aliquam cupiditate laborum praesentium quae qui quo voluptate voluptatem voluptates? Delectus eveniet quisquam tempora unde vero!</p>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, aliquid aut, autem commodi distinctio dolore eaque esse fuga fugiat illo iusto minima modi natus nostrum, praesentium quas reiciendis vero vitae voluptatibus? A debitis hic id pariatur sed tenetur voluptate.</p>

                    <hr className="my-4"/>
                        <p>It uses utility classes for typography and spacing to space content out within the larger
                            container.</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
        );
    }
}
export default Jumbotron