import React from "react";
import BookEditForm from "../../../components/admin/book/BookEditForm";
import Loaning from "../../../components/admin/loan/Loaning";
import BreadCrump from "../../../components/admin/common/BreadCrump";
const BookEditPage = () => {
  return (
    <>
      <BreadCrump />
      <BookEditForm />
      <Loaning />
    </>
  );
};

export default BookEditPage;
