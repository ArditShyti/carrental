import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NextRental and our mission to provide reliable luxury car rental services in Albania.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About NextRental",
    description:
      "Meet the team behind NextRental and discover our commitment to premium car rental experiences in Albania.",
    url: "https://nextrentaltirana.com/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
