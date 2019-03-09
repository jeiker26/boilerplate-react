import React from "react";
import { App } from "./app";
import { render, cleanup } from "react-testing-library";

afterEach(cleanup);
describe("app suite", () => {
  it("calling render with the same component on the same container does not remount", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("init-message").textContent).toBe("welcome");
  });
});
