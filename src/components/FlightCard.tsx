import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Leaf,
  Luggage,
  Monitor,
  Plane,
  Wifi,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface FlightSegment {
  departure: { time: string; airport: string; code: string };
  arrival: { time: string; airport: string; code: string };
  duration: string;
  airline: string;
  aircraft: string;
  flightNumber: string;
  class: string;
}

export interface FlightCardProps {
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

export function FlightCard({
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
              <Link
                to="/selected-flights"
                className="bg-surface rounded-full hover:bg-primary-hover border border-primary text-primary-foreground px-4 py-2 text-sm font-medium "
              >
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
