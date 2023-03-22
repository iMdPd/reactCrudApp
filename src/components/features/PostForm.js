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
  const [category, setCategory] = useState(params.category || "selected");
  const [publishedDate, setPublishedDate] = useState(
    params.publishedDate || ""
  );
  const [shortDescription, setShortDescription] = useState(
    params.shortDescription || ""
  );
  const [content, setContent] = useState(params.content || "");
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const formValidation = (length) => {
    return { minLength: length, required: true };
  };

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);

    if (content && publishedDate) {
      action({
        title,
        author,
        category,
        publishedDate,
        shortDescription,
        content,
      });
    }
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
            {dateError && (
              <small className="d-block form-text text-danger mt-2">
                Content can't be empty
              </small>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category :</Form.Label>
            <Form.Select
              aria-label="Select category"
              defaultValue={category.toLowerCase()}
            >
              <option value="selected" disabled>
                Select Category
              </option>
              <option value="sport">Sport</option>
              <option value="news">News</option>
              <option value="movies">Movies</option>
            </Form.Select>
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
          {contentError && (
            <small className="d-block form-text text-danger mt-2">
              Content can't be empty
            </small>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
