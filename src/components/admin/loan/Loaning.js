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
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();

  const loadLoanings = async (page) => {
    setLoading(true);
    try {
      const resp = await findAllLoansByUserId(page, perPage);
      setLoans(resp.data.content);
      setTotalRows(resp.data.totalElements);
      console.log(resp.data.totalElements);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handlePageChange = (page) => {
    // Data table componenti 1 tabanlı, bizim api 0 tabanlı çalıştığı için 1 eksiltip gönderiyoruz
    loadLoanings(page - 1);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    loadLoanings(page - 1);
    setPerPage(newPerPage);
  };

  /*   const handlePage = (row) => {
    navigate(`/budak/publishers/${row.id}`);
  };
 */
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
            setText("");
          }}
        >
          Create Publisher
        </Button>
        {!loading && (
          <DataTable
            columns={columns}
            data={loans}
            progressPending={loading}
            /*    progressComponent={<Loading />} */
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
            /*   onRowClicked={handlePage} */
          />
        )}
      </div>
    </>
  );
};

export default Loaning;
