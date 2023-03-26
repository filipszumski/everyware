export type ProductsApiResponse = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
};

type Category =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

type Rating = {
  rate: number;
  count: number;
};
