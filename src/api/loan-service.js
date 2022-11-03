import axios from "axios";
import { settings } from "../utils/settings";
import authHeader from "./auth-header";

const API_URL = settings.apiURL;

export const createLoan = (loan) => {
  return axios.post(`${API_URL}/loans`, loan);
};

export const getLoanWithIdAdmin = ( id) => {
  return axios.get(`${API_URL}/loans/auth/${id}`);
};

export const getLoanWithIdMember = (id) => {
    return axios.get(`${API_URL}/loans/${id}`);
  };

export const updateLoan = (loan, id) => {
  return axios.put(`${API_URL}/loans/${id}`, loan, { headers: authHeader() });
};

export const findAllLoansByUserId = (
    page = 0,
    size = 20,
    sort = "id",
    direction = "DESC"
  ) => {
    return axios.get(
      `${API_URL}/loans/user/${userId}?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
      { headers: authHeader() }
    );
  };

  export const findLoanedBookByBookId = (
    page = 0,
    size = 20,
    sort = "id",
    direction = "DESC"
  ) => {
    return axios.get(
      `${API_URL}/loans/book/${bookId}?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
      { headers: authHeader() }
    );
  };

  export const getLoansWithPageByUserId = (
    page = 0,
    size = 20,
    sort = "id",
    direction = "DESC"
  ) => {
    return axios.get(
      `${API_URL}/loans?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
      { headers: authHeader() }
    );
  };
