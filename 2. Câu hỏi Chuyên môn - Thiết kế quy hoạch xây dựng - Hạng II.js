const questions = [
  {
    question: 'Định kỳ rà soát đối với quy hoạch xây dựng vùng liên huyện, quy hoạch xây dựng vùng huyện kể từ khi phê duyệt là bao nhiêu năm theo phương án dưới đây:',
    options: [
      'c. 5 năm',
      'd. 3 năm',
    ],
    correct: 1
  },
  {
    question: 'Những cá nhân nào sau đây bắt buộc phải có chứng chỉ hành nghề trong hồ sơ năng lực thực hiện một đồ án quy hoạch xây dựng?',
    options: [
      'a. Chủ nhiệm đồ án và chủ trì các bộ môn',
      'b. Chủ nhiệm đồ án',
      'c. Chủ trì phần thiết kế quy hoạch',
      'd. Tất cả các thành viên tham gia thực hiện đồ án quy hoạch xây dựng',
    ],
    correct: 0
  },
  {
    question: 'Theo Nghị định 15/2021/NĐ-CP, Giấy phép xây dựng được cấp lại trong trường hợp:',
    options: [
      'a. Giấy phép xây dựng bị rách, bị nát hoặc bị mất',
      'b. Giấy phép xây dựng bị quá hạn',
      'c. Giấy phép xây dựng bị hủy',
      'd. Giấy phép xây dựng bị quá hạn, bị hủy hoặc bị thu hồi',
    ],
    correct: 0
  },
  {
    question: 'Theo Nghị định 15/2021/NĐ-CP, chủ đầu tư có trách nhiệm công khai giấy phép xây dựng tại đâu?',
    options: [
      'a. Chủ đầu tư có trách nhiệm công khai giấy phép xây dựng trên trang thông tin điện tử của mình',
      'b. Chủ đầu tư có trách nhiệm công khai giấy phép xây dựng trên các phương tiện thông tin đại chúng',
      'c. Chủ đầu tư có trách nhiệm công khai giấy phép xây dựng tại địa điểm thi công xây dựng trong suốt quá trình thi công xây dựng',
      'd. Chủ đầu tư có trách nhiệm công khai giấy phép xây dựng trên trang thông tin điện tử của mình và tại địa điểm thi công xây dựng.',
    ],
    correct: 2
  },
  {
    question: 'Theo Nghị định 15/2021/NĐ-CP, việc Quản lý trật tự xây dựng được thực hiện từ khi nào?',
    options: [
      'a. Từ khi khởi công xây dựng công trình cho đến khi công trình bàn giao đưa vào sử dụng',
      'b. Từ khi tiếp nhận thông báo khởi công, khởi công xây dựng công trình cho đến khi xây dựng công trình',
      'c. Từ khi tiếp nhận thông báo khởi công, khởi công xây dựng công trình cho đến khi công trình bàn giao đưa vào sử dụng',
      'd. Từ khi tiếp nhận thông báo khởi công, cho đến khi xây dựng công trình, bàn giao đưa vào sử dụng và cả quá trình khai thác công trình.',
    ],
    correct: 2
  },
  {
    question: 'Theo Quy chuẩn kỹ thuật quốc gia về Quy hoạch xây dựng QCVN 01:2021/BXD ban hành kèm theo thông tư 01/2021/TT-BXD, yêu cầu về định hướng tổ chức không gian cấp vùng huyện, liên huyện trong quy hoạch xây dựng không cần đáp ứng yêu cầu nào sau đây?',
    options: [
      'a. Các phân vùng trong đồ án quy hoạch phải được đề xuất dựa trên các đặc trưng về cảnh quan thiên nhiên, đặc điểm kinh tế, xã hội, môi trường và sinh thái vùng',
      'b. Phải tính toán đến tác động từ mực nước biển dâng theo các kịch bản của quốc gia đối với khu vực dự báo chịu tác động từ nước biển dâng',
      'c. Phân vùng phải lồng ghép với các giải pháp kiểm soát quản lý theo các mức độ: khu vực ưu tiên cho xây dựng, khu vực hạn chế xây dựng, khu vực cấm xây dựng.',
      'd. Hệ thống hạ tầng xã hội và hệ thống hạ tầng kỹ thuật phải đảm bảo mọi người dân trong vùng đều được sử dụng thuận lợi và dễ dàng tiếp cận',
    ],
    correct: 1
  },
  {
    question: 'Theo Quy chuẩn kỹ thuật quốc gia về Quy hoạch xây dựng QCVN 01:2021/BXD ban hành kèm theo thông tư 01/2021/TT-BXD, yêu cầu về định hướng tổ chức không gian cấp vùng huyện, liên huyện trong quy hoạch xây dựng cần phải đáp ứng yêu cầu nào sau đây?',
    options: [
      'a. Các phân vùng trong đồ án quy hoạch phải được đề xuất dựa trên các đặc trưng về địa hình, đặc điểm kinh tế, xã hội và nhu cầu phát triển trong tương lai.',
      'b. Phải tính toán đến tác động từ mực nước biển dâng theo các kịch bản của quốc gia đối với khu vực dự báo chịu tác động từ nước biển dâng',
      'c. Phân vùng phải lồng ghép với các giải pháp kiểm soát quản lý theo các mức độ: khu vực ưu tiên cho xây dựng, khu vực hạn chế xây dựng, khu vực cấm xây dựng.',
      'd. Hệ thống hạ tầng xã hội và hệ thống hạ tầng kỹ thuật phải đảm bảo nhu cầu phát triển tính toán theo dự báo ít nhất 5 năm.',
    ],
    correct: 2
  },
  {
    question: 'Theo Quy chuẩn kỹ thuật quốc gia về Quy hoạch xây dựng QCVN01:2021/BXD ban hành kèm theo thông tư 01/2021/TT-BXD, yêu cầu về dự báo trong đồ án quy hoạch không cần phải đáp ứng yêu cầu nào sau đây?',
    options: [
      'a. Dự báo về dân số, lao động, đất đai, hạ tầng xã hội, hạ tầng kỹ thuật và các nội dung kinh tế - xã hội khác phải dựa trên cơ sở chuỗi các số liệu với thời gian tối thiểu của 5 năm gần nhất và các chỉ tiêu, quy định, khống chế tại quy hoạch cao hơn.',
      'b. Dự báo dân số phải bao gồm cả dự báo dân số thường trú, dân số tạm trú và các thành phần dân số khác (dân số lưu trú, khách vãng lai được quy đổi)',
      'c. Dự báo phải đề cập đến các vấn đề về tai biến thiên nhiên, môi trường, biến đổi khí hậu và nước biển dâng',
      'd. Kết quả của dự báo phải đảm bảo phù hợp với nhu cầu phát triển của khu vực đô thị cũng như các động lực phát triển của vùng và quốc gia',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng, chứng chỉ hành nghề được cấp cho cá nhân là công dân Việt Nam có hiệu lực tối đa trong bao lâu?',
    options: [
      'a. 3 năm',
      'b. 4 năm',
      'c. 5 năm',
      'd. Theo giấy phép lao động nhưng không quá 5 năm',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng, điều kiện để lập quy hoạch chung khu chức năng là gì?',
    options: [
      'a. Khu chức năng có diện tích 200 ha trở lên',
      'b. Khu chức năng có diện tích 300 ha trở trở',
      'c. Khu chức năng có diện tích 400 ha trở lên',
      'd. Khu chức năng có diện tích 500 ha trở lên',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật xây dựng Việt Nam hiện hành thì có cần lập quy hoạch chi tiết đối với dự án đầu tư xây dựng có quy mô nhỏ hơn 5 ha hay không?',
    options: [
      'a. Bắt buộc phải thực hiện việc lập quy hoạch chi tiết tuy nhiên có thể lập theo quy trình rút gọn.',
      'b. Có thể lập dự án đầu tư xây dựng mà không phải lập quy hoạch chi tiết.',
      'c. Chủ đầu tư có thể tổ chức lập quy hoạch chi tiết đối với dự án trong khu vực đã có quy hoạch chung được phê duyệt.',
      'd. Không bắt buộc phải thực hiện việc lập quy hoạch chi tiết xây dựng nhưng chủ đầu tư có trách nhiệm lấy ý kiến bằng văn bản của cơ quan có thẩm quyền phê duyệt quy hoạch chi tiết xây dựng.',
    ],
    correct: 0
  },
  {
    question: 'Yêu cầu lựa chọn đất xây dựng đô thị nào sau đây là sai?',
    options: [
      'a. Có các lợi thế về kinh tế, xã hội, hạ tầng kỹ thuật và môi trường',
      'b. Có đủ diện tích đất để phát triển đô thị trong giai đoạn 10 đến 15 năm',
      'c. Không thuộc phạm vi khu vực được xác định để khai thác mỏ, bảo tồn thiên nhiên',
      'd. Không nằm trong phạm vi cấm xây dựng theo pháp luật về xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Cấu trúc phát triển không gian đô thị không bao hàm yếu tố nào?',
    options: [
      'a. Hình thái đô thị',
      'b. Kinh tế đô thị',
      'c. Quản lý đô thị',
      'd. Sinh thái đô thị',
    ],
    correct: 2
  },
  {
    question: 'Cấu trúc phát triển không gian đô thị xác định trên cơ sở nào?',
    options: [
      'a. Khung thiên nhiên của đô thị; Các điều kiện hiện trạng; Tiềm năng phát triển đô thị;',
      'b. Các điều kiện hiện trạng; Tiềm năng phát triển đô thị;',
      'c. Khung thiên nhiên của đô thị; Các điều kiện hiện trạng;',
      'd. Khung thiên nhiên của đô thị; Tiềm năng phát triển đô thị;',
    ],
    correct: 0
  },
  {
    question: 'Yêu cầu nào không quy định bắt buộc đối với quy hoạch xây dựng công trình công cộng ngầm đô thị?',
    options: [
      'a. Phải phù hợp với quy hoạch tổ chức không gian và hệ thống dịch vụ công cộng của đô thị',
      'b. Phải đảm bảo yêu cầu bố trí hỗn hợp nhiều loại chức năng khác nhau',
      'c. Phải đảm bảo kết nối không gian thuận tiện và an toàn với các công trình giao thông ngầm',
      'd. Phải đảm bảo kết nối với hệ thống hạ tầng kỹ thuật ngầm chung của đô thị',
    ],
    correct: 1
  },
  {
    question: 'Yêu cầu nào không quy định bắt buộc đối với quy hoạch cải tạo các khu vực cũ trong đô thị?',
    options: [
      'a. Phù hợp với điều kiện hiện trạng về mật độ và tầng cao xây dựng',
      'b. Phù hợp với giá trị lịch sử, giá trị kiến trúc và chất lượng của các công trình hiện có',
      'c. Đảm bảo yêu cầu về phòng cháy, chữa cháy, bãi đỗ xe, cơ sở hạ tầng kỹ thuật khác',
      'd. Đảm bảo quỹ đất dự trữ phát triển',
    ],
    correct: 3
  },
  {
    question: 'Quy hoạch cải tạo các khu vực cũ trong đô thị, trong điều kiện nào thì được phép xen cấy thêm các công trình khác?',
    options: [
      'a. Không được phép xen cấy bất kể điều kiện nào',
      'b. Được phép xen cấy bất kể điều kiện nào',
      'c. Khi quy mô trường học đảm bảo chuẩn quốc gia do Bộ Giáo dục và Đào tạo quy định',
      'd. Khi các công trình trường học, chợ, cây xanh đảm bảo chỉ tiêu về quy mô, bán kính phục vụ',
    ],
    correct: 3
  },
  {
    question: 'Quy hoạch xây dựng mới các đơn vị ở mới cần đảm bảo đường giao thông từ cấp nào trở lên không chia cắt đơn vị ở?',
    options: [
      'a. Đường trục chính đô thị',
      'b. Đường chính đô thị',
      'c. Đường liên khu vực',
      'd. Đường chính khu vực',
    ],
    correct: 1
  },
  {
    question: 'Theo chiến lược phát triển nhà ở quốc gia đến năm 2020, tầm nhìn đến năm 2030 đã xác định đến năm 2030 diện tích sàn nhà ở tối thiểu và trung bình toàn quốc tại đô thị là bao nhiêu m2/người?',
    options: [
      'a. 6/26',
      'b. 8/25',
      'c. 12/30',
      'd. 15/30',
    ],
    correct: 2
  },
  {
    question: 'Có bao nhiêu yêu cầu đối với việc phân khu chức năng trong quy hoạch điểm dân cư nông thôn?',
    options: [
      'a. 4 yêu cầu',
      'b. 5 yêu cầu',
      'c. 6 yêu cầu',
      'd. 7 yêu cầu',
    ],
    correct: 2
  },
  {
    question: 'Tổng chỉ tiêu sử dụng đất (đất ở, đất công cộng, đất giao thông, đất hạ tầng cây xanh) của điểm dân cư nông thôn là:',
    options: [
      'a. 35m2/người',
      'b. 37m2/người',
      'c. 40m2/người',
      'd. 45m2/người',
    ],
    correct: 1
  },
  {
    question: 'Các loại đồ án quy hoạch vùng nào ở Việt Nam được lập theo quyết định của thủ tướng Chính phủ:',
    options: [
      'a. Vùng liên tỉnh; vùng chức năng đặc thù; vùng dọc tuyến đường cao tốc; hành lang kinh tế liên tỉnh.',
      'b. Vùng tỉnh; vùng liên huyện.',
      'c. Vùng huyện; vùng liên xã.',
      'd. A; B và C',
    ],
    correct: 1
  },
  {
    question: 'Theo QCVN 01:2019/BXD, nội dung nào sau đây thuộc yêu cầu về tổ chức không gian toàn đô thị ?',
    options: [
      'a. Quy mô các loại đất ngoài dân dụng phải được luận chứng, tính toán theo nhu cầu thực tế kết hợp với các quy hoạch chuyên ngành;',
      'b. Các cơ sở công nghiệp, kho tàng phải được quy hoạch tại các vị trí an toàn, không gây ô nhiễm môi trường.',
      'c. Cả nội dung a và b',
      'd. Không gồm các nội dung ở trên',
    ],
    correct: 2
  },
  {
    question: 'Theo QCVN 01:2019/BXD, các khu chức năng, phân khu đô thị và các trung tâm không bao gồm yêu cầu nào sau đây ?',
    options: [
      'a. Các trung tâm theo cấp hành chính và trung tâm chuyên ngành (y tế, đào tạo, thương mại, dịch vụ...) cần có quy mô phù hợp, đảm bảo tiết kiệm đất đai;',
      'b. Quy mô các loại đất ngoài dân dụng phải được luận chứng, tính toán theo nhu cầu thực tế kết hợp với các quy hoạch chuyên ngành;',
      'c. Trung tâm theo cấp hành chính phải được bố trí tại vị trí có mối liên hệ thuận lợi nhất tới các khu chức năng của đô thị;',
      'd. Phải bố trí hỗn hợp nhiều chức năng khác nhau trong khu trung tâm đô thị đảm bảo khai thác sử dụng đất hiệu quả, linh hoạt và thuận tiện.',
    ],
    correct: 1
  },
  {
    question: 'Thiết kế đô thị là:',
    options: [
      'a. Một đồ án quy hoạch đô thị.',
      'b. Một nội dung của đồ án quy hoạch đô thị.',
      'c. Một đồ án quy hoạch xây dựng.',
      'd. Một nội dung của đồ án quy hoạch xây dựng.',
    ],
    correct: 1
  },
  {
    question: 'Xác định phạm vi Đánh giá Môi trường Chiến lược (ĐMC) nhằm đảm bảo quá trình ĐMC tập trung vào những vấn đề quan trọng nhất và cung cấp được bức tranh toàn diện về môi trường, tránh thu thập và đưa ra những thông tin không cần thiết. Phạm vi ĐMC bao gồm những nội dung nào sau đây?',
    options: [
      'a. Xác định không gian và thời gian ĐMC; Thu thập các số liệu cơ bản cần điều tra.',
      'b. Xác định các chuyên gia lĩnh vực và nội dung cần ĐMC',
      'c. Xác định nội dung và lập kế hoạch tham vấn các bên có liên quan.',
      'd. Cả 3 phương án trên',
    ],
    correct: 1
  },
  {
    question: 'Khu cây xanh nào trong đô thị không thuộc khu chức năng cây xanh chuyên dùng?',
    options: [
      'a. Vườn ươm',
      'b. Cây xanh đường phố',
      'c. Cây xanh nghiên cứu',
      'd. Cây xanh cách ly',
    ],
    correct: 1
  },
  {
    question: 'Công trình nào không phải là công trình đầu mối hạ tầng kỹ thuật đô thị?',
    options: [
      'a. Nghĩa trang',
      'b. Công trình xử lý nước thải',
      'c. Công trình xử lý rác thải',
      'd. Bến bãi chứa hàng hóa',
    ],
    correct: 3
  },
  {
    question: 'Công trình nào thuộc khu chức năng dịch vụ đô thị?',
    options: [
      'a. Viện nghiên cứu',
      'b. Công trình tôn giáo, tín ngưỡng',
      'c. Công trình hành chính các cấp của đô thị',
      'd. Các công trình hành chính ngoài cấp quản lý hành chính của đô thị',
    ],
    correct: 2
  },
  {
    question: 'Công trình nào thuộc hệ thống hạ tầng xã hội đô thị?',
    options: [
      'a. Các công trình nhà ở',
      'b. Các công trình quảng trường, công viên, cây xanh, mặt nước',
      'c. Các công trình cơ quan hành chính đô thị',
      'd. Cả 3 phương án trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Mật độ xây dựng thuần (netto) không bao gồm diện tích chiếm đất của công trình nào?',
    options: [
      'a. Nhà để xe có mái',
      'b. Tiểu cảnh trang trí',
      'c. Sân tennis',
      'd. Cả 3 phương án trên đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Đường giới hạn cho phép xây dựng nhà, công trình trên lô đất được gọi là gì?',
    options: [
      'a. Chỉ giới đường đỏ',
      'b. Khoảng lùi',
      'c. Chỉ giới xây dựng',
      'd. Chỉ giới xây dựng ngầm',
    ],
    correct: 2
  },
  {
    question: 'Trong dải cách ly vệ sinh khu công nghiệp không được bố trí công trình nào?',
    options: [
      'a. Bãi đỗ xe',
      'b. Nhà điều hành',
      'c. Trạm trung chuyển chất thải rắn',
      'd. Trạm bơm',
    ],
    correct: 1
  },
  {
    question: 'Loại đất nào không có trong quy hoạch sử dụng đất khu công nghiệp - tiểu thủ công nghiệp?',
    options: [
      'a. Nhà ở công nhân',
      'b. Công trình hành chính, dịch vụ',
      'c. Các khu kỹ thuật',
      'd. Nhà máy, kho tàng',
    ],
    correct: 0
  },
  {
    question: 'Chỉ tiêu diện tích đất cây xanh sử dụng công cộng ngoài đơn vị ở trong các đô thị miền núi được phép thấp hơn so với định mức quy định nhưng không thấp hơn bao nhiêu phần trăm(%)?',
    options: [
      'a. 90',
      'b. 80',
      'c. 70',
      'd. 50',
    ],
    correct: 2
  },
  {
    question: 'Diện tích mặt nước nằm trong khuôn viên các công viên, vườn hoa, trong đó chỉ tiêu mặt nước khi quy đổi ra chỉ tiêu đất cây xanh/người không chiếm quá bao nhiêu phần trăm (%) so với tổng chỉ tiêu diện tích đất cây xanh sử dụng công cộng ngoài đơn vị?',
    options: [
      'a. 10',
      'b. 30',
      'c. 50',
      'd. 70',
    ],
    correct: 2
  },
  {
    question: 'Các xí nghiệp dùng các chất phóng xạ mạnh hoặc dễ gây cháy nổ; các bãi phế liệu công nghiệp có quy mô lớn hoặc chứa các phế liệu nguy hiểm phải bố trí ở đâu so với đô thị?',
    options: [
      'a. Bố trí ở ngoài phạm vi đô thị',
      'b. Bố trí ở trong đô thị và có dải cây xanh cách ly cách 1000m',
      'c. Bố trí ở trong đô thị và cuối hướng gió chính, cuối các dòng sông, suối.',
      'd. Bố trí ở trong đô thị và cuối hướng gió chính, cuối các dòng sông, suối và có dải cây xanh cách ly cách 500m',
    ],
    correct: 0
  },
  {
    question: 'Những xí nghiệp có thải chất độc hại, có nguy cơ gây ô nhiễm môi trường phải bố trí ở đâu so với khu dân cư?',
    options: [
      'a. Đầu hướng gió chính, các dòng sông, suối, nguồn nước.',
      'b. Cuối hướng gió chính',
      'c. Cuối các dòng sông suối, nguồn nước.',
      'd. Cuối hướng gió chính, các dòng sông, suối, nguồn nước.',
    ],
    correct: 3
  },
  {
    question: 'Trong khu công nghiệp, tiểu thủ công nghiệp tỷ lệ phần trăm đất Cây xanh; đất giao thông; các khu kỹ thuật so với diện tích toàn khu tối thiểu lần lượt là bao nhiêu?',
    options: [
      'a. 5; 10; 2',
      'b. 10; 8; 1',
      'c. 10; 10; 2',
      'd. 15; 10; 1',
    ],
    correct: 1
  },
  {
    question: 'Chỉ tiêu đất xây dựng của gara xe con có 2 tầng ngầm là bao nhiêu?',
    options: [
      'a. 10 m2/chỗ xe',
      'b. 30 m2/chỗ xe',
      'c. 20 m2/chỗ xe',
      'd. 14 m2/chỗ xe',
    ],
    correct: 2
  },
  {
    question: 'Các gara ô tô ngầm trong đô thị được phép xây dựng với chiều cao không quá bao nhiêu tầng?',
    options: [
      'a. 9 tầng',
      'b. 5 tầng',
      'c. 3 tầng',
      'd. 7 tầng',
    ],
    correct: 1
  },
  {
    question: 'Bề rộng mặt cắt đường nội bộ trong khu dân cư nông thôn phải đảm bảo như thế nào?',
    options: [
      'a. ≥ 4m',
      'b. ≥ 5m',
      'c. ≥ 6m',
      'd. ≥ 7m',
    ],
    correct: 0
  },
  {
    question: 'Cần quy hoạch trường PTTH đối với các xã có những quy mô nào?',
    options: [
      'a. Quy mô dân số ≥ 20.000 người',
      'b. Quy mô dân số < 20.000 người',
      'c. Quy mô dân số ≤ 15.000 người',
      'd. Quy mô dân số ≤ 10.000 người',
    ],
    correct: 0
  },
  {
    question: 'Trụ sở cơ quan xã có diện tích tối thiểu là bao nhiêu m2?',
    options: [
      'a. 500m2',
      'b. 800m2',
      'c. 900m2',
      'd. 1.000m2',
    ],
    correct: 3
  },
  {
    question: 'Đất để xây dựng và mở rộng các điểm dân cư nông thôn có thể nằm trong khu vực nào dưới đây?',
    options: [
      'a. Khu vực có khí hậu xấu, nơi gió quẩn, gió xoáy',
      'b. Khu vực có tài nguyên cần khai thác',
      'c. Khu vực thường xuyên ngập lụt (dưới 3m)',
      'd. Khu vực nằm trong khu vực khảo cổ',
    ],
    correct: 2
  },
  {
    question: 'Để lập đồ án quy hoạch xây dựng vùng huyện cần áp dụng tiêu chuẩn nào?',
    options: [
      'a. Tiêu chuẩn quốc gia về Quy hoạch xây dựng vùng',
      'b. Tiêu chuẩn quốc gia về Quy hoạch xây dựng nông thôn',
      'c. Tiêu chuẩn quốc gia về Quy hoạch đô thị',
      'd. Đáp án a và b',
    ],
    correct: 3
  },
  {
    question: 'Theo QCVN 01:2019/BXD, nội dung nào sau đây không thuộc yêu cầu về quy hoạch không gian xanh, đất cây xanh đô thị?',
    options: [
      'a. Không gian cây xanh trong đô thị phải được quy hoạch gắn kết với nhau thành một hệ thống liên hoàn;',
      'b. Không gian xanh tự nhiên cần được bảo vệ tối đa; không gian xanh nhân tạo phải được phân bố hợp lý trên toàn diện tích đất xây dựng đô thị để đảm bảo thuận lợi trong sử dụng;',
      'c. Cây xanh sử dụng cộng cộng phải được quy hoạch để đảm bảo phù hợp chi phí đầu tư và khai thác sử dụng;',
      'd. Các chỉ tiêu đất cây xanh công cộng cho toàn đô thị và từng khu vực được xác định trong quy hoạch chung, quy hoạch phân khu phải đáp ứng với mục tiêu của quy hoạch và phù hợp đặc thù từng đô thị;',
    ],
    correct: 2
  },
  {
    question: 'Theo QCVN 01:2019/BXD, quy hoạch không gian xây dựng ngầm phải đáp ứng những yêu cầu nào sau đây ?',
    options: [
      'a. Phải xác định được khu vực xây dựng, khu vực hạn chế xây dựng, khu vực cấm xây dựng công trình ngầm',
      'b. Phải xác định được vị trí, quy mô, hướng tuyến, phân tầng của hệ thống giao thông ngầm, các khu vực xây dựng công trình công cộng, công trình đầu mối hạ tầng kỹ thuật ngầm',
      'c. Các công trình ngầm phải đảm bảo kết nối an toàn, đồng bộ với nhau và với các công trình trên mặt đất về không gian và đấu nối hạ tầng kỹ thuật.',
      'd. Tất cả các nội dung trên',
    ],
    correct: 3
  },
  {
    question: 'Nội dung Thiết kế đô thị trong đồ án quy hoạch chung bao gồm nội dung nào dưới đây?',
    options: [
      'a. Xác định tầng cao xây dựng cho từng công trình.',
      'b. Xác định màu sắc, vật liệu của các công trình.',
      'c. Xác định hình thức, chi tiết kiến trúc của các công trình và các vật thể kiến trúc khác.',
      'd. Xác định các vùng kiến trúc, cảnh quan trong đô thị.',
    ],
    correct: 3
  },
  {
    question: 'Nội dung Thiết kế đô thị trong đồ án quy hoạch chi tiết bao gồm nội dung nào?',
    options: [
      'a. Đề xuất tổ chức không gian trong các khu trung tâm, khu vực cửa ngõ đô thị.',
      'b. Đề xuất cảnh quan đô thị dọc các trục đường chính, khu trung tâm.',
      'c. Xác định tầng cao, khoảng lùi, hình khối, mầu sắc, hình thức kiến trúc chủ đạo của các công trình kiến trúc.',
      'd. Đề xuất các trục không gian chính, quảng trường lớn.',
    ],
    correct: 2
  },
  {
    question: 'Đối với mặt nước nằm trong khuôn viên các công viên, vườn hoa; chỉ tiêu mặt nước khi quy đổi ra chỉ tiêu đất cây xanh/người không chiếm quá bao nhiêu % so với tổng chỉ tiêu diện tích đất cây xanh sử dụng công cộng ngoài đơn vị ở?',
    options: [
      'a. 40%',
      'b. 50%',
      'c. 60%',
      'd. 70%',
    ],
    correct: 1
  },
  {
    question: 'Hướng dẫn Đánh giá Môi trường chiến lược (ĐMC) áp dụng cho những loại đồ án Quy hoạch xây dựng và quy hoạch đô thị nào?',
    options: [
      'a. Đồ án quy hoạch xây dựng vùng, quy hoạch chung',
      'b. Đồ án quy hoạch phân khu, quy hoạch chi tiết, quy hoạch xây dựng điểm dân cư nông thôn',
      'c. Đồ án quy hoạch chuyên ngành hạ tầng kỹ thuật',
      'd. Cả 3 phương án trên',
    ],
    correct: 3
  },
  {
    question: 'Các cá nhân chủ trì thực hiện Đánh giá Môi trường chiến lược (ĐMC) hoặc thẩm định báo cáo ĐMC cho đồ án quy hoạch xây dựng phải có trình độ đại học trở lên về chuyên ngành quy hoạch xây dựng hoặc hạ tầng kỹ thuật và ít nhất bao nhiêu năm hoạt động trong lĩnh vực quy hoạch xây dựng, bảo vệ môi trường hoặc chuyên ngành môi trường?',
    options: [
      'a. 2 năm',
      'b. 3 năm',
      'c. 5 năm',
      'd. 10 năm',
    ],
    correct: 2
  },
  {
    question: 'Công trình dịch vụ y tế nào thuộc cấp phục vụ của đơn vị ở đơn vị nào sau đây?',
    options: [
      'a. Nhà hộ sinh',
      'b. Trạm y tế',
      'c. Bệnh viện đa khoa',
      'd. Phòng khám đa khoa',
    ],
    correct: 1
  },
  {
    question: 'Công trình dịch vụ giáo dục nào không thuộc cấp phục vụ của đơn vị nào?',
    options: [
      'a. Trường mẫu giáo',
      'b. Trường tiểu học',
      'c. Trường trung học cơ sở',
      'd. Trường trung học phổ thông',
    ],
    correct: 3
  },
  {
    question: 'Các công trình dịch vụ đô thị phục vụ trong đơn vị ở (trường học, chợ…) đối với khu vực có địa hình không phức tạp cần đảm bảo bán kính phục vụ không quá bao nhiêu m?',
    options: [
      'a. 250m',
      'b. 300m',
      'c. 500m',
      'd. 1000m',
    ],
    correct: 2
  },
  {
    question: 'Chỉ tiêu đất đơn vị ở trung bình của toàn đô thị tối đa là bao nhiêu?',
    options: [
      'a. 45 m2/người',
      'b. 50 m2/người',
      'c. 55 m2/người',
      'd. 60 m2/người',
    ],
    correct: 1
  },
  {
    question: 'Chỉ tiêu đất đơn vị ở tối thiểu là bao nhiêu?',
    options: [
      'a. 8 m2/người',
      'b. 10 m2/người',
      'c. 12 m2/người',
      'd. 15 m2/người',
    ],
    correct: 0
  },
  {
    question: 'Chỉ tiêu công trình giáo dục mầm non và phổ thông cơ sở trong đơn vị ở phải đạt tối thiểu là bao nhiêu?',
    options: [
      'a. 2,5 m2/người',
      'b. 2,7 m2/người',
      'c. 3,0 m2/người',
      'd. 3,2 m2/người',
    ],
    correct: 1
  },
  {
    question: 'Đối với các khu ở phục vụ đối tượng có thu nhập thấp, các đối tượng nhà ở xã hội, chỉ tiêu quy hoạch sử dụng các loại đất trong đơn vị ở phải đạt tối thiểu bao nhiêu phần trăm so với các quy định?',
    options: [
      'a. 85%',
      'b. 80%',
      'c. 70%',
      'd. 60%',
    ],
    correct: 2
  },
  {
    question: 'Tính toán tỷ lệ số chỗ của Mẫu giáo/Tiểu học/Trung học cơ sở theo tỷ lệ dân số lần lượt là bao nhiêu chỗ /1000 người dân?',
    options: [
      'a. 50/65/55 (chỗ)',
      'b. 60/55/45 (chỗ)',
      'c. 65/60/50 (chỗ)',
      'd. 50/65/55 (chỗ)',
    ],
    correct: 0
  },
  {
    question: 'Chỉ tiêu tính toán đất giáo dục trong đơn vị ở tối thiểu là bao nhiêu m2/chỗ (mẫu giáo, học sinh)?',
    options: [
      'a. 10 m2/chỗ',
      'b. 15 m2/chỗ',
      'c. 20 m2/chỗ',
      'd. 25 m2/chỗ',
    ],
    correct: 1
  },
  {
    question: 'Đối với khu vực đô thị có quy mô dân số bằng bao nhiêu người thì phải bố trí một trường trung học phổ thông?',
    options: [
      'a. 15.000 người',
      'b. 20.000 người',
      'c. 25.000 người',
      'd. 30.000 người',
    ],
    correct: 1
  },
  {
    question: 'Mật độ xây dựng thuần (net-tô) tối đa của nhóm nhà nhóm nhà chung cư đối với lô đất có diện tích nhỏ hơn 3000m2 và chiều cao công trình xây dựng trên mặt đất lớn hơn 46m là bao nhiêu %?',
    options: [
      'a. 50%',
      'b. 60%',
      'c. 75%',
      'd. 80%',
    ],
    correct: 2
  },
  {
    question: 'Mật độ xây dựng thuần (net-tô) tối đa của nhóm nhà dịch vụ đô thị và nhà sử dụng hỗn hợp đối với lô đất có diện tích nhỏ hơn 3000m2 và chiều cao công trình xây dựng trên mặt đất lớn hơn 46m là bao nhiêu %?',
    options: [
      'a. 50%',
      'b. 60%',
      'c. 70%',
      'd. 80%',
    ],
    correct: 3
  },
  {
    question: 'Theo QCVN 01:2019/BXD, yêu cầu nào sau đây không đúng về quy hoạch hạ tầng kỹ thuật?',
    options: [
      'a. Quy hoạch các công trình hạ tầng kỹ thuật phải đảm bảo đáp ứng đầy đủ nhu cầu của khu vực, phù hợp với các dự báo phát triển đô thị, nông thôn và các khu chức năng khác;',
      'b. Phải xác định được khu vực xây dựng, khu vực hạn chế xây dựng, khu vực cấm xây dựng công trình ngầm;',
      'c. Dự báo nhu cầu về hạ tầng kỹ thuật phải dựa trên chuỗi số liệu hiện trạng, các dự án, khu vực có điều kiện tương tự hoặc các tiêu chuẩn được lựa chọn áp dụng;',
      'd. Quy hoạch hạ tầng kỹ thuật phải tính đến các ảnh hưởng của biến đổi khí hậu và nước biển dâng;',
    ],
    correct: 1
  },
  {
    question: 'Dải cách ly vệ sinh trong khu công nghiệp, tỷ lệ diện tích đất tối đa có thể được sử dụng để bố trí bãi đỗ xe, trạm bơm, trạm xử lý nước thải, trạm trung chuyển chất thải rắn là bao nhiêu %?',
    options: [
      'a. 30%',
      'b. 40%',
      'c. 50%',
      'd. 60%',
    ],
    correct: 1
  },
  {
    question: 'Trong dải cách ly vệ sinh trong khu công nghiệp, tỷ lệ diện tích đất tối thiểu phải được trồng cây xanh là bao nhiêu %?',
    options: [
      'a. 30%',
      'b. 40%',
      'c. 50%',
      'd. 60%',
    ],
    correct: 2
  },
  {
    question: 'Mỗi đơn vị ở xây dựng mới phải có tối thiểu một công trình vườn hoa phục vụ chung cho toàn đơn vị ở với quy mô tối thiểu là bao nhiêu m2?',
    options: [
      'a. 2.000m2',
      'b. 3.000m2',
      'c. 5.000m2',
      'd. 10.000m2',
    ],
    correct: 2
  },
  {
    question: 'Bán kính phục vụ của vườn hoa, sân chơi trong các nhóm nhà ở (tính theo đường tiếp cận thực tế gần nhất) là bao nhiêu m?',
    options: [
      'a. 250m',
      'b. 300m',
      'c. 400m',
      'd. 500m',
    ],
    correct: 1
  },
  {
    question: 'Mật độ xây dựng gộp (Brut-to) tối đa trong toàn khu công nghiệp - tiểu thủ công nghiệp là bao nhiêu?',
    options: [
      'a. 30',
      'b. 40',
      'c. 50',
      'd. 60',
    ],
    correct: 2
  },
  {
    question: 'Chỉ tiêu đất cây xanh sử dụng công cộng trong đơn vị ở tối thiểu là bao nhiêu?',
    options: [
      'a. 2m2/người, (trong đó đất cây xanh trong nhóm nhà ở tối thiểu phải đạt 1m2/người)',
      'b. 3m2/người, (trong đó đất cây xanh trong nhóm nhà ở tối thiểu phải đạt 1m2/người)',
      'c. 4m2/người, (trong đó đất cây xanh trong nhóm nhà ở tối thiểu phải đạt 2m2/người)',
      'd. 5m2/người, (trong đó đất cây xanh trong nhóm nhà ở tối thiểu phải đạt 2m2/người)',
    ],
    correct: 0
  },
  {
    question: 'Mật độ xây dựng gộp (brut-tô) tối đa của các khu công viên công cộng là bao nhiêu %?',
    options: [
      'a. 2%',
      'b. 3%',
      'c. 5%',
      'd. 10%',
    ],
    correct: 2
  },
  {
    question: 'Chỉ tiêu diện tích đất cây xanh sử dụng công cộng ngoài đơn vị ở trong đô thị loại đặc biệt tối thiểu là bao nhiêu?',
    options: [
      'a. 7 m2/người',
      'b. 6 m2/người',
      'c. 5 m2/người',
      'd. 4 m2/người',
    ],
    correct: 0
  },
  {
    question: 'Chỉ tiêu diện tích đất cây xanh sử dụng công cộng ngoài đơn vị ở trong đô thị loại I và II tối thiểu là bao nhiêu?',
    options: [
      'a. 7 m2/người',
      'b. 6 m2/người',
      'c. 5 m2/người',
      'd. 4 m2/người',
    ],
    correct: 1
  },
  {
    question: 'Chỉ tiêu diện tích đất cây xanh sử dụng công cộng ngoài đơn vị ở trong đô thị loại III và IV tối thiểu là bao nhiêu?',
    options: [
      'a. 7 m2/người',
      'b. 6 m2/người',
      'c. 5 m2/người',
      'd. 4 m2/người',
    ],
    correct: 2
  },
  {
    question: 'Chỉ tiêu diện tích đất cây xanh sử dụng công cộng ngoài đơn vị ở trong đô thị loại V tối thiểu là bao nhiêu?',
    options: [
      'a. 7 m2/người',
      'b. 6 m2/người',
      'c. 5 m2/người',
      'd. 4 m2/người',
    ],
    correct: 3
  },
  {
    question: 'Quy hoạch cải tạo các khu vực cũ trong đô thị cần đảm bảo đường cụt một làn xe dài tối đa bao nhiêu m?',
    options: [
      'a. 100m',
      'b. 120m',
      'c. 125m',
      'd. 150m',
    ],
    correct: 3
  },
  {
    question: 'Đối với các khu vực cũ trong đô thị, bán kính phục vụ của các công trình công cộng được phép tăng không quá bao nhiêu % so với các quy định về bán kính phục vụ đối với các khu quy hoạch mới?',
    options: [
      'a. 70%',
      'b. 80%',
      'c. 100%',
      'd. 120%',
    ],
    correct: 2
  },
  {
    question: 'Mật độ xây dựng net-tô tối đa của các công trình công cộng như giáo dục, y tế, văn hóa, chợ trong các khu vực quy hoạch cải tạo là bao nhiêu %?',
    options: [
      'a. 40%',
      'b. 50%',
      'c. 60%',
      'd. 70%',
    ],
    correct: 2
  },
  {
    question: 'Quy hoạch và mở rộng các điểm dân cư nông thôn cần hạn chế sử dụng loại đất nào?',
    options: [
      'a. Đất canh tác',
      'b. Đất đồi núi gò bãi',
      'c. Đất có năng suất trồng trọt kém',
      'd. Cả ba phương án trên',
    ],
    correct: 0
  },
  {
    question: 'Có bao nhiêu khu chức năng chính trong điểm dân cư nông thôn?',
    options: [
      'a. 3 khu',
      'b. 4 khu',
      'c. 5 khu',
      'd. 6 khu',
    ],
    correct: 2
  },
  {
    question: 'Cải tạo các điểm dân cư cũ là:',
    options: [
      'a. Tổ chức, điều chỉnh các khu chức năng, nâng cao chất lượng và tiện nghi phục vụ',
      'b. Tổ chức lại hoặc điều chỉnh bổ sung mạng lưới hạ tầng kỹ thuật',
      'c. Tăng diện tích cây xanh và cải thiện điều kiện vệ sinh môi trường',
      'd. Cả ba phương án trên',
    ],
    correct: 3
  },
  {
    question: 'Mỗi xã cần được quy hoạch ít nhất bao nhiêu khu trung tâm?',
    options: [
      'a. Không nhất thiết phải có khu trung tâm',
      'b. 1 khu trung tâm',
      'c. 2 khu trung tâm',
      'd. 1 khu trung tâm chính và một khu trung tâm phụ',
    ],
    correct: 1
  },
  {
    question: 'Hệ thống cây xanh trong điểm dân cư nông thôn là gì?',
    options: [
      'a. Cây xanh vườn hoa công cộng',
      'b. Các vườn cây tập trung (vườn cây kinh tế, cây ăn quả, cây thuốc, vườn ươm)',
      'c. Cây xanh cách ly',
      'd. Cả ba phương án trên',
    ],
    correct: 3
  },
  {
    question: 'Các khu chăn nuôi, sản xuất nông nghiệp và tiểu thủ công nghiệp cần được quy hoạch với cự ly bao nhiêu m?',
    options: [
      'a. 500m',
      'b. 1000m',
      'c. 1500m',
      'd. Đảm bảo yêu cầu về khoảng cách ly vệ sinh, đảm bảo phòng chống dịch bệnh',
    ],
    correct: 3
  },
  {
    question: 'Theo QCVN 01:2019/BXD, nội dung nào sau đây không yêu cầu đối với đơn vị ở?',
    options: [
      'a. Mỗi đơn vị ở phải bố trí đầy đủ các công trình dịch vụ - công cộng với quy mô đảm bảo phục vụ đủ cho dân cư của khu vực quy hoạch',
      'b. Xem xét đến nhu cầu của các khu vực lân cận, dân số vãng lai đã quy đổi;',
      'c. Mỗi đơn vị ở phải có tối thiểu một vườn hoa với quy mô tối thiểu là 1.000 m2',
      'd. Công trình dịch vụ - công cộng cấp đơn vị ở phải đảm bảo khả năng tiếp cận, sử dụng thuận lợi của các đối tượng dân cư trong đơn vị ở',
    ],
    correct: 2
  },
  {
    question: 'Theo QCVN 01:2019/BXD, Hệ thống công trình dịch vụ - công cộng được phân thành các cấp nào sau đây ?',
    options: [
      'a. Cấp vùng, cấp đô thị, cấp đơn vị ở',
      'b. Cấp đô thị và cấp đơn vị ở',
      'c. Cấp vùng và cấp đơn vị ở',
      'd. Không phải các cấp trên',
    ],
    correct: 0
  },
  {
    question: 'Theo QCVN 01:2019/BXD, đất cây xanh sử dụng công cộng trong đô thị phải đáp ứng yêu cần nào sau đây?',
    options: [
      'a. Đảm bảo thuận tiện cho mọi người dân được tiếp cận sử dụng;',
      'b. Phải quy hoạch khai thác sử dụng đất cây xanh tự nhiên, thảm thực vật ven sông hồ, ven kênh rạch, ven biển... để bổ sung thêm đất cây xanh đô thị;',
      'c. Đảm bảo cả nội dung a và b',
      'd. Các đáp án trên đều sai',
    ],
    correct: 2
  },
  {
    question: 'Theo QCVN 01:2019/BXD, trong việc phân cấp các công trình, quy mô các công trình dịch vụ - công cộng phải xét đến nội dung nào sau đây ?',
    options: [
      'a. Đất cây xanh sử dụng công cộng trong đơn vị ở tối thiểu đạt 2 m2/người',
      'b. Nhu cầu của các khu vực lân cận và các đối tượng là dân số vãng lai',
      'c. Trong các đơn vị ở có thể bố trí đan xen một số công trình không thuộc đơn vị ở',
      'd. Các công trình dịch vụ - công cộng cấp đơn vị ở cần đảm bảo bán kính phục vụ không quá 500 m',
    ],
    correct: 1
  },
  {
    question: 'Theo QCVN 01:2019/BXD, đối với quy hoạch khu công nghiệp, khu chế xuất và khu công nghệ cao cần phải đáp ứng yêu cầu nào sau đây ?',
    options: [
      'a. Đối với các cơ sở sản xuất, kho tàng có mức độ độc hại cấp I, cấp II phải quy hoạch ngoài khu vực xây dựng đô thị',
      'b. Cấp độc hại và khoảng cách an toàn môi trường tuân thủ theo các quy định của Bộ Khoa học Công nghệ hoặc phải xác định bằng công cụ đánh giá tác động môi trường hoặc dựa trên các dự án tương tự',
      'c. Phải đáp ứng cả a và b',
      'd. Không cần đáp ứng a và b',
    ],
    correct: 1
  },
  {
    question: 'Nội dung Thiết kế đô thị trong đồ án quy hoạch chung bao gồm nội dung nào sau đây?',
    options: [
      'a. Xác định các vùng kiến trúc cảnh quan trong đô thị.',
      'b. Đề xuất tổ chức không gian trong các khu trung tâm, khu vực cửa ngõ đô thị.',
      'c. Đề xuất trục không gian chính, quảng trường lớn, không gian cây xanh, mặt nước và điểm nhấn trong đô thị.',
      'd. Tất cả các nội dung trên.',
    ],
    correct: 3
  },
  {
    question: 'Lộ giới đường giao thông trong nhóm nhà ở hiện trạng cải tạo phải đảm bảo tối thiểu bao nhiêu m?',
    options: [
      'a. 3,0m',
      'b. 3,5m',
      'c. 4,0m',
      'd. 4,5m',
    ],
    correct: 2
  },
  {
    question: 'Nội dung Thiết kế đô thị trong đồ án quy hoạch phân khu bao gồm việc xác định:',
    options: [
      'a. Chỉ tiêu khống chế về khoảng lùi.',
      'b. Cảnh quan đô thị dọc các trục đường chính, khu trung tâm.',
      'c. Các khu vực không gian mở, các công trình điểm nhấn và từng ô phố cho khu vực thiết kế.',
      'd. Tất cả các nội dung trên.',
    ],
    correct: 3
  },
  {
    question: 'Nội dung Thiết kế đô thị của đồ án thiết kế đô thị riêng bao gồm?',
    options: [
      'a. Xác định tầng cao xây dựng cho từng công trình, khoảng lùi của công trình trên từng đường phố và ngã phố.',
      'b. Xác định mầu sắc, vật liệu, hình thức, chi tiết kiến trúc của các công trình và các vật thể kiến trúc khác.',
      'c. Tổ chức cây xanh công cộng, sân vườn, cây xanh đường phố và mặt nước.',
      'd. Tất cả các nội dung trên.',
    ],
    correct: 3
  },
  {
    question: 'Hệ thống cây xanh đô thị gồm có bao nhiêu nhóm chính?',
    options: [
      'a. 2 nhóm',
      'b. 3 nhóm',
      'c. 4 nhóm',
      'd. 5 nhóm',
    ],
    correct: 1
  },
  {
    question: 'Chỉ tiêu diện tích đất cây xanh sử dụng công cộng ngoài đơn vị ở trong các đô thị đối với đô thị loại đặc biệt là bao nhiêu?',
    options: [
      'a. ≥5 m2/người',
      'b. ≥6 m2/người',
      'c. ≥7 m2/người',
      'd. ≥8 m2/người',
    ],
    correct: 2
  },
  {
    question: 'Đánh giá Môi trường Chiến lược (ĐMC) là một nội dung của đồ án quy hoạch xây dựng, được thực hiện khi nào trong quá trình lập đồ án quy hoạch xây dựng?',
    options: [
      'a. Thực hiện trước khi lập đồ án quy hoạch xây dựng',
      'b. Thực hiện đồng thời trong quá trình lập đồ án quy hoạch xây dựng',
      'c. Thực hiện sau khi lập đồ án quy hoạch xây dựng',
      'd. Được thực hiện riêng biệt, độc lập với đồ án quy hoạch xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Trong Báo cáo Đánh giá Môi trường chiến lược của các đồ án quy hoạch xây dựng, số lượng bản vẽ ít nhất kèm theo hồ sơ là bao nhiêu bản vẽ?',
    options: [
      'a. Ít nhất 01 bản vẽ',
      'b. Ít nhất 02 bản vẽ',
      'c. Ít nhất 03 bản vẽ',
      'd.',
      'd. Ít nhất trên 05 bản vẽ',
    ],
    correct: 1
  },
  {
    question: 'Việc thẩm định nội dung của Đánh giá Môi trường chiến lược (ĐMC) trong các đồ án Quy hoạch xây dựng được tiến hành khi nào?',
    options: [
      'a. Tiến hành trước khi thẩm định đồ án Quy hoạch xây dựng',
      'b. Tiến hành đồng thời với việc thẩm định đồ án quy hoạch xây dựng',
      'c. Sau khi thẩm định đồ án Quy hoạch xây dựng sẽ tiến hành thẩm định nội dung của ĐMC',
      'd. Thẩm định nội dung ĐMC riêng biệt, không liên quan đến thẩm định đồ án quy hoạch xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Quy mô dân số đô thị tối thiểu là bao nhiêu?',
    options: [
      'a. Tối thiểu 4000 người, vùng núi tối thiểu 2800 người',
      'b. Tối thiểu 5000 người, vùng núi tối thiểu 2800 người',
      'c. Tối thiểu 10 000 người, vùng núi tối thiểu 3200 người',
      'd. Tối thiểu 3000 người',
    ],
    correct: 0
  },
  {
    question: 'Đô thị gồm các loại nào?',
    options: [
      'a. Thành phố, thị xã, thị trấn, thị tứ',
      'b. Thành phố, thị xã, thị trấn',
      'c. Thành phố, thị xã, thị trấn, khu đô thị',
      'd. Thành phố, thị xã, thị trấn, quận, phường',
    ],
    correct: 1
  },
  {
    question: 'Những yêu cầu nào dưới đây phù hợp với yêu cầu của quy hoạch xây dựng vùng?',
    options: [
      'a. Xác định được tầm nhìn, viễn cảnh phát triển của toàn vùng; Xác định được chiến lược phát triển cho các đô thị trong vùng.',
      'b. Xác định được tầm nhìn, viễn cảnh phát triển của toàn vùng; Xác định được mục tiêu phát triển chiến lược cho toàn vùng.',
      'c. Xác định được tầm nhìn, viễn cảnh không gian vùng.',
      'd. Xác định được viễn cảnh cho các đô thị trong vùng; Xác định được mục tiêu phát triển chiến lược cho toàn vùng.',
    ],
    correct: 1
  },
  {
    question: 'Những yêu cầu nào dưới đây phù hợp với yêu cầu của quy hoạch chung xây dựng đô thị?',
    options: [
      'a. Xác định được viễn cảnh phát triển đô thị (tầm nhìn); Xác định được các chiến lược phát triển đô thị chính; Đề xuất được cấu trúc tổng thể phát triển không gian đô thị.',
      'b. Xác định được viễn cảnh phát triển toàn vùng; Xác định được các chiến lược phát triển đô thị chính; Đề xuất được cấu trúc tổng thể phát triển không gian đô thị.',
      'c. Xác định được các chiến lược phát triển cho toàn vùng; Đề xuất được cấu trúc tổng thể phát triển không gian đô thị.',
      'd. Xác định được cấu trúc tổ chức không gian cho từng khu vực chức năng đô thị; Đề xuất được các giải pháp chi tiết Thiết kế đô thị.',
    ],
    correct: 0
  },
  {
    question: 'Hạ tầng kỹ thuật đô thị bao gồm các hệ thống chính nào dưới đây?',
    options: [
      'a. Hệ thống giao thông, hệ thống cung cấp năng lượng, hệ thống chiếu sáng công cộng, hệ thống cấp thoát nước, hệ thống quản lý các chất thải, vệ sinh môi trường, hệ thống cây xanh công viên.',
      'b. Công trình giao thông, thông tin liên lạc, cung cấp năng lượng, chiếu sáng công cộng, cấp nước, thu gom và xử lý nước thải, chất thải rắn, nghĩa trang và công trình khác.',
      'c. Hệ thống giao thông, hệ thống công trình y tế, hệ thống chiếu sáng công cộng và chiếu sáng nghệ thuật công trình, hệ thống cấp thoát nước, hệ thống quản lý các chất thải, vệ sinh môi trường, hệ thống nghĩa trang.',
      'd. Hệ thống giao thông, hệ thống cung cấp năng lượng, hệ thống chiếu sáng công cộng, hệ thống cấp thoát nước, hệ thống quản lý các chất thải, vệ sinh môi trường, không kể nghĩa trang.',
    ],
    correct: 1
  },
  {
    question: 'Quy mô dân số của đơn vị ở là bao nhiêu?',
    options: [
      'a. Tối đa là 25.000 người, tối thiểu là 4000 người (đô thị miền núi là 2800 người).',
      'b. Tối đa là 20.000 người, tối thiểu là 4000 người (đô thị miền núi là 2800 người).',
      'c. Tối đa là 25.000 người, tối thiểu là 5000 người (đô thị miền núi là 2800 người).',
      'd. Tối đa là 20.000 người, tối thiểu là 5000 người',
    ],
    correct: 1
  },
  {
    question: 'Các công trình dịch vụ công cộng cấp đơn vị ở gồm những công trình chủ yếu nào?',
    options: [
      'a. Nhà trẻ, mẫu giáo, trường tiểu học, trung học cơ sở, chợ, bệnh viện, trung tâm thể dục thể thao, điểm sinh hoạt văn hóa.',
      'b. Nhà trẻ, mẫu giáo, trường tiểu học, trung học cơ sở, chợ, bến xe, trạm y tế, nhà thi đấu, điểm sinh hoạt văn hóa.',
      'c. Nhà trẻ, mẫu giáo, trường tiểu học, trung học cơ sở, chợ, trạm y tế, trung tâm thể dục thể thao, điểm sinh hoạt văn hóa.',
      'd. Nhà trẻ, mẫu giáo, trường dạy nghề, trung học cơ sở, chợ, trạm y tế, trung tâm thể dục thể thao, điểm sinh hoạt văn hóa.',
    ],
    correct: 2
  },
  {
    question: 'Nhóm nhà ở chung cư gồm những thành phần nào?',
    options: [
      'a. Diện tích chiếm đất của bản thân các khối nhà chung cư, diện tích sân đường và sân chơi nội bộ nhóm nhà ở, bãi đỗ xe nội bộ và sân vườn trong nhóm nhà ở, nhà trẻ mẫu giáo.',
      'b. Diện tích chiếm đất của bản thân các khối nhà chung cư, diện tích sân đường và sân chơi nội bộ nhóm nhà ở, bãi đỗ xe nội bộ và sân vườn trong nhóm nhà ở.',
      'c. Diện tích chiếm đất của bản thân các khối nhà chung cư, diện tích sân đường và sân chơi nội bộ nhóm nhà ở, chợ và công trình dịch vụ.',
      'd. Diện tích chiếm đất của bản thân các khối nhà chung cư, bãi đỗ xe nội bộ, không kể sân vườn trong nhóm nhà ở.',
    ],
    correct: 1
  },
  {
    question: 'Nhóm nhà ở liên kế, nhà ở riêng lẻ bao gồm những thành phần nào?',
    options: [
      'a. Diện tích lô đất xây dựng nhà ở của các hộ gia đình (đất ở), diện tích lô đất xây dựng công trình thương mại dịch vụ trong nhóm nhà.',
      'b. Chỉ bao gồm diện tích lô đất xây dựng nhà ở của các hộ gia đình (đất ở).',
      'c. Diện tích lô đất xây dựng nhà ở của các hộ gia đình (đất ở), diện tích đường nhóm nhà ở (đường giao thông chung dẫn đến các lô đất của các hộ gia đình), không kể diện tích vườn hoa cây xanh.',
      'd. Diện tích lô đất xây dựng nhà ở của các hộ gia đình (đất ở), diện tích đường nhóm nhà ở (đường giao thông chung dẫn đến các lô đất của các hộ gia đình), diện tích vườn hoa, sân chơi nội bộ nhóm nhà ở.',
    ],
    correct: 3
  },
  {
    question: 'Đất ở trong xây dựng nhà ở liên kế và nhà ở riêng lẻ là gì?',
    options: [
      'a. Là diện tích trong khuôn viên các lô đất ở, bao gồm diện tích chiếm đất của các công trình nhà ở liên kế và nhà ở riêng lẻ và sân vườn, đường dẫn riêng vào nhà ở liên kế hoặc nhà ở riêng lẻ đó, không bao gồm đường giao thông chung.',
      'b. Là diện tích trong khuôn viên các lô đất ở, bao gồm diện tích chiếm đất của các công trình nhà ở liên kế và nhà ở riêng lẻ và sân vườn, không bao gồm đường dẫn riêng vào nhà.',
      'c. Là diện tích trong khuôn viên các lô đất ở, không bao gồm đường giao thông.',
      'd. Là diện tích trong khuôn viên các lô đất ở, bao gồm diện tích chiếm đất của các công trình nhà ở liên kế và nhà ở riêng lẻ và sân vườn, đường dẫn riêng vào nhà ở và đường giao thông chung xung quanh',
    ],
    correct: 0
  },
  {
    question: 'Những yêu cầu nào dưới đây phù hợp với yêu cầu của quy hoạch chi tiết xây dựng đô thị tỷ lệ 1/500?',
    options: [
      'a. Đề xuất được các giải pháp tổ chức không gian quy hoạch kiến trúc cảnh quan trên mặt đất và không gian xây dựng ngầm;',
      'b. Đề xuất được các giải pháp thiết kế sơ bộ công trình, cảnh quan trên mặt đất và không gian xây dựng ngầm;',
      'c. Đề xuất được cấu trúc tổng thể phát triển không gian đô thị trên mặt đất và không gian xây dựng ngầm;',
      'd. Đề xuất được cấu trúc tổ chức không gian toàn đô thị.',
    ],
    correct: 0
  },
  {
    question: 'Những nội dung về quy hoạch sử dụng đất trong quy hoạch chi tiết xây dựng đô thị tỷ lệ 1/500 là:',
    options: [
      'a. Xác định diện tích và chiều cao, hình thức kiến trúc công trình cho từng lô đất.',
      'b. Xác định diện tích, mật độ xây dựng và chiều cao công trình cho từng lô đất, xác định quy mô các công trình ngầm',
      'c. Xác định diện tích đất, hệ số sử dụng đất trên từng lô đất, xác định quy mô các công trình ngầm',
      'd. Xác định diện tích, chiều cao, hình thái công trình cho từng lô đất',
    ],
    correct: 1
  },
  {
    question: 'Đất được lựa chọn để xây dựng đô thị phải đáp ứng những yêu cầu điều kiện tự nhiên nào dưới đây?',
    options: [
      'a. Có điều kiện tự nhiên có thể xây dựng công trình cao tầng từ 30 tầng trở lên; có khả năng khắc phục, không chế hiện tượng sụt lở, cax-tơ, chấn động…',
      'b. Có điều kiện tự nhiên (địa hình, địa chất, thủy văn, khí hậu) thuận lợi để xây dựng công trình sản xuất; không nằm trong khu vực đất có các hiện tượng mưa lớn gây ngập lụt hoặc hệ sinh thái nghèo nàn.',
      'c. Có điều kiện tự nhiên (địa hình, địa chất, thủy văn, khí hậu) có thể xây dựng công trình; không nằm trong khu vực dễ hỏa hoạn, cháy nổ.',
      'd. Có điều kiện tự nhiên (địa hình, địa chất, thủy văn, khí hậu) có thể xây dựng công trình; không nằm trong khu vực đất có các hiện tượng gậy sụt lở, cax-tơ, trôi trượt, xói mòn, chấn động…',
    ],
    correct: 3
  },
  {
    question: 'Theo QCVN 01:2019/BXD, đối với khoảng cách an toàn về môi trường trong khu công nghiệp, khu chế xuất và khu công nghệ cao không cần đáp ứng yêu cầu nào sau đây ?',
    options: [
      'a. Phải đảm bảo khoảng cách của các nhà xưởng sản xuất, kho chứa vật liệu, thành phẩm, phế thải có tính chất độc hại',
      'b. Phải đảm bảo khoảng cách của các các công trình phụ trợ có phát sinh chất thải ngoài dân dụng khác',
      'c. Phải đảm bảo mật độ xây dựng thuần của lô đất xây dựng nhà máy, kho tàng tối đa là 70%.',
      'd. Phải bố trí dải cây xanh cách ly quanh khu công nghiệp, kho tàng và cụm công nghiệp với chiều rộng ≥ 10 m;',
    ],
    correct: 2
  },
  {
    question: 'Các công trình dịch vụ đô thị như nhà trẻ, trường học, bệnh viện cần được bố trí như thế nào?',
    options: [
      'a. Các công trình nhà trẻ, trường học, bệnh viện… phải bố trí tiếp giáp đường giao thông chính cấp đô thị trở lên, đảm bảo có đủ diện tích sân vườn, cây xanh và chỗ đỗ xe.',
      'b. Các công trình nhà trẻ, trường học, bệnh viện… chỉ được bố trí tiếp giáp các trục đường trong nhóm nhà, đảm bảo có đủ diện tích sân vườn, cây xanh và chỗ đỗ xe.',
      'c. Các công trình nhà trẻ, trường học, bệnh viện… không bố trí tiếp giáp các trục đường cấp đô thị trở lên, đảm bảo có đủ diện tích sân vườn, cây xanh và chỗ đỗ xe.',
      'd. Các công trình nhà trẻ, trường học, bệnh viện…có thể bố trí tiếp giáp các trục đường cấp đô thị trở lên với điều kiện đảm bảo có đủ diện tích sân vườn, cây xanh và chỗ đỗ xe.',
    ],
    correct: 2
  },
  {
    question: 'Chỉ tiêu diện tích đất cho các công trình trường tiểu học trong đơn vị ở tối thiểu như thế nào?',
    options: [
      'a. Chỉ tiêu sử dụng công trình tối thiểu là 50 chỗ/ 1000 người. Chỉ tiêu sử dụng đất tối thiểu là 15 m2/ 1 chỗ.',
      'b. Chỉ tiêu sử dụng công trình tối thiểu là 80 chỗ/ 1000 người. Chỉ tiêu sử dụng đất tùy theo chiều cao công trình',
      'c. Chỉ tiêu sử dụng công trình tối thiểu là 50 chỗ/ 1000 người. Chỉ tiêu sử dụng đất tùy theo phương án thiết kế công trình.',
      'd. Chỉ tiêu sử dụng công trình tối thiểu là 50 chỗ/ 1000 người. Chỉ tiêu sử dụng đất tối thiểu là 5000 m2/ trường.',
    ],
    correct: 0
  },
  {
    question: 'Mật độ xây dựng gộp (brut-tô) tối đa cho phép của đơn vị ở là bao nhiêu?',
    options: [
      'a. Mật độ xây dựng gộp (brut-tô) tối đa cho phép của đơn vị ở là 20%.',
      'b. Mật độ xây dựng gộp (brut-tô) tối đa cho phép của đơn vị ở là 60%.',
      'c. Mật độ xây dựng gộp (brut-tô) tối đa cho phép của đơn vị ở là 90%.',
      'd. Mật độ xây dựng gộp (brut-tô) tối đa cho phép của đơn vị ở là 80%.',
    ],
    correct: 1
  },
  {
    question: 'Mật độ xây dựng gộp (brut- tô) tối đa của khu công viên công cộng là bao nhiêu?',
    options: [
      'a. Mật độ xây dựng gộp (brut- tô) tối đa của khu công viên công cộng là 5%.',
      'b. Mật độ xây dựng gộp (brut- tô) tối đa của khu công viên công cộng là 2%.',
      'c. Mật độ xây dựng gộp (brut- tô) tối đa của khu công viên công cộng là 15%.',
      'd. Mật độ xây dựng gộp (brut- tô) tối đa của khu công viên công cộng là 25%.',
    ],
    correct: 0
  },
  {
    question: 'Quy định về sử dụng đất đối với các công trình giáo dục trong Quy hoạch cải tạo các khu vực cũ trong đô thị?',
    options: [
      'a. Trừ các công trình giáo dục phải đảm bảo chuẩn quốc gia do Bộ giáo dục và Đào tạo quy định, chỉ tiêu sử dụng đất các loại công trình khác trong các khu vực quy hoạch cải tạo được giảm và tối thiểu đạt 20% so với các chỉ tiêu sử dụng đất tương ứng trong các khu vực xây dựng mới.',
      'b. Chỉ tiêu sử dụng đất các loại công trình trong các khu vực quy hoạch cải tạo giữ nguyên so với các chỉ tiêu sử dụng đất tương ứng trong các khu vực xây dựng mới.',
      'c. Trừ các công trình giáo dục phải đảm bảo chuẩn quốc gia do Bộ giáo dục và Đào tạo quy định, chỉ tiêu sử dụng đất các loại công trình khác trong các khu vực quy hoạch cải tạo được giảm và tối thiểu đạt 50% so với các chỉ tiêu sử dụng đất tương ứng trong các khu vực xây dựng mới.',
      'd. Chỉ tiêu công trình giáo dục trong các khu vực quy hoạch cải tạo do Bộ giáo dục và Đào tạo quy định theo mức chuẩn quốc gia.',
    ],
    correct: 2
  },
  {
    question: 'Trong nội dung Thiết kế đô thị của đồ án quy hoạch chi tiết 1/500 cần đáp ứng yêu cầu về quản lý kiến trúc đô thị?',
    options: [
      'a. Có đầy đủ nội dung để quản lý kiến trúc cảnh quan của từng công trình, từng ô phố, từng tuyến phố và khu vực.',
      'b. Có đầy đủ nội dung để quản lý kiến trúc cảnh quan tổng thể đô thị',
      'c. Có đầy đủ nội dung để quản lý hạ tầng kỹ thuật, môi trường sinh thái của đô thị và từng công trình, từng ô phố, từng tuyến phố và khu vực.',
      'd. Có đầy đủ nội dung để quản lý kiến trúc cảnh quan của một số công trình.',
    ],
    correct: 0
  },
  {
    question: 'Theo QCVN 01:2019/BXD, Yêu cầu nào sau đây là đúng về kiến trúc cảnh quan, thiết kế đô thị và bố cục các công trình đối với các khu vực phát triển mới ?',
    options: [
      'a. Khoảng cách tối thiểu giữa các tòa nhà, công trình riêng lẻ hoặc dãy nhà liền kề phải được quy định tại đồ án quy hoạch chi tiết và thiết kế đô thị.',
      'b. Bố trí các công trình, xác định chiều cao công trình phải đảm bảo giảm thiểu các tác động tiêu cực của điều kiện tự nhiên (nắng, gió...)',
      'c. Phải đảm bảo các quy định về phòng cháy chữa cháy.',
      'd. Phải đáp ứng tất cả các nội dung trên',
    ],
    correct: 3
  },
  {
    question: 'Theo QCVN 01:2019/BXD, Trường hợp chỉ giới xây dựng trùng với chỉ giới đường đỏ, quy định về các chi tiết kiến trúc của công trình tiếp giáp với tuyến đường phải đảm bảo nguyên tắc nào sau đây ?',
    options: [
      'a. Không cản trở các hoạt động giao thông tại lòng đường; đảm bảo an toàn, thuận tiện cho các hoạt động đi bộ trên vỉa hè; Không làm ảnh hưởng đến hệ thống cây xanh, công trình hạ tầng kỹ thuật nổi và ngầm trên tuyến phố',
      'b. Đảm bảo tính thống nhất về cảnh quan trên tuyến phố hoặc từng đoạn phố; Đảm bảo tuân thủ các quy định về phòng cháy chữa cháy và các hoạt động của phương tiện chữa cháy',
      'c. Phải đảm bảo cả a và b',
      'd. Phải đảm bảo giao thông đường phố tại khu vực cổng ra vào công trình được an toàn, thông suốt',
    ],
    correct: 0
  },
  {
    question: 'Theo QCVN 01:2019/BXD, Trường hợp chỉ giới xây dựng lùi vào so với chỉ giới đường đỏ, quy định về các chi tiết kiến trúc của công trình tiếp giáp với tuyến đường phải đảm bảo nguyên tắc nào sau đây ?',
    options: [
      'a. Không một bộ phận, chi tiết kiến trúc nào của công trình được vượt quá chỉ giới đường đỏ',
      'b. Đảm bảo tính thống nhất về cảnh quan trên tuyến phố hoặc từng đoạn phố',
      'c. Đảm bảo tuân thủ các quy định về phòng cháy chữa cháy và hoạt động của phương tiện chữa cháy',
      'd. Phải đảm bảo tất cả các nguyên tắc ở trên',
    ],
    correct: 0
  },
  {
    question: 'Trong quy hoạch nông thôn, việc phát triển đất để mở rộng các điểm dân cư nông thôn phải tuân thủ quy định nào?',
    options: [
      'a. Hạn chế sử dụng đất canh tác, cần tận dụng đất đồi, núi, gò, bãi, đất có năng suất trồng trọt kém để xây dựng và mở rộng các điểm dân cư.',
      'b. Không được sử dụng đất canh tác, đặc biệt là đất canh tác nông nghiệp năng suất cao để xây dựng và mở rộng các điểm dân cư.',
      'c. Chỉ được sử dụng đất đồi, núi, gò, bãi, đất có năng suất trồng trọt kém để xây dựng và mở rộng các điểm dân cư.',
      'd. Hạn chế mở rộng các điểm dân cư, chỉ tập trung cải tạo trên cơ sở quỹ đất hiện có.',
    ],
    correct: 0
  },
  {
    question: 'Những công trình dịch vụ đô thị nào dưới đây không thuộc cấp quản lý đơn vị ở?',
    options: [
      'a. Trường tiểu học.',
      'b. Bệnh viện đa khoa',
      'c. Trường mẫu giáo',
      'd. Trạm y tế',
    ],
    correct: 1
  },
  {
    question: 'Đường giao thông chính của đô thị có được xuyên cắt qua đơn vị ở không?',
    options: [
      'a. Không',
      'b. Có',
      'c. Có thể, tùy trường hợp',
      'd. Được xuyên qua nếu hạn chế tốc độ',
    ],
    correct: 0
  },
  {
    question: 'Bán kính phục vụ của công trình dịch vụ cấp I và vườn hoa sân chơi trong đơn vị ở là bao nhiêu?',
    options: [
      'a. ≤ 500 m',
      'b. ≤ 300 m',
      'c. ≤ 1000m',
      'd. Không yêu cầu cụ thể',
    ],
    correct: 0
  },
  {
    question: 'Chỉ giới xây dựng là gì?',
    options: [
      'a. Là đường giới hạn cho phép xây dựng nhà, công trình trên lô đất',
      'b. Là đường giới hạn cho phép xây dựng tường rào của lô đất',
      'c. Là đường giới hạn cho phép xây dựng nhà, công trình, công trình kỹ thuật ngầm.',
      'd. Là đường giới hạn cho phép xây dựng nhà, trồng cây xanh, tường rào',
    ],
    correct: 0
  },
  {
    question: 'Đất ở trong lô đất xây dựng nhà chung cư là gì?',
    options: [
      'a. Là diện tích chiếm đất của các công trình nhà ở chung cư.',
      'b. Là diện tích chiếm đất của các công trình nhà ở chung cư và sân vườn trên lô đất',
      'c. Là diện tích chiếm đất của các công trình nhà ở chung cư và đường giao thông xung quanh',
      'd. Là diện tích chiếm đất của các công trình nhà ở chung cư và sân vườn, đường giao thông, công trình kỹ thuật trên lô đất',
    ],
    correct: 0
  },
  {
    question: 'Chỉ giới đường đỏ là gì?',
    options: [
      'a. Là đường ranh giới phân định giữa phần lô đất để xây dựng công trình và phần đất còn lại.',
      'b. Là đường ranh giới phân định giữa phần lô đất để xây dựng công trình và phần đất dành cho đường giao thông hoặc các công trình hạ tầng kỹ thuật.',
      'c. Là đường ranh giới phân định phạm vi để xây dựng công trình và phần đất dành cho đường giao thông hoặc các công trình hạ tầng kỹ thuật.',
      'd. Là đường ranh giới phân định phạm vi sử dụng đất của công trình giao thông và công trình khác.',
    ],
    correct: 1
  },
  {
    question: 'Các công trình dịch vụ đô thị phục vụ trong đơn vị ở (trường học, chợ…) cần đảm bảo bán kính phục vụ là bao nhiêu?',
    options: [
      'a. Không quá 700m. Riêng với khu vực có địa hình phức tạp, bán kính phục vụ không quá 1km.',
      'b. Không quá 500m. Riêng với khu vực có địa hình phức tạp, bán kính phục vụ không quá 1km.',
      'c. Không quá 300m. Riêng với khu vực có địa hình phức tạp, bán kính phục vụ không quá 500m.',
      'd. Không quá 300m.',
    ],
    correct: 1
  },
  {
    question: 'Chỉ tiêu sử dụng đất ở (các lô đất ở gia đình) cho các điểm dân cư nông thôn?',
    options: [
      'a. Phải phù hợp với điều kiện cụ thể của địa phương và ≥ 50m2/ người.',
      'b. Phải phù hợp với điều kiện cụ thể của địa phương và ≥ 25m2/ người.',
      'c. Phải phù hợp với điều kiện cụ thể của địa phương.',
      'd. Phải phù hợp với điều kiện cụ thể của địa phương và ≥ 10m2/ người.',
    ],
    correct: 1
  },
  {
    question: 'Khoảng lùi tối thiểu giữa chỉ giới đường đỏ và chỉ giới xây dựng đối với công trình có chiều cao nhỏ hơn hoặc bằng 16m là bao nhiêu?',
    options: [
      'a. 0 m',
      'b. 6m',
      'c. từ 0 đến 6m tùy thuộc chiều rộng lộ giới',
      'd. 3m',
    ],
    correct: 0
  },
  {
    question: 'Khu nào không được xác định là khu chức năng?',
    options: [
      'a. Khu di tích lịch sử - văn hóa',
      'b. Khu chế xuất',
      'c. Khu du lịch',
      'd. Khu kinh tế',
    ],
    correct: 0
  },
  {
    question: 'Khu nào được xác định là khu chức năng?',
    options: [
      'a. Khu thể dục thể thao',
      'b. Khu bảo tồn',
      'c. Khu sinh thái',
      'd. Khu vực đầu mối hạ tầng kỹ thuật',
    ],
    correct: 0
  },
  {
    question: 'Đất dân dụng không bao gồm đất xây dựng công trình nào?',
    options: [
      'a. Đất công trình dịch vụ - công cộng đô thị',
      'b. Đất cây xanh chuyên dụng',
      'c. Đất cây xanh công cộng đô thị',
      'd. Đất hạ tầng kỹ thuật đô thị',
    ],
    correct: 1
  },
  {
    question: 'Loại đất nào không phải là đất cây xanh chuyên dụng?',
    options: [
      'a. Đất cây xanh phục vụ nghiên cứu',
      'b. Đất vườn ươm',
      'c. Đất cây xanh cách ly',
      'd. Đất cây xanh được trồng trong khuôn viên các công trình do tổ chức, cá nhân quản lý và sử dụng',
    ],
    correct: 3
  },
  {
    question: 'Loại đất nào là đất cây xanh sử dụng hạn chế?',
    options: [
      'a. Đất vườn ươm',
      'b. Đất vườn hoa',
      'c. Đất công viên chuyên đề',
      'd. Đất cây xanh cách ly',
    ],
    correct: 2
  },
  {
    question: 'Hệ thống hạ tầng kỹ thuật đô thị không bao gồm công trình nào?',
    options: [
      'a. Hệ thống dịch vụ - công cộng',
      'b. Hệ thống nhà tang lễ, nghĩa trang và cơ sở hỏa táng',
      'c. Hệ thống chiếu sáng công cộng',
      'd. Hệ thống vệ sinh công cộng',
    ],
    correct: 0
  },
  {
    question: 'Hệ thống hạ tầng xã hội đô thị không bao gồm công trình nào?',
    options: [
      'a. Hệ thống công viên',
      'b. Hệ thống dịch vụ - công cộng',
      'c. Hệ thống bãi đỗ xe',
      'd. Hệ thống sân chơi',
    ],
    correct: 2
  },
  {
    question: 'Hệ thống dịch vụ - công cộng đô thị không bao gồm công trình nào?',
    options: [
      'a. Y tế',
      'b. Vệ sinh công cộng',
      'c. Giáo dục',
      'd. Thể dục thể thao',
    ],
    correct: 1
  },
  {
    question: 'Mật độ xây dựng thuần (netto) không bao gồm diện tích chiếm đất của công trình nào?',
    options: [
      'a. Bộ phận thông gió tầng hầm có mái che',
      'b. Nhà bảo vệ',
      'c. Tiểu cảnh trang trí',
      'd. Cả 3 phương án trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Mật độ xây dựng gộp của một khu vực đô thị là gì?',
    options: [
      'a. Là tỷ lệ diện tích chiếm đất của các công trình kiến trúc chính trên diện tích toàn khu đất',
      'b. Là tỷ lệ diện tích chiếm đất của tất cả các công trình kiến trúc trên diện tích toàn khu đất',
      'c. Là tỷ lệ diện tích chiếm đất của các công trình kiến trúc chính trên diện tích xây dựng đô thị',
      'd. Là tỷ lệ diện tích chiếm đất của tất cả các công trình kiến trúc trên diện tích xây dựng đô thị',
    ],
    correct: 0
  },
  {
    question: 'Đường giới hạn cho phép xây dựng công trình chính trên thửa đất được gọi là gì?',
    options: [
      'a. Chỉ giới đường đỏ',
      'b. Chỉ giới xây dựng',
      'c. Lộ giới',
      'd. Khoảng lùi',
    ],
    correct: 1
  },
  {
    question: 'Khoảng không gian giữa chỉ giới đường đỏ và chỉ giới xây dựng được gọi là gì?',
    options: [
      'a. Khoảng lùi',
      'b. Lộ giới',
      'c. Hành lang bảo vệ an toàn',
      'd. Khoảng cách an toàn về môi trường',
    ],
    correct: 0
  },
  {
    question: 'Đồ án quy hoạch ở tỷ lệ bản đồ nào phải thể hiện hệ thống hạ tầng đến cấp đường khu vực hoặc tương đương?',
    options: [
      'a. 1/10.000',
      'b. 1/5.000',
      'c. 1/2.000',
      'd. 1/500',
    ],
    correct: 1
  },
  {
    question: 'Đồ án quy hoạch ở tỷ lệ bản đồ nào phải thể hiện hệ thống hạ tầng đến cấp đường phân khu vực và ô đất giới hạn bởi các đường phân khu vực?',
    options: [
      'a. 1/10.000',
      'b. 1/5.000',
      'c. 1/2.000',
      'd. 1/500',
    ],
    correct: 2
  },
  {
    question: 'Đồ án quy hoạch ở tỷ lệ bản đồ nào phải thể hiện hệ thống hạ tầng đến đường nhóm nhà ở, đường đi xe đạp, đường đi bộ và các lô đất?',
    options: [
      'a. 1/10.000',
      'b. 1/5.000',
      'c. 1/2.000',
      'd. 1/500',
    ],
    correct: 3
  },
  {
    question: 'Đồ án quy hoạch ở tỷ lệ bản đồ 1/2.000 phải thể hiện hệ thống hạ tầng đến cấp đường nào?',
    options: [
      'a. đường liên khu vực hoặc tương đương',
      'b. đường chính khu vực hoặc tương đương',
      'c. đường khu vực hoặc tương đương',
      'd. đường phân khu vực',
    ],
    correct: 3
  },
  {
    question: 'Chỉ tiêu đất dân dụng bình quân toàn đô thị áp dụng cho đô thị loại III-IV là bao nhiêu?',
    options: [
      'a. 35 - 50 m2/ng',
      'b. 45 - 60 m2/ng',
      'c. 50 - 80 m2/ng',
      'd. 70 - 100 m2/ng',
    ],
    correct: 2
  },
  {
    question: 'Chỉ tiêu đất dân dụng bình quân toàn đô thị áp dụng cho đô thị loại V là bao nhiêu?',
    options: [
      'a. 45 - 60 m2/ng',
      'b. 50 - 80 m2/ng',
      'c. 70 - 100 m2/ng',
      'd. 80 - 110 m2/ng',
    ],
    correct: 2
  },
  {
    question: 'Đường giao thông cấp nào không được chia cắt đơn vị ở?',
    options: [
      'a. Đường chính đô thị',
      'b. Đường liên khu vực',
      'c. Đường chính khu vực',
      'd. Đường khu vực',
    ],
    correct: 0
  },
  {
    question: 'Phải bố trí ít nhất một trường trung học phổ thông cho khu vực có quy mô dân số là bao nhiêu?',
    options: [
      'a. Lớn hơn 15.000 người',
      'b. Lớn hơn 20.000 người',
      'c. Lớn hơn 25.000 người',
      'd. Lớn hơn 30.000 người',
    ],
    correct: 1
  },
  {
    question: 'Trong khoảng cách an toàn môi trường đối với khu công nghiệp không được bố trí công trình nào?',
    options: [
      'a. Bãi đỗ xe',
      'b. Nhà bảo vệ',
      'c. Công trình dân dụng',
      'd. Kho tàng',
    ],
    correct: 2
  },
  {
    question: 'Tỷ lệ phần trăm tối thiểu của đất giao thông, đất cây xanh, đất các khu kỹ thuật trong khu công nghệ cao tương ứng là bao nhiêu?',
    options: [
      'a. 10 / 15 / 4',
      'b. 8 / 10 / 2',
      'c. 8 / 15 / 1',
      'd. 10 / 10 / 1',
    ],
    correct: 3
  },
  {
    question: 'Bán kính phục vụ tối đa của trụ sở các đội Cảnh sát phòng cháy và chữa cháy đối với khu vực trung tâm đô thị là bao nhiêu?',
    options: [
      'a. 1 km',
      'b. 2 km',
      'c. 3 km',
      'd. 5 km',
    ],
    correct: 2
  },
  {
    question: 'Tỷ lệ đất giao thông (không bao gồm giao thông tĩnh) so với đất xây dựng đô thị, tính đến đường liên khu vực tối thiểu là bao nhiêu?',
    options: [
      'a. 6%',
      'b. 9%',
      'c. 13%',
      'd. 18%',
    ],
    correct: 0
  },
  {
    question: 'Tỷ lệ đất giao thông (không bao gồm giao thông tĩnh) so với đất xây dựng đô thị, tính đến đường khu vực tối thiểu là bao nhiêu?',
    options: [
      'a. 6%',
      'b. 9%',
      'c. 13%',
      'd. 18%',
    ],
    correct: 2
  },
  {
    question: 'Tỷ lệ đất giao thông (không bao gồm giao thông tĩnh) so với đất xây dựng đô thị, tính đến đường phân khu vực tối thiểu là bao nhiêu?',
    options: [
      'a. 13%',
      'b. 15%',
      'c. 18%',
      'd. 21%',
    ],
    correct: 2
  },
  {
    question: 'Quy mô diện tích các nghĩa trang tập trung phải đảm bảo chỉ tiêu tối thiểu là bao nhiêu?',
    options: [
      'a. 0,03ha/1000 dân',
      'b. 0,04ha/1000 dân',
      'c. 0,05ha/1000 dân',
      'd. 0,06ha/1000 dân',
    ],
    correct: 1
  },
  {
    question: 'Khu vực nào không thuộc khu vực phát triển đô thị?',
    options: [
      'a. Khu vực cải tạo, bảo tồn',
      'b. Khu vực tái thiết đô thị',
      'c. khu vực có chức năng chuyên biệt',
      'd. khu vực dự trữ phát triển',
    ],
    correct: 3
  },
  {
    question: 'Theo Luật, việc lập quy hoạch cần phải cụ thể hóa, phù hợp với các loại quy hoạch nào dưới đây?',
    options: [
      'a. Quy hoạch cấp quốc gia, quy hoạch vùng, quy hoạch tỉnh',
      'b. Quy hoạch đô thị, quy hoạch nông thôn',
      'c. Quy hoạch phát triển công nghiệp, quy hoạch giao thông',
      'd. Quy hoạch cấp địa phương và các dự án đầu tư',
    ],
    correct: 0
  },
  {
    question: 'Việc lập quy hoạch cần đáp ứng yêu cầu nào sau đây?',
    options: [
      'a. Bảo đảm công khai, minh bạch, hài hòa lợi ích giữa Nhà nước và người dân',
      'b. Bảo đảm công khai, minh bạch, hài hòa lợi ích giữa Nhà nước, người dân và doanh nghiệp',
      'c. Đảm bảo lợi ích của doanh nghiệp và các khu vực tư nhân trong quy hoạch',
      'd. Chỉ bảo đảm lợi ích của Nhà nước và doanh nghiệp',
    ],
    correct: 1
  },
  {
    question: 'Việc lập quy hoạch cần phù hợp với mục tiêu nào sau đây?',
    options: [
      'a. Phát triển kinh tế - xã hội, bảo đảm quốc phòng và an ninh',
      'b. Phát triển các khu đô thị lớn và khu công nghiệp hiện đại',
      'c. Tăng trưởng kinh tế nhanh chóng mà không cần bảo vệ môi trường',
      'd. Đảm bảo lợi ích của doanh nghiệp quốc tế hoạt động tại địa phương',
    ],
    correct: 0
  },
  {
    question: 'Quy hoạch đô thị và nông thôn đóng vai trò gì trong việc lập dự án đầu tư xây dựng?',
    options: [
      'a. Là tài liệu tham khảo cho việc lập dự án đầu tư xây dựng',
      'b. Là cơ sở để lập dự án đầu tư xây dựng, bảo đảm sự phù hợp với từng loại, cấp độ quy hoạch đô thị và nông thôn',
      'c. Chỉ liên quan đến thiết kế đô thị riêng mà không áp dụng cho dự án đầu tư xây dựng',
      'd. Không có vai trò trong việc lập dự án đầu tư xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Quy hoạch đô thị và nông thôn phải bảo đảm sự phù hợp với yếu tố nào trong việc lập dự án đầu tư xây dựng?',
    options: [
      'a. Từng loại, cấp độ quy hoạch đô thị và nông thôn',
      'b. Chỉ tiêu kinh tế - xã hội của địa phương',
      'c. Quy hoạch quốc gia và quy hoạch cấp vùng',
      'd. Quy hoạch xây dựng nông thôn mới',
    ],
    correct: 0
  },
  {
    question: 'Chính phủ có trách nhiệm gì trong việc quy định chi tiết quy hoạch đô thị và nông thôn liên quan đến dự án đầu tư xây dựng?',
    options: [
      'a. Ban hành các hướng dẫn chung về quy hoạch quốc gia',
      'b. Quy định chi tiết về sự phù hợp giữa quy hoạch và dự án đầu tư xây dựng',
      'c. Chỉ đạo các địa phương thực hiện quy hoạch theo nhu cầu đầu tư của doanh nghiệp',
      'd. Quản lý toàn bộ các dự án đầu tư xây dựng thuộc khu vực đô thị đặc biệt',
    ],
    correct: 1
  },
  {
    question: 'Căn cứ để lập Quy hoạch đô thị và nông thôn?',
    options: [
      'a. Cơ sở dữ liệu nền địa lý quốc gia, hệ thống bản đồ địa hình quốc gia được thành lập theo quy định pháp luật về đo đạc và bản đồ; Quy chuẩn về quy hoạch đô thị và nông thôn và quy chuẩn, tiêu chuẩn ngành có liên quan.',
      'b. Tài liệu, số liệu về điều kiện tự nhiên, kinh tế - xã hội của địa phương, ngành liên quan;',
      'c. Kết quả việc thực hiện quy hoạch đô thị và nông thôn giai đoạn trước;',
      'd. Tất cả các căn cứ trên',
    ],
    correct: 3
  },
  {
    question: 'Điều kiện của cá nhân tham gia lập nhiệm vụ quy hoạch, quy hoạch đô thị và nông thôn là gì?',
    options: [
      'a. Cá nhân trong nước, cá nhân nước ngoài tham gia lập nhiệm vụ quy hoạch, quy hoạch đô thị và nông thôn phải đáp ứng đủ điều kiện năng lực theo quy định của pháp luật hoặc theo thỏa thuận thừa nhận lẫn nhau về chuyên môn, hành nghề giữa Việt Nam và các nước.',
      'b. Có đủ điều kiện năng lực lập thiết kế quy hoạch ĐT-NT; Cá nhân đảm nhận chức danh chủ nhiệm, chủ trì thiết kế đồ án quy hoạch xây dựng phải có chứng chỉ hành nghề và năng lực phù hợp.',
      'c. Có đủ điều kiện năng lực lập thiết kế quy hoạch phù hợp; Cá nhân đảm nhận chức danh chủ nhiệm, chủ trì thiết kế đồ án quy hoạch xây dựng phải có chứng chỉ hành nghề và năng lực phù hợp với từng loại quy hoạch ĐT-NT.',
      'd. Cả 3 phương án trên đều sai',
    ],
    correct: 0
  },
  {
    question: 'Trình tự lập, thẩm định, phê duyệt nhiệm vụ quy hoạch, quy hoạch đô thị và nông thôn là phương án nào dưới đây?',
    options: [
      'a. Lập, phê duyệt Nhiệm vụ quy hoạch - Lập, phê duyệt đồ án quy hoạch',
      'b. Lập, phê duyệt Nhiệm vụ quy hoạch- Điều tra, khảo sát thực địa, thu thập bản đồ, tài liệu, số liệu về hiện trạng - Lập, phê duyệt đồ án quy hoạch',
      'c. Điều tra, khảo sát thực địa, thu thập bản đồ, tài liệu, số liệu về hiện trạng - Lập, phê duyệt đồ án quy hoạch',
      'd. Lựa chọn tổ chức tư vấn lập nhiệm vụ quy hoạch (nếu có)-Lập, Thẩm định nhiệm vụ quy hoạch- Phê duyệt nhiệm vụ quy hoạch- Lựa chọn tổ chức tư vấn lập quy hoạch- Lập,Thẩm định quy hoạch- Phê duyệt quy hoạch.',
    ],
    correct: 3
  },
  {
    question: 'Nội dung nào không phải là trách nhiệm của tổ chức tư vấn?',
    options: [
      'a. Bảo đảm hồ sơ quy hoạch đáp ứng quy định nội dung kỹ thuật về cơ sở dữ liệu quy hoạch đô thị và nông thôn.',
      'b. Lấy ý kiến về quy hoạch đô thị và nông thôn',
      'c. Chịu trách nhiệm về nguồn gốc, tính xác thực của số liệu, tài liệu được thu thập và công bố trong nội dung quy hoạch đô thị và nông thôn đã được phê duyệt.',
      'd. Tham gia ý kiến khi cơ quan nhà nước yêu cầu trong quá trình thực hiện quy hoạch đô thị và nông thôn do mình lập.',
    ],
    correct: 1
  },
  {
    question: 'Nội dung nào không nằm trong Quy hoạch chung thành phố thuộc tỉnh, thành phố thuộc thành phố trực thuộc trung ương, thị xã, đô thị mới dự kiến trở thành thị xã, thành phố thuộc tỉnh, thành phố thuộc thành phố trực thuộc trung ương?',
    options: [
      'a. Đánh giá điều kiện tự nhiên và hiện trạng về kinh tế - xã hội',
      'b. Xác định cấu trúc, phạm vi ranh giới và định hướng phát triển không gian đô thị và nông thôn',
      'c. Xác định các khu vực theo yêu cầu quản lý, phát triển;',
      'd. Xác định khu vực khai thác, sử dụng không gian ngầm, khu vực hạn chế, khu vực cấm xây dựng công trình ngầm',
    ],
    correct: 3
  },
  {
    question: 'Thời hạn quy hoạch chung đô thị trừ các thành phố trực thuộc Trung ương là bao lâu?',
    options: [
      'a. 10-15 năm',
      'b. 20 năm',
      'c. 20-25 năm',
      'd. 20-25 năm, tầm nhìn đến 50 năm',
    ],
    correct: 2
  },
  {
    question: 'Ý nào sau đây sai?',
    options: [
      'a. Cơ quan, tổ chức có trách nhiệm tổ chức lập quy hoạch đô thị và nông thôn có trách nhiệm lấy ý kiến trong quá trình lập quy hoạch.',
      'b. Đối với quy hoạch đô thị và nông thôn thuộc trách nhiệm tổ chức lập của Bộ Xây dựng, Ủy ban nhân dân cấp tỉnh có trách nhiệm tổ chức lấy ý kiến;',
      'c. Tổ chức tư vấn có trách nhiệm lấy ý kiến trong quá trình lập quy hoạch',
      'd. Cơ quan thẩm định quy hoạch đô thị và nông thôn có trách nhiệm lấy ý kiến trong quá trình thẩm định quy hoạch.',
    ],
    correct: 2
  },
  {
    question: 'Ủy ban nhân dân cấp Tỉnh có thẩm quyền phê duyệt các quy hoạch nào dưới đây?',
    options: [
      'a. Quy hoạch chung thành phố, thị xã, thị trấn, đô thị mới, quy hoạch chung huyện, trừ các quy hoạch do Thủ tướng Chính phủ phê duyệt.',
      'b. Quy hoạch chung huyện, Quy hoạch chung khu chức năng, Quy hoạch khu du lịch, Quy hoạch khu công nghệ cao, Quy hoạch phân khu khu chức năng,',
      'c. Quy hoạch chung huyện, Quy hoạch chung khu kinh tế, khu công nghệ cao, khu du lịch, khu nghiên cứu, đào tạo, khu thể dục thể thao cấp tỉnh',
      'd. Tất cả các ý trên',
    ],
    correct: 0
  },
  {
    question: 'Cơ quan nào có thẩm quyền phê duyệt quy hoạch chung xã?',
    options: [
      'a. Ủy ban nhân dân tỉnh',
      'b. Ủy ban nhân dân huyện',
      'c. Hội đồng nhân dân tỉnh',
      'd. Bộ Xây dựng',
    ],
    correct: 1
  },
];
