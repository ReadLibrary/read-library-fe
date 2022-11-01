import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./publishers.scss";

const Publishers = () => {
  const lists = ["adam", "sanki", "geldi", "midur", "yesil", "mavi"]; //backend ayarlari olcak
  const navigate = useNavigate();

  const handlePage = () => {
    navigate("/admin/publisher-edit-page");
  };

  return (
    <div className="publishers">
      <ul>
        {lists.map((listItem, index) => {
          return (
            <li key={index} onClick={handlePage}>
              {listItem}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Publishers;
