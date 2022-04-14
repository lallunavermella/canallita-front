import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it is invoked", () => {
    test("Then it should be rendered", () => {
      const testData = {
        title: "categoria 1",
        description: "description1",
        activities: 3,
      };

      render(
        <Card
          title={testData.title}
          description={testData.description}
          activities={testData.activities}
        />
      );

      const heading = screen.getByRole("heading", { name: "categoria 1" });

      expect(heading).toBeInTheDocument();
    });
  });
});
