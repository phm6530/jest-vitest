import { render, screen } from "@testing-library/react";
import Todo from "./todo";
import userEvent from "@testing-library/user-event";

// Test코드는 해당 줄 실행때 그 당시의 청사진만 기억하고 있기에 공유 해서 사용못함
// 시나리오 형식으로 작성해야함 테스트 코드는

test("todo test", async () => {
  const user = userEvent.setup();

  render(<Todo />);
  // 초기는 빈상태
  const todoWrapper = screen.getByTestId("todo-wrapper");
  expect(todoWrapper).toBeInTheDocument();

  // item 빈상태
  const todoItems = screen.queryAllByAltText("todo-item");
  expect(todoItems).toHaveLength(0);

  // form을 통해 insert 이후 상태갱신
  const input = screen.getByRole("textbox");
  const submitButton = screen.getByRole("button", { name: /제출/i });

  // value 설정 및 클릭
  await user.type(input, "study");
  await user.click(submitButton);

  // list 추가되면 DOM 랜더 확인
  const updatedTodoItems = screen.getAllByTestId("todo-item");
  expect(updatedTodoItems).toHaveLength(1);
  expect(screen.getByText("study")).toBeInTheDocument();
});
