import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Announcements from "./pages/Announcements";
import Chat from "./pages/Chat";
import JoinSociety from "./pages/JoinSociety";
import PostEvent from "./pages/PostEvent";
import PostAnnouncement from "./pages/PostAnnouncement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/join" element={<JoinSociety />} />
              <Route path="/post-event" element={<PostEvent />} />
              <Route path="/post-announcement" element={<PostAnnouncement />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
