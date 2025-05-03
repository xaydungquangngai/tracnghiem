const questions = [
  {
    question: 'Thế nào là tiêu chuẩn cấp nước sinh hoạt tính theo đầu người một ngày đêm?',
    options: [
      'a. Là lượng nước cấp lớn nhất của một người có sử dụng hệ thống cấp nước trong một ngày đêm.',
      'b. Là lượng nước cấp trung bình của một người có sử dụng hệ thống cấp nước trong một ngày đêm.',
      'c. Là lượng nước cấp bé nhất của một người có sử dụng hệ thống cấp nước trong một ngày đêm.',
      'd. Là lượng nước cấp lớn nhất một người sử dụng trong một ngày đêm.',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế thoát nước cho các đô thị, khu dân cư tập trung khu công nghiệp hoặc cụm công nghiệp, cho phép cho phép sử dụng các kiểu hệ thống thoát nước:',
    options: [
      'a. Hệ thống thoát nước chung',
      'b. Hệ thống thoát nước riêng',
      'c. Hệ thống thoát nước chân không',
      'd. Cả 3 loại hệ thống thoát nước trên',
    ],
    correct: 3
  },
  {
    question: 'Các loại công trình điều hòa và làm chậm dòng chảy nước mưa?',
    options: [
      'a. Bể chứa nước mưa.',
      'b. Hồ chứa, hồ điều hòa.',
      'c. Các khu đất trũng trong các vườn cây, bãi cỏ… có thể chứa tạm thời trong khi mưa',
      'd. Cả 3 đáp án a, b, c',
    ],
    correct: 3
  },
  {
    question: 'Khi thiết kế giếng khoan khai thác nước dưới đất, yêu cầu giếng phải cách xa các công trình kiến trúc tối thiểu?',
    options: [
      'a. 20 m',
      'b. 25 m',
      'c. 30 m',
      'd. 50 m',
    ],
    correct: 1
  },
  {
    question: 'Khi nào thì làm giếng chuyển bậc trên hệ thống thoát nước ngoài nhà?',
    options: [
      'a. Chuyển nước thải, nước mưa xuống cống có độ sâu lớn hơn.',
      'b. Đảm bảo vận tốc dòng chảy trong cống không vượt quá giới hạn cho phép hoặc để tránh thay đổi đột ngột tốc độ dòng chảy.',
      'c. Khi tránh các công trình ngầm và xả theo phương pháp xả ngập.',
      'd. Gồm cả 3 đáp án a,b,',
    ],
    correct: 3
  },
  {
    question: 'Bậc tin cậy của hệ thống cấp nước phụ thuộc vào',
    options: [
      'a. Lưu lượng cấp nước lớn nhất ngày đêm của khu vực cấp nước',
      'b. Cấp đô thị của khu vực cấp nước',
      'c. Số dân của khu vực cấp nước',
      'd. Mức độ quan trọng của các đối tượng dùng nước',
    ],
    correct: 2
  },
  {
    question: 'Đối với đô thị, khi tính đến mức độ đấu nối nước thải vào hệ thống thoát nước tập trung, lưu lượng tính toán nước thải sinh hoạt Qsh (L/s), có thể lấy bằng bao nhiêu % lưu lượng nước cấp sinh hoạt?',
    options: [
      'a. 60%',
      'b. 80%',
      'c. 100%',
      'd. Từ 80 đến 100%',
    ],
    correct: 3
  },
  {
    question: 'Áp lực tự do nhỏ nhất trong mạng lưới cấp nước sinh hoạt của khu dân cư, tại điểm lấy nước vào nhà, tính từ mặt đất không được nhỏ hơn?',
    options: [
      'a. 5 m',
      'b. 10 m.',
      'b. 15 m',
      'c. 20 m',
    ],
    correct: 1
  },
  {
    question: 'Tính toán thủy lực mạng lưới cấp nước bên trong theo:',
    options: [
      'a. Lưu lượng trung bình trong một giây.',
      'b. Lưu lượng lớn nhất trong một giây.',
      'c. Lưu lượng trung bình trong một giờ.',
      'd. Lưu lượng lớn nhất trong một giờ.',
    ],
    correct: 1
  },
  {
    question: 'Khái niệm nguồn tiếp nhận nước thải:',
    options: [
      'a. Là nguồn nước mặt hoặc vùng nước biển ven bờ, có mục đích sử dụng xác định, nơi mà nước thải sinh hoạt thải vào.',
      'b. Là sông, hồ.',
      'c. Là hệ thống cống, rãnh thoát nước thải.',
      'd. Là hệ thống kênh, mương thủy lợi.',
    ],
    correct: 0
  },
  {
    question: 'Khi nào thì có thể thiết kế kết hợp hệ thống cấp nước sinh hoạt và hệ thống cấp nước chữa cháy trong công trình?',
    options: [
      'a. Khi thỏa mãn các yêu cầu về tiêu chuẩn cấp nước sinh hoạt hiện hành.',
      'b. Khi thỏa mãn các yêu cầu về tiêu chuẩn cấp nước chữa cháy hiện hành.',
      'c. Khi thỏa mãn các yêu cầu về tiêu chuẩn PCCC và tiêu chuẩn về cấp nước sinh hoạt hiện hành.',
      'd. Không thể thiết kế kết hợp hai hệ thống này.',
    ],
    correct: 2
  },
  {
    question: 'Tiêu chuẩn nước cấp cho cán bộ trụ sở cơ quan hành chính là:',
    options: [
      'a. 10-15 l/người.ngày.',
      'b. 20-25 l/người.ngày.',
      'c. 25-40 l/người.ngày.',
      'd. 75-100 l/người.ngày.',
    ],
    correct: 0
  },
  {
    question: 'Độ đầy (h/d) lớn nhất cho phép của ống thoát nước thải trong nhà phụ thuộc vào đường kính ống nhưng không nhỏ hơn:',
    options: [
      'a. 0,4.',
      'b. 0,5.',
      'c. 0,6.',
      'd. 0,75.',
    ],
    correct: 1
  },
  {
    question: 'Khi nào thì làm giếng thăm trên hệ thống thoát nước ngoài nhà?',
    options: [
      'a. Khi có sự chuyển hướng tuyến cống, và có sự đấu nối các tuyến cống khác.',
      'b. Khi có sự thay đổi đường kính cống.',
      'c. Khi chiều dài đoạn cống dài hơn tiêu chuẩn cho phép.',
      'd. Gồm cả 3 đáp án a,b,',
    ],
    correct: 3
  },
  {
    question: 'Sử dụng van giảm áp nhằm mục đích gì?',
    options: [
      'a. Đảm bảo áp lực trong đường ống không vượt quá mức cho phép.',
      'b. Đảm bảo áp lực tại các dụng cụ vệ sinh không vượt quá mức cho phép.',
      'c. Cân bằng lưu lượng tiêu thụ thực tế cho các dụng cụ dùng nước.',
      'd. Gồm cả 3 đáp án a, b,',
    ],
    correct: 3
  },
  {
    question: 'Áp lực tự do cần thiết ở các thiết bị sản xuất là bao nhiêu?',
    options: [
      'a. 1 m;',
      'b. 3 m;',
      'c. 4 m;',
      'd. Tùy thuộc vào đặc trưng công nghệ của thiết bị đó.',
    ],
    correct: 3
  },
  {
    question: 'Vận tốc lớn nhất của dòng nước thải trong cống bằng kim loại:',
    options: [
      'a. Không quá 2 m/s.',
      'b. Không quá 4 m/s.',
      'c. Không quá 8 m/s.',
      'd. Không quá 10 m/s.',
    ],
    correct: 2
  },
  {
    question: 'Vận tốc lớn nhất của dòng nước thải trong cống phi kim loại:',
    options: [
      'a. Không quá 2 m/s.',
      'b. Không quá 4 m/s.',
      'c. Không quá 6 m/s.',
      'd. Không quá 8 m/s.',
    ],
    correct: 1
  },
  {
    question: 'Bể điều hòa nước thải là:',
    options: [
      'a. Công trình để điều hòa sự dao động về lưu lượng của nước thải.',
      'b. Công trình để điều hòa sự dao động về nồng độ các chất bẩn của nước thải.',
      'c. Công trình để điều hòa sự dao động về lưu lượng của nước thải, nồng độ các chất bẩn hoặc nhiệt độ của nước thải.',
      'd. Công trình để loại bỏ các chất lơ lửng có trong nước thải.',
    ],
    correct: 2
  },
  {
    question: 'Lưu lượng thực tế chảy ra ở các vòi nước trong nhà phụ thuộc vào:',
    options: [
      'a. Áp lực nước tại vòi.',
      'b. Kích thước lỗ của vòi.',
      'c. Gồm đáp án a và',
      'b. d. Đương lượng tính toán của vòi.',
    ],
    correct: 2
  },
  {
    question: 'Áp lực nước lớn nhất tại dụng cụ vệ sinh của hệ thống cấp nước trong nhà lớn nhất khi nào?',
    options: [
      'a. Khi tất cả các dụng cụ vệ sinh đều sử dụng.',
      'b. Khi áp lực nước điểm đầu mạng lưới lớn nhất.',
      'c. Khi tất cả các dụng cụ vệ sinh không sử dụng.',
      'd. Khi áp lực nước điểm đầu mạng lớn nhất và tất cả các dụng cụ vệ sinh không sử dụng nước.',
    ],
    correct: 3
  },
  {
    question: 'Trong trường hợp nào thì được phép hút nước trực tiếp từ mạng lưới cấp bên ngoài để cấp nước trực tiếp đến các thiết bị vệ sinh trong công trình?',
    options: [
      'a. Khi ống cấp nước bên ngoài công trình không đủ áp lực cấp trực tiếp cho cho các thiết bị vệ sinh trong công trình.',
      'b. Khi ống cấp nước bên ngoài công trình lớn hơn đường ống cấp nước vào công trình.',
      'c. Khi ống cấp nước bên ngoài công trình lớn hơn tối thiểu 3 lần đường ống cấp nước vào công trình.',
      'd. Cả 3 trường hợp đều không được phép.',
    ],
    correct: 3
  },
  {
    question: 'Bùn hoạt tính là:',
    options: [
      'a. Bùn thu được từ các bể lắng trong dây chuyền xử lý nước thải.',
      'b. Bùn thu được từ các bể lọc trong dây chuyền xử lý nước thải.',
      'c. Bùn chứa các vi sinh vật trong nước thải.',
      'd. Bùn chứa các vi sinh vật có khả năng hấp thụ và phân hủy các chất bẩn trong nước thải.',
    ],
    correct: 3
  },
  {
    question: 'Việc nghiệm thu hệ thống cấp nước bên trong công trình được tiến hành khi:',
    options: [
      'a. Lắp đặt xong hệ thống.',
      'b. Có kết quả thử áp lực.',
      'c. Có kết quả thử áp lực và kiểm tra bên ngoài.',
      'd. Có kết quả thử áp lực, kiểm tra bên ngoài và kiểm tra sự hoạt động của hệ thống.',
    ],
    correct: 3
  },
  {
    question: 'Đường kính nhỏ nhất của đường ống thoát nước thải sinh hoạt tiểu khu là:',
    options: [
      'a. 100mm.',
      'b. 150mm.',
      'c. 200mm.',
      'd. 300mm.',
    ],
    correct: 1
  },
  {
    question: 'Đường kính nhỏ nhất của đường ống thoát nước mưa tiểu khu là:',
    options: [
      'a. 150mm.',
      'b. 200mm.',
      'c. 300mm.',
      'd. 400mm.',
    ],
    correct: 1
  },
  {
    question: 'Độ sâu đặt cống tối thiểu tính từ đỉnh cống ở chỗ có xe cơ giới qua lại là:',
    options: [
      'a. 0,5m.',
      'b. 0,7m.',
      'c. 0,8m.',
      'd. 0,9m.',
    ],
    correct: 0
  },
  {
    question: 'Tiêu chuẩn nước rửa mặt đường và quảng trường đã hoàn thiện trong khu dân cư và khu công nghiệp bằng cơ giới cho 1 lần rửa là:',
    options: [
      'a. 0,5-0,8 l/m2.',
      'b. 0,8-1,0 l/m2.',
      'c. 1,2-1,5 l/m2.',
      'd. Không xác định.',
    ],
    correct: 2
  },
  {
    question: 'Thế nào là tiêu chuẩn thoát nước sinh hoạt theo ngày đêm?',
    options: [
      'a. Là lượng nước thải lớn nhất của một người có sử dụng hệ thống thoát nước trong một ngày đêm.',
      'b. Là lượng nước thải trung bình của một người có sử dụng hệ thống thoát nước trong một ngày đêm.',
      'c. Là lượng nước thải bé nhất của một người có sử dụng hệ thống thoát nước trong một ngày đêm.',
      'd. Là lượng nước cấp lớn nhất một người sử dụng trong một ngày đêm.',
    ],
    correct: 1
  },
  {
    question: 'Áp lực nước lớn nhất tại dụng cụ vệ sinh của hệ thống cấp nước trong nhà lớn nhất khi nào?',
    options: [
      'a. Khi tất cả các dụng cụ vệ sinh đều sử dụng.',
      'b. Khi áp lực nước điểm đầu mạng lưới lớn nhất.',
      'c. Khi tất cả các dụng cụ vệ sinh không sử dụng.',
      'd. Khi áp lực nước điểm đầu mạng lớn nhất và tất cả các dụng cụ vệ sinh không sử dụng nước.',
    ],
    correct: 3
  },
  {
    question: 'Chiều dài tối đa của đường ống kể từ ống đứng thoát nước hay ống thông tắc đến tâm giếng thăm là:',
    options: [
      'a. 4 m.',
      'b. 8 m.',
      'c. 12 m.',
      'd. Không quy định.',
    ],
    correct: 1
  },
  {
    question: 'Đường kính ống thoát nước trong nhà nối với hệ thống thoát nước bên ngoài không nhỏ hơn:',
    options: [
      'a. 100 mm.',
      'b. 150 mm.',
      'c. 200 mm.',
      'd. Đường kính ống đứng lớn nhất nối vào ống này.',
    ],
    correct: 3
  },
  {
    question: 'Ống hút của máy bơm nước thải:',
    options: [
      'a. Cần đặt ngang với cốt trục máy bơm.',
      'b. Cần đặt dốc hướng về máy bơm với độ dốc không nhỏ hơn 0,001.',
      'c. Cần đặt dốc hướng về máy bơm với độ dốc không nhỏ hơn 0,005.',
      'd. Cần đặt dốc hướng về máy bơm với độ dốc không nhỏ hơn 0,01.',
    ],
    correct: 2
  },
  {
    question: 'Đường kính của mỗi trục ống đứng thoát nước:',
    options: [
      'a. Thay đổi theo lưu lượng tính toán của mỗi tầng.',
      'b. Không thay đổi theo cả chiều cao của ống.',
      'c. Thay đổi theo số lượng ống nhánh đấu nối vào.',
      'd. Thay đổi theo chiều cao công trình.',
    ],
    correct: 1
  },
  {
    question: 'Hệ số dùng nước không điều hòa ngày là:',
    options: [
      'a. Tỷ số giữa ngày dùng nước lớn nhất và ngày dùng nước nhỏ nhất trong năm.',
      'b. Tỷ số giữa ngày dùng nước lớn nhất và ngày dùng nước trung bình trong năm.',
      'c. Tỷ số giữa ngày dùng nước ngày nhỏ nhất và ngày dùng nước trung bình trong năm.',
      'd. Tỷ số giữa ngày dùng nước nhỏ nhất và ngày dùng nước lớn nhất trong năm.',
    ],
    correct: 1
  },
  {
    question: 'Hệ số dùng nước không điều hòa giờ là:',
    options: [
      'a. Tỷ số giữa giờ dùng nước lớn nhất và giờ dùng nước nhỏ nhất trong ngày.',
      'b. Tỷ số giữa giờ dùng nước nhỏ nhất và giờ dùng nước lớn nhất trong ngày.',
      'c. Tỷ số giữa giờ dùng nước lớn nhất và giờ dùng nước trung bình trong ngày.',
      'd. Tỷ số giữa giờ dùng nước nhỏ nhất và giờ dùng nước trung bình trong ngày.',
    ],
    correct: 2
  },
  {
    question: 'Lượng nước bổ sung cho bể bơi trong ngày đêm được tính:',
    options: [
      'a. Bằng 5% dung tích bể bơi.',
      'b. Bằng 10% dung tích bể bơi.',
      'c. Bằng 15% dung tích bể bơi.',
      'd. Bằng 20% dung tích bể bơi.',
    ],
    correct: 1
  },
  {
    question: 'Tiêu chuẩn thoát nước thải sinh hoạt được lấy theo:',
    options: [
      'a. Tiêu chuẩn dùng nước.',
      'b. Tiêu chuẩn thoát nước riêng.',
      'c. Thực tế sử dụng.',
      'd. Đương lượng của thiết bị vệ sinh.',
    ],
    correct: 0
  },
  {
    question: 'Độ dốc tối thiểu của ống nhánh thoát nước hướng về ống đứng là:',
    options: [
      'a. 1%.',
      'b. 2%.',
      'c. 3%.',
      'd. 4%.',
    ],
    correct: 0
  },
  {
    question: 'Hệ thống cấp nước bên trong công trình có nhiệm vụ:',
    options: [
      'a. Thu nước thô từ nguồn nước thiên nhiên, xử lý nước đạt tiêu chuẩn tiêu dùng, truyền dẫn và phân phối nước đến các đối tượng tiêu thụ.',
      'b. Truyền dẫn nước đạt tiêu chuẩn đến nơi tiêu thụ.',
      'c. Đưa nước từ mạng lưới cấp nước bên ngoài đến mọi thiết bị, dụng cụ vệ sinh, thiết bị chữa cháy hoặc máy móc sản xuất.',
      'd. Gồm cả 3 đáp án a, b,',
    ],
    correct: 2
  },
  {
    question: 'Các bộ phận chính của hệ thống cấp nước trong công trình bao gồm:',
    options: [
      'a. Đường ống dẫn nước vào nhà, bể chứa, trạm bơm.',
      'b. Đồng hồ đo nước, đường ống chính.',
      'c. Đường ống đứng, đường ống nhánh và các thiết bị dùng nước.',
      'd. Gồm cả 3 đáp án a, b,',
    ],
    correct: 3
  },
  {
    question: 'Ống thông hơi phụ trên ống nhánh của mạng lưới thoát nước bên trong công trình có chức năng:',
    options: [
      'a. Thông hơi.',
      'b. Điều áp.',
      'c. Thông hơi và điều áp.',
      'd. Thu gom nước thải.',
    ],
    correct: 2
  },
  {
    question: 'Quy định áp lực nước làm việc lớn nhất cho phép tại các dụng cụ vệ sinh trong hệ thống cấp nước bên trong nhà để:',
    options: [
      'a. Bảo vệ đường ống.',
      'b. Bảo vệ dụng cụ vệ sinh.',
      'c. Tiện nghi cho sử dụng.',
      'd. Gồm cả 3 đáp án a, b,',
    ],
    correct: 3
  },
  {
    question: 'Áp lực tự do nhỏ nhất trong mạng lưới cấp nước sinh hoạt khu dân cư tại điểm cấp nước vào nhà, tính từ mặt đất là:',
    options: [
      'a. 10m.',
      'b. Không nhỏ hơn 10m.',
      'c. Lớn hơn 18m.',
      'd. Không quy định.',
    ],
    correct: 1
  },
  {
    question: 'Bậc tin cậy của trạm bơm cấp nước sinh hoạt được phân thành:',
    options: [
      'a. 1 loại.',
      'b. 2 loại.',
      'c. 3 loại.',
      'd. Không xác định.',
    ],
    correct: 2
  },
  {
    question: 'Phương pháp và mức độ xử lý nước thải phụ thuộc vào:',
    options: [
      'a. Lưu lượng, thành phần, tính chất của nước thải.',
      'b. Đặc điểm của nguồn tiếp nhận và các yêu cầu vệ sinh khi xả nước thải vào nguồn.',
      'c. Các điều kiện cụ thể của địa phương.',
      'd. Cả 3 đáp án a, b,',
    ],
    correct: 3
  },
  {
    question: 'Ống đứng thông hơi cao hơn mái nhà:',
    options: [
      'a. 0,5 m.',
      'b. 0,7 m.',
      'c. 1,0 m.',
      'd. 1,5 m.',
    ],
    correct: 1
  },
  {
    question: 'Trên đường ống đẩy của mỗi máy bơm cấp nước cần phải có:',
    options: [
      'a. Van (khóa).',
      'b. Van một chiều.',
      'c. Đồng hồ đo áp.',
      'd. Cả 3 đáp án a, b,',
    ],
    correct: 3
  },
  {
    question: 'Lắp đặt đồng hồ đo nước kiểu cánh quạt theo hướng:',
    options: [
      'a. Đặt nằm ngang.',
      'b. Đặt xiên.',
      'c. Đặt thẳng đứng.',
      'd. Không quy định.',
    ],
    correct: 0
  },
  {
    question: 'Đường ống xả nối với đường ống thoát nước bên ngoài phải tạo một góc (theo chiều nước chảy) không nhỏ hơn:',
    options: [
      'a. 30o.',
      'b. 60o.',
      'c. 90o.',
      'd. Không quy định.',
    ],
    correct: 2
  },
  {
    question: 'Cần phải thiết kế trạm bơm nước thải cho công trình khi:',
    options: [
      'a. Lưu lượng nước thải của công trình lớn.',
      'b. Công trình có xây dựng tầng hầm.',
      'c. Khi toàn bộ nước thải của công trình không thể tự chảy ra hệ thống thoát nước bên ngoài.',
      'd. Khi bên ngoài không thiết kế trạm bơm thoát nước.',
    ],
    correct: 2
  },
];
