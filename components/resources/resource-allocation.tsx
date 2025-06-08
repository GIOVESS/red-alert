"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Ambulance, Truck, Users } from "lucide-react"

interface ResourceAllocation {
  id: string
  resourceType: string
  resourceName: string
  assignedTo: string
  location: string
  status: "deployed" | "en-route" | "returning" | "available"
  deployedAt: string
}

export function ResourceAllocation() {
  const [allocations, setAllocations] = useState<ResourceAllocation[]>([
    {
      id: "RES-001",
      resourceType: "Vehicle",
      resourceName: "Ambulance A-01",
      assignedTo: "Westlands Fire Incident",
      location: "Westlands, Nairobi",
      status: "deployed",
      deployedAt: "2023-06-15T10:45:00Z",
    },
    {
      id: "RES-002",
      resourceType: "Vehicle",
      resourceName: "Fire Truck F-03",
      assignedTo: "Westlands Fire Incident",
      location: "Westlands, Nairobi",
      status: "deployed",
      deployedAt: "2023-06-15T10:50:00Z",
    },
    {
      id: "RES-003",
      resourceType: "Personnel",
      resourceName: "Medical Team M-02",
      assignedTo: "Mombasa Road Accident",
      location: "Mombasa Road, Nairobi",
      status: "en-route",
      deployedAt: "2023-06-15T11:55:00Z",
    },
    {
      id: "RES-004",
      resourceType: "Supplies",
      resourceName: "Relief Kit R-15",
      assignedTo: "Kisumu Flooding",
      location: "CBD, Kisumu",
      status: "en-route",
      deployedAt: "2023-06-15T09:30:00Z",
    },
    {
      id: "RES-005",
      resourceType: "Vehicle",
      resourceName: "Ambulance A-03",
      assignedTo: "Industrial Area Gas Leak",
      location: "Industrial Area, Nairobi",
      status: "returning",
      deployedAt: "2023-06-14T14:30:00Z",
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "deployed":
        return <Badge className="bg-green-500 hover:bg-green-600">Deployed</Badge>
      case "en-route":
        return <Badge className="bg-blue-500 hover:bg-blue-600">En Route</Badge>
      case "returning":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Returning</Badge>
      case "available":
        return <Badge variant="outline">Available</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "Vehicle":
        return <Ambulance className="h-4 w-4 text-primary" />
      case "Supplies":
        return <Truck className="h-4 w-4 text-primary" />
      case "Personnel":
        return <Users className="h-4 w-4 text-primary" />
      default:
        return null
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Allocation</CardTitle>
        <CardDescription>Current deployment of emergency resources</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Resource</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Deployed At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allocations.map((allocation) => (
              <TableRow key={allocation.id}>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {getResourceIcon(allocation.resourceType)}
                    <span>{allocation.resourceName}</span>
                  </div>
                </TableCell>
                <TableCell>{allocation.resourceType}</TableCell>
                <TableCell>{allocation.assignedTo}</TableCell>
                <TableCell>{allocation.location}</TableCell>
                <TableCell>{getStatusBadge(allocation.status)}</TableCell>
                <TableCell>{formatDate(allocation.deployedAt)}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

