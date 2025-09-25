import { ArrowRight, Share2 } from "lucide-react";
import { FlightCard } from "@/components/FlightCard";
import { Luggage as HandBag } from "lucide-react";
import { BookingOptionCard } from "@/components/BookingOptionCard";
import { Link } from "react-router-dom";

interface SelectedFlight {
  airline: string;
  logo: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: string;
  stopDetails?: string;
  emissions: string;
  emissionChange: string;
  price: string;
  route: string;
}

// Example segments for each flight
const segments1: FlightSegment[] = [
  {
    departure: {
      time: "Sat 27 Sept · 23:10",
      airport: "Jomo Kenyatta International Airport",
      code: "NBO",
    },
    arrival: { time: "06:15¹", airport: "Heathrow Airport", code: "LHR" },
    duration: "9 hrs 5 min",
    airline: "British Airways",
    aircraft: "Airbus A350",
    flightNumber: "BA 64",
    class: "Economy",
  },
  {
    departure: { time: "10:55¹", airport: "Heathrow Airport", code: "LHR" },
    arrival: {
      time: "13:15¹",
      airport: "Paris Charles de Gaulle Airport",
      code: "CDG",
    },
    duration: "1 hr 20 min",
    airline: "British Airways",
    aircraft: "Airbus A320",
    flightNumber: "BA 308",
    class: "Economy",
  },
];

const segments2: FlightSegment[] = [
  // Add segments for the return flight as needed
];

const selectedFlights: FlightCardProps[] = [
  {
    airline: "British Airways",
    logo: "BA",
    departure: "Sat 27 Sept · 23:10",
    arrival: "13:15¹",
    duration: "15 hrs 5 min",
    stops: "1 stop",
    stopDetails: "4 hrs 40 min LHR",
    emissions: "410 kg CO2e",
    emissionChange: "-17% emissions",
    price: "US$1,028",
    trip: "entire trip",
    route: "NBO–CDG",
    segments: segments1,
    layover: "4 hrs 40 min layover · London (LHR)",
    amenities: {
      legroom: "79 cm",
      wifi: true,
      power: true,
      entertainment: true,
      emissionsEstimate: "363 kg CO2e",
      contrailWarning: "Low",
    },
  },
  {
    airline: "British Airways",
    logo: "BA",
    departure: "Wed 1 Oct · 08:10",
    arrival: "20:45",
    duration: "11 hrs 35 min",
    stops: "1 stop",
    stopDetails: "1 hr 15 min LHR",
    emissions: "414 kg CO2e",
    emissionChange: "-11% emissions",
    price: "US$1,028",
    trip: "entire trip",
    route: "CDG–NBO",
    segments: segments2,
    layover: "1 hr 15 min layover · London (LHR)",
    amenities: {
      legroom: "74 cm",
      wifi: true,
      power: true,
      entertainment: false,
      emissionsEstimate: "47 kg CO2e",
      contrailWarning: "Low",
    },
  },
];

export function SelectedFlightsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* share button */}
      <div className="flex justify-end mb-4">
        <button className="flex items-center gap-2 bg-surface hover:bg-surface-hover border border-border text-text-primary px-4 py-2 text-sm font-medium rounded-full">
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex flex-col">
          <h1 className="text-2xl flex gap-2 font-bold items-center text-text-primary mb-1">
            Nairobi <ArrowRight /> Paris
          </h1>
          <div className="text-sm text-text-secondary flex items-center gap-4">
            One way <span>·</span> Economy <span>·</span> 1 passenger
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-2xl font-semibold text-text-primary">
            US$1,028
          </span>
          <span className="text-xs text-text-secondary">
            Lowest total price
          </span>
        </div>
      </div>
      <div className="text-text-primary  text-xl font-semibold  mb-2">
        Selected flights
      </div>

      {/* Selected Flights */}
      <div className="bg-surface border border-border rounded-lg p-4">
        {/* display info as FlightCards as it is */}
        <div className="">
          {selectedFlights.map((flight, idx) => (
            <FlightCard
              key={idx}
              {...flight}
              className="border-b boder-border"
            />
          ))}
        </div>
      </div>

      {/* additional information */}
      <div className="mt-6 mb-2 border border-border rounded-lg p-4">
        <div className="flex items-center  gap-2">
          <div className="text-lg items-center font-sm text-text-primary mb-1">
            <HandBag className="inline w-5 h-5 mr-2" />1 free carry on per
            passenger
          </div>
          <div className="text-lg items-center font-sm text-text-primary mb-1">
            <HandBag className="inline w-5 h-5 mr-2" /> 1st checked bag per
            passenger available for a fee
          </div>
        </div>
        <div className="text-xs text-text-secondary flex items-center gap-1 mb-2">
          Fare non-refundable, taxes may be refundable • Ticket changes for a
          fee
        </div>
      </div>
      <div className="text-xs text-text-secondary mb-2">
        Baggage conditions apply to your entire trip. Baggage fees may be higher
        at the airport. Air France bag policy
      </div>
      {/* Booking options */}
      <div className="text-text-primary  text-xl font-semibold mt-3">
        Booking Options
      </div>
      <div className="text-xs text-text-secondary flex items-center gap-1 mb-2">
        How options are ranked
      </div>
      <div className="bg-surface border border-border rounded-lg py-1 mb-8 text-sm text-text-secondary">
        {/*  booking cards/components */}
        <div className="bg-surface ">
          <BookingOptionCard
            logo="/logos/travelwings.png"
            provider="Book with Travelwings"
            priceUSD="US$5,275"
            priceKES="KES 681,495"
            actionLabel="Continue"
            actionType="button"
          />
          <BookingOptionCard
            logo="/logos/airfrance.png"
            provider="Call Air France to book"
            providerType="Airline"
            note="Price includes an estimated airline phone service fee of US$25"
            priceUSD="US$5,839"
            priceKES="KES 754,374"
            actionLabel="Call airline"
            actionType="call"
            phoneNumber="000 33 9 69 39 36 54"
          />
        </div>
      </div>
      <div className="text-xs text-text-secondary flex items-center justify-end gap-1 mb-2 pb-2 border-b border-border">
        Prices include required taxes + fees for 5 passengers. Optional charges
        and bag fees may apply
      </div>
    </div>
  );
}
