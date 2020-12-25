import { Button } from "react-bootstrap";

const Edit = ({ setShow }) => {
  return (
    <>
      <style type="text/css">
        {`
    .btn-edit {
      background-color: #C55F4E;
      color: white;
    }
    `}
      </style>
      <Button
        className="button"
        onClick={() => {
          setShow(true);
        }}
        variant="edit"
      >
        Edit
      </Button>
    </>
  );
};
export default Edit;
