import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { IncidentForm } from "@/components/incidents/incident-form"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Report Incident | RedAlert",
  description: "Report a new emergency incident",
}

export default function NewIncidentPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Report New Incident" description="Submit details about a new emergency situation">
        <Button variant="outline" asChild>
          <Link href="/incidents">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Incidents
          </Link>
        </Button>
      </DashboardHeader>

      <div className="mt-6">
        <IncidentForm />
      </div>
    </DashboardShell>
  )
}

