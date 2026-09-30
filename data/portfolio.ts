export interface Project {
  id: number;
  title: string;
  category: "Flutter" | "Firebase" | "API" | "UI/UX";
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured?: boolean;
  features: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; featured?: boolean }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Ahmed Asfour",
    role: "Flutter Developer",
    location: "Alexandria, Egypt",
    email: "a7med3sfour099@gmail.com",
    whatsapp: "https://wa.me/201552802290",
    bio: "I'm Ahmed Asfour, a Flutter Developer focused on building fast, scalable and beautiful mobile applications with exceptional user experiences.",
    about: [
      "I'm Ahmed Asfour, a Flutter Developer passionate about turning ideas into polished mobile experiences.",
      "I enjoy creating applications that are fast, scalable, maintainable and pleasant to use.",
      "My focus is not only writing code, but also creating products that feel smooth and intuitive for users.",
    ],
    stats: [
      { label: "Years Experience", value: 1, suffix: "+" },
      { label: "Projects Completed", value: 10, suffix: "+" },
      { label: "Technologies Mastered", value: 15, suffix: "+" },
      { label: "Happy Clients", value: 10, suffix: "+" },
    ],
    social: {
      github: "https://github.com/a7med3sfour099",
      linkedin: "linkedin.com/in/ahmed-asfour-559677358",
      email: "mailto:a7med3sfour099@gmail.com",
    },
  },

  skills: [
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", featured: true },
        { name: "Dart", featured: true },
        { name: "Flutter Bloc" },
        { name: "Provider" },
        { name: "Riverpod" },
        { name: "GetX" },
      ],
    },
    {
      title: "Backend & Services",
      skills: [
        { name: "Firebase" },
        { name: "REST API" },
        { name: "Supabase" },
        { name: "Authentication" },
        { name: "Firestore" },
        { name: "Push Notifications" },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        { name: "Git & GitHub" },
        { name: "Android Studio" },
        { name: "VS Code" },
        { name: "Postman" },
        { name: "Figma" },
      ],
    },
    {
      title: "Architecture & Best Practices",
      skills: [
        { name: "Clean Architecture" },
        { name: "MVVM" },
        { name: "State Management" },
        { name: "Responsive UI" },
        { name: "API Integration" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      role: "Flutter Developer Trainee",
      period: "2024 - Present",
      location: "Egypt (Remote / Hybrid)",
      description:
        "Participating in an intensive scholarship program provided by the Ministry of Communications and Information Technology (MCIT) focusing on cross-platform mobile app development.",
      highlights: [
        "Building responsive and high-performance mobile applications using Flutter and Dart.",
        "Collaborating on real-world practical projects following Agile software development methodologies.",
        "Strengthening technical skills in state management (Bloc/Provider), REST API integration, and clean architecture.",
      ],
    },
  ] as Experience[],

  services: [
    {
      title: "Flutter Applications",
      description:
        "Custom cross-platform Android and iOS applications built with clean code and native performance.",
      iconName: "Smartphone",
    },
    {
      title: "UI Implementation",
      description:
        "Pixel-perfect Flutter UI development directly translated from Figma designs with fluid animations.",
      iconName: "Layout",
    },
    {
      title: "API Integration",
      description:
        "Seamless REST API integration, state management setup, JSON parsing, and backend synchronization.",
      iconName: "Server",
    },
    {
      title: "Firebase Solutions",
      description:
        "End-to-end Firebase setup including Authentication, Cloud Firestore, Cloud Functions, and Push Notifications.",
      iconName: "Zap",
    },
  ] as Service[],
};
