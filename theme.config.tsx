import Image from "next/image";
import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Dapfy",
      };
    }
  },

  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://nextra.site/og.jpeg"
        : `https://nextra.site/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta
          name="og:description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta name="og:title" content={title ? title + " – Dapfy" : "Dapfy"} />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Dapfy" />
        <link rel="icon" href="/docs/favicon-white.ico" />
        <link
          rel="icon"
          href="/docs/favicon-white.ico"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  logo: (
    <Image src={"/docs/logo-white.png"} alt="Dapfy" width={140} height={80} />
  ),
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Dapfy Docs",
  },
};

export default config;
