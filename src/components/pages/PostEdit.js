import { Row, Col } from "react-bootstrap";

import { EditPostForm } from "../features/EditPostForm";

export const PostEdit = () => {
  return (
    <div className="d-flex justify-content-center">
      <Col xs={8}>
        <Row>
          <h1>PostEdit</h1>
        </Row>
        <EditPostForm />
      </Col>
    </div>
  );
};
