import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Globe, Moon, Sun, Monitor } from "lucide-react"

export const metadata: Metadata = {
  title: "Settings | RedAlert",
  description: "Manage your RedAlert application settings",
}

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" description="Manage your application preferences" />

      <Tabs defaultValue="appearance" className="mt-6">
        <TabsList className="mb-4">
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="language">Language & Region</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize how the application looks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Theme</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center space-y-2">
                      <Button
                        variant="outline"
                        className="h-20 w-20 rounded-md border-2 bg-background p-0"
                        type="button"
                      >
                        <Sun className="h-8 w-8 text-primary" />
                      </Button>
                      <span className="text-sm font-medium">Light</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Button variant="outline" className="h-20 w-20 rounded-md border-2 bg-zinc-950 p-0" type="button">
                        <Moon className="h-8 w-8 text-primary" />
                      </Button>
                      <span className="text-sm font-medium">Dark</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Button
                        variant="outline"
                        className="h-20 w-20 rounded-md border-2 bg-gradient-to-b from-background to-zinc-950 p-0"
                        type="button"
                      >
                        <Monitor className="h-8 w-8 text-primary" />
                      </Button>
                      <span className="text-sm font-medium">System</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Color Scheme</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center justify-between rounded-md border p-4">
                      <div className="space-y-0.5">
                        <Label htmlFor="color-default">Default (Red)</Label>
                        <div className="flex items-center space-x-2">
                          <div className="h-5 w-5 rounded-full bg-primary"></div>
                          <span className="text-xs text-muted-foreground">Primary</span>
                        </div>
                      </div>
                      <Switch id="color-default" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between rounded-md border p-4">
                      <div className="space-y-0.5">
                        <Label htmlFor="color-blue">Blue</Label>
                        <div className="flex items-center space-x-2">
                          <div className="h-5 w-5 rounded-full bg-blue-600"></div>
                          <span className="text-xs text-muted-foreground">Primary</span>
                        </div>
                      </div>
                      <Switch id="color-blue" />
                    </div>
                    <div className="flex items-center justify-between rounded-md border p-4">
                      <div className="space-y-0.5">
                        <Label htmlFor="color-green">Green</Label>
                        <div className="flex items-center space-x-2">
                          <div className="h-5 w-5 rounded-full bg-green-600"></div>
                          <span className="text-xs text-muted-foreground">Primary</span>
                        </div>
                      </div>
                      <Switch id="color-green" />
                    </div>
                    <div className="flex items-center justify-between rounded-md border p-4">
                      <div className="space-y-0.5">
                        <Label htmlFor="color-purple">Purple</Label>
                        <div className="flex items-center space-x-2">
                          <div className="h-5 w-5 rounded-full bg-purple-600"></div>
                          <span className="text-xs text-muted-foreground">Primary</span>
                        </div>
                      </div>
                      <Switch id="color-purple" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Interface Density</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="flex items-center space-x-2">
                      <Switch id="density-compact" />
                      <Label htmlFor="density-compact">Compact</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="density-default" defaultChecked />
                      <Label htmlFor="density-default">Default</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="density-comfortable" />
                      <Label htmlFor="density-comfortable">Comfortable</Label>
                    </div>
                  </div>
                </div>

                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Appearance Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="language">
          <Card>
            <CardHeader>
              <CardTitle>Language & Region</CardTitle>
              <CardDescription>Set your language and regional preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="sw">Swahili</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="ar">Arabic</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region">Region</Label>
                  <Select defaultValue="ke">
                    <SelectTrigger id="region">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ke">Kenya</SelectItem>
                      <SelectItem value="tz">Tanzania</SelectItem>
                      <SelectItem value="ug">Uganda</SelectItem>
                      <SelectItem value="et">Ethiopia</SelectItem>
                      <SelectItem value="rw">Rwanda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Time Zone</Label>
                <Select defaultValue="africa-nairobi">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select time zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="africa-nairobi">Africa/Nairobi (EAT, +03:00)</SelectItem>
                    <SelectItem value="africa-cairo">Africa/Cairo (EET, +02:00)</SelectItem>
                    <SelectItem value="africa-lagos">Africa/Lagos (WAT, +01:00)</SelectItem>
                    <SelectItem value="africa-johannesburg">Africa/Johannesburg (SAST, +02:00)</SelectItem>
                    <SelectItem value="utc">UTC (+00:00)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Format Preferences</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date-format">Date Format</Label>
                    <Select defaultValue="dmy">
                      <SelectTrigger id="date-format">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time-format">Time Format</Label>
                    <Select defaultValue="24h">
                      <SelectTrigger id="time-format">
                        <SelectValue placeholder="Select time format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="24h">24-hour (14:30)</SelectItem>
                        <SelectItem value="12h">12-hour (2:30 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Language settings will be applied to the user interface and notifications
                </p>
              </div>

              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Language Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accessibility">
          <Card>
            <CardHeader>
              <CardTitle>Accessibility</CardTitle>
              <CardDescription>Customize accessibility settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Text & Display</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center justify-between rounded-md border p-4">
                    <div>
                      <Label htmlFor="font-size">Font Size</Label>
                      <p className="text-sm text-muted-foreground">
                        Adjust the size of text throughout the application
                      </p>
                    </div>
                    <Select defaultValue="medium">
                      <SelectTrigger id="font-size" className="w-[120px]">
                        <SelectValue placeholder="Font size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                        <SelectItem value="x-large">Extra Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between rounded-md border p-4">
                    <div>
                      <Label htmlFor="contrast">High Contrast</Label>
                      <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                    </div>
                    <Switch id="contrast" />
                  </div>

                  <div className="flex items-center justify-between rounded-md border p-4">
                    <div>
                      <Label htmlFor="reduce-motion">Reduce Motion</Label>
                      <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                    </div>
                    <Switch id="reduce-motion" />
                  </div>

                  <div className="flex items-center justify-between rounded-md border p-4">
                    <div>
                      <Label htmlFor="screen-reader">Screen Reader Support</Label>
                      <p className="text-sm text-muted-foreground">Optimize for screen readers</p>
                    </div>
                    <Switch id="screen-reader" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notifications & Alerts</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center justify-between rounded-md border p-4">
                    <div>
                      <Label htmlFor="audio-cues">Audio Cues</Label>
                      <p className="text-sm text-muted-foreground">Play sounds for important alerts</p>
                    </div>
                    <Switch id="audio-cues" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between rounded-md border p-4">
                    <div>
                      <Label htmlFor="visual-cues">Visual Cues</Label>
                      <p className="text-sm text-muted-foreground">Show visual indicators for alerts</p>
                    </div>
                    <Switch id="visual-cues" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between rounded-md border p-4">
                    <div>
                      <Label htmlFor="notification-duration">Notification Duration</Label>
                      <p className="text-sm text-muted-foreground">How long notifications stay visible</p>
                    </div>
                    <Select defaultValue="medium">
                      <SelectTrigger id="notification-duration" className="w-[120px]">
                        <SelectValue placeholder="Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short (3s)</SelectItem>
                        <SelectItem value="medium">Medium (5s)</SelectItem>
                        <SelectItem value="long">Long (10s)</SelectItem>
                        <SelectItem value="persistent">Persistent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Accessibility Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

