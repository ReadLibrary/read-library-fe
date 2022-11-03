import React from 'react'
import BookEditForm from '../../../components/admins/books/book-edit-form'
import Loaning from '../../../components/admins/books/loaning'

const AdminBookNewPage = () => {
  return (
    <>
        <BookEditForm/>
        <Loaning/> {/*buradaki loaningin icine update loanda ekle*/}
    </>
  )
}

export default AdminBookNewPage