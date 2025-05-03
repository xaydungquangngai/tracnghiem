const questions = [
  {
    question: 'Trong công tác quy hoạch và thiết kế luồng tàu biển, để bảo đảm chạy tàu an toàn và điều khiển tàu dễ dàng cần xem xét các yếu tố nào?',
    options: [
      'a. Điều kiện địa hình, khí tượng-thủy hải văn',
      'b. Điều kiện thủy động lực',
      'c. Sự phù hợp với các công trình có liên quan',
      'd. Tất cả các yếu tố trên',
    ],
    correct: 3
  },
  {
    question: 'Để có một luồng tàu biển thuận lợi cho tàu đi lại cần thỏa mãn các yêu cầu nào?',
    options: [
      'a. Tuyến luồng gần như thẳng, bố trí đủ số lượng phao tiêu báo hiệu, đảm bảo an toàn hàng hải.',
      'b. Chiều rộng đủ và chiều sâu phù hợp để tàu hoạt động an toàn có xét đến ảnh hưởng của hình dạng bờ luồng, địa hình đáy biển và sóng do tàu gây ra.',
      'c. Các điều kiện khí tượng, thủy hải văn trên biển, đặc biệt gió và dòng triều nằm trong giới hạn cho phép bảo đảm chạy tàu an toàn',
      'd. Tất cả các yêu cầu trên',
    ],
    correct: 3
  },
  {
    question: 'Thế nào là Luồng có mặt cắt bị hạn chế hoàn toàn?',
    options: [
      'a. Là các luồng tự nhiên hoặc nạo vét một phần ở khu vực nước có độ rộng lớn.',
      'b. Là các luồng được nạo vét sâu hơn so với khu vực nước xung quanh',
      'c. Là Loại luồng được hình thành chủ yếu do nạo vét',
      'd. Là luồng có chiều dày nạo vét và phạm vi nạo vét vượt trên mực nước chạy tàu hay còn gọi là luồng nhân tạo',
    ],
    correct: 3
  },
  {
    question: 'Thế nào là Luồng một làn?',
    options: [
      'a. Là luồng chỉ có một làn chạy tàu',
      'b. Là luồng chỉ có một làn chạy tàu cho phép chạy tàu ra hoặc vào',
      'c. Là luồng một làn chạy tàu thường được bố trí các vị trí tránh tàu',
      'd. Cả ba đáp án trên đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Bán kính cong của luồng phụ thuộc vào',
    options: [
      'a. Tỷ số độ sâu nước và mớn nước',
      'b. Góc của bánh lái, góc ngoặt tạo bởi giữa tim hai tuyến luồng',
      'c. Chiều dài và chiều rộng tàu',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Xác định khẩu độ tĩnh không cần căn cứ vào các yếu tố nào?',
    options: [
      'a. Chiều cao cột tàu, độ chúi của tàu, mớn nước không tải của tàu',
      'b. Mực nước triều và chiều cao sóng.',
      'c. Kỹ năng điều khiển tàu của lái tàu',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Chiều rộng đáy của luồng tàu tuyến thẳng một làn phụ thuộc?',
    options: [
      'a. Chiều rộng cơ bản để tàu hoạt động',
      'b. Chiều rộng dự phòng trong điều kiện khó khăn do các tác động của gió, dòng chảy',
      'c. Chiều rộng an toàn giữa hai tàu',
      'd. Cả 2 đáp án a và b',
    ],
    correct: 3
  },
  {
    question: 'Tổng độ sâu dự phòng ảnh hưởng bởi các yếu tố nào?',
    options: [
      'a. Ảnh hưởng mực nước, Ảnh hưởng của đáy biển',
      'b. Ảnh hưởng mực nước, Ảnh hưởng của tàu thiết kế',
      'c. Ảnh hưởng của tàu thiết kế, Ảnh hưởng của đáy biển',
      'd. Ảnh hưởng mực nước, Ảnh hưởng của tàu thiết kế, Ảnh hưởng của đáy biển',
    ],
    correct: 3
  },
  {
    question: 'Hệ số của mái dốc luồng với Loại đất và trạng thái đất là Bùn, sét, sét pha cát trạng thái chảy ?',
    options: [
      'a. 20 - 30',
      'b. 15 - 20',
      'c. 10 - 15',
      'd. 7 - 10',
    ],
    correct: 0
  },
  {
    question: 'Hệ số của mái dốc luồng với Loại đất và trạng thái đất là Bùn dẻo loại cát pha sét, cát pha bụi ?',
    options: [
      'a. 15 - 20',
      'b. 10 - 15',
      'c. 7 - 10',
      'd. 7 - 9',
    ],
    correct: 2
  },
  {
    question: 'Chiều cao sóng giới hạn cho bốc xếp hàng đối với tàu trung bình và tàu lớn từ 500 GT đến 50.000 GT?',
    options: [
      'a. 0.3m',
      'b. 0.4m',
      'c. 0.5m',
      'd. 0.7m',
    ],
    correct: 2
  },
  {
    question: 'Giải pháp nào là giải pháp phi công trình chống sa bồi luồng tàu?',
    options: [
      'a. Đê chắn sóng',
      'b. Đê hướng dòng',
      'c. Đê ngăn cát - giảm sóng',
      'd. Giải pháp “Bẫy - hút cát”',
    ],
    correct: 3
  },
  {
    question: 'Luồng hàng hải cấp đặc biệt ở khu vực cửa biển, cửa vịnh hở, trên biển được quy định có độ sâu là bao nhiêu?',
    options: [
      'a. HCT ≥ 17m',
      'b. HCT ≥ 18m',
      'c. HCT ≥ 19m',
      'd. HCT ≥ 20m',
    ],
    correct: 3
  },
  {
    question: 'Luồng hàng hải cấp đặc biệt ở trong vịnh kín, đầm phá, luồng đào cho tàu biển được quy định có độ sâu là bao nhiêu?',
    options: [
      'a. HCT ≥ 17m',
      'b. HCT ≥ 18m',
      'c. HCT ≥ 19m',
      'd. HCT ≥ 20m',
    ],
    correct: 0
  },
  {
    question: 'Trong tiêu chuẩn luồng tàu biển - yêu cầu thiết kế chiều dài đoạn luồng thẳng nối giữa hai khúc cong ngược chiều được lấy tối thiểu bằng bao nhiêu?',
    options: [
      'a. ≥ 3L',
      'b. ≥ 5L',
      'c. Xác định thông qua mô phỏng chạy tàu trong điều kiện khó khăn về địa hình và địa vật',
      'd. Cả b và c',
    ],
    correct: 3
  },
  {
    question: 'Trong tiêu chuẩn luồng tàu biển - yêu cầu thiết kế chiều dài đoạn luồng thẳng nối giữa hai khúc cong cùng chiều được lấy tối thiểu bằng bao nhiêu?',
    options: [
      'a. ≥ 3L',
      'b. ≥ 4L',
      'c. ≥ 5L',
      'd. ≥ 6L',
    ],
    correct: 0
  },
  {
    question: 'Các yếu tố ảnh hưởng đến việc xác định tĩnh không phục vụ xây dựng cầu qua luồng tàu biển?',
    options: [
      'a. Chiều cao cột tàu, độ chúi của tàu và mớn nước không tải cảu tàu',
      'b. Mực nước triều và chiều cao sóng',
      'c. Kỹ năng điều khiển của lái tàu',
      'd. Cả a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Trong trường hợp mà kích thước tiêu chuẩn của vũng quay tàu không thể đáp ứng được do địa hình hạn chế nhưng có thể sử dụng vùng nước lân cận thì kích thước vũng quay tàu có thể lựa chọn như thế nào để được xem như là đáp ứng đủ các yêu cầu về an toàn?',
    options: [
      'a. Kích thước vũng quay tàu phải có đường kính tối thiểu bằng 1,2 lần chiều dài tàu Loa và không cần tàu lai dắt.',
      'b. Kích thước vũng quay tàu phải có đường kính tối thiểu bằng 1,2 lần chiều dài tàu Loa và bắt buộc sử dụng tàu lai dắt.',
      'c. Kích thước vũng quay tàu phải có đường kính tối thiểu bằng 1,6 lần chiều dài tàu Loa và không cần tàu lai dắt.',
      'd. Kích thước vũng quay tàu phải có đường kính tối thiểu bằng 2,0 lần chiều dài tàu Loa và bắt buộc sử dụng tàu lai dắt.',
    ],
    correct: 1
  },
  {
    question: 'Chiều rộng vượt quá tính toán cho phép mỗi bên ngoài phạm vi của luồng đào trong trường hợp nạo vét duy tu được quy định là bao nhiêu?',
    options: [
      'a. Không vượt quá 1m',
      'b. Không vượt quá 2m',
      'c. Không vượt quá 3m',
      'd. Không vượt quá 4m',
    ],
    correct: 1
  },
  {
    question: 'Chiều rộng vượt quá tính toán cho phép mỗi bên ngoài phạm vi của luồng đào trong trường hợp nạo vét cơ bản được quy định là bao nhiêu?',
    options: [
      'a. không vượt quá 1m',
      'b. không vượt quá 2m',
      'c. không vượt quá 3m',
      'd. không vượt quá 4m',
    ],
    correct: 2
  },
  {
    question: 'Theo Tiêu chuẩn 11820:9-2023 giá trị độ sâu nạo vét vượt quá đối với tàu hút bụng, xém thổi được quy định là bao nhiêu?',
    options: [
      'a. Độ chính xác thông thường là 0,2m và độ chính xác cao là 0,1m',
      'b. Độ chính xác thông thường là 0,3m và độ chính xác cao là 0,15m',
      'c. Độ chính xác thông thường là 0,4m và độ chính xác cao là 0,2m',
      'd. Độ chính xác thông thường là 0,5m và độ chính xác cao là 0,25m',
    ],
    correct: 2
  },
  {
    question: 'Ý nào sau đây là đúng?',
    options: [
      'a. Lý thuyết tuyến tính Airy là một trường hợp đặc biệt của lý thuyết Stokes',
      'b. Lý thuyết sóng Stockes đã xét đến một thực tế là đỉnh sóng dâng cao hơn trên mực nước tĩnh so với bụng sóng thấp hơn bên dưới.',
      'c. Những sóng Stokes có bậc kế tiếp cao hơn , cho mặt cắt bề mặt sóng dốc hơn trong các đỉnh và thoải hơn trong bụng sóng so với lý thuyết sóng biên độ nhỏ đã cho',
      'd. Cả 3 ý trên',
    ],
    correct: 3
  },
  {
    question: 'Chiều cao sóng có ý nghĩa từ phổ được xác định:',
    options: [
      'a. H1/3=1.6√m0 với m0 là mô men gốc của phổ sóng',
      'b. H1/3=2.5√m0 với m0 là mô men gốc của phổ sóng',
      'c. H1/3=3.8√m0 với m0 là mô men gốc của phổ sóng',
      'd. H1/3=4.0√m0 với m0 là mô men gốc của phổ sóng',
    ],
    correct: 3
  },
  {
    question: 'Hiện tượng thay đổi các thông số và phương truyền sóng khi độ sâu và địa hình đáy biển thay đổi gọi là hiện tượng gì?',
    options: [
      'a. Khúc xạ sóng',
      'b. Phản xạ sóng',
      'c. Nhiễu xạ sóng',
      'd. Sóng vỡ',
    ],
    correct: 0
  },
  {
    question: 'Hiện tượng mặt cắt sóng thay đổi khi độ dốc sóng vượt quá giới hạn cho phép gọi là hiện tượng gì?',
    options: [
      'a. Khúc xạ sóng',
      'b. Phản xạ sóng',
      'c. Nhiễu xạ sóng',
      'd. Sóng vỡ',
    ],
    correct: 3
  },
  {
    question: 'Chiều cao sóng lấy cho tính toán áp lực lên tường ở vùng sóng vỡ?',
    options: [
      'a. Bằng H1/3 của sóng vỡ',
      'b. Bằng Hmax của sóng vỡ',
      'c. Bằng H1/3 của sóng chưa vỡ',
      'd. Bằng Hmax của sóng chưa vỡ',
    ],
    correct: 1
  },
  {
    question: 'Áp lực xung do sóng vỡ ở cạnh đê chắn sóng tường đứng rất dễ xảy ra khi?',
    options: [
      'a. Đáy biển thoải, lớp đệm cao',
      'b. Đáy biển dốc, lớp đệm cao',
      'c. Đáy biển thoải, lớp đệm thấp',
      'd. Đáy biển dốc, lớp đệm thấp',
    ],
    correct: 1
  },
  {
    question: 'Lực sóng được xác định theo công thức Morison tác động lên các cấu kiện ngập dưới nước và kết cấu độc lập phù hợp với các cấu kiện:',
    options: [
      'a. Cấu kiện ngập dưới nước và kết cấu độc có kích thước nhỏ bước sóng D < L',
      'b. Cấu kiện ngập dưới nước và kết cấu độc có kích thước lớn D ≥ L',
      'c. Cấu kiện gần mặt nước có kích thước nhỏ bước sóng D < L',
      'd. Cấu kiện gần mặt nước có kích thước lớn D ≥ L',
    ],
    correct: 0
  },
  {
    question: 'Các tải trọng thủy lực do sóng lên sàn bến hay các bộ phận nhô ra khác (các dầm, đệm tầu) có thể được mô tả:',
    options: [
      'a. Các tải trọng nâng lên trên các bản, dầm hay các bộ phận nhô ra khác',
      'b. Các tải trọng đè xuống trên các bản (ngập và hút)',
      'c. Các tải trọng ngang (cả hai hướng biển và hướng bờ) trên các dầm hay các bộ phận nhô ra khác',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Lực dòng chảy tác động tác động lên các cấu kiện và công trình trên nền cọc ngập nước hay gần mặt nước như trụ cầu, đường ống, hay vật liệu phủ móng đá hộc thông qua:',
    options: [
      'a. Lực kéo theo',
      'b. Lực nâng',
      'c. Cả a và b',
      'd. Không đáng kể',
    ],
    correct: 2
  },
  {
    question: 'Trọng tải tàu (DWT) được hiểu là',
    options: [
      'a. Lượng hàng lớn nhất mà tàu chở được',
      'b. Tổng trọng lượng tàu và lượng hàng lớn nhất mà tàu chở được',
      'c. Tổng trọng lượng tàu, nhiên liệu, nước ballast và lượng hàng lớn nhất mà tàu chở được',
      'd. Trọng lượng tàu lớn nhất không kể hàng hóa',
    ],
    correct: 0
  },
  {
    question: 'Kết cấu bến trọng lực không phù hợp với điều kiện địa chất',
    options: [
      'a. Đất nền cứng xuất hiện gần với cao độ đáy bến',
      'b. Nền địa chất có lớp đất yếu sau khi áp dụng các phương pháp cải tạo đất thích hợp',
      'c. Nền địa chất có lớp đất yếu xuất hiện gần với cao độ đáy bến',
      'd. Cả hai phương án a và b',
    ],
    correct: 2
  },
  {
    question: 'Lực đẩy nổi lên công trình bến trọng lực được tính với cao độ mực nước',
    options: [
      'a. Cao độ mực nước cao thiết kế',
      'b. Cao độ mực nước thấp thiết kế',
      'c. Cao độ mực nước trung bình',
      'd. Cao độ mực nước dư',
    ],
    correct: 3
  },
  {
    question: 'Mặt bằng cọc của bến dạng bệ cọc đài cao được bố trí hợp lý trên cơ sở xem xét các yếu tố',
    options: [
      'a. Chiều dài và chiều rộng phân đoạn bến, điều kiện đất nền, công trình kè hiện hữu, tải trọng thườg xuyên và tải trọng tạm thời, các vấn đề liên quan đến thi công',
      'b. Chiều dài và chiều rộng phân đoạn bến, vị trí của công trình trên mặt bến, điều kiện đất nền, tải trọng thườg xuyên và tải trọng tạm thời, các vấn đề liên quan đến thi công',
      'c. Chiều dài và chiều rộng phân đoạn bến, vị trí của công trình trên mặt bến, điều kiện đất nền, công trình kè hiện hữu, tải trọng thườg xuyên và tải trọng tạm thời',
      'd. Chiều dài và chiều rộng phân đoạn bến, vị trí của công trình trên mặt bến, điều kiện đất nền, công trình kè hiện hữu, tải trọng thườg xuyên và tải trọng tạm thời, các vấn đề liên quan đến thi công',
    ],
    correct: 3
  },
  {
    question: 'Tải trọng va tàu được xác định',
    options: [
      'a. Từ năng lượng cập tàu',
      'b. Từ năng lượng cập tàu thông qua các đường đặc tính của đệm',
      'c. Từ năng lượng cập tàu và chất liệu làm đệm tàu',
      'd. Phản lực tương ứng với biến dạng 50% của đệm tàu',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế các hạng mục trong công trình cảng biển, dạng phá hoại nào dưới đây liên quan đến tuổi thọ của công trình?',
    options: [
      'a. EQU: phá hoại do mất ổn định',
      'b. STR: Phá hoại do vượt quá cường độ chịu lực của kết cấu',
      'c. FAT: Phá hoại do hiện tượng mỏi của kết cấu công trình',
      'd. GEO: Phá hoại do vượt quá khả năng chịu lực của nền đất',
    ],
    correct: 2
  },
  {
    question: 'Căn cứ vào tính chất và mức độ xâm thực của môi trường biển đối với kết cấu bê tông và bê tông cốt thép, môi trường biển được phân thành các vùng xâm thực theo vị trí kết cấu như sau:',
    options: [
      'a. Vùng ngập nước (vị trí các kết cấu nằm ngập hoàn toàn trong nước biển, nước lợ); Vùng nước lên xuống (vị trí các kết cấu nằm giữa mức nước lên cao nhất và xuống thấp nhất của thủy triều, kể cả ở các khu vực bị sóng táp); Vùng khí quyển (vị trí các kết cấu nằm trong không khí, chia thành các tiểu vùng).',
      'b. Vùng ngập nước (vị trí các kết cấu nằm ngập hoàn toàn trong nước biển, nước lợ); Vùng nước lên xuống (vị trí các kết cấu nằm giữa mức nước lên cao nhất và xuống thấp nhất của thủy triều); Vùng khí quyển (vị trí các kết cấu nằm trong không khí, chia thành các tiểu vùng).',
      'c. Vùng ngập nước (vị trí các kết cấu nằm ngập hoàn toàn trong nước biển); Vùng nước lên xuống (vị trí các kết cấu nằm giữa mức nước lên cao nhất và xuống thấp nhất của thủy triều); Vùng khí quyển và sóng táp.',
      'd. Vùng ngập nước (vị trí các kết cấu nằm ngập hoàn toàn trong nước biển); Vùng nước lên xuống (vị trí các kết cấu nằm giữa mức nước lên cao nhất và xuống thấp nhất của thủy triều); Vùng khí quyển.',
    ],
    correct: 0
  },
  {
    question: 'Khi thiết kế một kết cấu của công trình đê chắn sóng, người thiết kế nên chọn thiết kế theo phương pháp:',
    options: [
      'a. Phương pháp thiết kế theo hệ số an toàn tổng hợp',
      'b. Phương pháp thiết kế theo hệ số tổ hợp tải trọng',
      'c. Kết hợp đồng thời phương pháp thiết kế hệ số thành phần và phương pháp thiết kế hệ số sức kháng và tải trọng',
      'd. Phương pháp thiết kế theo hệ số thành phần hoặc phương pháp thiết kế theo hệ số sức kháng và tải trọng',
    ],
    correct: 3
  },
  {
    question: 'Các yếu tố thường góp phần gây ra hư hỏng do nguyên nhân thiết kế bao gồm:',
    options: [
      'a. Dự báo sóng thiết kế nhỏ hoặc thiết kế với chu kỳ lặp lại quá ngắn; không xem xét đủ hiện tượng sóng tập trung cục bộ do đặc điểm đặc biệt của địa hình đáy biển; mất ổn định thủy lực của công trình hoặc các bộ phận cấu thành của công trình;',
      'b. Dự báo sóng thiết kế nhỏ hoặc thiết kế với chu kỳ lặp lại quá ngắn; mất ổn định thủy lực của công trình hoặc các bộ phận cấu thành của công trình;',
      'c. Thiết kế với chu kỳ lặp lại quá ngắn; không xem xét đủ hiện tượng sóng tập trung cục bộ do đặc điểm đặc biệt của địa hình đáy biển; mất ổn định thủy lực của công trình;',
      'd. Không xem xét đủ hiện tượng sóng tập trung cục bộ do đặc điểm đặc biệt của địa hình đáy biển; mất ổn định thủy lực của công trình hoặc các bộ phận cấu thành của công trình;',
    ],
    correct: 0
  },
  {
    question: 'Tính ổn định của lớp phủ chống trượt trên lớp dưới bị ảnh hưởng bởi:',
    options: [
      'a. Hệ số ma sát giữa các lớp',
      'b. Trọng lượng riêng của vật liệu',
      'c. Độ dốc mái',
      'd. Tất cả các yếu tố trên',
    ],
    correct: 3
  },
  {
    question: 'Để xem xét độ lún của đê chắn sóng cần xét các yếu tố sau:',
    options: [
      'a. Độ lún cố kết của nền móng; Chìm đá đổ và các khối xuống đất nền',
      'b. Độ lún cố kết của nền móng; Rửa trôi đất nền; Dòng chảy ngang của đất nền; Chìm đá đổ và các khối xuống đất nền',
      'c. Độ lún cố kết của nền móng; Rửa trôi đất nền; Dòng chảy ngang của đất nền; Chìm đá đổ và các khối xuống đất nền; Sự co lại của đá đổ thân đê do giảm độ rỗng.',
      'd. Độ lún cố kết của nền móng; Sự co lại của đá đổ thân đê do giảm độ rỗng.',
    ],
    correct: 2
  },
  {
    question: 'Kích thước của các bộ phận của một thùng chìm phải được xác định dựa trên các yếu tố sau:',
    options: [
      'a. Năng lực của các cơ sở chế tạo thùng chìm; Mớn nước của thùng chìm và độ sâu nước tại nơi lắp đặt; Ổn định nổi nếu thùng chìm được thiết kế để tự nổi; Các điều kiện phục vụ trong quá trình kéo và lắp đặt; Điều kiện thi công sau khi lắp đặt thùng chìm; Nội lực thùng chìm.',
      'b. Năng lực của các cơ sở chế tạo thùng chìm; Ổn định nổi nếu thùng chìm được thiết kế để tự nổi; Các điều kiện phục vụ trong quá trình kéo và lắp đặt; Điều kiện thi công sau khi lắp đặt thùng chìm; Nội lực thùng chìm.',
      'c. Năng lực của các cơ sở chế tạo thùng chìm; Mớn nước của thùng chìm và độ sâu nước tại nơi lắp đặt; Điều kiện thi công sau khi lắp đặt thùng chìm; Nội lực thùng chìm.',
      'd. Mớn nước của thùng chìm và độ sâu nước tại nơi lắp đặt; Ổn định nổi nếu thùng chìm được thiết kế để tự nổi; Nội lực thùng chìm.',
    ],
    correct: 0
  },
  {
    question: 'Khi xem xét đến yếu tố sóng, hướng tuyến luồng nên được bố trí',
    options: [
      'a. Song song với hướng sóng',
      'b. Vuông góc với hướng sóng',
      'c. Tạo với hướng sóng tới góc khoảng 25-30 độ.',
      'd. Không phụ thuộc vào hướng sóng',
    ],
    correct: 2
  },
  {
    question: 'Độ dằn của tàu (độ chìm xuống của tầu so với mực nước tĩnh) lớn nhất khi',
    options: [
      'a. Vận tốc chạy tàu lớn và độ sâu chạy tàu nhỏ',
      'b. Vận tốc chạy tàu lớn và độ sâu chạy tàu lớn',
      'c. Vận tốc chạy tàu nhỏ và độ sâu chạy tàu lớn',
      'd. Vận tốc chạy tàu nhỏ và độ sâu chạy tàu nhỏ.',
    ],
    correct: 0
  },
  {
    question: 'Khi kiểm tra mức độ khó khăn của quá trình hành hải, phương pháp nào sau đây được sử dụng:',
    options: [
      'a. Phương pháp thực nghiệm',
      'b. Phương pháp chuyên gia',
      'c. Phương pháp mô phỏng lái tầu',
      'd. Cả 3 phương pháp trên',
    ],
    correct: 3
  },
  {
    question: 'Mức “0” của cao độ hải đồ khu vực là:',
    options: [
      'a. Mực nước thấp nhất quan trắc được tại khu vực trong nhiều năm',
      'b. Mực nước trung bình',
      'c. Trung bình của mực nước thấp nhất hàng năm',
      'd. Mức “0” tại trạm Hòn Dấu',
    ],
    correct: 0
  },
  {
    question: 'Cao trình bến tối ưu được xác định từ điều kiện:',
    options: [
      'a. Phân tích bài toán kinh tế giữa đầu tư và khai thác',
      'b. Xác suất cảng bị ngập khoảng 0,1%',
      'c. Không bị ngập trong mọi trường hợp',
      'd. Lớn hơn của mực nước cao thiết kế cộng 1m hoặc mực nước trung bình cộng 2m.',
    ],
    correct: 3
  },
  {
    question: 'Tàu Feeder là loại tàu:',
    options: [
      'a. Gom container chạy trên các tuyến ven biển với khoảng cách ngắn',
      'b. Pha sông biển',
      'c. Đi trong kênh',
      'd. Đi trong song',
    ],
    correct: 0
  },
  {
    question: 'Khi dòng chảy song song với tuyến mép bến, hướng tàu (trục từ đuôi đến mũi tầu) khi cập bến nên:',
    options: [
      'a. Cùng với hướng dòng chảy',
      'b. Vuông góc với hướng dòng chảy',
      'c. Nghiêng 45 độ so với hướng dòng chảy',
      'd. Ngược với hướng dòng chảy',
    ],
    correct: 3
  },
  {
    question: 'Các yếu tố nào sau đây KHÔNG được xem xét đến trong thiết kế luồng tàu theo tiêu chuẩn luồng đường thủy nội địa Việt Nam:',
    options: [
      'a. Mức độ nguy hiểm của loại hàng',
      'b. Mật độ tàu trên luồng',
      'c. Địa chất luồng',
      'd. Hệ số an toàn',
    ],
    correct: 3
  },
  {
    question: 'Mực nước cao thiết kế được xác định từ:',
    options: [
      'a. Trung bình mực nước ngày lớn trong chuỗi số liệu đo nhiều năm.',
      'b. Trung bình mực nước tháng lớn nhất trong chuỗi số liệu đo nhiều năm.',
      'c. Mực nước giờ tương ứng với tần suất xuất hiện trong chuỗi số liệu đo nhiều năm.',
      'd. Mực nước cao nhất trong nhiều năm.',
    ],
    correct: 2
  },
  {
    question: 'Tốc độ gió trong tính toán tải trọng neo tàu được lấy',
    options: [
      'a. Bằng tốc độ gió lớn nhất trong nhiều năm',
      'b. Bằng tốc độ gió trung bình trong nhiều năm',
      'c. Bằng khoảng 20-22m/s.',
      'd. Bằng tốc độ gió tương ứng với tần suất xuất hiện 5%.',
    ],
    correct: 2
  },
  {
    question: 'Chiều cao sóng thiết kế trong tính toán kết cấu công trình cảng được tính dựa trên',
    options: [
      'a. Số liệu thực đo trong nhiều năm.',
      'b. Số liệu quan trắc từ vệ tinh.',
      'c. Tốc độ gió tính toán tương ứng với tần suất xuất hiện nào đó.',
      'd. Không có lựa chọn nào đúng.',
    ],
    correct: 2
  },
  {
    question: 'Theo tiêu chuẩn Việt Nam, chiều cao sóng H1% được hiểu là',
    options: [
      'a. Chiều cao trung bình của 1% con sóng lớn nhất',
      'b. Chiều cao sóng với tần suất xuất hiện 1%.',
      'c. Chiều cao sóng lớn nhất với ứng với chu kỳ lặp lại 100 năm',
      'd. Chiều cao sóng ứng với vận tốc gió với chu kỳ lặp 100 năm.',
    ],
    correct: 3
  },
  {
    question: 'Trọng tải tàu (DWT) được hiểu là',
    options: [
      'a. Lượng hàng lớn nhất mà tàu chở được',
      'b. Tổng trọng lượng tàu và lượng hàng lớn nhất mà tàu chở được.',
      'c. Tổng trọng lượng tầu, nhiên liệu, nước ballast và lượng hàng lớn nhất mà tàu chở được.',
      'd. Trọng lượng tàu lớn nhất không kể hàng.',
    ],
    correct: 0
  },
  {
    question: 'Thời gian khác thác của cảng phụ thuộc vào',
    options: [
      'a. Hệ số bận bến',
      'b. Điều kiện tự nhiên',
      'c. Thiết bị và công nghệ',
      'd. Cả b và c',
    ],
    correct: 3
  },
  {
    question: 'Độ tĩnh lặng của bể cảng được xác định từ',
    options: [
      'a. Thời gian cảng có thể khai thác bình thường trong một năm.',
      'b. Thời gian lặng gió trong một năm.',
      'c. Thời gian sóng lặng trong năm.',
      'd. Thời gian sóng có chiều cao nhỏ hơn hoặc bằng chiều cao nào đó trong năm.',
    ],
    correct: 3
  },
  {
    question: 'Kho CFS dùng để',
    options: [
      'a. Chứa container',
      'b. Kiểm tra container',
      'c. Tháo dỡ và đóng gói hàng vào container',
      'd. Giao nhận hàng container',
    ],
    correct: 2
  },
  {
    question: 'Cấp công trình bến phụ thuộc vào',
    options: [
      'a. Lượng hàng thông qua bến',
      'b. Mức độ quan trọng của bến',
      'c. Người ra quyết định',
      'd. Trọng tải tàu và chiều sâu trước bến',
    ],
    correct: 3
  },
  {
    question: 'Tốc độ gió cho phép trong khai thác công trình bến được quy định bởi',
    options: [
      'a. Khả năng làm việc của các thiết bị trên bến',
      'b. Khả năng chịu lực của công trình bến',
      'c. Người khai thác',
      'd. Tiêu chuẩn thiết kế',
    ],
    correct: 0
  },
  {
    question: 'Bến dạng trụ va neo cập hay được xây dựng cho các bến chuyên dụng dầu khí vì',
    options: [
      'a. Dễ phòng chống cháy nổ',
      'b. Thuận lợi trong quá trình khai thác',
      'c. Dễ neo cập',
      'd. Công nghệ hút rót',
    ],
    correct: 3
  },
  {
    question: 'Đường thủy nội địa được phân cấp theo',
    options: [
      'a. Kích thước sông/kênh',
      'b. Kích thước tàu',
      'c. Lượng hàng',
      'd. Tầm quan trọng',
    ],
    correct: 0
  },
  {
    question: 'Chiều sâu chạy tàu trên luồng được tính từ',
    options: [
      'a. Mực nước 0 hải đồ đến cao độ đáy nạo vét',
      'b. Mực nước 0 hải đồ đến cao độ đáy chạy tàu',
      'c. Mực nước chạy tàu đến cao độ đáy nạo vét',
      'd. Mực nước chạy tàu đến cao độ đáy chạy tàu.',
    ],
    correct: 1
  },
  {
    question: 'Khoảng dừng của tàu có thể xác định sơ bộ từ',
    options: [
      'a. Chiều dài tàu thiết kế',
      'b. Vận tốc tàu chạy trên luồng',
      'c. Trọng tải tàu thiết kế',
      'd. Công suất của máy tàu',
    ],
    correct: 0
  },
  {
    question: 'Công trình luồng hàng hải được phân thành',
    options: [
      'a. 4 cấp và một cấp đặc biệt',
      'b. 3 cấp và một cấp đặc biệt',
      'c. 4 cấp',
      'd. 3 cấp',
    ],
    correct: 0
  },
  {
    question: 'Chiều sâu nước trước bến được tính từ:',
    options: [
      'a. Mực nước 0 Hải đồ đến cao độ đáy bến;',
      'b. Mực nước 0 Hải đồ đến cao độ đáy chạy tàu;',
      'c. Mực nước thấp thiết kế đến cao độ đáy bến;',
      'd. Mực nước thấp thiết kế đến cao độ đáy chạy tàu',
    ],
    correct: 2
  },
  {
    question: 'Vùng đất cảng của cảng thủy nội địa được quy định thế nào là đúng sau đây?',
    options: [
      'a. Được giới hạn để xây dựng cầu cảng, kho, bãi, nhà xưởng, trụ sở, cơ sở dịch vụ, hệ thống giao thông, thông tin liên lạc, điện, nước, lắp đặt thiết bị và công trình phụ trợ khác.',
      'b. Vùng được giới hạn để thiết lập vùng nước trước cầu cảng, vùng quay trở, khu neo đậu, khu chuyển tải, khu hạ tải, khu tránh bão;',
      'c. Thoả mãn cả 2 quy định trên',
      'd. Các quy định trên không đúng',
    ],
    correct: 0
  },
  {
    question: 'Vùng nước cảng của cảng thủy nội địa được quy định thế nào là đúng sau đây?',
    options: [
      'a. Được giới hạn để xây dựng cầu cảng, kho, bãi, nhà xưởng, điện, nước, lắp đặt thiết bị và công trình phụ trợ khác.',
      'b. Vùng nước cảng được giới hạn để thiết lập vùng nước trước cầu cảng, vùng quay trở, khu neo đậu, khu chuyển tải, khu hạ tải, khu tránh bão;',
      'c. Được giới hạn để xây dựng trụ sở, cơ sở dịch vụ, hệ thống giao thông, thông tin liên lạc, và công trình phụ trợ khác.',
      'd. Các quy định trên đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Công trình nào sau đây là Cảng thủy nội địa?',
    options: [
      'a. Là hệ thống công trình được xây dựng để phương tiện, tàu biển neo đậu, xếp dỡ hàng hóa, đón trả hành khách và thực hiện dịch vụ hỗ trợ khác',
      'b. Là công trình độc lập có quy mô nhỏ, gồm vùng đất và vùng nước trước bến để phương tiện neo đậu, xếp dỡ hàng hóa, đón trả hành khách và thực hiện dịch vụ hỗ trợ khác',
      'c. Cả 2 dạng công trình ở trên',
      'd. Là Vùng đất cảng được giới hạn để xây dựng cầu cảng, kho, bãi, nhà xưởng, trụ sở, cơ sở dịch vụ và công trình phụ trợ khác.',
    ],
    correct: 0
  },
  {
    question: 'Khi lựa chọn kết cấu công trình bến cảng thủy nội địa cần chú ý đến các đặc điểm về tác động bất lợi của điều kiện tự nhiên nào sau đây?',
    options: [
      'a. Dao động mực nước giữa mùa cạn và mùa lũ thường có biên độ rất lớn; Dòng chảy trước bến thường có lưu tốc cao, đặc biệt là vào mùa lũ',
      'b. Bờ và đáy sông ven công trình bến chịu tác động bồi xói theo chu trình, phụ thuộc vào quá trình diễn biến của lòng dẫn trên cả đoạn sông',
      'c. Cả 2 nội dung a và b',
      'd. Hướng dòng chảy và địa chất công trình.',
    ],
    correct: 2
  },
  {
    question: 'Kết cấu công trình bến được chọn phải thỏa mãn tốt nhất các yêu cầu nào sau đây?',
    options: [
      'a. Chi phí cho các vật liệu xây dựng chủ yếu (sắt thép, xi măng, gỗ) ở mức thấp nhất;',
      'b. Có tuổi thọ công trình phù hợp với thời hạn sử dụng bến quy định trong yêu cầu thiết kế;',
      'c. Khai thác thuận tiện, dễ duy tu sửa chữa.',
      'd. Tất cả các nội dung ở trên',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp (mô hình) nào sau đây được sử dụng để xác định chiều cao sóng thiết kế:',
    options: [
      'a. Mô hình mô phỏng',
      'b. Mô hình vật lý',
      'c. Mô hình thực nghiệm',
      'd. Mô hình toán',
    ],
    correct: 3
  },
];
