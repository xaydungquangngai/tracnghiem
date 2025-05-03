const questions = [
  {
    question: 'Theo anh chị, đất dành cho xây dựng công trình điện lực do cơ quan nào có trách nhiệm bố trí?',
    options: [
      'a. Ủy ban nhân dân cấp tỉnh;',
      'b. Sở Tài nguyên và Môi trường;',
      'c. Ủy ban nhân dân cấp huyện;',
      'd. Ủy ban nhân dân các cấp.',
    ],
    correct: 3
  },
  {
    question: 'Anh chị hiểu như thế nào là hoạt động điện lực?',
    options: [
      'a. Là hoạt động của tổ chức, cá nhân trong các lĩnh vực quy hoạch, đầu tư phát triển điện lực, phát điện, truyền tải điện, phân phối điện, điều độ hệ thống điện, điều hành giao dịch thị trường điện lực, bán buôn điện, bán lẻ điện, tư vấn chuyên ngành điện lực và những hoạt động khác có liên quan;',
      'b. Là hoạt động của tổ chức, cá nhân trong các lĩnh vực đầu tư phát triển điện lực, tư vấn chuyên ngành điện lực;',
      'c. Là hoạt động của tổ chức, cá nhân trong các lĩnh vực, kinh doanh phân phối điện;',
      'd. Tất cả các đáp trên đều đúng.',
    ],
    correct: 0
  },
  {
    question: 'Quy định về bảo vệ an toàn đường cáp điện ngầm gồm những nội dung nào?',
    options: [
      'a. Cấm đào hố, chất hàng hóa, đóng cọc, trồng cây, xây dựng nhà ở và các công trình khác, thả neo tàu thuyền trong hành lang bảo vệ đường cáp điện ngầm.',
      'b. Cấm thải nước và các chất ăn mòn cáp, trang thiết bị vào hành lang bảo vệ đường cáp điện ngầm; Trường hợp thải nước và các chất khác ngoài hành lang bảo vệ đường cáp điện ngầm mà có khả năng xâm nhập, ăn mòn, làm hư hỏng cáp thì chủ sở hữu hoặc người quản lý, sử dụng nhà ở, công trình có nước, chất thải phải có trách nhiệm xử lý để không làm ảnh hưởng tới cáp.',
      'c. Khi thi công các công trình trong đất hoặc nạo vét lòng sông, hồ trong phạm vi hành lang bảo vệ đường cáp điện ngầm, bên thi công phải thông báo trước ít nhất mười ngày cho đơn vị quản lý công trình lưới điện và phải thực hiện các biện pháp bảo đảm an toàn đường cáp điện ngầm.',
      'd. Cả 3 nội dung a, b và',
    ],
    correct: 3
  },
  {
    question: 'Quy định phân hạng về quy mô của công trình lưới điện đối với lĩnh vực tư vấn đầu tư xây dựng công trình điện và tư vấn giám sát thi công công trình điện như nào là đúng:',
    options: [
      'a. Hạng 1 không giới hạn quy mô công suất; hạng 2 đến 220kV; hạng 3 đến 110kV; hạng 4 đến 35kV.',
      'b. Hạng 1 từ 220kV; hạng 2 đến 110kV; hạng 3 dưới 110kV; hạng 4 đến 35kV.',
      'c. Hạng 1 trên 220kV; hạng 2 đến 220kV; hạng 3 đến dưới 220kV; hạng 4 đến 35kV.',
      'd. Hạng 1 từ 220kV; hạng 2 đến 220kV; hạng 3 đến 110kV; hạng 4 đến 35kV.',
    ],
    correct: 0
  },
  {
    question: 'Quy định về cấp phép tư vấn đầu tư xây dựng công trình đường dây và trạm biến áp yêu cầu số lượng chuyên gia chính theo hạng công trình như thế nào là đúng:',
    options: [
      'a. Hạng 1 có 25 chuyên gia trở lên, có ít nhất 01 chuyên gia tư vấn chủ trì.',
      'b. Hạng 1 có 20 chuyên gia trở lên, có ít nhất 02 chuyên gia tư vấn chủ trì.',
      'c. Hạng 1 có 20 chuyên gia trở lên, có ít nhất 01 chuyên gia tư vấn chủ trì.',
      'd. Hạng 1 có 10 chuyên gia trở lên, có ít nhất 01 chuyên gia tư vấn chủ trì.',
    ],
    correct: 2
  },
  {
    question: 'Khi xây dựng, lắp đặt công trình điện lực, hành vi nào sau đây sẽ bị xử lý hành chính:',
    options: [
      'a. Bắt buộc áp dụng các tiêu chuẩn liên quan đến xây dựng, lắp đặt công trình điện không phù hợp với tiêu chuẩn, quy chuẩn kỹ thuật do cơ quan nhà nước có thẩm quyền ban hành.',
      'b. Lựa chọn các tổ chức, cá nhân không đủ điều kiện, năng lực theo quy định để thực hiện tư vấn chuyên ngành điện lực, thi công công trình điện lực.',
      'c. Nội dung a và',
      'b. d. Cả 3 nội dung trên đều đúng.',
    ],
    correct: 1
  },
  {
    question: 'Nội dung nào sau đây không phải là quyền của đơn vị tư vấn chuyên ngành điện lực:',
    options: [
      'a. Áp dụng các quy phạm, tiêu chuẩn, định mức kinh tế - kỹ thuật của Việt Nam liên quan đến công tác tư vấn quy hoạch và đầu tư xây dựng điện. Trường hợp áp dụng quy phạm và tiêu chuẩn của nước ngoài thì phải được cơ quan nhà nước có thẩm quyền chấp thuận.',
      'b. Hoạt động tư vấn theo giấy phép hoạt động điện lực.',
      'c. Đề nghị các cơ các cơ quan có liên quan cung cấp thông tin cần thiết phù hợp với quy định của pháp luật phục vụ cho hoạt động tư vấn chuyên ngành điện lực.',
      'd. Hợp tác với tổ chức, cá nhân nước ngoài trong lĩnh vực tư vấn chuyên ngành điện lực.',
    ],
    correct: 0
  },
  {
    question: 'Nội dung nào sau đây không thuộc trách nhiệm của đơn vị tư vấn chuyên ngành điện lực:',
    options: [
      'a. Áp dụng công nghệ và phương pháp tính toán tiên tiến để lập đề án quy hoạch phát triển điện lực và hồ sơ, tài liệu về đầu tư xây dựng công trình điện lực phù hợp với yêu cầu hiện đại hoá trong lĩnh vực phát điện, truyền tải điện, phân phối điện, nhằm nâng cao hiệu quả kinh tế và bảo đảm độ an toàn, tin cậy cao trong đầu tư xây dựng công trình điện lực; chịu trách nhiệm về chất lượng sản phẩm, dịch vụ đã thực hiện.',
      'b. Đề nghị cơ quan nhà nước có thẩm quyền sửa đổi, bổ sung quy phạm, tiêu chuẩn, định mức kinh tế - kỹ thuật phục vụ cho hoạt động tư vấn chuyên ngành điện lực.',
      'c. Áp dụng các quy phạm, tiêu chuẩn, định mức kinh tế - kỹ thuật của Việt Nam liên quan đến công tác tư vấn quy hoạch và đầu tư xây dựng điện. Trường hợp áp dụng quy phạm và tiêu chuẩn của nước ngoài thì phải được cơ quan nhà nước có thẩm quyền chấp thuận.',
      'd. Nội dung a và',
    ],
    correct: 1
  },
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
    question: 'Nhiệm vụ khảo sát xây dựng phải phù hợp với các nội dung nào sau đây?',
    options: [
      'a. Loại và nhóm dự án đầu tư xây dựng',
      'b. Nhiệm vụ thiết kế xây dựng công trình',
      'c. Chủ trương đầu tư xây dựng',
      'd. Loại, cấp công trình xây dựng, loại hình khảo sát và bước thiết kế',
    ],
    correct: 3
  },
  {
    question: 'Chủ đầu tư được tự thực hiện hoặc thuê tổ chức, cá nhân có năng lực hành nghề phù hợp với loại hình khảo sát để giám sát khảo sát xây dựng theo các nội dung nào sau đây?',
    options: [
      'a. Kiểm tra năng lực thực tế của nhà thầu khảo sát xây dựng được sử dụng so với phương án khảo sát xây dựng được duyệt và quy định của hợp đồng xây dựng',
      'b. Theo dõi, kiểm tra việc thực hiện khảo sát xây dựng bao gồm: vị trí khảo sát, khối lượng khảo sát, quy trình thực hiện khảo sát, lưu giữ số liệu khảo sát và mẫu thí nghiệm;',
      'c. Theo dõi, kiểm tra công tác thí nghiệm trong phòng và thí nghiệm hiện trường; công tác bảo đảm an toàn lao động, an toàn môi trường trong quá trình thực hiện khảo sát.',
      'd. Tất cả các nội dung trên',
    ],
    correct: 3
  },
  {
    question: 'Thiết kế xây dựng công trình phải đáp ứng yêu cầu nào dưới đây?',
    options: [
      'a. Đáp ứng yêu cầu của nhiệm vụ thiết kế; phù hợp với nội dung dự án đầu tư xây dựng được duyệt, quy hoạch xây dựng, cảnh quan kiến trúc, điều kiện tự nhiên, văn hóa - xã hội tại khu vực xây dựng',
      'b. Tuân thủ tiêu chuẩn áp dụng, quy chuẩn kỹ thuật, quy định của pháp luật về sử dụng vật liệu xây dựng, đáp ứng yêu cầu về công năng sử dụng, công nghệ áp dụng (nếu có); bảo đảm an toàn chịu lực, an toàn trong sử dụng, mỹ quan, bảo vệ môi trường',
      'c. Có giải pháp thiết kế phù hợp và chi phí xây dựng hợp lý; bảo đảm đồng bộ trong từng công trình và với các công trình liên quan',
      'd. Cả 3 yêu cầu nêu tại a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Thiết kế, dự toán xây dựng công trình triển khai sau thiết kế cơ sở gồm những nội dung chủ yếu gì?',
    options: [
      'a. Phương án kiến trúc, phương án công nghệ (nếu có)',
      'b. Phương án kết cấu, loại vật liệu chủ yếu',
      'c. Dự toán xây dựng',
      'd. Bao gồm cả 3 nội dung nêu tại a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Trên cơ sở bảo đảm sự thống nhất, đồng bộ về nội dung, cơ sở tính toán trong các kết quả thẩm định. Việc thẩm định thiết kế xây dựng triển khai sau thiết kế cơ sở được thực hiện như thế nào là đúng sau đây ?',
    options: [
      'a. Với toàn bộ các công trình;',
      'b. Với từng công trình của dự án hoặc bộ phận công trình theo giai đoạn thi công công trình theo yêu cầu của chủ đầu tư;',
      'c. Có thể thực hiện a hoặc b;',
      'd. Các đáp án trên đều sai.',
    ],
    correct: 2
  },
  {
    question: 'Đối với dự án sử dụng vốn đầu tư công, ai là người phê duyệt thiết kế bản vẽ thi công và dự toán xây dựng, trong trường hợp thiết kế 2 bước?',
    options: [
      'a. Người quyết định đầu tư',
      'b. Chủ đầu tư',
      'c. Ban QLDA đầu tư xây dựng chuyên ngành hoặc Ban QLDA khu vực',
      'd. Cơ quan chuyên môn của người quyết định đầu tư',
    ],
    correct: 1
  },
  {
    question: 'Đối với dự án sử dụng vốn đầu tư công, ai là người phê duyệt thiết kế bản vẽ thi công và dự toán xây dựng, trong trường hợp thiết kế 2 bước?',
    options: [
      'a. Người quyết định đầu tư',
      'b. Chủ đầu tư',
      'c. Ban QLDA đầu tư xây dựng chuyên ngành hoặc Ban QLDA khu vực',
      'd. Cơ quan chuyên môn của người quyết định đầu tư',
    ],
    correct: 1
  },
  {
    question: 'Trong trường hợp điều chỉnh thiết kế xây dựng triển khai sau thiết kế cơ sở, cơ quan chuyên môn về xây dựng theo thẩm quyền thực hiện việc thẩm định thiết kế xây dựng điều chỉnh đối với trường hợp nào sau đây?',
    options: [
      'a. Điều chỉnh, bổ sung thiết kế xây dựng có thay đổi về địa chất công trình, tải trọng thiết kế, giải pháp kết cấu, vật liệu sử dụng cho kết cấu chịu lực và biện pháp tổ chức thi công có ảnh hưởng đến an toàn chịu lực của công trình;',
      'b. Khi điều chỉnh dự án đầu tư xây dựng có yêu cầu điều chỉnh thiết kế cơ sở',
      'c. Cả trường hợp a và b',
      'd. Không thẩm trường hợp nào ở trên',
    ],
    correct: 2
  },
  {
    question: 'Tổ chức nào không được thực hiện thẩm tra thiết kế, dự toán công trình X?',
    options: [
      'a. Tổ chức đã thiết kế xây dựng công trình X',
      'b. Cơ quan chuyên môn về xây dựng',
      'c. Ban quản lý dự án đầu tư xây dựng thuộc chủ đầu tư',
      'd. Tổ chức tư vấn giám sát thi công xây dựng công trình X',
    ],
    correct: 0
  },
  {
    question: 'Cơ quan chuyên môn về xây dựng theo thẩm quyền thực hiện việc thẩm định thiết kế xây dựng điều chỉnh đối với các trường hợp nào sau đây?',
    options: [
      'a. Điều chỉnh, bổ sung thiết kế xây dựng có thay đổi về địa chất công trình, tải trọng thiết kế, giải pháp kết cấu, vật liệu sử dụng cho kết cấu chịu lực và biện pháp tổ chức thi công có ảnh hưởng đến an toàn chịu lực của công trình',
      'b. Khi điều chỉnh dự án đầu tư xây dựng có yêu cầu điều chỉnh thiết kế cơ sở',
      'c. Cả trường hợp a và b',
      'd. Không trường hợp nào ở trên',
    ],
    correct: 2
  },
  {
    question: 'Hồ sơ trình thẩm định Báo cáo nghiên cứu khả thi đầu tư xây dựng tại cơ quan chuyên môn về xây dựng bao gồm nội dung nào sau đây?',
    options: [
      'a. Các văn bản thỏa thuận, xác nhận về đấu nối hạ tầng kỹ thuật của dự án;',
      'b. Văn bản ý kiến về giải pháp phòng cháy, chữa cháy của thiết kế cơ sở; văn bản kết quả thực hiện thủ tục về đánh giá tác động môi trường theo quy định của pháp luật về bảo vệ môi trường;',
      'c. Bao gồm cả a và b',
      'd. Không bao gồm các nội dung trên',
    ],
    correct: 2
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
    question: 'Cá nhân có trình độ cao đẳng, trung cấp có chứng chỉ hành nghề thiết kế được chủ trì thiết kế công trình cấp mấy?',
    options: [
      'a. Cấp II trở xuống',
      'b. Cấp III trở xuống',
      'c. Cấp IV',
      'd. Không được chủ trì thiết kế xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Dự án nào sau đây yêu cầu phải lập Báo cáo nghiên cứu tiền khả thi đầu tư xây dựng ?',
    options: [
      'a. Dự án quan trọng quốc gia',
      'b. Dự án quan trọng quốc gia, dự án nhóm A và nhóm B',
      'c. Dự án quan trọng quốc gia và dự án nhóm A',
      'd. Cả ba đáp án trên',
    ],
    correct: 2
  },
  {
    question: 'Nhiệm vụ khảo sát xây dựng do chủ thể nào lập?',
    options: [
      'a. Nhà thầu thiết kế',
      'b. Tổ chức, cá nhân có đủ điều kiện năng lực',
      'c. Nhà thầu thiết kế hoặc tổ chức, cá nhân có đủ điều kiện năng lực',
      'd. Người quyết định đầu tư',
    ],
    correct: 2
  },
  {
    question: 'Phương án kỹ thuật khảo sát xây dựng do chủ thể nào lập?',
    options: [
      'a. Nhà thầu thiết kế',
      'b. Nhà thầu Khảo sát',
      'c. Tư vấn giám sát',
      'd. Chủ đầu tư',
    ],
    correct: 1
  },
  {
    question: 'Chỉ dẫn kỹ thuật phải phù hợp với nội dung nào sau đây?',
    options: [
      'a. Quy chuẩn kỹ thuật,',
      'b. Tiêu chuẩn áp dụng cho công trình xây dựng được phê duyệt',
      'c. Theo yêu cầu của thiết kế xây dựng công trình.',
      'd. Cả phương án a,b,c',
    ],
    correct: 3
  },
  {
    question: 'Bắt buộc thực hiện lập chỉ dẫn kỹ thuật riêng đối với công trình nào sau đây?',
    options: [
      'a. Công trình ảnh hưởng lớn đến an toàn, lợi ích cộng đồng',
      'b. Toàn bộ các cấp',
      'c. Cấp đặc biệt, cấp I và cấp II',
      'd. Công trình quan trọng quốc gia',
    ],
    correct: 2
  },
  {
    question: 'Đối với công trình xây dựng sử dụng vốn đầu tư công ai là người phê duyệt thiết kế kỹ thuật, dự toán xây dựng trường hợp thiết kế ba bước?',
    options: [
      'a. Người quyết định đầu tư',
      'b. Chủ đầu tư',
      'c. Giám đốc Ban quản lý dự án',
      'd. Không phải các đáp án trên',
    ],
    correct: 1
  },
  {
    question: 'Đối với công trình xây dựng sử dụng vốn đầu tư công ai là người phê duyệt thiết kế bản vẽ thi công trong trường hợp thiết kế ba bước?',
    options: [
      'a. Chủ đầu tư',
      'b. Người quyết định đầu tư',
      'c. Tư vấn thiết kế',
      'd. Tư vấn giám sát',
    ],
    correct: 0
  },
  {
    question: 'Trong quá trình thẩm định, trường hợp cơ quan chuyên môn về xây dựng yêu cầu người đề nghị thẩm định lựa chọn tổ chức, cá nhân có đủ điều kiện năng lực để thẩm tra, quy định nào là không đúng sau đây?',
    options: [
      'a. Việc lựa chọn tổ chức, cá nhân thẩm tra thiết kế xây dựng thực hiện theo hình thức chỉ định thầu rút gọn',
      'b. Tổ chức tư vấn thẩm tra phải độc lập về pháp lý, tài chính với chủ đầu tư',
      'c. Việc lựa chọn tổ chức, cá nhân thẩm tra thiết kế xây dựng thực hiện theo hình thức đấu thầu hạn chế được quy định tại pháp luật về đấu thầu.',
      'd. Tổ chức tư vấn thẩm tra phải độc lập về pháp lý, tài chính với các nhà thầu tư vấn lập thiết kế xây dựng',
    ],
    correct: 2
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
    question: 'Trường hợp nào khi điều chỉnh thiết kế phải trình cơ quan chuyên môn về xây dựng thẩm định lại?',
    options: [
      'a. Thay đổi kết cấu chịu lực công trình',
      'b. Thay đổi vật liệu sử dụng nhưng không làm tăng tải trọng tác động lên công trình',
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
    question: 'Trước khi trình cơ quan chuyên môn về xây dựng thẩm định thiết kế, chủ đầu tư có cần phải thuê tư vấn thẩm tra hay không?',
    options: [
      'a. Có',
      'b. Không',
      'c. Do chủ đầu tư quyết định',
      'd. Có, nhưng theo yêu cầu của cơ quan chuyên môn về xây dựng',
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
    question: 'Dự án đầu tư xây dựng bệnh viện nhóm B sử dụng vốn đầu tư công, có công trình cấp cao nhất là cấp I do Chủ tịch UBND cấp tỉnh quyết định đầu tư thì phải trình cơ quan nào thẩm định thiết kế kỹ thuật, dự toán xây dựng?',
    options: [
      'a. Cơ quan chuyên môn về xây dựng của Bộ Xây dựng',
      'b. Sở Xây dựng',
      'c. Cơ quan chuyên môn của người quyết định đầu tư',
      'd. Cả 3 phương án a, b và c đều sai',
    ],
    correct: 0
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
];
