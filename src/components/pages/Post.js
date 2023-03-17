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
      <Row className="d-flex justify-content-center">
        <Col xs="8" sm="6">
          <h1>{postData.title}</h1>
          <p>
            <b>Author: {""}</b>
            {postData.author}
            <br />
            <b>Published: {""}</b>
            {postData.publishedDate}
          </p>
          <p>{postData.content}</p>
        </Col>
        <Col xs="4" className="d-flex justify-content-end align-items-baseline">
          <Button
            className="mx-2"
            variant="outline-success"
            as={NavLink}
            to={`/post/edit/${id}`}
          >
            Edit
          </Button>
          <Button variant="outline-danger">Delete</Button>
        </Col>
      </Row>

      <Col className="d-flex justify-content-center"></Col>
    </>
  );
};
