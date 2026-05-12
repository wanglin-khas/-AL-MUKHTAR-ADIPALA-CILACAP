/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  Globe, 
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Search
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
            AM
          </div>
          <div className="flex flex-col">
            <span className={`font-bold tracking-tight text-lg leading-tight ${isScrolled ? "text-secondary" : "text-white"}`}>
              AL MUKHTAR
            </span>
            <span className={`text-[10px] uppercase tracking-widest font-semibold opacity-70 ${isScrolled ? "text-secondary/60" : "text-white/60"}`}>
              Adipala Cilacap
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Beranda", "Tentang", "Program", "Fasilitas", "Berita", "Kontak"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium hover:text-primary transition-colors duration-200 ${isScrolled ? "text-secondary" : "text-white"}`}
            >
              {item}
            </a>
          ))}
          <button className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25">
            Pendaftaran
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? "text-secondary" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4"
        >
          {["Beranda", "Tentang", "Program", "Fasilitas", "Berita", "Kontak"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-base font-medium py-2 border-b border-gray-100 text-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-primary text-white py-3 rounded-xl font-bold mt-2">
            Pendaftaran Online
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="beranda" className="relative h-screen overflow-hidden flex items-center">
      {/* Background with parallax effect */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1590076215667-873d6f00114c?auto=format&fit=crop&q=80&w=2000" 
          alt="Pesantren Atmosphere" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Floating Shapes for Tech Feel */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute bg-primary/20 backdrop-blur-2xl rounded-full"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${15 * i}%`,
              top: `${10 * i + 20}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-white w-full pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-primary/30 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
              Membangun Generasi Qur'ani & Terampil
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Pondok Pesantren <br />
            <span className="text-primary italic">Al Mukhtar</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Pusat pendidikan Islam modern yang memadukan kedalaman spiritual, 
            keluhuran akhlak, dan kecanggihan teknologi untuk menjawab tantangan zaman.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl shadow-primary/25 flex items-center justify-center gap-2">
              Mulai Belajar <ChevronRight size={20} />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
              Lihat Program
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 max-w-2xl">
            {[
              { label: "Santri", value: "500+" },
              { label: "Pengajar", value: "40+" },
              { label: "Alumni", value: "2000+" },
              { label: "Prestasi", value: "50+" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Pendidikan Berbasis IT",
      desc: "Kurikulum yang terintegrasi dengan teknologi modern untuk membekali santri di era digital.",
      icon: <Globe className="text-primary" size={24} />,
    },
    {
      title: "Tahfidz Al-Qur'an",
      desc: "Metode menghafal yang efektif dan berkelanjutan dengan bimbingan ustadz berpengalaman.",
      icon: <BookOpen className="text-primary" size={24} />,
    },
    {
      title: "Pengembangan Karakter",
      desc: "Menekankan pada adab, kedisiplinan, dan kemandirian dalam kehidupan sehari-hari.",
      icon: <ShieldCheck className="text-primary" size={24} />,
    },
    {
      title: "Ekstrakurikuler",
      desc: "Berbagai bidang kreativitas mulai dari bahasa, seni, hingga olahraga prestasi.",
      icon: <Users className="text-primary" size={24} />,
    }
  ];

  return (
    <section id="tentang" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-primary-light">
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Education" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Abstract Tech Decorations */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl shadow-inner" />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 glass-card p-6 rounded-2xl z-20 max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <GraduationCap className="text-primary" />
                </div>
                <div className="font-bold text-secondary">Kurikulum Merdeka</div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Menyesuaikan potensi setiap santri untuk berkembang secara optimal di era teknologi.
              </p>
            </motion.div>
          </motion.div>

          <div className="flex flex-col">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Visi & Keunggulan</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8 text-secondary">
              Mewujudkan Santri Cerdas, <br />
              <span className="text-primary">Inovatif & Berakhlakul Karimah</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Al Mukhtar bukan sekadar pesantren tradisional. Kami berdedikasi membangun ekosistem 
              pembelajaran yang nyaman, dinamis, dan progresif bagi para calon pemimpin umat 
              di masa depan.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="bg-primary-light p-4 rounded-xl inline-flex mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-secondary">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const sections = [
    {
      title: "Tahfidz Al-Qur'an",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200",
      tag: "Reguler & Intensif",
      desc: "Program unggulan cetak hafidz dengan sanad yang jelas dan metode modern."
    },
    {
      title: "Madrasah Digital",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
      tag: "Digital Ecosystem",
      desc: "Pembelajaran kurikulum formal dengan integrasi penuh platform digital."
    },
    {
      title: "Vokasi & IT Skill",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
      tag: "Skills for Future",
      desc: "Pelatihan coding, multimedia, hingga robotik untuk kemandirian santri."
    }
  ];

  return (
    <section id="program" className="py-24 bg-primary-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Unit Pendidikan</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary">Pilihan Program Terbaik</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-widest shadow-lg">
                  {section.tag}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-secondary">{section.title}</h3>
                <p className="text-gray-500 mb-6 line-clamp-2">{section.desc}</p>
                <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                  Pelajari Lebih Lanjut <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="kontak" className="bg-secondary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                AM
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-lg leading-tight uppercase">
                  Al Mukhtar
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold opacity-60">
                  Adipala Cilacap
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Mendidik dengan hati, membangun prestasi dengan teknologi. Menjadi pionir pendidikan Islam modern di Cilacap.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest">Tautan Cepat</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              {["Sejarah", "Visi & Misi", "Struktur Organisasi", "Informasi Pendaftaran", "Kalender Akademik"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors inline-flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest">Hubungi Kami</h4>
            <ul className="flex flex-col gap-6 text-gray-400">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>Jl. Pendidikan No. 12, Adipala, Kabupaten Cilacap, Jawa Tengah 53271</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary" size={20} />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary" size={20} />
                <span>info@almukhtar-adipala.sch.id</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest">Warta Pesantren</h4>
            <p className="text-gray-400 mb-6 text-sm">Berlangganan untuk mendapatkan info terbaru seputar kegiatan santri.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email kamu" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm flex-1 focus:outline-none focus:border-primary transition-colors text-white"
              />
              <button className="bg-primary p-3 rounded-xl hover:bg-primary-dark transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
          <div>
            © 2026 Pondok Pesantren Al Mukhtar Adipala. Build excellence with wisdom.
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Quote Section with unique tech overlay */}
        <section className="py-20 relative overflow-hidden bg-secondary text-white">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white/20 h-full" />
              ))}
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="mx-auto text-primary mb-8 animate-bounce" size={48} />
              <blockquote className="font-display text-2xl md:text-3xl italic leading-relaxed mb-8">
                "Pendidikan adalah wasilah untuk mengenal Sang Khaliq dan bekal untuk menebar manfaat di bumi. Di Al Mukhtar, kami memadukan tradisi kitab kuning dengan kecakapan era digital."
              </blockquote>
              <div className="flex flex-col items-center">
                <span className="font-bold text-xl uppercase tracking-widest text-primary">K.H. Ahmad Mukhtar</span>
                <span className="text-sm text-gray-500 mt-1 uppercase font-semibold">Pengasuh Pondok Pesantren</span>
              </div>
            </motion.div>
          </div>
        </section>

        <Programs />
        
        {/* Gallery / Technology Showcase */}
        <section id="fasilitas" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Lensa Pesantren</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary">Eksplorasi Al Mukhtar</h2>
              </div>
              <button className="border-b-2 border-primary pb-1 font-bold text-primary hover:text-primary-dark transition-colors">
                Lihat Seluruh Fasilitas
              </button>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 h-[600px]">
              <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl">
                <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h4 className="font-bold text-xl mb-1">Laboratorium Computer 5.0</h4>
                    <p className="text-sm text-gray-300">Hub teknologi untuk coding, desain, dan riset digital.</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold uppercase tracking-widest text-xs">
                  Masjid Jamie
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold uppercase tracking-widest text-xs">
                  Perpustakaan Digital
                </div>
              </div>
              <div className="md:col-span-2 group relative overflow-hidden rounded-3xl">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold uppercase tracking-widest text-xs">
                  Asrama Eksklusif
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary-light">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-primary rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
              {/* Geometric pattern background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full grid grid-cols-8 grid-rows-8">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="border border-white/20" />
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Mulai Langkah Berkahmu <br /> Bersama Kami
                </h2>
                <p className="text-xl text-primary-light/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Penerimaan Santri Baru (PSB) Tahun 2026 telah dibuka. 
                  Daftarkan diri Anda melalui portal digital kami sekarang.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95">
                    Daftar Sekarang
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-none underline underline-offset-8 decoration-primary-light/50">
                    Unduh Brosur (PDF)
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

