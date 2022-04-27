import { Category } from "../../types/Category";
import actionTypes from "./actionTypes";

export const loadCategoriesAction = (categories: Category[]) => ({
  type: actionTypes.loadCategories,
  payload: categories,
});

export const startLoadingCategoriesAction = () => ({
  type: actionTypes.startLoadingCategories,
});

export const getCategoriesErrorAction = (error: string) => ({
  type: actionTypes.getCategoriesError,
  payload: error,
});
