import { clientsNow, tableBody } from "./consts.js";

export const list = () => {
  clientsNow.forEach((value) =>
    tableBody.insertAdjacentHTML(
      `afterbegin`,
      `<tr><td>${value.name}</td>
    <td>${value.idRoom}</td>
    <td>${value.adults + value.kids}</td>
    <td>${value.dni}</td></tr>`
    )
  );
  return;
};
