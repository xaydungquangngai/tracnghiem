const questions = [
  {
    question: 'Khoảng cách giữa các cọc đóng trong bệ móng mố/trụ cầu quy định tối thiểu là bao nhiêu?',
    options: [
      'a. Không nhỏ hơn 750mm hoặc 2,0 lần đường kính cọc',
      'b. Không nhỏ hơn 750mm hoặc 2,5 lần đường kính cọc',
      'c. Không nhỏ hơn 750mm hoặc 3 lần đường kính cọc',
      'd. Không nhỏ hơn 500mm hoặc 4 lần đường kính cọc',
    ],
    correct: 1
  },
  {
    question: 'Hệ số sức kháng bên và mũi theo đất nền của cọc khoan nhồi trong đất cát tương ứng là?',
    options: [
      'a. 0,55 và 0,55',
      'b. 0,45 và 0,4',
      'c. 0,55 và 0,5',
      'd. 0,45 và 0,45',
    ],
    correct: 2
  },
  {
    question: 'Khi nào cần tính toán bệ móng trụ/ mố và kết cấu khác theo mô hình chống và giằng?',
    options: [
      'a. Khi khoảng cách giữa các điểm đặt lực và các phản lực gối nhỏ hơn 2,2 lần bề dày cấu kiện;',
      'b. Khi khoảng cách giữa các điểm đặt lực và các phản lực gối nhỏ hơn 2 lần bề dày cấu kiện;',
      'c. Khi khoảng cách giữa các điểm đặt lực và các phản lực gối nhỏ hơn 2,5 lần bề dày cấu kiện;',
      'd. Tùy người tính toán quyết định.',
    ],
    correct: 1
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
    question: 'Chiều cao của khổ giới hạn trong hầm đường bộ là bao nhiêu?',
    options: [
      'a. 4750mm',
      'b. 4800mm',
      'c. 4900mm',
      'd. 5000mm',
    ],
    correct: 3
  },
  {
    question: 'Tải trọng tính mỏi theo tiêu chuẩn TCVN 11823-2017 là một xe tải thiết kế (hoặc các trục của nó) với một khoảng không đổi giữa các trục 145KN tương ứng bao nhiêu (mm)?',
    options: [
      'a. 10000mm',
      'b. 9500mm',
      'c. 9000mm',
      'd. 8500mm',
    ],
    correct: 2
  },
  {
    question: 'Đối với tường chắn và tường mố thông thường phải bố trí khe co giãn theo khoảng cách nào (mm)?',
    options: [
      'a. 28000mm',
      'b. 27000mm',
      'c. 26000mm',
      'd. 25000mm',
    ],
    correct: 1
  },
  {
    question: 'Điểm dừng mối nối thi công dầm liên tục nhiều nhịp chiều cao dầm không thay đổi cách vị trí trụ bao nhiêu?',
    options: [
      'a. 0.15 L - L là chiều dài nhịp',
      'b. 0.2 L - L là chiều dài nhịp',
      'c. 0.25 L - L là chiều dài nhịp',
      'd. 0.3 L - L là chiều dài nhịp',
    ],
    correct: 1
  },
  {
    question: 'Lớp bê tông bảo vệ đối với cốt thép chủ không lớp phủ bảo vệ vùng đúc áp vào đất và vùng bờ biển tương ứng là (mm)?',
    options: [
      'a. 50 và 75',
      'b. 75 và 50',
      'c. 75 và 75',
      'd. 50 và 50',
    ],
    correct: 2
  },
  {
    question: 'Đối với cấu kiện BTCT thường không cần khống chế nứt bằng phân bố cốt thép khi ứng suất kéo trong mặt cắt không vượt qua bao nhiêu % cường độ chịu kéo khi uốn của bê tông?',
    options: [
      'a. 70%',
      'b. 75%',
      'c. 80%',
      'd. 85%',
    ],
    correct: 2
  },
  {
    question: 'Đối với DƯL căng sau, giới hạn ứng suất cho bó thép dự ứng lực tại các neo và các bộ nối cáp ngay sau khi đóng neo tao thép có độ tự chùng thấp là bao nhiêu?',
    options: [
      'a. 0.74 fpu',
      'b. 0.70 fpu',
      'c. 0.60 fpu',
      'd. 0.45 fpu',
    ],
    correct: 1
  },
  {
    question: 'Với cầu chéo có góc xiên vượt quá 25 độ, khi thiết kế bản mặt cầu bê tông cốt thép cần phải quan tâm điều gì ?',
    options: [
      'a. Tĩnh không ngang dưới cầu',
      'b. Thoát nước mặt cầu',
      'c. Bố trí và tính toán cốt thép bản mặt cầu',
      'd. Như cầu thông thường',
    ],
    correct: 2
  },
  {
    question: 'Đối với cọc khoan nhồi, cự ly tĩnh giữa các thanh cốt thép song song theo chiều dọc không nhỏ hơn giá trị nào?',
    options: [
      'a. 3 lần giá trị kích thước trung bình của cốt liệu lớn nhất hoặc 125mm;',
      'b. 4 lần giá trị kích thước trung bình của cốt liệu lớn nhất hoặc 125mm;',
      'c. 5 lần giá trị kích thước trung bình của cốt liệu lớn nhất hoặc 125mm;',
      'd. 6 lần giá trị kích thước trung bình của cốt liệu lớn nhất hoặc 125mm;',
    ],
    correct: 2
  },
  {
    question: 'Hầm đường bộ, hầm đường sắt có chiều dài từ 1000 m trở lên thì phải:',
    options: [
      'a. thẩm duyệt thiết kế về phòng cháy và chữa cháy;',
      'b. Khoảng cách giữa 2 lối thoát nạn dọc theo chiều dài hầm không lớn hơn 300 m;',
      'c. Phải có ít nhất 02 phương án phát hiện cháy độc lập;',
      'd. Cả a, b, c',
    ],
    correct: 3
  },
  {
    question: 'Để xác định hiệu ứng do tải trọng thường xuyên DC tác dụng lên cầu dầm liên tục thi công theo phương pháp đúc hẫng cân bằng ta chất tải trọng này lên sơ đồ tính toán nào của kết cấu nhịp ?',
    options: [
      'a. Sơ đồ dầm liên tục.',
      'b. Sơ đồ dầm giản đơn mút thừa.',
      'c. Sơ đồ đúc hẫng cân bằng.',
      'd. Sơ đồ kết cấu nhịp trước khi thực hiện đốt hợp long cuối cùng',
    ],
    correct: 3
  },
  {
    question: 'Hãy cho biết cách tính hệ số phân bố ngang của cầu dầm và cầu bản đặt chéo một góc θ so với dòng chảy ?',
    options: [
      'a. Tính như cầu đặt thẳng nhưng khoảng cách s giữa các dầm lấy bằng s/cosθ.',
      'b. Tính như đối với cầu đặt thẳng sau đó nhân với hệ số điều chỉnh c1.',
      'c. Tính như đối với cầu thẳng sau đó nhân với hệ số điều chỉnh tgθ/c1.',
      'd. Tính như đối với cầu thẳng sau đó nhân với hệ số điều chỉnh 1-c1(tgθ)3/2',
    ],
    correct: 3
  },
  {
    question: 'Hãy giải thích tại sao tỷ lệ giữa chiều dài nhịp biên và chiều dài nhịp chính trong cầu dầm liên tục thi công theo công nghệ đúc hẫng cân bằng lại không lấy theo tỷ lệ hợp lý đối với dầm liên tục là 0,8 ?',
    options: [
      'a. Để giảm chiều dài đoạn dầm đúc trên đà giáo cố định.',
      'b. Để giảm phản lực gối lên mố hoặc trụ biên.',
      'c. Để không xuất hiện mô men âm ở mặt cắt giữa nhịp chính.',
      'd. Để sơ đồ làm việc của kết cấu nhịp gần với sơ đồ đúc hẫng.',
    ],
    correct: 2
  },
  {
    question: 'Hãy cho biết sơ đồ được áp dụng để phân tích nội lực hộp dầm cầu bê tông thi công phân đoạn làm việc theo phương ngang cầu ?',
    options: [
      'a. Tính theo sơ đồ bản kê hai cạnh.',
      'b. Tính theo sơ đồ dầm liên tục.',
      'c. Tính theo sơ đồ khung kín.',
      'd. Tính theo sơ đồ bản kê bốn cạnh.',
    ],
    correct: 2
  },
  {
    question: 'Xét ảnh hưởng của các tải trọng thi công đến nội lực tính toán của các dạng kết cấu nhịp cầu thi công theo phương pháp phân đoạn như thế nào ?',
    options: [
      'a. Chỉ xét đối với sơ đồ kết cấu nhịp trong giai đoạn thi công, không xét trong giai đoạn khai thác.',
      'b. Cộng tác dụng giai đoạn có sơ đồ thi công bất lợi nhất với hiệu ứng dỡ tải khi rút tải trọng thi công khỏi kết cấu nhịp.',
      'c. Không ảnh hưởng đến nội lực tính toán vì tải trọng thi công chỉ xuất hiện tạm thời.',
      'd. Xét với sơ đồ kết cấu nhịp trong giai đoạn thi công để kiểm tra, không cộng với hiệu ứng dỡ tải.',
    ],
    correct: 1
  },
  {
    question: 'Hãy cho biết nguyên lý của phương pháp địa chấn (Seismic Method) để thăm dò địa chất công trình trong khảo sát xây dựng đường hầm?',
    options: [
      'a. Tạo chấn động tại một điểm và đo thời gian truyền sóng tới các đầu thu (geophon) đặt trên mặt đất.',
      'b. Tạo chấn động tại một điểm và đo thời gian truyền sóng tới các đầu thu đặt dọc theo chiều sâu lỗ khoan xuyên qua các địa tầng.',
      'c. Tạo chấn động tại nhiều điểm dọc theo chiều sâu lỗ khoan xuyên qua các địa tầng và đo thời gian truyền sóng tới các đầu thu đặt ở những điểm tương ứng trong một lỗ khoan khác.',
      'd. Một trong ba biện pháp nêu trên',
    ],
    correct: 3
  },
  {
    question: 'Sự khác nhau giữa các loại neo đá sử dụng để chống đỡ đường hang trong đường hầm thi công theo phương pháp mỏ truyền thống và đường hầm thi công theo phương pháp công nghệ NATM?',
    options: [
      'a. Khác nhau về cấu tạo.',
      'b. Khác nhau về sơ đồ làm việc.',
      'c. Khác nhau về tuổi thọ.',
      'd. Khác nhau về vai trò của kết cấu.',
    ],
    correct: 3
  },
  {
    question: 'Hãy cho biết ý nghĩa thực tế các lời giải của Kirsch phương trình trạng thái ứng suất biến dạng của nền đất xung quanh hang đào trong môi trường liên tục đàn hồi?',
    options: [
      'a. Dùng để tính các ứng suất tác dụng lên kết cấu chống đỡ của đường hầm.',
      'b. Dùng để tính chuyển vị của hang đào.',
      'c. Dùng để tính các ứng suất chính trong đánh giá độ bền theo tiêu chuẩn Mohr-Coulomb hoặc Hoek-Brown.',
      'd. Dùng để tính toán độ ổn định của hang đào',
    ],
    correct: 2
  },
  {
    question: 'Tại sao trong công nghệ NATM lớp bê tông phun được yêu cầu phải mỏng và mềm?',
    options: [
      'a. Để thi công được nhanh chóng, kịp thời chống rơi lở cho vách hang.',
      'b. Lớp bê tông phun này chỉ là một lớp trát nên không cần dày để tiết kiệm chi phí.',
      'c. Để lớp này chuyển vị cùng với vách hang.',
      'd. Vì công nghệ phun không thể đắp dày được',
    ],
    correct: 2
  },
  {
    question: 'Xét tác dụng của lực căng các dây văng lên sự phân bố nội lực trong các bộ phận của kết cấu nhịp cầu dây văng như thế nào?',
    options: [
      'a. Đặt lực căng dây tại các nút liên kết dầm-dây của sơ đồ hoàn chỉnh.',
      'b. Lần lượt thay từng đôi dây bằng các lực căng vào sơ đồ hoàn chỉnh, sau đó cộng tác dụng.',
      'c. Lần lượt thay từng nhánh dây bằng lực căng vào sơ đồ hoàn chỉnh, sau đó cộng tác dụng.',
      'd. Tính theo trình tự lắp dây, thay từng nhánh dây bằng lực căng, sau đó cộng tác dụng.',
    ],
    correct: 3
  },
  {
    question: 'Lực nâng (hoặc ép xuống) của gió tác dụng lên cánh hẫng của dầm đúc hẫng trong giai đoạn thi công được tính như thế nào?',
    options: [
      'a. 1,25 kN/m2 x diện tích mặt cầu x sin 10o.',
      'b. 0,5 kN/m2 x diện tích mặt cầu x sin 10o.',
      'c. 2,4 x10-4 Mpa x diện tích mặt cầu.',
      'd. Tính theo tải trọng gió đứng điều 3.8.2 (22TCN-272-05)',
    ],
    correct: 2
  },
  {
    question: 'Hãy cho biết ý nghĩa cơ học của hệ số kiên cố theo Prô-tô-đia- cô- nốp fkp?',
    options: [
      'a. Là cường độ quy đổi của đá.',
      'b. Là hệ số ma sát quy đổi của nền.',
      'c. Là hệ số thực nghiệm đặc trưng cho áp lực địa tầng.',
      'd. Là hệ số thực nghiệm đặc trưng cho khả năng tự đứng vững của hang đào',
    ],
    correct: 1
  },
  {
    question: 'Hãy cho biết tác dụng của nền xung quanh vỏ hầm lắp ghép thi công theo phương pháp TBM dưới dạng tải trọng nào?',
    options: [
      'a. Áp lực bị động.',
      'b. Áp lực chủ động',
      'c. Vòm áp lực.',
      'd. Lực kháng đàn hồi.',
    ],
    correct: 2
  },
  {
    question: 'Thế nào là bản mặt cầu sườn hở, bản mặt cầu sườn kín?',
    options: [
      'a. Mặt cầu sườn hở là bản mặt cầu trực hướng có các sườn không liên tục, sườn kín là sườn liên tục trên suốt chiều rộng mặt cầu.',
      'b. Mặt cầu sườn hở có các sườn là thép bản hoặc chữ T, chữ L còn sườn kín có dạng chữ U, chữ V hoặc lượn sóng.',
      'c. Mặt cầu sườn hở có các sườn giao nhau nhưng không hàn với nhau, mặt cầu sườn kín hàn với nhau.',
      'd. Mặt cầu sườn hở là bản mặt cầu bằng thép mắt võng, mặt cầu sườn kín là mặt cầu bằng thép tấm.',
    ],
    correct: 1
  },
  {
    question: 'Có bao nhiêu giải pháp xử lý vùng mô men âm ở cầu dầm thép liên hợp bản bê tông cốt thép?',
    options: [
      'a. 2',
      'b. 3',
      'c. 4',
      'd. 5',
    ],
    correct: 3
  },
  {
    question: 'Hệ số làn xe m không được dùng cho những trường hợp nào?',
    options: [
      'a. Trạng thái giới hạn mỏi.',
      'b. Khi số làn chất tải là 2.',
      'c. Trạng thái mỏi và khi sử dụng hệ số phân bố ngang tính theo các công thức lập sẵn trong Tiêu chuẩn 22TCN 272-05.',
      'd. Khi sử dụng các phương pháp phân tích chính xác.',
    ],
    correct: 2
  },
  {
    question: 'Bản bê tông mặt cầu của cầu dầm thép liên hợp bản BTCT có chiều dày bằng 1/12 khoảng cách s giữa hai dầm chủ, khẩu độ tính toán L= 10s. Hãy cho biết chiều rộng hữu hiệu bản bê tông của dầm nằm bên trong kết cấu nhịp nhận giá trị nào trong trong số những đại lượng sau?',
    options: [
      'a. 12 lần chiều dày của bản cộng với ½ chiều rộng bản cánh dầm thép.',
      'b. Bằng khoảng cách s giữa các dầm.',
      'c. Bằng 1/4L.',
      'd. 12 lần chiều dày bản cộng với chiều rộng bản cánh dầm thép',
    ],
    correct: 1
  },
  {
    question: 'Những tải trọng theo phương dọc cầu tác dụng lên những trụ nằm trong phạm vi nhịp thông thuyền gồm những loại nào?',
    options: [
      'a. Lực hãm xe BR, lực ma sát F.R, gió WL+WS và lực va tầu CV.',
      'b. Lực hãm xe BR, lực ma sát, lực gió (dọc) WL+WS và 50% lực va tầu CV.',
      'c. Lực hãm xe BR, lực ma sát FR, gió WL+WS.',
      'd. Lực hãm xe BR và lực va tầu CV.',
    ],
    correct: 1
  },
  {
    question: 'Hãy cho biết nguyên lý xác định vị trí trục trung hòa của mặt cắt dầm BTCT hoặc bê tông ứng suất trước chịu uốn?',
    options: [
      'a. Xác định theo nguyên lý hình học tìm trọng tâm tiết diện nguyên của bê tông.',
      'b. Xác định theo nguyên lý hình học tìm trọng tâm tiết diện tính đổi từ cốt thép sang bê tông.',
      'c. Từ phương trình cân bằng các thành phần lực trong các loại cốt thép và hợp lực của khối ứng suất vùng bê tông chịu nén.',
      'd. Dựa vào tỷ lệ giữa chiều cao vùng chịu nén của bê tông và chiều cao có hiệu của tiết diện x/h0 ứng với hàm lượng cốt thép tối đa.',
    ],
    correct: 2
  },
  {
    question: 'Khả năng chống nứt của dầm bê tông chịu uốn được thiết kế dựa trên tiêu chí nào?',
    options: [
      'a. Khống chế ứng suất kéo trong bê tông đối với dầm BTCT thường.',
      'b. Không cho xuất hiện ứng suất kéo trong bê tông đối với dầm bê tông ứng suất trước.',
      'c. Khống chế ứng suất kéo trong cốt thép thường fsa ≤ 0,6fy.',
      'd. Khống chế độ mở rộng vết nứt.',
    ],
    correct: 2
  },
  {
    question: 'Để tính độ võng và độ vồng của dầm bê tông chịu uốn, độ cứng của dầm được xem xét như thế nào?',
    options: [
      'a. Độ cứng của của tiết diện nguyên: EcIg',
      'b. Độ cứng của tiết diện tính đổi:EcItd',
      'c. Độ cứng của tiết diện nguyên không đàn hồi: 0,85EcIg',
      'd. Độ cứng của mặt cắt có hiệu: EcIe (trong đó Ie ≤ Ig)',
    ],
    correct: 0
  },
  {
    question: 'Hãy cho biết tỷ lệ giữa chiều dài nhịp biên và chiều dài nhịp chính của cầu dầm liên tục thi công theo công nghệ đúc hẫng cân bằng?',
    options: [
      'a. 0,80',
      'b. 0,75',
      'c. 0,70',
      'd. 0,65',
    ],
    correct: 3
  },
  {
    question: 'Sức kháng cắt danh định của dầm bê tông cốt thép và bê tông ứng suất trước bao gồm những thành phần nào?',
    options: [
      'a. Sức kháng cắt của bê tông Vc, của cốt thép đai thường Vs và cốt thép đai dự ứng lực Vp.',
      'b. Sức kháng cắt của bê tông Vc, của cốt đai thường Vs và của cốt dự ứng lực kéo xiên Vp.',
      'c. Sức kháng cắt của bê tông Vc, của cốt đai thường nằm trong phạm vi vết nứt xiên góc θ0 và phân lực thẳng đứng của cốt thép dự ứng lực kéo xiên Vp',
      'd. Trị số nhỏ nhất của: Vc phụ thuộc β+Vs trong vết nứt xiên θ0 + Vp và Vc không phụ thuộc β + Vp',
    ],
    correct: 3
  },
  {
    question: 'Có thể khảo sát địa chất công trình theo một đề cương của phương pháp phân loại RMR và sử dụng các số liệu để tiến hành phân loại địa chất theo bất kỳ một phương pháp khác được không?',
    options: [
      'a. Không thể được.',
      'b. Có thể được.',
      'c. Sử dụng cho hầu hết các phương pháp phân loại khác.',
      'd. Sử dụng cho một số các phương pháp phân loại khác.',
    ],
    correct: 2
  },
  {
    question: 'Chiều sâu lỗ khoan khảo sát địa chất công trình đối với đường hầm là bao nhiêu?',
    options: [
      'a. Sâu hơn cao độ đáy hầm dự kiến và sâu vào tầng đá ổn định ít nhất là 15 lần đường kính lỗ khoan.',
      'b. Sâu hơn cao độ đáy hầm dự kiến và sâu vào tầng đá ổn định ít nhất là 5 m.',
      'c. Sâu hơn cao độ đáy hầm dự kiến và sâu vào tầng đá ổn định ít nhất là 6 m.',
      'd. Sâu hơn cao độ đáy hầm dự kiến và sâu vào tầng đá ổn định ít nhất là 5 lần khoảng cách khe nứt khảo sát được.',
    ],
    correct: 1
  },
  {
    question: 'Hãy cho biết nguyên tắc chọn hướng ưu tiên khi chọn tuyến cho đường hầm xuyên núi là gì?',
    options: [
      'a. Tim hầm chạy song song với đường phương.',
      'b. Tim hầm cắt vuông góc với đường phương.',
      'c. Ưu tiên cho việc chọn vị trí hai cửa hầm.',
      'd. Ưu tiên cho vị trí khống chế của tuyến đường',
    ],
    correct: 1
  },
  {
    question: 'Hầm có chiều dài 1500m, cao độ điểm khống chế ở hai phía của hầm khác nhau. Hãy cho biết dạng trắc dọc của đường hầm như thế nào thì hợp lý?',
    options: [
      'a. Một hướng dốc, nối cao độ của hai cửa.',
      'b. Hai hướng dốc, điểm đổi dốc nằm ở giữa hầm.',
      'c. Hai hướng dốc, điểm đổi dốc nằm lệch về phía cửa hầm cao hơn.',
      'd. Hai hướng dốc, có đoạn nằm ngang nằm giữa hai hướng dốc',
    ],
    correct: 3
  },
  {
    question: 'Hệ thống chống thấm cho vỏ hầm lắp ghép của đường tầu điện ngầm thuộc dạng nào trong những loại kể tên sau:',
    options: [
      'a. Chống thấm thoát nước.',
      'b. Chống thấm không tháo nước.',
      'c. Chống thấm bị động.',
      'd. Chống thấm bằng lớp vỏ bọc kín',
    ],
    correct: 1
  },
  {
    question: 'Hãy giải thích tại sao trong các đường hầm thi công theo phương pháp mỏ truyền thống không áp dụng được biện pháp che phủ bằng lớp vải nhựa để chống thấm?',
    options: [
      'a. Vì vách hang đào không được làm nhẵn bằng lớp bê tông phun.',
      'b. Có thể nhưng người ta không áp dụng.',
      'c. Vì trong phương pháp mỏ truyền thống, vỏ hầm được đổ bê tông theo từng phần.',
      'd. Vì lớp vỏ bê tông được thiết kế dày đảm bảo chống thấm và chống dột',
    ],
    correct: 2
  },
  {
    question: 'Hãy cho biết cửa hầm có tường chắn được áp dụng trong những trường hợp nào?',
    options: [
      'a. Hầm đường sắt.',
      'b. Khẩu độ nền đào phía trước cửa hầm hẹp.',
      'c. Khả năng sụt trượt của các ta luy nền đào cửa hầm lớn',
      'd. Đường hầm thi công theo phương pháp mỏ truyền thống',
    ],
    correct: 2
  },
  {
    question: 'Chiều cao của khổ giới hạn trong hầm đường bộ là bao nhiêu?',
    options: [
      'a. 4750 mm',
      'b. 4800mm',
      'c. 4900mm',
      'd. 5000mm',
    ],
    correct: 3
  },
  {
    question: 'Cao của khổ giới hạn trong hầm đường sắt khổ đường tiêu chuẩn 1435mm đầu máy Diezel là bao nhiêu?',
    options: [
      'a. 5000mm',
      'b. 5500mm',
      'c. 6500mm',
      'd. 6550mm',
    ],
    correct: 3
  },
  {
    question: 'Tại sao vỏ hầm của đường hầm thi công theo phương pháp công nghệ NATM thường có chiều dày không đổi?',
    options: [
      'a. Nội lực trên các mặt cắt dọc theo chu vi vỏ hầm như nhau.',
      'b. Vì mục đích để cho đường tim của kết cấu vỏ hầm luôn cùng dạng với đường cong khuôn hầm.',
      'c. Vì chiều dày vỏ hầm được chọn là nhỏ nhất theo cấu tạo.',
      'd. Để dễ kiểm soát trong quá trình thi công',
    ],
    correct: 2
  },
  {
    question: 'Bằng cách nào người ta kiểm soát được thời điểm đưa kết cấu vỏ hầm vào tham gia chịu lực?',
    options: [
      'a. Căn cứ vào đường cong Fenner-Pacher.',
      'b. Căn cứ vào tuổi của bê tông cho phép thời điểm dỡ ván khuôn.',
      'c. Căn cứ vào độ hội tụ của vách hang thông qua kết quả quan trắc liên tục chuyển vị của vách hang.',
      'd. Căn cứ vào kinh nghiệm thi công của hàng loạt các công trình',
    ],
    correct: 2
  },
  {
    question: 'Neo đá (Rock bolt) khác neo đất (Ground anchor) ở điểm nào?',
    options: [
      'a. Neo đá dùng để chống đỡ hang đào, neo đất dùng để gia cố chống vách.',
      'b. Neo đá có hiệu ứng tạo dầm và cài khóa còn neo đất thì không.',
      'c. Không có sự phân biệt dùng trong đá gọi là neo đá, dùng trong đất gọi là neo đất.',
      'd. Neo đá bố trí vuông góc với bề mặt gia cố còn neo đất bố trí xiên góc với bề mặt.',
    ],
    correct: 1
  },
  {
    question: 'Tác dụng của neo dự ứng lực sử dụng trong xây dựng đường hầm.',
    options: [
      'a. Tương tự như thanh neo là treo giữ khối lở rời nhưng sử dụng được thép cường độ cao.',
      'b. Tăng khả năng chống trượt cho khối lăng thể trượt',
      'c. Dễ thực hiện trong không gian có kích thước hạn chế.',
      'd. Sử dụng vật tư phổ biến dễ khai thác đó là cáp tao xoắn 7 sợi',
    ],
    correct: 1
  },
  {
    question: 'Sự khác nhau giữa bê tông phun khô và bê tông phun ướt?',
    options: [
      'a. Tỷ lệ nước/xi măng khác nhau.',
      'b. Tỷ lệ hao hụt vữa do rơi rụng khi phun.',
      'c. Loại vữa khi ra khỏi đầu phun.',
      'd. Mức độ gây bụi giữa hai biện pháp',
    ],
    correct: 2
  },
  {
    question: 'Mục đích của việc tính các mất mát ứng suất trước trong trong cốt thép dự ứng lực.',
    options: [
      'a. Để xác định lực căng kéo cốt thép và các hiệu ứng do căng kéo.',
      'b. Để xác định ứng suất có hiệu tác dụng lên bê tông.',
      'c. Để xác định ứng suất kéo trong cốt thép ứng suất trước.',
      'd. Để xác định sức kháng uốn của dầm.',
    ],
    correct: 0
  },
  {
    question: 'Mất mát ứng suất tức thời là những dạng mất mát nào?',
    options: [
      'a. Là những mất mát ứng suất xảy ra ngay tại thời điểm căng kéo.',
      'b. Là những mất mát xảy ra sau thời điểm căng kéo',
      'c. Là những mất mát xảy ra ngay tại thời điểm truyền lực căng lên bê tông.',
      'd. Là những mất mát xảy ra ngay sau thời điểm truyền lực căng lên bê tông.',
    ],
    correct: 3
  },
  {
    question: 'Ảnh hưởng của hiện tượng co ngót và từ biến đến ứng xử của dầm bê tông dự ứng lực được xét đến trong thiết kế như thế nào?',
    options: [
      'a. Tính các mất mát ứng suất trước.',
      'b. Tính các mất mát ứng suất và độ võng tĩnh của dầm.',
      'c. Tính các mất mát ứng suất và phân phối lại nội lực trong dầm.',
      'd. Không gây ảnh hưởng đến dầm vì là hệ tĩnh định.',
    ],
    correct: 1
  },
  {
    question: 'Trường hợp nào sức kháng uốn danh định của dầm thép liên hợp lấy bằng mô men dẻo Mp.',
    options: [
      'a. Tiết diện dầm thép đáp ứng yêu cầu mặt cắt đặc chắc.',
      'b. Bản bụng đặc chắc, bản cánh chịu nén được giằng liên kết và kích thước dầm đảm bảo tỷ lệ Dp/D’ ≤1.',
      'c. Bản bụng đặc chắc và kích thước dầm đảm bảo tỷ lệ Dp/D’ ≤1.',
      'd. Bản bụng và bản cánh chịu nén đặc chắc,bản cánh chịu nén được giằng liên kết, kích thước dầm đảm bảo tỷ lệ Dp/D’ ≤ 1',
    ],
    correct: 2
  },
  {
    question: 'Hãy cho biết nguyên lý tính mô men chảy My và mô men dẻo Mp giống nhau hay khác nhau?',
    options: [
      'a. Giống nhau vì đều là tổng các mô men tác dụng riêng lẻ của các phần so với trục trung hòa.',
      'b. Khác nhau vì My = Fy*Sn còn Mp = ƩPidi',
      'c. Khác nhau vì My = MDC + MDW + MAD còn Mp = ƩPidi',
      'd. Giống nhau vì cả hai loại mô men đều tính theo ba thành phần M = MDC + MDW + ƩPidi, chỉ khác nhau ở vị trí trục trung hòa.',
    ],
    correct: 2
  },
  {
    question: 'Các neo đinh liên kết trong dầm liên hợp được bố trí như thế nào trên mặt dầm thép?',
    options: [
      'a. Bố trí thành hai hàng và theo từng nhóm, khoảng cách đinh trong nhóm bằng6 lần đường kính đinh.',
      'b. Bố trí thành hai hàng chạy suốt chiều dài dầm theo bước đinh đều nhau bằng chiều dài dầm/số lượng đinh n.',
      'c. Bố trí thành hai hàng chạy suốt chiều dài dầm, bước đinh bố trí giảm dần từ giữa nhịp về hai phía đầu dầm theo giá trị lực cắt mỏi.',
      'd. Bố trí thành hai hàng chạy suốt chiều dài dầm theo bước đinh ≤ 600mm.',
    ],
    correct: 1
  },
  {
    question: 'Sức kháng cắt của dầm thép liên hợp bản bê tông cốt thép bao gồm những thành phần nào?',
    options: [
      'a. Sức kháng cắt của tiết diện dầm thép và sức kháng cắt của cốt thép bản mặt cầu.',
      'b. Sức kháng cắt của dầm thép không xét bản bê tông.',
      'c. Sức kháng cắt của bản bụng dầm thép.',
      'd. Sức kháng cắt của bản bụng được tăng cường,',
    ],
    correct: 2
  },
  {
    question: 'Sức kháng kéo của các thanh trong giàn thép được lấy theo tiết diện nào?',
    options: [
      'a. Tiết diện nguyên kéo chảy.',
      'b. Tiết diện thực kéo đứt.',
      'c. Tiết diện thực kéo đứt nhân với hệ số triết giảm',
      'd. Giá trị nhỏ hơn giữa hai cách tính: tiết diện nguyên kéo chảy và tiết diện thực kéo đứt nhân với hệ số triết giảm',
    ],
    correct: 3
  },
  {
    question: 'Hãy cho biết đặc điểm của tải trọng để tính mỏi trong cầu thép?',
    options: [
      'a. Hoạt tải lấy bằng 0,75 hoạt tải tiêu chuẩn.',
      'b. Cự li giữa hai trục bánh sau của xe tải thiết kế lấy bằng 9000mm.',
      'c. Khi tính mỏi cho bản bụng hoạt tải lấy bằng 1,5 hoạt tải tiêu chuẩn.',
      'd. Chỉ xét hoạt tải LL (1+IM) với hệ số tải trọng 0,75 và cự li trục bánh nặng 9,0m đồng thời có xét lưu lượng xe tải/ngày.',
    ],
    correct: 3
  },
  {
    question: 'Sức kháng của bu lông cường độ cao trong liên kết thép được xét như thế nào?',
    options: [
      'a. Tính theo sức kháng cắt',
      'b. Tính theo sức kháng trượt do ma',
      'c. Tính theo sức kháng kéo',
      'd. Tính theo sức kháng ép mặt.',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế cầu nhỏ, cống phải căn cứ vào lưu lượng được tính toán với tần suất quy định tùy vào cấp đường. Với đường cấp I, II tần suất tính toán là bao nhiêu?',
    options: [
      'a. Tần suất 1%',
      'b. Tần suất 2%',
      'c. Tần suất 4%',
      'd. Tần suất 5%',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế cầu nhỏ, cống phải căn cứ vào lưu lượng được tính toán với tần suất quy định tùy vào cấp đường. Với đường cấp III đến VI tần suất tính toán là bao nhiêu?',
    options: [
      'a. Tần suất 1%',
      'b. Tần suất 2%',
      'c. Tần suất 4%',
      'd. Tần suất 5%',
    ],
    correct: 2
  },
  {
    question: 'Khi thiết kế khẩu độ cầu phải căn cứ vào lưu lượng được tính toán với tần suất quy định tùy vào loại cầu. Với cầu lớn, cầu trung tần suất tính toán là bao nhiêu?',
    options: [
      'a. Tần suất 1%',
      'b. Tần suất 2%',
      'c. Tần suất 4%',
      'd. Tần suất 5%',
    ],
    correct: 0
  },
  {
    question: 'Để dẫn hướng xe chạy an toàn thì tại những vị trí có ta luy âm lớn hơn giá trị quy định, đường cong bán kính nhỏ, đường dẫn lên cầu phải bố trí cọc tiêu. Theo quy định chiều cao bao nhiêu phải bố trí cọc tiêu?',
    options: [
      'a. Khi chiều cao ta luy từ 1,0 m',
      'b. Khi chiều cao ta luy từ 1,5 m',
      'c. Khi chiều cao ta luy từ 2,0 m',
      'd. Khi chiều cao ta luy từ 2,5 m',
    ],
    correct: 2
  },
  {
    question: 'Để đảm bảo an toàn xe chạy thì tại những vị trí nền đường đắp cao lớn hơn giá trị quy định, đường dẫn lên cầu, cầu cạn... phải bố trí lan can phòng hộ. Theo quy định chiều cao bao nhiêu phải bố trí lan can phòng hộ?',
    options: [
      'a. Khi chiều cao hơn 2,0 m',
      'b. Khi chiều cao hơn 3,0 m',
      'c. Khi chiều cao hơn 4,0 m',
      'd. Khi chiều cao hơn 5,0 m',
    ],
    correct: 2
  },
  {
    question: 'Để phân loại một khu vực cấu trúc địa chất nào đó theo RMR (Rock Macc Rating) người ta phải khảo sát bao nhiêu loại thông số địa chất?',
    options: [
      'a. 5',
      'b. 6',
      'c. 7',
      'd. 8',
    ],
    correct: 1
  },
  {
    question: 'Hệ số kiên cố theo Prô-tô-đia- cô- nốp fkp được sử dụng trong ngành xây dựng đường hầm như thế nào?',
    options: [
      'a. Chỉ sử dụng trong phương pháp mỏ truyền thống.',
      'b. Sử dụng để chọn vị trí cửa hầm và khoảng cách giữa hai hầm đơn song song.',
      'c. Chỉ sử dụng trong Tiêu chuẩn thiết kế TCVN4527-88.',
      'd. Khi phương pháp công nghệ NATM trở thành phổ biến không nên quan tâm đến khái niệm này nữa.',
    ],
    correct: 1
  },
  {
    question: 'Vì sao các tính toán trong thiết kế đường hầm thi công theo công nghệ NATM lại dựa trên phương pháp phân loại địa chất RMR?',
    options: [
      'a. Phương pháp RMR cung cấp biểu đồ Bienniawcki quan hệ giữa RMR và thời gian tự đứng vững.',
      'b. Do thông qua chỉ số RMR có thể tính được áp lực pa tác dụng lên kết cấu chống đỡ.',
      'c. Phương pháp RMR chỉ dẫn cách chọn chiều dày lớp bê tông phun và khoảng cách neo.',
      'd. Phương pháp RMR cung cấp cách chọn sơ bộ chiều dày lớp bê tông vỏ hầm.',
    ],
    correct: 0
  },
  {
    question: 'Công cụ dùng để biểu diễn hệ thống khe nứt của khối đá trong báo cáo khảo sát địa chất công trình khu vực đường hầm là gì?',
    options: [
      'a. Đồ thị hoa hồng',
      'b. Đồ thị Xavarenxki',
      'c. Đồ thị vòng tròn lớn',
      'd. Một trong ba loại trên',
    ],
    correct: 3
  },
  {
    question: 'Vì sao nói chỉ số RQD được sử dụng phổ biến trong nghiên cứu địa chất của khối đá?',
    options: [
      'a. Vì RQD đặc trưng cho tính chất nứt nẻ của khối đá.',
      'b. Vì thông qua RQD để đánh giá độ bền của khối đá.',
      'c. Vì sử dụng RQD để phân loại địa chất khối đá.',
      'd. Vì người ta sử dụng chỉ số này trong hầu hết các phương pháp phân loại địa chất khối đá.',
    ],
    correct: 3
  },
  {
    question: 'Đường cong Fenner-Pacher phản ánh mối quan hệ nào sau đây?',
    options: [
      'a. Giữa áp lực lên biên hạng và chuyển vị vách hang đào.',
      'b. Giữa tỷ lệ áp lực sau giải phóng ứng suất tác dụng lên kết cấu chống đỡ và chuyển vị vách hang đào.',
      'c. Giữa áp lực tác dụng lên kết cấu chống đỡ và chuyển vị vách hang đào.',
      'd. Giữa áp lực tác dụng lên kết cấu và biến dạng tương đối của vách hang đào',
    ],
    correct: 1
  },
  {
    question: 'Hãy cho biết biện pháp xác định áp lực từ biên hạng tác dụng lên kết cấu chống đỡ trong thiết kế đường hầm thi công theo công nghệ NATM.',
    options: [
      'a. Từ công thức của Fenner-Labasse.',
      'b. Từ công thức thực nghiệm của phương pháp phân loại địa chất RMR.',
      'c. Từ đường cong Fenner-Pacher',
      'd. Từ đường cong quan hệ Pa-U.',
    ],
    correct: 3
  },
  {
    question: 'Hãy cho biết tải trọng do đất đá tác dụng lên kết cấu vỏ hầm bê tông theo quan điểm của phương pháp công nghệ NATM.',
    options: [
      'a. Tải trọng này bằng không vì đã do kết cấu neo và bê tông phun chịu hết tác dụng của đất đá xung quanh hang đào.',
      'b. Tải trọng này bằng không vì áp lực hướng tâm tại bề mặt vách hang đào luôn bằng không.',
      'c. Tải trọng này bằng không vì đã giải phóng hết để cho vành đất đá mang tải xung quanh hang đào chịu.',
      'd. Là phần còn lại của áp lực hướng tâm tác dụng lên biên hạng sau giải phóng ứng suất',
    ],
    correct: 3
  },
  {
    question: 'Trong điều kiện địa chất bình thường, chiều dày của lớp bê tông vỏ hầm thi công theo phương pháp công nghệ NATM được lựa chọn dựa trên căn cứ nào?',
    options: [
      'a. Theo yêu cầu cấu tạo',
      'b. Theo yêu cầu chịu lực',
      'c. Theo cấu tạo, có kiểm toán đảm bảo yêu cầu chịu lực.',
      'd. Theo công thức kinh nghiệm',
    ],
    correct: 2
  },
  {
    question: 'Rãnh dọc trong đường hầm xuyên núi có sử dụng lớp chống thấm được bố trí để thoát nước ngầm hay thoát nước mặt?',
    options: [
      'a. Thoát nước ngầm là chính.',
      'b. Thoát nước mặt là chính vì nước ngầm đã được chống thấm.',
      'c. Đồng thời thoát cả nước ngầm và nước mặt.',
      'd. Có hai hệ thống rãnh dọc riêng cho thoát nước ngầm và cho nước mặt.',
    ],
    correct: 3
  },
  {
    question: 'Hãy phân biệt hai khái niệm khổ giới hạn trong đường hầm và tĩnh không hầm.',
    options: [
      'a. Là một khái niệm, khác nhau về cách gọi tên.',
      'b. Là hai khái niệm khác nhau.',
      'c. Tĩnh không là những kích thước chính của khổ giới hạn.',
      'd. Tĩnh không trong hầm là khổ giới hạn trên đường cộng với những khoảng mở rộng cần thiết',
    ],
    correct: 3
  },
  {
    question: 'Kết cấu vỏ hầm của đường hầm xuyên núi có bao nhiêu dạng mặt cắt?',
    options: [
      'a. 4',
      'b. 5',
      'c. 6',
      'd. 7',
    ],
    correct: 2
  },
  {
    question: 'Một bước quan trọng trong trong thiết kế đường hầm là xây dựng đường khuôn hầm. Hãy cho biết khuôn hầm là gì?',
    options: [
      'a. Là ván khuôn của vỏ hầm.',
      'b. Là tĩnh không trong hầm.',
      'c. Là đường cong viền kín bề mặt bên trong của vỏ hầm',
      'd. Là khổ giới hạn trong đường hầm',
    ],
    correct: 2
  },
  {
    question: 'Vỏ hầm đường bộ hình móng ngựa được xây dựng từ loại đường cong nào sau đây?',
    options: [
      'a. Nửa đường tròn phần vòm và hai đoạn tường thẳng.',
      'b. Đường cong 3 tâm.',
      'c. Đường cong 5 tâm',
      'd. Quá nửa đường tròn bán kính R',
    ],
    correct: 3
  },
  {
    question: 'Khoảng cách lề dừng đỗ khẩn cấp trong hầm đường bộ là bao nhiêu mét khi có hai hầm đơn chạy song song nhau.',
    options: [
      'a. 500m',
      'b. 600m',
      'c. 700m',
      'd. 750m',
    ],
    correct: 1
  },
  {
    question: 'Đoạn mở rộng của đường hầm có lề dừng đỗ khẩn cấp được vuốt nối với đoạn không mở rộng như thế nào?',
    options: [
      'a. Mở giật cấp 90o',
      'b. Mở rộng dần trên chiều dài đoạn chuyển tiếp 10m.',
      'c. Mở rộng dần trên đoạn chuyển tiếp 12m.',
      'd. Mở rộng dần trên đoạn chuyển tiếp 15m',
    ],
    correct: 0
  },
  {
    question: 'Khoảng cách giữa các hầm ngang thoát hiểm trong hầm đường bộ dành cho người là bao nhiêu?',
    options: [
      'a. 200m',
      'b. 300m',
      'c. 400m',
      'd. 500m',
    ],
    correct: 1
  },
  {
    question: 'Độ dốc dọc trong hầm đường bộ tối đa là bao nhiêu?',
    options: [
      'a. 5%',
      'b. 4%',
      'c. 3%',
      'd. 2%',
    ],
    correct: 1
  },
  {
    question: 'Hai đoạn đường sắt nằm ở phía ngoài của hai cửa hầm đường sắt có độ dốc bằng độ dốc trong hầm có chiều dài bao nhiêu?',
    options: [
      'a. Bằng 1,5 lần chiều dài tính toán của đoàn tầu.',
      'b. Bằng 1,25 lần chiều dài tính toán của đoàn tầu',
      'c. Bằng chiều dài tính toán của đoàn tầu',
      'd. Bảng 0,75 chiều dài tính toán của đoàn tầu',
    ],
    correct: 2
  },
  {
    question: 'Hãy chọn giải pháp thoát nước áp dụng cho hầm chui',
    options: [
      'a. Bằng rãnh thoát nối với hệ thống thoát nước thành phố',
      'b. Bằng giếng tụ và trạm bơm.',
      'c. Bằng giếng khoan thu nước',
      'd. Bằng máy bơm tự động lắp trực tiếp vào rãnh dọc',
    ],
    correct: 1
  },
  {
    question: 'Khi nào cần bố trí cầu thang cuốn trong các ga tầu điện ngầm?',
    options: [
      'a. Khi chiều cao cầu thang >3,0m',
      'b. Khi chiều cao cầu thang > 3,5m',
      'c. Khi chiều cao cầu thang >4,0m',
      'd. Khi chiều cao cầu thang > 4,5m',
    ],
    correct: 1
  },
  {
    question: 'Trong một tuyến của đường tầu điện ngầm, đối với không gian trong đường hầm thường phải áp dụng mấy loại khổ giới hạn tiếp giáp kiến trúc (kích thước bao)?',
    options: [
      'a. Chỉ có một loại khổ giới hạn thống nhất.',
      'b. Có hai loại khổ giới hạn',
      'c. Có ba loại khổ giới hạn.',
      'd. Có bốn loại khổ giới hạn',
    ],
    correct: 2
  },
  {
    question: 'Hãy cho biết có mấy loại mối nối giữa các cấu kiện lắp ghép của vỏ hầm BTCT đường hầm Metro thi công theo công nghệ TBM?',
    options: [
      'a. 1 loại',
      'b. 2 loại',
      'c. 3 loại',
      'd. 4 loại',
    ],
    correct: 2
  },
  {
    question: 'Khẩu độ thoát nước dùng trong thiết kế cầu là gì?',
    options: [
      'a. Là chiều rộng mặt nước của sông tại mức nước cao nhất.',
      'b. Là tổng các chiều rộng mặt thoáng dưới cầu tính theo mức nước cao nhất.',
      'c. Là khoảng cách thông thủy giữa hai mố cầu tính theo mức nước cao nhất.',
      'd. Là chiều rộng mặt nước của sông tại mức nước lũ lịch sử.',
    ],
    correct: 2
  },
  {
    question: 'Chiều cao đáy dầm của kết cấu nhịp cầu vượt sông được xác định như thế nào?',
    options: [
      'a. Điểm thấp nhất của đáy dầm cao hơn mực nước cao nhất (MNCN) 0,5m.',
      'b. Điểm thấp nhất của đáy dầm cao hơn MNCN 0,7m.',
      'c. Điểm thấp nhất của đáy dầm cao hơn MNCN 0,7m đối với sông có cây trôi và 0,5m đối với sông không có cây trôi.',
      'd. Điểm thấp nhất của đáy dầm cao hơn MNCN 1,0 m đối với sông có cây trôi và 0,5m đối với sông không có cây trôi.',
    ],
    correct: 3
  },
  {
    question: 'Cao độ đáy dầm của cầu vượt qua đường bộ xác định như thế nào?',
    options: [
      'a. Bằng cao độ mặt đường dưới cầu + chiều cao của khổ giới hạn theo Tiêu chuẩn thiết kế đường bộ.',
      'b. Bằng cao độ mặt đường dưới cầu + chiều cao của khổ giới hạn theo Tiêu chuẩn thiết kế đường bộ + 25mm',
      'c. Bằng cao độ mặt đường dưới cầu + chiều cao của khổ giới hạn theo Tiêu chuẩn thiết kế đường bộ + độ lún và độ võng của cầu.',
      'd. Bằng cao độ mặt đường dưới cầu + chiều cao của khổ giới hạn theo Tiêu chuẩn thiết kế đường bộ + độ lún và độ võng của cầu nếu độ lún và độ võng >25mm.',
    ],
    correct: 3
  },
  {
    question: 'Mức nước thông thuyền dưới cầu được xác định như thế nào?',
    options: [
      'a. Là mức nước trung bình trong năm.',
      'b. Là mức nước lũ tính với tần suất 15 năm xảy ra một lần.',
      'c. Là mức nước lũ tính với tần suất 10%',
      'd. Là mức nước lũ tính với tần suất 5%.',
    ],
    correct: 3
  },
  {
    question: 'Độ võng cho phép đối với tất cả các loại kết cấu nhịp cầu là bao nhiêu?',
    options: [
      'a. L/800 đối với tất cả các loại cầu.',
      'b. L/800 đối với cầu đường sắt và L/400 đối với cầu đường bộ.',
      'c. L/600 đối với cầu đường sắt và L/400 đối với cầu đường bộ.',
      'd. L/600 đối với cầu đường sắt và L/250 đối với cầu đường bộ',
    ],
    correct: 0
  },
  {
    question: 'Để đảm bảo thoát nước khỏi mặt cầu, hệ thống ống thoát nước phải đáp ứng những yêu cầu gì?',
    options: [
      'a. 1m2 mặt cầu ít nhất có 4cm2 diện tích ống thoát.',
      'b. 1m2 mặt cầu ít nhất có 4cm2 diện tích ống thoát và đường kính trong của ống thoát Dtr≥ 150mm',
      'c. 1m2 mặt cầu ít nhất có 1cm2 diện tích ống thoát, đường kính trong của ống Dtr≥90mm và cự ly giữa các ống thoát ≤ 10m/ống.',
      'd. 1m2 mặt cầu ít nhất có 1cm2 diện tích ống thoát, đường kính trong của ống Dtr≥100mm và cự ly giữa các ống thoát ≤ 15m/ống.',
    ],
    correct: 3
  },
  {
    question: 'Bản bê tông mặt cầu của cầu dầm được phép tính theo phương pháp gần đúng bằng cách chia thành các dải bản tương đương. Chiều rộng của dải bản tương đương cầu dầm bê tông được lấy bằng bao nhiêu?',
    options: [
      'a. 1000mm',
      'b. 1800mm',
      'c. 660+ 0,55s tại mặt cắt giữa nhịp và 1220+0,25s tại mặt cắt tim dầm.',
      'd. Khoảng cách giữa hai dầm chủ s (mm).',
    ],
    correct: 2
  },
  {
    question: 'Hãy cho biết chiều dài cốt thép chờ với đường kính là d và sử dụng mối nối bằng dây thép buộc.',
    options: [
      'a. Bằng 25d',
      'b. Bằng 30d',
      'c. Bằng 300mm',
      'd. Bằng (1,0 ÷ 1,7) chiều dài triển khai của cốt thép.',
    ],
    correct: 3
  },
  {
    question: 'Trong dầm bê tông dự ứng lực căng trước sử dụng từng tạo xoắn kéo thẳng, một số tạo cáp được bọc chống dính bám ở hai đầu. Số lượng tao cáp được bọc này cho phép tối đa là bao nhiêu?',
    options: [
      'a. 40% tổng số tao cáp.',
      'b. 30% tổng số tao cáp',
      'c. 25% tổng số tao cáp',
      'd. 20% tổng số tao cáp.',
    ],
    correct: 2
  },
  {
    question: 'Chiều dày bảo vệ đối với cốt thép trong điều kiện môi trường khô cạn bình thường tối thiểu là bao nhiêu?',
    options: [
      'a. 1,5 đường kính cốt thép.',
      'b. 3,5cm',
      'c. 3,0cm',
      'd. 2,5cm',
    ],
    correct: 3
  },
  {
    question: 'Chiều dày bảo vệ đối với cốt thép đứng của cọc khoan nhồi được chọn là bao nhiêu?',
    options: [
      'a. 5,0cm',
      'b. 7,5 cm',
      'c. 9,0cm',
      'd. 3,0 lần đường kính cốt thép.',
    ],
    correct: 2
  },
  {
    question: 'Trong dầm bê tông hàm lượng cốt thép dự ứng lực và cốt thép thường được giới hạn theo tỉ số giữa khoảng cách thớ chịu nén của bê tông đến trục trung hòa và khoảng cách hữu hiệu của cốt thép chịu kéo dc. Hãy cho biết giới hạn này bằng bao nhiêu?',
    options: [
      'a. 0,55',
      'b. 0,45',
      'c. 0,42',
      'd. 0,40',
    ],
    correct: 2
  },
  {
    question: 'Trong dầm bê tông lắp ghép sử dụng đá 1x2, cốt đai đứng của sườn dầm có đường kính danh định là 14mm, tại khu vực đầu dầm cự li tối thiểu giữa các thanh cốt đai được phép bố trí là bao nhiêu?',
    options: [
      'a. 28mm',
      'b. 39mm',
      'c. 41mm',
      'd. 52mm',
    ],
    correct: 1
  },
  {
    question: 'Cự li tối đa của cốt thép cấu tạo bố trí trong dầm bê tông được quy định như thế nào?',
    options: [
      'a. Không vượt quá chiều dày của bộ phận kết cấu hoặc 250mm.',
      'b. Không vượt quá chiều dày của bộ phận kết cấu hoặc 300mm',
      'c. Không vượt quá 1,5 chiều dày bộ phân kết cấu và 400mm',
      'd. Không vượt quá 1,5 chiều dày bộ phận kết cấu và 450mm.',
    ],
    correct: 3
  },
  {
    question: 'Cự li giữa các tao cáp đơn đường kính 12,7mm bố trí trong dầm bê tông dự ứng lực chế tạo theo công nghệ căng trước, bê tông đá 1x2 được bố trí tối thiểu là bao nhiêu?',
    options: [
      'a. 51mm',
      'b. 44mm',
      'c. 39mm',
      'd. 38mm',
    ],
    correct: 1
  },
  {
    question: 'Hãy cho biết giới hạn chảy Fy của thép kết cấu sử dụng cho dầm cầu.',
    options: [
      'a. 190 Mpa',
      'b. 210 Mpa',
      'c. 250 Mpa',
      'd. 270 Mpa',
    ],
    correct: 2
  },
  {
    question: 'Đối với dầm thép liên hợp các đặc trưng hình học để tính độ võng được xét như thế nào?',
    options: [
      'a. DC tính theo thép, DW và hoạt tải tính theo thép và bản hữu hiệu.',
      'b. DC tính theo thép, DW tính theo thép và toàn bộ bản, hoạt tải tính theo thép và bản hữu hiệu.',
      'c. DC tính theo thép,DW tính theo thép và bản hữu hiệu, hoạt tải tính theo thép và toàn bộ bản.',
      'd. DC tính theo thép, DW và hoạt tải tính theo thép và toàn bộ tiết diện bản.',
    ],
    correct: 2
  },
  {
    question: 'Sức kháng uốn theo trạng thái giới hạn cường độ của kết cấu nhịp dầm thép là gì?',
    options: [
      'a. Là mô men giới hạn Mr = φMn',
      'b. Là cường độ giới hạn ở mỗi bản cánh dầm Fr = φFn',
      'c. Là mô men giới hạn Mr và cường độ giới hạn Fr',
      'd. Là mô men giới hạn Mr hoặc cường độ giới hạn Fr',
    ],
    correct: 2
  },
  {
    question: 'Hãy cho biết cách tính tác dụng của xe tải thiết kế lên tường thân của mố chữ U bê tông cốt thép?',
    options: [
      'a. Tính theo tải trọng chất thêm ES với áp lực phân bố pi là áp lực của các tải trọng bánh xe truyền qua lớp áo đường phía sau mố.',
      'b. Tính theo tải trọng chất thêm ES với các lực tập trung Pi là các tải trọng của trục bánh xe đặt trên mặt đường sau mố.',
      'c. Tính theo tải trọng chất thêm ES với hoạt tải tác dụng lớn nhất qs là áp lực phân bố lớn nhất của tải trọng trục thông qua lớp áo đường sau mố.',
      'd. Tính theo hoạt tải chất thêm LS với chiều cao đất tương đương heq.',
    ],
    correct: 3
  },
];
