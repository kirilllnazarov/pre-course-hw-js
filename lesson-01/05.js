let rule =
"Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";

function trueProgrammer () {
let result = '';
switch (true) {
  case rule.length < 25:
    result = "Все таки нет правил без исключения";
    break;
  case rule.length > 25:
    result = "У меня 100 пудов все получится";
    break;
  case rule.length == 25:
    result = "50 на 50";
    break;
}
console.log(result);
}