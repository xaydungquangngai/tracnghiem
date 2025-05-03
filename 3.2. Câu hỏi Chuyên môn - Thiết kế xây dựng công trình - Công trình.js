const questions = [
  {
    question: 'Các phương pháp khai thác nào được sử dụng để khai thác khoáng sản?',
    options: [
      'a. Phương pháp khai thác lộ thiên.',
      'b. Phương pháp khai thác hầm lò',
      'c. Phương pháp khai thác bằng sức nước.',
      'd. Bao gồm cả 3 phương pháp nêu tại a, b và',
    ],
    correct: 3
  },
  {
    question: 'Khai thác mỏ lộ thiên chia làm mấy giai đoạn?',
    options: [
      'a. 03 giai đoạn (Xây dựng mỏ, đưa mỏ vào hoạt động đạt công suất thiết kế, sản xuất bình thường).',
      'b. 04 giai đoạn (Xây dựng mỏ, đưa mỏ vào hoạt động đạt công suất thiết kế, sản xuất bình thường, đóng cửa hoàn nguyên môi trường).',
      'c. 02 giai đoạn (đưa mỏ vào hoạt động đạt công suất thiết kế, sản xuất bình thường).',
      'd. Bao gồm cả 3 phương pháp nêu tại a, b và',
    ],
    correct: 1
  },
  {
    question: 'Các phương pháp khoan nổ mìn nào sử dụng chủ yếu trên các mỏ lộ thiên?',
    options: [
      'a. Phương pháp nổ mìn buồng.',
      'b. Phương pháp nổ mìn lỗ khoan con.',
      'c. Phương pháp nổ mìn lỗ khoan lớn.',
      'd. Phương pháp nổ mìn ốp.',
    ],
    correct: 2
  },
  {
    question: 'Trong khai thác mỏ lộ thiên, các thông số nào sau đây thuộc thông số của hệ thống khai thác mỏ lộ thiên?',
    options: [
      'a. Chiều cao tầng.',
      'b. Chiều rộng khoảnh khai thác.',
      'c. Chiều rộng mặt tầng công tác.',
      'd. Bao gồm cả 3 phương pháp nêu tại a, b và',
    ],
    correct: 3
  },
  {
    question: 'Loại hình vận tải nào phổ biến nhất trên các mỏ lộ thiên ở Việt Nam?',
    options: [
      'a. Vận tải bằng ô tô.',
      'b. Vận tải bằng đường sắt.',
      'c. Vận tải bằng băng tải.',
      'd. Vận tải bằng trục tải.',
    ],
    correct: 0
  },
  {
    question: 'Các loại hình bãi thải nào được sử dụng trên các mỏ lộ thiên?',
    options: [
      'a. Bãi thải ngoài.',
      'b. Bãi thải trong.',
      'c. Bãi thải trong kết hợp bãi thải ngoài.',
      'd. Bao gồm cả 3 phương pháp nêu tại a, b và',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp mở vỉa nào sử dụng cho mỏ khai thác hầm lò?',
    options: [
      'a. Mở vỉa bằng lo bằng.',
      'b. Mở vỉa bằng giếng nghiêng.',
      'c. Mở vỉa bằng giếng đứng.',
      'd. Bao gồm cả 3 phương pháp nêu tại a, b và',
    ],
    correct: 3
  },
  {
    question: 'Các phương pháp thông gió chính nào được sử dụng cho các mỏ hầm lò khai thác sâu?',
    options: [
      'a. Phương pháp thông gió hút.',
      'b. Phương pháp thông gió đẩy.',
      'c. Phương pháp thông gió cục bộ.',
      'd. Bao gồm cả 3 phương pháp nêu tại a, b và',
    ],
    correct: 0
  },
  {
    question: 'Trong khai thác hầm lò hệ thống khai thác được sử dụng cho vỉa khoáng sản dốc thoải, dốc nghiêng?',
    options: [
      'a. Hệ thống khai thác gương lò chợ bậc chân khay.',
      'b. Hệ thống khai thác buồng.',
      'c. Hệ thống khai thác cột dài theo phương lò chợ tầng.',
      'd. Đáp ứng tất cả các yêu cầu nêu tại ba phương án a, b và',
    ],
    correct: 2
  },
  {
    question: 'Trong khai thác hầm lò hệ thống khai thác nào được sử dụng cho vỉa khoáng sản dốc đứng?',
    options: [
      'a. Hệ thống khai thác gương lò chợ bậc chân khay.',
      'b. Hệ thống khai thác cột dài theo phương lò chợ tầng.',
      'c. Hệ thống khai thác liền gương lò chợ tầng',
      'd. Cả 3 trường hợp a, b và',
    ],
    correct: 0
  },
  {
    question: 'Các phương pháp điều khiển áp lực mỏ hầm lò nào được sử dụng phổ biến cho các mỏ than?',
    options: [
      'a. Điều khiển áp lực mỏ bằng phương pháp phá hỏa hoàn toàn.',
      'b. Điều khiển áp lực mỏ bằng phương pháp chèn lò.',
      'c. Điều khiển áp lực mỏ bằng phương pháp khoan nổ mìn.',
      'd. Điều khiển áp lực mỏ bằng vì chống lò.',
    ],
    correct: 0
  },
  {
    question: 'Trong khai thác hầm lò, đường lò nào được cho là đào theo phương của vỉa khoáng sản?',
    options: [
      'a. Lò xuyên vỉa',
      'b. Lò thượng',
      'c. Lò hạ',
      'd. Lò dọc vỉa',
    ],
    correct: 3
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
    question: 'Sự khác nhau giữa các loại neo đá sử dụng để chống đỡ đường hang trong đường hầm thi công theo phương pháp mỏ truyền thống và đường hầm thi công theo công nghệ NATM?',
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
    question: 'Khoảng cách giữa hai tim hầm đơn song song được xác định theo công thức Khoảng cách nhằm này đáp ứng yêu cầu gì sau đây ?',
    options: [
      'a. Đảm bảo khả năng chịu lực của khối đất nằm giữa hai hầm.',
      'b. Đảm bảo an toàn nổ mìn khi hai đường hầm cùng thi công.',
    ],
    correct: 0
  },
  {
    question: 'Hãy cho biết ý nghĩa cơ học của hệ số kiên cố theo Prô-tô-đia-cô- nốp fkp?',
    options: [
      'a. Là cường độ quy đổi của đá.',
      'b. Là hệ số ma sát quy đổi của nền.',
      'c. Là hệ số thực nghiệm đặc trưng cho áp lực địa tầng.',
      'd. Là hệ số thực nghiệm đặc trưng cho khả năng tự đứng vững của hang đào',
    ],
    correct: 1
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
    question: 'Hãy giải thích bậc dưới của ta luy mái dốc cửa hầm như hình vẽ dưới đây là đắp mà không phải là ta luy đào?',
    options: [
      'a. Nó đúng là ta luy đào không phải giải thích.',
      'b. Nó là ta luy đào nhưng do trong quá trình thi công chân dốc bị sạt lở nên đắp bù.',
      'c. Vì khi đào bạt tạo gương để đào hang mặt gương quá dốc nên phải đắp.',
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
    question: 'Tại sao vỏ hầm của đường hầm thi công theo công nghệ NATM thường có chiều dày không đổi?',
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
      'd. Khi công nghệ thi công NATM trở thành phổ biến không nên quan tâm đến khái niệm này nữa.',
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
      'b. Giữa tỉ lệ áp lực sau giải phóng ứng suất tác dụng lên kết cấu chống đỡ và chuyển vị vách hang đào.',
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
];
