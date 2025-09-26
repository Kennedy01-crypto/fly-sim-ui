import { Filter, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { X } from "lucide-react";

const stopOptions = [
  { label: "Any number of stops", value: "any" },
  { label: "Non-stop only", value: "nonstop" },
  { label: "One stop or fewer", value: "1stop" },
  { label: "Two stops or fewer", value: "2stop" },
];

export function FlightFilters() {
  const [selectedStop, setSelectedStop] = useState("any");

  const selectedStopLabel = stopOptions.find(
    (option) => option.value === selectedStop
  )?.label;

  return (
    <div className="flex items-center mx-auto max-w-6xl gap-1 py-1 px-6 border-b border-border ">
      {/* All filters */}
      {/* all filters */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-border hover:border-border-hover text-text-primary  px-4 py-2 h-auto"
          >
            <Filter className="h-4 w-4 mr-2" />
            All filters
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 bg-surface border-border">
          <div className="p-4">
            <div className="text-lg font-medium mb-4">All filters</div>
            {/* Filter content would go here */}
            <div className="text-sm text-text-secondary">Filter options...</div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Stops */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={`border-border hover:border-border-hover text-text-primary rounded-lg px-4 py-2 h-auto} ${
              selectedStop === "any"
                ? "bg-muted font-medium"
                : "text-text-secondary border-blue-700"
            }`}
          >
            {selectedStop === "any" ? (
              <span className="flex gap-3 items-center">
                Stops
                <ChevronDown className="h-4 w-4 ml-2" />
              </span>
            ) : (
              <span
                className="flex gap-3 items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedStop("any");
                }}
              >
                <X className="h-4 w-4 " aria-label="clear stops filter" />
                {selectedStopLabel}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-surface border-border min-w-[260px]">
          <div className="p-4">
            <div className="font-medium mb-4 flex items-center justify-between">
              <span>Stops</span>
              <button
                className="text-text-secondary hover:text-text-primary text-sm"
                onClick={() => setSelectedStop("any")}
                disabled={selectedStop === "any"}
              >
                Clear
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {stopOptions.map((opt) => (
                <button
                  key={opt.value}
                  className={`flex items-center gap-3 text-left px-2 py-2 rounded hover:bg-muted transition ${
                    selectedStop === opt.value
                      ? "bg-muted font-medium"
                      : "text-text-secondary"
                  }`}
                  onClick={() => setSelectedStop(opt.value)}
                >
                  <span
                    className={`inline-block w-4 h-4 rounded-full border mr-2 ${
                      selectedStop === opt.value
                        ? "bg-primary border-primary"
                        : "border-border"
                    }`}
                  >
                    {selectedStop === opt.value && (
                      <span className="block w-2 h-2 bg-white rounded-full m-1" />
                    )}
                  </span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Airlines */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-border hover:border-border-hover text-text-primary rounded-lg px-4 py-2 h-auto"
          >
            Airlines
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-surface border-border">
          <DropdownMenuItem>Any airline</DropdownMenuItem>
          <DropdownMenuItem>Etihad Airways</DropdownMenuItem>
          <DropdownMenuItem>Lufthansa</DropdownMenuItem>
          <DropdownMenuItem>Emirates</DropdownMenuItem>
          <DropdownMenuItem>Air France</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Bags */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-border hover:border-border-hover text-text-primary rounded-lg px-4 py-2 h-auto"
          >
            Bags
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-surface border-border">
          <DropdownMenuItem>No bag preference</DropdownMenuItem>
          <DropdownMenuItem>Carry-on bag</DropdownMenuItem>
          <DropdownMenuItem>Checked bag</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Price */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-border hover:border-border-hover text-text-primary rounded-lg px-4 py-2 h-auto"
          >
            Price
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-surface border-border">
          <DropdownMenuItem>Any price</DropdownMenuItem>
          <DropdownMenuItem>Under $500</DropdownMenuItem>
          <DropdownMenuItem>$500 - $1000</DropdownMenuItem>
          <DropdownMenuItem>Over $1000</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Times */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-border hover:border-border-hover text-text-primary rounded-lg px-4 py-2 h-auto"
          >
            Times
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-surface border-border">
          <DropdownMenuItem>Any departure time</DropdownMenuItem>
          <DropdownMenuItem>Morning (6 AM - 12 PM)</DropdownMenuItem>
          <DropdownMenuItem>Afternoon (12 PM - 6 PM)</DropdownMenuItem>
          <DropdownMenuItem>Evening (6 PM - 12 AM)</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Emissions */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-border hover:border-border-hover text-text-primary rounded-lg px-4 py-2 h-auto"
          >
            Emissions
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-surface border-border">
          <DropdownMenuItem>Any emissions</DropdownMenuItem>
          <DropdownMenuItem>Lower emissions</DropdownMenuItem>
          <DropdownMenuItem>Lowest emissions</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Connecting airports */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-border hover:border-border-hover text-text-primary rounded-lg px-4 py-2 h-auto"
          >
            Connecting airports
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-surface border-border">
          <DropdownMenuItem>Any airport</DropdownMenuItem>
          <DropdownMenuItem>Major airports only</DropdownMenuItem>
          <DropdownMenuItem>Exclude specific airports</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Duration */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-border hover:border-border-hover text-text-primary rounded-lg px-4 py-2 h-auto"
          >
            Duration
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-surface border-border">
          <DropdownMenuItem>Any duration</DropdownMenuItem>
          <DropdownMenuItem>Under 10 hours</DropdownMenuItem>
          <DropdownMenuItem>10-20 hours</DropdownMenuItem>
          <DropdownMenuItem>Over 20 hours</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
