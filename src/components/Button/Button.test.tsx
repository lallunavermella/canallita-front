import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is invoked", () => {
    test("It should be rendered with text 'Log In'", () => {
      const text = "Log In";
      const action = jest.fn();

      render(<Button text={text} action={action} />);

      const button: HTMLElement = screen.getByRole("button", {
        name: text,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
