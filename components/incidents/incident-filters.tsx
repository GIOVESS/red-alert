"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

export function IncidentFilters() {
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    status: "",
    severity: "",
  })

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const clearFilters = () => {
    setFilters({
      search: "",
      type: "",
      status: "",
      severity: "",
    })
  }

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-end md:space-x-4 md:space-y-0">
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">Search</p>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search incidents..."
            className="pl-8"
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="space-y-1">
          <p className="text-sm font-medium">Type</p>
          <Select value={filters.type} onValueChange={(value) => handleFilterChange("type", value)}>
            <SelectTrigger>
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="fire">Fire</SelectItem>
              <SelectItem value="flood">Flood</SelectItem>
              <SelectItem value="accident">Accident</SelectItem>
              <SelectItem value="hazmat">Hazmat</SelectItem>
              <SelectItem value="landslide">Landslide</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <p className="text-sm font-medium">Status</p>
          <Select value={filters.status} onValueChange={(value) => handleFilterChange("status", value)}>
            <SelectTrigger>
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <p className="text-sm font-medium">Severity</p>
          <Select value={filters.severity} onValueChange={(value) => handleFilterChange("severity", value)}>
            <SelectTrigger>
              <SelectValue placeholder="All Severities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severities</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button variant="outline" size="icon" onClick={clearFilters}>
        <X className="h-4 w-4" />
        <span className="sr-only">Clear filters</span>
      </Button>
    </div>
  )
}

