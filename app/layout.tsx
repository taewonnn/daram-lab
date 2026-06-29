import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "DaramLab",
    template: "%s | DaramLab",
  },
  description: "DaramLab은 Android 앱과 AI 서비스를 개발하는 1인 개발 스튜디오입니다.",
  metadataBase: new URL("https://daramlab.kr"),
  verification: {
    google: "XNVahPgzXC9DT4VkQLzPbC7Jktri7Gy1a60gLqZDYuQ",
  },
  openGraph: {
    siteName: "DaramLab",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
