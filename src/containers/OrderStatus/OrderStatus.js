import React, { Component } from "react";
import axios from "../../axios";
// import Aux from "../../hoc/Wrapper";
import OrderDataTable from "../../components/OrderDataTable/OrderDataTable";

export default class OrderStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderstatus: []
    };
  }

  // Fetch data from API after the component have been loaded;
  componentDidMount() {
    axios
      .get("api/values/purchaseList")
      .then(response => {
        this.setState({
          orderstatus: response.data
        });
      })
      .catch(err => {
        console.log("Server Down" + err);
      });
  }

  render() {
    return (
        <OrderDataTable data={this.state.orderstatus} />
    );
  }
}
