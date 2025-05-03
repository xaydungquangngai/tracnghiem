const questions = [
  {
    question: 'Bán kính đường cong nằm tối thiểu của đường sắt cấp I - khổ 1435mm bằng bao nhiêu?',
    options: [
      'a. R≥ 2200m',
      'b. R≥ 2300m',
      'c. R≥ 2400m',
      'd. R≥ 2500m',
    ],
    correct: 0
  },
  {
    question: 'Độ dốc trên đường chính tuyến lớn nhất bằng bao nhiêu trong trường hợp bình thường tiêu chuẩn đường sắt đô thị?',
    options: [
      'a. ≤32‰',
      'b. ≤33‰',
      'c. ≤34‰',
      'd. ≤35‰',
    ],
    correct: 3
  },
  {
    question: 'Đường sắt tốc cao tốc độ thiết kế ≤350km/h trường hợp khó khăn, kiến trúc tầng trên có đá ballast thì bán kính đường cong nằm nhỏ nhất bằng bao nhiêu?',
    options: [
      'a. R≥ 5000m',
      'b. R≥ 5500m',
      'c. R≥ 6000m',
      'd. R≥ 6500m',
    ],
    correct: 2
  },
  {
    question: 'Chiều rộng mặt nền đường của chính tuyến trong khu đoạn đường đắp, đường đào tiêu chuẩn trong trường hợp bình thường tiêu chuẩn đường sắt đô thị bằng bao nhiêu?',
    options: [
      'a. 2.8m',
      'b. 2.9m',
      'c. 3.0m',
      'd. 3.1m',
    ],
    correct: 3
  },
  {
    question: 'Chiều cao ke ga tiêu chuẩn cao hơn cao độ mặt ray bằng bao nhiêu trong tiêu chuẩn đường sắt đô thị?',
    options: [
      'a. 1050mm',
      'b. 1100mm',
      'c. 1150mm',
      'd. 1200mm',
    ],
    correct: 1
  },
  {
    question: 'Đường sắt cấp I khổ 1000mm quy định khoảng cách giữa hai tim đường chính trên đường thẳng là bao nhiêu?',
    options: [
      'a. 3.8m',
      'b. 4.0m',
      'c. 4.1m',
      'd. 4.3m',
    ],
    correct: 1
  },
  {
    question: 'Trong trường hợp bình thường độ dốc hạn chế của tuyến đường sắt cấp II - khổ 1435mm bằng bao nhiêu sử dụng sức kéo điện?',
    options: [
      'a. ip≤6‰',
      'b. ip≤7‰',
      'c. ip≤8‰',
      'd. ip≤9‰',
    ],
    correct: 0
  },
  {
    question: 'Đường sắt tốc cao tốc độ thiết kế ≤350km/h khoảng cách giữa hai tim đường chính tuyến liền kề trên đường thẳng bằng bao nhiêu?',
    options: [
      'a. ≥4.75m',
      'b. ≥5.00m',
      'c. ≥5.25m',
      'd. ≥5.50m',
    ],
    correct: 1
  },
  {
    question: 'Chiều dài đoạn cong tròn có siêu cao không đổi giữa hai đoạn vuốt siêu cao tuyến tính (Li,lim) trong đường sắt khổ 1435mm đối với đường sắt tốc độ cao bằng bao nhiêu trường hợp giới hạn thông thường?',
    options: [
      'a. 15 (m)',
      'b. 20 (m)',
      'c. 25 (m)',
      'd. 30 (m)',
    ],
    correct: 1
  },
  {
    question: 'Cấp điện cho đường sắt đô thị và đường sắt cao tốc có những phương thức chủ yếu nào ?',
    options: [
      'a. Cấp điện trên cao ( OCS - overhead Contact system )',
      'b. Cấp điện ray thứ 3 ( TRS - Third rail system );',
      'c. Đang nghiên cứu áp dụng, mới giai đoạn thử nghiệm, chưa áp dụng rộng rãi là cấp điện không dây (WPT - wireless power transfer);',
      'd. Cả ba phương thức trên.',
    ],
    correct: 3
  },
  {
    question: 'Những loại hình đường sắt nào cần thiết phải sử dụng đường ray không khe nối?',
    options: [
      'a. Đường sắt có tốc độ nhỏ hơn 120 km/h',
      'b. Đường sắt cao tốc',
      'c. Đường sắt đô thị',
      'd. Cả đáp án b và c',
    ],
    correct: 3
  },
  {
    question: 'Lực cản đường cong cần phải được xét tới trong trường hợp nào sau đây ?',
    options: [
      'a. Khi tính toán vận tốc chạy tàu lớn nhất cho phép trên đường cong',
      'b. Khi tính toán khối lượng đoàn tàu khai thác trên tuyến',
      'c. Khi thiết kế độ dốc trắc dọc mà yếu tố trắc dọc này nằm trên đường cong',
      'd. Cả ba đáp án trên',
    ],
    correct: 2
  },
  {
    question: 'Khu vực điều chỉnh của đường sắt không khe nối dùng để làm gì ?',
    options: [
      'a. Điều chỉnh khe hở mối nối ray',
      'b. Điều chỉnh ứng suất nhiệt',
      'c. Giải phóng ứng suất nhiệt',
      'd. Cho ray co giãn tự do',
    ],
    correct: 1
  },
  {
    question: 'Trên đường sắt không khe nối thì ray có được co giãn hay không ?',
    options: [
      'a. Không được',
      'b. Được co giãn ở khu vực điều chỉnh co giãn',
      'c. Được co giãn ở khu vực co giãn',
      'd. Cả hai đáp án b và đáp án c',
    ],
    correct: 3
  },
  {
    question: 'Để đảm bảo tính hợp lý trong việc phối hợp thiết kế giữa bình đồ và trắc dọc, khi địa hình khó khăn thì việc lựa chọn bán kính đường cong, chiều dài hoãn hòa ở khu vực gần ga hoặc đỉnh dốc lớn như thế nào là hợp lý?',
    options: [
      'a. Bán kính lớn, chiều dài hoãn hòa lớn',
      'b. Bán kính lớn, chiều dài hoãn hòa nhỏ',
      'c. Bán kính nhỏ, chiều dài hoãn hòa nhỏ',
      'd. Bán kính nhỏ, chiều dài hoãn hòa lớn',
    ],
    correct: 2
  },
  {
    question: 'Mục đích của việc bố trí điểm đổi dốc theo bình đồ?',
    options: [
      'a. Để đảm bảo tàu chạy an toàn và êm thuận',
      'b. Để thực hiện siêu cao một cách dễ dàng và chính xác',
      'c. Để đường cong nối dốc đứng của trắc dọc trùng với đường cong hoãn hòa trên bình đồ',
      'd. Để đường cong nối dốc đứng của trắc dọc không trùng với đường cong hoãn hòa trên bình đồ',
    ],
    correct: 3
  },
  {
    question: 'Trước khi về ga giả sử cần thiết kế 3 đường cong liên tiếp, hãy chỉ ra tập hợp bán kính đường cong nào là hợp lý nhất?',
    options: [
      'a. 1000 - 800 - 600 m - Ga',
      'b. 800 - 800 - 800 m - Ga',
      'c. 600 - 800 - 1000 m - Ga',
      'd. 1000 - 600 - 800 m - Ga',
    ],
    correct: 0
  },
  {
    question: 'Khi nền ga nằm trên trắc dọc hình lồi thì đoạn dốc trước ga cần thiết kế:',
    options: [
      'a. Độ dốc lớn để tàu ra ga có khả năng tăng tốc nhanh',
      'b. Đảm bảo đoàn tàu dừng đỗ an toàn',
      'c. Trên chiều dài tối thiểu bằng chiều dài đoàn tàu phải đảm bảo điều kiện khởi động',
      'd. Cả đáp án b và c',
    ],
    correct: 3
  },
  {
    question: 'Để đánh giá việc vạch tuyến của một đoạn tuyến là khó khăn có thể dựa vào những thông số nào sau đây?',
    options: [
      'a. Các thông số về bình đồ và trắc dọc tuyến',
      'b. Khối lượng công tác xây dựng và giá thành xây dựng',
      'c. Số lượng công trình nhân tạo lớn như: cầu, hầm,...',
      'd. Cả ba đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Khổ giới hạn tiếp giáp kiến trúc trên đường cong được nới rộng như thế nào so với khổ giới hạn tiếp giáp kiến trúc trên đường thẳng?',
    options: [
      'a. Nới rộng về phía bụng đường cong',
      'b. Nới rộng về phía lưng đường cong',
      'c. Nới rộng về cả phía bụng và phía lưng đường cong',
      'd. Cả 3 đáp án trên đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Trên đường cong bề rộng mặt nền đường được nới rộng về phía nào?',
    options: [
      'a. Lưng đường cong',
      'b. Bụng đường cong',
      'c. Nới đều sang cả hai bên lưng và bụng đường cong',
      'd. Cả ba đáp án trên đều đúng',
    ],
    correct: 0
  },
  {
    question: 'Năng lực vận chuyển của một tuyến, đoạn tuyến đường sắt là:',
    options: [
      'a. Khả năng vận chuyển được khối lượng hàng hóa',
      'b. Số lượng đôi tàu thông qua trong một ngày đêm',
      'c. Khả năng vận chuyển được khối lượng hàng hóa và hành khách quy đổi',
      'd. Đáp án b hoặc đáp án c tùy theo khổ đường và cấp đường',
    ],
    correct: 3
  },
  {
    question: 'Tốc độ thiết kế của tuyến đường sắt là trị số tốc độ:',
    options: [
      'a. Lớn nhất của đầu máy khai thác trên tuyến đường',
      'b. Áp dụng trong tính toán, thiết kế, xây lắp các cấu trúc thành phần của tuyến đường sắt',
      'c. Mà phương tiện giao thông đường sắt không được phép chạy quá',
      'd. Cả đáp án b và đáp án c',
    ],
    correct: 3
  },
  {
    question: 'Bề rộng mặt nền đường sắt được nới rộng trong trường hợp nào?',
    options: [
      'a. Trong phạm vi đường cong',
      'b. Phạm vi trên cầu, trong hầm',
      'c. Trong ga',
      'd. Tất cả các đáp án trên',
    ],
    correct: 0
  },
  {
    question: 'Tiêu chuẩn kỹ thuật của các cấp đường sắt trên đường sắt lồng khổ 1435 mm với khổ 1000 mm là tiêu chuẩn nào?',
    options: [
      'a. Tiêu chuẩn riêng dành cho đường sắt lồng',
      'b. Tiêu chuẩn kỹ thuật của cấp tương ứng của đường sắt khổ 1000 mm',
      'c. Tiêu chuẩn kỹ thuật của cấp tương ứng của đường sắt khổ 1435 mm',
      'd. Tiêu chuẩn kỹ thuật của đường có số lượng tàu khai thác nhiều hơn',
    ],
    correct: 2
  },
  {
    question: 'Trường hợp nào cần phải đặt ray hộ bánh?',
    options: [
      'a. Khi cầu có mặt cầu trần dài trên 5,0 m; mặt cầu có ba lát dài trên 10 m',
      'b. Cầu trên đường cong có bán kính dưới 500 m',
      'c. Khi chiều cao nền đắp lớn hơn 5 m',
      'd. Cả đáp án a và đáp án b',
    ],
    correct: 3
  },
  {
    question: 'Trên mặt cầu dùng chung với đường bộ có cần thiết phải đặt ray hộ bánh hay không? Nếu có thì khoảng cách giữa má ray hộ bánh và má ray chính (δ) là bao nhiêu?',
    options: [
      'a. Không cần thiết',
      'b. Cần thiết khi đường cong có bán kính dưới 500 m và δ = 60 - 70 mm',
      'c. Cần thiết phải đặt và δ = 50 mm',
      'd. Cần thiết phải đặt và δ = 60 - 70 mm',
    ],
    correct: 3
  },
  {
    question: 'Trường hợp nào cần phải kiểm toán để thiết kế đường lánh nạn đảm bảo an toàn chạy tàu?',
    options: [
      'a. Khi tàu xuống dốc lớn và dài',
      'b. Ở trước ga có tổ chức tàu chạy suốt',
      'c. Trên đường cong có bán kính nhỏ hơn 300 m',
      'd. Khi tàu chạy trên đoạn dốc có chênh cao từ đỉnh dốc tới chân dốc lớn hơn 10 m',
    ],
    correct: 0
  },
  {
    question: 'Dọc đường sắt phải đặt các loại biển, mốc nào sau đây?',
    options: [
      'a. Cọc km, cọc 100 m, cọc đường cong (NĐ,TĐ,NC,TC), cọc cao độ, cọc phương hướng',
      'b. Biển đổi dốc, biển cầu, biển hầm, mốc giới hạn quản lý, biển giới hạn ga',
      'c. Biển tốc độ kỹ thuật, biển giảm tốc độ, biển hãm, biển kéo còi, mốc tránh va chạm',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Mốc tránh va chạm phải đặt giữa hai đường gần nhau về phía ghi, tại chỗ khoảng cách giữa tim hai đường là bao nhiêu?',
    options: [
      'a. 3,50 m đối với cả đường 1000 mm, đường 1435 mm và đường lồng',
      'b. 4,00 m đối với cả đường 1000 mm, đường 1435 mm và đường lồng',
      'c. 3,50 m đối với đường 1000 mm; 4,00 m đối với đường 1435 mm và đường lồng',
      'd. 3,30 m đối với đường 1000 mm; 3,60 m đối với đường 1435 mm và đường lồng',
    ],
    correct: 2
  },
  {
    question: 'Chiều cao ke khách (từ mặt ray đến mặt ke) loại cao được quy định là bao nhiêu?',
    options: [
      'a. 1050 mm đối với cả đường khổ 1000 mm và khổ 1435 mm',
      'b. 1100 mm đối với cả đường khổ 1000 mm và khổ 1435 mm',
      'c. 1100 mm cho khổ đường 1000 mm và 1050 mm cho khổ đường 1435 mm',
      'd. 1050 mm cho khổ đường 1000 mm và 1100 mm cho khổ đường 1435 mm',
    ],
    correct: 3
  },
  {
    question: 'Điểm phân giới của đường sắt bao gồm những loại nào sau đây?',
    options: [
      'a. Trạm hành khách, trạm hàng hóa',
      'b. Ga, trạm đóng đường,',
      'c. Cột tín hiệu đèn màu thông qua của khu gian đóng đường tự động',
      'd. Cả đáp án b và đáp án c',
    ],
    correct: 3
  },
  {
    question: 'Đường đón gửi tàu và đường dồn thuộc loại nào trong các loại nào sau đây?',
    options: [
      'a. Đường chính',
      'b. Đường ga',
      'c. Đường đặc biệt',
      'd. Cả đáp án b và đáp án c',
    ],
    correct: 1
  },
  {
    question: 'Trong điều kiện thông thường đối với tuyến đường sắt đô thị, trên đường cong có bố trí hoãn hòa thì yêu cầu chiều dài đường cong tròn còn lại tối thiểu có bắt buộc hay không?',
    options: [
      'a. Bắt buộc',
      'b. Không bắt buộc',
      'c. Tùy theo bán kính đường cong',
      'd. Tùy theo góc chuyển hướng của đường cong',
    ],
    correct: 0
  },
  {
    question: 'Trong điều kiện thông thường trên tuyến đường sắt đô thị, có cần thiết phải bố trí đoạn thẳng đệm giữa các đường cong liên tiếp hay không?',
    options: [
      'a. Không cần thiết',
      'b. Cần thiết',
      'c. Cần thiết khi 2 đường cong cùng chiều và không cần thiết khi 2 đường cong trái chiều',
      'd. Tùy theo sự chênh lệch bán kính của 2 đường cong',
    ],
    correct: 1
  },
  {
    question: 'Yêu cầu về chiều dài ke ga thiết kế trên tuyến đường sắt đô thị?',
    options: [
      'a. Phải lớn hơn chiều dài của đoàn tàu lớn nhất chạy trên tuyến đó',
      'b. Phải lớn hơn hoặc bằng chiều dài của đoàn tàu ngắn nhất cộng với 10m',
      'c. Căn cứ theo số lượng hành khách lớn nhất vào giờ cao điểm',
      'd. Phụ thuộc vào mật độ chạy tàu trên tuyến',
    ],
    correct: 0
  },
  {
    question: 'Kết cấu kiến trúc tầng trên đường sắt đô thị bao gồm những loại nào?',
    options: [
      'a. Kiến trúc tầng trên có đá ba lát',
      'b. Kiến trúc tầng trên có ray liên kết trực tiếp với tà vẹt đặt trên nền bê tông',
      'c. Kiến trúc tầng trên dùng tấm bê tông (thay cho lớp đá ba lát)',
      'd. Cả ba đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Đối với tuyến đường sắt khổ lồng 1435 mm và 1000 mm thì siêu cao trên đường cong được đặt theo khổ đường nào?',
    options: [
      'a. 1000 mm',
      'b. 1435 mm',
      'c. Khổ đường nào thì đặt siêu cao tương ứng của khổ đó',
      'd. Đặt theo siêu cao của khổ nào có nhiều đoàn tàu khai thác hơn',
    ],
    correct: 1
  },
  {
    question: 'Mục đích của việc đặt ray ngắn trên đường cong?',
    options: [
      'a. Để tạo độ cong cho đường ray dễ dàng',
      'b. Để đảm bảo mối nối được đối xứng',
      'c. Để có thể cơ giới hóa trong thi công lắp đặt ray trên đường cong',
      'd. Cả ba phương án trên',
    ],
    correct: 1
  },
  {
    question: 'Chiều cao khổ giới hạn tiếp giáp kiến trúc quy định đối với đường sắt đã vào cấp kỹ thuật và điện khí hóa tương ứng là bao nhiêu đối với đường khổ 1000 mm và đường khổ 1435 mm?',
    options: [
      'a. 5,0 m và 6,0 m',
      'b. 5,3 m và 6,0 m',
      'c. 5,3 m và 6,55 m',
      'd. 5,5 m và 6,55 m',
    ],
    correct: 2
  },
  {
    question: 'Đối với những tuyến đường sắt điện khí hóa xây dựng mới chỉ sử dụng đầu máy điện thì độ dốc dọc tối đa áp dụng cho các cấp đường tương ứng của khổ đường 1435 mm: cao tốc, cận cao tốc, cấp 1, cấp 2, cấp 3 là:',
    options: [
      'a. 30 - 25 - 12 - 18 - 25 (‰)',
      'b. 30 - 30 - 12 - 18 - 25 (‰)',
      'c. 30 - 30 - 18 - 25 - 30 (‰)',
      'd. 30 - 30 - 30 - 30 - 30 (‰)',
    ],
    correct: 3
  },
  {
    question: 'Đối với những tuyến đường sắt điện khí hóa xây dựng mới chỉ sử dụng đầu máy điện thì độ dốc dọc tối đa áp dụng cho các cấp đường tương ứng của khổ đường 1000 mm: cấp 1, cấp 2, cấp 3 là:',
    options: [
      'a. 30 - 30 - 30 (‰)',
      'b. 25 - 25 - 25 (‰)',
      'c. 12 - 25 - 30 (‰)',
      'd. 18 - 25 - 30 (‰)',
    ],
    correct: 0
  },
  {
    question: 'Các cấp kỹ thuật đường sắt quốc gia được phân theo nhóm:',
    options: [
      'a. Đường sắt quốc gia, đường sắt chuyên dùng',
      'b. Đường sắt cao tốc, đường sắt thường và đường sắt đô thị',
      'c. Đường sắt khổ 1000 mm, đường sắt khổ 1435 mm và đường sắt lồng',
      'd. Cả ba đáp án trên',
    ],
    correct: 2
  },
  {
    question: 'Đường sắt khổ 1000 mm và đường sắt khổ 1435 mm được phân thành mấy cấp kỹ thuật?',
    options: [
      'a. Khổ 1000 mm không phân cấp và khổ 1435 mm là 2 cấp',
      'b. Khổ 1000 mm là 2 cấp và khổ 1435 mm là 3 cấp',
      'c. Khổ 1000 mm là 3 cấp và khổ 1435 mm là 3 cấp',
      'd. Khổ 1000 mm là 3 cấp và khổ 1435 mm là 5 cấp',
    ],
    correct: 3
  },
  {
    question: 'Với năng lực chuyên chở là 25000 người/giờ/hướng thì tuyến đường sắt đô thị thuộc cấp kỹ thuật nào sau đây?',
    options: [
      'a. Đường sắt đô thị chuyên chở khối lượng lớn',
      'b. Đường sắt đô thị chuyên chở khối lượng trung bình',
      'c. Các loại đường sắt đô thị khác',
      'd. Không thuộc cấp nào trong ba cấp kỹ thuật trên',
    ],
    correct: 1
  },
  {
    question: 'Sự phân chia thành các cấp kỹ thuật đường sắt là dựa trên yếu tố nào?',
    options: [
      'a. Năng lực vận chuyển của tuyến đường',
      'b. Vận tốc thiết kế của tuyến đường',
      'c. Cả đáp án a và đáp án b',
      'd. Đáp án a hoặc đáp án b',
    ],
    correct: 2
  },
  {
    question: 'Theo phân cấp kỹ thuật đường sắt Việt Nam thì đường sắt cao tốc và cận cao tốc:',
    options: [
      'a. Chỉ dành riêng cho vận tải hành khách',
      'b. Chỉ dành cho vận tải hàng hóa',
      'c. Dành cho vận tải hành khách là chủ yếu',
      'd. Dành cho vận tải cả hàng hóa và hành khách',
    ],
    correct: 0
  },
  {
    question: 'Trường hợp nào đường sắt được phép thiết kế giao cắt cùng mức với các đường bộ?',
    options: [
      'a. Đường sắt cấp 1, cấp 2, cấp 3 khổ 1000 mm',
      'b. Đường sắt cấp 2, cấp 3 khổ 1000 mm và cấp 3 khổ 1435 mm',
      'c. Đường sắt cấp 1, cấp 2, cấp 3 khổ 1000mm và khổ 1435 mm',
      'd. Không trường hợp nào được phép thiết kế giao cắt cùng mức với đường bộ',
    ],
    correct: 2
  },
  {
    question: 'Tốc độ thiết kế tương ứng của đường sắt cấp 1, cấp 2, cấp 3 khổ 1000 mm không được vượt quá trị số nào sau đây?',
    options: [
      'a. 150, 120, 70 km/h',
      'b. 120, 100, 60 km/h',
      'c. 120,100, 60 km/h',
      'd. 110, 80, 50 km/',
    ],
    correct: 1
  },
  {
    question: 'Tốc độ thiết kế tương ứng của đường sắt cấp 1, cấp 2, cấp 3 khổ 1435 mm không được vượt quá trị số nào sau đây?',
    options: [
      'a. 200, 150, 100 km/h',
      'b. 150, 120, 70 km/h',
      'c. 150, 100, 70 km/h',
      'd. 130, 100, 70 km/h',
    ],
    correct: 1
  },
  {
    question: 'Tốc độ thiết kế của đường sắt cao tốc và cận cao tốc tương ứng không được vượt quá giá trị nào sau đây?',
    options: [
      'a. 400 và 300 km/h',
      'b. 350 và 250 km/h',
      'c. 350 và 200 km/h',
      'd. 300 và 200 km/h',
    ],
    correct: 2
  },
  {
    question: 'Trong trường hợp thông thường, độ dốc dọc tối đa của đường chính tuyến tương ứng với các cấp đường: cao tốc, cận cao tốc, cấp 1, cấp 2, cấp 3 đường sắt khổ 1435 mm là bao nhiêu?',
    options: [
      'a. 30 - 25 - 12 - 18 - 25 (‰)',
      'b. 25 - 30 - 12 - 25 - 30 (‰)',
      'c. 25 - 25 - 12 - 18 - 25 (‰)',
      'd. 30 - 30 - 18 - 25 - 30 (‰)',
    ],
    correct: 2
  },
  {
    question: 'Trong trường hợp thông thường, độ dốc dọc tối đa của đường chính tuyến tương ứng với các cấp đường: cấp 1, cấp 2, cấp 3 của đường sắt khổ 1000 mm là bao nhiêu?',
    options: [
      'a. 12 - 15 - 18 (‰)',
      'b. 12 - 18 - 25 (‰)',
      'c. 12 - 25 - 30 (‰)',
      'd. 18 - 25 - 30 (‰)',
    ],
    correct: 1
  },
  {
    question: 'Trong trường hợp thông thường, bán kính đường cong nằm tối thiểu của đường chính tuyến tương ứng với các cấp đường: cao tốc, cận cao tốc, cấp 1, cấp 2, cấp 3 của đường sắt khổ 1435 mm là bao nhiêu?',
    options: [
      'a. 7000 - 2800 - 2000 - 1000 - 500 (m)',
      'b. 5000 - 2500 - 1500 - 1000 - 500 (m)',
      'c. 5000 - 2000 - 1200 - 800 - 400 (m)',
      'd. 1000 - 600 - 400 - 300 - 250 (m)',
    ],
    correct: 2
  },
  {
    question: 'Trong trường hợp thông thường, bán kính đường cong nằm tối thiểu của đường chính tuyến tương ứng với các cấp đường: cấp 1, cấp 2, cấp 3 của đường sắt khổ 1000 mm là bao nhiêu?',
    options: [
      'a. 1200 -900 - 600 (m)',
      'b. 1000 - 800 - 500 (m)',
      'c. 800 - 600 - 400 (m)',
      'd. 800 - 600 - 300 (m)',
    ],
    correct: 3
  },
  {
    question: 'Trường hợp nào độ dốc dọc trong ga được phép thiết kế với độ dốc lớn hơn 2,5‰?',
    options: [
      'a. Ở vùng đồng bằng',
      'b. Ở vùng núi',
      'c. Ở vùng đặc biệt khó khăn, ga không có dồn dịch',
      'd. Ở vùng đặc biệt khó khăn, ga không có dồn dịch và đảm bảo điều kiện khởi động',
    ],
    correct: 3
  },
  {
    question: 'Đối với đường sắt khổ đường 1000 mm thì bán kính đường cong nằm tối thiểu trong ga tương ứng là bao nhiêu khi thiết kế ga ở vùng đồng bằng và miền núi?',
    options: [
      'a. Ở vùng đồng bằng là 300 m, ở vùng núi là 250 m',
      'b. Ở vùng đồng bằng là 400 m, ở vùng núi là 300 m',
      'c. Ở vùng đồng bằng là 500 m, ở vùng núi là 450 m',
      'd. Ở vùng đồng bằng là 600 m, ở vùng núi là 500 m',
    ],
    correct: 1
  },
  {
    question: 'Đối với đường sắt khổ đường 1435 mm thì bán kính đường cong nằm tối thiểu trong ga tương ứng là bao nhiêu khi thiết kế ga ở vùng đồng bằng và miền núi?',
    options: [
      'a. Ở vùng đồng bằng là 400 m, ở vùng núi là 300 m',
      'b. Ở vùng đồng bằng là 500 m, ở vùng núi là 400 m',
      'c. Ở vùng đồng bằng là 600 m, ở vùng núi là 500 m',
      'd. Ở vùng đồng bằng là 800 m, ở vùng núi là 600 m',
    ],
    correct: 2
  },
  {
    question: 'Trên đường thẳng trong khu gian đối với đường sắt khổ 1435 mm, bề rộng từ tim đến vai đường tương ứng với các cấp đường không được nhỏ hơn giá trị nào?',
    options: [
      'a. 5,0 - 4,5 - 4,0 - 3,5 - 3,1 (m)',
      'b. 4,5 - 4,0 - 4,0 - 3,5 - 3,1 (m)',
      'c. 4,5 - 4,0 - 3,5 - 3,5 - 3,1 (m)',
      'd. 4,5 - 4,0 - 3,5 - 3,1 - 2,5 (m)',
    ],
    correct: 1
  },
  {
    question: 'Trên đường thẳng trong khu gian đối với đường sắt khổ 1000 mm, bề rộng từ tim đến vai đường tương ứng với các cấp đường không được nhỏ hơn giá trị nào?',
    options: [
      'a. 4,0 - 3,5 - 3,1 (m)',
      'b. 3,5 - 3,1 - 2,9 (m)',
      'c. 3,1 - 2,9 - 2,7 (m)',
      'd. 2,9 - 2,7 - 2,5 (m)',
    ],
    correct: 3
  },
  {
    question: 'Trên đường thẳng trong khu gian đối với đường sắt khổ 1435 mm, khoảng cách tim đường tương ứng với các cấp đường không được nhỏ hơn giá trị nào?',
    options: [
      'a. 5,0 - 4,3 - 4,0 - 4,0 - 4,0 (m)',
      'b. 5,0 - 4,5 - 4,0 - 4,0 - 3,8 (m)',
      'c. 5,0 - 4,5 - 4,0 - 3,8 - 3,5 (m)',
      'd. 4,5 - 4,0 - 3,8 - 3,5 - 3,1 (m)',
    ],
    correct: 0
  },
  {
    question: 'Trên đường thẳng trong khu gian đối với đường sắt khổ 1000 mm, khoảng cách tim đường tương ứng với các cấp đường không được nhỏ hơn giá trị nào?',
    options: [
      'a. 5,0 - 4,0 - 3,5 (m)',
      'b. 4,0 - 4,0 - 4,0 (m)',
      'c. 4,0 - 4,0 - 3,8 (m)',
      'd. 4,0 - 3,8 - 3,5 (m)',
    ],
    correct: 2
  },
  {
    question: 'Khi chiều dài cống thoát nước qua nền đường sắt từ 10 - 20 m thì đường kính tối thiểu của cống phải là bao nhiêu?',
    options: [
      'a. 0,50 m',
      'b. 0,75 m',
      'c. 1,00 m',
      'd. Tùy theo vị trí và điều kiện cụ thể để quyết định đường kính nhỏ nhất',
    ],
    correct: 2
  },
  {
    question: 'Khổ đường sắt được định nghĩa là:',
    options: [
      'a. Khoảng cách ngắn nhất giữa 2 tim ray trên đường thẳng',
      'b. Khoảng cách ngắn nhất giữa 2 má trong của ray',
      'c. Khoảng cách ngắn nhất giữa 2 má ngoài của ray',
      'd. Khoảng cách ngắn nhất giữa 2 má trong của ray được đo tại mặt đo tính toán (nằm dưới mặt phẳng đi qua hai đỉnh ray 16 mm)',
    ],
    correct: 3
  },
  {
    question: 'Đối với đường sắt làm mới, cải tạo và sửa chữa lớn, cho phép sai lệch khoảng cách má trong giữa 2 ray là bao nhiêu?',
    options: [
      'a. +6 mm và -2 mm với khổ đường 1000 mm và 1435 mm',
      'b. +4 mm và -2 mm với khổ đường 1000 mm và 1435 mm',
      'c. +4 mm và -2 mm với khổ đường 1000 mm và +6 mm và -2 mm với khổ đường 1435 mm',
      'd. +6mm và -2 mm với khổ đường 1000 mm và +4 mm và -2 mm với khổ đường 1435 mm',
    ],
    correct: 2
  },
  {
    question: 'Siêu cao ray lưng trên đường cong lớn nhất đối với đường sắt là:',
    options: [
      'a. 95 mm đối với cả 2 khổ đường 1000 mm và 1435 mm',
      'b. 125 mm đối với cả 2 khổ đường 1000 mm và 1435 mm',
      'c. 125 mm đối với khổ đường 1000 mm và 95 mm đối với khổ đường 1435 mm',
      'd. 95 mm đối với khổ đường 1000 mm và 125 mm đối với khổ đường 1435 mm',
    ],
    correct: 3
  },
  {
    question: 'Đối với đường sắt làm mới hoặc cải tạo, sai lệch cho phép về độ cao mặt ray so với tiêu chuẩn quy định là bao nhiêu đối với khổ đường 1000 mm và 1435 mm?',
    options: [
      'a. 4 mm đối với khổ đường 1000 mm và 3 mm đối với khổ đường 1435 mm',
      'b. 3 mm đối với khổ đường 1000 mm và 4 mm đối với khổ đường 1435 mm',
      'c. 4 mm đối với cả hai khổ đường 1000 mm và 1435 mm',
      'd. 3 mm đối với cả hai khổ đường 1000 mm và 1435 mm',
    ],
    correct: 1
  },
  {
    question: 'Trong điều kiện thông thường, độ dốc tối đa của đường chính tuyến đường sắt đô thị loại MRT là giá trị nào?',
    options: [
      'a. 25‰',
      'b. 30‰',
      'c. 35‰',
      'd. 45‰',
    ],
    correct: 2
  },
  {
    question: 'Trong điều kiện địa hình khó khăn, độ dốc tối đa của đường chính tuyến đường sắt đô thị loại MRT không được vượt quá giá trị nào?',
    options: [
      'a. 38‰',
      'b. 40‰',
      'c. 45‰',
      'd. 50‰',
    ],
    correct: 2
  },
  {
    question: 'Chiều rộng mặt nền đường của chính tuyến của đường sắt đô thị trong khu đoạn đường đắp, đường đào tiêu chuẩn là bao nhiêu?',
    options: [
      'a. 2,8 m',
      'b. 3,1 m',
      'c. 3,5 m',
      'd. 4,0 m',
    ],
    correct: 1
  },
  {
    question: 'Chiều rộng mặt nền đường tối thiểu của chính tuyến của đường sắt đô thị trong khu đoạn cầu cao là bao nhiêu?',
    options: [
      'a. 2,75 m',
      'b. 2,8 m',
      'c. 3,1 m',
      'd. 3,5 m',
    ],
    correct: 0
  },
  {
    question: 'Trong trường hợp địa hình khó khăn, bán kính đường cong nằm trên đường chính tuyến đường sắt đô thị (loại MRT) không nhỏ hơn:',
    options: [
      'a. 200 m',
      'b. 160 m',
      'c. 100 m',
      'd. Bán kính cấu tạo của đầu máy toa xe thông qua đường cong',
    ],
    correct: 1
  },
  {
    question: 'Ở khu vực rừng núi, đoạn trước và sau ga trong trường hợp khó khăn thì độ dốc dọc tối đa của đường chính tuyến tương ứng với các cấp đường: cao tốc, cận cao tốc, cấp 1, cấp 2, cấp 3 đường sắt khổ 1435 mm là bao nhiêu?',
    options: [
      'a. 30 - 25 - 12 - 18 - 25 (‰)',
      'b. 25 - 30 - 12 - 25 - 30 (‰)',
      'c. 25 - 25 - 12 - 18 - 25 (‰)',
      'd. 30 - 30 - 18 - 25 - 30 (‰)',
    ],
    correct: 3
  },
  {
    question: 'Ở khu vực rừng núi, đoạn trước và sau ga trong trường hợp khó khăn thì độ dốc dọc tối đa của đường chính tuyến tương ứng với các cấp đường: cấp 1, cấp 2, cấp 3 của đường sắt khổ 1000 mm là bao nhiêu?',
    options: [
      'a. 18 - 25 - 30 (‰)',
      'b. 12 - 25 - 30 (‰)',
      'c. 12 - 18 - 25 (‰)',
      'd. 12 - 15 - 18 (‰)',
    ],
    correct: 0
  },
  {
    question: 'Ở khu vực rừng núi, đoạn trước và sau ga trong trường hợp khó khăn thì bán kính đường cong nằm tối thiểu của đường chính tuyến tương ứng với các cấp đường: cận cao tốc, cấp 1, cấp 2, cấp 3 của đường sắt khổ 1435 mm là bao nhiêu?',
    options: [
      'a. 2800 - 2000 - 1000 - 500 (m)',
      'b. 2500 - 1500 - 1000 - 500 (m)',
      'c. 1000 - 800 - 600 - 400 (m)',
      'd. 600 - 400 - 300 - 250 (m)',
    ],
    correct: 3
  },
  {
    question: 'Ở khu vực rừng núi, đoạn trước và sau ga trong trường hợp khó khăn thì bán kính đường cong nằm tối thiểu của đường chính tuyến tương ứng với các cấp đường: cấp 1, cấp 2, cấp 3 của đường sắt khổ 1000 mm là bao nhiêu?',
    options: [
      'a. 600 - 400 - 300 (m)',
      'b. 500 - 300 - 250 (m)',
      'c. 400 - 250 - 150 (m)',
      'd. 300 - 200 - 150 (m)',
    ],
    correct: 2
  },
];
