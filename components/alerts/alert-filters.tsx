"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

export function AlertFilters() {
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    severity: "",
    location: "",
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
      severity: "",
      location: "",
    })
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-end md:space-x-4 md:space-y-0">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Search</p>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search alerts..."
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
                  <SelectItem value="flood">Flood</SelectItem>
                  <SelectItem value="fire">Fire</SelectItem>
                  <SelectItem value="weather">Weather</SelectItem>
                  <SelectItem value="landslide">Landslide</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
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

            <div className="space-y-1">
              <p className="text-sm font-medium">Location</p>
              <Select value={filters.location} onValueChange={(value) => handleFilterChange("location", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="nairobi">Nairobi County</SelectItem>
                  <SelectItem value="mombasa">Mombasa County</SelectItem>
                  <SelectItem value="nakuru">Nakuru County</SelectItem>
                  <SelectItem value="muranga">Muranga County</SelectItem>
                  <SelectItem value="turkana">Turkana County</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button variant="outline" size="icon" onClick={clearFilters}>
            <X className="h-4 w-4" />
            <span className="sr-only">Clear filters</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

