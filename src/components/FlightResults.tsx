import { ArrowUpDown, ChevronDown, ChevronUp, Info, Leaf, Luggage, Plane, Wifi, Zap, Monitor, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FlightSegment {
  departure: { time: string; airport: string; code: string; };
  arrival: { time: string; airport: string; code: string; };
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
  amenities
}: FlightCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-flight-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        {/* Flight Info */}
        <div className="flex items-center gap-6 flex-1">
          {/* Airline Logo */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-surface-container rounded-sm flex items-center justify-center text-xs font-medium">
              {logo}
            </div>
            <span className="text-sm text-text-secondary">{airline}</span>
          </div>

          {/* Times and Duration */}
          <div className="flex items-center gap-4">
            <div className="text-lg font-medium text-text-primary">{departure}</div>
            <div className="text-sm text-text-secondary">–</div>
            <div className="text-lg font-medium text-text-primary">{arrival}</div>
          </div>

          <div className="text-sm text-text-secondary">{duration}</div>

          {/* Route */}
          <div className="text-sm text-text-secondary">{route}</div>
        </div>

        {/* Stops */}
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-sm text-text-primary">{stops}</div>
            {stopDetails && (
              <div className="text-xs text-text-secondary">{stopDetails}</div>
            )}
          </div>

          {/* Emissions */}
          <div className="flex items-center gap-1 text-sm text-flight-emission">
            <Leaf className="h-4 w-4" />
            <span>{emissions}</span>
            <span className="text-xs">{emissionChange}</span>
          </div>

          {/* Price */}
          <div className="text-right">
            <div className="text-2xl font-medium text-flight-price">{price}</div>
            <div className="text-sm text-text-secondary">{trip}</div>
          </div>

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
          <div className="flex gap-8">
            {/* Flight Itinerary */}
            <div className="flex-1">
              {segments?.map((segment, index) => (
                <div key={index} className="mb-6">
                  <div className="flex items-start gap-4">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 border-2 border-text-secondary rounded-full bg-background"></div>
                      <div className="w-px h-12 bg-border"></div>
                      <div className="w-3 h-3 border-2 border-text-secondary rounded-full bg-background"></div>
                    </div>

                    {/* Flight Details */}
                    <div className="flex-1">
                      <div className="mb-2">
                        <div className="text-base font-medium text-text-primary">
                          {segment.departure.time} • {segment.departure.airport} ({segment.departure.code})
                        </div>
                        <div className="text-sm text-text-secondary">
                          Travel time: {segment.duration}
                        </div>
                      </div>

                      <div className="mb-2">
                        <div className="text-base font-medium text-text-primary">
                          {segment.arrival.time} • {segment.arrival.airport} ({segment.arrival.code})
                        </div>
                      </div>

                      <div className="text-sm text-text-secondary">
                        {segment.airline} • {segment.class} • {segment.aircraft} • {segment.flightNumber}
                      </div>
                    </div>
                  </div>

                  {layover && index < segments.length - 1 && (
                    <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
                      <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="text-sm font-medium">{layover}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Amenities */}
            {amenities && (
              <div className="w-80">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <Luggage className="h-4 w-4" />
                    <span>Average legroom ({amenities.legroom})</span>
                  </div>
                  
                  {amenities.power && (
                    <div className="flex items-center gap-3 text-sm text-text-secondary">
                      <Zap className="h-4 w-4" />
                      <span>In-seat USB outlet</span>
                    </div>
                  )}
                  
                  {amenities.entertainment && (
                    <div className="flex items-center gap-3 text-sm text-text-secondary">
                      <Monitor className="h-4 w-4" />
                      <span>Stream media to your device</span>
                    </div>
                  )}
                  
                  {amenities.wifi && (
                    <div className="flex items-center gap-3 text-sm text-text-secondary">
                      <Wifi className="h-4 w-4" />
                      <span>Wi-Fi for a fee</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-sm text-flight-emission">
                    <Leaf className="h-4 w-4" />
                    <span>Emissions estimate: {amenities.emissionsEstimate}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <Plane className="h-4 w-4" />
                    <span>Contrail warming potential: {amenities.contrailWarning}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="text-sm text-text-secondary">
                    Checked baggage not included in price • Fare non-refundable, taxes may be refundable • No ticket changes
                  </div>
                  <div className="text-sm text-text-secondary mt-2">
                    Bag and fare conditions depend on the return flight
                  </div>
                </div>
              </div>
            )}
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
          departure: { time: "18:20", airport: "Jomo Kenyatta International Airport", code: "NBO" },
          arrival: { time: "00:25+1", airport: "Zayed International Airport", code: "AUH" },
          duration: "5 hrs 5 min",
          airline: "Etihad",
          aircraft: "Airbus A320",
          flightNumber: "EY 768",
          class: "Economy"
        },
        {
          departure: { time: "02:30+1", airport: "Zayed International Airport", code: "AUH" },
          arrival: { time: "08:00+1", airport: "Paris Charles de Gaulle Airport", code: "CDG" },
          duration: "7 hrs 30 min",
          airline: "Etihad",
          aircraft: "Airbus A380",
          flightNumber: "EY 31",
          class: "Economy"
        }
      ],
      layover: "2 hrs 5 min layover • Abu Dhabi (AUH) • Overnight layover",
      amenities: {
        legroom: "76 cm",
        wifi: true,
        power: true,
        entertainment: true,
        emissionsEstimate: "307 kg CO2e",
        contrailWarning: "Medium"
      }
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
          departure: { time: "22:00", airport: "Paris Charles de Gaulle Airport", code: "CDG" },
          arrival: { time: "08:55+1", airport: "Zayed International Airport", code: "AUH" },
          duration: "6 hrs 55 min",
          airline: "Etihad",
          aircraft: "Airbus A350",
          flightNumber: "EY 32",
          class: "Economy"
        },
        {
          departure: { time: "10:50+1", airport: "Zayed International Airport", code: "AUH" },
          arrival: { time: "12:40+1", airport: "Jomo Kenyatta International Airport", code: "NBO" },
          duration: "4 hrs 50 min",
          airline: "Etihad",
          aircraft: "Boeing 787",
          flightNumber: "EY 769",
          class: "Economy"
        }
      ],
      layover: "1 hr 55 min layover • Abu Dhabi (AUH)",
      amenities: {
        legroom: "79 cm",
        wifi: true,
        power: true,
        entertainment: true,
        emissionsEstimate: "402 kg CO2e",
        contrailWarning: "Low"
      }
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
          departure: { time: "18:35", airport: "Paris Charles de Gaulle Airport", code: "CDG" },
          arrival: { time: "20:50", airport: "Frankfurt Airport", code: "FRA" },
          duration: "1 hr 15 min",
          airline: "Lufthansa",
          aircraft: "Airbus A320",
          flightNumber: "LH 1040",
          class: "Economy"
        },
        {
          departure: { time: "22:35", airport: "Frankfurt Airport", code: "FRA" },
          arrival: { time: "08:25+1", airport: "Zayed International Airport", code: "AUH" },
          duration: "6 hrs 50 min",
          airline: "Lufthansa",
          aircraft: "Airbus A350",
          flightNumber: "LH 630",
          class: "Economy"
        },
        {
          departure: { time: "10:50+1", airport: "Zayed International Airport", code: "AUH" },
          arrival: { time: "12:40+1", airport: "Jomo Kenyatta International Airport", code: "NBO" },
          duration: "4 hrs 50 min",
          airline: "Etihad",
          aircraft: "Boeing 787",
          flightNumber: "EY 769",
          class: "Economy"
        }
      ],
      layover: "1 hr 45 min layover • Frankfurt (FRA) • 2 hr 25 min layover • Abu Dhabi (AUH)",
      amenities: {
        legroom: "79 cm",
        wifi: false,
        power: true,
        entertainment: true,
        emissionsEstimate: "485 kg CO2e",
        contrailWarning: "Medium"
      }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Results Header */}
      <div className="flex items-center justify-between py-4 border-b border-border">
        <div>
          <h2 className="text-xl font-medium text-text-primary">Top departing flights</h2>
          <p className="text-sm text-text-secondary">
            Ranked based on price and convenience <Info className="inline h-4 w-4 ml-1" />  Prices include required taxes + fees for 1 adult. Optional charges and bag fees may apply.
          </p>
        </div>
        
        <Button variant="ghost" className="text-primary hover:text-primary-hover text-sm font-medium">
          <ArrowUpDown className="h-4 w-4 mr-2" />
          Sorted by top flights
        </Button>
      </div>

      {/* Flight Cards */}
      <div className="space-y-2 py-4">
        {flights.map((flight, index) => (
          <FlightCard key={index} {...flight} />
        ))}
        
        {/* View more flights */}
        <div className="text-center py-4">
          <Button variant="ghost" className="text-primary hover:text-primary-hover text-sm font-medium">
            <ChevronDown className="h-4 w-4 mr-2" />
            View more flights
          </Button>
        </div>
      </div>
    </div>
  );
}