const stringForCheck = " Проверка строки, проверка строки,  проверка строки,  проверка строки,  проверка строки,  проверка строки,  проверка строки,  проверка строки,  ";

const changeStr = function (str) {
  if (typeof str != 'string') {
    alert("В качестве аргумента передана не строка");
  } else {
    return str.trim().substring(0,30) + "...";
  }
};

const newStr = changeStr(stringForCheck);
console.log(newStr);