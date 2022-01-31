import { Todo } from "./model";

interface Props {
  item: Todo;
  onDeleteItem(val: Todo): void;
}

export default function TodoItem({ item, onDeleteItem }: Props) {
  return (
    <div className="TodoItem">
      <span>{item.title}</span>
      <button onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}