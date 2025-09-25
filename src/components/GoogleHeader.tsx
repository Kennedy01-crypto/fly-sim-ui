import { Search, Menu, GridIcon, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GoogleHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-border">
      {/* Left side - Menu and Google branding */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="p-2">
          <Menu className="h-5 w-5 text-text-secondary" />
        </Button>
        
        {/* Google logo area */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-normal text-google-blue">G</span>
              <span className="text-2xl font-normal text-google-red">o</span>
              <span className="text-2xl font-normal text-google-yellow">o</span>
              <span className="text-2xl font-normal text-google-blue">g</span>
              <span className="text-2xl font-normal text-google-green">l</span>
              <span className="text-2xl font-normal text-google-red">e</span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Button variant="ghost" className="text-text-secondary hover:text-text-primary text-sm font-normal">
              Travel
            </Button>
            <Button variant="ghost" className="text-text-secondary hover:text-text-primary text-sm font-normal">
              Explore
            </Button>
            <Button variant="ghost" className="text-primary border-b-2 border-primary font-medium text-sm bg-selected hover:bg-selected">
              Flights
            </Button>
            <Button variant="ghost" className="text-text-secondary hover:text-text-primary text-sm font-normal">
              Hotels
            </Button>
            <Button variant="ghost" className="text-text-secondary hover:text-text-primary text-sm font-normal">
              Vacation rentals
            </Button>
          </nav>
        </div>
      </div>

      {/* Right side - User controls */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="p-2">
          <GridIcon className="h-5 w-5 text-text-secondary" />
        </Button>
        <Button className="bg-primary hover:bg-primary-hover text-primary-foreground text-sm font-medium px-6 py-2 rounded-md">
          Sign in
        </Button>
      </div>
    </header>
  );
}