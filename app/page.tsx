"use client"

import { useUserRole } from "@/hooks/use-user-role"
import { PublicDashboard } from "@/components/dashboard/public-dashboard"
import { VolunteerDashboard } from "@/components/dashboard/volunteer-dashboard"
import { AdminDashboard } from "@/components/dashboard/admin-dashboard"

export default function DashboardPage() {
  const { role } = useUserRole()

  // Render different dashboards based on user role
  if (role === "admin") {
    return <AdminDashboard />
  } else if (role === "volunteer") {
    return <VolunteerDashboard />
  } else {
    return <PublicDashboard />
  }
}

