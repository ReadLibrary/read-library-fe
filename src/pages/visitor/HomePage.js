import { MDBContainer, MDBInputGroup } from "mdb-react-ui-kit";
import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import Spacer from "../../components/common/spacer/Spacer";
import HomeSearch from "../../components/user/home/home-search/HomeSearch";
import MenuBar from "../../components/user/home/menubar/MenuBar";
import TopBar from "../../components/user/home/topbar/TopBar";
import AuthorForm from "./Author/AuthorForm";
import Authors from "./Author/Authors";
import { useEffect, useState } from "react";
import { getAuthorsByPage, createAuthor } from "../../api/author-service";


import { Link, useNavigate } from "react-router-dom";

import "./HomePage.scss";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [authors, setAuthors] = useState([]);


  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();

  const looadAuthors = async (page) => {
    setLoading(true);
    try {
      const resp = await getAuthorsByPage(page, perPage);
      setAuthors(resp.data.content);
      setTotalRows(resp.data.totalElements);
      console.log(resp.data.content);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };


  const CreateAuthorName = async (author) => {
    setLoading(true);
    try {
      const resp = await createAuthor(author);
      setAuthors(prev => [resp.data, ...prev]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };



  const handlePageChange = (page) => {
    // Data table componenti 1 tabanlı, bizim api 0 tabanlı çalıştığı için 1 eksiltip gönderiyoruz
    looadAuthors(page - 1);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    looadAuthors(page - 1);
    setPerPage(newPerPage);
  };



  const handlePage = () => {
    navigate("/");
  };
  useEffect(() => {
    looadAuthors();
  }, []);

  const { isUserLogin, user } = useSelector((state) => state.auth);
  console.log("User name = " + user.firstName + "  isUserLogin =" + isUserLogin);

  return (
    <>

      <div className="home-main" >
        <TopBar />
        <MenuBar />
        <Spacer />
        <HomeSearch />
        <Container>
          <Nav className="justify-content-center" defaultActiveKey="/home" as="ul" >
            <Nav.Item as="li">
              ________________________. or .________________________
            </Nav.Item>
          </Nav>
        </Container>
        <div style={{ height: 30 }}></div>
        <MDBContainer>
          <MDBInputGroup tag="form" className='justify-content-center'>
            <Button href="/library-page">Explore books</Button>
          </MDBInputGroup>
        </MDBContainer>

        {/* 
        <div style={{ height: 30 }}></div>
        <Container>
          <Row>
            <Col md={3}>
              <AuthorForm CreateAuthorName={CreateAuthorName} />
            </Col>
            <Col md={9}>
              <Authors authors={authors} />
            </Col>
          </Row>
        </Container> */}


      </div>
    </>
  );
};

export default HomePage;
