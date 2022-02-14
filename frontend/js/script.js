import { jsonData } from "./jsonData.js";

const data = JSON.parse(jsonData);

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
                <td class="row__cell ${getClassColor(data[key].color.value)}">${data[key].color.name}</td>
                <td class="row__cell">${data[key].sizes[k].name}</td>
                <td class="row__cell--right">${data[key].sizes[k].available}</td>
                <td class="row__cell">${data[key].sizes[k].price}</td>
            `;
            table.insertAdjacentElement('beforeend', tableRowEntry);
        } 
    }
}

function getClassColor(colorCode) {
	//Функция возвращает наименование CSS-класса в зависимости от кода цвета.
	
		let color;
		switch(colorCode) {
			case '#FF004D':
				color = 'row__cell--red';
				break;
			case '#008365':
				color = 'row__cell--green';
				break;
			case '#3B5998':
				color = 'row__cell--blue';
				break;
			case '#4C1A2C':
				color = 'row__cell--marsala';
				break;
			default:
				color = '';
		}
	
		return color;
	}

