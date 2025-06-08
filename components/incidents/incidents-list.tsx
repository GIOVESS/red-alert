"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Edit, AlertTriangle } from "lucide-react"
import Link from "next/link"

interface Incident {
  id: string
  title: string
  type: string
  location: string
  status: "new" | "in-progress" | "resolved" | "closed"
  severity: "low" | "medium" | "high" | "critical"
  reportedAt: string
  reportedBy: string
}

export function IncidentsList() {
  const [incidents, setIncidents] = useState<Incident[]>([
    {
      id: "INC-001",
      title: "Building Fire in Westlands",
      type: "Fire",
      location: "Westlands, Nairobi",
      status: "in-progress",
      severity: "critical",
      reportedAt: "2023-06-15T10:30:00Z",
      reportedBy: "John Doe",
    },
    {
      id: "INC-002",
      title: "Traffic Accident on Mombasa Road",
      type: "Accident",
      location: "Mombasa Road, Nairobi",
      status: "new",
      severity: "high",
      reportedAt: "2023-06-15T11:45:00Z",
      reportedBy: "Jane Smith",
    },
    {
      id: "INC-003",
      title: "Flooding in Kisumu CBD",
      type: "Flood",
      location: "CBD, Kisumu",
      status: "in-progress",
      severity: "medium",
      reportedAt: "2023-06-14T08:15:00Z",
      reportedBy: "Michael Johnson",
    },
    {
      id: "INC-004",
      title: "Gas Leak in Industrial Area",
      type: "Hazmat",
      location: "Industrial Area, Nairobi",
      status: "resolved",
      severity: "high",
      reportedAt: "2023-06-13T14:20:00Z",
      reportedBy: "Sarah Williams",
    },
    {
      id: "INC-005",
      title: "Landslide in Muranga County",
      type: "Landslide",
      location: "Muranga County",
      status: "in-progress",
      severity: "critical",
      reportedAt: "2023-06-12T06:45:00Z",
      reportedBy: "Robert Brown",
    },
    {
      id: "INC-006",
      title: "Cholera Outbreak in Mombasa",
      type: "Disease",
      location: "Mombasa County",
      status: "in-progress",
      severity: "critical",
      reportedAt: "2023-06-11T09:30:00Z",
      reportedBy: "Dr. Emily Chen",
    },
    {
      id: "INC-007",
      title: "Drought Emergency in Turkana",
      type: "Drought",
      location: "Turkana County",
      status: "in-progress",
      severity: "high",
      reportedAt: "2023-06-10T11:15:00Z",
      reportedBy: "James Wilson",
    },
    {
      id: "INC-008",
      title: "Terrorist Threat in Garissa",
      type: "Security",
      location: "Garissa County",
      status: "new",
      severity: "critical",
      reportedAt: "2023-06-15T08:45:00Z",
      reportedBy: "Security Agency",
    },
    {
      id: "INC-009",
      title: "Wildlife Conflict in Narok",
      type: "Wildlife",
      location: "Narok County",
      status: "in-progress",
      severity: "medium",
      reportedAt: "2023-06-14T15:20:00Z",
      reportedBy: "Kenya Wildlife Service",
    },
    {
      id: "INC-010",
      title: "Power Outage in Nakuru",
      type: "Infrastructure",
      location: "Nakuru County",
      status: "new",
      severity: "medium",
      reportedAt: "2023-06-15T13:10:00Z",
      reportedBy: "Kenya Power",
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return (
          <Badge
            variant="outline"
            className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300"
          >
            New
          </Badge>
        )
      case "in-progress":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300"
          >
            In Progress
          </Badge>
        )
      case "resolved":
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300"
          >
            Resolved
          </Badge>
        )
      case "closed":
        return (
          <Badge
            variant="outline"
            className="bg-gray-100 text-gray-800 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
          >
            Closed
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge className="bg-red-500 hover:bg-red-600">Critical</Badge>
      case "high":
        return <Badge className="bg-orange-500 hover:bg-orange-600">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Medium</Badge>
      case "low":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Low</Badge>
      default:
        return <Badge>{severity}</Badge>
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
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Reported At</TableHead>
            <TableHead>Reported By</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {incidents.map((incident) => (
            <TableRow key={incident.id}>
              <TableCell className="font-medium">{incident.id}</TableCell>
              <TableCell>{incident.title}</TableCell>
              <TableCell>{incident.type}</TableCell>
              <TableCell>{incident.location}</TableCell>
              <TableCell>{getStatusBadge(incident.status)}</TableCell>
              <TableCell>{getSeverityBadge(incident.severity)}</TableCell>
              <TableCell>{formatDate(incident.reportedAt)}</TableCell>
              <TableCell>{incident.reportedBy}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/incidents/${incident.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/incidents/${incident.id}/edit`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Incident
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/incidents/${incident.id}/respond`}>
                        <AlertTriangle className="mr-2 h-4 w-4" />
                        Respond
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

