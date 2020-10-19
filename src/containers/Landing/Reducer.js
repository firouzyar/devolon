import {
  SET_CATEGORY_IMAGES,
  SET_LIMIT,
  RESET_SET_LIMIT,
} from "../../Types/Types";

const initialState = {
  categoryImages: [],
  limit: 10,
  loading: true,
};

const CategoryImages = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY_IMAGES:
      return {
        ...state,
        categoryImages: action.data,
        loading: false,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: state.limit + 10,
        loading: false,
      };
    case RESET_SET_LIMIT:
      return {
        ...state,
        limit: 10,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default CategoryImages;
