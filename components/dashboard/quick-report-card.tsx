import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Camera, MapPin } from "lucide-react"
import Link from "next/link"

export function QuickReportCard() {
  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg">
          <AlertTriangle className="mr-2 h-5 w-5 text-primary" />
          Report an Incident
        </CardTitle>
        <CardDescription>Quickly report emergencies or disasters</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/incidents/new">
              <Camera className="mr-2 h-4 w-4 text-primary" />
              Take Photo & Report
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/incidents/new?map=true">
              <MapPin className="mr-2 h-4 w-4 text-primary" />
              Report with Location
            </Link>
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href="/incidents/new">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Full Incident Report
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

