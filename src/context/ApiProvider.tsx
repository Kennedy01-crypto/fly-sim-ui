import React, { createContext, useContext, useState } from "react";
import axios from "axios";

// Define types for each endpoint's data
type NearbyAirports = any; // Replace with actual type
type FlightSearchResults = any; // Replace with actual type

interface ApiContextType {
  getNearByAirports: (params: {
    lat: number;
    lng: number;
  }) => Promise<NearbyAirports>;
  searchFlights: (params: any) => Promise<FlightSearchResults>;
  searchAirport: (query: string, locale?: string) => Promise<any>;
  loading: boolean;
  error: string | null;
  flightResults: FlightSearchResults | null;
  setFlightResults: React.Dispatch<React.SetStateAction<FlightSearchResults | null>>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Optionally, manage loading/error/data state here
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [flightResults, setFlightResults] = useState<FlightSearchResults | null>(null);

  // helper that wraps aPI calls with loading/error state
  const apiCall = async <T,>(fn: () => Promise<T>): Promise<T> => {
    setLoading(true);
    setError(null);
    try {
      const result = await fn();
      setLoading(false);
      return result;
    } catch (err: any) {
      setLoading(false);
      setError(err?.message || "An error occurred");
      throw err;
    }
  };

  // Example fetcher for getNearByAirports
  const getNearByAirports = async (params: { lat: number; lng: number }) => {
    return apiCall(async () => {
      // TODO: implement actial api call
      return {};
    });
  };

  // Fetcher for searchFlights
  const searchFlights = async (params: {
    originSkyId: string;
    destinationSkyId: string;
    destinationEntityId: string;
    originEntityId: string;
    date: string; // Format: YYYY-MM-DD
    returnDate?: string; // Format: YYYY-MM-DD (optional)
    cabinClass?: string;
    adults?: number;
    children?: number;
    infants?: number;
    sortBy?: string;
    currency?: string;
    market?: string;
    countryCode?: string;
  }) => {
    return apiCall(async () => {
      const url =
        "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights";
      const response = await axios.get(url, {
        params: {
          originSkyId: params.originSkyId,
          destinationSkyId: params.destinationSkyId,
          destinationEntityId: params.destinationEntityId,
          originEntityId: params.originEntityId,
          cabinClass: params.cabinClass,
          adults: params.adults,
          childrens: params.children,
          infants: params.infants,
          sortBy: params.sortBy || "best",
          currency: params.currency || "USD",
          market: params.market || "en-US",
          countryCode: params.countryCode || "US",
          date: params.date,
          returnDate: params.returnDate,
        },
        headers: {
          "X-RapidAPI-key": import.meta.env.VITE_RAPID_API_KEY,
          "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
        },
      });
      return response.data;
    });
  };

  // search Airport
  const searchAirport = (query: string, locale = "en-US") => {
    return apiCall(async () => {
      const url =
        "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport"; 
      const response = await axios.get(url, {
        params: { query, locale },
        headers: {
          "X-RapidAPI-key": import.meta.env.VITE_RAPID_API_KEY,
          "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
        },
      });
      return response.data;
    });
  };
  return (
    <ApiContext.Provider
      value={{
        getNearByAirports,
        searchFlights,
        searchAirport,
        loading,
        error,
        flightResults,
        setFlightResults,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

// Custom hook for easy access
export const useApi = () => {
  const ctx = useContext(ApiContext);
  if (!ctx) throw new Error("useApi must be used within ApiProvider");
  return ctx;
};
