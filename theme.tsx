import Head from "next/head";
import type { NextraThemeLayoutProps } from "nextra";

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { title, frontMatter, headings } = pageOpts;

  return (
    <div>
      <Head>
        <title>Dapfy</title>
        <meta name="og:image" content={frontMatter.image} />
      </Head>
      {children}
    </div>
  );
}
