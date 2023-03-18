import { Col, Form, Button } from "react-bootstrap";

export const PostAdd = () => {
  return (
    <div className="d-flex justify-content-center">
      <Col md={8}>
        <h1>Add Post</h1>
        <Form.Group className="mb-3" controlId="addPostForm">
          <Col md={6}>
            <Form.Label>Title :</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Enter post Title"
            />
            <Form.Label>Author :</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Enter post Author"
            />
            <Form.Label>Published :</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Enter published date"
            />
          </Col>
          <Form.Label>Short Description :</Form.Label>
          <Form.Control className="mb-3" as="textarea" rows={2} />
          <Form.Label>Main Content :</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Col>
    </div>
  );
};
