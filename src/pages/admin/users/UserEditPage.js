import React from "react";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import Loan from "../../../components/admin/loan/Loan";

import UserUpdateForm from "../../../components/admin/users/UserUpdateForm";

const UserEditPage = () => {
  return (
    <>
      <BreadCrump />

      <UserUpdateForm />
      <Loan />
    </>
  );
};

export default UserEditPage;
