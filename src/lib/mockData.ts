// ===========================================================================
// SoftAcademy Demo - Mock Data
// Georgian-language cybersecurity education platform
// ===========================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface User {
  id: string;
  email: string | null;
  phone: string | null;
  name: string;
  role: "USER" | "ADMIN";
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: string;
  _count?: { orders: number };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  _count?: { courses: number };
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDesc: string;
  price: number;
  image: string | null;
  instructor: string;
  instructorBio: string | null;
  instructorImage: string | null;
  duration: string;
  startDate: string;
  meetLink: string | null;
  syllabus: string[];
  maxStudents: number | null;
  isPublished: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  categoryId: string;
  category?: Category;
  _count?: { orders: number; reviews: number };
  averageRating?: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: "PENDING" | "COMPLETED" | "CANCELLED" | "REFUNDED";
  amount: number;
  discount: number;
  finalAmount: number;
  createdAt: string;
  userId: string;
  user?: { name: string; email: string | null; phone: string | null };
  courseId: string;
  course?: { title: string };
  promocodeId: string | null;
  promocode?: { code: string } | null;
}

export interface Promocode {
  id: string;
  code: string;
  type: "PERCENTAGE" | "FIXED";
  value: number;
  maxUses: number | null;
  usedCount: number;
  minPurchase: number | null;
  expiresAt: string | null;
  isActive: boolean;
  createdAt: string;
  _count?: { orders: number };
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  isApproved: boolean;
  createdAt: string;
  userId: string;
  user?: { name: string };
  courseId: string;
  course?: { title: string; slug: string };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  authorName: string;
  authorImage: string | null;
  category: string;
  tags: string[];
  readTime: number;
  isPublished: boolean;
  isFeatured: boolean;
  views: number;
  publishedAt: string | null;
  createdAt: string;
}

export interface CourseBuyer {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  courseTitle: string;
}

export interface Settings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  metaTitle: string;
  metaDescription: string;
  analyticsId: string;
}

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

export const mockCategories: Category[] = [
  {
    id: "cat-001",
    name: "კიბერუსაფრთხოება",
    slug: "kibertusaprtxoeba",
    description:
      "კიბერუსაფრთხოების საფუძვლები, შეღწევადობის ტესტირება, ინციდენტებზე რეაგირება და საინფორმაციო უსაფრთხოების მართვა.",
    _count: { courses: 2 },
  },
  {
    id: "cat-002",
    name: "პროგრამირება",
    slug: "programireba",
    description:
      "პროგრამირების ენები და ტექნოლოგიები, ვებ და მობილური აპლიკაციების შემუშავება, DevOps პრაქტიკები.",
    _count: { courses: 0 },
  },
  {
    id: "cat-003",
    name: "ქსელის ადმინისტრირება",
    slug: "qselis-administrireba",
    description:
      "ქსელური ინფრასტრუქტურის დაგეგმვა, კონფიგურირება და მართვა, სერვერული ტექნოლოგიები და ღრუბლოვანი სერვისები.",
    _count: { courses: 1 },
  },
  {
    id: "cat-004",
    name: "ციფრული ფორენზიკა",
    slug: "cipruli-porenzika",
    description:
      "ციფრული მტკიცებულებების მოპოვება და ანალიზი, კიბერდანაშაულის გამოძიება, მეხსიერებისა და დისკის ფორენზიკა.",
    _count: { courses: 0 },
  },
];

// ---------------------------------------------------------------------------
// Courses
// ---------------------------------------------------------------------------

export const mockCourses: Course[] = [
  {
    id: "crs-001",
    title: "კიბერუსაფრთხოების საფუძვლები",
    slug: "kibertusaprtxoebis-sapudzvlebi",
    description: `ეს კურსი განკუთვნილია მათთვის, ვისაც სურს კიბერუსაფრთხოების სფეროში კარიერის დაწყება. კურსის განმავლობაში შეისწავლით თანამედროვე კიბერსაფრთხეებს, დაცვის მეთოდებსა და ინსტრუმენტებს.

კურსი მოიცავს პრაქტიკულ სავარჯიშოებს ვირტუალურ ლაბორატორიაში, სადაც რეალურ სცენარებზე იმუშავებთ. გაეცნობით ქსელის უსაფრთხოებას, კრიპტოგრაფიას, მავნე პროგრამების ანალიზს და ინციდენტებზე რეაგირების პროცედურებს.

კურსის დასრულების შემდეგ მზად იქნებით CompTIA Security+ სერტიფიკაციის გამოცდისთვის.`,
    shortDesc:
      "შეისწავლეთ კიბერუსაფრთხოების საფუძვლები, თანამედროვე საფრთხეები და დაცვის მეთოდები პრაქტიკული სავარჯიშოებით.",
    price: 350,
    image: "/images/courses/cybersecurity-fundamentals.jpg",
    instructor: "დავით კვარაცხელია",
    instructorBio:
      "კიბერუსაფრთხოების ექსპერტი 10 წლიანი გამოცდილებით. CISSP, CEH სერტიფიკატების მფლობელი. მუშაობდა საერთაშორისო ორგანიზაციებში SOC ანალიტიკოსად.",
    instructorImage: "/images/instructors/davit-kvaratskhelia.jpg",
    duration: "12 კვირა",
    startDate: "2026-03-15T10:00:00.000Z",
    meetLink: "https://meet.google.com/abc-defg-hij",
    syllabus: [
      "კიბერუსაფრთხოების შესავალი და ძირითადი ცნებები",
      "ქსელის უსაფრთხოების საფუძვლები",
      "კრიპტოგრაფიის პრინციპები",
      "ოპერაციული სისტემების უსაფრთხოება",
      "მავნე პროგრამების ტიპები და ანალიზი",
      "სოციალური ინჟინერია და ფიშინგი",
      "ვებ აპლიკაციების უსაფრთხოება",
      "ინციდენტებზე რეაგირება",
      "რისკების მართვა და შესაბამისობა",
      "უსაფრთხოების ინსტრუმენტები და ტექნოლოგიები",
      "პრაქტიკული ლაბორატორიები",
      "საბოლოო პროექტი და სერტიფიკაციისთვის მომზადება",
    ],
    maxStudents: 25,
    isPublished: true,
    isFeatured: true,
    createdAt: "2025-09-10T08:30:00.000Z",
    updatedAt: "2026-01-20T14:15:00.000Z",
    categoryId: "cat-001",
    category: {
      id: "cat-001",
      name: "კიბერუსაფრთხოება",
      slug: "kibertusaprtxoeba",
      description: null,
    },
    _count: { orders: 7, reviews: 5 },
    averageRating: 4.6,
  },
  {
    id: "crs-002",
    title: "შეღწევადობის ტესტირება (Penetration Testing)",
    slug: "sheghwevadobia-testireba",
    description: `შეღწევადობის ტესტირების კურსი ორიენტირებულია პრაქტიკულ უნარებზე. კურსის მანძილზე შეისწავლით ეთიკური ჰაკინგის მეთოდოლოგიას, ინსტრუმენტებს და ტექნიკებს.

თქვენ იმუშავებთ Kali Linux-ის გარემოში, გაეცნობით Metasploit Framework-ს, Burp Suite-ს, Nmap-ს და სხვა პროფესიონალურ ინსტრუმენტებს. ყოველი თემა ილუსტრირებულია რეალური მაგალითებით.

კურსი მოგამზადებთ OSCP სერტიფიკაციის გამოცდისთვის.`,
    shortDesc:
      "ეთიკური ჰაკინგი და შეღწევადობის ტესტირება Kali Linux-ით. პრაქტიკაზე ორიენტირებული კურსი OSCP მომზადებით.",
    price: 500,
    image: "/images/courses/penetration-testing.jpg",
    instructor: "ალექსანდრე თავართქილაძე",
    instructorBio:
      "OSCP, OSCE სერტიფიკატების მფლობელი. Red Team ლიდერი 7 წლიანი გამოცდილებით. Bug Bounty მონადირე HackerOne-სა და Bugcrowd-ზე.",
    instructorImage: "/images/instructors/aleksandre-tavartkiladze.jpg",
    duration: "16 კვირა",
    startDate: "2026-04-01T10:00:00.000Z",
    meetLink: "https://meet.google.com/klm-nopq-rst",
    syllabus: [
      "შეღწევადობის ტესტირების მეთოდოლოგია",
      "Kali Linux-ის სამუშაო გარემოს კონფიგურაცია",
      "ინფორმაციის შეგროვება (Reconnaissance)",
      "სკანირება და ენუმერაცია",
      "ვებ აპლიკაციების ტესტირება (OWASP Top 10)",
      "ექსპლოიტაციის ტექნიკები",
      "Metasploit Framework",
      "პრივილეგიების ამაღლება",
      "Active Directory-ის შეტევები",
      "პოსტ-ექსპლოიტაცია",
      "ანგარიშის წერა და პრეზენტაცია",
      "Capture The Flag (CTF) გამოწვევები",
      "OSCP ლაბორატორიული მომზადება",
      "საბოლოო პრაქტიკული გამოცდა",
    ],
    maxStudents: 20,
    isPublished: true,
    isFeatured: true,
    createdAt: "2025-10-05T12:00:00.000Z",
    updatedAt: "2026-02-01T09:45:00.000Z",
    categoryId: "cat-001",
    category: {
      id: "cat-001",
      name: "კიბერუსაფრთხოება",
      slug: "kibertusaprtxoeba",
      description: null,
    },
    _count: { orders: 4, reviews: 3 },
    averageRating: 4.8,
  },
  {
    id: "crs-003",
    title: "ქსელური ინფრასტრუქტურის მართვა",
    slug: "qseluri-inprastruqturis-martva",
    description: `ქსელური ინფრასტრუქტურის მართვის კურსი გაძლევთ სრულ ცოდნას კორპორატიული ქსელების დაგეგმვის, იმპლემენტაციისა და მართვის შესახებ.

შეისწავლით TCP/IP პროტოკოლებს, როუტინგსა და სვიჩინგს, VPN ტექნოლოგიებს, Firewall-ის კონფიგურაციას და ქსელის მონიტორინგის ინსტრუმენტებს. კურსი ასევე მოიცავს ღრუბლოვანი ქსელების (AWS, Azure) საფუძვლებს.

კურსი მოგამზადებთ CCNA სერტიფიკაციისთვის.`,
    shortDesc:
      "კორპორატიული ქსელების დაგეგმვა, კონფიგურაცია და მართვა. CCNA სერტიფიკაციის მომზადება პრაქტიკული ლაბორატორიებით.",
    price: 280,
    image: "/images/courses/network-administration.jpg",
    instructor: "მარიამ ხარაიშვილი",
    instructorBio:
      "CCNP, CCNA სერტიფიკატების მფლობელი. ქსელის ინჟინერი 8 წლიანი გამოცდილებით. ასწავლის Cisco Networking Academy-ში.",
    instructorImage: "/images/instructors/mariam-kharaishvili.jpg",
    duration: "10 კვირა",
    startDate: "2026-03-20T10:00:00.000Z",
    meetLink: "https://meet.google.com/uvw-xyza-bcd",
    syllabus: [
      "ქსელის საფუძვლები და OSI მოდელი",
      "TCP/IP პროტოკოლები",
      "სვიჩინგის ტექნოლოგიები და VLAN",
      "როუტინგის პროტოკოლები (OSPF, BGP)",
      "ქსელის უსაფრთხოება და Firewall",
      "VPN ტექნოლოგიები",
      "უკაბელო ქსელების მართვა",
      "ქსელის მონიტორინგი (Wireshark, SNMP)",
      "ღრუბლოვანი ქსელების საფუძვლები",
      "პრაქტიკული ლაბორატორიები და CCNA მომზადება",
    ],
    maxStudents: 30,
    isPublished: true,
    isFeatured: false,
    createdAt: "2025-11-01T09:00:00.000Z",
    updatedAt: "2026-01-15T16:30:00.000Z",
    categoryId: "cat-003",
    category: {
      id: "cat-003",
      name: "ქსელის ადმინისტრირება",
      slug: "qselis-administrireba",
      description: null,
    },
    _count: { orders: 3, reviews: 2 },
    averageRating: 4.5,
  },
];

// ---------------------------------------------------------------------------
// Users
// ---------------------------------------------------------------------------

export const mockUsers: User[] = [
  {
    id: "usr-001",
    email: "admin@softacademy.ge",
    phone: "+995555100100",
    name: "ადმინი SoftAcademy",
    role: "ADMIN",
    emailVerified: true,
    phoneVerified: true,
    createdAt: "2025-08-01T10:00:00.000Z",
    _count: { orders: 0 },
  },
  {
    id: "usr-002",
    email: "giorgi.mamulashvili@gmail.com",
    phone: "+995555201020",
    name: "გიორგი მამულაშვილი",
    role: "USER",
    emailVerified: true,
    phoneVerified: true,
    createdAt: "2025-09-15T14:22:00.000Z",
    _count: { orders: 2 },
  },
  {
    id: "usr-003",
    email: "nino.beridze@yahoo.com",
    phone: "+995555302030",
    name: "ნინო ბერიძე",
    role: "USER",
    emailVerified: true,
    phoneVerified: false,
    createdAt: "2025-09-28T09:45:00.000Z",
    _count: { orders: 1 },
  },
  {
    id: "usr-004",
    email: "luka.chkheidze@mail.com",
    phone: "+995555403040",
    name: "ლუკა ჩხეიძე",
    role: "USER",
    emailVerified: true,
    phoneVerified: true,
    createdAt: "2025-10-10T16:30:00.000Z",
    _count: { orders: 2 },
  },
  {
    id: "usr-005",
    email: "ana.kapanadze@outlook.com",
    phone: "+995555504050",
    name: "ანა კაპანაძე",
    role: "USER",
    emailVerified: false,
    phoneVerified: true,
    createdAt: "2025-10-22T11:15:00.000Z",
    _count: { orders: 1 },
  },
  {
    id: "usr-006",
    email: null,
    phone: "+995555605060",
    name: "თორნიკე ჯავახიშვილი",
    role: "USER",
    emailVerified: false,
    phoneVerified: true,
    createdAt: "2025-11-05T08:00:00.000Z",
    _count: { orders: 3 },
  },
  {
    id: "usr-007",
    email: "salome.tsiklauri@gmail.com",
    phone: "+995555706070",
    name: "სალომე ციკლაური",
    role: "USER",
    emailVerified: true,
    phoneVerified: true,
    createdAt: "2025-11-18T13:40:00.000Z",
    _count: { orders: 2 },
  },
  {
    id: "usr-008",
    email: "irakli.gelashvili@proton.me",
    phone: null,
    name: "ირაკლი გელაშვილი",
    role: "USER",
    emailVerified: true,
    phoneVerified: false,
    createdAt: "2025-12-01T10:20:00.000Z",
    _count: { orders: 1 },
  },
];

// ---------------------------------------------------------------------------
// Orders
// ---------------------------------------------------------------------------

export const mockOrders: Order[] = [
  {
    id: "ord-001",
    orderNumber: "SA-20251001-001",
    status: "COMPLETED",
    amount: 350,
    discount: 70,
    finalAmount: 280,
    createdAt: "2025-10-01T10:30:00.000Z",
    userId: "usr-002",
    user: {
      name: "გიორგი მამულაშვილი",
      email: "giorgi.mamulashvili@gmail.com",
      phone: "+995555201020",
    },
    courseId: "crs-001",
    course: { title: "კიბერუსაფრთხოების საფუძვლები" },
    promocodeId: "promo-001",
    promocode: { code: "CYBER2024" },
  },
  {
    id: "ord-002",
    orderNumber: "SA-20251005-002",
    status: "COMPLETED",
    amount: 500,
    discount: 0,
    finalAmount: 500,
    createdAt: "2025-10-05T14:15:00.000Z",
    userId: "usr-002",
    user: {
      name: "გიორგი მამულაშვილი",
      email: "giorgi.mamulashvili@gmail.com",
      phone: "+995555201020",
    },
    courseId: "crs-002",
    course: { title: "შეღწევადობის ტესტირება (Penetration Testing)" },
    promocodeId: null,
    promocode: null,
  },
  {
    id: "ord-003",
    orderNumber: "SA-20251012-003",
    status: "COMPLETED",
    amount: 350,
    discount: 52.5,
    finalAmount: 297.5,
    createdAt: "2025-10-12T09:00:00.000Z",
    userId: "usr-003",
    user: {
      name: "ნინო ბერიძე",
      email: "nino.beridze@yahoo.com",
      phone: "+995555302030",
    },
    courseId: "crs-001",
    course: { title: "კიბერუსაფრთხოების საფუძვლები" },
    promocodeId: "promo-002",
    promocode: { code: "STUDENT" },
  },
  {
    id: "ord-004",
    orderNumber: "SA-20251020-004",
    status: "COMPLETED",
    amount: 500,
    discount: 100,
    finalAmount: 400,
    createdAt: "2025-10-20T11:45:00.000Z",
    userId: "usr-004",
    user: {
      name: "ლუკა ჩხეიძე",
      email: "luka.chkheidze@mail.com",
      phone: "+995555403040",
    },
    courseId: "crs-002",
    course: { title: "შეღწევადობის ტესტირება (Penetration Testing)" },
    promocodeId: "promo-001",
    promocode: { code: "CYBER2024" },
  },
  {
    id: "ord-005",
    orderNumber: "SA-20251102-005",
    status: "COMPLETED",
    amount: 280,
    discount: 0,
    finalAmount: 280,
    createdAt: "2025-11-02T16:20:00.000Z",
    userId: "usr-004",
    user: {
      name: "ლუკა ჩხეიძე",
      email: "luka.chkheidze@mail.com",
      phone: "+995555403040",
    },
    courseId: "crs-003",
    course: { title: "ქსელური ინფრასტრუქტურის მართვა" },
    promocodeId: null,
    promocode: null,
  },
  {
    id: "ord-006",
    orderNumber: "SA-20251110-006",
    status: "CANCELLED",
    amount: 350,
    discount: 0,
    finalAmount: 350,
    createdAt: "2025-11-10T08:30:00.000Z",
    userId: "usr-005",
    user: {
      name: "ანა კაპანაძე",
      email: "ana.kapanadze@outlook.com",
      phone: "+995555504050",
    },
    courseId: "crs-001",
    course: { title: "კიბერუსაფრთხოების საფუძვლები" },
    promocodeId: null,
    promocode: null,
  },
  {
    id: "ord-007",
    orderNumber: "SA-20251118-007",
    status: "COMPLETED",
    amount: 350,
    discount: 0,
    finalAmount: 350,
    createdAt: "2025-11-18T12:00:00.000Z",
    userId: "usr-006",
    user: {
      name: "თორნიკე ჯავახიშვილი",
      email: null,
      phone: "+995555605060",
    },
    courseId: "crs-001",
    course: { title: "კიბერუსაფრთხოების საფუძვლები" },
    promocodeId: null,
    promocode: null,
  },
  {
    id: "ord-008",
    orderNumber: "SA-20251125-008",
    status: "COMPLETED",
    amount: 500,
    discount: 150,
    finalAmount: 350,
    createdAt: "2025-11-25T15:10:00.000Z",
    userId: "usr-006",
    user: {
      name: "თორნიკე ჯავახიშვილი",
      email: null,
      phone: "+995555605060",
    },
    courseId: "crs-002",
    course: { title: "შეღწევადობის ტესტირება (Penetration Testing)" },
    promocodeId: "promo-004",
    promocode: { code: "VIP30" },
  },
  {
    id: "ord-009",
    orderNumber: "SA-20251203-009",
    status: "PENDING",
    amount: 280,
    discount: 50,
    finalAmount: 230,
    createdAt: "2025-12-03T10:55:00.000Z",
    userId: "usr-006",
    user: {
      name: "თორნიკე ჯავახიშვილი",
      email: null,
      phone: "+995555605060",
    },
    courseId: "crs-003",
    course: { title: "ქსელური ინფრასტრუქტურის მართვა" },
    promocodeId: "promo-003",
    promocode: { code: "EARLY50" },
  },
  {
    id: "ord-010",
    orderNumber: "SA-20251210-010",
    status: "COMPLETED",
    amount: 350,
    discount: 52.5,
    finalAmount: 297.5,
    createdAt: "2025-12-10T14:30:00.000Z",
    userId: "usr-007",
    user: {
      name: "სალომე ციკლაური",
      email: "salome.tsiklauri@gmail.com",
      phone: "+995555706070",
    },
    courseId: "crs-001",
    course: { title: "კიბერუსაფრთხოების საფუძვლები" },
    promocodeId: "promo-002",
    promocode: { code: "STUDENT" },
  },
  {
    id: "ord-011",
    orderNumber: "SA-20260115-011",
    status: "PENDING",
    amount: 280,
    discount: 0,
    finalAmount: 280,
    createdAt: "2026-01-15T09:20:00.000Z",
    userId: "usr-007",
    user: {
      name: "სალომე ციკლაური",
      email: "salome.tsiklauri@gmail.com",
      phone: "+995555706070",
    },
    courseId: "crs-003",
    course: { title: "ქსელური ინფრასტრუქტურის მართვა" },
    promocodeId: null,
    promocode: null,
  },
  {
    id: "ord-012",
    orderNumber: "SA-20260201-012",
    status: "REFUNDED",
    amount: 500,
    discount: 75,
    finalAmount: 425,
    createdAt: "2026-02-01T11:00:00.000Z",
    userId: "usr-008",
    user: {
      name: "ირაკლი გელაშვილი",
      email: "irakli.gelashvili@proton.me",
      phone: null,
    },
    courseId: "crs-002",
    course: { title: "შეღწევადობის ტესტირება (Penetration Testing)" },
    promocodeId: "promo-002",
    promocode: { code: "STUDENT" },
  },
];

// ---------------------------------------------------------------------------
// Promocodes
// ---------------------------------------------------------------------------

export const mockPromocodes: Promocode[] = [
  {
    id: "promo-001",
    code: "CYBER2024",
    type: "PERCENTAGE",
    value: 20,
    maxUses: 50,
    usedCount: 2,
    minPurchase: 200,
    expiresAt: "2026-06-30T23:59:59.000Z",
    isActive: true,
    createdAt: "2025-09-01T10:00:00.000Z",
    _count: { orders: 2 },
  },
  {
    id: "promo-002",
    code: "STUDENT",
    type: "PERCENTAGE",
    value: 15,
    maxUses: 100,
    usedCount: 3,
    minPurchase: null,
    expiresAt: "2026-12-31T23:59:59.000Z",
    isActive: true,
    createdAt: "2025-09-01T10:00:00.000Z",
    _count: { orders: 3 },
  },
  {
    id: "promo-003",
    code: "EARLY50",
    type: "FIXED",
    value: 50,
    maxUses: 30,
    usedCount: 1,
    minPurchase: 250,
    expiresAt: "2026-04-01T23:59:59.000Z",
    isActive: true,
    createdAt: "2025-10-15T10:00:00.000Z",
    _count: { orders: 1 },
  },
  {
    id: "promo-004",
    code: "VIP30",
    type: "PERCENTAGE",
    value: 30,
    maxUses: 10,
    usedCount: 1,
    minPurchase: 300,
    expiresAt: null,
    isActive: false,
    createdAt: "2025-11-01T10:00:00.000Z",
    _count: { orders: 1 },
  },
];

// ---------------------------------------------------------------------------
// Reviews
// ---------------------------------------------------------------------------

export const mockReviews: Review[] = [
  {
    id: "rev-001",
    rating: 5,
    comment:
      "შესანიშნავი კურსია! ლექტორი ძალიან კარგად ხსნის რთულ თემებს. პრაქტიკული სავარჯიშოები განსაკუთრებით სასარგებლო იყო. გირჩევთ ყველას, ვისაც კიბერუსაფრთხოებით დაინტერესება აქვს.",
    isApproved: true,
    createdAt: "2025-11-01T10:30:00.000Z",
    userId: "usr-002",
    user: { name: "გიორგი მამულაშვილი" },
    courseId: "crs-001",
    course: {
      title: "კიბერუსაფრთხოების საფუძვლები",
      slug: "kibertusaprtxoebis-sapudzvlebi",
    },
  },
  {
    id: "rev-002",
    rating: 4,
    comment:
      "კარგი კურსია, თუმცა მინდოდა მეტი პრაქტიკული მაგალითი ქსელის უსაფრთხოების ნაწილში. საერთო ჯამში კმაყოფილი ვარ და ბევრი რამ ვისწავლე.",
    isApproved: true,
    createdAt: "2025-11-15T14:20:00.000Z",
    userId: "usr-003",
    user: { name: "ნინო ბერიძე" },
    courseId: "crs-001",
    course: {
      title: "კიბერუსაფრთხოების საფუძვლები",
      slug: "kibertusaprtxoebis-sapudzvlebi",
    },
  },
  {
    id: "rev-003",
    rating: 5,
    comment:
      "საუკეთესო კურსი, რაც კიბერუსაფრთხოებაში გავიარე. Metasploit-ის თემა განსაკუთრებით საინტერესო იყო. ლექტორი ნამდვილი პროფესიონალია.",
    isApproved: true,
    createdAt: "2025-11-20T09:15:00.000Z",
    userId: "usr-004",
    user: { name: "ლუკა ჩხეიძე" },
    courseId: "crs-002",
    course: {
      title: "შეღწევადობის ტესტირება (Penetration Testing)",
      slug: "sheghwevadobia-testireba",
    },
  },
  {
    id: "rev-004",
    rating: 5,
    comment:
      "ძალიან კარგად სტრუქტურირებული კურსია. CTF გამოწვევები შესანიშნავი იყო და რეალურ სცენარებთან ახლოს. აუცილებლად გავივლი შემდეგ კურსსაც.",
    isApproved: true,
    createdAt: "2025-12-05T16:40:00.000Z",
    userId: "usr-006",
    user: { name: "თორნიკე ჯავახიშვილი" },
    courseId: "crs-002",
    course: {
      title: "შეღწევადობის ტესტირება (Penetration Testing)",
      slug: "sheghwevadobia-testireba",
    },
  },
  {
    id: "rev-005",
    rating: 4,
    comment:
      "კურსი საინტერესოა, მაგრამ ტემპი ზოგჯერ ცოტა სწრაფი იყო. მეტი დრო დასჭირდა ზოგიერთ თემას. მთლიანობაში კარგი გამოცდილება იყო.",
    isApproved: true,
    createdAt: "2025-12-18T11:00:00.000Z",
    userId: "usr-007",
    user: { name: "სალომე ციკლაური" },
    courseId: "crs-001",
    course: {
      title: "კიბერუსაფრთხოების საფუძვლები",
      slug: "kibertusaprtxoebis-sapudzvlebi",
    },
  },
  {
    id: "rev-006",
    rating: 3,
    comment:
      "კურსის შინაარსი კარგია, მაგრამ ვიდეო ხარისხი შეიძლება გაუმჯობესდეს. ასევე, ზოგიერთი ლაბორატორიის ინსტრუქცია არ იყო საკმარისად დეტალური.",
    isApproved: false,
    createdAt: "2026-01-08T15:30:00.000Z",
    userId: "usr-006",
    user: { name: "თორნიკე ჯავახიშვილი" },
    courseId: "crs-001",
    course: {
      title: "კიბერუსაფრთხოების საფუძვლები",
      slug: "kibertusaprtxoebis-sapudzvlebi",
    },
  },
  {
    id: "rev-007",
    rating: 5,
    comment:
      "ქსელის ადმინისტრირების კურსი ჩემთვის ძალიან სასარგებლო აღმოჩნდა. Cisco-ს ემულატორზე მუშაობა პრაქტიკულ გამოცდილებას აძლევს. CCNA-სთვის მომზადება შესანიშნავი იყო.",
    isApproved: true,
    createdAt: "2026-01-20T10:45:00.000Z",
    userId: "usr-004",
    user: { name: "ლუკა ჩხეიძე" },
    courseId: "crs-003",
    course: {
      title: "ქსელური ინფრასტრუქტურის მართვა",
      slug: "qseluri-inprastruqturis-martva",
    },
  },
  {
    id: "rev-008",
    rating: 4,
    comment:
      "კარგი შესავალი კურსია ქსელის ადმინისტრირებაში. ლექტორი კომპეტენტურია და მასალა კარგად არის დალაგებული. მეტი ღრუბლოვანი ტექნოლოგიების ჩართვა კარგი იქნებოდა.",
    isApproved: false,
    createdAt: "2026-02-05T08:20:00.000Z",
    userId: "usr-002",
    user: { name: "გიორგი მამულაშვილი" },
    courseId: "crs-003",
    course: {
      title: "ქსელური ინფრასტრუქტურის მართვა",
      slug: "qseluri-inprastruqturis-martva",
    },
  },
];

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------

export const mockBlogPosts: BlogPost[] = [
  {
    id: "blog-001",
    title: "2026 წლის ტოპ 10 კიბერსაფრთხე: რა უნდა იცოდეთ",
    slug: "2026-wlis-top-10-kibersaprtxe",
    excerpt:
      "გაეცანით 2026 წლის ყველაზე აქტუალურ კიბერსაფრთხეებს და გაიგეთ, როგორ დაიცვათ თავი და თქვენი ორგანიზაცია.",
    content: `კიბერუსაფრთხოების ლანდშაფტი მუდმივად იცვლება. 2026 წელს რამდენიმე ახალი საფრთხე გამოჩნდა, რომლებიც ორგანიზაციებისა და ინდივიდუალური მომხმარებლების ყურადღებას მოითხოვს.

## 1. AI-ზე დაფუძნებული ფიშინგის შეტევები

ხელოვნური ინტელექტის განვითარებასთან ერთად, ფიშინგის შეტევები სულ უფრო დახვეწილი გახდა. თავდამსხმელები AI-ს იყენებენ მეტად რეალისტური ფიშინგ ელ-ფოსტისა და ვებგვერდების შესაქმნელად.

## 2. Ransomware-as-a-Service (RaaS)

გამოსასყიდი პროგრამების სერვისული მოდელი კვლავ ფართოვდება, რაც კიბერდანაშაულს უფრო ხელმისაწვდომს ხდის ტექნიკური ცოდნის არმქონე პირებისთვისაც.

## 3. IoT მოწყობილობების უსაფრთხოება

ინტერნეტთან დაკავშირებული მოწყობილობების რაოდენობა იზრდება და მათთან დაკავშირებული რისკებიც.

## 4. Supply Chain შეტევები

მიწოდების ჯაჭვზე მიმართული შეტევები კვლავ რჩება მნიშვნელოვან საფრთხედ.

## 5. Zero-Day ექსპლოიტები

ნულოვანი დღის დაუცველობები კვლავ აქტუალურია და მათი აღმოჩენა სულ უფრო რთულდება.`,
    coverImage: "/images/blog/cyber-threats-2026.jpg",
    authorName: "დავით კვარაცხელია",
    authorImage: "/images/instructors/davit-kvaratskhelia.jpg",
    category: "კიბერუსაფრთხოება",
    tags: [
      "კიბერსაფრთხეები",
      "ransomware",
      "ფიშინგი",
      "IoT",
      "AI",
    ],
    readTime: 8,
    isPublished: true,
    isFeatured: true,
    views: 1245,
    publishedAt: "2026-01-10T09:00:00.000Z",
    createdAt: "2026-01-08T14:30:00.000Z",
  },
  {
    id: "blog-002",
    title: "როგორ დავიწყოთ კარიერა კიბერუსაფრთხოებაში: სრული გზამკვლევი",
    slug: "rogor-davitsqot-kariera-kibertusaprtxoebashi",
    excerpt:
      "პრაქტიკული რჩევები და ნაბიჯ-ნაბიჯ გეგმა მათთვის, ვისაც კიბერუსაფრთხოების სფეროში კარიერის დაწყება სურს.",
    content: `კიბერუსაფრთხოება ერთ-ერთი ყველაზე მოთხოვნადი პროფესიაა თანამედროვე ტექნოლოგიურ სამყაროში. ამ სტატიაში განვიხილავთ, როგორ შეგიძლიათ დაიწყოთ კარიერა ამ სფეროში.

## საფუძვლების შესწავლა

პირველ რიგში, აუცილებელია ქსელების, ოპერაციული სისტემების და პროგრამირების საფუძვლების ცოდნა.

## სერტიფიკაციები

- CompTIA Security+ - საწყისი დონისთვის
- CEH - ეთიკური ჰაკინგისთვის
- CISSP - მენეჯმენტის დონისთვის
- OSCP - შეღწევადობის ტესტირებისთვის

## პრაქტიკული გამოცდილება

CTF შეჯიბრებები, Bug Bounty პროგრამები და ვირტუალური ლაბორატორიები საუკეთესო გზაა პრაქტიკული გამოცდილების მისაღებად.

## ქსელური კავშირები

კიბერუსაფრთხოების საზოგადოებაში აქტიური მონაწილეობა მნიშვნელოვანია კარიერული განვითარებისთვის.`,
    coverImage: "/images/blog/career-guide.jpg",
    authorName: "ალექსანდრე თავართქილაძე",
    authorImage: "/images/instructors/aleksandre-tavartkiladze.jpg",
    category: "კარიერა",
    tags: [
      "კარიერა",
      "სერტიფიკაცია",
      "CompTIA",
      "OSCP",
      "საწყისი დონე",
    ],
    readTime: 12,
    isPublished: true,
    isFeatured: true,
    views: 2890,
    publishedAt: "2025-12-15T10:00:00.000Z",
    createdAt: "2025-12-12T16:00:00.000Z",
  },
  {
    id: "blog-003",
    title: "OWASP Top 10 2025: ვებ აპლიკაციების უსაფრთხოების მთავარი რისკები",
    slug: "owasp-top-10-2025-veb-aplikaciebis-usaprtxoeba",
    excerpt:
      "OWASP-ის უახლესი სია ვებ აპლიკაციების ყველაზე კრიტიკული უსაფრთხოების რისკებისა და მათი აღმოფხვრის გზები.",
    content: `OWASP (Open Web Application Security Project) ყოველ რამდენიმე წელიწადში აქვეყნებს ვებ აპლიკაციების უსაფრთხოების ყველაზე კრიტიკული რისკების სიას.

## A01: Broken Access Control

წვდომის კონტროლის დარღვევა კვლავ რჩება ყველაზე გავრცელებულ რისკად.

## A02: Cryptographic Failures

კრიპტოგრაფიული შეცდომები მოიცავს სუსტ ალგორითმებს, არასწორ იმპლემენტაციას და გასაღებების არაუსაფრთხო მართვას.

## A03: Injection

SQL, NoSQL, OS და LDAP ინექციები კვლავ აქტუალურია.

## A04: Insecure Design

არაუსაფრთხო დიზაინი ახალი კატეგორიაა, რომელიც ხაზს უსვამს უსაფრთხოების გათვალისწინებას დაპროექტების ეტაპზე.

## პრაქტიკული რეკომენდაციები

ყოველი რისკისთვის OWASP გთავაზობთ კონკრეტულ რეკომენდაციებს, რომლებიც ამ სტატიაში დეტალურად განვიხილეთ.`,
    coverImage: "/images/blog/owasp-top-10.jpg",
    authorName: "დავით კვარაცხელია",
    authorImage: "/images/instructors/davit-kvaratskhelia.jpg",
    category: "ვებ უსაფრთხოება",
    tags: [
      "OWASP",
      "ვებ უსაფრთხოება",
      "SQL Injection",
      "XSS",
      "დეველოპერები",
    ],
    readTime: 15,
    isPublished: true,
    isFeatured: false,
    views: 980,
    publishedAt: "2025-11-20T08:00:00.000Z",
    createdAt: "2025-11-18T12:00:00.000Z",
  },
  {
    id: "blog-004",
    title: "პაროლის უსაფრთხოება: რატომ არ არის საკმარისი მხოლოდ რთული პაროლი",
    slug: "parolis-usaprtxoeba-ratom-ar-aris-sakmarixi",
    excerpt:
      "განვიხილოთ თანამედროვე მიდგომები ავთენტიფიკაციისა და პაროლის უსაფრთხოებისადმი, MFA-ს მნიშვნელობა და Passkeys ტექნოლოგია.",
    content: `პაროლის უსაფრთხოება კიბერუსაფრთხოების ერთ-ერთი ყველაზე ფუნდამენტური თემაა. მიუხედავად ამისა, 2026 წელსაც კი, პაროლებთან დაკავშირებული ინციდენტები კვლავ ხშირია.

## პაროლის სისუსტეები

კვლევების მიხედვით, ყველაზე გავრცელებული პაროლები კვლავ "123456", "password" და "qwerty" რჩება.

## მრავალფაქტორიანი ავთენტიფიკაცია (MFA)

MFA-ს გამოყენება მნიშვნელოვნად ამცირებს ანგარიშის კომპრომეტირების რისკს.

## Passkeys - პაროლის გარეშე მომავალი

FIDO2 სტანდარტზე დაფუძნებული Passkeys ტექნოლოგია გვთავაზობს პაროლების გარეშე ავთენტიფიკაციას.

## პაროლის მენეჯერები

Bitwarden, 1Password და KeePass - საუკეთესო პაროლის მენეჯერების შედარება.

## რეკომენდაციები

პრაქტიკული ნაბიჯები, რომლებიც ყველამ უნდა გადადგას ციფრული უსაფრთხოებისთვის.`,
    coverImage: "/images/blog/password-security.jpg",
    authorName: "მარიამ ხარაიშვილი",
    authorImage: "/images/instructors/mariam-kharaishvili.jpg",
    category: "კიბერუსაფრთხოება",
    tags: [
      "პაროლი",
      "MFA",
      "Passkeys",
      "ავთენტიფიკაცია",
      "FIDO2",
    ],
    readTime: 6,
    isPublished: true,
    isFeatured: false,
    views: 1560,
    publishedAt: "2025-10-25T07:30:00.000Z",
    createdAt: "2025-10-22T10:00:00.000Z",
  },
  {
    id: "blog-005",
    title: "ციფრული ფორენზიკის შესავალი: მტკიცებულებების მოპოვების ხელოვნება",
    slug: "cipruli-porenzikis-shesavali",
    excerpt:
      "რა არის ციფრული ფორენზიკა, რა ინსტრუმენტებს იყენებენ ექსპერტები და როგორ მიმდინარეობს კიბერდანაშაულის გამოძიება.",
    content: `ციფრული ფორენზიკა კიბერუსაფრთხოების ერთ-ერთი ყველაზე საინტერესო და მნიშვნელოვანი მიმართულებაა. ამ სტატიაში განვიხილავთ ციფრული ფორენზიკის საფუძვლებს.

## რა არის ციფრული ფორენზიკა?

ციფრული ფორენზიკა არის ელექტრონული მოწყობილობებიდან მტკიცებულებების მოპოვების, შენახვისა და ანალიზის პროცესი.

## ფორენზიკის ტიპები

- კომპიუტერის ფორენზიკა
- ქსელის ფორენზიკა
- მობილური მოწყობილობების ფორენზიკა
- მეხსიერების ფორენზიკა

## ინსტრუმენტები

Autopsy, FTK, EnCase, Volatility და სხვა პროფესიონალური ინსტრუმენტების მიმოხილვა.

## მტკიცებულებების ჯაჭვი (Chain of Custody)

მტკიცებულებების სამართლებრივი ძალის შენარჩუნება კრიტიკულად მნიშვნელოვანია.

## კარიერული პერსპექტივები

ციფრული ფორენზიკის ექსპერტები მოთხოვნადია როგორც კერძო, ისე სახელმწიფო სექტორში.`,
    coverImage: "/images/blog/digital-forensics.jpg",
    authorName: "ალექსანდრე თავართქილაძე",
    authorImage: "/images/instructors/aleksandre-tavartkiladze.jpg",
    category: "ფორენზიკა",
    tags: [
      "ფორენზიკა",
      "მტკიცებულება",
      "Autopsy",
      "Volatility",
      "გამოძიება",
    ],
    readTime: 10,
    isPublished: false,
    isFeatured: false,
    views: 0,
    publishedAt: null,
    createdAt: "2026-02-10T09:00:00.000Z",
  },
];

// ---------------------------------------------------------------------------
// Buyers (derived from completed orders)
// ---------------------------------------------------------------------------

export const mockBuyers: CourseBuyer[] = mockOrders
  .filter((order) => order.status === "COMPLETED")
  .map((order) => {
    const user = mockUsers.find((u) => u.id === order.userId);
    return {
      id: order.userId,
      name: user?.name ?? order.user?.name ?? "",
      email: user?.email ?? order.user?.email ?? null,
      phone: user?.phone ?? order.user?.phone ?? null,
      courseTitle: order.course?.title ?? "",
    };
  });

// ---------------------------------------------------------------------------
// Settings
// ---------------------------------------------------------------------------

export const mockSettings: Settings = {
  siteName: "",
  siteDescription: "",
  contactEmail: "",
  contactPhone: "",
  address: "",
  facebook: "",
  instagram: "",
  linkedin: "",
  youtube: "",
  metaTitle: "",
  metaDescription: "",
  analyticsId: "",
};

// ---------------------------------------------------------------------------
// Helper: getDemoStats()
// ---------------------------------------------------------------------------

export function getDemoStats() {
  const completedOrders = mockOrders.filter((o) => o.status === "COMPLETED");
  const totalRevenue = completedOrders.reduce(
    (sum, o) => sum + o.finalAmount,
    0,
  );
  const recentOrders = mockOrders
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 5);
  const pendingReviews = mockReviews.filter((r) => !r.isApproved).length;
  const totalBlogPosts = mockBlogPosts.filter((p) => p.isPublished).length;

  return {
    totalUsers: mockUsers.length,
    totalCourses: mockCourses.length,
    totalOrders: mockOrders.length,
    totalRevenue,
    recentOrders,
    pendingReviews,
    totalBlogPosts,
  };
}
