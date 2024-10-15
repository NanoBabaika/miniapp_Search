console.log('Привет, кожанный! |_{^_^}_| Давай проверим твой код на работоспособность');
 
// Типа база данных, потом нужно будет вывести в отдельный файл
let colleagues = [
    {
        name: 'Ksenia',
        fathername:'Viktorovna' ,
        lastname: 'Kolesnikova',
    },
    {
        name:' Vladislava',
        fathername: 'Sergeevna' ,
        lastname: 'Ivanova',
    },
    {
        name: 'Irina',
        fathername:'Olegovna' ,
        lastname: 'Kozlova',
    },
];
 
let searchBtn = document.getElementById('findBtn');
let textArea = document.getElementById('text');// Вещаем обработчик события
searchBtn.addEventListener('click', getValue);
const reload = () =>  window.location.reload();


// Функция для поиска нужной информации
function findPerson(findOption,  wantedPerson,   personArray = colleagues,) {
    let len = personArray.length;
    let findedItem = {}

    for(let index = 0;  index < len; index++) {
        if(personArray[index][findOption] === wantedPerson){
            let findedItem  = personArray[index];
            let {name, fathername, lastname} = findedItem;
            let resultInfo = `Данные сотрудника найдены: ${name} ${fathername} ${lastname}`
            textArea.innerHTML = resultInfo;
            return resultInfo;
        } else {
            findedItem = ''
        }
    }

    if(findedItem === '') {
        let noData = 'Сотрудник не найден проверьте данные....';
        textArea.innerHTML = noData;
        setInterval(reload,  3000);
    }

}
 
// Присвоить переменную инпут и получить введенное пользователем значение
// Определили кнопку 
// Получаем значение из инпута
function getValue() {
  let valueInput = document.getElementById('findInput').value;
  let searchValue = valueInput.split(' ');
  let searchParameter=searchValue[0];
  let seachInfo=searchValue[1];
 
  if(searchValue.length === 2) {
    findPerson(searchParameter, seachInfo);
   } else {
    let moreData = 'Слишком много данных';
    textArea.innerHTML = moreData;
    setInterval(reload,  3000);
  }
}
 

















































console.log('Результат такой. Проверь что сможешь улучшить')