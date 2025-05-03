const questions = [
  {
    question: 'Mạng truyền dẫn của công trình cấp nước là',
    options: [
      'a. Các đường ống dẫn nước sạch từ trạm bơm nước sạch đến nơi tiêu thụ và các công trình phụ trợ có liên quan',
      'b. Các đường ống có chức năng vận chuyển nước tới các khu vực của vùng phục vụ cấp nước',
      'c. Các đường ống nối có chức năng điều hoà lưu lượng cho các tuyến ống của mạng lưới cấp I, bảo đảm sự làm việc an toàn của hệ thống cấp nước và tới các khách hàng có nhu cầu sử dụng nước lớn',
      'd. Các đường ống lấy nước từ các đường ống của tuyến ống mạng cấp II và ống nối dẫn nước tới các khách hàng sử dụng nước',
    ],
    correct: 1
  },
  {
    question: 'Tuyến ống cấp 1 của công trình thoát nước là',
    options: [
      'a. Cống thu gom và chuyển tải nước thải và các công trình phụ trợ khác nhằm mục đích thu gom, tiêu thoát, xử lý nước thải',
      'b. Cống thu gom nước mưa, nước thải từ các hộ thoát nước đến cống cấp 2 hoặc cống cấp 3',
      'c. Tuyến cống chính thu gom dẫn nước từ các lưu vực thoát nước đến nhà máy xử lý nước thải hoặc xả ra nguồn tiếp nhận',
      'd. Cống tiếp nhận và vận chuyển nước từ cống cấp 3 vào cống cấp 2',
    ],
    correct: 2
  },
  {
    question: 'Công trình xử lý nước thải phân cấp công trình là cấp I có tổng công suất:',
    options: [
      'a. ≥ 10.000 m3/ngày.đêm',
      'b. ≥ 20.000 m3/ngày.đêm',
      'c. ≥ 30.000 m3/ngày.đêm',
      'd. ≥ 40.000 m3/ngày.đêm',
    ],
    correct: 1
  },
  {
    question: 'Khi lựa chọn dây chuyền công nghệ xử lý nước cấp cho đô thị, bên cạnh các tiêu chí về thành phần tính chất của nước thô, công suất của trạm cấp nước, yêu cầu chất lượng nước cấp cho sinh hoạt theo quy định, cần căn cứ vào các tiêu chí nào khác?',
    options: [
      'a. Yêu cầu tiết kiệm diện tích.',
      'b. Yêu cầu tiết kiệm diện tích, chi phí đầu tư và vận hành.',
      'c. Yêu cầu tiết kiệm năng lượng.',
      'd. Yêu cầu tiết kiệm diện tích và năng lượng.',
    ],
    correct: 2
  },
  {
    question: 'Trong dây chuyền công nghệ khử sắt trong nước, khi nào phải sử dụng bể lắng tiếp xúc?',
    options: [
      'a. Khi hàm lượng cặn lớn nhất sau làm thoáng nhỏ hơn 15 mg/l',
      'b. Khi hàm lượng cặn lớn nhất sau làm thoáng lớn hơn 15 mg/l',
      'c. Khi hàm lượng cặn lớn nhất sau làm thoáng nhỏ hơn 20 mg/l',
      'd. Khi hàm lượng cặn lớn nhất sau làm thoáng lớn hơn 20 mg/l',
    ],
    correct: 3
  },
  {
    question: 'Diện tích tối thiểu khu đất xây dựng trạm xử lý nước công suất từ 60.000-120.000 m3/ngđ được dự báo trong quy hoạch cấp nước là bao nhiêu ha?',
    options: [
      'a. 3 ha',
      'b. 4 ha',
      'c. 5 ha',
      'd. 6 ha',
    ],
    correct: 1
  },
  {
    question: 'Trong dây chuyền công nghệ xử lý nước cấp, phải bố trí ngăn tách khí khi sử dụng công trình nào?',
    options: [
      'a. Bể tạo bông có lớp cặn lơ lửng, bể lắng đứng, bể lắng trong có tầng cặn lơ lửng,',
      'b. Bể tạo bông kiểu vách ngăn, bể lắng trong có tầng cặn lơ lửng, bể lọc tiếp xúc,',
      'c. Bể tạo bông có lớp cặn lơ lửng, bể lắng trong có tầng cặn lơ lửng, bể lọc tiếp xúc',
      'd. Bể tạo bông kiểu vách ngăn, Bể tạo bông có lớp cặn lơ lửng, bể lắng trong có tầng cặn lơ lửng',
    ],
    correct: 2
  },
  {
    question: 'Trong trạm định lượng Clo, phải thiết kế hệ thống thông gió cơ khí hoạt động thường xuyên với số lần thay đổi không khí là bao nhiêu lần trong 1 giờ.',
    options: [
      'a. 4 lần/h',
      'b. 6 lần/h',
      'c. 10 lần/h',
      'd. 12 lần/h',
    ],
    correct: 1
  },
  {
    question: 'Độ sâu đặt ống cấp nước dưới đất (tính từ mặt đất đến đỉnh ống) được quy định như thế nào?',
    options: [
      'a. Khi D ≤ 300 mm: không nhỏ hơn 0,6 m; khi D > 300 mm: không nhỏ hơn 1,0 m.',
      'b. Khi D ≤ 300 mm: không nhỏ hơn 0,7 m; khi D > 300 mm: không nhỏ hơn 1,0 m.',
      'c. Khi D ≤ 300 mm: không nhỏ hơn 0,8 m; khi D > 300 mm: không nhỏ hơn 1,0 m.',
    ],
    correct: 1
  },
  {
    question: 'Đối với mạng lưới cấp nước đô thị, áp lực tự do trong mạng lưới cấp nước chữa cháy phải đảm bảo tối thiểu là bao nhiêu m?',
    options: [
      'a. ≥ 10m',
      'b. ≥12m',
      'c. ≥15m',
      'd. ≥20m',
    ],
    correct: 0
  },
  {
    question: 'Trạm bơm cấp II bơm nước sạch sử dụng biến tần, trong giờ dùng nước ít, số vòng quay của máy bơm không được giảm đến dưới bao nhiêu % số vòng quay định mức',
    options: [
      'a. 40%',
      'b. 50%',
      'c. 60%',
      'd. 70%',
    ],
    correct: 1
  },
  {
    question: 'Sắp xếp thứ tự các công trình chính của hệ thống cấp nước cho đúng:',
    options: [
      'a. Khai thác, điều hoà, xử lý nước, vận chuyển và phân phối nước tới các đối tượng dùng nước.',
      'b. Khai thác, điều hoà, vận chuyển, xử lý nước và phân phối nước tới các đối tượng dùng nước.',
      'c. Khai thác, vận chuyển, điều hoà, xử lý nước và phân phối nước tới các đối tượng dùng nước.',
      'd. Khai thác, xử lý nước, điều hòa, vận chuyển và phân phối nước tới các đối tượng dùng nước.',
    ],
    correct: 3
  },
  {
    question: 'Khi độ dao động mực nước các mùa từ 6 m trở lên phải bố trí 2 hàng cửa thu nước ở độ cao khác nhau. Khoảng cách theo chiều cao giữa 2 hàng cửa tối thiểu là:',
    options: [
      'a. 2 m',
      'b. 3 m',
      'c. 4 m',
      'd. 5 m',
    ],
    correct: 1
  },
  {
    question: 'Việc bố trí ống hút của trạm bơm cấp nước, số lượng ống hút chung phải ít nhất là 2 ống. Trạm bơm cho phép đặt 1 ống hút có công suất?',
    options: [
      'a. Nhỏ hơn 1 000 m3/ngày',
      'b. Nhỏ hơn 3 000 m3/ngày',
      'c. Nhỏ hơn 5 000 m3/ngày',
      'd. Nhỏ hơn 10 000 m3/ngày',
    ],
    correct: 1
  },
  {
    question: 'Việc bố trí ống đẩy của trạm bơm cấp nước, phải bảo đảm ít nhất có 2 ống đẩy chung, trong trường hợp nào cho phép bố trí 1 ống đẩy chung?',
    options: [
      'a. Khi công suất nhỏ hơn 1 000 m3/ngày hoặc trong hệ thống có nhiều nhà máy cùng cấp nước vào mạng lưới',
      'b. Khi công suất nhỏ hơn 3 000 m3/ngày hoặc trong hệ thống có nhiều nhà máy cùng cấp nước vào mạng lưới',
      'c. Khi công suất nhỏ hơn 5 000 m3/ngày hoặc trong hệ thống có nhiều nhà máy cùng cấp nước vào mạng lưới',
      'd. Khi công suất nhỏ hơn 10 000 m3/ngày hoặc trong hệ thống có nhiều nhà máy cùng cấp nước vào mạng lưới',
    ],
    correct: 1
  },
  {
    question: 'Diện tích mặt bằng của trạm bơm giếng khoan tối thiểu là bao nhiêu m2',
    options: [
      'a. 8 m2',
      'b. 12 m2',
      'c. 16 m2',
      'd. 20 m2',
    ],
    correct: 1
  },
  {
    question: 'Phải xử lý nước rửa lọc khi trạm/ nhà máy xử lý nước cấp có công suất từ bao nhiêu m3/ngđ trở lên?',
    options: [
      'a. Công suất từ 3 000 m3/ngđ',
      'b. Công suất từ 5 000 m3/ngđ',
      'c. Công suất từ 10 000 m3/ngđ',
      'd. Công suất từ 30 000 m3/ngđ',
    ],
    correct: 2
  },
  {
    question: 'Khi nào công trình đơn vị trong trạm xử lý nước cấp tối thiểu phải có 2 đơn nguyên?',
    options: [
      'a. Khi công suất trạm từ 1.000 m3/ngđ trở lên',
      'b. Khi công suất trạm từ 2.000 m3/ngđ trở lên',
      'c. Khi công suất trạm từ 3.000 m3/ngđ trở lên',
      'd. Khi công suất trạm từ 5.000 m3/ngđ trở lên',
    ],
    correct: 2
  },
  {
    question: 'Hàm lượng cặn trong nước sau bể lắng đối với dây chuyền công nghệ xử lý nước cấp được quy định:',
    options: [
      'a. Hàm lượng cặn trong nước sau bể lắng không được vượt quá 12 mg/l',
      'b. Hàm lượng cặn trong nước sau bể lắng không được vượt quá 15 mg/l',
      'c. Hàm lượng cặn trong nước sau bể lắng không được vượt quá 20 mg/l',
      'd. Hàm lượng cặn trong nước sau bể lắng không được vượt quá 30 mg/l',
    ],
    correct: 2
  },
  {
    question: 'Trong dây chuyền công nghệ xử lý nước cấp, quy định phải xây dựng công trình lắng sơ bộ trong trường hợp:',
    options: [
      'a. Nước có hàm lượng cặn lớn hơn 1 000 mg/l',
      'b. Nước có hàm lượng cặn lớn hơn 1 500 mg/l',
      'c. Nước có hàm lượng cặn lớn hơn 2 000 mg/l',
      'd. Nước có hàm lượng cặn lớn hơn 2 500 mg/l',
    ],
    correct: 1
  },
  {
    question: 'Giới hạn tốc độ lọc tính toán trong bể lọc chậm là:',
    options: [
      'a. Từ 0,05 - 0,1 m/h',
      'b. Từ 0,1 - 0,3 m/h',
      'c. Từ 0,3 - 0,5 m/h',
      'd. Từ 0,5 - 1,0 m/h',
    ],
    correct: 1
  },
  {
    question: 'Trong dây chuyền công nghệ xử lý nước cấp, chiều cao lớp nước trên bề mặt lớp lọc của bể lọc nhanh trọng lực được quy định:',
    options: [
      'a. Tối thiểu là 0,8 m',
      'b. Tối thiểu là 1,0 m',
      'c. Tối thiểu là 1,2 m',
      'd. Tối thiểu là 1,5 m',
    ],
    correct: 3
  },
  {
    question: 'Ở chế độ làm việc bình thường của bể lọc nhanh trọng lực với vật liệu lọc cát thạch anh được thiết kế với tốc độ lọc là:',
    options: [
      'a. 0,5 - 5 m/h',
      'b. 5 - 10 m/h',
      'c. 10 - 15 m/h',
      'd. 15 - 30 m/h',
    ],
    correct: 1
  },
  {
    question: 'Trong bể lọc nhanh trọng lực, hệ thống phân phối bằng chụp lọc được thiết kế khi áp dụng biện pháp rửa bằng nước kết hợp với không khí, số lượng chụp lọc được quy định như thế nào?',
    options: [
      'a. Không dưới 40 cái/m2 diện tích lọc của bể',
      'b. Không dưới 50 cái/m2 diện tích lọc của bể',
      'c. Không dưới 60 cái/m2 diện tích lọc của bể',
      'd. Không dưới 90 cái/m2 diện tích lọc của bể',
    ],
    correct: 1
  },
  {
    question: 'Đường ống cấp nước đặt qua sông, kênh, rạch phải đặt sâu hơn đáy sông, kênh rạch bao nhiêu m?',
    options: [
      'a. Ít nhất là 0,3 m',
      'b. Ít nhất là 0,5 m',
      'c. Ít nhất là 1,0 m',
      'd. Ít nhất là 1,5 m',
    ],
    correct: 1
  },
  {
    question: 'Đường ống dẫn cấp nước và mạng lưới phải đặt dốc về phía van xả cặn với độ dốc được quy định:',
    options: [
      'a. Không nhỏ hơn 0,001',
      'b. Không nhỏ hơn 0,002',
      'c. Không nhỏ hơn 0,003',
      'd. Không nhỏ hơn 0,005',
    ],
    correct: 0
  },
  {
    question: 'Khi nào bể mê tan phải được xem xét như một phương án để phân hủy cặn lắng của nước thải?',
    options: [
      'a. Khi trạm XLNT có công suất từ 5 000 m3/ngđ trở lên',
      'b. Khi trạm XLNT có công suất từ 6 000 m3/ngđ trở lên',
      'c. Khi trạm XLNT có công suất từ 7 000 m3/ngđ trở lên',
      'd. Khi trạm XLNT có công suất từ 8 000 m3/ngđ trở lên',
    ],
    correct: 2
  },
  {
    question: 'Đối với bãi lọc cát sỏi, hào lọc và bãi lọc ngập nước trồng cây để XLNT, chiều dày lớp đất không bão hòa (tính từ đáy bãi lọc đến mực nước ngầm cao nhất) là bao nhiêu m đối với đất cát, mùn, cát pha?',
    options: [
      'a. 1,0 m',
      'b. 1,5 m',
      'c. 2,0 m',
      'd. > 2,5 m',
    ],
    correct: 1
  },
  {
    question: 'Trong trạm/nhà máy XLNT, đối với mương ôxy hóa tuần hoàn, lượng bùn hoạt tính dư được xác định trong khoảng là:',
    options: [
      'a. 0,2-0,3 kg/kg BOD5',
      'b. 0,3-0,4 kg/kg BOD5',
      'c. 0,4-0,5 kg/kg BOD5',
      'd. 0,5-0,6 kg/kg BOD5',
    ],
    correct: 2
  },
  {
    question: 'Đường kính tối thiểu của ống, cống thoát nước mưa, cống thoát nước chung ngoài đường phố?',
    options: [
      'a. 300 mm',
      'b. 400 mm',
      'c. 450 mm',
      'd. 500 mm',
    ],
    correct: 1
  },
  {
    question: 'Độ dốc tối thiểu của rãnh thoát nước mưa bên đường.',
    options: [
      'a. Không nhỏ hơn 0,002',
      'b. Không nhỏ hơn 0,003',
      'c. Không nhỏ hơn 0,004',
      'd. Không nhỏ hơn 0,005',
    ],
    correct: 1
  },
  {
    question: 'Trong trường hợp đặc biệt, khi trạm xử lý nước thải (XLNT) hoặc sân phơi bùn bắt buộc phải đặt ở đầu hướng gió chính của đô thị, khoảng cách an toàn về môi trường phải tăng lên tối thiểu bao nhiêu lần so với khi Trạm XLNT đặt ở cuối hướng gió chính?',
    options: [
      'a. 1,2 lần',
      'b. 1,5 lần',
      'c. 1,8 lần',
      'd. 2 lần',
    ],
    correct: 1
  },
  {
    question: 'Trong trạm/nhà máy XLNT, chiều sâu hồ sinh học hiếu khí làm thoáng cưỡng bức được quy định thế nào?',
    options: [
      'a. Không dưới 3 m',
      'b. Không dưới 4 m',
      'c. Không quá 3 m',
      'd. Không quá 4 m',
    ],
    correct: 3
  },
  {
    question: 'Trong trạm bơm nước thải, khi nào ngăn thu cần chia ra 2 ngăn (nhưng không làm tăng thể tích chung)',
    options: [
      'a. Trạm bơm công suất lớn hơn 60.000 m3/ngđ',
      'b. Trạm bơm công suất lớn hơn 80.000 m3/ngđ',
      'c. Trạm bơm công suất lớn hơn 100.000 m3/ngđ',
      'd. Trạm bơm công suất lớn hơn 120.000 m3/ngđ',
    ],
    correct: 2
  },
  {
    question: 'Trong trạm/nhà máy XLNT, thể tích ngăn thu của trạm bơm cặn tươi, cặn đã lên men hoặc bùn hoạt tính xác định theo khối lượng bùn cần xả ra từ những nguồn nào?Bể nén bùn phải được bố trí trong các công trình xử lý nước thải có?',
    options: [
      'a. Bể mê tan',
      'b. Bể lọc sinh học',
      'c. Hồ sinh học',
      'd. Bể aeroten',
    ],
    correct: 3
  },
  {
    question: 'Trong trạm/nhà máy XLNT, khi công suất của trạm bơm không khí là bao nhiều thì cần ít nhất 2 máy làm việc?',
    options: [
      'a. 3.000 m3/h',
      'b. 4.000 m3/h',
      'c. 5.000 m3/h',
      'd. 6.000 m3/h',
    ],
    correct: 2
  },
  {
    question: 'Trong trạm/nhà máy XLNT, bể điều hòa khuấy trộn cơ khí được sử dụng khi nào?',
    options: [
      'a. Khi hàm lượng chất lơ lửng trên 200 mg/l với chế độ nước vào bể bất kỳ',
      'b. Khi hàm lượng chất lơ lửng trên 300 mg/l với chế độ nước vào bể bất kỳ',
      'c. Khi hàm lượng chất lơ lửng trên 400 mg/l với chế độ nước vào bể bất kỳ',
      'd. Khi hàm lượng chất lơ lửng trên 500 mg/l với chế độ nước vào bể bất kỳ',
    ],
    correct: 3
  },
  {
    question: 'Hệ thống thoát nước phải phù hợp các yếu tố:',
    options: [
      'a. Quy mô đô thị, yêu cầu vệ sinh,',
      'b. Yêu cầu vệ sinh, điều kiện tự nhiên,',
      'c. Hiện trạng đô thị và hiện trạng hệ thống thoát nước.',
      'd. Quy mô đô thị, yêu cầu vệ sinh, điều kiện tự nhiên, hiện trạng đô thị và hiện trạng hệ thống thoát nước.',
    ],
    correct: 3
  },
  {
    question: 'Khi lựa chọn hệ thống thoát nước, các khu đô thị xây dựng mới phải xây dựng',
    options: [
      'a. Hệ thống thoát nước nửa riêng',
      'b. Hệ thống thoát nước chung',
      'c. Hệ thống thoát nước riêng',
      'd. Hệ thống thoát nước riêng hoặc nửa riêng',
    ],
    correct: 2
  },
  {
    question: 'Lượng nước thải sinh hoạt thu gom được so với tiêu chuẩn cấp nước sinh hoạt?',
    options: [
      'a. Phải đạt ≥60%',
      'b. Phải đạt ≥70%',
      'c. Phải đạt ≥80%',
      'd. Phải đạt ≥90%',
    ],
    correct: 2
  },
  {
    question: 'Đường kính tối thiểu của ống, cống thoát nước thải ngoài đường phố?',
    options: [
      'a. 100 mm',
      'b. 150 mm',
      'c. 200 mm.',
      'd. 250 mm',
    ],
    correct: 2
  },
  {
    question: 'Vận tốc tính toán nhỏ nhất trong mạng lưới thoát nước tự chảy đối với các loại kích thước ống, cống, kênh, mương khác nhau được quy định:',
    options: [
      'a. 0,5 - 1,3 m/s',
      'b. 0,7 - 1,3 m/s',
      'c. 0,7 - 1,5 m/s',
      'd. 0,8 - 1,6 mm/s',
    ],
    correct: 1
  },
  {
    question: 'Độ đầy của ống thoát nước thải có D = 200 - 300 mm?',
    options: [
      'a. Không quá 0,6 D',
      'b. Không quá 0,65 D',
      'c. Không quá 0,7 D',
      'd. Không quá 0,75 D',
    ],
    correct: 0
  },
  {
    question: 'Độ sâu chôn ống nhỏ nhất đối với tất cả các loại đường kính ống (tính từ cao độ mặt đường đến đỉnh ống) tại khu vực có xe cơ giới qua lại?',
    options: [
      'a. 0,3 m',
      'b. 0,5 m',
      'c. 0,7 m',
      'd. 0,9 m',
    ],
    correct: 1
  },
  {
    question: 'Cống có đường kính nhỏ hơn hay bằng 800 mm, kích thước bên trong giếng thăm là:',
    options: [
      'a. D = 700 mm hoặc 700 x 700 mm',
      'b. D = 800 mm hoặc 800 x 800 mm',
      'c. D = 900 mm hoặc 900 x 900 mm;',
      'd. D = 1 000 mm hoặc 1 000 x 1 000 mm;',
    ],
    correct: 3
  },
  {
    question: 'Trạm/nhà máy XLNT phải xây dựng bể lắng cát khi nào?',
    options: [
      'a. Có công suất ≥ 100 m3/ngày đêm',
      'b. Có công suất ≥ 500 m3/ngày đêm',
      'c. Có công suất ≥ 1000 m3/ngày đêm',
      'd. Có công suất bất kỳ.',
    ],
    correct: 0
  },
  {
    question: 'Trong trạm/nhà máy XLNT phải bố trí thiết bị thu dầu mỡ khi nào?',
    options: [
      'a. Nồng độ dầu mỡ lớn hơn 50 mg/l.',
      'b. Nồng độ dầu mỡ lớn hơn 100 mg/l.',
      'c. Nồng độ dầu mỡ lớn hơn 150 mg/l.',
      'd. Nồng độ dầu mỡ lớn hơn 200 mg/l.',
    ],
    correct: 1
  },
  {
    question: 'Trong trạm/nhà máy XLNT, thời gian lưu thủy lực trong bể điều hòa lưu lượng và nồng độ?',
    options: [
      'a. Không dưới 6 giờ',
      'b. Không dưới 12 giờ',
      'c. Không dưới 18 giờ',
      'd. Không dưới 24 giờ',
    ],
    correct: 0
  },
  {
    question: 'Trong trạm/nhà máy XLNT, nồng độ chất rắn lơ lửng của dòng nước thải trước khi vào các công trình xử lý sinh học được quy định thế nào?',
    options: [
      'a. Dưới 150 mg/l',
      'b. Dưới 200 mg/l',
      'c. Dưới 250 mg/l',
      'd. Dưới 300 mg/l',
    ],
    correct: 0
  },
  {
    question: 'Trong trạm/nhà máy XLNT, thời gian tuyển nổi cần thiết trong thiết bị hay bể tuyển nổi?',
    options: [
      'a. Không dưới 15 phút',
      'b. Không dưới 20 phút',
      'c. Không dưới 25 phút',
    ],
    correct: 1
  },
  {
    question: 'Giếng thăm của mạng lưới thoát nước, chiều cao phần công tác của giếng (tính từ sàn công tác tới dàn đỡ cổ giếng) được quy định:',
    options: [
      'a. ≥ 1,2 m',
      'b. ≥ 1,5 m',
      'c. ≥ 1,8 m',
      'd. ≥ 2,0 m',
    ],
    correct: 2
  },
  {
    question: 'Trong trạm/nhà máy XLNT, nên tái sinh bùn hoạt tính cho bể aeroten đẩy trong trường hợp nào?',
    options: [
      'a. Khi BOD5 của nước thải đưa vào bể aeroten lớn hơn 150 mg/l (1)',
      'b. Nước thải sản xuất có các chất khó ôxy hóa sinh hóa (2)',
      'c. Nước thải chỉ được xử lý sinh học không hoàn toàn (3)',
      'd. Tất cả các trường hợp (1), (2), (3)',
    ],
    correct: 3
  },
];
