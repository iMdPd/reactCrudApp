import { Col, Row } from "react-bootstrap";
import { PostForm } from "../features/PostForm";

export const PostAdd = () => {
  return (
    <div className="d-flex justify-content-center">
      <Col xs={8}>
        <Row>
          <h1>Add Post</h1>
        </Row>
        <PostForm />
      </Col>
    </div>
  );
};
