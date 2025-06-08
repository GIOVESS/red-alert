import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DiseaseSurveillanceDashboard } from "@/components/disease-surveillance/disease-surveillance-dashboard"

export const metadata: Metadata = {
  title: "Disease Surveillance | RedAlert",
  description: "Early warning system for disease outbreaks and public health monitoring",
}

export default function DiseaseSurveillancePage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Disease Surveillance" description="Monitor and track disease outbreaks across Kenya" />
      <DiseaseSurveillanceDashboard />
    </DashboardShell>
  )
}

