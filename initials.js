console.log('Привет, кожанный! |_{^_^}_| Давай проверим твой код на работоспособность');
 
// Типа база данных, потом нужно будет вывести в отдельный файл
let colleagues = [
    {
        name: 'Ксения',
        fathername:'Викторовна' ,
        lastname: 'Иванченко',
    },
    {
        name: 'Ольга',
        fathername:'Сергеевна' ,
        lastname: 'Чердынцева',
    },
    {
        name:'Владислава',
        fathername: 'Сергеевна' ,
        lastname: 'Иванова',
    },
    {
        name: 'Ксения',
        fathername:'Николаевна' ,
        lastname: 'Сыромятова',
    },
    
];

 

let searchBtn = document.getElementById('findBtn');
let textArea = document.getElementById('text');// Вещаем обработчик события
searchBtn.addEventListener('click', getValue);
const reload = () =>  window.location.reload();


// Функция для поиска нужной информации
  
function findPerson(findOption,  wantedPerson,   personArray = colleagues,) {
    let len = personArray.length;
    let findedItems = [];

    for(let index = 0;  index < len; index++) {
        if(personArray[index][findOption] === wantedPerson){
            let findedItem  = personArray[index];
            findedItems.push(findedItem);
        } 
     }  

    if (findedItems.length === 0) {
        let noData = 'Сотрудник не найден проверьте данные....';
        textArea.innerHTML = noData;
        setInterval(reload,  3000);
        
    }else{
        let resultInfo = [];
    //  Нужен цикл что бы пройтись по массиву. Деструктуризировать каждый объект и передать его в массив
        for (let person of findedItems) {
            let {name, fathername, lastname} = person;
            let personInfo = ` <p class="personInfo">${name} ${fathername} ${lastname}</p>`;
            resultInfo.push(personInfo);
        }
    
    // После чего объединяем элементы массива в строку и выводим ее содержимое в текстконтент
        let resultInfoText = resultInfo.join('');
        textArea.innerHTML = `Результат поиска: ${resultInfoText}`;
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
    let moreData = 'Некорретный запрос. Поиск выполняется по двум параметрам';
    textArea.innerHTML = moreData;
    setInterval(reload,  3000);
  }
}
 
 
 

 

console.log(' Проверь что можно улучшить и не повторяй себя');













// function findPerson(findOption,  wantedPerson,   personArray = colleagues,) {
//     let len = personArray.length;
//     let findedItem = {}

//     for(let index = 0;  index < len; index++) {
//         if(personArray[index][findOption] === wantedPerson){
//             let findedItem  = personArray[index];
//             let {name, fathername, lastname} = findedItem;
//             let resultInfo = `Данные сотрудника найдены: ${name} ${fathername} ${lastname}`
//             textArea.innerHTML = resultInfo;
//             return resultInfo;
//         } else {
//             findedItem = ''
//         }
//     }

//     if(findedItem === '') {
//         let noData = 'Сотрудник не найден проверьте данные....';
//         textArea.innerHTML = noData;
//         setInterval(reload,  3000);
//     }

// }