import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { IncidentsList } from "@/components/incidents/incidents-list"
import { IncidentFilters } from "@/components/incidents/incident-filters"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Incidents | RedAlert",
  description: "Manage and respond to emergency incidents",
}

export default function IncidentsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Incidents" description="Manage and respond to emergency incidents">
        <Button asChild>
          <Link href="/incidents/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Report Incident
          </Link>
        </Button>
      </DashboardHeader>

      <div className="mt-6 space-y-6">
        <IncidentFilters />
        <IncidentsList />
      </div>
    </DashboardShell>
  )
}

