import ReservationPage from "@/app/components/reservationClient";
import type { Metadata } from "next";
import { getCarById } from "../../data/cars";

type Params = {
  carId: string;
};

// 🔥 METADATA (SERVER SAFE)
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {

  const { carId } = await params;
  const car = getCarById(carId);

  if (!car) {
    return {
      title: "Car Not Found | DriveXpress",
      description: "This car is not available.",
    };
  }

  return {
    title: `Rent ${car.name} in Albania | NextRental`,
    description: `${car.description.slice(0, 150)} Rent luxury cars in Albania with best prices.`,
    keywords: [
      car.name,
      "car rental Albania",
      "rent car Tirana",
      "luxury car rental Albania",
      "cheap car rental Albania",
      "rent a car Tirana",
      "rent a car Rinas",
      "rent a car Durres",
      "luxury car rental Rinas",
      car.category,
    ],

    openGraph: {
      title: `Rent ${car.name} in Albania`,
      description: car.description,
      url: `https://nextrentaltirana.com/reservation/${car.id}`,
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

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ReservationServer({
  params,
}: {
  params: Promise<{ carId: string }>;
}) {

  const { carId } = await params;

  const car = getCarById(carId);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <>
      <ReservationPage />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: car.name,
            image: car.image,
            description: car.description,
            offers: {
              "@type": "Offer",
              price: car.price,
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
            },
            brand: {
              "@type": "Brand",
              name: "DriveXpress",
            },
          }),
        }}
      />
    </>
  );
}