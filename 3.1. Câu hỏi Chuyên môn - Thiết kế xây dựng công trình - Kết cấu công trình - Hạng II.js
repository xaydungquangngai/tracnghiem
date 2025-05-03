const questions = [
  {
    question: 'Giá trị tính toán của tải trọng được xác định:',
    options: [
      'a. bằng tích của giá trị tiêu chuẩn của tải trọng với hệ số độ tin cậy về tải trọng ứng với trạng thái giới hạn đang xét.',
      'b. bằng thương của giá trị tiêu chuẩn của tải trọng với hệ số độ tin cậy về tải trọng ứng với trạng thái giới hạn đang xét.',
      'c. bằng tích của giá trị tiêu chuẩn của tải trọng với hệ số độ tin cậy về vật liệu ứng với trạng thái giới hạn đang xét.',
      'd. bằng tích của giá trị tiêu chuẩn của tải trọng với hệ số tầm quan trọng công trình ứng với trạng thái giới hạn đang xét',
    ],
    correct: 0
  },
  {
    question: 'Hệ số hiệu ứng giật G_f là gì?',
    options: [
      'a. là hệ số phản ứng của kết cấu dưới tác dụng của tải trọng động đất.',
      'b. là hệ số phản ứng của kết cấu dưới tác dụng của tải trọng gió.',
      'c. là hệ số phản ứng của kết cấu dưới tác dụng của tải trọng cầu trục.',
      'd. là hệ số phản ứng của kết cấu dưới tác dụng của hoạt tải.',
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
    question: 'Thanh thẳng chịu tải trọng phân bố dạng bậc nhất (hình tam giác) tác dụng vuông góc với trục thanh trên toàn bộ thanh, biểu đồ lực cắt tương ứng với đoạn tải trọng có dạng:',
    options: [
      'a. Đường thẳng',
      'b. Đường cong bậc 2',
      'c. Đường cong bậc 3',
      'd. Cả ba đều không đúng',
    ],
    correct: 1
  },
  {
    question: 'Thanh thẳng chịu tải trọng phân bố dạng bậc nhất (hình tam giác) tác dụng vuông góc với trục thanh trên toàn bộ thanh, biểu đồ mômen tương ứng với đoạn tải trọng có dạng:',
    options: [
      'a. Đường thẳng',
      'b. Đường cong bậc 2',
      'c. Đường cong bậc 3',
      'd. Cả ba đều không đúng',
    ],
    correct: 2
  },
  {
    question: 'Theo TCVN nước ta được chia làm mấy vùng áp lực gió?',
    options: [
      'a. 3 vùng',
      'b. 4 vùng',
      'c. 5 vùng',
      'd. 6 vùng',
    ],
    correct: 2
  },
  {
    question: 'Trong các ký hiệu của đại lượng sau, ký hiệu nào là cường độ tiêu chuẩn (theo TCVN)?',
    options: [
      'a. f',
      'b. f_y',
      'c. f_x',
      'd. f_u',
    ],
    correct: 1
  },
  {
    question: 'Các kết cấu hàn làm việc trong điều kiện nặng hoặc kết cấu thép trực tiếp chịu tải trọng động lực thì không sử dụng loại thép nào dưới đây?',
    options: [
      'a. CT34',
      'b. CT38n',
      'c. CCT38',
      'd. CT38s',
    ],
    correct: 3
  },
  {
    question: 'Phá hoại giòn của kết cấu thép là:',
    options: [
      'a. Phá hoại ở biến dạng nhỏ, không có vết nứt, vật liệu làm việc trong giai đoạn dẻo.',
      'b. Phá hoại ở biến dạng nhỏ, kèm theo vết nứt, vật liệu làm việc trong giai đoạn đàn hồi.',
      'c. Phá hoại với biến dạng lớn, vật liệu làm việc trong giai đoạn đàn hồi.',
      'd. Phá hoại với biến dạng lớn, vật liệu làm việc trong giai đoạn dẻo.',
    ],
    correct: 1
  },
  {
    question: 'Hệ số uốn dọc (φ) sử dụng khi tính ổn định của thanh chịu nén đúng tâm phụ thuộc vào yếu tố nào?',
    options: [
      'a. Độ mảnh của thanh và môđun đàn hồi của thép',
      'b. Độ mảnh của thanh và cường độ tính toán của thép',
      'c. Độ mảnh của thanh và giới hạn bền của thép',
      'd. Độ mảnh của thanh và độ giãn dài của thép',
    ],
    correct: 1
  },
  {
    question: 'Sử dụng đường hàn đối đầu để liên kết kết cấu thép trong trường hợp nào?',
    options: [
      'a. liên kết trực tiếp hai cấu kiện nằm vuông góc',
      'b. liên kết trực tiếp hai cấu kiện nằm khác mặt phẳng',
      'c. liên kết gián tiếp hai cấu kiện cùng nằm trong một mặt phẳng',
      'd. liên kết trực tiếp hai cấu kiện cùng nằm trong một mặt phẳng',
    ],
    correct: 3
  },
  {
    question: 'Đường hàn góc cạnh là gì?',
    options: [
      'a. là đường hàn góc có phương vuông góc với phương của lực tác dụng',
      'b. là đường hàn góc có phương xiên góc với phương của lực tác dụng',
      'c. là đường hàn góc có phương song song với phương của lực tác dụng',
      'd. không có phương án nào đúng',
    ],
    correct: 2
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
    question: 'Bulông cường độ cao có cấp bền 8.8, có ý nghĩa là gì?',
    options: [
      'a. giới hạn bền f_u=80 daN⁄(mm^2 ), giới hạn chảy f_y=80 daN⁄(mm^2 )',
      'b. giới hạn bền f_u=64 daN⁄(mm^2 ), giới hạn chảy f_y=80 daN⁄(mm^2 )',
      'c. giới hạn bền f_u=80 daN⁄(cm^2 ), giới hạn chảy f_y=64 daN⁄(cm^2 )',
      'd. giới hạn bền f_u=80 daN⁄(mm^2 ), giới hạn chảy f_y=64 daN⁄(mm^2 )',
    ],
    correct: 3
  },
  {
    question: 'Cho dầm thép đơn giản, có tiết diện không đổi, tựa trên hai gối, chịu tải trọng phân bố đều trên toàn dầm, ứng suất pháp lớn nhất tại vị trí nào?',
    options: [
      'a. Tại hai đầu dầm',
      'b. Tại vị trí giữa dầm',
      'c. Tại vị trí 1/3 nhịp dầm',
      'd. Tại vị trí 1/4 nhịp dầm',
    ],
    correct: 1
  },
  {
    question: 'Cho dầm thép đơn giản, có tiết diện không đổi, tựa trên hai gối, chịu tải trọng phân bố đều trên toàn dầm, ứng suất tiếp lớn nhất tại vị trí nào?',
    options: [
      'a. Tại hai đầu dầm',
      'b. Tại vị trí giữa dầm',
      'c. Tại vị trí 1/3 nhịp dầm',
      'd. Tại vị trí 1/4 nhịp dầm',
    ],
    correct: 0
  },
  {
    question: 'Trong dầm thép tổ hợp chữ I, các kích thước của tiết diện cánh dầm xác định từ điều kiện nào?',
    options: [
      'a. điều kiện bền chịu cắt của tiết diện',
      'b. điều kiện bền chịu uốn của tiết diện',
      'c. điều kiện ổn định bản mỏng',
      'd. Phương án a và c',
    ],
    correct: 1
  },
  {
    question: 'Khi dầm thép tổ hợp chữ I có nhịp lớn, cần thay đổi tiết diện dầm để làm gì?',
    options: [
      'a. tăng khả năng ổn định dầm',
      'b. phù hợp với biểu đồ lực cắt',
      'c. tiết kiệm vật liệu thép',
      'd. Phương án a và b',
    ],
    correct: 2
  },
  {
    question: 'Đối với dầm thép chịu uốn thì đặc trưng hình học nào của tiết diện, quan trọng nhất ảnh hưởng đến độ bền chịu uốn?',
    options: [
      'a. Diện tích',
      'b. Mômen quán tính',
      'c. Mô đun chống uốn',
      'd. Mômen tĩnh',
    ],
    correct: 2
  },
  {
    question: 'Đối với dầm thép chịu uốn thì đặc trưng hình học nào của tiết diện, quan trọng nhất ảnh hưởng đến độ võng?',
    options: [
      'a. Diện tích',
      'b. Mômen quán tính',
      'c. Mô đun chống uốn',
      'd. Mômen quán tính tĩnh',
    ],
    correct: 1
  },
  {
    question: 'Độ mảnh của cột thép phụ thuộc vào:',
    options: [
      'a. Chiều cao tính toán và mômen quán tính tiết diện.',
      'b. Chiều cao tính toán và bán kính quán tính tiết diện.',
      'c. Chiều cao tính toán và môđun chống uốn tiết diện.',
      'd. Chiều cao tính toán và diện tích tiết diện.',
    ],
    correct: 1
  },
  {
    question: 'Cột thép rỗng tiết diện tổ hợp từ hai nhánh và các thanh giằng, chịu nén đúng tâm. Các thanh giằng được tính toán bởi lực nào?',
    options: [
      'a. Lực nén trong cột.',
      'b. Lực nén trong mỗi nhánh cột.',
      'c. Lực cắt thực tế..',
      'd. Lực cắt quy ước',
    ],
    correct: 3
  },
  {
    question: 'Loại thép nào dưới đây có hàm lượng cacbon thấp nhất?',
    options: [
      'a. CT5 (theo GOST).',
      'b. BCT4 (theo GOST).',
      'c. CT38 (theo TCVN).',
      'd. CT42 (theo TCVN).',
    ],
    correct: 0
  },
  {
    question: 'Mô đun đàn hồi (E) của thép cacbon thông thường bằng bao nhiêu?',
    options: [
      'a. E=(2,1×10)^6 MPa',
      'b. E=(2,1×10)^5 MPa',
      'c. E=2,1×10^6 kG/cm2',
      'd. E=2,1×10^5 kG/cm2',
    ],
    correct: 2
  },
  {
    question: 'Theo TCVN, chuyển vị ngang ở mức mép mái của nhà công nghiệp kiểu khung một tầng, không cầu trục, khi tường bằng tấm tôn kim loại, gây bởi tải trọng gió tiêu chuẩn được giới hạn bao nhiêu?',
    options: [
      'a. H/300.',
      'b. H/240.',
      'c. H/100.',
      'd. H/80. với H là chiều cao cột.',
    ],
    correct: 2
  },
  {
    question: 'Theo TCVN, chuyển vị ngang ở mức mép mái của nhà công nghiệp kiểu khung một tầng, không cầu trục, khi tường bằng gạch hoặc bê tông, gây bởi tải trọng gió tiêu chuẩn được giới hạn bao nhiêu?',
    options: [
      'a. H/300.',
      'b. H/240.',
      'c. H/100.',
      'd. H/80. với H là chiều cao cột.',
    ],
    correct: 1
  },
  {
    question: 'Theo TCVN, độ võng cho phép của dầm chính chịu uốn trong sàn nhà và mái bằng bao nhiêu?',
    options: [
      'a. L/400.',
      'b. L/350.',
      'c. L/250.',
      'd. L/150. với L là nhịp dầm.',
    ],
    correct: 0
  },
  {
    question: 'Trong TCVN 2737, vận tốc gió cơ sở là vận tốc được đo ở độ cao 10 m so với mốc chuẩn, tương ứng với địa hình dạng B và:',
    options: [
      'a. Được lấy trung bình trong khoảng thời gian 3s, chu kỳ lặp 10 năm (bị vượt trung bình một lần trong khoảng thời gian 10 năm)',
      'b. Được lấy trung bình trong khoảng thời gian 3s, chu kỳ lặp 20 năm',
      'c. Được lấy trung bình trong khoảng thời gian 10 phút, chu kỳ lặp 10 năm',
      'd. Được lấy trung bình trong khoảng thời gian 10 phút, chu kỳ lặp 20 năm',
    ],
    correct: 1
  },
  {
    question: 'Hệ số khi động để tính tải trọng gió tác động lên công trình phụ thuộc vào',
    options: [
      'a. Độ cao của công trình',
      'b. Hình dạng của công trình',
      'c. Địa hình chung quanh công trình',
      'd. Cả ba điều đều không đúng',
    ],
    correct: 1
  },
  {
    question: 'Cho phép đặt 1 thanh cốt thép dọc chịu lực trong tiết diện ngang trong dầm có chiều rộng nhỏ hơn:',
    options: [
      'a. 110 mm',
      'b. 120 mm',
      'c. 150 mm',
      'd. Không được phép áp dụng.',
    ],
    correct: 2
  },
  {
    question: 'Lớp bê tông bảo vệ ngoài việc đảm bảo Tính toàn vẹn của cốt thép dưới các tác động của môi trường xung quanh (kể cả môi trường xâm thực) cần phải đảm bảo được:',
    options: [
      'a. Sự làm việc đồng thời của cốt thép với bê tông;',
      'b. Sự neo cốt thép trong bê tông và khả năng bố trí các mối nối của các chi tiết cốt thép;',
      'c. Khả năng chịu lửa của kết cấu.',
      'd. Tất cả các phương án trên',
    ],
    correct: 3
  },
  {
    question: 'Chiều dày tối thiểu của lớp bê tông bảo vệ trong đất (khi không có các biện pháp bảo vệ bổ sung), trong móng khi có lớp bê tông lót là',
    options: [
      'a. 25',
      'b. 30',
      'c. 40',
      'd. 50',
    ],
    correct: 2
  },
  {
    question: 'Xét một dầm bê tông cốt thép có tiết diện chữ nhật với chiều cao 500 mm, cốt thép dọc chịu kéo là 2 28, chiều dày lớp bê tông bảo vệ là 30 mm. Chiều cao làm việc của tiết diện là:',
    options: [
      'a. 470 mm',
      'b. 442 mm',
      'c. 456 mm',
      'd. 465 mm',
    ],
    correct: 2
  },
  {
    question: 'Tải trọng nào sau đây được xếp vào loại tải trọng tạm thời dài hạn:',
    options: [
      'a. Trọng lượng của người, vật liệu sửa chữa trong khu vực bảo dưỡng và sửa chữa thiết bị',
      'b. Áp lực chất lỏng trong kết cấu chứa và đường ống dẫn',
      'c. Tải trọng do phương tiện giao thông',
      'd. Cả 3 phương án trên đều sai',
    ],
    correct: 1
  },
  {
    question: 'Tải trọng nào sau đây được xếp vào loại tải trọng tạm thời ngắn hạn:',
    options: [
      'a. Trọng lượng của người, vật liệu sửa chữa trong khu vực bảo dưỡng và sửa chữa thiết bị',
      'b. Tác động nhiệt công nghệ do thiết bị cố định',
      'c. Trọng lượng của các tường (vách) ngăn tạm thời',
      'd. Cả 3 phương án trên đều đúng',
    ],
    correct: 0
  },
  {
    question: 'Khi tính toán cấu kiện bê tông cốt thép theo độ bền trên tiết diện thẳng góc theo nội lực giới hạn:',
    options: [
      'a. Cường độ chịu kéo của bê tông lấy bằng cường độ chịu kéo tiêu chuẩn',
      'b. Cường độ chịu kéo của bê tông lấy bằng không',
      'c. Cường độ chịu kéo của bê tông lấy bằng cường độ chịu kéo tính toán theo trạng thái giới hạn thứ nhất',
      'd. Cường độ chịu kéo của bê tông lấy bằng cường độ chịu kéo tính toán theo trạng thái giới hạn thứ hai',
    ],
    correct: 1
  },
  {
    question: 'Tính toán kết cấu bê tông cốt thép theo các trạng thái giới hạn thứ nhất bao gồm:',
    options: [
      'a. Tính toán độ bền',
      'b. Tính toán độ bền, tính toán mở rộng vết nứt',
      'c. Tính toán độ bền, tính toán ổn định hình dạng, tính toán ổn định ví trí',
      'd. Tính toán độ bền, tính toán ổn định hình dạng, tính toán ổn định ví trí, tính toán hình thành vết nứt, tính toán mở rộng vết nứt',
    ],
    correct: 2
  },
  {
    question: 'Tính toán kết cấu bê tông cốt thép theo các trạng thái giới hạn thứ hai bao gồm:',
    options: [
      'a. Tính toán độ bền, tính toán ổn định',
      'b. Tính toán hình thành vết nứt, tính toán mở rộng vết nứt, tính toán biến dạng, tính toán độ bền, tính toán ổn định',
      'c. Tính toán hình thành vết nứt, tính toán mở rộng vết nứt, tính toán biến dạng, tính toán ổn định',
      'd. Tính toán hình thành vết nứt, tính toán mở rộng vết nứt, tính toán biến dạng',
    ],
    correct: 3
  },
  {
    question: 'Khi tính toán tải trọng gió tác dụng lên kết cấu có chu kỳ dao động riêng thứ nhất, T1, nhỏ hơn hoặc bằng 1s, hệ số hiệu ứng giật sẽ lấy:',
    options: [
      'a. Bằng 0,6',
      'b. Bằng 0,8',
      'c. Bằng 0,85',
      'd. Lớn hơn 0,85',
    ],
    correct: 2
  },
  {
    question: 'Tải trọng nào sau đây được xếp vào loại tải trọng đặc biệt:',
    options: [
      'a. Tải trọng do thiết bị phát sinh trong các quá trình khởi động, đóng máy, chuyển tiếp và thử máy',
      'b. Trọng lượng bụi tích tụ trong quá trình sản xuất, nếu không có biện pháp thích hợp làm sạch bụi tích tụ',
      'c. Tải trọng gây bởi cháy',
      'd. Cả 3 phương án trên đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Khi kiểm tra kết cấu về ổn định vị trí chống lật, cần tiến hành tính toán với hệ số độ tin cậy về tải trọng:',
    options: [
      'a. Bằng 1,2 đối với trọng lượng kết cấu hoặc bộ phận của kết cấu',
      'b. Bằng 1,1 đối với trọng lượng kết cấu hoặc bộ phận của kết cấu',
      'c. Bằng 1,0 đối với trọng lượng kết cấu hoặc bộ phận của kết cấu',
      'd. Bằng 0,9 đối với trọng lượng kết cấu hoặc bộ phận của kết cấu',
    ],
    correct: 3
  },
  {
    question: 'Mẫu lăng trụ chuẩn để xác định cường độ chịu nén tiêu chuẩn của bê tông có kích thước:',
    options: [
      'a. (150 × 150 × 150) mm',
      'b. (150 × 150 × 300) mm',
      'c. (150 × 150 × 600) mm',
      'd. Cả ba phương án trên đều sai',
    ],
    correct: 2
  },
  {
    question: 'Trong cấu kiện chịu nén lệch tâm của kết cấu siêu tĩnh, giá trị độ lệch tâm của lực dọc đối với trọng tâm của tiết diện được lấy bằng:',
    options: [
      'a. Tích của độ lệch tâm tĩnh học và độ lệch tâm ngẫu nhiên',
      'b. Độ lệch tâm tĩnh học, nhưng không lớn hơn độ lệch tâm ngẫu nhiên',
      'c. Độ lệch tâm tĩnh học, nhưng không nhỏ hơn độ lệch tâm ngẫu nhiên',
      'd. Tổng của độ lệch tâm tĩnh học và độ lệch tâm ngẫu nhiên',
    ],
    correct: 2
  },
  {
    question: 'Trong cấu kiện chịu nén lệch tâm của kết cấu tĩnh định, giá trị độ lệch tâm của lực dọc đối với trọng tâm của tiết diện được lấy bằng:',
    options: [
      'a. Tích của độ lệch tâm tĩnh học và độ lệch tâm ngẫu nhiên',
      'b. Độ lệch tâm tĩnh học, nhưng không lớn hơn độ lệch tâm ngẫu nhiên',
      'c. Độ lệch tâm tĩnh học, nhưng không nhỏ hơn độ lệch tâm ngẫu nhiên',
      'd. Tổng của độ lệch tâm tĩnh học và độ lệch tâm ngẫu nhiên',
    ],
    correct: 3
  },
  {
    question: 'Trong cấu kiện chịu nén lệch tâm, hiện tượng uốn dọc làm:',
    options: [
      'a. Tăng lực dọc tác dụng lên cấu kiện',
      'b. Giảm lực dọc tác dụng lên cấu kiện',
      'c. Tăng mô men uốn tác dụng lên cấu kiện',
      'd. Giảm mô men uốn tác dụng lên cấu kiện',
    ],
    correct: 2
  },
  {
    question: 'Để đảm bảo độ cứng của các cấu kiện bê tông cốt thép chịu nén lệch tâm thì kích thước tiết diện của chúng nên lấy sao cho độ mảnh của các cấu kiện này theo phương bất kỳ không vượt quá:',
    options: [
      'a. 120 đối với cột nhà, 200 đối với các cấu kiện bê tông cốt thép, 90 đối với các cấu kiện bê tông',
      'b. 90 đối với cột nhà, 120 đối với các cấu kiện bê tông cốt thép, 200 đối với các cấu kiện bê tông',
      'c. 200 đối với cột nhà, 90 đối với các cấu kiện bê tông cốt thép, 120 đối với các cấu kiện bê tông',
      'd. Cả ba phương án trên đều sai',
    ],
    correct: 0
  },
  {
    question: 'Trong dầm bê tông cốt thép cần kéo vào gối tựa các thanh cốt thép dọc chịu lực với diện tích tiết diện:',
    options: [
      'a. Không nhỏ hơn 1/2 diện tích tiết diện các thanh trong nhịp và không nhiều hơn 3 thanh',
      'b. Không nhỏ hơn 1/3 diện tích tiết diện các thanh trong nhịp và không nhiều hơn 3 thanh',
      'c. Không nhỏ hơn 1/2 diện tích tiết diện các thanh trong nhịp và không ít hơn 2 thanh',
      'd. Cả ba phương án trên đều sai',
    ],
    correct: 2
  },
  {
    question: 'Cấp hậu quả của công trình xây dựng:',
    options: [
      'a. Là đặc trưng phân cấp công trình phục vụ thiết kế xây dựng',
      'b. Phụ thuộc công năng và dạng kết cấu công trình',
      'c. Phụ thuộc vào thiệt hại về người, hậu quả về xã hội, môi trường và kinh tế khi kết cấu công trình bị hư hỏng hoặc phá hủy',
      'd. Tất cả các phương án trên đều đúng\\',
    ],
    correct: 3
  },
  {
    question: 'Độ bền lâu của công trình xây dựng là:',
    options: [
      'a. Khả năng của công trình xây dựng đáp ứng được các điều kiện đã quy định trong các tiêu chuẩn hoặc nhiệm vụ thiết kế, bao gồm cả bảo dưỡng (bảo trì), sửa chữa lớn và sửa chữa nhỏ trong suốt thời hạn sử dụng theo thiết kế',
      'b. Khả năng của công trình xây dựng chịu được tác động mà không bị phá hoại về cơ học',
      'c. Khả năng của công trình xây dựng bảo toàn được các tín chất độ bền, vật lý và các tính chất khác đã được quy định trong thiết kế và đảm bảo cho công trình xây dựng có thể được sử dụng bình thường trong suốt thời hạn sử dụng theo thiết kế',
      'd. Tất cả các phương án trên đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Yêu cầu về sử dụng, khai thác của kết cấu công trình xây dựng:',
    options: [
      'a. Đảm bảo điều kiện sử dụng bình thường của các thiết bị công nghệ, thiết bị nâng chuyển, các dụng cụ đo đạc và kiểm tra v.v..',
      'b. Đảm bảo sự toàn vẹn của các cấu kiện tiếp giáp với nhau và các mối nối của chúng, đảm bảo độ nghiêng quy định',
      'c. Ngăn ngừa các tác động có hại và tránh cho người dùng có cảm giác không thoải mái khi kết cấu dao động; không có ấn tượng tốt về hình dáng bên ngoài công trình và có cảm giác sợ nguy hiểm',
      'd. Tất cả các yếu tố trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Tải trọng thường xuyên là:',
    options: [
      'a. Tải trọng mà sự thay đổi độ lớn hoặc hướng của tải trọng phải được kể đến',
      'b. Tải trọng tồn tại trong suốt thời hạn sử dụng theo thiết kế của công trình xây dựng và sự thay đổi giá trị tính toán của tải trọng là rất nhỏ so với giá trị trung bình của tải trọng; hoặc là tải trọng mà sự thay đổi giá trị tính toán của tải trọng luôn đơn điệu theo một chiều đến khi đạt tới giá trị giới hạn',
      'c. Tải trọng mà sự thay đổi giá trị tính toán của tải trọng trong suốt thời gian sử dụng theo thiết kế của công trình xây dựng là rất nhỏ (đến mức có thể bỏ qua) so với giá trị trung bình của tải trọng',
      'd. Tải trọng mà thời hạn tác dụng của các giá trị tính toán của tải trọng nhỏ hơn đáng kể so với thời hạn sử dụng của công trình xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Phương pháp nội lực giới hạn có thể được áp dụng trong tính toán của cấu kiện bê tông cốt thép theo các trạng thái giới hạn thứ nhất khi:',
    options: [
      'a. Tính toán trên tiết diện thẳng góc của cấu kiện tiết diện chữ nhật',
      'b. Tính toán trên tiết diện thẳng góc của cấu kiện tiết diện chữ T',
      'c. Tính toán trên tiết diện nghiêng của cấu kiện',
      'd. Tất cả các phương án trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Chiều cao làm việc của tiết diện cấu kiện bê tông cốt thép là:',
    options: [
      'a. Khoảng cách từ biên chịu nén của tiết diện đến trọng tâm của cốt thép dọc chịu kéo',
      'b. Khoảng cách từ biên chịu kéo của tiết diện đến trọng tâm của cốt thép dọc chịu nén',
      'c. Khoảng cách từ biên chịu nén của tiết diện đến trọng tâm của cốt thép dọc chịu kéo hoặc chịu nén ít hơn',
      'd. Khoảng cách từ biên chịu kéo của tiết diện đến trọng tâm của cốt thép dọc chịu nén hoặc chịu kéo ít hơn',
    ],
    correct: 2
  },
  {
    question: 'Hệ số chuyển đổi về cường độ chịu nén của viên mẫu bê tông chuẩn từ kết quả thử cường độ trên mẫu trụ đường kính 150 mm và cao 300 mm là:',
    options: [
      'a. 0,85',
      'b. 1,0',
      'c. 1,2',
      'd. Cả ba phương án trên đều sai',
    ],
    correct: 2
  },
  {
    question: 'Mục đích dùng cốt thép hạn chế biến dạng ngang:',
    options: [
      'a. Cốt thép ngang dùng để gia cường các vị trí cần tăng độ bền',
      'b. Cốt thép ngang dùng để giảm khả năng chống nứt',
      'c. Cốt thép ngang dùng để gia cường các vị trí cần tăng độ bền, tăng khả năng chống nứt',
      'd. Cốt thép ngang dùng để gia cường các vị trí cần tăng độ bền, giảm khả năng chống nứt',
    ],
    correct: 2
  },
  {
    question: 'Lớp bê tông bảo vệ là gì?',
    options: [
      'a. Là lớp bê tông tính từ tâm cấu kiện đến bề mặt gần nhất của thanh cốt thép',
      'b. Là lớp bê tông tính từ biên (mép) cấu kiện đến tâm của thanh cốt thép',
      'c. Là lớp bê tông tính từ tâm cấu kiện đến tâm của thanh cốt thép',
      'd. Là lớp bê tông tính từ biên (mép) cấu kiện đến bề mặt gần nhất của thanh cốt thép',
    ],
    correct: 3
  },
  {
    question: 'Nội lực tới hạn là gì?',
    options: [
      'a. Nội lực nhỏ nhất mà cấu kiện, tiết diện của nó, với các đặc trưng đã chọn của vật liệu, có thể chịu được',
      'b. Nội lực lớn nhất mà cấu kiện, tiết diện của nó, với các đặc trưng đã chọn của vật liệu, có thể chịu được',
      'c. Nội lực trung bình mà cấu kiện, tiết diện của nó, với các đặc trưng đã chọn của vật liệu, có thể chịu được',
      'd. Tất cả các nội dung ở mục a, b, và c',
    ],
    correct: 1
  },
  {
    question: 'Tính toán cấu kiện bê tông cốt thép chịu nén (ép) cục bộ được tiến hành khi:',
    options: [
      'a. Có tác dụng của lực nén đặt trên một diện tích giới hạn, vuông góc với bề mặt cấu kiện bê tông cốt thép',
      'b. Có tác dụng của lực kéo đặt trên một diện tích giới hạn, vuông góc với bề mặt cấu kiện bê tông cốt thép',
      'c. Có tác dụng của lực cắt đặt trên một diện tích giới hạn, vuông góc với bề mặt cấu kiện bê tông cốt thép',
      'd. Tất cả các nội dung ở mục b và c',
    ],
    correct: 0
  },
  {
    question: 'Khi đặt lưới thép trong vùng nén cục bộ, cần kể đến cường độ nào?',
    options: [
      'a. Cần kể đến cường độ chịu kéo nâng cao bổ sung của bê tông nằm dưới diện chịu tải do cốt thép hạn chế biến dạng ngang',
      'b. Cần kể đến cường độ chịu nén nâng cao bổ sung của bê tông nằm ngoài diện chịu tải do cốt thép hạn chế biến dạng ngang',
      'c. Cần kể đến cường độ chịu nén nâng cao bổ sung của bê tông nằm dưới diện chịu tải do cốt thép hạn chế biến dạng ngang.',
      'd. Tất cả các nội dung ở mục a và b',
    ],
    correct: 2
  },
  {
    question: 'Khi tính toán chọc thủng, cần xét tiết diện tính toán nằm gần vùng truyền lực lên cấu kiện ở khoảng cách:',
    options: [
      'a. h0/2, vuông góc với trục dọc của nó, nơi có lực tiếp tuyến tác dụng lên bề mặt do lực tập trung và mô men uốn tập trung gây ra. Với h0 là chiều cao làm việc của tiết diện',
      'b. h0/3, vuông góc với trục dọc của nó, nơi có lực tiếp tuyến tác dụng lên bề mặt do lực tập trung và mô men uốn tập trung gây ra. Với h0 là chiều cao làm việc của tiết diện',
      'c. h0/4, vuông góc với trục dọc của nó, nơi có lực tiếp tuyến tác dụng lên bề mặt do lực tập trung và mô men uốn tập trung gây ra. Với h0 là chiều cao làm việc của tiết diện',
      'd. h0/5, vuông góc với trục dọc của nó, nơi có lực tiếp tuyến tác dụng lên bề mặt do lực tập trung và mô men uốn tập trung gây ra. Với h0 là chiều cao làm việc của tiết diện',
    ],
    correct: 0
  },
  {
    question: 'Yêu cầu tính toán cấu kiện ứng suất trước của các kết cấu bê tông cốt thép theo các trạng thái giới hạn thứ hai?',
    options: [
      'a. Tính toán theo sự hình thành vết nứt',
      'b. Tính toán theo sự mở rộng vết nứt',
      'c. Tính toán biến dạng',
      'd. Tất cả các nội dung ở mục a, b, và c',
    ],
    correct: 3
  },
  {
    question: 'Các yêu cầu cấu tạo để đảm bảo an toàn và sử dụng bình thường của kết cấu bê tông và bê tông cốt thép được quy định đối với các trường hợp khi:',
    options: [
      'a. Bằng tính toán chưa đảm bảo đủ chính xác và xác định hoàn toàn về khả năng kết cấu chịu được các tải trọng và tác động bên ngoài',
      'b. Các yêu cầu cấu tạo xác định được các điều kiện biên mà trong phạm vi đó có thể sử dụng các giả thiết tính toán đã lựa chọn',
      'c. Các yêu cầu cấu tạo đảm bảo cho việc thực hiện công nghệ chế tạo kết cấu bê tông và bê tông cốt thép',
      'd. Tất cả các nội dung ở mục a, b, và c',
    ],
    correct: 3
  },
  {
    question: 'Chiều dài neo cơ sở cần để truyền lực trong cốt thép với?',
    options: [
      'a. Chiều dài neo cơ sở cần để truyền lực trong cốt thép với 100% giá trị tính toán của cường độ chịu kéo của cốt thép vào bê tông',
      'b. Chiều dài neo cơ sở cần để truyền lực trong cốt thép với 75% giá trị tính toán của cường độ chịu kéo của cốt thép vào bê tông',
      'c. Chiều dài neo cơ sở cần để truyền lực trong cốt thép với 50% giá trị tính toán của cường độ chịu kéo của cốt thép vào bê tông',
      'd. Chiều dài neo cơ sở cần để truyền lực trong cốt thép với 25% giá trị tính toán của cường độ chịu kéo của cốt thép vào bê tông',
    ],
    correct: 0
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
      'a. Hạn chế vùng nén của tiết diện bêtông',
      'b. Tăng diện tích cốt thép dọc',
      'c. Giảm lượng cốt đai',
      'd. Cả ba phương án trên đều đúng',
    ],
    correct: 0
  },
  {
    question: 'Khi tính tải trọng gió cho công trình cao, thành phần động của tải trọng gió được xác định thế nào?',
    options: [
      'a. Bằng trọng lượng công trình nhân với một hệ số',
      'b. Bằng thành phần tĩnh của tải trọng gió nhân với một hệ số',
      'c. Tính theo sự dao động của công trình',
      'd. Tính theo hệ số khí động của công trình',
    ],
    correct: 2
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
    question: 'Thanh thẳng chịu tải trọng phân bố dạng bậc nhất (hình tam giác) tác dụng vuông góc với trục thanh trên toàn bộ chiều dài thanh, biểu đồ mômen uốn có dạng:',
    options: [
      'a. Đường thẳng',
      'b. Đường cong bậc 2',
      'c. Đường cong bậc 3',
      'd. Cả ba đêu không đúng',
    ],
    correct: 2
  },
  {
    question: 'Thanh thẳng chịu tải trọng phân bố dạng bậc nhất (hình tam giác) tác dụng xiên góc với trục thanh trên toàn bộ chiều dài thanh, biểu đồ lực cắt có dạng:',
    options: [
      'a. Đường thẳng',
      'b. Đường cong bậc 2',
      'c. Đường cong bậc 3',
      'd. Cả ba đêu không đúng',
    ],
    correct: 1
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
      'c. Giả thiết tỷ lệ các mômen gối rồi tính toán tiếp',
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
    question: 'Vùng áp lực gió của nước ta được chia làm:',
    options: [
      'a. 3 vùng',
      'b. 4 vùng',
      'c. 5 vùng',
      'd. 2 vùng',
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
    question: 'Trong bản sàn BTCT kê bốn cạnh chịu lực hai phương, cốt thép ở nhịp theo phương ngắn phải đặt như thế nào so với cốt thép theo phương dài',
    options: [
      'a. Đặt trên',
      'b. Đặt dưới',
      'c. Đặt thế nào cũng được',
      'd. Cả ba cách đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế kết cấu BTCT phải xét mấy loại trạng thái giới hạn (TTGH)',
    options: [
      'a. 1 TTGH',
      'b. 2 TTGH',
      'c. 3TTGH',
      'd. 4 TTGH',
    ],
    correct: 2
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
    question: 'Hàm lượng cốt thép của dầm BTCT được tính bằng:',
    options: [
      'a. Tỉ số giữa diện tích tất cả cốt thép dọc trên diện tích tiết diện dầm',
      'b. Tỉ số giữa diện tích cốt thép dọc chịu lực trên diện tích tiết diện dầm',
      'c. Tỉ số giữa diện tích tất cả cốt thép dọc và cốt thép đai trên diện tích tiết diện dầm',
      'd. Cả ba phương pháp đều không đúng',
    ],
    correct: 1
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
