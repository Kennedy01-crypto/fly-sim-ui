import { BadgeCheck } from "lucide-react";

interface BookingOption {
  logo: string; // image url or emoji
  provider: string;
  providerType?: string;
  note?: string;
  priceUSD: string;
  priceKES: string;
  actionLabel: string;
  actionType: "button" | "call";
  phoneNumber?: string;
}

export function BookingOptionCard({
  logo,
  provider,
  providerType,
  note,
  priceUSD,
  priceKES,
  actionLabel,
  actionType,
  phoneNumber,
}: BookingOption) {
  return (
    <div className="flex items-center justify-between py-2 px-3 bg-flight-card border-b border-border last:border-b-0">
      {/* Logo and Provider */}
      <div className="flex items-center gap-4 min-w-0">
        <img
          src={logo}
          alt={provider}
          className="w-10 h-10 rounded bg-white object-contain"
        />
        <div>
          <div className="text-base font-medium text-text-primary flex items-center gap-2">
            {provider}
            {providerType && (
              <span className="bg-muted text-xs px-2 py-0.5 rounded ml-2">
                {providerType}
              </span>
            )}
          </div>
          {note && (
            <div className="text-xs text-text-secondary mt-1">{note}</div>
          )}
        </div>
      </div>
      {/* Price and Action */}
      <div className="flex items-center gap-8">
        <div className="text-right">
          <div className="text-lg font-semibold text-green-400">{priceUSD}</div>
          <div className="text-xs text-text-secondary">{priceKES}</div>
        </div>
        {actionType === "button" ? (
          <button className="bg-surface border border-primary text-primary-foreground rounded-full px-6 py-2 font-medium hover:bg-primary-hover transition">
            {actionLabel}
          </button>
        ) : (
          <div className="flex flex-col items-end">
            <span className="text-xs text-text-secondary">{actionLabel}</span>
            <span className="text-xs text-text-secondary">{phoneNumber}</span>
          </div>
        )}
      </div>
    </div>
  );
}
