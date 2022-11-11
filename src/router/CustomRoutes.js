import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetailsPage from "../pages/admin/books/BookDetailsPage";
import BookEditPage from "../pages/admin/books/BookEditPage";
import BooksPage from "../pages/admin/books/BooksPage";
import DashBoardPage from "../pages/admin/dashboard/DashBoardPage";
import PublisherPage from "../pages/admin/publishers/PublisherPage";
import PublisherEditPage from "../pages/admin/publishers/PublisherEditPage";
import UserEditPage from "../pages/admin/users/UserEditPage";
import UsersPage from "../pages/admin/users/UsersPage";
import AdminTemplate from "../templates/AdminTemplate";
import ProtectedRoute from "./ProtectedRoute";
import AccountPage from "../pages/visitor/AccountPage";
import PublisherNewPage from "../pages/admin/publishers/PublisherNewPage";
import CategoriesPage from "../pages/admin/categories/CategoriesPage";
import CategoryNewPage from "../pages/admin/categories/CategoryNewPage";
import CategoriesEditPage from "../pages/admin/categories/CategoriesEditPage";
import UserTemplate from "../templates/user-template";
import ContactPage from "../pages/visitor/ContactPage";
import HomePage from "../pages/visitor/HomePage";
import NotFound from "../components/common/not-found/NotFound";
import LibraryPage from "../pages/visitor/LibraryPage";
import BookNewPage from "../pages/admin/books/BookNewPage";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route
            path="library-page"
            element={
              <UserTemplate>
                <LibraryPage />
              </UserTemplate>
            }
          />
          <Route
            path="contact-page"
            element={
              <UserTemplate>
                <ContactPage />
              </UserTemplate>
            }
          />
          <Route
            path="auth"
            element={
              <UserTemplate>
                <AccountPage />
              </UserTemplate>
            }
          />
          <Route path="notfound" element={<NotFound />} />

          <Route
            path="auth"
            element={
              /*   <UserTemplate> */
              <AccountPage />
              /*   </UserTemplate> */
            }
          />

          <Route path="budak">
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
              path="report"
              element={
                /*  <ProtectedRoute admin={true}> */
                <AdminTemplate>
                  <DashBoardPage />
                </AdminTemplate>
                /*    </ProtectedRoute> */
              }
            />
            <Route path="publishers">
              <Route
                index
                element={
                  /*  <ProtectedRoute admin={true}> */
                  <AdminTemplate>
                    <PublisherPage />
                  </AdminTemplate>
                  /*    </ProtectedRoute> */
                }
              />
              <Route
                path=":pubId"
                element={
                  /*  <ProtectedRoute admin={true}> */
                  <AdminTemplate>
                    <PublisherEditPage />
                  </AdminTemplate>
                  /*    </ProtectedRoute> */
                }
              />
            </Route>

            <Route
              path="publisher-new-page"
              element={
                /*  <ProtectedRoute admin={true}> */
                <AdminTemplate>
                  <PublisherNewPage />
                </AdminTemplate>
                /*    </ProtectedRoute> */
              }
            />
            <Route
              path="categories"
              element={
                /*  <ProtectedRoute admin={true}> */
                <AdminTemplate>
                  <CategoriesPage />
                </AdminTemplate>
                /*    </ProtectedRoute> */
              }
            />
            <Route
              path="category-edit-page"
              element={
                /*  <ProtectedRoute admin={true}> */
                <AdminTemplate>
                  <CategoriesEditPage />
                </AdminTemplate>
                /*    </ProtectedRoute> */
              }
            />
            <Route
              path="category-new-page"
              element={
                /*  <ProtectedRoute admin={true}> */
                <AdminTemplate>
                  <CategoryNewPage />
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
                  /*  <ProtectedRoute admin={true}> */
                  <AdminTemplate>
                    <UserEditPage />
                  </AdminTemplate>
                  /*  </ProtectedRoute> */
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
                  /*     <ProtectedRoute admin={true}> */
                  <AdminTemplate>
                    <BookEditPage />
                  </AdminTemplate>
                  /*    </ProtectedRoute> */
                }
              />
              <Route
                path="book-new-page"
                element={
                  /*     <ProtectedRoute admin={true}> */
                  <AdminTemplate>
                    <BookNewPage />
                  </AdminTemplate>
                  /*    </ProtectedRoute> */
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
