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
      content:`Làm chủ không gian lưu trữ số thông qua tổ chức thư mục và đặt tên tệp khoa học, giúp truy xuất dữ liệu nhanh chóng và nâng cao hiệu suất làm việc.` 
    },
     {
      id: 2,
      title: "II. QUY TRÌNH",
      category: "Bài 1: Máy tính và các thiết bị ngoại vi",
      content: `1. Tạo thư mục mới

Mở File Explorer bằng tổ hợp phím Windows + E. Truy cập vào ổ đĩa D: (hoặc thư mục Documents nếu chỉ có ổ C:). Tạo một thư mục mới và đặt tên là **ThucHanh_HoTenSinhVien**.

2. Tạo và đổi tên tệp tin

Mở thư mục vừa tạo. Tạo một tệp văn bản mới với tên **GhiChu.txt**. Sau đó đổi tên tệp thành **GhiChuQuanTrong.txt**.

3. Tạo thư mục con

Trong thư mục **ThucHanh_HoTenSinhVien**, tạo thêm một thư mục con có tên **TaiLieu**.

4. Sao chép tệp tin

Sao chép tệp **GhiChuQuanTrong.txt** bằng lệnh Copy (Ctrl + C). Mở thư mục **TaiLieu** và dán tệp vào đó bằng lệnh Paste (Ctrl + V). Sau thao tác này, tệp tồn tại ở cả hai vị trí.

5. Di chuyển tệp tin

Quay lại thư mục **ThucHanh_HoTenSinhVien** và tạo tệp **DiChuyen.txt**. Sử dụng lệnh Cut (Ctrl + X) để cắt tệp, sau đó dán vào thư mục **TaiLieu** bằng lệnh Paste (Ctrl + V). Tệp sẽ chỉ còn ở vị trí mới.

6. Xóa tệp tin

Trong thư mục **TaiLieu**, chọn tệp **GhiChuQuanTrong.txt** và thực hiện lệnh Delete. Tệp sẽ được chuyển vào Thùng rác (Recycle Bin).

7. Xóa vĩnh viễn

Chọn tệp **DiChuyen.txt**, nhấn tổ hợp phím Shift + Delete và xác nhận xóa. Tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác.

8. Khôi phục tệp từ Thùng rác

Mở Recycle Bin trên màn hình nền. Tìm tệp **GhiChuQuanTrong.txt**, nhấp chuột phải và chọn Restore. Tệp sẽ được khôi phục về vị trí ban đầu.

Kết quả đạt được

Sau khi hoàn thành bài thực hành, người thực hiện đã nắm được các thao tác cơ bản trong quản lý tệp và thư mục trên hệ điều hành Windows như tạo thư mục, tạo và đổi tên tệp, sao chép, di chuyển, xóa và khôi phục dữ liệu.
`
    },
    {
      id: 3,
      title: "I. MỤC TIÊU VÀ PHẠM VI TÌM KIẾM",
      category: "Bài 2: Khai thác dữ liệu và thông tin",
      content: `Mục tiêu

Thu thập và đánh giá mức độ tin cậy của các tài liệu nghiên cứu liên quan đến việc ứng dụng Generative AI trong cá nhân hóa hoạt động quảng cáo trên các nền tảng thương mại điện tử. Qua đó, xác định những lợi ích, thách thức và xu hướng phát triển của công nghệ này trong lĩnh vực marketing số.

Phạm vi tìm kiếm

Nghiên cứu tập trung vào các tài liệu, bài báo khoa học và báo cáo được công bố trong giai đoạn từ năm 2022 đến năm 2026 nhằm đảm bảo tính cập nhật của các công nghệ trí tuệ nhân tạo tạo sinh (Generative AI) và các ứng dụng thực tiễn trong thương mại điện tử.

Từ khóa tìm kiếm

* Generative AI in Advertising
* Personalized Marketing
* E-commerce AI
* AI Consumer Behavior
* AI-driven Personalization
* Generative AI for Digital Marketing
`
    },
    {
      id: 4,
      title: "II. PHƯƠNG PHÁP VÀ NGUỒN TÌM KIẾM",
      category: "Bài 2: Khai thác dữ liệu và thông tin",
      content: `Để đảm bảo tính khách quan và độ tin cậy của thông tin, quá trình tìm kiếm sử dụng nhiều nguồn khác nhau nhằm đối chiếu và kiểm chứng dữ liệu.
 Nguồn tìm kiếm
1. Cơ sở dữ liệu học thuật: Google Scholar, ScienceDirect, ResearchGate.
2. Tạp chí khoa học: Journal of Business Research, Tạp chí Kinh tế & Phát triển.
3. Sách chuyên khảo: Các sách về Digital Marketing và Trí tuệ nhân tạo.
4. Báo cáo ngành uy tín: McKinsey & Company, Harvard Business Review.
5. Nguồn dữ liệu chính phủ: Cục Thương mại điện tử và Kinh tế số (Bộ Công Thương Việt Nam).
`
    },
    {
      id: 5,
      title: "III. KẾT LUẬN",
      category: "Bài 2: Khai thác dữ liệu và thông tin",
      content: `Việc kết hợp các nguồn học thuật, báo cáo ngành và dữ liệu chính thống giúp đảm bảo độ tin cậy, tính thực tiễn và sự toàn diện cho nghiên cứu về ứng dụng Generative AI trong marketing.`

    },
    {
      id: 6,
      title: "I. MỤC LỤC",
      category: "Bài 3: Tổng quan về trí tuệ nhân tạo",
      content: `1. Lựa chọn ba tác vụ học tập phổ biến.
2. Xây dựng ba phiên bản prompt tương ứng cho từng tác vụ.
3. Thử nghiệm các prompt bằng công cụ trí tuệ nhân tạo và so sánh kết quả thu được.
4. Phân tích mức độ hiệu quả của từng prompt và các yếu tố ảnh hưởng đến chất lượng phản hồi.
5. Rút ra các nguyên tắc và kinh nghiệm xây dựng prompt hiệu quả dựa trên kết quả thử nghiệm.`

    },
    {
     id: 7,
      title: "II. NỘI DUNG",
      category: "Bài 3: Tổng quan về trí tuệ nhân tạo",
      content: ` 1. Chọn 3 tác vụ học tập phổ biến

Tác vụ 1: Tóm tắt tài liệu học thuật.
 Chủ đề: Cực trị của hàm số nhiều biến số trong giáo trình Giải tích 1.

Tác vụ 2: Giải thích khái niệm phức tạp.

Khái niệm: Cực trị có điều kiện của hàm số nhiều biến số.

Tác vụ 3: Tạo bộ câu hỏi ôn tập.

Chủ đề: Cực trị của hàm số nhiều biến số.

2. Xây dựng các phiên bản Prompt

Tác vụ 1: Tóm tắt tài liệu

Prompt cơ bản: Yêu cầu tóm tắt nội dung chủ đề.
Prompt cải tiến: Yêu cầu trình bày nội dung theo cấu trúc slide học thuật.
Prompt nâng cao: Yêu cầu AI đóng vai giảng viên nhận xét và chỉ ra các nội dung quan trọng cần trình bày.

Tác vụ 2: Giải thích khái niệm

Prompt cơ bản: Giải thích khái niệm.
Prompt cải tiến: Giải thích ngắn gọn, dễ hiểu và có ví dụ minh họa.
Prompt nâng cao: Trả lời thắc mắc của sinh viên dưới góc nhìn giảng viên.

Tác vụ 3: Tạo bộ câu hỏi ôn tập

Prompt cơ bản: Tạo bộ câu hỏi ôn tập.
Prompt cải tiến: Tạo 30 câu hỏi kèm đáp án.
Prompt nâng cao: Đóng vai giảng viên xây dựng hệ thống câu hỏi tự luận và trắc nghiệm để đánh giá mức độ hiểu bài.

3. Thử nghiệm và so sánh kết quả

Thử nghiệm được thực hiện với tác vụ tóm tắt chủ đề Cực trị của hàm số nhiều biến số.

Prompt cơ bản: Kết quả ngắn gọn, dễ hiểu nhưng còn thiếu chiều sâu.
Prompt cải tiến: Kết quả có cấu trúc rõ ràng, phù hợp để xây dựng bài thuyết trình.
Prompt nâng cao: Kết quả có tính phân tích, đánh giá và tập trung vào những nội dung quan trọng nhất.

4. Phân tích hiệu quả của các Prompt

Prompt càng chi tiết thì kết quả càng chính xác và phù hợp với nhu cầu người dùng. Nguyên nhân là AI hoạt động dựa trên thông tin đầu vào:

Prompt cơ bản cung cấp ít thông tin nên kết quả thường mang tính tổng quát.
Prompt cải tiến bổ sung bối cảnh và yêu cầu cụ thể nên nội dung rõ ràng hơn.
Prompt nâng cao xác định rõ vai trò, mục tiêu và tiêu chí đầu ra nên cho kết quả chất lượng và có chiều sâu hơn.

5. Nguyên tắc và mẹo viết Prompt hiệu quả

Nguyên tắc

1. Cụ thể hóa yêu cầu.
2. Xác định rõ bối cảnh sử dụng.
3. Gán vai trò cho AI.
4. Nêu rõ mục tiêu đầu ra.
5. Đưa ra các tiêu chí cụ thể về nội dung và hình thức.

Công thức Prompt hiệu quả

Vai trò + Nhiệm vụ + Bối cảnh + Tiêu chí + Định dạng đầu ra

Một số mẹo nâng cao

* Chia nhỏ yêu cầu.
* Chỉ định đối tượng người đọc.
* Yêu cầu ví dụ minh họa.
* Kiểm soát độ dài và định dạng kết quả.
* Định hướng cách suy luận hoặc trình bày của AI.`

    },
    {
      id: 8,
      title: "I. BỐI CẢNH VÀ LỰA CHỌN CÔNG CỤ",
      category: "Bài 4: Giao tiếp và hợp tác trong môi trường số",
      content: `Trong quá trình thực hiện bài tập nhóm, chúng tôi gồm 3 thành viên đã phối hợp xây dựng kế hoạch cho một buổi Webinar dành cho sinh viên trong thời gian 1 tuần. Để nâng cao hiệu quả làm việc, hỗ trợ cộng tác và quản lý thông tin, nhóm đã lựa chọn các công cụ trực tuyến sau:

1. Trello – Quản lý công việc và theo dõi tiến độ dự án.
2. Google Docs – Soạn thảo và chỉnh sửa tài liệu trực tuyến theo thời gian thực.
3. Google Drive – Lưu trữ, quản lý và chia sẻ tài liệu của nhóm.
4. Google Meet – Trao đổi, thảo luận và tổ chức các cuộc họp trực tuyến.

Việc kết hợp các công cụ trên giúp nhóm làm việc hiệu quả hơn, đảm bảo thông tin được cập nhật liên tục và dễ dàng phối hợp giữa các thành viên.`

    },
    {
      id: 9,
      title: "II. MÔ TẢ CHI TIẾT CÁC TÁC VỤ CÁ NHÂN VÀ MINH CHỨNG",
      category: "Bài 4: Giao tiếp và hợp tác trong môi trường số",
      content: `Trong thời gian triển khai dự án, tôi đã sử dụng các công cụ trực tuyến để hỗ trợ điều phối công việc, quản lý tiến độ và lưu trữ tài liệu của nhóm.

1. Tương tác và thảo luận nhóm (Google Meet & Google Docs)

Tôi tổ chức cuộc họp trực tuyến đầu tiên thông qua Google Meet để trao đổi ý tưởng và phân công nhiệm vụ. Đồng thời, tôi tạo tài liệu trên Google Docs để ghi lại nội dung thảo luận và chia sẻ cho các thành viên cùng theo dõi, chỉnh sửa khi cần thiết.

2. Quản lý nhiệm vụ và tiến độ (Trello)

Tôi thiết lập bảng công việc trên Trello với ba mục chính: **Cần làm (To Do)**, **Đang làm (Doing)** và **Hoàn thành (Done)**. Các nhiệm vụ được tạo thành từng thẻ công việc và phân công cho từng thành viên. Bên cạnh đó, tôi thường xuyên cập nhật trạng thái công việc để theo dõi tiến độ thực hiện của nhóm.

3. Lưu trữ và chia sẻ tài liệu (Google Drive)

Tôi tạo một thư mục chung trên Google Drive để lưu trữ toàn bộ tài liệu của dự án. Các tài liệu được sắp xếp theo từng thư mục con như nội dung, thiết kế và phân công công việc nhằm đảm bảo tính khoa học và thuận tiện cho việc tìm kiếm. Quyền chỉnh sửa cũng được cấp cho các thành viên để hỗ trợ quá trình cộng tác.`

    },
    {
      id: 10,
      title: "III. PHÂN TÍCH HIỆU QUẢ CỦA CÔNG CỤ ĐỐI VỚI CÔNG VIỆC CÁ NHÂN",
      category: "Bài 4: Giao tiếp và hợp tác trong môi trường số",
      content: `Quá trình áp dụng đồng bộ các nền tảng công nghệ vào dự án đã giúp hiệu suất làm việc cá nhân của tôi tăng lên đáng kể:

Với Trello: Tính năng trực quan hóa công việc (Kanban Board) giúp tôi, với vai trò trưởng nhóm, dễ dàng theo dõi tiến độ thực hiện của từng thành viên. Chỉ cần quan sát bảng công việc, tôi có thể nhanh chóng nắm được nhiệm vụ nào đang được triển khai, nhiệm vụ nào đã hoàn thành và những công việc còn tồn đọng cần xử lý.

Với Google Workspace (Google Docs, Google Drive):** Các công cụ này hỗ trợ làm việc cộng tác theo thời gian thực, giúp các thành viên cùng chỉnh sửa và cập nhật nội dung trên một tài liệu chung. Đồng thời, việc lưu trữ dữ liệu trên nền tảng đám mây giúp tôi dễ dàng truy cập, quản lý và tìm kiếm tài liệu từ nhiều thiết bị khác nhau chỉ cần có kết nối Internet.`

    },
    {
      id: 11,
      title: "IV. THÁCH THỨC VÀ CÁCH GIẢI QUYẾT",
      category: "Bài 4: Giao tiếp và hợp tác trong môi trường số",
      content: `Mặc dù các công cụ số hỗ trợ hiệu quả trong quá trình làm việc nhóm, tôi vẫn gặp phải một số khó khăn trong việc quản lý tiến độ khi làm việc trực tuyến.

Vấn đề:
Do mỗi thành viên có lịch học và thời gian sinh hoạt khác nhau, việc phối hợp công việc đôi khi chưa đồng bộ. Một số thời điểm, tiến độ công việc bị ảnh hưởng do thành viên chưa cập nhật trạng thái nhiệm vụ kịp thời, trong khi nhóm không thể thường xuyên tổ chức các buổi họp trực tuyến để theo dõi tiến độ.

Giải pháp:
Để khắc phục tình trạng trên, tôi sử dụng tính năng **Due Date** trên Trello để thiết lập thời hạn hoàn thành cho từng nhiệm vụ và kích hoạt chế độ nhắc nhở tự động. Bên cạnh đó, nhóm thống nhất thực hiện báo cáo tiến độ ngắn gọn vào mỗi buổi tối thông qua nhóm chat. Nhờ kết hợp giữa công cụ quản lý công việc và quy tắc báo cáo định kỳ, nhóm đã duy trì được tiến độ làm việc và hoàn thành các nhiệm vụ đúng thời hạn.

Kết quả:
Việc áp dụng các giải pháp trên giúp nâng cao tính chủ động của các thành viên, hạn chế tình trạng chậm tiến độ và đảm bảo dự án được triển khai hiệu quả.`

    },
    {
      id: 12,
      title: "I. NGHIÊN CỨU VÀ XÂY DỰNG NỘI DUNG VỚI AI VĂN BẢN",
      category: "Bài 5: Sáng tạo nội dung số",
      content: `Nghiên cứu và xây dựng nội dung với AI văn bản (DeepSeek/Gemini)

Prompt sử dụng: Yêu cầu AI xây dựng dàn ý và viết mở bài cho bài blog so sánh tay cầm Vader 5 Pro và Flydigi Apex 4, tập trung vào công nghệ Hall Effect, trigger và trải nghiệm sử dụng.

Kết quả AI: AI cung cấp thông tin kỹ thuật nhanh và khá chính xác, tuy nhiên nội dung còn mang tính liệt kê và thiếu trải nghiệm thực tế.

Chỉnh sửa và tích hợp: Tôi sử dụng dàn ý do AI tạo làm nền tảng, sau đó tự viết lại phần lớn nội dung dựa trên trải nghiệm cá nhân về cảm giác cầm nắm, trigger và d-pad. Đồng thời bổ sung thêm nội dung so sánh với Machenike G5 Pro V2 để tăng tính khách quan và giá trị cho bài viết.`

    },
    {
      id: 13,
      title: "II. QUY TRÌNH SÁNG TẠO VÀ TÍCH HỢP",
      category: "Bài 5: Sáng tạo nội dung số",
      content: `Tạo hình ảnh với AI (DALL·E 3)

Prompt sử dụng: Yêu cầu AI tạo hình ảnh tay cầm chơi game phong cách tương lai với tông màu đen và xanh neon, thiết kế 3D chi tiết, phù hợp với chủ đề eSports.

Kết quả AI: Hình ảnh được tạo có chất lượng cao, màu sắc nổi bật và hiệu ứng ánh sáng ấn tượng, phù hợp với mục đích truyền thông. Tuy nhiên, AI vẫn xuất hiện một số ký tự không mong muốn ở khu vực logo và bố cục một vài nút bấm chưa hoàn toàn chính xác.
Thiết kế infographic với AI (Canva Magic Design)

Thao tác: Sử dụng tính năng Magic Design trên Canva với yêu cầu tạo infographic so sánh thông số thiết bị công nghệ theo phong cách dark mode và tông màu xanh neon.

Kết quả AI: Canva nhanh chóng đề xuất nhiều bố cục khác nhau, giúp tiết kiệm thời gian trong giai đoạn lên ý tưởng thiết kế.

Chỉnh sửa và tích hợp: Tôi lựa chọn bố cục phù hợp nhất, sau đó thay thế hình ảnh mẫu bằng hình ảnh đã được xử lý trước đó. Đồng thời, tôi điều chỉnh font chữ, sắp xếp lại nội dung và căn chỉnh bố cục để đảm bảo tính thẩm mỹ, dễ đọc và làm nổi bật các thông số kỹ thuật quan trọng.`

    },
    {
      id: 14,
      title: "III. PHÂN TÍCH VAI TRÒ CỦA AI VÀ CÁC VẤN ĐỀ ĐẠO ĐỨC ",
      category: "Bài 5: Sáng tạo nội dung số",
      content: `1. Vai trò của AI và sự thay đổi quy trình sáng tạo

Trong dự án, AI đóng vai trò hỗ trợ nghiên cứu nội dung, tạo hình ảnh và đề xuất bố cục thiết kế, giúp tiết kiệm đáng kể thời gian thực hiện các công việc kỹ thuật. Tuy nhiên, AI vẫn còn hạn chế trong việc đánh giá trải nghiệm thực tế và tư duy sáng tạo. Vì vậy, tôi sử dụng AI như một công cụ hỗ trợ, sau đó chỉnh sửa, bổ sung và hoàn thiện sản phẩm dựa trên kiến thức và trải nghiệm cá nhân.

2. Các vấn đề đạo đức cần cân nhắc

Việc sử dụng AI trong truyền thông cần lưu ý một số vấn đề sau:

Tính chính xác của thông tin: Cần kiểm chứng lại dữ liệu do AI cung cấp trước khi sử dụng.
Bản quyền nội dung: Hình ảnh và nội dung tạo bởi AI cần được sử dụng một cách thận trọng, tránh vi phạm quyền sở hữu trí tuệ.
Tính minh bạch: Người sáng tạo nên công khai việc có sử dụng AI hỗ trợ, đồng thời chịu trách nhiệm về chất lượng và độ tin cậy của sản phẩm cuối cùng.`

    },
    {
      id: 15,
      title: "I. NGHIÊN CỨU VÀ PHÂN TÍCH CHÍNH SÁCH SỬ DỤNG AI TẠI VNU",
      category: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
      content: `VNU khuyến khích sử dụng AI trong học tập và nghiên cứu nhưng yêu cầu đảm bảo tính minh bạch, liêm chính học thuật và trách nhiệm cá nhân. Người học được phép sử dụng AI như một công cụ hỗ trợ, tuy nhiên cần khai báo rõ khi có sự tham gia của AI. Việc sao chép nội dung do AI tạo ra và nộp như sản phẩm cá nhân được xem là hành vi gian lận học thuật. Đồng thời, người sử dụng phải chịu trách nhiệm về tính chính xác và độ tin cậy của nội dung.

Chính sách của VNU có nhiều điểm tương đồng với các trường đại học lớn trên thế giới khi đều cho phép sử dụng AI có kiểm soát và yêu cầu trích dẫn nguồn phù hợp. Tuy nhiên, các trường quốc tế thường trao quyền cho giảng viên quyết định mức độ sử dụng AI trong từng môn học và áp dụng các chuẩn trích dẫn quốc tế như APA hoặc MLA.

Theo em, chính sách của VNU là phù hợp với xu hướng hiện nay. Việc cho phép sử dụng AI nhưng đi kèm các quy định về minh bạch và trách nhiệm giúp sinh viên khai thác hiệu quả công nghệ, đồng thời duy trì tính trung thực và chất lượng trong học tập, nghiên cứu.`

    },
    {
      id: 16,
      title: "II. MÔ TẢ QUÁ TRÌNH THỰC HIỆN NHIỆM VỤ HỌC TẬP VỚI SỰ HỖ TRỢ CỦA AI",
      category: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
      content: ` 1. Nhật ký sử dụng AI

Prompt 1: Xây dựng đề cương

Yêu cầu AI lập đề cương cho bài luận về tác động của AI đối với cá nhân hóa trải nghiệm khách hàng trong ngành bán lẻ số tại Việt Nam.

Kết quả: AI đề xuất bố cục gồm mở bài, các luận điểm chính về công nghệ AI, hành vi người tiêu dùng, ứng dụng tại Việt Nam và những thách thức liên quan.

Prompt 2: Tìm kiếm số liệu

Yêu cầu AI tổng hợp số liệu và báo cáo về thương mại điện tử và cá nhân hóa bằng AI tại Việt Nam và Đông Nam Á.

Kết quả: AI cung cấp các số liệu và nhận định từ những báo cáo nghiên cứu uy tín về xu hướng phát triển của thị trường.

2. Đánh giá và chỉnh sửa đầu ra của AI

* Kiểm chứng lại các số liệu bằng nguồn tài liệu chính thức trước khi sử dụng.
* Điều chỉnh văn phong và bổ sung các ví dụ thực tế tại Việt Nam để tăng tính phù hợp.
* Sử dụng đề cương của AI làm cơ sở, sau đó tự phát triển nội dung và bổ sung các nhận định cá nhân.

3. Tuyên bố sử dụng AI

Trong quá trình thực hiện bài nghiên cứu, tôi sử dụng Google Gemini để hỗ trợ xây dựng đề cương và gợi ý từ khóa tìm kiếm. Toàn bộ nội dung phân tích, đánh giá và số liệu sử dụng trong bài đều được kiểm chứng, chỉnh sửa và hoàn thiện bởi cá nhân tôi theo đúng quy định về liêm chính học thuật.`

    },
    {
      id: 17,
      title: "III. PHÂN TÍCH CÁC VẤN ĐỀ ĐẠO ĐỨC TRONG VIỆC SỬ DỤNG AI HỌC THUẬT",
      category: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
      content: `1. Ranh giới giữa hỗ trợ và gian lận học thuật

AI được sử dụng hợp lý khi chỉ hỗ trợ tìm ý tưởng, giải thích kiến thức hoặc cải thiện cách diễn đạt. Ngược lại, việc sao chép toàn bộ nội dung do AI tạo ra và nộp như sản phẩm cá nhân được xem là gian lận học thuật.

2. Quyền sở hữu trí tuệ và trích dẫn nguồn

AI tạo nội dung dựa trên dữ liệu học được từ nhiều nguồn khác nhau nên có thể tiềm ẩn rủi ro liên quan đến bản quyền. Vì vậy, người học cần kiểm tra nguồn gốc thông tin và thực hiện trích dẫn phù hợp thay vì xem AI là tác giả.

3. Tác động đến quá trình học tập

Việc phụ thuộc quá nhiều vào AI có thể làm giảm khả năng tư duy phản biện, phân tích và giải quyết vấn đề. Do đó, AI nên được xem là công cụ hỗ trợ, không thay thế vai trò học tập và tư duy của người học.`

    },
    {
      id: 18,
      title: "IV. BỘ NGUYÊN TẮC CÁ NHÂN VỀ VIỆC SỬ DỤNG AI CÓ TRÁCH NHIỆM",
      category: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
      content: `1. Giữ vai trò chủ động: AI chỉ là công cụ hỗ trợ, mọi quyết định và kết luận đều do tôi đưa ra.
2. Kiểm chứng thông tin: Luôn đối chiếu dữ liệu do AI cung cấp với các nguồn đáng tin cậy.
3. Minh bạch trong sử dụng: Khai báo rõ ràng việc sử dụng AI trong học tập và nghiên cứu.
4. Bảo vệ dữ liệu: Không chia sẻ thông tin cá nhân hoặc dữ liệu bảo mật lên các hệ thống AI công cộng.
5. Tôn trọng bản quyền: Không sao chép nguyên văn nội dung do AI tạo ra mà luôn chỉnh sửa và diễn đạt bằng ngôn ngữ của bản thân.
6. Phát triển năng lực cá nhân: Sử dụng AI để hỗ trợ học tập và nâng cao kỹ năng, không phụ thuộc hoàn toàn vào công nghệ.`

    },
    {
      id: 19,
      title: "V. THIẾT KẾ INFOGRAPHIC VỀ SỬ DỤNG AI HỌC THUẬT CÓ TRÁCH NHIỆM",
      category: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
      content:`Cấu trúc Infographic: Sử dụng AI có trách nhiệm trong học thuật

Header

Tiêu đề: SỬ DỤNG AI CÓ TRÁCH NHIỆM TRONG HỌC THUẬT
Thông tin tác giả.
Nền xanh đậm, kết hợp hình ảnh bộ não và vi mạch AI.

Khối 1: Nhận diện ranh giới

Phân biệt hỗ trợ học tập và gian lận học thuật.
Thiết kế dạng hai cột đối lập với màu sắc khác nhau để dễ nhận biết.

Khối 2: Quy trình sử dụng AI

1. Kiểm tra nguồn thông tin.
2. Viết lại bằng ngôn ngữ cá nhân.
3. Trích dẫn và khai báo việc sử dụng AI.

Trình bày theo sơ đồ mũi tên tuần tự.

Khối 3: Nguyên tắc sử dụng AI

* Làm chủ.

* Xác minh.

* Minh bạch.

* Bảo mật.

* Tự lực.

* Thiết kế dạng vòng tròn xoay quanh trung tâm là Liêm chính học thuật.

Footer

* Thông điệp: “AI là công cụ hỗ trợ, nhưng con người mới là chủ thể sáng tạo.”
* Thiết kế đơn giản, nổi bật để tạo điểm nhấn cuối infographic.`

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
