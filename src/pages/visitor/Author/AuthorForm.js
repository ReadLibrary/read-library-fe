import React, { useState } from 'react'
import { Button, FormGroup } from 'react-bootstrap'
import { FiPlus } from "react-icons/fi"

const AuthorForm = (props) => {
    const { CreateAuthorName } = props;
    const [name, setName] = useState("");
    console.log(name);
    return (
        <>
            <FormGroup className='mb-3'>
                <label>Başlık</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormGroup>
            <Button onClick={() => CreateAuthorName({ name, completed: false })} >
                <FiPlus /> Create Author
            </Button>

        </>
    )
}

export default AuthorForm