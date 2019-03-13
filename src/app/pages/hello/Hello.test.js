import React from "react";
import { render, cleanup } from "react-testing-library";
import { Hello } from "src/app/pages/hello/Hello.component";

afterEach(cleanup);
describe("Hello suite", () => {
  it("test simple welcome test", () => {
    const { getByTestId } = render(<Hello />);
    expect(getByTestId("init-message").textContent).toBe("welcome");
  });
});
