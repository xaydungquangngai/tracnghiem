const questions = [
  {
    question: 'Các tải trọng nào sau đây được xếp vào loại tải trọng thường xuyên:',
    options: [
      'a. Trọng lượng của các phần, bộ phận của công trình, trong đó có trọng lượng của các kết cấu chịu lực, các kết cấu bao che;',
      'b. Trọng lượng và áp lực của đất (đắp, lấp); áp lực sinh ra do việc khai thác mỏ, v.v...;',
      'c. Áp lực thủy tĩnh. Lực còn dư trong kết cấu hoặc nền do ứng suất trước.',
      'd. Cả ba phương án a, b,',
    ],
    correct: 3
  },
  {
    question: 'Hệ số khí động để tính tải trọng gió tác động lên công trình phụ thuộc vào yếu tố nào?',
    options: [
      'a. Độ cao của công trình',
      'b. Hình dạng của công trình',
      'c. Địa hình chung quanh công trình',
      'd. Cả ba điều đều không đúng',
    ],
    correct: 1
  },
  {
    question: 'Cho một dầm đơn giản hai đầu tựa khớp chịu tải trọng phân bố đều trên toàn dầm, biểu đồ mômen uốn và biểu đồ lực cắt trong dầm có dạng như thế nào?',
    options: [
      'a. Biểu đồ mômen uốn dạng parabôn bậc hai, biểu đồ lực cắt dạng hằng số.',
      'b. Biểu đồ mômen uốn dạng bậc nhất, biểu đồ lực cắt dạng hằng số.',
      'c. Biểu đồ mômen uốn dạng parabôn bậc hai, biểu đồ lực cắt dạng bậc nhất.',
      'd. Cả ba phương án trên đều không đúng.',
    ],
    correct: 2
  },
  {
    question: 'Thanh chịu tải trọng phân bố dạng bậc nhất (hình tam giác) trên toàn bộ thanh thì biểu đồ lực cắt có dạng như thế nào?',
    options: [
      'a. Đường thẳng',
      'b. Đường cong bậc 2',
      'c. Đường cong bậc 3',
      'd. Cả ba đều không đúng',
    ],
    correct: 1
  },
  {
    question: 'Thanh chịu tải trọng phân bố dạng bậc nhất (hình tam giác) trên toàn bộ thanh thì biểu đồ mômen có dạng như thế nào?',
    options: [
      'a. Đường thẳng',
      'b. Đường cong bậc 2',
      'c. Đường cong bậc 3',
      'd. Cả ba đều không đúng',
    ],
    correct: 2
  },
  {
    question: 'Cho một dầm đơn giản hai đầu tựa khớp chịu tải trọng tập trung ở giữa dầm, biểu đồ mômen uốn và biểu đồ lực cắt trong dầm có dạng như thế nào?',
    options: [
      'a. Biểu đồ mômen uốn dạng parabôn bậc hai, biểu đồ lực cắt dạng hằng số.',
      'b. Biểu đồ mômen uốn dạng bậc nhất, biểu đồ lực cắt dạng hằng số.',
      'c. Biểu đồ mômen uốn dạng parabôn bậc hai, biểu đồ lực cắt dạng bậc nhất.',
      'd. Cả ba phương án trên đều không đúng.',
    ],
    correct: 1
  },
  {
    question: 'Theo TCVN nước ta được chia làm mấy vùng áp lực gió?',
    options: [
      'a. 3 vùng',
      'b. 4 vùng',
      'c. 5 vùng',
      'd. 2 vùng',
    ],
    correct: 2
  },
  {
    question: 'Áp lực gió cơ sở W_0=65 daN/m^2 là của phân vùng áp lực gió nào?',
    options: [
      'a. Vùng I',
      'b. Vùng II',
      'c. Vùng III',
      'd. Vùng IV',
    ],
    correct: 0
  },
  {
    question: 'Áp lực gió cơ sở W_0=95 daN/m^2 là của phân vùng áp lực gió nào?',
    options: [
      'a. Vùng I',
      'b. Vùng II',
      'c. Vùng III',
      'd. Vùng IV',
    ],
    correct: 1
  },
  {
    question: 'Áp lực gió cơ sở W_0=125 daN/m^2 là của phân vùng áp lực gió nào?',
    options: [
      'a. Vùng I',
      'b. Vùng II',
      'c. Vùng III',
      'd. Vùng IV',
    ],
    correct: 2
  },
  {
    question: 'Áp lực gió cơ sở W_0=155 daN/m^2 là của phân vùng áp lực gió nào?',
    options: [
      'a. Vùng I',
      'b. Vùng II',
      'c. Vùng III',
      'd. Vùng IV',
    ],
    correct: 3
  },
  {
    question: 'Trong các ký hiệu của đại lượng sau, ký hiệu nào là cường độ tiêu chuẩn lấy theo giới hạn chảy của thép (theo TCVN)?',
    options: [
      'a. f',
      'b. f_y',
      'c. f_v',
      'd. f_u',
    ],
    correct: 1
  },
  {
    question: 'Trong các ký hiệu của đại lượng sau, ký hiệu nào là cường độ tính toán lấy theo giới hạn chảy của thép (theo TCVN)?',
    options: [
      'a. f',
      'b. f_y',
      'c. f_v',
      'd. f_u',
    ],
    correct: 0
  },
  {
    question: 'Trong các ký hiệu của đại lượng sau, ký hiệu nào là cường độ tiêu chuẩn của thép theo sức bền kéo đứt (theo TCVN)?',
    options: [
      'a. f',
      'b. f_y',
      'c. f_v',
      'd. f_u',
    ],
    correct: 3
  },
  {
    question: 'Trong các ký hiệu của đại lượng sau, ký hiệu nào là cường độ tính toán chịu cắt của thép (Theo TCVN)?',
    options: [
      'a. f',
      'b. f_y',
      'c. f_v',
      'd. f_u',
    ],
    correct: 2
  },
  {
    question: 'Khi tính lực tới hạn trong bài toán ổn định thanh hai đầu khớp, hệ số điều kiện liên kết (μ) được lấy như sau:',
    options: [
      'a. μ=0,5',
      'b. μ=0,7',
      'c. μ=1',
      'd. μ=2',
    ],
    correct: 2
  },
  {
    question: 'Khi tính lực tới hạn trong bài toán ổn định thanh hai đầu ngàm, hệ số điều kiện liên kết (μ) được lấy như sau:',
    options: [
      'a. μ=0,5',
      'b. μ=0,7',
      'c. μ=1',
      'd. μ=2',
    ],
    correct: 0
  },
  {
    question: 'Khi tính lực tới hạn trong bài toán ổn định thanh một đầu ngàm một đầu tự do, hệ số điều kiện liên kết (μ) được lấy như sau:',
    options: [
      'a. μ=0,5',
      'b. μ=0,7',
      'c. μ=1',
      'd. μ=2',
    ],
    correct: 3
  },
  {
    question: 'Khi tính lực tới hạn trong bài toán ổn định thanh một đầu ngàm một đầu khớp, hệ số điều kiện liên kết (μ) được lấy như sau:',
    options: [
      'a. μ=0,5',
      'b. μ=0,7',
      'c. μ=1',
      'd. μ=2',
    ],
    correct: 1
  },
  {
    question: 'Chiều cao lớn nhất của đường hàn góc giữa hai bản thép là bao nhiêu?',
    options: [
      'a. bằng chiều dày lớn nhất của bản thép trong liên kết',
      'b. bằng 1,2 lần chiều dày nhỏ nhất của bản thép trong liên kết',
      'c. bằng chiều dày nhỏ nhất của bản thép trong liên kết',
      'd. bằng 0,7 lần chiều dày lớn nhất của bản thép trong liên kết',
    ],
    correct: 1
  },
  {
    question: 'Mối hàn góc, phương pháp hàn thủ công có chiều cao đường hàn h_f. Khi kiểm tra cường độ thép cơ bản tại biên nóng chảy thì chiều cao đường hàn tính toán lấy bằng:',
    options: [
      'a. 0,7h_f',
      'b. 0,8h_f',
      'c. 0,9h_f',
      'd. 1,0h_f',
    ],
    correct: 3
  },
  {
    question: 'Mối hàn góc, phương pháp hàn thủ công có chiều cao đường hàn h_f. Khi kiểm tra cường độ kim loại hàn tại biên nóng chảy thì chiều cao đường hàn tính toán lấy bằng:',
    options: [
      'a. 0,7h_f',
      'b. 0,8h_f',
      'c. 0,9h_f',
      'd. 1,0h_f',
    ],
    correct: 0
  },
  {
    question: 'Bulông cường độ cao có cấp bền 8.8, có ý nghĩa là gì?',
    options: [
      'a. giới hạn bền f_u=80 daN/(mm^2 ), giới hạn chảy f_y=80 daN/(mm^2 )',
      'b. giới hạn bền f_u=64 daN/(mm^2 ), giới hạn chảy f_y=80 daN/(mm^2 )',
      'c. giới hạn bền f_u=80 daN/(cm^2 ), giới hạn chảy f_y=64 daN/(cm^2)',
      'd. giới hạn bền f_u=80 daN/(mm^2 ), giới hạn chảy f_y=64 daN/(mm^2 )',
    ],
    correct: 3
  },
  {
    question: 'Khoảng cách nhỏ nhất giữa trọng tâm của hai bu lông theo phương bất kỳ là bao nhiêu?',
    options: [
      'a. 3d.',
      'b. 2,5d.',
      'c. 3,5d.',
      'd. 4d. (d là đường kính lỗ bulông)',
    ],
    correct: 1
  },
  {
    question: 'Trong dầm thép tổ hợp chữ I, chiều dày bản bụng dầm xác định từ điều kiện nào?',
    options: [
      'a. Điều kiện bền chịu cắt của tiết diện',
      'b. Điều kiện chế tạo/ thi công',
      'c. Điều kiện ổn định bản mỏng',
      'd. Cả 3 phương án a,b,c',
    ],
    correct: 3
  },
  {
    question: 'Việc thay đổi tiết diện dầm thép tổ hợp chữ I nhằm tiết kiệm vật liệu thép theo nguyên tắc nào?',
    options: [
      'a. Biểu đồ bao vật liệu phù hợp với biểu đồ bao mômen.',
      'b. Biểu đồ bao vật liệu phù hợp với biểu đồ bao lực cắt',
      'c. Biểu đồ bao vật liệu phù hợp với biểu đồ bao lực dọc',
      'd. Cả 2 phương án b, c',
    ],
    correct: 0
  },
  {
    question: 'Mất ổn định cục bộ của bản bụng dầm thép tổ hợp chữ I do tác dụng bởi yếu tố nào?',
    options: [
      'a. Ứng suất tiếp.',
      'b. Ứng suất pháp.',
      'c. Đồng thời ứng suất tiếp và ứng suất pháp.',
      'd. Cả ba phương án a,b, c',
    ],
    correct: 3
  },
  {
    question: 'Mất ổn định cục bộ của bản cánh dầm thép tổ hợp chữ I bởi yếu tố nào?',
    options: [
      'a. Lực cắt trong dầm.',
      'b. Mômen trong dầm.',
      'c. Lực dọc trong dầm.',
    ],
    correct: 1
  },
  {
    question: 'Đối với dầm thép chịu uốn thì đặc trưng hình học nào của tiết diện, quan trọng nhất ảnh hưởng đến độ bền chịu cắt?',
    options: [
      'a. Hai ý b, d',
      'b. Mômen quán tính',
      'c. Mô đun chống uốn',
      'd. Mômen quán tính tĩnh',
    ],
    correct: 0
  },
  {
    question: 'Thanh chịu kéo hoặc nén đúng tâm có tiết diện hợp lý khi nào?',
    options: [
      'a. Mô men quán tính theo 2 phương xấp xỉ bằng nhau I_x≈I_y.',
      'b. Bán kính quán tính theo 2 phương xấp xỉ bằng nhau i_x≈i_y.',
      'c. Độ mảnh theo 2 phương xấp xỉ bằng nhau λ_x≈λ_y.',
      'd. Môđun chống uốn theo 2 phương xấp xỉ bằng nhau W_x≈W_y.',
    ],
    correct: 2
  },
  {
    question: 'Đối với cột thép chịu nén đúng tâm thì đặc trưng hình học nào của tiết diện, quan trọng ảnh hưởng đến ổn định tổng thể của cột?',
    options: [
      'a. Diện tích tiết diện.',
      'b. Mômen quán tính.',
      'c. Môđun chống uốn.',
      'd. Hai phương án a và',
    ],
    correct: 3
  },
  {
    question: 'Độ mảnh của cột thép phụ thuộc vào những đại lượng nào?',
    options: [
      'a. Chiều cao tính toán và mômen quán tính tiết diện.',
      'b. Chiều cao tính toán và bán kính quán tính tiết diện.',
      'c. Chiều cao tính toán và môđun chống uốn tiết diện.',
      'd. Chiều cao tính toán và diện tích tiết diện.',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế cột thép tiết diện hình chữ I, độ mảnh để tính toán ổn định của cột được tính bằng:',
    options: [
      'a. Tỉ số chiều dài thực của cột trên bán kính quán tính trung bình của tiết diện cột.',
      'b. Tỉ số chiều dài tính toán của cột trên bán kính quán tính trung bình của tiết diện cột.',
      'c. Tỉ số chiều dài tính toán của cột trên bán kính quán tính nhỏ nhất của tiết diện cột.',
      'd. Tỉ số chiều dài thực của cột trên bán kính quán tính lớn nhất của tiết diện cột.',
    ],
    correct: 2
  },
  {
    question: 'Đối với thép kết cấu, tính năng cơ học nào quan trọng nhất để tính toán thiết kế?',
    options: [
      'a. Giới hạn chảy.',
      'b. Giới hạn bền.',
      'c. Độ dãn dẻo.',
      'd. Mô đun đàn hồi.',
    ],
    correct: 0
  },
  {
    question: 'Cường độ tính toán chịu cắt/trượt (f_v) được lấy bằng bao nhiêu so với cường độ tính toán chịu kéo (f) của thép?',
    options: [
      'a. f_v=0,85f.',
      'b. f_v=0,58f.',
      'c. f_v=0,45f.',
      'd. f_v=0,7f.',
    ],
    correct: 1
  },
  {
    question: 'Nhóm thép nào có lớp cường độ tương đương?',
    options: [
      'a. A36, Q345, SS400, CT42, S235',
      'b. A570 gr.50, Q235, SS400, CT42, S235',
      'c. A36, Q235, SS400, CT34, S235',
      'd. A36, Q345, SS400, CT34, S275',
    ],
    correct: 2
  },
  {
    question: 'Khoảng cách thông thủy tối thiểu giữa các thanh cốt thép trên được bố trí thành một hoặc hai lớp và nằm ngang hoặc nghiêng trong lúc đổ bê tông là',
    options: [
      'a. 1,5 d (d là đường kính thanh thép)',
      'b. 1,5 d (d là đường kính cốt liệu lớn nhất)',
      'c. 20 mm',
      'd. 30 mm',
    ],
    correct: 3
  },
  {
    question: 'Chiều dày tối thiểu của lớp bê tông bảo vệ trong đất (khi không có các biện pháp bảo vệ bổ sung), trong móng khi có lớp bê tông lót là',
    options: [
      'a. 25 mm',
      'b. 30 mm',
      'c. 40 mm',
      'd. 50 mm',
    ],
    correct: 2
  },
  {
    question: 'Giá trị tiêu chuẩn của tải trọng ngang tác dụng lên tay vịn của cầu thang bộ và ban công đối với trường Trung học cơ sở nếu không có quy định trong Nhiệm vụ thiết kế thì lấy bằng:',
    options: [
      'a. 0,5 kN/m',
      'b. 0,6 kN/m',
      'c. 0,7 kN/m',
      'd. 0,8 kN/m',
    ],
    correct: 3
  },
  {
    question: 'Độ lún tuyệt đối lớn nhất Sgh trong trường hợp Nhà dân dụng, khung BTCT có tường chèn được quy định là',
    options: [
      'a. 15mm',
      'b. 12mm',
      'c. 10mm',
      'd. 8mm',
    ],
    correct: 3
  },
  {
    question: 'Đối với cấu kiện bê tông cốt thép được đổ theo phương đứng với chiều cao mỗi lớp bê tông đổ lớn hơn 1,5 m; cần nhân cường độ chịu nén tính toán của bê tông với hệ số:',
    options: [
      'a. 0,9',
      'b. 0,7',
      'c. 1,1',
      'd. 0,85',
    ],
    correct: 3
  },
  {
    question: 'Cốt thép CB400-V có:',
    options: [
      'a. Giới hạn chảy bằng 400 MPa',
      'b. Giới hạn bền bằng 400 MPa',
      'c. Giới hạn chảy bằng 400 kG/cm2',
      'd. Giới hạn bền bằng 400 kG/cm2',
    ],
    correct: 0
  },
  {
    question: 'Khoảng cách thông thủy tối thiểu giữa các thanh cốt thép cần được lấy không nhỏ hơn đường kính lớn nhất của thanh cốt thép, đồng thời không nhỏ hơn:',
    options: [
      'a. 25 mm đối với các thanh cốt thép trên được bố trí thành một hoặc hai lớp và nằm ngang hoặc nghiêng trong lúc đổ bê tông.',
      'b. 30 mm đối với các thanh nằm theo phương đứng trong lúc đổ bê tông',
      'c. Cả hai phương án',
      'a. và',
      'b. đều sai',
      'd. Cả hai phương án',
      'a. và',
      'b. đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Với những loại cốt thép CB240-T, CB300-V, CB400-V thì giá trị cường độ chịu nén tính toán:',
    options: [
      'a. Lớn hơn giá trị cường độ chịu kéo tính toán',
      'b. Bằng giá trị cường độ chịu kéo tính toán',
      'c. Nhỏ hơn giá trị cường độ chịu kéo tính toán',
      'd. Lớn hơn giá trị cường độ chịu kéo tiêu chuẩn',
    ],
    correct: 1
  },
  {
    question: 'Chiều rộng vết nứt giới hạn cho phép của cấu kiện bê tông cốt thép:',
    options: [
      'a. Cần được lấy theo các yêu cầu thẩm mỹ, yêu cầu độ thấm của kết cấu',
      'b. Phụ thuộc vào thời hạn tác dụng của tải trọng',
      'c. Phụ thuộc loại cốt thép và khả năng phát triển ăn mòn của nó tại vết nứt',
      'd. Cả ba phương án trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Khoảng cách giữa các thanh cốt thép thẳng đứng trong tường bê tông cốt thép được lấy không lớn hơn:',
    options: [
      'a. 500 mm và chiều dày tường',
      'b. 400 mm và hai lần chiều dày tường',
      'c. 500 mm và hai lần chiều dày tường',
      'd. Cả ba phương án trên đều sai',
    ],
    correct: 1
  },
  {
    question: 'Bê tông có cấp độ bền chịu nén B20 có cường độ chịu nén trung bình:',
    options: [
      'a. Bằng 15 MPa',
      'b. Bằng 20 MPa',
      'c. Lớn hơn 20 MPa',
      'd. Bằng 11,5 MPa',
    ],
    correct: 2
  },
  {
    question: 'Cường độ chịu kéo tính toán của cốt thép đai loại CB240-T:',
    options: [
      'a. Bằng cường độ chịu kéo tính toán của cốt thép dọc loại CB240-T',
      'b. Lớn hơn cường độ chịu kéo tính toán của cốt thép dọc loại CB240-T',
      'c. Lớn hơn cường độ chịu kéo tính toán của cốt thép xiên loại CB240-T',
      'd. Nhỏ hơn cường độ chịu kéo tính toán của cốt thép dọc loại CB240-T',
    ],
    correct: 3
  },
  {
    question: 'Hệ số độ tin cậy của cường độ cốt thép:',
    options: [
      'a. Lấy bằng 1,10 đối với các trạng thái giới hạn thứ nhất và bằng 1,2 đối với các trạng thái giới hạn thứ hai.',
      'b. Lấy bằng 1,15 đối với các trạng thái giới hạn thứ nhất và bằng 1,0 đối với các trạng thái giới hạn thứ hai.',
      'c. Lấy bằng 1,0 đối với các trạng thái giới hạn thứ nhất và bằng 1,15 đối với các trạng thái giới hạn thứ hai.',
      'd. Cả ba phương án trên đều sai',
    ],
    correct: 1
  },
  {
    question: 'Chiều dài tính toán của cấu kiện chịu nén hai đầu khớp có tiết diện ngang không đổi dọc theo chiều dài được lấy bằng:',
    options: [
      'a. Chiều dài thực tế của cấu kiện',
      'b. Hai lần chiều dài thực tế của cấu kiện',
      'c. 0,7 lần chiều dài thực tế của cấu kiện',
      'd. 0,5 lần chiều dài thực tế của cấu kiện',
    ],
    correct: 0
  },
  {
    question: 'Thời hạn sử dụng theo thiết kế của công trình xây dựng:',
    options: [
      'a. Phụ thuộc vào chức năng của công trình trong dự án đầu tư xây dựng và thời hạn của dự án (nếu có)',
      'b. Phụ thuộc vào môi trường khai thác sử dụng',
      'c. Được quy định trong Nhiệm vụ thiết kế nhằm đảm bảo yêu cầu về an toàn, công năng sử dụng mà không cần sửa chữa lớn kết cấu',
      'd. Tất cả các yếu tố trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Theo TCVN, kích thước một cạnh của viên mẫu chuẩn lập phương được đúc cùng với cấu kiện để xác định cường độ chịu nén của bê tông là:',
    options: [
      'a. 100 mm',
      'b. 150 mm',
      'c. 200 mm',
      'd. 300 mm',
    ],
    correct: 1
  },
  {
    question: 'Yếu tố tạo nên lực dính giữa bê tông và cốt thép là:',
    options: [
      'a. Lực ma sát giữa bê tông và cốt thép do bê tông co ngót khi khô rắn',
      'b. Khi sử dụng thép có gờ, phần bê tông nằm dưới các gờ cốt thép chống lại sự trượt của cốt thép',
      'c. Lực dán tạo bởi keo xi măng giữa bê tông và cốt thép',
      'd. Tất cả các yếu tố nêu trên',
    ],
    correct: 3
  },
  {
    question: 'Chiều dày lớp bê tông bảo vệ của cốt thép chịu lực trong cấu kiện bê tông cốt thép cần phải đáp ứng yêu cầu:',
    options: [
      'a. Đảm bảo sự làm việc đồng thời của cốt thép và bê tông; Đảm bảo sự neo của cốt thép vào bê tông và khả năng bố trí các mối nối của các chi tiết cốt thép',
      'b. Đảm bảo tính toàn vẹn của cốt thép dưới các tác động của môi trường xung quanh (kể cả môi trường xâm thực)',
      'c. Đảm bảo khả năng chịu lửa của kết cấu',
      'd. Tất cả các yêu cầu nêu trên',
    ],
    correct: 3
  },
  {
    question: 'Các loại hệ số độ tin cậy bao gồm các hệ số nào dưới đây?',
    options: [
      'a. Hệ số độ tin cậy về tải trọng',
      'b. Hệ số độ tin cậy về vật liệu và hệ số điều kiện làm việc',
      'c. Hệ số độ tin cậy về tầm quan trọng của công trình',
      'd. Tất cả các hệ số nêu tại mục a, b, và c',
    ],
    correct: 3
  },
  {
    question: 'Hàm lượng cốt thép là gì?',
    options: [
      'a. Tỉ số giữa diện tích tiết diện cốt thép và diện tích làm việc của tiết diện bê tông, tính bằng phần trăm',
      'b. Tỉ số giữa diện tích tiết diện cốt thép và diện tích hình học của toàn bộ mặt cắt tiết diện của cấu kiện bê tông, tính bằng phần trăm',
      'c. Tỉ số giữa diện tích hình học của toàn bộ mặt cắt tiết diện của cấu kiện bê tông trên diện tích tiết diện cốt thép, tính bằng phần trăm',
      'd. Là diện tích tiết diện cốt thép đặt trong tiết diện của bê tông, tính bằng milimet vuông (mm2)',
    ],
    correct: 0
  },
  {
    question: 'Chiều dày lớp bảo vệ bê tông cốt thép:',
    options: [
      'a. Là chiều dày lớp bê tông tính từ trọng tâm cấu kiện đến bề mặt gần nhất của thanh cốt thép',
      'b. Là chiều dày lớp bê tông tính từ biên (mép) cấu kiện đến bề mặt gần nhất của thanh cốt thép',
      'c. Là chiều dày lớp bê tông tính từ trọng tâm cấu kiện đến bề mặt xa nhất của thanh cốt thép',
      'd. Là chiều dày lớp bê tông tính từ biên (mép) cấu kiện đến trọng tâm gần nhất của thanh cốt thép',
    ],
    correct: 1
  },
  {
    question: 'Tính toán theo các trạng thái giới hạn thứ nhất bao gồm những yếu tố nào?',
    options: [
      'a. Tính toán độ bền và tính toán ổn định hình dạng (đối với kết cấu thành mỏng)',
      'b. Tính toán độ bền và tính toán ổn định ví trí (lật, trượt, đẩy nổi)',
      'c. Tính toán ổn định hình dạng (đối với kết cấu thành mỏng) và tính toán ổn định ví trí (lật, trượt, đẩy nổi)',
      'd. Tính toán độ bền, tính toán ổn định hình dạng (đối với kết cấu thành mỏng), và tính toán ổn định ví trí (lật, trượt, đẩy nổi)',
    ],
    correct: 3
  },
  {
    question: 'Tính toán theo các trạng thái giới hạn thứ hai bao gồm những yếu tố nào?',
    options: [
      'a. Tính toán hình thành vết nứt',
      'b. Tính toán mở rộng vết nứt',
      'c. Tính toán biến dạng',
      'd. Tất cả các nội dung nêu tại mục a, b, và c',
    ],
    correct: 3
  },
  {
    question: 'Tính toán kết cấu bê tông và bê tông cốt thép được tiến hành dưới tác dụng của những yếu tố nào?',
    options: [
      'a. Mô men uốn',
      'b. Lực dọc',
      'c. Lực cắt và mô men xoắn',
      'd. Mô men uốn, lực dọc, lực cắt và mô men xoắn, cũng như dưới tác dụng cục bộ của tải trọng',
    ],
    correct: 3
  },
  {
    question: 'Tính toán cấu kiện bê tông cốt thép theo nội lực giới hạn cần được tiến hành với các nội lực giới hạn mà bê tông và cốt thép có thể chịu được, dựa trên các giả thiết nào?',
    options: [
      'a. Cường độ chịu kéo của bê tông lấy bằng Không',
      'b. Cường độ chịu nén của bê tông lấy bằng ứng suất có giá trị bằng cường độ chịu nén tính toán của bê tông và được phân bố đều trên vùng chịu nén quy ước của bê tông',
      'c. Ứng suất kéo và nén trong cốt thép lấy không lớn hơn cường độ chịu kéo tính toán và chịu nén tính toán tương ứng',
      'd. Tất cả các nội dung nêu tại mục a, b, và c',
    ],
    correct: 3
  },
  {
    question: 'Tính toán cấu kiện bê tông cốt thép theo độ bền các tiết diện nghiêng được tiến hành theo các yếu tố nào?',
    options: [
      'a. Theo tiết diện nghiêng chịu tác dụng của lực cắt',
      'b. Theo tiết diện nghiêng chịu tác dụng của mô men uốn',
      'c. Theo dải bê tông giữa các tiết diện nghiêng chịu tác dụng của lực cắt',
      'd. Theo tiết diện nghiêng chịu tác dụng của lực cắt, theo tiết diện nghiêng chịu tác dụng của mô men uốn và theo dải bê tông giữa các tiết diện nghiêng chịu tác dụng của lực cắt',
    ],
    correct: 3
  },
  {
    question: 'Tính toán theo sự hình thành các vết nứt thẳng góc của các cấu kiện bê tông cốt thép theo?',
    options: [
      'a. Mô hình biến dạng phi tuyến được tiến hành dựa trên các biểu đồ biến dạng của cốt thép',
      'b. Mô hình biến dạng phi tuyến được tiến hành dựa trên các biểu đồ biến dạng của bê tông chịu kéo và bê tông chịu nén',
      'c. Dựa trên giả thiết tiết diện phẳng',
      'd. Mô hình biến dạng phi tuyến được tiến hành dựa trên các biểu đồ biến dạng của cốt thép, của bê tông chịu kéo và bê tông chịu nén, và dựa trên giả thiết tiết diện phẳng.',
    ],
    correct: 3
  },
  {
    question: 'Yêu cầu chung đối với tính toán cấu kiện bê tông cốt thép không ứng suất trước theo độ bền?',
    options: [
      'a. Được tính toán dưới tác dụng của mô men uốn',
      'b. Được tính toán dưới tác dụng của lực dọc và lực cắt',
      'c. Được tính toán dưới tác dụng của mô men xoắn và chịu tác dụng của tải trọng cục bộ (nén cục bộ, chọc thủng)',
      'd. Tất cả các nội dung ở mục a, b, và c',
    ],
    correct: 3
  },
  {
    question: 'Công trình không phải thiết kế chịu động đất nếu được xây dựng trong vùng có gia tốc nền thiết kế không vượt quá (g là gia tốc trọng trường):',
    options: [
      'a. 0,01g',
      'b. 0,03g',
      'c. 0,04g',
      'd. 0,06g',
    ],
    correct: 2
  },
  {
    question: 'Để đảm bảo cấu kiện BTCT chịu uốn không bị phá hoại giòn, cần phải có biện pháp',
    options: [
      'a. Hạn chế vùng nén của tiết diện bê tông',
      'b. Tăng diện tích cốt thép dọc',
      'c. Giảm lượng cốt đai',
      'd. Cả ba phương án trên đều đúng',
    ],
    correct: 0
  },
  {
    question: 'Khi tính tải trọng gió cho công trình cao, tác động của thành phần động của tải trọng gió lên kết cấu phụ thuộc chính vào?',
    options: [
      'a. Tổng trọng lượng công trình',
      'b. Chu kỳ dao động riêng thứ nhất, T1, của công trình',
      'c. Tổng chiều cao công trình',
      'd. Hệ số khí động của công trình',
    ],
    correct: 1
  },
  {
    question: 'Tổ hợp tải trọng cơ bản để tính kết cấu bao gồm',
    options: [
      'a. Tải trọng thường xuyên;',
      'b. Tải trọng thường xuyên và một tải trọng tạm thời',
      'c. Tải trọng thường xuyên và các tải trọng tạm thời được nhân với 0,9',
      'd. Cả ba phương án trên đều không đúng',
    ],
    correct: 3
  },
  {
    question: 'Thép dùng làm kết cấu chịu lực phải là loại thép nào theo TCVN dưới đây',
    options: [
      'a. CT38',
      'b. BCT38',
      'c. CCT38',
      'd. CT42s',
    ],
    correct: 2
  },
  {
    question: 'Thanh giàn thép có tiết diện gồm 2 thép góc ghép cánh dài. Thanh này sử dụng hợp lí ở trường hợp nào',
    options: [
      'a. Thanh cánh trên',
      'b. Thanh cánh dưới',
      'c. Thanh đứng',
      'd. Thanh xiên đầu giàn',
    ],
    correct: 3
  },
  {
    question: 'Khi thiết kế dầm thép chữ I chịu uốn, mô đun chống uốn dẻo tính bằng mô đun chống uốn đàn hồi nhân với hệ số:',
    options: [
      'a. 0,9',
      'b. 1,0',
      'c. 1,1',
      'd. 1,5',
    ],
    correct: 2
  },
  {
    question: 'Nhà xây gạch có sơ đồ chịu lực cứng là khi có:',
    options: [
      'a. Sàn BTCT toàn khối',
      'b. Sàn BTCT lắp ghép',
      'c. Tường dọc chịu lực',
      'd. Tường ngang chịu lực',
    ],
    correct: 3
  },
  {
    question: 'Khi tính sàn có diện tích lớn, hoạt tải sử dụng có thể được giảm đi bằng hệ số. Hệ số này chỉ phụ thuộc vào:',
    options: [
      'a. Độ cao của sàn trong ngôi nhà',
      'b. Diện tích của sàn',
      'c. Loại phòng sử dụng',
      'd. Diện tích của sàn và loại phòng sử dụng',
    ],
    correct: 3
  },
  {
    question: 'Đối với nhà nhiều tầng, để tính lực nén trong cột, tường, hoạt tải sử dụng trên các sàn có thể được giảm đi bằng hệ số. Hệ số này chỉ phụ thuộc vào:',
    options: [
      'a. Độ cao của ngôi nhà',
      'b. Diện tích của sàn',
      'c. Loại phòng sử dụng',
      'd. Cả ba phương án trên đều không đúng',
    ],
    correct: 3
  },
  {
    question: 'Sức chịu tải của đất chỉ phụ thuộc vào:',
    options: [
      'a. Độ sâu đặt móng và lực dính của đất',
      'b. Độ sâu đặt móng, góc ma sát trong và lực dính của đất',
      'c. Độ sâu đặt móng, và góc ma sát trong của đất',
      'd. Cả ba đều không đúng',
    ],
    correct: 3
  },
  {
    question: 'Khi bố trí cốt thép chịu mômen âm cho dầm khung, theo kinh nghiệm không cần tính toán thì chiều dài của cốt thép này kéo dài khỏi cột bao nhiêu là hợp lí (L là nhịp dầm)',
    options: [
      'a. 0,2L',
      'b. 0,25L',
      'c. 0,3L',
      'd. 0,4L',
    ],
    correct: 1
  },
  {
    question: 'Bản BTCT kê 4 cạnh được tính theo khớp dẻo thì mômen uốn được xác định như sau',
    options: [
      'a. Giả thiết giá trị mômen tại gối rồi tính toán tiếp',
      'b. Giả thiết giá trị mômen tại nhịp rồi tính toán tiếp',
      'c. Giả thiết tỉ lệ các mômen gối rồi tính toán tiếp',
      'd. Tra bảng lập sẵn',
    ],
    correct: 2
  },
  {
    question: 'Chiều cao của bản móng BTCT được quyết định chủ yếu bởi',
    options: [
      'a. Điều kiện địa chất',
      'b. Điều kiện chịu cắt',
      'c. Điều kiện chịu uốn',
      'd. Điều kiện chọc thủng',
    ],
    correct: 3
  },
  {
    question: 'Trong dầm BTCT có chiều cao tiết diện là h, phải đặt thêm các cốt thép dọc phụ ở giữa chiều cao tiết diện khi h:',
    options: [
      'a. ≥ 40 cm.',
      'b. ≥ 50 cm.',
      'c. ≥ 60 cm.',
      'd. ≥ 70cm.',
    ],
    correct: 3
  },
  {
    question: 'Cột gạch được gia cố bằng các lưới thép đặt trong các mạch vữa. Cường độ của khối xây có cốt thép tăng tối đa bao nhiêu lần so với khối xây không cốt thép',
    options: [
      'a. 2 lần',
      'b. 1,5 lần',
      'c. 1,2 lần',
      'd. 2,5 lần',
    ],
    correct: 0
  },
  {
    question: 'Bulông cường độ cao 8.8 được làm từ thép có các tính năng',
    options: [
      'a. Giới hạn chảy 800Mpa, giới hạn bền 800Mpa',
      'b. Giới hạn chảy 800Mpa, giới hạn bền 600Mpa',
      'c. Giới hạn chảy 640Mpa, giới hạn bền 800Mpa',
      'd. Giới hạn chảy 600Mpa, giới hạn bền 800Mpa',
    ],
    correct: 2
  },
  {
    question: 'Cột thép chịu nén đúng tâm, tiết diện tổ hợp gồm hai nhánh và các thanh giằng. Các thanh giằng được tính toán theo',
    options: [
      'a. Lực nén trong cột',
      'b. Lực nén trong mỗi nhánh cột',
      'c. Lực cắt thực tế',
      'd. Lực cắt quy ước',
    ],
    correct: 3
  },
  {
    question: 'Móng cột BTCT của khung nên bố trí như thế nào:',
    options: [
      'a. Hình vuông',
      'b. Hình chữ nhật cạnh dài trong mặt phẳng khung',
      'c. Hình chữ nhật có cạnh ngắn trong mặt phẳng khung',
      'd. Cả ba cách đều được',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế cột thép tiết diện hình chữ H, độ mảnh để tính toán ổn định của cột được lấy bằng:',
    options: [
      'a. Tỉ số chiều dài thực của cột trên bán kính quán tính trung bình của tiết diện cột',
      'b. Tỉ số chiều dài tính toán của cột trên bán kính quán tính trung bình của tiết diện cột',
      'c. Tỉ số chiều dài thực của cột trên bán kính quán tính lớn nhất của tiết diện cột',
      'd. Tỉ số chiều dài tính toán của cột trên bán kính quán tính nhỏ nhất của tiết diện cột',
    ],
    correct: 3
  },
  {
    question: 'Cột thép chịu nén đúng tâm hai đầu liên kết khớp, cao 6m, tiết diện chữ H có các bán kính quán tính theo hai trục chính là 8,3cm và 6,55cm. Độ mảnh dùng để tính toán ổn định cột xấp xỉ là',
    options: [
      'a. 72,3',
      'b. 72,5',
      'c. 120,7',
      'd. 91,6',
    ],
    correct: 3
  },
  {
    question: 'Đối với thép kết cấu, tính năng cơ học quan trọng nhất để tính toán thiết kế là:',
    options: [
      'a. Giới hạn chảy',
      'b. Giới hạn bền',
      'c. Độ dãn dẻo',
      'd. Mô đun đàn hồi',
    ],
    correct: 0
  },
  {
    question: 'Loại thép nào dưới đây được coi như thép cacbon thấp',
    options: [
      'a. CT5 (theo GOST)',
      'b. BCT4 (theo GOST)',
      'c. CT38 (theo TCVN)',
      'd. CT42 (theo TCVN)',
    ],
    correct: 2
  },
  {
    question: 'Khi biểu đồ mômen uốn trong một thanh có dạng parabôn bậc hai thì biểu đồ lực cắt có dạng:',
    options: [
      'a. Dạng parabôn.',
      'b. Dạng hằng số.',
      'c. Dạng bậc nhất.',
      'd. Cả ba phương án trên đều không đúng.',
    ],
    correct: 2
  },
  {
    question: 'Độ lún cho phép của móng nhà khung BTCT là:',
    options: [
      'a. 3cm',
      'b. 4cm',
      'c. 6cm',
      'd. 8cm',
    ],
    correct: 3
  },
  {
    question: 'Bêtông cấp độ bền B15 tương đương với mác bêtông nào dưới đây:',
    options: [
      'a. M100',
      'b. M150',
      'c. M200',
      'd. M250',
    ],
    correct: 2
  },
  {
    question: 'Mác bêtông M250 tương đương với cấp độ bền nào dưới đây:',
    options: [
      'a. B10',
      'b. B15',
      'c. B20',
      'd. B25',
    ],
    correct: 2
  },
  {
    question: 'Cốt thép CII tương đương với loại thép nào dưới đây:',
    options: [
      'a. CT3',
      'b. CT5',
      'c. CT34',
      'd. CT38',
    ],
    correct: 1
  },
  {
    question: 'Bản sàn BTCT kích thước 4m x 7m đặt trên tường theo chu vi làm việc theo sơ đồ nào dưới đây:',
    options: [
      'a. Bản kiểu dầm',
      'b. Bản làm việc 1 phương',
      'c. Bản làm việc 2 phương',
      'd. Bản công xôn',
    ],
    correct: 2
  },
  {
    question: 'Cốt thép đai của dầm BTCT được xác định theo:',
    options: [
      'a. Giá trị của lực cắt',
      'b. Giá trị của mômen',
      'c. Giá trị của cả mômen và lực cắt',
      'd. Đường kính của cốt dọc',
    ],
    correct: 0
  },
  {
    question: 'Cường độ chịu nén của khối xây gạch phụ thuộc chủ yếu vào',
    options: [
      'a. Cường độ của gạch',
      'b. Cường độ của vữa',
      'c. Cường độ của xi măng',
      'd. Bề dày của mạch vữa',
    ],
    correct: 0
  },
  {
    question: 'Trong cột BTCT có chiều cao tiết diện là h, phải đặt thêm các cốt thép dọc phụ ở giữa chiều cao tiết diện khi h:',
    options: [
      'a. ≥ 40 cm.',
      'b. ≥ 50 cm.',
      'c. ≥ 60 cm.',
      'd. ≥ 70cm.',
    ],
    correct: 1
  },
  {
    question: 'Hệ số khí động để tính tải trọng gió tác động lên công trình phụ thuộc vào',
    options: [
      'a. Độ cao của công trình',
      'b. Hình dạng của công trình',
      'c. Địa hình chung quanh công trình',
      'd. Cả ba điều đều không đúng',
    ],
    correct: 1
  },
  {
    question: 'Trong bản sàn BTCT kê bốn cạnh chịu lực hai phương, cốt thép ở nhịp theo phương ngắn phải đặt như thế nào so với cốt thép theo phương dài:',
    options: [
      'a. Đặt trên',
      'b. Đặt dưới',
      'c. Đặt thế nào cũng được',
      'd. Cả ba cách đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Hệ số vượt tải của tải trọng gió so với hệ số vượt tải của hoạt tải là:',
    options: [
      'a. Bằng nhau',
      'b. Của tải trọng gió lớn hơn',
      'c. Của hoạt tải lớn hơn',
      'd. Tùy trường hợp',
    ],
    correct: 3
  },
  {
    question: 'Khoảng cách cốt đai của cột BTCT phải lấy theo:',
    options: [
      'a. Số lượng cốt dọc',
      'b. Đường kính cốt dọc',
      'c. Đường kính cốt đai',
      'd. Cả ba phương pháp đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Khoảng cách cốt chịu lực của bản BTCT dày 120mm không được vượt quá',
    options: [
      'a. 150mm',
      'b. 200mm',
      'c. 250mm',
      'd. Cả ba phương pháp đều không đúng',
    ],
    correct: 1
  },
  {
    question: 'Mối hàn góc thủ công có bề dày h. Bề dày tính toán để kiểm tra độ bền mối hàn được lấy là ?',
    options: [
      'a. 1,0h',
      'b. 0,7h',
      'c. 0, 5h',
      'd. 0,8h',
    ],
    correct: 1
  },
  {
    question: 'Mối hàn góc thủ công có bề dày h. Khi kiểm tra cường độ thép cơ bản sát mối hàn thì dùng bề dày tính toán thế nào ?',
    options: [
      'a. 0,7h',
      'b. 0,8h',
      'c. 0,9h',
      'd. 1,0h',
    ],
    correct: 3
  },
  {
    question: 'Đối với dầm thép chịu uốn thì đặc trưng hình học của tiết diện quan trọng nhất ảnh hưởng đến độ bền là:',
    options: [
      'a. Diện tích',
      'b. Mômen quán tính',
      'c. Mô đun chống uốn',
      'd. Bán kính quán tính',
    ],
    correct: 2
  },
];
