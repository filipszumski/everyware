import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

import { MdxSerializeResult } from "@/shared/types/MdxResult";

const isExternalLink = (href: string) => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  if (href.search(/^https?:\/\//) < 0) {
    return false;
  }
  return appUrl ? !href.includes(appUrl) : true;
};

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
