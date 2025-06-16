import { useState } from "react";

export default function Calculator() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [calculatorText, setCalcaulator] = useState("");
  const [curNum, setCurNum] = useState("0");
  return (
    <>
      <div className="border p-2 border-zinc-700 mb-4 text-right">
        <div>{calculatorText}</div>
        <div className="text-2xl" data-testid="result">
          {curNum}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5">
        <div className="grid grid-cols-3 gap-2 col-span-3">
          {numbers.map((e) => {
            return (
              <button
                className="last-of-type:col-span-3"
                value={e}
                key={`num-btn-${e}`}
                onClick={(e) => {
                  const val =
                    curNum === "0"
                      ? e.currentTarget.value
                      : curNum + e.currentTarget.value;
                  setCurNum(val);
                }}
              >
                {e}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          <button data-testid="btn-reset" onClick={() => setCurNum("0")}>
            reset
          </button>
          <button
            data-testid="btn-delete"
            onClick={() =>
              setCurNum((prev) => {
                return prev.slice(0, -1);
              })
            }
          >
            c
          </button>
          <button data-testid="btn-add">+</button>
          <button data-testid="btn-minus">-</button>

          <button data-testid="">*</button>
          <button data-testid="">/</button>
          <button>enter</button>
        </div>
      </div>
    </>
  );
}
