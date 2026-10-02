import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact NextRental for booking support, pricing, and premium car rental inquiries in Albania.",
  alternates: {
    canonical: "/contacts",
  },
  openGraph: {
    title: "Contact NextRental",
    description:
      "Reach the NextRental team for reservations, questions, and customer support in Albania.",
    url: "https://nextrentaltirana.com/contacts",
    type: "website",
  },
};

export default function ContactsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
