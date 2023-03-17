import { Card, Button, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../redux/postsRedux";

export const RenderPostCard = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {posts.map(({ id, title, author, publishedDate, shortDescription }) => (
          <Col key={id}>
            <Card>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  <b>Author:</b> {author}
                  <br />
                  <b>Published:</b> {publishedDate}
                  <br />
                  <br />
                  {shortDescription.slice(0, 32).padEnd(35, ".")}
                </Card.Text>
                <Col className="d-flex justify-content-center">
                  <Button variant="primary" as={NavLink} to={`post/${id}`}>
                    Read More
                  </Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
