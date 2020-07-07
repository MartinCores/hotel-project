import { rooms } from "./consts.js";

export const occupiedSwap = (obj) => {
  const roomSwap = rooms.find((value) => value.id === obj.idRoom);
  if (roomSwap === undefined) {
    return "error occupiedswap";
  }
  if (roomSwap.occupied === true) {
    roomSwap.occupied = false;
  } else {
    roomSwap.occupied = true;
  }

  return roomSwap;
};
