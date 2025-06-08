import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Save, Upload, Bell, Shield, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Profile | RedAlert",
  description: "Manage your RedAlert profile",
}

export default function ProfilePage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Profile" description="Manage your account and preferences" />

      <Tabs defaultValue="general" className="mt-6">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Change Photo
                  </Button>
                </div>

                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+254 712 345 678" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="Nairobi, Kenya" />
                  </div>
                  <Button type="submit">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills & Certifications</CardTitle>
                <CardDescription>Manage your skills and certifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Label className="mb-2 block">Skills</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-muted">
                      First Aid
                    </Badge>
                    <Badge variant="outline" className="bg-muted">
                      Search & Rescue
                    </Badge>
                    <Badge variant="outline" className="bg-muted">
                      Fire Safety
                    </Badge>
                    <Badge variant="outline" className="bg-muted">
                      Communication
                    </Badge>
                    <Badge variant="outline" className="bg-muted">
                      Leadership
                    </Badge>
                    <Button variant="outline" size="sm" className="h-6">
                      + Add Skill
                    </Button>
                  </div>
                </div>

                <div className="mb-4">
                  <Label className="mb-2 block">Certifications</Label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-md border p-3">
                      <div>
                        <p className="font-medium">First Aid Certification</p>
                        <p className="text-sm text-muted-foreground">Kenya Red Cross</p>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Expires: Jan 2025</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-md border p-3">
                      <div>
                        <p className="font-medium">Search & Rescue Training</p>
                        <p className="text-sm text-muted-foreground">National Disaster Management Unit</p>
                      </div>
                      <div className="flex items-center">
                        <Shield className="mr-1 h-4 w-4 text-green-500" />
                        <span className="text-sm">Valid</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Add Certification
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block">Volunteer History</Label>
                  <div className="rounded-md border">
                    <div className="p-3 border-b">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Total Hours</p>
                        <p className="font-bold">124</p>
                      </div>
                    </div>
                    <div className="p-3 border-b">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Incidents Responded</p>
                        <p className="font-bold">12</p>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Last Active</p>
                        <p>2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Alert Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Emergency Alerts</p>
                        <p className="text-sm text-muted-foreground">Critical and high severity alerts</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          SMS
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Email
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Push
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Advisory Alerts</p>
                        <p className="text-sm text-muted-foreground">Medium and low severity alerts</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Email
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Push
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Local Area Alerts</p>
                        <p className="text-sm text-muted-foreground">Alerts specific to your location</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          SMS
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Push
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">System Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Task Assignments</p>
                        <p className="text-sm text-muted-foreground">When you're assigned a new task</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Email
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Push
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Messages</p>
                        <p className="text-sm text-muted-foreground">When you receive a new message</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Email
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Push
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">System Updates</p>
                        <p className="text-sm text-muted-foreground">Important system announcements</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Email
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Change Password</h3>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button type="submit">Update Password</Button>
                  </form>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Two-Factor Authentication</h3>
                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Session Management</h3>
                  <div className="space-y-4">
                    <div className="rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-muted-foreground">Nairobi, Kenya • Chrome on Windows</p>
                          <p className="text-xs text-muted-foreground">Started 2 hours ago</p>
                        </div>
                        <Badge className="bg-green-500">Active</Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Sign Out All Other Devices
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

