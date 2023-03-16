import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "../../redux/postsRedux";

export const Post = () => {
  const { id } = useParams();

  const postData = useSelector((state) => selectPostById(state, id));

  if (!postData) return <Navigate to="/" />;
  return (
    <>
      <h1>Post</h1>
    </>
  );
};
