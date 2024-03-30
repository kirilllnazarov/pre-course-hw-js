const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter(el => el == "черный" || el == "красный" || el == "желтый").join('-');
}

console.log(createColorString());