"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Stethoscope, WormIcon as Virus, Bell, ExternalLink, Pill } from "lucide-react"

interface DiseaseAlert {
  id: string
  title: string
  description: string
  location: string
  severity: "critical" | "warning" | "alert" | "information"
  issuedAt: string
  expiresAt: string
  source: string
  confirmedCases: number
  suspectedCases: number
  instructions: string
  diseaseType: string
}

export function DiseaseAlertsList() {
  const [activeTab, setActiveTab] = useState("active")

  const alerts: DiseaseAlert[] = [
    {
      id: "DISEASE-001",
      title: "Cholera Outbreak in Mombasa",
      description: "Confirmed cholera outbreak in several neighborhoods of Mombasa County. Cases increasing rapidly.",
      location: "Mombasa County - Likoni, Nyali, Kisauni",
      severity: "critical",
      issuedAt: "2023-06-10T08:30:00Z",
      expiresAt: "2023-06-24T08:30:00Z",
      source: "Ministry of Health",
      confirmedCases: 78,
      suspectedCases: 120,
      instructions:
        "Boil all drinking water. Wash hands frequently with soap. Seek immediate medical attention for symptoms of diarrhea and vomiting.",
      diseaseType: "Bacterial",
    },
    {
      id: "DISEASE-002",
      title: "Dengue Fever Alert",
      description:
        "Increasing cases of dengue fever reported in coastal regions. Vector control measures being implemented.",
      location: "Kilifi County - Malindi, Kilifi Town",
      severity: "warning",
      issuedAt: "2023-06-05T09:45:00Z",
      expiresAt: "2023-06-19T09:45:00Z",
      source: "Kenya Medical Research Institute",
      confirmedCases: 45,
      suspectedCases: 68,
      instructions:
        "Use mosquito repellent and nets. Eliminate standing water around homes. Seek medical attention for high fever with rash.",
      diseaseType: "Viral",
    },
    {
      id: "DISEASE-003",
      title: "Respiratory Illness Investigation",
      description:
        "Cluster of undiagnosed respiratory illness under investigation. Symptoms include cough, fever, and shortness of breath.",
      location: "Nairobi County - CBD, Eastleigh",
      severity: "alert",
      issuedAt: "2023-06-12T10:15:00Z",
      expiresAt: "2023-06-19T10:15:00Z",
      source: "Nairobi Metropolitan Services",
      confirmedCases: 0,
      suspectedCases: 125,
      instructions:
        "Practice respiratory hygiene. Wear masks in crowded places. Self-isolate if experiencing symptoms and seek testing.",
      diseaseType: "Unknown",
    },
    {
      id: "DISEASE-004",
      title: "Measles Cases Reported",
      description: "Several confirmed cases of measles in school-aged children. Vaccination campaign being organized.",
      location: "Nakuru County - Nakuru Town, Naivasha",
      severity: "warning",
      issuedAt: "2023-06-08T14:20:00Z",
      expiresAt: "2023-06-22T14:20:00Z",
      source: "Ministry of Health",
      confirmedCases: 12,
      suspectedCases: 28,
      instructions:
        "Check vaccination status. Keep unvaccinated children home from school. Watch for symptoms of rash and fever.",
      diseaseType: "Viral",
    },
    {
      id: "DISEASE-005",
      title: "Malaria Surge Alert",
      description:
        "Significant increase in malaria cases following recent rains. Health facilities prepared for increased caseload.",
      location: "Kisumu County - Nyando, Nyakach",
      severity: "alert",
      issuedAt: "2023-06-11T11:30:00Z",
      expiresAt: "2023-06-25T11:30:00Z",
      source: "County Health Department",
      confirmedCases: 156,
      suspectedCases: 230,
      instructions:
        "Sleep under treated mosquito nets. Use repellent during evening hours. Seek testing for any fever symptoms.",
      diseaseType: "Parasitic",
    },
    {
      id: "DISEASE-006",
      title: "Typhoid Information Notice",
      description:
        "Increased typhoid cases linked to contaminated water sources. Water testing and treatment underway.",
      location: "Machakos County - Athi River",
      severity: "information",
      issuedAt: "2023-06-09T15:45:00Z",
      expiresAt: "2023-06-16T15:45:00Z",
      source: "Water and Sanitation Department",
      confirmedCases: 23,
      suspectedCases: 45,
      instructions:
        "Boil drinking water. Avoid street food. Wash fruits and vegetables thoroughly. Seek medical attention for persistent fever.",
      diseaseType: "Bacterial",
    },
  ]

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge className="bg-red-500 hover:bg-red-600">Critical</Badge>
      case "warning":
        return <Badge className="bg-orange-500 hover:bg-orange-600">Warning</Badge>
      case "alert":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Alert</Badge>
      case "information":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Information</Badge>
      default:
        return <Badge>{severity}</Badge>
    }
  }

  const getDiseaseIcon = (diseaseType: string) => {
    switch (diseaseType) {
      case "Bacterial":
        return <Virus className="h-5 w-5 text-red-500" />
      case "Viral":
        return <Virus className="h-5 w-5 text-orange-500" />
      case "Parasitic":
        return <Virus className="h-5 w-5 text-yellow-500" />
      case "Unknown":
        return <Stethoscope className="h-5 w-5 text-blue-500" />
      default:
        return <Virus className="h-5 w-5" />
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const activeAlerts = alerts.filter((alert) => new Date(alert.expiresAt) > new Date())
  const expiredAlerts = alerts.filter((alert) => new Date(alert.expiresAt) <= new Date())

  return (
    <Card>
      <CardHeader>
        <CardTitle>Disease Alerts</CardTitle>
        <CardDescription>Current and recent disease outbreaks and health alerts</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active" onValueChange={setActiveTab}>
          <TabsList className="mb-4 w-full">
            <TabsTrigger value="active" className="flex-1">
              Active Alerts ({activeAlerts.length})
            </TabsTrigger>
            <TabsTrigger value="expired" className="flex-1">
              Past Alerts ({expiredAlerts.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`rounded-md border-l-4 border-l-${alert.severity === "critical" ? "red" : alert.severity === "warning" ? "orange" : alert.severity === "alert" ? "yellow" : "blue"}-500`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20">
                        {getDiseaseIcon(alert.diseaseType)}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">{alert.title}</h3>
                        <p className="text-sm text-muted-foreground">{alert.location}</p>
                      </div>
                    </div>
                    {getSeverityBadge(alert.severity)}
                  </div>

                  <div className="mt-4">
                    <p className="text-sm">{alert.description}</p>
                  </div>

                  <div className="mt-4 grid gap-2 md:grid-cols-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Issued</p>
                      <p className="text-sm">{formatDate(alert.issuedAt)}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Expires</p>
                      <p className="text-sm">{formatDate(alert.expiresAt)}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Confirmed Cases</p>
                      <p className="text-sm">{alert.confirmedCases}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Suspected Cases</p>
                      <p className="text-sm">{alert.suspectedCases}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-medium text-muted-foreground">Instructions</p>
                    <p className="text-sm">{alert.instructions}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">Source: {alert.source}</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Pill className="mr-2 h-3 w-3" />
                        Treatment Info
                      </Button>
                      <Button size="sm">
                        <Bell className="mr-2 h-3 w-3" />
                        Send Alert
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="expired" className="space-y-4">
            {expiredAlerts.map((alert) => (
              <div key={alert.id} className="rounded-md border opacity-70">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20">
                        {getDiseaseIcon(alert.diseaseType)}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">{alert.title}</h3>
                        <p className="text-sm text-muted-foreground">{alert.location}</p>
                      </div>
                    </div>
                    <Badge variant="outline">Expired</Badge>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm">{alert.description}</p>
                  </div>

                  <div className="mt-4 grid gap-2 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Issued</p>
                      <p className="text-sm">{formatDate(alert.issuedAt)}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Expired</p>
                      <p className="text-sm">{formatDate(alert.expiresAt)}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <p className="text-xs text-muted-foreground">Final Count: </p>
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      >
                        {alert.confirmedCases} confirmed
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline">
                      View Report
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

