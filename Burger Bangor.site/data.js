// Data Dummy untuk Burger Bangor

const menuItems = [
  {
    id: 1,
    name: "BB Classic",
    category: "signature",
    description: "Burger klasik dengan patty segar, keju lumer, dan saus spesial",
    price: 25000,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
    popular: true
  },
  {
    id: 2,
    name: "BB Juragan",
    category: "signature",
    description: "Double patty dengan keju ganda dan bacon crispy",
    price: 35000,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80",
    popular: true
  },
  {
    id: 3,
    name: "BB Sultan",
    category: "signature",
    description: "Triple patty dengan keju premium dan telur setengah matang",
    price: 45000,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80",
    popular: false
  },
  {
    id: 4,
    name: "BB Pedas Nusantara",
    category: "signature",
    description: "Burger dengan sambal nusantara dan keju mozarella",
    price: 30000,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&q=80",
    popular: false
  },
  {
    id: 5,
    name: "BB Wagyu",
    category: "premium",
    description: "Premium wagyu beef dengan truffle mayo dan arugula",
    price: 65000,
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&q=80",
    popular: true
  },
  {
    id: 6,
    name: "BB Angus Deluxe",
    category: "premium",
    description: "Angus beef dengan karamelized onion dan aged cheddar",
    price: 55000,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80",
    popular: false
  },
  {
    id: 7,
    name: "Kentang Goreng",
    category: "sides",
    description: "Kentang goreng renyah dengan saus pilihan",
    price: 15000,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80",
    popular: false
  },
  {
    id: 8,
    name: "Onion Rings",
    category: "sides",
    description: "Cincin bawang renyah dengan saus BBQ",
    price: 18000,
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&q=80",
    popular: false
  },
  {
    id: 9,
    name: "Es Teh Manis",
    category: "drinks",
    description: "Teh manis dingin menyegarkan",
    price: 8000,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80",
    popular: false
  },
  {
    id: 10,
    name: "Jus Jeruk",
    category: "drinks",
    description: "Jus jeruk segar tanpa pengawet",
    price: 12000,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80",
    popular: false
  }
];

const outlets = [
  {
    id: 1,
    name: "BB Kebon Jeruk",
    city: "Jakarta Barat",
    address: "Jl. Arjuna Utara No. 45, Kebon Jeruk, Jakarta Barat 11510",
    phone: "021-5366789",
    mapsUrl: "https://maps.google.com/?q=BB+Kebon+Jeruk+Jakarta"
  },
  {
    id: 2,
    name: "BB Senayan City",
    city: "Jakarta Selatan",
    address: "Senayan City Mall Lt. 3, Jl. Asia Afrika, Jakarta Selatan 10270",
    phone: "021-7278900",
    mapsUrl: "https://maps.google.com/?q=BB+Senayan+City+Jakarta"
  },
  {
    id: 3,
    name: "BB Bekasi Timur",
    city: "Bekasi",
    address: "Jl. Chairil Anwar No. 23, Bekasi Timur 17113",
    phone: "021-8845123",
    mapsUrl: "https://maps.google.com/?q=BB+Bekasi+Timur"
  },
  {
    id: 4,
    name: "BB Bandung Dago",
    city: "Bandung",
    address: "Jl. Ir. H. Djuanda No. 67, Dago, Bandung 40132",
    phone: "022-2503456",
    mapsUrl: "https://maps.google.com/?q=BB+Bandung+Dago"
  },
  {
    id: 5,
    name: "BB Surabaya Tunjungan",
    city: "Surabaya",
    address: "Tunjungan Plaza 4 Lt. 2, Jl. Tunjungan, Surabaya 60275",
    phone: "031-5476890",
    mapsUrl: "https://maps.google.com/?q=BB+Surabaya+Tunjungan"
  },
  {
    id: 6,
    name: "BB Yogyakarta Malioboro",
    city: "Yogyakarta",
    address: "Jl. Malioboro No. 112, Yogyakarta 55213",
    phone: "0274-567234",
    mapsUrl: "https://maps.google.com/?q=BB+Yogyakarta+Malioboro"
  },
  {
    id: 7,
    name: "BB Depok Margonda",
    city: "Depok",
    address: "Jl. Margonda Raya No. 88, Depok 16424",
    phone: "021-7788456",
    mapsUrl: "https://maps.google.com/?q=BB+Depok+Margonda"
  },
  {
    id: 8,
    name: "BB Tangerang BSD",
    city: "Tangerang",
    address: "BSD City, Jl. Pahlawan Seribu, Tangerang 15322",
    phone: "021-5378900",
    mapsUrl: "https://maps.google.com/?q=BB+Tangerang+BSD"
  }
];