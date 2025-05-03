const questions = [
  {
    question: 'Các chỉ tiêu tính chất nào của đất rời sau đây có thể được đánh giá theo kết quả thí nghiệm SPT',
    options: [
      'a. Độ chặt tương đối',
      'b. Góc ma sát trong',
      'c. Modun biến dạng',
      'd. Cả 3 chỉ tiêu trên',
    ],
    correct: 3
  },
  {
    question: 'Trong thí nghiêm xác định mô đun biến dạng tại hiện trường bằng tấm nén phẳng, khi xử lý kết quả thí nghiệm, tiến hành tính toán mô đun tổng biến dạng E theo độ chính xác nào dưới đây:',
    options: [
      'a. Đến 1MPa đối với E lớn hơn 10MPa',
      'b. Đến 0.5 MPa đối với E từ 2MPa đến 10MPa',
      'c. Đến 0.1 MPa đối với E nhỏ hơn 2 MPa',
      'd. Theo tất cả các tiêu chí trên',
    ],
    correct: 3
  },
  {
    question: 'Khảo sát địa kỹ thuật phục vụ thiết kế thi công hố đào sâu cần phải đáp ứng yêu cầu nào dưới đây:',
    options: [
      'a. Làm rõ sự phân bố và chiều dày các lớp đất trong phạm vi ảnh hưởng thi công hố đào, các chỉ tiêu cơ học của đất nền cần đáp ứng mô hình tính toán thiết kế.',
      'b. Làm rõ hiện trạng, đặc điểm kết cấu và khả năng biến dạng đối với công trình lân cần và công trình ngầm do thi công hố đào. Tại khu vực có đường ống tập trung dày đặc, cần phải thu thập hồ sơ dữ liệu để làm rõ loại hình mặt bằng bố trí, độ sâu và khi cần thiét nên tiến hành thăm dò hệ thống đường ống dưới công trình.',
      'c. Cung cấp các thông số, điều kiện địa chất thủy văn phục vụ tính toán chống giữ và chống thấm cho thành và đáy hố đào.',
      'd. Tất cả các yêu cầu trên',
    ],
    correct: 3
  },
  {
    question: 'Công tác quan sát địa mạo khi đo vẽ lập bản đồ ĐCCT tỷ lệ lớn phải làm sáng tỏ vấn đề nào?',
    options: [
      'a. Nguyên nhân và lịch sử hình thành thung lũng sông và địa hình vùng đất kề đó; Mối quan hệ hình thái của thung lũng sông và vùng đất kề liền với thành tạo đá, với kiến tạo, với địa chất thủy văn và các chuyển động hiện tại của vỏ quả đất;',
      'b. Đánh giá các hoạt động kiến tạo hiện đại, các vết nứt trong trầm tích Đệ tứ;',
      'c. Các hiện tượng địa động lực quan trọng nhất và dự đoán sự phát triển của chúng sau khi có mực nước dâng (Karst, trượt, lũ bùn đá, lún, sụt v.v…).',
      'd. Cả ba vấn đề a, b,',
    ],
    correct: 3
  },
  {
    question: 'Đối với hố đào sâu, quan trắc địa kỹ thuật phục vụ thi công xác định các vấn đề gì?',
    options: [
      'a. Lún bề mặt đất xung quanh hố đào; Chuyển vị ngang thành hố đào; Bùng nền đáy hố đào; Chuyển vị tường cừ; áp lực đất tác dụng vào tường cừ; Chuyển vị và ứng suất trong các thanh chống của hệ chống đỡ; Mực nước ngầm hoặc mực thủy áp; Biến dạng nhà và công trình lân cận.',
      'b. Lún bề mặt đất xung quanh hố đào; Chuyển vị ngang thành hố đào; Bùng nền đáy hố đào; Chuyển vị tường cừ; áp lực đất tác dụng vào tường cừ; Chuyển vị và ứng suất trong các thanh chống của hệ chống đỡ.',
      'c. Lún bề mặt đất xung quanh hố đào; Chuyển vị ngang thành hố đào; Bùng nền đáy hố đào; Chuyển vị tường cừ; áp lực đất tác dụng vào tường cừ; Chuyển vị và ứng suất trong các thanh chống của hệ chống đỡ; Mực nước ngầm hoặc mực thủy áp.',
      'd. Lún bề mặt đất xung quanh hố đào; Chuyển vị ngang thành hố đào; Bùng nền đáy hố đào; Chuyển vị và ứng suất trong các thanh chống của hệ chống đỡ; Mực nước ngầm hoặc mực thủy áp; Biến dạng nhà và công trình lân cận.',
    ],
    correct: 0
  },
  {
    question: 'Trong tầng chứa nước không áp, hệ số dẫn áp còn được gọi là gì?',
    options: [
      'a. Hệ số dẫn nước',
      'b. Hệ số dẫn mực nước',
      'c. Hệ số dòng nước',
      'd. Hệ số dẫn thấm nước',
    ],
    correct: 1
  },
  {
    question: 'Trị số (độ) hạ thấp mực nước tiêu chuẩn đối với tầng không áp là bao nhiêu?',
    options: [
      'a. 2m',
      'b. 3m',
      'c. 4m',
      'd. 5m',
    ],
    correct: 1
  },
  {
    question: 'Khi đo vẽ ở vùng đá diabaz cần chú ý điểm gì?',
    options: [
      'a. Đá thành tạo ở độ sâu không lớn, thường ở dạng thể vỉa;',
      'b. Cấu trúc phân đới của thể magma (theo hướng từ trung tâm ra ngoài rìa. gồm các đá diabaz, thể magma phân ra nhiều loại đá có thành phần thạch học khác nhau. Chúng cũng khác nhau về tính chất cơ lý, về đặc điểm nứt nẻ và có độ bền vững chống lại các quá trình phong hóa;',
      'c. Có những khe nứt nguyên sinh nhìn thấy rõ ràng, tạo thành các khối diabaz có dạng hình cột, hình hộp bình hành, đôi khi hình tấm mỏng, hình cầu và cũng có những khe nứt ẩn, nhỏ do quá trình phong hóa và nổ mìn tạo nên.',
      'd. Cả 3 điểm a, b,',
    ],
    correct: 3
  },
  {
    question: 'Trên bản đồ phân vùng ĐCCT, đường ranh giới phân chia các vùng được thể bằng nét màu đen với độ mảnh là bao nhiêu?',
    options: [
      'a. 1 mm',
      'b. 0.5 mm',
      'c. 0.2 mm',
      'd. 0.7 mm',
    ],
    correct: 0
  },
  {
    question: 'Để xác định tính chất phá hủy của đứt gãy thì đứt gãy bậc III có chiều dài đới vỡ vụn của đứt gãy hoặc chiều rộng của khe nứt là bao nhiêu?',
    options: [
      'a. 1m : nhỏ hơn 10m',
      'b. 2m : nhỏ hơn 15m',
      'c. 3m : nhỏ hơn 20m d: 4m : nhỏ hơn 25m',
    ],
    correct: 0
  },
  {
    question: 'Hiện tượng Karst (cactơ) chỉ có thể phát triển khi phải hội đủ những điều kiện nào:',
    options: [
      'a. Đá phải có tính hòa tan; nước phải có tính hòa tan và đá phải nứt nẻ, có tính thấm nước',
      'b. Đá phải có tính hòa tan; nước phải có tính hòa tan và đá phải nứt nẻ, có tính thấm nước, nước có khả năng vận động',
      'c. Nước phải có tính hòa tan và đá phải nứt nẻ, có tính thấm nước, nước có khả năng vận động',
      'd. Đá phải có tính hòa tan; đá phải nứt nẻ, có tính thấm nước; nước phải có khả năng vận động',
    ],
    correct: 1
  },
  {
    question: 'Hiện tượng karst (cactơ) phát triển theo những quy luật nào:',
    options: [
      'a. Phát triển giảm dần theo chiều sâu; phát triển mạnh hơn ở gần thung lũng sông và phát triển yếu hơn ở khu vực đường phân thủy; sự phát triển của karst phụ thuộc đặc điểm cấu trúc và lịch sử phát triển địa chất của khu vực',
      'b. Theo chiều sâu có xu hướng phát triển mạnh hơn; phát triển mạnh hơn ở gần thung lũng sông và phát triển yếu hơn ở khu vực đường phân thủy; sự phát triển của karst phụ thuộc phụ thuộc đặc điểm cấu trúc và lịch sử phát triển địa chất của khu vực',
      'c. Theo chiều sâu có xu hướng phát triển giảm dần; phát triển mạnh hơn ở ở khu vực đường phân thủy và yếu hơn gần thung lũng sông; sự phát triển của karst phụ thuộc đặc điểm cấu trúc và lịch sử phát triển địa chất của khu vực',
      'd. Theo chiều sâu có xu hướng phát triển giảm dần; phát triển yếu hơn ở khu vực đường phân thủy và khu vực gần thung lũng sông; sự phát triển của karst phụ thuộc đặc điểm cấu trúc và lịch sử phát triển địa chất của khu vực',
    ],
    correct: 0
  },
  {
    question: 'Hiểu thế nào là độ chặt của đất (hệ số đầm chặt):',
    options: [
      'a. Là tỷ số giữa khối lượng thể tích đơn vị đất khô (□',
      'c. của đất đắp đạt được khi đầm nện tại hiện trường và khối lượng thể tích đơn vị khô lớn nhất (□c max) của cùng một loại đất tương tự đạt được khi thí nghiệm đầm chặt tiêu chuẩn ở trong phòng thí nghiệm.',
      'b. Là tỷ số giữa khối lượng thể tích đơn vị (□',
      'c. của đất đắp đạt được khi đầm nện tại hiện trường và khối lượng thể tích đơn vị khô lớn nhất (□c max) của chính đất đó đạt được khi thí nghiệm đầm chặt tiêu chuẩn ở trong phòng thí nghiệm',
      'c. Là tỷ số giữa khối lượng thể tích đơn vị (□',
      'c. của đất đắp đạt được khi đầm nện tại hiện trường và khối lượng thể tích đơn vị của đất lớn nhất (□c max) của chính đất đó đạt được khi thí nghiệm đầm chặt tiêu chuẩn ở trong phòng thí nghiệm',
      'd. Là tỷ số giữa khối lượng thể tích đơn vị đất khô (□',
      'c. của đất đắp đạt được khi đầm nện tại hiện trường và khối lượng thể tích đơn vị lớn nhất (□c max) của chính đất đó đạt được khi thí nghiệm đầm chặt tiêu chuẩn ở trong phòng thí nghiệm',
    ],
    correct: 0
  },
  {
    question: 'Theo TCVN 9402:2022, xây dựng nhiệm vụ khảo sát địa chất vùng karst áp dụng cho loại công trình nào?',
    options: [
      'a. Đối tượng áp dụng là các công trình dạng tuyến',
      'b. Đối tượng áp dụng là các công trình thủy lợi, thủy điện',
      'c. Đối tượng áp dụng là các công trình ngầm...',
      'd. Đối tượng áp dụng là các khu công nghiệp, các khu dân cư, đô thị',
    ],
    correct: 3
  },
  {
    question: 'Theo TCVN 9402:2022, vùng karst là?',
    options: [
      'a. các vùng phát triển cáctơ trên đá cacbonat (đá vôi, đôlômit, đá macnơ).',
      'b. Các khu vực nếu có hang hốc loại khác (ví dụ các hang hốc trong đất sét hình thành do đất có khả năng tan rã mạnh)',
      'c. Các hang hốc được hình thành do đất đá nứt nẻ, xói ngầm mạnh tạo nên.',
      'd. Cả phương án a và b',
    ],
    correct: 0
  },
  {
    question: 'Các sơ đồ thí nghiệm bằng thí nghiệm cắt phẳng theo tiêu chuẩn TCVN 4199:1995',
    options: [
      'a. Không nén trước (không thoát nước, không cố kết), đưa cắt nhanh;',
      'b. Nén trước đến ổn định (thoát nước, cố kết), rồi cắt chậm;',
      'c. Nén trước đến ổn định (thoát nước, cố kết), rồi cắt nhanh',
      'd. Cả ba phương án a,b,c',
    ],
    correct: 3
  },
  {
    question: 'Việc lựa chọn phương pháp xác định sức chống cắt phụ thuộc vào',
    options: [
      'a. Giai đoạn thiết kế và loại công trình;',
      'b. Điều kiện làm việc của đất trong quan hệ với công trình;',
      'c. Thành phần, đặc điểm cấu trúc, trạng thái và tính chất của đất.',
      'd. Cả ba phương án a,b,c',
    ],
    correct: 1
  },
  {
    question: 'Theo tiêu chuẩn (TCVN 9156:2012), khi đo vẽ và thành lập bản đồ địa chất công trình phục vụ công tác xây dựng, các đơn vị đất đá được phân chia thành những đơn vị nào trong các phương án sau:',
    options: [
      'a. Thành hệ, phức hệ địa chất nguồn gốc, kiểu thạch học, kiểu địa chất công trình',
      'b. Điệp thạch học, Phức hệ thạch học, kiểu thạch học, kiểu địa chất công trình',
      'c. Thành hệ, Phức hệ thạch học, kiểu thạch học, kiểu địa chất công trình',
      'd. Phức hệ địa chất, phức hệ thạch học, kiểu thạch học, kiểu địa chất công trình',
    ],
    correct: 1
  },
  {
    question: 'Theo tiêu chuẩn phân vùng địa chất công trình được áp dụng trong tiêu chuẩn (TCVN 9156:2012), người ta chia thành mấy đơn vị phân vùng và tên các đơn vị:',
    options: [
      'a. 3 đơn vị phân vùng gồm: vùng, khu, khoảnh',
      'b. 5 đơn vị phân vùng gồm: miền, vùng, phụ vùng, khu, khoảnh',
      'c. 4 đơn vị phân vùng gồm: miền, vùng, khu, khoảnh',
      'd. 6 đơn vị phân vùng gồm: miền, phụ miền, vùng, phụ vùng, khu, khoảnh',
    ],
    correct: 2
  },
  {
    question: 'Mật độ điểm nghiên cứu (số điểm quan sát và công trình thăm dò trên 1 km2) khi đo vẽ thành lập bản đồ địa chất công trình (ĐCCT) phụ thuộc những yếu tố nào trong các phương án dưới đây:',
    options: [
      'a. Tỷ lệ đo vẽ ĐCCT, mức độ xuất lộ, nguồn tài liệu lưu trữ thu thập được',
      'b. Tỷ lệ đo vẽ (ĐCCT) và tầm quan trọng của công trình',
      'c. Mức độ phức tạp về điều kiện ĐCCT, nguồn tài liệu lưu trữ thu thập được và mức độ xuất lộ',
      'd. Tỷ lệ đo vẽ ĐCCT, mức độ phức tạp về điều kiện ĐCCT và chất lượng lộ của điểm quan sát',
    ],
    correct: 3
  },
  {
    question: 'Thí nghiệm ép nước để nghiên cứu tính thấm của đất đá thực hiện với áp lực tiêu chuẩn và thời gian kéo dài sau khi đạt lưu lượng ổn định là trường hợp nào trong các phương án dưới đây:',
    options: [
      'a. 15 m cột nước và tiến hành cho tới khi lưu lượng ổn định trong thời gian 30 phút',
      'b. 10 m cột nước và tiến hành cho tới khi lưu lượng ổn định trong thời gian 15 phút',
      'c. 10 m cột nước và tiến hành cho tới khi lưu lượng ổn định trong thời gian 30 phút',
      'd. 20 m cột nước và tiến hành cho tới khi lưu lượng ổn định trong thời gian 30 phút',
    ],
    correct: 2
  },
  {
    question: 'Những đơn vị đất đá phân chia nào quy định được thể hiện trên bản đồ địa chất công trình tỷ lệ 1: 2000 và 1: 1000 trong các phương án dưới đây:',
    options: [
      'a. Phức hệ thạch học và kiểu thạch học',
      'b. Điệp thạch học và kiểu địa chất công trình',
      'c. Điệp thạch học và phức hệ thạch học',
      'd. Phức hệ thạch học, kiểu thạch học và kiểu địa chất công trình',
    ],
    correct: 3
  },
  {
    question: 'Ma sát âm xuất hiện xung quanh cọc ma sát trong trường hợp nào dưới đây:',
    options: [
      'a. Đất đá xung quanh cọc có tốc độ lún nhỏ hơn tốc độ lún của mũi cọc',
      'b. Tốc độ lún của đất xung quanh cọc lớn hơn tốc độ lún của mũi cọc',
      'c. Tốc độ lún của đất xung quanh cọc tương đương tốc độ lún của mũi cọc',
      'd. Đất xung quanh cọc không lún mà chỉ có đất ở mũi cọc lún',
    ],
    correct: 1
  },
  {
    question: 'Trong thí nghiệm ép nước theo phương pháp Lugeon, đơn vị Lugeon được hiểu như thế nào:',
    options: [
      'a. Lưu lượng nước tiêu hao trong 1 phút, trên 1 m đoạn ép, dưới áp lực 100 m cột nước',
      'b. Lưu lượng nước tiêu hao trong 1 phút, trên 1 m chiều dài đoạn ép, dưới áp lực 10 m cột nước',
      'c. Lưu lượng nước tiêu hao trong 1 phút, trên 1 m chiều dài đoạn ép, dưới áp lực 50 m cột nước',
      'd. Lưu lượng nước tiêu hao trong 1 phút, trên chiều dài đoạn ép trong lỗ khoan thí nghiệm, dưới áp lực 100 m cột nước',
    ],
    correct: 0
  },
  {
    question: 'Hiện tượng carst chỉ có thể phát triển khi phải hội đủ những điều kiện nào:',
    options: [
      'a. Đá phải có tính hòa tan; nước phải có tính hòa tan và đá phải nứt nẻ',
      'b. Đá phải có tính hòa tan; nước phải có tính hòa tan',
      'c. Đá phải nứt nẻ, có tính thấm nước, nước có khả năng vận động',
      'd. Phương án b và c',
    ],
    correct: 1
  },
  {
    question: 'Hiện tượng carst phát triển theo những quy luật nào:',
    options: [
      'a. Phát triển giảm dần theo chiều sâu',
      'b. Phát triển mạnh hơn ở khu vực đường phân thủy và yếu hơn ở gần thung lũng sông',
      'c. Phát triển mạnh hơn ở gần thung lũng sông và yếu hơn ở khu vực đường phân thủy',
      'd. Phương án a và c',
    ],
    correct: 3
  },
  {
    question: 'Nếu gọi γc là khối lượng thể tích đơn vị đất khô và γ là khối lượng thể tích đơn vị, thì độ chặt của đất (hệ số đầm chặt) được hiểu là:',
    options: [
      'a. Tỷ số giữa γc thí nghiệm ở hiện trường và γc max của cùng loại đất thí nghiệm trong phòng.',
      'b. Tỷ số giữa γ thí nghiệm ở hiện trường và γc max của cùng loại đất thí nghiệm trong phòng.',
      'c. Tỷ số giữa γ thí nghiệm ở hiện trường và γmax của cùng loại đất thí nghiệm trong phòng.',
      'd. Tỷ số giữa γc thí nghiệm ở hiện trường và γmax của cùng loại đất thí nghiệm phòng.',
    ],
    correct: 0
  },
  {
    question: 'Những chỉ tiêu nào cho phép đánh giá trực tiếp mức độ nén lún và biến dạng của đất:',
    options: [
      'a. Áp lực tiền cố kết (Pc), chỉ số nén (Cc)',
      'b. Hệ số cố kết (Cv), Hệ số nén lún (a),',
      'c. Hệ số nén lún (a), chỉ số nén (Cc. và mô đun biến dạng (E)',
      'd. Hệ số quá cố kết (OCR), mô đun biến dạng (E)',
    ],
    correct: 2
  },
  {
    question: 'Trong các biểu đồ quan hệ lập từ kết quả thí nghiệm nén tĩnh cọc, biểu đồ quan hệ nào được sử dụng để trực tiếp xác định sức chịu tải giới hạn của cọc:',
    options: [
      'a. Biểu đồ quan hệ chuyển vị - tải trọng - thời gian',
      'b. Biểu đồ quan hệ tải trọng - chuyển vị',
      'c. Biểu đồ quan hệ chuyển vị - thời gian của các cấp gia tải',
      'd. Biểu đồ quan hệ tải trọng - thời gian',
    ],
    correct: 1
  },
  {
    question: 'Độ ẩm giới hạn chảy có thể được xác định bằng những phương pháp nào:',
    options: [
      'a. Lăn đất thành que đường kính 3mm và bề mặt bắt đầu bị rạn nứt và đưa đi xác định độ ẩm',
      'b. Xác định bằng quả dọi thăng bằng, sau đó mang đi xác định độ ẩm',
      'c. Xác định theo phương pháp Casagrande, sau đó mang đi xác định độ ẩm',
      'd. Phương án b và c, nhưng kết quả được sử dụng khác nhau',
    ],
    correct: 3
  },
  {
    question: 'Độ ẩm giới hạn dẻo được xác định bằng phương pháp nào:',
    options: [
      'a. Phương pháp Casagrande, sau đó mang đất đi xác định độ ẩm',
      'b. Xác định bằng quả dọi thăng bằng, sau đó mang đất đi xác định độ ẩm',
      'c. Lăn đất thành que đường kính 3mm và bề mặt bắt đầu bị rạn nứt và đưa đi xác định độ ẩm',
      'd. Theo phương pháp quả dọi thăng bằng và Casagrade, sau đó mang đi xác định độ ẩm',
    ],
    correct: 2
  },
  {
    question: 'Hiểu thế nào là khối lượng thể tích tự nhiên của đất:',
    options: [
      'a. Là khối lượng của một đơn vị thể tích đất ở trạng thái khô gió',
      'b. Là khối lượng của một đơn vị thể tích đất chỉ có phần hạt rắn',
      'c. Là khối lượng của một đơn vị thể tích đất có kết cấu và độ ẩm tự nhiên',
      'd. Là khối lượng của một đơn vị thể tích đất có độ ẩm tự nhiên',
    ],
    correct: 2
  },
  {
    question: 'Hiểu thế nào là khối lượng thể tích của cốt đất (Khối lượng thể tích khô):',
    options: [
      'a. Là khối lượng của một đơn vị thể tích đất ở trạng thái khô gió',
      'b. Là khối lượng của một đơn vị thể tích đất chỉ có phần hạt rắn',
      'c. Là khối lượng của một đơn vị thể tích đất có kết cấu và độ ẩm tự nhiên',
      'd. Là khối lượng của một đơn vị thể tích đất khô, có kết cấu tự nhiên',
    ],
    correct: 3
  },
  {
    question: 'Trong phòng thí nghiệm, phương pháp xác định khối lượng thể tích bằng dao vòng thường được sử dụng cho loại đất nào:',
    options: [
      'a. Đất cát lẫn sỏi sạn nhỏ',
      'b. Đất loại sét dễ cắt gọt bằng dao, dễ lấy vào dao vòng mà không làm sứt mẻ mẫu',
      'c. Đất loại sét lẫn nhiều hạt nhỏ hơn 5mm, khi cho vào dao vòng dễ vỡ vụn nhưng đất có thể giữ nguyên được ở dạng cục',
      'd. Đất than bùn, đất có nhiều tàn tích thực vật',
    ],
    correct: 1
  },
  {
    question: 'Trong phòng thí nghiệm, phương pháp xác định khối lượng thể tích bằng bọc sáp thường được sử dụng cho loại đất nào:',
    options: [
      'a. Đất loại sét lẫn nhiều hạt nhỏ hơn 5mm, khi cho vào dao vòng dễ vỡ vụn nhưng đất có thể giữ nguyên được ở dạng cục',
      'b. Đất loại sét dễ cắt gọt bằng dao, dễ lấy vào dao vòng mà không làm sứt mẻ mẫu',
      'c. Đất than bùn, đất có nhiều tàn tích thực vật',
      'd. Đất cát lẫn sỏi sạn nhỏ',
    ],
    correct: 0
  },
  {
    question: 'Hiểu thế nào là khối lượng riêng của đất:',
    options: [
      'a. Là khối lượng của một đơn vị thể tích hạt đất xếp chặt vào nhau',
      'b. Là khối lượng của một đơn vị thể tích đất khô',
      'c. Là khối lượng của một đơn vị thể tích phần hạt cứng, khô tuyệt đối, xếp chặt sít không có lỗ hổng',
      'd. Là khối lượng của một đơn vị thể tích đất không nguyên dạng',
    ],
    correct: 2
  },
  {
    question: 'Khối lượng riêng của đất được xác định bằng phương pháp bình tỷ trọng, tiến hành đồng thời với hai thí nghiệm và lấy giá trị trung bình khi chênh lệch giữa hai kết quả không quá:',
    options: [
      'a. 0,01 g/cm3',
      'b. 0,03 g/cm3',
      'c. 0,02 g/cm3',
      'd. 0,05 g/cm3',
    ],
    correct: 2
  },
  {
    question: 'Hiểu thế nào là độ ẩm của đất:',
    options: [
      'a. Là tỷ số giữa khối lượng nước trong đất và khối lượng mẫu đất có kết cấu phá hủy',
      'b. Là tỷ số giữa khối lượng nước trong đất và khối lượng khô của đất',
      'c. Là tỷ số giữa khối lượng nước trong đất và khối lượng mẫu đất ở trạng thái nguyên trạng',
      'd. Là tỷ số giữa khối lượng nước trong đất kể cả nước liên kết mặt ngoài và khối lượng khô của đất',
    ],
    correct: 1
  },
  {
    question: 'Độ ẩm của đất được xác định bằng phương pháp sấy khô và tiến hành đồng thời trên hai mẫu thử trong cùng điều kiện, lấy kết quả trung bình khi giữa hai lần thí nghiệm chênh lệch nhau không quá:',
    options: [
      'a. 2 %',
      'b. 1 %',
      'c. 3 %',
      'd. 4 %',
    ],
    correct: 0
  },
  {
    question: 'Lượng mất nước đơn vị hay còn gọi là tỷ lưu lượng hấp thu nước đơn vị được xác định như thế nào:',
    options: [
      'a. Là lưu lượng tiêu hao trong 1 phút trên 1 m chiều dài đoạn ép dưới áp lực 10 m cột nước',
      'b. Là lưu lượng nước tiêu hao trong 1 phút, trên 1 m chiều dài đoạn ép dưới áp lực 1 m cột nước',
      'c. Là lưu lượng nước tiêu hao trong 1 phút, trên chiều dài đoạn ép dưới áp lực 1 m cột nước',
      'd. Là lưu lượng tiêu hao trong 1 phút trên 1 m chiều dài đoạn ép dưới áp lực 100 m cột nước',
    ],
    correct: 1
  },
  {
    question: 'Khi tiến hành thí nghiệm xuyên tiêu chuẩn (SPT), người ta đóng 3 hiệp, mỗi hiệp sâu 15 cm. giá trị xuyên tiêu chuẩn được xác định như thế nào:',
    options: [
      'a. Bằng tổng số búa của cả 3 hiệp xuyên',
      'b. Bằng tổng số búa của hai hiệp đầu tiên',
      'c. Bằng tổng số búa của hai hiệp sau cùng',
      'd. Bằng số búa của hiệp xuyên cuối cùng',
    ],
    correct: 2
  },
  {
    question: 'Tài liệu thí nghiêm xuyên tiêu chuẩn (SPT) cho phép giải quyết được những nhiệm vụ gì trong khảo sát địa chất công trình:',
    options: [
      'a. Mô tả đất đá và phân chia địa tầng',
      'b. Đánh giá độ chặt của đất rời và khả năng hóa lỏng của nó, đánh giá trạng thái của đất loại sét',
      'c. Xác định được một số chỉ tiêu cơ lý của đất nền và thiết kế móng nông cũng như xác định sức chịu tải của móng cọc',
      'd. Cả ba phương án a, b,',
    ],
    correct: 3
  },
  {
    question: 'Thí nghiệm hiện trường bằng tải trọng tĩnh ép dọc trục cọc (Thí nghiệm nén tĩnh cọc. nhằm xác định chỉ tiêu gì:',
    options: [
      'a. Cường độ của đất nền ở mũi và thân cọc',
      'b. Khả năng chịu lực của bản thân cọc',
      'c. Tải trọng lớn nhất của cọc chịu được thời điểm phá hoại được xác định theo giới hạn quy ước',
      'd. Sức kháng đầu mũi của cọc',
    ],
    correct: 2
  },
  {
    question: 'Số lượng cọc thí nghiệm nén tĩnh phụ thuộc mức độ quan trọng của công trình, mức độ phức tạp của điều kiện đất nền, loại cọc và chất lượng thi công, thường được lấy bằng:',
    options: [
      'a. 0,5 % tổng số cọc của công trình nhưng không được ít hơn 2 cọc',
      'b. 1 % tổng số cọc của công trình nhưng không được ít hơn 2 cọc',
      'c. 2 % tổng số cọc của công trình nhưng không được ít hơn 2 cọc',
      'd. 1,5 % tổng số cọc của công trình nhưng không được ít hơn 2 cọc',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế thí nghiệm nén tĩnh cọc để kiểm tra, tải trọng thí nghiệm lớn nhất để thí nghiệm có thể lấy theo các trường hợp sau:',
    options: [
      'a. Từ 100 % đến 150 % tải trọng thiết kế của cọc',
      'b. Từ 150 đến 250 % tải trọng thiết kế của cọc',
      'c. Từ 100 đến 200 % tải trọng thiết kế của cọc',
      'd. Từ 150 đến 200 % tải trọng thiết kế của cọc',
    ],
    correct: 3
  },
  {
    question: 'Hiểu thế nào là sức kháng mũi côn (qc. của xuyên tĩnh:',
    options: [
      'a. Là tổng lực tác dụng để đưa toàn bộ cần xuyên và mũi xuyên đi vào trong đất',
      'b. Là lực tác dụng đưa mũi xuyên đi vào trong đất',
      'c. Là lực tác dụng lên phần ống đo ma sát ở phần phía trên mũi xuyên',
      'd. Là lực tác dụng đưa mũi côn vào đất (Qc. chia cho diện tích đáy mũi côn (Ac)',
    ],
    correct: 3
  },
  {
    question: 'Hiểu thế nào là ma sát thành đơn vị (fs) của xuyên tĩnh:',
    options: [
      'a. Là lực tác dụng lên phần ống đo ma sát (Qs) chia cho diện tích bề mặt ống đo ma sát (Qs)',
      'b. Là lực tác dụng lên toàn bộ bề mặt cần xuyên khi cần xuyên đi vào trong đất',
      'c. Là lực tác dụng lên phần ống đo ma sát ở phần phía trên mũi xuyên',
      'd. Là lực tác dụng để đưa toàn bộ phần mũi xuyên đi vào trong đất',
    ],
    correct: 0
  },
  {
    question: 'Trong các biểu đồ quan hệ lập từ kết quả thí nghiệm nén tĩnh nền bằng tấm nén phẳng, biểu đồ quan hệ nào được sử dụng để trực tiếp xác định mô đun biến dạng:',
    options: [
      'a. Biểu đồ quan hệ độ lún - tải trọng - thời gian',
      'b. Biểu đồ quan hệ độ lún - thời gian của các cấp gia tải',
      'c. Biểu đồ quan hệ tải trọng - độ lún',
      'd. Biểu đồ quan hệ tải trọng - thời gian',
    ],
    correct: 2
  },
  {
    question: 'Phương pháp đổ nước thí nghiệm xác định hệ số thấm của A.K. Bôndưrep áp dụng thích hợp cho đất đá nào và điều kiện cụ thể nào:',
    options: [
      'a. Đất sét có mặt lớp xuất lộ hoặc tại độ sâu không quá 1,5 m, có tính thấm nhỏ',
      'b. Đất sét pha có mặt lớp xuất lộ hoặc độ sâu không quá 1,5 m, có tính thấm nhỏ',
      'c. Đất cát pha, cát mịn có mặt lớp lộ hoặc độ sâu không quá 1,5 m, có tính thấm không lớn',
      'd. Đất cát thô lẫn sỏi sạn hay đất sỏi sạn có mặt lớp lộ hoặc độ sâu không quá 1,5 m, có tính thấm tương đối lớn đến lớn',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp đổ nước thí nghiệm xác định hệ số thấm của N.X. Netxterop áp dụng thích hợp cho đất đá nào và điều kiện cụ thể nào:',
    options: [
      'a. Cuội dăm sạn có mặt lớp xuất lộ hoặc sâu không quá 1,5 m, có tính thấm lớn',
      'b. Đất hạt nhỏ và đất hạt mịn chứa nhiều sỏi sạn có mặt lớp xuất lộ hoặc sâu không quá 1,5 m, không bão hòa, có tính thấm trung bình đến yếu',
      'c. Đất hòn tảng có mặt lớp lộ hoặc sâu không quá 1,5 m, có tính thấm không lớn',
      'd. Sỏi sạn có mặt lớp lộ hoặc sâu không quá 1,5 m, có tính thấm tương đối lớn đến lớn',
    ],
    correct: 1
  },
  {
    question: 'Điều kiện áp dụng phương pháp đổ nước thí nghiệm trong lỗ khoan theo phương pháp cột nước không đổi - Phương pháp V.M. Nasberg là:',
    options: [
      'a. Đáy đoạn đổ nước cao hơn mực nước ngầm hoặc mái tầng cách nước khoảng (T) lớn hơn hoặc bằng chiều cao cột nước đổ (H) (T > H)',
      'b. Chiều cao cột nước thí nghiệm (H) nằm trong phạm vi chiều dài đoạn đổ nước (L) (H < L)',
      'c. Tỷ số giữa cột nước (H) và bán kính của hố khoan đổ nước (r) nằm trong khoảng 50 ≤ H/r ≤ 200',
      'd. Cả ba phương án a, b,',
    ],
    correct: 3
  },
  {
    question: 'Sản phẩm cuối cùng của công tác đo vẽ địa chất công trình là gì:',
    options: [
      'a. Bản đồ địa mạo khu vực nghiên cứu kèm theo thuyết minh',
      'b. Bản đồ địa chất khu vực nghiên cứu kèm theo thuyết minh',
      'c. Bản đồ địa chất công trình kèm theo thuyết minh',
      'd. Bản đồ địa chất thủy văn kèm theo thuyết minh',
    ],
    correct: 2
  },
  {
    question: 'Để thực hiện công tác đo vẽ thành lập bản đồ địa chất công trình, cần phải có những giai đoạn công việc nào trong các phương án dưới đây:',
    options: [
      'a. Lập đề cương và dự toán của phương án; công tác chuẩn bị;',
      'b. Công tác chuẩn bị; Công tác đo vẽ thực địa; Chỉnh lý tài liệu',
      'c. Công tác thực địa; chỉnh lý tài liệu, lập bản đồ và viết thuyết minh.',
      'd. Phương án a và c',
    ],
    correct: 3
  },
  {
    question: 'Khi định vị vị trí lỗ khoan ngoài thực địa cần phải:',
    options: [
      'a. Ước lượng vị trí lỗ khoan ngoài thực địa',
      'b. Bảo đảm đúng tọa độ vị trí lỗ khoan đã được quy định trong bản nhiệm vụ khảo sát',
      'c. Tuân theo các quy định của công tác đo đạc trong tiêu chuẩn liên quan',
      'd. Phương án b và c',
    ],
    correct: 3
  },
  {
    question: 'Trong trường hợp gặp khó khăn về địa hình, không thể khoan đúng vị trí đã định và nếu không có quy định gì đặc biệt thì được phép dịch chuyển vị trí lỗ khoan với khoảng cách bao nhiêu:',
    options: [
      'a. Tùy ý, miễn là thuận lợi cho công tác khoan',
      'b. 0,5 đến 1 m tính từ vị trí lỗ khoan thiết kế, nhưng phải bảo đảm mục đích thăm dò của lỗ khoan',
      'c. 0,5 đến 3 m tính từ vị trí lỗ khoan thiết kế',
      'd. 0,5 đến 1,5 m tính từ vị trí lỗ khoan thiết kế',
    ],
    correct: 1
  },
  {
    question: 'Để xác định cao độ miệng lỗ khoan ngoài thực địa, cần phải dựa vào:',
    options: [
      'a. Địa hình thực tế để ước lượng cao độ',
      'b. Cọc mốc cao độ; cọc định vị công trình có ghi cao độ hay mốc cao độ giả định và xác định cao độ sau.',
      'c. Lập mốc giả định tại khu vực xây dựng công trình và xác định cao độ theo mốc này',
      'd. Địa hình thực tế và mốc giả định để ước lượng cao độ',
    ],
    correct: 1
  },
  {
    question: 'Trong quá trình khoan phải theo dõi, đo đạc và ghi chép đầy đủ những nội dung:',
    options: [
      'a. Diễn biến trong quá trình khoan như: tốc độ khoan, hiện tượng tụt cần khoan, lưu lượng và mầu sắc dung dịch…',
      'b. Đo chiều sâu khoan và mô tả địa tầng, địa chất thủy văn.',
      'c. Công tác lấy mẫu thí nghiệm; thí nghiệm SPT, cắt cánh…',
      'd. Cả ba phương án a, b,',
    ],
    correct: 3
  },
  {
    question: 'Khi khoan trong đất đá mềm yếu, dung dịch sét có tác dụng gì:',
    options: [
      'a. Làm cho khoan trơn và dễ khoan hơn',
      'b. Vận chuyển mùn khoan tốt hơn',
      'c. Tác dụng chống sập lở thành lỗ khoan',
      'd. Làm mát dụng cụ khoan tốt hơn',
    ],
    correct: 2
  },
  {
    question: 'Đối với đất loại sét trạng thái dẻo chảy, chảy và bùn thường sử dụng những loại ống mẫu nào để lấy mẫu nguyên trạng:',
    options: [
      'a. Ống mẫu nguyên trạng loại thường',
      'b. Ống mẫu có van',
      'c. Ống mẫu nòng đôi',
      'd. Ống mẫu thành mỏng hay ống mẫu Pittong',
    ],
    correct: 3
  },
  {
    question: 'Quy định về Phương án khảo sát địa kỹ thuật đầy đủ phải gồm những nội dung nào:',
    options: [
      'a. Thành phần, khối lượng; yêu cầu kỹ thuật cần thực hiện;',
      'b. Thành phần, khối lượng, tiến độ của công tác khảo sát cần thực hiện',
      'c. Giải pháp tổ chức thực hiện; tiến độ và giá thành dự kiến',
      'd. Phương án a và c',
    ],
    correct: 3
  },
  {
    question: 'Kết quả khảo sát địa chất công trình (Khảo sát Địa kỹ thuật) cho giai đoạn trước thiết kế cơ sở được sử dụng để giải quyết nhiệm vụ gì:',
    options: [
      'a. Luận chứng cho Dự án đầu tư (Báo cáo khả thi) và kiến nghị chọn giải pháp móng thích hợp',
      'b. Luận chứng cho quy hoạch tổng thể và làm cơ sở để thiết kế khảo sát địa chất công trình giai đoạn chi tiết hơn',
      'c. Chính xác hóa vị trí công trình và cung cấp tài liệu cho thiết kế kỹ thuật để xây dựng công trình',
      'd. Kiểm tra và chính xác hóa những vấn đề còn nghi ngờ hoặc còn thiếu hoặc phục vụ thiết kế giải pháp công trình',
    ],
    correct: 1
  },
  {
    question: 'Kết quả khảo sát địa chất công trình (Khảo sát Địa kỹ thuật) cho giai đoạn thiết kế cơ sở được sử dụng để giải quyết nhiệm vụ gì:',
    options: [
      'a. Luận chứng cho Dự án đầu tư (Báo cáo khả thi) và kiến nghị chọn giải pháp móng thích hợp',
      'b. Luận chứng cho quy hoạch tổng thể và làm cơ sở để thiết kế khảo sát địa chất công trình giai đoạn chi tiết hơn',
      'c. Chính xác hóa vị trí công trình và cung cấp tài liệu cho thiết kế kỹ thuật để xây dựng công trình',
      'd. Kiểm tra và chính xác hóa những vấn đề còn nghi ngờ hoặc còn thiếu hoặc phục vụ thiết kế giải pháp công trình',
    ],
    correct: 0
  },
  {
    question: 'Kết quả khảo sát địa chất công trinh (Khảo sát Địa kỹ thuật) cho giai đoạn thiết kế kỹ thuật được sử dụng để giải quyết nhiệm vụ gì:',
    options: [
      'a. Luận chứng cho Dự án đầu tư (Báo cáo khả thi) và kiến nghị chọn giải pháp móng thích hợp',
      'b. Luận chứng cho quy hoạch tổng thể và làm cơ sở để thiết kế khảo sát địa chất công trình giai đoạn chi tiết hơn',
      'c. Chính xác hóa vị trí công trình và cung cấp tài liệu cho thiết kế kỹ thuật để xây dựng công trình',
      'd. Kiểm tra và chính xác hóa những vấn đề còn nghi ngờ hoặc còn thiếu hoặc phục vụ thiết kế giải pháp công trình',
    ],
    correct: 2
  },
  {
    question: 'Khi khảo sát địa chất công trình cho khu nhà cao tầng phục vụ thiết kế cơ sở thì mạng lưới lỗ khoan thăm dò thường được bố trí như thế nào:',
    options: [
      'a. Bố trí ngay trên diện tích xây dựng của từng hạng mục công trình',
      'b. Bố trí theo tuyến hoặc theo mạng lưới trên toàn bộ diện tích khu xây dựng của dự án',
      'c. Bố trí tùy thuộc điều kiện địa hình thực tế của khu vực xây dựng',
      'd. Mỗi hạng mục công trình bắt buộc phải bố trí một công trình thăm dò',
    ],
    correct: 1
  },
  {
    question: 'Khi khảo sát địa chất công trình cho khu nhà cao tầng phục vụ thiết kế kỹ thuật thì mạng lưới công trình thăm dò thường được bố trí như thế nào:',
    options: [
      'a. Mỗi hạng mục công trình bắt buộc phải bố trí một công trình thăm dò',
      'b. Bố trí theo tuyến hoặc theo mạng lưới trên toàn bộ diện tích khu xây dựng của dự án',
      'c. Bố trí tùy thuộc điều kiện địa hình thực tế của khu vực xây dựng',
      'd. Bố trí ngay trên diện tích xây dựng của từng hạng mục công trình',
    ],
    correct: 3
  },
  {
    question: 'Khi xác định chiều sâu các công trình thăm dò thì người ta phải dựa vào những yếu tố nào:',
    options: [
      'a. Mục đích tiến hành công tác thăm dò',
      'b. Quy mô tải trọng và tầm quan trọng của công trình',
      'c. Đặc điểm cấu trúc địa chất',
      'd. Cả ba phương án a, b, c và chọn điều kiện an toàn chung cho công trình',
    ],
    correct: 3
  },
  {
    question: 'Hiểu thế nào là hàm lượng phần trăm tích lũy tại một đường kính hạt đất:',
    options: [
      'a. Là hàm lượng phần trăm tích lũy của các đường kính hạt lớn hơn hoặc bằng đường kính đó',
      'b. Là tổng hàm lượng phần trăm của các hạt có đường kính nhỏ hơn đường kính đó',
      'c. Là hàm lượng phần trăm của hạt có đường kính bằng đường kính đó',
      'd. Là hàm lượng phần trăm theo khối lượng của các hạt có đường kính nhỏ hơn đường kính đó',
    ],
    correct: 3
  },
  {
    question: 'Việc phân tích thành phần hạt bằng sàng khô được thực hiện đối với đất rời (không có hoặc có không đáng kể hạt bụi và sét) khi hạt đất có kích thước:',
    options: [
      'a. Lớn hơn 0,25 mm',
      'b. Lớn hơn 0,5 mm',
      'c. Lớn hơn 1,0 mm',
      'd. Lớn hơn 2,0 mm',
    ],
    correct: 1
  },
  {
    question: 'Việc phân tích thành phần hạt bằng sàng ướt được thực hiện đối với đất có tính dính (có chứa đáng kể các hạt bụi và sét) khi hạt đất có kích thước:',
    options: [
      'a. Lớn hơn 0,1 mm',
      'b. Lớn hơn 0,5 mm',
      'c. Lớn hơn 1,0 mm',
      'd. Lớn hơn 0,25 mm',
    ],
    correct: 0
  },
  {
    question: 'Phương pháp tỷ trọng kế được áp dụng để phân tích thành phần hạt của đất loại sét đối với các hạt có kích thước:',
    options: [
      'a. Nhỏ hơn 0,05 mm',
      'b. Nhỏ hơn 1,0 mm',
      'c. Nhỏ hơn 0,1 mm',
      'd. Nhỏ hơn 0,02 mm',
    ],
    correct: 2
  },
  {
    question: 'Mẫu đất đá nguyên trạng là mẫu đất đá khi lấy lên bảo đảm các yêu cầu sau:',
    options: [
      'a. Mẫu vẫn giữ nguyên được thành phần và trạng thái của đất đá',
      'b. Mẫu vẫn giữ nguyên được độ ẩm; trạng thái và thành phần của đất đá',
      'c. Mẫu vẫn giữ nguyên được thành phần và kết cấu của đất đá',
      'd. Mẫu vẫn giữ nguyên được kết cấu, thành phần, trạng thái và các tính chất như trong thiên nhiên (không kể sự thay đổi trạng thái ứng suất)',
    ],
    correct: 3
  },
  {
    question: 'Yêu cầu khi lấy mẫu nguyên trạng vào hộp đựng cần phải thực hiện những nội dung công việc gì:',
    options: [
      'a. Đậy nắp hai đầu ống mẫu và dán một thẻ mẫu bên ngoài, sau đó bọc kín bằng vật liệu cách li',
      'b. Đặt một thẻ mẫu lên đầu trên của mẫu và đậy nắp hộp mẫu, ngoài dán một thẻ mẫu khác có đánh dấu đầu trên của mẫu',
      'c. bọc kín mẫu bằng vật liệu cách li có quét parafin cách ẩm',
      'd. Phương án b và c',
    ],
    correct: 3
  },
  {
    question: 'Khi xếp mẫu nguyên trạng vào hòm cần phải thực hiện và tuân thủ các bước sau:',
    options: [
      'a. Đánh số hòm, ghi địa chỉ người gửi, người nhận, đánh các ký hiệu và ghi chú cần thiết để bảo vệ hòm mẫu.',
      'b. Xếp mẫu vào hòm phải chèn các khoảng trống giữa các mẫu bằng vỏ bào,… sao cho chặt khít',
      'c. Xếp mẫu vào hòm cách nhau 2-3 cm, cách thành hòm 3-4 cm, chèn chặt bằng vỏ bào,…, dưới mẫu để bảng thống kê mẫu,',
      'd. Phương án a và c',
    ],
    correct: 3
  },
  {
    question: 'Tại sao khi lấy mẫu nguyên trạng để thí nghiệm người ta lại phải quy định kích thước đường kính tối thiểu và chiều dài của mẫu:',
    options: [
      'a. Để thuận tiện cho công tác lấy mẫu, thí nghiệm và vận chuyển',
      'b. Tránh làm ảnh hưởng đến mẫu đất thí nghiệm bên trong, phù hợp với đường kính của thiết bị thí nghiệm',
      'c. Đủ khối lượng mẫu để thí nghiệm tất cả các chỉ tiêu theo yêu cầu',
      'd. Phương án b và c',
    ],
    correct: 3
  },
  {
    question: 'Người ta chia mức độ phức tạp của điều kiện địa chất công trình thành mấy cấp, cấp nào là phức tạp nhất:',
    options: [
      'a. 4 cấp, cấp 1 là cấp phức tạp nhất',
      'b. 3 cấp, cấp 3 là cấp phức tạp nhất',
      'c. 5 cấp, cấp 1 là cấp phức tạp nhất',
      'd. 2 cấp, cấp 2 là cấp phức tạp nhất',
    ],
    correct: 1
  },
  {
    question: 'Độ ẩm giới hạn dẻo của đất loại sét có kết cấu bị phá hủy là độ ẩm của đất khi chuyển trạng thái từ:',
    options: [
      'a. Cứng sang nửa cứng',
      'b. Dẻo cứng sang chảy',
      'c. Cứng sang dẻo',
      'd. Dẻo sang dẻo mềm',
    ],
    correct: 2
  },
  {
    question: 'Độ ẩm giới hạn chảy của đất loại sét có kết cấu bị phá hủy là độ ẩm của đất khi chuyển trạng thái từ:',
    options: [
      'a. cứng sang dẻo',
      'b. dẻo sang chảy',
      'c. dẻo cứng sang dẻo',
      'd. dẻo sang dẻo mềm',
    ],
    correct: 1
  },
  {
    question: 'Trong các chỉ tiêu sau, chỉ tiêu nào được sử dụng để phân loại và gọi tên đất loại sét:',
    options: [
      'a. Giới hạn chảy (WL)',
      'b. Độ sệt (B)',
      'c. Chỉ số dẻo (Ip)',
      'd. Giới hạn dẻo (Wp)',
    ],
    correct: 2
  },
  {
    question: 'Trong các chỉ tiêu sau, chỉ tiêu nào được sử dụng để đánh giá trạng thái của đất loại sét:',
    options: [
      'a. Giới hạn chảy (WL)',
      'b. Độ sệt (B)',
      'c. Chỉ số dẻo (Ip)',
      'd. Giới hạn dẻo (Wp)',
    ],
    correct: 1
  },
  {
    question: 'Khi chọn phương pháp khoan khảo sát địa chất công trình cần phải đáp ứng được các yêu cầu chủ yếu nào:',
    options: [
      'a. Năng suất khoan cao, hao phí vật tư ít và tiến độ nhanh; đảm bảo yêu cầu kỹ thuật và an toàn lao động',
      'b. Đạt tiến độ nhanh, năng suất khoan cao, chi phí vật tư thấp; đảm bảo yêu cầu kỹ thuật',
      'c. Xác định chính xác địa tầng, lấy được các loại mẫu và cho phép thí nghiệm trong hố khoan',
      'd. Phương án a và c',
    ],
    correct: 3
  },
  {
    question: 'Trong quá trình khoan, những trường hợp nào phải tiến hành gia cố thành lỗ khoan bằng ống chống:',
    options: [
      'a. Khi khoan vào đất đá bở rời dung dịch sét không đủ khả năng bảo vệ thành lỗ khoan',
      'b. Cần ngăn cách các tầng chứa nước, nghiên cứu tính nứt nẻ và tính thấm bằng thí nghiệm ngoài trời',
      'c. Khi khoan gặp các hang hốc hoặc khe nứt lớn gây mất dung dịch quá nhiều',
      'd. Cả ba phương án a, b, c',
    ],
    correct: 3
  },
  {
    question: 'Mẫu lưu được lấy trong quá trình khoan khảo sát địa chất công trình được sử dụng để giải quyết nhiệm vụ gì:',
    options: [
      'a. Để làm mẫu không nguyên trạng thí nghiệm các chỉ tiêu vật lý của đất',
      'b. Để làm căn cứ nghiệm thu công tác khoan ngoài thực địa và kiểm tra khi cần thiết',
      'c. Đối chiếu khi chỉnh lý tài liệu, làm căn cứ nghiệm thu thực địa và kiểm tra khi cần thiết',
      'd. Sử dụng để đối chiếu khi chỉnh lý tài liệu và kiểm tra khi cần thiết',
    ],
    correct: 2
  },
  {
    question: 'Tất cả các lỗ khoan sau khi khoan xong đều phải được thực hiện công tác nghiệm thu gồm các nội dung sau:',
    options: [
      'a. Nghiệm thu theo các nhiệm vụ kỹ thuật đã được quy định trong phương án kỹ thuật khoan',
      'b. Nghiệm thu vị trí, cao độ và độ sâu khoan, các loại mẫu lấy, sổ kỹ thuật và các văn bản khác',
      'c. Các nhiệm vụ kỹ thuật đã được quy định trong phương án kỹ thuật, nội dung ghi chép nhật ký',
      'd. Phương án b và c',
    ],
    correct: 3
  },
  {
    question: 'Những nội dung công việc cần thực hiện trước khi tiến hành lấy mẫu nước trong hố khoan:',
    options: [
      'a. Lắp đặt nhiệt kế ngay trong chai mẫu để đo nhiệt độ nước; đo nhiệt độ không khí tại thời điểm lấy mẫu',
      'b. Rửa sạch, lắp ráp và kiểm tra sự hoạt động của dụng cụ lấy mẫu',
      'c. Thả dụng cụ lấy mẫu nước vào lỗ khoan để lấy nước và tráng dụng cụ lấy mẫu',
      'd. Cả ba phương án a, b,',
    ],
    correct: 3
  },
  {
    question: 'Kết quả thí nghiệm xuyên tĩnh cho phép giải quyết các nhiệm vụ gì của công tác khảo sát địa chất công trình:',
    options: [
      'a. Phân chia địa tầng và đánh giá được mức độ đồng nhất của đất đá',
      'b. Xác định được độ chặt của đất loại cát',
      'c. Xác định một số đặc trưng cơ lý của đất và kết hợp với tài liệu khác để phân loại đất, sử dụng để thiết kế móng nông và xác định sức chịu tải của cọc',
      'd. Cả ba phương án a, b,',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp thí nghiệm đổ nước trong hố đào của A. K. Bôndưrep sử dụng mấy vòng chắn bằng thép để đổ nước:',
    options: [
      'a. Không sử dụng vòng chắn thép mà đổ thẳng vào hố đào',
      'b. Sử dụng hai vòng thép đặt đồng tâm và đổ nước vào vòng trong và phần vành khuyên giữa hai vòng',
      'c. Sử dụng một vòng thép để đổ nước vào trong',
      'd. Sử dụng hai vòng thép đặt đồng tâm nhưng chỉ đổ nước vào phần vành khuyên giữa hai vòng',
    ],
    correct: 2
  },
  {
    question: 'Phương pháp thí nghiệm đổ nước trong hố đào của N.X. Netxterop sử dụng mấy vòng chắn bằng thép để đổ nước:',
    options: [
      'a. Sử dụng hai vòng thép đặt đồng tâm và đổ nước vào vòng trong và phần vành khuyên giữa hai vòng',
      'b. Không sử dụng vòng chắn thép mà đổ thẳng vào hố đào',
      'c. Sử dụng một vòng thép để đổ nước vào trong',
      'd. Sử dụng hai vòng thép đặt đồng tâm nhưng chỉ đổ nước vào phần vành khuyên giữa hai vòng',
    ],
    correct: 0
  },
];
