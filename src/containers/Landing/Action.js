import {
  SET_CATEGORY_IMAGES,
  SET_LIMIT,
  RESET_SET_LIMIT,
} from "../../Types/Types";

//------------------------------------------------catgory images action
export function setCatgoryImages(data) {
  return {
    type: SET_CATEGORY_IMAGES,
    data,
  };
}

//-----------------------------------------------set Limit
export function setLimit() {
  return {
    type: SET_LIMIT,
  };
}
//-----------------------------------------------reset Limit
export function resetLimit() {
  return {
    type: RESET_SET_LIMIT,
  };
}
