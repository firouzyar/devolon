import React, { Fragment, useState, useEffect } from "react";
import apiService from "../../ustils/apiRequests";
import Drawer from "../Drawer/Drawer";
import Burgur from "../Burger/Burger";
import ScrollTop from "../ScrollTop/ScrollTop";
function Layout(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  // get all categories
  function getCategories() {
    apiService
      .get(`/categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {});
  }
  function toggleMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <Fragment>
      <Burgur toggleMenu={toggleMenu} openMenu={openMenu} />
      <Drawer openMenu={openMenu} categories={categories} />
      <div className='container'>
        <ScrollTop />
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
}
export default Layout;
