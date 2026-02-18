'use client'

import { cn } from '@/lib/utils'
import { LoginForm } from '@/components/auth/LoginForm'
import { Logo } from '@/components/layout/Logo'
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Sparkles,
} from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'პრაქტიკული კურსები',
    description: 'რეალურ სცენარებზე დაფუძნებული სასწავლო მასალა',
  },
  {
    icon: Users,
    title: 'ექსპერტი ინსტრუქტორები',
    description: 'ინდუსტრიაში მოღვაწე პროფესიონალები',
  },
  {
    icon: Award,
    title: 'სერტიფიკატი',
    description: 'კურსის დასრულების შემდეგ მიიღეთ სერტიფიკატი',
  },
]

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className={cn(
        'hidden lg:flex lg:w-1/2',
        'bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800',
        'relative overflow-hidden'
      )}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />

        <div className="relative flex flex-col justify-center px-12 xl:px-16">
          <div className="mb-12">
            <Logo variant="dark" size="lg" href="/" />
          </div>

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>კიბერუსაფრთხოების აკადემია</span>
            </div>

            <h1 className="text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight">
              ისწავლე კიბერუსაფრთხოება
              <span className="block text-primary-200">პროფესიონალებისგან</span>
            </h1>

            <p className="text-primary-100 text-lg max-w-md leading-relaxed">
              შეუერთდი საქართველოს წამყვან კიბერუსაფრთხოების სასწავლო პლატფორმას
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className={cn(
                  'w-10 h-10 rounded-xl shrink-0',
                  'bg-white/10 backdrop-blur-sm',
                  'flex items-center justify-center'
                )}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-primary-200 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="flex items-center gap-1">
                <GraduationCap className="w-5 h-5 text-primary-200" />
                <span className="text-2xl font-bold text-white">500+</span>
              </div>
              <p className="text-primary-200 text-sm">სტუდენტი</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <span className="text-2xl font-bold text-white">15+</span>
              <p className="text-primary-200 text-sm">კურსი</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <span className="text-2xl font-bold text-white">4.8</span>
              <p className="text-primary-200 text-sm">რეიტინგი</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-50">
        <LoginForm />
      </div>
    </div>
  )
}
