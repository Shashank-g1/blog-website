import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import blogReducer from "../state/blogReducer";
import thunk from "redux-thunk";

const root = combineReducers({
  blogReducer: blogReducer,
});

const store = createStore(
  root,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
