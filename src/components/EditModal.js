import { Button, Modal, Form } from "react-bootstrap";
import { EditAction } from "../Actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const EditModal = ({ index, setShow, show }) => {
  const dispatch = useDispatch();
  const [changedItem, setChangedItem] = useState(
    useSelector((state) => state.find((el) => el.id === index).item)
  );

  return (
    <>
      <style type="text/css">
        {`
    .btn-save {
      background-color: #993333;
      color: white;
    }
    .btn-close {
      background-color: #D7897E;
      color: white;
    }
    `}
      </style>
      <Modal show={show} centered>
        <Modal.Header>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Control
            plaintext
            defaultValue={changedItem}
            onChange={(e) => {
              setChangedItem(e.target.value);
            }}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => {
              setShow(false);
            }}
            variant="close"
          >
            Close
          </Button>
          <Button
            onClick={() => {
              setShow(false);
              dispatch(EditAction({ id: index, item: changedItem }));
            }}
            variant="save"
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditModal;
