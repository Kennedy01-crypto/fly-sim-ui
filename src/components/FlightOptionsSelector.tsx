import { Info } from "lucide-react";

export function FlightOptionsSelector() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex gap-4">
        {/* Best Option */}
        <div className="flex-1">
          <div className="flex items-center gap-2 p-4 rounded-md border border-border bg-surface-container hover:bg-surface-container-hover cursor-pointer">
            <span className="text-base font-medium text-text-primary">Best</span>
            <Info className="h-4 w-4 text-text-secondary" />
          </div>
        </div>

        {/* Cheapest Option */}
        <div className="flex-1">
          <div className="flex items-center justify-between p-4 rounded-md bg-primary/10 border border-primary/20 hover:bg-primary/15 cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="text-base font-medium text-primary">Cheapest</span>
              <Info className="h-4 w-4 text-primary/70" />
            </div>
            <div className="text-right">
              <span className="text-sm text-primary/70">from</span>
              <span className="text-base font-medium text-primary ml-1">KES 122,688</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}