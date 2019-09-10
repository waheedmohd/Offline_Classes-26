import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import PersonCard from "./components/PersonCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Jumbotron/>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <PersonCard image='../images/person1.jpg' name='Laura Williams' age='35'/>
          </div>
          <div className="col-md-3">
            <PersonCard image='../images/person3.jpg' name='John Wilson' age='55'/>
          </div>
          <div className="col-md-3">
            <PersonCard image='../images/person2.jpg' name='Meera Johnes' age='25'/>
          </div>
          <div className="col-md-3">
            <PersonCard image='../images/person4.jpg' name='Robert Sen' age='37'/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
