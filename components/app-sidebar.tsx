"use client"

import {
  AlertTriangle,
  Bell,
  Calendar,
  Home,
  LifeBuoy,
  Map,
  MessageSquare,
  Users,
  BarChart,
  Shield,
  UserCog,
  Waves,
  Stethoscope,
} from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"
import { UserNav } from "@/components/user-nav"
import { useUserRole } from "@/hooks/use-user-role"

export function AppSidebar() {
  const pathname = usePathname()
  const { role } = useUserRole()

  // Common navigation items for all users
  const commonNavItems = [
    {
      title: "Dashboard",
      href: "/",
      icon: Home,
    },
    {
      title: "Incidents",
      href: "/incidents",
      icon: AlertTriangle,
    },
    {
      title: "Alerts",
      href: "/alerts",
      icon: Bell,
    },
  ]

  // Map navigation item - only for volunteers and admins
  const mapNavItem = {
    title: "Map",
    href: "/map",
    icon: Map,
  }

  // Navigation items for volunteers and admins
  const volunteerNavItems = [
    {
      title: "Resources",
      href: "/resources",
      icon: LifeBuoy,
    },
    {
      title: "Tasks",
      href: "/tasks",
      icon: Calendar,
    },
    {
      title: "Flood Monitoring",
      href: "/flood-monitoring",
      icon: Waves,
    },
  ]

  // Navigation items only for admins
  const adminNavItems = [
    {
      title: "Volunteers",
      href: "/volunteers",
      icon: Users,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: BarChart,
    },
    {
      title: "Flood Monitoring",
      href: "/flood-monitoring",
      icon: Waves,
    },
    {
      title: "Disease Surveillance",
      href: "/disease-surveillance",
      icon: Stethoscope,
    },
    {
      title: "Predictions",
      href: "/predictions",
      icon: Shield,
    },
    {
      title: "Administration",
      href: "/admin",
      icon: UserCog,
    },
  ]

  // Communication items for volunteers and admins
  const communicationItems = [
    {
      title: "Messages",
      href: "/messages",
      icon: MessageSquare,
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between p-4">
        <Logo />
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {commonNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* Show map item only for volunteers and admins */}
              {(role === "volunteer" || role === "admin") && (
                <SidebarMenuItem key={mapNavItem.href}>
                  <SidebarMenuButton asChild isActive={pathname === mapNavItem.href} tooltip={mapNavItem.title}>
                    <Link href={mapNavItem.href}>
                      <mapNavItem.icon />
                      <span>{mapNavItem.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}

              {/* Show volunteer items for volunteers and admins */}
              {(role === "volunteer" || role === "admin") &&
                volunteerNavItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}

              {/* Show admin items only for admins */}
              {role === "admin" &&
                adminNavItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Show communication section for volunteers and admins */}
        {(role === "volunteer" || role === "admin") && (
          <>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>Communication</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {communicationItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                        <Link href={item.href}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center justify-between">
          {role !== "public" ? (
            <UserNav />
          ) : (
            <Button variant="default" size="sm" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
          )}
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

