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
        ? "https://www.dapfy.com/docs/og.jpeg"
        : `https://www.dapfy.com/docs/api/og?title=${title}`;

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
        <meta name="twitter:site:domain" content="www.dapfy.com" />
        <meta name="twitter:url" content="https://www.dapfy.com/docs" />
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
    link: "https://github.com/dapfycom",
  },
  chat: {
    link: "https://t.me/dapfydotcom",
    icon: (
      <svg
        width="24"
        height="21"
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.5914 0.0395918C21.9293 0.284844 0.898886 8.65108 0.749936 8.72847C-0.12748 9.18423 -0.25237 9.84491 0.46738 10.2233C0.577396 10.2811 1.9371 10.738 3.48891 11.2386L6.3104 12.1487L12.7156 7.99298C16.2384 5.70735 19.2101 3.80707 19.3192 3.77012C19.5859 3.67987 19.7731 3.73129 19.7731 3.89484C19.7731 3.99348 18.6882 5.0307 14.7499 8.69728C11.9871 11.2694 9.65186 13.4451 9.56047 13.532L9.3944 13.69L9.20777 16.4598C9.10512 17.9833 9.02135 19.2841 9.02156 19.3507C9.02198 19.4515 9.05032 19.4715 9.19165 19.4705C9.54962 19.4681 9.77576 19.2862 11.2923 17.7808L12.7883 16.2959L13.058 16.4987C13.2064 16.6103 14.455 17.5583 15.8328 18.6053C17.2106 19.6523 18.4356 20.5541 18.555 20.6092C18.8261 20.7344 19.1848 20.7874 19.4345 20.7391C19.7058 20.6866 20.0433 20.3225 20.1866 19.9276C20.2493 19.7549 21.1331 15.566 22.1505 10.6187C23.5564 3.78319 24.0004 1.53563 24 1.25666C23.9995 0.864146 23.8527 0.441677 23.6537 0.25962C23.4228 0.0483586 22.8744 -0.0652322 22.5914 0.0395918Z"
          fill="white"
        />
      </svg>
    ),
  },

  docsRepositoryBase: "https://github.com/dapfycom/dapfy-docs",
  editLink: {
    text: "",
  },
  footer: {
    text: "Dapfy Docs",
  },
};

export default config;
