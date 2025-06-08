"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { useUserRole } from "@/hooks/use-user-role"
import { Logo } from "@/components/logo"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { setRole } = useUserRole()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      // In a real app, this would be an API call to your backend
      if (values.email === "admin@redalert.org" && values.password === "password123") {
        setRole("admin")
        toast({
          title: "Login successful",
          description: "Welcome back, Administrator",
        })
        router.push("/")
      } else if (values.email === "volunteer@redalert.org" && values.password === "password123") {
        setRole("volunteer")
        toast({
          title: "Login successful",
          description: "Welcome back, Volunteer",
        })
        router.push("/")
      } else {
        // Accept any email/password that meets the validation criteria
        // This allows users who just registered to log in
        setRole("volunteer") // Default to volunteer role for new registrations
        toast({
          title: "Login successful",
          description: "Welcome to RedAlert",
        })
        router.push("/")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Logo size="lg" className="mx-auto" />
          <p className="text-sm text-muted-foreground">Enter your credentials to sign in to your account</p>
        </div>
        <div className="grid gap-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </Form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" disabled>
              Public View
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setRole("public")
                router.push("/")
              }}
            >
              Guest Access
            </Button>
          </div>
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/auth/register" className="hover:text-brand underline underline-offset-4">
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

