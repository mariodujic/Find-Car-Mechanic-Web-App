import {SearchActions} from "./search-action";

export let searchBy = ["Gradu", "Adresi", "Nazivu"]

export let initialSearchState = {
  keyword: "",
  filter: searchBy[0]
}

export let searchReducer = (state = initialSearchState, action) => {
  let {payload} = action
  switch (action.type) {
    case SearchActions.Search:
      state.keyword = payload
      return state
    case SearchActions.ChangeFilter:
      state.filter = payload
      return state
  }
  return state
}
