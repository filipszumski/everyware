import { serialize } from "next-mdx-remote/serialize";

export type MdxSerializeResult = Awaited<ReturnType<typeof serialize>>;
