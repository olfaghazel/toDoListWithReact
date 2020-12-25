import {
  addItem,
  completeItem,
  deleteItem,
  editItem,
  filterItem,
} from "../const/const";

let initialValue = [
  {
    id: Math.random(),
    item: "Travel with family",
    isComplete: false,
  },
  {
    id: Math.random(),
    item: "Learn how to meditate",
    isComplete: false,
  },
  {
    id: Math.random(),
    item: "Read at list 30 books",
    isComplete: false,
  },
];
const buttonReducer = (state = initialValue, action) => {
  switch (action.type) {
    case addItem:
      initialValue = [
        ...initialValue,
        {
          id: action.payload.id,
          item: action.payload.item,
          isComplete: false,
        },
      ];
      return [
        ...state,
        {
          id: action.payload.id,
          item: action.payload.item,
          isComplete: false,
        },
      ];
    case deleteItem:
      initialValue = state.filter((el) => el.id !== action.payload.id);
      return state.filter((el) => el.id !== action.payload.id);
    case editItem:
      initialValue = state.map((el) =>
        el.id === action.payload.id ? { ...el, item: action.payload.item } : el
      );
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, item: action.payload.item } : el
      );
    case completeItem:
      initialValue = state.map((el) =>
        el.id === action.payload.id ? { ...el, isComplete: !el.isComplete } : el
      );
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, isComplete: !el.isComplete } : el
      );
    case filterItem:
      return action.payload == "UnDone"
        ? initialValue.filter((el) => !el.isComplete)
        : action.payload == "Done"
        ? initialValue.filter((el) => el.isComplete)
        : initialValue;
    default:
      return state;
  }
};
export default buttonReducer;
