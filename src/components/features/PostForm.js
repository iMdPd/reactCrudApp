import { Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { TextArea } from "./TextArea";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import styles from "../../styles/Form.module.scss";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Form noValidate onSubmit={handleSubmit}>
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
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Published :</Form.Label>
            <DatePicker
              className={styles.datePicker}
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
