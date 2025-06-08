import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Save,
  Users,
  Database,
  Server,
  Shield,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Download,
} from "lucide-react"

export const metadata: Metadata = {
  title: "System Settings | RedAlert",
  description: "Manage system settings and configurations",
}

export default function SystemSettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="System Settings" description="Manage system configuration and maintenance">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Configuration
        </Button>
      </DashboardHeader>

      <Tabs defaultValue="general" className="mt-6">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>System Information</CardTitle>
                <CardDescription>Overview of the system status and configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border p-3">
                      <div className="text-sm font-medium">Version</div>
                      <div className="mt-1 text-2xl font-bold">v2.4.1</div>
                      <div className="text-xs text-muted-foreground">Released: 2 weeks ago</div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <div className="text-sm font-medium">Environment</div>
                      <div className="mt-1 text-2xl font-bold">Production</div>
                      <div className="text-xs text-muted-foreground">Stable channel</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">System Status</span>
                      <Badge className="bg-green-500">Operational</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Last Backup</span>
                      <span className="text-sm">Today, 04:30 AM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Uptime</span>
                      <span className="text-sm">99.98% (30 days)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Storage Usage</span>
                      <span className="text-sm">42% (420GB / 1TB)</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Database Usage</span>
                      <span className="text-sm">28% (280GB / 1TB)</span>
                    </div>
                    <Progress value={28} className="h-2" />
                  </div>

                  <div className="rounded-md border p-3 bg-muted/50">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium">Update Available</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Version 2.5.0 is available with security improvements
                    </p>
                    <Button size="sm" className="mt-2">
                      Install Update
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>Manage core system settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">Alert System</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Auto-escalation</span>
                        <Badge>Enabled</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Verification Required</span>
                        <Badge>Critical Only</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Alert Radius</span>
                        <span className="text-sm">25km</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">Resource Management</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Auto-assignment</span>
                        <Badge>Enabled</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Resource Threshold</span>
                        <span className="text-sm">15%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Low Resource Alert</span>
                        <Badge>Enabled</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">ML Prediction System</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Model Version</span>
                        <span className="text-sm">v3.2.1</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Prediction Threshold</span>
                        <span className="text-sm">75%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Auto-update Models</span>
                        <Badge>Enabled</Badge>
                      </div>
                    </div>
                  </div>

                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Configuration
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage system users and permissions</CardDescription>
                </div>
                <Button>
                  <Users className="mr-2 h-4 w-4" />
                  Add User
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Active</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Sarah Johnson</TableCell>
                        <TableCell>sarah@redalert.org</TableCell>
                        <TableCell>
                          <Badge className="bg-primary">Administrator</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Active</Badge>
                        </TableCell>
                        <TableCell>Now</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">John Doe</TableCell>
                        <TableCell>john@redalert.org</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-500">Volunteer</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Active</Badge>
                        </TableCell>
                        <TableCell>2 hours ago</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Michael Smith</TableCell>
                        <TableCell>michael@redalert.org</TableCell>
                        <TableCell>
                          <Badge className="bg-orange-500">Manager</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Active</Badge>
                        </TableCell>
                        <TableCell>1 day ago</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Emily Wilson</TableCell>
                        <TableCell>emily@redalert.org</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-500">Volunteer</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Inactive</Badge>
                        </TableCell>
                        <TableCell>2 weeks ago</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">Role Management</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Administrator</span>
                        <span className="text-sm">3 users</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Manager</span>
                        <span className="text-sm">8 users</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Volunteer</span>
                        <span className="text-sm">234 users</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Public</span>
                        <span className="text-sm">1,245 users</span>
                      </div>
                    </div>
                    <Button size="sm" className="mt-4">
                      Manage Roles
                    </Button>
                  </div>

                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">Authentication Settings</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Two-Factor Authentication</span>
                        <Badge>Required for Admin</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Password Policy</span>
                        <Badge>Strong</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Session Timeout</span>
                        <span className="text-sm">30 minutes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Failed Login Attempts</span>
                        <span className="text-sm">5 max</span>
                      </div>
                    </div>
                    <Button size="sm" className="mt-4">
                      Security Settings
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>System Integrations</CardTitle>
              <CardDescription>Manage connections to external services and APIs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Integration</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Sync</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Kenya Meteorological Department</div>
                          <div className="text-sm text-muted-foreground">Weather data and alerts</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">API</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>Connected</span>
                          </div>
                        </TableCell>
                        <TableCell>10 minutes ago</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Configure
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">SMS Gateway</div>
                          <div className="text-sm text-muted-foreground">Alert notifications</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Service</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>Connected</span>
                          </div>
                        </TableCell>
                        <TableCell>2 hours ago</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Configure
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">GIS Data Service</div>
                          <div className="text-sm text-muted-foreground">Mapping and location data</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">API</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                            <span>Degraded</span>
                          </div>
                        </TableCell>
                        <TableCell>1 day ago</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Configure
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">National Emergency Database</div>
                          <div className="text-sm text-muted-foreground">Emergency coordination</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Database</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <XCircle className="mr-2 h-4 w-4 text-red-500" />
                            <span>Disconnected</span>
                          </div>
                        </TableCell>
                        <TableCell>3 days ago</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Reconnect
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Add New Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                          <Database className="h-8 w-8 mb-2" />
                          <span>Database</span>
                        </Button>
                        <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                          <Server className="h-8 w-8 mb-2" />
                          <span>API Service</span>
                        </Button>
                        <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                          <Shield className="h-8 w-8 mb-2" />
                          <span>Authentication</span>
                        </Button>
                        <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                          <RefreshCw className="h-8 w-8 mb-2" />
                          <span>Webhook</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">API Keys</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-md border p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Production API Key</p>
                              <p className="text-sm text-muted-foreground">Last used 2 hours ago</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Reveal
                            </Button>
                          </div>
                        </div>
                        <div className="rounded-md border p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Development API Key</p>
                              <p className="text-sm text-muted-foreground">Last used 5 days ago</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Reveal
                            </Button>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Generate New API Key
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>System Maintenance</CardTitle>
                <CardDescription>Manage system maintenance tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">Backup & Restore</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Automatic Backups</span>
                        <Badge>Daily at 04:00</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Backup Retention</span>
                        <span className="text-sm">30 days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Last Backup</span>
                        <span className="text-sm">Today, 04:30 AM</span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm">
                        Create Backup
                      </Button>
                      <Button variant="outline" size="sm">
                        Restore
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">Database Maintenance</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Last Optimization</span>
                        <span className="text-sm">3 days ago</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Database Size</span>
                        <span className="text-sm">280GB</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Automatic Cleanup</span>
                        <Badge>Weekly</Badge>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm">
                        Optimize
                      </Button>
                      <Button variant="outline" size="sm">
                        Cleanup
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">System Updates</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Current Version</span>
                        <span className="text-sm">v2.4.1</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Latest Version</span>
                        <span className="text-sm">v2.5.0</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Auto Updates</span>
                        <Badge>Security Only</Badge>
                      </div>
                    </div>
                    <Button size="sm" className="mt-4">
                      Check for Updates
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Logs</CardTitle>
                <CardDescription>View and manage system logs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Type</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Badge className="bg-red-500">Error</Badge>
                          </TableCell>
                          <TableCell className="font-medium">Database connection timeout</TableCell>
                          <TableCell>10 minutes ago</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Badge className="bg-yellow-500">Warning</Badge>
                          </TableCell>
                          <TableCell className="font-medium">API rate limit approaching</TableCell>
                          <TableCell>1 hour ago</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Badge className="bg-green-500">Info</Badge>
                          </TableCell>
                          <TableCell className="font-medium">System backup completed</TableCell>
                          <TableCell>4 hours ago</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Badge className="bg-blue-500">Debug</Badge>
                          </TableCell>
                          <TableCell className="font-medium">User authentication flow</TableCell>
                          <TableCell>1 day ago</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export Logs
                    </Button>
                    <Button variant="outline" size="sm">
                      View All Logs
                    </Button>
                  </div>

                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">Log Settings</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Log Level</span>
                        <Badge>Info</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Log Retention</span>
                        <span className="text-sm">90 days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">External Logging</span>
                        <Badge>Enabled</Badge>
                      </div>
                    </div>
                    <Button size="sm" className="mt-4">
                      Configure Logging
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

