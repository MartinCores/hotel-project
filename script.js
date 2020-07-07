import {
  store,
  rooms,
  clientsNow,
  clientsOld,
  clientDNI,
  clientName,
  clientEmail,
  clientAdults,
  clientKids,
  clientNights,
  formWhole,
  formCheckOut,
  hideCheckIn,
  checkInNone,
  hideCheckOut,
  checkOutNone,
  msgLog,
  inputDni,
  tableBody,
  tableNone,
  hideList,
} from "./consts.js";

import { addIdRoom } from "./addIdRoom.js";
import { checkAvailableRoom } from "./checkAvailableRoom.js";
import { checkOut } from "./checkOut.js";
import { list } from "./list.js";

console.log(msgLog);

formWhole.addEventListener(`submit`, (event) => {
  event.preventDefault();
  checkAvailableRoom(
    //Convertir isto en obxecto
    {
      dni: clientDNI.value,
      name: clientName.value,
      email: clientEmail.value,
      adults: parseInt(clientAdults.value),
      kids: parseInt(clientKids.value),
      nights: clientNights.value,
    }
  );
});

formCheckOut.addEventListener(`submit`, (event) => {
  event.preventDefault();
  checkOut(inputDni.value);
});

hideCheckIn.addEventListener(`click`, () => {
  checkInNone.classList.toggle(`d-none`);
  checkOutNone.classList.add(`d-none`);
  tableNone.classList.add(`d-none`);
});

hideCheckOut.addEventListener(`click`, () => {
  checkOutNone.classList.toggle(`d-none`);
  checkInNone.classList.add(`d-none`);
  tableNone.classList.add(`d-none`);
});

hideList.addEventListener(`click`, () => {
  tableNone.classList.toggle(`d-none`);
  checkInNone.classList.add(`d-none`);
  checkOutNone.classList.add(`d-none`);
});

list();
