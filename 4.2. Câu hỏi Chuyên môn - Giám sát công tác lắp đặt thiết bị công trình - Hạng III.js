const questions = [
  {
    question: 'Khi sử dụng thiết bị nâng phục vụ công tác lắp đặt thì thiết bị này phải được kiểm định theo quy trình nào?',
    options: [
      'a. QTKĐ 001:2008 /BLĐTBXH;',
      'b. QCVN 02:2011/BLĐTBXH;',
      'c. QTKĐ 002:2008/BLĐTBXH;',
      'd. Không cần kiểm định',
    ],
    correct: 0
  },
  {
    question: 'Chiều cao tối thiểu trong lòng Cabin bằng bao nhiêu?',
    options: [
      'a. 2.5 m;',
      'b. 2.2 m;',
      'c. 2.0 m;',
      'd. 1.8 m.',
    ],
    correct: 2
  },
  {
    question: 'Chiều cao thông thủy khoang cửa vào cabin tối thiểu bằng bao nhiêu?',
    options: [
      'a. 2.5 m;',
      'b. 2.2 m;',
      'c. 2.0 m;',
      'd. 1.8 m.',
    ],
    correct: 2
  },
  {
    question: 'Nghiệm thu thang máy điện và thang máy thủy lực đủ điều kiện vận hành an toàn phải thực hiện theo trình tự nào dưới đây:',
    options: [
      'a. Thử động ở 100% tải định mức - Thử động ở 125% tải định mức - Kiểm tra tổng thể;',
      'b. Thử động ở 125% tải định mức - Thử động ở 100% tải định mức - Kiểm tra tổng thể;',
      'c. Kiểm tra tổng thể - Thử động ở 100% tải định mức - Thử động ở 125% tải định mức;',
      'd. Kiểm tra tổng thể - Thử động ở 125% tải định mức - Thử dộng ở 100% tải định mức.',
    ],
    correct: 2
  },
  {
    question: 'Thang máy điện nào bắt buộc phải có giấy chứng nhận hợp quy?',
    options: [
      'a. Thang máy PCCC;',
      'b. Thang máy tải hàng và băng ca;',
      'c. Thang máy tải khách;',
      'd. Các thang máy trên.',
    ],
    correct: 3
  },
  {
    question: 'Một đường dây cáp điện được phép cấp điện cho bao nhiêu thang máy?',
    options: [
      'a. Từ 1 đến 2 thang máy có cùng tính chất sử dụng trong 1 gian cầu thang;',
      'b. Nhiều hơn 2 thang máy có cùng tính chất sử dụng trong 1 gian cầu thang;',
      'c. Nhiều hơn 2 thang máy có cùng tính chất sử dụng trong nhiều gian cầu thang;',
      'd. Nhiều hơn 2 thang máy không cùng tính chất sử dụng trong 1 gian cầu thang.',
    ],
    correct: 0
  },
  {
    question: 'Dây dẫn đặt ngoài nhà ở những nơi có người thường lui tới, dây dẫn đặt h theo tường hoặc kết cấu xây dựng khác?',
    options: [
      'a. Cách mặt đất tối thiểu 2,00m;',
      'b. Cách mặt đất tối thiểu 2,50m;',
      'c. Cách mặt đất tối thiểu 2,75m;',
      'd. Cách mặt đất tối thiểu 3,00m;',
    ],
    correct: 2
  },
  {
    question: 'Khoảng cách từ dây dẫn của đường dẫn điện trên không đến mặt đất, trước khi vào nhà không được nhỏ hơn?',
    options: [
      'a. 2,25m;',
      'b. 2,50m;',
      'c. 2,75m;',
      'd. 3,00m',
    ],
    correct: 2
  },
  {
    question: 'Các nơi dành cho thiếu nhi sử dụng, công tắc đèn phải đặt cách sàn?',
    options: [
      'a. 1,20m;',
      'b. 1,30m;',
      'c. 1,40m;',
      'd. 1,50m',
    ],
    correct: 3
  },
  {
    question: 'Trong trường học phổ thông cơ sở, ổ cắm điện phải đặt cách sàn?',
    options: [
      'a. 0,40m;',
      'b. 0,80m;',
      'c. 1,20m;',
      'd. 1,50m',
    ],
    correct: 3
  },
  {
    question: 'Các đối tượng nào phải được nối đất an toàn điện?',
    options: [
      'a. Vỏ kim loại của các đèn điện treo trong các phòng có trần treo;',
      'b. Vỏ kim loại của các đèn điện đặt ngầm trong các phòng có trần treo;',
      'c. Vỏ kim loại của các bồn tắm ống dẫn nước bằng kim loại;',
      'd. Tất cả các đối tượng trên.',
    ],
    correct: 3
  },
  {
    question: 'Nếu kim thu sét có tiết diện tròn thì ý kiến nào dưới đây là đúng;',
    options: [
      'a. Đường kính tối thiểu là 12 mm;',
      'b. Đường kính tối thiểu là 10 mm;',
      'c. Đường kính tối thiểu là 8 mm;',
      'd. Đường kính tối thiểu là 6 mm;',
    ],
    correct: 0
  },
  {
    question: 'Theo TCVN giá trị áp suất nào dưới đây của dòng khí khi thử độ kín khít đường ống hệ thống lạnh là đúng?',
    options: [
      'a. 1.2 lần áp suất làm việc lớn nhất;',
      'b. 1.5 lần áp suất làm việc lớn nhất;',
      'c. 1.5 lần áp suất làm việc song phải ≥ 4 bar;',
      'd. 2.0 lần áp suất làm việc lớn nhất.',
    ],
    correct: 2
  },
  {
    question: 'Trình tự nào dưới đây là đúng khi chạy thử máy lạnh:',
    options: [
      'a. Kiểm tra tổng thể - Chạy thử không tải - Chạy thử có tải - Đo kiểm hiệu chỉnh thông số;',
      'b. Chạy thử không tải - Chạy thử có tải -- Đo kiểm hiệu chỉnh thông số - Kiểm tra tổng thể;',
      'c. Kiểm tra tổng thể - Chạy thử có tải - Đo kiểm, hiệu chỉnh thông số kỹ thuật;',
      'd. Kiểm tra tổng thể - Chạy thử không tải - Đo kiểm thông số kỹ thuật.',
    ],
    correct: 2
  },
  {
    question: 'Theo TCVN quy trình nào dưới đây khi chạy thử bàn giao hệ thống thông gió và điều hòa không khí là đúng:',
    options: [
      'a. Vận hành hệ thống trong 02 giờ - Đo kiểm thông số;',
      'b. Vận hành hệ thống trong 18 giờ - Đo kiểm thông số;',
      'c. Vận hành hệ thống trong 24 giờ - Đo kiểm thông số;',
      'd. Vận hành hệ thống trong 02 giờ - Đo kiểm thông số - Dừng hệ thống 03 phút - Khởi động lại và chạy tiếp 24 giờ - Đo kiểm, đánh giá.',
    ],
    correct: 3
  },
  {
    question: 'Trong thang may bộ khống chế vượt tốc độ có chức năng nào nêu dưới đây:',
    options: [
      'a. Phát động cho bộ hãm bảo hiểm cabin hoạt động;',
      'b. Phanh giảm vận tốc cabin;',
      'c. Phanh giảm vận tốc đối trọng;',
      'd. Là bộ hãm bảo hiểm.',
    ],
    correct: 0
  },
  {
    question: 'Thực hiện các bước nghiệm thu lắp đặt thiết bị công nghệ theo trình tự nào sau đây:',
    options: [
      'a. Kiểm tra hồ sơ - nghiệm thu tĩnh - nghiệm thu chạy thử không tải - nghiệm thu chạy thử có tải;',
      'b. Kiểm tra hồ sơ - nghiệm thu chạy thử không tải - Nghiệm thu tĩnh - nghiệm thử chạy thử có tải;',
      'c. Nghiệm thu tĩnh - kiểm tra hồ sơ - nghiệm thu chạy thử không tải - nghiệm thu chạy thử có tải;',
      'd. Nghiệm thu tĩnh - nghiệm thu chạy thử không tải - nghiệm thu chạy thử có tải - kiểm tra hồ sơ.',
    ],
    correct: 0
  },
  {
    question: 'Khi không có hướng dẫn của nhà sản xuất thời gian chạy thử không tải liên tục tối đa cho máy phức tạp là bao lâu?',
    options: [
      'a. 2 giờ;',
      'b. 4 giờ;',
      'c. 6 giờ',
      'd. 8 giờ.',
    ],
    correct: 3
  },
  {
    question: 'Khi có hướng dẫn của nhà sản xuất thời gian chạy thử liên tục có tải là ba lâu?',
    options: [
      'a. 48 giờ',
      'b. 36 giờ;',
      'c. 24 giờ;',
      'd. Theo quy định của nhà sản xuất',
    ],
    correct: 3
  },
  {
    question: 'Thang máy đáp ứng điều kiện nào dưới đây thì được phép lắp đặt?',
    options: [
      'a. Có đầy đủ hồ sơ kỹ thuật;',
      'b. Đã được chứng nhận hợp quy;',
      'c. Được tích hợp đồng bộ các chi tiết hoặc cụm chi tiết;',
      'd. Cả ba điều kiện trên.',
    ],
    correct: 3
  },
  {
    question: 'Khi giám sát lắp đặt và nghiệm thu thang cuốn và băng chở người phải áp dụng văn bản pháp luật dưới đây:',
    options: [
      'a. QCVN 12:2012/BLĐTBXH;',
      'b. TCVN 6397:2010',
      'c. QTKĐ 02/2014/BLĐTBXH',
      'd. Cả ba văn bản trên',
    ],
    correct: 3
  },
  {
    question: 'Khi lắp đặt thiết bị điện các biện pháp kiểm tra nào dưới đây được xem là phù hợp với các văn bản pháp quy hiện hành?',
    options: [
      'a. Qua các chứng chỉ kiểm định do cơ quan có thẩm quyền cấp;',
      'b. Quan sát bằng mắt;',
      'c. Bằng các thí nghiệm hoặc các phép đo lường điện;',
      'd. Cả ba phương pháp nêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Theo TCVN điện trở nối đất tối đa cho mạng điện dân dụng bằng bao nhiêu?',
    options: [
      'a. 2 Ω;',
      'b. 4 Ω;',
      'c. 5 Ω;',
      'd. 6 Ω.',
    ],
    correct: 1
  },
  {
    question: 'Về thời điểm thi công lắp đặt hệ thống chống sét cho các công trình xây dựng thông thường, ý kiến nào sau đây là đúng?',
    options: [
      'a. Công trình cao trên 15 m;',
      'b. Khi bắt đầu lắp đặt kết cấu kim loại ngoài trời;',
      'c. Khi lắp đặt các thiết bị trên cao;',
      'd. Cả ba đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Ở các công trình xây dựng dân dụng thông điện trở nối đất của hệ chống sét có giá trị nào nêu dưới đây:',
    options: [
      'a. 4Ω',
      'b. 6Ω',
      'c. 8Ω',
      'd. 10 Ω',
    ],
    correct: 3
  },
  {
    question: 'Về nguyên lý hệ thống thông gió khác hệ thống điều hòa không khí ở điểm nào dưới đây:',
    options: [
      'a. Không có đường ống dẫn khí;',
      'b. Không có các phụ kiện;',
      'c. Không có hệ thống thiết bị cấp lạnh;',
      'd. Không có quạt.',
    ],
    correct: 2
  },
  {
    question: 'Trước khi môi chất lạnh được nạp vào đường ống dẫn, Phương án nào dưới đây là đúng?',
    options: [
      'a. Chỉ cần thổi bỏ bụi, bẩn bằng không khí khô;',
      'b. Sau khi thử độ kín khít.',
      'c. Sau khi hút chân không;',
      'd. Thực hiện cả ba công việc trên.',
    ],
    correct: 3
  },
  {
    question: 'Mức độ chống sét công trình được phân thành bao nhiêu cấp?',
    options: [
      'a. 2 cấp;',
      'b. 3 cấp;',
      'c. 4 cấp;',
      'd. 5 cấp.',
    ],
    correct: 1
  },
  {
    question: 'Trình tự chạy thử nghiệm thu nào sau đây phù hợp với TCVN 5639-1991 cho dây chuyền công nghệ:',
    options: [
      'b. Đơn động - Liên động: có tải - không tải;',
      'c. Liên động - Đơn động: không tải - có tải;',
      'd. Liên động - Đơn động: có tải - không tải.',
    ],
    correct: 0
  },
  {
    question: 'TCVN 5639- 1991 được áp dụng cho các đối tượng nào dưới đây:',
    options: [
      'a. Tổ chức lắp đặt trong nước',
      'b. Tổ chức lắp đặt có liên doanh với nước ngoài;',
      'c. Tổ chức liên doanh do nước ngoài nhận thầu xây lắp;',
      'd. Cả ba loại hình nêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Nghiệm thu thiết bị công nghệ gồm các nội dung nào dưới đây:',
    options: [
      'a. Nghiệm thu tĩnh;',
      'b. Nghiệm thu chạy thử không tải;',
      'c. Nghiệm thu chạy thử có tải;',
      'd. Thực hiện cả ba nội dung trên.',
    ],
    correct: 3
  },
  {
    question: 'Nghiệm thu chạy thử không tải thiết bị công nghệ nhằm mục tiêu nào dưới đây:',
    options: [
      'a. Đánh giá chất lượng lắp đặt;',
      'b. Tình trạng thiết bị khi chạy không tải;',
      'c. Phát hiện và loại trừ sai sót;',
      'd. Cả ba mục tiêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Khi nghiệm thu chạy thử không tải của máy và thiết bị công nghệ theo mấy bước:',
    options: [
      'a. 3 bước;',
      'b. 2 bước;',
      'c. 4 bước;',
      'd. 1 bước',
    ],
    correct: 1
  },
  {
    question: 'Nhóm máy và thiết bị nào dưới đây không cần bước chạy thử không tải?',
    options: [
      'a. Máy và thiết bị lạnh;',
      'b. Máy nén khí;',
      'c. Máy bơm nước;',
      'd. Cả ba loại máy trên.',
    ],
    correct: 3
  },
  {
    question: 'Nghiệm thu chạy thử không tải chỉ được đánh giá đạt khi nào?',
    options: [
      'a. Đã chạy thử liên tục theo quy định;',
      'b. Thông số dây chuyền phù hợp với thiết kế và công nghệ;',
      'c. Không xẩy ra sự cố kỹ thuật đáng kể;',
      'd. Cả ba yếu tố trên.',
    ],
    correct: 3
  },
  {
    question: 'Mục tiêu nghiệm thu chạy thử có tải là gì?',
    options: [
      'a. Phát hiện và loại trừ khiếm khuyết khi có tải;',
      'b. Điều chỉnh thông số kỹ thuật phù hợp với thiết kế;',
      'c. Chuẩn bị đưa vào sản xuất thử nghiệm;',
      'd. Cả ba mục tiêu trên',
    ],
    correct: 3
  },
  {
    question: 'Khi giám sát lắp đặt và nghiệm thu thiết bị công nghệ phải áp dụng các nguyên tắc cơ bản nào dưới đây?',
    options: [
      'a. Giám sát từ khi khởi công, thường xuyên, liên tục;',
      'b. Tuân thủ nghiêm ngặt các quy định, quy chuẩn, tiêu chuẩn hiện hành liên quan;',
      'c. Khách quan,lấy chỉ tiêu chất lượng làm cơ sở đánh giá;',
      'd. Cả ba nguyên tắc nêu trên',
    ],
    correct: 3
  },
  {
    question: 'Công tác giám sát lắp đặt thiết bị công nghệ bao gồm các nội dung nào dưới đây?',
    options: [
      'a. Giám sát trước lắp đặt;',
      'b. Giám sát quá trình lắp đặt;',
      'c. Giám sát quá trình thử nghiệm và nghiệm thu;',
      'd. Cả ba nội dung trên.',
    ],
    correct: 3
  },
  {
    question: 'Khi giám sát chạy thử thiết bị công nghệ cần thực hiện công việc kiểm tra nào dưới đây?',
    options: [
      'a. Kiểm tra tổng thể thiết bị trước khi chạy thử;',
      'b. Kiểm tra quy trình, tiêu chuẩn áp dụng, trình tự chạy thử;',
      'c. kiểm tra lệnh chạy thử',
      'd. Tất cả các nội dung trên.',
    ],
    correct: 3
  },
  {
    question: 'Thiết bị nào sau đây là thiết bị công trình?',
    options: [
      'a. Thang máy điện,thang máy thủy lực,thang cuốn và băng chở người;',
      'b. Máy nghiền Clanhke;',
      'c. Máy đào;',
      'd. Máy trộn bê tông.',
    ],
    correct: 0
  },
  {
    question: 'Vật liệu làm giếng thang phải đáp ứng các yêu cầu nào dưới đây:',
    options: [
      'a. Đủ độ bền cơ học và có tuổi thọ cao;',
      'b. Chống cháy;',
      'c. Không bám bụi bẩn;',
      'd. Cả ba điều kiện trên.',
    ],
    correct: 3
  },
  {
    question: 'Trước khi lắp đặt phải kiểm tra sai lệch kích thước nào của mặt cắt ngang giếng thang?',
    options: [
      'a. Sai lệch kích thước dài, rộng bên trong vách;',
      'b. Sai lệch giữa hai đường chéo;',
      'c. Khoảng cách tối thiểu hai phần giếng của hai thang lắp kề nhau;',
      'd. Kiểm tra tất cả ba kích thước nêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Ai là người phải xây dựng các biện pháp an toàn cho quá trình lắp đặt thang máy?',
    options: [
      'a. Chủ đầu tư;',
      'b. Đơn vị lắp đặt;',
      'c. Tư vấn giám sát;',
      'd. Nhà cung cấp thang.',
    ],
    correct: 1
  },
  {
    question: 'Để chuẩn bị nghiệm thu thang máy đơn vị lắp đặt phải thực hiện công việc nào dưới đây?',
    options: [
      'a. Hoàn chỉnh hồ sơ kỹ thuật;',
      'b. Đảm bảo điều kiện để thang máy sẵn sàng hoạt động;',
      'c. Đảm bảo các điều khác cho công tác nghiệm thu;',
      'd. Phải thực hiện cả ba công việc nêu trên',
    ],
    correct: 3
  },
  {
    question: 'Để đảm bảo an toàn, thang máy lưu thông trên thị trường phải đáp ứng các điều kiện nào dưới đây:',
    options: [
      'a. Tuân thủ các quy chuẩn quốc gia tương ứng;',
      'b. Chịu sự kiểm tra chất lượng theo quy định của pháp luật;',
      'c. Bị xử lý vi phạm theo luật định;',
      'd. Cả ba điều kiện nêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Đối với thang chở người khi có biểu hiện quá tải phải đảm bảo các yêu cầu nào dưới đây:',
    options: [
      'a. Có tín hiệu âm thanh hoặc ánh sáng phát ra;',
      'b. Các cửa tự động được mở hết ra;',
      'c. Bất kỳ thao tác chuẩn bị nào cũng bị loại bỏ;',
      'd. Tất cả các yêu cầu trên.',
    ],
    correct: 3
  },
  {
    question: 'Thang máy chở người chỉ được đưa vào sử dụng khi nào?',
    options: [
      'a. Theo yêu cầu của chủ đầu tư;',
      'b. Ngay sau khi lắp đặt xong;',
      'c. Sau khi đã được kiểm định về Kỹ thuật an toàn và được cấp phép sử dụng;',
      'd. Theo ý kiến của tư vấn giám sát.',
    ],
    correct: 2
  },
  {
    question: 'Hệ điện trong các công trình dân dụng gồm các thành tố nào dưới đây:',
    options: [
      'a. Nguồn cung cấp điện;',
      'b. Mạng lưới dây dẫn, mạng tiếp địa và các phụ tải;',
      'c. Thiết bị quản lý và điều hành;',
      'd. Cả ba thành tố nêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Nhiệm vụ chính của công tác giám sát thi công và nghiệm thu lắp đặt trang thiết bị điện là gì?',
    options: [
      'a. Thường xuyên theo dõi, giám sát, kiểm tra công tác lắp đặt;',
      'b. Kiểm tra, giám sát vật tư;',
      'c. Theo dõi, kiểm tra về kỹ thuật an toàn;',
      'd. Tất cả ba nhiệm vụ nêu trên',
    ],
    correct: 3
  },
  {
    question: 'Yêu cầu nào dưới đây là yêu cầu chủ yếu đối với thiết bị điện công trình?',
    options: [
      'a. Bảo đảm mạng điện làm việc ổn định;',
      'b. Bảo đảm sử dụng thuận tiện và có thể tách rời nhanh chóng khỏi hệ thống cấp điện khi cần;',
      'c. Bảo đảm an toàn cho người và thiết bị;',
      'd. Cả ba yêu cầu nêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Mục tiêu chính của kiểm tra bằng mắt trong lắp đặt điện là gì?',
    options: [
      'a. Sự phù hợp của dây dẫn, thiết bị đã chọn và vị trí lắp đặt so với thiết kế được duyệt;',
      'b. Trạng thái của dây dẫn, thiết bị;',
      'c. Các biện pháp an toàn;',
      'd. Tất cả các mục tiêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Vị trí đặt bảng (tủ) phân phối điện phải đáp ứng các yêu cầu nào dưới đây:',
    options: [
      'a. Ở nơi dễ lui tới, dễ thao tác và kiểm tra;',
      'b. Ở nơi có môi trường khô ráo, thông gió tốt;',
      'c. Cách xa các đường ống dẫn nước, khi tối thiểu là 0.5 m;',
      'd. Cả ba yêu cầu trên.',
    ],
    correct: 3
  },
  {
    question: 'Nội dung chính khi nghiệm thu lắp đặt hệ thống điện gồm các mục nào dưới đây:',
    options: [
      'a. Kiểm tra chủng loại, khối lượng, số lượng, chất lượng, vị trí, phương pháp lắp đặt phù hợp với thiết kế được duyệt;',
      'b. Kiểm tra thông mạch hệ thống;',
      'c. Kiểm tra cách điện giữa các pha, phương pháp nối đất, chống rò điện;',
      'd. Theo cả ba nội dung trên.',
    ],
    correct: 3
  },
  {
    question: 'Ai là người đo điện trở nối đất của hệ chống sét:',
    options: [
      'a. Chủ đầu tư;',
      'b. Chủ thầu lắp đặt;',
      'c. Tư vấn giám sát;',
      'd. Đơn vị độc lập có chức năng.',
    ],
    correct: 3
  },
  {
    question: 'Các nội dung nào dưới đây thuộc nội dung giám sát thi công lắp đặt, hệ thống điều hòa không khí?',
    options: [
      'a. Kiểm tra tổng thể công tác chuẩn bị lắp đặt;',
      'b. Giám sát việc gia công chế tạo chi tiết, cụm chi tiết;',
      'c. Giám sát quá trình lắp đặt và thử nghiệm, nghiệm thu;',
      'd. Cả ba nội dung nêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Khi giám sát lắp đặt đường ống dẫn gió cần kiểm tra các nội dung nào dưới đây:',
    options: [
      'a. Vật liệu chế tạo, hình dạng, kích thước và dung sai, vị trí lắp đặt, khoảng cách gối đỡ;',
      'b. Phương pháp và cấu tạo các mối nối;',
      'c. Tình trạng và vị trí lắp đặt các phụ kiện;',
      'd. Tất cả các nội dung nêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Khi giám sát lắp đặt quạt phải chú ý các nội dung nào dưới đây:',
    options: [
      'a. Đặc tính kỹ thuật và hướng dẫn lắp đặt của nhà sản xuất;',
      'b. Độ cứng vững của móng, kích thước và sai số kích thước của bu lông móng;',
      'c. Các biện pháp đảm bảo an toàn của hệ truyền động.',
      'd. Tất cả các nội dung nêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Trước khi lắp đặt máy của hệ thống lạnh phải thực hiện công việc kiểm tra nào dưới đây?',
    options: [
      'a. Chất lượng và tình trạng kỹ thuật của máy;',
      'b. Tình trạng và sự phù hợp của các bộ phận đi kèm;',
      'c. Sự phù hợp của móng máy so với TCVN hoặc nhà sản xuất;',
      'd. Cả ba nội dung trên.',
    ],
    correct: 3
  },
  {
    question: 'Hồ sơ nghiệm thu hệ thống lạnh bao gồm các nội dung nào dưới đây:',
    options: [
      'a. Các bản vẽ thiết kế, hoàn công, các chứng chỉ xuất xứ, chất lượng, các biên bản kiểm tra, thử nghiệm từng phần;',
      'b. Biên bản kiểm tra thử nghiệm các thông số kỹ thuật của hệ thống;',
      'c. Các chứng chỉ hợp chuẩn của thiết bị trước khi lắp đặt;',
      'd. Cả ba nội dung trên.',
    ],
    correct: 3
  },
];
