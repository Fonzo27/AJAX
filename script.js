//Этап 1. Создание экземпляра объекта XMLHttpRequest
//Этап 2. Инициализация запроса с помощью метода open()
// xhr.open(method, url[, async[, user[, password]]]);
// Этап 3. Назначение обработчика на событие readystatechange объекта xhr
// Этап 4. Отправка запроса. Выполняется это с помощью метода send().

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let arrayOfStrings;
function splitString(stringToSplit, separator) {
  return arrayOfStrings = stringToSplit.split(separator);
}
let comma = ',';


function getData() {
  // URL на который будем отправлять GET запрос
  const requestURL = `https://swapi.dev/api/people/${getRandomInt(10)}/`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL);
  xhr.onload = () => {
    if (xhr.status !== 200) {
      return;
    }
    let text = xhr.responseText;
    splitString(text, comma);
    document.querySelector('#result').innerHTML = arrayOfStrings.join(`<br>`);

  }
  xhr.send();
}
// при нажатии на кнопку
document.querySelector('#get').addEventListener('click', () => {
  getData();
});