'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { mockBlogPosts, BlogPost } from '@/lib/mockData'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { format } from 'date-fns'
import { ka } from 'date-fns/locale'
import {
  Clock,
  Eye,
  ArrowLeft,
  Calendar,
  User,
  Tag,
  BookOpen,
  Share2,
} from 'lucide-react'

function formatContent(content: string): string {
  return content
    .split('\n\n')
    .map((para) => {
      if (para.startsWith('## ')) {
        return `<h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">${para.slice(3)}</h3>`
      }
      if (para.startsWith('### ')) {
        return `<h4 class="text-lg font-semibold text-slate-900 mt-6 mb-3">${para.slice(4)}</h4>`
      }
      if (para.startsWith('- ')) {
        const items = para
          .split('\n')
          .filter((line) => line.startsWith('- '))
          .map((line) => `<li class="flex items-start gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0"></span><span>${line.slice(2)}</span></li>`)
          .join('')
        return `<ul class="space-y-2 my-4">${items}</ul>`
      }
      return `<p class="text-slate-600 leading-relaxed mb-4">${para}</p>`
    })
    .join('')
}

function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">სტატია ვერ მოიძებნა</h1>
        <p className="text-slate-500 mb-6">მოთხოვნილი სტატია არ არსებობს</p>
        <Link href="/blog">
          <Button variant="primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            ბლოგზე დაბრუნება
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  const post = mockBlogPosts.find((p) => p.slug === slug && p.isPublished)

  if (!post) {
    return <BlogPostNotFound />
  }

  const relatedPosts = mockBlogPosts
    .filter((p) => p.isPublished && p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  // If not enough related posts from same category, fill with others
  const allRelated = relatedPosts.length < 2
    ? [
        ...relatedPosts,
        ...mockBlogPosts
          .filter((p) => p.isPublished && p.id !== post.id && !relatedPosts.find((r) => r.id === p.id))
          .slice(0, 3 - relatedPosts.length),
      ]
    : relatedPosts

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-200 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>ბლოგზე დაბრუნება</span>
            </Link>

            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              {post.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-primary-100 mb-8 max-w-3xl">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-primary-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">{post.authorName}</span>
              </div>
              {post.publishedAt && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(post.publishedAt), 'd MMMM, yyyy', { locale: ka })}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} წთ კითხვა
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {post.views} ნახვა
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card variant="elevated">
                <CardContent className="p-8 lg:p-10">
                  <article
                    className="prose prose-slate max-w-none"
                    dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                  />
                </CardContent>
              </Card>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-slate-400" />
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="default" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Share */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-sm text-slate-500">გაზიარება:</span>
                <button className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-primary-100 hover:text-primary-600 text-slate-500 flex items-center justify-center transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Card */}
              <Card variant="elevated">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{post.authorName}</h3>
                  <p className="text-sm text-slate-500">ავტორი</p>
                </CardContent>
              </Card>

              {/* Post Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">სტატიის ინფორმაცია</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">კატეგორია</span>
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">კითხვის დრო</span>
                      <span className="font-medium">{post.readTime} წუთი</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">ნახვები</span>
                      <span className="font-medium">{post.views}</span>
                    </div>
                    {post.publishedAt && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">გამოქვეყნება</span>
                        <span className="font-medium">
                          {format(new Date(post.publishedAt), 'd MMM, yyyy', { locale: ka })}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {allRelated.length > 0 && (
        <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">მსგავსი სტატიები</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allRelated.map((relatedPost) => (
                <RelatedPostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card hover interactive className="h-full group">
        <div className="relative aspect-[16/9] overflow-hidden">
          <div className={cn(
            'absolute inset-0',
            'bg-gradient-to-br from-primary-500 to-primary-700',
          )}>
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-white/30" />
            </div>
          </div>
        </div>
        <CardContent className="p-5">
          <Badge variant="secondary" className="text-xs mb-2">
            {post.category}
          </Badge>
          <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {post.title}
          </h3>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} წთ
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {post.views}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
