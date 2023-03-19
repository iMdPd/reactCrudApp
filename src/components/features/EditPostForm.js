import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editPost, selectPostById } from "../../redux/postsRedux";
import { PostForm } from "./PostForm";

export const EditPostForm = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = useSelector((state) => selectPostById(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate("/");
  };

  if (!postData) return <Navigate to="/" />;

  return <PostForm action={handleSubmit} {...postData} />;
};
