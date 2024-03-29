let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

const copyPassportWithAddress = structuredClone(passportWithAddress);
copyPassportWithAddress.address.city = 'Bobryisk';


console.log(passportWithAddress);
console.log(copyPassportWithAddress.address.city);