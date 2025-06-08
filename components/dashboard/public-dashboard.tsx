import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { AlertsOverview } from "@/components/dashboard/alerts-overview"
import { PublicIncidentMap } from "@/components/dashboard/public-incident-map"
import { RecentIncidents } from "@/components/dashboard/recent-incidents"
import { QuickReportCard } from "@/components/dashboard/quick-report-card"
import { NewsTicker } from "@/components/dashboard/news-ticker"
import { PredictionPreview } from "@/components/dashboard/prediction-preview"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import Link from "next/link"

export function PublicDashboard() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Public Dashboard" description="Stay informed about emergencies and disaster alerts">
        <Button variant="outline" asChild>
          <Link href="/about">
            <Info className="mr-2 h-4 w-4" />
            About RedAlert
          </Link>
        </Button>
      </DashboardHeader>

      <NewsTicker className="mt-2" />

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <PublicIncidentMap />
        </div>
        <div className="space-y-4">
          <QuickReportCard />
          <PredictionPreview />
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <AlertsOverview />
        <RecentIncidents />
      </div>
    </DashboardShell>
  )
}

