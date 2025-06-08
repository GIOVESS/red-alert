import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { PredictionDashboard } from "@/components/ml-prediction/prediction-dashboard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Predictions | RedAlert",
  description: "ML-based disaster predictions",
}

export default function PredictionsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Disaster Predictions" description="Machine learning-based early warning system" />

      <div className="mt-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Prediction System Overview</CardTitle>
            <CardDescription>Current status of the ML prediction systems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-lg border p-3">
                <div className="text-sm font-medium">Data Sources</div>
                <div className="mt-1 text-2xl font-bold text-primary">12</div>
                <div className="text-xs text-muted-foreground">All systems operational</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-sm font-medium">Model Accuracy</div>
                <div className="mt-1 text-2xl font-bold text-primary">87%</div>
                <div className="text-xs text-muted-foreground">Last 30 days</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-sm font-medium">Active Predictions</div>
                <div className="mt-1 text-2xl font-bold text-primary">24</div>
                <div className="text-xs text-muted-foreground">Across all regions</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-sm font-medium">Last Update</div>
                <div className="mt-1 text-2xl font-bold text-primary">15m</div>
                <div className="text-xs text-muted-foreground">Auto-updates every 15 min</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <PredictionDashboard />
      </div>
    </DashboardShell>
  )
}

