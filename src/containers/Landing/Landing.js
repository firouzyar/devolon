import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiService from "../../ustils/apiRequests";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import { setCatgoryImages, setLimit } from "./Action";
import {
  ImageContainer,
  PageFade,
  Title,
  LoadMore,
  LoaderContainer,
} from "./Landing.style";

function Landing(props) {
  const activeCategory = useSelector(
    (state) => state.ActiveCategoryReducer.activeCategory
  );
  const categoryReducer = useSelector((state) => state.CategoryImagesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    getCategoryImages();
  }, [activeCategory.id, categoryReducer.limit]);
  // get all category Images
  function getCategoryImages() {
    apiService
      .get(
        `/images/search?category_ids=${
          Object.keys(activeCategory).length === 0 ? "" : activeCategory.id
        }&limit=${categoryReducer.limit}`
      )
      .then((response) => {
        dispatch(setCatgoryImages(response.data));
      })
      .catch((error) => {});
  }
  function loadMoreHandler() {
    dispatch(setLimit());
  }
  return (
    <Fragment>
      <Title>
        {Object.keys(activeCategory).length === 0 ? "All" : activeCategory.name}
      </Title>
      <ImageContainer>
        {!categoryReducer.loading &&
        categoryReducer.categoryImages.length > 0 ? (
          categoryReducer.categoryImages.map((item, index) => {
            return (
              <PageFade key={index}>
                <img src={item.url} alt={item.id} />
              </PageFade>
            );
          })
        ) : (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
      </ImageContainer>
      <LoadMore>
        {!categoryReducer.loading &&
          categoryReducer.categoryImages.length > 0 && (
            <Button handleClick={loadMoreHandler}>load more</Button>
          )}
      </LoadMore>
    </Fragment>
  );
}

export default Landing;
