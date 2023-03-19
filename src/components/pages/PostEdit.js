import { PostForm } from "../features/PostForm";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById } from "../../redux/postsRedux";

export const PostEdit = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const post = useSelector((state) => selectPostById(state, id));

  console.log(post);

  // const handleSubmit = (post) => {
  //   dispatch(addPost(post));
  //   navigate("/");
  // };

  return (
    <div className="d-flex justify-content-center">
      <Col xs={8}>
        <Row>
          <h1>PostEdit</h1>
        </Row>
      </Col>
    </div>
  );
};
