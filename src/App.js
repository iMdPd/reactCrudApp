import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/pages/About";
import { Home } from "./components/pages/Home";
import { NotMatching } from "./components/pages/NotMatching";
import { Post } from "./components/pages/Post";
import { PostAdd } from "./components/pages/PostAdd";
import { PostEdit } from "./components/pages/PostEdit";
import { Footer } from "./components/views/Footer";
import { Header } from "./components/views/Header";

import styles from "./styles/App.module.scss";

export const App = () => {
  return (
    <>
      <Container className={styles.container}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="*" element={<NotMatching />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
};
