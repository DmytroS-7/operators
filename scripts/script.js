// 1) Проверьте переменную age и если возраст больше или равен 18 и меньше или равен 21, выведите в консоль соответсвующее сообщение
const age = 17;
if (age >= 18 && age <= 21) {
  console.log(`Возраст ${age} в диапазоне 18 - 21`);
} else {
  console.log(`Возраст ${age} не в диапазоне 18 - 21`);
}
//или вариант
age >= 18 && age <= 21
  ? console.log("в диапазоне")
  : console.log("не в диапазоне");

// 2) Для каждого элемента массива users выведите сообщение в консоль, только если пользователь посетил парк или совершил покупку
// Используйте foreach или for, а потом if внутри петли

const users = [
  {
    name: "Roman",
    age: 28,
    visitedPark: true,
    boughtItems: false
  },
  {
    name: "Maya",
    age: 14,
    visitedPark: false,
    boughtItems: true
  },
  {
    name: "Alex",
    age: 45,
    visitedPark: false,
    boughtItems: false
  },
  {
    name: "Tonia",
    age: 32,
    visitedPark: true,
    boughtItems: true
  }
];

users.forEach(cur => {
  if (cur.visitedPark || cur.boughtItems) {
    console.log(cur.name + " посетил(а) парк или совершил(а) покупку.");
  }
});

// 3) Используя assigment operator(+=) поменяйте значение переменоой iterationCounter, добавляя по одной звездочке при каждой итерации

// 4) Выведите в консоль значение iterationCounter. Ожидаемый результат "Each iteration adds a *: * * * * * * * * * *"

let iterationCounter = "Each iteration adds a *: ";

for (let i = 0; i < 10; i++) {
  //console.log(i);
  iterationCounter += "*";
}
console.log(iterationCounter);
