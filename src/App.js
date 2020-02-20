import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
// Router for react; pretty straight forward
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navigation/Navigation";
import OrderStatus from "./containers/OrderStatus/OrderStatus";
import EditModal from "./components/OrderDataTable/Modals/EditModal";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        {/* Implementing router; */}
        <Route path="/" exact component={OrderStatus} />
        <Route path="/editStock/:id" component={EditModal}/>
      </div>
    </Router>
  );
}

export default App;
