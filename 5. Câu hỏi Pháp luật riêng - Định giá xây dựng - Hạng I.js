const questions = [
  {
    question: 'Tổng mức đầu tư xây dựng đã phê duyệt của dự án sử dụng vốn đầu tư công được điều chỉnh trong trường hợp nào:',
    options: [
      'a. Giá vật liệu thay đổi',
      'b. Giá nhân công thay đổi',
      'c. Chỉ số giá xây dựng do Bộ Xây dựng, UBND cấp tỉnh công bố trong thời gian thực hiện dự án lớn hơn chỉ số giá xây dựng được sử dụng để tính dự phòng trượt giá trong tổng mức đầu tư được duyệt',
      'd. Cả a, b, c đều đúng.',
    ],
    correct: 2
  },
  {
    question: 'Sơ bộ tổng mức đầu tư xây dựng là ước tính chi phí đầu tư xây dựng của dự án trong tài liệu nào sau đây?',
    options: [
      'a. Báo cáo nghiên cứu tiền khả thi đầu tư xây dựng.',
      'b. Báo cáo nghiên cứu khả thi',
      'c. Đáp án a và b đúng',
      'd. Báo cáo kinh tế kỹ thuật.',
    ],
    correct: 0
  },
  {
    question: 'Sơ bộ tổng mức đầu tư, bao gồm nội dung nào sau đây?',
    options: [
      'a. Chi phí bồi thường, hỗ trợ và tái định cư (nếu có);',
      'b. Chi phí xây dựng; chi phí thiết bị; chi phí quản lý dự án;',
      'c. Chi phí tư vấn đầu tư xây dựng; chi phí khác; chi phí dự phòng.',
      'd. Các đáp án trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Sơ bộ tổng mức đầu tư xây dựng được ước tính dựa trên nội dung nào sau đây?',
    options: [
      'a. Cơ sở quy mô, công suất hoặc năng lực phục vụ theo phương án thiết kế sơ bộ của dự án và suất vốn đầu tư xây dựng',
      'b. Dữ liệu chi phí của các dự án tương tự về loại, cấp công trình, quy mô, công suất',
      'c. Dựa trên nội dung a hoặc b',
      'd. Không căn cứ vào các nội dung trên',
    ],
    correct: 2
  },
  {
    question: 'Định mức kinh tế - kỹ thuật trong xây dựng gồm những loại định mức nào ?',
    options: [
      'a. Định mức dự toán xây dựng công trình',
      'b. Định mức sử dụng vật liệu, định mức lao động, định mức năng suất máy và thiết bị thi công;',
      'c. Định mức cơ sở',
      'd. a và c',
    ],
    correct: 3
  },
  {
    question: 'Việc thẩm định, phê duyệt sơ bộ tổng mức đầu tư xây dựng được thực hiện như thế nào là đúng sau đây?',
    options: [
      'a. Thực hiện trước khi thẩm định, phê duyệt Báo cáo nghiên cứu tiền khả thi đầu tư xây dựng theo quy định của pháp luật có liên quan.',
      'b. Thực hiện đồng thời với việc thẩm định, phê duyệt Báo cáo nghiên cứu tiền khả thi đầu tư xây dựng theo quy định của pháp luật có liên quan.',
      'c. Thực hiện sau khi có kết quả thẩm định, phê duyệt Báo cáo nghiên cứu tiền khả thi đầu tư xây dựng theo quy định của pháp luật có liên quan.',
      'd. Các đáp án trên đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Đơn giá nhân công trong dự toán xây dựng công trình do đơn vị nào sau đây công bố?',
    options: [
      'a. Ủy ban nhân nhân cấp tỉnh.',
      'b. Đơn vị tư vấn lập dự toán.',
      'c. Người quyết định đầu tư.',
      'd. Chủ đầu tư.',
    ],
    correct: 0
  },
  {
    question: 'Dự toán gói thầu của công trình cấp I thuộc Dự án sử dụng vốn đầu tư công do cơ quan nào dưới đây thẩm định?',
    options: [
      'a. Bộ Xây dựng, Bộ quản lý công trình xây dựng chuyên ngành thẩm định.',
      'b. Sở Xây dựng, Sở quản lý công trình xây dựng chuyên ngành thẩm định',
      'c. Chủ đầu tư.',
      'd. Người quyết định đầu tư.',
    ],
    correct: 2
  },
  {
    question: 'Dự toán xây dựng công trình không bao gồm chi phí nào sau đây?',
    options: [
      'a. Chi phí bồi thường, hỗ trợ và tái định cư',
      'b. Chi phí rà phá bom mìn, vật nổ',
      'c. Chi phí tư vấn xây dựng',
      'd. Chi phí lưu kho, lưu bãi, lưu Container tại cảng Việt Nam đối với thiết bị nhập khẩu',
    ],
    correct: 0
  },
  {
    question: 'Đối với dự án sử dụng vốn đầu tư công (không phải là dự án quan trọng quốc gia, không phải dự án do Thủ tướng quyết định đầu tư), cơ quan nào sau đây phê duyệt quyết toán vốn đầu tư?',
    options: [
      'a. Người quyết định đầu tư',
      'b. Bộ Tài chính',
      'c. Sở Tài chính',
      'd. Chủ đầu tư',
    ],
    correct: 0
  },
  {
    question: 'Đơn giá nhân công trong dự toán xây dựng công trình do đơn vị nào sau đây quyết định?',
    options: [
      'a. Ủy ban nhân nhân cấp tỉnh.',
      'b. Đơn vị tư vấn lập dự toán.',
      'c. Người quyết định đầu tư.',
      'd. Chủ đầu tư.',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định về quản lý chi phí đầu tư xây dựng hiện hành, đơn giá ca máy và thiết bị thi công trên địa bàn địa phương do cơ quan nào sau đây ban hành?',
    options: [
      'a. Bộ Xây dựng',
      'b. Sở Xây dựng',
      'c. Liên sở Tài chính - Xây dựng',
      'd. Không đơn vị nào ở trên',
    ],
    correct: 3
  },
  {
    question: 'Suất vốn đầu tư xây dựng công trình được sử dụng để xác định chỉ tiêu nào dưới đây?',
    options: [
      'a. Sơ bộ tổng mức đầu tư xây dựng công trình.',
      'b. Giá xây dựng tổng hợp công trình.',
      'c. Dự toán xây dựng công trình.',
      'd. Chi phí xây dựng trong tổng mức đầu tư xây dựng công trình',
    ],
    correct: 0
  },
  {
    question: 'Chi phí quản lý dự án không bao gồm những yếu tố nào sau đây?',
    options: [
      'a. Bảo hiểm y tế, bảo hiểm thất nghiệp.',
      'b. Chi phí tổ chức thẩm định dự án đầu tư.',
      'c. Chi phí nghiệm thu bàn giao công trình.',
      'd. Chi phí hội nghị, hội thảo, tập huấn, đào tạo.',
    ],
    correct: 2
  },
  {
    question: 'Chi phí thiết kế công trình không bao gồm các chi phí để thực hiện các công việc nào sau đây?',
    options: [
      'a. Khảo sát xây dựng phục vụ thiết kế.',
      'b. Làm mô hình công trình.',
      'c. Đánh giá tác động môi trường; lập báo cáo đánh giá khoáng sản trong khu vực ảnh hưởng của công trình.',
      'd. Cả 3 phương án trên.',
    ],
    correct: 3
  },
  {
    question: 'Dự toán chi phí khảo sát bao gồm những chi phí nào sau đây ?',
    options: [
      'a. Chi phí lập phương án kỹ thuật khảo sát.',
      'b. Chi phí lập báo cáo kết quả khảo sát.',
      'c. Chi phí chỗ ở tạm.',
      'd. Cả 3 phương án trên.',
    ],
    correct: 3
  },
  {
    question: 'Chi phí giám sát thi công xây dựng theo quy định được tính như thế nào ?',
    options: [
      'a. Bằng tỷ lệ % theo quy định nhân với chi phí xây dựng (chưa có thuế giá trị gia tăng) trong dự toán gói thầu xây dựng được duyệt.',
      'b. Bằng tỷ lệ % theo quy định nhân với chi phí xây dựng (chưa có thuế giá trị gia tăng) trong dự toán công trình xây dựng được duyệt.',
      'c. Bằng tỷ lệ % theo quy định nhân với chi phí thiết bị (chưa có thuế giá trị gia tăng) trong dự toán gói thầu xây dựng được duyệt.',
      'd. Bằng tỷ lệ % theo quy định nhân với chi phí thiết bị (chưa có thuế giá trị gia tăng) trong dự toán công trình xây dựng được duyệt.',
    ],
    correct: 0
  },
  {
    question: 'Suất vốn đầu tư xây dựng công trình bao gồm những chi phí nào sau đây:',
    options: [
      'a. Chi phí xây dựng, thiết bị (đã bao gồm thuế GTGT).',
      'b. Chi phí xây dựng, thiết bị, quản lý dự án, tư vấn đầu tư xây dựng và các khoản chi phí khác (chưa bao gồm thuế GTGT cho các chi phí nêu trên).',
      'c. Chi phí xây dựng; chi phí thiết bị; chi phí quản lý dự án; chi phí tư vấn đầu tư xây dựng; một số khoản mục chi phí khác và thuế giá trị gia tăng cho các chi phí nêu trên.',
      'd. Chi phí xây dựng, thiết bị, quản lý dự án, tư vấn đầu tư xây dựng, các khoản chi phí khác và chi phí dự phòng (đã bao gồm thuế GTGT cho các chi phí nêu trên).',
    ],
    correct: 2
  },
  {
    question: 'Chủ đầu tư được thuê các tổ chức, cá nhân tư vấn quản lý chi phí đầu tư xây dựng trong trường hợp nào ?',
    options: [
      'a. Thực hiện các công việc hoặc phần công việc liên quan tới việc xác định giá xây dựng công trình',
      'b. Thực hiện các công việc hoặc phần công việc liên quan tới việc thẩm tra giá xây dựng công trình',
      'c. Cả nội dung a và b',
      'd. Không nội dung nào ở trên',
    ],
    correct: 2
  },
  {
    question: 'Chỉ số giá xây dựng bao gồm những nội dung nào sau đây ?',
    options: [
      'a. Gồm chỉ số giá xây dựng theo loại công trình,',
      'b. Chỉ số giá nhân công xây dựng, chỉ số giá máy và thiết bị thi công',
      'c. Chỉ số giá của một số vật liệu chủ yếu.',
      'd. Bao gồm các nội dung trên',
    ],
    correct: 3
  },
  {
    question: 'Chỉ số giá xây dựng theo loại công trình, theo cơ cấu chi phí gồm những nội dung nào sau đây?',
    options: [
      'a. Chỉ số giá phần xây dựng, chỉ số giá phần thiết bị, chỉ số giá phần chi phí khác',
      'b. Chỉ số giá nhân công xây dựng, chỉ số giá máy và thiết bị thi công',
      'c. Chỉ số giá của một số vật liệu chủ yếu.',
      'd. Bao gồm các nội dung trên',
    ],
    correct: 0
  },
  {
    question: 'Câu nào là đáp án sai trong các câu sau:',
    options: [
      'a. Khối lượng cốt thép phải được đo bóc, phân loại theo chủng loại thép (thép thường và thép dự ứng lực, thép trơn, thép vằn)',
      'b. Khối lượng cốt thép phải được đo bóc, phân loại theo mác thép, nhóm thép, đường kính cốt thép, chi tiết bộ phận kết cấu (móng, cột, tường…)',
      'c. Khối lượng cốt thép phải được đo bóc, phân loại theo điều kiện thi công',
      'd. Khối lượng cốt thép được đo bóc không bao gồm khối lượng dây buộc, mối nối chồng, nối ren, nối ống, miếng đệm, con kê, bu lông liên kết…',
    ],
    correct: 3
  },
  {
    question: 'Trên địa bàn tỉnh, đơn vị nào tổ chức xác định chỉ số giá xây dựng ?',
    options: [
      'a. Sở Xây dựng',
      'b. Bộ Xây dựng',
      'c. Ủy ban nhân dân cấp tỉnh',
      'd. Không đơn vị nào ở trên',
    ],
    correct: 0
  },
  {
    question: 'Chỉ số giá xây dựng làm cơ sở xác định nội dung nào sau đây ?',
    options: [
      'a. Điều chỉnh sơ bộ tổng mức đầu tư xây dựng, tổng mức đầu tư xây dựng,',
      'b. Điều chỉnh dự toán xây dựng, giá gói thầu xây dựng, giá hợp đồng xây dựng,',
      'c. Quy đổi vốn đầu tư xây dựng công trình và quản lý chi phí đầu tư xây dựng.',
      'd. Tất cả các nội dung ở trên',
    ],
    correct: 3
  },
  {
    question: 'Đơn vị nào chịu trách nhiệm về tính chính xác của giá trị đề nghị thanh toán trong hồ sơ đề nghị thanh toán vốn đầu tư?',
    options: [
      'a. Chủ đầu tư hoặc đại diện hợp pháp của chủ đầu tư',
      'b. Cơ quan thanh toán vốn đầu tư',
      'c. Cả 2 đơn vị trên',
      'd. Không phải các đơn vị ở trên',
    ],
    correct: 0
  },
  {
    question: 'Dự án đầu tư xây dựng phải thực hiện quyết toán vốn đầu tư xây dựng khi nào?',
    options: [
      'a. Sau khi hoàn thành bàn giao đưa vào sử dụng',
      'b. Khi cấp có thẩm quyền có văn bản dừng hoặc cho phép chấm dứt thực hiện dự án',
      'c. Đáp án a và b là đúng',
      'd. Đáp án a và b là sai',
    ],
    correct: 0
  },
  {
    question: 'UBND cấp tỉnh có thẩm quyền nào dưới đây?',
    options: [
      'a. Ban hành hệ thống định mức dự toán xây dựng công trình',
      'b. Công bố giá vật liệu xây dựng, đơn giá nhân công xây dựng, giá ca máy và thiết bị thi công, chỉ số giá xây dựng và đơn giá xây dựng công trình.',
      'c. Công bố suất vốn đầu tư xây dựng công trình',
      'd. Cả a và c',
    ],
    correct: 1
  },
  {
    question: 'Thẩm quyền điều chỉnh cơ cấu các khoản mục chi phí trong tổng mức đầu tư xây dựng của dự án đầu tư xây dựng do cơ quan nào sau đây?',
    options: [
      'a. Người quyết định đầu tư quyết định.',
      'b. Chủ đầu tư tổ chức điều chỉnh, báo cáo người quyết định đầu tư và chịu trách nhiệm về việc điều chỉnh của mình.',
      'c. Chủ đầu tư tổ chức điều chỉnh theo ủy quyền của Người quyết định đầu tư.',
      'd. Các đáp án trên đều sai.',
    ],
    correct: 1
  },
  {
    question: 'Việc thẩm định tổng mức đầu tư xây dựng của dự án đầu tư xây dựng theo hình thức PPP, do cơ quan nào dưới đây thẩm định?',
    options: [
      'a. Cơ quan chuyên môn về xây dựng thuộc Bộ Xây dựng, Bộ quản lý công trình xây dựng chuyên ngành.',
      'b. Sở Xây dựng, Sở quản lý công trình xây dựng chuyên ngành.',
      'c. Đơn vị đầu mối quản lý về hoạt động PPP thuộc cơ quan nhà nước có thẩm quyền ký kết hợp đồng dự án chủ trì.',
      'd. Nhà đầu tư.',
    ],
    correct: 2
  },
  {
    question: 'Dự án xây dựng Trụ sở văn phòng Tổng cục Thuế có tổng mức đầu tư 180 tỷ đồng. Theo quy định của Luật Xây dựng 2014 và các văn bản quy phạm pháp luật hướng dẫn Luật, tổng mức đầu tư xây dựng của dự án này do cơ quan nào dưới đây thẩm định?',
    options: [
      'a. Cơ quan chuyên môn về xây dựng thuộc Bộ Xây dựng thẩm định',
      'b. Sở Xây dựng thẩm định',
      'c. Cơ quan chuyên môn trực thuộc người quyết định đầu tư chủ trì tổ chức thẩm định.',
      'd. Các đáp án trên đều sai.',
    ],
    correct: 0
  },
  {
    question: 'Dự toán xây dựng công trình sử dụng vốn đầu tư công (giai đoạn thiết kế bản vẽ thi công - trường hợp thiết kế ba bước), do cơ quan nào dưới đây phê duyệt?',
    options: [
      'a. Người quyết định đầu tư phê duyệt.',
      'b. Chủ đầu tư phê duyệt.',
      'c. Người quyết định đầu tư ủy quyền cho Chủ đầu tư phê duyệt.',
      'd. Các đáp án trên đều sai.',
    ],
    correct: 1
  },
  {
    question: 'Đáp án nào dưới đây liệt kê đúng và đủ các khoản mục chi phí thuộc chi phí xây dựng trong dự toán xây dựng công trình?',
    options: [
      'a. Chi phí vật liệu, nhân công, máy và thiết bị thi công, chi phí chung, lợi nhuận của doanh nghiệp xây dựng.',
      'b. Chi phí trực tiếp, chi phí quản lý của doanh nghiệp, chi phí điều hành sản xuất tại công trường, chi phí phục vụ công nhân, chi phí phục vụ thi công tại công trường và một số chi phí phục vụ cho quản lý khác của doanh nghiệp và lợi nhuận của doanh nghiệp xây dựng.',
      'c. Tất cả các chi phí trực tiếp tạo nên sản phẩm xây dựng, lợi nhuận của doanh nghiệp xây dựng và thuế giá trị gia tăng.',
      'd. Chi phí trực tiếp, chi phí gián tiếp, thu nhập chịu thuế tính trước và thuế giá trị gia tăng',
    ],
    correct: 3
  },
  {
    question: 'Chi phí trực tiếp trong chi phí xây dựng bao gồm nội dung nào sau đây ?',
    options: [
      'a. Chi phí vật liệu, chi phí nhân công, chi phí máy và thiết bị thi công',
      'b. Chi phí chung',
      'c. Chi phí nhà tạm để ở và điều hành thi công',
      'd. Không nội dung nào ở trên',
    ],
    correct: 0
  },
  {
    question: 'Chi phí gián tiếp trong chi phí xây dựng không bao gồm chi phí nào sau đây ?',
    options: [
      'a. chi phí chung, chi phí nhà tạm để ở và điều hành thi công',
      'b. Chi phí cho một số công việc không xác định được khối lượng từ thiết kế',
      'c. Chi phí gián tiếp được xác định bằng định mức tỷ lệ phần trăm',
      'd. Thuế giá trị gia tăng',
    ],
    correct: 3
  },
  {
    question: 'Hợp đồng tư vấn xây dựng được áp dụng các loại giá hợp đồng nào sau đây?',
    options: [
      'a. Hợp đồng trọn gói;',
      'b. Hợp đồng theo đơn giá (cố định và điều chỉnh);',
      'c. Hợp đồng theo thời gian;',
      'd. Tất cả các loại giá hợp đồng nêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Hợp đồng tư vấn xây dựng được ký kết giữa bên giao thầu và bên nhận thầu có giá trị hợp đồng là 25 tỷ. Vậy, giá trị tạm ứng tối thiểu cho hợp đồng xây dựng này là bao nhiêu?',
    options: [
      'a. 10% giá hợp đồng;',
      'b. 15% giá hợp đồng;',
      'c. 20% giá hợp đồng;',
      'd. 25% giá hợp đồng.',
    ],
    correct: 1
  },
  {
    question: 'Nội dung nào sau đây là đúng quy định về việc bảo đảm thanh toán hợp đồng xây dựng?',
    options: [
      'a. Trước khi ký kết hợp đồng xây dựng, bên giao thầu phải có bảo đảm thanh toán phù hợp với tiến độ thanh toán đã thỏa thuận trong hợp đồng',
      'b. Nghiêm cấm bên giao thầu ký kết hợp đồng xây dựng khi chưa có kế hoạch vốn để thanh toán theo thỏa thuận thanh toán trong hợp đồng, trừ các công trình xây dựng theo lệnh khẩn cấp',
      'c. Bao gồm cả nội dung a và b',
      'd. Chỉ cần nội dung a hoặc b',
    ],
    correct: 2
  },
  {
    question: 'Mức tạm ứng hợp đồng xây dựng tối đa được là bao nhiêu % giá hợp đồng?',
    options: [
      'a. 40% giá hợp đồng;',
      'b. 50% giá hợp đồng;',
      'c. 60% giá hợp đồng:',
      'd. 80% giá hợp đồng.',
    ],
    correct: 1
  },
  {
    question: 'Trong trường hợp Tổng thầu ký hợp đồng với nhà thầu phụ, quy định nào sau đây là đúng về trách nhiệm của nhà thầu đối với chủ đầu tư về tiến độ và chất lượng các công việc đã ký kết?',
    options: [
      'a. Các nhà thầu phụ trực tiếp có trách nhiệm đối với chủ đầu tư về phần công việc thực hiện.',
      'b. Trách nhiệm thuộc về tổng thầu, kể cả các công việc do nhà thầu phụ thực hiện.',
      'c. Cả tổng thầu và nhà thầu phụ có trách nhiệm trực tiếp đối với chủ đầu tư.',
      'd. Các trường hợp trên đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Thời điểm có hiệu lực của hợp đồng xây dựng là thời điểm nào trong các trường hợp sau đây?',
    options: [
      'a. Thời điểm ký kết hợp đồng (đóng dấu nếu có)',
      'b. Thời điểm cụ thể do các bên thỏa thuận trong hợp đồng xây dựng và bên giao thầu đã nhận được bảo đảm thực hiện hợp đồng của bên nhận thầu (đối với hợp đồng có quy định về bảo đảm thực hiện hợp đồng);',
      'c. Thời điểm ký kết hợp đồng (đóng dấu nếu có) và bên giao thầu đã nhận được bảo đảm thực hiện hợp đồng của bên nhận thầu (đối với hợp đồng có quy định về bảo đảm thực hiện hợp đồng);',
      'd. Thời điểm ký kết hợp đồng (đóng dấu nếu có) hoặc thời điểm cụ thể do các bên thỏa thuận trong hợp đồng xây dựng và bên giao thầu đã nhận được bảo đảm thực hiện hợp đồng của bên nhận thầu (đối với hợp đồng có quy định về bảo đảm thực hiện hợp đồng).',
    ],
    correct: 3
  },
  {
    question: 'Hợp đồng thi công xây dựng công trình có giá trọn gói, được điều chỉnh theo những trường hợp nào dưới đây?',
    options: [
      'a. Khi khối lượng công việc nằm ngoài phạm vi công việc phải thực hiện của thiết kế theo hợp đồng.',
      'b. Khi xảy ra bất khả kháng được Chủ đầu tư chấp thuận',
      'c. Khi điều chỉnh biện pháp thi công',
      'd. Khi khối lượng công việc thực tế hoàn thành được nghiệm thu tăng hoặc giảm so với khối lượng công việc tương ứng ghi trong hợp đồng.',
    ],
    correct: 0
  },
  {
    question: 'Đối với hợp đồng theo đơn giá điều chỉnh, trường hợp nào dưới đây không phải thực hiện ký kết phụ lục bổ sung hợp đồng?',
    options: [
      'a. Khối lượng thực tế hoàn thành được nghiệm thu tăng hoặc giảm lớn hơn 20% khối lượng công việc tương ứng ghi trong hợp đồng.',
      'b. Bổ sung khối lượng công việc hợp lý chưa có đơn giá trong hợp đồng.',
      'c. Điều chỉnh đơn giá toàn bộ hoặc một số đơn giá cho những công việc mà tại thời điểm ký hợp đồng bên giao thầu và bên nhận thầu đã thỏa thuận điều chỉnh sau một khoảng thời gian nhất định kể từ ngày hợp đồng có hiệu lực.',
      'd. Các trường hợp bất khả kháng và bất khả kháng khác theo quy định.',
    ],
    correct: 2
  },
  {
    question: 'Chi phí nào dưới đây không được coi là chi phí tư vấn đầu tư xây dựng?',
    options: [
      'a. Chi phí lập báo cáo đánh giá tác động môi trường.',
      'b. Chi phí quan trắc biến dạng công trình.',
      'c. Chi phí kiểm định chất lượng công trình.',
      'd. Chi phí quy đổi vốn đầu tư xây dựng công trình.',
    ],
    correct: 1
  },
  {
    question: 'Chi phí thuê tư vấn nước ngoài thực hiện công việc lập nhiệm vụ, lập đồ án quy hoạch được giới hạn trong khoảng nào sau đây:',
    options: [
      'a. Không vượt quá 2 lần mức chi phí do tư vấn trong nước thực hiện xác định theo quy định của pháp luật.',
      'b. Không vượt quá 3 lần mức chi phí do tư vấn trong nước thực hiện xác định theo quy định của pháp luật.',
      'c. Không vượt quá 3,5 lần mức chi phí do tư vấn trong nước thực hiện xác định theo quy định của pháp luật.',
      'd. Không phương án nào đúng.',
    ],
    correct: 2
  },
  {
    question: 'Dự toán gói thầu tư vấn nước ngoài được xác định trên cơ sở nào dưới đây?',
    options: [
      'a. Chi phí tư vấn nước ngoài dự tính trong tổng mức đầu tư',
      'b. Lập dự toán tháng - người (hoặc ngày - người)',
      'c. Định mức chi phí thuê tư vấn nước ngoài',
      'd. Dự toán chi phí tư vấn nước ngoài',
    ],
    correct: 3
  },
  {
    question: 'Dự toán gói thầu tư vấn đầu tư xây dựng bao gồm các chi phí nào sau đây?',
    options: [
      'a. Chi phí chuyên gia, chi phí quản lý, chi phí khác, thu nhập chịu thuế tính trước',
      'b. Chi phí chuyên gia, chi phí khác, thu nhập chịu thuế tính trước, chi phí dự phòng',
      'c. Chi phí chuyên gia, chi phí quản lý, chi phí khác, thu nhập chịu thuế tính trước, thuế và chi phí dự phòng.',
      'd. Chi phí chuyên gia, chi phí quản lý, chi phí khác, thu nhập chịu thuế tính trước và thuế.',
    ],
    correct: 2
  },
  {
    question: 'Nhà thầu tư vấn quản lý chi phí đầu tư xây dựng có quyền nào sau đây?',
    options: [
      'a. Quyết định định mức xây dựng, giá xây dựng và các chi phí khác có liên quan khi xác định giá dự thầu để tham gia đấu thầu',
      'b. Kiểm soát các thay đổi trong quá trình thi công xây dựng công trình có liên quan đến thay đổi chi phí đầu tư xây dựng công trình hoặc đẩy nhanh tiến độ xây dựng công trình',
      'c. Xem xét, chấp thuận các đề xuất thay đổi về giá vật tư, vật liệu xây dựng theo đề xuất của tư vấn thiết kế hoặc nhà thầu thi công xây dựng',
      'd. Yêu cầu chủ đầu tư thanh toán các khoản chi phí theo hợp đồng đã ký kết; được thanh toán các khoản vay do chậm thanh toán.',
    ],
    correct: 3
  },
  {
    question: 'Nhà thầu tư vấn quản lý chi phí đầu tư xây dựng có các nghĩa vụ nào sau đây?',
    options: [
      'a. Chịu trách nhiệm trước pháp luật và chủ đầu tư về kết quả thực hiện công việc tư vấn của mình và bồi thường thiệt hại gây ra cho chủ đầu tư (nếu có) theo hợp đồng đã ký kết và pháp luật có liên quan',
      'b. Tổ chức xác định các định mức dự toán xây dựng mới hoặc điều chỉnh của công trình làm cơ sở quản lý chi phí đầu tư xây dựng',
      'c. Tổ chức kiểm soát chi phí đầu tư xây dựng công trình theo quy định',
      'd. Cả 3 phương án trên',
    ],
    correct: 0
  },
  {
    question: 'Trong quản lý chi phí đầu tư xây dựng, chủ đầu tư có các quyền gì sau đây?',
    options: [
      'a. Chấp thuận thực hiện lựa chọn tổ chức tư vấn quản lý chi phí đầu tư xây dựng đủ điều kiện năng lực theo quy định tại Nghị định về quản lý dự án đầu tư xây dựng để thực hiện thẩm tra tổng mức đầu tư, dự toán xây dựng công trình làm cơ sở cho việc thẩm định, phê duyệt.',
      'b. Chấp thuận các đề xuất về thay đổi vật tư, vật liệu xây dựng, biện pháp thi công, yêu cầu kỹ thuật theo đề xuất của tư vấn thiết kế hoặc nhà thầu thi công xây dựng',
      'c. Thực hiện một số công việc tư vấn đầu tư xây dựng nếu có đủ điều kiện năng lực theo quy định.',
      'd. Phương án b, c',
    ],
    correct: 3
  },
  {
    question: 'Việc tạm ứng hợp đồng chỉ được thực hiện trong trường hợp nào sau đây?',
    options: [
      'a. Sau khi hợp đồng xây dựng có hiệu lực, riêng đối với hợp đồng thi công xây dựng thì phải có cả kế hoạch giải phóng mặt bằng theo đúng thỏa thuận trong hợp đồng,',
      'b. Bên giao thầu đã nhận được bảo lãnh tiền tạm ứng (nếu có) tương ứng với giá trị của từng loại tiền mà các bên đã thỏa thuận.',
      'c. Đồng thời cả a và b',
      'd. Không cần trường hợp nào ở trên',
    ],
    correct: 2
  },
];
