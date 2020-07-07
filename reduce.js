import { createStore } from "redux";
import {
  store as initialState,
  rooms,
  clientsNow,
  clientsOld,
} from "consts.js";

const store = createStore(hotelReducers);

const hotelReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_CLIENT":
      return { ...state, clientsNow: [...state.clientsNow, action.objcli] };
  }
};

const addNewClient = (objcli) => {
  return {
    type: "ADD_NEW_CLIENT",
    objcli,
  };
};

store.dispatch(addNewClient);
