import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Megaphone,
  MessageSquare,
  UserPlus,
  PlusCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Events",
    href: "/events",
    icon: Calendar,
  },
  {
    title: "Announcements",
    href: "/announcements",
    icon: Megaphone,
  },
  {
    title: "Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Join Society",
    href: "/join",
    icon: UserPlus,
  },
  {
    title: "Post Event",
    href: "/post-event",
    icon: PlusCircle,
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="hidden lg:flex w-64 flex-col border-r bg-card"
      role="navigation"
      aria-label="Sidebar navigation"
    >
      <nav className="flex-1 space-y-1 p-4">
        <h2 className="mb-4 px-4 text-lg font-semibold">Navigation</h2>
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon className="h-5 w-5" aria-hidden="true" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
