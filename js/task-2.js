const m = +prompt("Введіть число більше нуля");
const n = +prompt(`Введіть число більше ${m}`);
let result = 1;

for (let i = m; i< n; i++) {
    if(i % 2 !== 0) {
        result *= i;
    }
}
console.log(`Добуток непарних чисел ${result}, від ${m} до ${n}`);