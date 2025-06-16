import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";
import userEvent from "@testing-library/user-event";

test("계산", async () => {
  const user = userEvent.setup();
  render(<Calculator />);

  //   a ,b Input
  const inputA = screen.getByTestId("input-a");
  const inputB = screen.getByTestId("input-b");

  //   CalculBtn
  const addBtn = screen.getByTestId("btn-add");
  const minusBtn = screen.getByTestId("btn-minus");

  // 초기값 0
  const result = screen.getByTestId("result");
  expect(result).toHaveTextContent("0");

  await user.clear(inputA);
  await user.type(inputA, "5");
  await user.clear(inputB);
  await user.type(inputB, "3");
  await user.click(addBtn);

  expect(result).toHaveTextContent("8");
  await user.clear(inputA);
  await user.type(inputA, "5");
  await user.clear(inputB);
  await user.type(inputB, "3");
  await user.click(minusBtn);

  expect(result).toHaveTextContent("2");
});
