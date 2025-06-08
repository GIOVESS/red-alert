"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useUserRole } from "@/hooks/use-user-role"
import { useRouter } from "next/navigation"
import { LogOut, User, Settings, Shield } from "lucide-react"
import Link from "next/link"

export function UserNav() {
  const { role, setRole } = useUserRole()
  const router = useRouter()

  const handleLogout = () => {
    setRole("public")
    router.push("/")
  }

  const userInfo = {
    name: role === "admin" ? "Sarah Johnson" : "John Doe",
    email: role === "admin" ? "sarah@redalert.org" : "john@redalert.org",
    image: role === "admin" ? "/placeholder.svg?height=32&width=32" : "/placeholder.svg?height=32&width=32",
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={userInfo.image} alt={userInfo.name} />
            <AvatarFallback>{userInfo.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userInfo.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{userInfo.email}</p>
            <p className="text-xs font-medium text-primary mt-1">
              {role === "admin" ? "Administrator" : role === "volunteer" ? "Volunteer" : "Public User"}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/profile" className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings" className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          {role === "admin" && (
            <DropdownMenuItem asChild>
              <Link href="/admin/system" className="cursor-pointer">
                <Shield className="mr-2 h-4 w-4" />
                <span>System Settings</span>
              </Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600 cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

