import { useState } from "react";
import {
  ArrowLeftRight,
  Calendar,
  ChevronDown,
  LocateFixed,
  MapPin,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

export function FlightSearchForm() {
  const [tripType, setTripType] = useState("round-trip");
  const [multiCitySegments, setMultiCitySegments] = useState([
    {
      from: "Nairobi",
      to: "Cape Town",
      date: null as Date | null,
    },
    {
      from: "Cape Town",
      to: "Paris",
      date: null as Date | null,
    },
  ]);

  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [travelClass, setTravelClass] = useState("economy");
  const [fromLocation, setFromLocation] = useState("Nairobi");
  const [toLocation, setToLocation] = useState("Paris");
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  // add segment
  const addSegment = () => {
    setMultiCitySegments([
      ...multiCitySegments,
      { from: "", to: "", date: null },
    ]);
  };
  // Handler to remove a segment
  const removeSegment = (idx: number) => {
    setMultiCitySegments(multiCitySegments.filter((_, i) => i !== idx));
  };
  const updateSegment = (
    idx: number,
    field: "from" | "to" | "date",
    value: string | Date | null
  ) => {
    setMultiCitySegments(
      multiCitySegments.map((seg, i) =>
        i === idx ? { ...seg, [field]: value } : seg
      )
    );
  };
  const formatDate = (date: Date | null) => {
    return date ? format(date, "EEE, MMM d") : "Select date";
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-4 bg-surface rounded-md shadow-sm border border-border m-4">
      {/* Trip Type Selector */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="text-text-secondary hover:text-text-primary text-sm border-0 h-auto p-2"
              >
                {tripType === "round-trip"
                  ? "Round trip"
                  : tripType === "one-way"
                  ? "One way"
                  : "Multi-city"}
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-4 bg-surface">
              <div className="flex flex-col gap-2">
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
            </PopoverContent>
          </Popover>

          {/* Passengers and Class */}
          <div className="flex items-center gap-4 ml-auto">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-text-secondary hover:text-text-primary text-sm border-0 h-auto p-2"
                >
                  <Users className="h-4 w-4 mr-2" />
                  {passengers.adults} <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4 bg-surface">
                <div className="space-y-4 ">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">Adults</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() =>
                          setPassengers((p) => ({
                            ...p,
                            adults: Math.max(1, p.adults - 1),
                          }))
                        }
                        disabled={passengers.adults <= 1}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center text-sm">
                        {passengers.adults}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() =>
                          setPassengers((p) => ({ ...p, adults: p.adults + 1 }))
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">Children</div>
                      <div className="text-xs text-text-secondary">
                        Aged 2-11
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() =>
                          setPassengers((p) => ({
                            ...p,
                            children: Math.max(0, p.children - 1),
                          }))
                        }
                        disabled={passengers.children <= 0}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center text-sm">
                        {passengers.children}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() =>
                          setPassengers((p) => ({
                            ...p,
                            children: p.children + 1,
                          }))
                        }
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
                        onClick={() =>
                          setPassengers((p) => ({
                            ...p,
                            infants: Math.max(0, p.infants - 1),
                          }))
                        }
                        disabled={passengers.infants <= 0}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center text-sm">
                        {passengers.infants}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() =>
                          setPassengers((p) => ({
                            ...p,
                            infants: p.infants + 1,
                          }))
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">Infants</div>
                      <div className="text-xs text-text-secondary">On Lap</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() =>
                          setPassengers((p) => ({
                            ...p,
                            infants: Math.max(0, p.infants - 1),
                          }))
                        }
                        disabled={passengers.infants <= 0}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center text-sm">
                        {passengers.infants}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() =>
                          setPassengers((p) => ({
                            ...p,
                            infants: p.infants + 1,
                          }))
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Select value={travelClass} onValueChange={setTravelClass}>
              <SelectTrigger className="w-auto border-0 h-auto p-2 text-text-secondary hover:text-text-primary ">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-surface">
                <SelectItem value="economy">Economy</SelectItem>
                <SelectItem value="premium-economy">Premium economy</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="first">First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center ">
          <Button className="bg-primary border border-primary/20 hover:bg-primary-hover text-primary-foreground px-8 py-3 text-base font-medium rounded-md">
            Search
          </Button>
        </div>
      </div>

      {/* Multi-city Segments */}
      {tripType === "multi-city" ? (
        <div className="flex flex-col gap-4">
          {multiCitySegments.map((seg, idx) => (
            <div className="flex items-center gap-4" key={idx}>
              {/* From Location */}
              <div className="flex-1">
                <div className="relative">
                  <Input
                    value={seg.from}
                    onChange={(e) => updateSegment(idx, "from", e.target.value)}
                    className="h-14 px-4 text-base border-input-border focus:border-input-border-focus rounded-sm"
                  />
                  <div className="absolute top-4 right-4 text-xs text-text-secondary">
                    <LocateFixed />
                  </div>
                </div>
              </div>
              {/* swap button */}
              <Button
                variant="ghost"
                size="sm"
                className="p-2 rounded-full hover:bg-hover"
                onClick={() => {
                  setMultiCitySegments(
                    multiCitySegments.map((s, i) =>
                      i === idx ? { ...s, from: s.to, to: s.from } : s
                    )
                  );
                }}
              >
                <ArrowLeftRight className="h-5 w-5 text-text-secondary" />
              </Button>
              {/* To Location */}
              <div className="flex-1">
                <div className="relative">
                  <Input
                    value={seg.to}
                    onChange={(e) => updateSegment(idx, "to", e.target.value)}
                    className="h-14 px-4 text-base border-input-border focus:border-input-border-focus rounded-sm"
                  />
                  <div className="absolute top-4 right-4 text-xs text-text-secondary">
                    <MapPin />
                  </div>
                </div>
              </div>
              {/* Departure Date */}
              <div className="flex-1">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-14 w-full justify-start text-left font-normal border-input-border hover:border-border-hover rounded-sm"
                    >
                      <Calendar className="mr-2 h-4 w-4 text-text-secondary" />
                      <div className="flex flex-col items-start">
                        <div className="text-xs text-text-secondary">Date</div>
                        <div className="text-sm text-text-primary">
                          {formatDate(seg.date)}
                        </div>
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-4 bg-surface">
                    <div className="text-sm text-text-secondary">
                      <input
                        type="date"
                        className="bg-surface"
                        value={seg.date ? format(seg.date, "yyyy-MM-dd") : ""}
                        onChange={(e) =>
                          updateSegment(
                            idx,
                            "date",
                            e.target.value ? new Date(e.target.value) : null
                          )
                        }
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              {/* Remove Button */}
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={() => removeSegment(idx)}
                disabled={multiCitySegments.length <= 1}
                aria-label="Remove segment"
              >
                <X className="h-5 w-5 text-text-secondary" />
              </Button>
            </div>
          ))}
          <Button
            className=" mt-2 w-fit bg-blue-500 hover:bg-blue-600 text-white"
            onClick={addSegment}
          >
            Add Segment
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {/* From Location */}
          <div className="flex-1">
            <div className="relative">
              <Input
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                className="h-14 px-4 text-base border-input-border focus:border-input-border-focus rounded-sm"
              />
              <div className="absolute top-4 right-4 text-xs text-text-secondary">
                <LocateFixed />
              </div>
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
                className="h-14 px-4 text-base border-input-border focus:border-input-border-focus rounded-sm"
              />
              <div className="absolute top-4 right-4 text-xs text-text-secondary">
                <MapPin />
              </div>
            </div>
          </div>

          {/* Departure Date */}
          <div className="flex-1">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-14 w-full justify-start text-left font-normal border-input-border hover:border-border-hover rounded-sm"
                >
                  <Calendar className="mr-2 h-4 w-4 text-text-secondary" />
                  <div className="flex flex-col items-start">
                    <div className="text-xs text-text-secondary">Departure</div>
                    <div className="text-sm text-text-primary">
                      {formatDate(departureDate)}
                    </div>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-4 bg-surface">
                <div className="text-sm text-text-secondary">
                  <input
                    type="date"
                    className="bg-surface "
                    value={
                      departureDate ? format(departureDate, "yyyy-MM-dd") : ""
                    }
                    onChange={(e) =>
                      setDepartureDate(
                        e.target.value ? new Date(e.target.value) : null
                      )
                    }
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Return Date */}
          {tripType === "round-trip" && (
            <div className="flex-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-14 w-full justify-start text-left font-normal border-input-border hover:border-border-hover rounded-sm"
                  >
                    <Calendar className="mr-2 h-4 w-4 text-text-secondary" />
                    <div className="flex flex-col items-start">
                      <div className="text-xs text-text-secondary">Return</div>
                      <div className="text-sm text-text-primary">
                        {formatDate(returnDate)}
                      </div>
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-4 bg-surface">
                  <div className="text-sm text-text-secondary">
                    <input
                      type="date"
                      className="bg-surface "
                      value={returnDate ? format(returnDate, "yyyy-MM-dd") : ""}
                      onChange={(e) =>
                        setReturnDate(
                          e.target.value ? new Date(e.target.value) : null
                        )
                      }
                      min={
                        departureDate
                          ? format(departureDate, "yyyy-MM-dd")
                          : undefined
                      }
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
