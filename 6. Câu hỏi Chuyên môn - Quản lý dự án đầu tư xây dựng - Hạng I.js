const questions = [
  {
    question: 'Hao phí vật liệu luân chuyển (ván khuôn, giàn giáo, cầu công tác…) phục vụ công tác thi công có chiều cao dưới 3,6m, được tính ở đâu trong định mức dự toán xây dựng?',
    options: [
      'a. Vật liệu khác.',
      'b. Vật liệu không luân chuyển trong vật liệu chính.',
      'c. Vật liệu luân chuyển trong vật liệu chính.',
      'd. Máy thi công.',
    ],
    correct: 2
  },
  {
    question: 'Ai phải chịu chi phí thí nghiệm vật liệu xây dựng, cấu kiện và bán thành phẩm trong quá trình thi công:',
    options: [
      'a. Đơn vị tư vấn giám sát phải chịu vì thực hiện theo yêu cầu của cán bộ giám sát thi công.',
      'b. Đơn vị thi công phải chịu để được ký nghiệm thu công việc.',
      'c. Đơn vị thi công phải chịu vì đã được tính vào chi phí chung trong dự toán xây dựng công trình.',
      'd. Đơn vị thi công phải chịu vì đã được tính vào đơn giá vật liệu trong dự toán xây dựng công trình.',
    ],
    correct: 2
  },
  {
    question: 'Lãi định mức của nhà thầu thi công xây dựng đã được tính trong dự toán xây dựng công trình hay chưa?',
    options: [
      'a. Chưa.',
      'b. Đã tính trong phần chi phí chung.',
      'c. Đã tính trong phần thu nhập chịu thuế tính trước.',
      'd. Do nhà thầu tiết kiệm chi phí trong quá trình thi công.',
    ],
    correct: 2
  },
  {
    question: 'Phân tích tài chính theo quan điểm của chủ sở hữu là:',
    options: [
      'a. Xem xét tổng dòng ngân lưu chi cho dự án và tổng dòng ngân lưu thu về.',
      'b. Xem xét tổng dòng ngân lưu chi không bao gồm thuế và lãi vay.',
      'c. Xem xét dòng ngân lưu thu có vốn vay ngân hàng và dòng ngân lưu chi có khoản trả lãi vay và nợ gốc.',
      'd. Xem xét tổng dòng ngân lưu thu vào không bao gồm trợ cấp và ưu đãi khác.',
    ],
    correct: 2
  },
  {
    question: 'Hợp đồng thi công xây dựng Trụ sở Ủy ban nhân dân huyện X được ký kết giữa bên giao thầu và bên nhận thầu có giá trị hợp đồng là 100 tỷ đồng, giá trị tạm ứng tối thiểu cho hợp đồng xây dựng này là bao nhiêu?',
    options: [
      'a. 20 tỷ đồng.',
      'b. 15 tỷ đồng.',
      'c. 12 tỷ đồng.',
      'd. 10 tỷ đồng.',
    ],
    correct: 3
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
    question: 'Cá nhân nào không phải ký biên bản nghiệm thu công việc xây dựng?',
    options: [
      'a. Người trực tiếp giám sát thi công của chủ đầu tư.',
      'b. Người trực tiếp thiết kế công trình.',
      'c. Người trực tiếp phụ trách kỹ thuật thi công của nhà thầu thi công xây dựng hoặc tổng thầu, nhà thầu chính.',
      'd. Câu a và',
    ],
    correct: 1
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
    question: 'Có 2 phương án A và B với IRRB > IRRA > MARR, phương án được chọn là:',
    options: [
      'a. Phương án A.',
      'b. Phương án B.',
      'c. Chưa xác định.',
      'd. Câu a và',
    ],
    correct: 2
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
    question: 'Tìm câu trả lời sai - Chỉ tiêu NPV có nhược điểm là:',
    options: [
      'a. Phụ thuộc nhiều vào suất chiết khấu.',
      'b. Chưa nói lên được hiệu quả sử dụng vốn.',
      'c. Không được sử dụng để lựa chọn các phương án/dự án loại bỏ nhau nếu tuổi thọ khác nhau.',
      'd. Phải xác định rõ ràng dòng thu chi của dự án.',
    ],
    correct: 2
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
    question: 'Tìm câu trả lời sai- "Suất thu lời nội tại IRR là…":',
    options: [
      'a. Khả năng cho lãi của dự án.',
      'b. Lãi suất vay vốn đầu tư.',
      'c. Nếu dùng nó làm suất chiết khấu thì NPV= 0.',
      'd. Là lãi suất cao nhất có thể vay vốn để đầu tư mà không bị lỗ.',
    ],
    correct: 1
  },
  {
    question: 'Phân tích độ nhạy trong dự án đầu tư với mục đích:',
    options: [
      'a. Xác định các yếu tố có tác động đến các chỉ tiêu hiệu quả của dự án.',
      'b. Xác định các yếu tố có tác động lớn đến chỉ tiêu hiệu quả của dự án.',
      'c. Xác định các yếu tố có tác động nhỏ đến chỉ tiêu hiệu quả của dự án.',
      'd. Xác định các yếu tố rủi ro đến chỉ tiêu hiệu quả của dự án.',
    ],
    correct: 1
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
    question: 'Kết quả của kỹ thuật mô phỏng trong phân tích hiệu quả dự án đầu tư là:',
    options: [
      'a. Chuỗi giá trị biến kết quả tương ứng với từng tình huống giả định.',
      'b. Chuỗi giá trị biến rủi ro đầu vào tương ứng với từng tình huống giả định.',
      'c. Biểu đồ phân phối cùng với xác suất tương ứng với từng giá trị của biến kết quả.',
      'd. Biểu đồ phân phối cùng với xác suất tương ứng với từng giá trị của biến rủi ro đầu vào.',
    ],
    correct: 3
  },
  {
    question: 'Doanh nghiệp thường chọn dự án có thời gian hoàn vốn ngắn để:',
    options: [
      'a. Giảm rủi ro.',
      'b. Giảm ứ đọng vốn.',
      'c. Tăng tốc độ luân chuyển vốn.',
      'd. Tất cả các ý trên.',
    ],
    correct: 3
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
    question: 'Phân tích hiệu quả kinh tế - xã hội sử dụng:',
    options: [
      'a. Suất chiết khấu dự án dùng trong phân tích hiệu quả tài chính.',
      'b. Suất chiết khấu xã hội.',
      'c. Suất chiết khấu thị trường.',
      'd. Suất chiết khấu doanh nghiệp.',
    ],
    correct: 1
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
    question: 'Suất vốn đầu tư do Bộ Xây dựng công bố:',
    options: [
      'a. Thống nhất trên toàn quốc.',
      'b. Đã bao gồm vốn lưu động ban đầu và lãi vay trong thời gian thực hiện đầu tư xây dựng.',
      'c. Chưa bao gồm vốn lưu động ban đầu và lãi vay trong thời gian thực hiện đầu tư xây dựng.',
      'd. Chưa có thuế giá trị gia tăng.',
    ],
    correct: 2
  },
  {
    question: 'Mức bảo đảm thực hiện hợp đồng (trong điều kiện bình thường) được xác định trong khoảng:',
    options: [
      'a. 1% đến 5%.',
      'b. 2% đến 10%.',
      'c. 5% đến 15%.',
      'd. 5% đến 20%.',
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
    question: 'Các phương pháp điều chỉnh tiến độ dự án đầu tư xây dựng:',
    options: [
      'a. Thay đổi mối quan hệ giữa các công tác.',
      'b. Điều chỉnh nguồn tài nguyên cho dự án.',
      'c. Câu a và',
      'b. d. Câu a hoặc',
    ],
    correct: 2
  },
  {
    question: 'Mua bảo hiểm trong hoạt động xây dựng là một hình thức kiểm soát phòng ngừa rủi ro theo cách thức nào?',
    options: [
      'a. Né tránh rủi ro',
      'b. Chuyển dịch rủi ro theo hợp đồng.',
      'c. Chuyển dịch rủi ro.',
      'd. Chấp nhận rủi ro.',
    ],
    correct: 1
  },
  {
    question: 'Quy trình quản lý rủi ro bao gồm:',
    options: [
      'a. Nhận dạng rủi ro - Phân tích rủi ro - Đánh giá rủi ro - Kiểm soát rủi ro - Ứng phó rủi ro.',
      'b. Nhận dạng rủi ro - Phân tích rủi ro - Đánh giá rủi ro - Ứng phó rủi ro - Kiểm soát rủi ro.',
      'c. Phân tích rủi ro - Nhận dạng rủi ro - Đánh giá rủi ro - Ứng phó rủi ro - Kiểm soát rủi ro.',
      'd. Phân tích rủi ro - Nhận dạng rủi ro - Đánh giá rủi ro - Kiểm soát rủi ro - Ứng phó rủi ro.',
    ],
    correct: 1
  },
  {
    question: 'Trang bị dụng cụ bảo hộ lao động trên công trường là biện pháp nào trong việc xử lý rủi ro?',
    options: [
      'a. Giảm thiểu rủi ro.',
      'b. Phòng ngừa rủi ro.',
      'c. Câu a và',
      'b. d. Dự phòng yếu tố bất ngờ.',
    ],
    correct: 2
  },
  {
    question: 'Vì sao chi phí dự phòng đối với dự án đầu tư xây dựng quy mô lớn và phức tạp thường cao hơn các dự án khác?',
    options: [
      'a. Do nhiều đơn vị có liên quan nên có nhiều yêu cầu mới đặt ra khiến phải thay đổi thiết kế trong quá trình thực hiện để đáp ứng, từ đó chi phí phát sinh tăng lên.',
      'b. Do thời gian thực hiện dự án đầu tư xây dựng quy mô lớn và phức tạp thường dài hơn và nhiều yếu tố rủi ro hơn.',
      'c. Do sử dụng nhiều chủng loại vật liệu và máy móc thiết bị hơn.',
      'd. Câu a, b và',
    ],
    correct: 1
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
    question: 'Nghiệm thu chạy thử không tải thiết bị công nghệ để làm gì?',
    options: [
      'a. Đánh giá chất lượng lắp đặt.',
      'b. Đánh giá tình trạng thiết bị khi chạy không tải.',
      'c. Phát hiện và loại trừ sai sót.',
      'd. Câu a, b và',
    ],
    correct: 3
  },
  {
    question: 'Nghiệm thu chạy thử không tải chỉ được đánh giá là đạt khi nào?',
    options: [
      'a. Đã chạy thử liên tục theo quy định.',
      'b. Thông số dây chuyền phù hợp với thiết kế và công nghệ.',
      'c. Không xảy ra sự cố kỹ thuật đáng kể.',
      'd. Câu a, b và',
    ],
    correct: 3
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
    question: 'Thành phần cấp phối của bê tông được xác định bằng phương pháp nào trước khi thi công xây dựng?',
    options: [
      'a. Dựa trên loại, cấp bê tông được quy định trong thiết kế',
      'b. Dựa trên cơ sở thiết kế công thức trộn.',
      'c. Dựa trên thí nghiệm trong phòng với vật liệu dự kiến sẽ sử dụng.',
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
    question: 'Một cao ốc văn phòng chuẩn bị khởi công trong khu vực quy hoạch được xây dựng tối đa 30 tầng. Quy mô xây dựng trong giấy phép xây dựng là 25 tầng. Chủ đầu tư có được xây dựng 28 tầng không?',
    options: [
      'a. Không được.',
      'b. Được xây dựng và phải điều chỉnh giấy phép xây dựng trước khi tiến hành thi công xây dựng.',
      'c. Được xây dựng và phải điều chỉnh giấy phép trong quá trình thi công xây dựng.',
      'd. Được xây dựng và phải điều chỉnh giấy phép sau khi xây dựng xong.',
    ],
    correct: 1
  },
  {
    question: 'Công trình X thuộc danh mục công trình có ảnh hưởng lớn đến an toàn, lợi ích cộng đồng, sử dụng nguồn vốn khác. Việc kiểm tra công tác nghiệm thu công trình xây dựng phải được cơ quan nhà nước có thẩm quyền kiểm tra hay không?',
    options: [
      'a. Không bắt buộc có cơ quan nhà nước có thẩm quyền kiểm tra.',
      'b. Phải được cơ quan nhà nước có thẩm quyền kiểm tra.',
      'c. Do chủ đầu tư quyết định.',
      'd. Do người quyết định đầu tư quyết định.',
    ],
    correct: 1
  },
  {
    question: 'Thời gian dự trữ toàn phần của công tác trong tiến độ là:',
    options: [
      'a. Là khoảng thời gian mà một công tác có thể bị trì hoãn mà không ảnh hưởng đến thời gian bắt đầu của các công tác kế tiếp.',
      'b. Là khoảng thời gian mà một công tác có thể bị trì hoãn mà không ảnh hưởng đến thời gian hoàn thành của dự án.',
      'c. Là khoảng thời gian mà một công tác có thể phải thực hiện để đảm bảo tiến độ dự án.',
      'd. Câu a, b và',
    ],
    correct: 1
  },
  {
    question: 'Thời gian riêng phần của công tác trong tiến độ là:',
    options: [
      'a. Là khoảng thời gian mà một công tác có thể bị trì hoãn mà không ảnh hưởng đến thời gian bắt đầu của các công tác kế tiếp.',
      'b. Là khoảng thời gian mà một công tác có thể bị trì hoãn mà không ảnh hưởng đến thời gian hoàn thành của dự án.',
      'c. Là khoảng thời gian mà một công tác có thể phải thực hiện để đảm bảo tiến độ dự án.',
      'd. Câu a, b và',
    ],
    correct: 0
  },
  {
    question: 'Công tác găng là công tác:',
    options: [
      'a. Có thời gian dự trữ riêng phần khác không.',
      'b. Có thời gian dự trữ toàn phần khác không.',
      'c. Có thời gian dự trữ toàn phần bằng không.',
      'd. Có thời gian thực hiện dài nhất.',
    ],
    correct: 2
  },
  {
    question: 'Chọn đáp án sai - Dự phòng phí cho yếu tố trượt giá trong tổng mức đầu tư phụ thuộc vào:',
    options: [
      'a. Độ dài thời gian thực hiện dự án',
      'b. Tiến độ phân bổ vốn',
      'c. Mức độ biến động của vật tư.',
      'd. Mức độ phức tạp của dự án.',
    ],
    correct: 3
  },
  {
    question: 'Phân tích địa điểm dự án đầu tư xây dựng là phân tích về:',
    options: [
      'a. Điều kiện tự nhiên và hiện trạng địa điểm đầu tư xây dựng.',
      'b. Hạ tầng kỹ thuật và hạ tầng xã hội.',
      'c. Câu a và',
      'b. d. Câu a hoặc',
    ],
    correct: 2
  },
  {
    question: 'Các kỹ thuật phân tích rủi ro tài chính (thông dụng) của dự án đầu tư:',
    options: [
      'a. Phân tích SWOT; phân tích xu hướng.',
      'b. Phân tích báo cáo tài chính; phân tích tỷ số tài chính.',
      'c. Phân tích độ nhạy; phân tích tình huống; phân tích mô phỏng.',
      'd. Câu a, b và',
    ],
    correct: 2
  },
  {
    question: 'Tính khả thi của dự án đầu tư gồm:',
    options: [
      'a. Tính hợp pháp và tính hợp lý.',
      'b. Tính thực tiễn và tính hiệu quả.',
      'c. Câu a hoặc',
      'b. d. Câu a và',
    ],
    correct: 3
  },
  {
    question: 'Đối với quản lý đầu tư xây dựng công trình bí mật nhà nước, việc tổ chức thực hiện dự án đầu tư xây dựng từ chuẩn bị dự án, thực hiện dự án và kết thúc xây dựng đưa công trình của dự án vào khai thác, sử dụng được thực hiện:',
    options: [
      'a. Theo quy định của pháp luật về bảo vệ bí mật nhà nước',
      'b. Theo pháp luật về đầu tư xây dựng',
      'c. Quy định cụ thể trong quyết định phê duyệt dự án hoặc quyết định đầu tư.',
      'd. Tất cả đáp án đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Trường hợp nào được điều chỉnh dự án đầu tư xây dựng sử dụng vốn nhà nước:',
    options: [
      'a. Khi điều chỉnh thiết kế cơ sở',
      'b. Khi quy hoạch xây dựng thay đổi có ảnh hưởng trực tiếp tới dự án',
      'c. Khi điều chỉnh cơ cấu trong tổng mức đầu tư.',
      'd. Tất cả đáp án đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Phương án thiết kế sơ bộ là thành phần hồ sơ của giai đoạn nào sau đây:',
    options: [
      'a. Lập báo cáo nghiên cứu tiền khả thi',
      'b. Lập báo cáo đề xuất chủ trương đầu tư',
      'c. Lập báo cáo nghiên cứu khả thi',
      'd. Đáp án a và b đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Lập báo cáo đánh giá tác động môi trường (ĐTM) phải thực hiện trước khi phê duyệt nội dung nào sau đây:',
    options: [
      'a. Phê duyệt chủ trương đầu tư',
      'b. Phê duyệt dự án đầu tư',
      'c. Phê duyệt thiết kế',
      'd. Tất cả đáp án đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Việc quyết định áp dụng Mô hình thông tin công trình (BIM) trong hoạt động xây dựng và quản lý vận hành công trình được thực hiện trong giai đoạn nào sau đây:',
    options: [
      'a. Phê duyệt chủ trương đầu tư',
      'b. Phê duyệt dự án đầu tư',
      'c. Phê duyệt thiết kế',
      'd. Tất cả đáp án đều đúng',
    ],
    correct: 1
  },
  {
    question: 'Ban quản lý dự án chuyên ngành được giao làm chủ đầu tư, thì chủ thể nào được quyền phê duyệt thiết kế xây dựng triển khai sau thiết kế cơ sở:',
    options: [
      'a. Ban quản lý dự án chuyên ngành',
      'b. Ban quản lý dự án đầu tư xây dựng một dự án trực thuộc Ban quản lý dự án chuyên ngành nếu được ủy quyền',
      'c. Đáp án a và b đều đúng',
      'd. Không có đáp án nào đúng',
    ],
    correct: 2
  },
  {
    question: 'Nội dung quản lý dự án đầu tư xây dựng gồm các hoạt động quản lý nào dưới đây:',
    options: [
      'a. Phạm vi, kế hoạch công việc',
      'b. Khối lượng công việc; chất lượng xây dựng',
      'c. Tiến độ thực hiện; chi phí đầu tư xây dựng; an toàn trong thi công xây dựng',
      'd. Cả (a), (b) và (c) đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Quyết định chủ trương chuyển đổi mục đích sử dụng rừng (Đối với dự án phải chuyển đổi mục đích sử dụng rừng) phải phù hợp với quy hoạch nào sau đây:',
    options: [
      'a. Quy hoạch lâm nghiệp cấp quốc gia',
      'b. Quy hoạch tỉnh',
      'c. Quy hoạch sử dụng đất cấp huyện',
      'd. Tất cả đáp án đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Điều kiện chuyển mục đích sử dụng rừng sang mục đích khác',
    options: [
      'a. Được cơ quan nhà nước có thẩm quyền quyết định chủ trương chuyển mục đích sử dụng rừng sang mục đích khác',
      'b. Có phương án trồng rừng thay thế được cơ quan nhà nước có thẩm quyền phê duyệt',
      'c. Phù hợp quy hoạch sử dụng đất cấp huyện',
      'd. Tất cả đáp án đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Công trình khai thác nước mặt cho mục đích sản xuất nông nghiệp, nuôi trồng thủy sản có quy mô khai thác nào sau đây phải thực hiện cấp phép:',
    options: [
      'a. > 0,5 m³/giây',
      'b. > 1,0 m³/giây',
      'c. > 5,0 m³/giây',
      'd. Tất cả đáp án điều đúng',
    ],
    correct: 3
  },
  {
    question: 'Tìm câu trả lời chưa chính xác trong các phương án sau, phương án A và B của 1 dự án có tuổi thọ và vốn đầu tư như nhau. Phương án A sẽ được chọn vì:',
    options: [
      'a. Thời gian hoàn vốn của A nhanh hơn của B',
      'b. NPV của A lớn hơn của B',
      'c. Chi phí vận hành hàng năm của A nhỏ hơn B',
      'd. IRRA> IRRB> MARR',
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
    question: 'Đối với các dự án đầu tưphục vụ công cộng thì:',
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
    question: 'Lựa chọn câu đúng nhất. Dự án đầu tư xây dựng có độ nhạy cao là:',
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
    question: 'Dự án đầu tư xây dựng do:',
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
    question: 'Tất cả các dự án đầu tư xây dựng đều phải:',
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
    question: 'Nội dung công việc nào dưới đây thuộc trách nhiệm của chủ đầu tư về quản lý an toàn lao động trong quá trình thi công xây dựng của chủ đầu tư?',
    options: [
      'a. Giám sát việc thực hiện của nhà thầu tuân thủ các biện pháp thi công và biện pháp đảm bảo an toàn đã được phê duyệt',
      'b. Nghiệm thu khối lượng thi công xây dựng',
      'c. Kiểm tra chất lượng các hạng mục thi công xây dựng.',
      'd. Tất cả các trách nhiệm nêu tại Điểm a, b, c',
    ],
    correct: 0
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
      'c. Các quyết định phải là bản chính, các tài liệukhác trong hồ sơ đề nghị cấp phép xây dựng là bản sao điện tử',
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
