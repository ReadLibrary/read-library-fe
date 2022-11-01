import React from "react";
import DashBoardItem from "./DashboardItem";

const Dashboard = () => {
  const lists = []; //backend ayarlari olcak
  return (
    <div className="dashboard">
      {lists.map((listItem, index) => {
        return (
          <DashBoardItem
            key={index}
            reportName={listItem.reportName}
            reportNum={listItem.reportNum}
            reportIcon={listItem.reportIcon}
          />
        );
      })}

      <DashBoardItem />
      <DashBoardItem />
      <DashBoardItem />
      <DashBoardItem />
      <DashBoardItem />
      <DashBoardItem />
      <DashBoardItem />
      <DashBoardItem />
    </div>
  );
};

export default Dashboard;
