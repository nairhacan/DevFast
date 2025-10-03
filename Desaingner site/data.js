// Data dummy untuk website Creative Studio
const portfolioProjects = [
    {
        id: 1,
        title: "TechStartup Branding",
        category: "Brand Identity",
        description: "Complete brand identity untuk startup teknologi dengan logo modern dan guideline lengkap.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        bgColor: "bg-light-pink",
        textColor: "text-black",
        tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
        client: "TechStartup Inc.",
        year: "2024"
    },
    {
        id: 2,
        title: "E-Commerce Website",
        category: "Web Design",
        description: "Website e-commerce modern dengan UX yang optimal dan konversi tinggi.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        bgColor: "bg-mid-blue",
        textColor: "text-white",
        tags: ["UI/UX Design", "Frontend Development", "Responsive"],
        client: "Fashion Store",
        year: "2024"
    },
    {
        id: 3,
        title: "Restaurant App UI",
        category: "UI/UX Design",
        description: "Aplikasi mobile untuk restaurant dengan interface yang user-friendly dan modern.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
        bgColor: "bg-mid-purple",
        textColor: "text-white",
        tags: ["Mobile App", "UI Design", "Prototyping"],
        client: "Resto Chain",
        year: "2023"
    },
    {
        id: 4,
        title: "Marketing Campaign",
        category: "Marketing Materials",
        description: "Campaign digital dan print untuk product launch dengan reach maksimal.",
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=600&fit=crop",
        bgColor: "bg-light-yellow",
        textColor: "text-black",
        tags: ["Campaign Design", "Digital Marketing", "Print Ads"],
        client: "Consumer Brand",
        year: "2024"
    },
    {
        id: 5,
        title: "Product Packaging",
        category: "Print Design",
        description: "Desain packaging produk organik yang eco-friendly dan eye-catching.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        bgColor: "bg-mid-green",
        textColor: "text-black",
        tags: ["Packaging Design", "Sustainable Design", "Product Branding"],
        client: "Organic Foods",
        year: "2023"
    },
    {
        id: 6,
        title: "Corporate Identity",
        category: "Brand Identity",
        description: "Rebranding perusahaan konsultan dengan identitas yang profesional dan modern.",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop",
        bgColor: "bg-mid-orange",
        textColor: "text-white",
        tags: ["Rebranding", "Corporate Design", "Stationery"],
        client: "Consulting Firm",
        year: "2024"
    }
];

const blogPosts = [
    {
        id: 1,
        title: "Tren Desain Logo 2024: Minimalis dan Berkelanjutan",
        excerpt: "Eksplorasi tren desain logo terkini yang fokus pada kesederhanaan dan nilai sustainability.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
        author: "Creative Team",
        date: "15 Maret 2024",
        readTime: "5 min baca",
        category: "Design Trends"
    },
    {
        id: 2,
        title: "Mengapa UX Design Penting untuk Bisnis Online",
        excerpt: "Bagaimana UX design yang baik dapat meningkatkan konversi dan kepuasan pelanggan.",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop",
        author: "UX Specialist",
        date: "10 Maret 2024",
        readTime: "7 min baca",
        category: "UX Design"
    },
    {
        id: 3,
        title: "Panduan Memilih Warna untuk Brand Identity",
        excerpt: "Tips praktis memilih palet warna yang tepat untuk mencerminkan kepribadian brand Anda.",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=400&fit=crop",
        author: "Brand Designer",
        date: "5 Maret 2024",
        readTime: "6 min baca",
        category: "Branding"
    }
];


const testimonials = [
    {
        id: 1,
        name: "Ghaizan",
        position: "Creative Director",
        company: "NLFTs Studio",
        content: "Kami berhasil menciptakan identitas visual yang strong untuk klien. Hasilnya melebihi ekspektasi!",
        avatar: "../global/gijan.jpeg",
        rating: 5,
        project: "Brand Identity"
    },
    {
        id: 2,
        name: "rehan",
        position: "UI/UX Designer",
        company: "NLFTs Studio",
        content: "Desain antarmuka yang dibuat sangat intuitif dan disukai banyak pengguna.",
        avatar: "../global/reihan.jpeg",
        rating: 5,
        project: "UI/UX Design"
    },
    {
        id: 3,
        name: "Radietya",
        position: "Marketing Strategist",
        company: "NLFTs Studio",
        content: "Campaign digital yang diluncurkan berhasil meningkatkan awareness dan engagement secara signifikan.",
        avatar: "../global/radit.jpg",
        rating: 5,
        project: "Digital Campaign"
    }
];
const teamMembers = [
    {
        id: 1,
        name: "Kina",
        position: "Creative Director",
        bio: "Berfokus pada strategi kreatif dan desain brand. Passionate menciptakan identitas visual yang memorable.",
        avatar: "../global/Kina.png",
        skills: ["Brand Strategy", "Creative Direction", "Leadership"]
    },
    {
        id: 2,
        name: "Nariha",
        position: "UI/UX Designer",
        bio: "Expert di user experience design dengan fokus pada desain yang elegan dan user-friendly.",
        avatar: "../global/nairha2.jpg",
        skills: ["UI/UX Design", "User Research", "Prototyping"]
    },
    {
        id: 3,
        name: "Aiham",
        position: "Marketing Strategist",
        bio: "Berpengalaman dalam strategi pemasaran digital dan campaign kreatif.",
        avatar: "../global/aiham.jpeg",
        skills: ["Digital Marketing", "Campaign Strategy", "Brand Growth"]
    }
];

const services = [
    {
        title: "Brand Identity",
        description: "Logo design, visual identity, brand guidelines, dan strategi branding yang kuat untuk membangun citra bisnis Anda.",
        features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
        color: "light-pink",
        textColor: "black"
    },
    {
        title: "Web Design & Development",
        description: "Website responsif, modern, dan user-friendly yang mengkonversi pengunjung menjadi pelanggan.",
        features: ["Responsive Design", "UI/UX Design", "Frontend Development", "CMS Integration"],
        color: "mid-blue",
        textColor: "white"
    },
    {
        title: "UI/UX Design",
        description: "Desain interface yang intuitif dan pengalaman pengguna yang optimal untuk aplikasi dan website.",
        features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
        color: "mid-purple",
        textColor: "white"
    },
    {
        title: "Graphic Design",
        description: "Desain grafis untuk berbagai kebutuhan bisnis, dari poster hingga packaging produk.",
        features: ["Poster Design", "Flyer Design", "Social Media Graphics", "Illustration"],
        color: "light-yellow",
        textColor: "black"
    },
    {
        title: "Marketing Materials",
        description: "Materi marketing yang menarik dan efektif untuk campaign digital dan offline Anda.",
        features: ["Campaign Design", "Banner Ads", "Email Templates", "Landing Pages"],
        color: "mid-green",
        textColor: "black"
    },
    {
        title: "Print Design",
        description: "Desain untuk media cetak berkualitas tinggi, dari business card hingga packaging produk.",
        features: ["Business Cards", "Brochures", "Packaging", "Merchandise"],
        color: "mid-orange",
        textColor: "white"
    }
];

const stats = [
    { number: "100+", label: "Proyek Selesai", description: "Project completed successfully" },
    { number: "50+", label: "Klien Puas", description: "Happy clients worldwide" },
    { number: "5", label: "Tahun Pengalaman", description: "Years in creative industry" },
    { number: "98%", label: "Client Satisfaction", description: "Customer satisfaction rate" }
];