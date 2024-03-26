let number1 = Math.floor(Math.random() * 100);

function name(number) {
  if (number % 2 === 0) {
    console.log(`${number} :Это четное число`);
  } else {
    console.log(`${number} :Это нечетное число`);
  }
}
name(number1);
