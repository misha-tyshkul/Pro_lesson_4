console.group("Вивести на сторінку в один рядок через кому числа від 10 до 20.");

let number = 10;
let result = "";

while (number < 21) {
  if (number === 20) {
    result += number;
  } else {
    result += `${number},`;
  }
  number++;
}
console.log(`${result}`);

console.groupEnd();

console.group("Вивести квадрати чисел від 10 до 20.");

let i = 10;

while (i <= 20) {
  console.log(i * i);
  i++;
}

console.groupEnd();

console.group("Вивести таблицю множення на 7.");

for (let i = 1; i <= 10; i++) {
  console.log(`${i} * 7 = ${i * 7}`);
}

console.groupEnd();

console.group("Знайти добуток усіх цілих чисел від 15 до 35.");

let sum = 15;
for (let i = 1; i <= 35; i++) {
  sum = sum + i;
}
console.log(sum);

console.groupEnd();

console.group("Знайти середнє арифметичне всіх цілих чисел від 1 до 500");

let value = 0;
for (let num = 1; num <= 500; num++) {
  value += num;
}
console.log(value / 2);

console.groupEnd();

console.group("Вивести суму лише парних чисел в діапазоні від 30 до 80.");

let index = 30;
let calc = 0;

while (index <= 80) {
  if (index % 2 === 0) {
    calc += index;
  }
  index++;
}
console.log(calc);

console.groupEnd();
