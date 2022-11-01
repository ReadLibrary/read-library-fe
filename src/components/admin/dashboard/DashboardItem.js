import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./dashboardItem.scss";
import { IoIosPeople } from "react-icons/io";
import { BsSquare } from "react-icons/bs";
const DashBoardItem = (props) => {
  const { reportName, reportNum, reportIcon } = props;

  return (
    <div className="dashboard-item">
      <div>
        <p>
          <BsSquare className="square" />
          &nbsp;
          {reportName}member
        </p>
        <h3>{reportNum}1230</h3>
      </div>
      <div>
        {reportIcon}
        <IoIosPeople />
      </div>
    </div>
  );
};

export default DashBoardItem;
