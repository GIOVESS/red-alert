import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { VolunteerTaskList } from "@/components/dashboard/volunteer-task-list"
import { VolunteerIncidentMap } from "@/components/dashboard/volunteer-incident-map"
import { VolunteerStats } from "@/components/dashboard/volunteer-stats"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export function VolunteerDashboard() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Volunteer Dashboard" description="Manage your assigned tasks and incident responses">
        <Button asChild>
          <Link href="/incidents/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Report Incident
          </Link>
        </Button>
      </DashboardHeader>

      <div className="mt-6">
        <VolunteerStats />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <VolunteerTaskList />
        <VolunteerIncidentMap />
      </div>
    </DashboardShell>
  )
}

