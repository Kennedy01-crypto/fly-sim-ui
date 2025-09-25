import { FlightSearchForm } from "@/components/FlightSearchForm";
import { FlightFilters } from "@/components/FlightFilters";
import { FlightOptionsSelector } from "@/components/FlightOptionsSelector";
import { FlightResults } from "@/components/FlightResults";

const HomePage = () => {
    return (
        <>
            <FlightSearchForm />
            <FlightFilters />
            <FlightOptionsSelector />
            <FlightResults />
        </>
    );
};

export default HomePage;
