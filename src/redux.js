import { applyMiddleware, combineReducers, createStore } from "redux";

// Initial State
export const initialPageState = {
  title: "Hello World!",
  clickCounter: 0
};

// actions.js
export const changePageTitle = title => ({
  type: "CHANGE_PAGE_TITLE",
  title: title
});
export const incrementPageCounter = () => ({
  type: "INCREMENT_PAGE_COUNTER"
});

// reducers.js
export const pageContent = (state = initialPageState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE_TITLE":
      return Object.assign({}, state, {
        title: action.title
      });
    case "INCREMENT_PAGE_COUNTER":
      return Object.assign({}, state, {
        clickCounter: state.clickCounter + 1
      });
    default:
      return state;
  }
};

export const reducers = combineReducers({
  pageContent
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
