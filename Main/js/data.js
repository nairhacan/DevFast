// Dummy Data untuk DevHub Website

const mockTemplates = [
  {
    id: 1,
    name: "Modern Dashboard",
    description: "A sleek and responsive admin dashboard with charts, tables, and analytics. Perfect for SaaS applications and data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=entropy",
    category: "Admin Dashboard",
    difficulty: "Intermediate",
    downloads: 12500,
    rating: 4.8,
    tags: ["React", "Chart.js", "Tailwind"],
    author: "Sarah Chen",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    updatedAt: "2024-01-15"
  },
  {
    id: 2,
    name: "E-commerce Store",
    description: "Complete online store template with product catalog, shopping cart, and checkout process. Mobile-first design approach.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=entropy",
    category: "E-commerce",
    difficulty: "Advanced",
    downloads: 8900,
    rating: 4.9,
    tags: ["Next.js", "Stripe", "MongoDB"],
    author: "Mike Johnson",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    updatedAt: "2024-01-12"
  },
  {
    id: 3,
    name: "Portfolio Website",
    description: "Clean and minimal portfolio template for developers and designers. Showcases projects with smooth animations.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=entropy",
    category: "Portfolio",
    difficulty: "Beginner",
    downloads: 15200,
    rating: 4.7,
    tags: ["HTML", "CSS", "JavaScript"],
    author: "Emma Davis",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    updatedAt: "2024-01-10"
  },
  {
    id: 4,
    name: "Blog Platform",
    description: "Feature-rich blogging platform with markdown support, comments system, and SEO optimization built-in.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop&crop=entropy",
    category: "Blog",
    difficulty: "Intermediate",
    downloads: 6700,
    rating: 4.6,
    tags: ["Gatsby", "GraphQL", "Netlify CMS"],
    author: "Alex Rodriguez",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    updatedAt: "2024-01-08"
  },
  {
    id: 5,
    name: "Landing Page",
    description: "High-converting landing page template with multiple sections, testimonials, and call-to-action buttons.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=entropy",
    category: "Landing Page",
    difficulty: "Beginner",
    downloads: 20100,
    rating: 4.8,
    tags: ["Bootstrap", "jQuery", "SCSS"],
    author: "Lisa Wang",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
    updatedAt: "2024-01-14"
  },
  {
    id: 6,
    name: "Task Management App",
    description: "Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=entropy",
    category: "Productivity",
    difficulty: "Advanced",
    downloads: 4300,
    rating: 4.9,
    tags: ["Vue.js", "Vuex", "Firebase"],
    author: "David Kim",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    updatedAt: "2024-01-11"
  },
  {
    id: 7,
    name: "Social Media App",
    description: "Modern social media application with real-time messaging, photo sharing, and social features.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop&crop=entropy",
    category: "Social Media",
    difficulty: "Advanced",
    downloads: 7800,
    rating: 4.7,
    tags: ["React Native", "Socket.io", "Node.js"],
    author: "Jennifer Lopez",
    authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face",
    updatedAt: "2024-01-09"
  },
  {
    id: 8,
    name: "Finance Tracker",
    description: "Personal finance management app with expense tracking, budgeting tools, and financial insights.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=entropy",
    category: "Finance",
    difficulty: "Intermediate",
    downloads: 5600,
    rating: 4.5,
    tags: ["Flutter", "Dart", "SQLite"],
    author: "Roberto Silva",
    authorAvatar: "https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=40&h=40&fit=crop&crop=face",
    updatedAt: "2024-01-07"
  }
];

const mockProjects = [
  {
    id: 1,
    title: "Recipe Sharing App",
    description: "A community-driven platform where users can share, rate, and discover new recipes from around the world.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&crop=entropy",
    author: "Maria Garcia",
    authorAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face",
    likes: 234,
    views: 1200,
    tech: ["React", "Node.js", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Weather Forecast Dashboard",
    description: "Real-time weather tracking with beautiful visualizations and 7-day forecasts for multiple cities.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop&crop=entropy",
    author: "James Wilson",
    authorAvatar: "https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=40&h=40&fit=crop&crop=face",
    likes: 189,
    views: 890,
    tech: ["Vue.js", "Chart.js", "OpenWeather API"]
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "Personal finance management tool with budget tracking, expense categorization, and financial insights.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=entropy",
    author: "Anna Lee",
    authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face",
    likes: 156,
    views: 720,
    tech: ["React Native", "Express", "MongoDB"]
  },
  {
    id: 4,
    title: "Learning Management System",
    description: "Complete LMS with course creation, student progress tracking, and interactive learning modules.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=entropy",
    author: "Michael Brown",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    likes: 298,
    views: 1450,
    tech: ["Django", "Python", "React"]
  }
];

const mockCommunityStats = {
  totalMembers: 52847,
  activeProjects: 1243,
  templatesShared: 847,
  codeReviews: 2156,
  mentoringSessions: 892
};

const mockLearningPaths = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Master modern web development with HTML, CSS, JavaScript, and React",
    modules: 12,
    duration: "8-12 weeks",
    difficulty: "Beginner",
    enrolled: 1520,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop&crop=entropy"
  },
  {
    id: 2,
    title: "Full Stack Development",
    description: "Learn both frontend and backend development to build complete applications",
    modules: 18,
    duration: "12-16 weeks",
    difficulty: "Intermediate",
    enrolled: 892,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop&crop=entropy"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile apps with React Native and Flutter",
    modules: 14,
    duration: "10-14 weeks",
    difficulty: "Intermediate",
    enrolled: 743,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop&crop=entropy"
  }
];

// Categories untuk filter
const categories = ['All', 'Admin Dashboard', 'E-commerce', 'Portfolio', 'Blog', 'Landing Page', 'Productivity', 'Social Media', 'Finance'];

// Community stats data
const communityStats = [
  {
    icon: 'users',
    label: 'Community Members',
    value: mockCommunityStats.totalMembers.toLocaleString(),
    description: 'Developers worldwide',
    color: 'blue'
  },
  {
    icon: 'folder-open',
    label: 'Active Projects', 
    value: mockCommunityStats.activeProjects.toLocaleString(),
    description: 'Currently in development',
    color: 'green'
  },
  {
    icon: 'file-code',
    label: 'Templates Shared',
    value: mockCommunityStats.templatesShared.toLocaleString(), 
    description: 'Ready to use',
    color: 'purple'
  },
  {
    icon: 'message-square',
    label: 'Code Reviews',
    value: mockCommunityStats.codeReviews.toLocaleString(),
    description: 'Collaborative feedback', 
    color: 'orange'
  },
  {
    icon: 'graduation-cap',
    label: 'Mentoring Sessions',
    value: mockCommunityStats.mentoringSessions.toLocaleString(),
    description: 'Learning together',
    color: 'indigo'
  }
];