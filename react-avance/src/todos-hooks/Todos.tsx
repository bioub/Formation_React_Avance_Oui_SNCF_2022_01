import { Component, useCallback, useMemo, useState } from 'react';
import { Todo } from './model';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

// export default class Todos extends Component {
//   state = {
//     inputValue: '',
//     // todos: [
//     //   {
//     //     id: Math.random(),
//     //     title: 'ABC',
//     //     completed: true,
//     //   }, 
//     //   {
//     //     id: Math.random(),
//     //     title: 'ABC',
//     //     completed: false,
//     //   }
//     // ]
//     todos: (new Array(10_000)).fill({}).map((t, i) => ({id: i+1, title: 'ABC', completed: false}))
//   }

//   handleNewTodoAdd = (todo: string) => {
//     const { todos } = this.state;
//     this.setState({
//       todos: [...todos, {
//         id: Math.random(),
//         title: todo,
//         completed: false,
//       }],
//     });
//   }

//   handleNewTodoChange = (val: string) => {
//     this.setState({
//       inputValue: val,
//     });
//   }

//   handleDeleteItem = (todo: Todo) => {
      
//   }

//   render() {
//     const { inputValue, todos } = this.state;

//     return (
//       <div className="Todos">
//         <TodoForm newTodoInput={inputValue} onNewTodoAdd={this.handleNewTodoAdd} onNewTodoChange={this.handleNewTodoChange} />
//         <TodosList items={todos} onDeleteItem={this.handleDeleteItem} />
//       </div>
//     );
//   }
// }

export default function Todos() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>((new Array(10_000)).fill({}).map((t, i) => ({id: i+1, title: 'ABC', completed: false})));

  function handleNewTodoAdd(todo: string) {
   setTodos([...todos, {
    id: Math.random(),
    title: todo,
    completed: false,
  }]);
  }

  function handleNewTodoChange(val: string) {
    setInputValue(val);
  }

  // function handleDeleteItem(todo: Todo) {
      
  // }

  console.time('countCompleted');
  const countCompleted = useMemo(() => todos.filter((t) => t.completed).length, [todos]);
  console.log(countCompleted);
  console.timeEnd('countCompleted');

  // const handleDeleteItem = useMemo(() => function handleDeleteItem(todo: Todo) {}, [todos]);
  const handleDeleteItem = useCallback(function handleDeleteItem(todo: Todo) {}, [todos]);


  return (
    <div className="Todos">
      <TodoForm newTodoInput={inputValue} onNewTodoAdd={handleNewTodoAdd} onNewTodoChange={handleNewTodoChange} />
      <TodosList items={todos} onDeleteItem={handleDeleteItem} />
    </div>
  );
}