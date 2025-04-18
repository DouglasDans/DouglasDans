import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      new URL("https://www.notion.so/images/**"),
      new URL("https://prod-files-secure.s3.us-west-2.amazonaws.com/**"),
    ],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
