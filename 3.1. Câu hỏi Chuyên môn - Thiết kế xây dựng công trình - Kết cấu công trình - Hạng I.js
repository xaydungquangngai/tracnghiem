const questions = [
  {
    question: 'Dầm đơn giản hai đầu khớp chịu tải trọng phân bố đều trên toàn dầm, biểu đồ mômen uốn và biểu đồ lực cắt trong dầm có dạng:',
    options: [
      'a. Biểu đồ mômen uốn dạng parabôn bậc hai, biểu đồ lực cắt dạng hằng số.',
      'b. Biểu đồ mômen uốn dạng bậc nhất, biểu đồ lực cắt dạng hằng số.',
      'c. Biểu đồ mômen uốn dạng parabôn bậc hai, biểu đồ lực cắt dạng bậc nhất.',
      'd. Cả ba phương án trên đều không đúng.',
    ],
    correct: 2
  },
  {
    question: 'Dầm đơn giản hai đầu khớp chịu tải trọng tập trung ở giữa dầm, biểu đồ mômen uốn và biểu đồ lực cắt trong dầm có dạng:',
    options: [
      'a. Biểu đồ mômen uốn dạng parabôn bậc hai, biểu đồ lực cắt dạng hằng số.',
      'b. Biểu đồ mômen uốn dạng bậc nhất, biểu đồ lực cắt dạng hằng số.',
      'c. Biểu đồ mômen uốn dạng parabôn bậc hai, biểu đồ lực cắt dạng bậc nhất.',
      'd. Cả ba phương án trên đều không đúng.',
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
    question: 'Phá hoại dẻo của kết cấu thép là:',
    options: [
      'a. Phá hoại ở biến dạng nhỏ, không có vết nứt, vật liệu làm việc trong giai đoạn đàn hồi.',
      'b. Phá hoại ở biến dạng nhỏ, kèm theo vết nứt, vật liệu làm việc trong giai đoạn đàn hồi.',
      'c. Phá hoại với biến dạng lớn, vật liệu làm việc trong giai đoạn đàn hồi.',
      'd. Phá hoại với biến dạng lớn, vật liệu làm việc trong giai đoạn dẻo.',
    ],
    correct: 3
  },
  {
    question: 'Đối với thép cacbon cao, giới hạn chảy quy ước lấy ứng với biến dạng dư là?',
    options: [
      'a. ε=0,1%.',
      'b. ε=0,2%.',
      'c. ε=0,3%.',
      'd. ε=0,4%.',
    ],
    correct: 1
  },
  {
    question: 'Theo TCVN, kết cấu thép được tính toán theo phương pháp nào?',
    options: [
      'a. Ứng suất cho phép',
      'b. Tải trọng giới hạn',
      'c. Trạng thái giới hạn',
      'd. Hệ số tải trọng',
    ],
    correct: 1
  },
  {
    question: 'Sự phát triển biến dạng dẻo trong dầm thép bắt đầu khi:',
    options: [
      'a. Ứng suất các thớ biên đạt tới giới hạn chảy',
      'b. Ứng suất tại trục trung hòa đạt tới giới hạn chảy',
      'c. Ứng suất các thớ biên đạt tới giới hạn bền',
      'd. Ứng suất tại trục trung hòa đạt tới giới hạn bền',
    ],
    correct: 0
  },
  {
    question: 'Hệ số uốn dọc (φ) sử dụng khi tính ổn định của thanh chịu nén đúng tâm phụ thuộc vào:',
    options: [
      'a. Độ mảnh của thanh và giới hạn bền của thép',
      'b. Độ mảnh của thanh và môđun đàn hồi của thép',
      'c. Độ mảnh của thanh và cường độ tính toán của thép',
      'd. Độ mảnh của thanh và độ giãn dài của thép',
    ],
    correct: 2
  },
  {
    question: 'Cường độ tính toán của đường hàn đối đầu khi chịu kéo phụ thuộc vào:',
    options: [
      'a. Cường độ tính toán của kim loại hàn',
      'b. Cường độ tính toán của thép cơ bản',
      'c. Cường độ tính toán chịu cắt của thép cơ bản',
      'd. Cường độ tính toán chịu ép mặt của thép cơ bản',
    ],
    correct: 1
  },
  {
    question: 'Theo cấp độ chính xác khi sản xuất/chế tạo, bu lông chia ra mấy cấp?',
    options: [
      'a. Một cấp độ chính xác (A)',
      'b. Hai cấp độ chính xác (A, B)',
      'c. Ba cấp độ chính xác (A, B, C)',
      'd. Bốn cấp độ chính xác (A, B, C, D)',
    ],
    correct: 2
  },
  {
    question: 'Liên kết kết cấu thép bằng bulông cường độ cao có lực xiết căng trước, thân bu lông sẽ chịu:',
    options: [
      'a. Ép mặt.',
      'b. Ép mặt và cắt.',
      'c. Kéo.',
      'd. Cắt.',
    ],
    correct: 2
  },
  {
    question: 'Hiệu quả sử dụng tiết diện dầm hợp lý, thể hiện qua đại lượng bán kính lõi ρ:',
    options: [
      'a. ρ=W⁄A.',
      'b. ρ=I⁄A.',
      'c. ρ=A⁄W.',
      'd. ρ=H⁄A.',
    ],
    correct: 0
  },
  {
    question: 'Dầm thép hai đầu khớp có tiết diện không đổi, chịu tải trọng phân bố đều trên toàn dầm, ứng suất pháp lớn nhất tại vị trí nào?',
    options: [
      'a. Tại hai đầu dầm',
      'b. Tại vị trí giữa dầm',
      'c. Tại vị trí 1/3 nhịp dầm',
      'd. Tại vị trí 1/4 nhịp dầm',
    ],
    correct: 1
  },
  {
    question: 'Khi dầm thép tổ hợp chữ I có nhịp lớn, cần thay đổi tiết diện dầm để làm gì?',
    options: [
      'a. Tăng khả năng ổn định dầm',
      'b. Phù hợp với biểu đồ lực cắt',
      'c. Tiết kiệm vật liệu thép',
      'd. Hai ý a, b',
    ],
    correct: 2
  },
  {
    question: 'Đường hàn liên kết giữa bản cánh với bản bụng trong dầm thép tổ hợp chữ I chịu lực gì?',
    options: [
      'a. Lực dọc.',
      'b. Mômen.',
      'c. Lực trượt gây ra bởi lực cắt.',
      'd. Phương án a và b',
    ],
    correct: 2
  },
  {
    question: 'Đối với dầm thép chịu uốn thì đặc trưng hình học nào của tiết diện, quan trọng nhất ảnh hưởng đến độ bền chịu cắt?',
    options: [
      'a. Phương án b, d',
      'b. Mômen quán tính',
      'c. Mô đun chống uốn',
      'd. Mômen tĩnh',
    ],
    correct: 0
  },
  {
    question: 'Dầm thép tổ hợp tiết diện chữ I chịu uốn thì đặc trưng hình học nào của tiết diện, quan trọng nhất ảnh hưởng đến ổn định tổng thể của dầm?',
    options: [
      'a. Chiều cao tiết diện h.',
      'b. Bề rộng tiết diện',
      'b. c. Chiều dày bản cánh.',
      'd. Phương án b và c',
    ],
    correct: 3
  },
  {
    question: 'Cho cột thép chữ I có chiều cao tính toán H=6m, liên khớp cố định và khớp di động ở hai đầu, bán kính quán tính theo phương x, y: i_x=10,8cm, i_y=5,0cm. Độ mảnh lớn nhất của cột λ_max bằng bao nhiêu?',
    options: [
      'a. λ_max=55,6.',
      'b. λ_max=120.',
      'c. λ_max=110.',
      'd. λ_max=125.',
    ],
    correct: 1
  },
  {
    question: 'Dàn thép có gối tựa ở hai đầu chịu tải trọng tập trung tại các mắt thuộc cánh trên, phương của tải trọng hướng từ trên xuống. Thanh cánh trên (vị trí khoảng giữa dàn) chịu lực :',
    options: [
      'a. Lực nén.',
      'b. Lực kéo.',
      'c. Uốn.',
      'd. Cắt.',
    ],
    correct: 0
  },
  {
    question: 'Dàn thép có gối tựa ở hai đầu chịu tải trọng tập trung tại các mắt thuộc cánh trên, phương của tải trọng hướng từ trên xuống. Thanh cánh dưới (vị trí khoảng giữa dàn) chịu biến dạng:',
    options: [
      'a. Nén.',
      'b. Kéo.',
      'c. Uốn.',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế dầm thép cán chữ I chịu uốn có biến dạng dẻo, mô đun chống uốn dẻo tính bằng mô đun chống uốn đàn hồi nhân với hệ số bằng bao nhiêu?',
    options: [
      'a. 0,9',
      'b. 1,0',
      'c. 1,1',
      'd. 1,5',
    ],
    correct: 2
  },
  {
    question: 'Đối với thép kết cấu, tính năng cơ học quan trọng nhất để tính toán thiết kế là gì?',
    options: [
      'a. Giới hạn chảy.',
      'b. Giới hạn bền.',
      'c. Độ dãn dẻo.',
      'd. Mô đun đàn hồi.',
    ],
    correct: 0
  },
  {
    question: 'Chiều cao tối thiểu của một dầm thép chịu uốn xác định từ điều kiện nào?',
    options: [
      'a. Điều kiện bền chịu uốn.',
      'b. Điều kiện độ võng.',
      'c. Điều kiện ổn định tổng thể.',
      'd. Điều kiện bền chịu cắt.',
    ],
    correct: 1
  },
  {
    question: 'Xà gồ thép trên mái dốc được tính toán như cấu kiện nào?',
    options: [
      'a. Chịu uốn phẳng.',
      'b. Chịu cắt theo hai phương.',
      'c. Chịu xoắn.',
      'd. Chịu uốn xiên.',
    ],
    correct: 3
  },
  {
    question: 'Tác dụng chính của giằng xà gồ mái?',
    options: [
      'a. Giảm độ võng của xà gồ.',
      'b. Tăng khả năng chịu cắt xủa xà gồ trong mặt phẳng.',
      'c. Tăng ổn định của xà gồ ngoài mặt phẳng uốn.',
      'd. Tăng khả năng chịu uốn của xà gồ trong mặt phẳng.',
    ],
    correct: 2
  },
  {
    question: 'Theo TCVN, chuyển vị ngang của đỉnh khung nhà một tầng (không thuộc loại nhà ở) không được vượt quá giá trị nào?',
    options: [
      'a. 1/250 chiều cao khung.',
      'b. 1/300 chiều cao khung.',
      'c. 1/350 chiều cao khung.',
      'd. 1/400 chiều cao khung.',
    ],
    correct: 1
  },
  {
    question: 'Theo TCVN, chuyển vị ngang của đỉnh khung nhà nhiều tầng không được vượt quá giá trị nào?',
    options: [
      'a. 1/400 tổng chiều cao khung.',
      'b. 1/450 tổng chiều cao khung.',
      'c. 1/500 tổng chiều cao khung.',
      'd. 1/600 tổng chiều cao khung.',
    ],
    correct: 2
  },
  {
    question: 'Theo TCVN, chuyển vị tương đối tại mỗi tầng của nhà nhiều tầng không được vượt quá giá trị nào?',
    options: [
      'a. 1/600 chiều cao mỗi tầng.',
      'b. 1/500 chiều cao mỗi tầng.',
      'c. 1/400 chiều cao mỗi tầng.',
      'd. 1/300 chiều cao mỗi tầng',
    ],
    correct: 3
  },
  {
    question: 'Xác định hệ số áp lực gió lên mái công trình hình lượn sóng được áp dụng theo:',
    options: [
      'a. TCVN 2737:1995',
      'b. TCVN 2737: 2023',
      'c. Kết quả thí nghiệm hầm gió.',
      'd. EN 1991-1-4:2005',
    ],
    correct: 2
  },
  {
    question: 'Sự phù hợp giữa bậc chịu lửa của nhà, công trình và khoang cháy với giới hạn chịu lửa của cấu kiện sàn tầng (bao gồm cả sàn tầng áp mái và sàn trên tầng hầm) của của nhà, công trình và khoang cháy bậc I, không nhỏ hơn:',
    options: [
      'a. REI 60',
      'b. REI 120',
      'c. R 60.',
      'd. R120',
    ],
    correct: 0
  },
  {
    question: 'Giới hạn chịu lửa của tường ngăn cháy, bộ phận loại 1, là:',
    options: [
      'a. REI 120',
      'b. RE 150',
      'c. RI 150.',
      'd. REI 150',
    ],
    correct: 3
  },
  {
    question: 'Tổ hợp tải trọng đặc biệt bao gồm',
    options: [
      'a. Các tải trọng thường xuyên, tải trọng tạm thời dài hạn, tải trọng tạm thời ngắn hạn có thể xảy ra và một trong các tải trọng đặc biệt.',
      'b. Các tải trọng thường xuyên, tải trọng tạm thời dài hạn, tải trọng tạm thời ngắn hạn có thể xảy ra và tất cả các loại tải trọng đặc biệt.',
      'c. Các tải trọng thường xuyên, tải trọng tạm thời dài hạn, tải trọng tạm thời ngắn hạn có thể xảy ra, Tải trọng động đất và Tải trọng gió.',
      'd. Các tải trọng thường xuyên, tải trọng tạm thời dài hạn, tải trọng tạm thời ngắn hạn có thể xảy ra và ít nhất hai trong các tải trọng đặc biệt.',
    ],
    correct: 0
  },
  {
    question: 'Hệ số hiệu ứng giật Gf có thể lấy bằng 0,85 khi kết cấu:',
    options: [
      'a. Có chu kỳ dao động riêng cơ bản thứ nhất T1 < 1 s',
      'b. Có chu kỳ dao động riêng cơ bản thứ nhất T1 > 1 s',
      'c. Có chu kỳ dao động riêng cơ bản thứ nhất T1 ≤ 1 s',
      'd. Có chu kỳ dao động riêng cơ bản thứ nhất T1 ≥ 1 s',
    ],
    correct: 2
  },
  {
    question: 'Theo Tiêu chuẩn Việt Nam 2737:2023, có bao nhiêu vùng gió?',
    options: [
      'a. 8',
      'b. 7',
      'c. 6',
      'd. 5',
    ],
    correct: 3
  },
  {
    question: 'Chuyển vị ngang giới hạn fu theo yêu cầu cấu tạo đối với nhà nhiều tầng, liên kết giữa tường, tường ngăn với khung nhà là cứng hoặc mềm, được lấy bằng:',
    options: [
      'a. H/500',
      'b. H/550',
      'c. H/600',
      'd. H/700.',
    ],
    correct: 0
  },
  {
    question: 'Tính toán độ võng và chuyển vị của kết cấu chịu lực và bao che (ngăn che) của nhà và công trình (theo các trạng thái giới hạn thứ hai dưới tác dụng của tải trọng tĩnh), ngoài việc đảm bảo yêu cầu công nghệ và cấu tạo, còn phải:',
    options: [
      'a. Ngăn ngừa các tác động có hại và cảm giác không thoải mái khi kết cấu dao động',
      'b. Đảm bảo có ấn tượng tốt về hình dáng bên ngoài của kết cấu',
      'c. Loại trừ các cảm giác sợ nguy hiểm',
      'd. Tất cả các mục a, b,',
    ],
    correct: 3
  },
  {
    question: 'Khoảng cách các cốt chịu lực của bản BTCT dày 250mm không được vượt quá',
    options: [
      'a. 200mm và 1,5h',
      'b. 250mm và 1,5h',
      'c. 300mm và 1,5h',
      'd. 400mm và 1,5h',
    ],
    correct: 3
  },
  {
    question: 'Trong dầm, cần kéo các thanh cốt thép dọc chịu lực vào gối tựa với diện tích tiết diện không nhỏ hơn 1/2 diện tích tiết diện các thanh trong nhịp và không ít hơn:',
    options: [
      'a. 2 thanh.',
      'b. 1 thanh',
      'c. 50% số thanh',
      'd. 100% số thanh',
    ],
    correct: 0
  },
  {
    question: 'Trong các tường bê tông cốt thép, khoảng cách giữa các thanh cốt thép thẳng đứng lấy không lớn hơn 2t (t là chiều dày tường) và',
    options: [
      'a. 300 mm',
      'b. 350mm',
      'c. 400mm',
      'd. Không quy định',
    ],
    correct: 2
  },
  {
    question: 'Khi tính toán cọc chịu kéo trong nhóm 4 cọc, sức chịu tải của cọc phải giảm:',
    options: [
      'a. 10%',
      'b. 20%',
      'c. 30%',
      'd. Không giảm',
    ],
    correct: 1
  },
  {
    question: 'Đài cọc bê tông cốt thép toàn khối dùng cho mọi loại nhà và công trình phải được thiết kể từ bê tông nặng với cấp độ bền tối thiểu:',
    options: [
      'a. B15',
      'b. B20',
      'c. B25',
      'd. Không quy định',
    ],
    correct: 0
  },
  {
    question: 'Khi tính cọc đóng hoặc ép nhồi, cọc khoan nhồi và barrette (trừ cọc - trụ và cọc khoan - thả) theo cường độ vật liệu, cường độ tính toán của bê tông phải nhân với hệ số điều kiện làm việc cb',
    options: [
      'a. 0,8',
      'b. 0,85',
      'c. 0,9',
      'd. 1,0',
    ],
    correct: 1
  },
  {
    question: 'Khi tính toán chọc thủng cho bản bê tông cốt thép có chiều cao làm việc h0, chịu tác dụng của lực cục bộ đặt tập trung, cần xét tiết diện tính toán:',
    options: [
      'a. Nằm cách mép diện chịu tải một khoảng 2h0',
      'b. Nằm cách mép diện chịu tải một khoảng 0,5h0',
      'c. Nằm cách mép diện chịu tải một khoảng h0',
      'd. Nằm cách mép diện chịu tải một khoảng 1,5h0',
    ],
    correct: 1
  },
  {
    question: 'Đối với kết cấu bê tông cốt thép ứng suất trước, cường độ bê tông tại thời điểm truyền ứng suất cần được chỉ định:',
    options: [
      'a. Không nhỏ hơn 50% cấp độ bền chịu nén đã được lựa chọn của bê tông và không nhỏ hơn 15 MPa',
      'b. Không nhỏ hơn 25% cấp độ bền chịu nén đã được lựa chọn của bê tông',
      'c. Không nhỏ hơn 15 MPa',
      'd. Cả ba phương án trên đều sai',
    ],
    correct: 0
  },
  {
    question: 'Giá trị mô đun biến dạng của bê tông khi có tác dụng dài hạn của tải trọng:',
    options: [
      'a. Bằng mô đun đàn hồi ban đầu của bê tông',
      'c. Bằng 1,5 lần mô đun đàn hồi ban đầu của bê tông',
      'b. Bằng 2,0 lần mô đun đàn hồi ban đầu của bê tông',
      'd. Nhỏ hơn mô đun đàn hồi ban đầu của bê tông',
    ],
    correct: 3
  },
  {
    question: 'Chiều dài neo cơ sở của cốt thép:',
    options: [
      'a. Không phụ thuộc vào loại bề mặt cốt thép',
      'b. Tỷ lệ thuận với cường độ chịu kéo dọc trục tính toán của bê tông',
      'c. Tỷ lệ nghịch với cường độ chịu kéo dọc trục tính toán của bê tông',
      'd. Không phụ thuộc vào cỡ đường kính cốt thép',
    ],
    correct: 2
  },
  {
    question: 'Cốt thép thường được bố trí trong cấu kiện bê tông ứng suất trước nhằm:',
    options: [
      'a. Hạn chế các vết nứt do uốn, các vết nứt do co ngót và chênh lệch nhiệt độ',
      'b. Tăng khả năng chịu mô men uốn của cấu kiện',
      'c. Cả hai phương án',
      'a. và',
      'b. đều đúng',
      'd. Cả hai phương án',
      'a. và',
      'b. đều sai',
    ],
    correct: 2
  },
  {
    question: 'Giá trị hao tổn ứng suất do ma sát đối với cấu kiện bê tông ứng suất trước khi căng cốt thép trên bê tông (phương pháp căng sau) sẽ:',
    options: [
      'a. Tăng khi tăng chiều dài đoạn từ thiết bị căng đến tiết diện tính toán',
      'b. Giảm khi tăng chiều dài đoạn từ thiết bị căng đến tiết diện tính toán',
      'c. Tăng khi tăng tổng góc xoay của trục cốt thép',
      'd. Cả hai phương án',
      'a. và',
      'c. đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Giá trị hao tổn ứng suất do ma sát đối với cấu kiện bê tông ứng suất trước khi căng cốt thép trên bê tông (phương pháp căng sau) sẽ:',
    options: [
      'a. Giảm khi tăng chiều dài đoạn từ thiết bị căng đến tiết diện tính toán',
      'b. Tăng khi tăng tổng góc xoay của trục cốt thép',
      'c. Cả hai phương án',
      'a. và',
      'b. đều đúng',
      'd. Cả hai phương án',
      'a. và',
      'b. đều sai',
    ],
    correct: 1
  },
  {
    question: 'Có thể giảm chiều dài neo tính toán yêu cầu của cốt thép có gân khi:',
    options: [
      'a. Tăng diện tích tiết diện ngang của cốt thép theo thực tế so với diện tích tiết diện ngang của cốt thép theo tính toán',
      'b. Giảm diện tích tiết diện ngang của cốt thép theo thực tế so với diện tích tiết diện ngang của cốt thép theo tính toán',
      'c. Cấu tạo chi tiết neo bổ sung tại đầu cốt thép thay cho đầu để thẳng',
      'd. Cả hai phương án',
      'a. và',
      'c. đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Giá trị tính toán của tải trọng do trực thăng lên sàn mái nhà khi cất cánh được tính với:',
    options: [
      'a. Hệ số độ tin cậy về tải trọng bằng 1,1 và hệ số động lực khi cất cánh bằng 1,3',
      'b. Hệ số độ tin cậy về tải trọng bằng 1,2 và hệ số động lực khi cất cánh bằng 1,2',
      'c. Hệ số độ tin cậy về tải trọng bằng 1,2 và hệ số động lực khi cất cánh bằng 1,4',
      'd. Hệ số độ tin cậy về tải trọng bằng 1,3 và hệ số động lực khi cất cánh bằng 1,2',
    ],
    correct: 2
  },
  {
    question: 'Khi tính toán va chạm của xe nâng với tường và móng nhà thì cần kể đến tải trọng tĩnh tương đương:',
    options: [
      'a. Bằng trọng lượng của xe nâng bao gồm cả vật nâng nhân với hệ số động lực lấy bằng 3',
      'b. Bằng trọng lượng của xe nâng bao gồm cả vật nâng nhân với hệ số động lực lấy bằng 5',
      'c. Bằng trọng lượng của xe nâng không bao gồm vật nâng nhân với hệ số động lực lấy bằng 5',
      'd. Bằng trọng lượng của xe nâng không bao gồm vật nâng nhân với hệ số động lực lấy bằng 3',
    ],
    correct: 1
  },
  {
    question: 'Kết quả thí nghiệm xuyên tiêu chuẩn (SPT) với số búa ứng với 3 lần xuyên lần lượt là 12, 13, 14. Giá trị xuyên tiêu chuẩn (N) của kết quả thí nghiệm này là:',
    options: [
      'a. 25',
      'b. 27',
      'c. 39',
      'd. 13',
    ],
    correct: 1
  },
  {
    question: 'Đối với điều kiện địa chất trung bình, công trình nhà cao tầng khá quan trọng, quy mô khá lớn, nếu gặp đất yếu phải khoan qua đất yếu và số lượng điểm khoan vào đất tốt ít nhất 3 m (NSPT > 30) là:',
    options: [
      'a. 1/3 số lượng điểm khoan',
      'b. 1/2 số lượng điểm khoan',
      'c. 1/4 số lượng điểm khoan',
      'd. 1/5 số lượng điểm khoan',
    ],
    correct: 0
  },
  {
    question: 'Giai đoạn khảo sát cho thiết kế kỹ thuật, đối với điều kiện địa chất trung bình, công trình nhà cao tầng khá quan trọng, khá nhạy cảm với lún không đều, số lượng điểm thăm dò cho một nhà riêng rẽ không ít hơn:',
    options: [
      'a. 2 vị trí',
      'c. 1 vị trí',
      'b. 3 vị trí',
      'd. Không có vị trí nào',
    ],
    correct: 1
  },
  {
    question: 'Nhà ở dưới 9 tầng, kể cả tải trọng của tường truyền lên móng không quá 50 T/m, khối lượng công tác khoan khảo sát địa kỹ thuật điều kiện địa chất công trình cấp II là',
    options: [
      'a. Theo lưới 70 m x 70m nhưng mỗi nhà (công trình) phải có ít nhất 1 hố khoan.',
      'b. Theo lưới 50m x50 m nhưng mỗi nhà (công trình) phải có ít nhất 2 hố khoan.',
      'c. Theo lưới 30mx30 m nhưng mỗi nhà (công trình) phải có ít nhất 3 hố khoan.',
      'd. Theo lưới 40 m x 40 m nhưng mỗi nhà (công trình) phải có ít nhất 2 điểm.',
    ],
    correct: 1
  },
  {
    question: 'Khi xác định tính đồng nhất và khuyết tật của cọc khoan nhồi theo các đặc trưng của xung siêu âm, biểu đồ vận tốc truyền xung siêu âm có sự thay đổi theo chiều giảm lớn hơn bao nhiêu % thì xuất hiện khuyết tật:',
    options: [
      'a. 10%',
      'b. 15%',
      'c. 20%',
      'd. 25%',
    ],
    correct: 2
  },
  {
    question: 'Số lượng ống siêu âm đặt trong một cọc khoan nhồi có đường kính lớn hơn\n100 cm là:',
    options: [
      'a. 2',
      'b. 3',
      'c. 4',
      'd. 5',
    ],
    correct: 2
  },
  {
    question: 'Cọc khoan nhồi có đường kính D giữ thành bằng dung dịch, sai số cho phép của cọc đơn về lỗ khoan cọc :',
    options: [
      'a. D/5 nhưng ≤ 10cm',
      'b. D/4 nhưng ≤ 15cm',
      'c. D/4 nhưng ≤ 15cm',
      'd. D/6 nhưng ≤ 10cm',
    ],
    correct: 3
  },
  {
    question: 'Các hố khoan khảo sát và các điểm thí nghiệm hiện trường nên được bố trí gần cọc thí nghiệm với khoảng cách thường nhỏ hơn:',
    options: [
      'a. 5m',
      'b. 8m',
      'c. 10m',
      'd. 12m',
    ],
    correct: 0
  },
  {
    question: 'Cọc thí nghiệm thăm dò được xem là bị phá hoại khi tổng chuyển vị đầu cọc so với đường kính hoặc chiều rộng tiết diện cọc có kể đến biến dạng đàn hồi của cọc vượt quá:',
    options: [
      'a. 5%',
      'b. 10%',
      'c. 15%',
      'd. 20%',
    ],
    correct: 1
  },
  {
    question: 'Trừ móng trụ đường dây tải điện, khi tính toán móng cọc cho tổ hợp tải trọng có kể đến tải trọng gió hoặc cầu trục, thì tải trọng tính toán lên cọc cho phép tăng lên:',
    options: [
      'a. 10%',
      'b. 15%',
      'c. 20%',
      'd. 25%',
    ],
    correct: 2
  },
  {
    question: 'Lực ma sát âm (đối lực ma sát) phát sinh trên thân cọc do lún của khối đất bao quanh cọc, hướng thẳng đứng từ trên xuống và được xét trong trường hợp:',
    options: [
      'a. Lớp đất đắp san nền dày hơn 1,0 m',
      'b. Chất tải hữu ích lên sàn nhà kho vượt quá 15 KN/m2;',
      'c. Đặt thiết bị có tải trọng hữu ích từ thiết bị trên 50 kN/m2 lên sàn kề bên móng',
      'd. Tăng ứng suất hiệu quả, không loại bỏ tác dụng đẩy nổi của nước do hạ mực nước ngầm trong đất;',
    ],
    correct: 0
  },
  {
    question: 'Khi thiết kế móng cọc trong vùng động đất, mũi cọc đặt trong lớp đất dính với chỉ số sệt IL không lớn hơn:',
    options: [
      'a. 0,2',
      'b. 0,3',
      'c. 0,4',
      'd. 0,5',
    ],
    correct: 3
  },
  {
    question: 'Nhà sản xuất, nhà dân dụng một tầng và nhà nhiều tầng kết cấu khung bê tông cốt thép có thêm giằng BTCT hoặc sàn mái toàn khối và công trình toàn khối, độ lún tuyệt đối của nền móng, do tải trong tạm thời ngắn hạn gây ra, không lớn hơn giá trị nào sau đây:',
    options: [
      'a. 8cm',
      'b. 10cm',
      'c. 15cm',
      'd. 18cm',
    ],
    correct: 2
  },
  {
    question: 'Tòa nhà văn phòng 5 tầng có diện tích văn phòng mỗi tầng 120m2. Giá trị hoạt tải tiêu chuẩn văn phòng khi tính toán móng sẽ được giảm:',
    options: [
      'a. 0,3',
      'b. 0,4',
      'c. 0,5',
      'd. 0,6',
    ],
    correct: 2
  },
  {
    question: '1 dầm bê tông cốt thép ở khu vực văn phòng chịu tải trọng bản thân là 150N/m và hoạt tải 200N/m. Hỏi giá trị tổ hợp cơ bản tác dụng lên dầm là bao nhiêu?:',
    options: [
      'a. 425 N/m',
      'b. 430 N/m',
      'c. 435 N/m',
      'd. 440 N/m',
    ],
    correct: 0
  },
  {
    question: 'Giá trị áp lực gió cơ sở Wo được xác định từ:',
    options: [
      'a. Áp lực gió 3s chu kỳ 10 năm',
      'b. Áp lực gió 3s chu kỳ 20 năm',
      'c. Áp lực gió 10 phút chu kỳ 10 năm',
      'd. Áp lực gió 10 phút chu kỳ 20 năm',
    ],
    correct: 0
  },
  {
    question: 'Công trình phải tính toán và cấu tạo kháng chấn khi giá trị gia tốc nền thiết kế ag trên nền loại A, vượt quá: (g - gia tốc trọng trường)',
    options: [
      'a. 0,04g',
      'b. 0,06g',
      'c. 0,08g',
      'd. 0,1g',
    ],
    correct: 2
  },
  {
    question: 'Khi phân tích mô hình kết cấu chịu động đất, trừ khi thực hiện phân tích chính xác hơn đối với các cấu kiện bị nứt, các đặc trưng độ cứng chống cắt, độ cứng chống uốn đàn hồi của các cấu kiện bê tông có thể lấy giảm bao nhiêu % so với độ cứng tương ứng của các cấu kiện không bị nứt:',
    options: [
      'a. 20%',
      'b. 30%',
      'c. 40%',
      'd. 50%',
    ],
    correct: 3
  },
  {
    question: 'Khi kiểm tra và cấu tạo theo trạng thái cực hạn, để đảm bảo khả năng chịu lực, trong các cột kháng chấn chính, có cấp dẻo kết cấu trung bình, giá trị lực dọc thiết kế quy đồi vd không được vượt quá giá:',
    options: [
      'a. 0,35',
      'b. 0,45',
      'c. 0,55',
      'd. 0,65',
    ],
    correct: 3
  },
  {
    question: 'Khi kiểm tra và cấu tạo theo trạng thái cực hạn, khả năng chịu uốn và cắt của tường mềm, trong các tường kháng chấn chính, có cấp dẻo kết cấu trung bình, giá trị lực dọc thiết kế quy đồi vd không được vượt quá giá:',
    options: [
      'a. 0,3',
      'b. 0,4',
      'c. 0,5',
      'd. 0,6',
    ],
    correct: 1
  },
  {
    question: 'Trong thiết kế công trình chịu động đất, dọc theo toàn bộ chiều dài của dầm giằng và dầm giằng móng, cần có hàm lượng cốt thép tối thiểu ở cả mặt trên và đáy là:',
    options: [
      'a. 25%',
      'b. 30%',
      'c. 35%',
      'd. 40%',
    ],
    correct: 3
  },
  {
    question: 'Bậc chịu lửa của nhà, công trình và khoang cháy là bậc I, giới hạn chịu lửa của cấu kiện tường chịu lực, cột chịu lực và các bộ phận chịu lực khác, không nhỏ hơn:',
    options: [
      'a. R60',
      'b. R90',
      'c. R120',
      'd. R150',
    ],
    correct: 2
  },
  {
    question: 'Trong các nhà có bậc chịu lửa I, II, III thì lớp bảo vệ cấu kiện dầm bê tông cốt thép của tầng hầm, tầng nửa hầm không nhỏ hơn:',
    options: [
      'a. 20cm',
      'b. 25cm',
      'c. 30cm',
      'd. 35cm',
    ],
    correct: 3
  },
  {
    question: 'Mác thép nào hạn chế dùng liên kết hàn:',
    options: [
      'a. CT3',
      'b. SS400',
      'c. Q345',
      'd. Đáp án b và c',
    ],
    correct: 2
  },
  {
    question: 'Trong các nhà sản xuất, giới hạn chịu lửa của các tấm lợp và xà gồ đỡ tấm lợp được làm từ các vật liệu không cháy không quy định khi mặt dưới xà gồ nằm cách sàn ngay dưới chúng một khoảng cách tối thiểu:',
    options: [
      'a. 6,1m.',
      'b. 7,1m',
      'c. 8,1m',
      'd. 9,1m',
    ],
    correct: 0
  },
  {
    question: 'Chiều dày tối thiểu của lớp bê tông bảo vệ của kết cấu nhà ngoài trời (khi không có các biện pháp bảo vệ bổ sung và không chịu tác động của môi trường ăn mòn) tối thiểu là',
    options: [
      'a. 20mm',
      'b. 25mm',
      'c. 30mm',
      'd. 40mm',
    ],
    correct: 2
  },
  {
    question: 'Bậc chịu lửa của công trình xây dựng:',
    options: [
      'a. Được quy định theo cấp công trình',
      'b. Phụ thuộc vào cấp nguy hiểm cháy kết cấu',
      'c. Phụ thuộc vào số tầng (hoặc chiều cao PCCC của công trình), nhóm nguy hiểm cháy theo công năng, diện tích khoang cháy và tính nguy hiểm cháy của các quá trình công nghệ diễn ra trong công trình',
      'd. Tất cả các phương án trên đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Vận tốc gió cơ sở là vận tốc được đo ở độ cao 10 m so với mốc chuẩn, tương ứng với địa hình dạng B và:',
    options: [
      'a. Được lấy trung bình trong khoảng thời gian 3 s, chu kỳ lặp 10 năm (bị vượt trung bình một lần trong khoảng thời gian 10 năm)',
      'b. Được lấy trung bình trong khoảng thời gian 10 phút, chu kỳ lặp 20 năm',
      'c. Được lấy trung bình trong khoảng thời gian 3 s, chu kỳ lặp 20 năm',
      'd. Được lấy trung bình trong khoảng thời gian 10 phút, chu kỳ lặp 10 năm',
    ],
    correct: 2
  },
  {
    question: 'Hệ số k(ze) kể đến sự thay đổi áp lực gió theo độ cao và dạng địa hình phụ thuộc vào:',
    options: [
      'a. Độ cao tương đương ze',
      'b. Độ cao tương đương ze và chiều cao công trình',
      'c. Độ cao tương đương ze và chiều rộng công trình',
      'd. Độ cao tương đương ze, chiều rộng, chiều cao công trình và tương quan giữa các kích thước đó',
    ],
    correct: 3
  },
  {
    question: 'Điều kiện tính toán theo các trạng thái giới hạn thứ nhất trên tiết diện thẳng góc của cấu kiện bê tông cốt thép sử dụng mô hình biến dạng phi tuyến là:',
    options: [
      'a. Khi ứng suất nén trong bê tông đạt tới cường độ chịu nén tính toán của bê tông',
      'b. Khi biến dạng tương đối của thớ bê tông chịu nén nhiều nhất và của thanh cốt thép chịu kéo nhiều nhất trên tiết diện đạt tới các giá trị giới hạn tương ứng của chúng',
      'c. Khi ứng suất trong cốt thép đạt tới cường độ tính toán của cốt thép',
      'd. Tất cả các yếu tố nêu trên',
    ],
    correct: 1
  },
  {
    question: 'Khi tính toán theo các trạng thái giới hạn thứ nhất trên tiết diện thẳng góc của cấu kiện bê tông cốt thép sử dụng mô hình biến dạng phi tuyến, cần phải giả thiết:',
    options: [
      'a. Biến dạng tương đối của bê tông và cốt thép phân bố tuyến tính theo chiều cao tiết diện cấu kiện',
      'b. Quan hệ giữa ứng suất dọc trục và biến dạng tương đối của bê tông và cốt thép được lấy theo các biểu đồ biến dạng tương ứng của hai loại vật liệu trên',
      'c. Bỏ qua sự làm việc chịu kéo của bê tông',
      'd. Tất cả các giả thiết trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Bê tông đạt cấp cường độ chịu nén B20 khi số lượng các mẫu chuẩn được thử trong điều kiện tiêu chuẩn có kết quả cường độ chịu nén nhỏ hơn 20,0 MPa không vượt quá tỷ lệ sau:',
    options: [
      'a. 2,0 %',
      'b. 5,0 %',
      'c. 7,0 %',
      'd. 9,0 %',
    ],
    correct: 1
  },
  {
    question: 'Cấp cường độ chịu kéo, tính bằng MPa, của cốt thép cán nóng là:',
    options: [
      'a. Giá trị được kiểm soát nhỏ nhất của giới hạn chảy thực tế với sác xuất đảm bảo không nhỏ hơn 95%',
      'b. Giá trị được kiểm soát nhỏ nhất của giới hạn bền với sác xuất đảm bảo không nhỏ hơn 98%',
      'c. Giá trị được kiểm soát nhỏ nhất của giới hạn chảy thực tế với sác xuất đảm bảo không nhỏ hơn 92%',
      'd. Giá trị được kiểm soát nhỏ nhất của giới hạn bền với sác xuất đảm bảo không nhỏ hơn 95%',
    ],
    correct: 0
  },
  {
    question: 'Cường độ chịu nén của bê tông giảm khi:',
    options: [
      'a. Tiến hành thí nghiệm bê tông ở tuổi sớm hơn',
      'b. Giảm tốc độ gia tải khi thí nghiệm',
      'c. Áp dụng tải trọng tác dụng dài hạn khi thí nghiệm',
      'd. Cả ba phương án trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Chiều dài neo cơ sở của bê tông vào cốt thép được xác định theo nguyên tắc:',
    options: [
      'a. Cốt thép không bị kéo tuột',
      'b. Ứng suất trong cốt thép chưa đạt tới giới hạn chảy',
      'c. Cốt thép bị kéo tuột cùng lúc với khi ứng suất trong cốt thép đạt tới giới hạn chảy',
      'd. Cốt thép không bị kéo tuột và ứng suất trong cốt thép chưa đạt tới giới hạn chảy',
    ],
    correct: 2
  },
  {
    question: 'Chiều cao làm việc của tiết diện là gì?',
    options: [
      'a. Khoảng cách từ biên chịu nén của cấu kiện đến trọng tâm của cốt thép dọc chịu kéo.',
      'b. Khoảng cách từ trục trung hòa của cấu kiện đến trọng tâm của cốt thép dọc chịu kéo.',
      'c. Khoảng cách từ biên chịu nén của cấu kiện đến trọng tâm của cốt thép dọc chịu nén.',
      'd. Tất cả các nội dung nêu tại mục a, b, và c',
    ],
    correct: 0
  },
  {
    question: 'Cốt thép chịu lực được bố trí như thế nào?',
    options: [
      'a. Cốt thép được bố trí theo cấu tạo',
      'b. Cốt thép được bố trí theo tính toán',
      'c. Cốt thép được bố trí theo 50% tính toán và 50% cấu tạo',
      'd. Tất cả các nội dung nêu tại mục a, b, và c',
    ],
    correct: 1
  },
  {
    question: 'Điều kiện sử dụng bình thường của các công trình xây dựng bao gồm những điều kiện nào?',
    options: [
      'a. Điều kiện sử dụng các công trình xây dựng phù hợp với các điều kiện đã quy định trong các tiêu chuẩn hoặc nhiệm vụ thiết kế, chỉ bao gồm bảo dưỡng (bảo trì) và sửa chữa lớn',
      'b. Điều kiện sử dụng các công trình xây dựng phù hợp với các điều kiện đã quy định trong các tiêu chuẩn hoặc nhiệm vụ thiết kế, chỉ bao gồm bảo dưỡng (bảo trì) và sửa chữa nhỏ',
      'c. Điều kiện sử dụng các công trình xây dựng phù hợp với các điều kiện đã quy định trong các tiêu chuẩn hoặc nhiệm vụ thiết kế, KHÔNG bao gồm sửa chữa lớn và sửa chữa nhỏ',
      'd. Điều kiện sử dụng các công trình xây dựng phù hợp với các điều kiện đã quy định trong các tiêu chuẩn hoặc nhiệm vụ thiết kế, bao gồm cả bảo dưỡng (bảo trì), sửa chữa lớn và sửa chữa nhỏ',
    ],
    correct: 3
  },
  {
    question: 'Tính toán cấu kiện bê tông cốt thép theo sự hình thành vết nứt thẳng góc được tiến hành theo?',
    options: [
      'a. Nội lực nhỏ nhất',
      'b. Nội lực trung bình',
      'c. Mô hình biến dạng tuyến tính',
      'd. Nội lực giới hạn hoặc theo mô hình biến dạng phi tuyến',
    ],
    correct: 3
  },
  {
    question: 'Nội lực mà cấu kiện bê tông cốt thép có thể chịu được khi hình thành vết nứt xiên cần được xác định theo?',
    options: [
      'a. Tính toán cấu kiện bê tông cốt thép như đối với vật thể đàn dẻo và theo tiêu chí độ bền của bê tông ở trạng thái ứng suất phẳng “kéo-nén”',
      'b. Tính toán cấu kiện bê tông cốt thép như đối với vật thể đàn hồi và theo tiêu chí độ bền của bê tông ở trạng thái ứng suất phẳng “kéo-nén”',
      'c. Tính toán cấu kiện bê tông cốt thép như đối với vật thể đàn dẻo và theo tiêu chí độ bền của bê tông ở trạng thái ứng suất phẳng “Nén”',
      'd. Tính toán cấu kiện bê tông cốt thép như đối với vật thể đàn dẻo và theo tiêu chí độ bền của bê tông ở trạng thái ứng suất phẳng “Kéo”',
    ],
    correct: 1
  },
  {
    question: 'Tính toán cấu kiện ứng suất trước được tiến hành đối với giai đoạn sử dụng chịu tác dụng của?',
    options: [
      'a. Lực dọc do ngoại lực và đối với giai đoạn nén trước chịu tác dụng của nội lực do căng trước cốt thép và nội lực do ngoại lực tác dụng trong giai đoạn nén trước',
      'b. Lực cắt do ngoại lực và đối với giai đoạn nén trước chịu tác dụng của nội lực do căng trước cốt thép và nội lực do ngoại lực tác dụng trong giai đoạn nén trước',
      'c. Mô men uốn và lực cắt do ngoại lực và đối với giai đoạn nén trước chịu tác dụng của nội lực do căng trước cốt thép và nội lực do ngoại lực tác dụng trong giai đoạn nén trước',
      'd. Mô men xoắn do ngoại lực và đối với giai đoạn nén trước chịu tác dụng của nội lực do căng trước cốt thép và nội lực do ngoại lực tác dụng trong giai đoạn nén trước',
    ],
    correct: 2
  },
  {
    question: 'Đối với các cấu kiện bê tông cốt thép, mà trong đó nội lực giới hạn về độ bền nhỏ hơn nội lực giới hạn về hình thành vết nứt, thì diện tích cốt thép dọc chịu kéo cần phải lấy tăng thêm?',
    options: [
      'a. Không ít hơn 5 % so với diện tích cốt thép yêu cầu từ tính toán độ bền hoặc lấy bằng diện tích từ tính toán độ bền chịu mô men hình thành vết nứt',
      'b. Không ít hơn 10 % so với diện tích cốt thép yêu cầu từ tính toán độ bền hoặc lấy bằng diện tích từ tính toán độ bền chịu mô men hình thành vết nứt',
      'c. Không ít hơn 15 % so với diện tích cốt thép yêu cầu từ tính toán độ bền hoặc lấy bằng diện tích từ tính toán độ bền chịu mô men hình thành vết nứt',
      'd. Không ít hơn 20 % so với diện tích cốt thép yêu cầu từ tính toán độ bền hoặc lấy bằng diện tích từ tính toán độ bền chịu mô men hình thành vết nứt',
    ],
    correct: 2
  },
  {
    question: 'Quy định về việc bố trí cốt thép dọc trong Dầm bê tông cốt thép thường?',
    options: [
      'a. Trong dầm cần kéo vào gối tựa các thanh cốt thép dọc chịu lực với diện tích tiết diện không nhỏ hơn 1/5 diện tích tiết diện các thanh trong nhịp và không ít hơn 2 thanh.',
      'b. Trong dầm cần kéo vào gối tựa các thanh cốt thép dọc chịu lực với diện tích tiết diện không nhỏ hơn 1/4 diện tích tiết diện các thanh trong nhịp và không ít hơn 2 thanh.',
      'c. Trong dầm cần kéo vào gối tựa các thanh cốt thép dọc chịu lực với diện tích tiết diện không nhỏ hơn 1/3 diện tích tiết diện các thanh trong nhịp và không ít hơn 2 thanh.',
      'd. Trong dầm cần kéo vào gối tựa các thanh cốt thép dọc chịu lực với diện tích tiết diện không nhỏ hơn 1/2 diện tích tiết diện các thanh trong nhịp và không ít hơn 2 thanh.',
    ],
    correct: 3
  },
  {
    question: 'Tính toán chịu mỏi được thực hiện như thế nào?',
    options: [
      'a. Tính toán chịu mỏi được thực hiện trong giai đoạn đàn hồi có vết nứt',
      'b. Không kể đến: sự làm việc của bê tông chịu kéo; cốt thép chịu nén; và cường độ chịu mỏi của chúng.',
      'c. Tính toán chịu mỏi được thực hiện trong giai đoạn đàn hồi không có vết nứt. Có kể đến sự làm việc của bê tông chịu kéo; cốt thép chịu nén; và cường độ chịu mỏi c:ủa chúng.',
      'd. Tất cả nội dung ở mục a và',
    ],
    correct: 3
  },
  {
    question: 'Khi tính toán đối với các kết cấu bị hư hỏng nặng (khi tiết diện bê tông bị phá hoại từ 50 % trở lên hoặc diện tích tiết diện cốt thép chịu lực bị phá hoại) thì?',
    options: [
      'a. Các cấu kiện gia cường cần được tính toán chịu 100% tải trọng tác dụng, không kể đến khả năng chịu lực của kết cấu cần gia cường;',
      'b. Các cấu kiện gia cường cần được tính toán chịu 75% tải trọng tác dụng, có kể đến 25% khả năng chịu lực của kết cấu cần gia cường;',
      'c. Các cấu kiện gia cường cần được tính toán chịu 50% tải trọng tác dụng, có kể đến 50%khả năng chịu lực của kết cấu cần gia cường;',
      'd. Các cấu kiện gia cường cần được tính toán chịu 25% tải trọng tác dụng, có kể đến 75% khả năng chịu lực của kết cấu cần gia cường.',
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
    question: 'Theo TCVN, mác thép nào dưới đây dưới đây đảm bảo chất lượng về cơ tính và thành phần hóa học',
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
    question: 'Thanh chịu tải trọng phân bố dạng bậc nhất vuông góc với trục thanh (hình tam giác) thì biểu đồ mômen uốn có dạng:',
    options: [
      'a. Đường thẳng',
      'b. Đường cong bậc 2',
      'c. Đường cong bậc 3',
      'd. Cả ba đêu không đúng',
    ],
    correct: 2
  },
  {
    question: 'Thanh chịu tải trọng phân bố dạng bậc nhất (hình tam giác) thì biểu đồ lực cắt có dạng',
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
    question: 'Loại thép nào dưới đây có hàm lượng cacbon thấp nhất?',
    options: [
      'a. CT5 (theo GOST)',
      'b. BCT4 (theo GOST)',
      'c. CT38 (theo TCVN)',
      'd. CT42 (theo TCVN)',
    ],
    correct: 2
  },
  {
    question: 'Khi biểu đồ mômen uốn trong một thanh thẳng có dạng parabôn bậc hai thì biểu đồ lực cắt có dạng:',
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
    question: 'Khi thiết kế kết cấu BTCT chịu tải trọng thông thường, phải xét mấy loại trạng thái giới hạn (TTGH)',
    options: [
      'a. 1 TTGH',
      'b. 2 TTGH',
      'c. 3TTGH',
      'd. 4 TTGH',
    ],
    correct: 2
  },
  {
    question: 'Hệ số độ tin cậy của tải trọng gió so với hệ số vượt tải của hoạt tải là:',
    options: [
      'a. Bằng nhau',
      'b. Của tải trọng gió lớn hơn',
      'c. Của hoạt tải lớn hơn',
      'd. Tùy trường hợp',
    ],
    correct: 0
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
