import {OverviewAction} from "./overview-action";

const fakeResult = [
  {name: "Toni", address: "Kralja Zvonimira 11", town: "Solin", country: "Croatia", phone: "022/211-312"},
  {name: "Marc", address: "Tova 123", town: "Zagreb", country: "Croatia", phone: "01/211-312"},
  {name: "Toni", address: "Kralja Zvonimira 11", town: "Solin", country: "Croatia", phone: "022/211-312"}
]

export let initialSearchState = {
  result: []
}

export let overviewReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case OverviewAction.LoadData:
      state.result = fakeResult
      return state
  }
  return state
}
