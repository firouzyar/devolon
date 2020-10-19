import { SET_ACTIVE_CATEGORY } from "../../Types/Types";

const initialState = {
  activeCategory: {},
};

const ActiveCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return {
        activeCategory: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ActiveCategoryReducer;
