import axios from "axios";
import { settings } from "../utils/settings";
import authHeader from "./auth-header";

const API_URL = settings.apiURL;

export const deleteBook = (id) => {
  return axios.delete(`${API_URL}/books/${id}`);
};

export const getBookById = ( id) => {
  return axios.get(`${API_URL}/books/${id}`);
};

export const downloadFile = (fileName) => {
  return axios.get(`${API_URL}/book/image/download/${fileName}`);
};

export const updateBook = (book, id) => {
  return axios.put(`${API_URL}/books/${id}`, book, { headers: authHeader() });
};

export const createBookWithImage = (book) => {
    return axios.post(`${API_URL}/books`, book, { headers: authHeader() });
  };

export const getAllWithPageForMember = (
  q = null,
  cat = null,
  author = null,
  publisher = null,
  page = 0,
  size = 20,
  sort = "name",
  direction = "ASC"
) => {
  return axios.get(
    `${API_URL}/books?q=${q}&cat=${cat}&author=${author}&publisher=${publisher}&page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    { headers: authHeader() }
  );
};

export const getAllWithPageForAdmin = (
    q = null,
    cat = null,
    author = null,
    publisher = null,
    page = 0,
    size = 20,
    sort = "name",
    direction = "ASC"
  ) => {
    return axios.get(
      `${API_URL}/books/admin?q=${q}&cat=${cat}&author=${author}&publisher=${publisher}&page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
      { headers: authHeader() }
    );
  };