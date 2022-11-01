import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetailsPage from "../pages/admin/books/BookDetailsPage";
import BookEditPage from "../pages/admin/books/BookEditPage";
import BooksPage from "../pages/admin/books/BooksPage";
import DashBoardPage from "../pages/admin/dashboard/DashBoardPage";
import PublisherEditPage from "../pages/admin/publishers/PublisherEditPage";
import PublisherPage from "../pages/admin/publishers/PublisherPage";
import UserEditPage from "../pages/admin/users/UserEditPage";
import UsersPage from "../pages/admin/users/UsersPage";
import AdminTemplate from "../templates/AdminTemplate";
import ProtectedRoute from "./ProtectedRoute";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="admin">
            <Route
              index
              element={
                /*  <ProtectedRoute admin={true}> */
                <AdminTemplate>
                  <DashBoardPage />
                </AdminTemplate>
                /*   </ProtectedRoute> */
              }
            />
            <Route
              path="publishers"
              element={
                /*  <ProtectedRoute admin={true}> */
                <AdminTemplate>
                  <PublisherPage />
                </AdminTemplate>
                /*    </ProtectedRoute> */
              }
            />
            <Route
              path="publisher-edit-page"
              element={
                /*  <ProtectedRoute admin={true}> */
                <AdminTemplate>
                  <PublisherEditPage />
                </AdminTemplate>
                /*    </ProtectedRoute> */
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  /*  <ProtectedRoute admin={true}> */
                  <AdminTemplate>
                    <UsersPage />
                  </AdminTemplate>
                  /*   </ProtectedRoute> */
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <UserEditPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="books">
              <Route
                index
                element={
                  /*  <ProtectedRoute admin={true}> */
                  <AdminTemplate>
                    <BooksPage />
                  </AdminTemplate>
                  /*   </ProtectedRoute> */
                }
              />
              <Route
                path=":bookId"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <BookEditPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path="detail"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <BookDetailsPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
