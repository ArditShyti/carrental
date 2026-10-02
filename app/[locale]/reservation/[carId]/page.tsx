import ReservationPage from "@/app/components/reservationClient";
import type { Metadata } from "next";
import { getCarById } from "../../../data/cars";
import { defaultLocale, isValidLocale } from "../../../i18n/config";

type Params = {
  locale: string;
  carId: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, carId } = await params;
  const resolvedLocale = isValidLocale(locale) ? locale : defaultLocale;
  const car = getCarById(carId, resolvedLocale);

  if (!car) {
    return {
      title: "Car Not Found | NextRental",
      description: "This car is not available.",
    };
  }

  return {
    title: `Rent ${car.name} in Albania | NextRental`,
    description: `${car.description.slice(0, 150)} Rent luxury cars in Albania with best prices.`,
    openGraph: {
      title: `Rent ${car.name} in Albania`,
      description: car.description,
      url: `https://nextrentaltirana.com/${locale}/reservation/${car.id}`,
      images: [
        {
          url: car.image,
          width: 1200,
          height: 630,
          alt: car.name,
        },
      ],
      type: "website",
    },
    alternates: {
      canonical: `/${locale}/reservation/${car.id}`,
    },
  };
}

export default function LocalizedReservationPage() {
  return <ReservationPage />;
}
