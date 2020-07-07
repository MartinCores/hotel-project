import { rooms } from "./consts.js";

import { checkAvailableRoom } from "./checkAvailableRoom.js";

export const addIdRoom = (obj) => {
  const clientId = checkAvailableRoom(obj);
  obj.idRoom = clientId.id;
  console.log(clientId);
  return;
};
