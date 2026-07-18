import { ReactNode } from "react";
import { Callout, DataTable, Lead, PromptCard, Section, StepList, ToolCard } from "@/components/ContentBlocks";
import { ImageGallery } from "@/components/ImageGallery";
import { AssetImage } from "@/components/AssetImage";

export type TocItem = { id: string; label: string };

export const projectToc: Record<string, TocItem[]> = {
  "bai-1": [
    { id: "muc-tieu", label: "Mục tiêu thực hành" },
    { id: "quy-trinh", label: "Quy trình 12 bước" },
    { id: "minh-chung", label: "Minh chứng thao tác" },
    { id: "ket-qua", label: "Kết quả đạt được" },
  ],
  "bai-2": [
    { id: "mo-dau", label: "Mở đầu" },
    { id: "tong-quan", label: "Tổng quan nghiên cứu" },
    { id: "viet-nam", label: "Bối cảnh Việt Nam" },
    { id: "danh-gia", label: "Đánh giá nguồn" },
    { id: "bang", label: "Bảng tổng hợp" },
    { id: "tham-khao", label: "Tài liệu tham khảo" },
  ],
  "bai-3": [
    { id: "tac-vu-1", label: "Tác vụ 1 · Tóm tắt" },
    { id: "tac-vu-2", label: "Tác vụ 2 · CAPM" },
    { id: "tac-vu-3", label: "Tác vụ 3 · Câu hỏi ôn tập" },
    { id: "so-sanh", label: "So sánh kết quả" },
    { id: "phan-tich", label: "Phân tích hiệu quả" },
    { id: "nguyen-tac", label: "Mô hình C.L.A.R.O" },
  ],
  "bai-4": [
    { id: "gioi-thieu", label: "Giới thiệu dự án" },
    { id: "cong-cu", label: "Ba công cụ hợp tác" },
    { id: "nhiem-vu", label: "Nội dung thực hiện" },
    { id: "ket-qua", label: "Kết quả & hiệu quả" },
    { id: "bai-hoc", label: "Khó khăn & bài học" },
  ],
  "bai-5": [
    { id: "du-an", label: "Giới thiệu dự án" },
    { id: "cong-cu", label: "Hệ sinh thái công cụ" },
    { id: "quy-trinh", label: "Quy trình sáng tạo" },
    { id: "so-sanh", label: "So sánh công cụ" },
    { id: "vai-tro", label: "Vai trò của AI" },
  ],
  "bai-6": [
    { id: "quan-diem", label: "Quan điểm của ĐHQGHN" },
    { id: "trai-nghiem", label: "Trải nghiệm học tập" },
    { id: "dao-duc", label: "Các lưu ý đạo đức" },
    { id: "quy-tac", label: "7 quy tắc cá nhân" },
    { id: "infographic", label: "Infographic" },
  ],
};

const b1Images = Array.from({ length: 13 }, (_, index) => ({
  src: `/assets/bai-1/minh-chung-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Minh chứng thao tác tệp tin bước ${index + 1}`,
  caption: [
    "Mở Finder trên macOS.",
    "Truy cập thư mục Documents.",
    "Tạo thư mục ThucHanh_NguyenDinhKhoiNguyen.",
    "Mở thư mục thực hành vừa tạo.",
    "Tạo và lưu tệp GhiChu.txt bằng TextEdit.",
    "Đổi tên thành GhiChuQuanTrong.txt.",
    "Tạo thư mục con TaiLieu.",
    "Sao chép tệp bằng Command + C.",
    "Dán bản sao vào thư mục TaiLieu.",
    "Chuẩn bị tệp DiChuyen.txt để di chuyển.",
    "Di chuyển tệp và thực hiện xóa vào Trash.",
    "Xóa vĩnh viễn bằng Option + Command + Delete.",
    "Khôi phục tệp từ Trash bằng Put Back.",
  ][index],
}));

const b3Images = Array.from({ length: 20 }, (_, index) => ({
  src: `/assets/bai-3/minh-chung-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Ảnh thử nghiệm prompt ${index + 1}`,
  caption: `Kết quả thử nghiệm prompt · ảnh ${index + 1}`,
}));

const b4Images = Array.from({ length: 4 }, (_, index) => ({
  src: `/assets/bai-4/minh-chung-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Minh chứng hợp tác trực tuyến ${index + 1}`,
  caption: [
    "Không gian soạn thảo cộng tác và phân công nội dung trên Google Docs.",
    "Buổi họp nhóm trực tuyến trên Google Meet.",
    "Nội dung slide về ứng dụng AI trong chẩn đoán hình ảnh.",
    "Bảng đánh giá đóng góp cá nhân trong dự án nhóm.",
  ][index],
}));

const b5Images = Array.from({ length: 6 }, (_, index) => ({
  src: `/assets/bai-5/minh-chung-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Minh chứng sử dụng AI tạo sinh ${index + 1}`,
  caption: [
    "Thử nghiệm ChatGPT để xây dựng khung bài viết.",
    "Kết quả nội dung mở rộng từ ChatGPT.",
    "Thử nghiệm tóm tắt nội dung bằng Google Gemini.",
    "Kết quả phân tích đạo đức từ Claude.",
    "Tổng hợp đầu ra để đưa vào quy trình thiết kế.",
    "Minh chứng các phiên bản nội dung trung gian.",
  ][index],
}));

function B1Content() {
  return (
    <>
      <Section id="muc-tieu" eyebrow="Bài thực hành 01" title="Mục tiêu và môi trường thực hiện">
        <Lead>
          Bài thực hành rèn luyện kỹ năng quản lý tệp tin và thư mục trên macOS, từ thao tác tạo mới đến sao chép, di chuyển, xóa và khôi phục dữ liệu.
        </Lead>
        <div className="metric-row">
          <div><strong>12</strong><span>bước thao tác</span></div>
          <div><strong>13</strong><span>ảnh minh chứng</span></div>
          <div><strong>macOS</strong><span>Finder + TextEdit</span></div>
        </div>
        <Callout title="Điều chỉnh theo hệ điều hành" tone="cyan">
          <p>
            Thay vì File Explorer trên Windows, bài được thực hiện bằng Finder. Thao tác “Cut & Paste” được thay bằng <strong>Option + Command + V</strong> để di chuyển tệp đúng cơ chế của macOS.
          </p>
        </Callout>
      </Section>

      <Section id="quy-trinh" eyebrow="Workflow" title="Quy trình thao tác 12 bước">
        <StepList
          items={[
            { title: "Mở Finder", text: <p>Nhấp biểu tượng mặt cười màu xanh dương trên Dock. Có thể dùng Command + N khi đang ở Desktop.</p> },
            { title: "Truy cập Documents", text: <p>Chọn Documents ở Sidebar để thực hành tại vị trí an toàn, không tác động đến tệp hệ thống.</p> },
            { title: "Tạo thư mục mới", text: <p>Nhấp chuột phải, chọn New Folder và đặt tên <code>ThucHanh_NguyenDinhKhoiNguyen</code>. Phím tắt: Shift + Command + N.</p> },
            { title: "Mở thư mục thực hành", text: <p>Nhấp đúp vào thư mục vừa tạo để bắt đầu tổ chức tệp.</p> },
            { title: "Tạo tệp văn bản", text: <p>Mở TextEdit, chọn Format → Make Plain Text, sau đó lưu tệp <code>GhiChu.txt</code> vào thư mục thực hành.</p> },
            { title: "Đổi tên tệp", text: <p>Chọn tệp, nhấn Return và đổi tên thành <code>GhiChuQuanTrong.txt</code>.</p> },
            { title: "Tạo thư mục con", text: <p>Tạo thư mục <code>TaiLieu</code> bên trong thư mục thực hành.</p> },
            { title: "Sao chép tệp", text: <p>Dùng Command + C với <code>GhiChuQuanTrong.txt</code>, mở TaiLieu và dùng Command + V để tạo bản sao.</p> },
            { title: "Di chuyển tệp", text: <p>Tạo <code>DiChuyen.txt</code>, sao chép bằng Command + C, sau đó dùng Option + Command + V trong TaiLieu để thực hiện Move.</p> },
            { title: "Xóa vào Thùng rác", text: <p>Chọn <code>GhiChuQuanTrong.txt</code> và dùng Move to Trash hoặc Command + Delete.</p> },
            { title: "Xóa vĩnh viễn", text: <p>Chọn <code>DiChuyen.txt</code>, nhấn Option + Command + Delete và xác nhận Delete.</p> },
            { title: "Khôi phục tệp", text: <p>Mở Trash, chọn <code>GhiChuQuanTrong.txt</code> và dùng Put Back để đưa tệp về vị trí ban đầu.</p> },
          ]}
        />
      </Section>

      <Section id="minh-chung" eyebrow="Evidence log" title="Minh chứng theo đúng thứ tự thao tác">
        <ImageGallery images={b1Images} columns={2} />
      </Section>

      <Section id="ket-qua" eyebrow="Reflection" title="Kết quả đạt được">
        <div className="insight-grid">
          <Callout title="Tổ chức dữ liệu" tone="cyan"><p>Hiểu rõ cấu trúc thư mục nhiều cấp và cách đặt tên tệp nhất quán.</p></Callout>
          <Callout title="Phân biệt Copy và Move" tone="lime"><p>Nắm được sự khác nhau giữa tạo bản sao và chuyển tệp sang vị trí mới.</p></Callout>
          <Callout title="An toàn dữ liệu" tone="gold"><p>Phân biệt xóa vào Trash, xóa vĩnh viễn và thao tác khôi phục.</p></Callout>
        </div>
      </Section>
    </>
  );
}

function B2Content() {
  const sourceRows = [
    ["DeYoung & Roland (2001)", "Học giả", "Journal", "Định lượng", "Trích dẫn rất cao, nhưng khá cũ", "Cao"],
    ["Stiroh (2004)", "Chuyên gia", "Journal", "Empirical", "Trích dẫn cao, cũ", "Cao"],
    ["Demirgüç-Kunt & Huizinga (2010)", "WB researcher", "Journal", "Định lượng", "Trích dẫn cao, tương đối mới", "Rất cao"],
    ["Sanya & Wolfe (2011)", "Researcher", "Journal", "Định lượng", "Trích dẫn khá, mới hơn", "Cao"],
    ["Lepetit et al. (2008)", "Học giả", "Journal", "Empirical", "Trích dẫn cao, hơi cũ", "Cao"],
    ["DeYoung & Rice (2004)", "Học giả", "Journal", "Phân tích", "Trích dẫn cao, cũ", "Trung bình"],
    ["IMF report (2021)", "IMF", "Report", "Dữ liệu", "Cập nhật cao", "Rất cao"],
    ["World Bank (2022)", "World Bank", "Report", "Dữ liệu", "Rất mới", "Rất cao"],
    ["SBV report", "NHNN", "Report", "Mô tả", "Cập nhật, có bias", "Cao"],
    ["McKinsey (2021)", "Tư vấn", "Report", "Phân tích", "Mới, ít học thuật", "Khá cao"],
  ];
  return (
    <>
      <Section id="mo-dau" eyebrow="Research topic" title="Tác động của nguồn thu ngoài lãi đến hiệu quả hoạt động của ngân hàng thương mại">
        <div className="report-cover-inline">
          <AssetImage src="/assets/bai-2/ueb-logo.webp" alt="Logo Trường Đại học Kinh tế - ĐHQGHN" />
          <div>
            <p><strong>Sinh viên:</strong> Nguyễn Đình Khôi Nguyên</p>
            <p><strong>Mã sinh viên:</strong> 24052358</p>
            <p><strong>Mã học phần:</strong> VNU1001_E252046</p>
            <p><strong>Ngành:</strong> Tài chính – Ngân hàng</p>
            <p><strong>Lớp:</strong> QH2024E TCNH 3</p>
          </div>
        </div>
        <Lead>
          Trong bối cảnh cạnh tranh ngày càng gia tăng, ngân hàng thương mại không còn chỉ phụ thuộc vào thu nhập từ lãi mà ngày càng mở rộng sang phí dịch vụ, bảo hiểm và đầu tư.
        </Lead>
        <p>
          Xu hướng đa dạng hóa thu nhập được xem là chiến lược quan trọng nhằm nâng cao hiệu quả hoạt động và giảm rủi ro. Tuy nhiên, tác động thực sự của nguồn thu ngoài lãi vẫn còn nhiều tranh luận. Bài nghiên cứu phân tích ảnh hưởng của non-interest income đến hiệu quả hoạt động của ngân hàng, đồng thời đánh giá độ tin cậy của các nguồn tài liệu liên quan.
        </p>
      </Section>

      <Section id="tong-quan" eyebrow="Literature review" title="Tổng quan nghiên cứu">
        <p>
          DeYoung và Roland (2001) cho rằng thu nhập ngoài lãi có thể làm tăng lợi nhuận nhưng cũng đi kèm rủi ro biến động cao hơn. Stiroh (2004) nhận định việc mở rộng sang hoạt động phi truyền thống không phải lúc nào cũng cải thiện hiệu quả vì chi phí quản lý và rủi ro có thể tăng lên.
        </p>
        <p>
          Demirgüç-Kunt và Huizinga (2010) cho thấy các ngân hàng có tỷ trọng thu nhập ngoài lãi cao có thể đạt lợi nhuận cao hơn, nhưng đồng thời đối mặt với biến động lớn hơn. Trong các nền kinh tế đang phát triển, Sanya và Wolfe (2011) cho rằng đa dạng hóa thu nhập có thể giúp giảm rủi ro tổng thể.
        </p>
        <Callout title="Khoảng trống nghiên cứu" tone="gold">
          <p>Các nghiên cứu có mức độ trích dẫn cao nhưng chủ yếu dùng dữ liệu quốc tế, chưa phản ánh đầy đủ đặc thù của từng quốc gia và bối cảnh Việt Nam.</p>
        </Callout>
      </Section>

      <Section id="viet-nam" eyebrow="Local context" title="Phân tích trong bối cảnh Việt Nam">
        <p>
          Tại Việt Nam, các ngân hàng ngày càng chú trọng nguồn thu ngoài lãi, đặc biệt là dịch vụ bancassurance và phí giao dịch. Các ngân hàng lớn có lợi thế từ mạng lưới khách hàng rộng và khả năng hợp tác với công ty bảo hiểm, nhưng không phải ngân hàng nào cũng đạt hiệu quả tương tự.
        </p>
        <p>
          Nguồn thu ngoài lãi có thể làm tăng biến động thu nhập khi phụ thuộc nhiều vào thị trường. Việc mở rộng sang lĩnh vực mới cũng đòi hỏi năng lực quản lý rủi ro tốt hơn. Vì vậy, cơ hội tăng trưởng chỉ được chuyển hóa thành hiệu quả khi ngân hàng có chiến lược triển khai và kiểm soát phù hợp.
        </p>
      </Section>

      <Section id="danh-gia" eyebrow="Source evaluation" title="Đánh giá độ tin cậy của nguồn">
        <p>
          Các nghiên cứu Stiroh (2004) và DeYoung & Roland (2001) có số lượng trích dẫn rất cao, cho thấy ảnh hưởng lớn trong lĩnh vực; tuy nhiên, thời điểm công bố khá lâu khiến một số kết luận có thể chưa hoàn toàn phù hợp với bối cảnh hiện tại.
        </p>
        <p>
          Demirgüç-Kunt & Huizinga (2010) và Sanya & Wolfe (2011) có dữ liệu mới hơn và phương pháp định lượng rõ ràng. Báo cáo của IMF và World Bank cung cấp dữ liệu cập nhật và góc nhìn thực tiễn, nhưng không đi sâu vào phương pháp nghiên cứu học thuật.
        </p>
        <Callout title="Nguyên tắc lựa chọn nguồn" tone="cyan">
          <p>Kết hợp nguồn có mức độ trích dẫn cao với nguồn cập nhật mới để cân bằng giữa nền tảng học thuật và tính thời sự.</p>
        </Callout>
      </Section>

      <Section id="bang" eyebrow="Synthesis" title="Bảng đánh giá 10 nguồn thông tin">
        <DataTable
          headers={["Nguồn", "Tác giả / cơ quan", "Xuất bản", "Phương pháp", "Trích dẫn & cập nhật", "Độ tin cậy"]}
          rows={sourceRows}
          caption="Tổng hợp và xếp hạng độ tin cậy của các tài liệu"
        />
        <Callout title="Kết luận nghiên cứu" tone="gold">
          <p>
            Nguồn thu ngoài lãi ngày càng quan trọng, có thể giúp tăng lợi nhuận và đa dạng hóa doanh thu nhưng cũng làm gia tăng rủi ro. Tại Việt Nam, hiệu quả phụ thuộc vào quy mô ngân hàng, năng lực quản lý và điều kiện thị trường; vì vậy cần tiếp cận thận trọng khi mở rộng nguồn thu ngoài lãi.
          </p>
        </Callout>
      </Section>

      <Section id="tham-khao" eyebrow="Harvard style" title="Tài liệu tham khảo">
        <ol className="reference-list">
          <li>DeYoung, R. and Roland, K.P. (2001). <em>Product mix and earnings volatility.</em> Journal of Financial Intermediation.</li>
          <li>Stiroh, K.J. (2004). <em>Diversification in banking.</em> Journal of Money, Credit and Banking.</li>
          <li>Demirgüç-Kunt, A. and Huizinga, H. (2010). <em>Bank activity and funding strategies.</em> Journal of Financial Economics.</li>
          <li>Sanya, S. and Wolfe, S. (2011). <em>Can banks diversify income?</em> Journal of Banking & Finance.</li>
          <li>Lepetit, L. et al. (2008). <em>Bank income structure and risk.</em> Journal of Banking & Finance.</li>
          <li>DeYoung, R. and Rice, T. (2004). <em>Noninterest income.</em> Financial Review.</li>
          <li>IMF (2021). <em>Banking sector report.</em></li>
          <li>World Bank (2022). <em>Financial sector report.</em></li>
          <li>McKinsey (2021). <em>Banking report.</em></li>
        </ol>
      </Section>
    </>
  );
}

function B3Content() {
  return (
    <>
      <Section id="tac-vu-1" eyebrow="Tác vụ 01" title="Tóm tắt bài đọc / tài liệu học thuật">
        <Lead>Chủ đề thử nghiệm: Quản trị rủi ro thanh khoản trong ngân hàng thương mại.</Lead>
        <div className="prompt-stack">
          <PromptCard level="Cơ bản">Hãy tóm tắt giúp tôi bài đọc về Quản trị rủi ro thanh khoản ngân hàng.</PromptCard>
          <PromptCard level="Cải tiến">
            Tôi cần tóm tắt bài đọc về quản trị rủi ro thanh khoản ngân hàng. Hãy tóm tắt bài đọc này trong khoảng 300 từ, chia làm 3 phần chính: (1) Khái niệm & Nguyên nhân, (2) Các chỉ số đo lường chính, (3) Giải pháp quản trị. Dùng dạng gạch đầu dòng để dễ theo dõi.
          </PromptCard>
          <PromptCard level="Nâng cao">
            Bạn là một chuyên gia phân tích tài chính ngân hàng. Hãy giúp tôi tóm tắt tài liệu học thuật về “Quản trị rủi ro thanh khoản”. Trích xuất các luận điểm chính, phân loại theo mô hình Bối cảnh → Thách thức → Mẫu giải pháp, sau đó tổng hợp thành bản tóm tắt súc tích, chuyên nghiệp. Mẫu đầu ra gồm “Luận điểm chính” và “Takeaway quan trọng”.
          </PromptCard>
        </div>
        <ImageGallery images={b3Images.slice(0, 6)} columns={2} />
      </Section>

      <Section id="tac-vu-2" eyebrow="Tác vụ 02" title="Giải thích khái niệm phức tạp: Mô hình CAPM">
        <div className="prompt-stack">
          <PromptCard level="Cơ bản">Giải thích cho tôi về mô hình CAPM trong tài chính.</PromptCard>
          <PromptCard level="Cải tiến">
            Hãy giải thích mô hình CAPM trong tài chính cho một sinh viên năm nhất. Định nghĩa rõ công thức, các biến số chính như hệ số Beta và lãi suất phi rủi ro, nêu ý nghĩa trong đầu tư và dùng một ví dụ thực tế ngắn gọn.
          </PromptCard>
          <PromptCard level="Nâng cao">
            Hãy đóng vai một giảng viên xuất sắc môn Tài chính doanh nghiệp. Giải thích CAPM cho người chưa biết tài chính theo kỹ thuật Feynman: dùng ẩn dụ đời sống để giải thích rủi ro và lợi nhuận, sau đó mới giới thiệu công thức, giải thích từng thành phần bằng từ ngữ bình dân, đưa ra ví dụ số và hỏi lại một câu kiểm tra mức độ hiểu bài.
          </PromptCard>
        </div>
        <ImageGallery images={b3Images.slice(6, 10)} columns={2} />
      </Section>

      <Section id="tac-vu-3" eyebrow="Tác vụ 03" title="Tạo bộ câu hỏi ôn tập về Tài chính Tiền tệ">
        <div className="prompt-stack">
          <PromptCard level="Cơ bản">Tạo cho tôi bộ câu hỏi trắc nghiệm ôn tập môn Tài chính tiền tệ.</PromptCard>
          <PromptCard level="Cải tiến">
            Hãy tạo 5 câu hỏi trắc nghiệm về “Lạm phát và Chính sách tiền tệ”. Mỗi câu gồm 4 đáp án A, B, C, D và có đáp án đúng kèm giải thích chi tiết ở cuối.
          </PromptCard>
          <PromptCard level="Nâng cao">
            Bạn là chuyên gia ra đề thi Đại học ngành Tài chính – Ngân hàng. Hãy tạo 5 câu hỏi về “Chính sách tiền tệ của Ngân hàng Trung ương” theo Bloom: 2 câu Nhận biết, 2 câu Thông hiểu dạng tình huống, 1 câu Vận dụng cao. Mỗi câu cần có phương án, đáp án và lập luận chi tiết vì sao đúng hoặc sai.
          </PromptCard>
        </div>
        <ImageGallery images={b3Images.slice(10, 18)} columns={2} />
      </Section>

      <Section id="so-sanh" eyebrow="Experiment review" title="So sánh kết quả ba cấp độ prompt">
        <DataTable
          headers={["Tiêu chí", "Prompt cơ bản", "Prompt cải tiến", "Prompt nâng cao"]}
          rows={[
            ["Độ chính xác & trọng tâm", "Lệch hoặc quá chung; văn bản dài, thiên về lý thuyết SGK.", "Bám sát yêu cầu, có bố cục rõ ràng.", "Đúng vai trò chuyên gia, đi thẳng vào bản chất và phân tích sắc bén."],
            ["Tính ứng dụng học tập", "Thấp; cần tự đọc lại và lọc thông tin.", "Khá; có thể dùng để đọc nhanh hoặc học thuộc.", "Rất cao; hỗ trợ tư duy phản biện, ẩn dụ dễ nhớ và tình huống tương tác."],
            ["Kiểm soát định dạng", "Đoạn văn tự do, không có cấu trúc.", "Có gạch đầu dòng và giới hạn độ dài.", "Cấu trúc đa tầng, bảng và lời giải cho cả phương án sai."],
            ["Nguy cơ ảo giác", "Có thể lan man sang chủ đề không liên quan.", "Thấp hơn nhờ ràng buộc độ dài và phạm vi.", "Hầu như không đáng kể trong thử nghiệm nhờ quy trình phân tích từng bước và kiểm tra đầu ra."],
          ]}
        />
        <ImageGallery images={b3Images.slice(18, 20)} columns={2} />
      </Section>

      <Section id="phan-tich" eyebrow="Mechanism" title="Vì sao prompt nâng cao cho kết quả tốt hơn?">
        <div className="insight-grid insight-grid--two">
          <Callout title="1. Role Prompting" tone="cyan"><p>Gán vai trò chuyên môn giúp thu hẹp ngữ cảnh, định hình văn phong và tiêu chuẩn đầu ra phù hợp.</p></Callout>
          <Callout title="2. Suy luận theo chuỗi" tone="lime"><p>Chia nhiệm vụ thành các bước ngăn câu trả lời “đoán mò”, duy trì logic xuyên suốt quá trình xử lý.</p></Callout>
          <Callout title="3. Constraints & Formatting" tone="gold"><p>Giới hạn độ dài và định dạng buộc AI chắt lọc thông tin, giảm câu chữ dư thừa.</p></Callout>
          <Callout title="4. Distractor Analysis" tone="red"><p>Giải thích vì sao phương án sai giúp người học nhận diện bẫy tư duy và hiểu bản chất sâu hơn.</p></Callout>
        </div>
      </Section>

      <Section id="nguyen-tac" eyebrow="Framework" title="Mô hình 5 chân kiềng C.L.A.R.O">
        <div className="claro-grid">
          <div><strong>C</strong><span>Context</span><p>Xác định đối tượng, bối cảnh và mục đích sử dụng.</p></div>
          <div><strong>L</strong><span>Lead Role</span><p>Gán vai trò cụ thể cho AI.</p></div>
          <div><strong>A</strong><span>Action Instruction</span><p>Dùng động từ hành động rõ ràng, có thể đo lường.</p></div>
          <div><strong>R</strong><span>Restraints & Format</span><p>Quy định độ dài, tông giọng và cấu trúc.</p></div>
          <div><strong>O</strong><span>Output Examples</span><p>Cung cấp mẫu đầu ra để AI noi theo.</p></div>
        </div>
        <h3>Mẹo thực tiễn khi dùng AI trong học tập</h3>
        <ul>
          <li>Không chấp nhận ngay kết quả đầu tiên; tiếp tục yêu cầu đào sâu hoặc thêm ví dụ tại Việt Nam.</li>
          <li>Dùng kỹ thuật hỏi ngược để AI tạo câu hỏi tình huống kiểm tra mức độ hiểu bài.</li>
          <li>Luôn fact-check số liệu, công thức và dữ kiện bằng giáo trình hoặc nguồn chính thống.</li>
        </ul>
      </Section>
    </>
  );
}

function B4Content() {
  return (
    <>
      <Section id="gioi-thieu" eyebrow="Group project" title="Ứng dụng Deep Learning trong chẩn đoán hình ảnh y tế">
        <Lead>
          Dự án nghiên cứu cách trí tuệ nhân tạo, đặc biệt là Deep Learning, hỗ trợ bác sĩ phân tích ảnh X-quang, CT Scan, MRI và siêu âm để phát hiện bệnh nhanh và chính xác hơn.
        </Lead>
        <div className="role-band">
          <span>Vai trò cá nhân</span>
          <strong>Thành viên trình bày · Tìm kiếm nội dung</strong>
        </div>
        <p>
          Trong dự án, em phụ trách tìm kiếm tài liệu, tổng hợp nội dung, trình bày một phần bài thuyết trình và phối hợp với các thành viên để hoàn thiện sản phẩm cuối cùng.
        </p>
      </Section>

      <Section id="cong-cu" eyebrow="Collaboration stack" title="Ba công cụ hợp tác trực tuyến">
        <div className="tool-grid">
          <ToolCard name="Google Docs" role="Soạn thảo cộng tác">
            <p>Cùng biên soạn báo cáo, chỉnh sửa trực tiếp trên một tài liệu, theo dõi lịch sử thay đổi và góp ý nội dung cho thành viên khác.</p>
          </ToolCard>
          <ToolCard name="Google Drive" role="Lưu trữ & chia sẻ">
            <p>Lưu báo cáo, slide, hình ảnh, tài liệu tham khảo và video họp; sắp xếp thư mục và cập nhật phiên bản mới nhất.</p>
          </ToolCard>
          <ToolCard name="Google Meet" role="Giao tiếp nhóm">
            <p>Báo cáo tiến độ, trình bày nội dung đã nghiên cứu, nhận góp ý và giải quyết vấn đề khi không thể gặp trực tiếp.</p>
          </ToolCard>
        </div>
        <ImageGallery images={b4Images.slice(0, 2)} columns={2} />
      </Section>

      <Section id="nhiem-vu" eyebrow="Personal contribution" title="Nội dung em trực tiếp thực hiện">
        <StepList
          items={[
            { title: "Tìm kiếm tài liệu", text: <p>Nghiên cứu Google Scholar, WHO, Nature, PubMed và các bài báo khoa học về AI trong y học; chọn lọc nguồn phù hợp.</p> },
            { title: "Tổng hợp nội dung", text: <p>Biên soạn khái niệm Deep Learning, cấu trúc CNN, cách AI nhận diện ảnh y tế, quy trình xử lý ảnh, ưu điểm và hạn chế.</p> },
            { title: "Chuẩn bị hình ảnh", text: <p>Tìm ảnh X-quang phổi, MRI não, CT Scan, mô hình CNN và sơ đồ quy trình AI để tăng tính trực quan.</p> },
            { title: "Chuẩn bị trình bày", text: <p>Xây dựng phần giới thiệu, vai trò trong chẩn đoán, ứng dụng thực tế, ví dụ ung thư phổi, viêm phổi và kết luận; luyện tập để đảm bảo thời gian.</p> },
          ]}
        />
        <ImageGallery images={b4Images.slice(2, 3)} columns={2} />
      </Section>

      <Section id="ket-qua" eyebrow="Outcome" title="Kết quả đạt được và hiệu quả công cụ">
        <div className="metric-row">
          <div><strong>10/10</strong><span>đánh giá từ nhóm</span></div>
          <div><strong>100%</strong><span>nhiệm vụ hoàn thành</span></div>
          <div><strong>3</strong><span>công cụ phối hợp</span></div>
        </div>
        <ul>
          <li>Hoàn thành đầy đủ nhiệm vụ và đúng tiến độ trên Trello.</li>
          <li>Đóng góp nội dung cho slide, tham gia đầy đủ các buổi họp và chủ động trao đổi.</li>
          <li>Google Docs hỗ trợ chỉnh sửa đồng thời và theo dõi lịch sử thay đổi.</li>
          <li>Google Drive giúp lưu trữ tập trung, chia sẻ nhanh và tránh mất dữ liệu.</li>
          <li>Google Meet giúp họp thuận tiện, trao đổi trực tiếp và tiết kiệm thời gian di chuyển.</li>
        </ul>
        <ImageGallery images={b4Images.slice(3)} columns={2} />
      </Section>

      <Section id="bai-hoc" eyebrow="Retrospective" title="Khó khăn, giải pháp và bài học kinh nghiệm">
        <DataTable
          headers={["Khó khăn", "Cách xử lý"]}
          rows={[
            ["Nhiều tài liệu tiếng Anh, mất thời gian chọn lọc và dịch.", "Ưu tiên nguồn uy tín, phân chia phạm vi tìm kiếm và trao đổi lại qua Google Meet."],
            ["Lịch học khác nhau, khó sắp xếp thời gian họp.", "Chủ động chốt lịch và sử dụng họp trực tuyến để giảm phụ thuộc địa điểm."],
            ["Bố cục slide ban đầu chưa đồng nhất.", "Thống nhất cấu trúc, quy chuẩn trình bày và cập nhật trên tài liệu chung."],
            ["Nội dung nguồn bị trùng lặp.", "Đối chiếu, loại bỏ thông tin lặp và chọn nội dung có giá trị nhất."],
          ]}
        />
        <Callout title="Bài học cốt lõi" tone="blue">
          <p>
            Cần lập kế hoạch ngay từ đầu, chủ động trao đổi khi gặp khó khăn, cập nhật tiến độ thường xuyên, dùng nguồn đáng tin cậy và chuẩn bị kỹ trước khi trình bày. Công cụ số chỉ phát huy hiệu quả khi đi cùng quy trình phối hợp rõ ràng.
          </p>
        </Callout>
      </Section>
    </>
  );
}

function B5Content() {
  return (
    <>
      <Section id="du-an" eyebrow="Creative project" title="AI trong giáo dục – Cơ hội và thách thức">
        <Lead>
          Mục tiêu của dự án là tạo nội dung đa phương tiện giúp sinh viên và giảng viên hiểu rõ vai trò của AI trong giáo dục.
        </Lead>
        <div className="deliverable-grid">
          <div><strong>Infographic</strong><span>Canva AI + Adobe Firefly</span></div>
          <div><strong>Bài viết ngắn</strong><span>ChatGPT + Gemini + Claude</span></div>
          <div><strong>Video ngắn</strong><span>CapCut + hình ảnh AI</span></div>
        </div>
      </Section>

      <Section id="cong-cu" eyebrow="AI toolkit" title="Hệ sinh thái công cụ đã sử dụng">
        <h3>AI tạo văn bản</h3>
        <div className="tool-grid">
          <ToolCard name="ChatGPT" role="Viết khung bài blog">
            <p><strong>Prompt:</strong> “Viết bài blog 600 từ về ứng dụng AI trong giáo dục, nêu lợi ích và thách thức.”</p>
            <p><strong>Kết quả:</strong> Bài viết có cấu trúc rõ ràng, dễ đọc.</p>
          </ToolCard>
          <ToolCard name="Google Gemini" role="Tóm tắt nội dung">
            <p><strong>Prompt:</strong> “Liệt kê 5 ứng dụng AI phổ biến trong giáo dục, mỗi ứng dụng mô tả ngắn gọn.”</p>
            <p><strong>Kết quả:</strong> Danh sách súc tích, phù hợp đưa vào infographic.</p>
          </ToolCard>
          <ToolCard name="Claude" role="Phân tích đạo đức">
            <p><strong>Prompt:</strong> “Phân tích các vấn đề đạo đức khi sử dụng AI trong giáo dục.”</p>
            <p><strong>Kết quả:</strong> Nội dung sâu, nhấn mạnh quyền riêng tư và công bằng.</p>
          </ToolCard>
        </div>
        <h3>AI tạo hình ảnh và thiết kế</h3>
        <div className="tool-grid">
          <ToolCard name="DALL·E" role="Hình minh họa">
            <p>Prompt: “A student learning with an AI assistant on laptop, modern classroom, bright colors.”</p>
          </ToolCard>
          <ToolCard name="Midjourney" role="Poster tương lai">
            <p>Prompt: “Futuristic classroom with holographic AI teacher, cinematic style.”</p>
          </ToolCard>
          <ToolCard name="Stable Diffusion" role="Bộ icon">
            <p>Prompt: “Flat design icons of AI robot, book, data visualization.”</p>
          </ToolCard>
          <ToolCard name="Canva AI" role="Bố cục infographic"><p>Tạo infographic “5 ứng dụng AI trong lớp học”.</p></ToolCard>
          <ToolCard name="Adobe Firefly" role="Hoàn thiện thiết kế"><p>Chỉnh màu poster và thêm hiệu ứng chữ “AI in Education”.</p></ToolCard>
        </div>
        <ImageGallery images={b5Images} columns={2} />
      </Section>

      <Section id="quy-trinh" eyebrow="Production pipeline" title="Quy trình sáng tạo và tích hợp">
        <StepList
          items={[
            { title: "Xây dựng nội dung", text: <p>Dùng ChatGPT viết khung blog, sau đó dùng Gemini rút gọn thành bullet points cho infographic.</p> },
            { title: "Tạo hình ảnh", text: <p>Tạo hình minh họa bằng DALL·E, Midjourney và Stable Diffusion rồi chọn lọc theo mục đích.</p> },
            { title: "Thiết kế infographic", text: <p>Đưa nội dung và hình ảnh vào Canva AI để dựng bố cục.</p> },
            { title: "Tinh chỉnh hình ảnh", text: <p>Dùng Adobe Firefly điều chỉnh màu sắc và typography.</p> },
            { title: "Dựng video", text: <p>Kết hợp infographic, hình ảnh AI và giọng đọc trong CapCut.</p> },
          ]}
        />
      </Section>

      <Section id="so-sanh" eyebrow="Tool evaluation" title="So sánh điểm mạnh và hạn chế">
        <DataTable
          headers={["Công cụ", "Điểm mạnh", "Hạn chế"]}
          rows={[
            ["ChatGPT", "Viết nội dung mạch lạc, dễ đọc", "Đôi khi chung chung, cần chỉnh sửa"],
            ["Gemini", "Tóm tắt nhanh, súc tích", "Ít sáng tạo, thiên về liệt kê"],
            ["Claude", "Phân tích sâu, logic", "Văn phong hơi học thuật"],
            ["DALL·E", "Hình ảnh sáng tạo, dễ dùng", "Chi tiết chưa sắc nét"],
            ["Midjourney", "Hình ảnh nghệ thuật, ấn tượng", "Khó kiểm soát chi tiết nhỏ"],
            ["Stable Diffusion", "Tạo icon đơn giản", "Cần chỉnh sửa thêm để đẹp"],
            ["Canva AI", "Thiết kế nhanh, trực quan", "Hạn chế tùy chỉnh nâng cao"],
            ["Adobe Firefly", "Hiệu ứng chữ và màu sắc mạnh", "Cần kết hợp với công cụ khác"],
          ]}
        />
      </Section>

      <Section id="vai-tro" eyebrow="Critical reflection" title="Vai trò của AI trong quá trình sáng tạo">
        <div className="insight-grid insight-grid--two">
          <Callout title="AI làm tốt" tone="lime"><ul><li>Tăng tốc sản xuất nội dung.</li><li>Đa dạng ý tưởng và phong cách.</li><li>Hỗ trợ thiết kế trực quan, tiết kiệm thời gian.</li></ul></Callout>
          <Callout title="Hạn chế" tone="red"><ul><li>Nội dung đôi khi thiếu chiều sâu.</li><li>Hình ảnh có thể sai ngữ cảnh.</li><li>Chưa thể thay thế kỹ năng designer.</li></ul></Callout>
          <Callout title="Thay đổi quy trình" tone="cyan"><ul><li>Rút ngắn giai đoạn lên ý tưởng.</li><li>Thử nghiệm nhiều phong cách nhanh hơn.</li><li>Hình thành quy trình AI hỗ trợ – con người tinh chỉnh.</li></ul></Callout>
          <Callout title="Vấn đề đạo đức" tone="gold"><ul><li>Quyền riêng tư dữ liệu học sinh.</li><li>Nguy cơ thiên vị thuật toán.</li><li>Cần minh bạch khi sử dụng AI.</li></ul></Callout>
        </div>
        <p>
          Dự án cho thấy AI là công cụ mạnh trong sáng tạo nội dung nhưng không thể thay thế hoàn toàn tư duy và cảm nhận của con người. Sự kết hợp giữa AI và đóng góp cá nhân tạo ra sản phẩm vừa nhanh chóng vừa có chất lượng.
        </p>
      </Section>
    </>
  );
}

function B6Content() {
  return (
    <>
      <Section id="quan-diem" eyebrow="Policy reading" title="Quan điểm của ĐHQGHN về việc sử dụng AI">
        <Lead>
          ĐHQGHN đang hướng đến một khung quy định toàn diện để AI trở thành công cụ hỗ trợ học tập nhưng không thay thế tư duy và trách nhiệm của người học.
        </Lead>
        <div className="principle-list">
          <div><strong>01</strong><p><b>Khuyến khích công cụ hỗ trợ:</b> AI có thể giúp hệ thống hóa tài liệu, rèn kỹ năng viết và hỗ trợ tư duy phản biện.</p></div>
          <div><strong>02</strong><p><b>Đề cao minh bạch:</b> Người học cần công khai rõ khi bài làm có sự hỗ trợ của AI.</p></div>
          <div><strong>03</strong><p><b>Nghiêm cấm sai trái:</b> Không dùng AI để đạo văn, làm hộ bài kiểm tra hoặc viết thay bài luận.</p></div>
          <div><strong>04</strong><p><b>Định hướng phát triển:</b> AI tối ưu hóa năng lực, không thay thế tư duy cá nhân.</p></div>
          <div><strong>05</strong><p><b>Quyền kiểm soát của giảng viên:</b> Giảng viên có thể yêu cầu giải trình cách sử dụng AI để bảo đảm công bằng.</p></div>
        </div>
      </Section>

      <Section id="trai-nghiem" eyebrow="Practical case" title="Trải nghiệm thực hiện nhiệm vụ học tập với AI">
        <div className="case-study">
          <div><span>Nhiệm vụ</span><p>Hoàn thành bài luận khoảng 500 từ về “Ảnh hưởng của học tập chủ động trong giáo dục đại học”.</p></div>
          <div><span>Prompt</span><p>“Hãy xây dựng một bài luận 500 từ bằng tiếng Việt, phân tích lợi ích và khó khăn của việc áp dụng học tập chủ động ở bậc đại học.”</p></div>
          <div><span>Đầu ra AI</span><p>Khái niệm học tập chủ động, lợi ích về tư duy phản biện, hợp tác và ghi nhớ; khó khăn về chuẩn bị của giảng viên và thời gian triển khai.</p></div>
          <div><span>Biên tập</span><p>Bổ sung ví dụ lớp học tại Việt Nam, chỉnh văn phong học thuật, tối ưu độ dài câu và trích dẫn Bonwell & Eison (1991).</p></div>
        </div>
        <Callout title="Tuyên bố minh bạch" tone="cyan">
          <p>
            “Bài luận này có tham khảo gợi ý về cấu trúc và nội dung từ Microsoft Copilot. Các dẫn chứng, ví dụ thực tế và nguồn trích dẫn đã được người viết kiểm chứng và bổ sung để đảm bảo yêu cầu học thuật.”
          </p>
        </Callout>
      </Section>

      <Section id="dao-duc" eyebrow="Ethical analysis" title="Những lưu ý đạo đức khi sử dụng AI">
        <div className="insight-grid">
          <Callout title="Ranh giới hỗ trợ và gian lận" tone="red"><p>AI gợi ý cấu trúc là hỗ trợ hợp lý; sao chép toàn bộ đầu ra mà không biên tập là hành vi gian lận.</p></Callout>
          <Callout title="Sở hữu trí tuệ" tone="gold"><p>Mọi thông tin AI tạo ra cần được thẩm định. Khi AI dựa trên nguồn cụ thể, người học phải trích dẫn tài liệu gốc.</p></Callout>
          <Callout title="Tác động đến kỹ năng" tone="lime"><p>Lạm dụng AI có thể bào mòn khả năng phân tích, viết lách và tư duy độc lập.</p></Callout>
        </div>
      </Section>

      <Section id="quy-tac" eyebrow="Personal code" title="7 quy tắc ứng xử cá nhân khi dùng AI">
        <ol className="rules-grid">
          <li><strong>Công khai</strong><span>Luôn minh bạch về sự hỗ trợ của AI.</span></li>
          <li><strong>Thẩm định</strong><span>Đối chiếu thông tin AI với nguồn uy tín.</span></li>
          <li><strong>Biên tập</strong><span>Không nộp nguyên bản nội dung do AI tạo ra.</span></li>
          <li><strong>Trích dẫn</strong><span>Tuân thủ chuẩn Harvard với tài liệu AI gợi ý.</span></li>
          <li><strong>Giới hạn</strong><span>Dùng AI bổ trợ, không giao toàn bộ nhiệm vụ.</span></li>
          <li><strong>Tự phát triển</strong><span>Học từ AI để cải thiện năng lực tự viết.</span></li>
          <li><strong>Đạo đức</strong><span>Không dùng AI cho hành vi gian lận.</span></li>
        </ol>
      </Section>

      <Section id="infographic" eyebrow="Visual summary" title="Sử dụng AI có trách nhiệm trong học thuật">
        <figure className="infographic-frame">
          <AssetImage src="/assets/bai-6/infographic-ai-co-trach-nhiem.webp" alt="Infographic sử dụng AI có trách nhiệm trong học thuật" loading="lazy" />
          <figcaption>Infographic tổng hợp nguyên tắc sử dụng AI có trách nhiệm.</figcaption>
        </figure>
        <p>
          AI là công cụ hỗ trợ đầy tiềm năng nếu được vận dụng đúng cách. Tuân thủ chính sách của nhà trường, minh bạch và kiểm chứng là chìa khóa để sinh viên vừa bảo đảm liêm chính học thuật vừa nâng cao hiệu quả nghiên cứu.
        </p>
      </Section>
    </>
  );
}

export function renderProjectContent(slug: string): ReactNode {
  switch (slug) {
    case "bai-1": return <B1Content />;
    case "bai-2": return <B2Content />;
    case "bai-3": return <B3Content />;
    case "bai-4": return <B4Content />;
    case "bai-5": return <B5Content />;
    case "bai-6": return <B6Content />;
    default: return null;
  }
}
