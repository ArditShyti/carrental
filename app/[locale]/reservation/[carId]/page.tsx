import ReservationPage from "@/app/components/reservationClient";
import type { Metadata } from "next";
import { getCarById } from "../../../data/cars";
import {
  defaultLocale,
  isValidLocale,
  locales,
} from "../../../i18n/config";

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
      title: "Car Not Found",
      description: "This car is not available.",
    };
  }

  const titleByLocale = {
    en: `Rent ${car.name} in Albania`,
    sq: `${car.name} me qira në Shqipëri`,
    it: `Noleggio ${car.name} in Albania`,
    de: `${car.name} in Albanien mieten`,
  };
  const descriptionByLocale = {
    en: `${car.description.slice(0, 150)} Rent cars in Albania with transparent pricing.`,
    sq: `Merrni me qira ${car.name} në Shqipëri. ${car.description.slice(0, 120)}`,
    it: `Noleggia ${car.name} in Albania. ${car.description.slice(0, 120)}`,
    de: `Mieten Sie den ${car.name} in Albanien. ${car.description.slice(0, 120)}`,
  };
  const pageTitle = titleByLocale[resolvedLocale];

  return {
    title: pageTitle,
    description: descriptionByLocale[resolvedLocale],
    openGraph: {
      title: pageTitle,
      description: car.description,
      url: `https://nextrentaltirana.com/${resolvedLocale}/reservation/${car.id}`,
      images: [
        {
          url: car.image,
          alt: car.name,
        },
      ],
      type: "website",
    },
    alternates: {
      canonical: `/${resolvedLocale}/reservation/${car.id}`,
      languages: Object.fromEntries(
        [
          ...locales.map((alternateLocale) => [
            alternateLocale,
            `/${alternateLocale}/reservation/${car.id}`,
          ]),
          ["x-default", `/en/reservation/${car.id}`],
        ],
      ),
    },
  };
}

export default function LocalizedReservationPage() {
  return <ReservationPage />;
}
