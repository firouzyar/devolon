import { SET_ACTIVE_CATEGORY } from "../../Types/Types";

//------------------------------------------------active catgory action
export function setActiveCatgory(data) {
  return {
    type: SET_ACTIVE_CATEGORY,
    data,
  };
}
