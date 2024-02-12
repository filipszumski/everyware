import { MdxSerializeResult } from "@/shared/types/mdxResult";

import { GetProductQuery } from "../generated/graphql";

export type ProductWithMarkdown = Omit<
  NonNullable<GetProductQuery["product"]>,
  "longDescription"
> & {
  longDescription: MdxSerializeResult;
};
