import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";
import userEvent from "@testing-library/user-event";

// userEvent - 브라우저 상호작용 유틸
// screen - tag
// type - 행위
// textHaveContent - 포함하였는지에 대한 검증
// tobe - 명확하게 일치하는지 검증

describe("계산기", () => {
  // 초기값 0
  test("초기값", async () => {
    render(<Calculator />);
    const result = screen.getByTestId("result");
    expect(result).toHaveTextContent("0");
  });

  //Insert & slice
  test("insert & slice", async () => {
    render(<Calculator />);
    const result = screen.getByTestId("result");
    const numbersToClick = ["9", "9", "1"];
    const deleteBtn = screen.getByTestId("btn-delete");

    const insertNums = numbersToClick.map(async (e) => {
      const btn = screen.getByRole("button", { name: e + "" });
      return userEvent.click(btn);
    });

    await Promise.all(insertNums);
    expect(result.textContent).toBe("991");

    //삭제 클릭 시
    await userEvent.click(deleteBtn);
    expect(result.textContent).toBe("99");
  });
});
