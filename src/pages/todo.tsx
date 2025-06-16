import { useState, type FormEvent } from "react";

export default function Todo() {
  const [list, setList] = useState<string[]>([]);

  return (
    <>
      <section data-testid="todo-wrapper">
        {list.map((e, idx) => {
          return (
            <div data-testid="todo-item" key={`div:${idx}`}>
              {e}
            </div>
          );
        })}
      </section>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const input = e.currentTarget.elements.namedItem(
            "item"
          ) as HTMLInputElement;

          setList((prev) => {
            return [...prev, input.value];
          });
        }}
      >
        <input type="text" name="item" />
        <button>제출</button>
      </form>
    </>
  );
}
