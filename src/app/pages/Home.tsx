import { useNavigate } from "react-router";
import { ArrowRight, UserCircle, Briefcase, BarChart3 } from "lucide-react";
import { Typewriter } from "../components/Typewriter";
import { motion } from "motion/react";

export function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      id: "brand",
      title: "Định vị bản thân",
      description: "Câu chuyện từ Kế toán đến Marketing, năng lực cốt lõi và định hướng phát triển sự nghiệp.",
      icon: <UserCircle size={40} className="text-blue-600 mb-6" />,
      path: "/brand",
      buttonText: "Tìm hiểu thêm",
      delay: 0.2
    },
    {
      id: "projects",
      title: "Dự án tiêu biểu",
      description: "Tuyển tập các chiến dịch nổi bật, sản phẩm sáng tạo và thành tựu đã đạt được.",
      icon: <Briefcase size={40} className="text-emerald-600 mb-6" />,
      path: "/projects",
      buttonText: "Xem dự án",
      delay: 0.4
    },
    {
      id: "analytics",
      title: "Case Study Analytics",
      description: "Phân tích chuyên sâu về tư duy chiến lược, khả năng giải quyết vấn đề và tác động dự án.",
      icon: <BarChart3 size={40} className="text-purple-600 mb-6" />,
      path: "/analytics",
      buttonText: "Xem phân tích",
      delay: 0.6
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-100 -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Xin chào, tôi là <br/>
                <span className="text-blue-600">Namas</span>
              </h1>
              
              <div className="text-2xl md:text-3xl font-medium text-slate-700 mb-8 h-12">
                <Typewriter text="Content Creator & Data-driven Marketer" speed={0.04} />
              </div>
              
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                Tôi tin rằng sự sáng tạo phải được dẫn dắt bởi dữ liệu. 
                Sứ mệnh của tôi là xây dựng những câu chuyện thương hiệu chạm đến cảm xúc và mang lại hiệu suất kinh doanh thực tế.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigate("/brand")}
                  className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center"
                >
                  Khám phá hồ sơ cá nhân
                </button>
                <button 
                  onClick={() => navigate("/projects")}
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-colors flex items-center"
                >
                  Xem dự án nổi bật
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: card.delay }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all cursor-pointer flex flex-col h-full"
                onClick={() => navigate(card.path)}
              >
                {card.icon}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {card.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mt-auto">
                  {card.buttonText}
                  <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
