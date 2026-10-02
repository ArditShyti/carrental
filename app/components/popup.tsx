"use client";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, XCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "../i18n/config";
import { getDictionary } from "../i18n/dictionary";

type PopupVariant = "reservation" | "contact";

type PopupProps = {
  show: boolean;
  type: "success" | "error";
  message: string;
  onClose: () => void;

  variant?: PopupVariant;
  image?: string;
};

export function Popup({
  show,
  type,
  message,
  onClose,
  image,
  variant = "contact", // default
}: PopupProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale);
  const popupLabels = dict.popupLabels;

  console.log("variant",variant);

  const isReservation = variant === "reservation";
  console.log("is resevation ",isReservation)
  // console.log("imageeee",image);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl w-[90%] max-w-md overflow-hidden"
          >
            {/* HEADER */}
            <div
              className={`p-5 text-white text-center ${
                type === "success"
                  ? "bg-gradient-to-r from-green-500 to-emerald-600"
                  : "bg-gradient-to-r from-red-500 to-rose-600"
              }`}
            >
              <div className="flex justify-center mb-2">
                {type === "success" ? (
                  <CheckCircle className="w-10 h-10" />
                ) : (
                  <XCircle className="w-10 h-10" />
                )}
              </div>

              <h3 className="text-lg font-bold">
                {type === "success"
                  ? popupLabels.successTitle
                  : popupLabels.errorTitle}
              </h3>
            </div>

            {/* IMAGE vetëm për reservation */}
            {isReservation && image && (
              <img
                src={image}
                alt="Car"
                className="w-full h-40 object-cover"
              />
            )}

            {/* BODY */}
            <div className="p-6 text-center">
              <p className="text-gray-600 whitespace-pre-line mb-5">
                {message}
              </p>

              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                {popupLabels.ok}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}