import {
  store,
  rooms,
  clientsNow,
  clientDNI,
  clientName,
  clientEmail,
  clientAdults,
  clientKids,
  clientNights,
} from "./consts.js";
import { checkAvailableRoom } from "./checkAvailableRoom.js";
import { addIdRoom } from "./addIdRoom.js";

export const assignRoom = (client) => {
  //  const { DNI, name, email, adults, kids, nights } = client;
  const clientRoom = checkAvailableRoom(client);
  console.log(client);
  return clientRoom;
};
