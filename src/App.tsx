/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown, 
  Code2, 
  Palette, 
  Globe, 
  Terminal, 
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-bg text-ink font-sans selection:bg-ink selection:text-bg">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-bg/80 backdrop-blur-md py-6 border-b border-line" : "bg-transparent py-10"}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] tracking-[0.3em] font-semibold uppercase"
            id="nav-logo"
          >
            CANH ĐÀO — 2026
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-12 text-[10px] tracking-[0.2em] uppercase font-medium"
            id="nav-links"
          >
            <a href="#about" className="hover:opacity-50 transition-opacity">Giới thiệu</a>
            <a href="#skills" className="hover:opacity-50 transition-opacity">Kỹ năng</a>
            <a href="#projects" className="hover:opacity-50 transition-opacity">Dự án</a>
            <a href="#contact" className="hover:opacity-50 transition-opacity">Liên hệ</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden p-8">
        {/* Background Gradient */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#1a1510] to-transparent opacity-30 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="mb-8"
              >
                <span className="text-[11px] uppercase tracking-[0.4em] opacity-60 font-medium block mb-6">Lập trình viên & Nhà thiết kế</span>
                <h1 className="text-7xl md:text-[120px] leading-[0.85] font-serif italic mb-10 tracking-tight" id="hero-name">
                  Thiết kế <br/>
                  <span className="not-italic">vượt thời gian.</span>
                </h1>
                
                <div className="max-w-lg">
                  <p className="text-lg md:text-xl leading-relaxed opacity-70 mb-12 font-light" id="hero-tagline">
                    Chào bạn, tôi là Cảnh. Một lập trình viên Fullstack chuyên tâm vào sự tối giản, tính công năng và những trải nghiệm kỹ thuật số tinh tế.
                  </p>
                  
                  <div className="flex flex-wrap gap-8">
                    <a href="#contact" className="border border-ink px-12 py-5 text-[10px] uppercase tracking-[0.3em] font-semibold hover:bg-ink hover:text-bg transition-colors inline-block">
                      Bắt đầu dự án
                    </a>
                    <a href="#projects" className="px-6 py-5 text-[10px] uppercase tracking-[0.3em] font-semibold hover:opacity-50 transition-opacity inline-block">
                      Xem công việc
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="hidden lg:col-span-4 relative flex justify-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="w-[340px] h-[500px] bg-surface border border-white/5 relative overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                  alt="Personality" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10">
                  <span className="text-[10px] uppercase tracking-widest block mb-2 opacity-40">Trạng thái</span>
                  <span className="text-sm font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Sẵn sàng cho dự án mới
                  </span>
                </div>
              </motion.div>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.6em] opacity-30 whitespace-nowrap">
                  FULLSTACK DEVELOPER — DESIGNER
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-ink to-transparent"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative border-t border-line">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <motion.div {...fadeInUp}>
                <h2 className="text-[11px] uppercase tracking-[0.4em] opacity-50 font-medium mb-8">Về bản thân</h2>
                <h3 className="text-4xl font-serif italic leading-tight">Giải pháp & <br/>Sáng tạo</h3>
              </motion.div>
            </div>
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-12 text-lg font-light leading-relaxed opacity-70">
                <motion.p {...fadeInUp}>
                  Tôi bắt đầu hành trình của mình với niềm đam mê giải quyết vấn đề thông qua mã nguồn. Trong suốt những năm qua, tôi đã mài dũa kỹ năng của mình trong việc tạo ra UI mượt mà và hệ thống backend mạnh mẽ.
                </motion.p>
                <motion.p {...fadeInUp} transition={{ delay: 0.2 }}>
                  Triết lý thiết kế của tôi là "Sự tối giản là đỉnh cao của sự tinh tế". Tôi tin rằng mọi dòng code và pixel đều phải có mục đích rõ ràng để mang lại giá trị thực sự.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-surface/30 relative border-t border-line">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div {...fadeInUp} className="mb-20">
            <h2 className="text-[11px] uppercase tracking-[0.4em] opacity-50 font-medium mb-6 text-center">Kỹ năng kỹ thuật</h2>
            <h3 className="text-4xl md:text-5xl font-serif italic text-center leading-tight">Công cụ tôi <br/>tâm đắc</h3>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line"
          >
            {[
              { icon: <Code2 strokeWidth={1} />, title: "React / Next.js", desc: "Trải nghiệm người dùng mượt mà." },
              { icon: <Globe strokeWidth={1} />, title: "Node.js Ecosystem", desc: "Hệ thống backend mở rộng." },
              { icon: <Palette strokeWidth={1} />, title: "Interface Design", desc: "Tối giản và hiện đại." },
              { icon: <Terminal strokeWidth={1} />, title: "Technical Strategy", desc: "Phát triển bền vững." }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="p-12 bg-bg hover:bg-surface transition-colors duration-500"
                id={`skill-card-${index}`}
              >
                <div className="mb-8 opacity-40">
                  {skill.icon}
                </div>
                <h4 className="font-serif italic text-2xl mb-4">{skill.title}</h4>
                <p className="text-sm font-light leading-relaxed opacity-50">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 border-t border-line">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div {...fadeInUp} className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.4em] opacity-50 font-medium mb-6">Tác phẩm</h2>
              <h3 className="text-4xl md:text-6xl font-serif italic leading-tight">Dự án chọn lọc</h3>
            </div>
            <div className="text-[11px] uppercase tracking-[0.2em] opacity-40 font-medium">Khám phá lưu trữ (2022 — 2026)</div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-line font-sans border border-line">
            {[
              { title: "Smart Finance App", tags: "Fullstack / Design", seed: "fin" },
              { title: "E-Commerce Experience", tags: "Backend / React", seed: "eco" }
            ].map((project, index) => (
              <motion.div 
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-bg p-8 md:p-16 hover:bg-surface transition-colors duration-700"
                id={`project-card-${index}`}
              >
                <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden mb-12 border border-white/5">
                  <img 
                    src={`https://images.unsplash.com/photo-15${index === 0 ? '51233334611-c29419576f3b' : '555261197-066144d42b43'}?auto=format&fit=crop&q=80&w=800`} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 scale-[1.01] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="px-8 py-3 bg-bg/90 backdrop-blur border border-line opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-[10px] tracking-[0.2em] font-medium uppercase">
                      Xem dự án
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-3 block">{project.tags}</span>
                    <h4 className="text-2xl md:text-3xl font-serif italic leading-none">{project.title}</h4>
                  </div>
                  <ExternalLink size={20} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-surface relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#1a1510] to-transparent opacity-20 pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10 font-sans">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-6">
              <motion.div {...fadeInUp}>
                <h2 className="text-[11px] uppercase tracking-[0.4em] opacity-50 font-medium mb-8">Liên hệ</h2>
                <h3 className="text-4xl md:text-7xl font-serif italic leading-[0.9] mb-12">Hãy cùng <br/>khởi tạo tương lai.</h3>
                
                <div className="space-y-12">
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4 font-medium">Bưu thư điện tử</span>
                    <a href="mailto:CanhDao026@gmail.com" className="text-2xl md:text-3xl font-light hover:opacity-50 transition-opacity border-b border-line pb-2 inline-block">
                      CanhDao026@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex gap-16">
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4 font-medium">Xã hội</span>
                      <div className="flex gap-8">
                        <a href="#" className="hover:opacity-50 transition-opacity uppercase text-xs tracking-widest font-medium">Behance</a>
                        <a href="#" className="hover:opacity-50 transition-opacity uppercase text-xs tracking-widest font-medium">LinkedIn</a>
                        <a href="#" className="hover:opacity-50 transition-opacity uppercase text-xs tracking-widest font-medium">Github</a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6">
              <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="bg-bg p-12 border border-white/5 relative shadow-inner"
                id="contact-form"
              >
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 font-medium group-focus-within:opacity-100 transition-opacity">Họ và tên</label>
                    <input type="text" className="w-full bg-transparent border-b border-line py-4 focus:outline-none focus:border-ink transition-colors font-light" placeholder="Nguyễn Văn A" />
                  </div>
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 font-medium group-focus-within:opacity-100 transition-opacity">Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-line py-4 focus:outline-none focus:border-ink transition-colors font-light" placeholder="email@vi-du.com" />
                  </div>
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 font-medium group-focus-within:opacity-100 transition-opacity">Yêu cầu dự án</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-line py-4 focus:outline-none focus:border-ink resize-none transition-colors font-light" placeholder="Mô tả ý tưởng của bạn..."></textarea>
                  </div>
                  <button className="border border-ink w-full py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-ink hover:text-bg transition-all transform active:scale-[0.98]">
                    Gửi yêu cầu
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-line font-sans">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-30 font-medium">Bản quyền © 2026 • Cảnh Đào</div>
          <div className="text-center md:text-right">
            <span className="block text-[48px] font-serif italic leading-none mb-2">Portfolio</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-30">Phát triển bền vững bằng mã nguồn & thiết kế.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


