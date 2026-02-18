'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { useToast } from '@/components/ui/Toast'
import { Save, Mail, MessageSquare, Globe } from 'lucide-react'

export default function AdminSettingsPage() {
  const { addToast } = useToast()
  const [saving, setSaving] = useState(false)

  const [settings, setSettings] = useState({
    TWILIO_ACCOUNT_SID: '',
    TWILIO_AUTH_TOKEN: '',
    TWILIO_PHONE_NUMBER: '',
    SMTP_HOST: '',
    SMTP_PORT: '',
    SMTP_USER: '',
    SMTP_PASSWORD: '',
    SMTP_FROM_EMAIL: '',
    SMTP_FROM_NAME: '',
    SITE_NAME: 'SoftAcademy',
    SITE_DESCRIPTION: 'კიბერუსაფრთხოების სასწავლო პლატფორმა',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setTimeout(() => {
      addToast('success', 'პარამეტრები შენახულია (დემო)')
      setSaving(false)
    }, 500)
  }

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">პარამეტრები</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary-600" />
              <h2 className="font-semibold text-slate-800">საიტის პარამეტრები</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="საიტის სახელი"
              name="SITE_NAME"
              value={settings.SITE_NAME}
              onChange={handleChange}
              placeholder="SoftAcademy"
            />
            <Input
              label="საიტის აღწერა"
              name="SITE_DESCRIPTION"
              value={settings.SITE_DESCRIPTION}
              onChange={handleChange}
              placeholder="ონლაინ კურსების პლატფორმა"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary-600" />
              <h2 className="font-semibold text-slate-800">SMS პარამეტრები (Twilio)</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Account SID"
              name="TWILIO_ACCOUNT_SID"
              value={settings.TWILIO_ACCOUNT_SID}
              onChange={handleChange}
              placeholder="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            />
            <Input
              label="Auth Token"
              name="TWILIO_AUTH_TOKEN"
              type="password"
              value={settings.TWILIO_AUTH_TOKEN}
              onChange={handleChange}
              placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            />
            <Input
              label="ტელეფონის ნომერი"
              name="TWILIO_PHONE_NUMBER"
              value={settings.TWILIO_PHONE_NUMBER}
              onChange={handleChange}
              placeholder="+1234567890"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary-600" />
              <h2 className="font-semibold text-slate-800">ელ-ფოსტის პარამეტრები (SMTP)</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="SMTP Host"
                name="SMTP_HOST"
                value={settings.SMTP_HOST}
                onChange={handleChange}
                placeholder="smtp.gmail.com"
              />
              <Input
                label="SMTP Port"
                name="SMTP_PORT"
                value={settings.SMTP_PORT}
                onChange={handleChange}
                placeholder="587"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="მომხმარებელი"
                name="SMTP_USER"
                value={settings.SMTP_USER}
                onChange={handleChange}
                placeholder="your@email.com"
              />
              <Input
                label="პაროლი"
                name="SMTP_PASSWORD"
                type="password"
                value={settings.SMTP_PASSWORD}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="გამგზავნის ელ-ფოსტა"
                name="SMTP_FROM_EMAIL"
                value={settings.SMTP_FROM_EMAIL}
                onChange={handleChange}
                placeholder="noreply@softacademy.ge"
              />
              <Input
                label="გამგზავნის სახელი"
                name="SMTP_FROM_NAME"
                value={settings.SMTP_FROM_NAME}
                onChange={handleChange}
                placeholder="SoftAcademy"
              />
            </div>
          </CardContent>
        </Card>

        <Button type="submit" isLoading={saving} size="lg">
          <Save className="w-4 h-4 mr-2" />
          პარამეტრების შენახვა
        </Button>
      </form>
    </div>
  )
}
