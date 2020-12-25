import { Form } from "react-bootstrap";
import EditModal from "./EditModal";
import Delete from "./Delete";
import Edit from "./Edit";
import { useState } from "react";
import MarkAsComplete from "./MarkAsComplete";
import { useSelector } from "react-redux";

const Item = ({ index }) => {
  const item = useSelector((state) => state.find((el) => el.id === index).item);
  const isComplete = useSelector(
    (state) => state.find((el) => el.id === index).isComplete
  );
  const [show, setShow] = useState(false);
  return (
    <Form.Group>
      <div className="item">
        <Form.Control
          style={
            !isComplete
              ? { textDecoration: "none", fontWeight: "bold", fontSize: "20px" }
              : {
                  textDecoration: "line-through",
                  opacity: "0.5",
                  fontSize: "20px",
                }
          }
          plaintext
          readOnly
          value={item}
        />
        <Edit setShow={setShow} />
        <MarkAsComplete index={index} />
        <Delete index={index} />
      </div>
      <EditModal index={index} setShow={setShow} show={show} />
    </Form.Group>
  );
};
export default Item;
