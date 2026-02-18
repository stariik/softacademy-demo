'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Modal } from '@/components/ui/Modal'
import { useToast } from '@/components/ui/Toast'
import { mockCategories } from '@/lib/mockData'
import type { Category } from '@/lib/mockData'
import { Plus, Edit, Trash2 } from 'lucide-react'

export default function AdminCategoriesPage() {
  const { addToast } = useToast()
  const [categories, setCategories] = useState<Category[]>(mockCategories)
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState<Category | null>(null)
  const [formData, setFormData] = useState({ name: '', description: '' })

  const openModal = (category?: Category) => {
    if (category) {
      setEditing(category)
      setFormData({ name: category.name, description: category.description || '' })
    } else {
      setEditing(null)
      setFormData({ name: '', description: '' })
    }
    setModalOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editing) {
      setCategories((prev) =>
        prev.map((c) =>
          c.id === editing.id
            ? { ...c, name: formData.name, description: formData.description || null }
            : c
        )
      )
      addToast('success', 'კატეგორია განახლდა')
    } else {
      const newCategory: Category = {
        id: `cat-${Date.now()}`,
        name: formData.name,
        slug: formData.name.toLowerCase().replace(/\s+/g, '-'),
        description: formData.description || null,
        _count: { courses: 0 },
      }
      setCategories((prev) => [...prev, newCategory])
      addToast('success', 'კატეგორია შეიქმნა')
    }
    setModalOpen(false)
  }

  const handleDelete = (id: string) => {
    if (!confirm('ნამდვილად გსურთ კატეგორიის წაშლა?')) return
    setCategories((prev) => prev.filter((c) => c.id !== id))
    addToast('success', 'კატეგორია წაიშალა')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">კატეგორიები</h1>
        <Button onClick={() => openModal()}>
          <Plus className="w-4 h-4 mr-2" />
          ახალი კატეგორია
        </Button>
      </div>

      <Card>
        <CardHeader>
          <p className="text-sm text-slate-500">სულ {categories.length} კატეგორია</p>
        </CardHeader>
        <CardContent>
          {categories.length === 0 ? (
            <p className="text-slate-500 text-center py-8">კატეგორიები არ მოიძებნა</p>
          ) : (
            <div className="space-y-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-slate-800">{category.name}</p>
                    <p className="text-sm text-slate-500">
                      {category._count?.courses || 0} კურსი
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openModal(category)}
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4 text-slate-500" />
                    </button>
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                      disabled={(category._count?.courses || 0) > 0}
                    >
                      <Trash2 className={`w-4 h-4 ${
                        (category._count?.courses || 0) > 0 ? 'text-slate-300' : 'text-red-500'
                      }`} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? 'კატეგორიის რედაქტირება' : 'ახალი კატეგორია'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="სახელი"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            required
          />
          <Input
            label="აღწერა"
            value={formData.description}
            onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
          />
          <div className="flex gap-3 pt-4">
            <Button type="submit">
              შენახვა
            </Button>
            <Button type="button" variant="ghost" onClick={() => setModalOpen(false)}>
              გაუქმება
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
