import { Button, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { RenderPostCard } from "../features/RenderPostCard";

export const Home = () => {
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <h1>All Posts</h1>
        <Button
          className="ms-auto"
          variant="outline-primary"
          as={NavLink}
          to="post/add"
        >
          Add Post
        </Button>
      </Stack>
      <RenderPostCard />
    </>
  );
};
