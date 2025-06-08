import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { AdminOverview } from "@/components/dashboard/admin-overview"
import { AdminIncidentMap } from "@/components/dashboard/admin-incident-map"
import { ResourceStatus } from "@/components/dashboard/resource-status"
import { IncidentResponseStats } from "@/components/dashboard/incident-response-stats"
import { ActiveVolunteers } from "@/components/dashboard/active-volunteers"
import { AlertManagement } from "@/components/dashboard/alert-management"
import { Button } from "@/components/ui/button"
import { Bell, PlusCircle } from "lucide-react"
import Link from "next/link"

// Add a new component for multi-hazard monitoring
import { MultiHazardOverview } from "@/components/dashboard/multi-hazard-overview"

// Update the AdminDashboard component to include the new component
export function AdminDashboard() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Admin Dashboard" description="Comprehensive disaster management and response system">
        <div className="flex space-x-2">
          <Button variant="outline" asChild>
            <Link href="/alerts/new">
              <Bell className="mr-2 h-4 w-4" />
              Issue Alert
            </Link>
          </Button>
          <Button asChild>
            <Link href="/incidents/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Report Incident
            </Link>
          </Button>
        </div>
      </DashboardHeader>

      <div className="mt-6">
        <AdminOverview />
      </div>

      <div className="mt-6">
        <MultiHazardOverview />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <AdminIncidentMap />
        <div className="space-y-6">
          <ResourceStatus />
          <IncidentResponseStats />
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <ActiveVolunteers />
        <AlertManagement />
      </div>
    </DashboardShell>
  )
}

