import React, { useRef, useState } from "react";

import { Form, Button, Spinner, Row, Col, Badge } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import { question, toast } from "../../../utils/functions/swal";
import { deleteBook, updateBook } from "../../../api/book-service";
import { useNavigate, useParams } from "react-router-dom";

const BookEditForm = () => {
  const { bookId } = useParams();
  const [deleting, setDeleting] = useState(false);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    isbn: "",
    pageCount: 0,
    publisherId: 0,
    authorId: 0,
    publishDate: 0,
    categoryId: 0,
    shelfCode: "",
    featured: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter name"),
    isbn: Yup.string().required("Please enter isbn"),
    pageCount: Yup.number().required("Please enter pageCount"),
    publisherId: Yup.number().required("Please enter publisherId"),
    authorId: Yup.number().required("Please enter authorId"),
    publishDate: Yup.number().required("Please enter publishDate"),
    categoryId: Yup.number().required("Please enter  categoryId"),
    shelfCode: Yup.string().required("Please enter  shelfCode"),
  });

  const onSubmit = async (values, bookId) => {
    console.log(values);
    setSaving(true);
    try {
      await updateBook(values, bookId);
      toast("book updated successfully!", "success");
      formik.resetForm();
    } catch (err) {
      toast(err.response.data.message, "error");
    } finally {
      setSaving(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const removeBook = async () => {
    setDeleting(true);
    try {
      await deleteBook(bookId);
      toast("book was deleted", "success");
      navigate(-1);
    } catch (err) {
      toast(err.response.data.message, "error");
    } finally {
      setDeleting(false);
    }
  };

  const handleDelete = () => {
    question(
      "Are you sure to delete?",
      "You won't be able to revert this!"
    ).then((result) => {
      if (result.isConfirmed) {
        removeBook();
      }
    });
  };
  return (
    <Form className="book-edit" noValidate onSubmit={formik.handleSubmit}>
      div
      <Row>
        <Col xl={3} className="image-area">
          <img src="" className="img-fluid" alt="..." />
        </Col>
        <Col className="form" xl={9}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("name")}
              isInvalid={formik.touched.name && formik.errors.name}
              isValid={formik.touched.name && !formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>isbn</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("isbn")}
              isInvalid={formik.touched.isbn && formik.errors.isbn}
              isValid={formik.touched.isbn && !formik.errors.isbn}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.isbn}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Page Count</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("pageCount")}
              isInvalid={formik.touched.pageCount && formik.errors.pageCount}
              isValid={formik.touched.pageCount && !formik.errors.pageCount}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.pageCount}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>publisher Id</Form.Label>
            <Form.Control
              type="number"
              {...formik.getFieldProps("publisherId")}
              isInvalid={
                formik.touched.publisherId && formik.errors.publisherId
              }
              isValid={formik.touched.publisherId && !formik.errors.publisherId}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.publisherId}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>author Id</Form.Label>
            <Form.Control
              type="number"
              {...formik.getFieldProps("authorId")}
              isInvalid={formik.touched.authorId && formik.errors.authorId}
              isValid={formik.touched.authorId && !formik.errors.authorId}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.authorId}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>publish Date</Form.Label>
            <Form.Control
              type="number"
              {...formik.getFieldProps("publishDate")}
              isInvalid={
                formik.touched.publishDate && formik.errors.publishDate
              }
              isValid={formik.touched.publishDate && !formik.errors.publishDate}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.publishDate}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>category Id</Form.Label>
            <Form.Control
              type="number"
              {...formik.getFieldProps("categoryId")}
              isInvalid={formik.touched.categoryId && formik.errors.categoryId}
              isValid={formik.touched.categoryId && !formik.errors.categoryId}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.categoryId}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>shelf Code</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("shelfCode")}
              isInvalid={formik.touched.shelfCode && formik.errors.shelfCode}
              isValid={formik.touched.shelfCode && !formik.errors.shelfCode}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.shelfCode}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>featured</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("featured")}
              isInvalid={formik.touched.featured && formik.errors.featured}
              isValid={formik.touched.featured && !formik.errors.featured}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.featured}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant="danger"
            type="submit"
            disabled={deleting}
            onClick={handleDelete}
          >
            {deleting && <Spinner animation="border" size="sm" />} Delete
          </Button>
          <Button variant="primary" type="submit" disabled={saving}>
            {saving && <Spinner animation="border" size="sm" />} Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BookEditForm;
