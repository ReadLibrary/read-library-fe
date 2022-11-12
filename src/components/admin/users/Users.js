import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import { getUsersByPage } from "../../../api/user-service";
import "./users.scss";
import Loading from "../../common/loading/loading";

const Users = () => {
  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
    },
    {
      name: "User Name",
      selector: (row) => row.firstName,
    },
  ];

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();

  const loadUsers = async (page) => {
    setLoading(true);
    try {
      const resp = await getUsersByPage(page, perPage);
      setUsers(resp.data.content);
      setTotalRows(resp.data.totalElements);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handlePageChange = (page) => {
    // Data table componenti 1 tabanlı, bizim api 0 tabanlı çalıştığı için 1 eksiltip gönderiyoruz
    loadUsers(page - 1);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    loadUsers(page - 1);
    setPerPage(newPerPage);
  };

  const handlePage = (row) => {
    navigate(`/budak/users/${row.id}`);
  };
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div className="users">
      <DataTable
        columns={columns}
        data={users}
        progressPending={loading}
        progressComponent={<Loading />}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        onRowClicked={handlePage}
      />
    </div>
  );
};

export default Users;
