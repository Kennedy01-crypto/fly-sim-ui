import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SelectedFlightsPage } from "./pages/SelectedFlightsPage";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import { ApiProvider } from "./context/ApiProvider";

const queryClient = new QueryClient();

const App = () => (
  <ApiProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="selected-flights"
                element={<SelectedFlightsPage />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ApiProvider>
);

export default App;
