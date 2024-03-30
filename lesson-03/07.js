const numbers = [
	[1, 2, 3, 4, 5],
	[11, 20, 33, 40, 55],
	[111, 200, 333, 400, 555],
];

let even = numbers.flat().filter((el) => el % 2 === 0);
console.log(even);
