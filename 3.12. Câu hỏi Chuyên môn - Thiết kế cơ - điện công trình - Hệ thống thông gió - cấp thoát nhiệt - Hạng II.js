const questions = [
  {
    question: 'Trong hệ thống điều hòa không khí, một chiller có chỉ số hiệu quả năng lượng COP bằng 5 sinh ra 1750 kW nhiệt lạnh. Vậy công suất điện máy nén chiller là bao nhiêu?',
    options: [
      'a. 8750 kW',
      'b. 875 kW',
      'c. 350 kW',
      'd. 175 kW',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế thông gió - ĐHKK cho phòng sạch trong bệnh viện, cần quan tâm kiểm soát các yếu tố nào sau đây?',
    options: [
      'a. Nhiệt độ và độ ẩm của không khí',
      'b. Áp suất không khí trong phòng',
      'c. Độ sạch của không khí và chống lây nhiễm chéo',
      'd. Tất các các yếu tố trên',
    ],
    correct: 3
  },
  {
    question: 'Nhận định nào dưới đây mô tả hệ thống làm lạnh giải nhiệt bằng nước ?',
    options: [
      'a. Tác nhân lạnh bay hơi để làm lạnh trực tiếp không khí tại bộ xử lý không khí AHU',
      'b. Hơi tác nhân lạnh ngưng tụ ở 40°C trong bộ trao đổi nhiệt được làm mát bằng không khí',
      'c. Bơm nước làm mát tuần hoàn giữa thiết bị ngưng tụ và tháp giải nhiệt',
      'd. Hơi tác nhân lạnh áp suất thấp ngưng tụ và xả nhiệt ẩn trong nhà ra môi trường ngoài thông qua tháp giải nhiệt nước',
    ],
    correct: 2
  },
  {
    question: 'Bội số trao đổi không khí khi hệ thống thông gió cho gara ô tô của nhà chung cư vận hành thông thường phải đảm bảo không nhỏ hơn bao nhiêu ?',
    options: [
      'a. 4 lần/h',
      'b. 6 lần/h',
      'c. 8 lần/h',
      'd. 10 lần/h',
    ],
    correct: 1
  },
  {
    question: 'Đối với nhà ở, phải bố trí thông gió hút thải cục bộ cho khu vực nào?',
    options: [
      'a. Phòng khách',
      'b. Phòng ngủ',
      'c. Phòng bếp',
      'd. Tất cả các trường hợp trên',
    ],
    correct: 2
  },
  {
    question: 'Nhận định nào sau đây đúng với thiết bị lọc không khí dùng trong bộ xử lý AHU trong hệ thống điều hòa không khí?',
    options: [
      'a. Tổn thất áp suất qua bộ lọc không khí sẽ giảm khí nồng độ bụi tăng',
      'b. Lượng bụi bám trên bề mặt bộ lọc không khí không làm giảm lưu lượng gió cấp vào phòng',
      'c. Bộ lọc không khí ngăn được hoàn toàn lượng bụi bẩn đi vào từ bên ngoài công trình',
      'd. Lượng bụi bám trên bề mặt thiết bị lọc bụi làm giảm lưu lượng gió cấp vào nhà',
    ],
    correct: 3
  },
  {
    question: 'Độ dư áp suất không khí của các hệ thống thông gió tăng áp ở các giếng thang máy, ở các cầu thang bộ N2, và các khoang đệm cầu thang bộ N3 là bao nhiêu?',
    options: [
      'a. Từ 10 đến 50 Pa',
      'b. Từ 10 đến 60 Pa',
      'c. Từ 20 đến 60 Pa',
      'd. Từ 20 đến 50 Pa',
    ],
    correct: 3
  },
  {
    question: 'Một bơm nhiệt có chỉ số hiệu quả năng lượng COP bằng 3 sinh ra 750 kW nhiệt. Vậy công suất điện máy nén thiết bị bơm nhiệt là bao nhiêu ?',
    options: [
      'a. 750 kW',
      'b. 2250 kW',
      'c. 250 kW',
      'd. 75 kW',
    ],
    correct: 2
  },
  {
    question: 'Vận tốc gió tối đa trong các phòng ở của nhà chung cư về mùa đông là bao nhiêu ?',
    options: [
      'a. 0,5 m/s',
      'b. 1 m/s',
      'c. 1,5 m/s',
      'd. 2,5 m/s',
    ],
    correct: 0
  },
  {
    question: 'Hệ thống Điều hòa không khí nào được khuyến khích sử dụng cho các công trình dân dụng có diện tích sàn từ 2000 m2 trở lên để không làm ảnh hưởng đến kiến trúc công trình ?',
    options: [
      'a. Hệ thống Điều hòa không khí cục bộ',
      'b. Hệ thống Điều hòa không khí trung tâm nước',
      'c. Hệ thống Điều hòa không khí VRF/VRV',
      'd. Tất cả các hệ thống trên',
    ],
    correct: 1
  },
  {
    question: 'Vận tốc gió tối đa trong trường hợp thông gió tự nhiên hoặc thông gió cơ khí trong nhà dân dụng là bao nhiêu ?',
    options: [
      'a. 1 m/s',
      'b. 1,5 m/s',
      'c. 2 m/s',
      'd. 2,5 m/s',
    ],
    correct: 1
  },
  {
    question: 'Thông số tính toán của không khí ngoài trời dùng để thiết kế thông gió tự nhiên và thông gió cơ khí về mùa hè là bao nhiêu?',
    options: [
      'a. Nhiệt độ trung bình ngoài trời của tháng nóng nhất trong năm',
      'b. Nhiệt độ trung bình ngoài trời của mùa hè',
      'c. Nhiệt độ cao nhất trung bình ngoài trời của tháng nóng nhất trong năm',
      'd. Nhiệt độ cao nhất ngoài trời của tháng nóng nhất trong năm',
    ],
    correct: 2
  },
  {
    question: 'Hệ thống Điều hòa không khí trung tâm với bộ xử lý không khí AHU được khuyến khích sử dụng cho các phòng nào ?',
    options: [
      'a. Phòng họp',
      'b. Phòng khán giả',
      'c. Phòng hội trường',
      'd. Tất cả các phòng trên trên',
    ],
    correct: 3
  },
  {
    question: 'Trong các phòng có sinh bụi, các miệng thổi gió có thể được bố trí như thế nào?',
    options: [
      'a. Trên cao và tạo luồng gió từ trên xuống',
      'b. Bên cạnh và tạo luồng gió đi ngang vào vùng làm việc',
      'c. Trong vùng làm việc và thổi từ dưới lên',
      'd. Cả 3 trường hợp trên',
    ],
    correct: 3
  },
  {
    question: 'Trong các phòng có sinh bụi, các miệng thổi gió có thể được bố trí như thế nào?',
    options: [
      'a. Trên cao và tạo luồng gió từ trên xuống',
      'b. Bên cạnh và tạo luồng gió đi ngang vào vùng làm việc',
      'c. Trong vùng làm việc và thổi từ dưới lên',
      'd. Cả 3 trường hợp trên',
    ],
    correct: 3
  },
  {
    question: 'Chỉ số hiệu quả COP tối thiểu của máy chiller ly tâm chạy điện giải nhiệt bằng nước có năng suất lạnh ≥ 1055 và < 2110 kW là bao nhiêu ?',
    options: [
      'a. 5,0',
      'b. 5,55',
      'c. 6,11',
      'd. 6,5',
    ],
    correct: 2
  },
  {
    question: 'Nhận định nào dưới đây mô tả đúng qui trình nghiệm thu đường ống gió?',
    options: [
      'a. Hệ thống các ống gió không cần phải kiểm tra trong quá trình nghiệm thu',
      'b. Tất cả các đường ống gió cần được nghiệm thu bên trong bằng quan sát và ghi hình',
      'c. Tất cả các ống gió cần được làm kín từng phần và thử kín theo quy định',
      'd. Tất cả các nhận định trên',
    ],
    correct: 3
  },
  {
    question: 'Điều gì xảy ra khi tháp giải nhiệt vận hành?',
    options: [
      'a. Không cần sử dụng năng lượng',
      'b. Luôn sạch sẽ vì nước giải nhiệt được bơm tuần hoàn',
      'c. Là nơi hứng nhận bụi bẩn từ không khí xung quanh',
      'd. Là nơi lọc rửa nước giải nhiệt',
    ],
    correct: 2
  },
  {
    question: 'Thông số tính toán của không khí trong phòng dùng để thiết kế điều hòa không khí về mùa đông có nhiệt độ từ 21 - 23(°C), độ ẩm tương đối từ 60 - 70 (%), vận tốc gió từ 0,4 - 0,5 (m/s) tương ứng với trạng thái lao động nào dưới đây ?',
    options: [
      'a. Nghỉ ngơi tĩnh tại',
      'b. Lao động nhẹ',
      'c. Lao động vừa',
      'd. Lao động nặng',
    ],
    correct: 1
  },
  {
    question: 'Hai dạng nhiệt nào tham gia trong quá trình điều tiết - xử lý không khí trong công trình?',
    options: [
      'a. Nhiệt hiện và nhiệt bức xạ',
      'b. Nhiệt hiện và nhiệt đối lưu',
      'c. Nhiệt ẩn và nhiệt bức xạ',
      'd. Nhiệt hiện và nhiệt ẩn',
    ],
    correct: 3
  },
  {
    question: 'Đối với phòng hoặc cabin có chứa phần tử gia nhiệt sinh hơi trong nhà ở, các khu vực cấp điện đặc biệt được chia thành các vùng nào sau đây theo mức độ nguy hiểm về điện ?',
    options: [
      'a. Vùng 1, 2',
      'b. Vùng 1, 2, 3',
      'c. Vùng 0, 1, 2, 3',
      'd. Vùng 2, 3',
    ],
    correct: 1
  },
  {
    question: 'Điều kiện cần thiết để các vùng không gian trong các công trình xây dựng được xem là có thông gió tự nhiên nếu các lỗ thông gió, cửa sổ có thể mở được ra bên ngoài với diện tích không nhỏ hơn bao nhiêu % diện tích sàn ?',
    options: [
      'a. 5%',
      'b. 10%',
      'c. 15%',
      'd. 20%',
    ],
    correct: 0
  },
  {
    question: 'VRV nghĩa là gì ?',
    options: [
      'a. Variable Refrigerant Volume;',
      'b. Variable Refrigerated Valve;',
      'c. Variable Refrigeration Value;',
      'd. Valid Refrigerant Valence.',
    ],
    correct: 0
  },
  {
    question: 'Lưu lượng nước lạnh cấp cho bộ xử lý không khí AHU trong hệ thống điều hòa không khí được khống chế bởi bộ phận nào ?',
    options: [
      'a. Bộ điều khiển kỹ thuật số DDC;',
      'b. Van gió điện điều khiển vô cấp;',
      'c. Van nước điện điều khiển vô cấp;',
      'd. Tất cả các bộ phận trên.',
    ],
    correct: 2
  },
  {
    question: 'Tại sao các van gió điện lại được lắp trên các đường gió ngoài và gió hồi trước khi nối vào AHU trong các hệ thống điều hòa không khí lớn ?',
    options: [
      'a. Để ngăn bụi truyền vào trong phòng;',
      'b. Để dừng hệ thống điều hòa không khí về đêm;',
      'c. Để mở hoàn toàn khi có cháy xảy ra;',
      'd. Để điều chỉnh lưu lượng gió ngoài theo nhu cầu.',
    ],
    correct: 3
  },
  {
    question: 'Nhận định nào dưới đây về tháp giải nhiệt là chính xác ?',
    options: [
      'a. Tháp giải nhiệt không là nguồn gây lây lan vi khuẩn;',
      'b. Tháp giải nhiệt nhằm thải nhiệt từ trong công trình ra ngoài khí quyển;',
      'c. Tháp giải nhiệt chỉ vận hành về mùa hè;',
      'd. Tất cả các nhận định trên.',
    ],
    correct: 1
  },
  {
    question: 'Nhận định nào sau đây về chu trình lạnh là đúng ?',
    options: [
      'a. Hơi tác nhân lạnh ngưng tụ ở 20oC để thải nhiệt từ trong nhà ra ngoài môi trường;',
      'b. Dịch tác nhân lạnh bay hơi ở 30oC để thu nhiệt từ bên trong nhà;',
      'c. Van tiết lưu làm tăng áp suất hơi tác nhân lạnh;',
      'd. Nhiệt thừa trong nhà được hấp thụ bởi tác nhân lạnh bay hơi ở áp suất thấp và nhiệt độ khoảng 5oC nhiệt độ.',
    ],
    correct: 3
  },
  {
    question: 'Mục đích sử dụng biểu đồ I-d trong tính toán thiết kế hệ thống thông gió và điều hòa không khí là gì ?',
    options: [
      'a. Biểu diễn sự thay đổi nhiệt độ khí truyền qua tường;',
      'b. Tính toán nhu cầu nhiệt ẩn;',
      'c. Tính toán nhu cầu nhiệt hiện;',
      'd. Biểu diễn các thông số vật lý của không khí ẩm.',
    ],
    correct: 3
  },
  {
    question: 'Độ kín của đường ống gió cấp K (kín) được áp dụng cho các trường hợp nào ?',
    options: [
      'a. Đường ống đi ngang qua của các hệ thống thông gió chung khi áp suất tĩnh tại quạt lớn hơn 1400 Pa;',
      'b. Đường ống của tất cả các hệ thống hút thải cục bộ;',
      'c. Đường ống của hệ thống ĐHKK;',
      'd. Tất cả các trường hợp trên.',
    ],
    correct: 3
  },
  {
    question: 'Khi hút khói trực tiếp từ các gian phòng có diện tích lớn hơn 3000 m2, diện tích vùng khói được quy định có diện tích không lớn hơn bao nhiêu ?',
    options: [
      'a. 1000 m2;',
      'b. 1600 m2;',
      'c. 2500 m2;',
      'd. 3000 m2.',
    ],
    correct: 3
  },
  {
    question: 'Bội số trao đổi không khí khi hệ thống thông gió cho gara ô tô ngầm của nhà chung cư vận hành ở chế độ thông gió hút khói không nhỏ hơn bao nhiêu ?',
    options: [
      'a. 6 lần/h;',
      'b. 8 lần/h;',
      'c. 9 lần/h;',
      'd. 10 lần/h.',
    ],
    correct: 2
  },
  {
    question: 'Đối với nhà văn phòng, phải bố trí thông gió hút thải cục bộ cho khu vực nào ?',
    options: [
      'a. Khu nấu ăn;',
      'b. Phòng in ấn và photocopy;',
      'c. Phòng vệ sinh; phòng giặt;',
      'd. Tất cả các trường hợp trên.',
    ],
    correct: 3
  },
  {
    question: 'Nhận định nào dưới đây về khối lượng riêng của không khí ẩm là đúng ?',
    options: [
      'a. Giảm khi áp suất không khí giảm;',
      'b. Tăng khi nhiệt độ không khí tăng;',
      'c. Phụ thuộc vào nhiệt độ và áp suất không khí;',
      'd. Tăng khi vận tốc không khí tăng.',
    ],
    correct: 2
  },
  {
    question: 'Bội số trao đổi không khí dùng thiết kế hệ thống thông gió cơ khí cho gara ngầm đối với lối ra vào, nơi các xe xếp hàng mà vẫn nổ máy là bao nhiêu ?',
    options: [
      'a. 4 lần/h;',
      'b. 6 lần/h;',
      'c. 8 lần/h;',
      'd. 10 lần/h;',
    ],
    correct: 3
  },
  {
    question: 'Tường bao ngoài công trình trên mặt đất (phần tường không xuyên sáng) của không gian có điều hòa không khí phải có hệ số tổng truyền nhiệt lớn nhất là bao nhiêu?',
    options: [
      'a. 1,8 W/m2.K;',
      'b. 0,56 W/m2.K;',
      'c. 1,0 W/m2.K;',
      'd. 0,5 W/m2.K;',
    ],
    correct: 0
  },
  {
    question: 'Những phòng nào sau đây không yêu cầu thông gió hút khói ?',
    options: [
      'a. Các hành lang sử dụng các buồng thang bộ không nhiễm khói của các nhà công năng khác nhau;',
      'b. Các sảnh chung sử dụng các buồng thang bộ không nhiễm khói của các nhà công năng khác nhau;',
      'c. Các gian phòng được trang bị thiết bị chữa cháy tự động bằng khí hoặc bột;',
      'd. Tất cả các trường hợp trên.',
    ],
    correct: 2
  },
  {
    question: 'Giá trị tổng truyền nhiệt cực đại cho phép của kết cấu mái bằng bao nhiêu ?',
    options: [
      'a. 1,8 W/m2.K;',
      'b. 0,56 W/m2.K;',
      'c. 1,0 W/m2.K;',
      'd. 0,5 W/m2.K;',
    ],
    correct: 2
  },
  {
    question: 'Chỉ số truyền nhiệt tổng của kết cấu tường bao che bên ngoài phải đảm bảo không vượt qua bao nhiêu ?',
    options: [
      'a. 65 W/m2;',
      'b. 60 W/m2;',
      'c. 55 W/m2;',
      'd. 50 W/m2;',
    ],
    correct: 1
  },
  {
    question: 'Chỉ số truyền nhiệt tổng của kết cấu mái phải đảm bảo không vượt qua bao nhiêu ?',
    options: [
      'a. 20 W/m2;',
      'b. 25 W/m2;',
      'c. 30 W/m2;',
      'd. 35 W/m2;',
    ],
    correct: 1
  },
  {
    question: 'Chỉ số hiệu quả COP tối thiểu của máy điều hòa không khí 1 cụm là bao nhiêu?',
    options: [
      'a. 2,2;',
      'b. 2,3;',
      'c. 2,4;',
      'd. 2,8.',
    ],
    correct: 3
  },
  {
    question: 'Chỉ số hiệu quả COP tối thiểu của máy chiller chạy điện giải nhiệt bằng không khí là bao nhiêu ?',
    options: [
      'a. 2,8;',
      'b. 3,1;',
      'c. 3,3;',
      'd. 3,5.',
    ],
    correct: 0
  },
  {
    question: 'Hiệu suất tối thiểu của các bộ đun nước nóng tức thời dùng khí đốt là bao nhiêu ?',
    options: [
      'a. 73%;',
      'b. 77%',
      'c. 78%;',
      'd. 80%;',
    ],
    correct: 2
  },
  {
    question: 'Tiêu chuẩn Việt Nam TCVN 5687:2010 được áp dụng khi thiết kế và lắp đặt các hệ thống thông gió - điều hòa không khí cho đối tượng nào ?',
    options: [
      'a. Các công trình hầm trú ẩn; hầm mỏ;',
      'b. Các hệ thống thiết bị công nghệ và thiết bị điện;',
      'c. Các hệ thống sưởi ấm trung tâm bằng nước nóng hoặc hơi nước;',
      'd. Các công trình kiến trúc nhà ở, công trình công cộng và công trình công nghiệp.',
    ],
    correct: 3
  },
  {
    question: 'Khi thiết kế hệ thống thông gió - điều hòa không khí phải đảm bảo các điều kiện nào sau đây ?',
    options: [
      'a. Vi khí hậu và độ trong sạch của môi trường không khí tiêu chuẩn trong vùng làm việc;',
      'b. Độ ồn và độ rung tiêu chuẩn phát ra từ các thiết bị và hệ thống thông gió - điều hòa không khí;',
      'c. Điều kiện tiếp cận để sửa chữa các hệ thống thông gió - điều hòa không khí;',
      'd. Tất cả các điều trên.',
    ],
    correct: 3
  },
  {
    question: 'Những phòng nào sau đây không yêu cầu thông gió hút khói ?',
    options: [
      'a. Các hành lang hoặc sảnh, khi các gian phòng có cửa đi vào hành lang hoặc sảnh này đã được thoát khói trực tiếp;',
      'b. Các sảnh thông tầng của nhà có chiều cao lớn hơn 28 m;',
      'c. Các sảnh thông tầng có chiều cao lớn hơn 15 m;',
      'd. Tất cả các trường hợp trên.',
    ],
    correct: 0
  },
  {
    question: 'Đối với hệ thống thông gió tự nhiên và cơ khí, về mùa hè, nhiệt độ tính toán của không khí bên trong phòng không được vượt quá 3oC so với nhiệt độ nào sau đây ?',
    options: [
      'a. Nhiệt độ trung bình ngoài trời của tháng nóng nhất trong năm;',
      'b. Nhiệt độ trung bình ngoài trời của mùa hè;',
      'c. Nhiệt độ cao nhất trung bình ngoài trời của tháng nóng nhất trong năm;',
      'd. Nhiệt độ cao nhất ngoài trời của tháng nóng nhất trong năm.',
    ],
    correct: 2
  },
  {
    question: 'Bội số trao đổi không khí dùng thiết kế hệ thống thông gió cơ khí cho gara ngầm là bao nhiêu ?',
    options: [
      'a. 4 lần/h;',
      'b. 6 lần/h;',
      'c. 8 lần/h;',
      'd. 10 lần/h;',
    ],
    correct: 1
  },
  {
    question: 'Giải pháp nào sau đây áp dụng cho hệ thống thông gió - điều hòa không khí là tiết kiệm năng lượng nhất ?',
    options: [
      'a. Tuần hoàn gió cấp;',
      'b. Sử dụng bánh xe hồi nhiệt để tận thu nhiệt từ gió thải;',
      'c. Sử dụng thiết bị hồi nhiệt dạng tấm để tận thu nhiệt từ gió thải;',
      'd. Sử dụng thiết bị hồi nhiệt dạng ống để tận thu nhiệt từ gió thải.',
    ],
    correct: 0
  },
  {
    question: 'Vận tốc gió tối đa trong trường hợp thông gió tự nhiên hoặc thông gió cơ khí trong nhà công nghiệp là bao nhiêu ?',
    options: [
      'a. 1 m/s;',
      'b. 1,5 m/s;',
      'c. 2 m/s;',
      'd. 2,5 m/s.',
    ],
    correct: 3
  },
  {
    question: 'Thông số tính toán của không khí ngoài trời dùng để thiết kế thông gió tự nhiên và thông gió cơ khí về mùa đông là bao nhiêu ?',
    options: [
      'a. Nhiệt độ trung bình ngoài trời của tháng lạnh nhất nhất trong năm;',
      'b. Nhiệt độ trung bình ngoài trời của mùa đông;',
      'c. Nhiệt độ thấp nhất trung bình ngoài trời của tháng lạnh nhất trong năm;',
      'd. Nhiệt độ thấp nhất ngoài trời của tháng lạnh nhất trong năm.',
    ],
    correct: 2
  },
  {
    question: 'Thông số tính toán của không khí ngoài trời dùng để thiết kế Điều hòa không khí theo cấp I có số giờ cho phép không đảm bảo chế độ nhiệt ẩm bên trong nhà là bao nhiêu ?',
    options: [
      'a. m = 25 h/năm;',
      'b. m = 30 h/năm;',
      'c. m = 35 h/năm;',
      'd. m = 40 h/năm;',
    ],
    correct: 2
  },
  {
    question: 'Thông số tính toán của không khí ngoài trời dùng để thiết kế Điều hòa không khí theo cấp II có số giờ cho phép không đảm bảo chế độ nhiệt ẩm bên trong nhà là bao nhiêu ?',
    options: [
      'a. m = 125 - 150 h/năm;',
      'b. m = 150 - 200 h/năm;',
      'c. m = 200 - 250 h/năm;',
      'd. m = 250 - 300 h/năm;',
    ],
    correct: 1
  },
  {
    question: 'Thông số tính toán của không khí ngoài trời dùng để thiết kế Điều hòa không khí theo cấp III có số giờ cho phép không đảm bảo chế độ nhiệt ẩm bên trong nhà là bao nhiêu ?',
    options: [
      'a. m = 250 - 300 h/năm;',
      'b. m = 300 - 350 h/năm;',
      'c. m = 350 - 400 h/năm;',
      'd. m = 400 - 450 h/năm;',
    ],
    correct: 2
  },
  {
    question: 'Cần tổ chức thông gió với áp suất dư dương cho các phòng nào ?',
    options: [
      'a. Phòng sản xuất thuộc cấp nguy hiểm cháy nổ A và B;',
      'b. Phòng có toả mùi khó chịu;',
      'c. Phòng sản xuất tỏa hơi khí độc hại;',
      'd. Phòng “sạch”;',
    ],
    correct: 3
  },
  {
    question: 'Vận tốc gió tối đa tại các phòng ở của nhà chung cư về mùa hè là bao nhiêu ?',
    options: [
      'a. 0,5 m/s;',
      'b. 1 m/s;',
      'c. 1,5 m/s;',
      'd. 2,5 m/s.',
    ],
    correct: 1
  },
  {
    question: 'Cần thông gió áp suất dư dương cho phòng nào ?',
    options: [
      'a. Phòng đệm của nhà sản xuất thuộc cấp nguy hiểm cháy nổ A và B;',
      'b. Phòng đệm sảnh chờ thang máy tại các tầng hầm;',
      'c. Phòng đệm cầu thang bộ thoát nạn;',
      'd. Cả 3 trường hợp trên.',
    ],
    correct: 3
  },
  {
    question: 'Các tuyến ống nào không được phép đi qua gian máy thông gió ?',
    options: [
      'a. ống dẫn chất lỏng dễ cháy;',
      'b. ống dẫn khí đốt;',
      'c. ống dẫn nước thải;',
      'd. Tất cả các ống trên.',
    ],
    correct: 3
  },
  {
    question: 'Đường ống gió có tiết diện hình gì được ưu tiên lựa chọn khi thiết kế và thi công ?',
    options: [
      'a. Hình tròn;',
      'b. Hình vuông;',
      'c. Hình chữ nhật;',
      'd. Hình tam giác.',
    ],
    correct: 0
  },
  {
    question: 'Đường ống gió bằng vật liệu không cháy phải được sử dụng cho trường hợp nào ?',
    options: [
      'a. Các hệ thống hút thải cục bộ hút thải hỗn hợp nguy hiểm cháy nổ;',
      'b. Các tuyến ống ngang qua hoặc ống góp thuộc hệ thống TG-ĐHKK trong nhà ở;',
      'c. Các tuyến ống ngang hoặc ống góp thuộc hệ thống TG-ĐHKK trong nhà công cộng;',
      'd. Tất cả các trường hợp trên.',
    ],
    correct: 3
  },
  {
    question: 'Khi thiết kế Thông gió - Điều hòa không khí phải đảm bảo các điều kiện nào sau đây ?',
    options: [
      'a. Vi khí hậu và độ trong sạch của môi trường không khí tiêu chuẩn trong vùng làm việc;',
      'b. Độ an toàn cháy nổ của các hệ thống Thông gió - Điều hòa không khí;',
      'c. Tiết kiệm năng lượng trong sử dụng và vận hành;',
      'd. Tất cả các điều trên.',
    ],
    correct: 3
  },
  {
    question: 'Đối với nhà ở, phải bố trí thông gió hút thải cục bộ cho khu vực nào ?',
    options: [
      'a. Phòng tắm;',
      'b. Phòng đặt thiết bị giặt là;',
      'c. Phòng bếp; phòng vệ sinh;',
      'd. Tất cả các trường hợp trên.',
    ],
    correct: 3
  },
  {
    question: 'Nhiệt dung riêng của không khí khô là bao nhiêu ?',
    options: [
      'a. 1,205 kJ/kg;',
      'b. 1,005 kJ/kgoK;',
      'c. 4,186 kJ/kg;',
      'd. 4,2 KJ/kgoK.',
    ],
    correct: 1
  },
  {
    question: 'Nhiệt dung riêng của nước là bao nhiêu ?',
    options: [
      'a. 4,186 kJ/kg;',
      'b. 1,013 kW/kgoK;',
      'c. 4,186 kJ/kgoK;',
      'd. 4,2 kgoK/KJ.',
    ],
    correct: 2
  },
  {
    question: 'Khối lượng riêng của không khí ẩm là bao nhiêu ?',
    options: [
      'a. 4,186 kg/m3 ở 25oC, 760 mmHg;',
      'b. 1,013 kg/m3 ở 20oC, ở mực nước biến;',
      'c. 1,205 kg/m3 ở 20oC, 760 mmHg;',
      'd. 0,803 m3/kg.',
    ],
    correct: 2
  },
  {
    question: 'Trong cùng điều kiện áp suất, khối lượng riêng của nước lớn nhất tại nhiệt độ nào ?',
    options: [
      'a. 0oC;',
      'b. 4oC;',
      'c. 20oC;',
      'd. 100oC.',
    ],
    correct: 1
  },
  {
    question: 'Mục đích sử dụng biểu đồ I-d trong tính toán thiết kế hệ thống thông gió và điều hòa không khí là gì ?',
    options: [
      'a. Biểu diễn sự thay đổi nhiệt độ khí truyền qua tường;',
      'b. Tính toán nhu cầu nhiệt ẩn;',
      'c. Tính toàn nhu cầu nhiệt hiện;',
      'd. Biểu diễn các thông số vật lý của không khí ẩm.',
    ],
    correct: 3
  },
  {
    question: 'Chỉ số hiệu quả COP tối thiểu của máy chiller xoắn ốc hoặc trục vít chạy điện giải nhiệt bằng nước có năng suất lạnh ≥ 1055 kW là bao nhiêu ?',
    options: [
      'a. 4,45;',
      'b. 4,9;',
      'c. 5,67;',
      'd. 6,0.',
    ],
    correct: 2
  },
  {
    question: 'Biện pháp phù hợp nhất để giảm tiếng ồn liên quan đến đường ống gió ?',
    options: [
      'a. Các đường ống gió được lắp đặt trên các lò xo giảm chấn;',
      'b. Quạt và động cơ được lắp chặt cứng trên bệ máy bê tông;',
      'c. Quạt được nối mền với các đường ống gió;',
      'd. Tất cả biện pháp trên.',
    ],
    correct: 2
  },
  {
    question: 'Những phòng nào sau đây không yêu cầu thông gió hút khói ?',
    options: [
      'a. Các hành lang và sảnh của các nhà ở, công trình công cộng, các nhà hành chính - sinh hoạt, các nhà đa năng có chiều cao lớn hơn 28 m;',
      'b. Các hành lang của tầng hầm không có chiếu sáng tự nhiên của các nhà dân dụng khi các hành lang này thường xuyên có người;',
      'c. Các gian phòng có diện tích tới 200 m2, được trang bị các thiết bị chữa cháy tự động bằng nước hoặc bọt (trừ các gian phòng hạng A và B);',
      'd. Tất cả các trường hợp trên.',
    ],
    correct: 2
  },
  {
    question: 'Quy chuẩn kỹ thuật quốc gia về các công trình xây dựng sử dụng năng lượng hiệu quả quy định những yêu cầu kỹ thuật bắt buộc phải tuân thủ khi thiết kế, xây dựng mới hoặc cải tạo các công trình có tổng diện tích sàn từ 2500 m2 trở lên thuộc các loại hoặc hỗn hợp các loại công trình nào dưới đây:?',
    options: [
      'a. Nhà công nghiệp, Rạp hát, Câu lạc bộ. Thương mại, dịch vụ',
      'b. Nhà thi đấu thể thao, Bệnh viện, Trường học, văn phòng',
      'c. Chung cư, Văn phòng, Trường học, Nhà hát, Nhà thi đấu đa năng',
      'd. Văn phòng, khách sạn, bệnh viện, trường học, thương mại, dịch vụ, chung cư',
    ],
    correct: 3
  },
  {
    question: 'Đối với tường ngoài và mái của công trình buộc phải tuân thủ quy chuẩn kỹ thuật quốc gia về các công trình xây dựng sử dụng năng lượng hiệu quả, nếu không áp dụng các quy định chi tiết về R0 và SHGC thì giá trị OTTV của tường và mái tối đa là bao nhiêu?',
    options: [
      'a. OTTVT / OTTVT: 30/25 W/m2;',
      'b. OTTVT / OTTVT: 60/25 W/m2;',
      'c. OTTVT / OTTVT: 50/30 W/m2;',
      'd. OTTVT / OTTVT: 70/20 W/m2.',
    ],
    correct: 1
  },
  {
    question: 'Thông số tính toán của không khí trong phòng dùng để thiết kế điều hòa không khí về mùa hè có nhiệt độ từ 22 - 25(oC), độ ẩm tương đối từ 60 - 70 (%), vận tốc gió từ 1,2 - 1,5 (m/s) tương ứng với trạng thái lao động nào dưới đây ?',
    options: [
      'a. Nghỉ ngơi tĩnh tại;',
      'b. Lao động nhẹ;',
      'c. Lao động vừa;',
      'd. Lao động nặng.',
    ],
    correct: 2
  },
];
