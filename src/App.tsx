import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import CampaignsPage from "./pages/admin/Campaigns";
import DonationsPage from "./pages/admin/Donations";
import DonorsPage from "./pages/admin/Donors";
import VolunteersPage from "./pages/admin/Volunteers";
import EventsPage from "./pages/admin/Events";
import BlogPage from "./pages/admin/Blog";
import PagesPage from "./pages/admin/Pages";
import MembersPage from "./pages/admin/Members";
import TranslationsPage from "./pages/admin/Translations";
import MediaPage from "./pages/admin/Media";
import UsersPage from "./pages/admin/Users";
import RolesPage from "./pages/admin/Roles";
import AuditLogsPage from "./pages/admin/AuditLogs";
import SettingsPage from "./pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="campaigns" element={<CampaignsPage />} />
            <Route path="donations" element={<DonationsPage />} />
            <Route path="donors" element={<DonorsPage />} />
            <Route path="volunteers" element={<VolunteersPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="pages" element={<PagesPage />} />
            <Route path="members" element={<MembersPage />} />
            <Route path="translations" element={<TranslationsPage />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="roles" element={<RolesPage />} />
            <Route path="audit-logs" element={<AuditLogsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
