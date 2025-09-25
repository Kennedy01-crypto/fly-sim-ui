import {
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  Info,
  Leaf,
  Luggage,
  Plane,
  Wifi,
  Zap,
  Monitor,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";  
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FlightSegment {
  departure: { time: string; airport: string; code: string };
  arrival: { time: string; airport: string; code: string };
  duration: string;
  airline: string;
  aircraft: string;
  flightNumber: string;
  class: string;
}

interface FlightCardProps {
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
  trip: string;
  route: string;
  segments?: FlightSegment[];
  layover?: string;
  amenities?: {
    legroom: string;
    wifi: boolean;
    power: boolean;
    entertainment: boolean;
    emissionsEstimate: string;
    contrailWarning: string;
  };
}

function FlightCard({
  airline,
  logo,
  departure,
  arrival,
  duration,
  stops,
  stopDetails,
  emissions,
  emissionChange,
  price,
  trip,
  route,
  segments,
  layover,
  amenities,
}: FlightCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-flight-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        {/* Flight Info */}
        <div className="flex items-center gap-6 flex-[2] min-w-0">
          {/* Airline Logo */}
          <div className="flex items-center gap-3 w-12">
            <div className="w-6 h-6 bg-surface-container rounded-sm flex items-center justify-center text-xs font-medium">
              {logo}
            </div>
          </div>

          {/* Times and Duration */}
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <div className="text-lg font-medium text-text-primary">
                {departure}
              </div>
              <div className="text-sm text-text-secondary">–</div>
              <div className="text-lg font-medium text-text-primary">
                {arrival}
              </div>
            </div>
            <span className="text-sm text-text-secondary">{airline}</span>
          </div>
        </div>

        {/* Stops , Emissions, Price, Expand*/}
        <div
          className={`flex items-center gap-6  min-w-0  ${
            isExpanded ? "flex-[1.5]" : "flex-[2]"
          }`}
        >
          {/* Route and Time */}

          {!isExpanded && (
            <>
              <div className="flex flex-col min-w-0">
                <div className="text-md text-text-primary">{duration}</div>
                <div className="text-sm text-text-secondary">{route}</div>
              </div>
              <div className="text-start flex-1 min-w-0">
                <div className="text-md text-text-primary">{stops}</div>
                {stopDetails && (
                  <div className="text-xs text-text-secondary">
                    {stopDetails}
                  </div>
                )}
              </div>
            </>
          )}

          {/* Emissions */}
          <div className="flex flex-col items-center gap-1 text-sm text-flight-emission min-w-0">
            <span className="text-md text-text-primary">{emissions}</span>
            <span className="text-xs">{emissionChange}</span>
          </div>

          {/* Price */}

          <div className="text-right flex-1 min-w-0">
            <div className="text-2xl font-medium text-flight-price">
              {price}
            </div>
            <div className="text-sm text-text-secondary">{trip}</div>
          </div>

          {/* Select this flight: only visisble if isExpanded is true */}
          {isExpanded && (
            <div className="flex flex-col items-end">
              <Link to="/selected-flights" className="bg-surface rounded-full hover:bg-primary-hover border border-primary text-primary-foreground px-4 py-2 text-sm font-medium ">
                Select flight
              </Link>
            </div>
          )}

          {/* Expand button */}
          <Button
            variant="ghost"
            size="sm"
            className="p-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4 text-text-secondary" />
            ) : (
              <ChevronDown className="h-4 w-4 text-text-secondary" />
            )}
          </Button>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-4 p-4 bg-surface border-t border-border animate-accordion-down">
          {segments?.map((segment, idx) => (
            <div key={idx}>
              <div className="flex gap-8">
                {/* Timeline & Segment Info */}
                <div className="flex-1 flex">
                  {/* Timeline */}
                  <div className="flex flex-col items-center pt-2 mr-4"></div>
                  {/* Segment Info */}
                  <div className="flex-1">
                    {/* Departure */}
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary rounded-full bg-background"></span>

                      <span className="text-lg font-medium text-text-primary">
                        {segment.departure.time}
                      </span>
                      <span className="text-base font-medium text-text-primary">
                        • {segment.departure.airport} ({segment.departure.code})
                      </span>
                    </div>
                    <div className="text-sm text-text-secondary flex items-center gap-2 ml-7">
                      Travel time: {segment.duration}
                      {/* Example: Overnight warning */}
                      {segment.departure.time.includes("23") && (
                        <>
                          <span>• Overnight</span>
                          <AlertTriangle className="h-4 w-4 text-amber-500" />
                        </>
                      )}
                    </div>
                    {/* Arrival */}
                    <div className="flex items-center gap-2 mt-2 ">
                      <span className="w-4 h-4 border-2 border-primary rounded-full bg-background"></span>
                      <span className="text-lg font-medium text-text-primary">
                        {segment.arrival.time}
                      </span>
                      <span className="text-base font-medium text-text-primary">
                        • {segment.arrival.airport} ({segment.arrival.code})
                      </span>
                    </div>
                    {/* Airline, class, aircraft, flight number */}
                    <div className="text-sm text-text-secondary mt-1 ml-7">
                      {segment.airline} • {segment.class} • {segment.aircraft} •{" "}
                      {segment.flightNumber}
                    </div>
                  </div>
                </div>
                {/* Amenities (only for the first segment, or you can show for each if you want) */}
                {idx === 0 && amenities && (
                  <div className="w-80 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <Luggage className="h-4 w-4" />
                      <span>
                        {amenities.legroom.includes("Below")
                          ? "Below-average legroom"
                          : "Average legroom"}{" "}
                        ({amenities.legroom})
                      </span>
                    </div>
                    {amenities.wifi && (
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <Wifi className="h-4 w-4" />
                        <span>Wi-Fi for a fee</span>
                      </div>
                    )}
                    {amenities.power && (
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <Zap className="h-4 w-4" />
                        <span>In-seat power and USB outlets</span>
                      </div>
                    )}
                    {amenities.entertainment && (
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <Monitor className="h-4 w-4" />
                        <span>On-demand video</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-flight-emission">
                      <Leaf className="h-4 w-4" />
                      <span>
                        Emissions estimate: {amenities.emissionsEstimate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <Plane className="h-4 w-4" />
                      <span>
                        Contrail warming potential: {amenities.contrailWarning}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              {/* Layover */}
              {segments.length > 1 && idx < segments.length - 1 && (
                <div className="flex items-center my-6 border-y border-border">
                  <div className="px-4 py-4  text-center text-text-primary font-medium whitespace-nowrap">
                    {/* You may want to pass layover info as an array for each stop */}
                    {Array.isArray(layover)
                      ? layover[idx]
                      : layover || "Layover"}
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* Summary note */}
          <div className="mt-4 text-sm text-text-secondary">
            Checked baggage for a fee • Fare non-refundable, taxes may be
            refundable • Ticket changes for a fee
            <br />
            Bag and fare conditions depend on the flight selected in the next
            step
          </div>
        </div>
      )}
    </div>
  );
}

export function FlightResults() {
  const flights: FlightCardProps[] = [
    {
      airline: "Etihad",
      logo: "EY",
      departure: "10:30 AM",
      arrival: "6:05 AM+1",
      duration: "18 hr 35 min",
      stops: "1 stop",
      stopDetails: "6 hr 40 min AUH",
      emissions: "709 kg CO2e",
      emissionChange: "+53% emissions",
      price: "$927",
      trip: "round trip",
      route: "CDG–NBO",
      segments: [
        {
          departure: {
            time: "18:20",
            airport: "Jomo Kenyatta International Airport",
            code: "NBO",
          },
          arrival: {
            time: "00:25+1",
            airport: "Zayed International Airport",
            code: "AUH",
          },
          duration: "5 hrs 5 min",
          airline: "Etihad",
          aircraft: "Airbus A320",
          flightNumber: "EY 768",
          class: "Economy",
        },
        {
          departure: {
            time: "02:30+1",
            airport: "Zayed International Airport",
            code: "AUH",
          },
          arrival: {
            time: "08:00+1",
            airport: "Paris Charles de Gaulle Airport",
            code: "CDG",
          },
          duration: "7 hrs 30 min",
          airline: "Etihad",
          aircraft: "Airbus A380",
          flightNumber: "EY 31",
          class: "Economy",
        },
      ],
      layover: "2 hrs 5 min layover • Abu Dhabi (AUH) • Overnight layover",
      amenities: {
        legroom: "76 cm",
        wifi: true,
        power: true,
        entertainment: true,
        emissionsEstimate: "307 kg CO2e",
        contrailWarning: "Medium",
      },
    },
    {
      airline: "Etihad",
      logo: "EY",
      departure: "10:00 PM",
      arrival: "12:40 PM+1",
      duration: "13 hr 40 min",
      stops: "1 stop",
      stopDetails: "1 hr 55 min AUH",
      emissions: "652 kg CO2e",
      emissionChange: "+41% emissions",
      price: "$927",
      trip: "round trip",
      route: "CDG–NBO",
      segments: [
        {
          departure: {
            time: "22:00",
            airport: "Paris Charles de Gaulle Airport",
            code: "CDG",
          },
          arrival: {
            time: "08:55+1",
            airport: "Zayed International Airport",
            code: "AUH",
          },
          duration: "6 hrs 55 min",
          airline: "Etihad",
          aircraft: "Airbus A350",
          flightNumber: "EY 32",
          class: "Economy",
        },
        {
          departure: {
            time: "10:50+1",
            airport: "Zayed International Airport",
            code: "AUH",
          },
          arrival: {
            time: "12:40+1",
            airport: "Jomo Kenyatta International Airport",
            code: "NBO",
          },
          duration: "4 hrs 50 min",
          airline: "Etihad",
          aircraft: "Boeing 787",
          flightNumber: "EY 769",
          class: "Economy",
        },
      ],
      layover: "1 hr 55 min layover • Abu Dhabi (AUH)",
      amenities: {
        legroom: "79 cm",
        wifi: true,
        power: true,
        entertainment: true,
        emissionsEstimate: "402 kg CO2e",
        contrailWarning: "Low",
      },
    },
    {
      airline: "Lufthansa, Etihad",
      logo: "LH",
      departure: "6:35 PM",
      arrival: "12:40 PM+1",
      duration: "17 hr 5 min",
      stops: "2 stops",
      stopDetails: "FRA, AUH",
      emissions: "694 kg CO2e",
      emissionChange: "+50% emissions",
      price: "$1,378",
      trip: "round trip",
      route: "CDG–NBO",
      segments: [
        {
          departure: {
            time: "18:35",
            airport: "Paris Charles de Gaulle Airport",
            code: "CDG",
          },
          arrival: { time: "20:50", airport: "Frankfurt Airport", code: "FRA" },
          duration: "1 hr 15 min",
          airline: "Lufthansa",
          aircraft: "Airbus A320",
          flightNumber: "LH 1040",
          class: "Economy",
        },
        {
          departure: {
            time: "22:35",
            airport: "Frankfurt Airport",
            code: "FRA",
          },
          arrival: {
            time: "08:25+1",
            airport: "Zayed International Airport",
            code: "AUH",
          },
          duration: "6 hrs 50 min",
          airline: "Lufthansa",
          aircraft: "Airbus A350",
          flightNumber: "LH 630",
          class: "Economy",
        },
        {
          departure: {
            time: "10:50+1",
            airport: "Zayed International Airport",
            code: "AUH",
          },
          arrival: {
            time: "12:40+1",
            airport: "Jomo Kenyatta International Airport",
            code: "NBO",
          },
          duration: "4 hrs 50 min",
          airline: "Etihad",
          aircraft: "Boeing 787",
          flightNumber: "EY 769",
          class: "Economy",
        },
      ],
      layover:
        "1 hr 45 min layover • Frankfurt (FRA) • 2 hr 25 min layover • Abu Dhabi (AUH)",
      amenities: {
        legroom: "79 cm",
        wifi: false,
        power: true,
        entertainment: true,
        emissionsEstimate: "485 kg CO2e",
        contrailWarning: "Medium",
      },
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Results Header */}
      <div className="flex items-center justify-between py-4 border-b border-border">
        <div>
          <h2 className="text-xl font-medium text-text-primary">Top Flights</h2>
          <p className="text-sm text-text-secondary">
            Ranked based on price and convenience{" "}
            <Info className="inline h-4 w-4 ml-1" /> Prices include required
            taxes + fees for 1 adult. Optional charges and bag fees may apply.
          </p>
        </div>

        <Button
          variant="ghost"
          className="text-primary hover:text-primary-hover text-sm font-medium"
        >
          <ArrowUpDown className="h-4 w-4 mr-2" />
          Sorted by top flights
        </Button>
      </div>

      {/* Flight Cards */}
      <div className="space-y-2 py-4">
        {flights.map((flight, index) => (
          <FlightCard key={index} {...flight} />
        ))}
      </div>

      <div className="flex items-center justify-between py-4 border-b border-border">
        <div>
          <h2 className="text-xl font-medium text-text-primary">
            Other Flights
          </h2>
        </div>
      </div>

      {/* Flight Cards */}
      <div className="space-y-2 py-4">
        {flights.map((flight, index) => (
          <FlightCard key={index} {...flight} />
        ))}
      </div>
    </div>
  );
}
