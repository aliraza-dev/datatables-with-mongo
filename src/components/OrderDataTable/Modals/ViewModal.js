import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Wrapper from "../../../hoc/Wrapper";
import axios from "../../../axios";
export default class ViewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      view: false,
      viewInfo: []
    };

    this.viewHandleClose = this.viewHandleClose.bind(this);
    this.viewHandleShow = this.viewHandleShow.bind(this);
  }
  viewHandleClose = () => this.setState({ view: false });
  viewHandleShow = () => {
    axios
      .get("/api/values/purchaseView/" + this.props.code_id)
      .then(response => {
        this.setState({ viewInfo: response.data });
        if (this.state.viewInfo) this.setState({ view: true });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Wrapper>
        <button className="btn btn-info btn-sm" onClick={this.viewHandleShow}>
          Show
        </button>
        <Modal
          size="xl"
          show={this.state.view}
          onHide={this.viewHandleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Stock Master</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="row">
                <div className="col-4">
                  <div className="form-group">
                    <label>Make</label>
                    <input
                      type="text"
                      value={this.state.viewInfo.MAKE}
                      readOnly
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="form-group">
                    <label>Laden</label>
                    <input
                      type="text"
                      value={this.state.viewInfo.Laden}
                      readOnly
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="form-group">
                    <label>Stock ID</label>
                    <input
                      type="text"
                      value={this.state.viewInfo.stock_id}
                      readOnly
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="form-group">
                    <label>Pur. Date</label>
                    <input
                      type="text"
                      value={this.state.viewInfo.pur_dt}
                      readOnly
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="form-group">
                    <label>Notes</label>
                    <textarea
                      className="form-control"
                      readOnly
                      value={this.state.viewInfo.NOTES}
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div className="col-4">
                  <div className="form-group">
                    <label>Model</label>
                    <input
                      type="text"
                      name="make"
                      value={this.state.viewInfo.MODEL}
                      readOnly
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="form-group">
                    <label>Unladen</label>
                    <input
                      type="text"
                      value={this.state.viewInfo.Unladen}
                      readOnly
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6">
                        <label>Vehicle No.</label>
                        <input
                          type="text"
                          value={this.state.viewInfo.reg_no}
                          readOnly
                          className="form-control form-control-sm"
                        />
                      </div>
                      <div className="col-6">
                        <label>Type</label>
                        <input
                          type="text"
                          value={this.state.viewInfo.veh_type}
                          readOnly
                          className="form-control form-control-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Pur. Date</label>
                    <input
                      type="text"
                      value={this.state.viewInfo.pur_dt}
                      readOnly
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-4">
                        <label>Image</label>
                        <img
                          className="img-thumbnail"
                          style={{ height: 100, width: 100 }}
                          readOnly
                          //   src={this.state.viewInfo.NOTES}
                          src="https://via.placeholder.com/150"
                          alt="MainImage"
                        />
                      </div>
                      <div className="col-4">
                        <label>Seller Sign</label>
                        <img
                          className="img-thumbnail"
                          style={{ height: 100, width: 100 }}
                          readOnly
                          //   src={this.state.viewInfo.NOTES}
                          src="https://via.placeholder.com/150"
                          alt="SellerSign"
                        />
                      </div>
                      <div className="col-4">
                        <label>Authorized</label>
                        <img
                          className="img-thumbnail"
                          style={{ height: 100, width: 100 }}
                          readOnly
                          //   src={this.state.viewInfo.NOTES}
                          src="https://via.placeholder.com/150"
                          alt="Authorized Sign"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6">
                        <label>Year</label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          readOnly
                          value={this.state.viewInfo.YEAR}
                        />
                      </div>
                      <div className="col-6">
                        <label>Capacity</label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          readOnly
                          value={this.state.viewInfo.Capacity}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Color</label>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      readOnly
                      value={this.state.viewInfo.COL_CODE}
                    />
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6">
                        <label>Type</label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          readOnly
                          value={this.state.viewInfo.SalesType}
                        />
                      </div>
                      <div className="col-6">
                        <label>Status</label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          readOnly
                          value={this.state.viewInfo.SoldStatus}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      readOnly
                      value={this.state.viewInfo.name}
                    />
                  </div>
                  <div className="form-group">
                    <div className="row ">
                      <div className="col-4">
                        <button
                          className="btn btn-sm btn-primary text-center"
                          disabled
                        >
                          Total Due:
                        </button>
                      </div>
                      <div className="col-6">
                        <div className="row flex-column ">
                          <label>Orig .S$</label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            readOnly
                            value={this.state.viewInfo.TXTpaOCOSTVALUEpaOGST}
                          />
                        </div>
                        <div className="row flex-column ">
                          <label>Base .S$</label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            readOnly
                            value={this.state.viewInfo.txtpaCOSTVALUEpaGST}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-4">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6">
                        <label>Orig.Reg.Dt</label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          readOnly
                          value={this.state.viewInfo.OReg_Dt}
                        />
                      </div>
                      <div className="col-6">
                        <label>Register Dr</label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          readOnly
                          value={this.state.viewInfo.Reg_dt}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Chasis No.</label>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      readOnly
                      value={this.state.viewInfo.chasis_no}
                    />
                  </div>
                </div>

                <div className="col-4">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6">
                        <label>Final Status</label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          readOnly
                          value={this.state.viewInfo.FSt}
                        />
                      </div>
                      <div className="col-6">
                        <label>Order Status</label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          readOnly
                          value={this.state.viewInfo.OrderStatus}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="row">
                      <div className="col-6">
                        <label>Branch</label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          readOnly
                          value={this.state.viewInfo.branch_code}
                        />
                      </div>
                      <div className="col-6">
                        <label>Location</label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          readOnly
                          value={this.state.viewInfo.LocationCompID}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6 ">
                        <button className="btn btn-sm btn-primary">
                          Setteled
                        </button>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          readOnly
                          value={this.state.viewInfo.PaOSettled}
                        />
                      </div>
                      <div className="col-6 ">
                        <label>Balance</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          readOnly
                          value={this.state.viewInfo.txtObal}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6 ">
                        <button className="btn btn-sm btn-primary">
                          Setteled
                        </button>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          readOnly
                          value={this.state.viewInfo.PaSettled}
                        />
                      </div>
                      <div className="col-6 ">
                        <label>Balance</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          readOnly
                          value={this.state.viewInfo.txtbal}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={this.viewHandleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.viewHandleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </Wrapper>
    );
  }
}
