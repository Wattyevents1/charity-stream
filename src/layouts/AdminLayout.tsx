import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import {
  Activity,
  BarChart3,
  Calendar,
  FileText,
  FolderKanban,
  Globe,
  HandCoins,
  Image as ImageIcon,
  Layers3,
  Newspaper,
  Settings,
  Shield,
  Users,
  UserCog,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", to: "/admin", icon: Activity, match: "/admin" },
  { label: "Campaigns", to: "/admin/campaigns", icon: FolderKanban },
  { label: "Donations", to: "/admin/donations", icon: HandCoins },
  { label: "Donors", to: "/admin/donors", icon: Users },
  { label: "Volunteers", to: "/admin/volunteers", icon: Users },
  { label: "Events", to: "/admin/events", icon: Calendar },
  { label: "Blog", to: "/admin/blog", icon: Newspaper },
  { label: "Pages", to: "/admin/pages", icon: FileText },
  { label: "Members", to: "/admin/members", icon: Layers3 },
  { label: "Translations", to: "/admin/translations", icon: Globe },
  { label: "Media", to: "/admin/media", icon: ImageIcon },
  { label: "Users", to: "/admin/users", icon: UserCog },
  { label: "Roles", to: "/admin/roles", icon: Shield },
  { label: "Audit Logs", to: "/admin/audit-logs", icon: BarChart3 },
  { label: "Settings", to: "/admin/settings", icon: Settings },
];

export default function AdminLayout() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <SidebarProvider>
      <Sidebar className="bg-sidebar text-sidebar-foreground" collapsible="icon">
        <SidebarHeader>
          <div className="px-2 py-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">H</span>
              <span className="font-semibold">HopeAid Admin</span>
            </Link>
          </div>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Manage</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton asChild isActive={location.pathname === item.to || (item.to !== "/admin" && location.pathname.startsWith(item.to))}>
                      <Link to={item.to} className="flex items-center gap-2">
                        <item.icon className="shrink-0" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-2 px-2 py-1">
            <Avatar className="h-6 w-6">
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="grid text-xs">
              <span className="font-medium">Admin</span>
              <span className="text-muted-foreground">admin@hopeaid.org</span>
            </div>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <div className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center gap-3 px-4">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mx-1 h-6" />
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/admin">Admin</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {pathParts.slice(1).map((part, idx) => (
                <BreadcrumbItem key={idx}>
                  <BreadcrumbLink>{part.replaceAll("-", " ")}</BreadcrumbLink>
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
            <div className="ml-auto flex items-center gap-2">
              <Input placeholder="Search…" className="h-9 w-48 md:w-72" />
              <Button variant="outline" size="sm">View Site</Button>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}