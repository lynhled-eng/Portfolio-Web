import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = ["Bài 1: Máy tính và các thiết bị ngoại vi", "Bài 2: Khai thác dữ liệu và thông tin", "Bài 3: Tổng quan về trí tuệ nhân tạo", "Bài 4: Giao tiếp và hợp tác trong môi trường số", "Bài 5: Sáng tạo nội dung số", "Bài 6: An toàn và liêm chính học thuật trong môi trường số"];

  const projects = [
    {
      id: 1,
      title: "I. MỤC TIÊU",
      category: "Bài 1: Máy tính và các thiết bị ngoại vi",
      content:`dịu hoa` 
    },
     {
      id: 2,
      title: "II. QUY TRÌNH",
      category: "Bài 1: Máy tính và các thiết bị ngoại vi",
      content: ``
    },
    {
      id: 3,
      title: "I. MỤC TIÊU VÀ PHẠM VI TÌM KIẾM",
      category: "Bài 2: Khai thác dữ liệu và thông tin",
      content: ``
    },
    {
      id: 4,
      title: "II. PHƯƠNG PHÁP VÀ NGUỒN TÌM KIẾM",
      category: "Bài 2: Khai thác dữ liệu và thông tin",
      content: ``
    },
    {
      id: 5,
      title: "III. KẾT LUẬN",
      category: "Bài 2: Khai thác dữ liệu và thông tin",
      content: ``
    },
    {
      id: 6,
      title: "I. MỤC LỤC",
      category: "Bài 3: Tổng quan về trí tuệ nhân tạo",
      content: ``
    },
    {
     id: 7,
      title: "II. NỘI DUNG",
      category: "Bài 3: Tổng quan về trí tuệ nhân tạo",
      content: ``
    },
    {
      id: 8,
      title: "I. BỐI CẢNH VÀ LỰA CHỌN CÔNG CỤ",
      category: "Bài 4: Giao tiếp và hợp tác trong môi trường số",
      content: ``
    },
    {
      id: 9,
      title: "II. MÔ TẢ CHI TIẾT CÁC TÁC VỤ CÁ NHÂN VÀ MINH CHỨNG",
      category: "Bài 4: Giao tiếp và hợp tác trong môi trường số",
      content: ``
    },
    {
      id: 10,
      title: "III. PHÂN TÍCH HIỆU QUẢ CỦA CÔNG CỤ ĐỐI VỚI CÔNG VIỆC CÁ NHÂN",
      category: "Bài 4: Giao tiếp và hợp tác trong môi trường số",
      content: ``
    },
    {
      id: 11,
      title: "IV. THÁCH THỨC VÀ CÁCH GIẢI QUYẾT",
      category: "Bài 4: Giao tiếp và hợp tác trong môi trường số",
      content: ``
    },
    {
      id: 12,
      title: "I. NGHIÊN CỨU VÀ XÂY DỰNG NỘI DUNG VỚI AI VĂN BẢN",
      category: "Bài 5: Sáng tạo nội dung số",
      content: ``
    },
    {
      id: 13,
      title: "II. QUY TRÌNH SÁNG TẠO VÀ TÍCH HỢP",
      category: "Bài 5: Sáng tạo nội dung số",
      content: ``
    },
    {
      id: 14,
      title: "III. PHÂN TÍCH VAI TRÒ CỦA AI VÀ CÁC VẤN ĐỀ ĐẠO ĐỨC ",
      category: "Bài 5: Sáng tạo nội dung số",
      content: ``
    },
    {
      id: 15,
      title: "I. NGHIÊN CỨU VÀ PHÂN TÍCH CHÍNH SÁCH SỬ DỤNG AI TẠI VNU",
      category: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
      content: ``
    },
    {
      id: 16,
      title: "II. MÔ TẢ QUÁ TRÌNH THỰC HIỆN NHIỆM VỤ HỌC TẬP VỚI SỰ HỖ TRỢ CỦA AI",
      category: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
      content: ``
    },
    {
      id: 17,
      title: "III. PHÂN TÍCH CÁC VẤN ĐỀ ĐẠO ĐỨC TRONG VIỆC SỬ DỤNG AI HỌC THUẬT",
      category: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
      content: ``
    },
    {
      id: 18,
      title: "IV. BỘ NGUYÊN TẮC CÁ NHÂN VỀ VIỆC SỬ DỤNG AI CÓ TRÁCH NHIỆM",
      category: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
      content: ``
    },
    {
      id: 19,
      title: "V. THIẾT KẾ INFOGRAPHIC VỀ SỬ DỤNG AI HỌC THUẬT CÓ TRÁCH NHIỆM",
      category: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
      content:``
    }
  ];

  const filteredProjects = activeFilter === "Tất cả" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-white text-black p-8 md:p-16">
        <div className="max-w-3xl mx-auto">
          <button 
            onClick={() => setSelectedProject(null)}
            className="mb-8 text-blue-600 hover:underline flex items-center gap-2"
          >
            ← Quay lại danh sách
          </button>
          <h1 className="text-3xl font-bold mb-6">{selectedProject.title}</h1>
          <div className="text-lg leading-relaxed whitespace-pre-wrap">
            {selectedProject.content}
          </div>
        </div>
      </div>
    );
  }

  // 2. Đây là đoạn return chính của bạn đã được dọn sạch các trường bị lỗi
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Dự án tiêu biểu</h1>
          <p className="text-lg text-slate-600">
            Nơi hội tụ những ý tưởng được hiện thực hóa bằng dữ liệu.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter 
                ? "bg-slate-900 text-white shadow-md" 
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all cursor-pointer flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Nhãn Category */}
                  <div className="mb-4">
                  
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  
                  {/* Thay summary bằng content, dùng line-clamp-3 để tự cắt ngắn text */}
                  <p className="text-slate-600 mb-6 flex-grow line-clamp-3">{project.content}</p>

                  <button className="flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-auto">
                    Đọc văn bản <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
