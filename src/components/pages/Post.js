import { useParams, Navigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "../../redux/postsRedux";
import { Row, Col, Button } from "react-bootstrap";

export const Post = () => {
  const { id } = useParams();

  const postData = useSelector((state) => selectPostById(state, id));

  console.log(postData);

  if (!postData) return <Navigate to="/" />;
  return (
    <>
      <Row>
        <Col>
          <h1>{postData.title}</h1>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <Button
            className="mx-2"
            variant="outline-success"
            as={NavLink}
            to={`edit/:${id}`}
          >
            Edit
          </Button>
          <Button variant="outline-danger">Delete</Button>
        </Col>
      </Row>
    </>
  );
};
