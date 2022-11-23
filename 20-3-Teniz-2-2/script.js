let arr = []
for (var i = 0; i < 10; i++){
    arr.push(i);
    console.log(arr);
}

for (var i = 20; i >= 0; i--) {
  console.log(i);
}

let svetofor = prompt('Введите цвет светофора:красный , желтый, зеленный')
if (svetofor === 'красный') alert('Стоп!')
else if (svetofor === 'желтый') alert('Приготовьтесь')
else if (svetofor === 'зеленный') alert('Можно идти/ехать')
else alert('Надо ввести один из цветов: красный, желтый, зеленный')


