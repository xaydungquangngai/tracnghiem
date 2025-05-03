const questions = [
  {
    question: 'Phải lắp đặt hệ thống thu khí bãi rác khi đóng ô chôn lấp chất thải rắn thông thường có quy mô lớn hơn hoặc bằng bao nhiêu T/năm?',
    options: [
      'a. 45.000',
      'b. 55.000',
      'c. 65.000',
      'd. 75.000',
    ],
    correct: 2
  },
  {
    question: 'Đối với lò đốt chất thải rắn thông thường phải đảm bảo các yêu cầu về môi trường tuân thủ theo quy chuẩn nào?',
    options: [
      'a. QCVN 02:2012/BTNMT',
      'b. QCVN 07:2009/BTNMT',
      'c. QCVN 25:2009/BTNMT',
      'd. QCVN 30:2012/BTNMT',
    ],
    correct: 3
  },
  {
    question: 'Tỷ lệ sử dụng đất tối đa đối với khu lò đốt trong cơ sở đốt chất thải rắn là?',
    options: [
      'a. 40 %',
      'b. 50 %',
      'c. 60 %',
      'd. 70 %',
    ],
    correct: 1
  },
  {
    question: 'Khoảng cách ATMT nhỏ nhất giữa bãi chôn lấp chất thải rắn vô cơ đến chân các công trình xây dựng khác là bao nhiêu mét?',
    options: [
      'a. Lớn hơn hoặc bằng 50 m',
      'b. Lớn hơn hoặc bằng 100 m',
      'c. Lớn hơn hoặc bằng 150 m',
      'd. Lớn hơn hoặc bằng 200 m',
    ],
    correct: 1
  },
  {
    question: 'Đối với công trình quản lý chất thải rắn phải phù hợp với những quy hoạch nào?',
    options: [
      'a. Quy hoạch xây dựng',
      'b. Quy hoạch đô thị',
      'c. Quy hoạch chuyên ngành',
      'd. Cả 03 loại quy hoạch trên',
    ],
    correct: 3
  },
  {
    question: 'Tỷ lệ sử dụng đất tối đa đối với khu chứa + phân loại chất thải rắn trước khi tái chế trong cơ sở tái chế chất thải rắn là bao nhiêu?',
    options: [
      'a. 40 %',
      'b. 50 %',
      'c. 60 %',
      'd. 70 %',
    ],
    correct: 0
  },
  {
    question: 'Tỷ lệ chất thải rắn được xử lý bằng công nghệ chôn lấp không vượt quá bao nhiêu % tổng lượng chất thải rắn được thu gom',
    options: [
      'a. Không vượt quá 15%',
      'b. Không vượt quá 20 %',
      'c. Không vượt quá 25%',
      'd. Không vượt quá 30%',
    ],
    correct: 0
  },
  {
    question: 'Đối với đô thị loại đặc biệt và loại I, lượng chất thải rắn phát sinh trên đầu người đạt bao nhiêu kg/người.ngày',
    options: [
      'a. 1,3',
      'b. 1',
      'c. 0,9',
      'd. 0,8',
    ],
    correct: 0
  },
  {
    question: 'Tỷ lệ sử dụng đất tối thiểu đối với đất cây xanh, mặt nước trong các cơ sở xử lý chất thải rắn là bao nhiêu phần trăm?',
    options: [
      'a. Tối thiểu 10%',
      'b. Tối thiểu 15%',
      'c. Tối thiểu 20%',
      'd. Tối thiểu 25%',
    ],
    correct: 1
  },
  {
    question: 'Tỷ lệ sử dụng đất tối đa đối với khu xử lý + bãi ủ + kho chứa sản phẩm trong cơ sở xử lý chất thải rắn theo công nghệ sinh học là bao nhiêu?',
    options: [
      'a. 40 %',
      'b. 50 %',
      'c. 60 %',
      'd. 70 %',
    ],
    correct: 2
  },
  {
    question: 'Tỷ lệ sử dụng đất tối thiểu đối với đất giao thông trong các cơ sở xử lý chất thải rắn là bao nhiêu phần trăm?',
    options: [
      'a. Tối thiểu 10%',
      'b. Tối thiểu 15%',
      'c. Tối thiểu 20%',
      'd. Tối thiểu 25%',
    ],
    correct: 0
  },
  {
    question: 'Đối với trạm trung chuyển chất thải rắn phải đảm bảo các yêu cầu nào sau đây?',
    options: [
      'a. Về phòng chống cháy, nổ',
      'b. Về thu gom và xử lý nước thải',
      'c. Về khử mùi',
      'd. Cả ba yêu cầu trên',
    ],
    correct: 3
  },
  {
    question: 'Khoảng cách tối thiểu giữa các công trình trong khu liên hợp xử lý chất thải rắn (khu tiếp nhận, khu phân loại, khu tái chế, khu xử lý sinh học, lò đốt) đến bãi chôn lấp là bao nhiêu m?',
    options: [
      'a. 50',
      'b. 100',
      'c. 200',
      'd. 300',
    ],
    correct: 3
  },
  {
    question: 'Tỷ lệ sử dụng đất tối đa đối với khu điều hành trong các cơ sở xử lý chất thải rắn là bao nhiêu phần trăm?',
    options: [
      'a. Tối đa 15%',
      'b. Tối đa 20%',
      'c. Tối đa 25%',
      'd. Tối đa 30%',
    ],
    correct: 0
  },
  {
    question: 'Cơ sở xử lý chất thải rắn là các cơ sở vật chất bao gồm những gì?',
    options: [
      'a. Bao gồm đất đai, nhà xưởng, trang thiết bị xử lý chất thải rắn',
      'b. Bao gồm đất đai, nhà xưởng, dây truyền công nghệ xử lý chất thải rắn',
      'c. Bao gồm đất đai, nhà xưởng và các công trình khác phục vụ cho việc xử lý chất thải rắn',
      'd. Bao gồm đất đai, nhà xưởng, dây truyền công nghệ, trang thiết bị và các hạng mục công trình phụ trợ được sử dụng cho hoạt động xử lý chất thải rắn',
    ],
    correct: 3
  },
  {
    question: 'Bãi chôn lấp chất thải rắn hợp vệ sinh là gì?',
    options: [
      'a. Là bãi chôn lấp chất thải rắn được thiết kế hợp vệ sinh',
      'b. Là bãi chôn lấp chất thải rắn được xây dựng và quản lý vận hành một cách hiệu quả',
      'c. Là bãi chôn lấp chất thải rắn được thiết kế và xây dựng đồng bộ',
      'd. Là bãi chôn lấp chất thải rắn được quy hoạch, thiết kế, xây dựng và quản lý vận hành hợp kỹ thuật vệ sinh để chôn lấp chất thải rắn',
    ],
    correct: 3
  },
  {
    question: 'Khu liên hợp xử lý chất thải rắn là gì?',
    options: [
      'a. Là các hạng mục công trình xử lý chất thải rắn',
      'b. Là các hạng mục công trình xử lý, tái chế, tái sử dụng chất thải rắn',
      'c. Là các hạng mục công trình xử lý và bãi chôn lấp chất thải rắn',
      'd. Là tổ hợp của một số hoặc nhiều hạng mục công trình xử lý, tái chế, tái sử dụng chất thải rắn và bãi chôn lấp chất thải rắn',
    ],
    correct: 3
  },
  {
    question: 'Công nghệ xử lý chất thải rắn bằng công nghệ sinh học được áp dụng đối với loại chất thải rắn nào?',
    options: [
      'a. Chất thải rắn vô cơ',
      'b. Chất thải rắn hữu cơ dễ bị phân hủy sinh học',
      'c. Chất thải rắn có thể tái chế',
      'd. Chất thải rắn có thể tái sử dụng',
    ],
    correct: 1
  },
  {
    question: 'Quy mô của khu liên hợp xử lý chất thải rắn được xác định như thế nào?',
    options: [
      'a. Xác định theo khối lượng chất thải rắn tiếp nhận',
      'b. Xác định theo khối lượng chất thải rắn tiếp nhận và xử lý',
      'c. Xác định theo quy hoạch xử lý chất thải rắn đã được phê duyệt',
      'd. Xác định theo quy hoạch xử lý chất thải rắn, dựa trên cơ sở khối lượng của các loại chất thải rắn cần được xử lý, công nghệ áp dụng để xử lý và tiêu hủy chất thải rắn',
    ],
    correct: 3
  },
  {
    question: 'Việc thu gom phân bùn từ các bể tự hoại nhà vệ sinh công cộng không quá bao nhiêu lâu?',
    options: [
      'a. 6 tháng',
      'b. 12 tháng',
      'c. 15 tháng',
      'd. 18 tháng',
    ],
    correct: 1
  },
  {
    question: 'Chất thải rắn nguy hại phải được phân loại, thu gom và xử lý như thế nào?',
    options: [
      'a. Phân loại, thu gom và xử lý chung',
      'b. Phân loại, thu gom và xử lý riêng',
      'c. Phân loại, thu gom riêng và xử lý chung',
      'd. Phân loại, thu gom chung và xử lý riêng',
    ],
    correct: 1
  },
  {
    question: 'Công trình quản lý chất thải rắn bao gồm những hạng mục nào?',
    options: [
      'a. Bao gồm trạm trung chuyển chất thải rắn, điểm tập kết chất thải rắn',
      'b. Bao gồm cơ sở xử lý chất thải rắn và bãi chôn lấp chất thải rắn',
      'c. Bao gồm trạm trung chuyển chất thải rắn và bùn thải',
      'd. Bao gồm trạm trung chuyển và cơ sở xử lý chất thải rắn và bùn thải (tái chế, đốt, chôn lấp hoặc các loại hình công nghệ xử lý khác)',
    ],
    correct: 3
  },
  {
    question: 'Chất thải rắn là gì?',
    options: [
      'a. Là chất thải phát sinh trong quá trình sinh hoạt của con người',
      'b. Là chất thải phát sinh trong hoạt động sản xuất, đời sống sinh hoạt của con người',
      'c. Là chất thải ở thể rắn phát sinh trong quá trình sản xuất, sinh hoạt của con người',
      'd. Là chất thải ở thể rắn hoặc sệt (còn gọi là bùn thải) được thải ra từ sản xuất, kinh doanh, dịch vụ, sinh hoạt hoặc các hoạt động khác',
    ],
    correct: 3
  },
  {
    question: 'Chất thải rắn thông thường là gì?',
    options: [
      'a. Là chất thải phát sinh từ hoạt động sinh hoạt của con người',
      'b. Là chất thải phát sinh trong hoạt động, sản xuất, kinh doanh của con người',
      'c. Là chất thải phát sinh từ hoạt động sinh hoạt, sản xuất, kinh doanh của con người',
      'd. Là chất thải không thuộc danh mục chất thải nguy hại hoặc thuộc danh mục chất thải nguy hại nhưng có yếu tố nguy hại dưới ngưỡng chất thải nguy hại.',
    ],
    correct: 3
  },
  {
    question: 'Chất thải rắn sinh hoạt là gì?',
    options: [
      'a. Là chất thải rắn phát sinh trong hoạt động sản xuất, kinh doanh của con người',
      'b. Là chất thải rắn phát sinh trong hoạt động sản xuất, dịch vụ của con người',
      'c. Là chất thải rắn phát sinh trong hoạt động dịch vụ, sản xuất, kinh doanh của con người',
      'd. Là chất thải rắn phát sinh trong sinh hoạt thường ngày của con người',
    ],
    correct: 3
  },
  {
    question: 'Chất thải rắn sinh hoạt phải được thu gom theo tuyến để vận chuyển tới địa điểm nào?',
    options: [
      'a. Để vận chuyển đến điểm tập kết chất thải rắn',
      'b. Để vận chuyển đến trạm trung chuyển chất thải rắn',
      'c. Để vận chuyển đến cơ sở xử lý chất thải rắn',
      'd. Để vận chuyển tới điểm tập kết, trạm trung chuyển và cơ sở xử lý chất thải rắn theo quy hoạch được cấp có thẩm quyền phê duyệt',
    ],
    correct: 3
  },
  {
    question: 'Trong quá trình vận chuyển chất thải rắn sinh hoạt phải đảm bảo các điều kiện gì?',
    options: [
      'a. Phải bảo đảm không được rơi vãi',
      'b. Phải bảo đảm không gây bốc mùi',
      'c. Phải bảo đảm không làm nước rò rỉ',
      'd. Phải bảo đảm không làm rơi vãi chất thải, gây phát tán bụi, mùi, nước rò rỉ.',
    ],
    correct: 3
  },
  {
    question: 'Chất thải rắn công nghiệp là?',
    options: [
      'a. Là chất thải rắn phát sinh từ hoạt động sinh hoạt của con người',
      'b. Là chất thải rắn phát sinh từ hoạt động sản xuất của con người',
      'c. Là chất thải rắn phát sinh từ hoạt động kinh doanh dịch vụ của con người',
      'd. Là chất thải rắn phát sinh từ hoạt động sản xuất, kinh doanh, dịch vụ.',
    ],
    correct: 3
  },
];
