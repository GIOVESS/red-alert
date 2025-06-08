import type { Metadata } from "next"
import AlertsPageClient from "./alerts-page-client"

export const metadata: Metadata = {
  title: "Alerts | RedAlert",
  description: "Emergency alerts and warnings",
}

export default function AlertsPage() {
  return <AlertsPageClient />
}

