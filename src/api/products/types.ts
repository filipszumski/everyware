import { MdxSerializeResult } from "@/shared/types/MdxResult";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: Rating;
  image: string;
  longDescription: MdxSerializeResult;
}

interface Rating {
  rate: number;
  count: number;
}
