import "../patchProcess"
import {combineReducers, createStore} from "redux";
import {searchReducer} from "../search/search-reducer";
import {overviewReducer} from "../overview/overview-reducer";

function storeEnhancer(createStoreApi) {
  return function (reducer, initialState) {
    const reduxStore = createStoreApi(reducer, initialState);
    return {
      ...reduxStore, subscribe(fn) {
        fn(reduxStore.getState());
        return reduxStore.subscribe(() => {
          fn(reduxStore.getState());
        });
      }
    }
  }
}

const rootReducer = combineReducers({
  search: searchReducer,
  overview: overviewReducer
})
export default createStore(rootReducer, storeEnhancer);
