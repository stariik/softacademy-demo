'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useAuth } from '@/context/AuthContext'
import { Mail, Lock, LogIn } from 'lucide-react'

export function LoginForm() {
  const router = useRouter()
  const { login } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
          შესვლა
        </h2>
        <p className="text-slate-500">
          შეიყვანეთ თქვენი მონაცემები სისტემაში შესასვლელად
        </p>
      </div>

      {/* Demo notice */}
      <div className={cn(
        'mb-6 p-4 rounded-xl',
        'bg-blue-50 border border-blue-200',
        'text-sm text-blue-700'
      )}>
        <p className="font-medium mb-1">დემო რეჟიმი</p>
        <p>შეიყვანეთ ნებისმიერი მონაცემები შესასვლელად</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
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

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
            <span className="text-sm text-slate-600">დამახსოვრება</span>
          </label>
          <Link href="#" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            პაროლის აღდგენა
          </Link>
        </div>

        <Button
          type="submit"
          size="lg"
          fullWidth
          isLoading={isLoading}
          rightIcon={<LogIn className="w-5 h-5" />}
        >
          შესვლა
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-500">
        არ გაქვთ ანგარიში?{' '}
        <Link href="/register" className="text-primary-600 hover:text-primary-700 font-semibold">
          რეგისტრაცია
        </Link>
      </p>
    </div>
  )
}
