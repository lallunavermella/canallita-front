import { Category } from "./Category";

export interface CategoryState {
  categories?: Category[];
  isLoading: boolean;
  error?: string;
}
