
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Reviews from "./pages/Reviews";
import CustomSoftware from "./pages/CustomSoftware";
import WebDevelopment from "./pages/WebDevelopment";
import FrontendDevelopment from "./pages/FrontendDevelopment";
import BackendDevelopment from "./pages/BackendDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/frontend-development" element={<FrontendDevelopment />} />
          <Route path="/services/backend-development" element={<BackendDevelopment />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
