const arr = ['346', '457', '968', '275', '403', '123', '377'];
const arrLength = arr.length;

for (let i = 0; i < arrLength; i++) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
}



const primeNumbers = function() {
numbers:
  for (var i = 2; i < 101; i++) {

    for (var j = 2; j < i; j++) {
      
      if (i % j == 0)  continue numbers;
      
     }    
    console.log(+ i + ' - ' + ' делители этого числа: 1 и ' + i);
  }
}

primeNumbers();

f


