const questions = [
  {
    question: 'Định nghĩa Mực nước chạy tàu:',
    options: [
      'a. Là mực nước mà khi chạy tàu ở mực nước đó trở lên tàu có thể hành hải an toàn.',
      'b. Là mực nước thấp nhất mà khi chạy tàu ở mực nước đó trở lên tàu có thể hành hải an toàn',
      'c. Là mực nước cao nhất mà khi chạy tàu ở mực nước đó trở lên tàu có thể hành hải an toàn',
      'd. Là mực nước trung bình mà khi chạy tàu ở mực nước đó trở lên tàu có thể hành hải an toàn',
    ],
    correct: 0
  },
  {
    question: 'Định nghĩa Tốc độ tới hạn:',
    options: [
      'a. Là tốc độ tối đa cho phép tàu hành hải trên luồng',
      'b. Là tốc độ nhỏ nhất cho phép tàu hành hải trên luồng',
      'c. Là tốc độ trung bình cho phép tàu hành hải trên luồng',
      'd. Là tốc độ cho phép tàu hành hải trên luồng',
    ],
    correct: 0
  },
  {
    question: 'Các yếu tố về khí tượng lấy theo tài liệu quan trắc của trạm trên bờ, lấy ít nhất bao nhiêu năm ?',
    options: [
      'a. 5 năm',
      'b. 10 năm',
      'c. 12 năm',
      'd. 15 năm',
    ],
    correct: 2
  },
  {
    question: 'Mực nước theo quan trắc từng giờ ít nhất bao nhiêu năm?',
    options: [
      'a. 3 năm',
      'b. 5 năm',
      'c. 7 năm',
      'd. 10 năm',
    ],
    correct: 0
  },
  {
    question: 'Chiều sâu chạy tàu HCT đối với cấp công trình đặc biệt của Luồng ở cửa biển, cửa vịnh hở, trên biển là bao nhiêu m?',
    options: [
      'a. HCT ≥ 20',
      'b. 16 ≤ HCT < 20',
      'c. 14 ≤ HCT < 16',
      'd. 8 ≤ HCT < 14',
    ],
    correct: 0
  },
  {
    question: 'Chiều sâu chạy tàu HCT đối với cấp công trình loại 1 của Luồng ở cửa biển, cửa vịnh hở, trên biển là bao nhiêu m?',
    options: [
      'a. HCT ≥ 20',
      'b. 16 ≤ HCT < 20',
      'c. 14 ≤ HCT < 16',
      'd. 8 ≤ HCT < 14',
    ],
    correct: 1
  },
  {
    question: 'Chiều sâu chạy tàu HCT đối với cấp công trình đặc biệt của Luồng trong vịnh kín, đầm phá, luồng đào cho tàu biển là bao nhiêu m?',
    options: [
      'a. HCT ≥ 17',
      'b. 14 ≤ HCT < 17',
      'c. 12 ≤ HCT < 14',
      'd. 7 ≤ HCT < 12',
    ],
    correct: 0
  },
  {
    question: 'Chiều sâu chạy tàu HCT đối với cấp công trình loại 1 của Luồng trong vịnh kín, đầm phá, luồng đào cho tàu biển là bao nhiêu m?',
    options: [
      'a. HCT ≥ 17',
      'b. 14 ≤ HCT < 17',
      'c. 12 ≤ HCT < 14',
      'd. 7 ≤ HCT < 12',
    ],
    correct: 1
  },
  {
    question: 'Chiều dài luồng được xác định căn cứ vào',
    options: [
      'a. Hướng của luồng',
      'b. Địa hình tự nhiên của đáy',
      'c. Chiều sâu tuyến đường thủy tính toán',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Chiều dài đoạn luồng thẳng nối giữa hai khúc luồng cong ngược chiều được lấy tối thiểu bằng bao nhiêu chiều dài L lớn nhất của tàu thiết kế?',
    options: [
      'a. 3L',
      'b. 4L',
      'c. 5L',
      'd. 6L',
    ],
    correct: 2
  },
  {
    question: 'Chiều dài đoạn luồng thẳng nối giữa hai khúc luồng cong cùng chiều được lấy tối thiểu bằng bao nhiêu chiều dài L lớn nhất của tàu thiết kế?',
    options: [
      'a. 3L',
      'b. 4L',
      'c. 5L',
      'd. 6L',
    ],
    correct: 0
  },
  {
    question: 'Chiều sâu chạy tàu bằng?',
    options: [
      'a. Mớn nước của tàu tính toán',
      'b. Mớn nước của tàu tính toán + tổng độ sâu dự phòng',
      'c. Mớn nước của tàu tính toán + Ảnh hưởng của tàu thiết kế',
      'd. Mớn nước của tàu tính toán + Ảnh hưởng của đáy biển',
    ],
    correct: 1
  },
  {
    question: 'Kích thước chuẩn của khu nước vũng quay tàu theo phương pháp quay mũi không có trợ giúp của tàu lai dắt là khu nước có dạng hình tròn có đường kính bằng bao nhiêu chiều dài tàu?',
    options: [
      'a. 2 lần chiều dài tàu',
      'b. 3 lần chiều dài tàu',
      'c. 4 lần chiều dài tàu',
      'd. 5 lần chiều dài tàu',
    ],
    correct: 2
  },
  {
    question: 'Kích thước chuẩn của khu nước vũng quay tàu theo phương pháp quay mũi có dùng tàu lai dắt là khu nước có dạng hình tròn có đường kính bằng bao nhiêu chiều dài tàu?',
    options: [
      'a. 2 lần chiều dài tàu',
      'b. 3 lần chiều dài tàu',
      'c. 4 lần chiều dài tàu',
      'd. 5 lần chiều dài tàu',
    ],
    correct: 0
  },
  {
    question: 'Chiều cao sóng giới hạn cho bốc xếp hàng đối với tàu nhỏ hơn 5000GT?',
    options: [
      'a. 0.3m',
      'b. 0.4m',
      'c. 0.5m',
      'd. 0.7m',
    ],
    correct: 0
  },
  {
    question: 'Chống sa bồi luồng tàu biển bằng các giải pháp công trình bao gồm?',
    options: [
      'a. Đê chắn sóng',
      'b. Đê hướng dòng',
      'c. Đê ngăn cát - giảm sóng',
      'd. Cả 3 đáp án trên',
    ],
    correct: 2
  },
  {
    question: 'Kích thước tiêu chuẩn của khu nước vũng quay tàu trong trường hợp có sử dụng tàu lai dắt là bao nhiêu?',
    options: [
      'a. Hình dạng đường tròn có đường kính 1,6Loa',
      'b. Hình dạng đường tròn có đường kính 2,0Loa',
      'c. Hình dạng đường tròn có đường kính 3,0Loa',
      'd. Hình dạng đường tròn có đường kính 4,0Loa',
    ],
    correct: 1
  },
  {
    question: 'Định nghĩa chiều cao sóng có nghĩa?',
    options: [
      'a. Chiều cao sóng trung bình của tất cả các con sóng đi qua điểm không trong một trạng thái biển',
      'b. Chiều cao sóng trung bình của 1/2 các con sóng đi qua điểm không trong một trạng thái biển',
      'c. Chiều cao sóng trung bình của 1/3 các con sóng đi qua điểm không trong một trạng thái biển',
      'd. Chiều cao sóng trung bình của 1/4 các con sóng đi qua điểm không trong một trạng thái biển',
    ],
    correct: 2
  },
  {
    question: 'Các giá trị biểu hiện khác của tải trọng tạm thời:',
    options: [
      'a. Giá trị tổ hợp;',
      'b. Giá trị tải trọng tạm thời ngắn hạn.',
      'c. Giá trị tải trọng tạm thời dài hạn',
      'd. Cả 3 giá trị trên',
    ],
    correct: 3
  },
  {
    question: 'Những tải trọng chu kỳ chính là:',
    options: [
      'a. Tải trọng sóng từ chuỗi điều hoà của các sóng',
      'b. Các xoáy cuộn từ các phần ổn định của dòng chảy ổn định',
      'c. Dao động của giao thông các phương tiện',
      'd. Cả 3 loại tải trọng trên',
    ],
    correct: 3
  },
  {
    question: 'Hệ số thành phần tải trọng thường xuyên khi kiểm tra cân bằng tĩnh của công trình cảng biển trong trường hợp bất lợi có giá trị:',
    options: [
      'a. 0.95',
      'b. 1.05',
      'c. 1.20',
      'd. 1.35',
    ],
    correct: 1
  },
  {
    question: 'Hệ số thành phần tải trọng môi trường khi thiết kế các bộ phận kết cấu (STR) khi không bao gồm các tải trọng địa kỹ thuật có giá trị:',
    options: [
      'a. 1.15',
      'b. 1.20',
      'c. 1.35',
      'd. 1.50',
    ],
    correct: 3
  },
  {
    question: 'Vận tốc gió được xác định là?',
    options: [
      'a. Vận tốc trung bình 1 min',
      'b. Vận tốc trung bình 3 min',
      'c. Vận tốc trung bình 5 min',
      'd. Vận tốc trung bình 10 min',
    ],
    correct: 3
  },
  {
    question: 'Mực nước thấp nhất (Hmin) là?',
    options: [
      'a. Mực nước năm thấp nhất với tần suất 1 lần trong 10 năm',
      'b. Mực nước năm thấp nhất với tần suất 1 lần trong 25 năm',
      'c. Mực nước năm thấp nhất với tần suất 1 lần trong 50 năm',
      'd. Mực nước năm thấp nhất với tần suất 1 lần trong 100 năm',
    ],
    correct: 1
  },
  {
    question: 'Trong thiết kế công trình cảng biển, thường sử dụng lý thuyết cơ bản của sóng do gió nào?',
    options: [
      'a. Lý thuyết sóng tuyến tính biên độ nhỏ Airy',
      'b. Lý thuyết sóng có biên độ hữu hạn Cnoidal',
      'c. Lý thuyết sóng có biên độ hữu hạn Stoker',
      'd. Cả 3 lý thuyết sóng trên',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp dự báo sóng tin cậy sử dụng lý thuyết thủy động lực học cơ sở và số liệu thực nghiệm để dự báo các đại lượng sóng trung bình theo?',
    options: [
      'a. Tốc độ gió và chiều dài đà gió',
      'b. Tốc độ gió và thời lượng gió',
      'c. Chiều dài đà gió và thời lượng gió',
      'd. Tốc độ gió, chiều dài đà gió và thời lượng gió',
    ],
    correct: 3
  },
  {
    question: 'Nhận định nào sau đây là đúng?',
    options: [
      'a. Vùng nước lên xuống và sóng táp là vùng có tính xâm thực mạnh nhất đối với bê tông và bê tông cốt thép.',
      'b. Vùng ngập nước biển chủ yếu gây ăn mòn bê tông.',
      'c. Vùng khí quyển biển chủ yếu gây ăn mòn cốt thép trong bê tông với mức độ yếu dần theo cự ly từ mép nước vào bờ.',
      'd. Cả 3 nhận định trên (a, b,c) đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Đối với các kết cấu nằm ở vùng cửu sông chịu tác động xâm thực của nước lợ, các biện pháp bảo vệ chống ăn mòn cho kết cấu:',
    options: [
      'a. Tương tự như kết cấu nằm sâu trong đất liền;',
      'b. Tương tự như kết cấu nằm trực tiếp trong và trên mặt nước biển;',
      'c. Không cần chống ăn mòn vật liệu;',
      'd. Giảm mức độ chống ăn mòn xuống một cấp',
    ],
    correct: 1
  },
  {
    question: 'Cốt “0” của cao độ hải đồ khu vực (số "0” hải đồ hay số “0” độ sâu) thường được chọn là:',
    options: [
      'a. Mực nước biển thấp nhất tại khu vực quan trắc được trong nhiều năm.',
      'b. Mực nước biển trung bình hàng năm',
      'c. Mực nước biển thấp nhất quan trắc được',
      'd. Mực nước biển thấp nhất tại trạm Khí tượng hải văn Hòn Dấu',
    ],
    correct: 0
  },
  {
    question: 'Mực chuẩn “0” của độ cao quốc gia hay còn gọi là cốt “0” quốc gia là:',
    options: [
      'a. Mực nước biển trung bình quan trắc nhiều năm tại trạm nghiệm triều Hòn Dấu (Đồ Sơn, Hải Phòng);',
      'b. Mực nước biển trung bình quan trắc nhiều năm tại trạm nghiệm triều Mũi Nai (Hà Tiên, Kiên Giang);',
      'c. Mực nước biển trung bình;',
      'd. Mực biển cao nhất.',
    ],
    correct: 0
  },
  {
    question: 'Các yếu tố thường góp phần gây ra hư hỏng do nguyên nhân thiết kế bao gồm:',
    options: [
      'a. Dự báo sóng thiết kế nhỏ hoặc thiết kế với chu kỳ lặp lại quá ngắn; không xem xét đủ hiện tượng sóng tập trung cục bộ do đặc điểm đặc biệt của địa hình đáy biển; mất ổn định thủy lực của công trình hoặc các bộ phận cấu thành của công trình;',
      'b. Dự báo sóng thiết kế nhỏ hoặc thiết kế với chu kỳ lặp lại quá ngắn; mất ổn định thủy lực của công trình hoặc các bộ phận cấu thành của công trình;',
      'c. Thiết kế với chu kỳ lặp lại quá ngắn; không xem xét đủ hiện tượng sóng tập trung cục bộ do đặc điểm đặc biệt của địa hình đáy biển; mất ổn định thủy lực của công trình;',
      'd. Không xem xét đủ hiện tượng sóng tập trung cục bộ do đặc điểm đặc biệt của địa hình đáy biển; mất ổn định thủy lực của công trình hoặc các bộ phận cấu thành của công trình;',
    ],
    correct: 0
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
    question: 'Vị trí và bố trí của các đê chắn sóng để cung cấp mức độ bảo vệ cần thiết cho bể cảng được xác định bởi sự cần thiết sau:',
    options: [
      'a. Điều kiện che chắn cho tàu tại bến hoặc nơi neo đậu',
      'b. Điều kiện che chắn cho tàu tại bến hoặc nơi neo đậu; khu vực điều động và quay trở tàu trong bể cảng; khoảng dừng thích hợp cho tàu đi vào bể cảng với tốc độ chạy an toàn.',
      'c. Điều kiện che chắn cho tàu tại bến hoặc nơi neo đậu, khu vực điều động và quay trở tàu trong bể cảng.',
      'd. Điều kiện che chắn cho tàu tại bến; khu vực quay trở tàu trong bể cảng; khoảng dừng thích hợp cho tàu đi vào bể cảng với tốc độ chạy an toàn.',
    ],
    correct: 1
  },
  {
    question: 'Vai trò chính của chân đê mái nghiêng là:',
    options: [
      'a. Đỡ lớp phủ chính của mái nghiêng và tăng cường ổn định của đê',
      'b. Tăng cường ổn định của đê',
      'c. Chống lại tác dụng của sóng',
      'd. Ngăn ngừa xói',
    ],
    correct: 0
  },
  {
    question: 'Những nguyên nhân phá hoại chính do tác động sóng với đê mái nghiêng bao gồm:',
    options: [
      'a. Mất hay hư hỏng các đơn vị lớp phủ; sóng tràn gây xói phía sau; móng bị hư hỏng; xói chân, xói đáy biển; mất vật liệu lõi; xụt do áp lực lỗ rỗng vượt quá mức.',
      'b. Mất hay hư hỏng các đơn vị lớp phủ;',
      'c. Mất hay hư hỏng các đơn vị lớp phủ; sóng tràn gây xói phía sau.',
      'd. Mất hay hư hỏng các đơn vị lớp phủ; sóng tràn gây xói phía sau; xói chân, xói đáy biển.',
    ],
    correct: 0
  },
  {
    question: 'Các dạng phá hoại (ổn định) của công trình đê chắn sóng hỗn hợp:',
    options: [
      'a. Trượt, áp lực thành bên gây lún, lật, mất ổn định kết cấu, hư hỏng nền móng.',
      'b. Trượt, lật, hư hỏng nền móng.',
      'c. Trượt, lật, mất ổn định kết cấu.',
      'd. Trượt, lật, mất ổn định kết cấu, hư hỏng nền móng.',
    ],
    correct: 0
  },
  {
    question: 'Bể cảng được hiểu là',
    options: [
      'a. Khu nước được bảo vệ cho các con tàu trung chuyển hàng hóa, nạp nhiên liệu, sửa chữa,...',
      'b. Khu nước trước bến để cung cấp các tiện nghi an toàn và phù hợp cho các con tàu trung chuyển hàng hóa, nạp nhiên liệu, sửa chữa,...',
      'c. Khu nước được bảo vệ để cung cấp các tiện nghi an toàn và phù hợp cho các con tàu trung chuyển hàng hóa, nạp nhiên liệu, sửa chữa,...',
      'd. Khu nước trước bến an toàn và phù hợp cho các con tàu neo đậu, quay trở trước khi cập bến để trung chuyển hàng hóa, nạp nhiên liệu, sửa chữa…',
    ],
    correct: 2
  },
  {
    question: 'Cảng biển được hiểu là',
    options: [
      'a. Cảng nằm xa bờ (cảng đảo…), ven bờ biển nơi các tàu biển có thể đi trực tiếp đến cảng',
      'b. Cảng nằm xa bờ (cảng đảo…), ven bờ biển, các cửa sông có triều, hay các cửa sông nơi các tàu biển có thể đi trực tiếp đến cảng',
      'c. Cảng nằm xa bờ (cảng đảo…), ven bờ biển, các cửa sông có triều, hay các cửa sông gần biển',
      'd. Cảng nằm ở nơi các tàu biển có thể đi trực tiếp đến cảng',
    ],
    correct: 1
  },
  {
    question: 'Công trình nào sau đây là Cảng thủy nội địa',
    options: [
      'a. Là hệ thống công trình được xây dựng để phương tiện, tàu biển neo đậu, xếp dỡ hàng hóa, đón trả khách và thực hiện dịch vụ hỗ trợ khác',
      'b. Là công trình độc lập có quy mô nhỏ, gồm vùng đất và vùng nước trước bến để phương tiện neo đậu, xếp dỡ hàng hóa, đón trả hành khách và thực hiện dịch vụ hỗ trợ khác',
      'c. Là vùng đất cảng được giới hạn để xây dựng cầu cảng, kho, bãi, nhà xưởng, trụ sở, cơ sở dịch vụ và công trình phụ trợ khác',
      'd. Cả 3 dạng trên',
    ],
    correct: 0
  },
  {
    question: 'Vùng nước cảng của cảng thủy nội địa được quy định',
    options: [
      'a. Được giới hạn để xây dựng cầu cảng, kho bãi, nhà xưởng, điện, nước, lắp đặt thiết bị và công trình phụ trợ khác',
      'b. Vùng nước cảng được giới hạn để thiết lập vùng nước trước bến cảng, vùng quay trở, khu neo đậu, khu chuyển tải, khu hạ tải, khu tránh bão',
      'c. Được giới hạn để xây dựng trụ sở, cơ sở dịch vụ, hệ thống giao thông, thông tin liên lạc và công trình phụ trợ khác',
      'd. Tất cả các quy định trên',
    ],
    correct: 1
  },
  {
    question: 'Vùng đất cảng của cảng thủy nội địa được quy định',
    options: [
      'a. Vùng được giới hạn để xây dựng cầu cảng, kho, bãi, nhà xưởng, trụ sở, cơ sở dịch vụ, hệ thống giao thông, thông tin liên lạc, điện, nước, lắp đặt thiết bị và công trình phụ trợ khác',
      'b. Vùng được giới hạn để thiết lập vùng nước trước bến cảng, vùng quay trở, khu neo đậu, khu chuyển tải, khu hạ tải, khu tránh bão',
      'c. Vùng được giới hạn thoả mãn cả 2 quy định trên',
      'd. Các quy định trên đều không đúng',
    ],
    correct: 0
  },
  {
    question: 'Để xác định kích thước và quy mô của công trình biến cần được xét một cách thận trọng đến các yếu tố liên quan',
    options: [
      'a. Khối lượng hàng hóa hoặc hành khách, đội tàu, điều kiện tự nhiên hiện tại cũng như xu thế phát triển hệ thống cơ sở hạ tầng giao thông vận tải trong tương lai',
      'b. Khối lượng hàng hóa hoặc hành khách, kích thước lớn nhất của tàu neo cập vào bến, điều kiện tự nhiên hiện tại cũng như xu thế phát triển hệ thống cơ sở hạ tầng giao thông vận tải trong tương lai',
      'c. Khối lượng hàng hóa hoặc hành khách, đội tàu, điều kiện địa chất, thủy văn cũng như xu thế phát triển hệ thống cơ sở hạ tầng giao thông vận tải trong tương lai',
      'd. Khối lượng hàng hóa hoặc hành khách, đội tàu, điều kiện tự nhiên hiện tại cũng như xu thế phát triển lượng hàng hóa hoặc hành khách trong tương lai',
    ],
    correct: 0
  },
  {
    question: 'Mực nước thiết kế',
    options: [
      'a. Là mực nước cao nhất, mực nước thấp nhất theo số liệu khảo sát, dùng để tính toán độ sâu hay cao trình đỉnh các công trình cảng',
      'b. Là mực nước trung bình, mực nước cao, hay mực nước thấp theo một bảo đảm suất quy định, dùng để tính toán độ sâu, cao trình đỉnh, và kết cấu các hạng mục công trình cảng',
      'c. Là mực nước trung bình, mực nước cao, hay mực nước thấp do chủ đầu tư quy định, dùng để tính toán độ sâu hay cao trình đỉnh các công trình cảng',
      'd. Bao gồm các ý trên',
    ],
    correct: 1
  },
  {
    question: 'Cao độ khu nước trước bến được xác định',
    options: [
      'a. Từ cốt “0” Hải đồ cộng thêm độ dự trữ dưới sống tàu và mớn nước lớn nhất của tàu thiết kế',
      'b. Từ mực nước thấp thiết kế cộng thêm độ dự trữ dưới sống tàu và mớn nước lớn nhất của tàu thiết kế',
      'c. Từ mực nước chạy tàu cộng thêm độ dự trữ dưới sống tàu và mớn nước lớn nhất của tàu thiết kế',
      'd. Từ mực nước trung bình cộng thêm độ dự trữ dưới sống tàu và mớn nước lớn nhất của tàu thiết kế',
    ],
    correct: 1
  },
  {
    question: 'Công trình bến neo cập tàu được tính toán chủ yếu theo',
    options: [
      'a. Trạng thái giới hạn cực hạn (ULS) và trạng thái giới hạn mỏi',
      'b. Trạng thái giới hạn cực hạn (ULS) và trạng thái giới hạn về khả năng phục hồi',
      'c. Trạng thái giới hạn cực hạn (ULS) và trạng thái giới hạn sử dụng (SLS)',
      'd. Trạng thái giới hạn cực hạn (ULS)',
    ],
    correct: 2
  },
  {
    question: 'Kết cấu công trình bến được thiết kế theo phương pháp',
    options: [
      'a. Phương pháp hệ số thành phần',
      'b. Phương pháp hệ số tải trọng và hệ số sức kháng',
      'c. Một trong hai phương pháp a và phương pháp b',
      'd. Phương pháp hệ số thành phần và phương pháp hệ số tải trọng',
    ],
    correct: 2
  },
  {
    question: 'Trạng thái làm việc của kết cấu tường cừ có neo bị ảnh hưởng bởi',
    options: [
      'a. Đặc tính của đất nền, vị trí thanh neo và đặc biệt phụ thuộc vào độ cứng của cừ',
      'b. Đặc tính của đất nền, độ cứng của cừ, vị trí thanh neo và đặc biệt phụ thuộc vào chiều sâu chôn cừ',
      'c. Đặc tính của đất nền, vị trí thanh neo và đặc biệt phụ thuộc vào chiều sâu chôn cừ',
      'd. Độ cứng của cừ, vị trí thanh neo và đặc biệt phụ thuộc vào chiều sâu chôn cừ',
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
    question: 'Độ dằn của tàu (độ chìm xuống của tầu so với mực nước tĩnh) lớn nhất khi',
    options: [
      'a. Vận tốc chạy tàu lớn và độ sâu chạy tầu nhỏ',
      'b. Vận tốc chạy tàu lớn và độ sâu chạy tầu lớn',
      'c. Vận tốc chạy tàu nhỏ và độ sâu chạy tầu lớn',
      'd. Vận tốc chạy tàu nhỏ và độ sâu chạy tầu nhỏ.',
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
    question: 'Vùng đất cảng của cảng thủy nội địa được quy định thế nào là đúng sau đây?',
    options: [
      'a. Được giới hạn để xây dựng cầu cảng, kho, bãi, nhà xưởng, trụ sở, cơ sở dịch vụ, hệ thống giao thông, thông tin liên lạc, điện, nước, lắp đặt thiết bị và công trình phụ trợ khác.',
      'b. Vùng được giới hạn để thiết lập vùng nước trước cầu cảng, vùng quay trở, khu neo đậu, khu chuyển tải, khu hạ tải, khu tránh bão;',
      'c. Thoả mãn cả 2 quy định trên',
      'd. Các quy định trên không đúng',
    ],
    correct: 0
  },
  {
    question: 'Vùng nước cảng của cảng thủy nội địa được quy định thế nào là đúng sau đây?',
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
