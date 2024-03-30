const numbers = [
	[1, 2, 3, 4, 5],
	[11, 20, 33, 40, 55],
	[111, 200, 333, 400, 555],
];

const [one, two, three] = numbers;

let a = one.filter((el) => el % 2 === 0);
let b = two.filter((el) => el % 2 === 0);
let c = three.filter((el) => el % 2 === 0);

numbers.length = 0;
numbers.push(a, b, c);

console.log(numbers);
