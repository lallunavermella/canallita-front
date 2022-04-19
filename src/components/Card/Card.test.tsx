import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it is invoked", () => {
    test("Then it should be rendered", () => {
      const testData = {
        id: 1,
        title: "categoria 1",
        description: "description1",
        activities: 3,
      };

      render(
        <BrowserRouter>
          <Card category={testData} />
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", { name: "categoria 1" });

      expect(heading).toBeInTheDocument();
    });
  });
});
