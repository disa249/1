// элемент формы
const squareInput = document.querySelector('#squaer-input');
const squareRanger = document.querySelector('#squaer-range');
const inputs = document.querySelectorAll('input')

// связка Range с текстовым полем
// слушаем событие input

squareRanger.addEventListener('input', function () {
    console.log('input');
    squareInput.value = squareRanger.value;
})
// свзяка текстового поля с range    
squareInput.addEventListener('input', function () {
    squareRanger.value = squareInput.value;
})
const totalPrice = basePrise * parseInt(squareInput.value);
console.log (totalPrice);

for (const input of inputs) {
    console.log(input);
}