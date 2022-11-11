import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Author from './Author'

const Authors = (props) => {
    const { authors } = props
    return (
        <Container>
            <Row className='g-5'>
                {authors.map((author, index) =>
                    <Col md={4} key={index} >
                        <Author author={author} />
                    </Col>
                )
                }

            </Row>
        </Container>
    )
}

export default Authors