<?php

$structure = [
    array('name_category' => 'Главная', 'id_element' => 1, 'id_parent' => 0),
    array('name_category' => 'Каталог', 'id_element' => 4, 'id_parent' => 0),
    array('name_category' => 'О компании', 'id_element' => 2, 'id_parent' => 0),
    array('name_category' => 'Телефоны', 'id_element' => 10, 'id_parent' => 4),
    array('name_category' => 'Планшеты', 'id_element' => 5, 'id_parent' => 4),
    array('name_category' => 'Ноутбуки', 'id_element' => 6, 'id_parent' => 4),
    array('name_category' => 'iPhone 6', 'id_element' => 11, 'id_parent' => 10),
    array('name_category' => 'iPhone 5', 'id_element' => 12, 'id_parent' => 10),
    array('name_category' => 'iPhone 4', 'id_element' => 13, 'id_parent' => 10),
    array('name_category' => 'Аксессуары', 'id_element' => 14, 'id_parent' => 10),
    array('name_category' => 'iPad Air', 'id_element' => 20, 'id_parent' => 5),
    array('name_category' => 'iPad Mini', 'id_element' => 21, 'id_parent' => 5),
    array('name_category' => 'Аксессуары', 'id_element' => 99, 'id_parent' => 5),
    array('name_category' => 'Macbook Air', 'id_element' => 33, 'id_parent' => 6),
    array('name_category' => 'Macbook Pro', 'id_element' => 34, 'id_parent' => 6),
    array('name_category' => 'Аксессуары', 'id_element' => 35, 'id_parent' => 6),
];

echo get_breadcrumbs(35);

function get_breadcrumbs($id_element) {
//Функция выводит нафигационную цепочку по ID элемента. Используется рекурсия.

    global $structure;
    $id_parent = 0;
    $name_category = '';

    foreach($structure as $value) {
        if($value['id_element'] === $id_element) {
            $id_parent = $value['id_parent'];
            $name_category = $value['name_category'];
            break;
        }
    }

    if($id_parent === 0) {
        return $name_category;
    }

    return get_breadcrumbs($id_parent) . ' -> ' . $name_category;
}