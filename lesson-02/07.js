let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

const copyPassportMarried = structuredClone(passportMarried);
delete copyPassportMarried.address;
copyPassportMarried.married = true;
copyPassportMarried. address = {
        country: "USA",
        city: "Bobryisk"
};


console.log(passportMarried);
console.log(copyPassportMarried);