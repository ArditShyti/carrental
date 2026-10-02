import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read travel guides, driving tips, and car rental advice from NextRental for trips across Albania.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "NextRental Blog",
    description:
      "Travel stories, rental tips, and destination guides for better road trips in Albania.",
    url: "https://nextrentaltirana.com/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
