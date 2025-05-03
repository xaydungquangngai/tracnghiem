const questions = [
  {
    question: 'Trong hoạt động xây dựng có các loại hình khảo sát xây dựng nào?',
    options: [
      'a. Khảo sát địa hình',
      'b. Khảo sát địa chất công trình',
      'c. Khảo sát địa chất thủy văn',
      'd. Bao gồm cả 3 loại hình nêu tại a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Nhiệm vụ khảo sát xây dựng được lập phục vụ công tác nào sau đây?',
    options: [
      'a. Lập tổng mức đầu tư xây dựng',
      'b. Lập dự án đầu tư xây dựng, thiết kế xây dựng công trình',
      'c. Đáp án a và b đều đúng',
      'd. Đáp án a và b đều sai',
    ],
    correct: 1
  },
  {
    question: 'Đối với công tác khảo sát xây dựng, nội dung nào sau đây không thuộc trách nhiệm của Chủ đầu tư?',
    options: [
      'a. Lựa chọn nhà thầu khảo sát xây dựng, giám sát khảo sát xây dựng trong trường hợp không tự thực hiện khảo sát xây dựng;',
      'b. Cung cấp cho nhà thầu khảo sát xây dựng thông tin, tài liệu có liên quan đến công tác khảo sát;',
      'c. Bồi thường thiệt hại khi cung cấp thông tin, tài liệu không phù hợp, vi phạm hợp đồng khảo sát xây dựng;',
      'd. Điều chỉnh nhiệm vụ khảo sát xây dựng theo yêu cầu của nhà thầu thiết kế',
    ],
    correct: 3
  },
  {
    question: 'Trong quá trình thực hiện khảo sát xây dựng, Nhiệm vụ khảo sát xây dựng được sửa đổi bổ sung khi nào?',
    options: [
      'a. Phát hiện các yếu tố khác thường có thể ảnh hưởng trực tiếp đến giải pháp thiết kế;',
      'b. Khi có thay đổi nhiệm vụ thiết kế cần phải bổ sung nhiệm vụ khảo sát xây dựng;',
      'c. Khi đơn vị khảo sát thay đổi nhân lực và thiết bị khảo sát xây dựng;',
      'd. Đáp án a và b;',
    ],
    correct: 3
  },
  {
    question: 'Nhà thầu khảo sát xây dựng chịu trách nhiệm về chất lượng công tác khảo sát xây dựng do mình thực hiện thế nào?',
    options: [
      'a. Nhà thầu hoàn thành trách nhiệm khi bản vẽ thi công được thẩm định và phê duyệt bởi cấp có thẩm quyền;',
      'b. Kết quả thẩm định hay phê duyệt kết quả khảo sát không làm giảm trách nhiệm của Nhà thầu;',
      'c. Nhà thầu hoàn thành trách nhiệm khi công trình được nghiệm thu đưa vào khai thác sử dụng;',
      'd. Nhà thầu được giảm trách nhiệm khi báo cáo khảo sát xây dựng được chấp thuận bởi cấp có thẩm quyền;',
    ],
    correct: 1
  },
  {
    question: 'Nhà thầu khảo sát xây dựng có được giảm trách nhiệm đối với chất lượng công tác khảo sát xây dựng? Khi:',
    options: [
      'a. Hồ sơ thiết kế đã được thẩm tra và thẩm định xong;',
      'b. Báo cáo khảo sát xây dựng được đơn vị thẩm tra đánh giá đạt yêu cầu;',
      'c. Chủ đầu tư đã chấp thuận và phê duyệt báo cáo kết quả khảo sát xây dựng;',
      'd. Không được giảm trách nhiệm trong những tình huống trên;',
    ],
    correct: 3
  },
  {
    question: 'Báo cáo kết quả khảo sát xây dựng không cần có những nội dung nào dưới đây?',
    options: [
      'a. Những căn cứ thực hiện, quy trình và phương pháp khảo sát xây dựng;',
      'b. Các chi phí thực hiện theo dự toán và chi phí phát sinh trong quá trình khảo sát xây dựng;',
      'c. Khối lượng đã thực hiện, kết quả và số liệu sau khi thí nghiệm phân tích;',
      'd. Khái quát về vị trí và điều kiện tự nhiên của khu vực khảo sát xây dựng, đặc điểm, quy mô, tính chất của công trình.',
    ],
    correct: 1
  },
  {
    question: 'Nhà thầu khảo sát xây dựng có những trách nhiệm gì dưới đây?',
    options: [
      'a. Bố trí đủ người có kinh nghiệm và chuyên môn phù hợp để thực hiện khảo sát theo quy định của hợp đồng xây dựng;',
      'b. Cử người có đủ điều kiện năng lực để làm chủ nhiệm khảo sát và tổ chức thực hiện biện pháp kiểm soát chất lượng khảo sát xây dựng;',
      'c. Cả nội dung a và b ở trên;',
      'd. Không cần nội dung nào ở trên;',
    ],
    correct: 2
  },
  {
    question: 'Đơn vị nào có trách nhiệm tổ chức giám sát khảo sát xây dựng?',
    options: [
      'a. Chủ đầu tư;',
      'b. Nhà thầu giám sát thi công;',
      'c. Nhà thầu thiết kế xây dựng;',
      'd. Nhà thầu khảo sát;',
    ],
    correct: 0
  },
  {
    question: 'Tùy theo quy mô và loại hình khảo sát, chủ đầu tư có trách nhiệm tổ chức giám sát khảo sát xây dựng theo các nội dung nào dưới đây?',
    options: [
      'a. Kiểm tra năng lực thực tế của nhà thầu khảo sát xây dựng bao gồm nhân lực, thiết bị khảo sát tại hiện trường, phòng thí nghiệm;',
      'b. Theo dõi, kiểm tra việc thực hiện khảo sát xây dựng bao gồm: Vị trí khảo sát, khối lượng khảo sát, quy trình thực hiện khảo sát, lưu giữ số liệu khảo sát và mẫu thí nghiệm;',
      'c. Theo dõi, kiểm tra việc thực hiện khảo sát xây dựng bao gồm: Kiểm tra thí nghiệm hiện trường và thí nghiệm trong phòng; kiểm tra công tác đảm bảo an toàn lao động, an toàn môi trường trong quá trình thực hiện khảo sát.',
      'd. Tất cả những nội dung trên;',
    ],
    correct: 3
  },
  {
    question: 'Đơn vị nào lập phương án kỹ thuật khảo sát xây dựng?',
    options: [
      'a. Chủ đầu tư;',
      'b. Nhà thầu khảo sát;',
      'c. Nhà thầu thiết kế xây dựng;',
      'd. Nhà thầu giám sát thi công;',
    ],
    correct: 1
  },
  {
    question: 'Nhiệm vụ khảo sát xây dựng được sửa đổi, bổ sung trong các trường hợp nào sau đây ?',
    options: [
      'a. Trong quá trình thực hiện khảo sát xây dựng, phát hiện các yếu tố khác thường có thể ảnh hưởng trực tiếp đến giải pháp thiết kế',
      'b. Trong quá trình thiết kế, nhà thầu thiết kế phát hiện nhiệm vụ khảo sát xây dựng, báo cáo khảo sát xây dựng không đáp ứng yêu cầu thiết kế',
      'c. Trong quá trình thi công, phát hiện các yếu tố địa chất khác thường',
      'd. Tất cả các trường hợp ở trên',
    ],
    correct: 3
  },
  {
    question: 'Trường hợp nào khi điều chỉnh thiết kế phải trình cơ quan chuyên môn về xây dựng thẩm định lại?',
    options: [
      'a. Thay đổi kết cấu chịu lực công trình',
      'b. Thay đổi vật liệu sử dụng cho công trình',
      'c. Thay đổi biện pháp tổ chức thi công',
      'd. Bao gồm cả 3 trường hợp a, b và c',
    ],
    correct: 0
  },
  {
    question: 'Chỉ dẫn kỹ thuật được phê duyệt cùng với phê duyệt thiết kế, dự toán hay phê duyệt riêng?',
    options: [
      'a. Phê duyệt riêng với phê duyệt thiết kế',
      'b. Phê duyệt cùng với khi phê duyệt thiết kế',
      'c. Do người có thẩm quyền phê duyệt quyết định',
      'd. Chỉ dẫn kỹ thuật không phải phê duyệt',
    ],
    correct: 2
  },
  {
    question: 'Trong quá trình thẩm định, trường hợp lựa chọn tổ chức thẩm tra phục vụ thẩm định, các bên phải tuân thủ quy định nào sau đây?',
    options: [
      'a. Tổ chức tư vấn thẩm tra phải độc lập về pháp lý, tài chính với chủ đầu tư;',
      'b. Tổ chức tư vấn thẩm tra phải độc lập về pháp lý, tài chính với nhà thầu tư vấn lập thiết kế xây dựng;',
      'c. Tuân thủ cả a và b',
      'd. Không cần tuân thủ nội dung nào ở trên',
    ],
    correct: 2
  },
  {
    question: 'Phương án kỹ thuật khảo sát xây dựng cần có những nội dung nào sau đây ?',
    options: [
      'a. Cơ sở lập phương án kỹ thuật khảo sát xây dựng;',
      'b. Thành phần, khối lượng công tác khảo sát xây dựng;',
      'c. Phương pháp, thiết bị khảo sát và phòng thí nghiệm được sử dụng;',
      'd. Tất cả các nội dung ở trên',
    ],
    correct: 3
  },
  {
    question: 'Chủ đầu tư có trách nhiệm thế nào trong công tác khảo sát xây dựng ?',
    options: [
      'a. Kiểm tra hoặc thuê đơn vị tư vấn có đủ điều kiện năng lực để thẩm tra phương án kỹ thuật khảo sát xây dựng',
      'b. Phê duyệt phương án kỹ thuật khảo sát xây dựng theo quy định của hợp đồng.',
      'c. Đáp án a và b đúng',
      'd. Đáp án a hoặc b đúng',
    ],
    correct: 2
  },
  {
    question: 'Cá nhân có trình độ cao đẳng, trung cấp đã được cấp chứng chỉ hành nghề thiết kế, được chủ trì thiết kế công trình cấp mấy?',
    options: [
      'a. Cấp II trở xuống.',
      'b. Cấp III trở xuống.',
      'c. Cấp IV.',
      'd. Không được chủ trì thiết kế xây dựng.',
    ],
    correct: 1
  },
  {
    question: 'Chủ đầu tư không có quyền nào dưới đây?',
    options: [
      'a. Tự thực hiện khảo sát xây dựng khi có đủ điều kiện năng lực;',
      'b. Phê duyệt nhiệm vụ khảo sát xây dựng, phương án kỹ thuật khảo sát do tư vấn thiết kế hoặc do nhà thầu khảo sát lập;',
      'c. Điều chỉnh nhiệm vụ khảo sát xây dựng theo yêu cầu hợp lý của tư vấn thiết kế xây dựng;',
      'd. Yêu cầu tư vấn khảo sát sử dụng kết quả khảo sát của dự án liền kề.',
    ],
    correct: 3
  },
  {
    question: 'Chủ đầu tư không có trách nhiệm nào dưới đây?',
    options: [
      'a. Lựa chọn nhà thầu khảo sát xây dựng, giám sát khảo sát xây dựng trong trường hợp không tự thực hiện khảo sát xây dựng, giám sát khảo sát xây dựng',
      'b. Cung cấp cho nhà thầu khảo sát xây dựng thông tin, tài liệu có liên quan đến công tác khảo sát',
      'c. Trình cơ quan chuyên môn về xây dựng thẩm định phương án kỹ thuật và dự toán cho công tác khảo sát xây dựng',
      'd. Tổ chức giám sát công tác khảo sát xây dựng; nghiệm thu, phê duyệt kết quả khảo sát theo quy định của pháp luật',
    ],
    correct: 2
  },
  {
    question: 'Nhà thầu khảo sát xây dựng có quyền nào dưới đây?',
    options: [
      'a. Yêu cầu chủ đầu tư và các bên có liên quan cung cấp số liệu, thông tin liên quan theo quy định của hợp đồng để thực hiện khảo sát xây dựng',
      'b. Từ chối thực hiện yêu cầu ngoài hợp đồng khảo sát xây dựng',
      'c. Thuê nhà thầu phụ thực hiện khảo sát xây dựng theo quy định của hợp đồng khảo sát xây dựng',
      'd. Cả 3 phương án trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Nhà thầu khảo sát có nghĩa vụ gì?',
    options: [
      'a. Thực hiện đúng yêu cầu khảo sát xây dựng theo quy định của pháp luật về xây dựng và hợp đồng khảo sát xây dựng;',
      'b. Không phải đề xuất, bổ sung nhiệm vụ khảo sát xây dựng khi phát hiện yếu tố ảnh hưởng trực tiếp đến giải pháp thiết kế;',
      'c. Không chịu trách nhiệm về quản lý chất lượng khảo sát của nhà thầu phụ (nếu có) và kết quả khảo sát của nhà thầu phụ.',
      'd. Cả 3 phương án trên đều đúng',
    ],
    correct: 0
  },
  {
    question: 'Thiết kế xây dựng nhà ở riêng lẻ phải đáp ứng các yêu cầu nào?',
    options: [
      'a. Tuân thủ tiêu chuẩn áp dụng, quy chuẩn kỹ thuật',
      'b. Quy định của pháp luật về sử dụng vật liệu xây dựng',
      'c. Bảo đảm an toàn chịu lực, an toàn trong sử dụng',
      'd. Đáp ứng tất cả các yêu cầu nêu tại a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Trường hợp nào khi xây dựng nhà ở riêng lẻ, hộ gia đình không được tự tổ chức thiết kế xây dựng?',
    options: [
      'a. Nhà ở có tổng diện tích sàn xây dựng nhỏ hơn 250 m2',
      'b. Nhà ở có chiều cao dưới 3 tầng',
      'c. Nhà ở dưới 3 tầng nhưng có chiều cao trên 12 mét.',
      'd. Cả 3 trường hợp a, b và c',
    ],
    correct: 2
  },
  {
    question: 'Báo cáo kết quả khảo sát xây dựng phải có nội dung nào sau đây ?',
    options: [
      'a. Nhiệm vụ khảo sát xây dựng, quy trình và phương pháp khảo sát xây dựng',
      'b. Căn cứ thực hiện khảo sát xây dựng, quy trình và phương pháp khảo sát xây dựng',
      'c. Khái quát về vị trí phương án kỹ thuật công trình',
      'd. Các đáp án trên đều sai',
    ],
    correct: 1
  },
  {
    question: 'Khi lập phương án kỹ thuật khảo sát xây dựng cần đảm bảo có những nội dung nào sau đây ?',
    options: [
      'a. Tiêu chuẩn, quy chuẩn kỹ thuật về khảo sát xây dựng áp dụng',
      'b. Tổ chức thực hiện và biện pháp kiểm soát chất lượng của nhà thầu khảo sát xây dựng',
      'c. Tiến độ thực hiện',
      'd. Tất cả các nội dung trên',
    ],
    correct: 3
  },
  {
    question: 'Dự án đầu tư xây dựng bệnh viện nhóm B sử dụng vốn đầu tư công, có công trình cấp cao nhất là cấp I do Chủ tịch UBND cấp tỉnh quyết định đầu tư thì phải trình cơ quan nào thẩm định thiết kế kỹ thuật, dự toán xây dựng?',
    options: [
      'a. Cơ quan chuyên môn về xây dựng của Bộ Xây dựng',
      'b. Sở Xây dựng',
      'c. Cơ quan chuyên môn của người quyết định đầu tư',
      'd. Cả 3 phương án a, b và c đều sai',
    ],
    correct: 1
  },
  {
    question: 'Dự án đầu tư xây dựng bệnh viện nhóm A sử dụng đầu tư công, có công trình cấp cao nhất là cấp II do Chủ tịch UBND cấp tỉnh quyết định đầu tư thì phải trình cơ quan nào thẩm định thiết kế cơ sở?',
    options: [
      'a. Cơ quan chuyên môn về xây dựng của Bộ Xây dựng',
      'b. Sở Xây dựng',
      'c. Sở Kế hoạch và đầu tư',
      'd. Cơ quan chuyên môn của người quyết định đầu tư',
    ],
    correct: 0
  },
  {
    question: 'Chủ đầu tư có quyền gì trong công tác thiết kế xây dựng?',
    options: [
      'a. Tự thực hiện thiết kế xây dựng khi không đủ điều kiện năng lực hoạt động theo quy định',
      'b. Yêu cầu nhà thầu thiết kế xây dựng sửa đổi, bổ sung thiết kế xây dựng không tuân thủ quy chuẩn xây dựng',
      'c. Đình chỉ thực hiện hoặc chấm dứt hợp đồng thiết kế xây dựng theo quy định của hợp đồng và quy định của pháp luật có liên quan',
      'd. Không được giám sát thực hiện hợp đồng thiết kế đã ký kết với nhà thầu',
    ],
    correct: 2
  },
  {
    question: 'Những nội dung nào sau đây thuộc nhiệm vụ khảo sát xây dựng?',
    options: [
      'a. Mục đích và phạm vi khảo sát;',
      'b. Tiêu chuẩn khảo sát xây dựng được áp dụng;',
      'c. Khối lượng các loại công tác khảo sát xây dựng (dự kiến) và dự toán chi phí cho công tác khảo sát xây dựng;',
      'd. Tất cả các nội dung trên',
    ],
    correct: 3
  },
];
