import { PostForm } from "../features/PostForm";
import { Row, Col } from "react-bootstrap";
export const PostEdit = () => {
  return (
    <div className="d-flex justify-content-center">
      <Col xs={8}>
        <Row>
          <h1>PostEdit</h1>
        </Row>
        <PostForm />
      </Col>
    </div>
  );
};
