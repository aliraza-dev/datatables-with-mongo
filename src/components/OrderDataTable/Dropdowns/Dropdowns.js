import React, { Component } from "react";
import axios from "../../../axios";

export default class Dropdowns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    axios
      .get("api/values/selections/" + this.props.model)
      .then(response => {
        this.setState({
          options: response.data
        });
      })
      .catch(err => console.log(err));
  }
  componentWillUnmount() {
    this.setState({
      option: []
    });
  }
  render() {
    let options = [];
    // if (this.props.model === "race") {
    //   options = this.state.options.map((el, index) => {
    //     return (
    //       <option key={el.Race + el.index} value={el.Race}>
    //         {el.Race}
    //       </option>
    //     );
    //   });
    // } else {
    options = Object.keys(this.state.options).map(el => {
      return (
        <option key={el} value={el}>
          {this.state.options[el]}
        </option>
      );
    });
    // }
    return options;
  }
}
