import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

//reducers
import ActiveCategoryReducer from "./components/Drawer/Reducer";
import CategoryImagesReducer from "./containers/Landing/Reducer";

const composeenhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      ActiveCategoryReducer,
      CategoryImagesReducer,
    }),
    composeenhance(applyMiddleware(ReduxThunk))
  );
  return store;
};
