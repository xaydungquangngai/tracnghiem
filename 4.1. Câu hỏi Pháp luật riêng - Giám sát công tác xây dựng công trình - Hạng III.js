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
    question: 'Đối với dự án đầu tư xây dựng tuyến cống thoát nước thải có đường kính trong 1000mm với tổng chiều dài tuyến cống là 900m, cấp công trình của tuyến cống thoát nước là cấp nào?',
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
    question: 'Quan trắc công trình là hoạt động nào sau đây:',
    options: [
      'a. Là hoạt động theo dõi, đo đạc, ghi nhận sự biến đổi về hình học, biến dạng, chuyển dịch và các thông số kỹ thuật khác của công trình và môi trường xung quanh theo thời gian.',
      'b. Là hoạt động đo đạc để xác định vị trí, hình dạng, kích thước của địa hình, công trình xây dựng phục vụ thi công xây dựng, quản lý chất lượng, bảo hành, bảo trì, vận hành, khai thác và giải quyết sự cố công trình xây dựng.',
      'c. Là hoạt động kiểm tra, đánh giá chất lượng hoặc nguyên nhân hư hỏng, giá trị, thời hạn sử dụng và các thông số kỹ thuật khác của bộ phận công trình hoặc công trình xây dựng.',
      'd. Là hoạt động đo lường nhằm xác định đặc tính của bộ phận công trình hoặc công trình xây dựng theo quy trình nhất định',
    ],
    correct: 0
  },
  {
    question: 'An toàn trong thi công xây dựng công trình là gì?',
    options: [
      'a. Là giải pháp phòng, chống tác động của các yếu tố nguy hiểm, yếu tố có hại nhằm đảm bảo không gây thương tật, tử vong, không làm suy giảm sức khỏe đối với con người, ngăn ngừa sự cố gây mất an toàn lao động trong quá trình thi công xây dựng công trình.',
      'b. Là hoạt động quản lý của các chủ thể tham gia xây dựng công trình nhằm đảm bảo an toàn trong thi công xây dựng công trình.',
      'c. Là các biện pháp nhằm cải tạo và làm sạch môi trường làm việc tại công trình, góp phần bảo vệ sức khoẻ cá nhân, cộng đồng và phòng chống bệnh tật trong công trình',
      'd. Là cung cấp những kĩ năng căn bản cho người lao động để hạn chế nhiều nguy cơ tai nạn không đáng có và năng cao sự phòng người trong quá trình làm việc.',
    ],
    correct: 0
  },
  {
    question: 'Bộ trưởng Bộ Xây dựng ban hành quy định về cấp công trình sử dụng trong quản lý các hoạt động đầu tư xây dựng đối với những công trình nào?',
    options: [
      'a. Công trình dân dụng',
      'b. Tất cả các công trình',
      'c. Tất cả các công trình trừ công trình thuộc Bộ chuyên ngành quản lý',
      'd. Tất cả các công trình trừ công trình đê điều, công trình sử dụng cho mục đích quốc phòng, an ninh.',
    ],
    correct: 1
  },
  {
    question: 'Công trình “Nhà máy sản xuất cấu kiện bê tông ly tâm, cấu kiện bê tông ứng lực trước, tấm tường bê tông rỗng đúc sẵn” có sản lượng 500 triệu tấn/năm có cấp công trình là cấp mấy?',
    options: [
      'a. Cấp đặc biệt',
      'b. Cấp I',
      'c. Cấp II',
      'd. Cấp III',
    ],
    correct: 1
  },
  {
    question: 'Công trình đường trong đô thị được thiết kế với 2 làn xe, chiều dài 0,5km, theo quy mô công suất là công trình cấp mấy?',
    options: [
      'a. Cấp I',
      'b. Cấp II',
      'c. Cấp III',
      'd. Cấp IV',
    ],
    correct: 3
  },
  {
    question: 'Đường ô tô có vận tốc thiết kế 80km/h, lưu lượng 10 nghìn xe/ ngày đêm, theo quy mô công suất là công trình cấp mấy?',
    options: [
      'a. Cấp đặc biệt',
      'b. Cấp I',
      'c. Cấp II',
      'd. Cấp III',
    ],
    correct: 1
  },
  {
    question: 'Tuyến ống cấp nước D2000 dài 800m, theo quy mô kết cấu là công trình cấp mấy?',
    options: [
      'a. Cấp đặc biệt',
      'b. Cấp I',
      'c. Cấp II',
      'd. Cấp III',
    ],
    correct: 2
  },
  {
    question: 'Đơn vị nào có trách nhiệm tổ chức thực hiện các hoạt động thí nghiệm chuyên ngành xây dựng, quan trắc, trắc đạc công trình trong quá trình thi công xây dựng công trình?',
    options: [
      'a. Chủ đầu tư',
      'b. Tư vấn giám sát',
      'c. Nhà thầu thi công',
      'd. Tư vấn quản lý dự án',
    ],
    correct: 2
  },
  {
    question: 'Thí nghiệm đối chứng trong quá trình thi công xây dựng được thực hiện trong các trường hợp nào?',
    options: [
      'a. Được quy định trong chỉ dẫn kỹ thuật, hợp đồng xây dựng;',
      'b. Khi vật liệu, sản phẩm xây dựng, thiết bị lắp đặt vào công trình hoặc công trình được thi công xây dựng có dấu hiệu không đảm bảo chất lượng theo yêu cầu của hồ sơ thiết kế;',
      'c. Theo yêu cầu của cơ quan chuyên môn về xây dựng.',
      'd. Cả 3 phương án trên',
    ],
    correct: 3
  },
  {
    question: 'Tổ chức kiểm đinh xây dựng được lựa chọn lập đề cương kiểm định trình cơ quan, tổ chức nào phê duyệt?',
    options: [
      'a. Nhà thầu thi công xây dựng',
      'b. Chủ đầu tư',
      'c. Tư vấn thiết kế',
      'd. Tư vấn giám sát',
    ],
    correct: 1
  },
  {
    question: 'Nội dung đề cương kiểm định bắt buộc phải có nội dung nào sau đây?',
    options: [
      'a. Thông tin năng lực của các nhà thầu thi công xây dựng;',
      'b. Thông tin năng lực của các nhà thầu thiết kế;',
      'c. Thông tin về năng lực của chủ trì và cá nhân thực hiện kiểm định, phòng thí nghiệm chuyên ngành xây dựng thực hiện kiểm định;',
      'd. Tất cả các ý trên.',
    ],
    correct: 2
  },
  {
    question: 'Trong trường hợp việc kiểm định được thực hiện theo yêu cầu của cơ quan có thẩm quyền kiểm tra công tác nghiệm thu hoặc cơ quan quản lý nhà nước có thẩm quyền, tổ chức kiểm định phải độc lập với đơn vị nào?',
    options: [
      'a. Chủ đầu tư',
      'b. Tư vấn giám sát',
      'c. Tư vấn quản lý dự án',
      'd. Tất cả các ý trên',
    ],
    correct: 3
  },
  {
    question: 'Cơ quan có thẩm quyền nào chủ trì tổ chức giám định xây dựng đối với các công trình xây dựng khi được Thủ tướng Chính phủ giao?',
    options: [
      'a. UBND cấp tỉnh tại địa bàn có công trình cần giám định',
      'b. Bộ Công an, Bộ Quốc Phòng',
      'c. Bộ quản lý công trình xây dựng chuyên ngành',
    ],
    correct: 2
  },
  {
    question: 'Đơn vị nào chịu trách nhiệm tập hợp hồ sơ, tài liệu và các số liệu kỹ thuật có liên quan đến đối tượng giám định theo yêu cầu của cơ quan giám định?',
    options: [
      'a. Chủ đầu tư',
      'b. Chủ sở hữu hoặc người quản lý, sử dụng công trình',
      'c. Tư vấn quản lý dự án',
      'd. a và b',
    ],
    correct: 3
  },
  {
    question: 'Chủ đầu tư được thực hiện các hoạt động xây dựng nào khi đáp ứng đủ điều kiện năng lực theo quy định của pháp luật?',
    options: [
      'a. Tư vấn thiết kế',
      'b. Tư vấn giám sát',
      'c. Thi công xây dựng',
      'd. Tất cả các ý trên',
    ],
    correct: 3
  },
  {
    question: 'Trường hợp nào được tự thiết kế nhà ở riêng lẻ?',
    options: [
      'a. Nhà ở riêng lẻ ở khu vực nông thôn',
      'b. Nhà ở riêng lẻ không có tầng hầm, có tổng diện tích sàn xây dựng nhỏ hơn 250 m2',
      'c. Nhà ở riêng lẻ dưới 7 tầng hoặc có 01 tầng hầm',
      'd. Nhà ở riêng lẻ thuộc khu vực có quy hoạch chi tiết 1/500',
    ],
    correct: 3
  },
  {
    question: 'Nội dung giám sát thi công xây dựng nhà ở riêng lẻ của hộ gia đình, cá nhân được quy định như thế nào?',
    options: [
      'a. Biện pháp thi công, biện pháp đảm bảo an toàn đối với nhà ở và các công trình liền kề, lân cận; Chất lượng vật liệu, cấu kiện xây dựng, thiết bị trước khi đưa vào thi công xây dựng.',
      'b. Biện pháp thi công, biện pháp đảm bảo an toàn đối với nhà ở và các công trình liền kề, lân cận; Chất lượng vật liệu, cấu kiện xây dựng, thiết bị trước khi đưa vào thi công xây dựng; Hệ thống giàn giáo, kết cấu chống đỡ tạm và các máy móc, thiết bị phục vụ thi công.',
      'c. Biện pháp thi công, biện pháp đảm bảo an toàn đối với nhà ở và các công trình liền kề, lân cận; Chất lượng vật liệu, cấu kiện xây dựng, thiết bị trước khi đưa vào thi công xây dựng; Hệ thống giàn giáo, kết cấu chống đỡ tạm và các máy móc, thiết bị phục vụ thi công; Biện pháp bảo đảm an toàn lao động, vệ sinh môi trường trong quá trình thi công.',
      'd. Biện pháp thi công, biện pháp đảm bảo an toàn đối với nhà ở và các công trình liền kề, lân cận; Chất lượng vật liệu, cấu kiện xây dựng, thiết bị trước khi đưa vào thi công xây dựng;Biện pháp bảo đảm an toàn lao động, vệ sinh môi trường trong quá trình thi công.',
    ],
    correct: 2
  },
  {
    question: 'Trình tự thi công nào là đúng',
    options: [
      'a. Quản lý vật liệu, sản phẩm, cấu kiện, thiết bị sử dụng cho công trình xây dựng. Nghiệm thu giai đoạn thi công xây dựng công trình xây dựng. Kiểm tra công tác nghiệm thu công trình xây dựng của cơ quan nhà nước có thẩm quyền. Bàn giao công trình xây dựng',
      'b. Tiếp nhận mặt bằng thi công xây dựng. Thí nghiệm, đối chứng thử nghiệm khả năng chịu lực của kết cấu công trình và kiểm định xây dựng trong quá trình thi công xây dựng công trình. Giám sát tác giả của nhà thầu thiết kế trong quá trình thi công xây dựng công trình. Bàn giao công trình xây dựng',
      'c. Quản lý vật liệu, sản phẩm, cấu kiện, thiết bị sử dụng cho công trình xây dựng. Nghiệm thu giai đoạn thi công xây dựng công trình xây dựng. Thí nghiệm, đối chứng thử nghiệm khả năng chịu lực của kết cấu công trình và kiểm định xây dựng trong quá trình thi công xây dựng công trình. Kiểm tra công tác nghiệm thu công trình xây dựng của cơ quan nhà nước có thẩm quyền.',
      'd. a, b, c đều sai',
    ],
    correct: 0
  },
  {
    question: 'Trách nhiệm của người lao động trong việc đảm bảo an toàn lao động trên công trường',
    options: [
      'a. Báo cáo với người có thẩm quyền khi phát hiện nguy cơ gây mất an toàn lao động trong quá trình thi công xây dựng',
      'b. Chủ động xử lý và khắc phục hậu quả khi xảy ra sự cố công trình xây dựng, sự cố gây mất an toàn lao động.',
      'c. Thực hiện những công việc có yêu cầu nghiêm ngặt về an toàn, vệ sinh lao động khi đang được huấn luyện về an toàn, vệ sinh lao động.',
      'd. Yêu cầu cung cấp đầy đủ phương tiện bảo vệ cá nhân theo quy định để thực hiện công việc không đảm bảo an toàn lao động.',
    ],
    correct: 0
  },
  {
    question: 'Ai được phép điều chỉnh tiến độ thi công xây dựng tổng thể?',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu thi công',
      'c. Người quyết định đầu tư',
      'd. Tổ chức cấp giấy chứng nhận đầu tư',
    ],
    correct: 2
  },
  {
    question: 'Đơn vị nào có trách nhiệm giám sát thi công xây dựng của tổng thầu?',
    options: [
      'a. Chủ đầu tư',
      'b. Tư vấn giám sát',
      'c. Tổng thầu tự giám sát phần việc do mình thực hiện',
      'd. a và c',
    ],
    correct: 3
  },
  {
    question: 'Trường hợp nhà thầu là liên danh thì thành phần ký biên bản nghiệm thu bao gồm',
    options: [
      'a. Người trực tiếp giám sát thi công xây dựng của chủ đầu tư và cả hai thành viên',
      'b. Người trực tiếp giám sát thi công xây dựng của chủ đầu tư và người trực tiếp phụ trách kỹ thuật của thành viên liên danh có đủ năng lực theo quy định theo thỏa thuận liên danh',
      'c. Người trực tiếp giám sát thi công xây dựng của chủ đầu tư và người trực tiếp phụ trách kỹ thuật của thành viên liên danh đối với công việc xây dựng do mình thực hiện',
      'd. Cả 3 đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Cơ quan chuyên môn về xây dựng kiểm tra bao nhiêu lần đối với công trình cấp I?',
    options: [
      'a. Không quá 5 lần',
      'b. Không quá 4 lần',
      'c. Không quá 3 lần',
      'd. Không quá 2 lần',
    ],
    correct: 2
  },
  {
    question: 'Thời gian tối thiểu lưu trữ hồ sơ là bao lâu đối với công trình nhóm C?',
    options: [
      'a. 5 năm',
      'b. 7 năm',
      'c. 9 năm',
      'd. 12 năm',
    ],
    correct: 0
  },
  {
    question: 'Việc xác nhận hoàn thành việc bảo hành công trình xây dựng được Chủ đầu tư thực hiện bằng hình thức nào?',
    options: [
      'a. Xác nhận qua email',
      'b. Xác nhận bằng biên bản',
      'c. Xác nhận bằng văn bản',
      'd. Cả 3 đáp án trên',
    ],
    correct: 2
  },
  {
    question: 'Chủ thể nào có trách nhiệm lập quy trình bảo trì công trình xây dựng',
    options: [
      'a. Nhà thầu thiết kế xây dựng công trình lập và bàn giao cho chủ đầu tư quy trình bảo trì công trình xây dựng, bộ phận công trình cùng với hồ sơ thiết kế triển khai sau thiết kế cơ sở',
      'b. Nhà thầu cung cấp thiết bị lắp đặt vào công trình lập và bàn giao cho chủ đầu tư quy trình bảo trì đối với thiết bị do mình cung cấp trước khi lắp đặt vào công trình',
      'c. Trường hợp nhà thầu thiết kế xây dựng công trình, nhà thầu cung ứng thiết bị không lập được quy trình bảo trì, chủ đầu tư có thể thuê đơn vị tư vấn khác có đủ điều kiện năng lực để lập quy trình bảo trì',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Kế hoạch bảo trì công trình xây dựng được lập dựa trên cơ sở nào',
    options: [
      'a. Hồ sơ hoàn thành công trình',
      'b. Các tài liệu của thiết bị lắp đặt vào công trình',
      'c. Hướng dẫn của Tư vấn thiết kế',
      'd. Quy trình bảo trì công trình đã được phê duyệt',
    ],
    correct: 3
  },
  {
    question: 'Nội dung chính của kế hoạch bảo trì công trình xây dựng bao gồm những điểm nào sau đây:',
    options: [
      'a. Tên công việc thực hiện',
      'b. Phương thức thực hiện',
      'c. Chi phí thực hiện',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Việc bảo dưỡng công trình được thực hiện trên cơ sở nào',
    options: [
      'a. Theo kế hoạch bảo trì hằng năm',
      'b. Quy trình bảo trì công trình xây dựng được phê duyệt',
      'c. Cả 2 đáp án a và b',
      'd. Hướng dẫn của Chủ đầu tư',
    ],
    correct: 2
  },
  {
    question: 'Chủ thể nào có trách nhiệm thực hiện bảo trì đối với phần công trình thuộc sở hữu chung:',
    options: [
      'a. Chủ đầu tư',
      'b. Tất cả các chủ sở hữu của công trình',
      'c. Nhà thầu thi công xây dựng',
      'd. Cả 3 đáp án trên',
    ],
    correct: 1
  },
  {
    question: 'Công việc công tác thi công sửa chữa được thực hiện thế nào',
    options: [
      'a. Phải được giám sát',
      'b. Phải được nghiệm thu',
      'c. Cả a và b',
      'd. Phải được giám sát, nghiệm thu công tác thi công sửa chữa; lập, quản lý và lưu giữ hồ sơ sửa chữa công trình theo quy định',
    ],
    correct: 3
  },
  {
    question: 'Các tài liệu phục vụ công tác bảo trì bao gồm:',
    options: [
      'a. quy trình bảo trì công trình xây dựng',
      'b. bản vẽ hoàn công',
      'c. hồ sơ quản lý chất lượng trong thi công',
      'd. đáp án a và b',
    ],
    correct: 3
  },
  {
    question: 'Đâu là một trong những bước thực hiện đánh giá an toàn công trình',
    options: [
      'a. Lập và phê duyệt đề cương đánh giá an toàn',
      'b. Tổ chức thực hiện đánh giá an toàn công trình.',
      'c. Cả 2 đáp án a và b',
      'd. Lập và phê duyệt quy trình bảo trì',
    ],
    correct: 2
  },
  {
    question: 'Chủ thể nào có trách nhiệm tổ chức thẩm tra và phê duyệt đề cương đánh giá an toàn công trình',
    options: [
      'a. Chủ đầu tư',
      'b. Chủ sở hữu hoặc người quản lý, sử dụng công trình',
      'c. tổ chức thẩm tra',
      'd. Cơ quan nhà nước có thẩm quyền',
    ],
    correct: 1
  },
  {
    question: 'Ai có quyền thông báo cho chủ sở hữu hoặc người quản lý, sử dụng công trình, cơ quan nhà nước có thẩm quyền hoặc các cơ quan thông tin đại chúng biết khi phát hiện hạng mục công trình, công trình xảy ra sự cố hoặc có dấu hiệu nguy hiểm, không đảm bảo an toàn cho việc khai thác, sử dụng',
    options: [
      'a. Chủ đầu tư',
      'b. Báo chí',
      'c. Người sử dụng công trình',
      'd. Mọi công dân',
    ],
    correct: 3
  },
  {
    question: 'Trường hợp không tiếp tục sử dụng đối với công trình hết thời hạn sử dụng bao gồm những trường hợp nào?',
    options: [
      'a. Chủ sở hữu hoặc người quản lý, sử dụng công trình không có nhu cầu sử dụng tiếp',
      'b. Kết quả kiểm tra, kiểm định để đánh giá chất lượng hiện trạng của công trình cho thấy công trình không đảm bảo an toàn, không thể gia cố, cải tạo, sửa chữa',
      'c. Công trình không được cơ quan nhà nước có thẩm quyền cho phép tiếp tục khai thác, sử dụng',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Chủ đầu tư báo cáo sự cố bằng gì tới UBND cấp huyện và UBND cấp tỉnh nơi xảy ra sự cố?',
    options: [
      'a. Bằng biên bản',
      'b. Bằng thư điện tử',
      'c. Qua điện thoại',
      'd. Bằng văn bản',
    ],
    correct: 3
  },
  {
    question: 'Ai có trách nhiệm bồi thường thiệt hại và chi phí cho việc khắc phục sự cố?',
    options: [
      'a. Tổ chức và cá nhân gây ra sự cố',
      'b. Nhà thầu thi công',
      'c. Chủ đầu tư',
      'd. Tư vấn giám sát',
    ],
    correct: 0
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
    question: 'Thẩm quyền chủ trì điều tra sự cố máy, thiết bị sử dụng thi công xây dựng công trình trong trường hợp được Thủ tướng Chính phủ giao?',
    options: [
      'a. UBND cấp tỉnh',
      'b. Bộ Công an',
      'c. Bộ Quốc phòng',
      'd. Bộ quản lý xây dựng công trình chuyên ngành',
    ],
    correct: 3
  },
];
