"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, CloudRain, Flame, Waves, Thermometer } from "lucide-react"

export function PredictionDashboard() {
  const [activeTab, setActiveTab] = useState("floods")

  const predictionData = {
    floods: [
      {
        region: "Nairobi County",
        probability: 85,
        timeframe: "24 hours",
        severity: "high",
        factors: ["Heavy rainfall", "River levels", "Urban drainage"],
      },
      {
        region: "Kisumu County",
        probability: 92,
        timeframe: "12 hours",
        severity: "critical",
        factors: ["Lake Victoria levels", "Rainfall patterns", "Soil saturation"],
      },
      {
        region: "Mombasa County",
        probability: 65,
        timeframe: "48 hours",
        severity: "medium",
        factors: ["Coastal tides", "Rainfall forecast", "Drainage systems"],
      },
    ],
    droughts: [
      {
        region: "Turkana County",
        probability: 78,
        timeframe: "30 days",
        severity: "high",
        factors: ["Rainfall deficit", "Temperature trends", "Vegetation index"],
      },
      {
        region: "Garissa County",
        probability: 82,
        timeframe: "14 days",
        severity: "high",
        factors: ["Water sources", "Temperature anomalies", "Historical patterns"],
      },
      {
        region: "Marsabit County",
        probability: 70,
        timeframe: "60 days",
        severity: "medium",
        factors: ["Precipitation forecast", "Soil moisture", "Evapotranspiration"],
      },
    ],
    landslides: [
      {
        region: "Muranga County",
        probability: 75,
        timeframe: "72 hours",
        severity: "high",
        factors: ["Soil saturation", "Slope stability", "Rainfall intensity"],
      },
      {
        region: "Elgeyo Marakwet",
        probability: 68,
        timeframe: "48 hours",
        severity: "medium",
        factors: ["Geological factors", "Precipitation", "Land use"],
      },
      {
        region: "Nyeri County",
        probability: 55,
        timeframe: "96 hours",
        severity: "medium",
        factors: ["Soil type", "Vegetation cover", "Rainfall patterns"],
      },
    ],
    fires: [
      {
        region: "Tsavo National Park",
        probability: 80,
        timeframe: "7 days",
        severity: "high",
        factors: ["Temperature", "Humidity", "Vegetation dryness"],
      },
      {
        region: "Nairobi Industrial Area",
        probability: 45,
        timeframe: "24 hours",
        severity: "medium",
        factors: ["Industrial activity", "Weather conditions", "Safety compliance"],
      },
      {
        region: "Nakuru County",
        probability: 35,
        timeframe: "14 days",
        severity: "low",
        factors: ["Temperature forecast", "Humidity levels", "Wind patterns"],
      },
    ],
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "floods":
        return <Waves className="h-5 w-5" />
      case "droughts":
        return <Thermometer className="h-5 w-5" />
      case "landslides":
        return <AlertTriangle className="h-5 w-5" />
      case "fires":
        return <Flame className="h-5 w-5" />
      default:
        return <CloudRain className="h-5 w-5" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-500 text-white"
      case "high":
        return "bg-orange-500 text-white"
      case "medium":
        return "bg-yellow-500 text-black"
      case "low":
        return "bg-blue-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>ML Prediction System</CardTitle>
        <CardDescription>Machine learning-based predictions for potential disasters</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="floods" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="floods" className="flex items-center gap-2">
              <Waves className="h-4 w-4" />
              <span>Floods</span>
            </TabsTrigger>
            <TabsTrigger value="droughts" className="flex items-center gap-2">
              <Thermometer className="h-4 w-4" />
              <span>Droughts</span>
            </TabsTrigger>
            <TabsTrigger value="landslides" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span>Landslides</span>
            </TabsTrigger>
            <TabsTrigger value="fires" className="flex items-center gap-2">
              <Flame className="h-4 w-4" />
              <span>Fires</span>
            </TabsTrigger>
          </TabsList>

          {Object.keys(predictionData).map((key) => (
            <TabsContent key={key} value={key} className="mt-4 space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {predictionData[key as keyof typeof predictionData].map((prediction, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-medium">{prediction.region}</CardTitle>
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${
                            prediction.probability > 80
                              ? "bg-red-100 text-red-600"
                              : prediction.probability > 60
                                ? "bg-orange-100 text-orange-600"
                                : "bg-yellow-100 text-yellow-600"
                          }`}
                        >
                          {getIcon(key)}
                        </div>
                      </div>
                      <CardDescription>Prediction within {prediction.timeframe}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium">Probability</span>
                        <span className="text-sm font-bold">{prediction.probability}%</span>
                      </div>
                      <Progress value={prediction.probability} className="h-2" />

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-medium">Severity</span>
                        <Badge className={getSeverityColor(prediction.severity)}>{prediction.severity}</Badge>
                      </div>

                      <div className="mt-4">
                        <span className="text-sm font-medium">Contributing Factors</span>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {prediction.factors.map((factor, i) => (
                            <Badge key={i} variant="outline" className="bg-muted">
                              {factor}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="mt-4 w-full" variant="outline">
                        View Detailed Analysis
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

