import { Category } from "../../types/Category";
import { loadCategoriesAction } from "./actionCreator";

describe("Given an loadCategories action", () => {
  describe("When it receives a category array", () => {
    test("Then it should return a action with a category", () => {
      const categories: Category[] = [];

      const expectedAction = {
        type: "load-categories",
        payload: categories,
      };
      const action = loadCategoriesAction(categories);

      expect(action).toEqual(expectedAction);
    });
  });
});
