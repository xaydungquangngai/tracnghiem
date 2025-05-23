const questions = [
  {
    question: 'Tốc độ cho phép lưu hành trên đường là phương án nào trong phương án sau ?',
    options: [
      'a. Là tốc độ thiết kế của đường',
      'b. Là tốc độ quy định theo cấp hạng kỹ thuật của đường',
      'c. Là tốc độ khai thác cho phép phụ thuộc vào tình trạng thực tế của đường do cơ quan quản lý đường quy định',
      'd. Là tốc độ dùng để tính toán các chỉ tiêu kỹ thuật chủ yếu của đường',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế trắc dọc đường ô tô cao tốc TCVN 5729: 2012 quy định chiều dài tối thiểu tùy thuộc vào cấp đường và phải đủ để bố trí chiều dài đường cong đứng. Với đường cấp 100 (Vtk = 100 km/h) chiều dài tối thiểu là bao nhiêu ?',
    options: [
      'a. Chiều dài tối thiểu 350 mét',
      'b. Chiều dài tối thiểu 300 mét',
      'c. Chiều dài tối thiểu 250 mét',
      'd. Chiều dài tối thiểu 200 mét',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế trắc dọc đường ô tô cao tốc TCVN 5729: 2012 quy định chiều dài tối đa đoạn dốc tùy thuộc vào cấp đường và độ dốc dọc. Với đường cấp 100 (Vtk = 100 km/h) và độ dốc dọc 4% chiều dài tối đa là bao nhiêu ?',
    options: [
      'a. Chiều dài tối đa 700 mét',
      'b. Chiều dài tối đa 800 mét',
      'c. Chiều dài tối đa 900 mét',
      'd. Chiều dài tối đa 1000 mét',
    ],
    correct: 1
  },
  {
    question: 'Khi xác định lưu lượng xe tính toán để xác định Eyc mặt đường phải xét đến hệ số ảnh hưởng của số làn xe. Trong trường hợp đường có 2 hoặc 3 làn xe không có dải phân cách thì hệ số phân phối trục xe f chọn là bao nhiêu? Trong các trường hợp sau',
    options: [
      'a. Hệ số f = 1',
      'b. Hệ số f = 0,5',
      'c. Hệ số f= 0,55',
      'd. Hệ số f = 0,35',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế một tuyến đường ô tô, tiêu chuẩn quy định chiều dài tối thiểu thống nhất theo một cấp để đảm bảo an toàn. Đường từ cấp II trở lên chiều dài tối thiểu quy định là bao nhiêu trong các phương án sau?',
    options: [
      'a. Không quy định',
      'b. Chiều dài tối thiểu 5 km.',
      'c. Chiều dài tối thiểu 7.5 km.',
      'd. Chiều dài tối thiểu 10 km.',
    ],
    correct: 3
  },
  {
    question: 'Bán kính ống bọc cáp DƯL tại vị trí thông thường và vùng neo tối thiểu là bao nhiêu?',
    options: [
      'a. 9000mm vị trí thông thường và 3600mm tại vị trí vùng neo',
      'b. 5000mm vị trí thông thường và 3600mm tại vị trí vùng neo',
      'c. 6000mm vị trí thông thường và 3600mm tại vị trí vùng neo',
      'd. 9000mm vị trí thông thường và 6000mm tại vị trí vùng neo',
    ],
    correct: 2
  },
  {
    question: 'Khi treo biển trên giá long môn, cột cần vươn thì cạnh dưới của biển (hoặc mép dưới của dầm nếu thấp hơn cạnh dưới biển) cách mặt đường ít nhất là bao nhiêu đối với đường cao tốc ?',
    options: [
      'a. 5 m',
      'b. 5,2 m',
      'c. 5,5m',
      'd. 5,7m',
    ],
    correct: 1
  },
  {
    question: 'Theo cỡ hạt lớn nhất danh định, Bê tông nhựa chặt được phân thành mấy loại?',
    options: [
      'a. 4 loại',
      'b. 5 loại',
      'c. 6 loại',
      'd. 7 loại',
    ],
    correct: 2
  },
  {
    question: 'Đối với đường cao tốc có tốc độ thiết kế V≥80km/h, biển báo lắp đặt trên giá long môn, cột cần vươn sử dụng loại màng phản quang nào là phù hợp?',
    options: [
      'a. Loại VIII',
      'b. Loại IX',
      'c. Loại X',
      'd. Loại XI',
    ],
    correct: 3
  },
  {
    question: 'Hệ số kích thước biển báo của Biển báo cấm, biển hiệu lệnh, biển báo nguy hiểm và cảnh báo trên đường cao tốc là bao nhiêu?',
    options: [
      'a. 1,8',
      'b. 2',
      'c. 2,5',
      'd. 3,0',
    ],
    correct: 1
  },
  {
    question: 'Khoảng cách (S) giữa hai cọc tiêu trên đường thẳng thông thường là bao nhiêu đối với đường cao tốc?',
    options: [
      'a. 10m',
      'b. 20m',
      'c. 30m',
      'd. 40m',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế đường ô tô cao tốc theo TCVN 5729:2012, không xét đến việc làm làn phụ leo dốc trong trường hợp nào?',
    options: [
      'a. Đường cao tốc có 4 làn xe trở lên (mỗi chiều hai làn xe) và các đoạn qua cầu lớn, cầu cao, hầm, nền đường đào sâu.',
      'b. Đường cao tốc có 6 làn xe trở lên (mỗi chiều ba làn xe trở lên) và các đoạn đường cao tốc bốn làn nhưng qua cầu lớn, cầu cao, hầm, nền đào sâu.',
      'c. Đường cao tốc có 6 làn xe trở lên và các đoạn có độ dốc dọc <3%.',
      'd. Đường cao tốc thiết kế độ dốc dọc từ 3% trở lên với chiều dài dốc từ 800m trở lên của đường cao tốc cấp 100 và 120.',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế đường ô tô cao tốc theo TCVN 5729:2012, trường hợp dốc ngang mặt đường dưới 1% thì phải thiết kế độ dốc dọc tối thiểu là bao nhiêu %?',
    options: [
      'a. 0.5%',
      'b. 0.3%',
      'c. 1.0%',
      'd. Không có quy định về độ dốc dọc đối với trường hợp này',
    ],
    correct: 0
  },
  {
    question: 'Khi thiết kế đường ô tô cao tốc theo TCVN 5729:2012, quy định chiều dài tối thiểu của đường cong đứng đối với đường cao tốc cấp 100 (Vtk=100km/h) là bao nhiêu?',
    options: [
      'a. 55m',
      'b. 65m',
      'c. 75m',
      'd. 85m',
    ],
    correct: 3
  },
  {
    question: 'Khi thiết kế đường ô tô cao tốc theo TCVN 5729:2012, khi thiết kế dốc dọc của đường cao tốc cấp 100 (Vtk=100km/h) tại các vị trí nút giao khác mức có liên thông, quy định độ dốc dọc lớn nhất (giới hạn) là bao nhiêu %?',
    options: [
      'a. 2%',
      'b. 2,5%',
      'c. 3%',
      'd. 4%',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế đường ô tô cao tốc theo TCVN 5729:2012, quy định chiều dài tối thiểu của đoạn chuyển làn hình nêm đối với đường cao tốc cấp 120 (Vtk=120km/h) là bao nhiêu?',
    options: [
      'a. 55m',
      'b. 65m',
      'c. 75m',
      'd. 85m',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế đường ô tô cao tốc theo TCVN 5729:2012, quy định tầm nhìn dừng xe của đường nhánh trong nút giao khác mức liên thông có tốc độ xe chạy tính toán trên đường nhánh V=50km/h là bao nhiêu?',
    options: [
      'a. 55m',
      'b. 65m',
      'c. 75m',
      'd. 85m',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế áo đường mềm qua nền đào đá, chiều dày lớp tạo phẳng cần bố trí theo hướng dẫn tại TCCS37:2022 là bao nhiêu?',
    options: [
      'a. Từ 10-15cm.',
      'b. Từ 15-25cm.',
      'c. Từ 20-30cm.',
      'd. Từ 25-30cm.',
    ],
    correct: 2
  },
  {
    question: 'Theo TCVN 13567-1:2022, Bột khoáng dùng cho bê tông nhựa chặt sử dụng nhựa đường thông thường là sản phẩm được nghiền từ đá các-bô-nát (đá vôi can - xít, đô-lô-mít), có cường độ nén của đá gốc tối thiểu là bao nhiêu?',
    options: [
      'a. 30 Mpa',
      'b. 35 Mpa',
      'c. 40 Mpa',
      'd. 45 Mpa',
    ],
    correct: 2
  },
  {
    question: 'Tốc độ thiết kế đường bộ cao tốc theo QCVN115:2024/BGTVT quy định các cấp thiết kế như nào?',
    options: [
      'a. 60, 80, 100, 120.',
      'b. 80, 100, 120.',
      'c. 80, 90, 100, 120.',
      'd. 60, 70, 80, 100, 120.',
    ],
    correct: 0
  },
  {
    question: 'Theo QCVN 07-4:2023/BXD có những cấp đường nào',
    options: [
      'a. Cấp cao tốc, cấp trục chính đô thị, cấp phân khu.',
      'b. Cấp cao tốc, cấp phố chính đô thị, cấp phân khu',
      'c. Cấp đô thị, cấp khu vực, cấp nội bộ.',
      'd. Cấp liên khu vực, cấp phố chính đô thị, cấp phân khu.',
    ],
    correct: 2
  },
  {
    question: 'Đoạn thẳng nối hai đường cong cùng chiều và hai đường cong ngược chiều được quy định như nào trong TCVN 5729:2012?',
    options: [
      'a. Đoạn thẳng bằng 4 lần vận tốc thiết kế (km/h).',
      'b. Đoạn thẳng bằng 2 lần vận tốc thiết kế (km/h).',
      'c. Đoạn thẳng bằng 6 lần vận tốc thiết kế (km/h) với đường cong cùng chiều, 2 lần vận tốc thiết kế (km/h) với đường cong ngược chiều',
      'd. Đoạn thẳng bằng 6 lần vận tốc thiết kế (km/h).',
    ],
    correct: 1
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
    question: 'Khi xác định lưu lượng xe tính toán để xác định Eyc mặt đường phải xét đến hệ số ảnh hưởng của số làn xe. Trong trường hợp đường có 2 hoặc3 làn xe không có dải phân cách thì hệ số phân phối trục xe f chọn là bao nhiêu ?',
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
      'd. Khi vận tốc thiết kế Vtk ≥ 80 km/h',
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
