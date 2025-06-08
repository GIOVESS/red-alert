import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Clock, AlertTriangle, Award } from "lucide-react"

export function VolunteerStats() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardContent className="flex items-center p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-6 w-6 text-primary" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Assigned Tasks</p>
            <h3 className="text-2xl font-bold">5</h3>
            <p className="text-xs text-muted-foreground">2 high priority</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Hours Contributed</p>
            <h3 className="text-2xl font-bold">24</h3>
            <p className="text-xs text-muted-foreground">This month</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <AlertTriangle className="h-6 w-6 text-primary" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Incidents Responded</p>
            <h3 className="text-2xl font-bold">12</h3>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Certifications</p>
            <h3 className="text-2xl font-bold">3</h3>
            <p className="text-xs text-muted-foreground">First Aid, Search & Rescue, Fire Safety</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

