import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Ambulance, Truck, Users, ShieldAlert, Pill } from "lucide-react"

export function ResourceOverview() {
  const resources = [
    {
      name: "Emergency Vehicles",
      available: 18,
      total: 25,
      icon: Ambulance,
      color: "text-red-500",
    },
    {
      name: "Medical Supplies",
      available: 1250,
      total: 2000,
      icon: Pill,
      color: "text-blue-500",
    },
    {
      name: "Relief Supplies",
      available: 450,
      total: 600,
      icon: Truck,
      color: "text-green-500",
    },
    {
      name: "Personnel",
      available: 85,
      total: 120,
      icon: Users,
      color: "text-orange-500",
    },
    {
      name: "Safety Equipment",
      available: 320,
      total: 500,
      icon: ShieldAlert,
      color: "text-purple-500",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {resources.map((resource) => (
        <Card key={resource.name}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{resource.name}</CardTitle>
            <resource.icon className={`h-4 w-4 ${resource.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {resource.available}
              <span className="text-sm font-normal text-muted-foreground">/{resource.total}</span>
            </div>
            <Progress value={(resource.available / resource.total) * 100} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {Math.round((resource.available / resource.total) * 100)}% available
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

