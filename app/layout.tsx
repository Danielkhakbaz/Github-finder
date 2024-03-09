import { ReactNode } from "react";
import type { Metadata } from "next";
import Layout from "layout/layout";
import { InterFont } from "theme/font";
import "styles/globals.css";

export const metadata: Metadata = {
  title: "Home | Github Finder",
  description: "",
  icons: {
    icon: "/github-icon.png",
  },
  // other: {
  //   "theme-color": "#000000",
  //   "color-scheme": "dark",
  //   "twitter:title": "",
  //   "twitter:description": "",
  //   "twitter:url": "",
  //   "twitter:domain": "",
  //   "twitter:image": "",
  //   "twitter:card": "summary_large_image",
  //   "og:title": "",
  //   "og:description": "",
  //   "og:url": "",
  //   "og:image": "",
  //   "og:type": "website",
  // },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" data-theme="light">
      <body className={InterFont.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
