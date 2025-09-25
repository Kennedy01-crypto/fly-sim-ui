import { useState } from "react";
import { ArrowLeftRight, Calendar, ChevronDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function FlightSearchForm() {
  const [tripType, setTripType] = useState("round-trip");
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });
  const [travelClass, setTravelClass] = useState("economy");
  const [fromLocation, setFromLocation] = useState("Nairobi");
  const [toLocation, setToLocation] = useState("Paris");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-surface rounded-lg shadow-sm border border-border mt-6">
      {/* Trip Type Selector */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="tripType"
              value="round-trip"
              checked={tripType === "round-trip"}
              onChange={(e) => setTripType(e.target.value)}
              className="w-4 h-4 text-primary"
            />
            <span className="text-sm text-text-primary">Round trip</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="tripType"
              value="one-way"
              checked={tripType === "one-way"}
              onChange={(e) => setTripType(e.target.value)}
              className="w-4 h-4 text-primary"
            />
            <span className="text-sm text-text-primary">One way</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="tripType"
              value="multi-city"
              checked={tripType === "multi-city"}
              onChange={(e) => setTripType(e.target.value)}
              className="w-4 h-4 text-primary"
            />
            <span className="text-sm text-text-primary">Multi-city</span>
          </label>
        </div>

        {/* Passengers and Class */}
        <div className="flex items-center gap-4 ml-auto">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="text-text-secondary hover:text-text-primary text-sm border-0 h-auto p-2">
                <Users className="h-4 w-4 mr-2" />
                {passengers.adults} <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">Adults</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setPassengers(p => ({ ...p, adults: Math.max(1, p.adults - 1) }))}
                      disabled={passengers.adults <= 1}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center text-sm">{passengers.adults}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setPassengers(p => ({ ...p, adults: p.adults + 1 }))}
                    >
                      +
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">Children</div>
                    <div className="text-xs text-text-secondary">Aged 2-11</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setPassengers(p => ({ ...p, children: Math.max(0, p.children - 1) }))}
                      disabled={passengers.children <= 0}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center text-sm">{passengers.children}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setPassengers(p => ({ ...p, children: p.children + 1 }))}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">Infants</div>
                    <div className="text-xs text-text-secondary">In seat</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setPassengers(p => ({ ...p, infants: Math.max(0, p.infants - 1) }))}
                      disabled={passengers.infants <= 0}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center text-sm">{passengers.infants}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setPassengers(p => ({ ...p, infants: p.infants + 1 }))}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Select value={travelClass} onValueChange={setTravelClass}>
            <SelectTrigger className="w-auto border-0 h-auto p-2 text-text-secondary hover:text-text-primary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="economy">Economy</SelectItem>
              <SelectItem value="premium-economy">Premium economy</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="first">First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Search Form */}
      <div className="flex items-center gap-4">
        {/* From Location */}
        <div className="flex-1">
          <div className="relative">
            <Input
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              placeholder="Where from?"
              className="h-14 px-4 text-base border-input-border focus:border-input-border-focus rounded-lg"
            />
            <div className="absolute top-2 left-4 text-xs text-text-secondary">Where from?</div>
          </div>
        </div>

        {/* Swap Button */}
        <Button
          variant="ghost"
          size="sm"
          className="p-2 rounded-full hover:bg-hover"
          onClick={() => {
            const temp = fromLocation;
            setFromLocation(toLocation);
            setToLocation(temp);
          }}
        >
          <ArrowLeftRight className="h-5 w-5 text-text-secondary" />
        </Button>

        {/* To Location */}
        <div className="flex-1">
          <div className="relative">
            <Input
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              placeholder="Where to?"
              className="h-14 px-4 text-base border-input-border focus:border-input-border-focus rounded-lg"
            />
            <div className="absolute top-2 left-4 text-xs text-text-secondary">Where to?</div>
          </div>
        </div>

        {/* Departure Date */}
        <div className="flex-1">
          <Button
            variant="outline"
            className="h-14 w-full justify-start text-left font-normal border-input-border hover:border-border-hover rounded-lg"
          >
            <Calendar className="mr-2 h-4 w-4 text-text-secondary" />
            <div className="flex flex-col items-start">
              <div className="text-xs text-text-secondary">Departure</div>
              <div className="text-sm text-text-primary">Wed, Oct 1</div>
            </div>
          </Button>
        </div>

        {/* Return Date */}
        {tripType === "round-trip" && (
          <div className="flex-1">
            <Button
              variant="outline"
              className="h-14 w-full justify-start text-left font-normal border-input-border hover:border-border-hover rounded-lg"
            >
              <Calendar className="mr-2 h-4 w-4 text-text-secondary" />
              <div className="flex flex-col items-start">
                <div className="text-xs text-text-secondary">Return</div>
                <div className="text-sm text-text-primary">Fri, Oct 3</div>
              </div>
            </Button>
          </div>
        )}
      </div>

      {/* Search Button */}
      <div className="flex justify-center mt-6">
        <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 text-base font-medium rounded-full">
          Search
        </Button>
      </div>
    </div>
  );
}