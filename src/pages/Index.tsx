import { GoogleHeader } from "@/components/GoogleHeader";
import { FlightSearchForm } from "@/components/FlightSearchForm";
import { FlightFilters } from "@/components/FlightFilters";
import { FlightResults } from "@/components/FlightResults";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GoogleHeader />
      
      <main className="pb-8">
        <FlightSearchForm />
        <FlightFilters />
        <FlightResults />
      </main>
    </div>
  );
};

export default Index;
