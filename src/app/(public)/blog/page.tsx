'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { mockBlogPosts, BlogPost } from '@/lib/mockData'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { format } from 'date-fns'
import { ka } from 'date-fns/locale'
import {
  Clock,
  Eye,
  Sparkles,
  BookOpen,
  TrendingUp,
  Calendar,
  User,
} from 'lucide-react'

const categoryLabels: Record<string, string> = {
  'კიბერუსაფრთხოება': 'კიბერუსაფრთხოება',
  'კარიერა': 'კარიერა',
  'ვებ უსაფრთხოება': 'ვებ უსაფრთხოება',
  'ფორენზიკა': 'ფორენზიკა',
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card hover interactive className="h-full group">
        {/* Cover Image Placeholder */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <div className={cn(
            'absolute inset-0',
            'bg-gradient-to-br from-primary-500 to-primary-700',
          )}>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-white/40" />
            </div>
          </div>
          {post.isFeatured && (
            <div className="absolute top-3 left-3">
              <Badge variant="warning" className="shadow-lg">
                <TrendingUp className="w-3 h-3 mr-1" />
                რეკომენდებული
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              {categoryLabels[post.category] || post.category}
            </Badge>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} წთ
            </span>
          </div>

          <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-sm text-slate-500 mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-700">{post.authorName}</p>
                {post.publishedAt && (
                  <p className="text-xs text-slate-400">
                    {format(new Date(post.publishedAt), 'd MMM, yyyy', { locale: ka })}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Eye className="w-3 h-3" />
              {post.views}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function BlogPage() {
  const publishedPosts = mockBlogPosts.filter((p) => p.isPublished)
  const featuredPost = publishedPosts.find((p) => p.isFeatured)
  const otherPosts = publishedPosts.filter((p) => p.id !== featuredPost?.id)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full',
              'bg-white/10 backdrop-blur-sm border border-white/20',
              'text-white/90 text-sm font-medium mb-6'
            )}>
              <Sparkles className="w-4 h-4" />
              <span>ბლოგი</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              კიბერუსაფრთხოების
              <span className="block text-primary-200">სიახლეები და სტატიები</span>
            </h1>

            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              იყავი განახლებული კიბერუსაფრთხოების უახლესი ტრენდების, საფრთხეებისა და
              საუკეთესო პრაქტიკების შესახებ
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="relative -mt-16">
          <div className="container-custom">
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card hover interactive variant="elevated" className="overflow-hidden group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[16/10] md:aspect-auto">
                    <div className={cn(
                      'absolute inset-0',
                      'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800',
                    )}>
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-20 h-20 text-white/30" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="warning" className="shadow-lg">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        რეკომენდებული
                      </Badge>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">
                      {categoryLabels[featuredPost.category] || featuredPost.category}
                    </Badge>

                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-slate-500 mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.publishedAt &&
                          format(new Date(featuredPost.publishedAt), 'd MMMM, yyyy', { locale: ka })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime} წთ
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredPost.views}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{featuredPost.authorName}</p>
                        <p className="text-sm text-slate-500">ავტორი</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-slate-900">ყველა სტატია</h2>
            <p className="text-slate-500">{publishedPosts.length} სტატია</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
