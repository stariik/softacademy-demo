'use client'

import { cn } from '@/lib/utils'
import { RegisterForm } from '@/components/auth/RegisterForm'
import { Logo } from '@/components/layout/Logo'
import {
  GraduationCap,
  CheckCircle,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
} from 'lucide-react'

const benefits = [
  'პრაქტიკული კურსები რეალურ სცენარებზე',
  'ექსპერტი ინსტრუქტორები ინდუსტრიიდან',
  'სერტიფიკატი კურსის დასრულებისას',
  'ონლაინ სასწავლო პლატფორმა',
  '24/7 მხარდაჭერა',
]

const stats = [
  { icon: Target, value: '95%', label: 'წარმატების მაჩვენებელი' },
  { icon: TrendingUp, value: '3x', label: 'ხელფასის ზრდა' },
  { icon: Zap, value: '6 თვე', label: 'სწავლის ხანგრძლივობა' },
]

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-50">
        <RegisterForm />
      </div>

      {/* Right side - Branding */}
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
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />

        <div className="relative flex flex-col justify-center px-12 xl:px-16">
          <div className="mb-12">
            <Logo variant="dark" size="lg" href="/" />
          </div>

          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>შეუერთდი ჩვენს საზოგადოებას</span>
            </div>

            <h1 className="text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight">
              დაიწყე კარიერა
              <span className="block text-primary-200">კიბერუსაფრთხოებაში</span>
            </h1>

            <p className="text-primary-100 text-lg max-w-md leading-relaxed">
              გახდი კიბერუსაფრთხოების ექსპერტი პროფესიონალური კურსებით
            </p>
          </div>

          {/* Benefits list */}
          <div className="space-y-4 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-400/30 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={cn(
                  'p-4 rounded-xl',
                  'bg-white/10 backdrop-blur-sm border border-white/10'
                )}
              >
                <stat.icon className="w-5 h-5 text-primary-200 mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-primary-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-10 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-white text-sm">გიორგი მ.</p>
                <p className="text-primary-200 text-xs">კურსდამთავრებული</p>
              </div>
            </div>
            <p className="text-white/80 text-sm italic leading-relaxed">
              &ldquo;SoftAcademy-ის კურსმა სრულიად შეცვალა ჩემი კარიერა. 6 თვეში
              კიბერუსაფრთხოების სპეციალისტად დავიწყე მუშაობა.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
