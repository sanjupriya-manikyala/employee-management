import React, { Component } from "react";  
import logo from "./logo.svg";  
import "./App.css";  
import PropTypes from 'prop-types';  
import { getEmployee } from './Reducers/EmployeeAction';  
import { connect } from 'react-redux';  
  
const mapStateToProps = state => ({  
  employees: state.employees  
});  
  
class App extends Component {  
  constructor(props) {  
    super(props);  
  }  
  
  static propTypes = {  
    employees: PropTypes.array.isRequired,  
    getEmployee: PropTypes.func.isRequired  
  };  
  
  componentDidMount() {  
    this.props.getEmployee();  
  }  
  
  render() {  
    return (  
      <div className="App">  
        <header className="App-header">  
          <img src={logo} className="App-logo" alt="logo" />  
          <h1 className="App-title">CRUD opeartions for Employee Module</h1>  
        </header>  
        <p className="App-intro">  
          <div className="rightsection">  
            <table>  
              <thead>  
                <tr>  
                  <th>ID</th>  
                  <th>Name</th>  
                  <th>Depatment Name</th>  
                  <th>Action(s)</th>  
                </tr>  
              </thead>  
              <tbody>  
                {this.props.employees && this.props.employees.map((data, index) => {  
                  return <tr key={(index + 1)}>  
                    <td>{(index + 1)}</td>  
                    <td>{data.employeeName}</td>  
                    <td>{data.employeeDepartment}</td>  
                    <td><button onClick={() => this.editDetails(data)}>EDIT</button> <button onClick={() => this.deleteEmployee(data.id)}>DELETE</button> </td>  
                  </tr>  
                })}  
              </tbody>  
            </table>  
          </div>  
        </p>  
      </div>  
    );  
  }  
}  
  
export default connect(mapStateToProps, { getEmployee })(App); 