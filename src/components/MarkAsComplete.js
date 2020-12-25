import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { CompleteAction } from "../Actions/actions";
const MarkAsComplete = ({ index }) => {
  const isComplete = useSelector(
    (state) => state.find((el) => el.id == index).isComplete
  );
  const dispatch = useDispatch();
  return (
    <>
      <style type="text/css">
        {`
    .btn-complete {
      background-color: #D7897E;
      color: white;
    }
    `}
      </style>
      <Button
        className="button"
        onClick={() => {
          dispatch(CompleteAction({ id: index }));
        }}
        variant="complete"
      >
        {!isComplete ? "Done" : "UnDone"}
      </Button>
    </>
  );
};
export default MarkAsComplete;
