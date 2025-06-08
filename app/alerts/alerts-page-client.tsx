"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { AlertsList } from "@/components/alerts/alerts-list"
import { AlertFilters } from "@/components/alerts/alert-filters"
import { AlertsMap } from "@/components/alerts/alerts-map"
import { Button } from "@/components/ui/button"
import { Bell, Download } from "lucide-react"
import Link from "next/link"
import { useUserRole } from "@/hooks/use-user-role"

export default function AlertsPageClient() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Emergency Alerts" description="Active alerts and warnings for your region">
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <AdminAlertButton />
        </div>
      </DashboardHeader>

      <div className="mt-6 space-y-6">
        <AlertsMap />
        <AlertFilters />
        <AlertsList />
      </div>
    </DashboardShell>
  )
}

function AdminAlertButton() {
  // Client component to conditionally render the button based on user role

  const { role } = useUserRole()

  if (role !== "admin") return null

  return (
    <Button asChild>
      <Link href="/alerts/new">
        <Bell className="mr-2 h-4 w-4" />
        Issue Alert
      </Link>
    </Button>
  )
}

