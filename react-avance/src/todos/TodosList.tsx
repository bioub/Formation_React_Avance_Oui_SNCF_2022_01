import {PureComponent } from 'react';
import { Todo } from './model';

import TodoItem from './TodoItem';

interface Props {
  items: Todo[];
  onDeleteItem(val: Todo): void;
}

export default class TodosList extends PureComponent<Props> {
  // shouldComponentUpdate(nextProps: Props) {
  //   return this.props.items !== nextProps.items;
  // }
  render() {
    const { items, onDeleteItem } = this.props;
    return (
      <div>
        <div className="TodoList">
          {items.map((it) => (
            <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
          ))}
        </div>
      </div>
    );
  }
}