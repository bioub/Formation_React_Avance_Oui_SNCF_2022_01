interface Props {
  count: number;
  onIncrement(): void;
}

export function Counter({ count, onIncrement }: Props) {
  return (
    <button className="Counter" onClick={() => onIncrement()}>
      {count}
    </button>
  );
}
