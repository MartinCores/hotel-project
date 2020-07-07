import { rooms, clientsNow, msgLog } from "./consts.js";
import { occupiedSwap } from "./occupiedSwap.js";
import { reList } from "./unList.js";

export const checkAvailableRoom = (objcli) => {
  const fittingRooms = rooms.filter(
    (value) => value.beds === parseInt(objcli.adults) + parseInt(objcli.kids)
  );
  console.log(fittingRooms);
  const availableRooms = fittingRooms.find((value) => value.occupied === false);
  console.log(availableRooms);

  console.log(`¡Habitación ${availableRooms.id} asignada!`);

  objcli.idRoom = availableRooms.id;
  clientsNow.push(objcli);
  occupiedSwap(objcli);

  msgLog.insertAdjacentHTML(
    `afterbegin`,
    `<div class="alert alert-success mt-3">Habitación ${availableRooms.id} asignada!</div>`
  );
  console.log(rooms);
  console.log(clientsNow);
  reList(clientsNow);

  return;
};
