import "../patchProcess"
import {createStore} from "redux";
import {searchReducer} from "../search/search-reducer";

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

export default createStore(searchReducer, storeEnhancer);
