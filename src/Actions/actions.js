export const AddAction = (payload) => {
  return {
    type: "ADD_ITEM",
    payload,
  };
};
export const DeleteAction = (payload) => {
  return {
    type: "DELETE_ITEM",
    payload,
  };
};
export const EditAction = (payload) => {
  return {
    type: "EDIT_ITEM",
    payload,
  };
};
export const CompleteAction = (payload) => {
  return {
    type: "COMPLETE_ITEM",
    payload,
  };
};
export const FilterAction = (payload) => {
  return {
    type: "FILTER_ITEM",
    payload,
  };
};
