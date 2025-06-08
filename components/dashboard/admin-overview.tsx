import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Users, LifeBuoy, CheckCircle2 } from "lucide-react"

export function AdminOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardContent className="flex items-center p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <AlertTriangle className="h-6 w-6 text-primary" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Active Incidents</p>
            <h3 className="text-2xl font-bold">24</h3>
            <p className="text-xs text-muted-foreground">8 critical, 10 high, 6 medium</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Deployed Volunteers</p>
            <h3 className="text-2xl font-bold">86</h3>
            <p className="text-xs text-muted-foreground">35 teams active</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <LifeBuoy className="h-6 w-6 text-primary" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Resources Deployed</p>
            <h3 className="text-2xl font-bold">42</h3>
            <p className="text-xs text-muted-foreground">15 vehicles, 27 supply kits</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-6 w-6 text-primary" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Resolved Today</p>
            <h3 className="text-2xl font-bold">12</h3>
            <p className="text-xs text-muted-foreground">Avg. response time: 28 min</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

