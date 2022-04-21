import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When it is invoked", () => {
    test("Then it should be render a button", () => {
      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: "Log In" });

      expect(button).toBeInTheDocument();
    });
  });
});
