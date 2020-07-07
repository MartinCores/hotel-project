export const store = { rooms, clientsNow, clientsOld };
export const rooms = [
  { id: 1, beds: 1, price: 25, occupied: true },
  { id: 2, beds: 3, price: 75, occupied: false },
  { id: 3, beds: 2, price: 50, occupied: false },
  { id: 4, beds: 4, price: 100, occupied: true },
  { id: 5, beds: 2, price: 50, occupied: true },
  { id: 6, beds: 6, price: 150, occupied: true },
  { id: 7, beds: 4, price: 100, occupied: false },
  { id: 8, beds: 1, price: 25, occupied: false },
];
export const clientsNow = [
  {
    dni: "447858F",
    name: "Juanfran",
    email: "juanfran@celta.com",
    adults: 1,
    kids: 3,
    nights: 2,
    idRoom: 5,
  },
  {
    dni: "555858V",
    name: "Djalminha",
    email: "djalma@depor.com",
    adults: 2,
    kids: 0,
    nights: 7,
    idRoom: 1,
  },
  {
    dni: "443458C",
    name: "Mauro Silva",
    email: "mauro@depor.com",
    adults: 2,
    kids: 2,
    nights: 3,
    idRoom: 4,
  },
  {
    dni: "777858A",
    name: "Mostovoi",
    email: "alexander@celta.com",
    adults: 2,
    kids: 3,
    nights: 5,
    idRoom: 6,
  },
];
export const clientsOld = [];
export const clientDNI = document.querySelector(`#identifier`);
export const clientName = document.querySelector(`#name`);
export const clientEmail = document.querySelector(`#email`);
export const clientAdults = document.querySelector(`#adults`);
export const clientKids = document.querySelector(`#kids`);
export const clientNights = document.querySelector(`#nights`);
export const formWhole = document.querySelector(`#form-whole`);
export const formCheckOut = document.querySelector(`#form-checkout`);
export const hideCheckIn = document.querySelector(`#hideCheckIn`);
export const msgLog = document.querySelector(`#msglog`);
export const hideCheckOut = document.querySelector(`#hideCheckOut`);
export const hideList = document.querySelector(`#hideList`);
export const checkInNone = document.querySelector(`#checkInDNone`);
export const checkOutNone = document.querySelector(`#checkOutDNone`);
export const inputDni = document.querySelector(`#inputdni`);
export const msgCheckOut = document.querySelector(`#msgcheckout`);
export const tableBody = document.querySelector(`#tablebody`);
export const tableNone = document.querySelector(`#tablenone`);
