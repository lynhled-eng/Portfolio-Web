import { motion } from "motion/react";
import { CheckCircle2, ChevronRight, LayoutDashboard, PenTool, PieChart, Target, Zap } from "lucide-react";
import { useState } from "react";

export function PersonalBrand() {
  const [activeTab, setActiveTab] = useState("chuyen-mon");

  const skills = {
    "chuyen-mon": [
      { name: "Content Strategy", level: 90 },
      { name: "Copywriting", level: 85 },
      { name: "Data Analysis", level: 75 },
      { name: "Brand Management", level: 80 },
      { name: "SEO & Growth", level: 70 }
    ],
    "cong-cu": [
      { name: "Google Analytics 4", level: 80 },
      { name: "Meta Ads Manager", level: 75 },
      { name: "Excel / PowerBI", level: 85 },
      { name: "Notion", level: 95 }
    ],
    "ngoai-ngu": [
      { name: "Tiếng Anh (IELTS 6.0)", level: 70 },
      { name: "Tiếng Trung (HSK 3)", level: 40 },
    ]
  };

  const milestones = [
    {
      year: "5/2025 - 7/2025",
      title: "Đặt nguyện vọng ngành Kế toán",
      desc: "Nguyện vọng một ngành nghề rèn luyện tư duy logic, khả năng làm việc với con số và sự tỉ mỉ.",
      icon: <PieChart size={20} className="text-blue-600" />
    },
    {
      year: "7/2025",
      title: "Bước ngoặt Marketing",
      desc: "Nhận ra đam mê với sáng tạo và tâm lý hành vi, chuyển hướng sang Marketing và Truyền thông.",
      icon: <Zap size={20} className="text-amber-500" />
    },
    {
      year: "7/2025 - Hiện tại",
      title: "Freelance Content & Data Marketer",
      desc: "Kết hợp tư duy phân tích của Kế toán và sự sáng tạo của Marketing. Phụ trách nội dung số và tối ưu hóa chuyển đổi.",
      icon: <Target size={20} className="text-emerald-500" />
    }
  ];

  return (
    <div className="flex flex-col pb-24">
      {/* SECTION 1: TUYÊN NGÔN ĐỊNH VỊ */}
      <section className="relative pt-24 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Tuyên ngôn định vị</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Namas</h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-medium mb-8">Content Creator <span className="mx-2 text-slate-600">|</span> Data-driven Marketer</h2>
            
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed border-l-4 border-blue-500 pl-6 text-slate-200">
              "Không chỉ viết để được đọc, tôi viết để tạo ra hành động. 
              Sự sáng tạo thăng hoa nhất khi nó được dẫn đường bởi dữ liệu chân thực."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CÂU CHUYỆN BẢN THÂN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Hành trình từ Con số đến Chữ viết</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nhiều người hỏi tôi vì sao lại chọn Marketing mà không phải các ngành an toàn như Kế toán Tài chính. Đối với tôi, đó không phải là một sự từ bỏ, mà là một sự <strong>tích hợp hoàn hảo</strong>.
                <br/><br/>
                Kế toán dạy tôi cách nhìn vào bản chất của vấn đề qua những con số khô khan. Còn Marketing dạy tôi cách truyền đạt bản chất đó một cách cảm xúc nhất. Sự kết hợp giữa tư duy phân tích (Analytical Thinking) và tư duy sáng tạo (Creative Mindset) chính là "vũ khí" khác biệt của tôi.
              </p>
              
              <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 w-full bg-slate-100 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1509635164051-5584296265cd?auto=format&fit=crop&q=80" 
                  alt="Career Transition Desk Abstract" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />
              
              <div className="space-y-12">
                {milestones.map((item, index) => (
                  <div key={index} className="relative pl-20 pr-4">
                    <div className="absolute left-4 top-1 w-8 h-8 bg-white rounded-full border-4 border-slate-100 shadow-sm flex items-center justify-center z-10">
                      {item.icon}
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-sm font-bold text-slate-400 mb-2 block tracking-wider">{item.year}</span>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NĂNG LỰC VÀ KỸ NĂNG */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hồ sơ Năng lực</h2>
            <p className="text-lg text-slate-600">Hệ thống kỹ năng được trau dồi liên tục, hướng đến việc trở thành một Full-stack Marketer.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {/* Tabs Sidebar */}
              <div className="bg-slate-900 text-slate-300 p-6 md:p-8 flex flex-col space-y-2">
                <button 
                  onClick={() => setActiveTab("chuyen-mon")}
                  className={`flex items-center justify-between p-4 rounded-xl text-left transition-all ${activeTab === "chuyen-mon" ? "bg-blue-600 text-white shadow-lg" : "hover:bg-slate-800"}`}
                >
                  <span className="flex items-center font-medium"><PenTool size={18} className="mr-3" /> Chuyên môn</span>
                  {activeTab === "chuyen-mon" && <ChevronRight size={18} />}
                </button>
                <button 
                  onClick={() => setActiveTab("cong-cu")}
                  className={`flex items-center justify-between p-4 rounded-xl text-left transition-all ${activeTab === "cong-cu" ? "bg-blue-600 text-white shadow-lg" : "hover:bg-slate-800"}`}
                >
                  <span className="flex items-center font-medium"><LayoutDashboard size={18} className="mr-3" /> Công cụ</span>
                  {activeTab === "cong-cu" && <ChevronRight size={18} />}
                </button>
                <button 
                  onClick={() => setActiveTab("ngoai-ngu")}
                  className={`flex items-center justify-between p-4 rounded-xl text-left transition-all ${activeTab === "ngoai-ngu" ? "bg-blue-600 text-white shadow-lg" : "hover:bg-slate-800"}`}
                >
                  <span className="flex items-center font-medium"><CheckCircle2 size={18} className="mr-3" /> Ngoại ngữ</span>
                  {activeTab === "ngoai-ngu" && <ChevronRight size={18} />}
                </button>
              </div>

              {/* Tab Content */}
              <div className="md:col-span-3 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 capitalize">
                  {activeTab === "chuyen-mon" ? "Kỹ năng chuyên môn" : activeTab === "cong-cu" ? "Công cụ sử dụng" : "Trình độ ngoại ngữ"}
                </h3>
                
                <div className="space-y-8">
                  {skills[activeTab as keyof typeof skills].map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-semibold text-slate-700">{skill.name}</span>
                        <span className="text-sm font-medium text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-3">
                        <motion.div 
                          className="bg-blue-600 h-3 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
