import { Card, Button, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../redux/postsRedux";
import { DateToStr } from "../../utils/DateToStr";

export const RenderPostCard = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {posts.map(
          ({
            id,
            title,
            author,
            category,
            publishedDate,
            shortDescription,
          }) => (
            <Col key={id}>
              <Card>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    <b>Author:</b> {author}
                    <br />
                    <b>Published:</b> {DateToStr(publishedDate)}
                    <br />
                    <b>Category:</b> {category}
                    <br />
                    <br />
                    {shortDescription}
                  </Card.Text>
                  <Col className="d-flex justify-content-center">
                    <Button variant="primary" as={NavLink} to={`post/${id}`}>
                      Read More
                    </Button>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    </>
  );
};
