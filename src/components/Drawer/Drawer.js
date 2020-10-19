import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setActiveCatgory } from "./Action";
import { resetLimit } from "../../containers/Landing/Action";
import { DrawerContainer, ListWrapper, MenuItem } from "./Drawer.style";
function Drawer(props) {
  const { openMenu, categories } = props;

  const activeCategory = useSelector(
    (state) => state.ActiveCategoryReducer.activeCategory
  );
  const dispatch = useDispatch();
  useEffect(() => {}, [categories]);
  //set active category
  function selectCategory(category) {
    dispatch(setActiveCatgory(category));
    dispatch(resetLimit());
  }
  return (
    <DrawerContainer open={openMenu}>
      {categories && (
        <ListWrapper>
          <MenuItem
            active={Object.keys(activeCategory).length === 0 ? true : false}
            onClick={() => selectCategory("")}
          >
            All
          </MenuItem>
          {categories.map((item, index) => (
            <MenuItem
              key={index}
              active={item.id === activeCategory.id}
              onClick={() => selectCategory(item)}
            >
              {item.name}
            </MenuItem>
          ))}
        </ListWrapper>
      )}
    </DrawerContainer>
  );
}
export default Drawer;
