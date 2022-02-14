import { jsonData } from "./jsonData.js";

const   data = JSON.parse(jsonData);
const   inputFilter = document.querySelectorAll('.input-filter'),
        btnFilterApply = document.querySelector('.btn-filter--apply'),
        btnFilterReset = document.querySelector('.btn-filter--reset');

btnFilterApply.addEventListener('click', (event) => {
    event.preventDefault();
    filterData(data, inputFilter);
});

btnFilterReset.addEventListener('click', (event) => {
    event.preventDefault();
    getTable(data);
});

getTable(data);

function getTable(incData) {
//Функция формирует таблицу на основе входящих данных с JSON-объекта.

    let     tableRowEntry;
    const   table = document.querySelector('.table');

    table.innerHTML = `
        <tr class="table__row row" >
            <th class="row__cell row__cell--left">Название товара</th>
            <th class="row__cell row__cell--left">Цвет</th>
            <th class="row__cell row__cell--left">Размер</th>
            <th class="row__cell row__cell--left">Доступное кол-во</th>
            <th class="row__cell row__cell--left">Цена</th>
        </tr>`;

    for(let key in incData) {
        for(let k in incData[key].sizes) {
            tableRowEntry = document.createElement('tr');
            tableRowEntry.innerHTML = `
                <td class="row__cell">${incData[key].name}</td>
                <td class="row__cell ${getClassColor(incData[key].color.value)}">${incData[key].color.name}</td>
                <td class="row__cell">${incData[key].sizes[k].name}</td>
                <td class="row__cell--right">${incData[key].sizes[k].available}</td>
                <td class="row__cell">${incData[key].sizes[k].price}</td>
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

function filterData(incData, arrItems)    {
//Функция фильтрует данные в таблице в соответствии с введенными данными в полях.

    let     tableRowEntry;
    const   table = document.querySelector('.table');

    if(!arrItems[0].value && !arrItems[1].value && !arrItems[2].value && !arrItems[3].value && !arrItems[4].value) {
        return false;
    }

    table.innerHTML = `
        <tr class="table__row row" >
            <th class="row__cell row__cell--left">Название товара</th>
            <th class="row__cell row__cell--left">Цвет</th>
            <th class="row__cell row__cell--left">Размер</th>
            <th class="row__cell row__cell--left">Доступное кол-во</th>
            <th class="row__cell row__cell--left">Цена</th>
        </tr>`;

    for(let key in incData) {
        for(let k in incData[key].sizes) {          
            if((arrItems[0].value === incData[key].name || !arrItems[0].value) && (arrItems[1].value === incData[key].color.name || !arrItems[1].value) && (arrItems[2].value === incData[key].sizes[k].name || !arrItems[2].value) && (arrItems[3].value == incData[key].sizes[k].available || !arrItems[3].value) && (arrItems[4].value == incData[key].sizes[k].price || !arrItems[4].value)) {
                tableRowEntry = document.createElement('tr');
                tableRowEntry.innerHTML = `
                    <td class="row__cell">${incData[key].name}</td>
                    <td class="row__cell ${getClassColor(incData[key].color.value)}">${incData[key].color.name}</td>
                    <td class="row__cell">${incData[key].sizes[k].name}</td>
                    <td class="row__cell--right">${incData[key].sizes[k].available}</td>
                    <td class="row__cell">${incData[key].sizes[k].price}</td>
                `;
                table.insertAdjacentElement('beforeend', tableRowEntry);
            }
            
        } 
    }
    
    for(let i = 0; i < arrItems.length; i++) {
        arrItems[i].value = '';
    }
}