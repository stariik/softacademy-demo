import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import { mockCourses } from '@/lib/mockData'
import {
  Shield,
  Lock,
  Terminal,
  ArrowRight,
  CheckCircle,
  Play,
  Star,
  Clock,
  Users,
  Award,
  Calendar,
  Video,
  BookOpen,
  Target,
  Zap,
  KeyRound,
  Bug,
  FileSearch,
  Network,
} from 'lucide-react'

export default function HomePage() {
  const course = mockCourses.find(c => c.isPublished) || mockCourses[0]

  const courseModules = [
    {
      number: '01',
      icon: Shield,
      title: 'კიბერუსაფრთხოების საფუძვლები',
      desc: 'აიგე მყარი საფუძველი უსაფრთხოების პრინციპებში, CIA ტრიადასა და თანამედროვე საფრთხეების ლანდშაფტში',
      topics: ['უსაფრთხოების კონცეფციები', 'საფრთხის აქტორები', 'შეტევის ვექტორები', 'დაცვის სტრატეგიები'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500',
    },
    {
      number: '02',
      icon: Network,
      title: 'ქსელის უსაფრთხოება',
      desc: 'დაეუფლე ქსელის პროტოკოლებს, ფაიერვოლებს, IDS/IPS სისტემებსა და უსაფრთხო არქიტექტურის დიზაინს',
      topics: ['TCP/IP უსაფრთხოება', 'ფაიერვოლის კონფიგურაცია', 'VPN დაყენება', 'ქსელის მონიტორინგი'],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-500',
    },
    {
      number: '03',
      icon: Terminal,
      title: 'ეთიკური ჰაკინგი',
      desc: 'ისწავლე პენტესტინგის მეთოდოლოგიები, ინსტრუმენტები და ტექნიკები, რომლებსაც პროფესიონალები იყენებენ',
      topics: ['დაზვერვა', 'ექსპლუატაცია', 'პოსტ-ექსპლუატაცია', 'ანგარიშგება'],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'bg-violet-500',
    },
    {
      number: '04',
      icon: Bug,
      title: 'ვებ აპლიკაციების უსაფრთხოება',
      desc: 'აღმოაჩინე და გამოიყენე OWASP Top 10 მოწყვლადობები თანამედროვე ვებ აპლიკაციებში',
      topics: ['SQL ინექცია', 'XSS შეტევები', 'CSRF', 'ავთენტიფიკაციის ხარვეზები'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500',
    },
    {
      number: '05',
      icon: KeyRound,
      title: 'კრიპტოგრაფია',
      desc: 'გაიგე დაშიფვრის ალგორითმები, PKI, ციფრული ხელმოწერები და უსაფრთხო კომუნიკაციები',
      topics: ['სიმეტრიული დაშიფვრა', 'ასიმეტრიული დაშიფვრა', 'ჰეშირება', 'PKI'],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-500',
    },
    {
      number: '06',
      icon: FileSearch,
      title: 'ინციდენტებზე რეაგირება და ფორენზიკა',
      desc: 'მართე უსაფრთხოების ინციდენტები, შეაგროვე მტკიცებულებები და ჩაატარე ციფრული ფორენზიკის ანალიზი',
      topics: ['IR დაგეგმვა', 'მტკიცებულებების შეგროვება', 'მავნე პროგრამების ანალიზი', 'აღდგენა'],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-500',
    },
  ]

  const features = [
    { icon: Video, title: 'ლაივ სესიები', desc: 'რეალურ დროში ინტერაქტიული სწავლება Google Meet-ით' },
    { icon: BookOpen, title: 'სრული კურიკულუმი', desc: 'კიბერუსაფრთხოების ყოვლისმომცველი დაფარვა' },
    { icon: Target, title: 'პრაქტიკული ლაბები', desc: 'ვარჯიში რეალურ გარემოში' },
    { icon: Award, title: 'სერტიფიკატი', desc: 'ინდუსტრიაში აღიარებული სერტიფიცირება' },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute top-32 right-[20%] text-blue-500/30 animate-float">
            <Shield className="w-16 h-16" />
          </div>
          <div className="absolute bottom-40 left-[15%] text-blue-400/20 animate-float" style={{ animationDelay: '2s' }}>
            <Lock className="w-12 h-12" />
          </div>
          <div className="absolute top-[60%] right-[10%] text-blue-300/20 animate-float" style={{ animationDelay: '1s' }}>
            <Terminal className="w-10 h-10" />
          </div>
        </div>

        <div className="container-custom relative py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[75vh] py-12">
            <div className="text-center lg:text-left">
              <div className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8',
                'bg-blue-500/10 border border-blue-500/30',
                'text-blue-300 text-sm font-medium'
              )}>
                <Shield className="w-4 h-4" />
                <span>კიბერუსაფრთხოების სრული კურსი</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]">
                დაეუფლე
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400">
                  კიბერუსაფრთხოებას
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                სრული პროფესიონალური კიბერუსაფრთხოების ტრენინგი. ისწავლე ეთიკური ჰაკინგი,
                ქსელის უსაფრთხოება და ინციდენტებზე რეაგირება ინდუსტრიის ექსპერტებისგან.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>{course?.duration || '40+ საათი'}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>ლაივ სესიები</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="font-semibold">4.9</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href={`/courses/${course?.slug || ''}`}>
                  <Button
                    size="xl"
                    className="bg-blue-500 hover:bg-blue-600 text-white shadow-xl shadow-blue-500/25 border-0"
                  >
                    დარეგისტრირდი ახლავე
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#course">
                  <Button
                    size="xl"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    გაიგე მეტი
                  </Button>
                </Link>
              </div>

              {course && (
                <div className="mt-10 pt-10 border-t border-slate-700">
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <span className="text-4xl font-bold text-white">{course.price} ლარი</span>
                    <Badge variant="primary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      სრული წვდომა
                    </Badge>
                  </div>
                </div>
              )}
            </div>

            <div className="relative hidden lg:block">
              <div className="relative">
                <div className={cn(
                  'relative rounded-3xl overflow-hidden',
                  'bg-white',
                  'shadow-2xl shadow-blue-500/20'
                )}>
                  <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-700 p-6">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <div className="relative flex items-center justify-between">
                      <Badge className="bg-white/20 text-white border-white/30">
                        გამორჩეული კურსი
                      </Badge>
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                        <span className="text-white font-medium text-sm">4.9</span>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <Shield className="w-16 h-16 text-white/80" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {course?.title || 'კიბერუსაფრთხოების სრული კურსი'}
                    </h3>
                    <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                      {course?.shortDesc || 'სრული პროფესიონალური ტრენინგი კიბერუსაფრთხოებაში, ეთიკურ ჰაკინგსა და ქსელის დაცვაში.'}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span>{course?.startDate ? new Date(course.startDate).toLocaleDateString('ka-GE') : 'მალე'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>{course?.duration || '40+ საათი'}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                        {course?.instructor?.[0] || 'S'}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{course?.instructor || 'ექსპერტი ინსტრუქტორი'}</p>
                        <p className="text-xs text-slate-500">უსაფრთხოების პროფესიონალი</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-white shadow-xl p-4 animate-float">
                  <Terminal className="w-6 h-6 text-blue-500 mb-2" />
                  <p className="text-xs text-slate-500">პრაქტიკული</p>
                  <p className="text-sm font-semibold text-slate-900">ლაბები</p>
                </div>

                <div className="absolute -bottom-4 -left-4 w-28 h-20 rounded-2xl bg-white shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-red-500" />
                    <span className="text-xs text-slate-500">ლაივ</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900 mt-1">სესიები</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex justify-center pt-2">
            <div className="w-1 h-2 bg-blue-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section id="course" className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-50" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border-[60px] border-blue-100/60" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full border-[40px] border-indigo-100/50" />
          <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-blue-300/40" />
          <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-indigo-300/30" />
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-blue-400/30" />
        </div>
        <div className="absolute inset-0 opacity-[0.4]" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />

        <div className="container-custom relative">
          <div className="text-center mb-12">
            <div className={cn(
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6',
              'bg-white/80 backdrop-blur-sm border border-blue-200/50',
              'text-blue-600 text-sm font-semibold shadow-lg shadow-blue-500/10'
            )}>
              <BookOpen className="w-4 h-4" />
              <span>კურსის კურიკულუმი</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              რას{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                ისწავლი
              </span>
            </h2>

            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              დაეუფლე კიბერუსაფრთხოებას 6 ყოვლისმომცველი მოდულით, რომლებიც შექმნილია ინდუსტრიის ექსპერტების მიერ.
              საფუძვლებიდან მოწინავე ტექნიკებამდე.
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
              {[
                { value: '6', label: 'მოდული' },
                { value: '40+', label: 'საათი' },
                { value: '24', label: 'თემა' },
                { value: '100%', label: 'პრაქტიკული' },
              ].map((stat, i) => (
                <div key={i} className="text-center px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white shadow-lg shadow-blue-500/5">
                  <p className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-slate-500 text-sm mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {courseModules.map((module, index) => (
              <div
                key={index}
                className={cn(
                  'group relative',
                  'bg-white/80 backdrop-blur-sm',
                  'border border-white hover:border-blue-200',
                  'rounded-2xl p-5',
                  'transition-all duration-500',
                  'hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/15',
                  'shadow-lg shadow-blue-900/5',
                  index === 0 && 'lg:col-span-2',
                  index === 5 && 'lg:col-span-2',
                )}
              >
                <div className="absolute top-4 right-4">
                  <span className={cn(
                    'text-5xl font-bold',
                    'text-transparent bg-clip-text',
                    `bg-gradient-to-br ${module.color}`,
                    'opacity-10 group-hover:opacity-20 transition-opacity'
                  )}>
                    {module.number}
                  </span>
                </div>

                <div className={cn(
                  'relative w-12 h-12 rounded-xl mb-4',
                  `bg-gradient-to-br ${module.color}`,
                  'flex items-center justify-center',
                  'shadow-md',
                  'group-hover:scale-110 transition-all duration-500'
                )}>
                  <module.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {module.title}
                </h3>

                <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                  {module.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {module.topics.map((topic, i) => (
                    <span
                      key={i}
                      className={cn(
                        'px-2.5 py-1 rounded-full text-[11px] font-medium',
                        'bg-slate-100/80 text-slate-600 border border-slate-200/50',
                        'group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors'
                      )}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6 font-medium">
              მზად ხარ გახდე კიბერუსაფრთხოების პროფესიონალი?
            </p>
            <Link href={`/courses/${course?.slug || ''}`}>
              <Button
                size="xl"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl shadow-blue-500/30 border-0"
              >
                დაიწყე სწავლა დღესვე
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
                რატომ ჩვენ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                ისწავლე საუკეთესოებისგან
              </h2>
              <p className="text-slate-500 text-lg mb-10">
                ჩვენი კურსი აერთიანებს თეორიულ ცოდნას პრაქტიკულ გამოცდილებასთან,
                რომელსაც ასწავლიან ინდუსტრიის პროფესიონალები წლების რეალური გამოცდილებით.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className={cn(
                      'w-12 h-12 rounded-xl shrink-0',
                      'bg-blue-500',
                      'flex items-center justify-center',
                      'shadow-lg shadow-blue-500/25',
                      'group-hover:scale-110 transition-transform duration-300'
                    )}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                      <p className="text-slate-500 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '40+', label: 'საათი კონტენტი', icon: Clock },
                { value: '6', label: 'ძირითადი მოდული', icon: BookOpen },
                { value: '100%', label: 'ლაივ სესიები', icon: Video },
                { value: '24/7', label: 'მხარდაჭერა', icon: Zap },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    'p-6 rounded-2xl',
                    'bg-slate-50 border border-slate-100',
                    'hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300'
                  )}
                >
                  <stat.icon className="w-8 h-8 text-blue-500 mb-4" />
                  <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-slate-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container-custom relative text-center">
          <Shield className="w-16 h-16 text-white/80 mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
            მზად ხარ დაიწყო შენი
            <span className="text-blue-200"> კიბერუსაფრთხოების გზა?</span>
          </h2>

          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            შემოუერთდი ჩვენს ყოვლისმომცველ კურსს და გახდი სერტიფიცირებული კიბერუსაფრთხოების პროფესიონალი.
            ადგილები შეზღუდულია.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/courses/${course?.slug || ''}`}>
              <Button
                size="xl"
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-xl shadow-black/20"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                დარეგისტრირდი - {course?.price || '299'} ლარი
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="xl"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                დაგვიკავშირდი
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>სერტიფიკატი შედის</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>სამუდამო წვდომა</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>თანხის დაბრუნების გარანტია</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
