import { AnyAction } from "redux";
import { CategoryState } from "../../types/CategoryState";
import actionTypes from "../actions/actionTypes";

const categoriesReducer = (
  categoryState: CategoryState = { isLoading: false },
  action: AnyAction = { type: "" }
): CategoryState => {
  switch (action.type) {
    case actionTypes.loadCategories:
      return { isLoading: false, categories: action.payload };
    case actionTypes.startLoadingCategories:
      return { isLoading: true };
    case actionTypes.getCategoriesError:
      return { isLoading: false, error: action.payload };

    default:
      return categoryState;
  }
};

export default categoriesReducer;
