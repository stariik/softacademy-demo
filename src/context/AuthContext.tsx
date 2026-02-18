'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  email: string | null
  phone: string | null
  name: string
  role: 'USER' | 'ADMIN'
  emailVerified: boolean
  phoneVerified: boolean
  createdAt: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (token: string) => Promise<void>
  logout: () => Promise<void>
  refresh: () => Promise<void>
}

const DEMO_ADMIN_USER: User = {
  id: 'demo-admin-1',
  email: 'admin@softacademy.ge',
  phone: '+995598233362',
  name: 'Demo Admin',
  role: 'ADMIN',
  emailVerified: true,
  phoneVerified: true,
  createdAt: '2024-01-15T00:00:00.000Z',
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Demo mode: immediately load the hardcoded admin user
    setUser(DEMO_ADMIN_USER)
    setIsLoading(false)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = async (_token: string) => {
    setUser(DEMO_ADMIN_USER)
  }

  const logout = async () => {
    setUser(null)
  }

  const refresh = async () => {
    setUser(DEMO_ADMIN_USER)
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
