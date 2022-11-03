import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {createBookWithImage} from "../../../api/book-service";
import * as Yup from "yup";

const BookEditForm = () => {
    const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(false);
  const fileImageRef = useRef();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    isbn: "",
    pageCount: "",
    authorId: "",
    publisherId: "",
    publishdate: "",
    categoryId: "",
    image: "",
    shelfCode: "",
    featured: "",
    
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter the name of the book"),
    isbn: Yup.string().required("Please enter the isbn"),
    pageCount: Yup.number().required("Please enter the number of pages"),
    authorId: Yup.number().required("Please enter the auther"),
    publisherId: Yup.number().required("Please enter the publisher"),
    publishdate: Yup.date().required("Please enter the publishdate"),
    categoryId:Yup.number().required("Please enter the category"),
    image: Yup.mixed().required("Please select an image"),
    shelfCode: Yup.string().required("Please enter shelfCode"),
    age: Yup.number().required("Please enter age of car"),
    featured: Yup.boolean().required("Please enter featured"),
    
  });
  


  return (
    <div>BookEditForm</div>
  )
}

export default BookEditForm