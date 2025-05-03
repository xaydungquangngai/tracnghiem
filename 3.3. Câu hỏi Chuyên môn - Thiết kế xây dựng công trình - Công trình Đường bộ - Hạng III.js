const questions = [
  {
    question: 'Khi thiết kế trắc dọc đường ô tô cao tốc TCVN 5729: 2012 quy định chiều dài tối thiểu tùy thuộc vào cấp đường và phải đủ để bố trí chiều dài đường cong đứng. Với đường cấp 100 (Vtk = 100 km/h) chiều dài tối thiểu là bao nhiêu ?',
    options: [
      'a. Chiều dài tối thiểu 300 mét',
      'b. Chiều dài tối thiểu 250 mét',
      'c. Chiều dài tối thiểu 200 mét',
      'd. Chiều dài tối thiểu 150 mét',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế trắc dọc đường ô tô cao tốc TCVN 5729: 2012 quy định chiều dài tối đa đoạn dốc tùy thuộc vào cấp đường và độ dốc dọc. Với đường cấp 100 (Vtk = 100 km/h) và độ dốc dọc 4% chiều dài tối đa là bao nhiêu ?',
    options: [
      'a. Chiều dài tối đa 600 mét',
      'b. Chiều dài tối đa 800 mét',
      'c. Chiều dài tối đa 900 mét',
      'd. Chiều dài tối đa 1000 mét',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế trắc dọc đường ô tô cao tốc TCVN 5729: 2012 quy định bán kính đường cong lồi tối thiểu với đường cấp 100 (Vtk = 100 km/h) là bao nhiêu ?',
    options: [
      'a. Chiều dài tối đa 4000 mét',
      'b. Chiều dài tối đa 5000 mét',
      'c. Chiều dài tối đa 6000 mét',
      'd. Chiều dài tối đa 8000 mét',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế một tuyến đường ô tô, tiêu chuẩn quy định chiều dài tối thiểu thống nhất theo một cấp để đảm bảo an toàn. Đường từ cấp III trở lên chiều dài tối thiểu quy định là bao nhiêu trong các phương án sau?',
    options: [
      'a. Chiều dài tối thiểu 5 km.',
      'b. Chiều dài tối thiểu 10 km.',
      'c. Chiều dài tối thiểu 15 km.',
      'd. Chiều dài tối thiểu 20 km.',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế một tuyến đường ô tô, tiêu chuẩn quy định chiều dài tối thiểu thống nhất theo một cấp để đảm bảo an toàn. Đường từ cấp IV trở xuống chiều dài tối thiểu quy định là bao nhiêu trong các phương án sau?',
    options: [
      'a. Chiều dài tối thiểu 5 km',
      'b. Chiều dài tối thiểu 10 km.',
      'c. Chiều dài tối thiểu 10 km.',
      'd. Chiều dài tối thiểu 10 km.',
    ],
    correct: 0
  },
  {
    question: 'Biển báo hiệu đường bộ theo QCVN41-2019 được phân thành mấy nhóm? Các phương án sau phương án nào đúng?',
    options: [
      'a. Chiều dài tối thiểu 5 km',
      'b. Chiều dài tối thiểu 10 km.',
      'c. Chiều dài tối thiểu 15 km.',
      'd. Chiều dài tối thiểu 20 km.',
    ],
    correct: 1
  },
  {
    question: 'Quy định độ bằng phẳng theo phương dọc tim đường của đoạn chuyển tiếp giữa đường và cầu TCVN5927:2012 đối với đường cao tốc có vận tốc thiết kế 100 và 120 km/h là bao nhiêu trong các giá trị sau ?',
    options: [
      'a. Độ bằng phẳng S ≤ 1/175',
      'b. Độ bằng phẳng S ≤ 1/200',
      'c. Độ bằng phẳng S ≤ 1/250',
      'd. Độ bằng phẳng S ≤ 1/350',
    ],
    correct: 2
  },
  {
    question: 'Quy định độ bằng phẳng theo phương dọc tim đường của đoạn chuyển tiếp giữa đường và cầu TCVN4054:2005 đối với đường ô tô cấp I-IV có vận tốc thiết kế 100 và 120 km/h là bao nhiêu trong các giá trị sau ?',
    options: [
      'a. Độ bằng phẳng S ≤ 1/150',
      'b. Độ bằng phẳng S ≤ 1/175',
      'c. Độ bằng phẳng S ≤ 1/200',
      'd. Độ bằng phẳng S ≤ 1/250',
    ],
    correct: 2
  },
  {
    question: 'Chiều cao của khổ giới hạn trong hầm đường sắt khổ đường tiêu chuẩn 1435mm đầu máy Diezel là bao nhiêu?',
    options: [
      'a. 4750mm',
      'b. 4800mm',
      'c. 5300mm',
      'd. 6550mm',
    ],
    correct: 3
  },
  {
    question: 'Theo TCVN11823-2017 lan can được chia thành mấy cấp thử nghiệm ?',
    options: [
      'a. ba cấp',
      'b. bốn cấp',
      'c. năm cấp',
      'd. sáu cấp',
    ],
    correct: 2
  },
  {
    question: 'Phân cấp kỹ thuật đường thủy nội địa chi thành mấy cấp?',
    options: [
      'a. ba cấp (cấp I, II, III)',
      'b. bốn cấp (cấp I, II, III, IV)',
      'c. năm cấp (cấp I, II, III, IV, V)',
      'd. sáu cấp (cấp I, II, III, IV, V, VI)',
    ],
    correct: 3
  },
  {
    question: 'Chiều rộng mặt nền đường của chính tuyến trong khu đoạn đường đắp, đường đào tiêu chuẩn trong trường hợp bình thường tiêu chuẩn đường sắt đô thị bằng bao nhiêu?',
    options: [
      'a. 3.0m',
      'b. 3.1m',
      'c. 3.2m',
      'd. 3.3m',
    ],
    correct: 1
  },
  {
    question: 'Trên đường thẳng và đường cong có bán kính ≥600m đối với đường sắt cấp I khổ 1000mm thì mật độ tà vẹt đặt bao nhiêu thanh trên 1km?',
    options: [
      'a. 1500 Thanh/km',
      'b. 1600 Thanh/km',
      'c. 1700 Thanh/km',
      'd. 1800 Thanh/km',
    ],
    correct: 1
  },
  {
    question: 'Bán kính đường cong nằm tối thiểu của đường sắt cấp III - khổ 1435mm bằng bao nhiêu?',
    options: [
      'a. R≥ 1200m',
      'b. R≥ 1000m',
      'c. R≥ 800m',
      'd. R≥ 750m',
    ],
    correct: 0
  },
  {
    question: 'Tốc độ thiết kế trên đường cao tốc được phân làm mấy cấp?',
    options: [
      'a. 04 cấp: tốc độ 120 km/h; 100 km/h; 80 km/h; 60 km/h;',
      'b. 03 cấp: tốc độ 120 km/h; 100 km/h; 80 km/h;',
      'c. 02 cấp: tốc độ 120 km/h; 100 km/h;',
      'd. Không phân cấp - Tùy điều kiện cụ thể;',
    ],
    correct: 1
  },
  {
    question: 'Hệ thống đường giao thông nông thôn được được phân thành mấy cấp kỹ thuật?',
    options: [
      'a. 5 cấp kỹ thuật A, B, C, D và E',
      'b. 4 cấp kỹ thuật A, B, C và D',
      'c. 3 cấp kỹ thuật A, B, C',
      'd. 2 cấp kỹ thuật A, B',
    ],
    correct: 1
  },
  {
    question: 'Chiều rộng mặt đường tối thiểu của đường nhánh theo TCVN 5729: 2012 trên đoạn thẳng tối thiểu bằng.',
    options: [
      'a. 3,0 m',
      'b. 3,5 m',
      'c. 3,75m',
      'd. 4,0m',
    ],
    correct: 3
  },
  {
    question: 'Các đường nhánh của nút giao thiết kế theo TCVN 5729: 2012, Bán kính đường cong tròn lớn hơn bao nhiêu thì không phải mở rộng.',
    options: [
      'a. 100m',
      'b. 90m',
      'c. 80m',
      'd. 72m',
    ],
    correct: 3
  },
  {
    question: 'Khi thiết kế đường ô tô cao tốc theo QCVN 115:2024/BGTVT, chiều rộng dải phân cách có bề rộng từ bao nhiêu m trở lên thì không cần có biện pháp chống chói?',
    options: [
      'a. 10m',
      'b. 12m',
      'c. 15m',
      'd. 20m',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế đường ô tô cao tốc theo QCVN 115:2024/BGTVT, tốc độ tối đa cho phép của 02 đoạn tuyến liên tiếp không được chênh nhau quá bao nhiêu km/h?',
    options: [
      'a. 20 km/h',
      'b. 15 km/h',
      'c. 10 km/h',
      'd. 5 km/h',
    ],
    correct: 0
  },
  {
    question: 'Khi thiết kế đường ô tô cao tốc theo QCVN 115:2024/BGTVT, làn dừng xe khẩn cấp với đường cấp 120, cấp 100 có chiều rộng tối thiểu là bao nhiêu ?',
    options: [
      'a. 1,0m',
      'b. 2,0m',
      'c. 2,5m',
      'd. 3,0m',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định tại tiêu chuẩn TCVN8859:2023, căn cứ vào nguồn gốc vật liệu dùng để sản xuất Cấp phối đá dăm và chất lượng cấp phối đá dăm, Cấp phối đá dăm được chia thành bao nhiêu loại:',
    options: [
      'a. 02 loại',
      'b. 03 loại',
      'c. 03 loại',
      'd. 04 loại',
    ],
    correct: 0
  },
  {
    question: 'Theo quy định tại tiêu chuẩn TCVN8859:2023, căn cứ vào cỡ hạt lớn nhất danh định Dmax, Cấp phối đá dăm được chia thành bao nhiêu loại:',
    options: [
      'a. 02 loại',
      'b. 03 loại',
      'c. 04 loại',
      'd. 05 loại',
    ],
    correct: 1
  },
  {
    question: 'Theo TCVN 4054:2005 khi nào cần bố trí đường cong chuyển tiếp nối giữa đường thẳng và đường cong?',
    options: [
      'a. Luôn bố trí',
      'b. Khi tốc độ thiết kế > 60km/h',
      'c. Khi tốc độ thiết kế > 50km/h',
      'd. Khi tốc độ thiết kế > 40km/h',
    ],
    correct: 1
  },
  {
    question: 'Theo TCVN 5729:2012, quy định tần suất tính toán thủy văn đối với rãnh thoát nước và cầu cống là bao nhiêu?',
    options: [
      'a. Tần suất 1%',
      'b. Tần suất 4%',
      'c. Đối với rãnh thoát nước là 4%, cầu cống là 1%',
      'd. Không quy định',
    ],
    correct: 2
  },
  {
    question: 'Theo TCVN 4054:2005, phân biệt cầu lớn, cầu trung, cầu nhỏ (Lc là khẩu độ tĩnh không thoát nước) như thế nào ?',
    options: [
      'a. Cầu lớn Lc ≥ 100m, cầu trung 25 m ≤ Lc < 100 m, cầu nhỏ Lc < 25m.',
      'b. Cầu lớn Lc ≥ 300m, cầu trung 25 m ≤ Lc < 300 m, cầu nhỏ Lc < 25m.',
      'c. Cầu lớn Lc ≥ 500m, cầu trung 25 m ≤ Lc < 500 m, cầu nhỏ Lc < 25m.',
      'd. Cầu lớn Lc ≥ 1000m, cầu trung 25 m ≤ Lc < 1000 m, cầu nhỏ Lc < 25m.',
    ],
    correct: 0
  },
  {
    question: 'Để đảm bảo cường độ và độ ổn định của nền đường cần quan tâm đến vùng hoạt động 80 cm từ đáy áo đường: 30 cm trên phải đảm bảo CBR bằng 8 với đường cấp I, II và bằng 6 với các cấp khác. 50 cm tiếp với CBR bằng 5 với đường cấp I, II và bằng 4 với các cấp khác. Trị số CBR được xác định trong trường hợp nào ?',
    options: [
      'a. CBR xác định trong trường hợp lấy mẫu tự nhiên',
      'b. CBR xác định ngoài hiện trường',
      'c. CBR xác định trong phòng, mẫu đất được đầm nén tiêu chuẩn, để khô.',
      'd. CBR xác định trong phòng, mẫu đất được đầm nén tiêu chuẩn và ngâm mẫu 4 ngày đêm.',
    ],
    correct: 3
  },
  {
    question: 'Trong thiết kế mặt đường bê tông xi măng theo Quyết định 32-30 của Bộ giao thông vận tải thì cần kiểm tra cường độ kéo uốn của tấm bê tông xi măng khi tải trọng bánh xe đặt ở đâu ?',
    options: [
      'a. Tải trọng xe đặt giữa tấm',
      'b. Tải trọng xe đặt ở góc tấm',
      'c. Tải trọng xe đặt ở giữa cạnh dài của tấm',
      'd. Phải kiểm tra cả 3 vị trí trên',
    ],
    correct: 2
  },
  {
    question: 'Kiểm toán kết cấu áo đường mềm đối với mặt đường cấp cao A1 phải kiểm toán theo các thái giới hạn nào ?',
    options: [
      'a. Kiểm toán cường độ chung kết cấu.',
      'b. Kiểm toán cắt trượt nền đất',
      'c. Kiểm toán ứng suất kéo uốn của lớp mặt bê tông nhựa',
      'd. Kiểm toán tất cả trạng thái giới hạn nêu trên',
    ],
    correct: 3
  },
  {
    question: 'Khi thiết kế mặt đường bê tông nhựa, phải kiểm tra cường độ kéo uốn lớp bê tông nhựa, vị trí kiểm tra là đâu trong các phương án sau ?',
    options: [
      'a. Kiểm tra tại mặt trên lớp bê tông nhựa',
      'b. Kiểm tra tại vị trí giữa lớp bê tông nhựa',
      'c. Kiểm tra tại vị trí 2/3 từ mặt bê tông nhựa',
      'd. Kiểm tra tại vị trí đáy lớp bê tông nhựa',
    ],
    correct: 3
  },
  {
    question: 'Nhằm đảm bảo sự chuyển tiếp êm thuận, không gây ra” xóc” mạnh cho xe chạy qua đoạn chuyển tiếp thì độ bằng phẳng theo dọc tim đường S (S là độ dốc dọc giữa hai điểm trên mặt đường theo phương dọc theo tim đường do sự chênh lệch lún của hai điểm đó) giữa đường và cầu đối với đường cao tốc có vận tốc thiết kế 100 và 120 km/h là bao nhiêu trong các giá trị sau ?',
    options: [
      'a. Độ bằng phẳng S ≤ 1/150',
      'b. Độ bằng phẳng S ≤ 1/175',
      'c. Độ bằng phẳng S ≤ 1/200',
      'd. Độ bằng phẳng S ≤ 1/250',
    ],
    correct: 3
  },
  {
    question: 'Nhằm đảm bảo sự chuyển tiếp êm thuận, không gây ra "xóc” mạnh cho xe chạy qua đoạn chuyển tiếp thì độ bằng phẳng theo dọc tim đường S (S là độ dốc dọc giữa hai điểm trên mặt đường theo phương dọc theo tim đường do sự chênh lệch lún của hai điểm đó) giữa đường và cầu đối với đường cấp I- IV có vận tốc thiết kế 80 km/h là bao nhiêu trong các giá trị sau ?',
    options: [
      'a. Độ bằng phẳng S ≤ 1/125',
      'b. Độ bằng phẳng S ≤ 1/150',
      'c. Độ bằng phẳng S ≤ 1/ 175',
      'd. Độ bằng phẳng S ≤ 1/200',
    ],
    correct: 2
  },
  {
    question: 'Khi xác định lưu lượng xe tính toán để xác định Eyc mặt đường phải xét đến hệ số ảnh hưởng của số làn xe. Trong trường hợp đường có 4 làn xe có dải phân cách giữa thì hệ số phân phối trục xe f chọn là bao nhiêu ?',
    options: [
      'a. Hệ số f = 1',
      'b. Hệ số f= 0,55',
      'c. Hệ số f = 0,35',
      'd. Hệ số f = 0,3',
    ],
    correct: 2
  },
  {
    question: 'Khi xác định lưu lượng xe tính toán để xác định Eyc mặt đường phải xét đến hệ số ảnh hưởng của số làn xe. Trong trường hợp đường có 2 hoặc 3 làn xe không có dải phân cách thì hệ số phân phối trục xe f chọn là bao nhiêu ?',
    options: [
      'a. Hệ số f = 1',
      'c. Hệ số f = 0,35',
      'd. Hệ số f = 0,3',
    ],
    correct: 1
  },
  {
    question: 'Tốc độ cho phép lưu hành trên đường là phương án nào trong phương án sau ?',
    options: [
      'a. Là tốc độ thiết kế của đường',
      'b. Là tốc độ quy định theo cấp hạng kỹ thuật của đường',
      'c. Là tốc độ tối thiểu xe chạy trên đường',
      'd. Là tốc độ lưu hành cho phép phụ thuộc vào tình trạng thực tế của đường do cơ quan quản lý đường quy định',
    ],
    correct: 3
  },
  {
    question: 'Khi thiết kế trắc dọc đường ô tô cao tốc TCVN 5729: 2012 quy định chiều dài tối thiểu tùy thuộc vào cấp đường và phải đủ để bố trí chiều dài đường cong đứng. Với đường cấp 100 (Vtk = 100 km/h) chiều dài tối thiểu là bao nhiêu ?',
    options: [
      'a. Chiều dài tối thiểu 300 mét',
      'b. Chiều dài tối thiểu 250 mét',
      'c. Chiều dài tối thiểu 200 mét',
      'd. Chiều dài tối thiểu 150 mét',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế trắc dọc đường ô tô cao tốc TCVN 5729: 2012 quy định chiều dài tối đa đoan dốc tùy thuộc vào cấp đường và độ dốc dọc. Với đường cấp 100 (Vtk = 100 km/h) và độ dốc dọc 4% chiều dài tối đa là bao nhiêu ?',
    options: [
      'a. Chiều dài tối đa 700 mét',
      'b. Chiều dài tối đa 800 mét',
      'c. Chiều dài tối đa 900 mét',
      'd. Chiều dài tối đa 100 mét',
    ],
    correct: 1
  },
  {
    question: 'Độ bằng phẳng của mặt đường có thể dùng thước 3 mét để kiểm tra. Đối với mặt đường cấp cao A1 (bê tông nhựa, bê tông xi măng) thì quy định nào đúng trong các phương án sau:',
    options: [
      'a. 70% số khe hở dưới 3mm và 30% số khe hở phải dưới 5 mm.',
      'b. 20% số khe hở dưới 3mm và 80% số khe hở phải dưới 5 mm.',
      'c. 30% số khe hở dưới 3mm và 70% số khe hở phải dưới 5 mm',
      'd. 40% số khe hở dưới 3mm và 60% số khe hở phải dưới 5 mm',
    ],
    correct: 0
  },
  {
    question: 'Trong tiêu chuẩn thiết kế đường quy định cao độ thiết kế nền đường. Quy định nào trong 4 trường hợp sau đây là đúng và đủ?',
    options: [
      'a. Cao độ thiết kế của nền đường là cao độ ở tim đường.',
      'b. Cao độ thiết kế của nền đường là cao độ ở tim đường. Khi có hai nền đường độc lập sẽ có hai cao độ thiết kế trên hai mặt cắt dọc riêng biệt.',
      'c. Cao độ thiết kế của nền đường là cao độ vai đường',
      'd. Cao độ thiết kế của nền đường là cao độ mép mặt đường',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế rãnh biên qua khu dân cư chọn phương án nào là hợp lý?',
    options: [
      'a. Rãnh đất hoặc rãnh xây hình thang.',
      'b. Rãnh đất hoặc rãnh xây hình tam giác.',
      'c. Rãnh bê tông nửa tròn.',
      'd. Rãnh xây hoặc bê tông xi măng có lát các tấm đan che kín, có hệ thống thu nước mưa.',
    ],
    correct: 3
  },
  {
    question: 'Độ bằng phẳng của mặt đường có thể dùng thước 3 mét để kiểm tra. Đối với mặt đường cấp cao A2 (bê tông nhựa nguội, trên có láng mặt, thấm nhập nhựa, láng nhựa) thì quy định nào đúng trong các phương án sau:',
    options: [
      'a. Tất cả phải dưới 5 mm.',
      'b. 20% số khe hở dưới 3mm và 80% số khe hở phải dưới 5 mm.',
      'd. 40% số khe hở dưới 3mm và 60% số khe hở phải dưới 5 mm',
    ],
    correct: 0
  },
  {
    question: 'Cường độ kết cấu áo đường mềm được đặc trưng bởi giá trị nào trong các phương án sau?',
    options: [
      'a. Mô đun đàn hồi của các lớp mặt đường.',
      'b. Mô đun đàn hồi của các lớp móng đường.',
      'c. Mô đun đàn hồi của lớp nền đất dưới kết cấu áo đường.',
      'd. Mô đun đàn hồi chung của các lớp trong kết cấu áo đường + nền đất',
    ],
    correct: 3
  },
  {
    question: 'Khi thiết kế đường cao tốc ở vùng địa hình núi, đồi cao và vùng địa hình khó khăn người ta quy định chọn vận tốc hợp lý để giảm kinh phí xây dựng. Trong các phương án sau chọn phương án nào là hợp lý.',
    options: [
      'a. Tốc độ thiết kế 100- 120 km/h',
      'b. Tốc độ thiết kế 80- 100 km/h',
      'c. Tốc độ thiết kế 60- 80 km/h',
      'd. Tốc độ thiết kế 50 - 60 km/h',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế đường cao tốc ở vùng đồng bằng. Trong các phương án sau chọn phương án nào là đúng với quy định tiêu chuẩn.',
    options: [
      'b. Tốc độ thiết kế 100- 120 km/h',
      'c. Tốc độ thiết kế 80- 100 km/h',
      'd. Tốc độ thiết kế 60- 80 km/h',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế đường ô tô cao tốc để đảm bảo an toàn chay xe, người ta quy định chiều dài tối đa các đoạn thẳng. Các phương án sau phương án nào đúng?',
    options: [
      'a. Chiều dài tối đa 10 km.',
      'b. Chiều dài tối đa 6 km.',
      'c. Chiều dài tối đa 4 km',
      'd. Chiều dài tối đa 2 km',
    ],
    correct: 2
  },
  {
    question: 'Về mặt cấu tạo nút giao thông cùng mức ngoài đô thị, theo TCVN405 - 2005 chia làm mấy loại?',
    options: [
      'a. 1 loại',
      'b. 2 loại',
      'c. 3 loại',
      'd. 4 loại',
    ],
    correct: 2
  },
  {
    question: 'Trong các đường cong bằng bán kính nhỏ phải bố trí siêu cao, độ dốc siêu cao phụ thuộc vào vận tốc thiết kế và bán kính đường cong. Tiêu chuẩn thiết kế quy định độ dốc tối đa và độ dốc tối thiểu. Các phương án sau phương án nào đúng với quy định?',
    options: [
      'a. Đội dốc siêu cao tối đa 10%, tối thiểu 2%',
      'b. Đội dốc siêu cao tối đa 8%, tối thiểu 2%',
      'c. Đội dốc siêu cao tối đa 6%, tối thiểu 2%',
      'd. Đội dốc siêu cao tối đa 4%, tối thiểu 2%',
    ],
    correct: 1
  },
  {
    question: 'Trên các tuyến đường có bố trí các tuyến xe buýt, để đảm bảo an toàn tiêu chuẩn thiết kế quy định có thể sử dụng loại chỗ dừng đơn giản hoặc chỗ dừng cách ly. Với các phương án sau, phương án nào đúng?',
    options: [
      'a. Trên đường Vtk ≥40 km/h, nhất thiết phải thiết kế chỗ dừng cách ly.',
      'c. Trên đường Vtk ≥80 km/h, nhất thiết phải thiết kế chỗ dừng cách ly',
      'd. Trên đường Vtk ≥100 km/h, nhất thiết phải thiết kế chỗ dừng cách ly',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế một tuyến đường ô tô, tiêu chuẩn quy định chiều dài tối thiểu thống nhất theo một cấp để đảm bảo an toàn. Đường từ cấp III trở lên chiều dài tối thiểu quy định là bao nhiêu trong các phương án sau?',
    options: [
      'a. Chiều dài tối thiểu 5 km.',
      'b. Chiều dài tối thiểu 10 km.',
      'c. Chiều dài tối thiểu 15 km.',
      'd. Chiều dài tối thiểu 20 km',
    ],
    correct: 1
  },
  {
    question: 'Biển báo hiệu đường bộ theo QCVN41-2016 được phân thành mấy nhóm? Các phương án sau phương án nào đúng?',
    options: [
      'a. Có 3 nhóm biển báo hiệu đường bộ.',
      'b. Có 4 nhóm biển báo hiệu đường bộ.',
      'c. Có 5 nhóm biển báo hiệu đường bộ.',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế mặt đường cho đường phố và đường ít quan trọng ở đô thị thì dùng tải trọng trục nào để tính toán trong các phương án sau?',
    options: [
      'a. Tải trọng trục 12.000 daN',
      'b. Tải trọng trục 10.000 daN',
      'c. Tải trọng trục 9.500 daN',
      'd. Tải trọng trục 8.000 daN',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế mặt đường cho đường trục chính đô thị thì dùng tải trọng nào để tính toán trong các phương án sau?',
    options: [
      'a. Tải trọng trục 12.000 daN',
      'b. Tải trọng trục 10.000 daN',
      'c. Tải trọng trục 9.500 daN',
      'd. Tải trọng trục 8.000 daN',
    ],
    correct: 0
  },
  {
    question: 'Độ bằng phẳng mặt đường được đánh giá qua chỉ số độ gồ ghề quốc tế IRI (m/km). Với đường vận tốc thiết kế Vtk = 100 -120 km/h, làm mới thì IRI yêu cầu phải là phương án nào trong số phương án sau?',
    options: [
      'a. Chỉ số IRI yêu cầu ≤ 2,0',
      'b. Chỉ số IRI yêu cầu ≤ 2,2',
      'c. Chỉ số IRI yêu cầu ≤ 2,5',
      'd. Chỉ số IRI yêu cầu ≤ 4,0',
    ],
    correct: 0
  },
  {
    question: 'Độ bằng phẳng mặt đường được đánh giá qua chỉ số độ gồ ghề quốc tế IRI (m/km). Với đường vận tốc thiết kế Vtk = 100 -120 km/h, cải tạo, nâng cấp thì IRI yêu cầu phải là phương án nào trong số phương án sau?',
    options: [
      'a. Chỉ số IRI yêu cầu ≤ 2,5',
      'b. Chỉ số IRI yêu cầu ≤ 2,8',
      'c. Chỉ số IRI yêu cầu ≤ 3,0',
      'd. Chỉ số IRI yêu cầu ≤ 5,0',
    ],
    correct: 0
  },
  {
    question: 'Độ bằng phẳng mặt đường được đánh giá qua chỉ số độ gồ ghề quốc tế IRI (m/km). Với đường vận tốc thiết kế Vtk = 60 km/h, làm mới thì IRI yêu cầu phải là phương án nào trong số phương án sau?',
    options: [
      'b. Chỉ số IRI yêu cầu ≤ 2,2',
      'c. Chỉ số IRI yêu cầu ≤ 2,5',
      'd. Chỉ số IRI yêu cầu ≤ 4,0',
    ],
    correct: 2
  },
  {
    question: 'Độ bằng phẳng mặt đường được đánh giá qua chỉ số độ gồ ghề quốc tế IRI (m/km). Với đường vận tốc thiết kế Vtk = 60 km/h, cải tạo, nâng cấp thì IRI yêu cầu phải là phương án nào trong số phương án sau?',
    options: [
      'a. Chỉ số IRI yêu cầu ≤ 2,5',
      'b. Chỉ số IRI yêu cầu ≤ 2,8',
      'c. Chỉ số IRI yêu cầu ≤ 3,0',
      'd. Chỉ số IRI yêu cầu ≤ 5,0',
    ],
    correct: 2
  },
  {
    question: 'Khi đắp nền đường trên đất yếu phải sử dụng lớp đệm cát để thoát nước ngang. Trong các trường hợp sau trường hợp nào phải dùng tầng đệm cát:',
    options: [
      'a. Trường hợp đắp trực tiếp trên đất yêu',
      'b. Trường hợp đào một phần hay toàn bộ tầng đất yếu',
      'c. Sử dụng giếng cát hay bấc thấm thoát nước thẳng đứng',
      'd. Tất cả 3 trường hợp trên',
    ],
    correct: 3
  },
  {
    question: 'Trong tiêu chuẩn thiết kế đường ô tô TCVN 4054 - 2005 ngoài đường ô tô cao tốc, có các phương án phân loại dưới đây. Phương án nào đúng.',
    options: [
      'a. Đường có 6 cấp, từ cấp I tới cấp VI',
      'b. Đường có 5 cấp, từ cấp I tới cấp V',
      'c. Đường có 4 cấp, từ cấp I tới cấp IV',
      'd. Đường có 3 cấp, từ cấp I tới cấp III',
    ],
    correct: 0
  },
  {
    question: 'Theo tiêu chuẩn thiết kế đường giao thông nông thôn TCVN 10380: 2014 đường giao thông nông thôn có mấy cấp? chọn phương án đúng?',
    options: [
      'a. Có 1 cấp A',
      'b. Có 2 cấp A, B',
      'c. Có 3 cấp A, B, C',
      'd. Có 4 cấp A, B, C, D',
    ],
    correct: 3
  },
  {
    question: 'Tốc độ thiết kế của đường được hiểu thế nào?',
    options: [
      'a. Tốc độ lớn nhất cho phép xe chạy trên đường',
      'b. Tốc độ khai thác của đường',
      'c. Là tốc độ được dùng để tính toán các chỉ tiêu kỹ thuật chủ yếu của đường trong trường hợp khó khăn',
      'd. Tốc độ trung bình xe chạy trên đường',
    ],
    correct: 2
  },
  {
    question: 'Chiều rộng một làn xe trong tiêu chuẩn thiết kế đường TCVN 4054 - 2005 có mấy loại kích thước? Phương án nào đúng và đủ?',
    options: [
      'a. Có các chiều rộng 3,75 m, 3,5 mét, 3,0 m và 2,75 m.',
      'b. Có các chiều rộng 3,75 m, 3,5 mét và 3,0 m.',
      'c. Có các chiều rộng 3,75 m, 3,5 mét',
      'd. Chỉ có chiều rông 3,5 m',
    ],
    correct: 0
  },
  {
    question: 'Trong tiêu chuẩn thiết kế yếu tố hình học của đường quy định mấy loại bán kính đường cong nằm tối thiểu? phương án nào đúng và đủ.',
    options: [
      'a. Bán kính đường cong nằm tối thiểu giới hạn',
      'b. Bán kính đường đường cong tối thiểu giới hạn, tối thiểu thông thường',
      'c. Bán kính đường cong tối thiểu giới hạn, tối thiểu không siêu cao',
      'd. Bán kính tối thiểu giới hạn, tối thiểu thông thường và tối thiểu không siêu cao',
    ],
    correct: 3
  },
  {
    question: 'Trong tiêu chuẩn thiết kế yếu tố hình học của đường quy định trong trường hợp nào phải bố trí đường cong chuyển tiếp.',
    options: [
      'a. Khi vận tốc thiết kế Vtk ≥ 30 km/h',
      'b. Khi vận tốc thiết kế Vtk ≥ 40 km/h',
      'c. Khi vận tốc thiết kế Vtk ≥ 60 km/h',
    ],
    correct: 2
  },
  {
    question: 'Trong thiết kế đường việc phối hợp giữa các yếu tố tuyến nhằm mục đích gì',
    options: [
      'a. Tạo tầm nhìn tốt, cung cấp thông tin cho người lái xe để kịp thời xử trí các tình huống.',
      'b. Tạo tâm lý thoải mái cho người lái, ít mệt nhọc, năng suất cao.',
      'c. Tạo cho công trình phù hợp với cảnh quan, góp phần nâng cao vẻ đẹp khu vực đặt tuyến.',
      'd. Để đạt tất cả mục đích nêu trên',
    ],
    correct: 3
  },
  {
    question: 'Trong tiêu chuẩn thiết kế đường quy định độ đốc dọc lớn nhất tùy thuộc vào cấp hạng đường và điều kiện địa hình. Trường hợp đường cấp I đồng bằng thì độ dốc dọc lớn nhất là bao nhiêu?',
    options: [
      'a. Độ dốc dọc lớn nhất 3%',
      'b. Độ dốc dọc lớn nhất 4%',
      'c. Độ dốc dọc lớn nhất 5%',
      'd. Độ dốc dọc lớn nhất 6%',
    ],
    correct: 0
  },
  {
    question: 'Trong tiêu chuẩn thiết kế đường quy định độ đốc dọc lớn nhất tùy thuộc vào cấp hạng đường và điều kiện địa hình. Trường hợp đường cấp III, miền núi thì độ dốc dọc lớn nhất là bao nhiêu?',
    options: [
      'a. Độ dốc dọc lớn nhất 4%',
      'b. Độ dốc dọc lớn nhất 5%',
      'c. Độ dốc dọc lớn nhất 6%',
      'd. Độ dốc dọc lớn nhất 7%',
    ],
    correct: 3
  },
  {
    question: 'Quy định về hệ số đầm chặt đất nền đường phụ thuộc vào các yếu tố nào?',
    options: [
      'a. Phụ thuộc vào nền đường đào, đắp',
      'b. Phụ thuộc vào cấp hạng kỹ thuật của đường',
      'c. Phụ thuộc vào chiều sâu từ đáy áo đường xuống',
      'd. Phụ thuộc vào cả 3 yếu tố trên',
    ],
    correct: 3
  },
  {
    question: 'Trong tiêu chuẩn thiết kế đường TCVN 4054 - 2005, lưu lượng thiết kế là lưu lượng xe con được quy đổi từ các loại xe khác, thông qua mặt cắt trong ngày đêm, tính cho năm tương lai. Với đường cấp I, II, năm tương lai quy định là năm nào trong các phương án sau?',
    options: [
      'a. Năm thứ 10',
      'b. Năm thứ 15',
      'c. Năm thứ 20',
      'd. Năm thứ 25',
    ],
    correct: 2
  },
  {
    question: 'Trong tiêu chuẩn thiết kế đường TCVN 4054 - 2005, lưu lượng thiết kế là lưu lượng xe con được quy đổi từ các loại xe khác, thông qua mặt cắt trong ngày đêm, tính cho năm tương lai. Với đường cấp III, IV, năm tương lai quy định là năm nào trong các phương án sau?',
    options: [
      'a. Năm thứ 10',
      'b. Năm thứ 15',
      'c. Năm thứ 20',
      'd. Năm thứ 25',
    ],
    correct: 1
  },
  {
    question: 'Trong tiêu chuẩn thiết kế đường TCVN 4054 - 2005, lưu lượng thiết kế là lưu lượng xe con được quy đổi từ các loại xe khác, thông qua mặt cắt trong ngày đêm, tính cho năm tương lai. Với đường cấp V, VI và đường nâng cấp, năm tương lai quy định là năm nào trong các phương án sau?',
    options: [
      'a. Năm thứ 10',
      'b. Năm thứ 15',
      'c. Năm thứ 20',
      'd. Năm thứ 25',
    ],
    correct: 0
  },
  {
    question: 'Độ dốc ngang của mặt đường trên các đoạn thẳng được quy định để đảm bảo thoát nước mưa, phụ thuộc vào loại mặt đường. Với mặt đường bê tông xi măng và bê tông nhựa chọn độ dốc ngang bao nhiêu là đúng?',
    options: [
      'a. Độ dốc ngang 1,5 - 2,0 %',
      'b. Độ dốc ngang 1,5 - 3,0 %',
      'c. Độ dốc ngang 2,0 - 3,0 %',
      'd. Độ dốc ngang 3,0 - 4,0 %',
    ],
    correct: 0
  },
  {
    question: 'Trong tiêu chuẩn thiết kế đường TCVN 4054 - 2005 quy định: H là chiều cao tĩnh không, tính từ điểm cao nhất của phần xe chạy (chưa xét đến chiều cao dự trữ nâng cao mặt đường khi sửa chữa, cải tạo, nâng cấp); h chiều cao tĩnh không ở mép ngoài lề đường. Khi thiết kế đường cấp I, II,III chọn các giá trị nào trong các phương án sau:',
    options: [
      'a. H = 5,0, h = 4,5 m',
      'b. H = 4,75, h = 4,0 m',
      'c. H = 4,5 , h = 4,0 m',
      'd. H = 4,25, h = 4,0 m',
    ],
    correct: 1
  },
  {
    question: 'Trong tiêu chuẩn thiết kế đường TCVN 4054 - 2005 quy định: H là chiều cao tĩnh không, tính từ điểm cao nhất của phần xe chạy (chưa xét đến chiều cao dự trữ nâng cao mặt đường khi sửa chữa, cải tạo, nâng cấp); h chiều cao tĩnh không ở mép ngoài lề đường. Khi thiết kế đường cấp IV và thấp hơn chọn các giá trị nào trong các phương án sau:',
    options: [
      'a. H = 5,0, h = 4,5 m',
      'b. H = 4,75, h = 4,0 m',
      'c. H = 4,5 , h = 4,0 m',
      'd. H = 4,25, h = 4,0 m',
    ],
    correct: 2
  },
  {
    question: 'Trong tiêu chuẩn thiết kế mặt đường, phân ra mấy loại tầng mặt đường (cấp mặt đường)?',
    options: [
      'a. Chỉ có 1 loại tầng mặt đường',
      'b. Có 2 loại tầng mặt đường',
      'c. Có 3 loại tầng mặt đường',
      'd. Có 4 loại tầng mặt đường',
    ],
    correct: 3
  },
  {
    question: 'Tải trọng tính toán mặt đường mềm, đối với đường ngoài đô thị được quy định tải trọng trục xe. Tải trọng quy định là bao nhiêu?',
    options: [
      'a. Tải trọng trục 12 KN',
      'b. Tải trọng trục 14 KN',
      'c. Tải trọng trục 10KN',
      'd. Tải trọng trục 8 KN',
    ],
    correct: 2
  },
  {
    question: 'Tải trọng tính toán mặt đường cứng, đối với đường ngoài đô thị được quy định tải trọng trục xe. Tải trọng quy định là bao nhiêu?',
    options: [
      'a. Tải trọng trục 12 KN',
      'b. Tải trọng trục 14 KN',
      'c. Tải trọng trục 10KN',
      'd. Tải trọng trục 8 KN',
    ],
    correct: 2
  },
  {
    question: 'Khi khảo sát lập thiết kế kỹ thuật tuyến đường, quy định phải đo dài tổng quát để đóng các cọc H, cọc Km, quy định sai số cho phép hai lần đo fl = 1/',
    options: [
      'a. L,. fl sai số tính bằng mét, L chiều dài đo tính bằng mét, a giá trị cho dưới đây. Trong các phương án đưa ra chọn phương án đúng.',
      'a. fl = 1/ 100. L',
      'b. fl = 1/ 500. L',
      'c. fl = 1/ 1000. L',
      'd. fl = 1/ 1500. L',
    ],
    correct: 2
  },
  {
    question: 'Khi khảo sát lập thiết kế kỹ thuật tuyến đường, quy định phải đo dài chi tiết để đóng các cọc, chỉ cần đo một lần khớp vào H, cọc Km, quy định sai số cho phép fl = 1/',
    options: [
      'a. L,. fl sai số tính bằng mét, L chiều dài đo tính bằng mét, a giá trị cho dưới đây. Trong các phương án đưa ra chọn phương án đúng.',
      'a. fl = 1/100. L',
      'b. fl = 1/ 500. L',
      'c. fl = 1/ 1000. L',
      'd. fl = 1/ 1500. L',
    ],
    correct: 1
  },
];
