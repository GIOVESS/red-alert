import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { VolunteersList } from "@/components/volunteers/volunteers-list"
import { VolunteerStats } from "@/components/volunteers/volunteer-stats"
import { Button } from "@/components/ui/button"
import { UserPlus } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Volunteers | RedAlert",
  description: "Manage volunteers and teams",
}

export default function VolunteersPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Volunteers" description="Manage volunteers and response teams">
        <Button asChild>
          <Link href="/volunteers/register">
            <UserPlus className="mr-2 h-4 w-4" />
            Register Volunteer
          </Link>
        </Button>
      </DashboardHeader>

      <div className="mt-6 space-y-6">
        <VolunteerStats />
        <VolunteersList />
      </div>
    </DashboardShell>
  )
}

