import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

import { RegisterForm } from "@/components/auth/register-form"

export const metadata: Metadata = {
  title: "Register | RedAlert",
  description: "Create a RedAlert account",
}

export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <AlertTriangle className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-primary">RedAlert</h1>
          <p className="text-sm text-muted-foreground">Create an account to access the RedAlert system</p>
        </div>
        <RegisterForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/auth/login" className="hover:text-brand underline underline-offset-4">
            Already have an account? Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

