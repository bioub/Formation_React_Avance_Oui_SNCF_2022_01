import { SyntheticEvent } from "react";

interface Props {
  newTodoInput: string;
  onNewTodoChange(val: string): void;
  onNewTodoAdd(val: string): void;
}

export default function TodoForm({
  newTodoInput,
  onNewTodoChange,
  onNewTodoAdd,
}: Props) {
  function handleSubmit(event: SyntheticEvent<HTMLFormElement, Event>) {
    event.preventDefault();
    onNewTodoAdd(newTodoInput);
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={newTodoInput}
        onChange={(event) => onNewTodoChange(event.currentTarget.value)}
      />
      <button>+</button>
    </form>
  );
}