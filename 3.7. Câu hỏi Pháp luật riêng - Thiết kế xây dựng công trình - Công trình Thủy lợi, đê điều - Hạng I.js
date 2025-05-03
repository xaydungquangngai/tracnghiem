const questions = [
  {
    question: 'Việc áp dụng giải pháp kỹ thuật, công nghệ, vật liệu mới trong hoạt động đầu tư xây dựng phải đáp ứng yêu cầu nào?',
    options: [
      'a. Yêu cầu về quy định của pháp luật có liên quan.',
      'b. Yêu cầu của chủ đầu tư.',
      'c. Yêu cầu của tiêu chuẩn quốc gia.',
      'd. Yêu cầu của quy chuẩn kỹ thuật quốc gia và quy định của pháp luật có liên quan',
    ],
    correct: 3
  },
  {
    question: 'Trình tự đầu tư xây dựng (trừ trường hợp xây dựng nhà riêng lẻ) gồm mấy giai đoạn?',
    options: [
      'a. Theo giai đoạn chung của dự án.',
      'b. 1 giai đoạn.',
      'c. 2 giai đoạn.',
      'd. 3 giai đoạn',
    ],
    correct: 3
  },
  {
    question: 'Dự án đầu tư xây dựng không phân biệt các loại nguồn vốn sử dụng không phải đáp ứng các yêu cầu nào sau đây ?',
    options: [
      'a. Phù hợp với quy hoạch cấp quốc gia, quy hoạch vùng, quy hoạch tỉnh, quy hoạch xây dựng, quy hoạch và kế hoạch sử dụng đất tại địa phương nơi có dự án đầu tư xây dựng.',
      'b. Có phương án công nghệ phù hợp với trình độ khoa học công nghệ của địa phương.',
      'c. Bảo đảm chất lượng, an toàn trong xây dựng, vận hành, khai thác, sử dụng công trình, phòng, chống cháy, nổ và bảo vệ môi trường, ứng phó với biến đổi khí hậu.',
      'd. Bảo đảm cấp đủ vốn đúng tiến độ của dự án, hiệu quả tài chính, hiệu quả kinh tế - xã hội của dự án.',
    ],
    correct: 1
  },
  {
    question: 'Công trình nào sau đây không phải là công trình ảnh hưởng lớn đến an toàn cộng đồng?',
    options: [
      'a. Công trình y tế cấp III trở lên.',
      'b. Công trình công nghiệp nhẹ cấp III trở lên.',
      'c. Công trình giao thông (cầu đường bộ, cầu bộ hành, cầu đường sắt, cầu phao cấp IV)',
      'd. Công trình đê điều cấp IV',
    ],
    correct: 2
  },
  {
    question: 'Cơ quan, đơn vị nào được quyền điều chỉnh quy trình bảo trì khi phát hiện thấy những yếu tố bất hợp lý có thể ảnh hưởng đến chất lượng công trình, gây ảnh hưởng đến việc khai thác, sử dụng công trình.',
    options: [
      'a. Cấp quyết định đầu tư.',
      'b. Chủ sở hữu hoặc người quản lý sử dụng công trình',
      'c. Đơn vị tư vấn thiết kế',
      'd. Đơn vị thi công.',
    ],
    correct: 1
  },
  {
    question: 'Đối với các công trình xây dựng đã đưa vào khai thác, sử dụng nhưng chưa có quy trình bảo trì cơ quan, đơn vị nào có trách nhiệm phải lập và phê duyệt quy trình bảo trì.',
    options: [
      'a. Cấp quyết định đầu tư.',
      'b. Chủ sở hữu hoặc người quản lý sử dụng công trình',
      'c. Đơn vị tư vấn thiết kế',
      'd. Đơn vị thi công.',
    ],
    correct: 1
  },
  {
    question: 'Khi phát hiện hạng mục công trình, công trình có dấu hiệu nguy hiểm không đảm bảo an toàn cho việc khai thác, sử dụng thì chủ sở hữu hoặc người quản lý, sử dụng công trình không cần phải thực hiện nội dung nào sau đây.',
    options: [
      'a. Kiểm tra lại hiện trạng công trình;',
      'b. Tổ chức kiểm định chất lượng công trình (nếu cần thiết);',
      'c. Báo cáo người Quyết định đầu tư Quyết định thực hiện các biện pháp khẩn cấp như hạn chế sử dụng công trình, ngừng sử dụng công trình, khoanh vùng nguy hiểm, di chuyển người và tài sản để bảo đảm an toàn nếu công trình có nguy cơ sập đổ;',
      'd. Báo cáo ngay với chính quyền địa phương nơi gần nhất;',
    ],
    correct: 2
  },
  {
    question: 'Chủ đầu tư được quyền tự điều chỉnh giá hợp đồng khi nào trong các trường hợp sau:',
    options: [
      'a. Giá hợp đồng sau điều chỉnh không làm vượt giá gói thầu hoặc dự toán gói thầu được phê duyệt (bao gồm cả chi phí dự phòng cho gói thầu đó) .',
      'b. Giá hợp đồng sau điều chỉnh làm vượt giá gói thầu hoặc dự toán gói thầu được phê duyệt (bao gồm cả chi phí dự phòng)',
      'c. Giá hợp đồng sau điều chỉnh làm vượt giá gói thầu hoặc dự toán gói thầu được phê duyệt (bao gồm cả chi phí dự phòng), vượt tổng mức đầu tư.',
      'd. Giá hợp đồng sau điều chỉnh làm vượt giá gói thầu nhưng không vượt dự toán gói thầu.',
    ],
    correct: 0
  },
  {
    question: 'Dự án đầu tư xây dựng công trình Nông nghiệp và PTNT (đê điều, Thủy lợi) sử dụng đầu tư công, có công trình cấp cao nhất là cấp I do Chủ tịch UBND Thành Phố Hà Nội quyết định đầu tư thì phải trình cơ quan nào thẩm định thiết kế thiết kế xây dựng triển khai sau thiết kế cơ sở?',
    options: [
      'a. Cơ quan chuyên môn về xây dựng của Bộ Xây dựng.',
      'b. Sở Nông nghiệp và PTNT.',
      'c. Sở Kế hoạch và đầu tư.',
      'd. Cơ quan chuyên môn của người quyết định đầu tư.',
    ],
    correct: 1
  },
  {
    question: 'Dự án đầu tư xây dựng công trình Nông nghiệp và PTNT (đê điều, Thủy lợi) cấp I, sử dụng đầu tư công do Chủ tịch UBND Thành Phố Hà Nội quyết định đầu tư thì phải trình cơ quan nào thẩm định thiết kế thiết kế xây dựng triển khai sau thiết kế cơ sở?',
    options: [
      'a. Cơ quan chuyên môn về xây dựng của Bộ Xây dựng.',
      'b. Sở Nông nghiệp và PTNT.',
      'c. Sở Xây dựng.',
      'd. Cơ quan chuyên môn thuộc UBND cấp Quận, huyện.',
    ],
    correct: 0
  },
  {
    question: 'Dự án đầu tư xây dựng công trình Nông nghiệp và PTNT cấp I, sử dụng vốn đầu tư công do Chủ tịch UBND Thành Phố Hà Nội quyết định đầu tư thì phải trình cơ quan nào kiểm tra công tác nghiệm thu?',
    options: [
      'a. Cơ quan chuyên môn về xây dựng của Bộ Xây dựng.',
      'b. Sở Nông nghiệp và PTNT.',
      'c. Sở Xây dựng.',
      'd. Cơ quan chuyên môn thuộc UBND cấp Quận, huyện.',
    ],
    correct: 1
  },
  {
    question: 'Khi điều chỉnh Báo cáo Kinh tế kỹ thuật đầu tư xây dựng làm tăng tổng mức đầu tư vượt quá 10% mức quy định được lập Báo cáo kinh tế - kỹ thuật đầu tư xây dựng thì phải thực hiện bước nào trong các bước sau:',
    options: [
      'a. Lập báo cáo nghiên cứu khả thi điều chỉnh',
      'b. Phê duyệt Báo cáo kinh tế kỹ thuật điều chỉnh',
      'c. Điều chỉnh Tổng mức đầu tư trong báo cáo kinh tế kỹ thuật',
      'd. Điều chỉnh thiết kế cơ sở.',
    ],
    correct: 0
  },
  {
    question: 'Phân loại và phân cấp công trình thủy lợi để',
    options: [
      'a. Quản lý, khai thác và bảo vệ công trình thủy lợi',
      'b. Phục vụ đầu tư xây dựng, quản lý, khai thác và bảo vệ công trình thủy lợi',
      'c. Phục vụ đầu tư xây dựng công trình thủy lợi',
      'd. Phục vụ công tác quản lý công trình thủy lợi',
    ],
    correct: 1
  },
  {
    question: 'Cấp công trình thủy lợi được xác định theo',
    options: [
      'a. Quy mô, nhiệm vụ công trình thủy lợi',
      'b. Quy mô và yêu cầu kỹ thuật xây dựng công trình công trình thủy lợi',
      'c. Quy mô, nhiệm vụ, điều kiện địa chất nền và yêu cầu kỹ thuật xây dựng công trình',
      'd. Quy mô, nhiệm vụ, điều kiện địa chất nền, yêu cầu kỹ thuật xây dựng công trình và phạm vi lưu vực của dự án thủy lợi',
    ],
    correct: 2
  },
  {
    question: 'Khi xây dựng với tràn xả lũ của đập, hồ chứa nước có cửa van điều tiết phải',
    options: [
      'a. Lắp đặt hệ thống giám sát vận hành; thiết bị thông tin, cảnh báo an toàn cho đập và vùng hạ du đập; thiết bị quan trắc khí tượng thủy văn chuyên dùng trên lưu vực hồ chứa nước',
      'b. Lắp đặt thiết bị thông tin, cảnh báo an toàn cho đập và vùng hạ du đập',
      'c. Lắp đặt thiết bị thông tin, cảnh báo an toàn cho đập và vùng hạ du đập; thiết bị quan trắc khí tượng thủy văn chuyên dùng trên lưu vực hồ chứa nước',
      'd. Lắp đặt hệ thống giám sát vận hành; thiết bị thông tin, cảnh báo an toàn cho đập và vùng hạ du đập',
    ],
    correct: 0
  },
  {
    question: 'Khi xây dựng đập, hồ chứa nước lớn có tràn tự do phải',
    options: [
      'a. Lắp đặt thiết bị thông tin, cảnh báo an toàn cho đập và vùng hạ du đập; thiết bị quan trắc khí tượng thủy văn chuyên dùng trên lưu vực hồ chứa nước',
      'b. Lắp đặt thiết bị thông tin, cảnh báo an toàn cho đập và vùng hạ du đập',
      'c. Lắp đặt hệ thống giám sát; thiết bị thông tin, cảnh báo an toàn cho đập và vùng hạ du đập; thiết bị quan trắc khí tượng thủy văn chuyên dùng trên lưu vực hồ chứa nước',
      'd. Lắp đặt thiết bị cảnh báo an toàn cho đập và vùng hạ du đập',
    ],
    correct: 0
  },
  {
    question: 'Phạm vi bảo vệ công trình thủy lợi bao gồm công trình và vùng phụ cận. Vùng phụ cận của đập cấp I có phạm vi được tính từ chân đập trở ra tối thiểu là',
    options: [
      'a. 250 m',
      'b. 200 m',
      'c. 150 m',
      'd. 100 m',
    ],
    correct: 1
  },
  {
    question: 'Phạm vi bảo vệ công trình thủy lợi bao gồm công trình và vùng phụ cận. Vùng phụ cận của đập cấp II có phạm vi được tính từ chân đập trở ra tối thiểu là',
    options: [
      'a. 250 m',
      'b. 200 m',
      'c. 150 m',
      'd. 100 m',
    ],
    correct: 3
  },
  {
    question: 'Phạm vi bảo vệ công trình thủy lợi bao gồm công trình và vùng phụ cận. Vùng phụ cận của đập cấp III có phạm vi được tính từ chân đập trở ra tối thiểu là',
    options: [
      'a. 200 m',
      'b. 150 m',
      'c. 100 m',
      'd. 50 m',
    ],
    correct: 3
  },
  {
    question: 'Phạm vi bảo vệ công trình thủy lợi bao gồm công trình và vùng phụ cận. Vùng phụ cận của đập cấp IV có phạm vi được tính từ chân đập trở ra tối thiểu là',
    options: [
      'a. 70 m',
      'b. 50 m',
      'c. 30 m',
      'd. 20 m',
    ],
    correct: 3
  },
  {
    question: 'Phạm vi bảo vệ công trình thủy lợi bao gồm công trình và vùng phụ cận. Vùng phụ cận của kênh có lưu lượng từ 02 m³/s đến 10 m³/s được quy định như sau',
    options: [
      'a. Từ chân mái ngoài trở ra từ 03 m đến 04 m đối với kênh đất, từ 02 m đến 03 m đối với kênh kiên cố',
      'b. Từ chân mái ngoài trở ra từ 02 m đến 03 m đối với kênh đất, từ 01 m đến 02 m đối với kênh kiên cố',
      'c. Từ chân mái ngoài trở ra từ 04 m đến 05 m đối với kênh đất, từ 02 m đến 03 m đối với kênh kiên cố',
      'd. Từ chân mái ngoài trở ra từ 03 m đến 05 m đối với kênh đất, từ 01 m đến 02 m đối với kênh kiên cố',
    ],
    correct: 1
  },
  {
    question: 'Phạm vi bảo vệ công trình thủy lợi bao gồm công trình và vùng phụ cận. Vùng phụ cận của kênh có lưu lượng lớn hơn 10 m³/s được quy định như sau',
    options: [
      'a. Từ chân mái ngoài trở ra từ 03 m đến 04 m đối với kênh đất, từ 02 m đến 03 m đối với kênh kiên cố',
      'b. Từ chân mái ngoài trở ra từ 03 m đến 05 m đối với kênh đất, từ 02 m đến 03 m đối với kênh kiên cố',
      'c. Từ chân mái ngoài trở ra từ 04 m đến 05 m đối với kênh đất, từ 02 m đến 03 m đối với kênh kiên cố',
      'd. Từ chân mái ngoài trở ra từ 03 m đến 05 m đối với kênh đất, từ 01 m đến 02 m đối với kênh kiên cố',
    ],
    correct: 1
  },
  {
    question: 'Đập, hồ chứa nước quan trọng đặc biệt thuộc một trong các trường hợp sau',
    options: [
      'a. Đập có chiều cao từ 100 m trở lên;',
      'b. Hồ chứa nước có dung tích toàn bộ từ 1.000.000.000 m³ trở lên;',
      'c. Hồ chứa nước có dung tích từ 500.000.000 m³ đến dưới 1.000.000.000 m³ mà vùng hạ du đập là thành phố, thị xã, khu công nghiệp, công trình quan trọng liên quan đến an ninh quốc gia',
      'd. Cả 03 ý trên',
    ],
    correct: 3
  },
  {
    question: 'Đập, hồ chứa nước lớn thuộc một trong các trường hợp sau',
    options: [
      'a. Đập có chiều cao từ 15 m đến dưới 100 m',
      'b. Đập có chiều cao từ 10 m đến dưới 15 m và chiều dài đập từ 500 m trở lên hoặc đập có chiều cao từ 10 m đến dưới 15 m và có lưu lượng tràn xả lũ thiết kế trên 2.000 m3/s',
      'c. Hồ chứa nước có dung tích toàn bộ từ 3.000.000 m3 đến dưới 1.000.000.000 m3 trừ hồ chứa mà vùng hạ du đập là thành phố, thị xã, khu công nghiệp, công trình quan trọng liên quan đến an ninh quốc gia',
      'd. Cả 03 ý trên',
    ],
    correct: 3
  },
  {
    question: 'Đập, hồ chứa nước vừa thuộc một trong các trường hợp sau',
    options: [
      'a. Đập có chiều cao từ 10 m đến dưới 15 m',
      'b. Hồ chứa nước có dung tích toàn bộ từ 500.000 m3 đến dưới 3.000.000 m3',
      'c. Đập có chiều cao từ 10 m đến dưới 15 m và chiều dài đập từ 500 m trở lên hoặc đập có chiều cao từ 10 m đến dưới 15 m và có lưu lượng tràn xả lũ thiết kế trên 2.000 m³/s',
      'd. Cả 02 ý a và b',
    ],
    correct: 3
  },
  {
    question: 'Đập, hồ chứa nước nhỏ là',
    options: [
      'a. Đập có chiều cao dưới 10 m hoặc hồ chứa nước có dung tích toàn bộ dưới 500.000 m3',
      'b. Đập có chiều cao dưới 10 m và hồ chứa nước có dung tích toàn bộ dưới 500.000 m3',
      'c. Đập có chiều cao dưới dưới 20 m hoặc hồ chứa nước có dung tích toàn bộ dưới 1500.000 m3',
      'd. Đập có chiều cao dưới dưới 10 m hoặc hồ chứa nước có dung tích toàn bộ dưới 1000.000 m3',
    ],
    correct: 0
  },
  {
    question: 'Trạm bơm tiêu, trạm bơm tưới tiêu kết hợp: trạm bơm lớn là trạm bơm có tổng lưu lượng',
    options: [
      'a. từ 72.000 m3/h trở lên',
      'b. từ 3.600 m3/h đến dưới 72.000 m3/h',
      'c. từ 12.000 m3/h đến dưới 72.000 m3/h',
      'd. từ 12.000 m3/h trở lên',
    ],
    correct: 0
  },
  {
    question: 'Trạm bơm tiêu, trạm bơm tưới tiêu kết hợp: trạm bơm vừa là trạm bơm có tổng lưu lượng',
    options: [
      'a. Dưới 72.000 m3/h',
      'b. Từ 3.600 m3/h đến dưới 72.000 m3/h',
      'c. Từ 3.600 m3/h đến 12.000 m3/h',
      'd. Từ 3.600 m3/h đến dưới 72.000 m3/h hoặc trạm bơm nhỏ nhưng có công suất động cơ mỗi tổ máy từ 150 KW trở lên',
    ],
    correct: 1
  },
  {
    question: 'Trạm bơm tiêu, trạm bơm tưới tiêu kết hợp: trạm bơm nhỏ là trạm bơm có tổng lưu lượng',
    options: [
      'a. dưới 72.000 m3/h',
      'b. dưới 3.600 m3/h',
      'c. dưới 3.600 m3/h và trạm bơm có công suất động cơ tổ máy từ 150 KW trở xuống',
      'd. dưới 2.000 m3/h',
    ],
    correct: 1
  },
  {
    question: 'Trạm bơm tưới: trạm bơm lớn là trạm bơm có tổng lưu lượng',
    options: [
      'a. từ 72.000 m3/h trở lên',
      'b. từ 12.000 m3/h trở lên',
      'c. từ 3.600 m3/h đến dưới 72.000 m3/h',
      'd. từ 12.000 m3/h đến dưới 72.000 m3/h',
    ],
    correct: 1
  },
  {
    question: 'Trạm bơm tưới: trạm bơm vừa là trạm bơm có tổng lưu lượng',
    options: [
      'a. từ 72.000 m3/h trở lên',
      'b. từ 2.000 m3/h đến dưới 12.000 m3/h',
      'c. từ 3.600 m3/h đến dưới 12.000 m3/h',
      'd. từ 12.000 m3/h đến dưới 72.000 m3/h',
    ],
    correct: 1
  },
  {
    question: 'Trạm bơm tưới: trạm bơm nhỏ là trạm bơm có tổng lưu lượng',
    options: [
      'a. từ 2.000 m3/h đến dưới 3.600 m3/h',
      'b. dưới 2.000 m3/h',
      'c. từ 3.600 m3/h đến dưới dưới 12.000 m3/h',
      'd. dưới 3.600 m3/h',
    ],
    correct: 1
  },
  {
    question: 'Cống lớn đối với vùng đồng bằng sông Cửu Long là cống có tổng chiều rộng thông nước',
    options: [
      'a. Từ 10 m trở lên',
      'b. Từ 20 m trở lên',
      'c. Từ 30 m trở lên',
      'd. Từ 40 m trở lên',
    ],
    correct: 1
  },
  {
    question: 'Cống vừa đối với vùng đồng bằng sông Cửu Long là cống có tổng chiều rộng thông nước',
    options: [
      'a. Từ 10 m đến dưới 20 m',
      'b. Từ 1,5 m đến dưới 10 m',
      'c. Từ 10 m đến dưới 30 m',
      'd. Từ 3 m đến dưới 20 m',
    ],
    correct: 3
  },
  {
    question: 'Cống nhỏ đối với vùng đồng bằng sông Cửu Long là cống có tổng chiều rộng thông nước',
    options: [
      'a. Dưới 3 m',
      'b. Dưới 10 m',
      'c. Từ 3 m đến 1,5 m',
      'd. Dưới 5 m',
    ],
    correct: 0
  },
  {
    question: 'Hệ thống tiêu, thoát nước, tưới tiêu kết hợp: Kênh, mương, rạch, tuynel, xi phông, cầu máng lớn đối với vùng đồng bằng sông Cửu Long là công trình có các thông số:',
    options: [
      'a. Có lưu lượng từ 100 m3/s trở lên hoặc có chiều rộng đáy kênh từ 50 m trở lên',
      'b. Có chiều rộng đáy kênh từ 20 m trở lên',
      'c. Có lưu lượng từ 50 m3/s trở lên hoặc có chiều rộng đáy kênh từ 20 m trở lên',
      'd. Có lưu lượng từ 50 m3/s trở lên',
    ],
    correct: 2
  },
  {
    question: 'Hệ thống tiêu, thoát nước, tưới tiêu kết hợp: kênh, mương, rạch, tuynel, xi phông, cầu máng vừa đối với vùng đồng bằng sông Cửu Long là công trình có các thông số:',
    options: [
      'a. Có lưu lượng từ 5 m3/s đến dưới 50 m3/s hoặc chiều rộng đáy kênh từ 5 m đến dưới 25 m',
      'b. Có lưu lượng từ 10 m3/s đến dưới 100 m3/s hoặc chiều rộng đáy kênh từ 10 m đến dưới 50 m',
      'c. Có lưu lượng từ 3 m3/s đến dưới 50 m3/s hoặc chiều rộng đáy kênh từ 5 m đến dưới 20 m',
      'd. Có lưu lượng từ 1,5 m3/s đến dưới 20 m3/s hoặc chiều rộng đáy kênh từ 3 m đến dưới 10 m',
    ],
    correct: 2
  },
  {
    question: 'Hệ thống tiêu, thoát nước, tưới tiêu kết hợp: Kênh, mương, rạch, tuynel, xi phông, cầu máng nhỏ đối với vùng đồng bằng sông Cửu Long là công trình có các thông số:',
    options: [
      'a. Có lưu lượng từ 5 m3/s đến dưới 50 m3/s hoặc chiều rộng đáy kênh từ 5 m đến dưới 25 m',
      'b. Có lưu lượng dưới 3 m3/s hoặc chiều rộng đáy kênh dưới 5 m',
      'c. Có lưu lượng từ 3 m3/s đến dưới 50 m3/s hoặc chiều rộng đáy kênh từ 5 m đến dưới 20 m',
      'd. Có lưu lượng từ 1,5 m3/s đến dưới 20 m3/s hoặc chiều rộng đáy kênh từ 3 m đến dưới 10 m',
    ],
    correct: 1
  },
  {
    question: 'Hệ thống cấp, tưới nước: Kênh, mương, rạch, tuynel, xi phông, cầu máng lớn đối với vùng đồng bằng sông Cửu Long là công trình có các thông số',
    options: [
      'a. Có lưu lượng từ 10 m3/s trở lên hoặc có chiều rộng đáy kênh từ 5 m trở lên',
      'b. Có lưu lượng từ 50 m3/s trở lên hoặc có chiều rộng đáy kênh từ 25 m trở lên',
      'c. Có lưu lượng từ 20 m3/s trở lên hoặc có chiều rộng đáy kênh từ 10 m trở lên',
      'd. Có lưu lượng từ 100 m3/s trở lên hoặc có chiều rộng đáy kênh từ 50 m trở lên',
    ],
    correct: 2
  },
  {
    question: 'Hệ thống cấp, tưới nước: Kênh, mương, rạch, tuynel, xi phông, cầu máng vừa đối với vùng đồng bằng sông Cửu Long là công trình có các thông số',
    options: [
      'a. Có lưu lượng từ 10 m3/s đến dưới 100 m3/s hoặc chiều rộng đáy kênh từ 10 m đến dưới 50 m',
      'b. Có lưu lượng từ 1 m3/s đến dưới 20 m3/s hoặc chiều rộng đáy kênh từ 1 m đến dưới 10 m',
      'c. Có lưu lượng từ 0,5 m3/s đến dưới 10 m3/s hoặc chiều rộng đáy kênh từ 0,5 m đến dưới 5 m',
      'd. Có lưu lượng từ 5 m3/s đến dưới 50 m3/s hoặc chiều rộng đáy kênh từ 5 m đến dưới 25 m',
    ],
    correct: 1
  },
  {
    question: 'Đường ống lớn là đường ống dẫn lưu lượng',
    options: [
      'a. Từ 3 m3/s trở lên hoặc có đường kính trong từ 1500 mm trở lên',
      'b. Từ 1,5 m3/s trở lên hoặc có đường kính trong từ 1.000 mm trở lên',
      'c. Từ 3 m3/s trở lên hoặc có đường kính trong từ 1.000 mm trở lên',
      'd. Từ 1,5 m3/s trở lên hoặc hoặc có đường kính trong từ 1500 mm trở lên',
    ],
    correct: 1
  },
  {
    question: 'Đường ống vừa là đường ống dẫn lưu lượng',
    options: [
      'a. Từ 0,25 m3/s đến dưới 3 m3/s hoặc có đường kính trong từ 100 mm đến dưới 1.000 mm',
      'b. Từ 0,025 m3/s đến dưới 1,5 m3/s hoặc có đường kính trong từ 100 mm đến dưới 1.000 mm',
      'c. Từ 0,25 m3/s đến dưới 3 m3/s hoặc có đường kính trong từ 500 mm đến dưới 1500 mm',
      'd. Từ 0,025 m3/s đến dưới 1,5 m3/s hoặc có đường kính trong từ 500 mm đến dưới 1500 mm',
    ],
    correct: 1
  },
  {
    question: 'Đường ống nhỏ là đường ống dẫn lưu lượng',
    options: [
      'a. Dưới 0,25 m3/s hoặc có đường kính trong dưới 100 mm',
      'b. Dưới 0,25 m3/s hoặc có đường kính trong dưới 500 mm',
      'c. Dưới 0,025 m3/s hoặc có đường kính trong dưới 100 mm',
      'd. Dưới 0,025 m3/s hoặc có đường kính trong dưới 500 mm',
    ],
    correct: 2
  },
  {
    question: 'Bờ bao thủy lợi lớn là bờ bao bảo vệ cho khu vực có diện tích',
    options: [
      'a. Từ 5.000 ha trở lên',
      'b. Từ 7.000 ha trở lên',
      'c. Từ 10.000 ha trở lên',
      'd. Từ 15.000 ha trở lên',
    ],
    correct: 2
  },
  {
    question: 'Bờ bao thủy lợi vừa là bờ bao bảo vệ cho khu vực có diện tích',
    options: [
      'a. Từ 5.000 ha đến dưới 10.000 ha',
      'b. Từ 500 ha đến dưới 10.000 ha',
      'c. Từ 10.000 ha đến dưới 15.000 ha',
      'd. Từ 5.000 ha đến dưới 15.000 ha',
    ],
    correct: 1
  },
  {
    question: 'Bờ bao thủy lợi nhỏ là bờ bao bảo vệ cho khu vực có diện tích',
    options: [
      'a. Dưới 200 ha',
      'b. Dưới 300 ha',
      'c. Dưới 500 ha',
      'd. Dưới 700 ha',
    ],
    correct: 2
  },
  {
    question: 'Hệ thống công trình thủy lợi lớn là hệ thống có nhiệm vụ tưới cho diện tích đất canh tác hoặc tiêu, thoát nước cho diện tích tự nhiên',
    options: [
      'a. Từ 20.000 ha trở lên',
      'b. Từ 30.000 ha trở lên',
      'c. Từ 40.000 ha trở lên',
      'd. Từ 50.000 ha trở lên',
    ],
    correct: 0
  },
  {
    question: 'Hệ thống công trình thủy lợi vừa là hệ thống có nhiệm vụ tưới cho diện tích đất canh tác hoặc tiêu, thoát nước cho diện tích tự nhiên',
    options: [
      'a. Từ 2.000 ha đến dưới 15.000 ha',
      'b. Từ 2.000 ha đến dưới 20.000 ha',
      'c. Từ 3.000 ha đến dưới 20.000 ha',
      'd. Từ 4.000 ha đến dưới 15.000 ha',
    ],
    correct: 1
  },
  {
    question: 'Hệ thống công trình thủy lợi nhỏ là hệ thống có nhiệm vụ tưới cho diện tích đất canh tác hoặc tiêu, thoát nước cho diện tích tự nhiên',
    options: [
      'a. Dưới 5.000 ha',
      'b. Dưới 2.000 ha',
      'c. Dưới 4.000 ha',
      'd. Dưới 3.000 ha',
    ],
    correct: 1
  },
  {
    question: 'Cấp công trình thủy lợi được xác định theo nguyên tắc',
    options: [
      'a. Theo năng lực phục vụ, khả năng trữ nước của hồ chứa',
      'b. Theo đặc tính kỹ thuật và điều kiện địa chất nền của các công trình trong cụm đầu mối',
      'c. Theo năng lực phục vụ, khả năng trữ nước của hồ chứa, đặc tính kỹ thuật của công trình',
      'd. Theo năng lực phục vụ, khả năng trữ nước của hồ chứa, đặc tính kỹ thuật và điều kiện địa chất nền của các công trình trong cụm đầu mối',
    ],
    correct: 3
  },
  {
    question: 'Cấp của công trình thủy lợi cấp I cấp nước (cho diện tích được tưới) hoặc tiêu thoát nước (diện tích tự nhiên khu tiêu)',
    options: [
      'a. > 50.000 ha',
      'b. > 20.000 ha',
      'c. < 50.000 ha',
      'd. > 30.000 ha',
    ],
    correct: 0
  },
  {
    question: 'Cấp của công trình thủy lợi cấp II cấp nước (cho diện tích được tưới) hoặc tiêu thoát nước (diện tích tự nhiên khu tiêu)',
    options: [
      'a. < 50.000 ha',
      'b. > 10.000 ha đến 50.000 ha',
      'c. < 10.000 ha đến 50.000 ha',
      'd. ≥ 10.000 ha đến 50.000 ha',
    ],
    correct: 1
  },
  {
    question: 'Cấp của công trình thủy lợi cấp III cấp nước (cho diện tích được tưới) hoặc tiêu thoát nước (diện tích tự nhiên khu tiêu)',
    options: [
      'a. < 5.000 ha đến 10.000 ha',
      'b. > 2.000 ha đến 10.000 ha',
      'c. > 5.000 ha đến 10.000 ha',
      'd. > 2.000 ha đến 5.000 ha',
    ],
    correct: 1
  },
  {
    question: 'Cấp của công trình thủy lợi cấp IV cấp nước (cho diện tích được tưới) hoặc tiêu thoát nước (diện tích tự nhiên khu tiêu)',
    options: [
      'a. < 3.000 ha',
      'b. ≤ 2.000 ha',
      'c. ≤ 5.000 ha',
      'd. ≤ 10.000 ha',
    ],
    correct: 1
  },
  {
    question: 'Hồ chứa nước thủy lợi cấp Đặc biệt có dung tích ứng với mực nước dâng bình thường',
    options: [
      'a. > 1.000 triệu m3',
      'b. > 500 triệu m3',
      'c. > 1.500 triệu m3',
      'd. > 7.00 triệu m3',
    ],
    correct: 0
  },
  {
    question: 'Hồ chứa nước thủy lợi Cấp I có dung tích ứng với mực nước dâng bình thường',
    options: [
      'a. ≥ 200 triệu m3 đến 1.000 triệu m3',
      'b. > 200 triệu m3 đến 1.000 triệu m3',
      'c. > 500 triệu m3 đến 1.000 triệu m3',
      'd. > 200 triệu m3 đến 1.500 triệu m3',
    ],
    correct: 1
  },
  {
    question: 'Hồ chứa nước thủy lợi Cấp II có dung tích ứng với mực nước dâng bình thường',
    options: [
      'a. > 10 đến 200 triệu m3',
      'b. > 20 đến 200 triệu m3',
      'c. > 50 đến 200 triệu m3',
      'd. > 30 đến 200 triệu m3',
    ],
    correct: 1
  },
  {
    question: 'Hồ chứa nước thủy lợi Cấp III có dung tích ứng với mực nước dâng bình thường',
    options: [
      'a. > 3 đến 10 triệu m3',
      'b. ≥ 3 đến 20 triệu m3',
      'c. > 5 đến 30 triệu m3',
      'd. > 3 đến 20 triệu m3',
    ],
    correct: 1
  },
  {
    question: 'Hồ chứa nước thủy lợi Cấp IV có dung tích ứng với mực nước dâng bình thường',
    options: [
      'a. < 03 triệu m3',
      'b. ≤ 03 triệu m3',
      'c. ≤ 05 triệu m3',
      'd. < 02 triệu m3',
    ],
    correct: 0
  },
  {
    question: 'Công trình thủy lợi cấp Đặc biệt cấp nước nguồn chưa xử lý cho các ngành sử dụng nước ứng với lưu lượng',
    options: [
      'a. > 10 m3/s',
      'b. ≥ 20 m3/s',
      'c. > 20 m3/s',
      'd. < 30 m3/s',
    ],
    correct: 2
  },
  {
    question: 'Công trình thủy lợi Cấp I cấp nước nguồn chưa xử lý cho các ngành sử dụng nước khác có lưu lượng cấp nước',
    options: [
      'a. > 10 m3/s đến 20 m3/s',
      'b. ≥ 20 m3/s',
      'c. ≥ 10 m3/s đến 20 m3/s',
      'd. ≥ 10 m3/s',
    ],
    correct: 0
  },
  {
    question: 'Công trình thủy lợi Cấp II cấp nước nguồn chưa xử lý cho các ngành sử dụng nước khác có lưu lượng cấp nước',
    options: [
      'a. ≥ 02 đến 10 m3/s',
      'b. < 10 m3/s',
      'c. > 02 đến 10 m3/s',
      'd. < 05 m3/s',
    ],
    correct: 2
  },
  {
    question: 'Công trình thủy lợi Cấp III cấp nước nguồn chưa xử lý cho các ngành sử dụng nước khác có lưu lượng cấp nước',
    options: [
      'a. < 05 m3/s',
      'b. < 02 m3/s',
      'c. ≤ 02 m3/s',
      'd. < 03 m3/s',
    ],
    correct: 2
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
      'a. Công trình ảnh hưởng đến an toàn cộng đồng',
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
