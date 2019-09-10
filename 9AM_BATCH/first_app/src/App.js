import React from 'react';
import './App.css';
import Employee from "./components/Employee";
import Student from "./components/Student";


function App() {
  return (
    <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {/*<Employee name='John' age ='40' color='bg-primary'/>
                    <Employee name='Rajan' age='35' color='bg-success'/>
                    <Employee name='Mahesh' age='25' color='bg-warning'/>*/}
                    <Student name='Rajan' age='21' course='ECE'/>
                    <Student name='Mahesh' age='22' course='CSE'/>
                    <Student name='Wilson' age='23' course='MECH'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
