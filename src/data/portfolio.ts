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
    year: "2023",
    title: "Yakın Doğu Üniversitesi",
    description: "Yazılım/Bilgisayar Mühendisliği eğitimime başladım.",
  },
  {
    year: "2024",
    title: "İlk Programlama Dili: Python",
    description: "Python ile temel programlama, algoritmalar ve veri yapıları üzerine çalışmalar.",
  },
  {
    year: "2026 - Günümüz",
    title: "Yakın Doğu Üniversitesi — 2. Sınıf",
    description: "Yazılım mühendisliği eğitimime 2. sınıfta devam ediyorum; kendimi geliştirmeye ve yeni teknolojiler öğrenmeye odaklanıyorum.",
  },
];

export const skills: Record<string, string[]> = {
  "Diller": ["Python", "C++"],
  "Framework / Kütüphaneler": ["React", "Next.js", "Node.js", "Spring Boot"],
  "Araçlar & Veritabanları": ["Git", "PostgreSQL"],
};

export const projects = [
  {
    title: "Old Home Guest House",
    status: "Geliştiriliyor",
    description:
      "Lefkoşa'daki butik otel için modern, responsive tek sayfalık web sitesi. Oda tanıtımları, galeri, imkanlar ve iletişim bölümleri. Proje hâlâ aktif olarak geliştirilmektedir.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    demo: "https://nevfeldeniz.github.io/Oldhome/",
  },
  {
    title: "Kişisel Portföy Sitesi",
    description:
      "Yazılım mühendisliği portföyüm; hakkımda, yetenekler, projeler, CV indirme ve iletişim bölümlerini içeren statik web sitesi.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    demo: "https://nevfeldeniz.github.io/",
  },
];
