import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "white"
}

export function Logo({ className, size = "md", variant = "default" }: LogoProps) {
  const sizes = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center rounded-full",
          sizes[size],
          sizes[size].replace("h-", "w-"),
          variant === "default" ? "bg-primary text-primary-foreground" : "bg-white text-primary",
        )}
      >
        <AlertCircle className={cn("absolute", size === "sm" ? "h-4 w-4" : size === "md" ? "h-5 w-5" : "h-8 w-8")} />
      </div>
      <span
        className={cn(
          "font-bold tracking-tight",
          size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-3xl",
          variant === "default" ? "text-primary" : "text-white",
        )}
      >
        RedAlert
      </span>
    </div>
  )
}

