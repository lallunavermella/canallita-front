import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

describe("Given a Main page", () => {
  describe("When it is invoked", () => {
    test("Then it should be rendered a heading 'Canallita'", () => {
      const title = "`Canallita `";
      render(
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      );

      const expectedTitle = screen.getByRole("heading", { name: title });

      expect(expectedTitle).toBeInTheDocument();
    });
    test("Then it should be rendered a heading 'museus'", () => {
      const title = "museus";
      render(
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      );

      const expectedTitle = screen.getByRole("heading", { name: title });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
