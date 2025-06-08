import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { MessagesUI } from "@/components/messages/messages-ui"

export const metadata: Metadata = {
  title: "Messages | RedAlert",
  description: "Communication center for emergency coordination",
}

export default function MessagesPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Messages"
        description="Communicate with team members and coordinate emergency response"
      />

      <div className="mt-6">
        <MessagesUI />
      </div>
    </DashboardShell>
  )
}

