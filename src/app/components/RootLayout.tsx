import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Linkedin, Mail, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function RootLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Trang chủ" },
    { path: "/dinh-vi-ban-than", label: "Định vị bản thân" },
    { path: "/du-an-tieu-bieu", label: "Dự án tiêu biểu" },
    { path: "/phan-tich-du-an", label: "Phân tích dự án" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-900">
              NAMAS<span className="text-blue-600">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === link.path ? "text-blue-600" : "text-slate-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#contact"
                className="text-sm font-medium text-slate-600 hover:text-blue-600"
              >
                Liên hệ
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === link.path
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                >
                  Liên hệ
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter mb-4">
                NAMAS<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 max-w-sm mb-6">
                Content Creator & Data-driven Marketer. Chuyển hóa những câu chuyện thành con số, và từ con số tạo ra sự tăng trưởng.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h3>
              <ul className="space-y-2">
                <li><Link to="/dinh-vi-ban-than" className="text-slate-400 hover:text-white transition-colors">Định vị bản thân</Link></li>
                <li><Link to="/du-an-tieu-bieu" className="text-slate-400 hover:text-white transition-colors">Dự án tiêu biểu</Link></li>
                <li><Link to="/phan-tich-du-an" className="text-slate-400 hover:text-white transition-colors">Phân tích dự án (Case Studies)</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Kết Nối Với Tôi</h3>
              <p className="text-slate-400 mb-4">Sẵn sàng hợp tác cho những dự án sáng tạo và chiến lược tiếp theo.</p>
              <a 
                href="mailto:hello@namas.com" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Mail size={18} />
                Gửi Email Ngay
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Namas Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
