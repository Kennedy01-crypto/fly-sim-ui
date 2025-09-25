import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function FlightFilters() {
  return (
    <div className="flex items-center gap-3 py-4 px-6 border-b border-border bg-surface">
      {/* All filters */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-border hover:border-border-hover text-text-primary rounded-full px-4 py-2 h-auto">
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
          <Button variant="outline" className="border-border hover:border-border-hover text-text-primary rounded-full px-4 py-2 h-auto">
            Stops
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-surface border-border">
          <DropdownMenuItem>Any number of stops</DropdownMenuItem>
          <DropdownMenuItem>Nonstop only</DropdownMenuItem>
          <DropdownMenuItem>1 stop or fewer</DropdownMenuItem>
          <DropdownMenuItem>2 stops or fewer</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Airlines */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-border hover:border-border-hover text-text-primary rounded-full px-4 py-2 h-auto">
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
          <Button variant="outline" className="border-border hover:border-border-hover text-text-primary rounded-full px-4 py-2 h-auto">
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
          <Button variant="outline" className="border-border hover:border-border-hover text-text-primary rounded-full px-4 py-2 h-auto">
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
          <Button variant="outline" className="border-border hover:border-border-hover text-text-primary rounded-full px-4 py-2 h-auto">
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
          <Button variant="outline" className="border-border hover:border-border-hover text-text-primary rounded-full px-4 py-2 h-auto">
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
          <Button variant="outline" className="border-border hover:border-border-hover text-text-primary rounded-full px-4 py-2 h-auto">
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
          <Button variant="outline" className="border-border hover:border-border-hover text-text-primary rounded-full px-4 py-2 h-auto">
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