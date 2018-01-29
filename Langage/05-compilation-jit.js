// Compilation Just In Time (JIT)
const sum = (a, b) => a + b;

console.time('sum');
console.log(sum(1, 2));
console.timeEnd('sum');

console.time('sum');
console.log(sum(1, 2));
console.timeEnd('sum');

console.time('sum');
console.log(sum(1, 2));
console.timeEnd('sum');

console.time('sum');
console.log(sum(1, 2));
console.timeEnd('sum');
