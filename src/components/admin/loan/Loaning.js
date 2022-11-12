import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { findAllLoansByUserId } from "../../../api/loan-service";
import Loading from "../../common/loading/loading";

const columns = [
  {
    name: "user Id",
    selector: (row) => row.loansList.userId.id,
  },
  {
    name: "first Name",
    selector: (row) => row.loansList.userId.firstName,
  },
  {
    name: "loan Date",
    selector: (row) => row.loansList.loanDate,
  },
  {
    name: "expire Date",
    selector: (row) => row.loansList.expireDate,
  },
  {
    name: "return Date",
    selector: (row) => row.loansList.returnDate,
  },
];
const Loaning = () => {
  const [text, setText] = useState(0);
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadLoanings = async (text) => {
    setLoading(true);
    try {
      const resp = await findAllLoansByUserId(text);
      setLoans(resp.data);

      console.log(resp);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="create text-end">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          className="btn-new"
          type="submit"
          onClick={() => {
            loadLoanings(text);
            setText(0);
          }}
        >
          Enter User Id
        </Button>
        {!loading && (
          <DataTable columns={columns} data={loans} progressPending={loading} />
        )}
      </div>
    </>
  );
};

export default Loaning;
