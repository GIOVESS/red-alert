"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Plus } from "lucide-react"

interface InventoryItem {
  id: string
  name: string
  category: string
  quantity: number
  location: string
  status: "available" | "low-stock" | "out-of-stock"
  lastUpdated: string
}

export function ResourceInventory() {
  const [inventory, setInventory] = useState<InventoryItem[]>([
    {
      id: "INV-001",
      name: "First Aid Kits",
      category: "Medical",
      quantity: 120,
      location: "Central Warehouse",
      status: "available",
      lastUpdated: "2023-06-10T14:30:00Z",
    },
    {
      id: "INV-002",
      name: "Water Bottles (500ml)",
      category: "Relief",
      quantity: 2500,
      location: "Central Warehouse",
      status: "available",
      lastUpdated: "2023-06-12T09:15:00Z",
    },
    {
      id: "INV-003",
      name: "Emergency Blankets",
      category: "Relief",
      quantity: 350,
      location: "East Depot",
      status: "available",
      lastUpdated: "2023-06-08T11:45:00Z",
    },
    {
      id: "INV-004",
      name: "Portable Generators",
      category: "Equipment",
      quantity: 8,
      location: "Central Warehouse",
      status: "low-stock",
      lastUpdated: "2023-06-05T16:20:00Z",
    },
    {
      id: "INV-005",
      name: "N95 Respirators",
      category: "Medical",
      quantity: 0,
      location: "West Depot",
      status: "out-of-stock",
      lastUpdated: "2023-06-01T10:00:00Z",
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>
      case "low-stock":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Low Stock</Badge>
      case "out-of-stock":
        return <Badge className="bg-red-500 hover:bg-red-600">Out of Stock</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
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
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Inventory</CardTitle>
            <CardDescription>Track and manage emergency supplies and equipment</CardDescription>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Item
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search inventory..." className="pl-8" />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
                <TableCell>{formatDate(item.lastUpdated)}</TableCell>
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

