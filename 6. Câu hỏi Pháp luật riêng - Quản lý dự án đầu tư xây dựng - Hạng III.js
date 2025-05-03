const questions = [
  {
    question: 'Nội dung nào sau đây thuộc nội dung chủ yếu trong quyết định phê duyệt dự án đầu tư xây dựng?',
    options: [
      'a. Mục tiêu, quy mô đầu tư xây dựng.',
      'b. Loại, nhóm dự án; loại, cấp công trình chính; thời hạn sử dụng theo thiết kế của công trình chính.',
      'c. Tổng mức đầu tư; giá trị các khoản mục chi phí trong tổng mức đầu tư.',
      'd. Tổ chức tư vấn lập thiết kế - dự toán.',
    ],
    correct: 3
  },
  {
    question: 'Hệ thống chỉ số giá xây dựng được công bố theo quy định hiện hành bao gồm:',
    options: [
      'a. Chỉ số giá xây dựng quốc gia, chỉ số giá xây dựng theo loại công trình.',
      'b. Chỉ số giá xây dựng quốc gia, chỉ số giá xây dựng theo loại công trình, theo cơ cấu chi phí.',
      'c. Chỉ số giá xây dựng quốc gia, chỉ số giá xây dựng theo loại công trình, theo cơ cấu chi phí, theo yếu tố chi phí.',
      'd. Chỉ số giá xây dựng quốc gia, chỉ số giá xây dựng theo loại công trình, theo cơ cấu chi phí, theo yếu tố chi phí, chỉ số giá vật liệu.',
    ],
    correct: 2
  },
  {
    question: 'Điều kiện để được khởi công xây dựng công trình là:',
    options: [
      'a. Có thiết kế bản vẽ thi công đã được phê duyệt.',
      'b. Có giấy phép xây dựng đối với công trình theo qui định phải có giấy phép xây dựng .',
      'c. Có mặt bằng xây dựng để bàn giao toàn bộ hoặc từng phần theo tiến độ xây dựng.',
      'd. Cả 3 câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Chủ thể nào có trách nhiệm tổ chức nghiệm thu công trình?',
    options: [
      'a. Nhà thầu thi công công trình.',
      'b. Chủ đầu tư.',
      'c. Hội đồng nghiệm thu của nhà nước.',
      'd. Cơ quan chuyên môn về xây dựng.',
    ],
    correct: 1
  },
  {
    question: 'Chủ thể nào có thẩm quyền phê duyệt thiết kế biện pháp thi công?',
    options: [
      'a. Nhà thầu thi công xây dựng.',
      'b. Tư vấn giám sát.',
      'c. Người quyết định đầu tư.',
      'd. Chủ đầu tư.',
    ],
    correct: 3
  },
  {
    question: 'Nội dung tổng mức đầu tư xây dựng có bao nhiêu khoản mục chi phí?',
    options: [
      'a. 4 khoản mục chi phí (chi phí bồi thường, hỗ trợ và tái định cư; chi phí xây dựng; chi phí thiết bị; chi phí quản lý dự án)',
      'b. 4 khoản mục chi phí (chi phí bồi thường, hỗ trợ và tái định cư; chi phí xây dựng; chi phí thiết bị; chi phí quản lý dự án)',
      'c. 6 khoản mục chi phí (chi phí xây dựng; chi phí thiết bị; chi phí quản lý dự án; chi phí tư vấn đầu tư xây dựng; chi phí khác và chi phí dự phòng)',
      'd. 7 khoản mục chi phí (chi phí bồi thường, hỗ trợ và tái định cư; chi phí xây dựng; chi phí thiết bị; chi phí quản lý dự án; chi phí tư vấn đầu tư xây dựng; chi phí khác và chi phí dự phòng)',
    ],
    correct: 3
  },
  {
    question: 'Tạm ứng hợp đồng thi công xây dựng chỉ được thực hiện:',
    options: [
      'a. Sau khi hợp đồng xây dựng có hiệu lực.',
      'b. Có kế hoạch giải phóng mặt bằng theo đúng thỏa thuận trong hợp đồng.',
      'c. Bên giao thầu đã nhận được bảo lãnh tiền tạm ứng (nếu có).',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Giá hợp đồng trọn gói sau điều chỉnh không vượt giá gói thầu hoặc dự toán gói thầu được phê duyệt (bao gồm cả chi phí dự phòng cho gói thầu đó) thì:',
    options: [
      'a. Chủ đầu tư được quyền quyết định điều chỉnh.',
      'b. Chủ đầu tư được quyền quyết định điều chỉnh và sau đó phải báo cáo với người quyết định đầu tư.',
      'c. Chủ đầu tư được quyền quyết định điều chỉnh và nhưng trước phải báo cáo với người quyết định đầu tư.',
      'd. Phải được chấp thuận chủ trương điều chỉnh giá hợp đồng của người có thẩm quyền quyết định đầu tư xem xét, quyết định.',
    ],
    correct: 0
  },
  {
    question: 'Giá hợp đồng trọn gói sau điều chỉnh vượt giá gói thầu hoặc dự toán gói thầu được phê duyệt (bao gồm cả chi phí dự phòng cho gói thầu đó) thì:',
    options: [
      'a. Chủ đầu tư được quyền quyết định điều chỉnh.',
      'b. Chủ đầu tư được quyền quyết định điều chỉnh và sau đó phải báo cáo với người quyết định đầu tư.',
      'c. Chủ đầu tư được quyền quyết định điều chỉnh và nhưng trước phải báo cáo với người quyết định đầu tư.',
      'd. Phải được chấp thuận chủ trương điều chỉnh giá hợp đồng của người có thẩm quyền quyết định đầu tư xem xét, quyết định.',
    ],
    correct: 3
  },
  {
    question: 'Khi phát hiện nguy cơ xảy ra tai nạn lao động, sự cố mất an toàn lao động, người quản lý dự án phải làm gì?',
    options: [
      'a. Dừng thi công xây dựng.',
      'b. Yêu cầu nhà thầu có biện pháp khắc phục đảm bảo an toàn.',
      'c. Chỉ được tiếp tục thi công sau khi người quản lý dự án kiểm tra, chấp thuận đảm bảo an toàn.',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Giá xây dựng tổng hợp bộ phận kết cấu công trình do Bộ Xây dựng công bố là:',
    options: [
      'a. Toàn bộ chi phí cần thiết để hoàn thành một đơn vị khối lượng nhóm, loại công tác xây dựng, đơn vị kết cấu hoặc bộ phận công trình xây dựng.',
      'b. Bao gồm toàn bộ chi phí cần thiết để hoàn thành một đơn vị khối lượng nhóm, loại công tác xây dựng, đơn vị kết cấu hoặc bộ phận công trình xây dựng và chi phí tư vấn xây dựng.',
      'c. Toàn bộ chi phí cần thiết để hoàn thành một đơn vị khối lượng nhóm, loại công tác xây dựng, đơn vị kết cấu hoặc bộ phận công trình xây dựng chưa bao gồm thuế giá trị gia tăng.',
      'd. Câu a, b và c đều sai.',
    ],
    correct: 0
  },
  {
    question: 'Đơn vị nào sau đây chịu trách nhiệm về giá trị đề nghị thanh toán trong hồ sơ đề nghị thanh toán?',
    options: [
      'a. Chủ đầu tư hoặc đại diện hợp pháp của chủ đầu tư.',
      'b. Cơ quan thanh toán vốn đầu tư .',
      'c. Chủ đầu tư và cơ quan thanh toán vốn đầu tư.',
      'd. Đơn vị tư vấn lập hồ sơ thanh toán.',
    ],
    correct: 0
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
    question: 'Việc giám sát thi công xây dựng công trình phải đảm bảo những yêu cầu nào trong các yêu cầu sau?',
    options: [
      'a. Thực hiện trong suốt quá trình thi công từ khi khởi công xây dựng, trong thời gian thực hiện cho đến khi hoàn thành và nghiệm thu công việc, công trình xây dựng.',
      'b. Giám sát thi công công trình đúng với thiết kế xây dựng được phê duyệt, tiêu chuẩn áp dụng, quy chuẩn kỹ thuật, quy định về quản lý, sử dụng vật liệu xây dựng, chỉ dẫn kỹ thuật và hợp đồng xây dựng.',
      'c. Trung thực khách quan, không vụ lợi.',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Nhà thầu thiết kế không phải thực hiện các nghĩa vụ sau:',
    options: [
      'a. Tuân thủ tiêu chuẩn áp dụng, quy chuẩn kỹ thuật cho công trình.',
      'b. Chịu trách nhiệm về chất lượng sản phẩm thiết kế do mình đảm nhận.',
      'c. Giám sát thi công xây dựng trong quá trình thi công xây dựng.',
      'd. Không được chỉ định nhà sản xuất cung cấp vật liệu, vật tư và thiết bị xây dựng trong nội dung thiết kế xây dựng của công trình sử dụng vốn đầu tư công và vốn nhà nước ngoài đầu tư công.',
    ],
    correct: 2
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
