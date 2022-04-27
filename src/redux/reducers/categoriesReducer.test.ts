import { Category } from "../../types/Category";
import { CategoryState } from "../../types/CategoryState";
import {
  getCategoriesErrorAction,
  loadCategoriesAction,
  startLoadingCategoriesAction,
} from "../actions/actionCreator";
import categoriesReducer from "./categoriesReducer";

describe("Given a categories Reducer", () => {
  describe("When action is startLoadingCategories", () => {
    test("Then it should return state with isLoadingCategories true", () => {
      const action = startLoadingCategoriesAction();
      const currentState: CategoryState = { isLoading: false };

      const newState: CategoryState = categoriesReducer(currentState, action);
      const actualState: CategoryState = { isLoading: true };

      expect(newState).toStrictEqual(actualState);
    });
  });
  describe("When action is loadCategories", () => {
    test("Then it should return state with a list of categories", () => {
      const categories: Category[] = [
        {
          id: 1,
          title: "museus",
          description: "museus familuiars",
          activities: 10,
        },
        {
          id: 2,
          title: "jardins",
          description: "parcs i jardins",
          activities: 3,
        },
      ];
      const action = loadCategoriesAction(categories);
      const currentState: CategoryState = { isLoading: true };

      const newState: CategoryState = categoriesReducer(currentState, action);
      const actualState: CategoryState = {
        isLoading: false,
        categories: action.payload,
      };

      expect(newState).toStrictEqual(actualState);
    });
  });
  describe("When action is getCategoriesError", () => {
    test("Then it should return a state with an error", () => {
      const error = "Error";
      const action = getCategoriesErrorAction(error);
      const currentState: CategoryState = { isLoading: true };

      const newState = categoriesReducer(currentState, action);
      const actualState: CategoryState = {
        isLoading: false,
        error: action.payload,
      };

      expect(newState).toStrictEqual(actualState);
    });
  });
  describe("when action is not a valid action", () => {
    test("Then it should return the current state", () => {
      const action = {
        type: "not-valid",
      };
      const currentState: CategoryState = { isLoading: true };

      const newState = categoriesReducer(currentState, action);
      const actualState: CategoryState = { isLoading: true };

      expect(newState).toStrictEqual(actualState);
    });
  });
});
