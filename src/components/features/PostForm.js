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
    action({ title, author, publishedDate, shortDescription, content });
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const formValidation = (length) => {
    return { minLength: length, required: true };
  };

  return (
    <>
      <Form noValidate onSubmit={validate(handleSubmit)}>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title :</Form.Label>
            <Form.Control
              {...register("title", formValidation(3))}
              type="text"
              value={title}
              placeholder="Enter post Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            {errors.title && (
              <small className="d-block form-text text-danger mt-2">
                This field is too short. You have to put more than 3 chars.
              </small>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAuthor">
            <Form.Label>Author :</Form.Label>
            <Form.Control
              {...register("author", formValidation(3))}
              type="text"
              value={author}
              placeholder="Enter post Author"
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            {errors.author && (
              <small className="d-block form-text text-danger mt-2">
                This field is too short. You have to put more than 3 chars.
              </small>
            )}
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
            {...register("descript", formValidation(20))}
            as="textarea"
            value={shortDescription}
            rows={2}
            required
            maxLength="35"
            onChange={(e) => setShortDescription(e.target.value)}
          />
          {errors.descript && (
            <small className="d-block form-text text-danger mt-2">
              This field is a way too short. You have to put more than 20 chars.
            </small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMainContent">
          <Form.Label>Main Content :</Form.Label>
          <TextArea content={content} setContent={setContent} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
