import { Col, Row } from "react-bootstrap";
import { PostForm } from "../features/PostForm";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsRedux";
import { useNavigate } from "react-router-dom";

export const PostAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (post) => {
    dispatch(addPost(post));
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center">
      <Col xs={8}>
        <Row>
          <h1>Add Post</h1>
        </Row>
        <PostForm action={handleSubmit} actionText="Add post" />
      </Col>
    </div>
  );
};
