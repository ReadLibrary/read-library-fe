import React from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import "./publishers.scss";

const PublisherUpdateForm = () => {
  return (
    <div className="p-update-form">
      <div>
        <p>Name</p>
        <input type="text" name="" id="" />
      </div>
      <ButtonGroup aria-label="Basic example" className="btn-edit-page">
        <Button variant="primary" type="submit" /*  disabled={saving} */>
          {/* saving && */ <Spinner animation="border" size="sm" />} Save
        </Button>
        <Button
          variant="secondary"
          type="button" /* onClick={() => navigate(-1)} */
        >
          Show Books
        </Button>
        <Button
          variant="danger"
          type="button"
          /* onClick={handleDelete}
          disabled={deleting} */
        >
          {/* deleting &&  */ <Spinner animation="border" size="sm" />} Delete
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default PublisherUpdateForm;
