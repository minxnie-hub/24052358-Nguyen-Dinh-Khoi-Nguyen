import { ReactNode } from "react";
import { Callout, DataTable, Lead, PromptCard, Section } from "@/components/ContentBlocks";
import { ImageGallery } from "@/components/ImageGallery";
import { AssetImage } from "@/components/AssetImage";

export type TocItem = { id: string; label: string };

export const projectToc: Record<string, TocItem[]> = {
  "bai-1": [
    { id: "muc-tieu", label: "Mục tiêu thực hành" },
    { id: "quy-trinh", label: "12 bước và minh chứng" },
    { id: "ket-qua", label: "Kết quả đạt được" },
  ],
  "bai-2": [
    { id: "thong-tin", label: "Thông tin báo cáo" },
    { id: "mo-dau", label: "Mở đầu" },
    { id: "tong-quan", label: "Tổng quan nghiên cứu" },
    { id: "viet-nam", label: "Bối cảnh Việt Nam" },
    { id: "danh-gia", label: "Đánh giá nguồn" },
    { id: "bang", label: "Bảng đánh giá nguồn" },
    { id: "tham-khao", label: "Tài liệu tham khảo" },
  ],
  "bai-3": [
    { id: "tac-vu-1", label: "Tác vụ 1 · Tóm tắt" },
    { id: "tac-vu-2", label: "Tác vụ 2 · CAPM" },
    { id: "tac-vu-3", label: "Tác vụ 3 · Câu hỏi ôn tập" },
    { id: "so-sanh", label: "Bảng so sánh" },
    { id: "phan-tich", label: "Phân tích hiệu quả" },
    { id: "nguyen-tac", label: "C.L.A.R.O & bài học" },
  ],
  "bai-4": [
    { id: "gioi-thieu", label: "Giới thiệu dự án" },
    { id: "cong-cu", label: "Công cụ hợp tác" },
    { id: "noi-dung", label: "Nội dung thực hiện" },
    { id: "ket-qua", label: "Kết quả đạt được" },
    { id: "hieu-qua", label: "Hiệu quả công cụ" },
    { id: "bai-hoc", label: "Khó khăn & bài học" },
    { id: "ket-luan", label: "Kết luận" },
  ],
  "bai-5": [
    { id: "du-an", label: "Giới thiệu dự án" },
    { id: "cong-cu", label: "Công cụ AI sử dụng" },
    { id: "quy-trinh", label: "Quá trình sáng tạo" },
    { id: "so-sanh", label: "Bảng so sánh" },
    { id: "vai-tro", label: "Vai trò của AI" },
    { id: "ket-luan", label: "Kết luận" },
  ],
  "bai-6": [
    { id: "quan-diem", label: "Quan điểm của ĐHQGHN" },
    { id: "trai-nghiem", label: "Trải nghiệm học tập" },
    { id: "dao-duc", label: "Lưu ý đạo đức" },
    { id: "quy-tac", label: "7 quy tắc cá nhân" },
    { id: "infographic", label: "Infographic & tổng kết" },
  ],
};

type EvidenceImage = { src: string; alt: string; caption?: string };

function EvidenceSet({ task, items, columns = 1 }: { task: 1 | 3 | 4 | 5; items: { index: number; caption: string }[]; columns?: 1 | 2 | 3 }) {
  const images: EvidenceImage[] = items.map(({ index, caption }) => ({
    src: `/assets/bai-${task}/minh-chung-${String(index).padStart(2, "0")}.webp`,
    alt: caption,
    caption,
  }));
  return <ImageGallery images={images} columns={columns} />;
}

function DocumentStep({ number, title, children, evidence }: { number: string; title: string; children: ReactNode; evidence?: ReactNode }) {
  return (
    <article className="document-step">
      <header>
        <span>{number}</span>
        <h3>{title}</h3>
      </header>
      <div className="document-step__content">{children}</div>
      {evidence && <div className="document-step__evidence">{evidence}</div>}
    </article>
  );
}

function PromptExample({ level, children, evidence }: { level: "Cơ bản" | "Cải tiến" | "Nâng cao"; children: ReactNode; evidence: ReactNode }) {
  return (
    <div className="prompt-example">
      <PromptCard level={level}>{children}</PromptCard>
      <div className="prompt-example__evidence">{evidence}</div>
    </div>
  );
}

function B1Content() {
  return (
    <>
      <Section id="muc-tieu" eyebrow="Bài thực hành 01" title="Thao tác cơ bản với tệp tin và thư mục">
        <Lead>
          Bài thực hành được thực hiện trên macOS bằng Finder và TextEdit, gồm đầy đủ thao tác tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp.
        </Lead>
        <Callout title="Lưu ý về hệ điều hành" tone="cyan">
          <p>Trên macOS, thao tác di chuyển tệp dùng <strong>Option + Command + V</strong>; xóa vào Thùng rác dùng <strong>Command + Delete</strong>; xóa vĩnh viễn dùng <strong>Option + Command + Delete</strong>.</p>
        </Callout>
      </Section>

      <Section id="quy-trinh" eyebrow="Nội dung báo cáo" title="Quy trình 12 bước kèm minh chứng">
        <div className="document-flow">
          <DocumentStep
            number="01"
            title="Mở Finder"
            evidence={<EvidenceSet task={1} items={[{ index: 2, caption: "Mở Finder từ biểu tượng mặt cười màu xanh dương trên Dock." }]} />}
          >
            <p>Nhấp vào biểu tượng mặt cười màu xanh dương ở góc dưới cùng bên trái thanh Dock.</p>
            <ul><li>Phím tắt: Command (⌘) + N khi đang ở màn hình Desktop.</li></ul>
          </DocumentStep>

          <DocumentStep
            number="02"
            title="Truy cập thư mục Documents"
            evidence={<EvidenceSet task={1} items={[{ index: 1, caption: "Truy cập Documents ở Sidebar của Finder." }]} />}
          >
            <p>Ở cột bên trái (Sidebar), nhấp vào Documents (Tài liệu). Đây là nơi an toàn nhất để thực hành thay vì can thiệp vào ổ đĩa hệ thống.</p>
          </DocumentStep>

          <DocumentStep
            number="03"
            title="Tạo thư mục mới"
            evidence={<EvidenceSet task={1} items={[{ index: 3, caption: "Tạo thư mục ThucHanh_NguyenDinhKhoiNguyen." }]} />}
          >
            <p>Nhấp chuột phải vào khoảng trống → chọn New Folder. Đặt tên là <code>ThucHanh_NguyenDinhKhoiNguyen</code> rồi nhấn Return (Enter).</p>
            <ul><li>Phím tắt: Shift + Command (⌘) + N.</li></ul>
          </DocumentStep>

          <DocumentStep
            number="04"
            title="Vào thư mục vừa tạo"
            evidence={<EvidenceSet task={1} items={[{ index: 4, caption: "Mở thư mục thực hành vừa tạo." }]} />}
          >
            <p>Nhấp đúp chuột vào thư mục <code>ThucHanh_NguyenDinhKhoiNguyen</code>.</p>
          </DocumentStep>

          <DocumentStep
            number="05"
            title="Tạo tệp tin văn bản"
            evidence={<EvidenceSet task={1} columns={2} items={[
              { index: 5, caption: "Lưu tệp GhiChu.txt từ TextEdit vào đúng thư mục thực hành." },
              { index: 6, caption: "Tệp GhiChu.txt xuất hiện trong thư mục thực hành." },
            ]} />}
          >
            <p>macOS không có menu chuột phải “New Text Document” như Windows. Cách thực hiện:</p>
            <ol>
              <li>Mở ứng dụng TextEdit.</li>
              <li>Chọn Format → Make Plain Text để chuyển sang định dạng .txt.</li>
              <li>Nhấn Command (⌘) + S và lưu tên <code>GhiChu.txt</code> vào thư mục thực hành.</li>
            </ol>
          </DocumentStep>

          <DocumentStep number="06" title="Đổi tên tệp tin">
            <p>Nhấp vào tệp <code>GhiChu.txt</code>, nhấn Return (Enter), đổi tên thành <code>GhiChuQuanTrong.txt</code> rồi nhấn Return lần nữa.</p>
            <p><strong>Lưu ý:</strong> Trên Mac, nhấn Enter là để đổi tên, không phải để mở tệp.</p>
          </DocumentStep>

          <DocumentStep
            number="07"
            title="Tạo thư mục con"
            evidence={<EvidenceSet task={1} items={[{ index: 7, caption: "Tạo thư mục con TaiLieu trong thư mục thực hành." }]} />}
          >
            <p>Trong thư mục hiện tại, nhấp chuột phải → New Folder và đặt tên là <code>TaiLieu</code>.</p>
          </DocumentStep>

          <DocumentStep
            number="08"
            title="Sao chép tệp tin (Copy & Paste)"
            evidence={<EvidenceSet task={1} columns={2} items={[
              { index: 8, caption: "Sao chép GhiChuQuanTrong.txt bằng Command + C." },
              { index: 9, caption: "Dán bản sao vào thư mục TaiLieu bằng Command + V." },
            ]} />}
          >
            <ol type="a">
              <li>Nhấp chuột phải vào <code>GhiChuQuanTrong.txt</code> → Copy hoặc dùng Command (⌘) + C.</li>
              <li>Mở thư mục TaiLieu, nhấp chuột phải → Paste Item hoặc dùng Command (⌘) + V.</li>
            </ol>
          </DocumentStep>

          <DocumentStep
            number="09"
            title="Di chuyển tệp tin (Cut & Paste)"
            evidence={<EvidenceSet task={1} items={[{ index: 10, caption: "Tạo DiChuyen.txt và di chuyển tệp vào TaiLieu." }]} />}
          >
            <ol type="a">
              <li>Quay lại thư mục chính và tạo tệp <code>DiChuyen.txt</code>.</li>
              <li>Chọn tệp, nhấn Command (⌘) + C.</li>
              <li>Vào thư mục TaiLieu, nhấn Option + Command (⌘) + V.</li>
              <li>Tệp được di chuyển (Move) thay vì sao chép.</li>
            </ol>
          </DocumentStep>

          <DocumentStep
            number="10"
            title="Xóa tệp tin vào Thùng rác"
            evidence={<EvidenceSet task={1} items={[{ index: 11, caption: "Chọn Move to Trash để xóa GhiChuQuanTrong.txt." }]} />}
          >
            <p>Nhấp chuột phải vào <code>GhiChuQuanTrong.txt</code> → Move to Trash.</p>
            <ul><li>Phím tắt: Command (⌘) + Delete.</li></ul>
          </DocumentStep>

          <DocumentStep
            number="11"
            title="Xóa vĩnh viễn"
            evidence={<EvidenceSet task={1} items={[{ index: 12, caption: "Hộp thoại xác nhận xóa vĩnh viễn DiChuyen.txt." }]} />}
          >
            <p>Chọn <code>DiChuyen.txt</code>, nhấn Option + Command (⌘) + Delete. Khi thông báo xác nhận hiện ra, chọn Delete.</p>
          </DocumentStep>

          <DocumentStep
            number="12"
            title="Khôi phục từ Thùng rác"
            evidence={<EvidenceSet task={1} items={[{ index: 13, caption: "Khôi phục GhiChuQuanTrong.txt bằng lệnh Put Back." }]} />}
          >
            <p>Mở Trash ở cuối thanh Dock. Tìm <code>GhiChuQuanTrong.txt</code>, nhấp chuột phải và chọn Put Back để đưa tệp về vị trí ban đầu.</p>
          </DocumentStep>
        </div>
      </Section>

      <Section id="ket-qua" eyebrow="Kết quả" title="Kỹ năng đạt được sau bài thực hành">
        <div className="insight-grid">
          <Callout title="Tổ chức dữ liệu" tone="cyan"><p>Biết tạo cấu trúc thư mục rõ ràng và đặt tên tệp nhất quán.</p></Callout>
          <Callout title="Phân biệt thao tác" tone="lime"><p>Phân biệt đúng sao chép, di chuyển, xóa vào Trash và xóa vĩnh viễn.</p></Callout>
          <Callout title="An toàn dữ liệu" tone="gold"><p>Biết khôi phục tệp bằng Put Back và lựa chọn thao tác xóa phù hợp.</p></Callout>
        </div>
      </Section>
    </>
  );
}

function B2Content() {
  const rows = [
    ["DeYoung & Roland (2001)", "Học giả", "Journal", "Định lượng", "Trích dẫn rất cao, nhưng khá cũ", "Cao"],
    ["Stiroh (2004)", "Chuyên gia", "Journal", "Empirical", "Trích dẫn cao, cũ", "Cao"],
    ["Demirgüç-Kunt & Huizinga (2010)", "WB researcher", "Journal", "Định lượng", "Trích dẫn cao, tương đối mới", "Rất cao"],
    ["Sanya & Wolfe (2011)", "Researcher", "Journal", "Định lượng", "Trích dẫn khá, mới hơn", "Cao"],
    ["Lepetit et al. (2008)", "Học giả", "Journal", "Empirical", "Trích dẫn cao, hơi cũ", "Cao"],
    ["DeYoung & Rice (2004)", "Học giả", "Journal", "Phân tích", "Trích dẫn cao, cũ", "Trung bình"],
    ["IMF report (2021)", "IMF", "Report", "Dữ liệu", "Cập nhật cao", "Rất cao"],
    ["World Bank (2022)", "WB", "Report", "Dữ liệu", "Rất mới", "Rất cao"],
    ["SBV report", "NHNN", "Report", "Mô tả", "Cập nhật, có bias", "Cao"],
    ["McKinsey (2021)", "Tư vấn", "Report", "Phân tích", "Mới, ít học thuật", "Khá cao"],
  ];

  return (
    <>
      <Section id="thong-tin" eyebrow="Báo cáo học thuật" title="Thông tin bài thực hiện">
        <div className="report-cover-inline report-cover-inline--academic">
          <AssetImage src="/assets/bai-2/ueb-logo.webp" alt="Logo Trường Đại học Kinh tế - ĐHQGHN" />
          <div>
            <p><strong>Học phần:</strong> Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo</p>
            <p><strong>Sinh viên:</strong> Nguyễn Đình Khôi Nguyên</p>
            <p><strong>Mã sinh viên:</strong> 24052358</p>
            <p><strong>Mã học phần:</strong> VNU1001_E252046</p>
            <p><strong>Ngành học:</strong> Tài chính – Ngân hàng</p>
            <p><strong>Lớp:</strong> QH2024E TCNH 3</p>
            <p><strong>Thời gian:</strong> Hà Nội, tháng 3 năm 2026</p>
          </div>
        </div>
      </Section>

      <Section id="mo-dau" eyebrow="01" title="Tác động của nguồn thu ngoài lãi đến hiệu quả hoạt động của ngân hàng thương mại">
        <h3>1. Mở đầu</h3>
        <p>Trong bối cảnh cạnh tranh ngày càng gia tăng trong ngành ngân hàng, các ngân hàng thương mại không còn chỉ phụ thuộc vào thu nhập từ lãi mà ngày càng mở rộng sang các nguồn thu ngoài lãi như phí dịch vụ, bảo hiểm và đầu tư.</p>
        <p>Xu hướng đa dạng hóa thu nhập này được xem là một chiến lược quan trọng nhằm nâng cao hiệu quả hoạt động và giảm rủi ro. Tuy nhiên, tác động thực sự của nguồn thu ngoài lãi vẫn còn nhiều tranh luận. Vì vậy, bài viết này phân tích ảnh hưởng của non-interest income đến hiệu quả hoạt động của ngân hàng, đồng thời đánh giá độ tin cậy của các nguồn tài liệu liên quan.</p>
      </Section>

      <Section id="tong-quan" eyebrow="02" title="Tổng quan nghiên cứu">
        <p>Nhiều nghiên cứu cho rằng đa dạng hóa nguồn thu giúp ngân hàng ổn định hơn. DeYoung và Roland (2001) chỉ ra rằng thu nhập ngoài lãi có thể làm tăng lợi nhuận nhưng cũng đi kèm rủi ro biến động cao hơn.</p>
        <p>Stiroh (2004) cho rằng việc mở rộng sang các hoạt động phi truyền thống không phải lúc nào cũng cải thiện hiệu quả, do chi phí quản lý và rủi ro tăng lên. Điều này cho thấy tác động của non-interest income không hoàn toàn tích cực.</p>
        <p>Gần đây hơn, Demirgüç-Kunt và Huizinga (2010) cho thấy các ngân hàng có tỷ trọng thu nhập ngoài lãi cao có thể đạt lợi nhuận cao hơn, nhưng đồng thời đối mặt với biến động lớn hơn.</p>
        <p>Trong bối cảnh các nền kinh tế đang phát triển, Sanya và Wolfe (2011) cho rằng đa dạng hóa thu nhập có thể giúp giảm rủi ro tổng thể. Tuy nhiên, các nghiên cứu này có mức độ trích dẫn cao nhưng chủ yếu tập trung vào dữ liệu quốc tế, chưa phản ánh đầy đủ đặc thù của từng quốc gia.</p>
      </Section>

      <Section id="viet-nam" eyebrow="03" title="Phân tích trong bối cảnh Việt Nam">
        <p>Tại Việt Nam, các ngân hàng ngày càng chú trọng vào nguồn thu ngoài lãi, đặc biệt là dịch vụ bancassurance và phí giao dịch.</p>
        <p>Các ngân hàng lớn có xu hướng tận dụng tốt nguồn thu này nhờ mạng lưới khách hàng rộng và khả năng hợp tác với các công ty bảo hiểm. Tuy nhiên, không phải ngân hàng nào cũng đạt hiệu quả tương tự.</p>
        <p>Một vấn đề đáng chú ý là nguồn thu ngoài lãi có thể làm tăng biến động thu nhập, đặc biệt khi phụ thuộc nhiều vào thị trường. Ngoài ra, việc mở rộng sang các lĩnh vực mới cũng đòi hỏi ngân hàng phải có năng lực quản lý rủi ro tốt hơn.</p>
        <p>Do đó, mặc dù non-interest income mang lại cơ hội tăng trưởng, nhưng hiệu quả của nó phụ thuộc nhiều vào cách ngân hàng quản lý và triển khai chiến lược.</p>
      </Section>

      <Section id="danh-gia" eyebrow="04–05" title="Đánh giá nguồn và kết luận">
        <h3>4. Đánh giá nguồn</h3>
        <p>Các nguồn tài liệu sử dụng trong bài có sự khác biệt về độ tin cậy khi xét đến mức độ trích dẫn và tính cập nhật.</p>
        <p>Các nghiên cứu như Stiroh (2004) và DeYoung & Roland (2001) có số lượng trích dẫn rất cao, cho thấy ảnh hưởng lớn trong lĩnh vực. Tuy nhiên, do được công bố khá lâu, nên một số kết luận có thể không còn hoàn toàn phù hợp với bối cảnh hiện tại.</p>
        <p>Ngược lại, Demirgüç-Kunt & Huizinga (2010) và Sanya & Wolfe (2011) có dữ liệu mới hơn và phương pháp định lượng rõ ràng, giúp tăng độ tin cậy.</p>
        <p>Các báo cáo từ IMF và World Bank cung cấp dữ liệu cập nhật và góc nhìn thực tiễn, nhưng không đi sâu vào phương pháp nghiên cứu học thuật.</p>
        <p>Do đó, việc kết hợp các nguồn có trích dẫn cao và các nguồn có tính cập nhật cao là cần thiết để đảm bảo tính toàn diện của phân tích.</p>
        <h3>5. Kết luận</h3>
        <p>Nguồn thu ngoài lãi đóng vai trò ngày càng quan trọng trong hoạt động của ngân hàng thương mại. Nó có thể giúp tăng lợi nhuận và đa dạng hóa nguồn thu, nhưng cũng làm gia tăng rủi ro.</p>
        <p>Tại Việt Nam, hiệu quả của chiến lược này phụ thuộc vào quy mô ngân hàng, năng lực quản lý và điều kiện thị trường. Vì vậy, cần có cách tiếp cận thận trọng khi mở rộng nguồn thu ngoài lãi.</p>
      </Section>

      <Section id="bang" eyebrow="06" title="Bảng đánh giá 10 nguồn">
        <DataTable
          headers={["Nguồn", "Tác giả", "Xuất bản", "Phương pháp", "Trích dẫn & cập nhật", "Độ tin cậy"]}
          rows={rows}
          caption="Bảng tổng hợp nguồn thông tin và xếp hạng độ tin cậy"
        />
      </Section>

      <Section id="tham-khao" eyebrow="07" title="Tài liệu tham khảo">
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
      <Section id="tac-vu-1" eyebrow="Phần I · Tác vụ 1" title="Tóm tắt bài đọc / tài liệu học thuật">
        <Lead>Ví dụ chủ đề: “Quản trị rủi ro thanh khoản trong ngân hàng thương mại”.</Lead>
        <div className="prompt-sequence">
          <PromptExample
            level="Cơ bản"
            evidence={<EvidenceSet task={3} items={[{ index: 1, caption: "Kết quả thử nghiệm prompt cơ bản cho tác vụ tóm tắt." }]} />}
          >
            Hãy tóm tắt giúp tôi bài đọc về Quản trị rủi ro thanh khoản ngân hàng.
          </PromptExample>

          <PromptExample
            level="Cải tiến"
            evidence={<EvidenceSet task={3} columns={2} items={[
              { index: 2, caption: "Đầu ra prompt cải tiến – phần 1." },
              { index: 3, caption: "Đầu ra prompt cải tiến – phần 2." },
              { index: 4, caption: "Đầu ra prompt cải tiến – phần 3." },
            ]} />}
          >
            Tôi cần tóm tắt bài đọc về quản trị rủi ro thanh khoản ngân hàng. Hãy tóm tắt bài đọc này trong khoảng 300 từ, chia làm 3 phần chính: (1) Khái niệm & Nguyên nhân, (2) Các chỉ số đo lường chính, (3) Giải pháp quản trị. Dùng dạng gạch đầu dòng để dễ theo dõi.
          </PromptExample>

          <PromptExample
            level="Nâng cao"
            evidence={<EvidenceSet task={3} columns={2} items={[
              { index: 5, caption: "Prompt nâng cao với vai trò chuyên gia tài chính." },
              { index: 6, caption: "Kết quả phân tích theo chuỗi – phần 1." },
              { index: 7, caption: "Kết quả phân tích theo chuỗi – phần 2." },
              { index: 8, caption: "Kết quả tóm tắt và takeaway quan trọng." },
            ]} />}
          >
            <p>Bạn là một chuyên gia phân tích tài chính ngân hàng. Hãy giúp tôi tóm tắt tài liệu học thuật về “Quản trị rủi ro thanh khoản”. Hãy suy luận theo các bước:</p>
            <ol>
              <li>Trích xuất các luận điểm chính quan trọng nhất.</li>
              <li>Phân loại theo mô hình: Bối cảnh → Thách thức → Mẫu giải pháp.</li>
              <li>Tổng hợp thành bản tóm tắt súc tích, chuyên nghiệp.</li>
            </ol>
            <p>Mẫu đầu ra: Luận điểm chính: [Nội dung] · Takeaway quan trọng: [Nội dung].</p>
          </PromptExample>
        </div>
      </Section>

      <Section id="tac-vu-2" eyebrow="Phần I · Tác vụ 2" title="Giải thích một khái niệm phức tạp">
        <Lead>Ví dụ khái niệm: “Mô hình định giá tài sản vốn – CAPM”.</Lead>
        <div className="prompt-sequence">
          <PromptExample
            level="Cơ bản"
            evidence={<EvidenceSet task={3} columns={2} items={[
              { index: 9, caption: "Kết quả prompt cơ bản giải thích CAPM – phần 1." },
              { index: 10, caption: "Kết quả prompt cơ bản giải thích CAPM – phần 2." },
            ]} />}
          >
            Giải thích cho tôi về mô hình CAPM trong tài chính.
          </PromptExample>

          <PromptExample
            level="Cải tiến"
            evidence={<EvidenceSet task={3} columns={2} items={[
              { index: 11, caption: "Prompt cải tiến về CAPM." },
              { index: 12, caption: "Kết quả giải thích công thức, biến số và ví dụ CAPM." },
            ]} />}
          >
            Hãy giải thích mô hình CAPM trong tài chính cho một sinh viên năm nhất. Định nghĩa rõ công thức, các biến số chính (như Hệ số Beta, Lãi suất phi rủi ro), và ý nghĩa của nó trong đầu tư. Dùng ví dụ thực tế ngắn gọn để minh họa.
          </PromptExample>

          <PromptExample
            level="Nâng cao"
            evidence={<EvidenceSet task={3} columns={2} items={[
              { index: 13, caption: "Prompt nâng cao theo kỹ thuật Feynman." },
              { index: 14, caption: "Đầu ra có ẩn dụ, công thức, ví dụ số và câu hỏi kiểm tra." },
            ]} />}
          >
            Hãy đóng vai là một giảng viên xuất sắc môn Tài chính doanh nghiệp. Giải thích CAPM cho một người hoàn toàn chưa biết gì về tài chính theo kỹ thuật Feynman. Dùng một ẩn dụ trong đời sống để giải thích rủi ro và lợi nhuận; sau đó giới thiệu công thức, giải thích từng thành phần bằng từ ngữ bình dân, đưa ra ví dụ số đơn giản và hỏi lại một câu kiểm tra mức độ hiểu bài.
          </PromptExample>
        </div>
      </Section>

      <Section id="tac-vu-3" eyebrow="Phần I · Tác vụ 3" title="Tạo bộ câu hỏi ôn tập cho một chủ đề">
        <Lead>Ví dụ chủ đề: “Lý thuyết Tài chính Tiền tệ”.</Lead>
        <div className="prompt-sequence">
          <PromptExample
            level="Cơ bản"
            evidence={<EvidenceSet task={3} columns={2} items={[
              { index: 15, caption: "Kết quả prompt cơ bản tạo câu hỏi trắc nghiệm." },
              { index: 16, caption: "Bảng đáp án của bộ câu hỏi cơ bản." },
            ]} />}
          >
            Tạo cho tôi bộ câu hỏi trắc nghiệm ôn tập môn Tài chính tiền tệ.
          </PromptExample>

          <PromptExample
            level="Cải tiến"
            evidence={<EvidenceSet task={3} columns={2} items={[
              { index: 17, caption: "Prompt cải tiến về lạm phát và chính sách tiền tệ." },
              { index: 18, caption: "Bộ câu hỏi kèm đáp án và giải thích chi tiết." },
            ]} />}
          >
            Hãy tạo 5 câu hỏi trắc nghiệm ôn tập về chủ đề “Lạm phát và Chính sách tiền tệ”. Mỗi câu hỏi gồm 4 đáp án A, B, C, D và có sẵn đáp án đúng kèm giải thích chi tiết ở cuối.
          </PromptExample>

          <PromptExample
            level="Nâng cao"
            evidence={<EvidenceSet task={3} columns={2} items={[
              { index: 19, caption: "Prompt nâng cao theo thang tư duy Bloom." },
              { index: 20, caption: "Đầu ra gồm câu hỏi, phương án, đáp án và lập luận." },
            ]} />}
          >
            <p>Bạn là chuyên gia ra đề thi Đại học ngành Tài chính – Ngân hàng. Hãy tạo 5 câu hỏi về “Chính sách tiền tệ của Ngân hàng Trung ương” theo Bloom:</p>
            <ul>
              <li>2 câu Nhận biết (trắc nghiệm 4 lựa chọn).</li>
              <li>2 câu Thông hiểu (tình huống ngắn).</li>
              <li>1 câu Vận dụng cao (tình huống thực tế đòi hỏi phân tích).</li>
            </ul>
            <p>Trình bày: [Câu hỏi] · [Các phương án] · [Đáp án & lập luận chi tiết từng bước tại sao đúng/sai].</p>
          </PromptExample>
        </div>
      </Section>

      <Section id="so-sanh" eyebrow="Phần II" title="Bảng so sánh kết quả thử nghiệm">
        <DataTable
          headers={["Tiêu chí so sánh", "Prompt Cơ bản (v1)", "Prompt Cải tiến (v2)", "Prompt Nâng cao (v3)"]}
          rows={[
            ["Độ chính xác & trọng tâm", "Lệch / quá chung chung; văn bản dài, thiên về lý thuyết SGK, thiếu điểm nhấn.", "Trúng đích; bám sát yêu cầu, bố cục rõ ràng, dễ đọc.", "Xuất sắc; đúng vai trò chuyên gia, đi thẳng vào bản chất, phân tích sắc bén."],
            ["Tính ứng dụng học tập", "Thấp; cần đọc lại và lọc thông tin thủ công.", "Khá; có thể dùng để đọc nhanh hoặc học thuộc.", "Rất cao; hỗ trợ tư duy phản biện, có ẩn dụ dễ nhớ và tình huống tương tác."],
            ["Kiểm soát định dạng", "Không có, đầu ra là đoạn văn tự do.", "Có gạch đầu dòng và giới hạn độ dài.", "Chuẩn định dạng bảng / cấu trúc đa tầng / kèm giải thích phương án sai."],
            ["Hiện tượng “Ảo giác”", "Thi thoảng lan man sang chủ đề không liên quan.", "Thấp nhờ ràng buộc độ dài và phạm vi.", "Hầu như không có nhờ quy trình phân tích từng bước."],
          ]}
        />
      </Section>

      <Section id="phan-tich" eyebrow="Phần III" title="Tại sao prompt nâng cao cho kết quả vượt trội?">
        <div className="principle-list">
          <div><strong>01</strong><h3>Gán vai trò (Role Prompting)</h3><p>Khi gán vai “Giám đốc CRO” hay “Giảng viên giỏi”, không gian tìm kiếm của mô hình được thu hẹp, giúp AI dùng văn phong chuyên nghiệp và đúng ngữ cảnh hơn.</p></div>
          <div><strong>02</strong><h3>Suy luận theo chuỗi</h3><p>Yêu cầu thực hiện theo từng bước giúp duy trì logic xuyên suốt và hạn chế câu trả lời “đoán mò”.</p></div>
          <div><strong>03</strong><h3>Giới hạn & định dạng</h3><p>Giới hạn độ dài, yêu cầu bảng hoặc gạch đầu dòng giúp loại bỏ phần lan man và buộc AI chắt lọc dữ liệu có giá trị.</p></div>
          <div><strong>04</strong><h3>Phân tích phương án nhiễu</h3><p>Việc giải thích tại sao phương án sai giúp người học hiểu bản chất và nhận diện bẫy tư duy, thay vì chỉ ghi nhớ đáp án đúng.</p></div>
        </div>
      </Section>

      <Section id="nguyen-tac" eyebrow="Phần IV" title="Mô hình 5 chân kiềng C.L.A.R.O">
        <div className="claro-grid">
          <div><strong>C</strong><span>Context</span><p>Xác định ngữ cảnh, đối tượng và mục đích sử dụng.</p></div>
          <div><strong>L</strong><span>Lead Role</span><p>Gán vai trò cụ thể cho AI.</p></div>
          <div><strong>A</strong><span>Action Instruction</span><p>Dùng động từ hành động rõ ràng và đo lường được.</p></div>
          <div><strong>R</strong><span>Restraints & Format</span><p>Đặt ràng buộc về độ dài, tông giọng và cấu trúc.</p></div>
          <div><strong>O</strong><span>Output Examples</span><p>Đưa mẫu đầu ra để AI noi theo đúng định dạng.</p></div>
        </div>
        <h3>Mẹo thực tiễn khi sử dụng AI trong học tập</h3>
        <ul>
          <li>Không chấp nhận ngay kết quả đầu tiên; tiếp tục yêu cầu đào sâu hoặc bổ sung ví dụ thực tế tại Việt Nam.</li>
          <li>Áp dụng Reverse Prompting: yêu cầu AI hỏi ngược để kiểm tra mức độ hiểu bài.</li>
          <li>Luôn fact-check số liệu, công thức và thông tin lịch sử bằng giáo trình hoặc nguồn chính thống.</li>
        </ul>
      </Section>
    </>
  );
}

function B4Content() {
  const groupRows = [
    ["24052256", "Bùi Chúc Linh", "Tốt", "Tích cực tham gia, trách nhiệm cao, chủ động triển khai nội dung và hỗ trợ các thành viên.", "10", "10, 10, 10, 10", "10"],
    ["24052358", "Nguyễn Đình Khôi Nguyên", "Tốt", "Chủ động, có trách nhiệm, phối hợp tốt với các thành viên, hoàn thành công việc đúng hạn.", "10", "10, 10, 10, 10", "10"],
    ["25050044", "Lưu Tuấn Anh", "Tốt", "Tích cực tham gia, hợp tác tốt, có ý thức hoàn thành nhiệm vụ được giao.", "9,5", "10, 10, 10, 10", "9,9"],
    ["24052312", "Nguyễn Phúc Bảo Minh", "Tốt", "Tích cực tham gia, hợp tác tốt, có ý thức hoàn thành nhiệm vụ được giao.", "9,5", "10, 10, 9,5, 10", "9,8"],
    ["24050439", "Hoàng Mai Anh", "Tốt", "Vào muộn, mức độ đóng góp còn hạn chế, cần chủ động hơn trong việc hoàn thành nhiệm vụ.", "8", "8,5, 9, 8,5, 9", "8,6"],
  ];

  return (
    <>
      <Section id="gioi-thieu" eyebrow="Báo cáo cá nhân" title="Sử dụng công cụ hợp tác trực tuyến trong dự án nhóm">
        <div className="report-meta-band">
          <p><strong>Đề tài:</strong> Ứng dụng AI (Deep Learning) trong chẩn đoán hình ảnh y tế</p>
          <p><strong>Sinh viên:</strong> Nguyễn Đình Khôi Nguyên</p>
          <p><strong>Vai trò:</strong> Thành viên trình bày – Tìm kiếm nội dung</p>
        </div>
        <h3>I. Giới thiệu dự án</h3>
        <p>Trong học phần Công nghệ số ứng dụng, nhóm thực hiện đề tài “Ứng dụng Deep Learning trong chẩn đoán hình ảnh y tế”. Đề tài tập trung nghiên cứu cách trí tuệ nhân tạo, đặc biệt là Deep Learning, hỗ trợ bác sĩ phân tích ảnh X-quang, CT Scan, MRI và siêu âm nhằm phát hiện bệnh nhanh chóng và chính xác hơn.</p>
        <p>Trong dự án, tôi đảm nhận nhiệm vụ tìm kiếm tài liệu, tổng hợp nội dung, trình bày một phần của bài thuyết trình và phối hợp với các thành viên để hoàn thiện sản phẩm cuối cùng.</p>
        <p>Nhóm sử dụng ba công cụ chính: Google Docs, Google Drive và Google Meet.</p>
      </Section>

      <Section id="cong-cu" eyebrow="II" title="Các công cụ hợp tác trực tuyến đã sử dụng">
        <DocumentStep
          number="01"
          title="Google Docs – Soạn thảo tài liệu cộng tác"
          evidence={<EvidenceSet task={4} items={[{ index: 1, caption: "Tài liệu Google Docs thể hiện nội dung cộng tác và phân công công việc." }]} />}
        >
          <p>Nhóm sử dụng Google Docs để cùng biên soạn báo cáo về Ứng dụng Deep Learning trong chẩn đoán hình ảnh y tế. Mỗi thành viên được giao phụ trách một phần nội dung và có thể chỉnh sửa trực tiếp trên cùng một tài liệu.</p>
          <p>Tôi phụ trách tìm kiếm tài liệu, tổng hợp thông tin và bổ sung nội dung liên quan đến ứng dụng Deep Learning trong phân tích ảnh X-quang, CT Scan và MRI. Ngoài ra, tôi chỉnh sửa bố cục, kiểm tra lỗi chính tả và góp ý cho các thành viên khác.</p>
          <p>Google Docs giúp nhóm làm việc đồng thời, lưu tự động và theo dõi lịch sử chỉnh sửa của từng thành viên.</p>
        </DocumentStep>

        <DocumentStep number="02" title="Google Drive – Lưu trữ và chia sẻ tài liệu">
          <p>Google Drive được dùng để lưu trữ báo cáo, slide PowerPoint, hình ảnh minh họa, tài liệu tham khảo và video ghi hình cuộc họp.</p>
          <p>Tôi chịu trách nhiệm tải lên tài liệu đã tìm kiếm, sắp xếp theo thư mục và cập nhật phiên bản mới để các thành viên dễ truy cập. Việc lưu trữ tập trung giúp tránh thất lạc dữ liệu và bảo đảm mọi người làm việc trên phiên bản mới nhất.</p>
        </DocumentStep>

        <DocumentStep
          number="03"
          title="Google Meet – Họp nhóm trực tuyến"
          evidence={<EvidenceSet task={4} columns={2} items={[
            { index: 2, caption: "Buổi họp nhóm trực tuyến trên Google Meet." },
            { index: 3, caption: "Trình bày nội dung ứng dụng AI trong chẩn đoán hình ảnh." },
          ]} />}
        >
          <p>Nhóm tổ chức các buổi họp trên Google Meet để trao đổi tiến độ. Trong các buổi họp, tôi báo cáo phần nội dung đã nghiên cứu, trình bày kiến thức về Deep Learning trong chẩn đoán hình ảnh và tiếp nhận góp ý để chỉnh sửa.</p>
          <p>Google Meet giúp việc trao đổi thuận tiện, tiết kiệm thời gian và vẫn bảo đảm hiệu quả khi các thành viên không thể gặp trực tiếp.</p>
        </DocumentStep>
      </Section>

      <Section id="noi-dung" eyebrow="III" title="Nội dung tôi thực hiện">
        <div className="document-flow document-flow--compact">
          <DocumentStep number="01" title="Tìm kiếm tài liệu"><p>Tôi nghiên cứu các nguồn Google Scholar, WHO, Nature, PubMed và các bài báo khoa học về AI trong y học, sau đó chọn lọc nội dung phù hợp với chủ đề.</p></DocumentStep>
          <DocumentStep number="02" title="Tổng hợp nội dung"><p>Tôi tổng hợp khái niệm Deep Learning, cấu trúc mạng CNN, cách AI nhận diện hình ảnh y tế, quy trình xử lý ảnh, ưu điểm và hạn chế; sau đó biên soạn thành nội dung dễ hiểu để đưa vào slide.</p></DocumentStep>
          <DocumentStep number="03" title="Chuẩn bị hình ảnh minh họa"><p>Tôi tìm hình ảnh X-quang phổi, MRI não, CT Scan, mô hình CNN và sơ đồ quy trình AI để bài thuyết trình trực quan hơn.</p></DocumentStep>
          <DocumentStep number="04" title="Chuẩn bị phần trình bày"><p>Tôi xây dựng phần giới thiệu Deep Learning, vai trò trong chẩn đoán hình ảnh, các ứng dụng thực tế, ví dụ phát hiện ung thư phổi, viêm phổi và kết luận. Trước buổi thuyết trình, tôi luyện tập nhiều lần để bảo đảm thời gian và nội dung.</p></DocumentStep>
        </div>
      </Section>

      <Section id="ket-qua" eyebrow="IV" title="Kết quả đạt được và bảng đánh giá đóng góp">
        <ul>
          <li>Hoàn thành đầy đủ nhiệm vụ được giao.</li>
          <li>Đóng góp nội dung cho slide.</li>
          <li>Hoàn thành đúng tiến độ trên Trello.</li>
          <li>Tham gia đầy đủ các buổi họp.</li>
          <li>Chủ động trao đổi với các thành viên.</li>
        </ul>
        <p>Theo bảng đánh giá của nhóm, Nguyễn Đình Khôi Nguyên được đánh giá 10/10, thể hiện tinh thần trách nhiệm, chủ động phối hợp và hoàn thành công việc đúng thời hạn.</p>
        <DataTable
          headers={["Mã sinh viên", "Tên thành viên", "Chất lượng", "Tinh thần / Thái độ", "Tự đánh giá", "Nhóm đánh giá", "Điểm TB"]}
          rows={groupRows}
          caption="Bảng tự đánh giá mức độ đóng góp của các thành viên"
        />
        <EvidenceSet task={4} items={[{ index: 4, caption: "Ảnh chụp bảng đánh giá đóng góp từ tài liệu nhóm." }]} />
      </Section>

      <Section id="hieu-qua" eyebrow="V" title="Hiệu quả của các công cụ hợp tác">
        <div className="tool-grid">
          <article className="tool-card"><div className="tool-card__top"><strong>Google Docs</strong><span>Soạn thảo</span></div><div><ul><li>Chỉnh sửa đồng thời.</li><li>Theo dõi lịch sử thay đổi.</li><li>Tiết kiệm thời gian.</li></ul></div></article>
          <article className="tool-card"><div className="tool-card__top"><strong>Google Drive</strong><span>Lưu trữ</span></div><div><ul><li>Lưu trữ tập trung.</li><li>Chia sẻ nhanh.</li><li>Không lo mất dữ liệu.</li></ul></div></article>
          <article className="tool-card"><div className="tool-card__top"><strong>Google Meet</strong><span>Giao tiếp</span></div><div><ul><li>Họp thuận tiện.</li><li>Trao đổi trực tiếp.</li><li>Tiết kiệm thời gian di chuyển.</li></ul></div></article>
        </div>
        <p>Nhờ kết hợp các công cụ trên, nhóm phối hợp hiệu quả, hạn chế sai sót và hoàn thành dự án đúng kế hoạch.</p>
      </Section>

      <Section id="bai-hoc" eyebrow="VI–VII" title="Khó khăn và bài học kinh nghiệm">
        <h3>Khó khăn gặp phải</h3>
        <ul>
          <li>Nhiều tài liệu tiếng Anh nên mất thời gian chọn lọc và dịch.</li>
          <li>Lịch học của các thành viên khác nhau nên khó sắp xếp thời gian họp.</li>
          <li>Ban đầu bố cục slide chưa đồng nhất.</li>
          <li>Một số tài liệu trùng lặp nên cần chọn lọc kỹ.</li>
        </ul>
        <p>Nhóm khắc phục bằng cách trao đổi thường xuyên qua Google Meet.</p>
        <h3>Bài học kinh nghiệm</h3>
        <ul>
          <li>Lập kế hoạch ngay từ đầu.</li>
          <li>Chủ động trao đổi khi gặp khó khăn.</li>
          <li>Thường xuyên cập nhật tiến độ công việc.</li>
          <li>Tìm kiếm tài liệu từ nguồn đáng tin cậy.</li>
          <li>Chuẩn bị kỹ nội dung trước khi trình bày.</li>
        </ul>
      </Section>

      <Section id="ket-luan" eyebrow="VIII" title="Kết luận">
        <p>Thông qua dự án “Ứng dụng Deep Learning trong chẩn đoán hình ảnh y tế”, tôi đã hoàn thành tốt vai trò thành viên tìm kiếm nội dung và trình bày, đồng thời nâng cao kỹ năng làm việc nhóm, quản lý công việc và sử dụng Google Docs, Google Drive, Google Meet.</p>
        <p>Dự án không chỉ giúp tôi hiểu rõ hơn về ứng dụng trí tuệ nhân tạo trong y tế mà còn rèn luyện khả năng nghiên cứu, tổng hợp thông tin và thuyết trình. Đây là những kỹ năng hữu ích cho quá trình học tập và công việc sau này.</p>
      </Section>
    </>
  );
}

function B5Content() {
  return (
    <>
      <Section id="du-an" eyebrow="Báo cáo dự án" title="Ứng dụng AI trong giáo dục – Cơ hội và thách thức">
        <Lead>Sản phẩm cuối cùng: infographic, bài viết ngắn và video giới thiệu.</Lead>
        <h3>1. Giới thiệu dự án</h3>
        <p><strong>Mục tiêu:</strong> Tạo nội dung đa phương tiện giúp sinh viên và giảng viên hiểu rõ vai trò của AI trong giáo dục.</p>
        <ul>
          <li>Infographic: Canva AI + Adobe Firefly.</li>
          <li>Bài viết ngắn: ChatGPT, Google Gemini, Claude.</li>
          <li>Video ngắn: CapCut kết hợp hình ảnh từ DALL-E/Midjourney.</li>
        </ul>
      </Section>

      <Section id="cong-cu" eyebrow="02" title="Công cụ AI sử dụng và minh chứng">
        <h3>Công cụ AI tạo văn bản</h3>
        <DocumentStep
          number="01"
          title="ChatGPT – Viết khung bài blog"
          evidence={<EvidenceSet task={5} columns={2} items={[
            { index: 1, caption: "Prompt ChatGPT cho bài blog AI trong giáo dục." },
            { index: 2, caption: "Kết quả ChatGPT – phần đầu bài viết." },
            { index: 3, caption: "Kết quả ChatGPT – phần nội dung tiếp theo." },
            { index: 4, caption: "Phiên bản nội dung được mở rộng và hoàn thiện." },
          ]} />}
        >
          <p><strong>Nhiệm vụ:</strong> Viết khung bài blog “AI trong giáo dục: Người thầy mới hay công cụ hỗ trợ?”.</p>
          <p><strong>Prompt:</strong> “Viết bài blog 600 từ về ứng dụng AI trong giáo dục, nêu lợi ích và thách thức.”</p>
          <p><strong>Kết quả:</strong> Bài viết có cấu trúc rõ ràng, dễ đọc.</p>
        </DocumentStep>

        <DocumentStep
          number="02"
          title="Google Gemini – Tóm tắt ứng dụng AI"
          evidence={<EvidenceSet task={5} columns={2} items={[
            { index: 5, caption: "Prompt Gemini liệt kê các ứng dụng AI trong giáo dục." },
            { index: 6, caption: "Kết quả Gemini dạng danh sách súc tích." },
          ]} />}
        >
          <p><strong>Prompt:</strong> “Liệt kê 5 ứng dụng AI phổ biến trong giáo dục, mỗi ứng dụng mô tả ngắn gọn.”</p>
          <p><strong>Kết quả:</strong> Danh sách súc tích, dễ đưa vào infographic.</p>
        </DocumentStep>

        <DocumentStep number="03" title="Claude – Phân tích đạo đức">
          <p><strong>Prompt:</strong> “Phân tích các vấn đề đạo đức khi sử dụng AI trong giáo dục.”</p>
          <p><strong>Kết quả:</strong> Nội dung sâu sắc, nhấn mạnh quyền riêng tư và công bằng.</p>
        </DocumentStep>

        <h3>Công cụ AI tạo hình ảnh</h3>
        <div className="tool-grid">
          <article className="tool-card"><div className="tool-card__top"><strong>DALL-E</strong><span>Hình minh họa</span></div><div><p><strong>Prompt:</strong> “A student learning with an AI assistant on laptop, modern classroom, bright colors.”</p><p><strong>Kết quả:</strong> Hình ảnh hiện đại, phù hợp làm nền infographic.</p></div></article>
          <article className="tool-card"><div className="tool-card__top"><strong>Midjourney</strong><span>Poster tương lai</span></div><div><p><strong>Prompt:</strong> “Futuristic classroom with holographic AI teacher, cinematic style.”</p><p><strong>Kết quả:</strong> Hình ảnh nghệ thuật, dùng cho slide mở đầu.</p></div></article>
          <article className="tool-card"><div className="tool-card__top"><strong>Stable Diffusion</strong><span>Icon</span></div><div><p><strong>Prompt:</strong> “Flat design icons of AI robot, book, data visualization.”</p><p><strong>Kết quả:</strong> Bộ icon đơn giản, dễ tích hợp vào infographic.</p></div></article>
        </div>

        <h3>Công cụ AI hỗ trợ thiết kế</h3>
        <ul>
          <li><strong>Canva AI:</strong> Tạo infographic “5 ứng dụng AI trong lớp học”.</li>
          <li><strong>Adobe Firefly:</strong> Chỉnh sửa màu sắc poster, thêm hiệu ứng chữ “AI in Education”.</li>
        </ul>
      </Section>

      <Section id="quy-trinh" eyebrow="03" title="Quá trình sáng tạo và tích hợp">
        <div className="document-flow document-flow--compact">
          <DocumentStep number="01" title="Xây dựng nội dung"><p>Dùng ChatGPT viết khung bài blog, sau đó chỉnh sửa bằng Gemini để rút gọn thành bullet points cho infographic.</p></DocumentStep>
          <DocumentStep number="02" title="Tạo hình ảnh"><p>Tạo hình minh họa bằng DALL-E, Midjourney, Stable Diffusion và chọn lọc hình phù hợp.</p></DocumentStep>
          <DocumentStep number="03" title="Thiết kế infographic"><p>Đưa nội dung và hình ảnh vào Canva AI để tạo infographic.</p></DocumentStep>
          <DocumentStep number="04" title="Tinh chỉnh"><p>Dùng Adobe Firefly chỉnh sửa màu sắc và typography.</p></DocumentStep>
          <DocumentStep number="05" title="Dựng video"><p>Dùng CapCut kết hợp infographic, hình ảnh AI và giọng đọc.</p></DocumentStep>
        </div>
      </Section>

      <Section id="so-sanh" eyebrow="04" title="So sánh kết quả từ các công cụ AI">
        <DataTable
          headers={["Công cụ", "Điểm mạnh", "Hạn chế"]}
          rows={[
            ["ChatGPT", "Viết nội dung mạch lạc, dễ đọc", "Đôi khi chung chung, cần chỉnh sửa"],
            ["Gemini", "Tóm tắt nhanh, súc tích", "Ít sáng tạo, thiên về liệt kê"],
            ["Claude", "Phân tích sâu, logic", "Văn phong hơi học thuật"],
            ["DALL-E", "Hình ảnh sáng tạo, dễ dùng", "Chi tiết chưa sắc nét"],
            ["Midjourney", "Hình ảnh nghệ thuật, ấn tượng", "Khó kiểm soát chi tiết nhỏ"],
            ["Stable Diffusion", "Tạo icon đơn giản", "Cần chỉnh sửa thêm để đẹp"],
            ["Canva AI", "Thiết kế nhanh, trực quan", "Hạn chế tùy chỉnh nâng cao"],
            ["Adobe Firefly", "Hiệu ứng chữ, màu sắc mạnh", "Cần kết hợp với công cụ khác"],
          ]}
        />
      </Section>

      <Section id="vai-tro" eyebrow="05" title="Phân tích vai trò của AI trong sáng tạo">
        <div className="insight-grid insight-grid--two">
          <Callout title="Những phần AI làm tốt" tone="lime"><ul><li>Tăng tốc độ sản xuất nội dung.</li><li>Đa dạng ý tưởng và phong cách.</li><li>Hỗ trợ thiết kế trực quan, tiết kiệm thời gian.</li></ul></Callout>
          <Callout title="Những hạn chế" tone="red"><ul><li>Nội dung đôi khi thiếu chiều sâu, cần chỉnh sửa thủ công.</li><li>Hình ảnh có thể không chính xác với ngữ cảnh.</li><li>Công cụ thiết kế AI chưa thay thế hoàn toàn kỹ năng designer.</li></ul></Callout>
          <Callout title="AI thay đổi quy trình" tone="cyan"><ul><li>Rút ngắn giai đoạn lên ý tưởng.</li><li>Cho phép thử nghiệm nhiều phong cách nhanh chóng.</li><li>Tạo quy trình “AI hỗ trợ – con người tinh chỉnh”.</li></ul></Callout>
          <Callout title="Vấn đề đạo đức" tone="gold"><ul><li>Quyền riêng tư dữ liệu học sinh.</li><li>Nguy cơ thiên vị thuật toán.</li><li>Cần minh bạch khi sử dụng AI trong giáo dục.</li></ul></Callout>
        </div>
      </Section>

      <Section id="ket-luan" eyebrow="06" title="Kết luận">
        <p>Dự án cho thấy AI là công cụ mạnh mẽ trong sáng tạo nội dung, nhưng không thể thay thế hoàn toàn tư duy và cảm nhận của con người. Sự kết hợp giữa AI và sáng tạo cá nhân mang lại sản phẩm vừa nhanh chóng vừa chất lượng.</p>
      </Section>
    </>
  );
}

function B6Content() {
  return (
    <>
      <Section id="quan-diem" eyebrow="01" title="Quan điểm của ĐHQGHN về việc sử dụng AI">
        <p>Dựa trên các phân tích từ tạp chí chuyên ngành và những hội thảo gần đây, Đại học Quốc gia Hà Nội đang nỗ lực thiết lập một khung quy định toàn diện liên quan đến AI trong giáo dục.</p>
        <ul>
          <li><strong>Khuyến khích công cụ hỗ trợ:</strong> AI được ủng hộ như trợ lý cho nghiên cứu, hệ thống hóa tài liệu, rèn luyện kỹ năng viết và tư duy phản biện.</li>
          <li><strong>Đề cao tính minh bạch:</strong> Người học phải công khai khi bài làm có sự hỗ trợ của AI.</li>
          <li><strong>Nghiêm cấm hành vi sai trái:</strong> Không dùng AI để đạo văn, làm hộ bài kiểm tra hoặc viết thay bài luận.</li>
          <li><strong>Định hướng phát triển:</strong> AI là công cụ tối ưu năng lực, không thay thế tư duy người học.</li>
          <li><strong>Quyền kiểm soát của giảng viên:</strong> Giảng viên có thể yêu cầu sinh viên giải trình cách sử dụng AI.</li>
        </ul>
      </Section>

      <Section id="trai-nghiem" eyebrow="02" title="Trải nghiệm học tập thực tế với sự hỗ trợ từ AI">
        <div className="case-study">
          <div><span>Nhiệm vụ</span><p>Hoàn thành bài luận khoảng 500 từ về “Ảnh hưởng của học tập chủ động trong giáo dục đại học”.</p></div>
          <div><span>Prompt</span><p>“Hãy xây dựng một bài luận 500 từ bằng tiếng Việt, trong đó phân tích những lợi ích và khó khăn của việc áp dụng học tập chủ động ở bậc đại học.”</p></div>
          <div><span>Kết quả xử lý</span><p>AI phác thảo khái niệm học tập chủ động, lợi ích về tư duy phản biện, hợp tác, ghi nhớ; cùng các khó khăn về chuẩn bị của giảng viên và thời gian.</p></div>
          <div><span>Quy trình biên tập</span><p>Bổ sung ví dụ lớp học tại Việt Nam, chỉnh văn phong học thuật, tối ưu độ dài câu và trích dẫn Bonwell & Eison (1991).</p></div>
        </div>
        <Callout title="Tuyên bố minh bạch" tone="cyan"><p>“Bài luận này có tham khảo gợi ý về cấu trúc và nội dung từ Microsoft Copilot. Các dẫn chứng, ví dụ thực tế và nguồn trích dẫn đã được người viết kiểm chứng và bổ sung để đảm bảo yêu cầu học thuật.”</p></Callout>
      </Section>

      <Section id="dao-duc" eyebrow="03" title="Những lưu ý về đạo đức khi sử dụng AI">
        <div className="insight-grid">
          <Callout title="Phân định ranh giới" tone="red"><p>AI gợi ý cấu trúc là hợp lệ; sao chép toàn bộ kết quả mà không biên tập là hành vi gian lận.</p></Callout>
          <Callout title="Sở hữu trí tuệ" tone="gold"><p>Mọi thông tin do AI tạo ra cần được thẩm định. Khi AI tổng hợp từ nguồn cụ thể, người học phải trích dẫn tài liệu gốc.</p></Callout>
          <Callout title="Hệ quả đối với kỹ năng" tone="lime"><p>Lạm dụng AI có thể bào mòn khả năng phân tích, viết lách và tư duy độc lập.</p></Callout>
        </div>
      </Section>

      <Section id="quy-tac" eyebrow="04" title="Quy tắc ứng xử cá nhân khi dùng AI">
        <ol className="rules-grid">
          <li><strong>Công khai</strong><span>Luôn minh bạch về sự hỗ trợ của AI.</span></li>
          <li><strong>Thẩm định</strong><span>Đối chiếu thông tin AI cung cấp với các nguồn uy tín.</span></li>
          <li><strong>Biên tập</strong><span>Không bao giờ nộp nguyên bản nội dung do AI tạo ra.</span></li>
          <li><strong>Trích dẫn</strong><span>Tuân thủ chuẩn Harvard khi trích dẫn tài liệu AI gợi ý.</span></li>
          <li><strong>Giới hạn</strong><span>Sử dụng AI làm công cụ bổ trợ, không hoàn thành thay toàn bộ nhiệm vụ.</span></li>
          <li><strong>Tự phát triển</strong><span>Ưu tiên học hỏi từ AI để cải thiện năng lực tự viết.</span></li>
          <li><strong>Đạo đức</strong><span>Không dùng AI để thực hiện hành vi gian lận.</span></li>
        </ol>
      </Section>

      <Section id="infographic" eyebrow="05" title="Infographic và tổng kết">
        <figure className="infographic-frame">
          <AssetImage src="/assets/bai-6/infographic-ai-co-trach-nhiem.webp" alt="Infographic Sử dụng AI có trách nhiệm trong học thuật" loading="lazy" />
          <figcaption>Infographic “Sử dụng AI có trách nhiệm trong học thuật”.</figcaption>
        </figure>
        <h3>5. Tổng kết</h3>
        <p>AI là công cụ hỗ trợ đầy tiềm năng nếu được vận dụng đúng cách. Tuân thủ chính sách của nhà trường và các nguyên tắc cá nhân về tính minh bạch, kiểm chứng là chìa khóa để sinh viên vừa đảm bảo liêm chính học thuật, vừa nâng cao hiệu quả nghiên cứu.</p>
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
