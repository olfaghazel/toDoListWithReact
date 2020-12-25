import { Button } from "react-bootstrap";
import { DeleteAction } from "../Actions/actions";
import { useDispatch } from "react-redux";

const Delete = ({ index }) => {
  const dispatch = useDispatch();
  return (
    <>
      <style type="text/css">
        {`
    .btn-delete {
      background-color: #993333;
      color: white;
    }
    `}
      </style>
      <Button
        className="button"
        onClick={() => {
          dispatch(DeleteAction({ id: index }));
        }}
        variant="delete"
      >
        Delete
      </Button>
    </>
  );
};
export default Delete;
