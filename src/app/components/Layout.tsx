import { NavLink, Outlet } from "react-router";
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Định vị bản thân", path: "/brand" },
    { name: "Dự án tiêu biểu", path: "/projects" },
    { name: "Phân tích dự án", path: "/analytics" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <NavLink to="/" className="text-2xl font-bold tracking-tighter">
              NAMAS<span className="text-blue-600">.</span>
            </NavLink>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive ? "text-blue-600" : "text-slate-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <a
                href="#contact"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                Liên hệ
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium ${
                    isActive ? "text-blue-600" : "text-slate-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-medium text-slate-600"
            >
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-20 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                NAMAS<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-md mb-8">
                Content Creator & Data-driven Marketer. Chuyển đổi dữ liệu thành câu chuyện, biến chiến lược thành hiệu suất.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Điều hướng</h3>
              <ul className="space-y-3">
                <li><NavLink to="/" className="text-slate-400 hover:text-white transition-colors">Trang chủ</NavLink></li>
                <li><NavLink to="/brand" className="text-slate-400 hover:text-white transition-colors">Định vị bản thân</NavLink></li>
                <li><NavLink to="/projects" className="text-slate-400 hover:text-white transition-colors">Dự án tiêu biểu</NavLink></li>
                <li><NavLink to="/analytics" className="text-slate-400 hover:text-white transition-colors">Phân tích dự án</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Liên hệ công việc</h3>
              <a 
                href="mailto:hoangtumua0405@gmail.com" 
                className="group flex items-center text-slate-400 hover:text-white transition-colors"
              >
                hoangtumua0405@gmail.com
                <ArrowUpRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-slate-400 mt-3">+84 944581107</p>
              <p className="text-slate-400 mt-3">Hà Nội, Việt Nam</p>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-16 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Namas Portfolio. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with strategic mindset.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
