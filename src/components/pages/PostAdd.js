import { Col } from "react-bootstrap";
import { PostForm } from "../features/PostForm";

export const PostAdd = () => {
  return (
    <div className="d-flex justify-content-center">
      <Col xs={8}>
        <PostForm />
      </Col>
    </div>
  );
};
