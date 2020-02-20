import React from "react";
import { MDBDataTable } from "mdbreact";
import Aux from "../../hoc/Wrapper";
import ViewModal from "./Modals/ViewModal";
import { Link } from "react-router-dom";

// We are outsourcing side-effects to Other modules;
const Buttons = props => {
  return (
    <Aux style={{ display: "inline-block" }}>
      <ViewModal code_id={props.code_id}></ViewModal>
      <Link
        className="btn btn-secondary btn-sm"
        to={`/editStock/${props.code_id}`}
      >{`Edit`}</Link>
    </Aux>
  );
};

const OrderDataTable = props => {
  let add_button = props.data;
  add_button.map(el => {
    el["id"] = el.code;
    el["action"] = <Buttons code_id={el.code}></Buttons>;
    return el;
  });

  const data = {
    columns: [
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 400
      },
      {
        label: "ORDERSTATUS",
        field: "ORDERSTATUS",
        sort: "asc"
        // width: 150
      },
      {
        label: "Status",
        field: "status",
        sort: "asc"
      },
      {
        label: "PAAccountStatus",
        field: "PAAccountStatus",
        sort: "asc"
      },
      {
        label: "StckID",
        field: "stock_id",
        sort: "asc"
      },
      {
        label: "PurAgmt",
        field: "Pur_Agmt",
        sort: "asc"
      },
      {
        label: "PurDt",
        field: "pur_dt",
        sort: "asc"
      },
      {
        label: "SalesOrderNo",
        field: "SalesOrderNo",
        sort: "asc"
      },
      {
        label: "SalesOrderDate",
        field: "SalesOrderDate",
        sort: "asc"
      },
      {
        label: "SalesType",
        field: "SalesType",
        sort: "asc"
      },
      {
        label: "Entrystaff",
        field: "entrystaff",
        sort: "asc"
      },
      {
        label: "PurType",
        field: "pur_type",
        sort: "asc"
      },
      {
        label: "GST",
        field: "gst_mtd",
        sort: "asc"
      },
      {
        label: "Reg no",
        field: "reg_no",
        sort: "asc"
      },
      {
        label: "rev",
        field: "rev",
        sort: "asc"
      }
    ],
    rows: add_button
  };

  return <MDBDataTable striped bordered responsive hover data={data} />;
};

export default OrderDataTable;
