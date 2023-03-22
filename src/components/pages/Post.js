import { useParams, Navigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removePost, selectPostById } from "../../redux/postsRedux";
import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { RemovePostModal } from "../features/RemovePostModal";
import { DateToStr } from "../../utils/DateToStr";

export const Post = () => {
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const postData = useSelector((state) => selectPostById(state, id));

  const dispatch = useDispatch();

  const handleRemovePost = () => {
    setModalShow(false);
    dispatch(removePost(id));
  };

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
            {DateToStr(postData.publishedDate)}
          </p>
          <p dangerouslySetInnerHTML={{ __html: postData.content }}></p>
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
        onRemove={() => handleRemovePost()}
      />
    </>
  );
};
