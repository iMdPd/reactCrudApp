import { Result } from "antd";
import { Button } from "bootstrap";
import { NavLink } from "react-router-dom";

export const NotMatching = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" as={NavLink} to="/">
          Back Home
        </Button>
      }
    />
  );
};
