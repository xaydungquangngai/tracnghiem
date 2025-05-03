const questions = [
  {
    question: 'Vì sao chi phí dự phòng trong dự án đầu tư xây dựng lớn và phức tạp cần cao hơn các dự án khác?',
    options: [
      'a. Do nhiều cơ quan có liên quan nên có nhiều yêu cầu mới đặt ra khiến phải thay đổi thiết kế trong quá trình thực hiện để đáp ứng, từ đó chi phí phát sinh tăng lên',
      'b. Do thời gian thực hiện dự án đầu tư xây dựng lớn và phức tạp nên rủi ro nhiều hơn',
      'c. Do sử dụng nhiều chủng loại vật liệu và máy móc thiết bị hơn',
      'd. Tất cả các ý trên đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Lựa chọn chu trình quản lý rủi ro phù hợp:',
    options: [
      'a. Lập kế hoạch đối phó rủi ro - Xác định rủi ro - Phân tích rủi ro - Lập kế quản lý rủi ro - Kiểm soát và điều chỉnh rủi ro.',
      'b. Lập kế hoạch đối phó rủi ro - Xác định rủi ro - Phân tích rủi ro - Kiểm soát và điều chỉnh rủi ro.',
      'c. Lập kế hoạch quản lý rủi ro -Phân tích rủi ro - Xác định rủi ro - Kiểm soát và điều chỉnh rủi ro.',
      'd. Lập kế hoạch quản lý rủi ro - Xác định rủi ro - Phân tích rủi ro - Lập kế hoạch đối phó với rủi ro - Kiểm soát và điều chỉnh rủi ro.',
    ],
    correct: 3
  },
  {
    question: 'Phân tích nào sau đây là phân tích độ nhạy.',
    options: [
      'a. Đánh giá sự thay đổi của NPV khi giá nguyên vật liệu đầu vào của dự án có một số thay đổi (tăng, giảm).',
      'b. Đánh giá sự thay đổi của IRR khi giá bán sản phẩm của dự án có một số thay đổi (tăng, giảm).',
      'c. Đánh giá sự thay đổi của NPV khi giá nguyên vật liệu đầu vào và giá bán sản phẩm dự án cùng thay đổi (tăng, giảm).',
      'd. Tất cả các phương án trên',
    ],
    correct: 3
  },
  {
    question: 'Với 1 dự án sản xuất gạch lát nền, để trả lời câu hỏi “NPV của dự án thay đổi thế nào nếu giá nguyên vật liệu đầu vào tăng 10%, giá bán giảm 10% và chi phí quản lý doanh nghiệp giảm 2%” là dạng phân tích nào:',
    options: [
      'a. Phân tích độ nhạy 2 chiều.',
      'b. Phân tích tình huống',
      'c. Phân tích mô phỏng.',
      'd. Phân tích định tính.',
    ],
    correct: 1
  },
  {
    question: 'Mua bảo hiểm trong hoạt động xây dựng là một hình thức kiểm soát phòng ngừa rủi ro theo cách thức:',
    options: [
      'a. Né tránh rủi ro',
      'b. Chấp nhận rủi ro',
      'c. Chuyển dịch rủi ro.',
      'd. Chuyển dịch rủi ro theo hợp đồng.',
    ],
    correct: 3
  },
  {
    question: 'Chỉ số giá xây dựng sử dụng tính dự phòng cho yếu tố trượt giá (IXDCTbq) để xác định chi phí dự phòng trong tổng mức đầu tư xây dựng được xác định bằng cách tính bình quân:',
    options: [
      'a. Các chỉ số giá xây dựng của tối thiểu 3 năm gần nhất so với thời điểm tính toán',
      'b. Các chỉ số giá xây dựng liên hoàn của tối thiểu 3 năm gần nhất so với thời điểm tính toán (không tính đến những thời điểm có biến động bất thường về giá nguyên liệu, nhiên liệu và vật liệu xây dựng)',
      'c. Các chỉ số giá xây dựng liên hoàn của tối thiểu 3 năm gần nhất so với thời điểm gốc (không tính đến những thời điểm có biến động bất thường về giá nguyên liệu, nhiên liệu và vật liệu xây dựng)',
      'd. Các chỉ số giá xây dựng của tối thiểu 3 năm gần nhất so với thời điểm gốc',
    ],
    correct: 1
  },
  {
    question: 'Trong suất vốn đầu tư do Bộ Xây dựng công bố:',
    options: [
      'a. Chưa bao gồm thuế giá trị gia tăng.',
      'b. Đã bao gồm thuế giá trị gia tăng',
      'c. Chưa bao gồm thuế giá trị gia tăng và chi phí dự phòng.',
      'd. Chưa bao gồm thuế giá trị gia tăng nhưng đã có chi phí dự phòng.',
    ],
    correct: 1
  },
  {
    question: 'Vốn vay ngắn hạn ngân hàng của dự án để:',
    options: [
      'a. Bổ sung vốn lưu động cho dự án',
      'b. Bổ sung vốn cố định cho dự án',
      'c. Mua cổ phiếu của dự án',
      'd. Mua máy móc thiết bị nâng cấp công nghệ cho dự án',
    ],
    correct: 0
  },
  {
    question: 'Khi xác định hiệu quả dự án, chi phí khấu hao tài sản cố định trong dự án đầu tư xây dựng là khoản chi phí mà doanh nghiệp:',
    options: [
      'a. Phải chi trả bằng tiền mặt',
      'b. Không phải chi bằng tiền mặt',
      'c. Có khi phải chi bằng tiền mặt có khi không.',
      'd. Dùng để thanh lý tài sản cố định.',
    ],
    correct: 1
  },
  {
    question: 'Khi xác định hiệu quả dự án, chi phí cơ hội trong dự án được:',
    options: [
      'a. Cộng vào dòng ngân lưu vào (dòng thu)',
      'b. Cộng vào dòng ngân lưu ra (dòng chi)',
      'c. Trừ khỏi dòng ngân lưu ra',
      'd. Tính bằng không khi đánh giá hiệu quả dự án',
    ],
    correct: 1
  },
  {
    question: 'Thời hạn kiểm soát thanh toán vốn của Kho bạc nhà nước theo quy định là?',
    options: [
      'a. Trong thời hạn 3 ngày làm việc kể từ khi nhận đủ hồ sơ thanh toán theo quy định đối với các lần thanh toán đầu tiên.',
      'b. Trong thời hạn 3 ngày làm việc kể từ khi nhận đủ hồ sơ thanh toán theo quy định đối với các lần thanh toán đầu tiên và 7 ngày làm việc đối với lần thanh toán cuối cùng.',
      'c. Trong thời hạn 7 ngày làm việc kể từ khi nhận đủ hồ sơ thanh toán theo quy định.',
      'd. Trong thời hạn 14 ngày kể từ khi nhận đủ hồ sơ thanh toán theo quy định.',
    ],
    correct: 2
  },
  {
    question: 'Chi phí mua bảo hiểm trách nhiệm nghề nghiệp tư vấn thiết kế xây dựng của công trình từ cấp II trở lên thuộc khoản mục chi phí nào trong tổng mức đầu tư xây dựng:',
    options: [
      'a. Chi phí tư vấn',
      'b. Chi phí quản lý dự án',
      'c. Chi phí khác.',
      'd. Chi phí dự phòng.',
    ],
    correct: 0
  },
  {
    question: 'Khi sử dụng định mức dự toán hiện hành (ban hành theo Thông tư của Bộ Xây dựng hoặc cấp có thẩm quyền) để tính dự toán thì cần đào bao nhiêu m3 đất nguyên thổ để đắp được 1 m3 đất đắp với hệ số đầm nén K98.',
    options: [
      'a. 1 m3',
      'b. 1.13 m3',
      'c. 1.07 m3',
      'd. 1.16 m3',
    ],
    correct: 3
  },
  {
    question: 'Chi phí quản lý dự án không bao gồm nội dung nào sau đây?',
    options: [
      'a. Tiền lương của cán bộ quản lý dự án; tiền công trả cho người lao động theo hợp đồng',
      'b. Các khoản phụ cấp lương; tiền thưởng; phúc lợi tập thể; các khoản đóng góp (bảo hiểm xã hội; bảo hiểm y tế; bảo hiểm thất nghiệp; kinh phí công đoàn, trích nộp khác theo quy định của pháp luật đối với cá nhân được hưởng lương từ dự án)',
      'c. Chi phí ứng dụng khoa học công nghệ vào công tác khảo sát thiết kế và lập báo cáo nghiên cứu khả thi',
      'd. Chi phí thanh toán các dịch vụ công cộng; vật tư văn phòng phẩm; thông tin, tuyên truyền, liên lạc; tổ chức hội nghị có liên quan đến dự án',
    ],
    correct: 2
  },
  {
    question: 'Khi điều chỉnh giá trị dự toán gói thầu thuộc dự án đã phê duyệt dẫn tới phải điều chỉnh tổng mức đầu tư xây dựng (sử dụng hết chi phí dự phòng) nhưng không làm thay đổi mức đầu tư đã phê duyệt thì cách thức xử lý là:',
    options: [
      'a. Người quyết định đầu tư tổ chức điều chỉnh',
      'b. Chủ đầu tư tự tổ chức điều chỉnh cơ cấu các khoản mục chi phí, báo cáo người quyết định đầu tư và chịu trách nhiệm về việc điều chỉnh của mình.',
      'c. Theo quy định không được phép điều chỉnh.',
      'd. Chủ đầu tư tự tổ chức điều chỉnh và chịu trách nhiệm về việc điều chỉnh của mình.',
    ],
    correct: 1
  },
  {
    question: 'Lựa chọn phương án đúng về việc sử dụng suất vốn đầu tư:',
    options: [
      'a. Có thể dùng để xác định tổng mức đầu tư dự án ở giai đoạn chuẩn bị dự án',
      'b. Có thể được sử dụng trong việc xác định giá trị quyền sử dụng đất',
      'c. Có thể được sử dụng để xác định giá trị thực tế của tài sản là sản phẩm xây dựng cơ bản khi xác định giá trị doanh nghiệp để cổ phần hóa theo hướng dẫn của cơ quan quản lý có thẩm quyền.',
      'd. Tất cả các phương án trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Chi phí quản lý dự án không được sử dụng để tổ chức quản lý việc thực hiện và thực hiện các công việc nào sau đây?',
    options: [
      'a. Thực hiện giám sát, đánh giá đầu tư',
      'b. Thực hiện thẩm định thiết kế xây dựng triển khai sau thiết kế cơ sở và thẩm định dự toán xây dựng',
      'c. Lập nhiệm vụ, lập phương án kỹ thuật khảo sát xây dựng, lập nhiệm vụ thiết kế',
      'd. Xác định dự toán gói thầu xây dựng (trong trường hợp đã có dự toán xây dựng công trình được phê duyệt) và thực hiện các công việc cần thiết khác thuộc trách nhiệm của chủ đầu tư',
    ],
    correct: 2
  },
  {
    question: 'Chi phí cơ hội của dự án là một khoản chi mà:',
    options: [
      'a. Phải chi bằng tiền mặt',
      'b. Không phải chi bằng tiền mặt',
      'c. Có khi phải chi có khi không phải chi',
      'd. Được tính là một khoản thu.',
    ],
    correct: 1
  },
  {
    question: 'Trường hợp tổng thầu thực hiện hình thức hợp đồng EPC thực hiện một số công việc quản lý dự án thuộc trách nhiệm của chủ đầu tư thì tổng thầu được hưởng chi phí quản lý dự án thế nào sau đây?',
    options: [
      'a. Được hưởng một phần chi phí quản lý dự án phù hợp với phạm vi, khối lượng công việc quản lý dự án do chủ đầu tư giao và được thỏa thuận trong hợp đồng tổng thầu.',
      'b. Được hưởng toàn bộ chi phí quản lý dự án như trường hợp thuê tư vấn quản lý dự án',
      'c. Quản lý dự án là trách nhiệm của tổng thầu, không có chi phí cho khoản mục này',
      'd. Các đáp án trên đều sai',
    ],
    correct: 0
  },
  {
    question: 'Chi phí mua bảo hiểm trách nhiệm nghề nghiệp tư vấn thiết kế xây dựng của công trình từ cấp II trở lên thuộc khoản mục chi phí nào của dự toán gói thầu tư vấn đầu tư xây dựng:',
    options: [
      'a. Chi phí chuyên gia.',
      'b. Chi phí thiết bị.',
      'c. Chi phí khác;',
      'd. Chi phí dự phòng.',
    ],
    correct: 2
  },
  {
    question: 'Giá xây dựng tổng hợp bộ phận kết cấu công trình do Bộ Xây dựng công bố:',
    options: [
      'a. Bao gồm toàn bộ chi phí cần thiết để hoàn thành một đơn vị khối lượng nhóm, loại công tác xây dựng, đơn vị kết cấu hoặc bộ phận công trình xây dựng.',
      'b. Là một trong những cơ sở để lập tổng mức đầu tư dự án.',
      'c. Chưa bao gồm thuế giá trị gia tăng',
      'd. Phương án a và',
    ],
    correct: 3
  },
  {
    question: 'Chi phí công việc tư vấn đầu tư xây dựng không bao gồm nội dung nào sau đây?',
    options: [
      'a. Chi phí nhân công tư vấn (tiền lương, các khoản phụ cấp lương, tiền thưởng, phúc lợi tập thể, các khoản đóng góp bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp, kinh phí công đoàn, trích nộp khác theo quy định của pháp luật đối với các cá nhân thực hiện công việc tư vấn tại dự án)',
      'b. Chi phí ứng dụng khoa học công nghệ, quản lý hệ thống thông tin công trình; chi phí thanh toán các dịch vụ công cộng, vật tư văn phòng phẩm, thông tin, liên lạc',
      'c. Chi phí thực hiện các công việc: giám sát, đánh giá đầu tư; thẩm định thiết kế xây dựng triển khai sau thiết kế cơ sở và thẩm định dự toán xây dựng',
      'd. Chi phí thuê mướn, sửa chữa, mua sắm tài sản phục vụ tư vấn cho dự án (nếu có); chi phí quản lý của tổ chức tư vấn; chi phí khác; thu nhập chịu thuế tính trước',
    ],
    correct: 2
  },
  {
    question: 'Khi sử dụng định mức dự toán (ban hành theo Thông tư của Bộ Xây dựng hoặc cấp có thẩm quyền) để tính dự toán công tác đóng cọc bằng máy, đối với đoạn cọc không ngập đất hao phí nhân công và máy thi công được tính như thế nào.',
    options: [
      'a. Bằng 50% định mức của đoạn cọc ngập đất.',
      'b. Bằng 75% định mức của đoạn cọc ngập đất.',
      'c. Bằng 25% định mức của đoạn cọc ngập đất.',
      'd. Bằng 85% định mức của đoạn cọc ngập đất',
    ],
    correct: 1
  },
  {
    question: 'Quy định nào sau đây về thu hồi tiền tạm ứng là đúng?',
    options: [
      'a. Phải đảm bảo thu hồi hết khi giá trị thanh toán khối lượng hoàn thành đạt 80% giá trị hợp đồng.',
      'b. Phải đảm bảo thu hồi hết khi giá trị thanh toán khối lượng hoàn thành đạt 90% giá trị hợp đồng.',
      'c. Bắt buộc thu hồi tạm ứng từ lần thanh toán đầu tiên theo tỷ lệ phần trăm tiền tạm ứng và đảm bảo thu hồi hết khi giá trị thanh toán khối lượng hoàn thành đạt 80% giá trị hợp đồng.',
      'd. Bắt buộc thu hồi tạm ứng từ lần thanh toán đầu tiên theo tỷ lệ phần trăm tiền tạm ứng và đảm bảo thu hồi hết khi giá trị thanh toán khối lượng hoàn thành đạt 80% giá trị hợp đồng.',
    ],
    correct: 0
  },
  {
    question: 'Chi phí thuê tư vấn nước ngoài được xác định theo đáp án nào sau đây là đúng?',
    options: [
      'a. Phù hợp với loại công việc tư vấn trên cơ sở số lượng chuyên gia, trình độ chuyên gia tư vấn, thời gian làm việc của chuyên gia, mức tiền lương của chuyên gia của quốc gia và khu vực dự kiến thuê và các chi phí cần thiết khác để hoàn thành công việc tư vấn',
      'b. Phù hợp với bằng cấp chuyên môn của chuyên gia tư vấn và thời gian làm việc của chuyên gia',
      'c. Được tính trên cơ sở định mức chi phí tư vấn theo quy định chung',
      'd. Được tính chung đối với chi phí chuyên gia mang tính đặc thù',
    ],
    correct: 0
  },
  {
    question: 'Theo quy định hiện hành, sơ bộ tổng mức đầu tư xây dựng là một nội dung của:',
    options: [
      'a. Báo cáo nghiên cứu khả thi đầu tư xây dựng',
      'b. Báo cáo nghiên cứu tiền khả thi đầu tư xây dựng',
      'c. Báo cáo kinh tế - kỹ thuật đầu tư xây dựng',
      'd. Báo cáo lập dự án đầu tư xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Quyết định phê duyệt dự án đầu tư xây dựng của người quyết định đầu tư không bao gồm nội dung nào sau đây ?',
    options: [
      'a. Loại, nhóm dự án; loại, cấp công trình chính; thời hạn sử dụng theo thiết kế của công trình chính;',
      'b. Biện pháp thi công chủ yếu, biện pháp đảm bảo an toàn và môi trường xây dựng;',
      'c. Số bước thiết kế, danh mục tiêu chuẩn chủ yếu được lựa chọn;',
      'd. Tổng mức đầu tư; giá trị các khoản mục chi phí trong tổng mức đầu tư;',
    ],
    correct: 1
  },
  {
    question: 'Dự án đầu tư xây dựng phải thực hiện quyết toán vốn đầu tư xây dựng trong trường hợp nào sau đây?',
    options: [
      'a. Sau khi công trình của dự án được hoàn thành bàn giao đưa vào sử dụng',
      'b. Dự án bị dừng thực hiện vĩnh viễn khi cấp có thẩm quyền có văn bản dừng hoặc cho phép chấm dứt thực hiện dự án.',
      'c. Trong trường hợp a hoặc b',
      'd. Khi người quyết định đầu tư yêu cầu',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định hiện hành, phát biểu nào dưới đây về Suất vốn đầu tư do Bộ Xây dựng công bố là đúng:',
    options: [
      'a. Suất vốn đầu tư bao gồm các chi phí: xây dựng, thiết bị, quản lý dự án đầu tư xây dựng, tư vấn đầu tư xây dựng, các khoản chi phí khác và chi phí dự phòng. Suất vốn đầu tư tính toán đã bao gồm thuế giá trị gia tăng cho các chi phí nêu trên.',
      'b. Suất vốn đầu tư bao gồm các chi phí: xây dựng, thiết bị, quản lý dự án đầu tư xây dựng, tư vấn đầu tư xây dựng và các khoản chi phí khác. Suất vốn đầu tư tính toán chưa bao gồm thuế giá trị gia tăng cho các chi phí nêu trên.',
      'c. Suất vốn đầu tư chưa bao gồm chi phí thực hiện một số loại công việc theo yêu cầu riêng của dự án/công trình xây dựng cụ thể như chi phí bồi thường, hỗ trợ và tái định cư, Lãi vay trong thời gian thực hiện đầu tư xây dựng, vốn lưu động ban đầu, Chi phí dự phòng trong tổng mức đầu tư,...',
      'd. Không phát biểu nào đúng.',
    ],
    correct: 2
  },
  {
    question: 'Trong các chỉ tiêu sau, chỉ tiêu nào là suất vốn đầu tư?',
    options: [
      'a. 300 triệu đồng/Dầm bê tông cốt thép dự ứng lực mác 40Mpa, dầm I, dài 18m.',
      'b. 290 nghìn đồng/m2 mặt đường cấp phối đá dăm láng nhựa tiêu chuẩn 3.0kg/m2, mô đun đàn hồi Eyc ≥ 80MpA.',
      'c. 6.570.000 đồng/m2 sàn nhà chung cư ≤ 7 tầng.',
      'd. Tất cả các chỉ tiêu trên',
    ],
    correct: 2
  },
  {
    question: 'Trong các chỉ tiêu sau, chỉ tiêu nào là giá xây dựng tổng hợp bộ phận kết cấu công trình?',
    options: [
      'a. 300 triệu đồng/ Dầm bê tông cốt thép dự ứng lực mác 40Mpa, dầm I, dài 18m.',
      'b. 54 triệu đồng/cháu mẫu giáo khi quy mô đầu tư xây dựng nhà trẻ 75 < số cháu ≤ 125.',
      'c. Cả hai phương án a và',
      'b. d. Không có chỉ tiêu nào là giá xây dựng tổng hợp bộ phận kết cấu công trình.',
    ],
    correct: 0
  },
  {
    question: 'Dòng tiền của dự án theo quan điểm của ngân hàng được xác định bằng:',
    options: [
      'a. Tổng khấu hao và lợi nhuận',
      'b. Lợi nhuận sau thuế',
      'c. Tổng dòng thu bằng tiền trừ đi tổng dòng chi bằng tiền, bao gồm chi trả lãi vay',
      'd. Tổng dòng thu bằng tiền trừ đi tổng dòng chi bằng tiền không bao gồm tiền vay và trả nợ vay',
    ],
    correct: 3
  },
  {
    question: 'Khi sử dụng phương pháp đánh giá dự án bằng giá trị hiện tại thuần (Net Present Value), quyết định chấp nhận dự án nếu:',
    options: [
      'a. NPV bằng đầu tư ban đầu',
      'b. NPV có thể <0 nhưng IRR (Internal Rate of Return) tối thiểu bằng lãi suất tiền gửi ngân hàng',
      'c. NPV>0',
      'd. NPV có thể lớn hơn hoặc nhỏ hơn 0 nhưng IRR của dự án lớn hơn lãi suất cho vay.',
    ],
    correct: 2
  },
  {
    question: 'Phân tích hiệu quả tài chính dự án luôn luôn được sử dụng bằng đơn vị:',
    options: [
      'a. Quy ước',
      'b. Hiện vật và tiền tệ',
      'c. Tiền tệ.',
      'd. Đơn vị nào là do chủ đầu tư lựa chọn.',
    ],
    correct: 2
  },
  {
    question: 'Hệ thống chỉ số giá xây dựng được công bố theo quy định hiện hành bao gồm:',
    options: [
      'a. Chỉ số giá xây dựng quốc gia, chỉ số giá xây dựng theo loại công trình',
      'b. Chỉ số giá xây dựng quốc gia, chỉ số giá xây dựng theo loại công trình, theo cơ cấu chi phí, theo yếu tố chi phí',
      'c. Chỉ số giá xây dựng quốc gia, chỉ số giá xây dựng theo loại công trình, theo cơ cấu chi phí.',
      'd. Chỉ số giá xây dựng quốc gia, chỉ số giá xây dựng theo loại công trình, theo cơ cấu chi phí, theo yếu tố chi phí, chỉ số giá xây dựng cấp cơ sở.',
    ],
    correct: 1
  },
  {
    question: 'Việc thanh toán hợp đồng xây dựng được thực hiện như thế nào là đúng sau đây?',
    options: [
      'a. Phải phù hợp với loại hợp đồng, giá hợp đồng và các điều kiện trong hợp đồng mà các bên đã ký kết.',
      'b. Khi thanh toán theo các thỏa thuận trong hợp đồng các bên không phải ký phụ lục hợp đồng, trừ trường hợp bổ sung công việc chưa có trong hợp đồng.',
      'c. Đáp án a và b đúng',
      'd. Không đáp án nào là đúng',
    ],
    correct: 2
  },
  {
    question: 'Khi sử dụng định mức dự toán hiện hành (do Bộ Xây dựng ban hành) để tính dự toán công tác đổ bê tông tường của công trình cao 52m thì theo phương án nào sau đây là đúng?',
    options: [
      'a. Áp dụng mã hiệu định mức công tác đổ bê tông cho công trình có chiều cao > 50m cho toàn bộ khối bê tông.',
      'b. Phân tách khối lượng đổ bê tông theo chiều cao công trình đến 4m, từ 4m-16m, từ 16m - 50 m và > 50m.',
      'c. Tính bình quân định mức cho khối lượng đổ bê tông theo chiều cao công trình đến 4m, từ 4m - 16m, từ 16m - 50 m và > 50m.',
      'd. Quy định cụ thể cách áp dụng sẽ do địa phương có văn bản hướng dẫn.',
    ],
    correct: 0
  },
  {
    question: 'Dự án đầu tư xây dựng công trình gồm có 1 tòa nhà chung cư cao 20 tầng và 1 chung cư cao 15 tầng, ngoài ra còn đường nội bộ, cổng hàng rào và nhà bảo vệ. Hỏi chi phí tư vấn thiết kế xây dựng trong tổng mức đầu tư xây dựng của dự án tính thế nào là đúng?',
    options: [
      'a. Tính dự toán chi phí xây dựng các công trình trong tổng mức đầu tư và tra định mức chi phí thiết kế công trình dân dụng. Chi phí tư vấn thiết kế tính ra như trên chưa có thuế giá trị gia tăng.',
      'b. Tính dự toán chi phí xây dựng các công trình trong tổng mức đầu tư và tra định mức chi phí thiết kế công trình dân dụng. Chi phí tư vấn thiết kế tính ra như trên đã có thuế giá trị gia tăng.',
      'c. Tra định mức chi phí tỷ lệ cho từng loại công trình theo giá trị chi phí xây dựng trước thuế. Cộng các chi phí tư vấn thiết kế của tất cả các công trình tính được chi phí tư vấn thiết kế của dự án. Chi phí tư vấn thiết kế tính ra như trên chưa có thuế giá trị gia tăng.',
      'd. Tra định mức chi phí tỷ lệ cho từng công trình theo giá trị chi phí xây dựng trước thuế của từng hạng mục. Cộng các chi phí tư vấn thiết kế của tất cả các hạng mục tính được chi phí tư vấn thiết kế của dự án. Chi phí tư vấn thiết kế tính ra như trên đã có thuế giá trị gia tăng.',
    ],
    correct: 2
  },
  {
    question: 'Định mức dự toán xây dựng công trình được xác định trên cơ sở:',
    options: [
      'a. Định mức chi phí',
      'b. Định mức cơ sở',
      'c. Định mức kinh tế - kỹ thuật',
      'd. Tất cả các phương án trên',
    ],
    correct: 1
  },
  {
    question: 'Định mức kinh tế - kỹ thuật gồm:',
    options: [
      'a. Định mức cơ sở, định mức dự toán xây dựng công trình và định mức chi phí',
      'b. Định mức sử dụng vật liệu, định mức lao động, định mức năng suất máy và thiết bị thi công',
      'c. Định mức cơ sở và định mức dự toán xây dựng công trình.',
      'd. Định mức dự toán xây dựng công trình và định mức chi phí',
    ],
    correct: 2
  },
  {
    question: 'Khi xác định định mức dự toán xây dựng công trình mới, việc tính toán hao phí nhân công được xác định theo phương pháp nào sau đây?',
    options: [
      'a. Theo dây chuyền công nghệ tổ chức thi công',
      'b. Theo số liệu thống kê của công trình đã và đang thực hiện có điều kiện, biện pháp thi công tương tự',
      'c. Theo số liệu khảo sát thực tế',
      'd. Tất cả các đáp án trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Khi xác định định mức dự toán xây dựng công trình mới, việc tính toán hao phí máy thi công phải sử dụng hệ số chuyển đổi sang định mức dự toán xây dựng Kcđ. Hệ số này phụ thuộc vào nhóm công tác, công việc (đơn giản hay phức tạp theo dây chuyền công nghệ tổ chức thi công), yêu cầu kỹ thuật, điều kiện thi công, chu kỳ làm việc liên tục hoặc gián đoạn, khối lượng thực hiện công việc liên tục của công tác.). Kcđ được xác định theo kinh nghiệm chuyên gia quy định trong khoảng nào sau đây?',
    options: [
      'a. Kcđ =1,05÷1,3',
      'b. Kcđ =1,15÷1,35',
      'c. Kcđ =1,25÷1,45',
      'd. Kcđ =1,25÷1,35',
    ],
    correct: 0
  },
  {
    question: 'Giá xây dựng tổng hợp là cơ sở để xác định?',
    options: [
      'a. Tổng mức đầu tư xây dựng, dự toán xây dựng công trình và dự toán gói thầu xây dựng.',
      'b. Dự toán xây dựng công trình và dự toán gói thầu xây dựng',
      'c. Tổng mức đầu tư xây dựng và dự toán xây dựng công trình',
      'd. Tổng mức đầu tư và dự toán gói thầu.',
    ],
    correct: 2
  },
  {
    question: 'Suất vốn đầu tư xây dựng không bao gồm những nội dung nào sau đây?',
    options: [
      'a. Chi phí xây dựng; chi phí thiết bị',
      'b. Chi phí tư vấn đầu tư xây dựng; một số khoản mục chi phí khác và thuế giá trị gia tăng cho các chi phí nêu trên',
      'c. Chi phí dự phòng và chi phí thực hiện một số loại công việc theo yêu cầu riêng của dự án, công trình',
      'd. Chi phí quản lý dự án',
    ],
    correct: 2
  },
  {
    question: 'Phí thẩm định thiết kế cơ sở của dự án đầu tư xây dựng công trình thực hiện theo quy định của cơ quan nào?',
    options: [
      'a. UBND cấp tỉnh;',
      'b. Bộ Tài chính;',
      'c. Bộ Xây dựng',
      'd. Liên Bộ Tài chính - Xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Phí thẩm định dự án đầu tư xây dựng công trình thuộc khoản mục chi phí nào trong Tổng mức đầu tư dự án theo phương án trả lời dưới đây là đúng?',
    options: [
      'a. Chi phí quản lý dự án;',
      'b. Chi phí tư vấn đầu tư xây dựng công trình;',
      'c. Chi phí khác',
      'd. Chi phí xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Với công trình sử dụng vốn đầu tư công, trường hợp nào được điều chỉnh dự toán xây dựng đã được phê duyệt:',
    options: [
      'a. Nhà thầu chào giá cao hơn.',
      'b. Khi phát sinh khối lượng của hợp đồng thực hiện theo hình thức trọn gói.',
      'c. Xảy ra trường hợp bất khả kháng như thiên tai, hỏa hoạn, động đất,...',
      'd. Tất cả các phương án trên',
    ],
    correct: 2
  },
  {
    question: 'Nội dung chi phí đầu tư nào sau đây không được quyết toán?',
    options: [
      'a. Các chi phí thiệt hại xảy ra trong quá trình đầu tư xây dựng thuộc trách nhiệm của bảo hiểm.',
      'b. Các chi phí của các khối lượng phá đi làm lại do lỗi của nhà thầu.',
      'c. Chi phí thiệt hại do nguyên nhân bất khả kháng theo quy định của pháp luật.',
      'd. Phương án a &',
    ],
    correct: 3
  },
  {
    question: 'Nội dung thẩm định dự toán xây dựng công trình gồm:',
    options: [
      'a. Kiểm tra sự phù hợp khối lượng công tác xây dựng, chủng loại và số lượng thiết bị trong dự toán so với khối lượng, chủng loại và số lượng thiết bị tính toán từ thiết kế xây dựng, công nghệ.',
      'b. Kiểm tra tính đúng đắn, hợp lý của việc áp dụng, vận dụng định mức dự toán, giá xây dựng của công trình và quy định khác có liên quan trong việc xác định các khoản mục chi phí của dự toán xây dựng công trình.',
      'c. Xác định giá trị dự toán xây dựng công trình sau thẩm định và kiến nghị giá trị dự toán xây dựng để cấp có thẩm quyền xem xét, phê duyệt. Đánh giá mức độ tăng, giảm của các khoản mục chi phí, phân tích nguyên nhân tăng, giảm so với giá trị dự toán xây dựng công trình đề nghị thẩm định.',
      'd. Tất cả các mục trên.',
    ],
    correct: 3
  },
  {
    question: 'Chi phí xây dựng công trình phụ trợ phục vụ thi công thuộc chi phí nào trong tổng mức đầu tư của dự án đầu tư xây dựng công trình:',
    options: [
      'a. Chi phí xây dựng.',
      'b. Chi phí khác.',
      'c. Chi phí quản lý dự án',
      'd. Tất cả các phương án trên đều đúng.',
    ],
    correct: 0
  },
  {
    question: 'Trường hợp nhà thầu thi công xây dựng công trình phải tự tổ chức khai thác và sản xuất các loại vật liệu đất, đá, cát sỏi để phục vụ thi công xây dựng công trình thì chi phí chung tính trong dự toán xác định giá vật liệu bằng:',
    options: [
      'a. 2,5% trên chi phí nhân công và chi phí máy thi công',
      'b. 2,5% trên chi phí vật liệu, nhân công và chi phí máy thi công',
      'c. 3,5% trên chi phí nhân công và chi phí máy thi công',
      'd. 3,5% trên chi phí vật liệu, nhân công và chi phí máy thi công',
    ],
    correct: 0
  },
  {
    question: 'Giá ca máy chờ đợi được xác định gồm các chi phí:',
    options: [
      'a. 50% chi phí khấu hao, 50% chi phí nhân công điều khiển và chi phí khác của máy.',
      'b. 50% chi phí khấu hao, 50% chi phí nhân công và 50% chi phí khác.',
      'c. Chi phí khấu hao và chi phí nhân công.',
      'd. 50% chi phí khấu hao',
    ],
    correct: 0
  },
  {
    question: 'Giá ca máy được điều chỉnh theo những phương pháp nào dưới đây?',
    options: [
      'a. Bù trừ trực tiếp.',
      'b. Hệ số điều chỉnh.',
      'c. Chỉ số giá xây dựng.',
      'd. Tất cả các phương án trên.',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định hiện hành, đối với máy có giá trị từ 30 triệu đồng trở lên, giá trị thu hồi được tính bằng bao nhiêu % của nguyên giá máy và thiết bị thi công xây dựng?',
    options: [
      'a. 5%.',
      'b. 10%.',
      'c. 15%.',
      'd. 20%.',
    ],
    correct: 1
  },
  {
    question: 'Theo quy định hiện hành, có bao nhiêu khoản mục chi phí trong tổng mức đầu tư xây dựng?',
    options: [
      'b. 6 khoản mục',
      'c. 7 khoản mục',
      'd. 8 khoản mục',
    ],
    correct: 2
  },
  {
    question: 'Chi phí chung của chi phí xây dựng gồm những chi phí nào sau đây:',
    options: [
      'a. Chi phí quản lý doanh nghiệp;',
      'b. Chi phí điều hành sản xuất tại công trường, chi phí phục vụ công nhân;',
      'c. Chi phí phục vụ thi công tại công trường và một số chi phí phục vụ cho quản lý khác của doanh nghiệp;',
      'd. Tất cả các mục trên',
    ],
    correct: 3
  },
  {
    question: 'Hố móng hình chữ nhật, đào mở mái taluy có kích thước như hình vẽ dưới, đáy dưới và đáy trên song song cách đều nhau, chọn một đáp án sau đây có công thức tính đúng khối lượng đào đất:\nS1: Diện tích đáy hố đào.\nS2: Diện tích miệng hố đào (S2//S1).\nS3: Diện tích tiết diện cách đều S1 và S2. \nH: Khoảng cách giữa hai đáy.',
    options: [
      'a. V = (S1+S2+S3)*H/6',
      'b. V = (S1+S2+4S3)*H/6',
      'c. V = [(a1*b1+a2*b2+(a1+a2)*(b1+b2)]*H/6',
      'd. B và C đều đúng',
    ],
    correct: 3
  },
];
