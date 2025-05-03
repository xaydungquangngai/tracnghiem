const questions = [
  {
    question: 'Những người nào sau đây tham gia và ký biên bản nghiệm thu công việc xây dựng',
    options: [
      'a. Người giám sát thi công xây dựng công trình và người phụ trách kỹ thuật thi công trực tiếp của nhà thầu thi công xây dựng công trình',
      'b. Người của Chủ đầu tư/Ban quản lý dự án, người giám sát thi công xây dựng công trình và người phụ trách kỹ thuật thi công trực tiếp của nhà thầu thi công xây dựng công trình',
      'c. Người của Chủ đầu tư/Ban quản lý dự án và người phụ trách kỹ thuật thi công trực tiếp của nhà thầu thi công xây dựng công trình',
      'd. Cả ba đáp án trên',
    ],
    correct: 0
  },
  {
    question: 'Ai là người có trách nhiệm tổ chức lập hồ sơ hoàn thành công trình xây dựng?',
    options: [
      'a. Nhà thầu thi công xây dựng',
      'b. Chủ đầu tư',
      'c. Nhà thầu giám sát thi công xây dựng',
      'd. Cơ quan quản lý nhà nước có thẩm quyền',
    ],
    correct: 1
  },
  {
    question: 'Thời hạn bảo trì công trình được tính như thế nào?',
    options: [
      'a. Sau khi kết thúc thời hạn bảo hành cho đến khi hết niên hạn sử dụng công trình.',
      'b. Từ ngày nghiệm thu đưa công trình xây dựng vào sử dụng cho đến khi hết niên hạn sử dụng công trình.',
      'c. Từ ngày chủ đầu tư bàn giao công trình cho chủ sở hữu hoặc người quản lý sử dụng công trình.',
      'd. Từ ngày có văn bản chấp thuận kết quả nghiệm thu của chủ đầu tư',
    ],
    correct: 1
  },
  {
    question: 'Việc áp dụng quy chuẩn kỹ thuật trong hoạt động đầu tư xây dựng là:',
    options: [
      'a. Bắt buộc',
      'b. Khuyến khích',
      'c. Tự nguyện',
      'd. Thỏa thuận',
    ],
    correct: 0
  },
  {
    question: 'Quy định áp dụng Tiêu chuẩn kỹ thuật trong hoạt động đầu tư xây dựng như thế nào?',
    options: [
      'a. Bắt buộc đối với các tiêu chuẩn được viện dẫn trong quy chuẩn kỹ thuật hoặc văn bản quy phạm pháp luật khác có liên quan',
      'b. Khuyến khích áp dụng',
      'c. Theo nguyên tắc tự nguyện',
      'd. Đáp án a và c',
    ],
    correct: 3
  },
  {
    question: 'Những loại tiêu chuẩn nào sau đây bắt buộc áp dụng?',
    options: [
      'a. TCVN',
      'b. Tiêu chuẩn nước ngoài',
      'c. Các tiêu chuẩn nằm trong danh mục tiêu chuẩn đã được người quyết định đầu tư phê duyệt',
      'd. Danh mục tiêu chuẩn do tư vấn thiết kế đệ trình',
    ],
    correct: 2
  },
  {
    question: 'Nhà thầu thi công phải trình chủ đầu tư chấp thuận những tài liệu nào sau đây?',
    options: [
      'a. Kế hoạch tổ chức thí nghiệm và kiểm định chất lượng, quan trắc, đo đạc các thông số kỹ thuật của công trình theo yêu cầu thiết kế và chỉ dẫn kỹ thuật;',
      'b. Biện pháp kiểm tra, kiểm soát chất lượng vật liệu, sản phẩm, cấu kiện, thiết bị được sử dụng cho công trình; thiết kế biện pháp thi công, trong đó quy định cụ thể các biện pháp, bảo đảm an toàn cho người, máy, thiết bị và công trình;',
      'c. Kế hoạch kiểm tra, nghiệm thu công việc xây dựng, nghiệm thu giai đoạn thi công xây dựng hoặc bộ phận (hạng mục. công trình xây dựng, nghiệm thu hoàn thành hạng mục công trình, công trình xây dựng;',
      'd. Toàn bộ các tài liệu nêu trên',
    ],
    correct: 3
  },
  {
    question: 'Việc giám sát thi công xây dựng công trình phải đảm bảo các yêu cầu nào sau đây ?',
    options: [
      'a. Thực hiện trong suốt quá trình thi công từ khi khởi công xây dựng, trong thời gian thực hiện cho đến khi hoàn thành và nghiệm thu công việc, công trình xây dựng;',
      'b. Theo thiết kế xây dựng được phê duyệt, tiêu chuẩn áp dụng, quy chuẩn kỹ thuật, quy định về quản lý, sử dụng vật liệu xây dựng, chỉ dẫn kỹ thuật và hợp đồng xây dựng;',
      'c. Trung thực khách quan, không vụ lợi;',
      'd. Tất cả các yêu cầu trên',
    ],
    correct: 3
  },
  {
    question: 'Nhà thầu giám sát thi công xây dựng có trách nhiệm gì sau đây?',
    options: [
      'a. Thực hiện giám sát theo hợp đồng được ký kết',
      'b. Từ chối nghiệm thu khi công trình không đạt yêu cầu về chất lượng',
      'c. Giám sát việc thực hiện các quy định về an toàn, bảo vệ môi trường',
      'd. Tất cả các điều trên',
    ],
    correct: 3
  },
  {
    question: 'Tổ chức giám sát thi công xây dựng phải độc lập với các nhà thầu thi công xây dựng công trình trong các trường hợp nào sau đây ?',
    options: [
      'a. Các công trình đầu tư bằng nguồn vốn đầu tư công và nguồn vốn nhà nước ngoài đầu tư công',
      'b. Các công trình đầu tư bằng nguồn vốn khác',
      'c. Không trường hợp nào cần',
      'd. Tất cả các trường hợp trên',
    ],
    correct: 0
  },
  {
    question: 'Bản vẽ hoàn công là bản vẽ nào sau đây?',
    options: [
      'a. Là bản vẽ công trình xây dựng hoàn thành, trong đó thể hiện vị trí, kích thước, vật liệu và thiết bị được sử dụng thực tế',
      'b. Là bản vẽ của thiết kế kỹ thuật',
      'c. Là bản vẽ của thiết kế bản vẽ thi công',
      'd. Tất cả các đáp án trên',
    ],
    correct: 0
  },
  {
    question: 'Thẩm quyền kiểm tra biện pháp thi công xây dựng của nhà thầu thi công?',
    options: [
      'a. Tư vấn thiết kế',
      'b. Người giám sát thi công xây dựng của chủ đầu tư',
      'c. Đơn vị kiểm định độc lập',
      'd. Cả ba đáp án trên',
    ],
    correct: 1
  },
  {
    question: 'Nhật ký thi công xây dựng công trình do ai lập?',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu thi công xây dựng',
      'c. Đơn vị tư vấn giám sát lập',
      'd. Cả ba đáp án trên',
    ],
    correct: 1
  },
  {
    question: 'Ai là người có thẩm quyền phê duyệt thiết kế biện pháp thi công?',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu thi công xây dựng',
      'c. Người quyết định đầu tư',
      'd. Tư vấn giám sát',
    ],
    correct: 0
  },
  {
    question: 'Nội dung nào sau đây không cần phải đáp ứng khi khởi công công trình?',
    options: [
      'a. Có thiết kế bản vẽ thi công của hạng mục công trình, công trình khởi công đã được phê duyệt',
      'b. Chủ đầu tư đã ký kết hợp đồng với nhà thầu thực hiện các hoạt động xây dựng liên quan đến công trình được khởi công theo quy định của phập luật',
      'c. Có hợp đồng với đơn vị cung cấp vật liệu chính của công trình.',
      'd. Có biện pháp bảo đảm an toàn, bảo vệ môi trường trong quá trình thi công xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Nội dung nào sau đây phải đáp ứng khi khởi công công trình?',
    options: [
      'a. Có mặt bằng xây dựng để bàn giao toàn bộ hoặc từng phần theo tiến độ xây dựng;',
      'b. Có thiết kế bản vẽ thi công của hạng mục công trình, công trình khởi công đã được phê duyệt;',
      'c. Chủ đầu tư đã ký kết hợp đồng với nhà thầu thực hiện các hoạt động xây dựng liên quan đến công trình được khởi công theo quy định của phập luật;',
      'd. Có tất cả các nội dung ở trên',
    ],
    correct: 3
  },
  {
    question: 'Đơn vị nào có trách nhiệm bảo đảm an toàn cho con người, công trình xây dựng, tài sản, thiết bị, phương tiện trong quá trình thi công xây dựng công trình, phòng, chống cháy, nổ và bảo vệ môi trường trong giai đoạn thi công?',
    options: [
      'a. Tư vấn giám sát.',
      'b. Nhà thầu thi công xây dựng',
      'c. Tư vấn Quản lý dự án.',
      'd. Đơn vị cung cấp máy, thiết bị thi công.',
    ],
    correct: 1
  },
  {
    question: 'Nhà thầu thi công xây dựng có trách nhiệm xác định vùng nguy hiểm trong thi công xây dựng công trình và thực hiện những công tác nào sau đây?',
    options: [
      'a. Tổ chức lập, trình chủ đầu tư chấp thuận biện pháp bảo đảm an toàn cho con người, công trình xây dựng, tài sản, thiết bị, phương tiện trong vùng nguy hiểm trong thi công xây dựng công trình',
      'b. Rà soát biện pháp bảo đảm an toàn định kỳ, đột xuất để điều chỉnh cho phù hợp với thực tế thi công trên công trường',
      'c. Cả nội dung a và b',
      'd. Không phải các nội dung trên',
    ],
    correct: 2
  },
  {
    question: 'Nội dung nào sau đây thuộc về nghĩa vụ của nhà thầu giám sát thi công xây dựng công trình?',
    options: [
      'a. Nghiệm thu khối lượng thi công xây dựng, phù hợp với tiêu chuẩn áp dụng, quy chuẩn kỹ thuật và theo yêu cầu của tiến độ thi công;',
      'b. Nghiệm thu khối lượng bảo đảm chất lượng, phù hợp với tiêu chuẩn áp dụng, quy chuẩn kỹ thuật và theo yêu cầu của thiết kế công trình;',
      'c. Nghiệm thu giá trị thi công xây dựng, phù hợp với tiêu chuẩn áp dụng, quy chuẩn kỹ thuật và theo yêu cầu của thiết kế công trình;',
      'd. Nghiệm thu khối lượng theo đơn giá được duyệt, phù hợp với tiêu chuẩn áp dụng, quy chuẩn kỹ thuật và theo yêu cầu của thiết kế công trình;',
    ],
    correct: 1
  },
  {
    question: 'Đối với công tác an toàn và bảo vệ môi trường trên công trường xây dựng, người giám sát có trách nhiệm nào sau đây?',
    options: [
      'a. Lập biện pháp và tuân thủ các quy định về an toàn, bảo vệ môi trường.',
      'b. Giám sát việc thực hiện các quy định về an toàn, bảo vệ môi trường.',
      'c. Tạm dừng thi công và thông báo kịp thời cho chủ đầu tư để xử lý trong trường hợp phát hiện công trình có nguy cơ xảy ra mất an toàn.',
      'd. Đáp án b và',
    ],
    correct: 3
  },
  {
    question: 'Nội dung nào sau đây không thuộc nghĩa vụ của nhà thầu giám sát thi công xây dựng công trình?',
    options: [
      'a. Thực hiện giám sát theo đúng hợp đồng.',
      'b. Từ chối nghiệm thu khi công trình không đạt yêu cầu chất lượng.',
      'c. Từ chối nghiệm thu khi sản phẩm thiết kế không đạt yêu cầu về chất lượng.',
      'd. Đề xuất với chủ đầu tư những bất hợp lý về thiết kế xây dựng.',
    ],
    correct: 2
  },
  {
    question: 'Nội dung nào sau đây không thuộc quyền hạn của nhà thầu giám sát thi công xây dựng công trình?',
    options: [
      'a. Tham gia nghiệm thu, xác nhận công việc, công trình đã hoàn thành thi công xây dựng',
      'b. Tạm dừng thi công trong trường hợp phát hiện công trình có nguy cơ xảy ra mất an toàn hoặc nhà thầu thi công sai thiết kế và thông báo kịp thời cho chủ đầu tư để xử lý;',
      'c. Yêu cầu nhà thầu thi công xây dựng công trình thực hiện đúng thiết kế được phê duyệt và hợp đồng thi công xây dựng đã ký kết;',
      'd. Yêu cầu thanh toán giá trị khối lượng xây dựng hoàn thành theo đúng hợp đồng.',
    ],
    correct: 3
  },
];
