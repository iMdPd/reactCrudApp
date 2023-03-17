import { useParams, Navigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "../../redux/postsRedux";
import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { RemovePostModal } from "../features/RemoveModal";

export const Post = () => {
  const [modalShow, setModalShow] = useState(false);

  const removePost = () => {
    setModalShow(false);
  };

  const { id } = useParams();
  const postData = useSelector((state) => selectPostById(state, id));

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
        <Col
          md="2"
          xs="4"
          className="d-flex justify-content-end align-items-baseline"
        >
          <Button
            className="mx-2"
            variant="outline-success"
            as={NavLink}
            to={`/post/edit/${id}`}
          >
            Edit
          </Button>
          <Button variant="outline-danger" onClick={() => setModalShow(true)}>
            Delete
          </Button>
        </Col>
      </Row>
      <RemovePostModal
        show={modalShow}
        onCancel={() => setModalShow(false)}
        onRemove={() => removePost()}
      />
    </>
  );
};
