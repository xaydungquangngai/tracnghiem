const questions = [
  {
    question: 'Yêu cầu về năng lực tối thiểu đối với tổ chức, cá nhân khai thác đập, hồ chứa nước quan trọng đặc biệt',
    options: [
      'a. Phải có 07 kỹ sư có chuyên ngành thủy lợi, trong đó có ít nhất 02 người có thâm niên quản lý, vận hành đập, hồ chứa nước từ 05 năm trở lên, có giấy chứng nhận qua lớp đào tạo, bồi dưỡng nghiệp vụ về quản lý đập',
      'b. Bố trí ít nhất 07 kỹ sư chuyên ngành thủy lợi, trong đó có ít nhất 02 người có thâm niên quản lý, khai thác đập, hồ chứa nước từ 05 năm trở lên và phải được đào tạo, bồi dưỡng nghiệp vụ về quản lý, khai thác đập, hồ chứa nước',
      'c. Phải có 07 kỹ sư có chuyên ngành thủy lợi, trong đó có ít nhất 03 người có thâm niên quản lý, vận hành đập, hồ chứa nước từ 05 năm trở lên, có giấy chứng nhận qua lớp đào tạo, bồi dưỡng nghiệp vụ về quản lý đập',
      'd. Bố trí ít nhất 07 kỹ sư chuyên ngành thủy lợi, trong đó có ít nhất 02 người có thâm niên quản lý, khai thác đập, hồ chứa nước từ 05 năm trở lên và phải được đào tạo, bồi dưỡng nghiệp vụ về quản lý hồ chứa nước',
    ],
    correct: 1
  },
  {
    question: 'Yêu cầu về năng lực tối thiểu đối với tổ chức, cá nhân khai thác đập, hồ chứa nước lớn',
    options: [
      'a. Hồ chứa có dung tích trữ từ 50.000.000 m3 trở lên, phải có 05 kỹ sư chuyên ngành thủy lợi, trong đó có ít nhất 02 người có thâm niên quản lý, vận hành đập, hồ chứa nước từ 05 năm trở lên, có giấy chứng nhận qua lớp đào tạo, bồi dưỡng nghiệp vụ về quản lý đập',
      'b. Đập, hồ chứa có dung tích trữ từ 50.000.000 m3 trở lên: bố trí ít nhất 05 kỹ sư chuyên ngành thủy lợi, trong đó có ít nhất 02 người có thâm niên quản lý, vận hành đập, hồ chứa nước từ 05 năm trở lên và phải được đào tạo, bồi dưỡng nghiệp vụ về quản lý, khai thác đập, hồ chứa nước',
      'c. Hồ chứa có dung tích trữ từ 50.000.000 m3 trở lên, phải có 05 kỹ sư chuyên ngành thủy lợi, trong đó có ít nhất 02 người có thâm niên quản lý, vận hành đập từ 05 năm trở lên, có giấy chứng nhận qua lớp đào tạo, bồi dưỡng nghiệp vụ về quản lý đập.',
      'd. Đập, hồ chứa có dung tích trữ từ 50.000.000 m3 trở lên: bố trí ít nhất 05 kỹ sư chuyên ngành thủy lợi, trong đó có ít nhất 02 người có thâm niên quản lý, vận hành hồ chứa nước từ 05 năm trở lên và phải được đào tạo, bồi dưỡng nghiệp vụ về quản lý hồ chứa nước.',
    ],
    correct: 1
  },
  {
    question: 'Yêu cầu về năng lực tối thiểu đối với tổ chức, cá nhân khai thác đập, hồ chứa nước lớn',
    options: [
      'a. Hồ chứa có dung tích trữ từ 10.000.000 m3 đến dưới 50.000.000 m3, phải có 03 kỹ sư chuyên ngành thủy lợi, trong đó có ít nhất 01 người có thâm niên quản lý, vận hành đập, hồ chứa nước từ 05 năm trở lên, có giấy chứng nhận qua lớp đào tạo, bồi dưỡng nghiệp vụ về quản lý đập.',
      'b. Hồ chứa có dung tích trữ từ 10.000.000 m3 đến dưới 50.000.000 m3, phải có 03 kỹ sư chuyên ngành thủy lợi, trong đó có 02 người có thâm niên quản lý, vận hành đập, hồ chứa nước từ 05 năm trở lên, có giấy chứng nhận qua lớp đào tạo, bồi dưỡng nghiệp vụ về quản lý đập.',
      'c. Đập, hồ chứa có dung tích trữ từ 10.000.000 m3 đến dưới 50.000.000 m3: bố trí ít nhất 03 kỹ sư chuyên ngành thủy lợi, trong đó có ít nhất 01 người có thâm niên quản lý, vận hành đập, hồ chứa nước từ 05 năm trở lên và phải được đào tạo, bồi dưỡng nghiệp vụ về quản lý, khai thác đập, hồ chứa nước.',
      'd. Đập, hồ chứa có dung tích trữ từ 10.000.000 m3 đến dưới 50.000.000 m3: bố trí ít nhất 03 kỹ sư chuyên ngành thủy lợi, trong đó có ít nhất 01 người có thâm niên quản lý, vận hành đập, hồ chứa nước từ 05 năm trở lên và phải được đào tạo, bồi dưỡng nghiệp vụ về quản lý, khai thác hồ chứa nước.',
    ],
    correct: 2
  },
  {
    question: 'Yêu cầu về năng lực tối thiểu đối với tổ chức, cá nhân khai thác đập, hồ chứa nước vừa',
    options: [
      'a. Đập, hồ chứa có dung tích trữ từ 1.000.000 m3 đến dưới 3.000.000 m3: tổ chức, cá nhân khai thác phải có ít nhất 01 kỹ sư chuyên ngành thủy lợi và phải được đào tạo, bồi dưỡng nghiệp vụ về quản lý, khai thác đập, hồ chứa nước.',
      'b. Hồ chứa có dung tích trữ từ 1.000.000 m3 đến dưới 3.000.000 m3, phải có 01 kỹ sư chuyên ngành thủy lợi, 01 cao đẳng chuyên ngành thủy lợi có thâm niên quản lý, vận hành đập, hồ chứa nước từ 01 năm trở lên, có giấy chứng nhận qua lớp đào tạo, bồi dưỡng nghiệp vụ về quản lý đập.',
      'c. Hồ chứa có dung tích trữ từ 1.000.000 m3 đến dưới 3.000.000 m3, phải có 01 kỹ sư chuyên ngành thủy lợi, có giấy chứng nhận qua lớp đào tạo, bồi dưỡng nghiệp vụ về quản lý đập.',
      'd. Đập, hồ chứa có dung tích trữ từ 1.000.000 m3 đến dưới 3.000.000 m3 phải có ít nhất 01 kỹ sư chuyên ngành thủy lợi và phải được đào tạo, bồi dưỡng nghiệp vụ về quản lý, khai thác hồ chứa nước.',
    ],
    correct: 0
  },
  {
    question: 'Yêu cầu về năng lực tối thiểu đối với tổ chức, cá nhân khai thác đập, hồ chứa nước nhỏ',
    options: [
      'a. Tổ chức, cá nhân khai thác phải có ít nhất 01 người có trình độ từ trung học phổ thông hoặc công nhân bậc 2 trở lên và phải được đào tạo, bồi dưỡng nghiệp vụ về quản lý, khai thác đập, hồ chứa nước.',
      'b. Hồ chứa có dung tích trữ từ 200.000 m3 đến dưới 500.000 m3, phải có 01 cán bộ có trình độ tối thiểu từ trung cấp thủy lợi trở lên, có giấy chứng nhận qua lớp đào tạo, bồi dưỡng nghiệp vụ về quản lý đập.',
      'c. Hồ chứa có dung tích trữ từ 50.000 m3 đến dưới 200.000 m3, phải có 01 cán bộ có trình độ từ trung học phổ thông hoặc công nhân bậc 2 trở lên, có giấy chứng nhận qua lớp đào tạo, bồi dưỡng nghiệp vụ về quản lý đập.',
      'd. Cả 02 ý b và c',
    ],
    correct: 0
  },
  {
    question: 'Yêu cầu về năng lực tối thiểu đối với tổ chức, cá nhân khai thác trạm bơm điện tiêu và tưới tiêu kết hợp loại lớn',
    options: [
      'a. Trạm bơm điện có loại máy bơm công suất từ 11.000 m3/h trở lên: phải có ít nhất 01 kỹ sư chuyên ngành thủy lợi và 01 kỹ sư chuyên ngành cơ điện có thâm niên quản lý, vận hành từ 03 năm trở lên.',
      'b. Trạm bơm điện có loại máy bơm công suất từ 8.000 m3/h đến dưới 11.000 m3/h: phải có ít nhất 01 kỹ sư chuyên ngành thủy lợi hoặc cơ điện có thâm niên quản lý, vận hành từ 02 năm trở lên.',
      'c. Trạm bơm điện có loại máy bơm công suất từ 4.000 m3/h đến dưới 8.000 m3/h: phải có ít nhất 01 kỹ sư chuyên ngành thủy lợi hoặc cơ điện có thâm niên quản lý, vận hành từ 01 năm trở lên.',
      'd. Cả 03 ý a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Yêu cầu về năng lực tối thiểu đối với tổ chức, cá nhân khai thác trạm bơm điện tiêu và tưới tiêu kết hợp loại vừa',
    options: [
      'a. Trạm bơm điện có loại máy bơm công suất từ 11.000 m3/h trở lên: phải có ít nhất 01 cán bộ có trình độ cao đẳng chuyên ngành thủy lợi hoặc cơ điện có thâm niên quản lý, vận hành từ 03 năm trở lên.',
      'b. Trạm bơm điện có loại máy bơm công suất từ 8.000 m3/h đến dưới 11.000 m3/h: phải có ít nhất 02 trung cấp chuyên ngành thủy lợi hoặc cơ điện có thâm niên quản lý, vận hành từ 03 năm trở lên.',
      'c. Trạm bơm điện có loại máy bơm công suất từ 4.000 m3/h đến dưới 8.000 m3/h: phải có ít nhất 02 trung cấp chuyên ngành thủy lợi hoặc cơ điện có thâm niên quản lý, vận hành từ 03 năm trở lên.',
      'd. Cả 03 ý a, b và c',
    ],
    correct: 2
  },
  {
    question: 'Yêu cầu về năng lực tối thiểu đối với tổ chức, cá nhân khai thác trạm bơm điện tiêu và tưới tiêu kết hợp loại vừa',
    options: [
      'a. Trạm bơm điện có loại máy bơm công suất từ 8.000 m3/h đến dưới 11.000 m3/h: phải có ít nhất 02 trung cấp chuyên ngành thủy lợi hoặc cơ điện có thâm niên quản lý, vận hành từ 03 năm trở lên.',
      'b. Trạm bơm điện có loại máy bơm công suất từ 4.000 m3/h đến dưới 8.000 m3/h: phải có ít nhất 02 trung cấp chuyên ngành thủy lợi hoặc cơ điện có thâm niên quản lý, vận hành từ 03 năm trở lên.',
      'c. Trạm bơm điện có loại máy bơm có công suất từ 1.000 m3/h đến dưới 4.000 m3/h: phải có ít nhất 01 trung cấp chuyên ngành thủy lợi hoặc cơ điện có thâm niên quản lý, vận hành từ 03 năm trở lên.',
      'd. Cả 03 ý a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Yêu cầu về năng lực tối thiểu đối với tổ chức, cá nhân khai thác trạm bơm điện tiêu và tưới tiêu kết hợp loại nhỏ',
    options: [
      'a. Trạm bơm điện có loại máy bơm có công suất từ 1.000 m3/h đến dưới 4.000 m3/h: phải có ít nhất 01 công nhân chuyên ngành thủy lợi hoặc cơ điện có thâm niên quản lý, vận hành từ 02 năm trở lên',
      'b. Trạm bơm điện có loại máy bơm công suất từ 540 m3/h đến dưới 1.000 m3/h: phải có ít nhất 01 người vận hành có trình độ trung học cơ sở và có thâm niên quản lý, vận hành từ 01 năm trở lên',
      'c. Trạm bơm có từ 02 đến 05 máy, bố trí 01 công nhân vận hành có trình độ trung học phổ thông và phải tham gia 01 lớp đào tạo bồi dưỡng nghiệp vụ quản lý, khai thác công trình thủy lợi có thâm niên quản lý, vận hành từ 03 năm trở lên.',
      'd. Cả 02 ý a và b',
    ],
    correct: 3
  },
  {
    question: 'Yêu cầu về năng lực tối thiểu đối với tổ chức, cá nhân khai thác trạm bơm điện tưới',
    options: [
      'a. Trạm bơm tưới loại lớn có tổng lưu lượng từ 72.000 m3/h trở lên thì áp dụng quy định tại khoản 1 Điều này.',
      'b. Trạm bơm tưới loại lớn có tổng lưu lượng từ 12.000 m3/h đến dưới 72.000 m3/h và trạm bơm tưới loại vừa có tổng lưu lượng từ 3.600 m3/h đến dưới 12.000 m3/h thì áp dụng quy định tại khoản 2 Điều này;',
      'c. Trạm bơm tưới loại vừa có tổng lưu lượng dưới 3.600 m3/h và trạm bơm tưới loại nhỏ áp dụng quy định tại khoản 3 Điều này.',
      'd. Cả 03 ý a, b và c',
    ],
    correct: 3
  },
  {
    question: 'Các hoạt động sau đây phải được cấp giấy phép cho các hoạt động trong phạm vi bảo vệ công trình thủy lợi',
    options: [
      'a. Xây dựng công trình mới; lập bến, bãi tập kết nguyên liệu, nhiên liệu, vật liệu, vật tư, phương tiện; khoan, đào khảo sát địa chất; thăm dò, khai thác khoáng sản, vật liệu xây dựng, khai thác nước dưới đất; Xả nước thải vào công trình thủy lợi, trừ xả nước thải với quy mô nhỏ và không chứa chất độc hại, chất phóng xạ; Trồng cây lâu năm; hoạt động du lịch, thể thao, nghiên cứu khoa học, kinh doanh, dịch vụ; hoạt động của phương tiện thủy nội địa, phương tiện cơ giới, trừ xe mô tô, xe gắn máy, phương tiện thủy nội địa thô sơ; nuôi trồng thủy sản; Nổ mìn và các hoạt động gây nổ khác',
      'b. Xây dựng công trình mới; lập bến, bãi tập kết nguyên liệu, nhiên liệu, vật liệu, vật tư, phương tiện; khoan, đào khảo sát địa chất; thăm dò, khai thác khoáng sản, vật liệu xây dựng, khai thác nước dưới đất; Xả nước thải vào công trình thủy lợi, trừ xả nước thải với quy mô nhỏ và không chứa chất độc hại, chất phóng xạ; trồng cây lâu năm; hoạt động du lịch, thể thao, nghiên cứu khoa học, kinh doanh, dịch vụ; hoạt động của phương tiện thủy nội địa, phương tiện cơ giới, trừ xe mô tô, xe gắn máy, phương tiện thủy nội địa thô sơ; nuôi trồng thủy sản; nổ mìn và các hoạt động gây nổ khác; xây dựng công trình ngầm.',
      'c. Các dự án bảo trì, sửa chữa, nâng cấp, hiện đại hóa hoặc bổ sung hạng mục vào công trình thủy lợi hiện có.',
      'd. Cả 02 ý a và',
    ],
    correct: 1
  },
  {
    question: 'Các trường hợp phải cắm mốc chỉ giới phạm vi bảo vệ công trình thủy lợi',
    options: [
      'a. Đập của hồ chứa nước có dung tích từ 500.000 m3 trở lên hoặc đập có chiều cao từ 10 m trở lên; Kênh có lưu lượng từ 5 m3/s trở lên hoặc chiều rộng đáy kênh từ 5 m trở lên, trừ kênh chìm; Cống có tổng chiều rộng thoát nước từ 10 m trở lên',
      'b. Đập của hồ chứa nước có dung tích từ 500.000 m3 trở lên hoặc đập có chiều cao từ 10 m trở lên; Lòng hồ chứa nước có dung tích từ 500.000 m3 trở lên; Kênh có lưu lượng từ 5 m3/s trở lên hoặc chiều rộng đáy kênh từ 5 m trở lên, trừ kênh chìm; Cống có tổng chiều rộng thoát nước từ 10 m trở lên đối với vùng đồng bằng sông Cửu Long, từ 5 m trở lên đối với các vùng còn lại',
      'c. Đập của hồ chứa nước có dung tích từ 500.000 m3 trở lên hoặc đập có chiều cao từ 10 m trở lên; Lòng hồ chứa nước có dung tích từ 500.000 m3 trở lên; Kênh có lưu lượng từ 5 m3/s trở lên hoặc chiều rộng đáy kênh từ 5 m trở lên',
      'd. Đập của hồ chứa nước có dung tích từ 500.000 m3 trở lên; Lòng hồ chứa nước có dung tích từ 500.000 m3 trở lên; Kênh có lưu lượng từ 5 m3/s trở lên; Cống có tổng chiều rộng thoát nước từ 10 m trở lên',
    ],
    correct: 1
  },
  {
    question: 'Khoảng cách các mốc chỉ giới phạm vi bảo vệ đập và lòng hồ chứa nước có dung tích từ 500.000 m3 trở lên hoặc đập có chiều cao từ 10 m trở lên',
    options: [
      'a. Khoảng cách giữa hai mốc liền nhau là 200 m; trường hợp đập gần khu đô thị, dân cư tập trung là 100 m.',
      'b. Khoảng cách giữa hai mốc liền nhau là 100 m; trường hợp đập gần khu đô thị, dân cư tập trung là 50 m.',
      'c. Khoảng cách giữa hai mốc liền nhau là 300 m; trường hợp đập gần khu đô thị, dân cư tập trung là 50 m.',
      'd. Khoảng cách giữa hai mốc liền nhau là 150 m; trường hợp đập gần khu đô thị, dân cư tập trung là 50 m.',
    ],
    correct: 1
  },
  {
    question: 'Căn cứ địa hình khu vực cắm mốc và yêu cầu quản lý, khoảng cách các mốc chỉ giới phạm vi bảo vệ lòng hồ chứa nước có dung tích từ 500.000 m3 trở lên',
    options: [
      'a. Khoảng cách giữa hai mốc liền nhau từ 200 m đến 500 m; khu vực lòng hồ có độ dốc lớn hoặc không có dân cư sinh sống, khoảng cách giữa hai mốc liền nhau lớn hơn 1000 m. Tại những điểm chuyển hướng, giao cắt của đường chỉ giới với địa hình, địa vật phải có mốc',
      'b. Khoảng cách giữa hai mốc liền nhau từ 200 m đến 500 m; khu vực lòng hồ có độ dốc lớn hoặc không có dân cư sinh sống khoảng cách giữa hai mốc liền nhau lớn hơn 1000 m',
      'c. Khoảng cách giữa hai mốc liền nhau từ 500 m đến 1000 m; khu vực lòng hồ có độ dốc lớn hoặc không có dân cư sinh sống khoảng cách giữa hai mốc liền nhau lớn hơn 1000 m',
      'd. Khoảng cách giữa hai mốc liền nhau từ 200 m đến 500 m; khu vực lòng hồ có độ dốc lớn hoặc không có dân cư sinh sống, khoảng cách giữa hai mốc liền nhau lớn hơn 1.000 m nhưng không quá 5.000 m.',
    ],
    correct: 0
  },
  {
    question: 'Căn cứ vào địa hình khu vực cắm mốc và yêu cầu quản lý, khoảng cách các mốc chỉ giới phạm vi bảo vệ kênh có lưu lượng từ 5 m3/s trở lên hoặc chiều rộng đáy kênh từ 5 m trở lên, trừ kênh chìm',
    options: [
      'a. Khoảng cách hai mốc liền nhau từ 300 m đến 500 m; trường hợp kênh ở khu vực đô thị, khu dân cư tập trung khoảng cách hai mốc liền nhau từ 200 m đến 250 m. Tại các điểm chuyển hướng của đường chỉ giới phải có mốc',
      'b. Khoảng cách hai mốc liền nhau từ 200 m đến 300 m; trường hợp kênh ở khu vực đô thị, khu dân cư tập trung khoảng cách hai mốc liền nhau từ 100 m đến 150 m. Tại các điểm chuyển hướng của đường chỉ giới phải có mốc.',
      'c. Khoảng cách hai mốc liền nhau từ 200 m đến 300 m; trường hợp kênh ở khu vực đô thị, khu dân cư tập trung khoảng cách hai mốc liền nhau từ 100 m đến 150 m.',
      'd. Khoảng cách hai mốc liền nhau từ 100 m đến 200 m; trường hợp kênh ở khu vực đô thị, khu dân cư tập trung khoảng cách hai mốc liền nhau từ 50 m đến 100 m.',
    ],
    correct: 1
  },
  {
    question: 'Căn cứ vào địa hình khu vực cắm mốc và yêu cầu quản lý, khoảng cách cắm mốc chỉ giới phạm vi bảo vệ cống có tổng chiều rộng thoát nước từ 10 m trở lên đối với vùng đồng bằng sông Cửu Long',
    options: [
      'a. Khoảng cách giữa hai mốc liền nhau từ 20 m đến 50 m. Tại các điểm góc của đường chỉ giới phải có mốc.',
      'b. Khoảng cách giữa hai mốc liền nhau từ 30 m đến 50 m.',
      'c. Khoảng cách giữa hai mốc liền nhau từ 15 m đến 30 m. Tại các điểm góc của đường chỉ giới phải có mốc',
      'd. Khoảng cách giữa hai mốc liền nhau từ 10 m đến 50 m.',
    ],
    correct: 0
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
