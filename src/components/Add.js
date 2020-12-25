import { Button } from "react-bootstrap";
import { AddAction, FilterAction } from "../Actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "../App.css";
const Add = () => {
  const dispatch = useDispatch();
  const [variable, setVar] = useState("");
  return (
    <div className="add">
      <style type="text/css">
        {`
    .btn-add {
      background-color: #D7897E;
      color: white;
    }
    `}
      </style>
      <input
        className="addBox"
        placeholder="Enter new task"
        value={variable}
        onChange={(e) => setVar(e.target.value)}
      />

      <Button
        className="addBubtton"
        onClick={() => {
          dispatch(
            AddAction({
              id: Math.random(),
              item: variable,
            })
          );
          setVar("");
        }}
        variant="add"
      >
        Add
      </Button>
      <select
        className="select"
        plaintext
        onChange={(e) => dispatch(FilterAction(e.target.value))}
        as="select"
        defaultValue="All"
      >
        <option value="Choose">All</option>
        <option value="Done">Done</option>
        <option value="UnDone">UnDone</option>
      </select>
    </div>
  );
};
export default Add;
