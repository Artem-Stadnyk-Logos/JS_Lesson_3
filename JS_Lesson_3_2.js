let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-Ролл');
console.log(styles);

styles.splice(-2, 1, 'Класика');
console.log(styles);

console.log(styles.shift());

styles.splice(0, 0, 'Реп', 'Реггі');
console.log(styles);


