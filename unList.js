import { tableBody, clientsNow } from "./consts.js";
import { list } from "./list.js";

export const reList = () => {
  tableBody.innerHTML = ``;
  list(clientsNow);

  return;
};
