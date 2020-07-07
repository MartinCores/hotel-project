import {
  clientsNow,
  clientsOld,
  msgCheckOut,
  tableBody,
  rooms,
} from "./consts.js";
import { occupiedSwap } from "./occupiedSwap.js";
import { printBill } from "./printBill.js";
import { reList } from "./unList.js";

export const checkOut = (objcli) => {
  const selectObjectClient = clientsNow.find((value) => value.dni === objcli);
  if (!selectObjectClient) {
    console.log("non se atopa o cliente");
    return;
  }
  console.log(selectObjectClient);
  const clientIndex = clientsNow.findIndex(
    (value) => value.idRoom === selectObjectClient.idRoom
  );
  if (clientIndex === -1) {
    console.log(value);
    console.log("Cliente non atopado");
    return;
  }
  console.log(clientIndex);
  clientsOld.unshift(selectObjectClient);
  console.log(clientsOld);
  occupiedSwap(selectObjectClient);
  clientsNow.splice(clientIndex, 1);
  printBill(selectObjectClient);
  reList(clientsNow);
  console.log(rooms);
  return;
};
