const memoize = require('lodash/memoize');

let todos = (new Array(1_000_000)).fill({}).map((t, i) => ({id: i+1, title: 'ABC', completed: Math.random() > 0.5}))

function countCompleted(todos) {
  return todos.filter((t) => t.completed).length;
}

const countCompletedMemo = memoize(countCompleted);

console.time('countCompleted');
console.log(countCompletedMemo(todos));
console.timeEnd('countCompleted');

// todos.push({
//   id: 0,
//   title: 'ABC',
//   completed: true,
// });

todos = [...todos, { id: 0, title: 'ABC',completed: true,}]

console.time('countCompleted');
console.log(countCompletedMemo(todos));
console.timeEnd('countCompleted');

console.time('countCompleted');
console.log(countCompletedMemo(todos));
console.timeEnd('countCompleted');