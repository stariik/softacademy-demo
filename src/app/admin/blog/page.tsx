'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Input, Select } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ConfirmDialog } from '@/components/ui/Modal'
import { useToast } from '@/components/ui/Toast'
import { mockBlogPosts } from '@/lib/mockData'
import type { BlogPost } from '@/lib/mockData'
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Star,
  Search,
} from 'lucide-react'
import { format } from 'date-fns'
import { ka } from 'date-fns/locale'

const categoryOptions = [
  { value: '', label: 'ყველა კატეგორია' },
  { value: 'კიბერუსაფრთხოება', label: 'კიბერუსაფრთხოება' },
  { value: 'კარიერა', label: 'კარიერა' },
  { value: 'ვებ უსაფრთხოება', label: 'ვებ უსაფრთხოება' },
  { value: 'ფორენზიკა', label: 'ფორენზიკა' },
]

export default function AdminBlogPage() {
  const { addToast } = useToast()
  const [posts, setPosts] = useState<BlogPost[]>(mockBlogPosts)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null)

  const filteredPosts = useMemo(() => {
    let result = posts
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter)
    }
    if (searchTerm) {
      result = result.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.authorName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    return result
  }, [posts, categoryFilter, searchTerm])

  const handleDelete = () => {
    if (!postToDelete) return
    setPosts(posts.filter(p => p.id !== postToDelete.id))
    addToast('success', 'სტატია წარმატებით წაიშალა')
    setDeleteDialogOpen(false)
    setPostToDelete(null)
  }

  const togglePublish = (post: BlogPost) => {
    setPosts(prev => prev.map(p => p.id === post.id ? { ...p, isPublished: !p.isPublished } : p))
    addToast('success', post.isPublished ? 'სტატია დაიმალა' : 'სტატია გამოქვეყნდა')
  }

  const toggleFeatured = (post: BlogPost) => {
    setPosts(prev => prev.map(p => p.id === post.id ? { ...p, isFeatured: !p.isFeatured } : p))
    addToast('success', post.isFeatured ? 'აღარ არის გამორჩეული' : 'მონიშნულია გამორჩეულად')
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">ბლოგი</h1>
          <p className="text-slate-500">მართეთ ბლოგის სტატიები</p>
        </div>
        <Link href="/admin/blog/new">
          <Button leftIcon={<Plus className="w-4 h-4" />}>
            ახალი სტატია
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="ძებნა..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<Search className="w-5 h-5" />}
              />
            </div>
            <div className="w-full sm:w-48">
              <Select
                options={categoryOptions}
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>სტატიები ({filteredPosts.length})</CardTitle>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-y border-slate-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">სტატია</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">კატეგორია</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">სტატუსი</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">ნახვები</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">თარიღი</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">მოქმედება</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-slate-900 line-clamp-1">{post.title}</p>
                      <p className="text-sm text-slate-500">{post.authorName}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="primary" size="sm">
                      {post.category}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {post.isPublished ? (
                        <Badge variant="success" size="sm" dot>გამოქვეყნებული</Badge>
                      ) : (
                        <Badge variant="warning" size="sm" dot>დრაფტი</Badge>
                      )}
                      {post.isFeatured && (
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {post.views}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {format(new Date(post.createdAt), 'd MMM, yyyy', { locale: ka })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => togglePublish(post)}
                        title={post.isPublished ? 'დამალვა' : 'გამოქვეყნება'}
                      >
                        {post.isPublished ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFeatured(post)}
                        title={post.isFeatured ? 'გამორჩეულიდან მოხსნა' : 'გამორჩეულად მონიშვნა'}
                        className={post.isFeatured ? 'text-amber-500' : ''}
                      >
                        <Star className={cn('w-4 h-4', post.isFeatured && 'fill-current')} />
                      </Button>
                      <Link href={`/admin/blog/${post.id}/edit`}>
                        <Button variant="ghost" size="sm">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setPostToDelete(post)
                          setDeleteDialogOpen(true)
                        }}
                        className="text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">სტატიები ვერ მოიძებნა</p>
            </div>
          )}
        </div>
      </Card>

      <ConfirmDialog
        isOpen={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleDelete}
        title="სტატიის წაშლა"
        description={`დარწმუნებული ხართ, რომ გსურთ წაშალოთ "${postToDelete?.title}"?`}
        confirmText="წაშლა"
        cancelText="გაუქმება"
        variant="danger"
      />
    </div>
  )
}
