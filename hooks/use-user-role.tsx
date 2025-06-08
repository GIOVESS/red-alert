"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type UserRole = "public" | "volunteer" | "admin"

interface UserRoleContextType {
  role: UserRole
  setRole: (role: UserRole) => void
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined)

export function UserRoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>("public")

  return <UserRoleContext.Provider value={{ role, setRole }}>{children}</UserRoleContext.Provider>
}

export function useUserRole() {
  const context = useContext(UserRoleContext)
  if (context === undefined) {
    throw new Error("useUserRole must be used within a UserRoleProvider")
  }
  return context
}

