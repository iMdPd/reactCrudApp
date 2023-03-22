import { Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { TextArea } from "./TextArea";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const PostForm = ({ action, ...params }) => {
  const [title, setTitle] = useState(params.title || "");
  const [author, setAuthor] = useState(params.author || "");
  const [publishedDate, setPublishedDate] = useState(
    params.publishedDate || ""
  );
  const [shortDescription, setShortDescription] = useState(
    params.shortDescription || ""
  );
  const [content, setContent] = useState(params.content || "");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title :</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Enter post Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please input post Title.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAuthor">
            <Form.Label>Author :</Form.Label>
            <Form.Control
              type="text"
              value={author}
              placeholder="Enter post Author"
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please input post Author.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Published :</Form.Label>
            <DatePicker
              dateFormat="dd-MM-yyyy"
              selected={publishedDate}
              onChange={(date) => setPublishedDate(date)}
            />
          </Form.Group>
        </Col>

        <Form.Group className="mb-3" controlId="formShortDescription">
          <Form.Label>Short Description :</Form.Label>
          <Form.Control
            as="textarea"
            value={shortDescription}
            rows={2}
            required
            maxLength="35"
            onChange={(e) => setShortDescription(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please input short description.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMainContent">
          <Form.Label>Main Content :</Form.Label>
          <TextArea content={(content, setContent)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
