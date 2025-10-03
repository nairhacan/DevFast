# Burger Bangor - Website HTML/CSS/JavaScript

Website untuk Burger Bangor yang dibangun menggunakan HTML, CSS, dan JavaScript murni (tanpa framework).

## 📁 Struktur File

```
html-version/
├── index.html          # Halaman Beranda
├── menu.html           # Halaman Menu
├── lokasi.html         # Halaman Lokasi Outlet
├── tentang.html        # Halaman Tentang Kami
├── styles.css          # File CSS utama
├── script.js           # File JavaScript utama
├── data.js             # Data dummy (menu & outlet)
└── README.md           # Dokumentasi
```

## 🚀 Cara Menggunakan

### Metode 1: Buka Langsung di Browser
1. Buka folder `html-version`
2. Double-click file `index.html`
3. Website akan terbuka di browser default Anda

### Metode 2: Menggunakan Live Server (Rekomendasi)
1. Install ekstensi "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

### Metode 3: Menggunakan Python HTTP Server
```bash
cd html-version
python -m http.server 8080
```
Buka browser dan akses: `http://localhost:8080`

### Metode 4: Menggunakan Node.js HTTP Server
```bash
cd html-version
npx http-server -p 8080
```
Buka browser dan akses: `http://localhost:8080`

## ✨ Fitur

### 1. Halaman Beranda (index.html)
- Hero section dengan tagline
- Menu terpopuler (3 produk)
- Filosofi perusahaan (3 nilai utama)
- Call-to-action section

### 2. Halaman Menu (menu.html)
- Pencarian real-time berdasarkan nama/deskripsi
- Filter kategori (Semua, Signature, Premium, Sides, Minuman)
- Tampilan grid produk dengan gambar
- Tombol "Tambah ke Keranjang"
- Notifikasi toast saat item ditambahkan

### 3. Halaman Lokasi (lokasi.html)
- Pencarian outlet berdasarkan kota/alamat
- Placeholder peta (siap untuk integrasi Google Maps)
- Daftar outlet dengan detail lengkap
- Tombol link ke Google Maps

### 4. Halaman Tentang (tentang.html)
- Sejarah perusahaan
- Nilai-nilai inti (3 prinsip)
- Pesan dari pendiri
- Statistik pencapaian

### 5. Fitur Global
- **Keranjang Belanja**: 
  - Slide-in modal dari kanan
  - Tambah/kurang quantity
  - Hapus item
  - Hitung total otomatis
  - Simpan ke localStorage
- **Header Sticky**: Navigasi tetap terlihat saat scroll
- **Footer**: Informasi kontak & social media
- **Responsive Design**: Mobile-friendly
- **Toast Notification**: Feedback saat menambah item

## 📊 Data Dummy

### Menu Items (10 produk)
- **Burger Signature**: BB Classic, BB Juragan, BB Sultan, BB Pedas Nusantara
- **Burger Premium**: BB Wagyu, BB Angus Deluxe
- **Sides**: Kentang Goreng, Onion Rings
- **Minuman**: Es Teh Manis, Jus Jeruk

### Outlet Locations (8 outlet)
- Jakarta Barat, Jakarta Selatan, Bekasi, Bandung
- Surabaya, Yogyakarta, Depok, Tangerang

Data dapat dimodifikasi di file `data.js`

## 🎨 Desain

- **Warna Utama**: Orange (#ea580c) & Red (#dc2626)
- **Font**: System font stack (San Francisco, Segoe UI, Roboto)
- **Icons**: Inline SVG (Lucide icons style)
- **Spacing**: Konsisten dengan padding & margin
- **Shadows**: Soft shadows untuk depth
- **Transitions**: Smooth animations (0.3s ease)

## 🔧 Customisasi

### Mengubah Warna
Edit file `styles.css`, cari dan ganti:
- `#ea580c` (orange utama)
- `#dc2626` (red utama)
- `#f59e0b` (amber)

### Menambah Menu
Edit file `data.js`, tambahkan object baru di array `menuItems`:
```javascript
{
  id: 11,
  name: "Nama Produk",
  category: "signature", // atau "premium", "sides", "drinks"
  description: "Deskripsi produk",
  price: 30000,
  image: "https://url-gambar.jpg",
  popular: false
}
```

### Menambah Outlet
Edit file `data.js`, tambahkan object baru di array `outlets`:
```javascript
{
  id: 9,
  name: "Nama Outlet",
  city: "Nama Kota",
  address: "Alamat lengkap",
  phone: "021-1234567",
  mapsUrl: "https://maps.google.com/?q=..."
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 💾 LocalStorage

Website menggunakan localStorage untuk menyimpan:
- `burgerBangorCart`: Data keranjang belanja

Data akan tetap ada meskipun browser ditutup.

## 🔜 Pengembangan Selanjutnya

Untuk mengubah ini menjadi aplikasi full-stack:
1. Buat REST API backend (Node.js/Python/PHP)
2. Ganti data dummy dengan API calls
3. Tambahkan autentikasi user
4. Integrasikan payment gateway
5. Tambahkan Google Maps API untuk peta interaktif
6. Implementasi order tracking

## 📄 Lisensi

Copyright © 2025 Kina`SaQina. All rights reserved.

## 🤝 Kontribusi

Untuk pertanyaan atau saran, silakan hubungi:
- Email: nlfts.etc@gmail.com
- Phone: +62 882-0012-89177

---

