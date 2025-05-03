const questions = [
  {
    question: 'Biện pháp nào sau đây khó đảm bảo chống cháy nhất đối với các mạch điện có thiết bị điện, dây dẫn điện có khả năng tạo hồ quang hoặc tia lửa điện trong vận hành bình thường?',
    options: [
      'a. Bọc kín toàn bộ trong vật liệu chịu được hồ quang',
      'b. Cách ly khỏi vật dụng hoặc các phần tử của nhà bằng vật liệu chịu được hồ quang',
      'c. Lắp đặt với một khoảng cách đủ đảm bảo dập được hồ quang, tia lửa điện.',
      'd. Sử dụng thiết bị bảo vệ quá dòng điện',
    ],
    correct: 3
  },
  {
    question: 'Đối với các công trình có mái làm bằng vật liệu dễ cháy, bộ phận thu sét phải được lắp đặt cách mái tối thiểu bao nhiêu cm?',
    options: [
      'a. 5cm',
      'b. 10cm',
      'c. 15cm',
      'd. 20cm',
    ],
    correct: 1
  },
  {
    question: 'Đối với các nhóm 1 và 2 trong khu vực y tế, các thiết bị điện sử dụng SELV và PELV phải có điện áp danh định của không được vượt quá bao nhiêu V ?',
    options: [
      'a. 120V',
      'b. 50V',
      'c. 25V',
      'd. 12V',
    ],
    correct: 2
  },
  {
    question: 'Trong hệ thống nối đất của hệ thống điện nhà ở, dây dẫn nối đất bằng đồng chôn trong đất và không có bảo vệ chống ăn mòn có tiết diện nhỏ nhất cho phép là bao nhiêu?',
    options: [
      'a. 16mm2',
      'b. 25mm2',
      'c. 35mm2',
      'd. 50mm2',
    ],
    correct: 1
  },
  {
    question: 'Trong vùng 1 của khu vực có bồn tắm hoặc vòi hoa sen, các phụ kiện, kể cả ổ cắm của mạch điện được cấp từ nguồn điện áp siêu thấp (SELV hoặc PELV) phải có điện áp danh định không lớn hơn bao nhiêu V?',
    options: [
      'a. 120V',
      'b. 50V',
      'c. 25V',
      'd. 12V',
    ],
    correct: 2
  },
  {
    question: 'Đối với phòng hoặc cabin có chứa phần tử gia nhiệt sinh hơi, biện pháp bảo vệ chống tiếp xúc trực tiếp nào sau đây không được phép thực hiện ?',
    options: [
      'a. Sử dụng rào chắn',
      'b. Sử dụng vỏ bọc có cấp bảo vệ thấp nhất là IPXXB hoặc IP2X;',
      'c. Sử dụng loại có cách điện chịu được điện áp thử nghiệm hiệu dụng 500 V xoay chiều trong 1 min;',
      'd. Đặt ngoài phạm vi giới hạn thể tích trong tầm với',
    ],
    correct: 3
  },
  {
    question: 'Lớp cách điện của dây dẫn đặt trong các vùng 1 trong phòng hoặc cabin có chứa phần tử gia nhiệt sinh hơi phải chịu được nhiệt độ ít nhất là bao nhiêu?',
    options: [
      'a. 100°C',
      'b. 150°C',
      'c. 170°C',
      'd. 200°C',
    ],
    correct: 2
  },
  {
    question: 'Quy chuẩn QCVN 12:2014/BXD áp dụng đối với các tổ chức, cá nhân có liên quan đến hoạt động thiết kế, xây dựng hệ thống điện của công trình nào?',
    options: [
      'a. Công trình công nghiệp',
      'b. Công trình nhà ở',
      'c. Công trình nhà công cộng',
      'd. Công trình nhà ở và nhà công cộng',
    ],
    correct: 3
  },
  {
    question: 'Quy chuẩn QCVN 12:2014/BXD quy định ruột kim loại của các dây dẫn tải điện phải làm bằng gì?',
    options: [
      'a. Nhôm',
      'b. Thép',
      'c. Đồng',
      'd. Đồng hoặc thép',
    ],
    correct: 2
  },
  {
    question: 'Đối với các mạch điện ba pha trong hệ thống điện nhà ở và nhà công cộng mà tiết diện của dây pha lớn hơn 16 mm2, tiết diện của dây trung tính có thể nhỏ hơn tiết diện dây pha nếu đáp ứng điều kiện nào sau đây ?',
    options: [
      'a. Phụ tải 3 pha là cân bằng và sóng hài bậc 3 và bội số lẻ của 3 không quá 15 % biên độ sóng cơ bản.',
      'b. Dây trung tính được bảo vệ chống quá dòng điện;',
      'c. Tiết diện của dây trung tính không nhỏ hơn 16 mm2.',
      'd. Đồng thời cả ba điều kiện trên',
    ],
    correct: 3
  },
  {
    question: 'Khi đường dẫn điện của hệ thống điện nhà chôn ngầm giao chéo hoặc đi gần đường dẫn truyền thông phải đảm bảo khoảng cách tối thiểu giữa các loại đường dẫn này là bao nhiêu ?',
    options: [
      'a. 50mm',
      'b. 100mm',
      'c. 150mm',
      'd. 200mm',
    ],
    correct: 1
  },
  {
    question: 'Tại đầu vào nhà phải lắp đặt tủ phân phối điện chính, trừ trường hợp nhánh rẽ từ đường dây trên không vào nhà đã lắp đặt thiết bị bảo vệ với dòng điện tác động không lớn hơn bao nhiêu?',
    options: [
      'a. 16A',
      'b. 20A',
      'c. 25A',
      'd. 30A',
    ],
    correct: 2
  },
  {
    question: 'Trong hệ thống nối đất, dây PE không phải là một bộ phận của cáp hoặc không nằm trong vỏ bảo vệ chung với dây pha, thì tiết diện tối thiểu phải chọn là bao nhiêu nếu dây PE này không có bảo vệ cơ?',
    options: [
      'a. 2,5mm2',
      'b. 4mm2',
      'c. 6mm2',
      'd. 10mm2',
    ],
    correct: 1
  },
  {
    question: 'Biện pháp an toàn nào sau đây dùng để bảo vệ chống tiếp xúc gián tiếp?',
    options: [
      'a. Sử dụng mạch điện tách biệt',
      'b. Rào chắn hoặc tấm chắn',
      'c. Sử dụng vật cản tháo lắp được',
      'd. Đặt ngoài tầm tay với',
    ],
    correct: 0
  },
  {
    question: 'Trong hệ thống điện nhà ở, thiết bị bảo vệ theo dòng điện dư - RCD dùng để bảo vệ chống cháy do thiết bị điện và dây dẫn gây ra có dòng tác động làm việc được đặt không quá bao nhiêu ?',
    options: [
      'a. 30mA',
      'b. 100mA',
      'c. 300mA',
      'd. 500mA',
    ],
    correct: 3
  },
  {
    question: 'Vị trí nguồn cấp cho khu vực có bồn tắm hoặc vòi hoa sen đặt ở đâu?',
    options: [
      'a. Được phép đặt trong vùng 0',
      'b. Được phép đặt trong vùng 1',
      'c. Phải đặt ngoài vùng 0 và 1',
      'd. Phải đặt ngoài vùng 0',
    ],
    correct: 2
  },
  {
    question: 'Thang máy phải có thiết bị điều khiển để giảm mức sử dụng năng lượng. Khi thang máy hoạt động ở chế độ không tải trong giờ thấp điểm, nguồn cấp điện cho hệ thống điều khiển thang máy và các thiết bị vận hành khác như đèn trong buồng thang máy, màn hiển thị, quạt thông gió tự tắt sau khi thang ngừng hoạt động tối đa bao lâuThang máy phải có thiết bị điều khiển để giảm mức sử dụng năng lượng. Khi thang máy hoạt động ở chế độ không tải trong giờ thấp điểm, nguồn cấp điện cho hệ thống điều khiển thang máy và các thiết bị vận hành khác như đèn trong buồng thang máy, màn hiển thị, quạt thông gió tự tắt sau khi thang ngừng hoạt động tối đa bao lâu ?',
    options: [
      'a. 3 phút',
      'b. 5 phút',
      'c. 10 phút',
      'd. 15 phút',
    ],
    correct: 1
  },
  {
    question: 'Tất cả các nguồn cung cấp điện 3 pha lớn hơn 100 A cho các công trình xây dựng phải duy trì hệ số công suất là bao nhiêu ở ngay tại điểm đấu nối?',
    options: [
      'a. 0,8-0,85',
      'b. 0,85-0,87',
      'c. 0,87-0,9',
      'd. 0,9-1',
    ],
    correct: 3
  },
  {
    question: 'Đối với khu vực cấp điện đặc biệt là bể bơi, vùng 1 là vùng thế nào ?',
    options: [
      'a. Trong lòng bể bơi',
      'b. Trong khoảng 2m cách thành bể bơi',
      'c. Trong khoảng cách từ 2m đến 3,5m cách thành bể bơi',
      'd. Cách thành bể bơi trên 3,5m',
    ],
    correct: 1
  },
  {
    question: 'Trong sơ đồ bảo vệ an toàn nào sau đây: khi sự cố chạm vỏ 1 pha mạng điện vẫn làm việc được trong thời gian quy định ?',
    options: [
      'a. Sơ đồ IT',
      'b. Sơ đồ TT',
      'c. Sơ đồ TN-C-S',
      'd. Sơ đồ TN-S',
    ],
    correct: 0
  },
  {
    question: 'CB có thể dùng để cắt sự cố chạm vỏ trong mạng điện có sơ đồ bảo vệ an toàn nào sao đây?',
    options: [
      'a. Sơ đồ IT',
      'b. Sơ đồ TT',
      'c. Sơ đồ TN-C',
      'd. Tất cả đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Trong bảo vệ chống sét công trình cấp I bằng lồng thu sét, kích thước của lưới thu sét trên mái bằng bao nhiêu?',
    options: [
      'a. 5m x 5m',
      'b. 10m x 10m',
      'c. 15m x 15m',
      'd. 20m x 20m',
    ],
    correct: 0
  },
  {
    question: 'Trong bảo vệ sét đánh trực tiếp, hiệu quả bắt sét đối với bảo vệ cấp II là?',
    options: [
      'a. 99%',
      'b. 97%',
      'c. 95%',
      'd. 91%',
    ],
    correct: 1
  },
  {
    question: 'Theo tiêu chuẩn TCVN 9206, suất phụ tải biểu kiến chiếu sáng cho công việc hành chính, văn phòng?',
    options: [
      'a. 22 VA/m2',
      'b. 24 VA/m2',
      'c. 26 VA/m2',
      'd. 28 VA/m2',
    ],
    correct: 1
  },
  {
    question: 'Trong các trường học phổ thông cơ sở, trường mẫu giáo, nhà trẻ, và các nơi dành cho thiếu nhi sử dụng, ổ cắm điện phải đặt cao cách sàn bao nhiêu?',
    options: [
      'a. 1,1 m',
      'b. 1,2 m',
      'c. 1,5 m',
      'd. 1,6 m',
    ],
    correct: 2
  },
  {
    question: 'Tổn thất điện áp ở cực của các động cơ đặt xa nhất khi khởi động so với điện áp định mức không được vượt quá các trị số như sau?',
    options: [
      'a. 12%',
      'b. 15%',
      'c. 8%',
      'd. 20%',
    ],
    correct: 1
  },
  {
    question: 'Trong điều kiện bình thường, tần số hệ thống điện được phép dao động trong phạm vi bao nhiêu so với tần số danh định là 50Hz?',
    options: [
      'a. ± 0,1Hz',
      'b. ± 0,2Hz',
      'c. ± 0,5Hz',
      'd. Không được phép dao động',
    ],
    correct: 1
  },
  {
    question: 'Theo quy phạm trang bị điện, hệ số đồng thời để tính phụ tải cực đại của các hộ tiêu thụ thuần dạng phụ tải sinh hoạt bao nhiêu?',
    options: [
      'a. 0,6',
      'b. 0,7',
      'c. 0,85',
      'd. 0,9',
    ],
    correct: 3
  },
  {
    question: 'Nhiệt độ phát nóng của thanh dẫn đồng khi ngắn mạch không được vượt quá trị số cho phép bao nhiêu?',
    options: [
      'a. 300 độ C',
      'b. 250 độ C',
      'c. 150 độ C',
      'd. 120 độ C',
    ],
    correct: 0
  },
  {
    question: 'Theo quy phạm trang bị điện, các biến dòng điện và máy biến điện áp đo lường đấu nối với công tơ thanh toán điện năng phải có cấp chính xác không lớn hơn?',
    options: [
      'a. 0,2',
      'b. 0,5',
      'c. 1',
      'd. 2',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế công trình đường dây điện cao áp trên không cấp I, khoảng cách an toàn phóng điện khi không có giao chéo phải đáp ứng là bao nhiêu?',
    options: [
      'a. 7m;',
      'b. 6m;',
      'c. 4m;',
      'd. Đáp án a và b đúng.',
    ],
    correct: 1
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
    question: 'Khi xây dựng, cải tạo đoạn đường dây dẫn điện cao áp trên không vượt qua nhà ở, công tình có người sinh sống, làm việc bên trong; nơi thường xuyên tập trung đông người; công trình quan trọng liên quan đến an ninh quốc gia, khu di tích lịch sử văn hóa, khoảng cách từ điểm thấp nhất của dây dẫn điện ở trạng thái võng cực đại đến mặt đất phải đảm bảo như thế nào:',
    options: [
      'a. 15m với điện áp đến 35kV.',
      'b. 15m với điện áp đến 110kV.',
      'c. 18m với điện áp đến 220kV.',
      'd. Đáp án b và c đúng.',
    ],
    correct: 3
  },
  {
    question: 'Trong hệ thống điện nhà ở và nhà công cộng, các sơ đồ nối đất nào được phép sử dụng ?',
    options: [
      'a. Các sơ đồ TT; TN-C; TN-S; TN-C-S; IT',
      'b. Các sơ đồ TT; TN-C; TN-S, IT',
      'c. Các sơ đồ TT; TN-S; IT',
      'd. Các sơ đồ TT, IT',
    ],
    correct: 2
  },
  {
    question: 'Dây dẫn liên kết bảo vệ nối giữa hai vỏ kim loại của thiết bị phải có khả năng dẫn điện và đáp ứng yêu cầu nào ?',
    options: [
      'a. Bằng hoặc lớn hơn Icp của dây PE có Icp nhỏ nhất nối với các vỏ thiết bị đó',
      'b. Bằng hoặc lớn hơn Icp của dây PE có Icp lớn nhất nối với các vỏ thiết bị đó',
      'c. Bằng hoặc nhỏ hơn Icp của dây PE có Icp nhỏ nhất nối với các vỏ thiết bị đó',
      'd. Bằng hoặc nhỏ hơn Icp của dây PE có Icp lớn nhất nối với các vỏ thiết bị đó.',
    ],
    correct: 0
  },
  {
    question: 'Biện pháp nào sau đây không có khả năng hạn chế ứng suất điện áp ?',
    options: [
      'a. Tách biệt nối đất giữa cao áp và hạ áp tại trạm biến áp phân phối',
      'b. Thay đổi sơ đồ nối đất trong hệ thống điện hạ áp',
      'c. Giảm điện trở nối đất trạm biến áp',
      'd. Đặt thiết bị bảo vệ quá dòng điện',
    ],
    correct: 3
  },
  {
    question: 'Trong vùng 0 và 1 của khu vực bể bơi, phải sử dụng điện áp siêu thấp SELV có điện áp danh định không lớn hơn bao nhiêu V ?',
    options: [
      'a. 120V',
      'b. 50V',
      'c. 25V',
      'd. 12V',
    ],
    correct: 3
  },
  {
    question: 'Trong các khu vực có bồn tắm hoặc vòi hoa sen hoặc bể bơi và đài phun nước, không được lắp đặt thiết bị đóng cắt, điều khiển trong vùng nào ?',
    options: [
      'a. vùng 0',
      'b. vùng 1',
      'c. vùng 2',
      'd. ngoài vùng 0, 1 và 2',
    ],
    correct: 0
  },
  {
    question: 'Về việc sử dụng hiệu quả điện năng trong hệ thống điện các công trình xây dựng, phải lắp công tơ đo đếm tại các nhánh phụ tải điện có tổng công suất lắp đặt lớn hơn bao nhiêu kVA ?',
    options: [
      'a. 50 kVA',
      'b. 75 kVA',
      'c. 100 kVA',
      'd. 150 kVA',
    ],
    correct: 2
  },
  {
    question: 'Không được phép sử dụng giải pháp cấp nước nóng dùng điện trở cho công trình có nhu cầu cung cấp nước nóng lớn, tập trung, tiêu thụ năng lượng bao nhiêu ?',
    options: [
      'a. Trên 50 MWh/năm',
      'b. Trên 60 MWh/năm',
      'c. Trên 70 MWh/năm',
      'd. Trên 80 MWh/năm',
    ],
    correct: 0
  },
  {
    question: 'Trong hệ thống nối đất của hệ thống điện nhà ở, thiết bị đóng cắt và mối nối trên dây PE được thực hiện thế nào ?',
    options: [
      'a. Cho phép đặt thiết bị đóng cắt và các mối nối.',
      'b. Cho phép đặt thiết bị đóng cắt, và các mối nối có thể tách bằng dụng cụ chuyên dùng.',
      'c. Không được đặt thiết bị đóng cắt, và không được bố trí các mối nối.',
      'd. Không được đặt thiết bị đóng cắt và không được bố trí các mối nối, trừ các mối nối có thể tách bằng dụng cụ chuyên dùng.',
    ],
    correct: 3
  },
  {
    question: 'Trong hệ thống điện nhà ở, đối với dây pha có tiết diện lớn hơn 35mm2, dây PE bằng đồng trong hệ thống nối đất có tiết diện nhỏ nhất là bao nhiêu ?',
    options: [
      'a. Bằng tiết diện dây pha',
      'b. Bằng nửa tiết diện dây pha',
      'c. Bằng 1/3 tiết diện dây pha',
      'd. Bằng 2/3 tiết diện dây pha',
    ],
    correct: 1
  },
  {
    question: 'Trong hệ thống điện nhà ở, đối với dây pha có tiết diện lớn hơn 35mm2, dây PE bằng thép trong hệ thống nối đất có tiết diện nhỏ nhất là bao nhiêu ?',
    options: [
      'a. Bằng nửa tiết diện dây pha',
      'b. Bằng tiết diện dây pha',
      'c. Bằng 1,5 lần tiết diện dây pha',
      'd. Bằng 3 lần tiết diện dây pha',
    ],
    correct: 2
  },
  {
    question: 'Trong hệ thống điện nhà ở và nhà công cộng, các tiếp điểm động của mọi thiết bị cách ly và đóng cắt nhiều cực cần phải khớp nối cơ khí đảm bảo đóng mở đồng thời, trừ những tiếp điểm dùng cho dây trung tính có thể như sau ?',
    options: [
      'a. Đóng và mở sau các tiếp điểm khác.',
      'b. Đóng và mở trước các tiếp điểm khác.',
      'c. Đóng trước và mở sau các tiếp điểm khác.',
      'd. Đóng sau và mở trước các tiếp điểm khác.',
    ],
    correct: 2
  },
  {
    question: 'Điện trở nối đất phải đảm bảo thế nào ?',
    options: [
      'a. Nhỏ hơn 0,5Ω',
      'b. Nhỏ hơn 4Ω',
      'c. Nhỏ hơn 10Ω',
      'd. Đảm bảo để thiết bị bảo vệ quá dòng điện và RCD làm việc có hiệu quả.',
    ],
    correct: 3
  },
  {
    question: 'Mạch điện nào sau đây không cần sử dụng bảo vệ quá tải ?',
    options: [
      'a. Mạch rẽ nhánh chưa được bảo vệ hiệu quả từ phía nguồn',
      'b. Mạch có nhiều ổ cắm điện',
      'c. Mạch điện dùng cho viễn thông, điều khiển',
      'd. Mạch điện có sự thay đổi về tiết diện dây dẫn',
    ],
    correct: 2
  },
  {
    question: 'Theo TCVN 9888:2013 được biên soạn dựa trên IEC62305:2010, khi sét đánh trực tiếp vào công trình, những vị trí sét đánh nào phải được xem xét ?',
    options: [
      'a. Sét đánh vào hệ thống bảo vệ chống sét (S1).',
      'b. S1, sét đánh xuống đất gần công trình (S2).',
      'c. S1, S2, sét đánh vào đường dây nối với công trình (S3).',
      'd. S1, S2, S3, sét đánh xuống đất gần đường dây nối với công trình (S4).',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp góc bảo vệ được sử dụng để xác định vùng bảo vệ của hệ thống bảo vệ chống sét bên ngoài cho các công trình có độ cao bao nhiêu m ?',
    options: [
      'a. Dưới 20m',
      'b. 20-30m',
      'c. 30-45m',
      'd. 45-60m',
    ],
    correct: 0
  },
  {
    question: 'Đối với tòa nhà cao 100m, phải đặt thiết bị thu sét ở bên hông tòa nhà ở vị trí cách mặt đất trên bao nhiêu m ?',
    options: [
      'a. 20m',
      'b. 30m',
      'c. 45m',
      'd. 60m',
    ],
    correct: 3
  },
  {
    question: 'Theo hệ thống bảo vệ chống sét cấp IV, khoảng cách giữa 2 dây xuống cạnh nhau là bao nhiêu ?',
    options: [
      'a. 10m',
      'b. 15m',
      'c. 20m',
      'd. 25m',
    ],
    correct: 2
  },
  {
    question: 'Trong vùng 1 của khu vực có bồn tắm hoặc vòi hoa sen, các phụ kiện, kể cảổ cắm của mạch điện được cấp từ nguồn điện áp siêu thấp (SELV hoặcPELV) phải có điện áp danh định không lớn hơn bao nhiêu V ?',
    options: [
      'a. 120V',
      'b. 50V',
      'c. 25V',
      'd. 12V',
    ],
    correct: 2
  },
  {
    question: 'Các mạch cấp điện cho các thiết bị điện y tế có tính chất quyết định đến sinh mạng của bệnh nhân, các thiết bị phẫu thuật và thiết bị trong không gian xung quanh bệnh nhân (là không gian mà bệnh nhân có thể chạm trực tiếp hoặc qua người khác chạm vào các bộ phận của thiết bị điện y tế) trong các khu vực thuộc nhóm 2 phải sử dụng sơ đồ nào ?',
    options: [
      'a. TT',
      'b. TN-S',
      'c. TT và TN-S',
      'd. IT',
    ],
    correct: 3
  },
  {
    question: 'Yêu cầu chỉ số hiệu quả COP (kW/kW) tối thiểu của 1 cụm máy điều hòa không khí làm lạnh trực tiếp bằng bao nhiêu ?',
    options: [
      'a. 2',
      'b. 2,8',
      'c. 2,6',
      'd. 3',
    ],
    correct: 1
  },
  {
    question: 'Theo QCVN 09:2017/BXD, nội dung này sau đây là đúng khi quy định về chiếu sáng tự nhiên trong các phòng làm việc, phòng học, phòng đọc thư viện?',
    options: [
      'a. Phải có giải pháp điều chỉnh chiếu sáng nhân tạo',
      'b. Chỉ sử dụng giải pháp chiếu sáng nhân tạo',
      'c. Sử dụng chiếu sáng tự nhiên là chủ yếu',
      'd. Các đáp án trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Về việc điều khiển chiếu sáng nhân tạo cho các không gian rộng đến 1000 m2 trong công trình, diện tích chiếu sáng tối đa mà một thiết bị điều khiển chiếu sáng phải kiểm soát diện tích là bao nhiêu ?',
    options: [
      'a. 100m2',
      'b. 150m2',
      'c. 200m2',
      'd. 250m2',
    ],
    correct: 3
  },
  {
    question: 'Hệ thống điện trong các cung cư cao tầng phải đảm bảo công suất lắp đặt lớn nhất cho phép của toàn công trình là bao nhiêu ?',
    options: [
      'a. 50 W/m2',
      'b. 60 W/m2',
      'c. 70 W/m2',
      'd. 80 W/m2',
    ],
    correct: 2
  },
  {
    question: 'Trong hệ thống điện nhà ở, 2,5mm2 là tiết diện tối thiểu của dây pha trong các mạch xoay chiều nào sau đây ?',
    options: [
      'a. Mạch chiếu sáng',
      'b. Mạch động lực',
      'c. Mạch tín hiệu điều khiển',
      'd. Mạch đường dẫn điện cấp điện cho một hoặc một số tầng',
    ],
    correct: 1
  },
  {
    question: 'Dây trung tính trong hệ thống điện nhà ở phải có tiết diện ít nhất bằng tiết diện của dây pha nào trong các trường hợp sau đây ?',
    options: [
      'a. Mạch điện một pha 2 dây;',
      'b. Mạch điện ba pha, tiết diện của dây pha nhỏ hơn hoặc bằng 16 mm2;',
      'c. Mạch điện 3 pha có sóng hài bậc 3 và bội số lẻ của 3 và độ méo do các sóng hài này từ 15 % đến 33 % biên độ của dòng điện tần số cơ bản;',
      'd. Cả ba loại mạch điện trên.',
    ],
    correct: 3
  },
  {
    question: 'Các tủ phân phối điện không được lắp đặt ở đâu ?',
    options: [
      'a. Phòng dành riêng cho tủ điện',
      'b. Nơi khô ráo, thuận tiện và dễ tới để thao tác, sửa chữa;',
      'c. Trong hộp, tủ hoặc trong hộc tường có cửa bảo vệ.',
      'd. Chỗ rửa, phòng giặt, phòng có hóa chất.',
    ],
    correct: 3
  },
  {
    question: 'Các phụ tải điện nào sau đây trong hệ thống điện nhà ở phải được cấp điện bằng các đường dẫn điện riêng từ tủ phân phối điện chính ?',
    options: [
      'a. Hệ thống chiếu sáng cầu thang, lối đi chung, hành lang',
      'b. Những phòng khác ngoài phạm vi căn hộ của nhà ở.',
      'c. Thang máy',
      'd. Cả ba loại trên đây',
    ],
    correct: 3
  },
  {
    question: 'Thiết bị nào sau đây không được dùng làm bộ phận của điện cực nối đất trong hệ thống nối đất của hệ thống điện nhà ở ?',
    options: [
      'a. Kết cầu thép trong bê tông móng của công trình',
      'b. Ống dẫn nước bằng thép',
      'c. Ống dẫn khí đốt bằng thép',
      'd. Các thanh ray bằng thép',
    ],
    correct: 2
  },
  {
    question: 'Dây dẫn liên kết bảo vệ bằng đồng nối với thanh nối đất chính phải có tiết diện tối thiểu bằng bao nhiêu ?',
    options: [
      'a. 6mm2',
      'b. 10mm2',
      'c. 16mm2',
      'd. 25mm2',
    ],
    correct: 1
  },
  {
    question: 'Nếu sử dụng thiết bị bảo vệ theo dòng điện dư - RCD làm bảo vệ bổ sung cho thiết bị điện ở những mạch điện có sử dụng dụng cụ cầm tay, dòng làm việc của RCD được đặt không quá bao nhiêu ?',
    options: [
      'a. 10mA',
      'b. 30mA',
      'c. 50mA',
      'd. 100mA',
    ],
    correct: 1
  },
  {
    question: 'Biện pháp an toàn nào sau đây dùng để bảo vệ chống tiếp xúc trực tiếp ?',
    options: [
      'a. Nối đất vỏ kim loại của thiết bị',
      'b. Bảo vệ tự động cắt mạch điện khi có sự cố',
      'c. Nối liên kết đẳng thế',
      'd. Bao bọc bằng cách điện',
    ],
    correct: 3
  },
  {
    question: 'Dòng điện trong các dây dẫn song song được coi là phân bố đều nếu chênh lệch giữa các dòng điện trong các dây dẫn bất kỳ không lớn hơn bao nhiêu % dòng điện thiết kế cho mỗi dây dẫn ?',
    options: [
      'a. 5%',
      'b. 10%',
      'c. 15%',
      'd. 20%',
    ],
    correct: 1
  },
  {
    question: 'Điện áp ứng suất (stress voltage) là điện áp nguy hiểm xuất hiện trong trường hợp nào ?',
    options: [
      'a. Giữa hai dây pha',
      'b. Giữa dây pha với dây trung tính',
      'c. Giữa dây pha với vỏ thiết bị',
      'd. Giữa dây pha với đất',
    ],
    correct: 2
  },
  {
    question: 'Theo TCVN 9888:2013 có bao nhiêu cấp của hệ thống bảo vệ chống sét bên ngoài ?',
    options: [
      'a. 2 cấp',
      'b. 3 cấp',
      'c. 4 cấp',
      'd. 5 cấp',
    ],
    correct: 2
  },
  {
    question: 'Hệ thống bảo vệ chống sét bên ngoài bao gồm những bộ phận nào ?',
    options: [
      'a. Bộ phận thu sét,',
      'b. Dây dẫn xuống đất',
      'c. Mạng nối đất chống sét',
      'd. Cả ba bộ phận trên đây',
    ],
    correct: 3
  },
  {
    question: 'Điện trở nối đất chống sét cho tòa nhà ở và nhà công cộng không được vượt quá bao nhiêu Ω ?',
    options: [
      'a. 0,5Ω',
      'b. 1Ω',
      'c. 4Ω',
      'd. 10Ω',
    ],
    correct: 3
  },
  {
    question: 'Yêu cầu hiệu suất phát sáng tối thiểu của bóng đèn huỳnh quang thẳng 40W phải là bao nhiêu ?',
    options: [
      'a. 70 lm/W',
      'b. 75 lm/W',
      'c. 78 lm/W',
      'd. 80 lm/W',
    ],
    correct: 2
  },
  {
    question: 'Yêu cầu hiệu suất phát sáng tối thiểu của bóng đèn huỳnh quang compact 15W phải là bao nhiêu ?',
    options: [
      'a. 60 lm/W',
      'b. 65 lm/W',
      'c. 70 lm/W',
      'd. 75 lm/W',
    ],
    correct: 1
  },
  {
    question: 'Đối với tính năng tiết kiệm năng lượng sử dụng thiết bị điều khiển giảm tốc, thang cuốn phải chuyển sang chế độ chạy chậm sau khi không có người qua lại tối đa bao lâu ?',
    options: [
      'a. 1 phút',
      'b. 2 phút',
      'c. 3 phút',
      'd. 5 phút',
    ],
    correct: 2
  },
];
