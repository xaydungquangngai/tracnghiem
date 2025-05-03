const questions = [
  {
    question: 'Theo quy định của pháp luật xây dựng Việt Nam, công trình xây dựng được phân thành mấy cấp?',
    options: [
      'a. 04 cấp (Cấp I, cấp II, cấp III, cấp IV).',
      'b. 05 cấp (Cấp đặc biệt, cấp I, cấp II, cấp III, cấp IV) trừ các trường hợp khác được quy định trong quy chuẩn kỹ thuật hoặc quy định của pháp luật khác liên quan',
      'c. 06 cấp (Cấp đặc biệt, cấp I, cấp II, cấp III, cấp IV, cấp V) trừ các trường hợp khác theo quy định của pháp luật khác liên quan.',
      'd. 07 cấp (Cấp đặc biệt, cấp I, cấp II, cấp III, cấp IV, cấp V, công trình tạm)',
    ],
    correct: 1
  },
  {
    question: 'Theo quy định của pháp luật xây dựng Việt Nam, nhóm các công trình nào sau đây thuộc hệ thống công trình hạ tầng xã hội?',
    options: [
      'a. Công trình cấp nước, thu gom và xử lý nước thảy.',
      'b. Khu công nghệ cao, khu chế xuất, khu công nghiệp.',
      'c. Trường học, bệnh viện, công viên, dịch vụ công cộng.',
      'd. Cả ba đáp án a, b,',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định của pháp luật xây dựng Việt Nam, giấy phép xây dựng là văn bản pháp lý do cơ quan nhà nước có thẩm quyền cấp cho đối tượng nào sau đây?',
    options: [
      'a. Chủ đầu tư.',
      'b. Nhà thầu thi công xây dựng.',
      'c. Nhà thầu tư vấn.',
      'd. Cả ba đáp án a, b,',
    ],
    correct: 0
  },
  {
    question: 'Cơ quan nào có trách nhiệm tổ chức lập quy hoạch xây dựng?',
    options: [
      'a. Bộ Xây dựng và Ủy ban nhân dân các cấp',
      'b. Ủy ban nhân dân các cấp',
      'c. Bộ Xây dựng và Chủ đầu tư dự án',
      'd. Ủy ban nhân dân các cấp và Chủ đầu tư dự án',
    ],
    correct: 0
  },
  {
    question: 'Loại nào dưới đây là Quy hoạch xây dựng?',
    options: [
      'a. Quy hoạch bảo quản, tu bổ, phục hồi di tích;',
      'b. Quy hoạch khu chức năng đặc thù;',
      'c. Quy hoạch đô thị;',
      'd. Quy hoạch chi tiết nhóm cảng biển, bến cảng, cầu cảng, bến phao, khu nước, vùng nước.',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định của pháp luật xây dựng Việt Nam, dự án xây dựng công trình rạp chiếu phim được phân loại là dự án đầu tư xây dựng nào?',
    options: [
      'a. Dự án đầu tư xây dựng công trình công cộng',
      'b. Dự án đầu tư xây dựng công trình dịch vụ',
      'c. Dự án đầu tư xây dựng có công năng phục vụ hỗn hợp',
      'd. Dự án đầu tư xây dựng công trình hạ tầng kỹ thuật',
    ],
    correct: 0
  },
  {
    question: 'Các bộ phận chi tiết kiến trúc nào của công trình được vượt quá chỉ giới đường đỏ theo quy định của pháp luật về xây dựng ở Việt Nam?',
    options: [
      'a. Các chi tiết kiến trúc của công trình do đồ án quy hoạch chi tiết, thiết kế đô thị quy định.',
      'b. Không một bộ phận, chi tiết kiến trúc nào của công trình được vượt quá chỉ giới đường đỏ.',
      'c. Có thể xây dựng các bộ phận, chi tiết kiến trúc như bậc thềm, vệt dắt xe, ram dốc, bậu cửa, ô văng, mái đua… vượt quá chỉ giới đường đỏ nhưng phải đảm bảo tuân thủ các quy định về phòng cháy chữa cháy và hoạt động của phương tiện chữa cháy.',
      'd. Có thể xây dựng các bộ phận, chi tiết kiến trúc vượt quá chỉ giới đường đỏ nhưng phải đảm bảo tính thống nhất về cảnh quan trên tuyến phố hoặc từng đoạn phố',
    ],
    correct: 1
  },
  {
    question: 'Theo pháp luật Việt Nam thì việc áp dụng tiêu chuẩn, quy chuẩn trong hoạt động xây dựng theo nguyên tắc nào?',
    options: [
      'a. Tiêu chuẩn được áp dụng trong hoạt động đầu tư xây dựng theo nguyên tắc bắt buộc theo quyết định đầu tư.',
      'b. Phù hợp với yêu cầu của quy chuẩn kinh tế kỹ thuật và quy định của pháp luật về đầu tư xây dựng.',
      'c. Tiêu chuẩn được áp dụng trong hoạt động đầu tư xây dựng theo nguyên tắc tự nguyện, phải được người quyết định đầu tư xem xét, chấp thuận khi quyết định đầu tư.',
      'd. Tiêu chuẩn được áp dụng trong hoạt động đầu tư xây dựng đáp ứng yêu cầu của nhà thầu thi công xây dựng.',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định của pháp luật xây dựng Việt Nam, quy hoạch xây dựng gồm có mấy loại?',
    options: [
      'a. 2 loại: Quy hoạch xây dựng đô thị; quy hoạch nông thôn.',
      'b. 3 loại: Quy hoạch vùng; quy hoạch đô thị; quy hoạch nông thôn.',
      'c. 3 loại: Quy hoạch xây dựng vùng liên huyện, vùng huyện và khu chức năng; quy hoạch đô thị; quy hoạch nông thôn.',
      'd. 4 loại: Quy hoạch chung xây dựng đô thị; quy hoạch phân khu xây dựng đô thị; quy hoạch chi tiết xây dựng đô thị; quy hoạch nông thôn.',
    ],
    correct: 2
  },
  {
    question: 'Khái niệm đầy đủ về chỉ giới đường đỏ trong xây dựng là gì?',
    options: [
      'a. Là đường ranh giới được xác định trên bản đồ quy hoạch vùng và địa hình để phân định ranh giới giữa phần đất được xây dựng công trình và phần đất được dành cho đường giao thông hoặc công trình hạ tầng kỹ thuật, không gian công cộng khác.',
      'b. Là đường ranh giới được xác định trên thực địa để phân định ranh giới giữa phần đất không được xây dựng công trình và phần đất không được dành cho đường giao thông hoặc công trình hạ tầng kỹ thuật, không gian công cộng khác.',
      'c. Là đường xác định trên bản đồ quy hoạch và thực địa để phân định ranh giới giữa phần đất được xây dựng công trình và phần đất được dành cho đường giao thông hoặc công trình hạ tầng kỹ thuật.',
      'd. Là đường ranh giới được xác định trên bản đồ quy hoạch và thực địa để phân định ranh giới giữa phần đất được xây dựng công trình và phần đất được dành cho đường giao thông hoặc công trình hạ tầng kỹ thuật, không gian công cộng khác.',
    ],
    correct: 3
  },
  {
    question: 'Để được cấp chứng chỉ hành nghề hoạt động xây dựng, cá nhân phải đáp ứng được điều kiện gì?',
    options: [
      'a. Có trình độ chuyên môn phù hợp với nội dung đề nghị cấp chứng chỉ hành nghề',
      'b. Có thời gian và kinh nghiệm tham gia công việc phù hợp với nội dung đề nghị cấp chứng chỉ hành nghề',
      'c. Đã qua sát hạch kiểm tra kinh nghiệm nghề nghiệp và kiến thức pháp luật liên quan đến lĩnh vực hành nghề',
      'd. Tất cả các điều kiện trên',
    ],
    correct: 3
  },
  {
    question: 'Cơ quan nào có trách nhiệm tổ chức lập quy hoạch xây dựng?',
    options: [
      'a. Bộ Xây dựng',
      'b. Ủy ban nhân dân các cấp',
      'c. Chủ đầu tư dự án',
      'd. Bộ Xây dựng và Ủy ban nhân dân các cấp',
    ],
    correct: 3
  },
  {
    question: 'Loại nào dưới đây là Quy hoạch xây dựng?',
    options: [
      'a. Quy hoạch bảo quản, tu bổ, phục hồi di tích;',
      'b. Quy hoạch khu chức năng đặc thù;',
      'c. Quy hoạch hệ thống đô thị và nông thôn;',
      'd. Quy hoạch chi tiết nhóm cảng biển, bến cảng, cầu cảng, bến phao, khu nước, vùng nước.',
    ],
    correct: 1
  },
  {
    question: 'Công tác quy hoạch xây dựng bao gồm những công việc chủ yếu nào sau đây?',
    options: [
      'a. Lập, phê duyệt nhiệm vụ và lập, phê duyệt đồ án quy hoạch xây dựng',
      'b. Tổ chức triển khai, quản lý thực hiện theo quy hoạch được duyệt',
      'c. Lập, xác định chi phí cho công tác quy hoạch',
      'd. Tất cả các nội dung trên',
    ],
    correct: 3
  },
  {
    question: 'Cấp nào có thẩm quyền phê duyệt nhiệm vụ và đồ án quy hoạch xây dựng khu công nghệ cao?',
    options: [
      'a. Thủ tướng Chính phủ',
      'b. Bộ Xây dựng',
      'c. Hội đồng nhân dân các huyện trong vùng lập quy hoạch',
      'd. Ủy ban nhân dân cấp Tỉnh',
    ],
    correct: 0
  },
  {
    question: 'Cơ quan nào có thẩm quyền phê duyệt quy hoạch xây dựng vùng huyện ?',
    options: [
      'a. Ủy ban nhân dân tỉnh',
      'b. Ủy ban nhân dân huyện',
      'c. Hội đồng nhân dân tỉnh',
      'd. Bộ Xây dựng',
    ],
    correct: 0
  },
  {
    question: 'Ủy ban nhân dân cấp Tỉnh có thẩm quyền phê duyệt các quy hoạch nào dưới đây:',
    options: [
      'a. Toàn bộ các quy hoạch liệt kê dưới đây',
      'b. Quy hoạch xây dựng vùng liên huyện,',
      'c. Quy hoạch chung xây dựng khu chức năng, trừ các quy hoạch do Thủ tướng Chính phủ phê duyệt',
      'd. Quy hoạch xây dựng vùng huyện;',
    ],
    correct: 0
  },
  {
    question: 'Quy hoạch xây dựng vùng liên huyện, quy hoạch xây dựng vùng huyện được điều chỉnh khi thuộc trường hợp sau đây ?',
    options: [
      'a. Có sự điều chỉnh mục tiêu của chiến lược phát triển kinh tế - xã hội, chiến lược phát triển ngành, lĩnh vực làm thay đổi mục tiêu của quy hoạch;',
      'b. Có sự điều chỉnh của quy hoạch cao hơn làm thay đổi nội dung quy hoạch hoặc có sự mâu thuẫn với quy hoạch cùng cấp;',
      'c. Có sự thay đổi, điều chỉnh địa giới hành chính làm ảnh hưởng đến tính chất, quy mô không gian lãnh thổ của quy hoạch;',
      'd. Khi thuộc một trong các trường hợp ở trên',
    ],
    correct: 3
  },
  {
    question: 'Trình tự lập, phê duyệt quy hoạch xây dựng?',
    options: [
      'a. Lập, phê duyệt Nhiệm vụ quy hoạch xây dựng - Lập, phê duyệt đồ án quy hoạch xây dựng',
      'b. Lập, phê duyệt Nhiệm vụ quy hoạch xây dựng - Điều tra, khảo sát thực địa, thu thập bản đồ, tài liệu, số liệu về hiện trạng - Lập, phê duyệt đồ án quy hoạch xây dựng',
      'c. Điều tra, khảo sát thực địa, thu thập bản đồ, tài liệu, số liệu về hiện trạng - Lập, phê duyệt đồ án quy hoạch xây dựng',
      'd. Lập, phê duyệt Nhiệm vụ quy hoạch xây dựng - Điều tra, khảo sát thực địa, thu thập bản đồ, tài liệu, số liệu về hiện trạng - Lập đồ án quy hoạch xây dựng - Thẩm định, phê duyệt đồ án quy hoạch xây dựng',
    ],
    correct: 3
  },
  {
    question: 'Quy hoạch xây dựng vùng liên huyện được lập khi nào?',
    options: [
      'a. Theo đề xuất của Sở Xây dựng phù hợp với quy hoạch vùng, quy hoạch tỉnh',
      'b. Nhằm đáp ứng yêu cầu quản lý, định hướng phát triển, xác định vai trò của từng đơn vị hành chính cấp huyện, xã, thị trấn và các đô thị trong tổng thể phát triển chung của vùng liên huyện, đảm bảo phân bổ nguồn lực quốc gia, tỉnh có hiệu quả',
      'c. Đước ủy ban nhân dân cấp tỉnh quyết định',
      'd. Có đầy đủ các cơ sở trên',
    ],
    correct: 3
  },
  {
    question: 'Tỷ lệ bản vẽ hồ sơ đồ án quy hoạch xây dựng vùng liên huyện nào đúng?',
    options: [
      'a. 1/500.000',
      'b. 1/25.000 - 1/500.000',
      'c. 1/25.000 - 1/100.000',
      'd. 1/50.000 - 1/250.000',
    ],
    correct: 3
  },
  {
    question: 'Tỷ lệ diện tích chiếm đất của các công trình kiến trúc chính trên diện tích lô đất (không bao gồm diện tích chiếm đất của các công trình ngoài trời như tiểu cảnh trang trí, bể bơi, bãi (sân) đỗ xe, sân thể thao, công trình hạ tầng kỹ thuật) được xác định là khái niệm nào sau đây ?',
    options: [
      'a. Mật độ xây dựng thuần',
      'b. Mật độ xây dựng gộp',
      'c. Cả 2 đáp án trên là đúng',
      'd. Cả 2 đáp án trên là sai',
    ],
    correct: 0
  },
  {
    question: 'Yêu cầu về dự báo trong đồ án quy hoạch không bao gồm nội dung nào sau đây?',
    options: [
      'a. Dự báo phải đề cập đến các vấn đề về tai biến thiên nhiên, môi trường, biến đổi khí hậu và nước biển dâng;',
      'b. Quy hoạch phân khu, quy hoạch chi tiết phải tuân thủ và cụ thể hóa các dự báo của toàn đô thị;',
      'c. Dự báo về dân số, lao động, đất đai dựa trên cơ sở chuỗi các số liệu với thời gian tối thiểu của 2 năm gần nhất;',
      'd. Kết quả của dự báo phải đảm bảo phù hợp với khả năng dung nạp, đáp ứng của đất đai, hạ tầng xã hội, hạ tầng kỹ thuật và môi trường.',
    ],
    correct: 2
  },
  {
    question: 'Những cá nhân nào sau đây bắt buộc phải có chứng chỉ hành nghề trong hồ sơ năng lực thực hiện một đồ án quy hoạch xây dựng?',
    options: [
      'a. Chủ nhiệm đồ án và Chủ trì các bộ môn',
      'b. Chủ nhiệm đồ án',
      'c. Chủ trì phần kiến trúc',
      'd. Tất cả các thành viên tham gia thực hiện đồ án quy hoạch xây dựng',
    ],
    correct: 0
  },
  {
    question: 'Căn cứ để lập đồ án quy hoạch xây dựng ?',
    options: [
      'a. Luật, Nghị định, Thông tư hướng dẫn và các quy chuẩn',
      'b. Hệ thống quy hoạch quốc gia và các quy hoạch có liên quan đã được phê duyệt',
      'c. Nhiệm vụ quy hoạch được duyệt',
      'd. Tất cả các căn cứ trên',
    ],
    correct: 3
  },
  {
    question: 'Cơ quan nào sau đây có thẩm quyền quyết định điều chỉnh cục bộ quy hoạch?',
    options: [
      'a. Cơ quan tổ chức lập quy hoạch',
      'b. Cơ quan thẩm định quy hoạch',
      'c. Cơ quan tư vấn lập quy hoạch',
      'd. Cơ quan phê duyệt quy hoạch',
    ],
    correct: 3
  },
  {
    question: 'Những cá nhân nào sau đây bắt buộc phải có chứng chỉ hành nghề trong hồ sơ năng lực thực hiện hợp đồng thiết kế quy hoạch?',
    options: [
      'a. Chủ nhiệm dự án và Chủ trì các bộ môn',
      'b. Chủ trì phần kiến trúc',
      'c. Chủ trì phần kết cấu',
      'd. Tất cả các thành viên tham gia thực hiện dự án',
    ],
    correct: 0
  },
  {
    question: 'Nhiệm vụ thiết kế xây dựng không bao gồm nội dung nào sau đây ?',
    options: [
      'a. Các căn cứ để lập nhiệm vụ thiết kế xây dựng;',
      'b. Mục tiêu xây dựng công trình;',
      'c. Các yêu cầu về đáp ứng biện pháp thi công biện pháp an toàn và bảo vệ môi trước xây dựng;',
      'd. Địa điểm xây dựng công trình; Các yêu cầu về quy hoạch, cảnh quan và kiến trúc của công trình;',
    ],
    correct: 2
  },
  {
    question: 'Trong quá trình lập thiết kế xây dựng triển khai sau thiết kế cơ sở, chủ đầu tư được quyết định việc điều chỉnh thiết kế trong trường hợp nào sau đây ?',
    options: [
      'a. Đáp ứng hiệu quả và yêu cầu sử dụng khi thay đổi về mục đích, công năng công trình;',
      'b. Đáp ứng hiệu quả và yêu cầu sử dụng khi không làm thay đổi về mục đích, công năng, quy mô, các chỉ tiêu quy hoạch - kiến trúc tại quy hoạch chi tiết xây dựng;',
      'c. Đáp ứng hiệu quả và yêu cầu sử dụng khi thay đổi về các chỉ tiêu quy hoạch - kiến trúc tại quy hoạch chi tiết xây dựng;',
      'd. Cả đáp án a và c đúng.',
    ],
    correct: 1
  },
  {
    question: 'Theo Luật, các loại quy hoạch đô thị và nông thôn bao gồm các loại nào dưới đây?',
    options: [
      'a. Quy hoạch đô thị, quy hoạch nông thôn, quy hoạch khu chức năng, quy hoạch không gian ngầm, quy hoạch chuyên ngành hạ tầng kỹ thuật',
      'b. Quy hoạch đô thị và nông thôn; quy hoạch không gian tự nhiên',
      'c. Quy hoạch đô thị và nông thôn; quy hoạch cấp vùng; quy hoạch xây dựng ngành',
      'd. Quy hoạch không gian ngầm và quy hoạch hạ tầng đô thị',
    ],
    correct: 0
  },
  {
    question: 'Theo Luật Quy hoạch đô thị và nông thôn, các cấp độ quy hoạch đô thị và nông thôn bao gồm những cấp nào?',
    options: [
      'a. Quy hoạch chung, quy hoạch phân khu, quy hoạch chi tiết',
      'b. Quy hoạch cấp vùng, quy hoạch phân khu, quy hoạch chi tiết',
      'c. Quy hoạch vùng, quy hoạch đô thị, quy hoạch chi tiết',
      'd. Quy hoạch tổng thể, quy hoạch phân khu, quy hoạch không gian ngầm',
    ],
    correct: 0
  },
];
