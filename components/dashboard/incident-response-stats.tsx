"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

export function IncidentResponseStats() {
  const data = [
    {
      name: "Mon",
      incidents: 12,
      resolved: 10,
    },
    {
      name: "Tue",
      incidents: 18,
      resolved: 15,
    },
    {
      name: "Wed",
      incidents: 15,
      resolved: 13,
    },
    {
      name: "Thu",
      incidents: 25,
      resolved: 20,
    },
    {
      name: "Fri",
      incidents: 22,
      resolved: 18,
    },
    {
      name: "Sat",
      incidents: 14,
      resolved: 12,
    },
    {
      name: "Sun",
      incidents: 10,
      resolved: 8,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Incident Response</CardTitle>
        <CardDescription>Weekly incident reports and resolution rates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip />
              <Bar dataKey="incidents" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Reported" />
              <Bar dataKey="resolved" fill="hsl(var(--primary) / 0.3)" radius={[4, 4, 0, 0]} name="Resolved" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-md border p-3">
            <div className="text-sm font-medium">Avg. Response Time</div>
            <div className="mt-1 text-2xl font-bold text-primary">28 min</div>
            <div className="text-xs text-muted-foreground">-12% from last week</div>
          </div>
          <div className="rounded-md border p-3">
            <div className="text-sm font-medium">Resolution Rate</div>
            <div className="mt-1 text-2xl font-bold text-primary">84%</div>
            <div className="text-xs text-muted-foreground">+5% from last week</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

