import React, { Component } from "react";
// import DatePicker from "react-datepicker";
// import TimePicker from "react-time-picker";
// import "react-datepicker/dist/react-datepicker.css";

import axios from "../../../axios";
import Dropdowns from "../Dropdowns/Dropdowns";

export default class ViewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock_data: {
        Notes: "",
        Stock_id: "",
        Pur_Agmt: "",
        pur_type: "",
        Pur_dt: "",
        Cal_Period: "",
        status: "",
        OrderStatus: "",
        MiscSt: "",
        PAAccountStatus: "",
        PE: "",
        Layoff_St: "",
        FSt: "",
        Pur_slsm: "",
        branch_code: "",
        Pur_Ref: "",
        Location: "",
        Pur_Inv: "",
        VenInv: "",
        Pur_invdt: "",
        TrueCost: "",
        AgrCost: "",
        HP_comp: "",
        FsCost: "",
        Set_amt: "",
        Set_dt: "",
        Pur_deldt: "",
        Pur_deltm: "",
        EntryStaff: "",
        EntryDate: "",
        LastAddEditStaff: "",
        LastAddEditDate: "",
        GST_mtd: "",
        CalGstYN: "",
        gst_pur: "",
        gst_sell: "",
        gstpct_pur: "",
        paCOE: "",
        paPARF: "",
        paVEHCOST: "",
        paOTHERS: "",
        paCOSTVALUE: "",
        paGST: "",
        TRAN_FEE: "",
        InsAmt: "",
        InspectionDate: "",
        AssignTo: "",
        PARefSource: "",
        PAReferer: "",
        Layoff_Dt: "",
        paOCOE: "",
        paOPARF: "",
        paOVEHCOST: "",
        paOOTHERS: "",
        paOCOSTVALUE: "",
        paOGST: "",
        PaExchangeRate: "",
        PaOrigCurrency: "",
        Local: "",
        Ic_no: "",
        Name: "",
        BCountry: "",
        Addr1: "",
        Addr2: "",
        Addr3: "",
        ContactPerson: "",
        HirerCode: "",
        Dob: "",
        Sex: "",
        Phone4: "",
        Phone1: "",
        phone2: "",
        phone5: "",
        Nationality: "",
        Email: "",
        Married: "",
        Race: "",
        Drv_dt: "",
        Service: "",
        ServiceMonth: "",
        BankNo: "",
        Drv_exp: "",
        BankAcct: "",
        Reg_no: "",
        Rev: "",
        Veh_type: "",
        Veh_Class: "",
        New_used: "",
        Owner: "",
        Year: "",
        make: "",
        model: "",
        propell: "",
        OReg_Dt: "",
        Engine_No: "",
        chasis_no: "",
        COL_CODE: "",
        Coe_amt: "",
        Coe_dt: "",
        Coe_Year: "",
        Rdtax_amt: "",
        Rdtax_dt: "",
        Omv: "",
        Mileage: "",
        Capacity: "",
        COE_Renew_Dt: "",
        Coe_Num: "",
        ArfPct: "",
        Parf_dt: "",
        Parf_amt: "",
        Laden: "",
        Unladen: "",
        Reg_dt: "",
        Optionals: "",
        BodyType: "",
        VehicleDesc: "",
        Reg_No: ""
      }
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/values/purchaseDetails/" + this.props.match.params.id)
      .then(response => {
        if (response.data) this.setState({ stock_data: response.data });
      })
      .catch(error => console.log(error));
  }

  submitHandler(e) {
    e.preventDefault();
    // get all Data from e;
    const getDataFromState = this.state.stock_data;
    // axios
    //   .post("/api/save", getDataFromState)
    //   .then(response => console.log("Data Saved"))
    //   .catch(err => console.log(err));
  }

  componentWillUnmount() {
    this.setState({
      stock_data: []
    });
  }

  changeHandler(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(state => ({
      stock_data: {
        ...state.stock_data,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <>
        <h3>Stock: {this.state.stock_data.Pur_Agmt}</h3>
        {this.state.stock_data !== [] ? (
          <form onSubmit={this.submitHandler}>
            <div className="row">
              {/* First Row */}
              <div className="col-4">
                <div className="form-group">
                  <label>Stock id</label>
                  <input
                    type="text"
                    name="Stock_id"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Stock_id}
                  />
                </div>

                <div className="form-group">
                  <label>Type</label>
                  <select
                    type="text"
                    name="pur_type"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.pur_type}
                  >
                    <option value="">Please Select</option>
                    <Dropdowns model="PUR_TYPE" />
                  </select>
                </div>

                <div className="form-group">
                  <label>Pur Slsmn</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="Pur_slsm"
                  >
                    <option id={this.state.stock_data.Pur_slsm}>
                      {this.state.stock_data.Pur_slsm}
                    </option>
                  </select>
                </div>
              </div>
              {/* Column second */}
              <div className="col-4">
                <div className="form-group">
                  <label>Cal.Per</label>
                  <input
                    type="text"
                    name="Cal_Period"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Cal_Period}
                  />
                </div>

                <div className="form-group">
                  <label>Pur_Agmt</label>
                  <input
                    type="text"
                    name="Pur_Agmt"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Pur_Agmt}
                  />
                </div>

                <div className="form-group">
                  <label>Assign To</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="AssignTo"
                  >
                    <option id={this.state.stock_data.AssignTo}>
                      {this.state.stock_data.AssignTo}
                    </option>
                  </select>
                </div>
              </div>

              <div className="col-4">
                <div className="row">
                  {/* Upper minature row */}
                  <div className="col-3">
                    <div className="form-group">
                      <label>ST</label>
                      <input
                        type="text"
                        name="status"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.status}
                      />
                    </div>
                  </div>

                  <div className="col-3">
                    <label>AS</label>
                    <input
                      type="text"
                      name="PAAccountStatus"
                      className="form-control form-control-sm"
                      onChange={this.changeHandler}
                      value={this.state.stock_data.PAAccountStatus}
                    />
                  </div>
                  <div className="col-3">
                    <label>MS</label>
                    <input
                      type="text"
                      name="MiscSt"
                      className="form-control form-control-sm"
                      onChange={this.changeHandler}
                      value={this.state.stock_data.MiscSt}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Purchase Date</label>
                  <input
                    type="text"
                    name="Pur_dt"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Pur_dt}
                  />
                </div>

                <div className="form-group">
                  <label>Ref. Source</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="PARefSource"
                  >
                    <option id={this.state.stock_data.AssignTo}>
                      {this.state.stock_data.PARefSource}
                    </option>
                  </select>
                </div>
              </div>
              {/* First Row ends here */}
              {/* Second Row Starts */}
              <div className="col-4">
                <div className="row">
                  {/* Upper minature row */}
                  <div className="col-3">
                    <div className="form-group">
                      <label>PE</label>
                      <input
                        type="text"
                        name="PE"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.PE}
                      />
                    </div>
                  </div>

                  <div className="col-3">
                    <label>LS</label>
                    <input
                      type="text"
                      name="Layoff_St"
                      className="form-control form-control-sm"
                      onChange={this.changeHandler}
                      value={this.state.stock_data.Layoff_St}
                    />
                  </div>
                  <div className="col-3">
                    <label>FS</label>
                    <input
                      type="text"
                      name="FSt"
                      className="form-control form-control-sm"
                      onChange={this.changeHandler}
                      value={this.state.stock_data.FSt}
                    />
                  </div>
                  <div className="col-3">
                    <label>OS</label>
                    <input
                      type="text"
                      name="OrderStatus"
                      className="form-control form-control-sm"
                      onChange={this.changeHandler}
                      value={this.state.stock_data.OrderStatus}
                    />
                  </div>
                  {/* Upper row ends here */}
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Pur. Ref</label>
                      <input
                        type="text"
                        name="Pur_Ref"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Pur_Ref}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Referer</label>
                      <input
                        type="text"
                        name="PAReferer"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.PAReferer}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Branch </label>
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="branch_code"
                      >
                        <option id={this.state.stock_data.AssignTo}>
                          {this.state.stock_data.branch_code}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Location</label>
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="Location"
                      >
                        <option id={this.state.stock_data.AssignTo}>
                          {this.state.stock_data.Location}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* First Row and Upper sections ends here; */}
            {/* Second Sections begins here; */}
            <div className="row">
              {/* Purchase Form */}
              {/* First Column */}
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Pur.From</label>
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="Local"
                        value={this.state.stock_data.Local}
                      >
                        <option value="">Please Select</option>
                        <Dropdowns model="LOCAL" />
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>ID No.</label>
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="Ic_no"
                      >
                        <option id={this.state.stock_data.AssignTo}>
                          {this.state.stock_data.Ic_no}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Nationality</label>
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="Nationality"
                      >
                        <option id={this.state.stock_data.AssignTo}>
                          {this.state.stock_data.Nationality}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Contact</label>
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="ContactPerson"
                      >
                        <option id={this.state.stock_data.AssignTo}>
                          {this.state.stock_data.ContactPerson}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="Addr1"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Addr1}
                  />
                  <input
                    type="text"
                    name="Addr2"
                    className="form-control form-control-sm mt-2"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Addr2}
                  />
                  <input
                    type="text"
                    name="Addr3"
                    className="form-control form-control-sm mt-2"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Addr3}
                  />
                </div>
              </div>
              {/* First Column Ends Here*/}
              {/* Second Column Begins */}
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="Name"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Name}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="Email"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Email}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>HP</label>
                      <input
                        type="text"
                        name="Phone4"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Phone4}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Race</label>
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="Race"
                        value={this.state.stock_data.Race}
                      >
                        <option value="">Please Select</option>
                        {/* <Dropdowns model="race" /> */}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Driving Since</label>
                      {/* <DatePicker
                        onChange={this.changeHandler}
                        selected={this.state.stock_data.EntryDate}
                      /> */}
                      <input
                        type="text"
                        name="Drv_dt"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Drv_dt}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Office</label>
                      <input
                        type="email"
                        name="phone2"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.phone2}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Service (Yr/Mth)</label>
                      <div className="row">
                        <div className="col-6">
                          <input
                            type="text"
                            name="Service"
                            className="form-control form-control-sm"
                            onChange={this.changeHandler}
                            value={this.state.stock_data.Service}
                          />
                        </div>
                        <div className="col-6">
                          <input
                            type="text"
                            name="ServiceMonth"
                            className="form-control form-control-sm"
                            onChange={this.changeHandler}
                            value={this.state.stock_data.ServiceMonth}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Fax</label>
                      <input
                        type="text"
                        name="phone5"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.phone5}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Second Column Ends here */}
              {/* Third Column Starts Here; */}
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Gender</label>
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="Sex"
                        value={this.state.stock_data.Sex}
                      >
                        <option value="">Please Select</option>
                        <Dropdowns model="SEX" />
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Martial Status</label>
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Married}
                        name="Married"
                      >
                        <option value="">Please Select</option>
                        <Dropdowns model="MARRIED" />
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Birth/Reg Date</label>
                      <input
                        type="text"
                        name="Dob"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Dob}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>DriveExp</label>
                      <input
                        type="text"
                        name="Drv_exp"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Drv_exp}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Resident</label>
                      <input
                        type="text"
                        name="Phone1"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Phone1}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Acc No</label>
                      <input
                        type="text"
                        name="BankAcct"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.BankAcct}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Bank No.</label>
                      <input
                        type="text"
                        name="BankNo"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.BankNo}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Hirer Code</label>
                      <input
                        type="text"
                        name="HirerCode"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.HirerCode}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Section and Second row ends here; */}
            {/* Third Section and Third Row begins here */}
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Reg No/Rev</label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        name="Reg_no"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Reg_no}
                      />
                    </div>
                    <div className="col-6">
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="Rev"
                      >
                        <option id={this.state.stock_data.AssignTo}>
                          {this.state.stock_data.Rev}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Make</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="make"
                    value={this.state.stock_data.make}
                  >
                    <option value="">Please Select</option>
                    <Dropdowns model="MAKE" />
                  </select>
                </div>
                <div className="form-group">
                  <label>Engine No</label>
                  <input
                    type="text"
                    name="Engine_No"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Engine_No}
                  />
                </div>
                <div className="form-group">
                  <label>Coe Rnw/Exp Dt</label>
                  <div className="row">
                    <div className="col-6">
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="Coe_dt"
                      >
                        <option id={this.state.stock_data.AssignTo}>
                          {this.state.stock_data.Coe_dt}
                        </option>
                      </select>
                    </div>
                    <div className="col-6">
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="COE_Renew_Dt"
                      >
                        <option id={this.state.stock_data.AssignTo}>
                          {this.state.stock_data.COE_Renew_Dt}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>OMV/ARF(%)</label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        name="Omv"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Omv}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        name="ArfPct"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.ArfPct}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Optional</label>
                  <input
                    type="text"
                    name="Optionals"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Optionals}
                  />
                </div>
              </div>
              {/* Second Column */}
              <div className="col-6">
                <div className="form-group">
                  <label>Veh Type/NewUsed</label>
                  <div className="row">
                    <div className="col-6">
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="Veh_type"
                      >
                        <option id={this.state.stock_data.AssignTo}>
                          {this.state.stock_data.Veh_type}
                        </option>
                      </select>
                    </div>
                    <div className="col-6">
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="New_used"
                        value={this.state.stock_data.New_used}
                      >
                        <option value="">Please Select</option>
                        <Dropdowns model="NEWUSE" />
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Propel</label>
                  <div className="row">
                    <div className="col-6">
                      <select
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        name="propell"
                        value={this.state.stock_data.propell}
                      >
                        <option value="">Please Select</option>
                        <Dropdowns model="PROPELL" />
                      </select>
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        name="Year"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        placeholder="Year"
                        value={this.state.stock_data.Year}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Mileage/Capacity</label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        name="Mileage"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Mileage}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        name="Capacity"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Capacity}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Owner</label>
                  <input
                    type="text"
                    name="Owner"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Owner}
                  />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-6">
                      <label>Inspection Date. </label>
                      <input
                        type="text"
                        name="InspectionDate"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.InspectionDate}
                      />
                    </div>
                    <div className="col-6">
                      <label>Coe No. </label>
                      <input
                        type="text"
                        name="Coe_Num"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Coe_Num}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Second Column Ends here */}
            </div>
            {/* Second row for Third Section */}
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Class</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="Veh_Class"
                  >
                    <option id={this.state.stock_data.AssignTo}>
                      {this.state.stock_data.Veh_Class}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Model</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="model"
                    value={this.state.stock_data.model}
                  >
                    <option value="">Please Select</option>
                    <option value={this.state.stock_data.model}>
                      {this.state.stock_data.model}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Chasis No</label>
                  <input
                    type="text"
                    name="chasis_no"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.chasis_no}
                  />
                </div>
                <div className="form-group">
                  <label>COE Years/Amt</label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        name="Coe_Year"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Coe_Year}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        name="Coe_amt"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Coe_amt}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Parf Amt/Exp Dt</label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        name="Parf_amt"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Parf_amt}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        name="Parf_dt"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Parf_dt}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Orig.Reg.Date</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="OReg_Dt"
                  >
                    <option id={this.state.stock_data.AssignTo}>
                      {this.state.stock_data.OReg_Dt}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Body Color</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="COL_CODE"
                  >
                    <option id={this.state.stock_data.AssignTo}>
                      {this.state.stock_data.COL_CODE}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Body Type</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="BodyType"
                  >
                    <option id={this.state.stock_data.AssignTo}>
                      {this.state.stock_data.BodyType}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Trf Fee/Ins Amt</label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        name="TRAN_FEE"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.TRAN_FEE}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        name="InsAmt"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.InsAmt}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Row for third section ends here */}
            {/* Third Row for Third Section start here */}
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Register Date</label>
                  <div className="col-12 ">
                    <input
                      type="text"
                      name="Reg_dt"
                      className="form-control form-control-sm"
                      onChange={this.changeHandler}
                      value={this.state.stock_data.Reg_dt}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Ladel / Unladen</label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        name="Laden"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Laden}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        name="Unladen"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Unladen}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>RdTaxAmt/ExpDt</label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        name="Rdtax_amt"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Rdtax_amt}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        name="Rdtax_dt"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Rdtax_dt}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Layup</label>
                  <div className="row">
                    <div className="col-1">
                      <input
                        type="checkbox"
                        name=""
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Layoff_St}
                      />
                    </div>
                    <div className="col-11">
                      <input
                        type="text"
                        name="Layoff_St"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.Layoff_St}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Vehicle Description</label>
                  <textarea
                    className="form-control"
                    name="VehicleDesc"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.VehicleDesc}
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Third Row for Third Section Ends */}
            {/* Fourth Row, ORIGINAL AMOUNT */}
            <div className="row">
              <div className="col-6">
                <h5 className="ucfirst">ORIGINAL AMOUNT</h5>

                <div className="form-group">
                  <label>Org Currency</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="PaOrigCurrency"
                  >
                    <option id={this.state.stock_data.AssignTo}>
                      {this.state.stock_data.PaOrigCurrency}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label>ExRate</label>
                  <div className="row">
                    <div className="col-1">
                      <input
                        type="checkbox"
                        name="PaExchangeRate"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.PaExchangeRate}
                      />
                    </div>
                    <div className="col-11">
                      <input
                        type="text"
                        name="foc"
                        className="form-control form-control-sm"
                        onChange={this.changeHandler}
                        value={this.state.stock_data.foc}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Vend Inv No.</label>
                  <input
                    type="text"
                    name="VenInv"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.VenInv}
                  />
                </div>
                <div className="form-group">
                  <label>Purchase Invoice</label>
                  <input
                    type="text"
                    name="Pur_Inv"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Pur_Inv}
                  />
                </div>
                <div className="form-group">
                  <label>O/S F.S. With</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="PARefSource"
                  >
                    <option id={this.state.stock_data.AssignTo}>
                      {this.state.stock_data.PARefSource}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Pur.Del/TowInDt</label>
                  <div className="col-12">
                    <input
                      type="text"
                      name="Pur_deldt"
                      className="form-control form-control-sm"
                      onChange={this.changeHandler}
                      value={this.state.stock_data.Pur_deldt}
                    />
                  </div>
                </div>
              </div>

              <div className="col-6">
                <h5>Original Amount Ctd.</h5>
                <div className="form-group">
                  <label>VEH Cost</label>
                  <input
                    type="text"
                    name="paOVEHCOST"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.paOVEHCOST}
                  />
                </div>
                <div className="form-group">
                  <label>PARF Cost</label>
                  <input
                    type="text"
                    name="Pur_Agmt"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Pur_Agmt}
                  />
                </div>

                <div className="form-group">
                  <label>Total Cost</label>
                  <input
                    type="text"
                    name="TrueCost"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.TrueCost}
                  />
                </div>
                <div className="form-group">
                  <label>Invoice Date</label>
                  <div className="col-12">
                    <input
                      type="text"
                      name="EntryDate"
                      className="form-control form-control-sm"
                      onChange={this.changeHandler}
                      value={this.state.stock_data.EntryDate}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>F.S Amount</label>
                  <input
                    type="text"
                    name="FsCost"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.FsCost}
                  />
                </div>
                <div className="form-group">
                  <label>Del Time</label>
                  <div className="col-12">
                    <input
                      type="text"
                      name="Pur_deltm"
                      className="form-control form-control-sm"
                      onChange={this.changeHandler}
                      value={this.state.stock_data.Pur_deltm}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>Original Amount Ctd..</h5>
                <div className="form-group">
                  <label>COECost</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="Coe_amt"
                  >
                    <option id={this.state.stock_data.AssignTo}>
                      {this.state.stock_data.Coe_amt}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label>OTHER Cost</label>
                  <input
                    type="text"
                    name="paOOTHERS"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.paOOTHERS}
                  />
                </div>

                <div className="form-group">
                  <label>Total GST</label>
                  <input
                    type="text"
                    name="paGST"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.paGST}
                  />
                </div>
                <div className="form-group">
                  <label>True Cost</label>
                  <input
                    type="text"
                    name="TrueCost"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.TrueCost}
                  />
                </div>
                <div className="form-group">
                  <label>Settle Amount</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="Set_amt"
                  >
                    <option id={this.state.stock_data.AssignTo}>
                      {this.state.stock_data.Set_amt}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Gst Mtd</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="GST_mtd"
                    value={this.state.stock_data.GST_mtd}
                  >
                    <option value="">Please Select</option>
                    <Dropdowns model="GSTMETHOD" />
                  </select>
                </div>
              </div>

              {/* Base Amount */}
              <div className="col-6">
                <h5>Base Amount</h5>
                <div className="form-group">
                  <label>VEH Cost</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="paVEHCOST"
                  >
                    <option id={this.state.stock_data.AssignTo}>
                      {this.state.stock_data.paVEHCOST}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label>PARF Cost</label>
                  <input
                    type="text"
                    name="Pur_Agmt"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Pur_Agmt}
                  />
                </div>

                <div className="form-group">
                  <label>Agreed.Cost</label>
                  <input
                    type="text"
                    name="AgrCost"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.AgrCost}
                  />
                </div>
                <div className="form-group">
                  <label>Settle Date</label>
                  <div className="col-12">
                    <input
                      type="text"
                      name="Set_dt"
                      className="form-control form-control-sm"
                      onChange={this.changeHandler}
                      value={this.state.stock_data.Set_dt}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Gst YN</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="PARefSource"
                    value={this.state.stock_data.PARefSource}
                  >
                    <option value="">Please Select</option>
                    <Dropdowns model="GSTYN" />
                  </select>
                </div>
                <div className="form-group">
                  <label>Gst Mtd</label>
                  <select
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    name="PARefSource"
                  >
                    <option id={this.state.stock_data.AssignTo}>
                      {this.state.stock_data.PARefSource}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>Base Amount</h5>
                <div className="form-group">
                  <label>COE Cost</label>
                  <input
                    type="text"
                    name="Pur_Agmt"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Pur_Agmt}
                  />
                </div>
                <div className="form-group">
                  <label>OTHER Cost</label>
                  <input
                    type="text"
                    name="paOTHERS"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.paOTHERS}
                  />
                </div>
                <div className="form-group">
                  <label>Total GST</label>
                  <input
                    type="text"
                    name="paOGST"
                    className="form-control form-control-sm"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.paOGST}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-flat  btn-primary btn-lg"
                  />
                </div>
              </div>
              <div className="col-6 mt-4">
                <div className="form-group">
                  <label>Comments</label>
                  <textarea
                    name="Comments"
                    className="form-control"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Comments}
                    rows="4"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Notes</label>
                  <textarea
                    name="Notes"
                    className="form-control"
                    onChange={this.changeHandler}
                    value={this.state.stock_data.Notes}
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        ) : (
          "Loading..."
        )}
      </>
    );
  }
}
