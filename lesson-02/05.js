let passport = {
	name: "Petr",
	surname: "Petrov",
};

let copyPassport = structuredClone(passport);
copyPassport.name = "Ivan";

console.log(passport);
console.log(copyPassport);
