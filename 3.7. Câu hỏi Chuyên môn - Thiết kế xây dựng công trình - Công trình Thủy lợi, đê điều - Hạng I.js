const questions = [
  {
    question: 'Cấp công trình thủy lợi xác định theo Bảng 1- QCVN 04-05:2022 được xem xét nâng lên một cấp (trừ công trình cấp đặc biệt) khi:',
    options: [
      'a. Nếu các hạng mục công trình chính xảy ra sự cố có thể gây thiệt hại cho công trình quan trọng liên quan đến an ninh quốc gia hoặc trung tâm kinh tế - chính trị quan trọng',
      'b. Nếu một trong các hạng mục công trình chính xảy ra sự cố có thể gây thiệt hại cho công trình quan trọng liên quan đến an ninh quốc gia hoặc trung tâm kinh tế - chính trị quan trọng',
      'c. Nếu các hạng mục công chủ yếu xảy ra sự cố có thể gây thiệt hại cho công trình quan trọng liên quan đến an ninh quốc gia hoặc trung tâm kinh tế - chính trị quan trọng',
      'd. Nếu một trong các hạng mục công trình xảy ra sự cố có thể gây thiệt hại cho công trình quan trọng liên quan đến an ninh quốc gia hoặc trung tâm kinh tế - chính trị quan trọng',
    ],
    correct: 1
  },
  {
    question: 'Công trình thủy lợi cấp II, mức bảo đảm tiêu cho khu dân cư, đô thị, khu công nghiệp,....có mặt trong hệ thống thủy lợi được lấy như thế nào?',
    options: [
      'a. Lấy theo tiêu chuẩn tiêu cho khu dân cư, đô thị, khu công nghiệp,.... và do cấp có thẩm quyền quy định nhưng không được thấp hơn mức đảm bảo tiêu 90%',
      'b. Lấy theo tiêu chuẩn tiêu cho khu dân cư, đô thị, khu công nghiệp,...nhưng không được thấp hơn mức đảm bảo tiêu 90%',
      'c. Do cấp có thẩm quyền quy định nhưng không được thấp hơn mức đảm bảo tiêu 90%',
      'd. Lấy theo tiêu chuẩn tiêu cho khu dân cư, đô thị, khu công nghiệp,.... và do cấp có thẩm quyền quy định nhưng không được thấp hơn mức đảm bảo tiêu 85%',
    ],
    correct: 0
  },
  {
    question: 'Khi thiết kế xây dựng công trình (trừ những công trình mà trong thực tế chưa có hình mẫu xây dựng tương tự) thì cấp công trinh là cấp mấy thì phải tiến hành một số nghiên cứu thực nghiệm để đối chứng, hiệu chỉnh, chính xác hoá các thông số kỹ thuật và tăng thêm độ tin cậy cho đồ án',
    options: [
      'a. Cấp I trở lên',
      'b. Cấp II trở lên',
      'c. Cấp đặc biệt',
      'd. Cấp II trở lên (nếu có kinh phí)',
    ],
    correct: 0
  },
  {
    question: 'Yêu cầu cống lấy nước đặt dưới đập đất hoặc đập đá của các hồ chứa nước có dung tích từ 20 x 106 m3 trở lên',
    options: [
      'a. Phải đặt trong hành lang dưới đập để thuận lợi cho công tác kiểm tra, sửa chữa và đảm bảo điều kiện làm việc an toàn cho cống và đập',
      'b. Phải đặt trong hành lang dưới đập để thuận lợi cho công tác kiểm tra, sửa chữa',
      'c. Phải đặt trong hành lang dưới đập để thuận lợi cho công tác kiểm tra và đảm bảo điều kiện làm việc an toàn cho cống và đập',
      'd. Phải đặt trong hành lang dưới đập để thuận lợi cho công tác bố trí các thiết bị quan trắc và đảm bảo điều kiện làm việc an toàn cho cống và đập',
    ],
    correct: 0
  },
  {
    question: 'Giới hạn phạm vi khoan phụt tạo màng chống thấm nền đập là nền đá của đập đất cấp I, cấp đặc biệt',
    options: [
      'a. Không vượt quá vị trí nền có lượng mất nước từ 5 đến 7Lu, cộng thêm 3m',
      'b. Không vượt quá vị trí nền có lượng mất nước từ 3 đến 5Lu, cộng thêm 3m',
      'c. Không vượt quá vị trí nền có lượng mất nước từ 3 đến 5Lu, cộng thêm 3m',
      'd. Không vượt quá vị trí nền có lượng mất nước từ 5 đến 7Lu, cộng thêm 5m',
    ],
    correct: 2
  },
  {
    question: 'Tuyến đê giao cắt với các công trình xây dựng xây dựng thuộc chuyên ngành khác (đường giao thông, bến cảng, công trình dân dụng, công trình quốc phòng), cấp công trình xác định như sau:',
    options: [
      'a. Cấp của các trình xây dựng thuộc chuyên ngành khác giao cắt với đê sông hoặc có mặt trong thành phần dự án xây dựng công trình đê sông lấy theo cấp của công trình xây dựng thuộc chuyên ngành.',
      'b. Cấp của các công trình xây dựng thuộc chuyên ngành khác giao cắt với đê sông hoặc có mặt trong thành phần dự án xây dựng công trình đê sông không được thấp hơn cấp của công trình đê sông',
      'c. Cấp của các công trình xây dựng thuộc chuyên ngành khác giao cắt với đê sông hoặc có mặt trong thành phần dự án xây dựng công trình đê sông lấy theo cấp của các công trình thủy công',
      'd. Cấp của các công trình xây dựng thuộc chuyên ngành khác giao cắt với đê sông hoặc có mặt trong thành phần dự án xây dựng công trình đê sông lấy theo cấp cấp của công trình đê sông',
    ],
    correct: 1
  },
  {
    question: 'Khi xảy ra sạt trượt cục bộ mái đê mà nguyên nhân chủ yếu lầ do chất lượng đắp đê không đảm bảo thì cần xử lý',
    options: [
      'a. Thiết thì phải thiết kế sửa lại mái cho thoải hơn bằng phương pháp đắp bù',
      'b. Đào hết khối đất trượt sau đó đắp lại, tăng hệ số mái',
      'c. Đào hết khối đất trượt sau đó đắp lại, đầm chặt đạt chỉ tiêu thiết kế và khôi phục lại mặt cắt như nguyên trạng',
      'd. Gia cố chân đê, đắt bù phần sạt trượt',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế xây dựng công trình thủy lợi dạng khối lớn phải xem xét phân bổ hợp lý vật liệu trong thân công trình, phù hợp với trạng thái nào?',
    options: [
      'a. Trạng thái dẻo chảy, biến dạng, yêu cầu chống thấm',
      'b. Trạng thái ứng suất, biến dạng, yêu cầu chống thấm và các yêu cầu cấu tạo khác',
      'c. Trạng thái ứng suất, phân bố nhiệt, yêu cầu chống thấm',
      'd. Trạng thái ứng suất, biến dạng, phân bố nhiệt',
    ],
    correct: 1
  },
  {
    question: 'Khi việc lấy nước (hoặc tiêu nước) gây ảnh hưởng xấu đến những hộ dùng nước hoặc dân sinh, môi trường hiện có thì cơ quan lập dự án cần làm gì?',
    options: [
      'a. Luận chứng về các ảnh hưởng này, nêu giải pháp khắc phục và làm sáng tỏ tính ưu việt khi có thêm dự án mới',
      'b. Luận chứng về các tác động môi trường, nêu giải pháp khắc phục và làm sáng tỏ tính ưu việt khi có thêm dự án mới',
      'c. Luận chứng về các tác động kinh tế, nêu giải pháp khắc phục và làm sáng tỏ tính ưu việt khi có thêm dự án mới',
      'd. Luận chứng về các tác động xã hội, nêu giải pháp khắc phục và làm sáng tỏ tính ưu việt khi có thêm dự án mới',
    ],
    correct: 0
  },
  {
    question: 'Tính toán thiết kế phòng lũ cụm công trình đầu mối các loại dựa vào các loại tần suất nào?',
    options: [
      'a. Tần suất thiết kế',
      'b. Tần suất lũ cực hạn',
      'c. Tần suất kiểm tra, Tần suất thiết kế, hoặc có thêm tần suất vượt kiểm tra',
      'd. Tần suất mưa cực đại',
    ],
    correct: 2
  },
  {
    question: 'Tần suất dòng chảy lớn nhất để thiết kế chặn dòng trong một mùa khô, không lớn hơn trị số nào đối với công trình cấp đặc biệt?',
    options: [
      'a. 1%',
      'b. 2%',
      'c. 5%',
      'd. 10%',
    ],
    correct: 2
  },
  {
    question: 'Thời gian quy định ngưỡng cửa lấy nước của công trình cấp 1 để không bị bùn cát bồi lấp trong thời kỳ khai thác sau khi hồ tích nước không được ít hơn:',
    options: [
      'a. 200 năm',
      'c. 90 năm',
      'd. 150 năm',
    ],
    correct: 1
  },
  {
    question: 'Ngoài tràn xả lũ chính, những hồ nào phải bố trí thêm tràn xả lũ dự phòng (tràn xả lũ vượt kiểm tra)?',
    options: [
      'a. Hồ từ cấp III trở lên.',
      'b. Hồ từ cấp II trở lên.',
      'c. Hồ từ cấp I trở lên.',
      'd. Chỉ áp dụng cho hồ cấp đặc biệt.',
    ],
    correct: 2
  },
  {
    question: 'Trong thiết kế công trình xả lũ, khi nào thì phải làm thí nghiệm mô hình đề luận chứng tính hợp lý về bố trí và thiết kế thủy lực?',
    options: [
      'a. Công trình cấp I trở lên.',
      'b. Công trình cấp I trở lên hoặc công trình cấp II có điều kiện thủy lực phức tạp.',
      'c. Công trình cấp II trở lên.',
      'd. Công trình cấp III trở lên.',
    ],
    correct: 1
  },
  {
    question: 'Khi sử dụng nhiều loại đất để đắp đập, chỉ tiêu thiết kế của đất đắp được xác định như thế nào?',
    options: [
      'a. Bằng chỉ tiêu trung bình, áp dụng chung cho toàn mặt cắt.',
      'b. Bằng chỉ tiêu của loại đất yếu nhất.',
      'c. Thí nghiệm và chọn chỉ tiêu tương ứng cho từng loại đất bố trí ở từng vùng riêng biệt của mặt cắt.',
      'd. Thí nghiệm với mẫu bằng vật liệu trộn lẫn tất cả các loại đất.',
    ],
    correct: 2
  },
  {
    question: 'Chiều dày đáy tường nghiêng bằng bê tông cốt thép của đập đất chọn bằng bao nhiêu?',
    options: [
      'a. Không nhỏ hơn H/Jcp (H-cột nước làm việc lớn nhất; Jcp: của vật liệu bê tông)',
      'b. Không nhỏ hơn H/10.',
      'c. Theo điều kiện cấu tạo.',
      'd. Bằng 0,3 + m.H (mét); m lấy từ 0,003 đến 0,004.',
    ],
    correct: 3
  },
  {
    question: 'Khi có cống ngầm đặt dưới đập đất thì cần áp dụng biện pháp nào để nối tiếp thân cống với đất đắp đập?',
    options: [
      'a. Làm các tường (cừ tai) cắm vào thân đập.',
      'b. Làm tầng lọc ngược bao quanh ống cống ở đoạn cuối cống.',
      'c. Cả a, b và đắp đất sét bọc quanh cống.',
      'd. Cả a và',
    ],
    correct: 2
  },
  {
    question: 'Chiều rộng của khớp nối nhiệt lâu dài của đập bê tông trên nền đá được xác định trên cơ sở tính toán biến dạng của các đoạn đập kề nhau và có đặc điểm nào sau đây?',
    options: [
      'a. Thay đổi theo khoảng cách ngang từ vị trí xét đến mặt thượng lưu đập.',
      'b. Thay đổi theo khoảng cách đứng từ vị trí xét đến mặt nền.',
      'c. Cả a và',
      'b. d. Không thay đổi trên toàn khớp nối.',
    ],
    correct: 0
  },
  {
    question: 'Bảo vệ mặt tràn không bị xâm thực khi lưu tốc dòng chảy vượt quá 15m/s, cần bổ sung biện pháp nào sau đây?',
    options: [
      'a. Bọc thép phần mặt tràn có khả năng bị xâm thực.',
      'b. Làm mố nhám trên mặt tràn để giảm vận tốc dòng chảy.',
      'c. Cả a và',
      'b. d. Hạn chế mở cửa van để khống chế lưu tốc trên mặt tràn.',
    ],
    correct: 2
  },
  {
    question: 'Mục đích bố trí tầng lọc ngược phía dưới lớp gia cố mái thượng lưu đập đất là gì?',
    options: [
      'a. Đề giảm chiều dày lớp gia cố chính.',
      'b. Phòng chống xói trôi đất thân đập do sóng và khi mực nước hồ hạ đột ngột.',
      'c. Giảm lún không đều của lớp gia cố chính.',
      'd. Cả 3 ý trên.',
    ],
    correct: 1
  },
  {
    question: 'Chiều dày đáy lõi chống thấm ở đập đất nhiều khối được chọn như thế nào?',
    options: [
      'a. Theo điều kiện cấu tạo với mái hai bên lõi m = 0,2',
      'b. Thỏa mãn độ bền chống thấm của loại đất làm lõi: t = Z/Jcp',
      'c. Không nhỏ hơn 1/4 chiều cao cột nước.',
      'd. Cả b và',
    ],
    correct: 3
  },
  {
    question: 'Khi phụt vữa xi măng trong nền đá của đập đất với điều kiện địa chất bình thường và chiều dày màn phụt từ 1 đến 2m thì gradient thủy lực cho phép của màn bằng bao nhiêu?',
    options: [
      'a. 25',
      'b. 18',
      'c. 12',
      'd. 10',
    ],
    correct: 1
  },
  {
    question: 'Trong kết cấu của khớp nối biến dạng lâu dài của đập bê tông cần bố trí những bộ phận gì?',
    options: [
      'a. Vật chắn nước, ống thu nước phía sau vật chắn.',
      'b. Giếng và hành lang kiểm tra, sửa chữa.',
      'c. Cả a và',
      'b. d. Cả a, b và ống để rót vật liệu chống thấm vào khớp nối.',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế đập bê tông trên nền không phải đá có sử dụng cừ chống thấm phía dưới sân trước đập thì chiều sâu đóng cừ được chọn như thế nào?',
    options: [
      'a. Chiều sâu đóng cừ không nhỏ hơn 3m.',
      'b. Chiều sâu đóng cừ không nhỏ hơn 2,5m; chiều sâu phần cừ đóng vào đất khống thấm không nhỏ hơn 1m.',
      'c. Chiều sâu phần cừ đóng vào đất không thấm không nhỏ hơn 0,5m',
      'd. Cả a và',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế mặt cắt đập bê tông, khoảng cách bt từ mặt thượng lưu đập đến trục ống tiêu nước hay mặt thượng lưu của hành lang cần lấy bằng bao nhiêu?',
    options: [
      'a. Không nhỏ hơn h/Jcp, với h- cột nước trên mặt cắt tính toán, Jcp-gradient thấm cho phép của bê tông mặt thượng lưu đập.',
      'b. Theo a, nhưng không nhỏ hơn 1m.',
      'c. Theo a, nhưng không nhỏ hơn 2m.',
      'd. Theo a, nhưng không nhỏ hơn 3m.',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế đập bê tông trên nền đá, khoảng cách từ mặt hạ lưu của màn chống thấm đến vị trí của lỗ khoan thoát nước không được nhỏ hơn 2 lần khoảng cách giữa các lỗ khoan của màn chống thấm và điều kiện nào sau đây?',
    options: [
      'a. Không nhỏ hơn 2m.',
      'b. Không nhỏ hơn 3m.',
      'c. Không nhỏ hơn 4m.',
      'd. Không nhỏ hơn 5m.',
    ],
    correct: 2
  },
  {
    question: 'Sân phù thượng lưu để chống thấm cho nền bồi tích của đập đất nên áp dụng khi nào?',
    options: [
      'a. Nền bồi tích dày.',
      'b. Có sẵn đất chống thấm thích hợp ở gần vị trí đập.',
      'c. Cả a và b, áp dụng với đập vừa và thấp.',
      'd. Cả a và',
    ],
    correct: 2
  },
  {
    question: 'Để chống thấm cho nền bồi tích của đập đất, việc sử dụng tường răng có hiệu quả nhất trong điều kiện nào?',
    options: [
      'a. Nền thấm có chiều dày dưới 10m; mực nước ngầm thấp.',
      'b. Đập vừa và thấp.',
      'c. Đập vừa và cao.',
      'd. a và',
    ],
    correct: 0
  },
  {
    question: 'Vị trí hợp lý của tường răng chống thấm cho nền đập đất đồng chất được xác định như thế nào?',
    options: [
      'a. Tại tim đập.',
      'b. Cách chân đập thượng lưu từ 1/2 đến 1/3 bề rộng đáy đập.',
      'c. Cách chân đập thượng lưu từ 1/3 đến 1/4 bề rộng đáy đập.',
      'd. Sát chân đập thượng lưu.',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế đập đất từ cấp II trở lên, chiều sâu màn phụt chống thấm trong nền đá nứt nẻ mạnh được quy định như thế nào?',
    options: [
      'a. Đến độ sâu có lượng mất nước từ 3Lu đến 5Lu, cộng thêm 5m.',
      'b. Không vượt quá 0,5H (H- đầu nước tại mặt cắt đang xét).',
      'c. Theo a, nhưng không vượt quá 1H.',
      'd. Cả a và',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế công trình thủy lợi (đập ngăn nước, đập kiểm soát triều, đập ngăn mặn giữ ngọt) theo công nghệ mới với phương án xem xét là đập xà lan trên nền đất dính, tư vấn thiết kế cần xém xét lựa chọn xác định khẩu độ thoát nước nhằm đảm bảo mục tiêu và nhiệm vụ của công trình. Khẩu độ này nên được lựa chọn theo phương án nào trong các phương án sau đây:',
    options: [
      'a. Nên chọn khẩu độ đập lớn làm cho lưu lượng đơn vị qua đập quá nhỏ. Khẩu độ thoát nước nên lựa chọn bằng 80% đến 90% bề rộng thoát nước của sông hiện trạng.',
      'b. Không nên chọn khẩu độ đập quá lớn làm cho lưu lượng đơn vị qua đập quá nhỏ vừa gây bồi lắng cho công trình vừa làm tăng khối lượng công trình gây lãng phí. Khẩu độ thoát nước nên lựa chọn bằng 60% đến 80% bề rộng thoát nước của sông hiện trạng.',
      'c. Nên chọn khẩu độ đập nhỏ làm tăng lưu lượng đơn vị qua đập tránh gây bồi lắng ở thượng hạ lưu công trình. Khẩu độ thoát nước nên lựa chọn bằng 40% đến 60% bề rộng thoát nước của sông hiện trạng.',
      'd. Nên chọn khẩu độ đập lớn giúp giảm lưu lượng đơn vị qua đập tránh gây xói lở ở thượng hạ lưu công trình. Khẩu độ thoát nước nên lựa chọn bằng 75% đến 85% bề rộng thoát nước của sông hiện trạng',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế công trình thủy lợi (đập ngăn nước, đập kiểm soát triều, đập ngăn mặn giữ ngọt) theo công nghệ mới với phương án xem xét là đập xà lan trên nền đất dính, khi tính toán thiết kế cho thấy khi đặt đập xà lan trên nền đất không đảm bảo ổn định do lực đứng V > Vo, hoặc lún quá lớn thì có thể dùng biện pháp nào sau đây để xử lý:',
    options: [
      'a. Xử lý nền bằng giải pháp cọc tràm hoặc cọc xi măng đất.',
      'b. Xử lý nền đập xà lan bằng lớp tiếp xúc đá dăm',
      'c. Sử dụng bản cản trượt để tăng khả năng chịu lực ngang của đập xà lan.',
      'd. Tất cả các biện pháp trên',
    ],
    correct: 0
  },
  {
    question: 'Khi thiết kế công trình thủy lợi (đập ngăn nước, đập kiểm soát triều, đập ngăn mặn giữ ngọt) theo công nghệ mới với phương án xem xét là đập xà lan trên nền đất ở trạng thái dẻo mềm, dẻo chảy và chảy, các loại đất bùn, đất than bùn, khi tính toán thiết kế cho thấy khi đặt đập xà lan trên nền đất không đảm bảo ổn định do lực đứng V < Vo, tải trọng ngang H không quá lớn thì có thể dùng biện pháp nào sau đây để xử lý:',
    options: [
      'a. Xử lý nền bằng giải pháp cọc tràm hoặc cọc xi măng đất.',
      'b. Xử lý nền đập xà lan bằng lớp tiếp xúc đá dăm',
      'c. Sử dụng bản cản trượt để tăng khả năng chịu lực ngang của đập xà lan.',
      'd. Tất cả các biện pháp trên',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế công trình thủy lợi (đập ngăn nước, đập kiểm soát triều, đập ngăn mặn giữ ngọt) theo công nghệ mới với phương án xem xét là đập xà lan trên nền đất dính, khi tính toán thiết kế cho thấy khi đặt đập xà lan trên nền đất không đảm bảo ổn định trượt thì có thể dùng biện pháp nào sau đây để xử lý:',
    options: [
      'a. Xử lý nền bằng giải pháp cọc tràm hoặc cọc xi măng đất.',
      'b. Xử lý nền đập xà lan bằng lớp tiếp xúc đá dăm',
      'c. Sử dụng bản cản trượt để tăng khả năng chịu lực ngang của đập xà lan.',
      'd. Sử dụng kết hợp phương án a và phương án b',
    ],
    correct: 2
  },
  {
    question: 'Đập xà lan là công trình bê tông cốt thép trên nền đất nên yêu cầu bố trí thiết bị quan trắc cần tuân theo TCVN 8215: 2009. Việc quan trắc chuyển vị của các trụ pin, trụ biên, áp lực thấm ở nền, đường bão hòa ở hai mang đập xà lan là rất quan trọng cần phải bố trí thiết bị quan trắc. Sau khi tính toán xác định được công trình có cấp công trình là cấp III, thì cần bố trí các nội dung quan trắc nào sau đây:',
    options: [
      'a. Quan trắc chuyển vị và quan trắc thấm',
      'b. Quan trắc thấm',
      'c. Quan trắc áp lực nước, mạch động',
      'd. Cả ba nội dung quan trắc trên',
    ],
    correct: 0
  },
  {
    question: 'Hãy chọn câu trả lời ĐÚNG cho các câu khẳng định sau về xác định cấp công trình đê biển xây mới theo TCVN hiện hành?',
    options: [
      'a. Cấp công trình đê biển không cần căn cứ vào cấp của công trình bảo vệ bờ có liên quan',
      'b. Cấp của công trình đê biển có thể xem xét điều chỉnh tăng lên một cấp để bảo vệ thành phố và các khu vực kinh tế, văn hóa, công nghiệp, quốc phòng, an ninh quan trọng.',
      'c. Hai đoạn đê biển khác cấp nối liền nhau bắt buộc phải chỉnh cùng 1 cấp đê',
      'd. Cấp công trình đê biển xác định theo các tiêu chí khác nhau thì giống như nhau',
    ],
    correct: 1
  },
  {
    question: 'Đê cho phép sóng tràn qua đỉnh khi thiết kế cần lưu ý vấn đề nào sau đây:',
    options: [
      'a. Mặt đê và mái đê phía đồng cần bố trí hệ thống thoát nước kịp thời, gia cố mái đê phía đồng hoặc có biện pháp giảm chiều cao sóng trước đê',
      'b. Mái đê phía biển cần bố trí hệ thống thoát nước kịp thời, gia cố mái đê phía biển hoặc có biện pháp giảm chiều cao sóng trước đê',
      'c. Mặt đê cần làm rộng kết hợp đường giao thông trên đỉnh đê',
      'd. Tường đỉnh chắn sóng không nên cao quá vật liệu bê tông, bê tông cốt thép hoặc các loại vật liệu khác',
    ],
    correct: 0
  },
  {
    question: 'Khối lượng khối phủ (đá hoặc cấu kiện bê tông) đặt ổn định trên mái nghiêng của đê/kè biển phụ thuộc vào những yếu tố nào sau đây?',
    options: [
      'a. Khối lượng riêng của nước ngọt, hệ số mái đê phía đồng, chiều rộng đỉnh đê',
      'b. Khối lượng riêng nước biển, hệ số mái đê phía đồng và hệ số mái đê phía biển',
      'c. Chiều cao sóng tính toán, hệ số ổn định của khối phủ mái KD, hệ số mái đê phía biển',
      'd. Chiều cao sóng leo tính toán, khối lượng riêng của nước ngọt, hệ số mái đê phía đồng',
    ],
    correct: 2
  },
  {
    question: 'Khi cần xử lý nền đê biển đắp trên đất yếu, giải pháp nào nên được sử dụng khi độ dày tầng đất yếu nhỏ hơn 3m?',
    options: [
      'a. Sử dụng vải địa kỹ thuật',
      'b. Đắp lăng thể phản áp',
      'c. Cố kết nền, thoát nước theo phương thẳng đứng và thoát nước hai chiều',
      'd. Thay nền đất yếu bằng vật liệu khác có chỉ tiêu cơ lý tốt hơn',
    ],
    correct: 3
  },
  {
    question: 'Khi thiết kế lớp bảo vệ mái đê phía biển hoặc kè biển bằng kết cấu là đá xây hoặc bê tông đổ tại chỗ cần lưu ý điều gì để tránh áp lực đẩy ngược lớn làm phá hoại lớp bảo vệ/tấm kè?',
    options: [
      'a. Đục lỗ thoát nước theo hình hoa mai đường kính lỗ từ 5cm tới 10cm ở phần mực nước thay đổi, dưới làm lớp lọc thoát nước dễ dàng',
      'b. Làm khe biến dạng khoảng cách các khe từ 5m tới 15m dọc theo hướng trục đê',
      'c. Làm kết cấu lớp bảo vệ xây trong các khung bê tông hoặc bê tông cốt thép gia cố',
      'd. Làm các lớp vải địa kỹ thuật đặt dưới các kết cấu bảo vệ',
    ],
    correct: 0
  },
  {
    question: 'Trong thiết kế đập đất, vị trí nào sau đây là phù hợp nhất để bố trí màn khoan phụt cho đập đất đồng chất?',
    options: [
      'a. Tại chân khay của bộ phận chống thấm, cách chân đập thượng lưu từ 1/3 đến 1/2 bề rộng đáy đập.',
      'b. Tại chân khay của bộ phận chống thấm, cách chân đập thượng lưu từ 1/4 đến 1/3 bề rộng đáy đập.',
      'c. Trùng với trục đập hoặc tim cơ thượng lưu.',
      'd. Cả a và c đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Một loại đất có các đặc tính sau: Hàm lượng muối sunphat: 11% theo trọng lượng; Hàm lượng chất hữu cơ đã phân hủy hoàn toàn ở trạng thái không định hình: 9% theo trọng lượng; Độ ẩm tự nhiên: 18%; Chỉ số dẻo: 15. Hãy đánh giá khả năng sử dụng loại đất này làm vật liệu đắp đập:',
    options: [
      'a. Có thể sử dụng trực tiếp làm vật liệu đắp đập',
      'b. Không thể sử dụng làm vật liệu đắp đập',
      'c. Có thể sử dụng sau khi xử lý giảm hàm lượng chất hữu cơ xuống dưới 5%',
      'd. Có thể sử dụng sau khi xử lý giảm hàm lượng muối sunphat xuống dưới 5%',
    ],
    correct: 1
  },
  {
    question: 'Một loại đất có các đặc tính sau: Hàm lượng muối sunphat: 11% theo trọng lượng; Hàm lượng chất hữu cơ đã phân hủy hoàn toàn ở trạng thái không định hình: 9% theo trọng lượng; Độ ẩm tự nhiên: 18%; Chỉ số dẻo: 15. Hãy đánh giá khả năng sử dụng loại đất này làm vật liệu đắp đập:',
    options: [
      'a. Có thể sử dụng trực tiếp làm vật liệu đắp đập',
      'b. Không thể sử dụng làm vật liệu đắp đập',
      'c. Có thể sử dụng sau khi xử lý giảm hàm lượng chất hữu cơ xuống dưới 5%',
      'd. Có thể sử dụng sau khi xử lý giảm hàm lượng muối sunphat xuống dưới 5%',
    ],
    correct: 3
  },
  {
    question: 'Khi sử dụng đất sét có tính trương nở để đắp đập và làm vật liệu chống thấm trong đập, cần áp dụng biện pháp nào sau đây để đảm bảo đập ổn định?',
    options: [
      'a. Tăng độ ẩm đất đắp lên trên 5% so với độ ẩm tối ưu (Wop)',
      'b. Giảm nhẹ dung trọng khô nhưng độ chặt (K) không được thấp hơn 0,90',
      'c. Đắp lớp bảo vệ và gia tải lên trên tạo áp lực ngoài nhỏ hơn áp lực trương nở',
      'd. Giảm nhẹ dung trọng khô nhưng độ chặt (K) không được thấp hơn 0,95; tăng độ ẩm đất đắp lên trên (2 đến 3) % so với độ ẩm tối ưu (Wop)',
    ],
    correct: 3
  },
  {
    question: 'Khi thiết kế tường nghiêng chống thấm bằng bê tông cốt thép cho một đập đất có chiều cao 55m, cột nước lớn nhất ứng với MNDBT là 50m, biến dạng lún lớn nhất dự kiến của thân đập là 0.5% chiều cao đập. Chiều dày phần đáy tối thiểu của tường nghiêng này nên là bao nhiêu?',
    options: [
      'a. 0,3 m',
      'b. 0,45 m',
      'c. 0,50 m',
      'd. 0,525 m',
    ],
    correct: 1
  },
  {
    question: 'Một đập đất cấp đặc biệt có chiều cao 75m được xây dựng ở vùng có lượng mưa lớn và hoạt động trong điều kiện bình thường. Hệ số an toàn nhỏ nhất cho phép [K] theo quy định là 1.5. Để đảm bảo an toàn và hiệu quả kinh tế, hệ số an toàn tính toán không nên vượt quá bao nhiêu so với hệ số an toàn nhỏ nhất cho phép?',
    options: [
      'a. 1,50',
      'b. 1,65',
      'c. 1,8',
      'd. 2,00',
    ],
    correct: 2
  },
  {
    question: 'Khi xác định trạng thái ứng suất - biến dạng của đập và nền móng, việc xem xét các hành lang theo hướng dọc theo trục đập được yêu cầu trong trường hợp nào?',
    options: [
      'a. Khi chiều rộng của hành lang lớn hơn 5% chiều rộng của đập',
      'b. Khi kích thước tổng thể mặt cắt ngang lớn nhất của lỗ khoét lớn hơn 10% chiều cao của đập',
      'c. Khi chiều cao của hành lang lớn hơn 5% chiều cao của đập',
      'd. Khi kích thước tổng thể mặt cắt ngang lớn nhất của lỗ khoét lớn hơn 10% chiều rộng của đập',
    ],
    correct: 3
  },
  {
    question: 'Trong trường hợp thiết kế đập trên nền đá với tỷ số 5≤lch/h≤10 (trong đó lch chiều rộng của hẻm núi ở cao độ đỉnh đập, h là chiều cao của đập), những loại đập nào có thể được xem xét để lựa chọn?',
    options: [
      'a. Đập trọng lực hoặc trụ chống.',
      'b. Đập vòm hoặc vòm trọng lực.',
      'c. Đập bản chống hoặc đập vòm.',
      'd. Cả a và b đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Kè bảo vệ trực tiếp mái đê, bờ sông bao gồm:',
    options: [
      'a. Kè mái nghiêng, kè tường đứng, kè sườn chống.',
      'b. Kè mái nghiêng, kè tường đứng, kè tường cừ bản thép.',
      'c. Kè mái nghiêng, kè tường đứng, kè tường đứng kết hợp kè mái nghiêng.',
      'd. Kè mái nghiêng, kè tường đứng, kè sườn chống, kè tường cừ bản thép.',
    ],
    correct: 2
  },
  {
    question: 'Kè mỏ hàn bao gồm:',
    options: [
      'a. Kè mỏ hàn bằng đá hộc, kè mỏ hàn lõi đất có lớp phủ bảo vệ, kè mỏ hàn cọc.',
      'b. Kè mỏ hàn bằng đá hộc, kè mỏ hàn lõi đất có lớp phủ bảo vệ, kè mỏ hàn gỗ.',
      'c. Kè mỏ hàn bằng đá hộc, kè mỏ hàn lõi đất bọc đá, kè mỏ hàn gỗ.',
      'd. Kè mỏ hàn bằng đá hộc, kè mỏ hàn lõi đất bọc đá, kè mỏ hàn cọc',
    ],
    correct: 0
  },
  {
    question: 'Theo nhiệm vụ, cống được phân thành các loại sau:',
    options: [
      'a. Cống tưới, cống tiêu, cống điều tiết, cống phân lũ, cống ngăn triều.',
      'b. Cống lấy nước, cống tiêu nước, cống điều tiết, cống phân lũ, cống ngăn triều.',
      'c. Cống lấy nước, cống tiêu nước, cống điều tiết, cống phân lũ, cống ngăn triều, cống giữ ngọt.',
      'd. Cống tưới, cống tiêu, cống điều tiết, cống phân lũ, cống ngăn triều, cống giữ ngọt.',
    ],
    correct: 1
  },
  {
    question: 'Đối với kênh có chiều sâu H như thế nào thì cần phải làm thêm cơ ở cả hai mái (mái trong và mái ngoài) để tăng hệ số an toàn ổn định chống trượt?',
    options: [
      'a. Kênh có chiều sâu H lớn hơn 5,0 m;',
      'b. Kênh có chiều sâu H lớn hơn 4,5 m;',
      'c. Kênh có chiều sâu H lớn hơn 4,0 m;',
      'd. Kênh có chiều sâu H lớn hơn 3,5 m.',
    ],
    correct: 0
  },
  {
    question: 'Để tránh sự phát triển của cỏ dại trong lòng kênh, vận tốc nhỏ nhất trong kênh không được nhỏ hơn giá trị nào sau đây?',
    options: [
      'a. 0,2 m/s;',
      'b. 0,3 m/s;',
      'c. 0,4 m/s;',
      'd. 0,5 m/s.',
    ],
    correct: 1
  },
  {
    question: 'Để đảm bảo tấm bê tông lắp ghép tiếp xúc tốt với nền đất dính, cần có lớp đệm bằng sạn, sỏi đã được san phẳng với chiều dày là bao nhiêu?',
    options: [
      'a. 2 cm đến 3 cm;',
      'b. 3 cm đến 4 cm;',
      'c. 4 cm đến 6 cm;',
      'd. 5 cm đến 10 cm.',
    ],
    correct: 3
  },
  {
    question: 'Mô hình mưa tiêu thiết kế cho hệ thống thủy lợi phụ vụ cho sản xuất nông nghiệp bao gồm?',
    options: [
      'a. Tổng lượng mưa của cả trận mưa tương ứng với tần suất thiết kế và phân phối lượng mưa theo thời gian của trận mưa;',
      'b. Số ngày mưa của trận mưa, tổng lượng mưa của cả trận mưa tương ứng với tần suất thiết kế, và phân phối lượng mưa theo thời gian của trận mưa;',
      'c. Số ngày mưa của trận mưa, tổng lượng mưa của cả trận mưa tương ứng với tần suất thiết kế, và cường độ mưa bình quân;',
      'd. Số ngày mưa của trận mưa, tổng lượng mưa của cả trận mưa tương ứng với tần suất thiết kế và phân phối lượng mưa theo thời gian của trận mưa.',
    ],
    correct: 1
  },
  {
    question: 'Các yếu tố cần thiết khi xác định mức đảm bảo thiết kế chung cho hệ thống kênh có nhiều chức năng?',
    options: [
      'a. Số lượng đối tượng phục vụ trong hệ thống và tỷ lệ về tổng lượng nước cần đáp ứng cho từng đối tượng;',
      'b. Mức đảm bảo phục vụ cho đối tượng và số lượng đối tượng phục vụ trong hệ thống;',
      'c. Mức đảm bảo phục vụ cho đối tượng, tỷ lệ về tổng lượng nước cần đáp ứng cho từng đối tượng, và số lượng đối tượng phục vụ trong hệ thống;',
      'd. Mức đảm bảo phục vụ cho đối tượng, tỷ lệ về tổng lượng nước cần đáp ứng cho từng đối tượng, và chiều dài của tuyến kênh cấp nước.',
    ],
    correct: 2
  },
  {
    question: 'Khoảng cách tối thiểu giữa các thanh thép trong đúc cấu kiện kênh bê tông cốt thép đúc sẵn căn cứ theo:',
    options: [
      'a. Đường kính cốt thép, khoảng cách lớn nhất không nên chọn quá 20 cm;',
      'b. Đường kính cốt thép, khoảng cách lớn nhất không nên chọn quá 15 cm;',
      'c. Đường kính cốt thép, khoảng cách lớn nhất không nên chọn quá 10 cm;',
      'd. Đường kính cốt thép, khoảng cách lớn nhất không nên chọn quá 5 cm.',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định trong TCVN 4118 : 2021 khi thiết kế kênh xây, kênh bê tông và kênh làm bằng các loại vật liệu kiên cố thì với lưu lượng từ bao nhiêu m3/s trở lên thì phải tính toán kết cấu bản đáy và bờ kênh?',
    options: [
      'a. 2 m3/s;',
      'b. 5 m3/s;',
      'c. 10 m3/s;',
      'd. 15 m3/s.',
    ],
    correct: 2
  },
  {
    question: 'Khi tính toán lưu lượng bất thường của kênh, ứng với lưu lượng thiết kế nào sau đây thì lấy hệ số KQ (hệ số bất thường) từ 1,15 đến 1,20 ?',
    options: [
      'a. Qtk< 1,0 m3/s;',
      'b. Qtk từ 1,0 m3/s đến 10,0 m3/s;',
      'c. Qtk từ 10,0 m3/s đến 50,0 m3/s;',
      'd. Qtk > 50,0 m3/s.',
    ],
    correct: 1
  },
  {
    question: 'Cao độ mực nước thiết kế của hệ thống kênh cấp nước phụ thuộc vào:',
    options: [
      'a. Cao độ mặt ruộng được tưới;',
      'b. Tổn thất cột nước của dòng chảy dọc theo tuyến kênh đưa nước đến mặt ruộng;',
      'c. Tổn thất cột nước khi chảy qua các công trình trên kênh;',
      'd. Cả 3 ý trên.',
    ],
    correct: 3
  },
  {
    question: 'Đối với trạm bơm cấp nước tưới, vị trí trạm bơm cần đảm bảo?',
    options: [
      'a. Đặt ở vị trí cao để khống chế được hầu hết diện tích cần tưới mà đường kênh (hoặc đường ống) tưới là ngắn nhất và khối lượng đào đắp ít nhất;',
      'b. Lấy nước xuôi thuận, không gây bồi lắng ở cửa lấy nước, không gây xói lở bờ nguồn nước;',
      'c. Hạn chế sự lắng đọng bùn cát làm bồi lấp cửa lấy nước và công trình dẫn nước; hạn chế lắng đọng bùn cát trên kênh (hoặc đường ống) tưới.',
      'd. Cả a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Đối với trạm bơm thoát nước, vị trí trạm bơm cần đảm bảo ?',
    options: [
      'a. Đặt ở vị trí thấp để khống chế diện tích tiêu nhiều nhất, tập trung nước nhanh về trạm bơm,',
      'b. Khối lượng đào đắp hệ thống kênh (hoặc đường ống) tiêu là ít nhất;',
      'c. Thích hợp với việc phân khu tiêu nước, giảm bớt năng lượng tiêu thụ, các công trình không chồng chéo lên nhau',
      'd. Cả a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Mực nước nhỏ nhất thiết kế ở bể hút trạm bơm cấp nước (Zbh.min.TK) có quan hệ với mực nước nhỏ nhất ở nguồn nước ứng với mức đảm bảo phục vụ ?',
    options: [
      'a. Tần suất 90% đối với trạm bơm có cấp công trình từ cấp đặc biệt đến cấp III;',
      'b. Tần suất 85% đối với trạm bơm có cấp công trình từ cấp đặc biệt đến cấp III;',
      'c. Tần suất 80% đối với trạm bơm có cấp công trình từ cấp đặc biệt đến cấp III;',
      'd. Tần suất 75% đối với trạm bơm có cấp công trình từ cấp đặc biệt đến cấp III.',
    ],
    correct: 1
  },
  {
    question: 'Mực nước bể hút nhỏ nhất kiểm tra của trạm bơm cấp nước (Zbh.min.KT) có quan hệ với mực nước nhỏ nhất ở nguồn nước ứng với?',
    options: [
      'a. Tần suất 95% đối với trạm bơm có cấp công trình từ cấp đặc biệt đến cấp III;',
      'b. Tần suất 90% đối với trạm bơm có cấp công trình từ cấp đặc biệt đến cấp III;',
      'c. Tần suất 85% đối với trạm bơm có cấp công trình từ cấp đặc biệt đến cấp III',
      'd. Tần suất 80% đối với trạm bơm có cấp công trình từ cấp đặc biệt đến cấp III',
    ],
    correct: 1
  },
  {
    question: 'Các cột nước bơm đặc trưng của trạm bơm cấp, thoát nước gồm?',
    options: [
      'a. Cột nước bơm trung bình, lớn nhất, nhỏ nhất',
      'b. Cột nước bơm trung bình thiết kế, lớn nhất thiết kế, nhỏ nhất thiết kế',
      'c. Cột nước bơm trung bình, lớn nhất kiểm tra, nhỏ nhất kiểm tra',
      'd. Cột nước bơm trung bình thiết kế, lớn nhất thiết kế, nhỏ nhất thiết kế, lớn nhất kiểm tra, nhỏ nhất kiểm tra.',
    ],
    correct: 3
  },
  {
    question: 'Máy bơm được chọn phải thỏa mãn các yêu cầu kỹ thuật nào?',
    options: [
      'a. Bảo đảm cung cấp đủ lưu lượng thiết kế (Qb.TK) khi làm việc với các cột nước thiết kế;',
      'b. Có hiệu suất cao trong phạm vi làm việc yêu cầu; Khả năng chống khí thực tốt; Động cơ đi kèm không bị quá tải trong phạm vi làm việc yêu cầu;',
      'c. Có độ tin cậy làm việc cao; Thuận tiện cho việc mua sắm, vận chuyển, lắp đặt, vận hành, bảo dưỡng, thay thế linh kiện.',
      'd. Bao gồm a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Xác định hình dạng và kết cấu của nhà máy bơm phải dựa vào các yếu tố chính nào?',
    options: [
      'a. Hình dạng, kích thước và các đặc điểm của máy bơm và động cơ kéo máy bơm; Điều kiện địa hình, địa chất nơi đặt trạm; Điều kiện khí hậu; Vật liệu xây dựng.',
      'b. Hình dạng, kích thước và các đặc điểm của máy bơm và động cơ kéo máy bơm; Đặc điểm của nguồn nước; Điều kiện khí hậu; Vật liệu xây dựng.',
      'c. Đặc điểm của nguồn nước; Điều kiện địa hình, địa chất nơi đặt trạm; Điều kiện khí hậu; Vật liệu xây dựng.',
      'd. Hình dạng, kích thước và các đặc điểm của máy bơm và động cơ kéo máy bơm; Đặc điểm của nguồn nước; Điều kiện địa hình, địa chất nơi đặt trạm; Điều kiện khí hậu; Vật liệu xây dựng.',
    ],
    correct: 3
  },
  {
    question: 'Các điều kiện xây dựng nhà máy bơm khối tảng gồm?',
    options: [
      'a. Lắp máy bơm lớn với lưu lượng một máy ≥ 3 m3 /s; Sử dụng máy bơm trục đứng; Độ cao đặt máy hs ≤ 0; Biên độ dao động mực nước bể hút ΔZ < 2 m; Nền rắn chắc; nếu nền mềm yếu thì phải được xử lý.',
      'b. Lắp máy bơm lớn với lưu lượng một máy ≥ 2 m3 /s; Sử dụng máy bơm trục đứng; Độ cao đặt máy hs ≤ 0; Biên độ dao động mực nước bể hút ΔZ có thể bất kỳ; Nền rắn chắc; nếu nền mềm yếu thì phải được xử lý.',
      'c. Lắp máy bơm lớn với lưu lượng một máy ≥ 3 m3 /s; Sử dụng máy bơm trục đứng; Biên độ dao động mực nước bể hút ΔZ có thể bất kỳ; Nền rắn chắc; nếu nền mềm yếu thì phải được xử lý.',
      'd. Lắp máy bơm lớn với lưu lượng một máy ≥ 2 m3 /s; Sử dụng máy bơm trục đứng; Độ cao đặt máy hs ≤ 0; Biên độ dao động mực nước bể hút ΔZ < 3 m.',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế buồng ướt phải thoả mãn các yêu cầu nào?',
    options: [
      'a. Hạn chế các dòng xoáy mặt và các dòng xoáy cục bộ trong buồng hút, đặc biệt là chỗ vào loa hướng nước của máy bơm;',
      'b. Độ ngập miệng vào loa hút nước đảm bảo không khí không lọt vào miệng loa do hiện tượng xoáy mặt; Khoảng cách từ miệng loa hút nước đến đáy buồng và đến tường sau hợp lý;',
      'c. Hạn chế sự ảnh hưởng của các máy bơm bên cạnh (khi bố trí nhiều máy bơm chung một buồng) để máy bơm vẫn làm việc bình thường;',
      'd. Bao gồm cả a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Bể xả (còn gọi là bể tháo hay công trình tháo nước), có các nhiệm vụ nào?',
    options: [
      'a. Nối tiếp dòng chảy từ ống đẩy với kênh xả phía sau bể xả, bảo đảm dòng chảy vào kênh xả thuận dòng và tổn thất thủy lực ít;',
      'b. Phân phối lưu lượng và khống chế mực nước cho các kênh xả; Kịp thời ngăn dòng chảy ngược từ bể xả về ống đẩy khi máy bơm ngừng chạy;',
      'c. Tiêu hao động năng thừa từ miệng ống đẩy ra kênh xả.',
      'd. Bao gồm a, b và',
    ],
    correct: 3
  },
  {
    question: 'Một trong những ưu điểm của phương pháp mô hình toán thủy văn trong tính toán dòng chảy năm thiết kế so với các phương pháp công thức kinh nghiệm:',
    options: [
      'a. Có khả năng tính toán được chuỗi dòng chảy liên tục trong một thời kỳ dài',
      'b. Có khả năng tính toán chính xác hơn',
      'c. Có khả năng tính toán nhanh hơn',
      'd. Không cần có nhiều tài liệu, số liệu',
    ],
    correct: 0
  },
  {
    question: 'Trình tự các bước ứng dụng phương pháp mô hình toán thủy văn trong tính toán thủy văn thiết kế',
    options: [
      'a. Lựa chọn mô hình, thu thập số liệu, hiệu chỉnh và kiểm định mô hình, ứng dụng',
      'b. Thu thập số liệu, lựa chọn mô hình, hiệu chỉnh và kiểm định, ứng dụng',
      'c. Thu thập số liệu, hiệu chỉnh và kiểm định, ứng dụng, lựa chọn mô hình',
      'd. Lựa chọn mô hình, thu thập số liệu, ứng dụng, hiệu chỉnh và kiểm định mô hình',
    ],
    correct: 0
  },
  {
    question: 'Trong số các lưu vực có diện tích và lượng mưa lũ tương tự nhau, lưu vực có điều kiện loại đất nào dưới đây sẽ có hệ số dòng chảy lũ là cao nhất?',
    options: [
      'a. Đất sét cát',
      'b. Đất đen thường',
      'c. Đất cát sét',
      'd. Đất cát thô',
    ],
    correct: 0
  },
  {
    question: 'Trong số các bề mặt sườn dốc có đặc điểm dưới đây, bề mặt nào sẽ có thông số tập trung nước trên sườn dốc thấp nhất?',
    options: [
      'a. Đất đồng bằng, cỏ dày',
      'b. Đất dọn sạch cây, cỏ trung bình',
      'c. Đất ít nhà cửa, cỏ thưa',
      'd. Đất nhiều nhà cửa, cỏ dày',
    ],
    correct: 3
  },
  {
    question: 'Các quan hệ tương quan nào dưới đây KHÔNG nên sử dụng khi bổ sung, kéo dài chuỗi số liệu:',
    options: [
      'a. Quan hệ giữa lượng dòng chảy năm lưu vực nghiên cứu và lượng dòng chảy năm của lưu vực tương tự',
      'b. Quan hệ giữa lượng mưa năm và lượng dòng chảy năm của lưu vực nghiên cứu',
      'c. Quan hệ giữa mực nước và lưu lượng tại một trạm thủy văn',
      'd. Quan hệ giữa lượng dòng chảy tháng của lưu vực nghiên cứu và lượng dòng chảy tháng của lưu vực tương tự',
    ],
    correct: 3
  },
  {
    question: 'Đối với công trình bảo vệ đê, bờ sông bằng kè mỏ hàn, kè mềm, khi chiều cao kè mỏ hàn, kè mềm lớn hơn 8 m thì công trình thuộc?',
    options: [
      'a. Cấp I',
      'b. Cấp II',
      'c. Cấp III',
      'd. Cấp IV',
    ],
    correct: 0
  },
  {
    question: 'Các tài liệu phục vụ thiết kế công trình bảo vệ đê, bờ sông bao gồm:',
    options: [
      'a. Tài liệu địa hình, địa chất, thủy văn',
      'b. Tài liệu địa hình, địa chất, khí tượng, thủy văn',
      'c. Tài liệu địa hình, địa chất, thủy văn, kinh tế',
      'd. Tài liệu địa hình, địa chất, khí tượng, thủy văn, kinh tế, xã hội và môi trường.',
    ],
    correct: 3
  },
  {
    question: 'Nội dung quy trình đánh giá diễn biến bờ biển, cửa sông bao gồm:',
    options: [
      'a. Đánh giá xu thế diễn biến xói, bồi đoạn bờ biển, cửa sông theo phương dọc bờ; theo phương ngang bờ; trên mặt bằng (kết hợp mô hình toán và số liệu khảo sát) và lập báo cáo tổng hợp',
      'b. Đánh giá xu thế diễn biến xói, bồi đoạn bờ biển, cửa sông theo phương dọc bờ (kết hợp mô ình toán và số liệu khảo sát) và lập báo cáo tổng hợp',
      'c. Đánh giá xu thế diễn biến xói, bồi đoạn bờ biển, cửa sông theo phương ngang bờ (kết hợp mô ình toán và số liệu khảo sát) và lập báo cáo tổng hợp',
      'd. Đánh giá xu thế diễn biến xói, bồi đoạn bờ biển, cửa sông trên mặt bằng (kết hợp mô hình toán và số liệu khảo sát) và lập báo cáo tổng hợp',
    ],
    correct: 0
  },
  {
    question: 'Các loại kết cấu của công trình bảo vệ bờ biển và đê biển, bao gồm:',
    options: [
      'a. Đá hộc thả rối, đá hộc lát khan',
      'b. Rọ đá, khối dị hình',
      'c. Bê tông tấm hoặc khối kết cấu đúc sẵn, bê tông cốt thép đổ tại chỗ',
      'd. Trồng cỏ, đá hộc thả rối, đá hộc lát khan, rọ đá, khối dị hình, dê tông tấm hoặc khối kết cấu đúc sẵn, bê tông cốt thép đổ tại chỗ',
    ],
    correct: 3
  },
  {
    question: 'Các thông số của tuyến chỉnh trị khi thiết kế kè mỏ hàn, bao gồm:',
    options: [
      'a. Bán kính cong',
      'b. Chiều rộng lòng sông ứng với lưu lượng tạo lòng',
      'c. Bán kính cong, chiều rộng lòng sông ứng với lưu lượng tạo lòng và khoảng cách giữa 2 đỉnh liền nhau, chiều dài đoạn quá độ giữa hai đoạn cong',
      'd. Khoảng cách giữa 2 đỉnh liền nhau, chiều dài đoạn quá độ giữa hai đoạn cong',
    ],
    correct: 2
  },
  {
    question: 'Nguyên tắc xác định cấp công trình thủy lợi dựa vào?',
    options: [
      'a. Năng lực phục vụ, khả năng trữ nước của hồ chứa nước, đặc tính kỹ thuật của các công trình trong cụm công trình đầu mối',
      'b. Năng lực phục vụ, khả năng trữ nước của hồ chứa nước, dung tích hồ chứa',
      'c. Năng lực phục vụ, khả năng trữ nước của hồ chứa nước, chiều cao đập',
      'd. Năng lực phục vụ, khả năng trữ nước của hồ chứa nước, diện tích tưới',
    ],
    correct: 0
  },
  {
    question: 'Dự án đầu tư xây dựng không phân biệt các loại nguồn vốn sử dụng không phải đáp ứng các yêu cầu nào sau đây ?',
    options: [
      'a. Bảo đảm chất lượng, an toàn trong xây dựng, vận hành, khai thác, sử dụng công trình, phòng, chống cháy, nổ và bảo vệ môi trường, ứng phó với biến đổi khí hậu.',
      'b. Có phương án công nghệ phù hợp với trình độ khoa học công nghệ của địa phương.',
      'c. Bảo đảm cấp đủ vốn đúng tiến độ của dự án, hiệu quả tài chính, hiệu quả kinh tế - xã hội của dự án.',
      'd. Phù hợp với quy hoạch tổng thể phát triển kinh tế - xã hội, quy hoạch phát triển ngành, quy hoạch xây dựng, quy hoạch và kế hoạch sử dụng đất tại địa phương nơi có dự án đầu tư xây dựng.',
    ],
    correct: 1
  },
  {
    question: 'Thiết kế và thi công xây dựng công trình thủy lợi trên các sông suối có giao thông thủy phải đảm bảo?',
    options: [
      'a. Ổn định dòng chảy để các phương tiện giao thông thủy có thể qua lại được',
      'b. Vận tốc phù hợp để các phương tiện giao thông thủy có thể qua lại được',
      'c. Các điều kiện để các phương tiện giao thông thủy có thể qua lại được',
      'd. Bảo đảm ổn định lòng dẫn để các phương tiện giao thông thủy có thể qua lại được',
    ],
    correct: 2
  },
  {
    question: 'Các công trình chủ yếu từ cấp mấy trở lên phải bố trí thiết bị quan trắc sự làm việc của công trình và nền?',
    options: [
      'a. Cấp I',
      'b. Cấp II',
      'c. Cấp III',
      'd. Cấp IV',
    ],
    correct: 1
  },
  {
    question: 'Trong quá trình thiết kế, khi nào nhà thầu thiết kế có quyền đề xuất với chủ đầu tư thực hiện các thí nghiệm, thử nghiệm mô phỏng để kiểm tra, tính toán khả năng làm việc của công trình ?',
    options: [
      'a. Công trình thuộc dự án quan trọng quốc gia,',
      'b. Công trình có quy mô lớn, kỹ thuật phức tạp,',
      'c. Cả 2 loại công trình ở đáp án a và b;',
      'd. Không có công trình nào ở trên',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế xây dựng công trình thủy lợi dạng khối lớn phải xem xét phân bổ hợp lý vật liệu trong thân công trình, phù hợp với trạng thái nào?',
    options: [
      'a. Trạng thái dẻo chảy, biến dạng, yêu cầu chống thấm',
      'b. Trạng thái ứng suất, biến dạng, yêu cầu chống thấm',
      'c. Trạng thái ứng suất, phân bố nhiệt, yêu cầu chống thấm',
      'd. Trạng thái ứng suất, biến dạng, phân bố nhiệt',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế sửa chữa, phục hồi, nâng cấp và mở rộng công trình thủy lợi phải đáp ứng thêm các yêu cầu nào?',
    options: [
      'a. Xác định rõ mục tiêu sửa chữa, phục hồi, nâng cấp, mở rộng công trình',
      'b. Không được gây ra những ảnh hưởng bất lợi quá mức cho các hộ đang dùng nước',
      'c. Đánh giá đúng chất lượng, tình trạng kỹ thuật, trang thiết bị, nền và công trình',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Các công trình hồ chứa nước đều phải có quy trình vận hành đạt được các yêu cầu nào?',
    options: [
      'a. Cấp nước',
      'b. Phòng chống lũ cho hồ chứa nước',
      'c. Phòng chống lũ cho hạ lưu',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Khi việc lấy nước (hoặc tiêu nước) gây ảnh hưởng xấu đến những hộ dùng nước hoặc dân sinh, môi trường hiện có thì cơ quan lập dự án cần làm gì?',
    options: [
      'a. Luận chứng về các ảnh hưởng này, nêu giải pháp khắc phục và làm sáng tỏ tính ưu việt khi có thêm dự án mới',
      'b. Luận chứng về các tác động môi trường, nêu giải pháp khắc phục và làm sáng tỏ tính ưu việt khi có thêm dự án mới',
      'c. Luận chứng về các tác động kinh tế, nêu giải pháp khắc phục và làm sáng tỏ tính ưu việt khi có thêm dự án mới',
      'd. Luận chứng về các tác động xã hội, nêu giải pháp khắc phục và làm sáng tỏ tính ưu việt khi có thêm dự án mới',
    ],
    correct: 0
  },
  {
    question: 'Mức bảo đảm phục vụ của công trình thủy lợi phục vụ cấp nước không cho phép gián đoạn hoặc giảm yêu cầu cấp nước phải không thấp hơn các trị số quy định nào?',
    options: [
      'a. 90',
      'b. 95',
      'c. 85',
      'd. 75',
    ],
    correct: 1
  },
  {
    question: 'Tính toán thiết kế phòng lũ cụm công trình đầu mối các loại dựa vào các loại tần suất nào?',
    options: [
      'a. Tần suất thiết kế',
      'b. Tần suất lũ cực hạn',
      'c. Tần suất kiểm tra, Tần suất thiết kế',
      'd. Tần suất mưa cực đại',
    ],
    correct: 2
  },
  {
    question: 'Lưu lượng, mực nước thấp nhất nào được dùng để tính toán ổn định kết cấu công trình, nền móng đầu mối hồ chứa?',
    options: [
      'a. Mực nước chết, mực nước tháo cạn thấp nhất để sửa chữa, nạo vét v.v...',
      'b. Mực nước trung bình ngày thấp nhất',
      'c. Mực nước tháo cạn thấp nhất để sửa chữa, nạo vét v.v...',
      'd. Mực nước thấp nhất quy định trong khai thác',
    ],
    correct: 0
  },
  {
    question: 'Tần suất mực nước lớn nhất ở sông nhận nước tiêu để tính toán chế độ khai thác cho các công trình tiêu cho nông nghiệp bằng biện pháp tự chảy hoặc động lực không lớn hơn trị số quy định nào?',
    options: [
      'a. 5%',
      'b. 10%',
      'c. 15%',
      'd. 2%',
    ],
    correct: 1
  },
  {
    question: 'Tần suất dòng chảy lớn nhất để thiết kế chặn dòng trong một mùa khô, không lớn hơn trị số nào đối với công trình cấp đặc biệt?',
    options: [
      'a. 1%',
      'b. 2%',
      'c. 5%',
      'd. 10%',
    ],
    correct: 2
  },
  {
    question: 'Tần suất mô hình mưa tưới thiết kế để xác định nhu cầu cấp nước cho hệ thống tưới được quy định là bao nhiêu cho các công trình từ cấp III trở lên?',
    options: [
      'a. 80%',
      'b. 85%',
      'c. 75%',
      'd. 75% đến 85%',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế công trình thủy lợi phải tính toán theo tổ hợp tải trọng nào?',
    options: [
      'a. Cơ bản, kiểm tra theo tổ hợp tải trọng đặc biệt',
      'b. Đặc biệt',
      'c. Kiểm tra',
      'd. Biến đổi khí hậu',
    ],
    correct: 0
  },
  {
    question: 'Tổ hợp tải trọng đặc biệt bao gồm các tải trọng và tác động nào?',
    options: [
      'a. Trường hợp tải trọng cơ bản có xét thêm tải trọng do sóng',
      'b. Trường hợp tải trọng cơ bản có xét thêm tải trọng do động đất',
      'c. Trường hợp tải trọng cơ bản có xét thêm tải trọng do động gió',
      'd. Trường hợp tải trọng cơ bản có xét thêm tải trọng do tàu thuyền',
    ],
    correct: 1
  },
  {
    question: 'Hệ số an toàn dùng để đánh giá?',
    options: [
      'a. Mức độ ổn định, độ bền, ứng suất, biến dạng chung cho từng hạng mục công trình và nền',
      'b. Mức độ ổn định, độ bền, ứng suất, biến dạng cục bộ cho từng hạng mục công trình và nền',
      'c. Mức độ ổn định, độ bền, ứng suất, biến dạng chung và cục bộ cho từng hạng mục công trình và nền',
      'd. Mức độ ổn định, độ bền, ứng suất, biến dạng, chuyển vị cho từng hạng mục công trình và nền',
    ],
    correct: 2
  },
  {
    question: 'Hệ số an toàn về ổn định của các hạng mục công trình và hệ công trình - nền phải đảm bảo các yêu cầu nào?',
    options: [
      'a. Trong các điều kiện làm việc không bình thường (đặc biệt) không thấp hơn 80 % và trong trường hợp thi công sửa chữa không thấp hơn 85 % các giá trị quy định',
      'b. Trong các điều kiện làm việc không bình thường (đặc biệt) không thấp hơn 90 % và trong trường hợp thi công sửa chữa không thấp hơn 85 % các giá trị quy định',
      'c. Trong các điều kiện làm việc không bình thường (đặc biệt) không thấp hơn 90 % và trong trường hợp thi công sửa chữa không thấp hơn 95 % các giá trị quy định',
      'd. Trong các điều kiện làm việc không bình thường (đặc biệt) không thấp hơn 85 % và trong trường hợp thi công sửa chữa không thấp hơn 90 % các giá trị quy định',
    ],
    correct: 2
  },
  {
    question: 'Thời gian quy định ngưỡng cửa lấy nước của công trình cấp I để không bị bùn cát bồi lấp trong thời kỳ khai thác sau khi hồ tích nước không được ít hơn:',
    options: [
      'a. 200 năm',
      'b. 100 năm',
      'c. 90 năm',
      'd. 150 năm',
    ],
    correct: 1
  },
  {
    question: 'Mực nước chết của hồ chứa nước cấp nước (không cho thủy điện) phải đảm bảo điều kiện khai thác nào?',
    options: [
      'a. Tối đa',
      'b. Đặc biệt',
      'c. Bình thường',
      'd. Điều kiện biến đổi khí hậu',
    ],
    correct: 2
  },
  {
    question: 'Để đảm bảo khi xả lũ thiết kế và lũ kiểm tra, mực nước hồ không được vượt quá mực nước nào dưới đây?',
    options: [
      'a. Mực nước gia cường thiết kế và kiểm tra',
      'b. Mực nước đón lũ thiết kế và kiểm tra',
      'c. Mực nước dâng bình thường thiết kế và kiểm tra nhưng xét đến điều kiện biến đổi khí hậu',
      'd. Mực nước lớn nhất thiết kế và kiểm tra',
    ],
    correct: 3
  },
  {
    question: 'Thiết kế nhà đặt máy bơm phải đảm bảo điều kiện làm việc an toàn và thuận lợi cho công tác nào?',
    options: [
      'a. Thi công',
      'b. Quản lý',
      'c. Sửa chữa',
      'd. Kiểm tra',
    ],
    correct: 1
  },
  {
    question: 'Thiết kế bể hút phải đảm bảo dòng chảy từ kênh dẫn vào bể hút và từ bể hút vào máy bơm thuận dòng với tổn thất nào?',
    options: [
      'a. Cột nước là cao nhất',
      'b. Lưu lượng là cao nhất',
      'c. Cột nước là thấp nhất',
      'd. Lưu lượng là thấp nhất',
    ],
    correct: 2
  },
  {
    question: 'Kiên cố hóa kênh mương phải đáp ứng yêu cầu nào?',
    options: [
      'a. Tiết kiệm vật liệu, kết hợp giao thông nông thôn',
      'b. Tiết kiệm đất, mở rộng bờ kênh để kết hợp giao thông nông thôn',
      'c. Sử dụng vật liệu địa phương, kết hợp giao thông nông thôn',
      'd. Sử dụng nhân lực địa phương, kết hợp giao thông nông thôn',
    ],
    correct: 1
  },
  {
    question: 'Công trình đê điều được phân thành các cấp nào?',
    options: [
      'a. 8 cấp',
      'b. 7 cấp',
      'c. 5 cấp',
      'd. 6 cấp',
    ],
    correct: 2
  },
  {
    question: 'Tiêu chuẩn an toàn của công trình đê sông được xác định bằng các thông số nào?',
    options: [
      'a. Mức bảo đảm thiết kế',
      'b. Chu kỳ lặp lại của lũ',
      'c. Hệ số an toàn và mức đảm bảo thiết kế',
      'd. An toàn của thân đê',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế mặt cắt đê biển cần thực hiện những nội dung nào sau đây?',
    options: [
      'a. Xác định các kích thước và cao trình cơ bản của mặt cắt, kết cấu đỉnh tường chắn sóng, thân đê và chân đê, kết cấu bảo vệ mái',
      'b. Xác định các kích thước và cao trình cơ bản của mặt cắt, kết cấu đỉnh tường chắn sóng, kết cấu mặt đê, các kết cấu chuyển tiếp',
      'c. Xác định các kích thước và cao trình cơ bản của mặt cắt, kết cấu đỉnh đê, thân đê và chân đê, các kết cấu chuyển tiếp',
      'd. Xác định các kích thước và cao trình cơ bản của mặt cắt, kết cấu đỉnh tường chắn sóng, kết cấu mặt đê, kết cấu bảo vệ mái',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế tường chống tràn đỉnh đê (gọi tắt là tường đỉnh) phải thực hiện các tính toán nào sau đây?',
    options: [
      'a. Tính toán kiểm tra độ bền, kiểm tra ổn định về trượt, lật, ứng suất nền và yêu cầu chống thấm theo quy định',
      'b. Tính toán kiểm tra độ bền, kiểm tra ổn định về trượt, lật, ứng suất nền và yêu cầu chắn sóng theo quy định',
      'c. Tính toán kiểm tra độ bền, kiểm tra ổn định về trượt, lật, ứng suất biến dạng và yêu cầu chắn sóng theo quy định',
      'd. Tính toán kiểm tra độ bền, ổn định về trượt, lật, ứng suất, lún, biến dạng và yêu cầu chắn sóng theo quy định',
    ],
    correct: 1
  },
  {
    question: 'Khi tính toán ổn định chống trượt mái đê biển phía trong đồng phải tiến hành các tính toán nào sau đây?',
    options: [
      'a. Mực nước phía biển là mực nước lớn nhất, mực nước phía đồng là mực nước thấp nhất, đê chịu tác động của tải trọng sóng nhỏ nhất',
      'b. Mực nước phía biển là mực nước thiết kế, mực nước phía đồng là mực nước thấp nhất, đê chịu tác động của tải trọng sóng thiết kế',
      'c. Mực nước phía biển là mực nước lớn nhất, mực nước phía đồng là mực nước thiết kế, đê chịu tác động của tải trọng sóng nhỏ nhất',
      'd. Mực nước phía biển là mực nước lớn nhất, mực nước phía đồng là mực nước thiết kế, đê chịu tác động của tải trọng sóng thiết kế',
    ],
    correct: 1
  },
  {
    question: 'Ngoài tràn xả lũ chính, những hồ nào phải bố trí thêm tràn xả lũ dự phòng (tràn xả lũ vượt kiểm tra)?',
    options: [
      'a. Hồ từ cấp III trở lên.',
      'b. Hồ từ cấp II trở lên.',
      'c. Hồ từ cấp I trở lên.',
      'd. Chỉ áp dụng cho hồ cấp đặc biệt.',
    ],
    correct: 2
  },
  {
    question: 'Trong thiết kế công trình xả lũ, khi nào thì phải làm thí nghiệm mô hình để luận chứng tính hợp lý về bố trí và thiết kế thủy lực?',
    options: [
      'a. Công trình cấp I trở lên.',
      'b. Công trình cấp I trở lên hoặc công trình cấp II có điều kiện thủy lực phức tạp.',
      'c. Công trình cấp II trở lên.',
      'd. Công trình cấp III trở lên.',
    ],
    correct: 1
  },
  {
    question: 'Mục đích của việc khống chế độ ẩm khi đắp đập là gì?',
    options: [
      'a. Để phù hợp với điều kiện tự nhiên nơi thi công đập.',
      'b. Để tránh co ngót, nứt đập trong quá trình vận hành.',
      'c. Để tránh hiện tượng tan rã, lún ướt khi khối đắp bão hòa nước.',
      'd. Để đạt được độ chặt lớn nhất khi đắp.',
    ],
    correct: 3
  },
  {
    question: 'Khi sử dụng nhiều loại đất để đắp đập, chỉ tiêu thiết kế của đất đắp được xác định như thế nào?',
    options: [
      'a. Bằng chỉ tiêu trung bình, áp dụng chung cho toàn mặt cắt.',
      'b. Bằng chỉ tiêu của loại đất yếu nhất.',
      'c. Thí nghiệm và chọn chỉ tiêu tương ứng cho từng loại đất bố trí ở từng vùng riêng biệt của mặt cắt.',
      'd. Thí nghiệm với mẫu bằng vật liệu trộn lẫn tất cả các loại đất.',
    ],
    correct: 2
  },
  {
    question: 'Chiều dày đáy tường nghiêng bằng bê tông cốt thép của đập đất chọn bằng bao nhiêu?',
    options: [
      'a. Không nhỏ hơn H/Jcp (H- cột nước làm việc lớn nhất; Jcp: của vật liệu bê tông)',
      'b. Không nhỏ hơn H/10.',
      'c. Theo điều kiện cấu tạo.',
      'd. Bằng 0,3 + mH (mét); m = 0,003-0,004.',
    ],
    correct: 3
  },
  {
    question: 'Nối tiếp đập đất với bờ vai bằng đất cần được xử lý như thế nào?',
    options: [
      'a. Bạt mái phần vai theo thiết kế',
      'b. Không đào dật cấp kiểu bậc thang',
      'c. Đào dật cấp kiểu bậc thang',
      'd. Bao gồm a và',
    ],
    correct: 3
  },
  {
    question: 'Khi có cống ngầm đặt dưới đập đất thì cần áp dụng biện pháp nào để nối tiếp thân cống với đất đắp đập?',
    options: [
      'a. Làm các tường (cừ tai) cắm vào thân đập.',
      'b. Làm tầng lọc ngược bao quanh ống cống ở đoạn cuối cống.',
      'c. Cả a, b và đắp đất sét bọc quanh cống.',
      'd. Cả a và',
    ],
    correct: 2
  },
  {
    question: 'Chiều rộng của khớp nối nhiệt lâu dài của đập bê tông trên nền đá được xác định trên cơ sở tính toán biến dạng của các đoạn đập kề nhau và có đặc điểm nào sau đây?',
    options: [
      'a. Thay đổi theo khoảng cách ngang từ vị trí xét đến mặt thượng lưu đập.',
      'b. Thay đổi theo khoảng cách đứng từ vị trí xét đến mặt nền.',
      'c. Cả a và',
      'b. d. Không thay đổi trên toàn khớp nối.',
    ],
    correct: 0
  },
  {
    question: 'Bảo vệ mặt tràn không bị xâm thực khi lưu tốc dòng chảy vượt quá 15m/s, cần bổ sung biện pháp nào sau đây?',
    options: [
      'a. Bọc thép phần mặt tràn có khả năng bị xâm thực.',
      'b. Làm mố nhám trên mặt tràn để giảm vận tốc dòng chảy.',
      'c. Cả a và',
      'b. d. Hạn chế mở cửa van để khống chế lưu tốc trên mặt tràn.',
    ],
    correct: 2
  },
  {
    question: 'Hệ số an toàn nhỏ nhất cho phép về ổn định của công trình bê tông trên nền đất và đá nửa cứng bằng bao nhiêu (với công trình cấp I)?',
    options: [
      'a. Tổ hợp cơ bản: 1,20; tổ hợp đặc biệt: 1,08.',
      'b. Tổ hợp cơ bản: 1,20; tổ hợp đặc biệt: 1,14.',
      'c. Tổ hợp cơ bản: 1,20; tổ hợp đặc biệt: 1,26.',
      'd. Tổ hợp cơ bản: 1,20; tổ hợp đặc biệt: 1,20.',
    ],
    correct: 0
  },
  {
    question: 'Hệ số an toàn nhỏ nhất về ổn định của mái dốc nhân tạo bằng đất đắp cho phép bằng bao nhiêu (với công trình cấp I)?',
    options: [
      'a. Tổ hợp cơ bản: 1,35; tổ hợp đặc biệt: 1,428.',
      'b. Tổ hợp cơ bản: 1,35; tổ hợp đặc biệt: 1,35.',
      'c. Tổ hợp cơ bản: 1,35; tổ hợp đặc biệt: 1,282.',
      'd. Tổ hợp cơ bản: 1,35; tổ hợp đặc biệt: 1,215.',
    ],
    correct: 3
  },
  {
    question: 'Độ chặt (hệ số đầm nén) của đất đắp đập từ cấp III trở xuống được quy định bằng bao nhiêu?',
    options: [
      'a. Không nhỏ hơn 0,92.',
      'b. Không nhỏ hơn 0,95; với đập ở vùng có động đất từ cấp VII trở lên: không nhỏ hơn 0,97.',
      'c. Không nhỏ hơn 0,95.',
      'd. Không nhỏ hơn 0,97.',
    ],
    correct: 1
  },
  {
    question: 'Hệ số thấm K cho đất đắp bộ phận chống thấm của đập được quy định như thế nào?',
    options: [
      'a. Với đập đồng chất, K không được lớn hơn 10-4 cm/s.',
      'b. Với tường lõi, tường nghiêng, sân trước, K không được lớn hơn 10-5 cm/s.',
      'c. Cả a và',
      'b. d. Không quy định, miễn là kết quả tính thấm thỏa mãn các yêu cầu đặt ra.',
    ],
    correct: 2
  },
  {
    question: 'Để đắp khối gia tải hạ lưu trong đập đất nhiều khối, có thể sử dụng loại vật liệu nào?',
    options: [
      'a. Cát, đá sỏi, sạn, đá dăm, đá khai thác từ mỏ, đất đá đào thải từ các hố móng công trình.',
      'b. Bùn cát nạo vét từ đáy hồ, đáy sông.',
      'c. Cả a và',
      'b. d. Đất sét.',
    ],
    correct: 0
  },
  {
    question: 'Mục đích bố trí tầng lọc ngược phía dưới lớp gia cố mái thượng lưu đập đất là gì?',
    options: [
      'a. Để giảm chiều dày lớp gia cố chính.',
      'b. Phòng chống xói trôi đất thân đập do sóng và khi mực nước hồ hạ đột ngột.',
      'c. Giảm lún không đều của lớp gia cố chính.',
      'd. Cả 3 ý trên.',
    ],
    correct: 1
  },
  {
    question: 'Chiều dày đáy lõi chống thấm ở đập đất nhiều khối được chọn như thế nào?',
    options: [
      'a. Theo điều kiện cấu tạo với mái hai bên lõi m= 0,2',
      'b. Thỏa mãn độ bền chống thấm của loại đất làm lõi: t = Z/Jcp',
      'c. Không nhỏ hơn 1/4 chiều cao cột nước.',
      'd. Cả b và',
    ],
    correct: 3
  },
  {
    question: 'Chiều cao từ mực nước lũ thiết kế đến đỉnh tường lõi chống thấm của đập đất cấp I lấy bằng bao nhiêu?',
    options: [
      'a. 0,8 m.',
      'b. 0,6 m.',
      'c. 0,5 m.',
      'd. 0,4 m.',
    ],
    correct: 1
  },
  {
    question: 'Bộ phận thoát nước kiểu áp mái hạ lưu ở đập đất có chức năng gì?',
    options: [
      'a. Thoát nước thấm, ngăn ngừa biến dạng thấm ở thân đập.',
      'b. Hạ thấp đường bão hòa trong thân đập.',
      'c. Thoát nước thấm cho đập và nền.',
      'd. Báo vệ mái hạ lưu không bị xói của dòng thấm khi ra khỏi thân đập.',
    ],
    correct: 3
  },
  {
    question: 'Tính toán ứng suất và biến dạng, chuyển vị thân, nền đập được quy định cho những đập nào?',
    options: [
      'a. Đập từ cấp I trở lên.',
      'b. Đập từ cấp II trở lên.',
      'c. Đập từ cấp III trở lên.',
      'd. Đập ở tất cả các cấp.',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế đập đất từ cấp II trở lên, chiều sâu màn phụt chống thấm trong nền đá nứt nẻ mạnh được quy định như thế nào?',
    options: [
      'a. Đến độ sâu có lượng mất nước từ 3Lu đến 5Lu, cộng thêm 5m.',
      'b. Không vượt quá 0,5H (H- đầu nước tại mặt cắt đang xét).',
      'c. Theo a, nhưng không vượt quá 1H.',
      'd. Cả a và',
    ],
    correct: 2
  },
  {
    question: 'Khi phụt vữa xi măng trong nền đá của đập đất với điều kiện địa chất bình thường và chiều dày màn phụt từ 1 đến 2m thì gradient thủy lực cho phép của màn bằng bao nhiêu?',
    options: [
      'a. 25',
      'b. 18',
      'c. 12',
      'd. 10',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế mặt cắt đập bê tông, khoảng cách bt từ mặt thượng lưu đập đến trục ống tiêu nước hay mặt thượng lưu của hành lang cần lấy bằng bao nhiêu?',
    options: [
      'a. Không nhỏ hơn h/Jcp, với h- cột nước trên mặt cắt tính toán, Jcp- gradient thấm cho phép của bê tông mặt thượng lưu đập.',
      'c. Theo a, nhưng không nhỏ hơn 2m.',
      'd. Theo a, nhưng không nhỏ hơn 3m.',
    ],
    correct: 2
  },
  {
    question: 'Trong kết cấu của khớp nối biến dạng lâu dài của đập bê tông cần bố trí những bộ phận gì?',
    options: [
      'a. Vật chắn nước, ống thu nước phía sau vật chắn.',
      'b. Giếng và hành lang kiểm tra, sửa chữa.',
      'c. Cả a và',
      'b. d. Cả a, b và ống để rót vật liệu chống thấm vào khớp nối.',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế đập tràn trên nền đá, lưu lượng cho phép của dòng chảy đổ xuống hạ lưu phụ thuộc vào điều kiện nào sau đây?',
    options: [
      'a. Đường kính hòn đá hoặc phân khối đá nền hạ lưu và chiều sâu hố xói.',
      'b. Chiều rộng lòng dẫn hạ lưu.',
      'c. Cột nước công tác của tràn.',
      'd. Cả 3 điều kiện trên.',
    ],
    correct: 0
  },
  {
    question: 'Trong phân tích ứng suất- biến dạng của thân đập bê tông và nền đá theo phương pháp lý thuyết đàn hồi, khi nào thì cần xét đến các lỗ khoét trong đập?',
    options: [
      'a. Bề rộng của lỗ khoét lớn hơn 5% bề rộng mặt cắt tính toán của đập.',
      'b. Bề rộng của lỗ khoét lớn hơn 10% bề rộng mặt cắt tính toán của đập.',
      'c. Bề rộng của lỗ khoét lớn hơn 15% bề rộng mặt cắt tính toán của đập.',
      'd. Không cần xét.',
    ],
    correct: 2
  },
  {
    question: 'Khi xác định trạng thái ứng suất- biến dạng của đập bê tông trên nền đá bằng phương pháp lý thuyết đàn hồi, khi nào thì cần phân biệt các vùng bê tông trong thân đập?',
    options: [
      'a. Khi tỷ số mô đun đàn hồi của các vùng lớn hơn hoặc bằng 2.',
      'b. Khi tỷ số mô đun đàn hồi của các vùng lớn hơn hoặc bằng 3.',
      'c. Khi tỷ số mô đun đàn hồi của các vùng lớn hơn hoặc bằng 5.',
      'd. Lấy theo trị số trung bình, không phân biệt vùng.',
    ],
    correct: 0
  },
  {
    question: 'Khi thiết kế đập bê tông trên nền không phải đá có sử dụng cừ chống thấm phía dưới sân trước đập thì chiều sâu đóng cừ được chọn như thế nào?',
    options: [
      'a. Chiều sâu đóng cừ không nhỏ hơn 3m.',
      'b. Chiều sâu đóng cừ không nhỏ hơn 2,5m; chiều sâu phần cừ đóng vào đất không thấm không nhỏ hơn 1m.',
      'c. Chiều sâu phần cừ đóng vào đất không thấm không nhỏ hơn 0,5m',
      'd. Cả a và',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế đập bê tông trên nền đá, khoảng cách từ mặt hạ lưu của màn chống thấm đến vị trí của lỗ khoan thoát nước không được nhỏ hơn 2 lần khoảng cách giữa các lỗ khoan của màn chống thấm và điều kiện nào sau đây?',
    options: [
      'a. Không nhỏ hơn 2m.',
      'b. Không nhỏ hơn 3m.',
      'c. Không nhỏ hơn 4m.',
      'd. Không nhỏ hơn 5m.',
    ],
    correct: 2
  },
  {
    question: 'Tính toán độ bền và ổn định của đập bê tông theo nhóm trạng thái giới hạn thứ hai cần thực hiện với các nội dung nào sau đây?',
    options: [
      'a. Độ bền cục bộ của nền.',
      'b. Biến dạng của công trình, sự hình thành khe nứt, sự mở rộng các khớp nối thi công.',
      'c. Theo b và sự mở rộng các vết nứt trong kết cấu.',
      'd. Theo a và',
    ],
    correct: 3
  },
  {
    question: 'Cấp của công trình thủy lợi được xác định theo các tiêu chí nào sau đây?',
    options: [
      'a. Theo năng lực phục vụ.',
      'b. Theo dung tích lớn nhất của hồ.',
      'c. Theo a, b và loại công trình, chiều cao công trình, loại nền.',
      'd. Theo a và',
    ],
    correct: 2
  },
  {
    question: 'Mức bảo đảm phục vụ tưới ruộng của công trình thủy lợi bằng bao nhiêu?',
    options: [
      'a. 85% cho tất cả các cấp công trình.',
      'b. 75% cho công trình cấp IV, 85% cho các cấp còn lại.',
      'c. 90% cho công trình cấp đặc biệt, 85% cho các cấp còn lại.',
      'd. 75% cho tất cả các cấp công trình.',
    ],
    correct: 1
  },
  {
    question: 'Thời gian cho phép dung tích bồi lắng của hồ chứa nước bị lấp đầy là bao nhiêu?',
    options: [
      'a. Cấp đặc biệt, cấp I: 100 năm; cấp II: 75 năm; cấp III, IV: 50 năm.',
      'b. Cấp đặc biệt, cấp I: 150 năm; cấp II: 100 năm; cấp III, IV: 75 năm.',
      'c. 50 năm cho tất cả các cấp.',
      'd. 75 năm cho tất cả các cấp.',
    ],
    correct: 0
  },
  {
    question: 'Cao trình đỉnh đập đất được xác định theo những điều kiện nào?',
    options: [
      'a. Mực nước dâng bình thường, với gió lớn nhất thiết kế.',
      'b. Mực nước lũ thiết kế, với gió bình quân lớn nhất.',
      'c. Mục nước lũ kiểm tra, không xét sóng gió.',
      'd. Trị số lớn nhất trong các cao trình theo a, b,',
    ],
    correct: 3
  },
  {
    question: 'Tần suất gió thiết kế của đập cấp I, II bằng bao nhiêu?',
    options: [
      'a. Với MNDBT: 2%; Với MNLTK: 50%.',
      'b. Với MNDBT: 2%; Với MNLTK: 25%.',
      'c. Với MNDBT: 4%; Với MNLTK: 50%.',
      'd. Với MNDBT: 4%; Với MNLTK: 25%.',
    ],
    correct: 1
  },
  {
    question: 'Khi có làm tường chắn sóng thì cao trình đỉnh phần đắp của đập phải lấy cao hơn bao nhiêu so với mực nước lũ thiết kế?',
    options: [
      'a. 0,1 m.',
      'b. 0,2 m.',
      'd. 0,4 m.',
    ],
    correct: 2
  },
  {
    question: 'Giới hạn dưới của lớp bảo vệ mái thượng lưu đập đất từ cấp III trở lên phải lấy thấp hơn mực nước chết là bao nhiêu?',
    options: [
      'a. 2,5 m.',
      'b. 2,0 m.',
      'c. 1,5 m.',
      'd. 1,0 m.',
    ],
    correct: 0
  },
  {
    question: 'Khi không có yêu cầu khác, chiều rộng đỉnh đập đất cấp I, II nên lấy bằng bao nhiêu?',
    options: [
      'a. 5m- 8m.',
      'b. 8m- 10m.',
      'c. 5m- 10m.',
      'd. 10m trở lên.',
    ],
    correct: 3
  },
  {
    question: 'Chiều dày ở đỉnh khối lõi của đập đất nhiều khối chọn bằng bao nhiêu?',
    options: [
      'a. Không nhỏ hơn 0,8m.',
      'b. Không nhỏ hơn 1 m.',
      'c. Không nhỏ hơn 3 m.',
      'd. Không nhỏ hơn 5 m.',
    ],
    correct: 2
  },
  {
    question: 'Trị số gradient thấm cho phép Jkcp ở khối đất á sét đắp thân đập cấp II được quy định bằng bao nhiêu?',
    options: [
      'a. 0,70.',
      'b. 0,75.',
      'c. 0,85.',
    ],
    correct: 1
  },
  {
    question: 'Trị số gradien trung bình tới hạn Jkth của dòng thấm qua tường nghiêng và tường tâm bằng đất sét được khống chế bằng bao nhiêu?',
    options: [
      'a. 8',
      'b. 10',
      'c. 12',
    ],
    correct: 2
  },
  {
    question: 'Mái hạ lưu đập đất cần tính toán ổn định với các thời kỳ nào?',
    options: [
      'a. Thời kỳ thi công (bao gồm cả hoàn công).',
      'b. Thời kỳ khai thác với dòng thấm ổn định.',
      'c. Khi mực nước hồ rút nhanh.',
      'd. Bao gồm a và b',
    ],
    correct: 3
  },
  {
    question: 'Sân phủ thượng lưu để chống thấm cho nền bồi tích của đập đất nên áp dụng khi nào?',
    options: [
      'a. Nền bồi tích dày.',
      'b. Có sẵn đất chống thấm thích hợp ở gần vị trí đập.',
      'c. Cả a và b, áp dụng với đập vừa và thấp.',
      'd. Cả a và',
    ],
    correct: 2
  },
  {
    question: 'Để chống thấm cho nền bồi tích của đập đất, việc sử dụng tường răng có hiệu quả nhất trong điều kiện nào?',
    options: [
      'a. Nền thấm có chiều dày dưới 10m; mực nước ngầm thấp.',
      'b. Đập vừa và thấp.',
      'c. Đập vừa và cao.',
      'd. a và',
    ],
    correct: 0
  },
  {
    question: 'Vị trí hợp lý của tường răng chống thấm cho nền đập đất đồng chất được xác định như thế nào?',
    options: [
      'a. Tại tim đập.',
      'b. Cách chân đập thượng lưu từ 1/2 đến 1/3 bề rộng đáy đập.',
      'c. Cách chân đập thượng lưu từ 1/3 đến 1/4 bề rộng đáy đập.',
      'd. Sát chân đập thượng lưu.',
    ],
    correct: 1
  },
  {
    question: 'Độ sâu của tường răng cắm vào tầng ít thấm của nền đập đất cần khống chế bằng bao nhiêu?',
    options: [
      'a. Bằng 0,5m.',
      'b. Lớn hơn 0,5m.',
      'c. Không nhỏ hơn 1m.',
      'd. Không nhỏ hơn 1,5m.',
    ],
    correct: 2
  },
  {
    question: 'Trong thiết kế đập bê tông trọng lực, kích thước các đoạn đập và các khối đổ cần được xác định trên cơ sở phân tích ứng suất nhiệt và cần xét đến các điều kiện nào sau đây?',
    options: [
      'a. Kích thước các đoạn của nhà máy thủy điện, vị trí các lỗ xả nước trong thân đập',
      'b. Hình dạng lòng dẫn, điều kiện địa chất nền, điều kiện khí hậu vùng xây dựng.',
      'c. Cả a và',
      'b. d. Cả a, b và phương pháp thi công đập.',
    ],
    correct: 3
  },
  {
    question: 'Khi tính ổn định của đập trọng lực trên nền đá, với mặt trượt đi qua vết nứt ở khối nền thì hệ số điều kiện làm việc lấy bằng bao nhiêu?',
    options: [
      'a. 0,90',
      'b. 0,95',
      'c. 1,0.',
      'd. 1,05.',
    ],
    correct: 2
  },
  {
    question: 'Khi tính ổn định của đập trọng lực trên nền đá, với mặt trượt đi qua mặt tiếp giáp giữa bê tông và đá thì hệ số điều kiện làm việc lấy bằng bao nhiêu?',
    options: [
      'a. 1,0',
      'b. 0,95',
      'c. 0,90.',
      'd. 0,75',
    ],
    correct: 1
  },
  {
    question: 'Với đập bê tông cao trên 100m, trị số gradient cho phép của cột nước trong màn chống thấm ở nền đá cần lấy bằng bao nhiêu?',
    options: [
      'a. 15',
      'b. 20',
      'c. 30',
      'd. 50',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế màn chống thấm của đập bê tông có chiều cao từ 60m đến 100m trên nền đá, lưu lượng thấm đơn vị qua màn cần khống chế bằng bao nhiêu?',
    options: [
      'a. Không lớn hơn 0,01 l/ph/m.',
      'b. Không lớn hơn 0,03 l/ph/m.',
      'c. Không lớn hơn 0,05 l/ph/m.',
      'd. Không lớn hơn 0,10 l/ph/m.',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế công trình bê tông trên nền không phải đá, chiều dày sân trước bằng đất á sét cần khống chế bằng bao nhiêu?',
    options: [
      'a. Không nhỏ hơn 0,5m.',
      'b. Không nhỏ hơn ∆h/Jcp, ∆h là chênh lệch cột nước ở mặt trên và dưới của sân.',
      'c. Cả a và',
      'b. d. Cả a, b và không nhỏ hơn chiều dày bản đáy đập.',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế đập trọng lực có chiều cao tới 60m, không có khớp nối mở rộng và không có lớp cách nước ở mặt thượng lưu, ứng với tổ hợp lực cơ bản thì chiều sâu giới hạn bgh của vùng kéo ở phía thượng lưu cho phép lấy bằng bao nhiêu?',
    options: [
      'a. Không cho phép kéo.',
      'b. B/10 (B- chiều rộng mặt cắt tính toán).',
      'c. B/7,5',
      'd. B/5.',
    ],
    correct: 0
  },
  {
    question: 'Khi thiết kế đập trọng lực có chiều cao tới 60m, không có khớp nối mở rộng và không có lớp cách nước ở mặt thượng lưu, ứng với tổ hợp lực đặc biệt không có động đất thì chiều sâu giới hạn bgh của vùng kéo ở phía thượng lưu cho phép lấy bằng bao nhiêu?',
    options: [
      'a. B/5 (B- chiều rộng mặt cắt tính toán).',
      'b. B/7,5',
      'c. B/10.',
      'd. Không cho phép kéo.',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế đập trọng lực có chiều cao tới 60m, không có khớp nối mở rộng và không có lớp cách nước ở mặt thượng lưu, ứng với tổ hợp lực đặc biệt có động đất thì chiều sâu giới hạn bgh của vùng kéo ở phía thượng lưu cho phép lấy bằng bao nhiêu?',
    options: [
      'a. B/7,5 (B- chiều rộng mặt cắt tính toán).',
      'b. B/5',
      'c. B/3,5.',
      'd. B/2.',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế đập trọng lực có chiều cao tới 60m, không có khớp nối mở rộng và có lớp cách nước ở mặt thượng lưu, ứng với tổ hợp lực cơ bản thì chiều sâu giới hạn bgh của vùng kéo ở phía thượng lưu cho phép lấy bằng bao nhiêu?',
    options: [
      'a. Không cho phép kéo.',
      'b. B/7,5 (B- chiều rộng mặt cắt tính toán).',
      'c. B/6',
      'd. B/3.5.',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế đập trọng lực có chiều cao tới 60m, không có khớp nối mở rộng và có lớp cách nước ở mặt thượng lưu, ứng với tổ hợp lực đặc biệt có động đất thì chiều sâu giới hạn bgh của vùng kéo ở phía thượng lưu cho phép lấy bằng bao nhiêu?',
    options: [
      'a. B/10 (B- chiều rộng mặt cắt tính toán).',
      'b. B/7,5',
      'c. B/6.',
      'd. B/3,5.',
    ],
    correct: 3
  },
  {
    question: 'Tính toán độ bền và ổn định của đập bê tông theo nhóm trạng thái giới hạn thứ nhất cần thực hiện với các nội dung nào sau đây?',
    options: [
      'a. Ổn định tổng thể của đập.',
      'b. Độ bền chung của công trình và ổn định cục bộ của các bộ phận công trình.',
      'c. Cả a và',
      'b. d. Cả a, b và độ mở rộng các khớp nối thi công.',
    ],
    correct: 2
  },
  {
    question: 'Hệ số an toàn nhỏ nhất cho phép về ổn định của công trình trong các điều kiện làm việc đặc biệt (tổ hợp đặc biệt) được xác định như thế nào?',
    options: [
      'a. Lấy giảm 10% so với tổ hợp cơ bản.',
      'b. Lấy tăng 10% so với tổ hợp cơ bản.',
      'c. Lấy giảm 5% so với tổ hợp cơ bản.',
      'd. Lấy như tổ hợp cơ bản.',
    ],
    correct: 0
  },
];
