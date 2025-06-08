"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { CalendarIcon, MapPin, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  type: z.string({
    required_error: "Please select an incident type.",
  }),
  severity: z.string({
    required_error: "Please select a severity level.",
  }),
  location: z.string().min(3, {
    message: "Location must be at least 3 characters.",
  }),
  date: z.date({
    required_error: "Please select a date and time.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  reportedBy: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  contactInfo: z.string().min(5, {
    message: "Contact information must be at least 5 characters.",
  }),
})

export function IncidentForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      type: "",
      severity: "",
      location: "",
      date: new Date(),
      description: "",
      reportedBy: "",
      contactInfo: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      toast({
        title: "Incident reported",
        description: "The incident has been successfully reported.",
      })
      router.push("/incidents")
      setIsSubmitting(false)
    }, 1500)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Incident Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Building Fire in Westlands" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid gap-6 grid-cols-2">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Incident Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="fire">Fire</SelectItem>
                      <SelectItem value="flood">Flood</SelectItem>
                      <SelectItem value="accident">Accident</SelectItem>
                      <SelectItem value="hazmat">Hazardous Material</SelectItem>
                      <SelectItem value="landslide">Landslide</SelectItem>
                      <SelectItem value="earthquake">Earthquake</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="severity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Severity</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <div className="relative">
                    <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="e.g., Westlands, Nairobi" className="pl-8" {...field} />
                  </div>
                </FormControl>
                <FormDescription>Enter the specific location of the incident</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date and Time</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? format(field.value, "PPP HH:mm") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                    <div className="p-3 border-t">
                      <Input
                        type="time"
                        onChange={(e) => {
                          const [hours, minutes] = e.target.value.split(":").map(Number)
                          const newDate = new Date(field.value)
                          newDate.setHours(hours)
                          newDate.setMinutes(minutes)
                          field.onChange(newDate)
                        }}
                        defaultValue={format(field.value, "HH:mm")}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Provide detailed information about the incident..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="reportedBy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reported By</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Information</FormLabel>
                <FormControl>
                  <Input placeholder="Phone number or email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Attach Media</h3>
                <p className="text-sm text-muted-foreground">Upload photos or videos of the incident (optional)</p>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="media">Media Files</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="media"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">PNG, JPG, MP4 (MAX. 10MB)</p>
                    </div>
                    <input
                      id="media"
                      type="file"
                      className="hidden"
                      multiple
                      accept="image/png,image/jpeg,video/mp4"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                {files.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm font-medium">Selected files:</p>
                    <ul className="mt-1 text-sm text-muted-foreground">
                      {files.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="location-pin">Pin on Map</Label>
                <div className="h-[200px] w-full rounded-md border bg-muted/50 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Map will be integrated here</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-4">
          <Button variant="outline" type="button" onClick={() => router.push("/incidents")}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Incident Report"}
          </Button>
        </div>
      </form>
    </Form>
  )
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  )
}

