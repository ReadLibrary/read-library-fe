import React from 'react'
import { Button, Card, Car } from 'react-bootstrap'
import { FiCheckCircle, FiCircle, FiTrash } from "react-icons/fi"
const Author = (props) => {
    const { author } = props


    return (
        <Card className='h-100'>
            <Card.Body>
                <Card.Text>
                    {author.name}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="link"><FiCheckCircle /></Button>
                <Button variant="link"><FiTrash /></Button>
            </Card.Footer>

        </Card>
    )
}

export default Author