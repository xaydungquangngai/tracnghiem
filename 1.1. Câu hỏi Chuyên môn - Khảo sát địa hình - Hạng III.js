const questions = [
  {
    question: 'Khi thi công nhà cao tầng, sai lệch về cao độ đáy móng so với thiết kế không vượt quá:',
    options: [
      'a. ± 10mm;',
      'b. ± 15mm;',
      'c. ± 20mm;',
      'd. ± 25mm;',
    ],
    correct: 2
  },
  {
    question: 'Phương pháp thủy chuẩn thủy tĩnh để quan trắc lún dựa trên định luật vật lý nào?',
    options: [
      'a. Định luật truyền thẳng ánh sáng;',
      'b. Định luật bình thông nhau;',
      'c. Định luật khúc xạ ánh sáng;',
      'd. Định luật vạn vật hấp dẫn',
    ],
    correct: 1
  },
  {
    question: 'Muốn xác định bán kính và tọa độ tâm của một vòng tròn trên một ống khói (hay silo) bằng phương pháp đo tọa độ trên thân của nó, cần phải thực hiện đo tối thiểu bao nhiêu điểm?',
    options: [
      'a. 02 điểm;',
      'b. 03 điểm;',
      'c. 04 điểm;',
      'd. 05 điểm;',
    ],
    correct: 1
  },
  {
    question: 'Để đánh giá độ ổn định của hệ thống mốc chuẩn quan trắc độ lún công trình xây dựng, cần xây dựng tối thiểu bao nhiêu mốc chuẩn?',
    options: [
      'a. 02 mốc:',
      'b. 03 mốc;',
      'c. 04 mốc;',
      'd. 05 mốc;',
    ],
    correct: 1
  },
  {
    question: 'Để bố trí công trình có thể sử dụng các phương pháp nào?',
    options: [
      'a. Phương pháp tọa độ vuông góc',
      'b. Phương pháp tọa độ cực; giao hội',
      'c. Phương pháp đường chuyền toàn đạc; tam giác khép kín',
      'd. Một trong các phương pháp trên',
    ],
    correct: 3
  },
  {
    question: 'Bố trí công trình được thực hiện theo trình tự nào:',
    options: [
      'a. Chuyển trục ra thực địa và giác móng; Lập lưới bố trí công trình; Định vị công trình; Bố trí các trục phụ; Bố trí chi tiết các trục dọc và ngang; Chuyển trục và độ cao lên các tầng; Bố trí các điểm chi tiết; Đo vẽ hoàn công',
      'b. Lập lưới bố trí công trình; Định vị công trình; Chuyển trục ra thực địa và giác móng; Bố trí các trục phụ; Bố trí chi tiết các trục dọc và ngang; Đo vẽ hoàn công; Chuyển trục và độ cao lên các tầng; Bố trí các điểm chi tiết',
      'c. Lập lưới bố trí công trình; Định vị công trình; Chuyển trục ra thực địa và giác móng; Bố trí các trục phụ; Bố trí chi tiết các trục dọc và ngang; Chuyển trục và độ cao lên các tầng; Bố trí các điểm chi tiết; Đo vẽ hoàn công',
      'd. Định vị công trình; Chuyển trục ra thực địa và giác móng; Lập lưới bố trí công trình; Bố trí các trục phụ; Bố trí chi tiết các trục dọc và ngang; Chuyển trục và độ cao lên các tầng; Bố trí các điểm chi tiết; Đo vẽ hoàn công',
    ],
    correct: 2
  },
  {
    question: 'Các bản vẽ thiết kế cần thiết cần giao cho nhà thầu gồm:',
    options: [
      'a. Bản đồ tỷ lệ lớn; Bản vẽ bố trí các trục chính công trình; Bản vẽ móng công trình; Bản vẽ mặt cắt công trình.',
      'b. Bản vẽ tổng mặt bằng công trình; Bản đồ tỷ lệ lớn; Bản vẽ móng công trình; Bản vẽ mặt cắt công trình.',
      'c. Bản vẽ tổng mặt bằng công trình; Bản vẽ bố trí các trục chính công trình; Bản vẽ móng công trình; Bản đồ tỷ lệ lớn.',
      'd. Bản vẽ tổng mặt bằng công trình; Bản vẽ bố trí các trục chính công trình; Bản vẽ móng công trình; Bản vẽ mặt cắt công trình.',
    ],
    correct: 3
  },
  {
    question: 'Yêu cầu độ chính xác công trình phụ thuộc vào:',
    options: [
      'a. Kích thước hạng mục; chất lượng xây dựng; tính chất; hình thức kết cấu; trình tự và phương pháp thì công xây lắp.',
      'b. Kích thước hạng mục; vật liệu xây dựng; tính chất; hình thức kết cấu móng; trình tự và phương pháp thi công xây lắp.',
      'c. Chiều cao công trình; vật liệu xây dựng; tính chất; hình thức kết cấu; trình tự và phương pháp thi công xây lắp.',
      'd. Kích thước hạng mục; vật liệu xây dựng; tính chất; hình thức kết cấu; trình tự và phương pháp thi công xây lắp.',
    ],
    correct: 3
  },
  {
    question: 'Có mấy cấp chính xác khi bố trí công trình:',
    options: [
      'a. 4 cấp',
      'b. 5 cấp',
      'c. 6 cấp',
      'd. 7 cấp',
    ],
    correct: 2
  },
  {
    question: 'Cấp chính xác bố trí công trình cấp 3 có đặc trưng độ chính xác như thế nào:',
    options: [
      'a. mβ = 5“, ms/s = 1/15000, mh = 1 mm/trạm',
      'b. mβ = 10“, ms/s = 1/10000, mh = 2 mm/trạm',
      'c. mβ = 20“, ms/s = 1/5000, mh = 2.5 mm/trạm',
      'd. mβ = 30“, ms/s = 1/5000, mh = 3 mm/trạm',
    ],
    correct: 2
  },
  {
    question: 'Nếu chiều cao mặt bằng thi công xây dựng từ 60 đến 100m thì sai số trung phương xác định độ cao trên mặt bằng thi công xây dựng so với mặt bằng gốc là bao nhiêu?',
    options: [
      'a. 3 mm',
      'b. 4 mm',
      'c. 5 mm',
      'd. 6 mm',
    ],
    correct: 2
  },
  {
    question: 'Độ chính xác của công tác đo đạc kiểm tra kích thước hình học và đo vẽ hoàn công không được lớn hơn:',
    options: [
      'a. 20% dung sai cho phép của kích thước hình học được cho trong tiêu chuẩn chuyên ngành hoặc hồ sơ thiết kế.',
      'b. 25% dung sai cho phép của kích thước hình học được cho trong tiêu chuẩn chuyên ngành hoặc hồ sơ thiết kế.',
      'c. 30% dung sai cho phép của kích thước hình học được cho trong tiêu chuẩn chuyên ngành hoặc hồ sơ thiết kế.',
      'd. 35% dung sai cho phép của kích thước hình học được cho trong tiêu chuẩn chuyên ngành hoặc hồ sơ thiết kế.',
    ],
    correct: 0
  },
  {
    question: 'Sai số giới hạn cho phép khi đo chuyển dịch ngang đối với công trình xây dựng trên nền đất cát, đất sét và các loại đất chịu nén khác:',
    options: [
      'a. 1 mm',
      'b. 3 mm',
      'c. 5 mm',
      'd. 10 mm',
    ],
    correct: 1
  },
  {
    question: 'Sai số cho phép đo độ nghiêng của ống khói, tháp cột cao không vượt quá:',
    options: [
      'a. 0.00001 x H',
      'b. 0.0001 x H',
      'c. 0.0005 x H',
      'd. 0.001 x H',
    ],
    correct: 2
  },
  {
    question: 'Trên khu vực thành phố và công nghiệp lưới trắc địa đo vẽ bản đồ tỷ lệ lớn được thiết kế phải đảm bảo các chỉ tiêu nào?',
    options: [
      'a. Độ chính xác của mạng lưới khống chế ở cấp trên phải đảm bảo cho việc tăng dầy cho cấp dưới',
      'b. Mật độ điểm khống chế phải thỏa mãn các yêu cầu đo vẽ',
      'c. Đối với khu vực nhỏ thì sử dụng hệ tọa độ độc lập',
      'd. Cả ba chỉ tiêu trên',
    ],
    correct: 3
  },
  {
    question: 'Sai số vị trí điểm khống chế đo vẽ so với điểm khống chế cơ sở gần nhất không vượt quá:',
    options: [
      'a. 0.10 mm trên bản đồ đối với vùng rậm rạp',
      'b. 0.15 mm trên bản đồ đối với vùng rậm rạp',
      'c. 0.20 mm trên bản đồ đối với vùng rậm rạp',
      'd. 0.25 mm trên bản đồ đối với vùng rậm rạp',
    ],
    correct: 1
  },
  {
    question: 'Sai số độ cao của điểm khống chế đo vẽ so với điểm độ cao cơ sở gần nhất không được vượt quá:',
    options: [
      'a. 1/3 khoảng cao đều ở vùng núi',
      'b. 1/6 khoảng cao đều ở vùng núi',
      'c. 1/10 khoảng cao đều ở vùng núi',
      'd. 1/12 khoảng cao đều ở vùng núi',
    ],
    correct: 1
  },
  {
    question: 'Khi đo vẽ ở khu vực chưa xây dựng cần sử dụng bản đồ các loại tỷ lệ nào?',
    options: [
      'a. 1:500 và 1:1000',
      'b. 1:2000',
      'c. 1:5000',
      'd. Một trong các tỷ lệ trên',
    ],
    correct: 3
  },
  {
    question: 'Sai số trung bình vị trí mặt bằng của các vật cố định, quan trọng so với điểm khống chế đo vẽ gần nhất không vượt quá:',
    options: [
      'a. 0.15 mm trên bản đồ',
      'b. 0.2 mm trên bản đồ',
      'c. 0.3 mm trên bản đồ',
      'd. 0.4 mm trên bản đồ',
    ],
    correct: 2
  },
  {
    question: 'Sai số độ cao của điểm khống chế đo vẽ so với điểm độ cao cơ sở gần nhất không được vượt quá:',
    options: [
      'a. 1/3 khoảng cao đều ở vùng đồng bằng',
      'b. 1/6 khoảng cao đều ở vùng đồng bằng',
      'c. 1/10 khoảng cao đều ở vùng đồng bằng',
      'd. 1/12 khoảng cao đều ở vùng đồng bằng',
    ],
    correct: 2
  },
  {
    question: 'Khi đo vẽ ở khu vực đã xây dựng cần sử dụng bản đồ các loại tỷ lệ nào?',
    options: [
      'a. 1:200',
      'b. 1:500',
      'c. 1:1000',
      'd. Một trong ba tỷ lệ trên',
    ],
    correct: 3
  },
  {
    question: 'Khi đo vẽ ở khu vực đã xây dựng sử dụng các phương pháp nào để đo vẽ chi tiết?',
    options: [
      'a. Phương pháp tọa độ cực',
      'b. Phương pháp giao hội góc, cạnh',
      'c. Phương pháp tọa độ vuông góc',
      'd. Cả ba phương pháp a,b,c',
    ],
    correct: 3
  },
  {
    question: 'Mạng lưới gồm các điểm có tọa độ được xác định chính xác và được đánh dấu bằng các mốc kiên cố trên mặt bằng xây dựng và được sử dụng làm cơ sở để bố trí các hạng mục công trình từ bản vẽ thiết kế ra thực địa là:',
    options: [
      'a. Lưới khống chế cơ sở',
      'b. Lưới khống chế thi công',
      'c. Lưới khống chế đo vẽ',
      'd. Lưới khống chế đo vẽ bản đồ tỷ lệ lớn',
    ],
    correct: 1
  },
  {
    question: 'Hệ tọa độ của lưới khống chế thi công phải là:',
    options: [
      'a. Hệ tọa độ giả định',
      'b. Hệ tọa độ đã dùng trong các giai đoạn khảo sát và thiết kế công trình',
      'c. Hệ tọa độ nhà nước',
      'd. Một trong các phương án trên',
    ],
    correct: 1
  },
  {
    question: 'Lưới khống chế thi công có thể có các dạng nào?',
    options: [
      'a. Lưới ô vuông xây dựng',
      'b. Lưới đường chuyền đa giác',
      'c. Lưới tam giác đo góc cạnh kết hợp',
      'd. Một trong các phương án trên',
    ],
    correct: 1
  },
  {
    question: 'Số bậc của lưới khống chế mặt bằng thi công tối đa là bao nhiêu bậc?',
    options: [
      'a. 2',
      'b. 3',
      'c. 4',
      'd. 5',
    ],
    correct: 2
  },
  {
    question: 'Mật độ các điểm của lưới khống chế mặt bằng thi công đối với các công trình xây dựng công nghiệp nên chọn như thế nào?',
    options: [
      'a. 1 điểm trên 1 đến 2 ha',
      'b. 1 điểm trên 2 đến 3 ha',
      'c. 1 điểm trên 3 đến 5 ha',
      'd. 1 điểm trên 5 đến 10 ha',
    ],
    correct: 1
  },
  {
    question: 'Số điểm khống chế mặt bằng tối thiểu của lưới thi công là bao nhiêu?',
    options: [
      'a. 2',
      'b. 3',
      'c. 4',
      'd. 5',
    ],
    correct: 2
  },
  {
    question: 'Lưới khống chế độ cao phục vụ công tác thi công các công trình lớn có diện tích lớn hơn 100 ha được thành lập bằng phương pháp đo cao hình học với độ chính xác tương đương với thủy chuẩn cấp hạng nào?',
    options: [
      'a. Hạng II',
      'b. Hạng III',
      'c. Hạng IV',
      'd. Kỹ thuật',
    ],
    correct: 1
  },
  {
    question: 'Lưới khống chế độ cao phục vụ công tác thi công các công trình lớn có diện tích nhỏ hơn 100 ha được thành lập bằng phương pháp đo cao hình học với độ chính xác tương đương với thủy chuẩn cấp hạng nào?',
    options: [
      'a. Hạng II',
      'b. Hạng III',
      'c. Hạng IV',
      'd. Kỹ thuật',
    ],
    correct: 2
  },
  {
    question: 'Loại công trình nào khi lập lưới khống chế thi công yêu cầu độ chính xác: mβ = 5“, ms/s = 1/10000, mh = 6 mm/km?',
    options: [
      'a. Xí nghiệp, các cụm nhà và công trình xây dựng trên phạm vi lớn hơn 100 ha, từng ngôi nhà và công trình riêng biệt trên diện tích lớn hơn 10 ha.',
      'b. Xí nghiệp, các cụm nhà và công trình xây dựng trên phạm vi nhỏ hơn 100 ha, từng ngôi nhà và công trình riêng biệt trên diện tích từ 1 ha đến 10 ha.',
      'c. Nhà và công trình xây dựng trên diện tích nhỏ hơn 1 ha, đường trên mặt đất và các đường ống ngầm trong phạm vi xây dựng.',
      'd. Đường trên mặt đất và các đường ống ngầm ngoài phạm vi xây dựng.',
    ],
    correct: 1
  },
  {
    question: 'Loại công trình nào khi lập lưới khống chế thi công yêu cầu độ chính xác: mβ = 10“, ms/s = 1/5000, mh = 10 mm/km?',
    options: [
      'a. Xí nghiệp, các cụm nhà và công trình xây dựng trên phạm vi lớn hơn 100 ha, từng ngôi nhà và công trình riêng biệt trên diện tích lớn hơn 10 ha.',
      'b. Xí nghiệp, các cụm nhà và công trình xây dựng trên phạm vi nhỏ hơn 100 ha, từng ngôi nhà và công trình riêng biệt trên diện tích từ 1 ha đến 10 ha.',
      'c. Nhà và công trình xây dựng trên diện tích nhỏ hơn 1 ha, đường trên mặt đất và các đường ống ngầm trong phạm vi xây dựng.',
      'd. Đường trên mặt đất và các đường ống ngầm ngoài phạm vi xây dựng.',
    ],
    correct: 2
  },
  {
    question: 'Việc thành lập lưới khống chế mặt bằng phục vụ thi công phải được hoàn thành và bàn giao chậm nhất bao nhiêu tuần trước khi khởi công xây dựng công trình?',
    options: [
      'a. 1 tuần.',
      'b. 2 tuần.',
      'c. 3 tuần.',
      'd. 4 tuần.',
    ],
    correct: 1
  },
  {
    question: 'Việc đo độ lún công trình cần tiến hành thường xuyên cho đến tốc độ lún công trình:',
    options: [
      'a. 1-2 mm/năm',
      'b. 2-3 mm/năm',
      'c. 1-3 mm/năm',
      'd. 3-5 mm/năm',
    ],
    correct: 0
  },
  {
    question: 'Để đo độ lún công trình cần sử dụng các máy thủy chuẩn có độ phóng đại không nhỏ hơn:',
    options: [
      'a. 40 lần',
      'b. 24 lần',
      'c. 16 lần',
      'd. 20 lần',
    ],
    correct: 1
  },
  {
    question: 'Để đo độ lún công trình cần sử dụng các máy thủy chuẩn có giá trị khoảng chia trên ống nước dài không vượt quá:',
    options: [
      'a. 25“/2mm',
      'b. 20“/2mm',
      'c. 12“/2mm',
      'd. 15“/2mm',
    ],
    correct: 2
  },
  {
    question: 'Trước khi đo độ lún công trình, so với máy tự động cân bằng, máy không tự động cân bằng phải kiểm nghiệm bổ sung các nội dung nào:',
    options: [
      'a. Kiểm tra hoạt động của vít nghiêng bằng mia; kiểm tra độ chính xác của trục ngắm khi điều chỉnh tiêu cự; kiểm nghiệm và hiệu chỉnh vị trí bọt nước dài.',
      'b. Xác định giá trị vạch khắc của ống nước dài và sai số hình ảnh parabol; xác định giá trị vạch chia của bộ đo cực nhỏ trên các khoảng cách khác nhau; kiểm nghiệm và hiệu chỉnh vị trí bọt nước dài.',
      'c. Xác định giá trị vạch chia của bộ đo cực nhỏ trên các khoảng cách khác nhau; kiểm tra hoạt động của vít nghiêng bằng mia; kiểm nghiệm và hiệu chỉnh vị trí bọt nước dài.',
      'd. Xác định giá trị vạch khắc của ống nước dài và sai số hình ảnh parabol; kiểm tra hoạt động của vít nghiêng bằng mia; kiểm nghiệm và hiệu chỉnh vị trí bọt nước dài.',
    ],
    correct: 3
  },
  {
    question: 'Cần có biện pháp loại trừ ảnh hưởng của góc i trước khi đo khi góc i dao động quá',
    options: [
      'a. 10“',
      'b. 12“',
      'c. 20“',
      'd. 25“',
    ],
    correct: 1
  },
  {
    question: 'Xác định sai số khoảng chia 1dm trên thang chính và thang phụ (nếu có) của mia Invar, sai số này không được vượt quá',
    options: [
      'a. 0.20 mm',
      'b. 0.15 mm',
      'c. 0.25 mm',
      'd. 0.10 mm',
    ],
    correct: 1
  },
  {
    question: 'Mốc chuẩn cần thỏa mãn các yêu cầu nào:',
    options: [
      'a. Giữ được ổn định trong suốt quá trình đo độ lún công trình',
      'b. Cho phép kiểm tra một cách tin cậy độ ổn định của các mốc khác',
      'c. Cho phép dẫn độ cao đến các mốc đo lún một cách thuận lợi',
      'd. Cả ba yêu cầu trên',
    ],
    correct: 3
  },
  {
    question: 'Mốc đo độ lún có các loại sau:',
    options: [
      'a. Mốc gắn tường, cột',
      'b. Mốc nền móng',
      'c. Mốc chôn sâu',
      'd. Cả ba loại a,b,c',
    ],
    correct: 3
  },
  {
    question: 'Nên bố trí mốc chuẩn có khoảng cách đến công trình là:',
    options: [
      'a. 50-100m',
      'b. 100-200m',
      'c. 200-300m',
      'd. 300-500m',
    ],
    correct: 0
  },
  {
    question: 'Kết quả đo độ lún công trình được sử dụng để giải quyết nhiệm vụ gì:',
    options: [
      'a. Đánh giá, kiểm chứng các giải pháp thiết kế nền, móng và cung cấp tài liệu cho',
      'b. Đánh giá, kiểm chứng các giải pháp thiết kế và và làm cơ sở để đưa ra các biện pháp thi công công trình',
      'c. Đánh giá, kiểm chứng các giải pháp thiết kế nền, móng và làm cơ sở để đưa ra các biện pháp phòng chống sự cố',
      'd. Kiểm tra độ ổn định của công trình và cung cấp tài liệu cho xây dựng công trình',
    ],
    correct: 2
  },
  {
    question: 'Số lượng mốc chuẩn khi khi đo lún các công trình xây dựng cần ít nhất là:',
    options: [
      'a. 2',
      'b. 3',
      'c. 4',
      'd. 5',
    ],
    correct: 1
  },
  {
    question: 'Mốc chuẩn có dạng cọc ống (loại A) được áp dụng khi đo lún các công trình xây dựng nào',
    options: [
      'a. Nền đất đá ổn định, chiều sâu khá lớn, khu vực thi công chịu tác động của lực động học',
      'b. Móng cọc chiều sâu đạt đến lớp đất đá tốt được sử dụng để tựa cọc công trình',
      'c. Trên nền đất đá kém ổn định',
      'd. Cả ba loại trên',
    ],
    correct: 0
  },
  {
    question: 'Việc đo lún công trình được chia thành các cấp như thế nào?',
    options: [
      'a. Ba cấp (cấp I: ±1 mm; cấp II: ±2 mm; cấp III: ±5 mm)',
      'b. Ba cấp (cấp I: ±2 mm; cấp II: ±5 mm; cấp III: ±10 mm)',
      'c. Ba cấp (cấp I: ±0.5 mm; cấp II: ±1 mm; cấp III: ±2 mm)',
      'd. Bốn cấp (cấp I: ±1 mm; cấp II: ±2 mm; cấp III: ±5 mm; cấp IV: ±10 mm)',
    ],
    correct: 0
  },
  {
    question: 'Đo độ lún của nền móng các nhà và công trình được xây dựng trên nền đất cứng, các công trình quan trọng, các công trình có ý nghĩa đặc biệt phải chọn cấp độ đo lún nào“',
    options: [
      'a. Cấp I',
      'b. Cấp II',
      'c. Cấp III',
      'd. Ngoài phạm vi độ chính xác các cấp trên',
    ],
    correct: 0
  },
  {
    question: 'Đo độ lún của nền móng các nhà và công trình được xây dựng trên nền đất có tính biến dạng cao, các công trình được đo độ lún để xác định nguyên nhân hư hỏng phải chọn cấp độ đo lún nào?',
    options: [
      'a. Cấp I',
      'b. Cấp II',
      'c. Cấp III',
      'd. Ngoài phạm vi độ chính xác các cấp trên',
    ],
    correct: 1
  },
  {
    question: 'Đo độ lún của nền móng các nhà và công trình được xây dựng trên nền đất lấp, đất có tính sụt lún cao, đất có tính bão hòa nước và trên nền đất bùn chịu nén',
    options: [
      'a. Cấp I',
      'b. Cấp II',
      'c. Cấp III',
      'd. Ngoài phạm vi độ chính xác các cấp trên',
    ],
    correct: 2
  },
  {
    question: 'Xác định phương pháp tính trọng số đảo độ cao của điểm yếu theo sơ đồ mạng lưới đo lún:',
    options: [
      'a. Phương pháp thay thế trọng số tương đương',
      'b. Phương pháp nhích dần',
      'c. Phương pháp ước tính theo chương trình được lập trên máy tính',
      'd. Một trong ba phương pháp trên',
    ],
    correct: 3
  },
  {
    question: 'Sơ đồ mạng lưới đo độ lún cần được chuyển lên bình đồ hoặc bản đồ có tỷ lệ từ:',
    options: [
      'a. 1:100 đến 1:1000',
      'b. 1:100 đến 1:500',
      'c. 1:200 đến 1:500',
      'd. 1:500 đến 1:1000',
    ],
    correct: 1
  },
  {
    question: 'Giai đoạn thi công xây dựng nên đo lún vào các giai đoạn công trình:',
    options: [
      'a. 25%, 50%, 75% tải trọng bản thân công trình.',
      'b. 50%, 75%, 100% tải trọng bản thân công trình.',
      'c. 25%, 50%, 75%, 100% tải trọng bản thân công trình.',
      'd. 20%, 40%, 60%, 80% tải trọng bản thân công trình.',
    ],
    correct: 2
  },
  {
    question: 'Đo độ lún công trình bằng phương pháp đo cao hình học cấp II thì máy thủy chuẩn phải có độ chính xác như thế nào:',
    options: [
      'a. Độ phóng đại của ống kính 40x; giá trị khoảng chia bọt nước dài 12“/2mm; giá trị vạch khắc vành đọc số và bộ đo cực nhỏ 0,005 mm và 0,1 mm.',
      'b. Độ phóng đại của ống kính 35x đến 40x; giá trị khoảng chia bọt nước dài không vượt quá 12“/2mm; giá trị vạch khắc vành đọc số và bộ đo cực nhỏ 0,005 mm và 0,1 mm.',
      'c. Độ phóng đại của ống kính 24x; giá trị khoảng chia bọt nước dài 15“/2mm; lưới chỉ chữ thập của máy có ba chỉ ngang',
      'd. Độ phóng đại của ống kính 24x; giá trị khoảng chia bọt nước dài 30“/2mm, bọt nước tiếp xúc; lưới chỉ chữ thập của máy có ba chỉ ngang',
    ],
    correct: 1
  },
  {
    question: 'Đo độ lún công trình bằng phương pháp đo cao hình học cấp II chiều dài tia ngắm không vượt quá:',
    options: [
      'a. 25m.',
      'b. 30m.',
      'c. 40m.',
      'd. 50m.',
    ],
    correct: 1
  },
  {
    question: 'Đo độ lún công trình bằng phương pháp đo cao hình học ở cấp nào thì chiều cao của tia ngắm phải cách mặt đất tối thiểu 0.3m:',
    options: [
      'a. I',
      'b. II',
      'c. III',
      'd. IV',
    ],
    correct: 2
  },
  {
    question: 'Các lưới thủy chuẩn đo độ lún công trình có thể được bình sai theo phương pháp nào:',
    options: [
      'a. Bình sai điều kiện',
      'b. Bình sai gián tiếp',
      'c. Bình sai theo phương pháp Popov',
      'd. Một trong các phương pháp trên',
    ],
    correct: 3
  },
  {
    question: 'Tiêu chuẩn để đánh giá độ chính xác của đại lượng đo trong xây dựng là sai số trung phương. Sai số giới hạn được lấy bằng:',
    options: [
      'a. 1 lần sai số trung phương',
      'b. 2 lần sai số trung phương',
      'c. 2,5 lần sai số trung phương',
      'd. 3 lần sai số trung phương',
    ],
    correct: 1
  },
  {
    question: 'Nếu sử dụng hệ tọa độ quốc gia thì phải sử dụng hệ tọa độ:',
    options: [
      'a. Vn2000',
      'b. Hà Nội 72',
      'c. WGS84',
      'd. UTM',
    ],
    correct: 0
  },
  {
    question: 'Nếu sử dụng hệ tọa độ quốc gia thì kinh tuyến trục được chọn sao cho biến dạng chiều dài cạnh không vượt quá:',
    options: [
      'a. 1/25 000',
      'b. 1/50 000',
      'c. 1/70 000',
      'd. 1/100 000',
    ],
    correct: 1
  },
  {
    question: 'Khoảng cao đều của bản đồ địa hình được xác định dựa vào các yếu tố sau:',
    options: [
      'a. Yêu cầu thiết kế và đặc điểm công trình.',
      'b. Độ chính xác cần thiết về độ cao và độ dốc của công trình.',
      'c. Mức độ phức tạp và độ dốc của địa hình.',
      'd. Tất cả các phương án nêu',
    ],
    correct: 3
  },
  {
    question: 'Lưới khống chế đo vẽ bản đồ tỷ lệ lớn bao gồm các loại lưới nào:',
    options: [
      'a. Lưới trắc địa nhà nước các cấp hạng và lưới khống chế thi công',
      'b. Lưới trắc địa nhà nước các cấp hạng và lưới khống chế đo vẽ',
      'c. Lưới khống chế thi công và lưới khống chế đo vẽ',
      'd. Lưới trắc địa nhà nước các cấp hạng, lưới khống chế đo vẽ và lưới khống chế thi công',
    ],
    correct: 1
  },
  {
    question: 'Sai số vị trí điểm khống chế đo vẽ so với điểm khống chế cơ sở gần nhất không vượt quá:',
    options: [
      'a. 0.1 mm trên bản đồ đối với vùng quang đãng',
      'b. 0.15 mm trên bản đồ đối với vùng quang đãng',
      'c. 0.20 mm trên bản đồ đối với vùng quang đãng',
      'd. 0.25 mm trên bản đồ đối với vùng quang đãng',
    ],
    correct: 0
  },
];
