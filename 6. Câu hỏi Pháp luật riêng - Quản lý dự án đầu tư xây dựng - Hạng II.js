const questions = [
  {
    question: 'Dự án đầu tư xây dựng có tổng mức đầu tư 1.000 tỷ đồng, tỷ lệ góp vốn gồm 25% vốn doanh nghiệp nhà nước, 30% vốn doanh nghiệp tư nhân, còn lại 3 cá nhân khác mỗi cá nhân góp 15%. Vậy dự án được quản lý theo quy định nào?',
    options: [
      'a. Dự án sử dụng vốn khác',
      'b. Dự án sử dụng vốn nhà nước',
      'c. Dự án sử dụng vốn nhà nước ngoài đầu tư công',
      'd. Dự án sử dung vốn đầu tư công',
    ],
    correct: 0
  },
  {
    question: 'Nhiệm vụ khảo sát xây dựng phải phù hợp với các nội dung nào sau đây?',
    options: [
      'a. Chủ trương đầu tư xây dựng .',
      'b. Nhóm dự án đầu tư xây dựng.',
      'c. Loại, cấp công trình xây dựng, loại hình khảo sát và bước thiết kế .',
      'd. Tổng mức đầu tư, tổng dự toán.',
    ],
    correct: 2
  },
  {
    question: 'Nội dung nào không thuộc nội dung chính của nhiệm vụ thiết kế xây dựng công trình?',
    options: [
      'a. Mục tiêu xây dựng công trình.',
      'b. Tổng dự toán xây dựng công trình.',
      'c. Yêu cầu về quy mô, thời gian sử dụng công trình.',
      'd. Yêu cầu về quy hoạch cảnh quan và kiến trúc công trình.',
    ],
    correct: 1
  },
  {
    question: 'Nội dung nào sau đây không thuộc nghĩa vụ của chủ đầu tư trong việc thi công công trình xây dựng?',
    options: [
      'a. Lựa chọn nhà thầu có đủ điều kiện năng lực hoạt động thi công xây dựng phù hợp với loại, cấp công trình và công việc thi công xây dựng.',
      'b. Lập biện pháp thi công, biện pháp bảo đảm an toàn, vệ sinh môi trường.',
      'c. Tổ chức nghiệm thu, thanh toán, quyết toán công trình.',
      'd. Lưu trữ hồ sơ xây dựng công trình.',
    ],
    correct: 1
  },
  {
    question: 'Quyền của bên nhận thầu thi công xây dựng công trình:',
    options: [
      'a. Được quyền đề xuất với bên giao thầu về khối lượng phát sinh ngoài hợp đồng; từ chối thực hiện những công việc ngoài phạm vi của hợp đồng khi chưa được hai bên thống nhất và những yêu cầu trái pháp luật của bên giao thầu.',
      'b. Được thay đổi các biện pháp thi công sau khi được bên giao thầu chấp thuận nhằm đẩy nhanh tiến độ, bảo đảm chất lượng, an toàn, hiệu quả công trình trên cơ sở giá hợp đồng đã ký kết.',
      'c. Được quyền yêu cầu bên giao thầu thanh toán các khoản lãi vay do chậm thanh toán theo đúng thỏa thuận trong hợp đồng; được quyền đòi bồi thường thiệt hại khi bên giao thầu chậm bàn giao mặt bằng và các thiệt hại khác do lỗi của bên giao thầu gây ra.',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Bảo đảm thực hiện hợp đồng được hoàn trả cho bên nhận thầu:',
    options: [
      'a. Sau khi bên nhận thầu đã hoàn thành tất cả các nghĩa vụ theo hợp đồng hoặc đã chuyển sang nghĩa vụ bảo hành.',
      'b. Bên giao thầu đã nhận được bảo đảm bảo hành đối với hợp đồng có công việc thi công xây dựng và cung cấp thiết bị.',
      'c. Câu a hoặc',
      'b.',
      'd. Câu a và',
    ],
    correct: 3
  },
  {
    question: 'Chủ đầu tư có trách nhiệm gì trong quản lý về an toàn lao động trong quá trình thi công xây dựng công trình?',
    options: [
      'a. Giám sát việc thực hiện của nhà thầu tuân thủ các biện pháp thi công và biện pháp đảm bảo an toàn đã được phê duyệt',
      'b. Giám sát tuân thủ các quy phạm kỹ thuật an toàn trong thi công xây dựng',
      'c. Kiểm tra, xử lý vi phạm, dừng thi công và yêu cầu khắc phục khi nhà thầu vi phạm các quy định về an toàn trên công trường.',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Nội dung công việc nào dưới đây thuộc trách nhiệm về quản lý an toàn lao động trong quá trình thi công xây dựng của chủ đầu tư?',
    options: [
      'a. Nghiệm thu khối lượng công tác an toàn lao động của nhà thầu thi công.',
      'b. Giám sát việc thực hiện của nhà thầu tuân thủ các biện pháp thi công và biện pháp đảm bảo an toàn đã được phê duyệt',
      'c. Kiểm tra chất lượng các hạng mục thi công xây dựng.',
      'd. Câu a, b và',
    ],
    correct: 1
  },
  {
    question: 'Chủ đầu tư tổ chức thực hiện quản lý dự án theo cách nào sau đây là đúng?',
    options: [
      'a. Chủ đầu tư sử dụng tư cách pháp nhân của mình và bộ máy chuyên môn trực thuộc có đủ điều kiện, năng lực.',
      'b. Chủ đầu tư thuê tổ chức, cá nhân có đủ điều kiện năng lực theo quy định để quản lý dự án.',
      'c. Câu a hoặc',
      'b. d. Phải thuê ban quản lý dự án chuyên ngành hoặc ban quản lý dự án khu vực.',
    ],
    correct: 2
  },
  {
    question: 'Ban quản lý dự án chuyên ngành, Ban quản lý dự án khu vực được thực hiện tư vấn quản lý dự án cho các dự án khác hoặc thực hiện một số công việc tư vấn trong trường hợp nào sau đây?',
    options: [
      'a. Trên cơ sở bảo đảm hoàn thành nhiệm vụ quản lý dự án được giao.',
      'b. Đáp ứng yêu cầu về điều kiện năng lực theo quy định khi thực hiện công việc tư vấn.',
      'c. Câu a và',
      'b. d. Khi có chủ đầu tư thuê và đáp ứng yêu cầu về điều kiện năng lực theo quy định khi thực hiện công việc tư vấn.',
    ],
    correct: 2
  },
  {
    question: 'Dự án A đầu tư xây dựng sử dụng nguồn vốn khác, có một công trình, cấp công trình cấp II và thuộc danh mục công trình ảnh hưởng lớn đến an toàn, lợi ích cộng đồng. Thẩm quyền thẩm định Báo cáo nghiên cứu khả thi dự án A?',
    options: [
      'a. Cơ quan chuyên môn về xây dựng thuộc Bộ Xây dựng.',
      'b. Cơ quan chuyên môn về xây dựng thuộc Ủy ban nhân dân cấp tỉnh nơi có dự án.',
      'c. Cơ quan chuyên môn trực thuộc của người quyết định đầu tư.',
      'd. Chủ đầu tư.',
    ],
    correct: 1
  },
  {
    question: 'Thẩm quyền thẩm định dự án đầu tư xây dựng thuộc nhóm quan trọng quốc gia là:',
    options: [
      'a. Người quyết định đầu tư.',
      'b. Cơ quan chuyên môn về xây dựng thuộc Ủy ban nhân dân cấp tỉnh được phân cấp.',
      'c. Hội đồng thẩm định Nhà nước do Thủ tướng Chính phủ thành lập.',
      'd. Chủ đầu tư.',
    ],
    correct: 2
  },
  {
    question: 'Dự án đầu tư có công trình cấp đặc biệt, cấp I sử dụng vốn nhà nước ngoài đầu tư công. Thẩm quyền thẩm định thiết kế triển khai sau thiết kế cơ sở thuộc về:',
    options: [
      'a. Hội đồng thẩm định Nhà nước do Thủ tướng Chính phủ thành lập.',
      'b. Cơ quan chuyên môn về xây dựng thuộc Bộ Xây dựng, Bộ quản lý công trình xây dựng chuyên ngành.',
      'c. Cơ quan chuyên môn về xây dựng thuộc Ủy ban nhân dân cấp tỉnh nơi có dự án.',
      'd. Người quyết định đầu tư.',
    ],
    correct: 1
  },
  {
    question: 'Yêu cầu về năng lực của tổ chức thực hiện thi công công tác hoàn thiện công trình xây dựng như trát, ốp lát, sơn, lắp đặt cửa, nội thất của công trình cấp I như thế nào?',
    options: [
      'a. Phải có chứng chỉ năng lực hạng I.',
      'b. Phải có chứng chỉ năng lực hạng II.',
      'c. Phải có chứng chỉ năng lực tối thiểu hạng III.',
      'd. Không yêu cầu phải có chứng chỉ năng lực.',
    ],
    correct: 3
  },
  {
    question: 'Suất vốn đầu tư xây dựng gồm:',
    options: [
      'a. Chi phí bồi thường, hỗ trợ và tái định cư; chi phí xây dựng; chi phí thiết bị; chi phí quản lý dự án; chi phí tư vấn đầu tư xây dựng; một số khoản mục chi phí khác và thuế giá trị gia tăng.',
      'b. Chi phí xây dựng; chi phí thiết bị; chi phí quản lý dự án; chi phí tư vấn đầu tư xây dựng; một số khoản mục chi phí khác và thuế giá trị gia tăng.',
      'c. Chi phí xây dựng; chi phí thiết bị; chi phí quản lý dự án; chi phí tư vấn đầu tư xây dựng; một số khoản mục chi phí khác; thuế giá trị gia tăng và dự phòng phí.',
      'd. Chi phí xây dựng; chi phí thiết bị; chi phí quản lý dự án; chi phí tư vấn đầu tư xây dựng; một số khoản mục chi phí khác.',
    ],
    correct: 1
  },
  {
    question: 'Quản lý thực hiện dự án đầu tư xây dựng bao gồm những nội dung nào sau đây?',
    options: [
      'a. Quản lý về phạm vi, kế hoạch công việc;',
      'b. Quản lý khối lượng công việc; chất lượng xây dựng;',
      'c. Quản lý tiến độ thực hiện; chi phí đầu tư xây dựng;',
      'd. Tất cả các nội dung ở trên.',
    ],
    correct: 3
  },
  {
    question: 'Ban quản lý dự án đầu tư xây dựng chuyên ngành, Ban quản lý dự án đầu tư xây dựng khu vực có trách nhiệm gì?',
    options: [
      'a. Xác định yêu cầu, nội dung nhiệm vụ lập dự án; cung cấp thông tin, tài liệu cần thiết trong trường hợp thuê tư vấn lập dự án; tổ chức nghiệm thu kết quả lập dự án và lưu trữ hồ sơ dự án đầu tư xây dựng',
      'b. Kiểm tra, giám sát việc thực hiện dự án; định kỳ báo cáo việc thực hiện dự án với người quyết định đầu tư, cơ quan quản lý nhà nước có thẩm quyền',
      'c. Thu hồi vốn, trả nợ vốn vay đối với dự án có yêu cầu về thu hồi vốn, trả nợ vốn vay',
      'd. Tất cả các trách nhiệm tại điểm a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Tổng thầu xây dựng là nhà thầu ký kết hợp đồng trực tiếp với ai để nhận thầu một số loại công việc của công trình hoặc toàn bộ công việc của dự án đầu tư xây dựng.?',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu phụ',
      'c. Chủ đầu tư và các nhà thầu phụ',
      'd. Ban quản lý dự án đầu tư xây dựng',
    ],
    correct: 0
  },
  {
    question: 'Đối với dự án đầu tư xây dựng sử dụng vốn đầu tư công, việc giám sát, đánh giá đầu tư phải tuân thủ theo quy định nào?',
    options: [
      'a. Theo quy định của pháp luật về đầu tư công',
      'b. Theo quy định của pháp luật về xây dựng',
      'c. Theo quy định của pháp luật về đầu tư công và pháp luật về xây dựng',
      'd. Theo quy định của pháp luật về đầu tư công, pháp luật về xây dựng và pháp luật khác có liên quan',
    ],
    correct: 3
  },
  {
    question: 'Hoạt động đầu tư xây dựng phải bảo đảm các nguyên tắc nào dưới đây?',
    options: [
      'a. Sử dụng hợp lý nguồn lực, tài nguyên tại khu vực có dự án, bảo đảm đúng mục đích dự án được phê duyệt',
      'b. Đúng trình tự đầu tư xây dựng; tuân thủ tiêu chuẩn, quy chuẩn kỹ thuật, quy định của pháp luật có liên quan.',
      'c. Bảo đảm chất lượng, tiến độ, an toàn công trình, tính mạng, sức khỏe con người và tài sản; phòng, chống cháy, nổ; bảo vệ môi trường.',
      'd. Tất cả các nguyên tắc nêu tại a, b và',
    ],
    correct: 3
  },
  {
    question: 'Chi phí mua bảo hiểm cho người lao động trong thời gian thi công xây dựng của nhà thầu thi công xây dựng được tính trong chi phí nào?',
    options: [
      'a. Trong tổng mức đầu tư',
      'b. Trong chi phí sản xuất kinh doanh của nhà thầu',
      'c. Trong dự toán xây dựng',
      'd. Trong giá trị hợp đồng thi công xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Những hành vi nào dưới đây bị nghiêm cấm trong hoạt động đầu tư xây dựng?',
    options: [
      'a. Khởi công xây dựng công trình khi chưa đủ điều kiện khởi công theo quy định của pháp luật về xây dựng.',
      'b. Xây dựng công trình không đúng quy hoạch xây dựng; vi phạm chỉ giới xây dựng, cốt xây dựng; xây dựng công trình không đúng với giấy phép xây dựng được cấp.',
      'c. Vi phạm quy định về an toàn lao động, tài sản, phòng, chống cháy, nổ, an ninh, trật tự và bảo vệ môi trường trong xây dựng.',
      'd. Tất cả các hành vi nêu tại a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Đối với dự án nhóm A gồm nhiều dự án thành phần trong đó mỗi dự án thành phần có thể vận hành độc lập, khai thác sử dụng hoặc được phân kỳ đầu tư để thực hiện thì dự án thành phần được quản lý thực hiện như thế nào?',
    options: [
      'a. Như dự án nhóm A.',
      'b. Như một dự án độc lập.',
      'c. Như một dự án độc lập, nhưng phải được cấp có thẩm quyền cho phép đầu tư chấp thuận.',
      'd. Như một dự án độc lập, do người quyết định đầu tư quyết định',
    ],
    correct: 2
  },
  {
    question: 'Đối với dự án sử dụng vốn đầu tư công, trong thời gian thực hiện dự án, giá vật liệu xây dựng trên thị trường biến động tăng hơn so với giá tính trong tổng mức đầu tư được duyệt thì có được điều chỉnh dự án không?',
    options: [
      'a. Không',
      'b. Có, nếu chỉ số giá xây dựng do Bộ Xây dựng, Ủy ban nhân dân cấp tỉnh công bố lớn hơn chỉ số giá xây dựng được sử dụng để tính dự phòng trượt giá trong tổng mức đầu tư dự án được duyệt.',
      'c. Điều chỉnh hay không là do người quyết định đầu tư quyết định',
      'd. Điều chỉnh hay không là do cơ quan chuyên môn về xây dựng cho phép',
    ],
    correct: 1
  },
  {
    question: 'Quy định nào là đúng về việc phân kỳ đầu tư ?',
    options: [
      'a. Được thể hiện trong Báo cáo nghiên cứu khả thi đầu tư xây dựng và quyết định đầu tư xây dựng,',
      'b. Phù hợp với tiến độ, thời gian thực hiện dự án trong nội dung quyết định hoặc chấp thuận chủ trương đầu tư xây dựng',
      'c. Cả a và b đều đúng',
      'd. Các đáp án trên là sai',
    ],
    correct: 2
  },
  {
    question: 'Đối với dự án sử dụng vốn đầu tư công, tiến độ thực hiện dự án có được vượt quá thời gian đã được xác định trong dự án được người quyết định đầu tư phê duyệt không?',
    options: [
      'a. Có, nhưng phải được chủ đầu tư chấp thuận',
      'b. Có, nhưng phải được người quyết định đầu tư chấp thuận',
      'c. Có, nhưng phải được cơ quan chuyên môn về xây dựng chấp thuận',
      'd. Không',
    ],
    correct: 1
  },
  {
    question: 'Nhà thầu tư vấn giám sát thi công xây dựng không có trách nhiệm nào dưới đây?',
    options: [
      'a. Thực hiện nghĩa vụ theo nội dung hợp đồng đã được ký kết với chủ đầu tư',
      'b. Chịu trách nhiệm về chất lượng công việc theo hợp đồng đã được ký kết',
      'c. Bồi thường thiệt hại khi sử dụng thông tin, tài liệu, tiêu chuẩn, quy chuẩn kỹ thuật, giải pháp kỹ thuật, tổ chức quản lý không phù hợp và vi phạm hợp đồng làm thiệt hại cho chủ đầu tư',
      'd. Chịu trách nhiệm về chất lượng thiết kế xây dựng công trình',
    ],
    correct: 3
  },
  {
    question: 'Thiết kế xây dựng đã được phê duyệt chỉ được điều chỉnh khi nào?',
    options: [
      'a. Khi điều chỉnh dự án đầu tư xây dựng có yêu cầu điều chỉnh thiết kế xây dựng',
      'b. Trong quá trình thi công xây dựng có yêu cầu phải điều chỉnh thiết kế xây dựng để bảo đảm chất lượng công trình và hiệu quả của dự án',
      'c. Bao gồm cả trường hợp a và b',
      'd. Không được điều chỉnh trong bất kể trường hợp nào',
    ],
    correct: 2
  },
  {
    question: 'Hồ sơ đề nghị cấp giấy phép xây dựng gồm những tài liệu cơ bản nào?',
    options: [
      'a. Đơn đề nghị cấp giấy phép xây dựng',
      'b. Bản sao một trong những giấy tờ hợp pháp về quyền sử dụng đất',
      'c. Một số bản vẽ thiết kế xây dựng',
      'd. Gồm các tài liệu nêu tại a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Ai có trách nhiệm thực hiện lập quyết toán hợp đồng xây dựng?',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu thi công xây dựng công trình',
      'c. Nhà thầu tư vấn giám sát thi công xây dựng',
      'd. Ban quản lý dự án đầu tư xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Khi khởi công xây dựng công trình phải có bước thiết kế nào được phê duyệt?',
    options: [
      'a. Thiết kế cơ sở',
      'b. Thiết kế kỹ thuật',
      'c. Thiết kế bản vẽ thi công của hạng mục công trình, công trình khởi công đã được phê duyệt và được chủ đầu tư kiểm tra, xác nhận trên bản vẽ',
      'd. Tất cả các bước thiết kế nêu tại a, b và',
    ],
    correct: 2
  },
  {
    question: 'Việc thu hồi đất, giao đất, cho thuê đất, bồi thường, giải phóng mặt bằng xây dựng được thực hiện theo quy định nào?',
    options: [
      'a. Quy định của pháp luật về xây dựng',
      'b. Quy định của pháp luật về đất đai',
      'c. Quy định của pháp luật về xây dựng và pháp luật về đất đai',
      'd. Theo quy định của Ủy ban nhân dân cấp tỉnh',
    ],
    correct: 1
  },
  {
    question: 'Việc bàn giao toàn bộ hoặc một phần mặt bằng xây dựng để thi công là do ai quyết định?',
    options: [
      'a. Người quyết định đầu tư quyết định',
      'b. Chủ đầu tư quyết định',
      'c. Theo thỏa thuận giữa chủ đầu tư và nhà thầu thi công xây dựng',
      'd. Chính quyền địa phương quyết định',
    ],
    correct: 2
  },
  {
    question: 'Tổ chức nào có trách nhiệm lắp đặt biển báo công trình tại công trình?',
    options: [
      'a. Chủ đầu tư xây dựng công trình',
      'b. Nhà thầu thiết kế xây dựng công trình',
      'c. Nhà thầu chính thi công xây dựng công trình',
      'd. Nhà thầu phụ thi công xây dựng công trình',
    ],
    correct: 0
  },
  {
    question: 'Vật liệu, cấu kiện sử dụng vào công trình xây dựng phải tuân thủ theo quy định nào?',
    options: [
      'a. Theo đúng thiết kế xây dựng, chỉ dẫn kỹ thuật (nếu có) đã được phê duyệt.',
      'b. Bảo đảm chất lượng theo tiêu chuẩn, quy chuẩn kỹ thuật và pháp luật về chất lượng sản phẩm hàng hóa.',
      'c. Theo quy định tại cả đáp án a và b',
      'd. Theo yêu cầu của chủ đầu tư',
    ],
    correct: 2
  },
  {
    question: 'Trong quá trình thi công xây dựng công trình, chủ đầu tư có nghĩa vụ gì?',
    options: [
      'a. Phối hợp, tham gia với Ủy ban nhân dân các cấp thực hiện việc bồi thường thiệt hại, giải phóng mặt bằng xây dựng để bàn giao cho nhà thầu thi công xây dựng',
      'b. Thuê tổ chức tư vấn có đủ năng lực hoạt động xây dựng để kiểm định chất lượng công trình khi cần thiết',
      'c. Lưu trữ hồ sơ xây dựng công trình',
      'd. Tất cả các nghĩa vụ nêu tại a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Nhà thầu thi công xây dựng có nghĩa vụ gì?',
    options: [
      'a. Chịu trách nhiệm về chất lượng, nguồn gốc của vật tư, nguyên liệu, vật liệu, thiết bị, sản phẩm xây dựng do mình cung cấp sử dụng vào công trình;',
      'b. Lập bản vẽ hoàn công, tham gia nghiệm thu công trình;',
      'c. Sử dụng vật liệu đúng chủng loại, bảo đảm yêu cầu theo thiết kế được duyệt',
      'd. Tất cả các nghĩa vụ nêu tại a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng có mấy cấp sự cố công trình xây dựng?',
    options: [
      'a. Một',
      'b. Hai',
      'c. Ba',
      'd. Bốn',
    ],
    correct: 2
  },
  {
    question: 'Trong thời gian thi công xây dựng, xảy ra sự cố công trình xây dựng thì thẩm quyền giải quyết sự cố thực hiện theo quy định nào?',
    options: [
      'a. Theo Luật Xây dựng 50/2014 và 62/2020',
      'b. Theo Nghị định 06/2021/NĐ-CP',
      'c. Theo Nghị định 10/2021/NĐ-CP',
      'd. Theo các quy định tại điểm a, b và c',
    ],
    correct: 1
  },
  {
    question: 'Việc điều chỉnh đơn giá thực hiện hợp đồng chỉ áp dụng đối với loại hợp đồng xây dựng nào?',
    options: [
      'a. Hợp đồng theo đơn giá điều chỉnh và hợp đồng theo thời gian',
      'b. Hợp đồng trọn gói',
      'c. Hợp đồng theo đơn giá cố định',
      'd. Tất cả các loại hợp đồng nêu tại a, b và c',
    ],
    correct: 0
  },
  {
    question: 'Ai có trách nhiệm lập và trình chủ đầu tư chấp thuận kế hoạch tổng hợp về an toàn lao động trước khi khởi công xây dựng công trình?',
    options: [
      'a. Ban quản lý dự án đầu tư xây dựng',
      'b. Nhà thầu thi công xây dựng công trình',
      'c. Nhà thầu tư vấn giám sát thi công xây dựng công trình',
      'd. Không có quy định ai phải thực hiện',
    ],
    correct: 1
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng, kiểm định viên thực hiện kiểm định kỹ thuật an toàn lao động phải được huấn luyện, bồi dưỡng và sát hạch được phân thành mấy nhóm?',
    options: [
      'a. Hai',
      'b. Ba',
      'c. Bốn',
      'd. Năm',
    ],
    correct: 2
  },
  {
    question: 'Trên cơ sở đảm bảo phù hợp trình tự, thủ tục theo quy định của pháp luật về đất đai, việc bồi thường, hỗ trợ, tái định cư được thực hiện tại giai đoạn nào của dự án?',
    options: [
      'a. Tại giai đoạn chuẩn bị dự án;',
      'b. Tại giai đoạn thực hiện dự án;',
      'c. Đáp án a hoặc đáp án b;',
      'd. Tại giai đoạn kết thúc xây dựng.',
    ],
    correct: 2
  },
];
