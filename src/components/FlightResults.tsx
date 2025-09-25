import { ArrowUpDown, ChevronDown, Info, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  route 
}: FlightCardProps) {
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
          <Button variant="ghost" size="sm" className="p-2">
            <ChevronDown className="h-4 w-4 text-text-secondary" />
          </Button>
        </div>
      </div>
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
      route: "CDG–NBO"
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
      route: "CDG–NBO"
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
      route: "CDG–NBO"
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