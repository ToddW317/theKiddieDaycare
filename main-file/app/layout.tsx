import type { Metadata } from "next";
import "@/public/scss/main.scss";
import InitAnimations from "@/components/layout/InitAnimations";

export const metadata: Metadata = {
  title: "The Kiddie Daycare",
  description: "Faith-filled Beginnings",
  keywords: [
    "course",
    "education",
    "school",
    "daycare",
    "faith-filled",
    "beginnings",
    "faith",
  ],
  authors: [
    {
      name: "Momentum Web Design, LLC",
      url: "https://twooten.dev",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children} <InitAnimations />
      </body>
    </html>
  );
}
