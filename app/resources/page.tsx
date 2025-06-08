import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ResourceOverview } from "@/components/resources/resource-overview"
import { ResourceAllocation } from "@/components/resources/resource-allocation"
import { ResourceInventory } from "@/components/resources/resource-inventory"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Resources | RedAlert",
  description: "Manage emergency resources and inventory",
}

export default function ResourcesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Resources" description="Manage and track emergency resources" />

      <div className="mt-6">
        <ResourceOverview />

        <Tabs defaultValue="allocation" className="mt-6">
          <TabsList>
            <TabsTrigger value="allocation">Resource Allocation</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
          </TabsList>

          <TabsContent value="allocation" className="mt-4">
            <ResourceAllocation />
          </TabsContent>

          <TabsContent value="inventory" className="mt-4">
            <ResourceInventory />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}

