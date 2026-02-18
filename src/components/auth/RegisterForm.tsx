'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useAuth } from '@/context/AuthContext'
import { Mail, Lock, User, UserPlus } from 'lucide-react'

export function RegisterForm() {
  const router = useRouter()
  const { login } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Demo mode: any credentials work
    await login('demo-token')

    // Small delay for UX
    setTimeout(() => {
      router.push('/admin')
    }, 500)
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          რეგისტრაცია
        </h2>
        <p className="text-slate-500">
          შექმენით ახალი ანგარიში სწავლის დასაწყებად
        </p>
      </div>

      {/* Demo notice */}
      <div className={cn(
        'mb-6 p-4 rounded-xl',
        'bg-blue-50 border border-blue-200',
        'text-sm text-blue-700'
      )}>
        <p className="font-medium mb-1">დემო რეჟიმი</p>
        <p>შეიყვანეთ ნებისმიერი მონაცემები რეგისტრაციისთვის</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="სახელი და გვარი"
          placeholder="თქვენი სახელი"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          leftIcon={<User className="w-5 h-5" />}
          required
        />

        <Input
          label="ელ-ფოსტა"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          leftIcon={<Mail className="w-5 h-5" />}
          required
        />

        <Input
          label="პაროლი"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          leftIcon={<Lock className="w-5 h-5" />}
          required
        />

        <Input
          label="პაროლის დადასტურება"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          leftIcon={<Lock className="w-5 h-5" />}
          required
        />

        <Button
          type="submit"
          size="lg"
          fullWidth
          isLoading={isLoading}
          rightIcon={<UserPlus className="w-5 h-5" />}
        >
          რეგისტრაცია
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-500">
        უკვე გაქვთ ანგარიში?{' '}
        <Link href="/login" className="text-primary-600 hover:text-primary-700 font-semibold">
          შესვლა
        </Link>
      </p>
    </div>
  )
}
