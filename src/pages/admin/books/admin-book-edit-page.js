import React from 'react'
import BookUpdateForm from '../../../components/admins/books/book-update-form'
import LoanForm from '../../../components/admins/books/loan-form'
import Loaning from '../../../components/admins/books/loaning'


const AdminBookEditPage = () => {
  return (
    <>
    <BookUpdateForm/>
    <LoanForm/>
    <Loaning/>
    </>
  )
}

export default AdminBookEditPage