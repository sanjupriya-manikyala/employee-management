import thunk from "redux-thunk"; 
import { applyMiddleware, createStore } from 'redux'; 

let EmployeeStore = createStore(applyMiddleware(thunk));

export default EmployeeStore;