import { jsonData } from "./jsonData.js";

const data = JSON.parse(jsonData);

console.log(data);

getTable(data);

function getTable(incData) {
//Функция формирует таблицу на основе входящих данных с JSON-объекта.

    let     tableRowEntry;
    const   table = document.querySelector('.table'),
            newDiv = document.querySelector('.test');

    for(let key in data) {
        for(let k in data[key].sizes) {
            tableRowEntry = document.createElement('tr');
            tableRowEntry.innerHTML = `
                <td class="row__cell">${data[key].name}</td>
                <td class="row__cell ${getClassColor(data[key].color.value)}" >${data[key].color.name}</td>
                <td class="row__cell">${data[key].sizes[k].name}</td>
                <td class="row__cell--right">${data[key].sizes[k].available}</td>
                <td class="row__cell">${data[key].sizes[k].price}</td>
            `;
            table.insertAdjacentElement('beforeend', tableRowEntry);
        } 
    }
}


