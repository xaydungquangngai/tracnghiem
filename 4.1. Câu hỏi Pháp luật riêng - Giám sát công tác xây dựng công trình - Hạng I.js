const questions = [
  {
    question: 'Cấp công trình cấp I của trạm bơm nước thô, nước sạch hoặc tăng áp (bao gồm cả bể chứa nước nếu có) được quy định có công suất như thế nào?',
    options: [
      'a. Lớn hơn hoặc bằng 30.000 m3/ngđ',
      'b. Lớn hơn hoặc bằng 40.000 m3/ngđ',
      'c. Lớn hơn hoặc bằng 50.000 m3/ngđ',
      'd. Lớn hơn hoặc bằng 60.000 m3/ngđ',
    ],
    correct: 1
  },
  {
    question: 'Đối với dự án đầu tư xây dựng tuyến ống cấp nước có đường kính trong 1000mm với tổng chiều dài tuyến ống là 950m, cấp công trình của tuyến ống cấp nước là cấp nào?',
    options: [
      'a. Cấp đặc biệt',
      'b. Cấp I',
      'c. Cấp II',
      'd. Cấp III',
    ],
    correct: 2
  },
  {
    question: 'Cấp công trình cấp I của nhà máy nước, công trình xử lý nước sạch (bao gồm cả công trình xử lý bùn cặn) được quy định có tổng công suất bao nhiêu m3/ngđ?',
    options: [
      'a. Lớn hơn hoặc bằng 10.000 m3/ngđ',
      'b. Lớn hơn hoặc bằng 20.000 m3/ngđ',
      'c. Lớn hơn hoặc bằng 30.000 m3/ngđ',
      'd. Lớn hơn hoặc bằng 50.000 m3/ngđ',
    ],
    correct: 2
  },
  {
    question: 'Cấp công trình cấp I của tuyến ống cấp nước (nước thô hoặc nước sạch có tổng chiều dài lớn hơn 1.000m) được quy định về đường kính trong của ống như thế nào?',
    options: [
      'a. Lớn hơn hoặc bằng 800 mm',
      'b. Lớn hơn hoặc bằng 1.000 mm',
      'c. Lớn hơn hoặc bằng 1.200 mm',
      'd. Lớn hơn hoặc bằng 1.500 mm',
    ],
    correct: 0
  },
  {
    question: 'Cấp công trình cấp I của trạm bơm nước mưa (bao gồm cả bể chứa nước nếu có) được quy định có tổng công suất bao nhiêu m3/s?',
    options: [
      'a. Lớn hơn hoặc bằng 20 m3/s',
      'b. Lớn hơn hoặc bằng 25 m3/s',
      'c. Lớn hơn hoặc bằng 30 m3/s',
      'd. Lớn hơn hoặc bằng 50 m3/s',
    ],
    correct: 1
  },
  {
    question: 'Đối với dự án đầu tư xây dựng tuyến cống thoát nước thải có đường kính trong 1000mm với tổng chiều dài tuyến cống là 900m, cấp công trình củatuyến cống thoát nước là cấp nào?',
    options: [
      'a. Cấp đặc biệt',
      'b. Cấp I',
      'c. Cấp II',
      'd. Cấp III',
    ],
    correct: 2
  },
  {
    question: 'Đối với dự án đầu tư xây dựng cơ sở xử lý chất thải rắn thông thường, có công suất xử lý từ 50 tấn/ngày đêm đến 200 tấn/ngày đêm thuộc loại công trình cấp nào?',
    options: [
      'a. Cấp đặc biệt',
      'b. Cấp I',
      'c. Cấp II',
      'd. Cấp III',
    ],
    correct: 2
  },
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
    question: 'Hoạt động đánh giá mức độ phù hợp của sản phẩm, hàng hóa, dịch vụ, quá trình, môi trường với tiêu chuẩn tương ứng được gọi là gì?',
    options: [
      'a. Thí nghiệm chuyên ngành xây dựng',
      'b. Đánh giá hợp quy',
      'c. Đánh giá hợp chuẩn',
      'd. Kiểm định xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Chủ đầu tư A đang lập dự án đầu tư đối với công trình bệnh viện đa khoa trung ương dự kiến có 300 giường bệnh, để áp dụng cấp công trình trong quản lý các hoạt động đầu tư xây dựng, tra theo quy mô công suất là công trình cấp mấy:',
    options: [
      'a. Cấp đặc biệt',
      'b. Cấp I',
      'c. Cấp II',
      'd. Cấp III',
    ],
    correct: 1
  },
  {
    question: 'Theo công năng sử dụng, công trình được phân loại gồm:',
    options: [
      'a. Dân dụng, công nghiệp, hạ tầng kỹ thuật, giao thông vận tải, nông nghiệp và phát triển nông thôn, quốc phòng - an ninh.',
      'b. Dân dụng, công nghiệp, y tế, giáo dục, giao thông vận tải, nông nghiệp, quốc phòng - an ninh.',
      'c. Dân dụng, công nghiệp, hạ tầng kỹ thuật, giáo dục, giao thông vận tải, nông nghiệp, quốc phòng - an ninh.',
      'd. Dân dụng, công nghiệp, hạ tầng kỹ thuật, giao thông vận tải, nông nghiệp và phát triển nông thôn, y tế - giáo dục, quốc phòng - an ninh.',
    ],
    correct: 0
  },
  {
    question: 'Thứ tự ưu tiên khi xác định cấp công trình là gì?',
    options: [
      'a. Mức độ quan trọng, quy mô công suất',
      'b. Quy mô kết cấu',
      'c. Tùy chọn việc áp dụng theo ý a hoặc b',
      'd. Cấp cao nhất nếu xác định được theo a và b',
    ],
    correct: 3
  },
  {
    question: 'Cách nào xác định cấp công trình được cải tạo, sửa chữa dưới đây là đúng',
    options: [
      'a. Cấp IV với mọi quy mô',
      'b. Cấp III với mọi quy mô',
      'c. Việc sửa chữa thay đổi tiêu chí ban đầu thì phải xác định lại cấp công trình',
      'd. Xác định theo yêu cầu của người quyết định đầu tư.',
    ],
    correct: 2
  },
  {
    question: 'Công trình Trường đại học/ trường cao đẳng có 5001 sinh viên toàn trường thì tra theo quy mô công suất là cấp mấy',
    options: [
      'a. Cấp IV',
      'b. Cấp III',
      'c. Cấp II',
      'd. Cấp I',
    ],
    correct: 2
  },
  {
    question: 'Thí nghiệm chuyên ngành xây dựng, quan trắc, trắc đạc công trình là gì?',
    options: [
      'a. Là các hoạt động đo lường được thực hiện trong quá trình thi công xây dựng để xác định thông số kỹ thuật và vị trí của vật liệu, cấu kiện, bộ phận công trình, phục vụ thi công và nghiệm thu công trình xây dựng.',
      'b. Là các hoạt động kiểm tra, đánh giá chất lượng hoặc nguyên nhân hư hỏng, giá trị, thời hạn sử dụng và các thông số kỹ thuật khác của sản phẩm xây dựng, bộ phận công trình hoặc công trình xây dựng.',
      'c. Là hoạt động kiểm tra, đánh giá mức độ phù hợp của vật liệu xây dựng và sản phẩm xây dựng so với yêu cầu của quy chuẩn kỹ thuật có liên quan được áp dụng.',
      'd. Là hoạt động đánh giá mức độ phù hợp của sản phẩm, hàng hóa, dịch vụ, quá trình, môi trường với tiêu chuẩn tương ứng.',
    ],
    correct: 0
  },
  {
    question: 'Kiểm định xây dựng, thử nghiệm khả năng chịu lực của kết cấu công trình được thực hiện trong các trường hợp nào sau đây:',
    options: [
      'a. Được quy định trong chỉ dẫn kỹ thuật, hợp đồng xây dựng; Khi công trình đã được thi công xây dựng có dấu hiệu không đảm bảo chất lượng theo yêu cầu của thiết kế hoặc không đủ các căn cứ để đánh giá chất lượng, nghiệm thu; Theo yêu cầu của cơ quan có thẩm quyền ký hợp đồng dự án đầu tư theo phương thức đối tác công tư (PPP);',
      'b. Theo yêu cầu của các cơ quan có thẩm quyền kiểm tra công tác nghiệm thu theo quy định tại khoản 2 Điều 24 Nghị định này; Khi công trình hết tuổi thọ thiết kế mà chủ sở hữu công trình có nhu cầu tiếp tục sử dụng;',
      'c. Khi công trình đang khai thác, sử dụng có dấu hiệu nguy hiểm, không đảm bảo an toàn; Kiểm định xây dựng công trình phục vụ công tác bảo trì.',
      'd. Cả 3 Phương án a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Nội dung kiểm định xây dựng nào là đúng?',
    options: [
      'a. Kiểm định chất lượng bộ phận công trình, công trình xây dựng;',
      'b. Kiểm định xác định nguyên nhân hư hỏng, xác định nguyên nhân sự cố, thời hạn sử dụng của bộ phận công trình, công trình xây dựng;',
      'c. Kiểm định chất lượng vật liệu xây dựng, cấu kiện xây dựng, sản phẩm xây dựng.',
      'd. Cả 3 phương a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Trách nhiệm của Chủ đầu tư trong việc thực hiện kiểm định xây dựng?',
    options: [
      'a. Tổ chức lập và phê duyệt nhiệm vụ kiểm định',
      'b. Lựa chọn tổ chức kiểm định xây dựng',
      'c. Giám sát công tác kiểm định xây dựng',
      'd. a và b',
    ],
    correct: 3
  },
  {
    question: 'Nội dung nào không cần phải có trong thông báo kết luận giám định?',
    options: [
      'a. Căn cứ thực hiện giám định;',
      'b. Thông tin chung về đối tượng giám định;',
      'c. Tiến độ thực hiện giám định;',
      'd. Nội dung giám định',
    ],
    correct: 2
  },
  {
    question: 'Trường hợp áp dụng hợp đồng EPC, Chủ đầu tư có trách nhiệm gì?',
    options: [
      'a. Tổ chức nghiệm thu hoàn thành công trình',
      'b. Tổ chức bàn giao công trình',
      'c. a và b',
      'd. Giám sát, tham gia nghiệm thu trực tiếp với nhà thầu phụ., tổ chức bàn giao công trình.',
    ],
    correct: 2
  },
  {
    question: 'Các chủ thể có liên quan trực tiếp đến hoạt động xây dựng công trình bao gồm?',
    options: [
      'a. Nhà thầu thi công xây dựng; Nhà thầu cung ứng sản phẩm xây dựng, vật liệu xây dựng, cấu kiện, thiết bị lắp đặt vào công trình; Các nhà thầu tư vấn gồm: khảo sát, thiết kế, quản lý dự án, giám sát, thí nghiệm, kiểm định và các nhà thầu tư vấn khác.',
      'b. Chủ đầu tư, đại diện chủ đầu tư; Nhà thầu thi công xây dựng; các nhà thầu tư vấn gồm: khảo sát, thiết kế, quản lý dự án, giám sát, thí nghiệm, kiểm định và các nhà thầu tư vấn khác.',
      'c. Chủ đầu tư, đại diện chủ đầu tư; Nhà thầu thi công xây dựng; Nhà thầu cung ứng sản phẩm xây dựng, vật liệu xây dựng, cấu kiện, thiết bị lắp đặt vào công trình; Các nhà thầu tư vấn gồm: quản lý dự án, giám sát, thí nghiệm, kiểm định.',
      'd. Chủ đầu tư, đại diện chủ đầu tư; Nhà thầu thi công xây dựng; Nhà thầu cung ứng sản phẩm xây dựng, vật liệu xây dựng, cấu kiện, thiết bị lắp đặt vào công trình; Các nhà thầu tư vấn gồm: khảo sát, thiết kế, quản lý dự án, giám sát, thí nghiệm, kiểm định và các nhà thầu tư vấn khác.',
    ],
    correct: 3
  },
  {
    question: 'Các giải thưởng về chất lượng công trình được làm căn cứ để xem xét ưu tiên cho nhà thầu khi tham gia đấu thầu là gì?',
    options: [
      'a. Là các giải thưởng mà nhà thầu đạt được trong thời gian 3 năm gần nhất tính đến khi đăng ký tham gia dự thầu',
      'b. Là các giải thưởng mà nhà thầu đạt được trong thời gian 5 năm gần nhất tính đến khi đăng ký tham gia dự thầu',
      'c. Là các giải thưởng mà nhà thầu đạt được trong thời gian 3 năm gần nhất tính đến khi đăng ký thương thảo hợp đồng',
      'd. Là là các giải thưởng mà nhà thầu đạt được trong thời gian 5 năm gần nhất tính đối với công trình thuộc dự án sử dụng vốn đầu tư công',
    ],
    correct: 0
  },
  {
    question: 'Ai là người có thẩm quyền chấp thuận việc đổi chủng loại, nguồn gốc xuất xứ vật liệu, sản phẩm, cấu kiện, thiết bị sử dụng cho công trình xây dựng',
    options: [
      'a. Tư vấn giám sát',
      'b. Tư vấn thiết kế',
      'c. Chỉ huy trưởng công trình',
      'd. Chủ đầu tư',
    ],
    correct: 3
  },
  {
    question: 'Trong dự án vốn đầu tư công và vốn nhà nước ngoài đầu tư công, Tư vấn giám sát không yêu cầu phải độc lập với đơn vị nào dưới đây:',
    options: [
      'a. Đơn vị cung ứng vật liệu, sản phẩm vào công trình',
      'b. Tư vấn kiểm định',
      'c. Nhà thầu thi công xây dựng',
      'd. Tư vấn thiết kế',
    ],
    correct: 3
  },
  {
    question: 'Thành phần ký của Biên bản nghiệm thu bao gồm:',
    options: [
      'a. Người trực tiếp giám sát thi công xây dựng của chủ đầu tư;',
      'b. Người trực tiếp phụ trách kỹ thuật thi công của nhà thầu thi công xây dựng hoặc của tổng thầu, nhà thầu chính; Người trực tiếp phụ trách kỹ thuật thi công của nhà thầu phụ đối với trường hợp có tổng thầu, nhà thầu chính.',
      'c. Người trực tiếp giám sát thi công xây dựng của chủ đầu tư; Người trực tiếp phụ trách kỹ thuật thi công của nhà thầu thi công xây dựng hoặc của tổng thầu, nhà thầu chính.',
      'd. Người trực tiếp giám sát thi công xây dựng của chủ đầu tư; Người trực tiếp phụ trách kỹ thuật thi công của nhà thầu thi công xây dựng hoặc của tổng thầu, nhà thầu chính; Người trực tiếp phụ trách kỹ thuật thi công của nhà thầu phụ đối với trường hợp có tổng thầu, nhà thầu chính.',
    ],
    correct: 3
  },
  {
    question: 'Thẩm quyền kiểm tra đối với công trình xây dựng thuộc dự án quan trọng quốc gia. Công trình quy mô lớn, kỹ thuật phức tạp?',
    options: [
      'a. Hội đồng kiểm tra nhà nước về công tác nghiệm thu công trình xây dựng',
      'b. Cơ quan chuyên môn về xây dựng thuộc UBND cấp tỉnh',
      'c. Cơ quan chuyên môn về xây dựng thuộc Bộ quản lý công trình xây dựng chuyên ngành',
    ],
    correct: 0
  },
  {
    question: 'Thời hạn ra văn bản của cơ quan chuyên môn về xây dựng là bao nhiêu ngày kể từ khi nhận được hồ sơ đề nghị kiểm tra công tác nghiệm thu đối với công trình cấp I',
    options: [
      'a. Không quá 30 ngày',
      'b. Không quá 20 ngày',
      'c. Không quá 40 ngày',
      'd. Không quá 50 ngày',
    ],
    correct: 0
  },
  {
    question: 'Ai là người tổ chức lập hồ sơ hoàn thành công trình xây dựng theo quy định trước khi đưa hạng mục công trình hoặc công trình vào khai thác, vận hành?',
    options: [
      'a. Chủ đầu tư',
      'b. Tư vấn giám sát',
      'c. Tư vấn thiết kế',
      'd. Nhà thầu thi công',
    ],
    correct: 0
  },
  {
    question: 'Thời gian tối thiểu lưu trữ hồ sơ là bao lâu đối với công trình nhóm B?',
    options: [
      'a. 5 năm',
      'b. 7 năm',
      'c. 9 năm',
      'd. 12 năm',
    ],
    correct: 1
  },
  {
    question: 'Nhà thầu thi công xây dựng công trình, nhà thầu cung ứng thiết bị có quyền từ chối bảo hành trong trường hợp nào?',
    options: [
      'a. Khi hết thời hạn bảo hành',
      'b. Nguyên nhân bất khả kháng.',
      'c. Các trường hợp hư hỏng, khiếm khuyết phát sinh không phải do lỗi của nhà thầu gây ra.',
      'd. Các trường hợp hư hỏng, khiếm khuyết phát sinh không phải do lỗi của nhà thầu gây ra hoặc do nguyên nhân bất khả kháng được quy định trong hợp đồng xây dựng',
    ],
    correct: 3
  },
  {
    question: 'Nội dung nào sau đây không thuộc trình tự thực hiện bảo trì công trình xây dựng',
    options: [
      'a. Lập và phê duyệt quy trình bảo trì công trình xây dựng',
      'b. Lập kế hoạch và dự toán kinh phí bảo trì công trình xây dựng',
      'c. Kiểm định, đánh giá chất lượng công trình làm căn cứ nghiệm thu công trình xây dựng',
      'd. Đánh giá an toàn công trình',
    ],
    correct: 2
  },
  {
    question: 'Các công trình nào bắt buộc phải lập quy trình bảo trì riêng',
    options: [
      'a. Tất cả các loại công trình',
      'b. Công trình cấp III trở xuống, nhà ở riêng lẻ và công trình tạm',
      'c. Công trình cấp I, cấp đặc biệt',
      'd. Công trình từ cấp II trở lên trừ nhà ở riêng lẻ',
    ],
    correct: 3
  },
  {
    question: 'Chủ thể nào có trách nhiệm lập Kế hoạch bảo trì công trình xây dựng',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu thi công xây dựng',
      'c. Chủ sở hữu hoặc người quản lý sử dụng',
      'd. Tư vấn thiết kế',
    ],
    correct: 2
  },
  {
    question: 'Việc kiểm tra công trình thường xuyên, định kỳ và đột xuất được thực hiện bằng hình thức nào?',
    options: [
      'a. Bằng các thiết bị kiểm tra chuyên dụng khi cần thiết',
      'b. Bằng trực quan',
      'c. Thông qua các số liệu quan trắc thường xuyên',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Hồ sơ bảo trì công trình xây dựng bao gồm:',
    options: [
      'a. Kế hoạch bảo trì',
      'b. Kết quả kiểm tra công trình thường xuyên và định kỳ',
      'c. Đáp án a và b',
      'd. Biên bản nghiệm thu lắp đặt cốt thép',
    ],
    correct: 2
  },
  {
    question: 'Nội dung đánh giá an toàn công trình bao gồm:',
    options: [
      'a. Kiểm tra, đánh giá khả năng làm việc của các kết cấu chịu lực chính và các bộ phận công trình có nguy cơ gây mất an toàn',
      'b. Kiểm tra, đánh giá các điều kiện đảm bảo vận hành, khai thác công trình bình thường',
      'c. Cả 2 đáp án a và b',
      'd. Kiểm tra, đánh giá thời hạn sử dụng của công trình',
    ],
    correct: 2
  },
  {
    question: 'Chủ thể nào có trách nhiệm tổ chức giám sát việc thực hiện công tác đánh giá an toàn công trình',
    options: [
      'a. Chủ đầu tư',
      'b. Tư vấn giám sát',
      'c. Chủ sở hữu hoặc người quản lý, sử dụng công trình',
      'd. Cơ quan nhà nước có thẩm quyền',
    ],
    correct: 2
  },
  {
    question: 'Khi phát hiện hạng mục công trình, công trình có dấu hiệu nguy hiểm, không đảm bảo an toàn cho việc khai thác, sử dụng thì chủ sở hữu hoặc người quản lý, sử dụng công trình phải thực hiện những gì trong những đáp án sau đây?',
    options: [
      'a. Kiểm tra lại hiện trạng công trình',
      'b. Báo cáo ngay với chính quyền địa phương nơi gần nhất',
      'c. Sửa chữa những hư hỏng có nguy cơ làm ảnh hưởng đến an toàn sử dụng, an toàn vận hành của công trình hoặc phá dỡ công trình khi cần thiết',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Chủ thể nào có trách nhiệm phá dỡ công trình xây dựng',
    options: [
      'a. Chủ đầu tư, chủ sở hữu hoặc người quản lý, sử dụng công trình',
      'b. Cơ quan có thẩm quyền xử phạt vi phạm hành chính trong trường hợp áp dụng biện pháp khắc phục hậu quả buộc phá dỡ công trình, phần công trình vi phạm theo quy định của pháp luật về xử lý vi phạm hành chính',
      'c. Cơ quan có thẩm quyền quyết định việc phá dỡ và cưỡng chế phá dỡ nhà ở theo quy định của pháp luật về nhà ở',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Ngay sau khi xảy ra sự cố, Chủ đầu tư thông báo về sự cố cho ai?',
    options: [
      'a. UBND cấp xã nơi xẩy ra sự cố và cơ quan cấp trên của mình (nếu có)',
      'b. Cơ quan công an nơi xảy ra sự cố',
      'c. UBND cấp huyện',
      'd. UBND cấp tỉnh',
    ],
    correct: 0
  },
  {
    question: 'Khi xảy ra sự cố, ai có trách nhiệm thực hiện các biện pháp kịp thời để tìm kiếm, cứu hộ, đảm bảo an toàn cho người và tài sản, hạn chế và ngăn ngừa các nguy hiểm có thể xảy ra?',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu thi công xây dựng',
      'c. Tư vấn giám sát',
      'd. Chủ đầu tư và Nhà thầu thi công xây dựng',
    ],
    correct: 3
  },
  {
    question: 'Sự cố mất an toàn lao động trong thi công xây dựng công trình bao gồm?',
    options: [
      'a. Sự cố sập đổ máy, thiết bị phục vụ công tác thi công xây dựng',
      'b. Sự cố tai nạn lao động xảy ra trong thi công xây dựng',
      'c. Cả a và b',
    ],
    correct: 2
  },
  {
    question: 'Thẩm quyền chủ trì điều tra sự cố máy, thiết bị sử dụng thi công xây dựng công trình phục vụ quốc phòng, an ninh?',
    options: [
      'a. Bộ trưởng Bộ Xây dựng',
      'b. Bộ trưởng Bộ Công an',
      'c. Bộ trưởng Bộ Quốc phòng',
      'd. Cả b và c',
    ],
    correct: 3
  },
  {
    question: 'Ai có trách nhiệm tạm ứng chi phí tổ chức điều tra sự cố?',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu thi công',
      'c. Tư vấn thiết kế',
      'd. Tư vấn giám sát',
    ],
    correct: 0
  },
  {
    question: 'Bao nhiêu lâu thì Hội đồng kiểm tra nhà nước về công tác nghiệm thu công trình xây dựng (Hội đồng) đề xuất danh mục các công trình do Hội đồng tổ chức kiểm tra?',
    options: [
      'a. Hàng tháng',
      'b. Hàng quý',
      'c. Hàng năm',
      'd. Cả ba đáp án trên',
    ],
    correct: 2
  },
  {
    question: 'Ai là người phê duyệt danh mục công trình do Hội đồng tổ chức kiểm tra công tác nghiệm thu?',
    options: [
      'a. Bộ trưởng Bộ quản lý công trình xây dựng chuyên ngành',
      'b. Chủ tịch Quốc Hội',
      'c. Thủ tướng Chính phủ',
      'd. Chủ tịch nước',
    ],
    correct: 3
  },
];
