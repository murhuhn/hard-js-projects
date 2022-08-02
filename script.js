//Урок №3 (усложненные задания)

// 1)

while (true) {
  lang = prompt("Установите язык, введя 'ru' или 'en' в поле ниже", "ru/en");

  if (lang == 'ru') {
    console.log('Понедельник, вторник, среда, четверг пятницы, суббота, воскресенье.');
    break;
  } else if (lang == 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.');
    break;
  }

  alert("Неправильное значение. Введите 'ru' или 'en'.");
}

// 2)

let namePerson = 'Артем';
let res = (namePerson == 'Артем') ? 'директор' : (namePerson == 'Александр') ? 'преподаватель' : 'студент';
console.log(res);