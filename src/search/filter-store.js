import '../patchProcess';
import {createStore} from "redux";

export let searchBy = ["Gradu", "Adresi", "Nazivu"]

function reducer(state = searchBy[0], action) {
  if (searchBy.includes(action.type)) {
    state = action.type
  }
  return state
}

function storeEnhancer(createStoreApi) {
  return function (reducer, initialState) {
    const reduxStore = createStoreApi(reducer, initialState);
    return {
      ...reduxStore,
      subscribe(fn) {
        fn(reduxStore.getState());
        return reduxStore.subscribe(() => {
          fn(reduxStore.getState());
        });
      }
    }
  }
}

export default createStore(reducer, storeEnhancer);
