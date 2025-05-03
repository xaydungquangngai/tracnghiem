const questions = [
  {
    question: 'Định nghĩa Luồng tàu biển:',
    options: [
      'a. Là một tuyến luồng hàng hải',
      'b. Là một tuyến luồng hàng hải cho phép tàu biển đi lại thuận lợi',
      'c. Là một tuyến luồng hàng hải cho phép tàu biển đi lại an toàn',
      'd. Là một tuyến luồng hàng hải cho phép tàu biển đi lại thuận lợi và an toàn',
    ],
    correct: 3
  },
  {
    question: 'Thế nào là Luồng có mặt cắt không bị giới hạn?',
    options: [
      'a. Là các luồng tự nhiên hoặc nạo vét một phần ở khu vực nước có độ rộng lớn.',
      'b. Là các luồng được nạo vét sâu hơn so với khu vực nước xung quanh',
      'c. Là Loại luồng được hình thành chủ yếu do nạo vét',
      'd. Là luồng có chiều dày nạo vét và phạm vi nạo vét vượt trên mực nước chạy tàu hay còn gọi là luồng nhân tạo',
    ],
    correct: 0
  },
  {
    question: 'Thế nào là Luồng có mặt cắt bị hạn chế hoàn toàn?',
    options: [
      'a. Là các luồng tự nhiên hoặc nạo vét một phần ở khu vực nước có độ rộng lớn.',
      'b. Là các luồng được nạo vét sâu hơn so với khu vực nước xung quanh',
      'c. Là Loại luồng được hình thành chủ yếu do nạo vét',
      'd. Là luồng có chiều dày nạo vét và phạm vi nạo vét vượt trên mực nước chạy tàu hay còn gọi là luồng nhân tạo',
    ],
    correct: 3
  },
  {
    question: 'Thế nào là Luồng một làn?',
    options: [
      'a. Là luồng chỉ có một làn chạy tàu',
      'b. Là luồng chỉ có một làn chạy tàu cho phép chạy tàu ra hoặc vào',
      'c. Là luồng một làn chạy tàu thường được bố trí các vị trí tránh tàu',
      'd. Cả hai đáp án b và c',
    ],
    correct: 3
  },
  {
    question: 'Định nghĩa chiều cao sóng?',
    options: [
      'a. Chiều cao tính từ bụng sóng trước đến đỉnh sóng',
      'b. Chiều cao tính từ mực nước biển trung bình đến đỉnh sóng',
      'c. Chiều cao tính từ mực nước biển trung bình đến bụng sóng',
      'd. Chiều cao từ đỉnh sóng trước đến đỉnh sóng sau',
    ],
    correct: 0
  },
  {
    question: 'Các loại tải trọng môi trường nào là phổ biến trong thiết kế xây dựng mới, cải tạo nâng cấp và bảo trì cho các loại công trình cảng biển?',
    options: [
      'a. Tải trọng sóng',
      'b. Tải trọng dòng chảy',
      'c. Tải trọng gió',
      'd. Cả 3 loại tải trọng trên',
    ],
    correct: 3
  },
  {
    question: 'Tải trọng trong thiết kế xây dựng mới, cải tạo nâng cấp và bảo trì cho các loại công trình cảng biển được phân loại theo sự biến động thời gian bao gồm?',
    options: [
      'a. Tải trọng dài hạn, tải trọng ngắn hạn',
      'b. Tải trọng thường xuyên, tải trọng tạm thời, tải trọng sự cố',
      'c. Tải trọng bản thân, tải trọng môi trường',
      'd. Cả 3 cách phân loại trên không đúng',
    ],
    correct: 1
  },
  {
    question: 'Tải trọng nào sau đây được xem là tải trọng tạm thời:',
    options: [
      'a. Tải trọng sóng;',
      'b. Tải trọng do dòng chảy.',
      'c. Tải trọng đi cùng với các hoạt động của tàu',
      'd. Cả 3 loại tải trọng trên',
    ],
    correct: 3
  },
  {
    question: 'Các loại sóng biển có liên quan đến kỹ thuật xây dựng các loại công trình cảng biển?',
    options: [
      'a. Sóng do gió',
      'b. Sóng do tàu;',
      'c. Sóng thần, sóng do triều giả, sóng chu kỳ dài',
      'd. Tất cả các loại trên',
    ],
    correct: 3
  },
  {
    question: 'Tác động do các chuyển động của tàu bị neo gây ra do:',
    options: [
      'a. Sóng tác động lên tàu',
      'b. Lực do gió',
      'c. Lực do dòng chảy',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Công trình cần phải phải tính toán và cấu tạo kháng chấn khi giá trị gia tốc nền thiết kế:',
    options: [
      'a. ag≥ 0.02g',
      'b. ag≥ 0.04g',
      'c. ag≥ 0.06g',
      'd. ag≥ 0.08g',
    ],
    correct: 3
  },
  {
    question: 'Yêu cầu về bề rộng khe nứt giới hạn của BTCT được quy định:',
    options: [
      'a. Vùng ngập nước: <=0.1mm; Vùng nước lên xuống <=0.05; Vùng khí quyển: <=0.15mm.',
      'b. Vùng ngập nước: <=0.05mm; Vùng nước lên xuống <=0.05; Vùng khí quyển: <=0.1mm.',
      'c. Vùng ngập nước: <=0.1mm; Vùng nước lên xuống <=0.05; Vùng khí quyển: <=0.1mm.',
      'd. Vùng ngập nước và vùng nước lên xuống: <=0.08mm; Vùng khí quyển: <=0.1mm.',
    ],
    correct: 2
  },
  {
    question: 'Phân cấp công trình (cấp kỹ thuật) đê biển theo:',
    options: [
      'a. Chiều cao lớn nhất của công trình hoặc độ sâu mực nước',
      'b. Quy mô công trình và diện tích bảo vệ',
      'c. Loại hình công trình',
      'd. Tuổi thọ công trình',
    ],
    correct: 0
  },
  {
    question: 'Kết cấu công trình đê chắn sóng phải thỏa mãn tốt nhất các điều kiện nào:',
    options: [
      'a. Chi phí vật liệu xây dựng là nhỏ nhất',
      'b. Có tuổi thọ phù hợp với yêu cầu thiết kế',
      'c. Duy tu bảo dưỡng dễ dàng và chi phí thấp',
      'd. Tất cả các yêu cầu trên',
    ],
    correct: 3
  },
  {
    question: 'Chiều cao sóng thiết kế trong tính toán kết cấu đê biển dựa trên:',
    options: [
      'a. Số liệu sóng thực đo',
      'b. Số liệu sóng quan trắc từ vệ tinh',
      'c. Tốc độ gió tính toán ứng với vận tốc gió nào đó theo quy định',
      'd. Tốc độ gió bão',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế công trình đê chắn sóng, tải trọng động động đất không cần xét đến khi gia tốc nền không vượt quá:',
    options: [
      'a. 0,01g',
      'b. 0,03g',
      'c. 0,04g',
      'd. 0,06g',
    ],
    correct: 2
  },
  {
    question: 'Bố trí đê chắn sóng cho bể cảng phải đảm bảo:',
    options: [
      'a. Các đê chắn sóng phải được bố trí sao cho lối vào bể cảng không phải đối mặt với hướng có sóng thường xuyên nhất và hướng có sóng cao nhất để giảm sóng xâm nhập vào bể cảng.',
      'b. Cần bố trí tuyến đê chắn sóng để bảo vệ bể cảng khỏi những đợt sóng thường xuyên nhất và sóng cao nhất.',
      'c. Lối vào bể cảng phải có chiều rộng hiệu dụng đủ để không gây trở ngại cho tàu thuyền và phải định hướng luồng tàu theo hướng giúp cho việc di chuyển dễ dàng.',
      'd. Tất cả các yêu cầu trên',
    ],
    correct: 3
  },
  {
    question: 'Cấp công trình bến phụ thuộc vào',
    options: [
      'a. Lượng hàng thông qua bến',
      'b. Mức độ quan trọng của bến',
      'c. Chiều cao công trình',
      'd. Trọng tải của tàu',
    ],
    correct: 3
  },
  {
    question: 'Cấp kỹ thuật công trình cảng biển phụ thuộc vào',
    options: [
      'a. Lượng hàng thông qua bến',
      'b. Mức độ quan trọng của bến',
      'c. Chiều cao công trình',
      'd. Trọng tải của tàu',
    ],
    correct: 2
  },
  {
    question: 'Tuổi thọ thiết kế của công trình hay bộ phân công trình cảng biển',
    options: [
      'a. Khoảng thời gian theo quyết định phê duyệt xây dựng',
      'b. Khoảng thời gian công trình được sử dụng trong thực tế',
      'c. Khoảng thời gian giả thiết mà công trình hay bộ phận của công trình sẽ được sử dụng theo mục đích mong muốn',
      'd. Khoảng thời gian sẽ được sử dụng theo thiết kế mong muốn với quy trình duy tu và bảo dưỡng phù hợp',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp hệ số thành phần',
    options: [
      'a. Các giá trị đặc trưng của tác động (tải trọng) nhân với các hệ số thành phần tương ứng trong từng trường hợp thiết kế cụ thể sao cho các kích thước của kết cấu công trình lựa chọn phải thỏa mãn các điều kiện thiết kế và khai thác đặt ra',
      'b. Các giá trị đặc trưng của tác động (tải trọng) và vật liệu (khả năng chịu lực) với các hệ số thành phần tương ứng trong từng trường hợp thiết kế cụ thể',
      'c. Các giá trị đặc trưng của tác động (tải trọng) và vật liệu (khả năng chịu lực) với các hệ số thành phần tương ứng trong từng trường hợp thiết kế cụ thể sao cho các kích thước và vật liệu của kết cấu công trình lựa chọn phải đảm bảo độ bền',
      'd. Các giá trị đặc trưng của tác động (tải trọng) và vật liệu (khả năng chịu lực) với các hệ số thành phần tương ứng trong từng trường hợp thiết kế cụ thể sao cho các kích thước và vật liệu của kết cấu công trình lựa chọn phải thỏa mãn các điều kiện thiết kế và khai thác đặt ra',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp hệ số thành phần áp dụng trong trường hợp',
    options: [
      'a. Có biến động ngẫu nhiên lớn về các tác động của tải trọng, địa chất nền đất công trình và các dạng kết cấu mới ít hoặc chưa được áp dụng phổ biến',
      'b. Có biến động ngẫu nhiên lớn về các tác động của tải trọng, địa chất nền đất công trình hoặc các dạng kết cấu mới ít hoặc chưa được áp dụng phổ biến',
      'c. Có biến động ngẫu nhiên lớn về các tác động của tải trọng, địa chất nền đất công trình',
      'd. Các dạng kết cấu mới ít hoặc chưa được áp dụng phổ biến',
    ],
    correct: 1
  },
  {
    question: 'Phương pháp hệ số tải trọng và hệ số sức kháng thường được áp dụng trong những trường hợp',
    options: [
      'a. Tác động của tải trọng, địa chất nền công trình ít biến động ngẫu nhiên và các dạng kết cấu truyền thống như bến cầu tàu, tường cừ hay bến trọng lực',
      'b. Các dạng kết cấu truyền thống như bến cầu tàu, tường cừ hay bến trọng lực',
      'c. Tác động của tải trọng, địa chất nền công trình ít biến động ngẫu nhiên',
      'd. Tác động của tải trọng, địa chất nền công trình ít biến động ngẫu nhiên hoặc các dạng kết cấu truyền thống như bến cầu tàu, tường cừ hay bến trọng lực',
    ],
    correct: 0
  },
  {
    question: 'Vị trí thanh neo của kết cấu tường cừ có neo',
    options: [
      'a. Vị trí thanh neo ít ảnh hưởng đến tiết diện cừ và tiết diện thanh neo, cao độ đặt thanh neo thông thường ở vị trí 2/3 biên độ triều so với mực nước thấp thiết kế',
      'b. Vị trí thanh neo có ảnh hưởng lớn đến tiết diện cừ và tiết diện thanh neo, cao độ đặt thanh neo thông thường ở vị trí 2/3 biên độ triều so với mực nước thấp thiết kế',
      'c. Vị trí thanh neo ít ảnh hưởng đến tiết diện cừ và tiết diện thanh neo, cao độ đặt thanh neo thông thường ở vị trí 2/3 biên độ triều so với mực nước trung bình',
      'd. Vị trí thanh neo có ảnh hưởng lớn đến tiết diện cừ và tiết diện thanh neo, cao độ đặt thanh neo thông thường ở vị trí 2/3 biên độ triều so với mực nước trung bình',
    ],
    correct: 1
  },
  {
    question: 'Hệ số điều chỉnh được sử dụng khi tính toán sức kháng nhổ dọc trục thiết kế cho điều kiện thiết kế bình thường',
    options: [
      'a. Điều kiện bình thường là 3,0 và khi động đất là 2,5',
      'b. Điều kiện bình thường là 2,5 và khi động đất là 3,0',
      'c. Điều kiện bình thường là 2,5 và khi động đất là 2,0',
      'd. Điều kiện bình thường là 2,0 và khi động đất là 2,5',
    ],
    correct: 0
  },
  {
    question: 'Tốc độ gió cho phép trong khai thác công trình bến được quy định bởi',
    options: [
      'a. Khả năng làm việc của các thiết bị trên bến',
      'b. Khả năng chịu lực của bến',
      'c. Người vận hành khai thác bến',
      'd. Địa điểm xây dựng công trình',
    ],
    correct: 0
  },
  {
    question: 'Khi xem xét đến yếu tố sóng, hướng tuyến luồng nên được bố trí',
    options: [
      'a. Song song với hướng sóng',
      'b. Vuông góc với hướng sóng',
      'c. Tạo với hướng sóng tới góc khoảng 25-30 độ.',
      'd. Không phụ thuộc vào hướng sóng',
    ],
    correct: 2
  },
  {
    question: 'Độ dằn của tầu (độ chìm xuống của tầu so với mực nước tĩnh) lớn nhất khi',
    options: [
      'a. Vận tốc chạy tầu lớn và độ sâu chạy tầu nhỏ',
      'b. Vận tốc chạy tầu lớn và độ sâu chạy tầu lớn',
      'c. Vận tốc chạy tầu nhỏ và độ sâu chạy tầu lớn',
      'd. Vận tốc chạy tầu nhỏ và độ sâu chạy tầu nhỏ.',
    ],
    correct: 0
  },
  {
    question: 'Khi kiểm tra mức độ khó khăn của quá trình hành hải, phương pháp nào sau đây được sử dụng:',
    options: [
      'a. Phương pháp thực nghiệm',
      'b. Phương pháp chuyên gia',
      'c. Phương pháp mô phỏng lái tầu',
      'd. Cả 3 phương pháp trên',
    ],
    correct: 3
  },
  {
    question: 'Mức “0” của cao độ hải đồ khu vực là:',
    options: [
      'a. Mực nước thấp nhất quan trắc được tại khu vực trong nhiều năm',
      'b. Mực nước trung bình',
      'c. Trung bình của mực nước thấp nhất hàng năm',
      'd. Mức “0” tại trạm Hòn Dấu',
    ],
    correct: 0
  },
  {
    question: 'Cao trình bến tối ưu được xác định từ điều kiện:',
    options: [
      'a. Phân tích bài toán kinh tế giữa đầu tư và khai thác',
      'b. Xác suất cảng bị ngập khoảng 0,1%',
      'c. Không bị ngập trong mọi trường hợp',
      'd. Lớn hơn của mực nước cao thiết kế cộng 1m hoặc mực nước trung bình cộng 2m.',
    ],
    correct: 3
  },
  {
    question: 'Tầu Feeder là loại tầu:',
    options: [
      'a. Gom container chạy trên các tuyến ven biển với khoảng cách ngắn',
      'b. Pha sông biển',
      'c. Đi trong kênh',
      'd. Đi trong song',
    ],
    correct: 0
  },
  {
    question: 'Khi dòng chảy song song với tuyến mép bến, hướng tầu (trục từ đuôi đến mũi tầu) khi cập bến nên:',
    options: [
      'a. Cùng với hướng dòng chảy',
      'b. Vuông góc với hướng dòng chảy',
      'c. Nghiêng 45 độ so với hướng dòng chảy',
      'd. Ngược với hướng dòng chảy',
    ],
    correct: 3
  },
  {
    question: 'Các yếu tố nào sau đây KHÔNG được xem xét đến trong thiết kế luồng tầu theo tiêu chuẩn luồng đường thủy nội địa Việt Nam:',
    options: [
      'a. Mức độ nguy hiểm của loại hàng',
      'b. Mật độ tầu trên luồng',
      'c. Địa chất luồng',
      'd. Hệ số an toàn',
    ],
    correct: 3
  },
  {
    question: 'Mực nước cao thiết kế được xác định từ:',
    options: [
      'a. Trung bình mực nước ngày lớn trong chuỗi số liệu đo nhiều năm.',
      'b. Trung bình mực nước tháng lớn nhất trong chuỗi số liệu đo nhiều năm.',
      'c. Mực nước giờ tương ứng với tần suất xuất hiện trong chuỗi số liệu đo nhiều năm.',
      'd. Mực nước cao nhất trong nhiều năm.',
    ],
    correct: 2
  },
  {
    question: 'Tốc độ gió trong tính toán tải trọng neo tầu được lấy',
    options: [
      'a. Bằng tốc độ gió lớn nhất trong nhiều năm',
      'b. Bằng tốc độ gió trung bình trong nhiều năm',
      'c. Bằng khoảng 20-22m/s.',
      'd. Bằng tốc độ gió tương ứng với tần suất xuất hiện 5%.',
    ],
    correct: 2
  },
  {
    question: 'Chiều cao sóng thiết kế trong tính toán kết cấu công trình cảng được tính dựa trên',
    options: [
      'a. Số liệu thực đo trong nhiều năm.',
      'b. Số liệu quan trắc từ vệ tinh.',
      'c. Tốc độ gió tính toán tương ứng với tần suất xuất hiện nào đó.',
      'd. Không có lựa chọn nào đúng.',
    ],
    correct: 2
  },
  {
    question: 'Theo tiêu chuẩn Việt Nam, chiều cao sóng H1% được hiểu là',
    options: [
      'a. Chiều cao trung bình của 1% con sóng lớn nhất',
      'b. Chiều cao sóng với tần suất xuất hiện 1%.',
      'c. Chiều cao sóng lớn nhất với ứng với chu kỳ lặp lại 100 năm',
      'd. Chiều cao sóng ứng với vận tốc gió với chu kỳ lặp 100 năm.',
    ],
    correct: 3
  },
  {
    question: 'Trọng tải tầu (DWT) được hiểu là',
    options: [
      'a. Lượng hàng lớn nhất mà tầu chở được',
      'b. Tổng trọng lượng tầu và lượng hàng lớn nhất mà tầu chở được.',
      'c. Tổng trọng lượng tầu, nhiên liệu, nước ballast và lượng hàng lớn nhất mà tầu chở được.',
      'd. Trọng lượng tầu lớn nhất không kể hàng.',
    ],
    correct: 0
  },
  {
    question: 'Thời gian khác thác của cảng phụ thuộc vào',
    options: [
      'a. Hệ số bận bến',
      'b. Điều kiện tự nhiên',
      'c. Thiết bị và công nghệ',
      'd. Cả b) và c)',
    ],
    correct: 3
  },
  {
    question: 'Độ tĩnh lặng của bể cảng được xác định từ',
    options: [
      'a. Thời gian cảng có thể khai thác bình thường trong một năm.',
      'b. Thời gian lặng gió trong một năm.',
      'c. Thời gian sóng lặng trong năm.',
      'd. Thời gian sóng có chiều cao nhỏ hơn hoặc bằng chiều cao nào đó trong năm.',
    ],
    correct: 3
  },
  {
    question: 'Kho CFS dùng để',
    options: [
      'a. Chứa container',
      'b. Kiểm tra container',
      'c. Tháo dỡ và đóng gói hàng vào container',
      'd. Giao nhận hàng container',
    ],
    correct: 2
  },
  {
    question: 'Cấp công trình bến phụ thuộc vào',
    options: [
      'a. Lượng hàng thông qua bến',
      'b. Mức độ quan trọng của bến',
      'c. Người ra quyết định',
      'd. Trọng tải tầu và chiều sâu trước bến',
    ],
    correct: 3
  },
  {
    question: 'Tốc độ gió cho phép trong khai thác công trình bến được quy định bởi',
    options: [
      'a. Khả năng làm việc của các thiết bị trên bến',
      'b. Khả năng chịu lực của công trình bến',
      'c. Người khai thác',
      'd. Tiêu chuẩn thiết kế',
    ],
    correct: 0
  },
  {
    question: 'Bến dạng trụ va neo cập hay được xây dựng cho các bến chuyên dụng dầu khí vì',
    options: [
      'a. Dễ phòng chống cháy nổ',
      'b. Thuận lợi trong quá trình khai thác',
      'c. Dễ neo cập',
      'd. Công nghệ hút rót',
    ],
    correct: 3
  },
  {
    question: 'Đường thủy nội địa được phân cấp theo',
    options: [
      'a. Kích thước sông/kênh',
      'b. Kích thước tầu',
      'c. Lượng hàng',
      'd. Tầm quan trọng',
    ],
    correct: 0
  },
  {
    question: 'Chiều sâu chạy tầu trên luồng được tính từ',
    options: [
      'a. Mực nước 0 hải đồ đến cao độ đáy nạo vét',
      'b. Mực nước 0 hải đồ đến cao độ đáy chạy tầu',
      'c. Mực nước chạy tầu đến cao độ đáy nạo vét',
      'd. Mực nước chạy tầu đến cao độ đáy chạy tầu.',
    ],
    correct: 1
  },
  {
    question: 'Khoảng dừng của tầu có thể xác định sơ bộ từ',
    options: [
      'a. Chiều dài tầu thiết kế',
      'b. Vận tốc tầu chạy trên luồng',
      'c. Trọng tải tầu thiết kế',
      'd. Công suất của máy tầu',
    ],
    correct: 0
  },
  {
    question: 'Công trình luồng hàng hải được phân thành',
    options: [
      'a. 4 cấp và một cấp đặc biệt',
      'b. 3 cấp và một cấp đặc biệt',
      'c. 4 cấp',
      'd. 3 cấp',
    ],
    correct: 0
  },
  {
    question: 'Chiều sâu nước trước bến được tính từ:',
    options: [
      'a. Mực nước 0 Hải đồ đến cao độ đáy bến;',
      'b. Mực nước 0 Hải đồ đến cao độ đáy chạy tàu;',
      'c. Mực nước thấp thiết kế đến cao độ đáy bến;',
      'd. Mực nước thấp thiết kế đến cao độ đáy chạy tàu',
    ],
    correct: 2
  },
  {
    question: 'Vùng đất cảng của cảng thuỷ nội địa được quy định thế nào là đúng sau đây?',
    options: [
      'a. Được giới hạn để xây dựng cầu cảng, kho, bãi, nhà xưởng, trụ sở, cơ sở dịch vụ, hệ thống giao thông, thông tin liên lạc, điện, nước, lắp đặt thiết bị và công trình phụ trợ khác.',
      'b. Vùng được giới hạn để thiết lập vùng nước trước cầu cảng, vùng quay trở, khu neo đậu, khu chuyển tải, khu hạ tải, khu tránh bão;',
      'c. Thoả mãn cả 2 quy định trên',
      'd. Các quy định trên không đúng',
    ],
    correct: 0
  },
  {
    question: 'Vùng nước cảng của cảng thuỷ nội địa được quy định thế nào là đúng sau đây?',
    options: [
      'a. Được giới hạn để xây dựng cầu cảng, kho, bãi, nhà xưởng, điện, nước, lắp đặt thiết bị và công trình phụ trợ khác.',
      'b. Vùng nước cảng được giới hạn để thiết lập vùng nước trước cầu cảng, vùng quay trở, khu neo đậu, khu chuyển tải, khu hạ tải, khu tránh bão;',
      'c. Được giới hạn để xây dựng trụ sở, cơ sở dịch vụ, hệ thống giao thông, thông tin liên lạc, và công trình phụ trợ khác.',
      'd. Các quy định trên đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Công trình nào sau đây là Cảng thủy nội địa?',
    options: [
      'a. Là hệ thống công trình được xây dựng để phương tiện, tàu biển neo đậu, xếp dỡ hàng hóa, đón trả hành khách và thực hiện dịch vụ hỗ trợ khác',
      'b. Là công trình độc lập có quy mô nhỏ, gồm vùng đất và vùng nước trước bến để phương tiện neo đậu, xếp dỡ hàng hóa, đón trả hành khách và thực hiện dịch vụ hỗ trợ khác',
      'c. Cả 2 dạng công trình ở trên',
      'd. Là Vùng đất cảng được giới hạn để xây dựng cầu cảng, kho, bãi, nhà xưởng, trụ sở, cơ sở dịch vụ và công trình phụ trợ khác.',
    ],
    correct: 0
  },
  {
    question: 'Khi lựa chọn kết cấu công trình bến cảng thủy nội địa cần chú ý đến các đặc điểm về tác động bất lợi của điều kiện tự nhiên nào sau đây?',
    options: [
      'a. Dao động mực nước giữa mùa cạn và mùa lũ thường có biên độ rất lớn; Dòng chảy trước bến thường có lưu tốc cao, đặc biệt là vào mùa lũ',
      'b. Bờ và đáy sông ven công trình bến chịu tác động bồi xói theo chu trình, phụ thuộc vào quá trình diễn biến của lòng dẫn trên cả đoạn sông',
      'c. Cả 2 nội dung a và b',
      'd. Hướng dòng chảy và địa chất công trình.',
    ],
    correct: 2
  },
  {
    question: 'Kết cấu công trình bến được chọn phải thỏa mãn tốt nhất các yêu cầu nào sau đây?',
    options: [
      'a. Chi phí cho các vật liệu xây dựng chủ yếu (sắt thép, xi măng, gỗ) ở mức thấp nhất;',
      'b. Có tuổi thọ công trình phù hợp với thời hạn sử dụng bến quy định trong yêu cầu thiết kế;',
      'c. Khai thác thuận tiện, dễ duy tu sửa chữa.',
      'd. Tất cả các nội dung ở trên',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp (mô hình) nào sau đây được sử dụng để xác định chiều cao sóng thiết kế:',
    options: [
      'a. Mô hình mô phỏng',
      'b. Mô hình vật lý',
      'c. Mô hình thực nghiệm',
      'd. Mô hình toán',
    ],
    correct: 3
  },
];
