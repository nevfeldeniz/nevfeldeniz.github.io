export const personalInfo = {
  name: "Nevfel Deniz Sürmeli",
  title: "Yazılım Mühendisi",
  tagline:
    "Temiz kod yazmaya, ölçeklenebilir sistemler tasarlamaya ve problemi çözmeye tutkulu bir geliştiriciyim.",
  about:
    "Yakın Doğu Üniversitesi'nde yazılım mühendisliği (İngilizce) bölümünde 2. sınıf öğrencisiyim. Backend, frontend ve full stack geliştirme alanlarına ilgi duyuyorum. Problemleri analiz ederek net, okunabilir ve sürdürülebilir çözümler üretmeyi hedefliyorum. Yapay zeka destekli geliştirme araçlarını bilinçli ve ölçülü biçimde kullanıyor; etkin prompt yazımıyla verimliliğimi artırırken ürettiğim çıktının doğruluğunu ve kalitesini her zaman kontrol ediyorum.",
  email: "nevfeldenizz@gmail.com",
  schoolEmail: "20231125@std.neu.edu.tr",
  phone: "05488793011",
  phoneTel: "+905488793011",
  github: "https://github.com/nevfeldeniz",
  linkedin: "https://www.linkedin.com/in/nevfel-deniz-s%C3%BCrmeli-9383601b9/",
  cvUrl: "/cv.html",
};

export const timeline = [
  {
    year: "2023 — 2024",
    title: "Hazırlık",
    description: "Yakın Doğu Üniversitesi Yazılım Mühendisliği (İngilizce) hazırlık sınıfı.",
  },
  {
    year: "2024 — 2025",
    title: "1. Sınıf · Python",
    description: "Python ile temel programlama, algoritmalar ve veri yapıları üzerine çalışmalar.",
  },
  {
    year: "2025 — 2026",
    title: "2. Sınıf",
    description: "Yazılım mühendisliği eğitimime 2. sınıfta devam ediyorum.",
  },
  {
    year: "2025 — 2026",
    title: "C++",
    description: "Nesne yönelimli programlama, bellek yönetimi ve veri yapıları üzerine çalışmalar.",
  },
  {
    year: "2025 — 2026",
    title: "JavaScript",
    description: "Web geliştirme temelleri ve frontend çalışmalarına giriş.",
  },
];

export const skills: Record<string, string[]> = {
  "Diller": ["Python", "C++"],
  "Framework / Kütüphaneler": ["React", "Next.js", "Node.js", "Spring Boot"],
  "Araçlar & Veritabanları": ["Git", "PostgreSQL"],
};

export type PortfolioProject = {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  demoLabel?: string;
  detail?: string;
  status?: string;
};

export const projects: PortfolioProject[] = [
  {
    title: "OldHome Reservation Management System",
    description:
      "Butik otel operasyonları için Windows masaüstü uygulaması (Electron/EXE) ve tarayıcı tabanlı yönetim paneli; ikisi de merkezi NestJS API ve PostgreSQL üzerinden çalışır. Rezervasyon, oda yönetimi, ödeme takibi, finansal raporlar ve rol tabanlı yetkilendirme.",
    tags: ["Electron", "NestJS", "PostgreSQL", "React"],
    demo: "https://oldhmrez.com/",
    demoLabel: "Web paneli",
    detail: "/projects/oldhome-reservation.html",
  },
  {
    title: "Old Home Guest House",
    status: "Geliştiriliyor",
    description:
      "Lefkoşa'daki butik otel için modern, responsive tek sayfalık web sitesi. Oda tanıtımları, galeri, imkanlar ve iletişim bölümleri. Proje hâlâ aktif olarak geliştirilmektedir.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    demo: "https://oldhomecyprus.com/",
  },
  {
    title: "Kişisel Portföy Sitesi",
    description:
      "Yazılım mühendisliği portföyüm; hakkımda, yetenekler, projeler, CV indirme ve iletişim bölümlerini içeren statik web sitesi.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    demo: "https://nevfeldeniz.github.io/",
  },
];
