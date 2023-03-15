import { Route, Routes } from "react-router-dom";
import { About } from "./components/pages/About";
import { Home } from "./components/pages/Home";
import { NotMatching } from "./components/pages/NotMatching";
import { Post } from "./components/pages/Post";
import { PostAdd } from "./components/pages/PostAdd";
import { PostEdit } from "./components/pages/PostEdit";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="*" element={<NotMatching />} />
      </Routes>
      <h1>Hello World</h1>
    </>
  );
};
