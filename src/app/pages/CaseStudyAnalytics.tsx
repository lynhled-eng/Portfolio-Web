import { motion } from "motion/react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, Cell
} from 'recharts';
import { Target, Lightbulb, Zap, TrendingUp, AlertCircle, ArrowUpRight } from "lucide-react";

export function CaseStudyAnalytics() {
  // Mock data for Recharts
  const growthData = [
    { name: 'Tuần 1', metrics: 4000, conversion: 2400 },
    { name: 'Tuần 2', metrics: 3000, conversion: 1398 },
    { name: 'Tuần 3', metrics: 2000, conversion: 9800 },
    { name: 'Tuần 4', metrics: 2780, conversion: 3908 },
    { name: 'Tuần 5', metrics: 1890, conversion: 4800 },
    { name: 'Tuần 6', metrics: 2390, conversion: 3800 },
    { name: 'Tuần 7', metrics: 3490, conversion: 4300 },
  ];

  const channelData = [
    { name: 'TikTok', value: 400 },
    { name: 'Facebook', value: 300 },
    { name: 'SEO', value: 300 },
    { name: 'Email', value: 200 },
  ];

  const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Report Header */}
      <header className="bg-slate-900 text-white pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 text-blue-400 font-medium text-sm mb-6">
            <span className="uppercase tracking-wider">Report</span>
            <span>/</span>
            <span>Sản phẩm của Namas</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            TỔNG KẾT VÀ PHÂN TÍCH DỰ ÁN <br />
            <span className="text-slate-400">Phân tích chuyên sâu</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">
            Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-12 pb-24">
        
        {/* BLOCK 1: THE CHALLENGE */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40 mb-8 border border-slate-100"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mr-6">
              <AlertCircle size={24} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">01</h2>
              <h3 className="text-3xl font-bold text-slate-900">Khả năng xây dựng nền tảng năng lực số toàn diện</h3>
            </div>
          </div>
          
          <div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Vấn đề cốt lõi</h4>
              <p className="text-slate-600 leading-relaxed">
                Chuỗi dự án cho thấy quá trình phát triển năng lực số theo hướng hệ thống, bắt đầu từ các kỹ năng cơ bản như quản lý tệp tin, tổ chức dữ liệu và khai thác thông tin học thuật, sau đó mở rộng sang các kỹ năng nâng cao như ứng dụng trí tuệ nhân tạo, hợp tác trực tuyến và sáng tạo nội dung số. Điều này phản ánh khả năng thích nghi với môi trường học tập và làm việc hiện đại, nơi công nghệ đóng vai trò trung tâm trong việc nâng cao hiệu suất và chất lượng công việc.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            </div>
          </div>
        </motion.section>

         {/* BLOCK 2: THE CHALLENGE */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40 mb-8 border border-slate-100"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mr-6">
              <AlertCircle size={24} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">02</h2>
              <h3 className="text-3xl font-bold text-slate-900">Năng lực tư duy phân tích và đánh giá thông tin</h3>
            </div>
          </div>
          
          <div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Vấn đề cốt lõi</h4>
              <p className="text-slate-600 leading-relaxed">
                Thông qua các dự án về tìm kiếm tài liệu học thuật và đánh giá tác động của AI trong giáo dục, người thực hiện đã thể hiện khả năng lựa chọn nguồn thông tin đáng tin cậy, phân tích dữ liệu từ nhiều góc độ và đưa ra nhận định có cơ sở. Việc sử dụng các công cụ như Google Scholar, ResearchGate và các báo cáo nghiên cứu thị trường cho thấy sự chú trọng đến tính chính xác, khách quan và giá trị học thuật của thông tin được sử dụng.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            </div>
          </div>
        </motion.section>

        {/* BLOCK 3: THE SOLUTION */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40 mb-8 border border-slate-100"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mr-6">
              <TrendingUp size={24} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">03</h2>
              <h3 className="text-3xl font-bold text-slate-900">Khả năng ứng dụng công nghệ và AI vào thực tiễn</h3>
            </div>
          </div>
          
          <div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Chiến lược</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Các bài thực hành về thiết kế prompt, sử dụng công cụ AI tạo sinh và quản lý dự án trực tuyến cho thấy khả năng khai thác công nghệ như một công cụ hỗ trợ học tập và làm việc hiệu quả. Thay vì sử dụng AI một cách thụ động, dự án tập trung vào việc tối ưu hóa quy trình tư duy, nâng cao chất lượng đầu ra và hỗ trợ giải quyết các vấn đề thực tiễn. Đây là năng lực quan trọng đối với sinh viên trong bối cảnh chuyển đổi số và sự phát triển mạnh mẽ của trí tuệ nhân tạo.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            </div>
          </div>
        </motion.section>

        {/* BLOCK 4: THE RESULTS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40 mb-8 border border-slate-100"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mr-6">
              <TrendingUp size={24} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">04</h2>
              <h3 className="text-3xl font-bold text-slate-900">Ý thức trách nhiệm và đạo đức trong môi trường số</h3>
            </div>
          </div>
          
          <div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Kết quả</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Một điểm nổi bật của dự án là sự quan tâm đến các nguyên tắc an toàn thông tin, liêm chính học thuật và sử dụng AI có trách nhiệm. Bộ nguyên tắc cá nhân được xây dựng không chỉ thể hiện nhận thức về các rủi ro công nghệ mà còn cho thấy tinh thần tự chủ, minh bạch và trách nhiệm trong học tập cũng như nghiên cứu. Đây là nền tảng quan trọng để phát triển bền vững trong môi trường học thuật và nghề nghiệp tương lai.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            </div>
          </div>
        </motion.section>


          {/* Charts area */}
          <div className="space-y-10">
            <div>
              
              <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col justify-center">
                <h4 className="text-lg font-bold mb-4">Kết luận</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Thông qua các dự án đã thực hiện, tôi không chỉ củng cố kiến thức về công nghệ số mà còn phát triển tư duy phân tích, kỹ năng ứng dụng AI và ý thức sử dụng công nghệ có trách nhiệm. Đây là nền tảng quan trọng giúp tôi thích nghi với môi trường học tập và làm việc trong thời đại chuyển đổi số.
                </p>
                <div className="mt-auto border-t border-slate-700 pt-4">
                  <span className="text-slate-400 text-xs uppercase tracking-wider block mb-1">Điểm mấu chốt</span>
                  <span className="font-medium text-blue-400">Data-driven Creativity</span>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}
