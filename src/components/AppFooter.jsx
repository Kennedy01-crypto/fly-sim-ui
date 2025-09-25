import { useState } from "react";
import { Globe, MapPin, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const currencies = [
  { label: "British Pound", code: "GBP" },
  { label: "Euro", code: "EUR" },
  { label: "Japanese Yen", code: "JPY" },
  { label: "US Dollar", code: "USD" },
  { label: "Kenyan Shilling", code: "KES" },
  // ...add more as needed
];

export function AppFooter() {
  const [currency, setCurrency] = useState(currencies[4]); // Default to KES
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <footer className="w-full border-t border-border bg-surface py-6 mt-12">
      <div className="max-w-6xl mx-auto items-center px-6 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2 items-center">
          <Button
            variant="outline"
            className="rounded-full flex items-center gap-2 px-4 py-2 text-sm"
          >
            <Globe className="h-4 w-4" />
            Language · English (United Kingdom)
          </Button>
          <Button
            variant="outline"
            className="rounded-full flex items-center gap-2 px-4 py-2 text-sm bg-surface"
          >
            <MapPin className="h-4 w-4" />
            Location · Kenya
          </Button>
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="rounded-full flex items-center gap-2 px-4 py-2 text-sm"
              >
                <CreditCard className="h-4 w-4" />
                Currency · {currency.code}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 bg-surface">
              <div className="p-4 border-b border-border">
                <div className="font-medium text-lg">Select your currency</div>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {currencies.map((cur) => (
                  <label
                    key={cur.code}
                    className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-muted transition"
                  >
                    <input
                      type="radio"
                      name="currency"
                      value={cur.code}
                      checked={currency.code === cur.code}
                      onChange={() => {
                        setCurrency(cur);
                        setPopoverOpen(false);
                      }}
                      className="accent-primary"
                    />
                    <span className="font-medium">{cur.label}</span>
                    <span className="ml-auto text-xs text-text-secondary">
                      {cur.code}
                    </span>
                  </label>
                ))}
              </div>
              <div className="flex justify-end gap-2 p-3 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setPopoverOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => setPopoverOpen(false)}
                >
                  OK
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-text-secondary mt-2">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Join user studies
          </a>
          <a href="#" className="hover:underline">
            Feedback
          </a>
          <a href="#" className="hover:underline">
            Help Centre
          </a>
        </div>
        <div className="text-xs text-text-secondary mt-2">
          Displayed currencies may differ from the currencies used to purchase
          flights.{" "}
          <a href="#" className="underline">
            Learn more
          </a>
        </div>
      </div>
    </footer>
  );
}
