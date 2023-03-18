import { Col, Form, Button, Feedback } from "react-bootstrap";
import { useState } from "react";

export const PostAdd = () => {
  const current = new Date();
  const date = `${current.getDate()}-0${
    current.getMonth() + 1
  }-${current.getFullYear()}`;

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="d-flex justify-content-center">
      <Col xs={8}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Col md={6}>
            <h1>Add Post</h1>
            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label>Title :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post Title"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please input post Title.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label>Author :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post Author"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please input post Author.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Published :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter published date"
                defaultValue={date}
                maxlength="10"
                minlength="10"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please input published date in format DD-MM-RRRR.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Short Description :</Form.Label>
            <Form.Control as="textarea" rows={2} required maxlength="32" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill this field with post short description.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Main Content :</Form.Label>
            <Form.Control as="textarea" rows={6} required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill this field with post short description.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </div>
  );
};
