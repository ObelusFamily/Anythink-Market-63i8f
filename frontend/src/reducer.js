import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import auth from "./reducers/auth";
import common from "./reducers/common";
import editor from "./reducers/editor";
import home from "./reducers/home";
import item from "./reducers/item";
import itemList from "./reducers/itemList";
import profile from "./reducers/profile";
import settings from "./reducers/settings";

export default combineReducers({
  item,
  itemList,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
  router: routerReducer,
});
