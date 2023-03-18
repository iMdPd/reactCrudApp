import { Modal, Button } from "react-bootstrap";

export const RemovePostModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="my-0">
          This decision will completly remove this post from app. <br />
          After clicking Remove button, there is no way back! <br />
          Are you really sure?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={props.onRemove}>
          Remove
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
