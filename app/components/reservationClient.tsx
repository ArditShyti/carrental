"use client";
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { getCarById } from '../data/cars';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Users, 
  Fuel, 
  Gauge, 
  Zap, 
  TrendingUp, 
  Luggage,
  Check,
  Calendar,
  MapPin,
  User,
  Mail,
  Phone,
  CreditCard
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { FloatingContactButtons } from './FloatingContactButtons';
import { useState } from 'react';
import { getLocaleFromPathname, getLocalizedPath } from "../i18n/config";
import { getDictionary } from '../i18n/dictionary';
import { t } from "@/app/i18n/utils";
import emailjs from '@emailjs/browser';
import { Popup } from './popup';

type PopupVariant = "reservation" | "contact";


type PopupState = {
  show: boolean;
  type: "success" | "error";
  message: string;
  variant?: PopupVariant;
  image?: string;
};


export default function ReservationPage() {
  const params = useParams();
  const pathname = usePathname();
  const carId = params?.carId as string;
  const locale = getLocaleFromPathname(pathname);
  const car = carId ? getCarById(carId, locale) : undefined;
  const dict=getDictionary(locale);
  const popupLabels=dict.popupLabels;
  // console.log('Car ID from URL:', carId);
  // console.log('Car data:', car);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [popup, setPopup] = useState<PopupState>({
    show: false,
    type: "success",
    message: "",
    variant: "reservation",
    image: "",
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickupLocation: '',
    pickupDate: '',
    returnDate: '',
    driverLicense: '',
    specialRequests: ''
  });

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
          <Link href={getLocalizedPath("/", locale)}>
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const calculateDays = (pickupDate: string, returnDate: string) => {
    if (!pickupDate || !returnDate) return 0;
  
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
  
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_Second;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS reservation configuration is incomplete.");
      }

      const days = calculateDays(formData.pickupDate, formData.returnDate);
      const total = days * car.price;
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        carName: car.name,
        carPrice: `€${car.price}`,
        carImage: car.image,
        driverLicense: formData.driverLicense,
        pickupLocation: formData.pickupLocation,
        pickupDate: formData.pickupDate,
        returnDate: formData.returnDate,
        days,
        totalPrice: `€${total}`,
        specialRequests: formData.specialRequests,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setPopup({
        show: true,
        type: "success",
        image: car.image,
        message: t(popupLabels.popupSuccess, {
          car: car.name,
          days,
          total: `€${total}`,
        }),
        variant: "reservation",
      });

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        pickupLocation: '',
        pickupDate: '',
        returnDate: '',
        driverLicense: '',
        specialRequests: ''
      });
    } catch (error) {
      console.error("Failed to send reservation email:", error);
      setPopup({
        show: true,
        type: "error",
        message: popupLabels.errorMessage,
        variant: "reservation",
      });
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <Popup
        show={popup.show}
        type={popup.type}
        message={popup.message}
        image={popup.image}
        variant={popup.variant}
        onClose={() => setPopup({ ...popup, show: false })}
      />
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={getLocalizedPath("/", locale)}>
            <motion.button
              className="flex items-center gap-2 mb-4 hover:text-blue-200 transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              {dict.contactLabels.backToFleet}
            </motion.button>
          </Link>
          <motion.h1 
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t(dict.contactLabels.reserveYour, {
        car: car.name,
      })}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Car Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Car Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-64 md:h-96">
                  <img 
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-full text-white font-semibold shadow-lg">
                    {car.category}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Car Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {dict.carCardLabels.aboutthis}
                  </h2>
                  <p className="text-gray-600 mb-6">{car.description}</p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm text-gray-600">{dict.carCardLabels.passengers}</p>
                      <p className="font-bold">{car.passengers}</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Gauge className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm text-gray-600">{dict.carCardLabels.transmission}</p>
                      <p className="font-bold">{car.transmission}</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Fuel className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm text-gray-600">{dict.carCardLabels.Fueltype}</p>
                      <p className="font-bold">{car.fuelType}</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Luggage className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm text-gray-600">{dict.carCardLabels.luggage}</p>
                      <p className="font-bold">{car.specs.luggage}</p>
                    </div>
                  </div>

                  {/* Performance Specs */}
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {dict.carCardLabels.performance}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">{dict.carCardLabels.engine}</p>
                        <p className="font-semibold text-sm">{car.specs.engine}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">{dict.carCardLabels.acceleration}</p>
                        <p className="font-semibold text-sm">{car.specs.acceleration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Gauge className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">{dict.carCardLabels.top_speed}</p>
                        <p className="font-semibold text-sm">{car.specs.topSpeed}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {dict.carCardLabels.features_amenities}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {car.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                      >
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Reservation Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-8"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      {dict.contactLabels.completeReservation}
                    </h2>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-blue-600">€{car.price}</span>
                      <span className="text-gray-600">/{dict.carCardLabels.day}</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Personal Information */}
                    <div>
                      <Label htmlFor="fullName" className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4" />
                        {dict.contactLabels.full_name} *
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                        <Mail className="w-4 h-4" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4" />
                        {dict.contactLabels.phone_number} *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+355 68 111 1111"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <Label htmlFor="driverLicense" className="flex items-center gap-2 mb-2">
                        <CreditCard className="w-4 h-4" />
                        {dict.contactLabels.drivers_license} *
                      </Label>
                      <Input
                        id="driverLicense"
                        name="driverLicense"
                        required
                        placeholder="License Number"
                        value={formData.driverLicense}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>

                    {/* Rental Details */}
                    <div className="border-t pt-4 mt-4">
                      <h3 className="font-semibold mb-4">{dict.contactLabels.rental_details}</h3>
                      
                      <div className="mb-4">
                        <Label htmlFor="pickupLocation" className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4" />
                          {dict.contactLabels.pickupLocation} *
                        </Label>
                        <Input
                          id="pickupLocation"
                          name="pickupLocation"
                          required
                          placeholder="City or Address"
                          value={formData.pickupLocation}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>

                      <div className="mb-4">
                        <Label htmlFor="pickupDate" className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4" />
                          {dict.contactLabels.pickUpDate} *
                        </Label>
                        <Input
                          id="pickupDate"
                          name="pickupDate"
                          type="date"
                          required
                          value={formData.pickupDate}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>

                      <div className="mb-4">
                        <Label htmlFor="returnDate" className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4" />
                          {dict.contactLabels.returnDate} *
                        </Label>
                        <Input
                          id="returnDate"
                          name="returnDate"
                          type="date"
                          required
                          value={formData.returnDate}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <Label htmlFor="specialRequests" className="mb-2 block">
                          {dict.contactLabels.specialRequirements}
                        </Label>
                        <textarea
                          id="specialRequests"
                          name="specialRequests"
                          placeholder={dict.contactLabels.specialRequirements}
                          value={formData.specialRequests}
                          onChange={handleInputChange}
                          className="w-full min-h-20 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg shadow-lg"
                      >
                        {dict.contactLabels.completeReservation}
                      </Button>
                    </motion.div>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to our terms and conditions
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <FloatingContactButtons />
    </div>
  );
}
