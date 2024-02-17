import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

import { MdxSerializeResult } from "@/shared/types/mdxResult";
import { isExternalLink } from "@/shared/utilities/isExternalLink";

export const Markdown = ({ children }: { children: MdxSerializeResult }) => {
  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ href, children, ref, ...props }) => {
          if (!href || isExternalLink(href)) {
            return (
              <a
                href={href}
                ref={ref}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              >
                {children}
              </a>
            );
          }

          return (
            <Link
              ref={typeof ref !== "string" ? ref : undefined}
              href={href}
              {...props}
            >
              {children}
            </Link>
          );
        },
      }}
    />
  );
};
