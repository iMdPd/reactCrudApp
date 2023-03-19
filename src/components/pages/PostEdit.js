import { Row, Col } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editPost, selectPostById } from "../../redux/postsRedux";
import { PostForm } from "../features/PostForm";

export const PostEdit = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = useSelector((state) => selectPostById(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate("/");
  };

  if (!postData) return <Navigate to="/" />;
  return (
    <div className="d-flex justify-content-center">
      <Col xs={8}>
        <Row>
          <h1>PostEdit</h1>
        </Row>
        <PostForm
          action={handleSubmit}
          actionText="Edit post"
          props={postData}
        />
      </Col>
    </div>
  );
};
