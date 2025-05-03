const questions = [
  {
    question: 'Theo quy định của pháp luật, nhà thầu cung ứng sản phẩm xây dựng, vật liệu xây dựng đã là hàng hóa trên thị trường có trách nhiệm nào dưới đây :',
    options: [
      'a. Tổ chức thực hiện thí nghiệm kiểm tra chất lượng và cung cấp cho bên giao thầu (bên mua sản phẩm xây dựng) các chứng chỉ, chứng nhận, các thông tin, tài liệu có liên quan tới sản phẩm xây dựng, vật liệu xây dựng theo quy định của hợp đồng xây dựng và quy định khác của pháp luật có liên quan;',
      'b. Kiểm tra chất lượng, số lượng, chủng loại của sản phẩm xây dựng, vật liệu xây dựng theo yêu cầu của hợp đồng trước khi bàn giao cho bên giao thầu;',
      'c. Thông báo cho bên giao thầu các yêu cầu về vận chuyển, lưu giữ, bảo quản sản phẩm xây dựng, vật liệu xây dựng;',
      'd. Cả a, b, c là đúng.',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật, thí nghiệm đối chứng trong quá trình thi công xây dựng được thực hiện trong các trường hợp nào dưới đây:',
    options: [
      'a. Được quy định trong chỉ dẫn kỹ thuật, hợp đồng xây dựng;',
      'b. Khi vật liệu, sản phẩm xây dựng, thiết bị lắp đặt vào công trình hoặc công trình được thi công xây dựng có dấu hiệu không đảm bảo chất lượng theo yêu cầu của hồ sơ thiết kế;',
      'c. Theo yêu cầu của cơ quan chuyên môn về xây dựng.',
      'd. Cả a, b, c là đúng.',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật, chủ thể nào có trách nhiệm tổ chức thực hiện các hoạt động thí nghiệm chuyên ngành xây dựng, quan trắc, trắc đạc công trình trong quá trình thi công xây dựng công trình theo quy định của hợp đồng xây dựng và các quy chuẩn kỹ thuật, tiêu chuẩn có liên quan.',
    options: [
      'a. Chủ đầu tư',
      'b. Tư vấn giám sát',
      'c. Nhà thầu thi công xây dựng',
      'd. Nhà thầu thí nghiệm',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định của pháp luật, kiểm định xây dựng là hoạt động nào dưới đây :',
    options: [
      'a. Hoạt động kiểm tra, đánh giá chất lượng hoặc nguyên nhân hư hỏng, giá trị, thời hạn sử dụng và các thông số kỹ thuật khác của sản phẩm xây dựng, bộ phận công trình hoặc công trình xây dựng thông qua quan trắc, thí nghiệm kết hợp với việc tính toán, phân tích.',
      'b. Hoạt động kiểm định xây dựng và đánh giá sự tuân thủ các quy định của pháp luật về đầu tư xây dựng, được tổ chức thực hiện bởi cơ quan quản lý nhà nước có thẩm quyền',
      'c. Hoạt động theo dõi, đo đạc, ghi nhận sự biến đổi về hình học, biến dạng, chuyển dịch và các thông số kỹ thuật khác của công trình và môi trường xung quanh theo thời gian.',
      'd. Hoạt động đo đạc để xác định vị trí, hình dạng, kích thước của địa hình, công trình xây dựng phục vụ thi công xây dựng, quản lý chất lượng, bảo hành, bảo trì, vận hành, khai thác và giải quyết sự cố công trình xây dựng',
    ],
    correct: 0
  },
  {
    question: 'Theo quy định của pháp luật, đánh giá hợp quy trong hoạt động xây dựng là hoạt động nào dưới đây :',
    options: [
      'a. Hoạt động đánh giá mức độ phù hợp của vật liệu xây dựng và sản phẩm xây dựng so với yêu cầu của quy chuẩn kỹ thuật có liên quan được áp dụng',
      'b. Hoạt động đánh giá mức độ phù hợp của sản phẩm, hàng hóa, dịch vụ, quá trình, môi trường với tiêu chuẩn tương ứng',
      'c. Hoạt động đo lường nhằm xác định đặc tính của đất xây dựng, vật liệu xây dựng, môi trường xây dựng, sản phẩm xây dựng, bộ phận công trình hoặc công trình xây dựng theo quy trình nhất định',
      'd. Cả a và b là đúng',
    ],
    correct: 0
  },
  {
    question: 'Theo quy định của pháp luật, giám định xây dựng bao gồm nội dung nào dưới đây:',
    options: [
      'a. Giám định chất lượng khảo sát xây dựng, thiết kế xây dựng, vật liệu xây dựng, cấu kiện xây dựng, sản phẩm xây dựng, bộ phận công trình, công trình xây dựng;',
      'b. Giám định nguyên nhân hư hỏng, sự cố công trình xây dựng theo quy định;',
      'c. Các nội dung giám định khác.',
      'd. Cả a, b, c đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật, nội dung giám sát thi công xây dựng nhà ở riêng lẻ của hộ gia đình, cá nhân:',
    options: [
      'a. Biện pháp thi công, biện pháp đảm bảo an toàn đối với nhà ở và các công trình liền kề, lân cận, bảo đảm an toàn lao động, vệ sinh môi trường trong quá trình thi công.',
      'b. Chất lượng vật liệu, cấu kiện xây dựng, thiết bị trước khi đưa vào thi công xây dựng;',
      'c. Hệ thống giàn giáo, kết cấu chống đỡ tạm và các máy móc, thiết bị phục vụ thi công;',
      'd. Cả a, b, c đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật, chủ thể nào có trách nhiệm lập hồ sơ sự cố công trình xây dựng :',
    options: [
      'a. Chủ đầu tư, chủ sở hữu hoặc chủ quản lý, sử dụng',
      'b. Cơ quan quản lý nhà nước',
      'c. Chính quyền địa phương',
      'd. Nhà thầu thi công xây dựng công trình',
    ],
    correct: 0
  },
  {
    question: 'Theo quy định của pháp luật, nội dung thực hiện giám định nguyên nhân sự cố công trình xây dựng không bao gồm nội dung nào dưới đây:',
    options: [
      'a. Thu thập hồ sơ, tài liệu, số liệu kỹ thuật có liên quan và thực hiện các công việc chuyên môn để xác định nguyên nhân sự cố;',
      'b. Đánh giá mức độ an toàn của công trình sau sự cố;',
      'c. Phân định trách nhiệm của các tổ chức và cá nhân có liên quan;',
      'd. Lập hồ sơ hoàn thành công trình xây dựng.',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật, đánh giá an toàn công trình xây dựng bao gồm nội dung nào dưới đây :',
    options: [
      'a. Kiểm tra, đánh giá khả năng làm việc của các kết cấu chịu lực chính và các bộ phận công trình có nguy cơ gây mất an toàn.',
      'b. Kiểm tra, đánh giá các điều kiện đảm bảo vận hành, khai thác công trình bình thường, bao gồm: độ ồn, mức độ ô nhiễm của khói, bụi và các chất gây nguy hại, ảnh hưởng đến sức khỏe con người; an toàn cháy nổ;',
      'c. Kiểm tra kết quả kiểm định các thiết bị có yêu cầu nghiêm ngặt về an toàn và các điều kiện an toàn khác có liên quan.',
      'd. Cả a, b và c đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật, chủ thể nào tổ chức thực hiện việc kiểm tra, bảo dưỡng và sửa chữa công trình theo quy trình bảo trì :',
    options: [
      'a. Chủ sở hữu hoặc người quản lý sử dụng công trình',
      'b. Tư vấn quản lý dự án',
      'c. Nhà thầu lập quy trình bảo trì',
      'd. Cả a, b và c đều đúng',
    ],
    correct: 0
  },
  {
    question: 'Theo quy định của pháp luật, thời hạn bảo hành đối với hạng mục công trình, công trình xây dựng mới hoặc cải tạo, nâng cấp sử dụng vốn đầu tư công hoặc vốn nhà nước ngoài đầu tư công được tính kể từ khi được chủ đầu tư nghiệm thu theo quy định nào dưới đây :',
    options: [
      'a. Không ít hơn 24 tháng đối với công trình cấp đặc biệt và cấp I',
      'b. Không ít hơn 12 tháng đối với các công trình cấp còn lại',
      'c. Đến khi hết thời hạn sử dụng.',
      'd. Cả a và b đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật, chủ thể nào phải tổ chức lập hồ sơ hoàn thành công trình xây dựng theo quy định trước khi đưa hạng mục công trình hoặc công trình vào khai thác, vận hành.',
    options: [
      'a. Chủ đầu tư',
      'b. Tư vấn giám sát',
      'c. Nhà thầu thi công xây dựng',
      'd. Cả a, b và c đều đúng',
    ],
    correct: 0
  },
  {
    question: 'Theo quy định của pháp luật, khi công trình chưa hoàn thành chủ đầu tư có được quyết định tổ chức nghiệm thu đưa hạng mục công trình, công trình xây dựng vào khai thác tạm không?',
    options: [
      'a. Không',
      'b. Có, do nhu cầu sử dụng',
      'c. Có, theo chỉ đạo của cơ quan chủ quản đầu tư',
      'd. Có, trong trường hợp việc thi công xây dựng cơ bản đã hoàn thành theo yêu cầu thiết kế, nhưng còn một số tồn tại về chất lượng mà không làm ảnh hưởng đến khả năng chịu lực, tuổi thọ, công năng của công trình và đảm bảo công trình đủ điều kiện khai thác an toàn và đáp ứng quy định của pháp luật chuyên ngành có liên quan.',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật, việc tổ chức nghiệm thu giai đoạn thi công xây dựng hoặc bộ phận công trình xây dựng trong các trường hợp nào sau đây:',
    options: [
      'a. Khi kết thúc một giai đoạn thi công hoặc một bộ phận công trình cần phải thực hiện kiểm tra, nghiệm thu để đánh giá chất lượng trước khi chuyển sang giai đoạn thi công tiếp theo;',
      'b. Khi kết thúc một gói thầu xây dựng.',
      'c. Khi kết thúc một công việc xây dựng.',
      'd. Cả a và b đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật, người giám sát thi công xây dựng phải thực hiện nghiệm thu công việc xây dựng trong khoảng thời gian',
    options: [
      'a. Không quá 12 giờ kể từ khi nhận được đề nghị nghiệm thu công việc xây dựng của nhà thầu thi công xây dựng.',
      'b. Không quá 24 giờ kể từ khi nhận được đề nghị nghiệm thu công việc xây dựng của nhà thầu thi công xây dựng.',
      'c. Không quá 36 giờ kể từ khi nhận được đề nghị nghiệm thu công việc xây dựng của nhà thầu thi công xây dựng',
      'd. Không quá 48 giờ kể từ khi nhận được đề nghị nghiệm thu công việc xây dựng của nhà thầu thi công xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Theo quy định của pháp luật, đối với các công trình đầu tư xây dựng bằng nguồn vốn đầu tư công và vốn nhà nước ngoài đầu tư công, tổ chức giám sát thi công xây dựng có được tham gia kiểm định chất lượng công trình xây dựng do mình giám sát không?',
    options: [
      'a. Có, theo yêu cầu của chủ đầu tư',
      'b. Có, nếu đủ điều kiện năng lực',
      'c. Không',
      'd. Cả a và b đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định của pháp luật, nội dung thực hiện giám sát thi công xây dựng công trình không bao gồm công việc nào dưới đây:',
    options: [
      'a. Kiểm tra sự phù hợp năng lực của nhà thầu thi công xây dựng công trình so với hồ sơ dự thầu và hợp đồng xây dựng, bao gồm: nhân lực, thiết bị thi công, phòng thí nghiệm chuyên ngành xây dựng, hệ thống quản lý chất lượng của nhà thầu thi công xây dựng công trình',
      'b. Kiểm tra biện pháp thi công xây dựng của nhà thầu so với thiết kế biện pháp thi công đã được phê duyệt. Chấp thuận kế hoạch tổng hợp về an toàn, các biện pháp đảm bảo an toàn chi tiết đối với những công việc đặc thù, có nguy cơ mất an toàn lao động cao trong thi công xây dựng công trình;',
      'c. Đề nghị chủ đầu tư tổ chức điều chỉnh thiết kế khi phát hiện sai sót, bất hợp lý về thiết kế;',
      'd. Lập tiến độ thi công công trình',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật, công trình xây dựng phải được cơ quan nhà nước có thẩm quyền quy định, kiểm tra công tác nghiệm thu trong quá trình thi công và khi hoàn thành thi công xây dựng công trình theo quy định bao gồm:',
    options: [
      'a. Công trình xây dựng thuộc dự án quan trọng quốc gia; công trình có quy mô lớn, kỹ thuật phức tạp theo quy định;',
      'b. Công trình xây dựng sử dụng vốn đầu tư công;',
      'c. Công trình có ảnh hưởng lớn đến an toàn, lợi ích cộng đồng theo quy định của pháp luật về quản lý dự án đầu tư xây dựng.',
      'd. Cả a, b, c đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật, Nhà thầu cung cấp thiết bị lắp đặt vào công trình lập và bàn giao cho chủ đầu tư quy trình bảo trì đối với thiết bị do mình cung cấp vào thời điểm nào:',
    options: [
      'a. Trước khi lắp đặt vào công trình',
      'b. Trước khi nghiệm thu công việc xây dựng.',
      'c. Trước khi nghiệm thu hoàn thành hạng mục công trình, công trình xây dựng đưa vào sử dụng',
      'd. Cả a, b, c đều đúng',
    ],
    correct: 0
  },
  {
    question: 'Theo quy định của pháp luật, Nội dung thực hiện giám sát thi công xây dựng công trình không bao gồm nội dung nào:',
    options: [
      'a. Kiểm tra sự phù hợp năng lực của nhà thầu thi công xây dựng công trình so với hồ sơ dự thầu và hợp đồng xây dựng, bao gồm: nhân lực, thiết bị thi công, phòng thí nghiệm chuyên ngành xây dựng, hệ thống quản lý chất lượng của nhà thầu thi công xây dựng công trình;',
      'b. Kiểm tra biện pháp thi công xây dựng của nhà thầu so với thiết kế biện pháp thi công đã được phê duyệt. Chấp thuận kế hoạch tổng hợp về an toàn, các biện pháp đảm bảo an toàn chi tiết đối với những công việc đặc thù, có nguy cơ mất an toàn lao động cao trong thi công xây dựng công trình;.',
      'c. Tổ chức điều chỉnh thiết kế khi phát hiện sai sót, bất hợp lý về thiết kế;',
      'd. Tổ chức thí nghiệm đối chứng, kiểm định chất lượng bộ phận công trình, hạng mục công trình, công trình xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Chủ thể nào sau đây có trách nhiệm lập bản vẽ hoàn công công trình?',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu thiết kế xây dựng',
      'c. Nhà thầu thi công xây dựng',
      'd. Nhà thầu tư vấn giám sát thi công xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Chủ thể nào có trách nhiệm lập tiến độ chi tiết thi công xây dựng công trình?',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu thiết kế xây dựng công trình',
      'c. Nhà thầu thi công xây dựng công trình',
      'd. Nhà thầu tư vấn giám sát thi công xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Ai là người có trách nhiệm tổ chức lập hồ sơ hoàn thành công trình xây dựng?',
    options: [
      'a. Nhà thầu thi công xây dựng',
      'b. Chủ đầu tư',
      'c. Nhà thầu giám sát thi công xây dựng',
      'd. Cơ quan quản lý nhà nước có thẩm quyền',
    ],
    correct: 1
  },
  {
    question: 'Việc áp dụng quy chuẩn kỹ thuật trong hoạt động đầu tư xây dựng là:',
    options: [
      'a. Bắt buộc',
      'b. Khuyến khích',
      'c. Tự nguyện',
      'd. Thỏa thuận',
    ],
    correct: 0
  },
  {
    question: 'Nhà thầu giám sát thi công xây dựng có trách nhiệm gì sau đây?',
    options: [
      'a. Thực hiện giám sát theo hợp đồng được ký kết',
      'b. Từ chối nghiệm thu khi công trình không đạt yêu cầu về chất lượng',
      'c. Giám sát việc thực hiện các quy định về an toàn, bảo vệ môi trường',
      'd. Tất cả các điều trên',
    ],
    correct: 3
  },
  {
    question: 'Bản vẽ hoàn công là bản vẽ nào sau đây?',
    options: [
      'a. Là bản vẽ công trình xây dựng hoàn thành, trong đó thể hiện vị trí, kích thước, vật liệu và thiết bị được sử dụng thực tế',
      'b. Là bản vẽ của thiết kế kỹ thuật',
      'c. Là bản vẽ của thiết kế bản vẽ thi công',
      'd. Tất cả các đáp án trên',
    ],
    correct: 0
  },
  {
    question: 'Thẩm quyền kiểm tra biện pháp thi công xây dựng của nhà thầu thi công?',
    options: [
      'a. Tư vấn thiết kế',
      'b. Người giám sát thi công xây dựng của chủ đầu tư',
      'c. Đơn vị kiểm định độc lập',
      'd. Cả ba đáp án trên',
    ],
    correct: 1
  },
  {
    question: 'Nhà thầu thi công xây dựng có trách nhiệm xác định vùng nguy hiểm trong thi công xây dựng công trình và thực hiện những công tác nào sau đây?',
    options: [
      'a. Tổ chức lập, trình chủ đầu tư chấp thuận biện pháp bảo đảm an toàn cho con người, công trình xây dựng, tài sản, thiết bị, phương tiện trong vùng nguy hiểm trong thi công xây dựng công trình',
      'b. Rà soát biện pháp bảo đảm an toàn định kỳ, đột xuất để điều chỉnh cho phù hợp với thực tế thi công trên công trường',
      'c. Cả nội dung a và b',
      'd. Không phải các nội dung trên',
    ],
    correct: 2
  },
  {
    question: 'Đối với công tác an toàn và bảo vệ môi trường trên công trường xây dựng, người giám sát có trách nhiệm nào sau đây?',
    options: [
      'a. Lập biện pháp và tuân thủ các quy định về an toàn, bảo vệ môi trường.',
      'b. Giám sát việc thực hiện các quy định về an toàn, bảo vệ môi trường.',
      'c. Tạm dừng thi công và thông báo kịp thời cho chủ đầu tư để xử lý trong trường hợp phát hiện công trình có nguy cơ xảy ra mất an toàn.',
      'd. Đáp án b và',
    ],
    correct: 3
  },
  {
    question: 'Nội dung nào sau đây không thuộc nghĩa vụ của nhà thầu giám sát thi công xây dựng công trình?',
    options: [
      'a. Thực hiện giám sát theo đúng hợp đồng.',
      'b. Từ chối nghiệm thu khi công trình không đạt yêu cầu chất lượng.',
      'c. Từ chối nghiệm thu khi sản phẩm thiết kế không đạt yêu cầu về chất lượng.',
      'd. Đề xuất với chủ đầu tư những bất hợp lý về thiết kế xây dựng.',
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
    question: 'Đâu là nghĩa vụ của nhà thầu thi công xây dựng trong việc thi công xây dựng công trình',
    options: [
      'a. Từ chối thực hiện những yêu cầu trái pháp luật',
      'b. Yêu cầu thanh toán giá trị khối lượng xây dựng hoàn thành theo đúng hợp đồng',
      'c. Có hệ thống quản lý chất lượng phù hợp và thiết lập hồ sơ quản lý chất lượng công trình',
      'd. Cả a, b và c',
    ],
    correct: 2
  },
  {
    question: 'Kế hoạch tổ chức thí nghiệm, kiểm tra, kiểm định, thử nghiệm, chạy thử, quan trắc, đo đạc các thông số kỹ thuật của công trình theo yêu cầu thiết kế và chỉ dẫn kỹ thuật do ai lập?',
    options: [
      'a. Chủ đầu tư',
      'b. Ban quản lý dự án hoặc tư vấn quản lý dự án',
      'c. Tư vấn giám sát thi công xây dựng',
      'd. Nhà thầu thi công xây dựng',
    ],
    correct: 3
  },
  {
    question: 'Trong dự án vốn đầu tư công và vốn nhà nước ngoài đầu tư công, Tư vấn giám sát không yêu cầu phải độc lập với đơn vị nào dưới đây:',
    options: [
      'a. Đơn vị cung ứng vật liệu, sản phẩm vào công trình',
      'b. Tư vấn kiểm định',
      'c. Nhà thầu thi công xây dựng',
      'd. Tư vấn thiết kế',
    ],
    correct: 3
  },
  {
    question: 'Chủ thể nào có trách nhiệm thực hiện bảo hành công trình xây dựng?',
    options: [
      'a. Chủ đầu tư xây dựng công trình',
      'b. Nhà thầu thi công xây dựng công trình',
      'c. Nhà thầu thiết kế xây dựng công trình',
      'd. Cả 3 phương án trên đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Tổ chức đề nghị cấp chứng chỉ năng lực hoạt động xây dựng yêu cầu phải đáp ứng các điều kiện gì?',
    options: [
      'a. Những cá nhân chủ chốt của tổ chức phải có chứng chỉ hành nghề phù hợp với lĩnh vực và hạng năng lực mà tổ chức đề nghị cấp chứng chỉ năng lực',
      'b. Tổ chức đã thực hiện công việc tương tự loại, cấp công trình',
      'c. Phải có thời gian tham gia hoạt động xây dựng tối thiểu 3 năm',
      'd. Đáp ứng cả điều kiện a và b ở trên',
    ],
    correct: 3
  },
  {
    question: 'Nhật ký thi công xây dựng công trình do ai lập?',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu thi công xây dựng',
      'c. Đơn vị tư vấn giám sát lập',
      'd. Cả ba đáp án trên',
    ],
    correct: 1
  },
  {
    question: 'Nội dung nào sau đây phải đáp ứng khi khởi công công trình?',
    options: [
      'a. Có mặt bằng xây dựng để bàn giao toàn bộ hoặc từng phần theo tiến độ xây dựng;',
      'b. Có thiết kế bản vẽ thi công của hạng mục công trình, công trình khởi công đã được phê duyệt;',
      'c. Chủ đầu tư đã ký kết hợp đồng với nhà thầu thực hiện các hoạt động xây dựng liên quan đến công trình được khởi công theo quy định của pháp luật;',
      'd. Có tất cả các nội dung ở trên',
    ],
    correct: 3
  },
  {
    question: 'Nội dung nào sau đây thuộc về nghĩa vụ của nhà thầu giám sát thi công xây dựng công trình?',
    options: [
      'a. Nghiệm thu khối lượng thi công xây dựng, phù hợp với tiêu chuẩn áp dụng, quy chuẩn kỹ thuật và theo yêu cầu của tiến độ thi công;',
      'b. Nghiệm thu khối lượng bảo đảm chất lượng, phù hợp với tiêu chuẩn áp dụng, quy chuẩn kỹ thuật và theo yêu cầu của thiết kế công trình;',
      'c. Nghiệm thu giá trị thi công xây dựng, phù hợp với tiêu chuẩn áp dụng, quy chuẩn kỹ thuật và theo yêu cầu của thiết kế công trình;',
      'd. Nghiệm thu khối lượng theo đơn giá được duyệt, phù hợp với tiêu chuẩn áp dụng, quy chuẩn kỹ thuật và theo yêu cầu của thiết kế công trình;',
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
    question: 'Ai là người có thẩm quyền chấp thuận việc đổi chủng loại, nguồn gốc xuất xứ vật liệu, sản phẩm, cấu kiện, thiết bị sử dụng cho công trình xây dựng',
    options: [
      'a. Tư vấn giám sát',
      'b. Tư vấn thiết kế',
      'c. Chỉ huy trưởng công trình',
      'd. Chủ đầu tư',
    ],
    correct: 3
  },
  {
    question: 'Nhà thầu tư vấn giám sát thi công xây dựng phải thực hiện kiểm tra đối với những nội dung nào sau đây',
    options: [
      'a. Kiểm tra sự phù hợp năng lực của nhà thầu thi công xây dựng công trình so với hồ sơ dự thầu và hợp đồng xây dựng, bao gồm: nhân lực, thiết bị thi công, phòng thí nghiệm chuyên ngành xây dựng, hệ thống quản lý chất lượng của nhà thầu thi công xây dựng công trình;',
      'b. Kiểm tra biện pháp thi công xây dựng của nhà thầu so với thiết kế biện pháp thi công đã được phê duyệt. Chấp thuận kế hoạch tổng hợp về an toàn, các biện pháp đảm bảo an toàn chi tiết đối với những công việc đặc thù, có nguy cơ mất an toàn lao động cao trong thi công xây dựng công trình;',
      'c. Kiểm tra và chấp thuận vật liệu, cấu kiện, sản phẩm xây dựng, thiết bị lắp đặt vào công trình;',
      'd. Tất cả các đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Việc giám sát thi công xây dựng công trình phải đảm bảo các yêu cầu nào sau đây?',
    options: [
      'a. Thực hiện trong suốt quá trình thi công từ khi khởi công xây dựng, trong thời gian thực hiện cho đến khi hoàn thành và nghiệm thu công việc, công trình xây dựng;',
      'b. Theo thiết kế xây dựng được phê duyệt, tiêu chuẩn áp dụng, quy chuẩn kỹ thuật, quy định về quản lý, sử dụng vật liệu xây dựng, chỉ dẫn kỹ thuật và hợp đồng xây dựng;',
      'c. Trung thực khách quan, không vụ lợi;',
      'd. Tất cả các yêu cầu trên',
    ],
    correct: 3
  },
  {
    question: 'Các hoạt động đầu tư xây dựng chịu sự điều chỉnh của pháp luật nào dưới đây?',
    options: [
      'a. Pháp luật về xây dựng',
      'b. Pháp luật về xây dựng và pháp luật về đầu tư công',
      'c. Pháp luật về xây dựng và pháp luật về đấu thầu',
      'd. Pháp luật về xây dựng và pháp luật khác có liên quan',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng, hoạt động xây dựng gồm các công việc nào dưới đây?',
    options: [
      'a. Lập quy hoạch xây dựng, lập dự án đầu tư xây dựng công trình, khảo sát xây dựng',
      'b. Thiết kế xây dựng, thi công xây dựng, giám sát xây dựng, quản lý dự án, lựa chọn nhà thầu, nghiệm thu, bàn giao đưa công trình vào khai thác sử dụng',
      'c. Bảo hành, bảo trì công trình xây dựng và hoạt động khác có liên quan đến xây dựng công trình',
      'd. Các công việc nêu tại điểm a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Dự án đầu tư xây dựng sử dụng vốn ODA thì thực hiện theo quy định nào?',
    options: [
      'a. Theo quy định của Hiệp định vay vốn mà Việt Nam ký kết với tổ chức cho vay',
      'b. Theo pháp luật về xây dựng',
      'c. Theo quy định của Hiệp định vay vốn mà Việt Nam ký kết với tổ chức cho vay, các quy định của pháp luật về xây dựng và pháp luật khác liên quan',
      'd. Theo quy định của Hiệp định vay vốn mà Việt Nam ký kết với tổ chức cho vay và các quy định của pháp luật về xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Việc áp dụng tiêu chuẩn, quy chuẩn kỹ thuật trong hoạt động đầu tư xây dựng phải tuân thủ theo những nguyên tắc nào?',
    options: [
      'a. Tuân thủ Quy chuẩn kỹ thuật quốc gia',
      'b. Tiêu chuẩn được viện dẫn trong quy chuẩn kỹ thuật hoặc văn bản quy phạm pháp luật khác có liên quan',
      'c. Tiêu chuẩn được áp dụng trong hoạt động đầu tư xây dựng theo nguyên tắc tự nguyện',
      'd. Tất cả các quy định tại a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Việc giám sát đánh giá đầu tư đối với các dự án đầu tư xây dựng sử dụng vốn đầu tư công, vốn nhà nước ngoài đầu tư công căn cứ vào các quy định nào?',
    options: [
      'a. Pháp luật về xây dựng',
      'b. Pháp luật về đầu tư công',
      'c. Pháp luật về đầu tư công và pháp luật về xây dựng',
      'd. Pháp luật về đầu tư công, pháp luật về xây dựng và pháp luật khác có liên quan',
    ],
    correct: 3
  },
  {
    question: 'Những chủ thể nào bắt buộc phải mua bảo hiểm công trình trong thời gian thi công xây dựng đối với công trình có ảnh hưởng đến an toàn cộng đồng, môi trường, công trình có yêu cầu kỹ thuật đặc thù, điều kiện thi công xây dựng phức tạp ?',
    options: [
      'a. Chủ đầu tư xây dựng công trình',
      'b. Nhà thầu thi công xây dựng công trình',
      'c. Nhà thầu tư vấn thiết kế xây dựng công trình',
      'd. Cả 3 chủ thể nêu tại a, b và c',
    ],
    correct: 0
  },
  {
    question: 'Nội dung nào sau đây là đúng quy định về trách nhiệm mua bảo hiểm bắt buộc trong hoạt động đầu tư xây dựng?',
    options: [
      'a. Chủ đầu tư mua bảo hiểm công trình trong thời gian xây dựng đối với công trình có ảnh hưởng đến an toàn cộng đồng, môi trường, công trình có yêu cầu kỹ thuật đặc thù, điều kiện thi công xây dựng phức tạp;',
      'b. Nhà thầu tư vấn mua bảo hiểm trách nhiệm nghề nghiệp tư vấn đầu tư xây dựng đối với công việc khảo sát xây dựng, thiết kế xây dựng của công trình xây dựng từ cấp II trở lên;',
      'c. Cả nội dung a và b đều đúng',
      'd. Các nội dung trên đều sai',
    ],
    correct: 2
  },
  {
    question: 'Dự án đầu tư xây dựng được phân thành loại và nhóm A, B, C đối với các nguồn vốn nào?',
    options: [
      'a. Nguồn vốn đầu tư công',
      'b. Nguồn vốn nhà nước ngoài đầu tư công',
      'c. Nguồn vốn khác không phải nguồn vốn nêu tại điểm a và b',
      'd. Tất cả các nguồn vốn nêu tại điểm a, b và',
    ],
    correct: 3
  },
  {
    question: 'Thời gian thẩm định thiết kế xây dựng triển khai sau thiết kế cơ sở đối với công trình cấp II và cấp III của cơ quan chuyên môn về xây dựng, tính từ ngày nhận đủ hồ sơ hợp lệ là:',
    options: [
      'a. Không quá 40 ngày',
      'b. Không quá 30 ngày',
      'c. Không quá 25 ngày',
      'd. Không quá 20 ngày',
    ],
    correct: 1
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng, những công tác gì được liệt kê dưới đây thuộc giai đoạn chuẩn bị dự án ?',
    options: [
      'a. Quyết định hoặc chấp thuận chủ trương đầu tư',
      'b. Lập, thẩm định, phê duyệt Báo cáo nghiên cứu khả thi đầu tư xây dựng',
      'c. Xin cấp phép xây dựng',
      'd. Bao gồm công tác a và b',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng, công tác nào sau đây ở giai đoạn thực hiện dự án ?',
    options: [
      'a. Thanh toán khối lượng xây lắp hoàn thành',
      'b. Giám sát thi công xây dựng;',
      'c. Vận hành, chạy thử; nghiệm thu hoàn thành công trình xây dựng',
      'd. Tất cả các công tác trên',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng, công trình xây dựng được phân cấp phục vụ quản lý hoạt động đầu tư xây dựng trên cơ sở các căn cứ nào?',
    options: [
      'a. Quy mô, mức độ quan trọng, thông số kỹ thuật của công trình',
      'b. Thời hạn sử dụng, vật liệu',
      'c. Yêu cầu xây dựng công trình',
      'd. Tất cả các căn cứ trên',
    ],
    correct: 0
  },
  {
    question: 'Việc phân loại công trình xây dựng theo quy định của pháp luật về xây dựng trên cơ sở tiêu chí nào?',
    options: [
      'a. Theo tính chất kết cấu và công năng sử dụng công trình',
      'b. Theo kiến trúc công trình',
      'c. Do người quyết định đầu tư quy định',
      'd. Do chủ đầu tư quy định',
    ],
    correct: 0
  },
  {
    question: 'Những dự án đầu tư xây dựng nào có thể được phân chia thành các dự án thành phần hoặc phân kỳ đầu tư để quản lý thực hiện như một dự án độc lập?',
    options: [
      'a. Dự án quan trọng quốc gia, dự án nhóm A',
      'b. Khi mỗi dự án thành phần có thể vận hành, khai thác độc lập',
      'c. Dự án nhóm B, C',
      'd. Cả 3 phương án a, b và c',
    ],
    correct: 1
  },
  {
    question: 'Dự án đầu tư xây dựng phải đáp ứng các yêu cầu nào dưới đây?',
    options: [
      'a. Phù hợp với quy hoạch và kế hoạch sử dụng đất tại địa phương nơi có dự án đầu tư xây dựng',
      'b. Có phương án công nghệ và phương án thiết kế xây dựng phù hợp',
      'c. Bảo đảm chất lượng, an toàn trong xây dựng và bảo vệ môi trường',
      'd. Cả 3 phương án trên',
    ],
    correct: 3
  },
  {
    question: 'Các dự án đầu tư xây dựng có quy mô nhóm nào yêu cầu phải lập Báo cáo nghiên cứu tiền khả thi để trình cấp có thẩm quyền quyết định hoặc chấp thuận chủ trương đầu tư?',
    options: [
      'a. Dự án quan trọng quốc gia,',
      'b. Dự án PPP theo quy định của pháp luật về đầu tư theo phương thức đối tác công tư',
      'c. Dự án nhóm A sử dụng vốn đầu tư công',
      'd. Cả 3 phương án trên',
    ],
    correct: 3
  },
  {
    question: 'Trừ trường hợp người quyết định đầu tư có yêu cầu lập Báo cáo nghiên cứu khả thi đầu tư xây dựng, dự án đầu tư xây dựng công trình chỉ cần yêu cầu lập Báo cáo kinh tế - kỹ thuật đầu tư xây dựng gồm trường hợp nào sau đây?',
    options: [
      'a. Dự án đầu tư xây dựng sử dụng cho mục đích tôn giáo',
      'b. Dự án đầu tư xây dựng mới, sửa chữa, cải tạo, nâng cấp có tổng mức đầu tư dưới 15 tỷ đồng (không bao gồm tiền sử dụng đất);',
      'c. Cả trường hợp a và b',
      'd. Không bao gồm a và b',
    ],
    correct: 2
  },
  {
    question: 'Đối với dự án đầu tư xây dựng sử dụng vốn nhà nước ngoài đầu tư công, cơ quan chuyên môn về xây dựng thẩm định đối với dự án nào sau đây ?',
    options: [
      'a. Dự án từ nhóm B trở lên;',
      'b. Dự án có công trình ảnh hưởng lớn đến an toàn, lợi ích cộng đồng thuộc chuyên ngành quản lý;',
      'c. Đáp án a và b đúng',
      'd. Các dự án trên địa bàn phụ trách',
    ],
    correct: 2
  },
  {
    question: 'Đối với dự án đầu tư xây dựng sử dụng vốn đầu tư công, cơ quan chuyên môn về xây dựng dựng thuộc Bộ quản lý công trình xây dựng chuyên ngành thẩm định đối với dự án nào sau đây ?',
    options: [
      'a. Dự án nhóm A; dự án nhóm B do người đứng đầu cơ quan trung ương quyết định đầu tư hoặc phân cấp, ủy quyền quyết định đầu tư;',
      'b. Dự án được đầu tư xây dựng trên địa bàn hành chính từ 02 tỉnh trở lên;',
      'c. Dự án do Thủ tướng Chính phủ giao;',
      'd. Bao gồm tất cả các dự án trên.',
    ],
    correct: 3
  },
  {
    question: 'Đối với dự án quan trọng quốc gia có công nghệ hạn chế chuyển giao sử dụng vốn đầu tư công thì cơ quan nào sau đây thẩm định thiết kế công nghệ?',
    options: [
      'a. Sở Xây dựng',
      'b. Cơ quan chuyên môn trực thuộc người quyết định đầu tư',
      'c. Chủ đầu tư xây dựng',
      'd. Hội đồng thẩm định nhà nước',
    ],
    correct: 3
  },
  {
    question: 'Đối với các dự án đầu tư xây dựng điều chỉnh, cơ quan chuyên môn về xây dựng thẩm định Báo cáo nghiên cứu khả thi điều chỉnh trong trường hợp nào sau đây ?',
    options: [
      'a. Khi điều chỉnh dự án có thay đổi về mục tiêu, quy mô sử dụng đất, quy mô đầu tư xây dựng;',
      'b. Khi điều chỉnh làm tăng tổng mức đầu tư dự án đối với dự án sử dụng vốn đầu tư công, dự án sử dụng vốn nhà nước ngoài đầu tư công;',
      'c. Cả trường hợp a và b',
      'd. Không bao gồm các trường hợp ở trên',
    ],
    correct: 2
  },
  {
    question: 'Đối với nguồn vốn khác thì cơ quan chuyên môn về xây dựng thuộc các Bộ quản lý công trình xây dựng chuyên ngành thẩm định những dự án nào ?',
    options: [
      'a. Dự án đầu tư xây dựng có công trình cấp đặc biệt, cấp I và cấp II, dự án được đầu tư xây dựng trên địa bàn hành chính của 02 tỉnh trở lên',
      'b. Dự án do Quốc hội, Thủ tướng Chính phủ chấp thuận chủ trương đầu tư; dự án nhóm A; dự án đầu tư xây dựng có công trình cấp đặc biệt, cấp I; dự án được đầu tư xây dựng trên địa bàn hành chính của 02 tỉnh trở lên',
      'c. Dự án đầu tư xây dựng có công trình từ cấp III trở lên và dự án được đầu tư xây dựng trên địa bàn hành chính của 02 tỉnh trở lên',
      'd. Chỉ dự án nhóm A',
    ],
    correct: 1
  },
  {
    question: 'Cơ quan chuyên môn về xây dựng thẩm định Báo cáo nghiên cứu khả thi đầu tư xây dựng đối với các dự án nào sau đây?',
    options: [
      'a. Dự án sử dụng vốn đầu tư công; Dự án đầu tư xây dựng có quy mô từ nhóm B trở lên hoặc có công trình ảnh hưởng lớn đến an toàn, lợi ích cộng đồng sử dụng vốn nhà nước ngoài đầu tư công;',
      'b. Dự án PPP; Dự án đầu tư xây dựng có quy mô lớn hoặc có công trình ảnh hưởng lớn đến an toàn, lợi ích cộng đồng sử dụng vốn khác.',
      'c. Cả a và b',
      'd. Không bao gồm a và b',
    ],
    correct: 2
  },
  {
    question: 'Người quyết định đầu tư thẩm định những nội dung nào của lập Báo cáo kinh tế - kỹ thuật, đối với dự án sử dụng vốn đầu tư công, dự án sử dụng vốn nhà nước ngoài đầu tư công?',
    options: [
      'a. Sự phù hợp về quy hoạch, mục tiêu, quy mô đầu tư và các yêu cầu khác được xác định trong quyết định hoặc chấp thuận chủ trương đầu tư xây dựng;',
      'b. Sự đáp ứng yêu cầu của thiết kế bản vẽ thi công về bảo đảm an toàn công trình và biện pháp bảo đảm an toàn công trình lân cận;',
      'c. Việc lập tổng mức đầu tư xây dựng, xác định giá trị tổng mức đầu tư xây dựng;',
      'd. Tất cả các nội dung ở trên',
    ],
    correct: 3
  },
  {
    question: 'Hợp đồng trong hoạt động xây dựng theo hình thức giá có những loại nào?',
    options: [
      'a. Hình thức trọn gói, hình thức theo thời gian',
      'b. Hình thức điều chỉnh giá, hình thức theo đơn giá cố định',
      'c. Bao gồm các hình thức nêu tại a và b',
      'd. Không có hình thức nào nêu tại a và b',
    ],
    correct: 2
  },
  {
    question: 'Chức năng, nhiệm vụ của Ban QLDA chuyên ngành, ban QLDA khu vực do ai quy định?',
    options: [
      'a. Người có thẩm quyền quyết định đầu tư',
      'b. Người quyết định thành lập Ban QLDA chuyên ngành, ban QLDA khu vực',
      'c. Cơ quan chuyên môn về xây dựng',
      'd. Chủ đầu tư',
    ],
    correct: 1
  },
  {
    question: 'Đối với các dự án đầu tư xây dựng điều chỉnh, cơ quan chuyên môn về xây dựng thẩm định Báo cáo nghiên cứu khả thi điều chỉnh trong trường hợp nào sau đây?',
    options: [
      'a. Khi điều chỉnh dự án có thay đổi về mục tiêu, quy mô sử dụng đất, quy mô đầu tư xây dựng;',
      'b. Khi có thay đổi về chỉ tiêu quy hoạch, kiến trúc của dự án tại quy hoạch chi tiết xây dựng, quy hoạch có tính chất kỹ thuật chuyên ngành khác hoặc quyết định/chấp thuận chủ trương đầu tư được phê duyệt;',
      'c. Khi điều chỉnh làm tăng tổng mức đầu tư dự án đối với dự án sử dụng vốn đầu tư công, dự án sử dụng vốn nhà nước ngoài đầu tư công;',
      'd. Tất cả các nội dung trên',
    ],
    correct: 3
  },
  {
    question: 'Chủ thể nào phải chịu trách nhiệm chính về an toàn lao động trên công trường?',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu thi công xây dựng công trình',
      'c. Nhà thầu tư vấn giám sát thi công xây dựng công trình',
      'd. Cả a, b và c',
    ],
    correct: 1
  },
  {
    question: 'Các dự án đầu tư xây dựng thuộc Tập đoàn kinh tế, Tổng công ty nhà nước phải tuân thủ theo các quy định nào?',
    options: [
      'a. Điều lệ, quy chế hoạt động của Tập đoàn, Tổng công ty',
      'b. Theo quy định pháp luật về xây dựng, pháp luật về đấu thầu và pháp luật khác liên quan',
      'c. Bao gồm a và b',
      'd. Chỉ tuân thủ quy định của pháp luật về xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng, đối với dự án sử dụng nguồn vốn khác, chủ đầu tư có thể áp dụng hình thức quản lý dự án nào sau đây?',
    options: [
      'a. Chủ đầu tư sử dụng tư cách pháp nhân của mình và bộ máy chuyên môn trực thuộc có đủ điều kiện, năng lực để quản lý dự án',
      'b. Chủ đầu tư được thuê tổ chức, cá nhân có đủ điều kiện năng lực để quản lý dự án',
      'c. Đáp án a và b là đúng',
      'd. Đáp án a và b là sai',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng, đối với các gói thầu sử dụng vốn nhà nước ngoài đầu tư công thì hợp đồng xây dựng được ký kết vào thời điểm nào?',
    options: [
      'a. Sau khi hoàn thành việc lựa chọn nhà thầu',
      'b. Sau khi hoàn thành việc lựa chọn nhà thầu và kết thúc đàm phán hợp đồng',
      'c. Trước khi khởi công xây dựng công trình',
      'd. Cả 3 phương án a, b và c',
    ],
    correct: 1
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng, đối với các gói thầu sử dụng vốn đầu tư công thì hợp đồng xây dựng được ký kết giữa bên giao thầu và bên nhận thầu bằng hình thức nào?',
    options: [
      'a. Bằng văn bản thỏa thuận giữa bên giao thầu và bên nhận thầu để thực hiện một phần công việc trong hoạt động đầu tư xây dựng.',
      'b. Bằng văn bản thỏa thuận giữa bên giao thầu và bên nhận thầu để thực hiện toàn bộ công việc trong hoạt động đầu tư xây dựng.',
      'c. Phương án a hoặc b',
      'd. Cả 2 phương án a và b',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng, đối với các gói thầu sử dụng vốn đầu tư công, trường hợp bên nhận thầu là liên danh các nhà thầu thì khi ký kết hợp đồng xây dựng với bên giao thầu những nhà thầu nào trong liên danh phải cử đại diện hợp pháp của mình để ký hợp đồng?',
    options: [
      'a. Nhà thầu được liên danh các nhà thầu cử làm đại diện cho liên danh',
      'b. Tất cả các nhà thầu tham gia trong liên danh',
      'c. Phương án a hoặc b',
      'd. Bất kể nhà thầu nào trong liên danh theo yêu cầu của bên giao thầu',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng, đối với các gói thầu sử dụng vốn đầu tư công thì hiệu lực của hợp đồng xây dựng được tính từ thời điểm nào?',
    options: [
      'a. Từ ngày ký kết hợp đồng',
      'b. Từ ngày bên giao thầu nhận được bảo đảm thực hiện hợp đồng của bên nhận thầu',
      'c. Từ ngày do bên giao thầu và bên nhận thầu thỏa thuận trong hợp đồng.',
      'd. Bao gồm cả a, b và c',
    ],
    correct: 2
  },
  {
    question: 'Đối với các gói thầu sử dụng vốn đầu tư công, việc điều chỉnh đơn giá thực hiện hợp đồng chỉ được áp dụng đối với loại hợp đồng nào?',
    options: [
      'a. Hợp đồng theo đơn giá cố định; hợp đồng theo thời gian',
      'b. Hợp đồng theo đơn giá điều chỉnh, hợp đồng theo thời gian',
      'c. Cả a và b',
      'd. a hoặc b',
    ],
    correct: 1
  },
  {
    question: 'Trước khi ký kết hợp đồng EPC các bên phải thỏa thuận cụ thể những nội dung chủ yếu nào sau đây?',
    options: [
      'a. Phạm vi công việc dự kiến thực hiện theo hợp đồng EPC; Vị trí xây dựng, hướng tuyến công trình, loại, cấp công trình; quy mô, công suất và phương án sản phẩm được lựa chọn, năng lực khai thác sử dụng;',
      'b. Các thông tin về các tài liệu, số liệu về điều kiện tự nhiên, địa chất công trình, địa chất thủy văn, thủy văn của khu vực nơi xây dựng công trình; Các yêu cầu về thiết kế xây dựng và một số thông số thiết kế ban đầu;',
      'c. Bao gồm cả nội dung a và b',
      'd. Nội dung a hoặc b',
    ],
    correct: 2
  },
  {
    question: 'Đối với các gói thầu thi công xây dựng sử dụng vốn đầu tư công, tiến độ thực hiện hợp đồng được điều chỉnh trong các trường hợp nào?',
    options: [
      'a. Trong quá trình thực hiện hợp đồng xảy ra các trường hợp bất khả kháng',
      'b. Do bên giao thầu thay đổi thiết kế hoặc bàn giao mặt bằng không đúng với thỏa thuận trong hợp đồng',
      'c. Đáp án a và b đúng',
      'd. Các trường hợp trên đều không đúng',
    ],
    correct: 2
  },
  {
    question: 'Hợp đồng EPC là loại hợp đồng thực hiện những công việc gì?',
    options: [
      'a. Thiết kế và thi công xây dựng',
      'b. Thiết kế và cung cấp vật tư, thiết bị',
      'c. Thiết kế - mua sắm vật tư, thiết bị - thi công xây dựng công trình',
      'd. Lập dự án, thiết kế, cung cấp vật tư, thiết bị và thi công xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Đối với hợp đồng EPC ngoài tiến độ thi công cho từng giai đoạn của tổng thầu, nhà thầu còn phải lập tiến độ thực hiện cho những công việc nào dưới đây?',
    options: [
      'a. Tiến độ cho công việc thiết kế',
      'b. Tiến độ cho công việc cung cấp thiết bị và thi công xây dựng',
      'c. Tiến độ cho công việc thiết kế - mua sắm vật tư, thiết bị - thi công xây dựng công trình',
      'd. Tiến độ cho công việc thiết kế và thi công xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Đối với các gói thầu sử dụng vốn đầu tư công, nhà thầu chính có quyền giao 100% công việc của hợp đồng đã ký kết với bên giao thầu cho nhà thầu phụ không?',
    options: [
      'a. Có',
      'b. Không',
      'c. Tùy thuộc vào tình hình cụ thể và nhà thầu chính quyết định',
      'd. Do bên giao thầu và bên nhận thầu thỏa thuận',
    ],
    correct: 1
  },
  {
    question: 'Theo quy định của pháp luật Xây dựng hiện hành, nhà thầu nào có trách nhiệm lập biện pháp an toàn cho người và thiết bị thi công công trình trên công trường xây dựng?',
    options: [
      'a. Nhà thầu thiết kế',
      'b. Nhà thầu thi công xây dựng',
      'c. Chủ đầu tư',
      'd. Tư vấn giám sát thi công xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Hồ sơ trình thẩm định báo cáo nghiên cứu khả thi đầu tư xây dựng không bao gồm tài liệu nào dưới đây?',
    options: [
      'a. Tờ trình thẩm định báo cáo nghiên cứu khả thi',
      'b. Thiết kế cơ sở của dự án',
      'c. Thiết kế kỹ thuật của dự án',
      'd. Giấy tờ liên quan đến đất đai',
    ],
    correct: 2
  },
  {
    question: 'Công tác nào sau đây không nằm trong giai đoạn thực hiện dự án đầu tư xây dựng?',
    options: [
      'a. Thẩm định, phê duyệt thiết kế bản vẽ thi công và dự toán',
      'b. Lựa chọn nhà thầu thi công xây dựng',
      'c. Thẩm định, phê duyệt dự án',
      'd. Nghiệm thu công việc xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Đối với các bộ, cơ quan ở trung ương: Ban quản lý dự án chuyên ngành, Ban quản lý dự án khu vực được thành lập theo tiêu chí nào sau đây?',
    options: [
      'a. Phù hợp với các chuyên ngành thuộc lĩnh vực quản lý',
      'b. Theo yêu cầu về xây dựng cơ sở vật chất, hạ tầng tại các vùng, khu vực',
      'c. Đáp án a hoặc b',
      'd. Đáp án a và b',
    ],
    correct: 2
  },
  {
    question: 'Trường hợp thuê tư vấn quản lý dự án thì nhiệm vụ, quyền hạn của tư vấn QLDA do ai quyết định?',
    options: [
      'a. Do chủ đầu tư thông qua hợp đồng',
      'b. Do pháp luật quy định',
      'c. Do người quyết định đầu tư',
      'd. Cấp trên của tổ chức tư vấn quản lý dự án',
    ],
    correct: 0
  },
  {
    question: 'Theo quy định của pháp luật xây dựng hiện hành, hợp đồng xây dựng không có hình thức nào dưới đây?',
    options: [
      'a. Hợp đồng trọn gói',
      'b. Hợp đồng theo tỷ lệ %',
      'c. Hợp đồng theo đơn giá điều chỉnh',
      'd. Hợp đồng theo đơn giá cố định',
    ],
    correct: 1
  },
  {
    question: 'Trong quá trình thực hiện hợp đồng, bên nhận thầu có được thay đổi người đại diện quản lý thực hiện hợp đồng không?',
    options: [
      'a. Có',
      'b. Không',
      'c. Có nhưng phải được sự chấp thuận của bên giao thầu',
      'd. Cả a, b và c đều không đúng',
    ],
    correct: 2
  },
  {
    question: 'Nguyên tắc và trình tự giải quyết tranh chấp hợp đồng xây dựng được quy định như thế nào sau đây?',
    options: [
      'a. Tôn trọng các thỏa thuận hợp đồng và các cam kết trong quá trình thực hiện hợp đồng, bảo đảm bình đẳng và hợp tác;',
      'b. Các bên hợp đồng có trách nhiệm tự thương lượng giải quyết tranh chấp. Trường hợp các bên hợp đồng không tự thương lượng được thì tranh chấp được giải quyết thông qua hòa giải, trọng tài thương mại hoặc tòa án theo quy định của pháp luật.',
      'c. Đáp ứng cả a và b',
      'd. Không cần đáp ứng nhũng yêu cầu trên',
    ],
    correct: 2
  },
  {
    question: 'Những cá nhân nào dưới đây không bắt buộc phải có chứng chỉ hành nghề hoạt động xây dựng?',
    options: [
      'a. Chủ nhiệm thiết kế xây dựng công trình',
      'b. Chủ trì thiết kế bộ môn trong công trình xây dựng',
      'c. Cá nhân giám sát thi công của nhà thầu thi công xây dựng',
      'd. Cán bộ tư vấn giám sát thi công xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Chủ nhiệm thiết kế xây dựng hạng I phải đáp ứng các điều kiện gì?',
    options: [
      'a. Có trình độ đại học thuộc chuyên ngành phù hợp',
      'b. Có thời gian làm công tác thiết kế xây dựng tối thiểu 7 năm',
      'c. Đã làm chủ nhiệm thiết kế phần việc thuộc lĩnh vực phù hợp ít nhất 01 công trình từ cấp I trở lên hoặc 02 công trình từ cấp II trở lên',
      'd. Cả a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Chủ thể nào sau đây có trách nhiệm lập bản vẽ hoàn công công trình?',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu thiết kế xây dựng',
      'c. Nhà thầu thi công xây dựng',
      'd. Nhà thầu tư vấn giám sát thi công xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Chủ thể nào có trách nhiệm lập tiến độ chi tiết thi công xây dựng công trình?',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu thiết kế xây dựng công trình',
      'c. Nhà thầu thi công xây dựng công trình',
      'd. Nhà thầu tư vấn giám sát thi công xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Đối với công trình xây dựng sử dụng vốn đầu tư công, công trình xây dựng sử dụng vốn nhà nước ngoài đầu tư công, chủ đầu tư thẩm định thiết kế xây dựng triển khai sau thiết kế cơ sở đối với các nội dung nào sau đây?',
    options: [
      'a. Sự đáp ứng yêu cầu của thiết kế xây dựng với nhiệm vụ thiết kế, quy định tại hợp đồng thiết kế và quy định của pháp luật có liên quan;',
      'b. Sự phù hợp của thiết kế xây dựng với yêu cầu về dây chuyền và thiết bị công nghệ (nếu có);',
      'c. Việc lập dự toán xây dựng công trình; sự phù hợp của giá trị dự toán xây dựng công trình với giá trị tổng mức đầu tư xây dựng; xác định giá trị dự toán xây dựng công trình.',
      'd. Bao gồm tất cả các nội dung ở trên',
    ],
    correct: 3
  },
  {
    question: 'Số bước thiết kế xây dựng do ai quyết định?',
    options: [
      'a. Người quyết định đầu tư khi phê duyệt dự án',
      'b. Chủ đầu tư khi triển khai thực hiện dự án',
      'c. Tổ chức tư vấn khi lập dự án đầu tư xây dựng',
      'd. Cả 3 phương án trên đều sai',
    ],
    correct: 0
  },
  {
    question: 'Chủ thể nào có trách nhiệm thực hiện bảo hành công trình xây dựng?',
    options: [
      'a. Chủ đầu tư xây dựng công trình',
      'b. Nhà thầu thi công xây dựng công trình',
      'c. Nhà thầu thiết kế xây dựng công trình',
      'd. Cả 3 phương án trên đầu đúng',
    ],
    correct: 1
  },
  {
    question: 'Việc điều chỉnh dự án sử dụng vốn khác phải đảm bảo yêu cầu nào sau đây?',
    options: [
      'a. Các yêu cầu về quy hoạch',
      'b. Các yêu cầu về an toàn, bảo vệ môi trường',
      'c. Các yêu cầu về phòng, chống cháy, nổ, quốc phòng, an ninh',
      'd. Cả 3 phương án a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Dự án đầu tư xây dựng sử dụng vốn đầu tư công được xem xét điều chỉnh trong những trường hợp nào?',
    options: [
      'a. Do ảnh hưởng của thiên tai, sự cố môi trường, địch họa, hỏa hoạn và các yếu tố bất khả kháng khác',
      'b. Xuất hiện yếu tố mang lại hiệu quả cao hơn cho dự án khi đã được chủ đầu tư chứng minh về hiệu quả tài chính, kinh tế - xã hội do việc điều chỉnh dự án mang lại',
      'c. Khi quy hoạch xây dựng thay đổi có ảnh hưởng trực tiếp tới dự án',
      'd. Cả a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của pháp luật về môi trường, những loại dự án nào phải lập báo cáo đánh giá tác động môi trường?',
    options: [
      'a. Dự án quan trọng quốc gia',
      'b. Dự án đầu tư xây dựng đô thị mới, khu dân cư tập trung',
      'c. Dự án khai thác, sử dụng nước dưới đất và tài nguyên thiên nhiên có quy mô lớn',
      'd. Cả a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Trường hợp công việc được xác định rõ về số lượng, khối lượng, thời gian thực hiện ngắn thì áp dụng hình thức hợp đồng nào là hợp lý nhất?',
    options: [
      'a. Hợp đồng trọn gói',
      'b. Hợp đồng theo đơn giá',
      'c. Hợp đồng theo thời gian',
      'd. Hợp đồng theo đơn giá cố định',
    ],
    correct: 0
  },
  {
    question: 'Trường hợp công việc chưa đủ điều kiện để xác định chính xác về số lượng hoặc khối lượng thì nên áp dụng hình thức hợp đồng nào là thích hợp nhất?',
    options: [
      'a. Hợp đồng trọn gói',
      'b. Hợp đồng theo đơn giá cố định',
      'c. Hợp đồng theo thời gian',
      'd. Hợp đồng theo tỷ lệ phần trăm',
    ],
    correct: 1
  },
  {
    question: 'Bên giao thầu có quyền chấm dứt hợp đồng trong các trường hợp nào sau đây?',
    options: [
      'a. Bên nhận thầu bị phá sản hoặc Bên nhận thầu không thực hiện công việc theo hợp đồng 45 ngày liên tục mà không có lý do',
      'b. Bên nhận thầu chuyển nhượng lợi ích của hợp đồng xây dựng cho bên khác mà không có nêu trong hợp đồng đã ký kết',
      'c. Bao gồm các đáp án a và b',
      'd. Việc chấm dứt hợp đồng là do bên giao thầu quyết định',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định của pháp luật về xây dựng, bản vẽ thiết kế xây dựng trong hồ sơ đề nghị cấp giấy phép xây dựng là bản vẽ của bước thiết kế nào?',
    options: [
      'a. Thiết kế cơ sở',
      'b. Thiết kế kỹ thuật hoặc thiết kế bản vẽ thi công đã được thẩm định, phê duyệt theo quy định',
      'c. Thiết kế bản vẽ thi công đã được thẩm định, phê duyệt',
      'd. Một trong phương án a, b hoặc c',
    ],
    correct: 1
  },
  {
    question: 'Khi khởi công xây dựng công trình yêu cầu phải có các điều kiện nào dưới đây?',
    options: [
      'a. Có mặt bằng xây dựng để bàn giao toàn bộ hoặc từng phần theo tiến độ xây dựng',
      'b. Có thiết kế bản vẽ thi công của hạng mục công trình, công trình khởi công đã được phê duyệt',
      'c. Đáp ứng cả điều kiện nêu tại a và b',
      'd. Chỉ cần đáp ứng điều kiện a hoặc b',
    ],
    correct: 2
  },
  {
    question: 'Ai có thẩm quyền phê duyệt điều chỉnh dự án đầu tư xây dựng?',
    options: [
      'a. Người quyết định đầu tư',
      'b. Chủ đầu tư',
      'c. Ban quản lý dự án',
      'd. Cơ quan quản lý nhà nước có thẩm quyền',
    ],
    correct: 0
  },
  {
    question: 'Cơ quan chuyên môn về xây dựng là cơ quan nào?',
    options: [
      'a. Cơ quan chuyên môn thuộc Bộ Xây dựng',
      'b. Cơ quan chuyên môn thuộc Bộ Giao thông vận tải, Bộ Công thương, Bộ Nông nghiệp và phát triển nông thôn',
      'c. Các Sở Xây dựng, Sở Giao thông vận tải, Sở Công thương, Sở Nông nghiệp và phát triển nông thôn',
      'd. Bao gồm cả a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Theo quy định của Luật Xây dựng, công tác thẩm định dự án, thiết kế là việc kiểm tra, đánh giá của ai?',
    options: [
      'a. Người quyết định đầu tư, chủ đầu tư, cơ quan chuyên môn về xây dựng',
      'b. Cơ quan chuyên môn của người quyết định đầu tư',
      'c. Người quyết định đầu tư, chủ đầu tư',
      'd. Tổ chức tư vấn có đủ điều kiện năng lực hoạt động xây dựng',
    ],
    correct: 0
  },
  {
    question: 'Đối với dự án sử dụng vốn đầu tư công, người quyết định đầu tư có thể giao đơn vị nào sau đây làm chủ đầu tư ?',
    options: [
      'a. Ban quản lý dự án đầu tư xây dựng chuyên ngành, Ban quản lý dự án đầu tư xây dựng khu vực;',
      'b. Cơ quan, tổ chức có kinh nghiệm, năng lực quản lý;',
      'c. Đáp án a và b đúng',
      'd. Đơn vị được giao khai thác vận hành công trình',
    ],
    correct: 2
  },
  {
    question: 'Việc điều chỉnh dự án đầu tư xây dựng sử dụng vốn đầu tư công đã được phê duyệt do ai quyết định?',
    options: [
      'a. Người quyết định đầu tư',
      'b. Chủ đầu tư',
      'c. Cơ quan chuyên môn về xây dựng',
      'd. Bao gồm cả a, b và c',
    ],
    correct: 0
  },
  {
    question: 'Ban quản lý dự án đầu tư xây dựng một dự án là tổ chức như thế nào sau đây ?',
    options: [
      'a. Là tổ chức trực thuộc chủ đầu tư',
      'b. Được sử dụng con dấu riêng, được mở tài khoản tại kho bạc nhà nước hoặc ngân hàng thương mại',
      'c. Chịu trách nhiệm trước pháp luật và chủ đầu tư về hoạt động quản lý dự án của mình.',
      'd. Bao gồm tất cả những nội dung trên',
    ],
    correct: 3
  },
  {
    question: 'Tổ chức tư vấn lập dự án đầu tư xây dựng có các nghĩa vụ gì?',
    options: [
      'a. Thực hiện theo nội dung hợp đồng đã được ký kết với chủ đầu tư',
      'b. Chịu trách nhiệm về chất lượng công việc theo hợp đồng đã được ký kết;',
      'c. Bồi thường thiệt hại khi sử dụng thông tin, tài liệu, tiêu chuẩn, quy chuẩn kỹ thuật, giải pháp kỹ thuật, tổ chức quản lý không phù hợp và vi phạm hợp đồng làm thiệt hại cho chủ đầu tư',
      'd. Bao gồm a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Hồ sơ của hợp đồng xây dựng gồm các tài liệu nào dưới đây?',
    options: [
      'a. Văn bản thông báo trúng thầu hoặc chỉ định thầu',
      'b. Các bản vẽ thiết kế và chỉ dẫn kỹ thuật (nếu có), Biên bản đàm phán hợp đồng',
      'c. Bao gồm đáp án a và b',
      'd. Không cần các tài liệu quy định tại a và b',
    ],
    correct: 2
  },
  {
    question: 'Hợp đồng xây dựng có hiệu lực pháp lý khi đáp ứng các điều kiện nào sau đây?',
    options: [
      'a. Người tham gia ký kết có đầy đủ năng lực hành vi dân sự;',
      'b. Đáp ứng các nguyên tắc ký kết hợp đồng theo quy định',
      'c. Hình thức hợp đồng bằng văn bản và được ký kết bởi người đại diện đúng thẩm quyền theo pháp luật của các bên tham gia hợp đồng. Trường hợp một bên tham gia hợp đồng là tổ chức thì bên đó phải ký tên, đóng dấu theo quy định của pháp luật.',
      'd. Cần đáp ứng đầy đủ các điều kiện ở trên',
    ],
    correct: 3
  },
  {
    question: 'Đối với dự án đầu tư xây dựng sử dụng vốn đầu tư công thì Báo cáo nghiên cứu tiền khả thi đầu tư xây dựng được lập theo quy định nào?',
    options: [
      'a. Pháp luật về xây dựng',
      'b. Pháp luật về đầu tư công',
      'c. Pháp luật về xây dựng và pháp luật về đầu tư công',
      'd. Pháp luật về đầu tư công, pháp luật về đầu tư, pháp luật xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Hội đồng thẩm định hoặc đơn vị được giao nhiệm vụ thẩm định dự án PPP thẩm định Báo cáo nghiên cứu khả thi dự án PPP thì phải tuân thủ theo quy định của pháp luật nào sau đây ?',
    options: [
      'a. Pháp luật về đầu tư xây dựng',
      'b. Pháp luật về đầu tư theo phương thức đối tác công tư',
      'c. Pháp luật về đầu tư công',
      'd. Pháp luật về đầu tư và đầu tư công',
    ],
    correct: 1
  },
  {
    question: 'Quyết định phê duyệt dự án đầu tư xây dựng không bao gồm nội dung nào sau đây?',
    options: [
      'a. Tổ chức tư vấn lập Báo cáo nghiên cứu khả thi (Báo cáo kinh tế - kỹ thuật) đầu tư xây dựng, tổ chức lập khảo sát xây dựng (nếu có); tổ chức tư vấn lập thiết kế cơ sở;',
      'b. Địa điểm xây dựng và diện tích đất sử dụng;',
      'c. Phương án lựa chọn nhà thầu;',
      'd. Loại, nhóm dự án; loại, cấp công trình chính; thời hạn sử dụng theo thiết kế của công trình chính;',
    ],
    correct: 2
  },
  {
    question: 'Trong trường hợp nào sau đây, Cơ quan chuyên môn về xây dựng được từ chối tiếp nhận hồ sơ trình thẩm định Báo cáo nghiên cứu khả thi đầu tư xây dựng?',
    options: [
      'a. Trình thẩm định không đúng với thẩm quyền của cơ quan chuyên môn về xây dựng hoặc người đề nghị thẩm định không đúng thẩm quyền theo quy định',
      'b. Không thuộc đối tượng phải thẩm định tại cơ quan chuyên môn về xây dựng theo quy định',
      'c. Hồ sơ trình thẩm định không bảo đảm về tính pháp lý hoặc không hợp lệ theo quy định',
      'd. Tất cả các trường hợp trên',
    ],
    correct: 3
  },
  {
    question: 'Trong trường hợp thuê tư vấn quản lý dự án, chủ đầu tư có trách nhiệm gì?',
    options: [
      'a. Giám sát việc thực hiện hợp đồng tư vấn quản lý dự án;',
      'b. Xử lý các vấn đề có liên quan giữa tổ chức tư vấn quản lý dự án với các nhà thầu trong quá trình thực hiện dự án;',
      'c. Giám sát việc thực hiện hợp đồng của các nhà thầu thi công và giám sát thi công',
      'd. Xử lý các vấn đề có liên quan giữa tổ chức tư vấn quản lý dự án với chính quyền địa phương trong quá trình thực hiện dự án;',
    ],
    correct: 0
  },
  {
    question: 'Cá nhân đề nghị cấp chứng chỉ hành nghề hoạt động xây dựng yêu cầu phải đáp ứng các điều kiện chung gì?',
    options: [
      'a. Có đủ năng lực hành vi dân sự theo quy định của pháp luật',
      'b. Có trình độ chuyên môn được đào tạo, thời gian và kinh nghiệm tham gia công việc phù hợp với nội dung đề nghị cấp chứng chỉ hành nghề và phải đạt kết quả sát hạch theo quy định',
      'c. Bao gồm a và b',
      'd. Chỉ cần đạt được kết quả sát hạch theo quy định là đủ',
    ],
    correct: 2
  },
  {
    question: 'Tổ chức đề nghị cấp chứng chỉ năng lực hoạt động xây dựng yêu cầu phải đáp ứng các điều kiện gì?',
    options: [
      'a. Những cá nhân chủ chốt của tổ chức phải có chứng chỉ hành nghề phù hợp với lĩnh vực và hạng năng lực mà tổ chức đề nghị cấp chứng chỉ năng lực',
      'b. Tổ chức đã thực hiện công việc tương tự loại, cấp công trình',
      'c. Phải có thời gian tham gia hoạt động xây dựng tối thiểu 3 năm',
      'd. Đáp ứng cả điều kiện a và b ở trên',
    ],
    correct: 3
  },
  {
    question: 'Nhà thầu phụ phải chịu trách nhiệm với ai về công việc do mình thực hiện?',
    options: [
      'a. Chủ đầu tư',
      'b. Thầu chính hoặc tổng thầu',
      'c. Chủ đầu tư và thầu chính hoặc tổng thầu',
      'd. Chịu trách nhiệm với ai là căn cứ vào các điều khoản cam kết trong hợp đồng xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Trường hợp phải thuê thầu phụ để thực hiện một số phần việc trong hợp đồng đã ký kết với chủ đầu tư thì cần phải có chấp thuận của ai?',
    options: [
      'a. Người quyết định đầu tư',
      'b. Chủ đầu tư',
      'c. người quyết định đầu tư hoặc chủ đầu tư tùy thuộc vào từng gói thầu',
      'd. Không cần phải có sự chấp thuận của cơ quan, tổ chức nào',
    ],
    correct: 1
  },
  {
    question: 'Bảo đảm thực hiện hợp đồng xây dựng phải được nộp cho bên giao thầu khi nào?',
    options: [
      'a. Trước thời điểm hợp đồng có hiệu lực',
      'b. Sau khi hợp đồng được ký kết',
      'c. Trước khi khởi công xây dựng công trình',
      'd. Bao gồm cả a, b và c',
    ],
    correct: 0
  },
  {
    question: 'Bảo đảm thực hiện hợp đồng của nhà thầu thi công xây dựng có hiệu lực đến khi nào?',
    options: [
      'a. Đến khi nhà thầu đã hoàn thành các nghĩa vụ theo hợp đồng',
      'b. Sau khi chủ đầu tư đã nhận được bảo đảm bảo hành của nhà thầu',
      'c. Đáp án a hoặc b do hai bên thỏa thuận trong hợp đồng',
      'd. Sau khi công việc theo hợp đồng đã hoàn thành bàn giao chủ chủ đầu tư',
    ],
    correct: 2
  },
  {
    question: 'Cá nhân không có chứng chỉ hành nghề được tham gia các hoạt động xây dựng theo quy định nào sau đây là đúng?',
    options: [
      'a. Được tham gia các hoạt động xây dựng thuộc lĩnh vực phù hợp với chuyên ngành được đào tạo, phù hợp với quy định của Bộ luật Lao động',
      'b. Không được hành nghề độc lập, không được đảm nhận chức danh theo quy định phải có chứng chỉ hành nghề.',
      'c. Tuân thủ cả quy định a và b',
      'd. Được tham gia các hoạt động xây dựng đối với những dự án nhóm C, công trình cấp II trở xuống',
    ],
    correct: 2
  },
  {
    question: 'Theo quy định của pháp luật xây dựng, cá nhân khi thực hiện các hoạt động xây dựng nào sau đây không cần phải có chứng chỉ hành nghề ?',
    options: [
      'a. Thiết kế, giám sát hệ thống thông tin liên lạc, viễn thông trong công trình',
      'b. Thiết kế, giám sát thi công hệ thống kết cấu công trình xây dựng',
      'c. Không nội dung nào ở trên',
      'd. Cả a và b đúng',
    ],
    correct: 0
  },
  {
    question: 'Tổ chức hoạt động xây dựng mới được thành lập có những cá nhân có chứng chỉ hành nghề hạng 1 phù hợp với lĩnh vực mà tổ chức đề nghị cấp chứng chỉ năng lực hoạt động xây dựng, nhưng chưa ký hợp đồng để thực hiện bất kể công việc gì trong hoạt động đầu tư xây dựng thì có được cấp chứng chỉ năng lực hoạt động xây dựng hạng 1 không?',
    options: [
      'a. Có',
      'b. Không',
      'c. Có, nhưng chỉ được xem cấp chứng chỉ hành năng lực cho lĩnh vực định giá xây dựng',
      'd. Có, nhưng chỉ được xem cấp chứng chỉ hành năng lực cho các lĩnh vực giám sát thi công xây dựng, kiểm định xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Bước thiết kế công trình xây dựng nào mới đủ điều kiện để khởi công xây dựng công trình?',
    options: [
      'a. Thiết kế cơ sở',
      'b. Thiết kế kỹ thuật',
      'c. Thiết kế bản vẽ thi công',
      'd. Một trong ba bước thiết kế trên đều được',
    ],
    correct: 2
  },
];
