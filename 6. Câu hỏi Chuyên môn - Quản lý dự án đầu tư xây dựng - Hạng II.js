const questions = [
  {
    question: 'Nội dung và thứ tự ưu tiên tài liệu kèm theo hồ sơ hợp đồng được xác lập:',
    options: [
      'a. Không cần thể hiện trong hợp đồng vì đã được quy định của bởi văn bản pháp luật xây dựng.',
      'b. Không quan trọng vì các bên tự giải quyết khi có tranh chấp.',
      'c. Các bên tham gia thống nhất trong hợp đồng.',
      'd. Theo thời gian phát hành hồ sơ.',
    ],
    correct: 2
  },
  {
    question: 'Chi phí khấu hao tính trong giá ca máy là khoản chi:',
    options: [
      'a. Về hao mòn của máy, thiết bị thi công trong thời gian sử dụng.',
      'b. Về sửa chữa máy móc trong thời gian thi công.',
      'c. Về bảo trì máy móc thiết bị thi công trong thời gian sử dụng.',
      'd. Về nhiên liệu, lương và các chi phí khác trong thời gian sử dụng.',
    ],
    correct: 0
  },
  {
    question: 'Hao phí vật liệu luân chuyển (ván khuôn, giàn giáo, cầu công tác…) phục vụ công tác thi công có chiều cao dưới 3,6m, được tính trong dự toán xây dựng công trình chưa?',
    options: [
      'a. Chưa.',
      'b. Đã được tính trong định mức dự toán xây dựng công trình.',
      'c. Đã được tính ở phần chi phí chung trong bảng dự toán xây dựng công trình.',
      'd. Nhà thầu phải chịu vì đã tính khấu hao tài sản cố định của nhà thầu.',
    ],
    correct: 1
  },
  {
    question: 'Lãi định mức của nhà thầu thi công xây dựng được tính trong dự toán xây dựng công trình hay chưa?',
    options: [
      'a. Chưa.',
      'b. Đã tính trong phần chi phí chung.',
      'c. Đã tính trong phần thu nhập chịu thuế tính trước.',
      'd. Do nhà thầu tiết kiệm chi phí trong quá trình thi công.',
    ],
    correct: 2
  },
  {
    question: 'Hợp đồng tư vấn xây dựng gói thầu B, sử dụng vốn Nhà nước ngoài đầu tư công được ký kết giữa bên giao thầu và bên nhận thầu có giá trị hợp đồng là 20 tỷ đồng, giá trị tạm ứng tối thiểu cho hợp đồng tư vấn xây dựng này là bao nhiêu?',
    options: [
      'a. 5 tỷ đồng.',
      'b. 4 tỷ đồng.',
      'c. 3 tỷ đồng.',
      'd. 2 tỷ đồng.',
    ],
    correct: 2
  },
  {
    question: 'Chi phí nào dưới đây không thuộc thành phần chi phí hạng mục chung trong dự toán xây dựng công trình',
    options: [
      'a. Chi phí quan trắc biến dạng công trình.',
      'b. Chi phí đảm bảo an toàn giao thông phục vụ thi công (nếu có).',
      'c. Chi phí nhà tạm tại hiện trường để ở và điều hành thi công.',
      'd. Chi phí thí nghiệm vật liệu của nhà thầu.',
    ],
    correct: 0
  },
  {
    question: 'Khi điều chỉnh giá trị dự toán gói thầu thuộc dự án đã phê duyệt dẫn tới phải điều chỉnh tổng mức đầu tư xây dựng (sử dụng hết chi phí dự phòng) nhưng không làm thay đổi mức đầu tư đã phê duyệt thì cách thức xử lý là:',
    options: [
      'a. Người quyết định đầu tư tổ chức điều chỉnh.',
      'b. Chủ đầu tư tự tổ chức điều chỉnh cơ cấu các khoản mục chi phí, báo cáo người quyết định đầu tư và chịu trách nhiệm về việc điều chỉnh của mình.',
      'c. Theo quy định không được phép điều chỉnh.',
      'd. Chủ đầu tư tự tổ chức điều chỉnh và chịu trách nhiệm về việc điều chỉnh của mình.',
    ],
    correct: 1
  },
  {
    question: 'Chủ thể nào có trách nhiệm lập tiến độ chi tiết thi công xây dựng công trình?',
    options: [
      'a. Chủ đầu tư.',
      'b. Nhà thầu thiết kế xây dựng công trình.',
      'c. Nhà thầu tư vấn giám sát thi công xây dựng.',
      'd. Nhà thầu thi công xây dựng công trình.',
    ],
    correct: 3
  },
  {
    question: 'Chi phí nào có trong tổng mức đầu tư mà không có trong tổng dự toán xây dựng công trình?',
    options: [
      'a. Chi phí xây dựng.',
      'b. Lãi vay trong thời gian đầu tư xây dựng.',
      'c. Chi phí tư vấn đầu tư.',
      'd. Dự phòng phí.',
    ],
    correct: 1
  },
  {
    question: 'Có 2 phương án A và B, vốn đầu tư ban đầu của B lớn hơn của A với IRRB > IRRA và IRRA < MARR thì phương án được chọn là:',
    options: [
      'a. Phương án A.',
      'b. Phương án B.',
      'c. Cả phương án A và phương án B đều bị loại.',
      'd. Chưa xác định.',
    ],
    correct: 3
  },
  {
    question: 'Có 2 phương án có số vốn ban đầu bỏ ra bằng nhau, thu nhập hoàn vốn hàng năm bằng nhau, khi đó:',
    options: [
      'a. Phương án có tuổi thọ dài hơn sẽ bị loại bỏ.',
      'b. Phương án có tuổi thọ dài hơn sẽ được chọn.',
      'c. Chưa xác định.',
      'd. Cả hai phương án đều bị loại bỏ.',
    ],
    correct: 2
  },
  {
    question: 'Trong phân tích kinh tế - xã hội của dự án đầu tư, thuế thu nhập doanh nghiệp:',
    options: [
      'a. Là một khoản do doanh nghiệp phải bỏ ra để nộp cho nhà nước nên phải tính vào dòng chi.',
      'b. Là một khoản mà Nhà nước và xã hội được hưởng từ doanh nghiệp nên được tính vào dòng thu.',
      'c. Không coi là chi phí cũng không được tính vào dòng thu.',
      'd. Không câu nào đúng.',
    ],
    correct: 1
  },
  {
    question: 'Đối với các dự án đầu tư phục vụ công cộng thì:',
    options: [
      'a. Phải đạt hiệu quả cao về mặt tài chính.',
      'b. Phải có hiệu quả về mặt kinh tế - xã hội.',
      'c. Phải đạt hiệu quả cả về tài chính và kinh tế - xã hội.',
      'd. Hoàn toàn không quan tâm đến hiệu quả về mặt tài chính.',
    ],
    correct: 1
  },
  {
    question: 'Nội dung nào sau đây không phải là mục đích của việc lập dự án đầu tư xây dựng:',
    options: [
      'a. Là một phương án sản xuất kinh doanh hàng năm của doanh nghiệp.',
      'b. Là cơ sở để xây dựng kế hoạch thực hiện đầu tư.',
      'c. Là cơ sở để thẩm định và quyết định tài trợ vốn.',
      'd. Là căn cứ đề nghị vay vốn, hưởng ưu đãi đầu tư.',
    ],
    correct: 0
  },
  {
    question: 'Một dự án đầu tư có 3 phương án thực hiện, khi đó mối quan hệ giữa 3 phương án sẽ là:',
    options: [
      'a. Phụ thuộc nhau.',
      'b. Độc lập với nhau.',
      'c. Loại trừ nhau.',
      'd. Bổ sung nhau.',
    ],
    correct: 2
  },
  {
    question: 'Tìm câu trả lời sai - "Dự án đầu tư xây dựng là cơ sở để…":',
    options: [
      'a. Quyết định đầu tư xây dựng.',
      'b. Bố trí kế hoạch vốn đầu tư.',
      'c. Điều chỉnh quy hoạch xây dựng.',
      'd. Xây dựng kế hoạch thực hiện đầu tư.',
    ],
    correct: 2
  },
  {
    question: 'Chọn câu đúng - "Phân tích tình huống trong dự án đầu tư là phương pháp phân tích rủi ro, trong đó…":',
    options: [
      'a. Giả định các chỉ tiêu hiệu quả của dự án tác động đến các biến rủi ro đầu vào của dự án.',
      'b. Giả định các biến rủi ro đầu vào của dự án theo các tình huống của thị trường nhằm xem xét các chỉ tiêu hiệu quả của dự án trong từng tình huống.',
      'c. Giả định từng biến rủi ro đầu vào của dự án theo các tình huống của thị trường nhằm xem xét các chỉ tiêu hiệu quả của dự án trong từng tình huống.',
      'd. Giả định một hoặc hai biến rủi ro đầu vào của dự án tác động đến các chỉ tiêu hiệu quả của dự án.',
    ],
    correct: 1
  },
  {
    question: 'Vai trò của đầu tư xây dựng là:',
    options: [
      'a. Thúc đẩy tăng trưởng kinh tế.',
      'b. Tăng cường khả năng công nghệ của đất nước.',
      'c. Tác động chuyển dịch cơ cấu kinh tế.',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Đánh giá, lựa chọn dự án đầu tư trong phân tích hiệu quả tài chính cần xem xét chỉ tiêu:',
    options: [
      'a. NPV.',
      'b. NPV và IRR.',
      'c. NPV, IRR và thời gian hoàn vốn.',
      'd. NPV hoặc IRR hoặc thời gian hoàn vốn.',
    ],
    correct: 2
  },
  {
    question: 'Suất thu lời nội tại IRR là:',
    options: [
      'a. Khả năng cho lãi của dự án.',
      'b. Suất chiết khấu của dự án.',
      'c. Chi phí sử dụng vốn của dự án.',
      'd. Không câu nào đúng.',
    ],
    correct: 0
  },
  {
    question: 'Mức độ chính xác của giá thành sản phẩm xây dựng phụ thuộc vào:',
    options: [
      'a. Mức độ chi tiết, chính xác của thiết kế.',
      'b. Mức độ chính xác của giá cả các yếu tố đầu vào.',
      'c. Năng lực của các kỹ sư.',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Giá hợp đồng theo đơn giá cố định được tính toán đầy đủ cho yếu tố:',
    options: [
      'a. Thay đổi khối lượng công việc.',
      'b. Trượt giá trong thời gian thực hiện hợp đồng.',
      'c. Câu a hoặc',
      'b. d. Câu a và',
    ],
    correct: 1
  },
  {
    question: 'Phương pháp điều chỉnh giá hợp đồng xây dựng bao gồm:',
    options: [
      'a. Phương pháp bù trừ trực tiếp.',
      'b. Phương pháp điều chỉnh bằng công thức điều chỉnh.',
      'c. Phương pháp bù trừ trực tiếp và phương pháp trọng số.',
      'd. Câu a và',
    ],
    correct: 3
  },
  {
    question: 'Khi điều chỉnh tiến độ hợp đồng làm kéo dài tiến độ thực hiện hợp đồng (bao gồm cả thời gian được kéo dài tiến độ thực hiện hợp đồng theo quy định của hợp đồng xây dựng) thì:',
    options: [
      'a. Chủ đầu tư và nhà thầu thỏa thuận, thống nhất việc điều chỉnh.',
      'b. Chủ đầu tư và nhà thầu thỏa thuận, thống nhất việc điều chỉnh và sau đó phải báo cáo với người quyết định đầu tư.',
      'c. Chủ đầu tư và nhà thầu thỏa thuận, thống nhất việc điều chỉnh nhưng trước đó phải báo cáo với người quyết định đầu tư.',
      'd. Chủ đầu tư phải báo cáo Người có thẩm quyền quyết định đầu tư xem xét, quyết định.',
    ],
    correct: 3
  },
  {
    question: 'Những công tác nào phải được giám sát chặt chẽ trong quá trình thi công xây dựng công trình?',
    options: [
      'a. Chỉ những công tác quan trọng.',
      'b. Mọi công tác thi công xây dựng.',
      'c. Những công việc sau này bị che khuất do vật liệu khác lấp phủ.',
      'd. Những công tác ảnh hưởng đến việc thi công tiếp theo.',
    ],
    correct: 1
  },
  {
    question: 'Những yêu cầu nào đối với công tác giám sát trong quá trình thi công xây dựng công trình?',
    options: [
      'a. Giám sát thi công đúng thiết kế được phê duyệt, đúng tiêu chuẩn, quy chuẩn áp dụng, quy định về quản lý, sử dụng vật liệu xây dựng, chỉ dẫn kỹ thuật và hợp đồng xây dựng.',
      'b. Giám sát theo đúng yêu cầu của chủ đầu tư.',
      'c. Giám sát theo yêu cầu của Ban quản lý dự án.',
      'd. Giám sát theo hướng dẫn của chuyên gia.',
    ],
    correct: 0
  },
  {
    question: 'Nhà thầu phải lập, trình chủ đầu tư chấp thuận kế hoạch tổng hợp về an toàn lao động khi nào?',
    options: [
      'a. Theo tiến độ thực hiện hợp đồng.',
      'b. Trước khi thi công công việc quan trọng của công trình.',
      'c. Trước khi khởi công xây dựng công trình.',
      'd. Khi nào chủ đầu tư yêu cầu.',
    ],
    correct: 2
  },
  {
    question: 'Quản lý rủi ro trong dự án đầu tư được thực hiện:',
    options: [
      'a. Trong suốt quá trình quản lý dự án.',
      'b. Cho các công tác có nguy cơ gây ra thiệt hại lớn cho dự án.',
      'c. Cho các công tác găng trên tiến độ dự án.',
      'd. Theo yêu cầu của chủ đầu tư.',
    ],
    correct: 0
  },
  {
    question: 'Huấn luyện an toàn lao động trên công trường là biện pháp nào trong việc xử lý rủi ro?',
    options: [
      'a. Giảm thiểu rủi ro.',
      'b. Phòng ngừa rủi ro.',
      'c. Chuyển giao rủi ro.',
      'd. Dự phòng yếu tố bất ngờ.',
    ],
    correct: 1
  },
  {
    question: 'Chọn đáp án sai - Đơn giá xây dựng chi tiết của công trình được xác định trên cơ sở:',
    options: [
      'a. Định mức xây dựng',
      'b. Giá vật tư, vật liệu, cấu kiện xây dựng.',
      'c. Định mức chi phí tư vấn xây dựng.',
      'd. Giá nhân công, giá ca máy và thiết bị thi công.',
    ],
    correct: 2
  },
  {
    question: 'Kế hoạch tổng hợp về an toàn lao động đã được chủ đầu tư chấp thuận có được điều chỉnh trong quá trình thi công không?',
    options: [
      'a. Có, nếu kiểm tra thấy kế hoạch đã được lập không đảm bảo an toàn.',
      'b. Có, do nhà thầu quyết định nếu thấy cần thiết.',
      'c. Có, do chủ đầu tư quyết định nếu thấy cần thiết.',
      'd. Không được điều chỉnh.',
    ],
    correct: 0
  },
  {
    question: 'Nội dung nào sau đây là phân tích độ nhạy trong dự án đầu tư?',
    options: [
      'a. Đánh giá sự thay đổi của NPV khi giá nguyên vật liệu đầu vào của dự án có một số thay đổi (tăng, giảm).',
      'b. Đánh giá sự thay đổi của NPV khi giá nguyên vật liệu đầu vào và giá bán sản phẩm dự án cùng thay đổi (tăng, giảm).',
      'c. Đánh giá sự thay đổi của IRR khi giá bán sản phẩm của dự án có một số thay đổi (tăng, giảm).',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Vốn vay ngắn hạn ngân hàng của dự án đầu tư là để:',
    options: [
      'a. Bổ sung vốn lưu động cho dự án.',
      'b. Bổ sung vốn cố định cho dự án.',
      'c. Mua cổ phiếu của dự án.',
      'd. Mua máy móc thiết bị nâng cấp công nghệ cho dự án.',
    ],
    correct: 0
  },
  {
    question: 'Trình tự nghiệm thu thiết bị đã lắp đặt gồm:',
    options: [
      'a. Nghiệm thu tĩnh - Nghiệm thu chạy thử không tải - Nghiệm thu chạy thử có tải.',
      'b. Nghiệm thu chạy thử không tải - Nghiệm thu chạy thử có tải - Nghiệm thu tĩnh.',
      'c. Nghiệm thu chạy thử có tải - Nghiệm thu chạy thử không tải - Nghiệm thu tĩnh.',
      'd. Theo yêu cầu của chủ đầu tư.',
    ],
    correct: 0
  },
  {
    question: 'Trong quá trình triển khai thực hiện dự án, việc kiểm tra thực hiện tiến độ các công việc bằng cách nào?',
    options: [
      'a. Kiểm tra kết quả thực hiện so với tiến độ chi tiết đã được chủ đầu tư phê duyệt',
      'b. Kiểm tra thường xuyên qua báo cáo, thống kê.',
      'c. Kiểm tra đột xuất trên sơ đồ tiến độ tại thời điểm kiểm tra (tính theo tỷ lệ thực hiện).',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Bộ phận điều hành dự án của chủ đầu tư có trách nhiệm gì trong quản lý về an toàn lao động trong quá trình thi công xây dựng công trình?',
    options: [
      'a. Giám sát việc thực hiện của nhà thầu tuân thủ các biện pháp thi công và biện pháp đảm bảo an toàn đã được phê duyệt.',
      'b. Giám sát tuân thủ các quy phạm kỹ thuật an toàn trong thi công xây dựng.',
      'c. Kiểm tra, báo cáo chủ đầu tư xử lý vi phạm, dừng thi công và yêu cầu khắc phục khi nhà thầu vi phạm các quy định về an toàn trên công trường.',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Khi nào cần phải tiến hành quan trắc biến dạng (lún, chuyển dịch ngang) trong thi công xây dựng công trình?',
    options: [
      'a. Khi công trình có sự cố hoặc nguy cơ xảy ra sự cố.',
      'b. Trong suốt quá trình xây dựng.',
      'c. Khi có quy định trong thiết kế được duyệt.',
      'd. Khi Tư vấn giám sát yêu cầu.',
    ],
    correct: 1
  },
  {
    question: 'Các chi phí nào sau đây không được đưa vào quyết toán hợp đồng xây dựng?',
    options: [
      'a. Các chi phí phát sinh do điều chỉnh thiết kế xây dựng.',
      'b. Các chi phí của các khối lượng phá đi làm lại do lỗi của nhà thầu.',
      'c. Chi phí thiệt hại do nguyên nhân bất khả kháng theo quy định của pháp luật.',
      'd. Câu a, b và',
    ],
    correct: 1
  },
  {
    question: 'Công tác giám sát lắp đặt thiết bị công nghệ bao gồm các nội dung nào dưới đây?',
    options: [
      'a. Giám sát trước lắp đặt.',
      'b. Giám sát quá trình lắp đặt.',
      'c. Giám sát quá trình thử nghiệm và nghiệm thu.',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Khi giám sát chạy thử thiết bị công nghệ cần thực hiện công việc kiểm tra nào dưới đây?',
    options: [
      'a. Kiểm tra tổng thể thiết bị trước khi chạy thử.',
      'b. Kiểm tra quy trình, tiêu chuẩn áp dụng, trình tự chạy thử.',
      'c. Kiểm tra lệnh chạy thử.',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Quy định nào là đúng về việc phân kỳ đầu tư ?',
    options: [
      'a. Được thể hiện trong Báo cáo nghiên cứu khả thi đầu tư xây dựng và quyết định đầu tư xây dựng,',
      'b. Phù hợp với tiến độ, thời gian thực hiện dự án trong nội dung quyết định hoặc chấp thuận chủ trương đầu tư xây dựng',
      'c. Câu a và b đều đúng.',
      'd. Các câu a, b và c đều sai.',
    ],
    correct: 2
  },
  {
    question: 'Quản lý quy mô trong dự án đầu tư xây dựng là gì?',
    options: [
      'a. Xác định phạm vi dự án.',
      'b. Lập kế hoạch quản lý quy mô.',
      'c. Kiểm soát thay đổi quy mô.',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Chủ thể nào quyết định việc điều chỉnh dự án đầu tư xây dựng sử dụng nguồn vốn khác?',
    options: [
      'a. Chủ đầu tư.',
      'b. Người quyết định đầu tư.',
      'c. Cơ quan quản lý nhà nước khu vực có dự án.',
      'd. Đơn vị cấp phép xây dựng.',
    ],
    correct: 1
  },
  {
    question: 'Chi phí rà phá bom mìn và vật liệu nổ thuộc chi phí nào trong tổng mức đầu tư?',
    options: [
      'a. Chi phí bồi thường, hỗ trợ và tái định cư.',
      'b. Chi phí xây dựng.',
      'c. Chi phí khác.',
      'd. Chi phí tư vấn đầu tư.',
    ],
    correct: 2
  },
  {
    question: 'Cấp công trình được xác định theo các tiêu chí nào sau đây?',
    options: [
      'a. Kích thước (dài, rộng, cao) của công trình; tải trọng lớn nhất của công trình.',
      'b. Quy mô kết cấu; tải trọng lớn nhất của công trình.',
      'c. Mức độ quan trọng, quy mô công suất; quy mô kết cấu.',
      'd. Quy mô kết cấu; kích thước (dài, rộng, cao) của công trình.',
    ],
    correct: 2
  },
  {
    question: 'Công trình A (công trình độc lập) nếu áp dụng tiêu chí mức độ quan trọng, quy mô công suất thuộc công trình cấp I, nếu áp dụng tiêu chí quy mô kết cấu thuộc công trình cấp II. Vậy công trình A thuộc công trình cấp mấy?',
    options: [
      'a. Cấp I.',
      'b. Cấp II.',
      'c. Câu a hoặc b đều đúng.',
      'd. Cần bổ sung thêm tải trọng lớn nhất của công trình trước khi xác định cấp công trình A.',
    ],
    correct: 0
  },
  {
    question: 'Chọn đáp án đúng:',
    options: [
      'a. Trong bảng tiến độ đường găng là đường có tổng thời gian ngắn nhất.',
      'b. Trong bảng tiến độ đường găng là đường có tổng thời gian dài nhất.',
      'c. Trong bảng tiến độ luôn luôn chỉ có một đường găng.',
      'd. Tổng thời gian các công tác găng sẽ bằng thời gian của đường găng.',
    ],
    correct: 1
  },
  {
    question: 'Kiểm soát tiến độ sẽ ưu tiên cho các công tác:',
    options: [
      'a. Công tác có thời gian thực hiện dài.',
      'b. Cho tất cả công tác.',
      'c. Công tác găng.',
      'd. Công tác không găng.',
    ],
    correct: 2
  },
  {
    question: 'Chủ thể nào phải lập tiến độ chi tiết của gói thầu thi công xây dựng?',
    options: [
      'a. Chủ đầu tư.',
      'b. Ban quản lý dự án.',
      'c. Nhà thầu thi công xây dựng.',
      'd. Câu a, b và',
    ],
    correct: 2
  },
  {
    question: 'Quy trình quản lý chất lượng dự án đầu tư xây dựng gồm:',
    options: [
      'a. Lập kế hoạch chất lượng - Kiểm soát chất lượng - Cải tiến chất lượng - Đánh giá và báo cáo chất lượng.',
      'b. Lập kế hoạch chất lượng - Đảm bảo chất lượng - Kiểm soát chất lượng - Cải tiến chất lượng - Đánh giá và báo cáo chất lượng.',
      'c. Lập kế hoạch chất lượng - Kiểm soát chất lượng - Đảm bảo chất lượng - Cải tiến chất lượng - Đánh giá và báo cáo chất lượng.',
      'd. Lập kế hoạch chất lượng - Đảm bảo chất lượng - Kiểm soát chất lượng - Đánh giá và báo cáo chất lượng - Cải tiến chất lượng.',
    ],
    correct: 1
  },
  {
    question: 'Theo quy định hiện hành, người có thẩm quyền quyết định việc xây dựng công trình khẩn cấp là:',
    options: [
      'a. Người đứng đầu cơ quan trung ương',
      'b. Chủ tịch Ủy ban nhân dân các cấp có thẩm quyền quyết định việc xây dựng công trình khẩn cấp thuộc phạm vi quản lý bằng lệnh xây dựng công trình khẩn cấp.',
      'c. Chủ đầu tư dự án',
      'd. Đáp án a và b đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Tiến độ thi công xây dựng công trình được nhà thầu lập trước khi triển khai thi công phải đáp ứng được yêu cầu nào sau đây?',
    options: [
      'a. Phù hợp với thời gian thực hiện hợp đồng',
      'b. Phù hợp với thời gian được phê duyệt của chủ trương đầu tư',
      'c. Phải được Chủ đầu tư phê duyệt',
      'd. Đáp án a và b đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Tiến độ thi công xây dựng do nhà thầu lập phải đáp ứng các điều kiện nào sau đây?',
    options: [
      'a. Phù hợp với thời gian thực hiện hợp đồng',
      'b. Phù hợp với thời gian được phê duyệt của chủ trương đầu tư',
      'c. Phải được Chủ đầu tư phê duyệt',
      'd. Đáp án a và b đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Trong quá trình triển khai thực hiện dự án, việc điều chỉnh tổng tiến độ dự án thuộc thẩm quyền của ai?',
    options: [
      'a. Giám đốc Ban quản lý dự án khu vực hoặc Ban quản lý dự án chuyên ngành',
      'b. Người quyết định đầu tư dự án',
      'c. Chủ đầu tư, nhà thầu thi công xây dựng, tư vấn giám sát',
      'd. Đáp án a và b đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Chủ thể nào phải có trách nhiệm thông báo về nhiệm vụ, quyền hạn của các cá nhân trong hệ thống quản lý chất lượng cho các nhà thầu liên quan theo quy định:',
    options: [
      'a. Chủ đầu tư hoặc nhà thầu giám sát',
      'b. Nhà thầu thi công xây dựng',
      'c. Nhà thầu thiết kế',
      'd. Tất cả đáp án đều đúng',
    ],
    correct: 0
  },
  {
    question: 'Nội dung nào sau đây thuộc giai đoạn thực hiện dự án',
    options: [
      'a. Phê duyệt thiết kế cơ sở',
      'b. Phê duyệt quy hoạch chi tiết xây dựng',
      'c. Lập dự toán xây dựng',
      'd. Tất cả các đáp án đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Nội dung nào sau đây không thuộc giai đoạn kết thúc dự án',
    options: [
      'a. Quyết toán hợp đồng',
      'b. Quyết toán dự án hoàn thành',
      'c. Bàn giao công trình đưa vào sử dụng',
      'd. Bảo hành công trình xây dựng',
    ],
    correct: 2
  },
  {
    question: 'Nhiệm vụ khảo sát xây dựng được lập cho trường hợp nào sau đây:',
    options: [
      'a. Lập dự án đầu tư xây dựng',
      'b. Thiết kế xây dựng',
      'c. Thiết kế sửa chữa, cải tạo',
      'd. Tất cả đáp án đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Chỉ dẫn kỹ thuật của hồ sơ thiết kế xây dựng phải phù hợp với quy định nào sau đây:',
    options: [
      'a. Quy chuẩn quốc gia',
      'b. Tiêu chuẩn áp dụng cho công trình đã được phê duyệt',
      'c. Yêu cầu của thiết kế',
      'd. Tất cả đáp án đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Khi lập nhiệm vụ khảo sát ở bước thiết kế xây dựng sau, thì cần phải xem xét nội dung nào sau đây:',
    options: [
      'a. Nhiệm vụ khảo sát và kết quả khảo sát được thực hiện ở bước thiết kế trước',
      'b. Kết quả khảo sát có liên quan được thực hiện trước đó (nếu có)',
      'c. Đáp án a và b đều đúng',
      'd. Không có đáp án nào đúng',
    ],
    correct: 2
  },
  {
    question: 'Hai phương án (A và B) của 1 dự án có tuổi thọ và vốn đầu tư như nhau.Phương án A sẽ được chọn vì:',
    options: [
      'a. Thời gian hoàn vốn của A nhanh hơn của B',
      'b. NPV của A lớn hơn của B',
      'c. Chi phí vận hành hàng năm của A nhỏ hơn B',
      'd. IRRA> IRRB> MARR',
    ],
    correct: 2
  },
  {
    question: 'Có 2 phương án A và B với IRRB>IRRA>MARR, phương án được chọn là:',
    options: [
      'a. Phương án A',
      'b. Phương án B',
      'c. Chưa xác định',
      'd. Cả phương án A và phương án B',
    ],
    correct: 2
  },
  {
    question: 'Có 2 phương án A và B, vốn đầu tư ban đầu của B lớn hơn của A với IRRB>IRRA và IRRA<MARR thì phương án được chọn là:',
    options: [
      'a. Phương án A',
      'b. Phương án B',
      'c. Cả Phương án A và B đều bị loại',
      'd. Chưa xác định',
    ],
    correct: 3
  },
  {
    question: 'Có 2 phương án có số vốn ban đầu bỏ ra bằng nhau, thu nhập hoàn vốn hàng năm bằng nhau, khi đó:',
    options: [
      'a. Phương án có tuổi thọ dài hơn sẽ bị loại bỏ',
      'b. Phương án có tuổi thọ dài hơn sẽ được chọn',
      'c. Chưa xác định',
      'd. Cả hai phương án đều bị loại bỏ',
    ],
    correct: 2
  },
  {
    question: 'Trong phân tích kinh tế - xã hội của dự án đầu tư, thuế thu nhập doanh nghiệp:',
    options: [
      'a. Là một khoản do doanh nghiệp phải bỏ ra để nộp cho nhà nước nên phải tính vào dòng chi.',
      'b. Là một khoản mà Nhà nước và xã hội được hưởng từ doanh nghiệp nên được tính vào dòng thu.',
      'c. Không coi là chi phí cũng không được tính vào dòng thu',
      'd. Không câu nào đúng',
    ],
    correct: 1
  },
  {
    question: 'Đối với các dự án đầu tư phục vụ công cộng thì:',
    options: [
      'a. Phải đạt hiệu quả cao về mặt tài chính',
      'b. Phải có hiệu quả về mặt kinh tế - xã hội',
      'c. Phải đạt hiệu quả cả về tài chính và kinh tế - xã hội',
      'd. Hoàn toàn không quan tâm đến hiệu quả về mặt tài chính',
    ],
    correct: 1
  },
  {
    question: 'Một dự án có NPV = 0, vậy:',
    options: [
      'a. NFV > 0',
      'b. NFV = 0',
      'c. NFV < 0',
      'd. Chưa xác định',
    ],
    correct: 1
  },
  {
    question: 'Tìm câu trả lời sai đối với các đáp án dưới đây - Chỉ tiêu NPV có nhược điểm là:',
    options: [
      'a. Phụ thuộc nhiều vào suất chiết khấu',
      'b. Chưa nói lên được hiệu quả sử dụng của một đồng vốn',
      'c. Không được sử dụng để lựa chọn các phương án/dự án loại bỏ nhau nếu tuổi thọ khác nhau',
      'd. Phải xác định rõ ràng dòng thu chi của dự án',
    ],
    correct: 2
  },
  {
    question: 'Nội dung nào sau đây không phải là tác dụng của dự án đầu tư:',
    options: [
      'a. Là một phương án sản xuất kinh doanh hàng năm của doanh nghiệp.',
      'b. Là cơ sở để xây dựng kế hoạch thực hiện đầu tư.',
      'c. Là cơ sở để thẩm định và quyết định tài trợ vốn.',
      'd. Là căn cứ đề nghị vay vốn, hưởng ưu đãi đầu tư.',
    ],
    correct: 0
  },
  {
    question: 'Một dự án đầu tư có 3 phương án thực hiện, khi đó mối quan hệ giữa 3 phương án sẽ là:',
    options: [
      'a. Phụ thuộc nhau',
      'b. Độc lập với nhau',
      'c. Loại trừ nhau',
      'd. Bổ sung nhau',
    ],
    correct: 2
  },
  {
    question: 'Vì sao phải có thiết kế cơ sở trong hồ sơ Báo cáo nghiên cứu khả thi:',
    options: [
      'a. Là cơ sở để quản lý dự án.',
      'b. Không phải là cơ sở để lập Tổng mức đầu tư.',
      'c. Là căn cứ để quyết định đầu tư xây dựng.',
      'd. Là cơ sở để tiến hành lập Dự toán xây dựng công trình.',
    ],
    correct: 2
  },
  {
    question: 'Tìm câu trả lời sai đối với các đáp án dưới đây: Dự án đầu tư có vai trò:',
    options: [
      'a. Là cơ sở để quyết định đầu tư xây dựng.',
      'b. Là cơ sở để bố trí kế hoạch vốn đầu tư.',
      'c. Là cơ sở đề điều chỉnh quy hoạch xây dựng.',
      'd. Là cơ sở để xây dựng kế hoạch thực hiện đầu tư',
    ],
    correct: 2
  },
  {
    question: 'Tìm câu trả lời sai: Dự án đầu tư có vai trò:',
    options: [
      'a. Là văn kiện cơ bản để người có thẩm quyền quyết định đầu tư xây dựng.',
      'b. Là một bộ phận trong hợp đồng giữa chủ đầu tư và nhà thầu thi công xây dựng',
      'c. Là căn cứ để theo dõi đánh giá và điều chỉnh những tồn đọng, vướng mắc trong quá trình thực hiện và khai thác dự án',
      'd. Có tác dụng tích cực để giải quyết những vấn đề nảy sinh trong quan hệ giữa các bên liên quan',
    ],
    correct: 1
  },
  {
    question: 'Tìm câu trả lời sai. Suất thu lời nội tại IRR là:',
    options: [
      'a. Khả năng cho lãi của dự án',
      'b. Lãi suất vay vốn đầu tư',
      'c. Nếu dùng nó làm suất chiết khấu thì NPV=0',
      'd. Là lãi suất cao nhất có thể vay vốn để đầu tư mà không bị lỗ',
    ],
    correct: 1
  },
  {
    question: 'Tìm câu trả lời sai. Phân tích kinh tế - xã hội nhằm mục đích:',
    options: [
      'a. Đảm bảo cho lợi ích của chủ đầu tư không trái với lợi ích của Nhà nước và xã hội',
      'b. Thuyết phục cơ quan có thẩm quyền chấp nhận dự án',
      'c. Tìm đối tác liên doanh',
      'd. Tranh thủ sự ủng hộ của nhân dân và chính quyền địa phương',
    ],
    correct: 2
  },
  {
    question: 'Doanh nghiệp thường chọn dự án đầu tư xây dựng có thời gian hoàn vốn ngắn để:',
    options: [
      'a. Giảm rủi ro',
      'b. Giảm ứ đọng vốn',
      'c. Tăng tốc độ luân chuyển vốn',
      'd. Tất cả các ý trên',
    ],
    correct: 3
  },
  {
    question: 'Lựa chọn câu đúng nhất đối với các đáp án dưới đây - Dự án đầu tư xây dựng có độ nhạy cao là:',
    options: [
      'a. Dự án có độ rủi ro cao.',
      'b. Dự án có các chỉ tiêu hiệu quả thay đổi nhiều khi các yếu tố liên quan đến chúng thay đổi.',
      'c. Dự án có các yếu tố đầu vào dễ thay đổi.',
      'd. Dự án có các yếu tố đầu vào ít thay đổi.',
    ],
    correct: 1
  },
  {
    question: 'Vai trò của đầu tư xây dựng là:',
    options: [
      'a. Thúc đẩy tăng trưởng kinh tế',
      'b. Tăng cường khả năng công nghệ của đất nước',
      'c. Tác động chuyển dịch cơ cấu kinh tế',
      'd. Tất cả các ý trên',
    ],
    correct: 3
  },
  {
    question: 'Dự án đầu tư xây dựng là một tập hồ sơ tài liệu trình bày một cách chi tiết một hoạt động đầu tư nhằm:',
    options: [
      'a. Đạt được mục tiêu của chủ đầu tư',
      'b. Đạt mục tiêu lợi nhuận',
      'c. Tránh lãng phí',
      'd. Tránh đầu tư dàn trải',
    ],
    correct: 0
  },
  {
    question: 'Hồ sơ dự án đầu tư xây dựng là do ai lập:',
    options: [
      'a. Chủ đầu tư hoặc tư vấn do Chủ đầu tư thuê lập',
      'b. Nhà thầu thi công xây dựng lập',
      'c. Cơ quan cho vay vốn lập',
      'd. Người có thẩm quyền quyết định đầu tư lập',
    ],
    correct: 0
  },
  {
    question: 'Chủ nhiệm lập dự án phải là người:',
    options: [
      'a. Có trình độ quản lý tốt',
      'b. Có trình độ tổng hợp về kinh tế - kỹ thuật',
      'c. Có kinh nghiệm lập dự án, có uy tín và đạo đức nghề nghiệp',
      'd. Tất cả các ý trên',
    ],
    correct: 3
  },
  {
    question: 'Trong phân tích tài chính dự án đầu tư các dòng thu chi phải xét đến giá trị thời gian của tiền là vì:',
    options: [
      'a. Do tiền có giá trị thời gian',
      'b. Thời gian xây dựng và khai thác dài',
      'c. Các khoản thu, chi của dự án phát sinh tại các thời điểm khác nhau',
      'd. Tất cả các ý trên',
    ],
    correct: 3
  },
  {
    question: 'Suất thu lời nội tại IRR là lãi suất mà nếu dùng nó làm suất chiết khấu thì:',
    options: [
      'a. NPV>0',
      'b. NPV=0',
      'c. NPV<0',
      'd. Không liên quan đến NPV',
    ],
    correct: 1
  },
  {
    question: 'Suất thu lời nội tại IRR là:',
    options: [
      'a. Khả năng cho lãi của dự án',
      'b. Suất chiết khấu của dự án',
      'c. Chi phí sử dụng vốn của dự án',
      'd. Không câu nào đúng',
    ],
    correct: 0
  },
  {
    question: 'Phân tích tài chính là việc đánh giá dự án trên góc độ của:',
    options: [
      'a. Chủ đầu tư',
      'b. Nhà thầu',
      'c. Nhà nước',
      'd. Tổ chức cho vay vốn',
    ],
    correct: 0
  },
  {
    question: 'Phân tích kinh tế - xã hội được tiến hành đứng trên góc độ lợi ích của:',
    options: [
      'a. Chủ đầu tư',
      'b. Toàn bộ nền kinh tế',
      'c. Tổ chức cho vay vốn',
      'd. Tổ chức tài trợ',
    ],
    correct: 1
  },
  {
    question: 'Các dự án đầu tư xây dựng phải được quan tâm đến yêu cầu nào?',
    options: [
      'a. Thẩm định cả về phương diện hiệu quả tài chính và hiệu quả kinh tế - xã hội',
      'b. Đối với các dự án do doanh nghiệp đầu tư thì chỉ cần quan tâm đến hiệu quả tài chính',
      'c. Đối với các dự án do Nhà nước đầu tư thì chỉ cần quan tâm đến hiệu quả kinh tế - xã hội',
      'd. Không câu nào đúng',
    ],
    correct: 0
  },
  {
    question: 'Mức độ chính xác của giá sản phẩm xây dựng phụ thuộc vào:',
    options: [
      'a. Mức độ chi tiết, chính xác của thiết kế',
      'b. Mức độ chính xác của giá cả các yếu tố đầu vào',
      'c. Năng lực của các kỹ sư',
      'd. Tất cả các ý trên',
    ],
    correct: 3
  },
  {
    question: 'Mục đích của việc kiểm soát chi phí là:',
    options: [
      'a. Đảm bảo cho chi phí hiện tại không được vượt quá tầm kiểm soát.',
      'b. Đảm bảo cho các chi phí trong tương lai không được vượt quá tầm kiểm soát.',
      'c. Cả ý a và b',
      'd. Đảm bảo chi phí thực hiện đúng như với ngân sách đã lập ra ban đầu.',
    ],
    correct: 2
  },
  {
    question: 'Định mức dự toán xây dựng công trình gồm:',
    options: [
      'a. Thành phần công việc và định mức các thành phần hao phí',
      'b. Thành phần công việc và phương pháp tính toán',
      'c. Định mức các thành phần hao phí và phương pháp tính toán',
      'd. Định mức các thành phần hao phí, phương pháp tính toán và thành phần công việc',
    ],
    correct: 0
  },
  {
    question: 'Để dự án đầu tư xây dựng đạt hiệu quả cao thì cân phải quản lý tốt các khâu nào?',
    options: [
      'a. Quản lý chất lượng xây dựng, an toàn trong quá trình thi công xây dựng',
      'b. Quản lý chi phí từ khâu lập, thẩm định, phê duyệt dự án; lập, thẩm định, phê duyệt thiết kế, dự toán',
      'c. Quản lý tiến độ thi công xây dựng',
      'd. Quản lý tất cả các khâu nêu tại Điểm a, b, c',
    ],
    correct: 3
  },
  {
    question: 'Quy trình lựa chọn nhà thầu đối với đấu thầu rộng rãi, đấu thầu hạn chế được thực hiện như thế nào?',
    options: [
      'a. Chuẩn bị lựa chọn nhà thầu',
      'b. Tổ chức lựa chọn nhà thầu;',
      'c. Đánh giá hồ sơ dự thầu, đàm phán và thương thảo ký kết hợp đồng;',
      'd. Bao gồm cả a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Việc thương thảo hợp đồng xây dựng phải dựa trên cơ sở nào sau đây?',
    options: [
      'a. Báo cáo đánh giá hồ sơ dự thầu của tổ chuyên gia;',
      'b. Mẫu hợp đồng đã điền đầy đủ các thông tin cụ thể của gói thầu;',
      'c. Các yêu cầu nêu trong hồ sơ mời thầu; Hồ sơ dự thầu và các tài liệu giải thích làm rõ hồ sơ dự thầu của nhà thầu (nếu có)',
      'd. Tất cả các cơ sở nêu tại Điểm a, b, c',
    ],
    correct: 3
  },
  {
    question: 'Thương thảo hợp đồng xây dựng gồm những nội dung gì?',
    options: [
      'a. Nhiệm vụ và phạm vi công việc chi tiết của nhà thầu tư vấn;',
      'b. Kế hoạch công tác và bố trí nhân sự;',
      'c. Tiến độ thực hiện gói thầu',
      'd. Tất cả các nội dung nêu tại Điểm a, b, c',
    ],
    correct: 3
  },
  {
    question: 'Công trường xây dựng phải đảm bảo các yêu cầu gì?',
    options: [
      'a. Tổng mặt bằng công trường xây dựng phải được thiết kế và phê duyệt, phù hợp với địa điểm xây dựng, điều kiện cụ thể của công trường',
      'b. Vật tư, vật liệu phải được sắp xếp theo đúng thiết kế của tổng mặt bằng đã được phê duyệt.',
      'c. Phải có các biển báo về an toàn lao động cho người, máy thi công và các chỉ dẫn khác theo quy định',
      'd. Tất cả các yêu cầu nêu tại Điểm a, b, c',
    ],
    correct: 3
  },
  {
    question: 'Nội dung nào dưới đây phải được chỉ rõ trong hồ sơ tiến độ thi công xây dựng?',
    options: [
      'a. Thời gian, thời điểm, vị trí các công việc được thực hiện',
      'b. Tên của các nhà thầu thi công',
      'c. Quyết định đầu tư xây dựng',
      'd. Tất cả các nội dung nêu tại Điểm a, b và c',
    ],
    correct: 0
  },
  {
    question: 'Nội dung nào dưới đây phải được chỉ rõ trong hồ sơ tiến độ thi công xây dựng?',
    options: [
      'a. Quyết định đầu tư xây dựng',
      'b. Nhiệm vụ và phạm vi công việc chi tiết của nhà thầu',
      'c. Lao động, máy móc, thiết bị và các tài nguyên khác để đảm bảo thực hiện tiến độ',
      'd. Tất cả các nội dung nêu tại Điểm a, b và c',
    ],
    correct: 2
  },
  {
    question: 'Tiến độ thực hiện dự án đầu tư xây dựng phụ thuộc vào các yếu tố nào dưới đây?',
    options: [
      'a. Nhiệm vụ và phạm vi công việc chi tiết của nhà thầu;',
      'b. Tiến trình thực hiện các công việc phù hợp với giải pháp thực hiện đã lựa chọn, sử dụng hợp lý các nguồn lực và điều kiện kinh phí được cấp theo tiến độ của dự án;',
      'c. Tên của các nhà thầu',
      'd. Tất cả các yếu tố nêu tại Điểm a, b, c',
    ],
    correct: 1
  },
  {
    question: 'Tiến độ thực hiện dự án đầu tư xây dựng phụ thuộc vào các yếu tố nào dưới đây?',
    options: [
      'a. Tổng thời gian thực hiện và các mốc thời gian phải hoàn thành đối với từng công việc;',
      'b. Quyết định đầu tư xây dựng;',
      'c. Tổng mức đầu tư xây dựng;',
      'd. Phạm vi công việc chi tiết của nhà thầu',
    ],
    correct: 0
  },
  {
    question: 'Những công tác nào phải được giám sát chặt chẽ trong quá trình thi công xây dựng công trình?',
    options: [
      'a. Chỉ những công tác quan trọng.',
      'b. Mọi công tác thi công xây dựng.',
      'c. Những công việc sau này bị che khuất do vật liệu khác lấp phủ.',
      'd. Những công tác ảnh hưởng đến việc thi công tiếp theo.',
    ],
    correct: 1
  },
  {
    question: 'Việc giám sát thi công xây dựng được thực hiện vào thời điểm nào?',
    options: [
      'a. Giám sát vào giờ hành chính.',
      'b. Chỉ cần giám sát các công tác chủ yếu, quan trọng.',
      'c. Khi nào trên công trường diễn ra các hoạt động xây dựng.',
      'd. Khi sắp nghiệm thu công tác xây dựng thì cần giám sát.',
    ],
    correct: 2
  },
  {
    question: 'Những yêu cầu nào đối với công tác giám sát trong quá trình thi công xây dựng công trình?',
    options: [
      'a. Giám sát thi công đúng thiết kế được phê duyệt, đúng tiêu chuẩn, quy chuẩn áp dụng, quy định về quản lý, sử dụng vật liệu xây dựng, chỉ dẫn kỹ thuật và hợp đồng xây dựng',
      'b. Giám sát theo đúng ý kiến của bên thiết kế',
      'c. Giám sát theo lệnh ghi trong giấy giao việc của chủ đầu tư',
      'd. Giám sát theo hướng dẫn của chuyên gia.',
    ],
    correct: 0
  },
  {
    question: 'Nhà thầu phải lập, trình chủ đầu tư chấp thuận kế hoạch tổng hợp về an toàn lao động khi nào?',
    options: [
      'a. Trước khi khởi công xây dựng công trình',
      'b. Theo tiến độ thực hiện hợp đồng',
      'c. Trước khi thi công công việc quan trọng của công trình',
      'd. Không bắt buộc phải lập và trình chủ đầu tư',
    ],
    correct: 0
  },
  {
    question: 'Khi phát hiện nguy cơ xảy ra tai nạn lao động, sự cố mất an toàn lao động, người quản lý dự án phải làm gì?',
    options: [
      'a. Dừng thi công xây dựng',
      'b. Yêu cầu nhà thầu có biện pháp khắc phục đảm bảo an toàn',
      'c. Chỉ được tiếp tục thi công sau khi người quản lý dự án kiểm tra, chấp thuận đảm bảo an toàn',
      'd. Phải thực hiện các công việc nêu tại Điểm a, b, c',
    ],
    correct: 3
  },
  {
    question: 'Chủ đầu tư có trách nhiệm gì trong quản lý về an toàn lao động trong quá trình thi công xây dựng công trình?',
    options: [
      'a. Giám sát việc thực hiện của nhà thầu tuân thủ các biện pháp thi công và biện pháp đảm bảo an toàn đã được phê duyệt',
      'b. Giám sát tuân thủ các quy phạm kỹ thuật an toàn trong thi công xây dựng',
      'c. Kiểm tra, xử lý vi phạm, dừng thi công và yêu cầu khắc phục khi nhà thầu vi phạm các quy định về an toàn trên công trường',
      'd. Tất cả các trách nhiệm nêu tại Điểm a, b, c',
    ],
    correct: 3
  },
  {
    question: 'Nội dung công việc nào dưới đây thuộc trách nhiệm của chủ đầu tư về quản lý an toàn lao động trong quá trình thi công xây dựng?',
    options: [
      'a. Giám sát việc thực hiện của nhà thầu tuân thủ các biện pháp thi công và biện pháp đảm bảo an toàn đã được phê duyệt',
      'b. Nghiệm thu khối lượng thi công xây dựng',
      'c. Kiểm tra chất lượng các hạng mục thi công xây dựng.',
      'd. Tất cả các trách nhiệm nêu tại Điểm a, b, c',
    ],
    correct: 0
  },
  {
    question: 'Mua bảo hiểm trong hoạt động xây dựng là một hình thức kiểm soát phòng ngừa rủi ro theo cách thức nào?',
    options: [
      'a. Né tránh rủi ro',
      'b. Chuyển dịch rủi ro theo hợp đồng.',
      'c. Chuyển dịch rủi ro.',
      'd. Chấp nhận rủi ro',
    ],
    correct: 1
  },
  {
    question: 'Trong suất vốn đầu tư do Bộ Xây dựng công bố đã bao gồm các chi phí nào sau đây:',
    options: [
      'a. Chưa bao gồm thuế giá trị gia tăng.',
      'b. Đã bao gồm thuế giá trị gia tăng',
      'c. Chưa bao gồm thuế giá trị gia tăng và chi phí dự phòng.',
      'd. Chưa bao gồm thuế giá trị gia tăng nhưng đã có chi phí dự phòng.',
    ],
    correct: 1
  },
  {
    question: 'Chi phí chung trong chi phí xây dựng gồm những chi phí nào sau đây:',
    options: [
      'a. Chi phí quản lý doanh nghiệp.',
      'b. Chi phí điều hành sản xuất tại công trường, chi phí phục vụ công nhân.',
      'c. Chi phí phục vụ thi công tại công trường và một số chi phí phục vụ cho quản lý khác của doanh nghiệp;',
      'd. Tất cả các mục trên.',
    ],
    correct: 3
  },
  {
    question: 'Đơn giá xây dựng chi tiết của công trình không được xác định trên cơ sở nào sau đây?',
    options: [
      'a. Định mức xây dựng',
      'b. Giá vật tư, vật liệu, cấu kiện xây dựng,',
      'c. Định mức chi phí tư vấn xây dựng',
      'd. Giá nhân công, giá ca máy và thiết bị thi công',
    ],
    correct: 2
  },
  {
    question: 'Giá xây dựng tổng hợp bộ phận kết cấu công trình do Bộ Xây dựng công bố là:',
    options: [
      'a. Bao gồm toàn bộ chi phí cần thiết để hoàn thành một đơn vị khối lượng nhóm, loại công tác xây dựng, đơn vị kết cấu hoặc bộ phận công trình xây dựng.',
      'b. Là tổng mức đầu tư dự án.',
      'c. Chưa bao gồm thuế giá trị gia tăng',
      'd. Phương án a và',
    ],
    correct: 0
  },
  {
    question: 'Đơn vị nào sau đây chịu trách nhiệm về giá trị đề nghị thanh toán trong hồ sơ đề nghị thanh toán?',
    options: [
      'a. Chủ đầu tư hoặc đại diện hợp pháp của chủ đầu tư',
      'b. Cơ quan thanh toán vốn đầu tư',
      'c. Chủ đầu tư và cơ quan thanh toán vốn đầu tư',
      'd. Đơn vị tư vấn lập hồ sơ thanh toán',
    ],
    correct: 0
  },
  {
    question: 'Nội dung nào sau đây là sai quy định về chi phí tư vấn đầu tư xây dựng đã được phê duyệt?',
    options: [
      'a. Là chi phí tối đa để thực hiện công tác tư vấn đầu tư xây dựng',
      'b. Được điều chỉnh khi có thay đổi về đơn giá xây dựng được công bố.',
      'c. Được quản lý thông qua hợp đồng tư vấn xây dựng.',
      'd. Được điều chỉnh khi thay đổi về phạm vi công việc, điều kiện và tiến độ thực hiện công tác tư vấn đầu tư xây dựng',
    ],
    correct: 1
  },
  {
    question: 'Các yếu tố nào ảnh hưởng trực tiếp đến quá trình quản lý dự án đầu tư xây dựng?',
    options: [
      'a. Yếu tố con người lãnh đạo và quản lý',
      'b. Yếu tố xây dựng, thực hiện kế hoạch và chế độ kiểm soát, báo cáo quá trình thực hiện',
      'c. Phân định rõ trách nhiệm và mối quan hệ giữa các bên tham gia quản lý và thực hiện dự án',
      'd. Tất cả các yếu tố nêu tại Điểm a, b, c',
    ],
    correct: 3
  },
  {
    question: 'Nội dung nào dưới đây không phải là nguồn lực chính để làm căn cứ cho việc lập tiến độ thi công xây dựng?',
    options: [
      'a. Lực lượng lao động của nhà thầu',
      'b. Vật liệu chính cung cấp cho từng giai đoạn thi công xây dựng',
      'c. Nhân lực của Ban quản lý dự án',
      'd. Xe-máy, thiết bị thi công cho từng công việc và tổng hợp cho từng giai đoạn',
    ],
    correct: 2
  },
  {
    question: 'Kế hoạch tổng hợp về an toàn lao động đã được chủ đầu tư chấp thuận có được điều chỉnh trong quá trình thi công không?',
    options: [
      'a. Có, nếu kiểm tra thấy kế hoạch đã được lập không đảm bảo an toàn',
      'b. Có, do nhà thầu quyết định nếu thấy cần thiết',
      'c. Có, do chủ đầu tư quyết định nếu thấy cần thiết',
      'd. Không được điều chỉnh',
    ],
    correct: 0
  },
  {
    question: 'Vì sao chi phí dự phòng đối với dự án đầu tư xây dựng quy mô lớn và phức tạp thường cao hơn các dự án khác?',
    options: [
      'a. Do nhiều cơ quan có liên quan nên có nhiều yêu cầu mới đặt ra khiến phải thay đổi thiết kế trong quá trình thực hiện để đáp ứng, từ đó chi phí phát sinh tăng lên',
      'b. Do thời gian thực hiện dự án đầu tư xây dựng quy mô lớn và phức tạp thường dài hơn nên rủi ro nhiều hơn',
      'c. Do sử dụng nhiều chủng loại vật liệu và máy móc thiết bị hơn',
      'd. Tất cả các ý trên đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Phân tích nào sau đây là phân tích độ nhạy?',
    options: [
      'a. Đánh giá sự thay đổi của NPV khi giá nguyên vật liệu đầu vào của dự án có một số thay đổi (tăng, giảm).',
      'b. Đánh giá sự thay đổi của IRR khi giá bán sản phẩm của dự án có một số thay đổi (tăng, giảm).',
      'c. Đánh giá sự thay đổi của NPV khi giá nguyên vật liệu đầu vào và giá bán sản phẩm dự án cùng thay đổi (tăng, giảm).',
      'd. Tất cả các phương án trên',
    ],
    correct: 3
  },
  {
    question: 'Chủ đầu tư tổ chức thực hiện quản lý dự án theo hình thức nào sau đây là đúng?',
    options: [
      'a. Chủ đầu tư sử dụng tư cách pháp nhân của mình và bộ máy chuyên môn trực thuộc có đủ điều kiện, năng lực',
      'b. Chủ đầu tư thuê tổ chức, cá nhân có đủ điều kiện năng lực theo quy định để quản lý dự án',
      'c. Thực hiện theo cách a hoặc b là đúng',
      'd. Phải thuê ban quản lý dự án chuyên ngành hoặc ban quản lý dự án khu vực',
    ],
    correct: 2
  },
  {
    question: 'Vốn vay ngắn hạn ngân hàng của dự án là để:',
    options: [
      'a. Bổ sung vốn lưu động cho dự án',
      'b. Bổ sung vốn cố định cho dự án',
      'c. Mua cổ phiếu của dự án',
      'd. Mua máy móc thiết bị nâng cấp công nghệ cho dự án',
    ],
    correct: 0
  },
  {
    question: 'Hồ sơ đề nghị cấp giấy phép xây dựng gồm các tài liệu nào?',
    options: [
      'a. Các văn bản, giấy tờ, bản vẽ thiết kế trong hồ sơ đề nghị cấp phép xây dựng là bản chính hoặc bản sao có chứng thực hoặc bản sao điện tử',
      'b. Toàn bộ tài liệu trong hồ sơ đề nghị cấp phép xây dựng phải là bản gốc hoặc chính',
      'c. Các quyết định phải là bản chính, các tài liệu khác trong hồ sơ đề nghị cấp phép xây dựng là bản sao điện tử',
      'd. Các nội dung trên đều đúng',
    ],
    correct: 0
  },
  {
    question: 'Tiến độ thực hiện của dự án không thể hiện theo sơ đồ nào dưới đây?',
    options: [
      'a. Sơ đồ ngang',
      'b. Sơ đồ đứng',
      'c. Sơ đồ xiên',
      'd. Sơ đồ mạng',
    ],
    correct: 1
  },
  {
    question: 'Trong các chỉ tiêu sau, chỉ tiêu nào là giá xây dựng tổng hợp bộ phận kết cấu công trình?',
    options: [
      'a. 300 triệu đồng/ dầm bê tông cốt thép dự ứng lực mác 40Mpa, dầm I, dài 18m.',
      'b. 54 triệu đồng/cháu mẫu giáo khi quy mô đầu tư xây dựng nhà trẻ 75 < số cháu ≤ 125.',
      'c. Cả hai phương án a và',
      'b. d. Không có chỉ tiêu nào là giá xây dựng tổng hợp bộ phận kết cấu công trình.',
    ],
    correct: 0
  },
  {
    question: 'Trong quá trình quản lý thực hiện dự án, phát hiện thấy tem hiệu chuẩn của thiết bị thí nghiệm - thử nghiệm đã hết hiệu lực thì giám đốc quản lý dự án xử lý thế nào?',
    options: [
      'a. Không có ý kiến gì, vì thiết bị đã được kiểm tra trước khi chấp thuận cho phòng thí nghiệm hoạt động của dự án.',
      'b. Tiếp tục cho làm thí nghiệm, yêu cầu kiểm tra hiệu chuẩn bổ sung.',
      'c. Đình chỉ thí nghiệm, yêu cầu phòng thí nghiệm mời đơn vị có chức năng đến kiểm tra, hiệu chỉnh lại.',
      'd. Không có xử lý gì vì các phép thử trước đây cũng đã tiến hành trên chính thiết bị ấy.',
    ],
    correct: 2
  },
  {
    question: 'Nghiệm thu thang máy điện và thang máy thủy lực đủ điều kiện vận hành an toàn phải thực hiện theo trình tự nào dưới đây?',
    options: [
      'a. Thử động ở 100% tải định mức - Thử động ở 125% tải định mức - Kiểm tra tổng thể;',
      'b. Thử động ở 125% tải định mức - Thử động ở 100% tải định mức - Kiểm tra tổng thể;',
      'c. Kiểm tra tổng thể - Thử động ở 100% tải định mức - Thử động ở 125% tải định mức;',
      'd. Kiểm tra tổng thể - Thử động ở 125% tải định mức - Thử động ở 100% tải định mức.',
    ],
    correct: 2
  },
  {
    question: 'Nghiệm thu chạy thử không tải thiết bị công nghệ để làm gì?',
    options: [
      'a. Đánh giá chất lượng lắp đặt;',
      'b. Đánh giá tình trạng thiết bị khi chạy không tải;',
      'c. Phát hiện và loại trừ sai sót;',
      'd. Cả ba phương án a, b và',
    ],
    correct: 3
  },
  {
    question: 'Nghiệm thu chạy thử không tải chỉ được đánh giá là đạt khi nào?',
    options: [
      'a. Đã chạy thử liên tục theo quy định;',
      'b. Thông số dây chuyền phù hợp với thiết kế và công nghệ;',
      'c. Không xẩy ra sự cố kỹ thuật đáng kể;',
      'd. Cả ba yếu tố nêu tại a, b và',
    ],
    correct: 3
  },
  {
    question: 'Nội dung quyết định phê duyệt thiết kế xây dựng triển khai sau thiết kế cơ sở của chủ đầu tư , gồm các nội dung chủ yếu nào sau đây?',
    options: [
      'a. Người phê duyệt; Tên công trình hoặc bộ phận công trình',
      'b. Tên dự án; Loại và cấp công trình',
      'c. Địa điểm xây dựng;Thời hạn sử dụng theo thiết kế của công trình;',
      'd. Bao gồm tất cả các nội dung ở trên',
    ],
    correct: 3
  },
  {
    question: 'Ban quản lý dự án chuyên ngành, Ban quản lý dự án khu vực được thực hiện tư vấn quản lý dự án hoặc thực hiện một số công việc tư vấn cho các dự án khác, trong trường hợp nào sau đây?',
    options: [
      'a. Bảo đảm hoàn thành nhiệm vụ quản lý dự án được giao và đáp ứng yêu cầu về điều kiện năng lực theo quy định khi thực hiện công việc tư vấn',
      'b. Bảo đảm hoàn thành nhiệm vụ quản lý dự án được giao, không cần xét đến điều kiện năng lực khi thực hiện công tác tư vấn',
      'c. Khi có chủ đầu tư thuê và không cần phải xét đến điều kiện năng lực của tổ chức cũng như cá nhân thực hiện',
      'd. Đáp ứng một trong các trường hợp ở trên',
    ],
    correct: 0
  },
  {
    question: 'Trong quá trình triển khai thực hiện dự án, việc kiểm tra thực hiện tiến độ các công việc bằng cách nào?',
    options: [
      'a. Kiểm tra kết quả thực hiện so với tiến độ chi tiết đã được chủ đầu tư phê duyệt',
      'b. Kiểm tra thường xuyên qua báo cáo, thống kê.',
      'c. Kiểm tra đột xuất trên sơ đồ tiến độ tại thời điểm kiểm tra (tính theo tỷ lệ thực hiện)',
      'd. Tất cả các cách nêu tại điểm a, b, c',
    ],
    correct: 3
  },
  {
    question: 'Bộ phận điều hành dự án của chủ đầu tư có trách nhiệm gì trong quản lý về an toàn lao động trong quá trình thi công xây dựng công trình?',
    options: [
      'a. Giám sát việc thực hiện của nhà thầu tuân thủ các biện pháp thi công và biện pháp đảm bảo an toàn đã được phê duyệt',
      'b. Giám sát tuân thủ các quy phạm kỹ thuật an toàn trong thi công xây dựng',
      'c. Kiểm tra, báo cáo chủ đầu tư xử lý vi phạm, dừng thi công và yêu cầu khắc phục khi nhà thầu vi phạm các quy định về an toàn trên công trường',
      'd. Tất cả các trách nhiệm nêu tại điểm a, b, c',
    ],
    correct: 3
  },
  {
    question: 'Khi nào cần phải tiến hành quan trắc biến dạng (lún, chuyển dịch ngang) trong thi công xây dựng công trình?',
    options: [
      'a. Trong toàn bộ quá trình xây dựng',
      'b. Khi có quy định trong thiết kế được duyệt',
      'c. Khi Tư vấn giám sát yêu cầu',
      'd. Khi công trình có sự cố',
    ],
    correct: 0
  },
  {
    question: 'Thang máy điện nào bắt buộc phải có giấy chứng nhận hợp quy?',
    options: [
      'a. Thang máy PCCC;',
      'b. Thang máy tải hàng và băng ca;',
      'c. Thang máy tải khách;',
      'd. Các thang máy tại cả 3 phương án a, b và',
    ],
    correct: 3
  },
  {
    question: 'Nghiệm thu thiết bị công nghệ gồm các nội dung nào dưới đây?',
    options: [
      'a. Nghiệm thu tĩnh;',
      'b. Nghiệm thu chạy thử không tải;',
      'c. Nghiệm thu chạy thử có tải;',
      'd. Thực hiện cả ba nội dung trên.',
    ],
    correct: 3
  },
  {
    question: 'Trong tiến độ thi công xây dựng phải thể hiện rõ những nội dung gì?',
    options: [
      'a. Thời gian, thời điểm, vị trí các công việc được thực hiện',
      'b. Chi phí tiền vốn',
      'c. Sử dụng lao động, máy móc, thiết bị và các tài nguyên khác để đảm bảo thực hiện tiến độ',
      'd. Tất cả các nội dung nêu tại điểm a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Việc khai báo, điều tra, báo cáo và giải quyết sự cố mất an toàn lao động trong thi công xây dựng công trình được thực hiện theo quy định nào?',
    options: [
      'a. Luật Xây dựng 50/2014/QH13 và Luật 62/2020/QH14.',
      'b. Nghị định 06/2021/NĐ-CP về quản lý chất lượng, thi công xây dựng và bảo trì công trình xây dựng',
      'c. Luật An toàn, Vệ sinh lao động và các văn bản hướng dẫn',
      'd. Các văn bản quy định tại điểm a, b, c',
    ],
    correct: 3
  },
  {
    question: 'Để chuẩn bị cho công tác hoàn thiện cần phải thực hiện những công tác gì?',
    options: [
      'a. Phải thi công xong các việc làm dưới lớp hoàn thiện như điện, nước',
      'b. Phải lập biên bản nghiệm thu đảm bảo điều kiện để thi công hoàn thiện',
      'c. Phải chỉnh độ cao các lớp nằm dưới lớp hoàn thiện',
      'd. Phải lập biên bản cho các việc đã làm xong',
    ],
    correct: 1
  },
  {
    question: 'Đo bóc khối lượng xây dựng từ bản vẽ thiết kế kỹ thuật, thiết kế bản vẽ thi công để làm gì?',
    options: [
      'a. Xác định dự toán, lập bảng khối lượng trong hồ sơ mời thầu',
      'b. Xác định giá gói thầu, giá dự thầu',
      'c. Xác định giá hợp đồng, trường hợp chỉ định thầu, xác định giá thanh toán trong trường hợp chỉ định thầu và phương thức hợp đồng trọn gói',
      'd. Tất cả các phương án a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Các chi phí nào sau đây không được đưa vào quyết toán hợp đồng xây dựng?',
    options: [
      'a. Các chi phí thiệt hại xảy ra trong quá trình đầu tư xây dựng thuộc trách nhiệm của bảo hiểm.',
      'b. Chi phí cho khối lượng hoàn thành của các cấu kiện đúc sẵn.',
      'c. Chi phí thiệt hại do nguyên nhân bất khả kháng theo quy định của pháp luật.',
      'd. Tất cả các phương án trên.',
    ],
    correct: 0
  },
  {
    question: 'Các chi phí nào sau đây không được đưa vào quyết toán hợp đồng xây dựng?',
    options: [
      'a. Các chi phí phát sinh do điều chỉnh thiết kế xây dựng.',
      'b. Các chi phí của các khối lượng phá đi làm lại do lỗi của nhà thầu.',
      'c. Chi phí thiệt hại do nguyên nhân bất khả kháng theo quy định của pháp luật.',
      'd. Tất cả các phương án trên.',
    ],
    correct: 1
  },
  {
    question: 'Thành phần cấp phối của bê tông được xác định bằng phương pháp nào trước khi thi công xây dựng',
    options: [
      'a. Dựa trên loại, cấp bê tông được quy định trong thiết kế',
      'b. Dựa trên cơ sở thiết kế công thức trộn.',
      'c. Dựa trên thí nghiệm trong phòng với vật liệu dự kiến sẽ sử dụng.',
      'd. Thực hiện tất cả các bước nêu tại phương án a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Công tác giám sát lắp đặt thiết bị công nghệ được thực hiện khi nào?',
    options: [
      'a. Giám sát trước lắp đặt;',
      'b. Giám sát quá trình lắp đặt;',
      'c. Giám sát quá trình thử nghiệm và nghiệm thu;',
      'd. Cả ba nội dung nêu tại a, b và',
    ],
    correct: 3
  },
  {
    question: 'Khi giám sát chạy thử thiết bị công nghệ cần thực hiện công việc kiểm tra nào dưới đây?',
    options: [
      'a. Kiểm tra tổng thể thiết bị trước khi chạy thử;',
      'b. Kiểm tra quy trình, tiêu chuẩn áp dụng, trình tự chạy thử;',
      'c. Kiểm tra lệnh chạy thử',
      'd. Tất cả các nội dung nêu tại a, b và',
    ],
    correct: 3
  },
];
