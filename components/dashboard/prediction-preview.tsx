import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CloudRain, Flame, AlertTriangle } from "lucide-react"
import Link from "next/link"

export function PredictionPreview() {
  const predictions = [
    {
      type: "Flood",
      location: "Nairobi County",
      probability: 85,
      timeframe: "24 hours",
      icon: CloudRain,
    },
    {
      type: "Wildfire",
      location: "Nakuru County",
      probability: 72,
      timeframe: "48 hours",
      icon: Flame,
    },
    {
      type: "Landslide",
      location: "Muranga County",
      probability: 68,
      timeframe: "72 hours",
      icon: AlertTriangle,
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Disaster Predictions</CardTitle>
        <CardDescription>AI-powered disaster forecasts</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          {predictions.map((prediction, index) => (
            <div key={index} className="flex items-center justify-between rounded-md border p-2">
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <prediction.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{prediction.type}</p>
                  <p className="text-xs text-muted-foreground">{prediction.location}</p>
                </div>
              </div>
              <Badge
                variant="outline"
                className={
                  prediction.probability > 80
                    ? "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300"
                    : prediction.probability > 70
                      ? "bg-orange-100 text-orange-800 hover:bg-orange-100 dark:bg-orange-900 dark:text-orange-300"
                      : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300"
                }
              >
                {prediction.probability}%
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/predictions">View All Predictions</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

