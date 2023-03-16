import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { RenderPostCard } from "../features/RenderPostCard";

export const Home = () => {
  return (
    <>
      <Row>
        <Col>
          <h1>All Posts</h1>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <Button variant="outline-primary" as={NavLink} to="post/add">
            Add Post
          </Button>
        </Col>
      </Row>
      <RenderPostCard />
    </>
  );
};
