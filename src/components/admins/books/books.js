import React, { useState,useEffect } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { getAllWithPageForAdmin } from '../../../api/book-service';

const Books = () => {

  const [books, setBooks]= useState([]);
  const [loading, setLoading]= useState(true);
  const [pagination, setPagination] = useState({});

  const loadData= async(page)=>{
    try {
      const resp=await getAllWithPageForAdmin(page,5);
      console.log(resp.data);

      const {
        content,
        numberOfElements,
        size,
        totalElements,
        totalPages,
        pageable,
      } = resp.data;

      setBooks(content);
      setPagination({
        numberOfElements,
        size,
        totalElements,
        totalPages,
        pageable,
      });


    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }

  };
  useEffect(() => {
    loadData(0);
  }, []);


  return (
    <>
      <Container>
      <Row>
        <Col sm={4}>Resim</Col>
        <Col sm={8}>
          <Row>Kitap Adi</Row>
          <Row>
            <Col sm={6}>Yazar</Col>
            <Col sm={6}>Raf kodu</Col>
          </Row>
          <Row>
            <Col sm={6}>isbn</Col>
            <Col sm={6}>Available</Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Books