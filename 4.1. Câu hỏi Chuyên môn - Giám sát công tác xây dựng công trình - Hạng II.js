const questions = [
  {
    question: 'Sai lệch cho phép theo chiều dài hoặc nhịp của kết cấu bê tông cốt thép toàn khối là:',
    options: [
      'a. ± 20 mm.',
      'b. ± 25 mm.',
      'c. ± 15 mm.',
      'd. Không được phép sai lệch.',
    ],
    correct: 0
  },
  {
    question: 'Khi thiết kế cốp pha đà giáo phải tính toán với các trị số tải trọng tiêu chuẩn sau đây:',
    options: [
      'a. Tải trọng thẳng đứng và tải trọng ngang phải được nhân với hệ số vượt tải.',
      'b. Độ võng của các bộ phận cốp pha do tác động của các tải trọng không được lớn hơn các trị số theo quy định.',
      'c. Tính toán ổn định chống lật của cốp pha và đà giáo phải xét đến tác động đồng thời của tải trọng gió và khối lượng bản thân. Nếu cốp pha được lắp liền với cốt thép thì phải tính cả khối lượng cốt thép.',
      'd. Bao gồm cả a, b và',
    ],
    correct: 3
  },
  {
    question: 'Sai lệch san nền cho phép của bộ phận công trình đất so với thiết kế dùng phương pháp kiểm tra máy thủy chuẩn cách quãng 50 m là:',
    options: [
      'a. ± 1 mm.',
      'b. ± 0,5 mm.',
      'c. ± 0,0001 m.',
      'd. ± 0,002 m.',
    ],
    correct: 2
  },
  {
    question: 'Trong công tác kiểm tra hồ sơ thiết kế bản vẽ thi công, tư vấn giám sát đã phát hiện ra thiếu nhiều kích thước, chi tiết thiết kế để xác định đủ khối lượng công việc liên quan trong hợp đồng xây dựng theo hình thức trọn gói, giám sát trưởng phải làm như thế nào là đúng:',
    options: [
      'a. Báo cáo chủ đầu tư đề nghị tư vấn thiết kế bổ sung các chi tiết trong bản vẽ còn thiếu và tiên lượng dự toán điều chỉnh gửi cơ quan thẩm tra kiểm tra.',
      'b. Yêu cầu nhà thầu ghi nhật ký thi công và sẽ xác nhận trong bản vẽ hoàn công.',
      'c. Đề xuất nhà thầu tiếp tục triển khai thi công, tư vấn thiết kế bổ sung các chi tiết còn thiếu trong quá trình giám sát tác giả.',
      'd. Kiểm tra lại toàn bộ các phần nội dung khác của hồ sơ thiết kế bản vẽ thi công, đề xuất với chủ đầu tư tổ chức cuộc họp giữa các bên tham gia dự án để xử lý hoàn thiện các nội dung còn thiếu theo quy định của pháp luật, những công việc không vướng mắc, nhà thầu tiếp tục thi công theo bản vẽ đã được phê duyệt.',
    ],
    correct: 3
  },
  {
    question: 'Bê tông đầm lăn khác bê tông thường chỗ nào?',
    options: [
      'a. Trong bê tông đầm lăn có ít nước so với bê tông thông thường.',
      'b. Bê tông đầm lăn phải dùng phụ gia hạt mịn làm giảm nước mà vẫn giữ được độ linh động.',
      'c. Thi công bê tông đầm lăn phải có lực đầm lớn và lực nén chặt bê tông lớn nên phải dùng xe lu để đầm.',
      'd. Phải bảo đảm tất cả các tính chất nêu tại các phương án trên đây.',
    ],
    correct: 3
  },
  {
    question: 'Những công tác thi công nào cần giám sát?',
    options: [
      'a. Chỉ những công tác quan trọng.',
      'b. Mọi công tác thi công đều phải giám sát.',
      'c. Những công việc sau này bị che khuất do vật liệu khác lấp phủ.',
      'd. Những công tác ảnh hưởng đến việc thi công tiếp theo.',
    ],
    correct: 1
  },
  {
    question: 'Giám sát vào những thời gian nào?',
    options: [
      'a. Giám sát vào giờ hành chính.',
      'b. Giám sát vào ban đêm khi đổ bê tông.',
      'c. Khi nào trên công trường diễn ra các hoạt động xây dựng đều phải giám sát.',
      'd. Khi sắp nghiệm thu công tác xây dựng thì cần giám sát.',
    ],
    correct: 2
  },
  {
    question: 'Kiểm tra sự chuẩn bị để thi công đất còn phải thêm những điều kiện gì?',
    options: [
      'a. Khi thi công đất, ngoài lớp đất nằm dưới mức nước ngầm bị bão hòa nước, cũng phải chú ý đến lớp đất ướt trên mức nước ngầm do hiện tượng mao dẫn.',
      'b. Tùy loại đất mà lớp đất bị mao dẫn có chiều cao: Cát thô, cát hạt trung và cát hạt nhỏ chiều cao mao dẫn là 0,5 m.',
      'c. Chiều cao mao dẫn là cát mịn và đất cát pha chiều cao mao dẫn là 1,5 m.',
      'd. Đất pha sét, đất sét và hoàng thổ chiều cao phải xác định tại hiện trường.',
    ],
    correct: 0
  },
  {
    question: 'Giám sát và kiểm tra chất lượng cốt thép ứng lực trước khi thi công bê tông ứng lực trước cho sàn nhà cao tầng?',
    options: [
      'a. Thép sử dụng làm ứng lực trước phải có catalogue.',
      'b. Lớp vỏ bọc cáp phải đáp ứng được các yêu cầu theo quy định về tính chất cơ học, nhiệt độ.',
      'c. Việc cắt các thanh hay bó thép ứng lực trước, nhất thiết phải mài bằng máy mài có tốc độ cao.',
      'd. Chỉ dẫn phải ghi đầy đủ trong chỉ dẫn kỹ thuật.',
    ],
    correct: 3
  },
  {
    question: 'Tiêu chí để giám sát?',
    options: [
      'a. Giám sát thi công đúng thiết kế được phê duyệt, đúng tiêu chuẩn, quy chuẩn áp dụng, quy định về quản lý, sử dụng vật liệu xây dựng, chỉ dẫn kỹ thuật và hợp đồng xây dựng',
      'b. Giám sát theo đúng ý kiến của bên thiết kế',
      'c. Giám sát theo lệnh ghi trong giấy giao việc của chủ đầu tư',
      'd. Giám sát theo hướng dẫn của chuyên gia nước ngoài.',
    ],
    correct: 0
  },
  {
    question: 'Có một tiêu chí để giám sát là trung thực, khách quan, không vụ lợi có đúng không?',
    options: [
      'a. Đúng là giám sát phải trung thực, khách quan, không vụ lợi.',
      'b. Giám sát phải theo ý muốn của chủ đầu tư, có lợi cho chủ đầu tư',
      'c. Phải giám sát theo phương án rẻ nhất',
      'd. Giám sát cẩn lựa theo lòng mong muốn của nhà thầu để họ hợp tác tốt với cán bộ giám sát.',
    ],
    correct: 0
  },
  {
    question: 'Tiêu chuẩn nào được sử dụng trong quá trình thi công và nghiệm thu công tác đất ?',
    options: [
      'a. TCVN 4447:2012',
      'b. TCVN 4447:1987',
      'c. TCVN 9379: 2012',
      'd. TCVN 9360: 2012',
    ],
    correct: 0
  },
  {
    question: 'Kiểm tra tài liệu cần có để giám sát chất lượng thi công đất bao gồm những tài liệu nào?',
    options: [
      'a. Thiết kế kỹ thuật công trình.',
      'b. Thiết kế cơ sở của công trình.',
      'c. Thiết kế lắp đặt thiết bị công trình.',
      'd. Thiết kế biện pháp thi công đất.',
    ],
    correct: 3
  },
  {
    question: 'Trong thiết kế biện pháp thi công đất cần những lưu ý gì?',
    options: [
      'a. Không được thải bừa bãi nước bẩn, đất rác bẩn ra khu vực công trình đang thi công.',
      'b. Được thải một phần nước bẩn, đất rác bẩn ra công trường.',
      'c. Không được thải nước bẩn nhưng được thải chút ít đất rác bẩn.',
      'd. Không được thải đất rác bẩn nhưng có thể thải ít nước bẩn.',
    ],
    correct: 0
  },
  {
    question: 'Mái dốc cho thành hố đào tạm thời nên lựa chọn theo các chỉ tiêu thế nào?',
    options: [
      'a. Độ dốc lớn nhất cho phép của mái dốc hào và hố móng khi không cần gia cố, cần tuân thủ chỉ dẫn kỹ thuật.',
      'b. Các chỉ tiêu này lấy theo TCVN 4447:2012 Công tác đất - Tiêu chuẩn thi công và nghiệm thu.',
      'c. Tùy loại đất mà quyết định mái dốc cho thành hố đào.',
      'd. Kỹ sư tư vấn giám sát quyết định tại chỗ.',
    ],
    correct: 1
  },
  {
    question: 'Những quy định khi sử dụng máy đào một gầu đào móng có cho phép để lại lớp bảo vệ không?',
    options: [
      'a. Khi sử dụng máy đào một gầu để đào móng, để tránh phá hoại cấu trúc địa chất đặt móng, cho phép để lớp bảo vệ.',
      'b. Bề dày lớp bảo vệ đáy móng (cm) tùy thuộc dùng máy đào có dung tích gầu (m3) lớn hay bé mà quyết định theo tiêu chuẩn',
      'c. Thợ khéo tay, đào không cần lớp bảo vệ.',
      'd. Nếu dưới nền không có cọc thì không cần để lớp bảo vệ.',
    ],
    correct: 0
  },
  {
    question: 'Giám sát và kiểm soát chất lượng ép cọc theo phương án nào?',
    options: [
      'a. Kiểm tra việc chọn thiết bị ép, công suất thiết bị lớn hơn 1,4 lần lực ép thiết kế quy định',
      'b. Lựa chọn đối trọng phù hợp. Đối trọng phải lớn hơn 1,1 lần lực ép lớn nhất.',
      'c. Gia tải 10 ~ 15% tải trọng thiết kế để thử ổn định của hệ thiết bị ép.',
      'd. Phải theo tất cả các phương án nêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Giám sát và kiểm soát chất lượng thí nghiệm cọc để nghiệm thu có phương án thêm nào dưới đây?',
    options: [
      'a. Phải bám sát các khâu thi công nền móng, không được bỏ sót công đoạn nào',
      'b. Quá trình theo dõi thí nghiệm, cần luôn luôn đối chiều với các thông số ở báo cáo kết quả khảo sát địa chất công trình',
      'c. Nếu nghi ngờ về kết quả thì yêu cầu nhà thầu thi công kiểm tra dưới sự chứng kiến của tư vấn giám sát.',
      'd. Nếu có nghi ngờ về dữ liệu địa chất hay thủy văn, có thể yêu cầu một đơn vị thẩm định xác định dữ liệu.',
    ],
    correct: 1
  },
  {
    question: 'Những tiêu chuẩn nào dưới đây không dùng cho thi công cọc nhồi và tường vây?',
    options: [
      'a. TCVN 9395: 2012 Cọc khoan nhồi - Tiêu chuẩn thi công và nghiệm thu',
      'b. TCVN 4447: 2012 Công tác đất - Thi công và nghiệm thu',
      'c. TCVN 10304: 2014 Móng cọc - Tiêu chuẩn thiết kế',
      'd. TCVN 9340: 2012 Hỗn hợp bê tông trộn sẵn - Yêu cầu cơ bản đánh giá chất lượng và nghiệm thu',
    ],
    correct: 1
  },
  {
    question: 'Kiểm soát chất lượng khi thi công bê tông cọc khoan nhồi?',
    options: [
      'a. Phải kiểm tra chất lượng bê tông phù hợp với chỉ dẫn thiết kế',
      'b. Thi công đổ bê tông không gián đoạn trong thời gian',
      'c. Kiểm soát mực đầy của bê tông khi đổ bê tông.',
      'd. Tất cả các yêu cầu trên',
    ],
    correct: 3
  },
  {
    question: 'Khâu chuẩn bị cho công tác hoàn thiện hạng mục công việc gồm những việc gì?',
    options: [
      'a. Phải thi công xong các việc làm trước khi hoàn thiện như điện, nước.',
      'b. Có biên bản nghiệm thu cho các việc đã làm xong.',
      'c. Phải khắc phục các sai sót các lớp nằm dưới lớp hoàn thiện.',
      'd. Biên bản nghiệm thu trước đó có nội dung đủ điều kiện cho phép thi công hoàn thiện.',
    ],
    correct: 3
  },
  {
    question: 'Cần chuẩn bị cho khâu lắp đặt thiết bị công trình thế nào?',
    options: [
      'a. Mọi việc phần xây phải đủ điều kiện để lắp đặt thiết bị.',
      'b. Phải lập biên bản bàn giao giữa bên xây và bên lắp.',
      'c. Không được lắp hai loại thiết bị khác nhau trong một buồng, một phạm vi công tác.',
      'd. Phải có phối hợp trong quy trình lắp đặt thiết bị.',
    ],
    correct: 3
  },
  {
    question: 'Khi chiều sâu đặt móng thay đổi, việc đào đất trong các hố móng phải làm từng cấp. Tỷ số giữa chiều cao và chiều dài của mỗi bậc không được nhỏ hơn giá trị sau:',
    options: [
      'a. 1:2 ở các đất dính và 1:3 ở các đất không dính.',
      'b. 2:3 ở các đất dính và 1:2 ở các đất không dính.',
      'c. 1:1 ở các đất dính và 2:3 ở các đất không dính.',
      'd. 1:1 ở các đất dính và 1:2 ở các đất không dính.',
    ],
    correct: 0
  },
  {
    question: 'Khi khoan tạo lỗ cọc khoan nhồi gần cọc mới đổ bê tông xong, cần đảm bảo yêu cầu sau:',
    options: [
      'a. Tiến hành cách quãng một lỗ khi khoảng cách mép các lỗ < 1.5m và khoan trong đất no nước.',
      'b. Tiến hành khoan sau 12 giờ khi khoan lỗ giữa hai cọc đã đổ bê tông từ khi kết thúc đổ bê tông.',
      'c. Tiến hành cách quãng một lỗ khi khoảng cách mép các lỗ < 1.0m và khoan trong đất no nước.',
      'd. Tiến hành khoan sau 6 giờ khi khoan lỗ giữa hai cọc đã đổ bê tông từ khi kết thúc đổ bê tông.',
    ],
    correct: 0
  },
  {
    question: 'Khi khoan tạo lỗ cọc khoan nhồi, cao độ chân ống chống tạm phải đảm bảo:',
    options: [
      'a. Áp lực cột dung dịch nhỏ hơn áp lực chủ động của đất nền và hoạt tải thi công.',
      'b. Áp lực cột dung dịch lớn hơn áp lực chủ động của đất nền và hoạt tải thi công.',
      'c. Áp lực cột dung dịch nhỏ hơn áp lực chủ động của đất nền.',
      'd. Áp lực cột dung dịch nhỏ hơn áp lực chủ động của đất nền.',
    ],
    correct: 1
  },
  {
    question: 'Sai số cho phép để kiểm tra nghiệm thu công tác chế tạo lồng cốt thép cọc khoan nhồi như sau:',
    options: [
      'a. Sai số độ dài lồng thép là ±50mm.',
      'b. Sai số đường kính lồng thép là ±10mm.',
      'c. Sai số khoảng cách giữa các cốt chủ là ±10mm.',
      'd. Các câu trên đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Yêu cầu về bố trí mạch ngừng thi công khi đổ bê tông đáy bể chứa như sau:',
    options: [
      'a. Tại vị trí bất kỳ đối với đáy bể chứa có kích thước lớn nhất ở mặt bằng không quá 20m.',
      'b. Song song với cạnh ngắn đáy bể đối với đáy bể chứa có kích thước lớn nhất ở mặt bằng không quá 20m.',
      'c. Không được để mạch ngừng thi công đối với đáy bể chứa có kích thước lớn nhất ở mặt bằng không quá 20m.',
      'd. Không được để mạch ngừng thi công đối với mọi loại đáy bể chứa.',
    ],
    correct: 2
  },
  {
    question: 'Trước khi xây khối xây vòm, phải kiểm tra chia gạch xây trước lên ván khuôn theo nguyên tắc sau:',
    options: [
      'a. Chia từ đỉnh xuống chân, và điều chỉnh cho chẵn viên gạch.',
      'b. Chia từ đỉnh xuống chân, có thể cắt gạch để đảm bảo kích thước khối xây.',
      'c. Xây theo thứ tự từ trái qua phải hoặc ngược lại, không cần phải chia trước.',
      'd. Xây theo thứ tự bất kỳ thuận lợi nhất, tùy kích thước vòm.',
    ],
    correct: 0
  },
  {
    question: 'Việc tháo dỡ ván khuôn khối xây vòm phải thực hiện theo trình tự sau:',
    options: [
      'a. Khối xây vòm đã đủ cường độ và thời gian theo quy định thì tháo dỡ hẳn ván khuôn.',
      'b. Tháo nêm hạ toàn bộ ván khuôn xuống 0.1m - 0.15m theo trình tự đối xứng trên toàn vòm, kiểm tra an toàn mới tháo dỡ hẳn.',
      'c. Khối xây vòm đạt 70% cường độ thiết kế thì tháo dỡ hẳn ván khuôn.',
      'd. Tháo dỡ hẳn ván khuôn theo trình tự đối xứng trên toàn bộ vòm.',
    ],
    correct: 1
  },
  {
    question: 'Khi nghiệm thu công tác thi công kết cấu gạch đá trong vùng động đất, phải kiểm tra thêm:',
    options: [
      'a. Các đai kháng chấn theo từng tầng.',
      'b. Việc liên kết các tường mỏng và vách mỏng với các tường chịu lực, với khung và với các sàn.',
      'c. Việc gia cường các tường gạch bằng các cấu kiện bê tông cốt thép lắp ghép và đổ tại chỗ.',
      'd. Tất cả các câu trên đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Khi kiểm tra chất lượng và sức chịu tải của cọc khoan nhồi nhà cao tầng bằng công tác thử tĩnh, cọc thí nghiệm phải được dừng thí nghiệm khi xảy ra một trong các hiện tượng sau:',
    options: [
      'a. Số đọc cơ sở ban đầu không chính xác.',
      'b. Độ lún lớn nhất của cọc tại cấp tải trọng 2.0 lần tải thiết kế sau 24 giờ bằng 2% đường kính cọc.',
      'c. Độ lún lớn nhất của cọc tại cấp tải trọng 2.5 lần tải thiết kế sau 24 giờ bằng 2% đường kính cọc.',
      'd. Độ lún dư bằng 5mm.',
    ],
    correct: 0
  },
  {
    question: 'Khi kiểm tra chất lượng và sức chịu tải của cọc khoan nhồi nhà cao tầng bằng công tác thử tĩnh, cọc thí nghiệm được coi là bị phá hoại khi xảy ra một trong các hiện tượng sau:',
    options: [
      'a. Kích đồng hồ đo biến dạng bị hư hỏng.',
      'b. Liên hết giữa hệ thống gia tải, cọc neo không đảm bảo.',
      'c. Độ lún dư bằng 10mm.',
      'd. Tất cả các câu trên đều đúng.',
    ],
    correct: 2
  },
  {
    question: 'Cốp pha dầm bê tông có khẩu độ 6m có độ vồng thi công là:',
    options: [
      'a. Không được thi công có độ vồng.',
      'b. 18mm.',
      'c. 9mm.',
      'd. 6mm.',
    ],
    correct: 1
  },
  {
    question: 'Mặt cắt ngang của tiết diện cột bê tông cốt thép tại vị trí một nửa chiều cao cột có 8 thanh thép tròn gân ø20 chịu lực. Việc nối buộc chồng cốt thép trong trường hợp nào sau đây được phép thực hiện:',
    options: [
      'a. Có 4 thanh thép ø20 được nối trong cùng một mặt cắt.',
      'b. Có 3 thanh thép ø20 được nối trong cùng một mặt cắt.',
      'c. Có 2 thanh thép ø20 được nối trong cùng một mặt cắt.',
      'd. Cả 3 trường hợp trên.',
    ],
    correct: 3
  },
  {
    question: 'Các đoạn cọc có các khiếm khuyết sau sẽ không được nghiệm thu sử dụng:',
    options: [
      'a. Sai lệch chiều dài đoạn cọc là - 20mm',
      'b. Có vết nứt rộng hơn 0.2mm',
      'c. Độ sâu vết nứt ở góc không quá 10mm.',
      'd. Độ lệch mũi cọc khỏi tâm là 10mm.',
    ],
    correct: 1
  },
  {
    question: 'Cọc bê tông cốt thép được thi công bằng búa đóng diesel, độ chối được xác định như sau:',
    options: [
      'a. Bằng trị trung bình của loạt 10 nhát sau cùng.',
      'b. Tiến hành đóng từng nhát để theo dõi độ chối cho mỗi nhát.',
      'c. Đo độ lún của cọc, tần số đập của búa và áp lực hơi cho từng phút.',
      'd. Độ lún của cọc ở nhát cuối cùng.',
    ],
    correct: 0
  },
  {
    question: 'Kiếm tra giám sát việc ghi chép lực ép theo nhật ký ép cọc được tiến hành như sau:',
    options: [
      'a. Cho từng m chiều dài cọc tới khi đạt độ sâu ép cọc theo thiết kế;',
      'b. Cho từng m chiều dài cọc tới khi đạt lực ép lớn nhất Pmax;',
      'c. Cho từng m chiều dài cọc tới khi đạt lực ép nhỏ nhất Pmin;',
      'd. Cho từng m chiều dài cọc tới khi đạt lực ép nhỏ nhất Pmin, sau đó ghi chép cho từng 20cm đến khi kết thúc.',
    ],
    correct: 3
  },
  {
    question: 'Kiểm tra, nghiệm thu dung dịch bentonite giữ thành hố khoan cọc khoan nhồi được thực hiện như sau:',
    options: [
      'a. Chỉ cần thực hiện cho mỗi lô trộn mới.',
      'b. Kiểm tra dung trọng, độ nhớt, hàm lượng cát và độ pH phải được thực hiện cho từng cọc.',
      'c. Cao độ dung dịch phải bằng cao độ mực nước ngầm.',
      'd. Không kiểm tra chỉ tiêu tính năng của dung dịch nếu được tái sử dụng không quá 6 tháng.',
    ],
    correct: 1
  },
  {
    question: 'Khi khoan tạo lỗ cọc khoan nhồi, cao độ đỉnh ống chống tạm phải cao hơn mặt đất hoặc mực nước cao nhất tối thiểu là:',
    options: [
      'a. 0.1m.',
      'b. 0.2m.',
      'c. 0.3m.',
      'd. 0.4m.',
    ],
    correct: 2
  },
  {
    question: 'Khi khoan tạo lỗ cọc khoan nhồi, cao độ dung dịch khoan trong lỗ phải luôn được giữ đảm bảo sao cho:',
    options: [
      'a. Áp lực dung dịch khoan luôn lớn hơn áp lực của đất và nước ngầm phía ngoài lỗ khoan.',
      'b. Áp lực dung dịch khoan luôn nhỏ hơn áp lực của đất và nước ngầm phía ngoài lỗ khoan.',
      'c. Cao hơn mực nước ngầm ít nhất 0.5m.',
      'd. Cao hơn mực nước ngầm ít nhất 1.0m.',
    ],
    correct: 0
  },
  {
    question: 'Kiểm tra chất lượng bê tông cọc khoan nhồi trước khi đổ theo yêu cầu sau:',
    options: [
      'a. Mỗi cọc lấy 3 tổ mẫu (3 mẫu/tổ) cho ba phần, đầu, giữa và mũi cọc.',
      'b. Lấy mẫu theo quy định cứ 20 m3 bê tông/01 tổ mẫu, mỗi tổ 3 mẫu.',
      'c. Có thể sử dụng các phương pháp siêu âm, tán xạ Gamma, phương pháp động biến dạng nhỏ...',
      'd. Có thể sử dụng phương pháp khoan lấy lõi.',
    ],
    correct: 0
  },
  {
    question: 'Chênh lệch cao độ cho phép giữa hai mép vật liệu lát là gạch ceramic, granite, gạch lát xi măng quy định như sau:',
    options: [
      'a. 0.5mm.',
      'b. 1.0mm.',
      'c. 1.5mm.',
      'd. 2.0mm.',
    ],
    correct: 0
  },
  {
    question: 'Yêu cầu kiểm tra dung sai cho phép trên mặt láng không được vượt quá giá trị sau:',
    options: [
      'a. Dung sai cao độ: 2cm.',
      'b. Dung sai độ dốc: 0.5%',
      'c. Dung sai khe hở với thước 3m: 3mm',
      'd. Các câu trên đều sai.',
    ],
    correct: 2
  },
  {
    question: 'Khi kiểm tra giám sát công tác trát vữa tại những vị trí tiếp giáp giữa hai kết cấu bằng vật liệu khác nhau, phải yêu cầu nhà thầu thực hiện như sau:',
    options: [
      'a. Gắn một lớp lưới thép phủ kín chiều dày mạch ghép, và trùm về hai bên từ 15cm đến 20cm.',
      'b. Sử dụng cát chế tạo vữa trát có hạt cốt liệu nhỏ hoặc bằng 1.25mm.',
      'c. Sử dụng xi măng Póoc-lăng có mác từ PC20 đến PC40 để chế tạo vữa.',
      'd. Trước khi trát phải phun cát, vẫy hoặc phu hồ xi măng.',
    ],
    correct: 0
  },
  {
    question: 'Khi kiểm tra công tác trát tường, yêu cầu giám sát chiều dày mỗi lớp trát không được vượt quá giá trị sau:',
    options: [
      'a. 15mm',
      'b. 12mm',
      'c. 10mm',
      'd. 8mm',
    ],
    correct: 3
  },
  {
    question: 'Khi kiểm tra công tác trát tường, nếu lớp trát dày phải trát thành nhiều lớp, giám sát phải yêu cầu thực hiện biện pháp thi công sau:',
    options: [
      'a. Trát liên tục lớp sau ngay sau khi trát xong lớp trước.',
      'b. Kẻ mặt trát thành các ô quả trám để tăng độ bám dính cho các lớp trát tiếp theo.',
      'c. Ngay sau khi trát lớp trước, phải phun nước làm ẩm trước khi trát tiếp.',
      'd. Mỗi lớp trát không được dày quá 12mm.',
    ],
    correct: 1
  },
  {
    question: 'Công tác bảo dưỡng mặt trát trong điều kiện nắng nóng và khô hanh phải thực hiện như sau:',
    options: [
      'a. Không cần bảo dưỡng',
      'b. Che chắn tạo mát cho mặt trát.',
      'c. Sau khi trát 24 giờ nên tiến hành phun ẩm trên mặt trát.',
      'd. Ngay sau khi trát phải tiến hành tưới nước trên mặt trát.',
    ],
    correct: 2
  },
  {
    question: 'Dung sai cho phép của chiều dày lớp vữa trát có yêu cầu chất lượng rất cao so với thiết kế là:',
    options: [
      'a. 3mm.',
      'b. 2mm.',
      'c. 1mm.',
      'd. 0.5mm.',
    ],
    correct: 2
  },
  {
    question: 'Tần suất kiểm tra độ ngang bằng của hàng, độ thẳng đứng của mặt bên và các góc trong khối xây gạch đá như sau:',
    options: [
      'a. Mỗi tầng kiểm tra một lần.',
      'b. Kiểm tra ít nhất 2 lần trong một đoạn cao từ 0.5m đến 0.6m.',
      'c. Mỗi 5 hàng gạch kiểm tra 1 lần.',
      'd. Kiểm tra một lần khi được mời nghiệm thu hoàn thành.',
    ],
    correct: 1
  },
  {
    question: 'Vữa xây tường và cột gạch phải có độ dẻo theo độ sụt của côn tiêu chuẩn như sau:',
    options: [
      'a. Từ 5cm đến 9cm.',
      'b. Từ 9cm đến 13cm.',
      'c. Từ 13cm đến 17cm.',
      'd. Chỉ cần quan tâm đến cường độ vữa đạt yêu cầu theo thiết kế.',
    ],
    correct: 1
  },
  {
    question: 'Chiều dày của từng mạch vữa ngang trong khối xây gạch phải đảm bảo yêu cầu sau để được nghiệm thu:',
    options: [
      'a. Trung bình 15mm.',
      'b. Từ 10mm đến 20mm.',
      'c. Từ 5mm đến 10mm.',
      'd. Từ 8mm đến 12mm.',
    ],
    correct: 3
  },
  {
    question: 'Khi kiểm tra bằng thước dài 2m, khe hở giữa thước và bề mặt ốp gạch men phải đảm bảo yêu cầu sau:',
    options: [
      'a. Không được lớn hơn 0.5mm.',
      'b. Không được lớn hơn 1.0mm.',
      'c. Không được lớn hơn 1.5mm.',
      'd. Không được lớn hơn 2.0mm.',
    ],
    correct: 3
  },
  {
    question: 'Cốp pha thành bên của dầm, cột, tường có thể được tháo dỡ khi bê tông đạt cường độ bao nhiêu ?',
    options: [
      'a. 70% cường độ theo mác thiết kế.',
      'b. 50% cường độ theo mác thiết kế.',
      'c. 50 N/cm2.',
      'd. Sau khi đổ bê tông được 24 giờ, không cần quan tâm đến cường độ.',
    ],
    correct: 2
  },
  {
    question: 'Kiểm tra cốt thép sau khi cắt uốn phù hợp với hình dáng kích thước của thiết kế được thực hiện theo các phương án nào?',
    options: [
      'a. Theo từng lô, mỗi lô 100 thanh thép cùng loại, chọn 5 thanh bất kỳ để kiểm tra.',
      'b. Theo từng lô, mỗi lô 100 thanh thép cùng loại, chọn 3 thanh bất kỳ để kiểm tra.',
      'c. Chọn 5 thanh bất kỳ trong toàn bộ số lượng được mời nghiệm thu để kiểm tra.',
      'd. Không kiểm tra công việc này, chỉ nghiệm thu toàn bộ cốt thép cấu kiện trước khi đổ bê tông.',
    ],
    correct: 0
  },
  {
    question: 'Trường hợp nào sau đây bắt buộc phải tiến hành kiểm tra thí nghiệm xi măng tại hiện trường:',
    options: [
      'a. Chỉ thí nghiệm duy nhất một lần khi thiết kế thành phần cấp phối bê tông.',
      'b. Mỗi lần nghiệm thu vật tư xi măng chở đến cung cấp cho công trường.',
      'c. Lô xi măng đã được bảo quản trên 3 tháng kể từ ngày sản xuất.',
      'd. Không cần thí nghiệm nếu nhà thầu đã cung cấp đầy đủ chứng chỉ xuất xứ và bộ hồ sơ hợp quy của xi măng.',
    ],
    correct: 2
  },
  {
    question: 'Công tác thiết kế thành phần bê tông thông qua phòng thí nghiệm:',
    options: [
      'a. Phải thực hiện đối với bê tông có cấp độ bền B10 trở lên.',
      'b. Phải thực hiện đối với bê tông có cấp độ bền B15 trở lên.',
      'c. Phải thực hiện đối với bê tông có cấp độ bền B20 trở lên.',
      'd. Phải thực hiện đối với bê tông có cấp độ bền B25 trở lên.',
    ],
    correct: 0
  },
  {
    question: 'Để tránh phân tầng, chiều cao rơi tự do của hỗn hợp bê tông khi đổ không vượt quá:',
    options: [
      'a. 2,5m.',
      'b. 2,0m.',
      'c. 1,5m.',
      'd. 1,0m.',
    ],
    correct: 2
  },
  {
    question: 'Dấu hiệu để nhận biết bê tông đã được đầm kỹ là:',
    options: [
      'a. Đầm liên tục trong 5 phút.',
      'b. Đầm liên tục trong thời gian do thiết kế quy định.',
      'c. Hỗn hợp bê tông ổn định không còn sụt xuống.',
      'd. Vữa xi măng nổi lên bề mặt và bọt khí không còn nữa.',
    ],
    correct: 3
  },
  {
    question: 'Một công trình được xây dựng vào mùa khô tại TP.HCM, thời gian bảo dưỡng bê tông không được nhỏ hơn:',
    options: [
      'a. 5 ngày đêm và đồng thời bê tông đạt 60% cường độ thiết kế.',
      'b. 6 ngày đêm và đồng thời bê tông đạt 70% cường độ thiết kế.',
      'c. 7 ngày đêm và đồng thời bê tông đạt 80% cường độ thiết kế.',
      'd. Cho đến khi bê tông đạt 100% cường độ thiết kế.',
    ],
    correct: 1
  },
  {
    question: 'Mạch ngừng thi công khi đổ bê tông cột nên đặt ở các vị trí sau:',
    options: [
      'a. Ở mặt trên của móng.',
      'b. Ở mặt dưới của dầm, xà hay dưới công xôn đỡ dầm cầu trục.',
      'c. Ở mặt trên dầm cầu trục.',
      'd. Cả 3 câu trên đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Kiểm tra độ sụt tại hiện trường của hỗn hợp bê tông thương phẩm được thực hiện như sau:',
    options: [
      'a. Kiểm tra trong mỗi lần giao hàng tại nơi đổ bê tông.',
      'b. Cứ 20 m3 bê tông lấy một tổ mẫu để kiểm tra.',
      'c. Chỉ kiểm tra đối với xe bê tông đầu tiên.',
      'd. Kiểm tra ngẫu nhiên bất cứ lúc nào.',
    ],
    correct: 0
  },
  {
    question: 'Các mẫu thí nghiệm xác định cường độ bê tông khung và các kết cấu mỏng (cột, dầm, sàn…) được lấy như sau:',
    options: [
      'a. Theo từng tổ, mỗi tổ 3 viên mẫu, mỗi cấu kiện lấy một tổ mẫu.',
      'b. Theo từng tổ, mỗi tổ 3 viên mẫu, 20 m3 bê tông lấy một tổ mẫu.',
      'c. Theo từng tổ, mỗi tổ 3 viên mẫu, một xe bê tông thương phẩm lấy một tổ mẫu.',
      'd. Lấy ngẫu nhiên bất cứ khi nào có nghi ngờ.',
    ],
    correct: 1
  },
  {
    question: 'Cường độ bê tông sau khi kiểm tra ở tuổi 28 ngày bằng ép mẫu đúc tại hiện trường được coi là đạt yêu cầu thiết kế khi:',
    options: [
      'a. Tất cả các viên mẫu đều có cường độ không nhỏ hơn mác thiết kế.',
      'b. Giá trị trung bình của từng tổ mẫu không được nhỏ hơn mác thiết kế.',
      'c. Giá trị trung bình của từng tổ mẫu không được nhỏ hơn 85% mác thiết kế.',
      'd. Giá trị trung bình của từng tổ mẫu không được nhỏ hơn mác thiết kế và không có mẫu nào trong các tổ mẫu có cường độ dưới 85% mác thiết kế.',
    ],
    correct: 3
  },
  {
    question: 'Khi nghiệm thu vật liệu đầu vào các loại vật liệu sau đây, bắt buộc phải có giấy chứng nhận hợp quy và công bố hợp quy mới được phép đưa vào sử dụng trong công trình:',
    options: [
      'a. Kính dán nhiều lớp và kính an toàn nhiều lớp.',
      'b. Xi măng.',
      'c. Cửa nhôm, cửa gỗ.',
      'd. Cả 3 câu trên đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Bê tông móng mới thi công được phép ngập nước ngầm vào hố móng trong trường hợp sau:',
    options: [
      'a. Không được phép ngập nước ngầm, bắt buộc phải bơm ra.',
      'b. Được phép ngập trong nước ngầm khi cường độ bê tông móng đạt 30% cường độ thiết kế.',
      'c. Được phép ngập trong nước ngầm khi cường độ bê tông móng đạt 70% cường độ thiết kế.',
      'd. Luôn được phép ngập trong nước ngầm.',
    ],
    correct: 1
  },
  {
    question: 'Khi kiểm tra biện pháp thi công cọc của nhà thầu, đơn vị tư vấn giám sát nên lưu ý làm rõ các điều sau:',
    options: [
      'a. Dự kiến sự cố và cách xử lý.',
      'b. Kế hoạch tài chính thi công cọc của nhà thầu.',
      'c. Dự toán thi công của nhà thầu.',
      'd. Khả năng đáp ứng công việc của Ban chỉ huy công trường.',
    ],
    correct: 0
  },
  {
    question: 'Chỉ bắt đầu được hàn nối các đoạn cọc khi đáp ứng yêu cầu sau:',
    options: [
      'a. Kích thước bản mã đúng thiết kế.',
      'b. Trục của đoạn cọc đã được kiểm tra độ thẳng đứng theo hai phương vuông góc nhau.',
      'c. Bề mặt ở đầu hai đoạn cọc nổi phải tiếp xúc khít nhau.',
      'd. Tất cả các câu trên đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Kiểm tra vật liệu cọc bê tông cốt thép tại nơi sản xuất bao gồm các khâu sau:',
    options: [
      'a. Sự đồng đều của lớp bê tông bảo vệ.',
      'b. Các chứng chỉ xuất xưởng, kết quả thí nghiệm, cấp phối bê tông, đường kính cốt thép, bước cốt đai.',
      'c. Lưới thép tăng cường, vành thép bó đầu cọc, và các mối hàn.',
      'd. Tất cả các câu trên đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Kiểm tra nghiệm thu thiết bị ép cọc cần thỏa mãn các yêu cầu sau:',
    options: [
      'a. Công suất của thiết bị không nhỏ hơn 1.4 lần lực ép lớn nhất do thiết kế quy định;',
      'b. Lực ép của thiết bị đảm bảo không gây ra lực ngang lên cọc.',
      'c. Chứng chỉ kiểm định còn hiệu lực và có bảng hiệu chỉnh kích do cơ quan thẩm quyền cấp.',
      'd. Cả 3 câu trên đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Cọc được công nhận là ép xong khi thỏa mãn các điều kiện sau:',
    options: [
      'a. Chiều dài cọc đã ép vào đất không nhỏ hơn Lmin và không quá Lmax (Lmin và Lmax là chiều dài nhỏ nhất và lớn nhất do thiết kế quy định);',
      'b. Lực ép trước khi dừng trong khoảng từ Pmin và Pmax (Pmin và Pmax là lực ép nhỏ nhất và lớn nhất do thiết kế quy định)',
      'c. Phải đồng thời thỏa mãn 2 điều kiện trên.',
      'd. Chỉ cần thỏa mãn một trong hai điều kiện trên.',
    ],
    correct: 2
  },
  {
    question: 'Khi đóng cọc đến độ sâu thiết kế mà chưa đạt độ chối quy định, thì tư vấn giám sát cần yêu cầu:',
    options: [
      'a. Nhà thầu kiểm tra lại quy trình đóng cọc.',
      'b. Thực hiện các thí nghiệm kiểm tra độ nguyên vẹn của cọc (PIT) và thí nghiệm PDA, báo đơn vị tư vấn thiết kế xử lý.',
      'c. Tiến hành đóng bù sau khi cọc được “nghỉ” và đã xác định nguyên nhân.',
      'd. Thực hiện đầy đủ theo các yêu cầu như trên.',
    ],
    correct: 3
  },
  {
    question: 'Các nhóm vật liệu sau khi nghiệm thu đưa vào sử dụng trong công trình bắt buộc phải có giấy chứng nhận hợp quy và công bố hợp quy:',
    options: [
      'a. Kính xây dựng.',
      'b. Gạch, đá ốp lát.',
      'c. Cửa sổ, cửa đi.',
      'd. Các câu trên đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Kiểm tra nghiệm thu lớp nền trước khi thực hiện công tác lát cần đảm bảo yêu cầu:',
    options: [
      'a. Mặt lớp nền phải sạch, phẳng, chắc chắn, ổn định, có độ bám dính với vật liệu gắn kết.',
      'b. Cao độ phù hợp với vật liệu lát phủ bên trên. Độ dốc lớp nền theo yêu cầu kỹ thuật.',
      'c. Các bộ phận bị che khuất (chi tiết chôn sẵn, chống thấm, hệ thống kỹ thuật...) phải được nghiệm thu.',
      'd. Các câu trên đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Kiểm tra giám sát gắn các mốc cao độ lát chuẩn đối với phòng có diện tích lớn như sau:',
    options: [
      'a. Có ít nhất 4 mốc tại 4 góc phòng.',
      'b. Gắn mốc theo lưới ô vuông, khoảng cách giữa các mốc không quá 3m.',
      'c. Gắn mốc theo lưới ô vuông, khoảng cách giữa các mốc không quá 4m.',
      'd. Không cần gắn mốc, chỉ cần dùng dây căng hoặc thước ni vô kiểm tra thường xuyên.',
    ],
    correct: 1
  },
  {
    question: 'Kiểm tra công tác bảo dưỡng mặt lát ở ngoài trời, có vật liệu gắn kết là vữa, được yêu cầu như sau:',
    options: [
      'a. Khi thời tiết nắng nóng: Tưới nước giữ ẩm trong 5 ngày.',
      'b. Phủ lên mặt lát vật liệu chống ẩm từ 1 đến 3 ngày.',
      'c. Phải có biện pháp che nắng và mưa xối trong 1 đến 3 ngày.',
      'd. Không cần bảo dưỡng.',
    ],
    correct: 2
  },
  {
    question: 'Khi kiểm tra độ đặc chắc và độ bám dính của vật liệu gạch lát, vật liệu láng với lớp nền, nếu đạt yêu cầu như sau sẽ được nghiệm thu:',
    options: [
      'a. Khi đi thử lên trên, mặt lát hay láng không rung, không có tiếng kêu.',
      'b. Không có biểu hiện trượt.',
      'c. Mặt lát không bị phồng.',
      'd. Dùng thanh gỗ gõ nhẹ lên bề mặt, tiếng gõ phải chắc đều ở mọi điểm, không có tiếng bộp.',
    ],
    correct: 3
  },
  {
    question: 'Kiểm tra nghiệm thu chất lượng trát bao gồm các chỉ tiêu chính như sau:',
    options: [
      'a. Độ phẳng mặt trát.',
      'b. Độ đặc chắc và bám dính của lớp trát với nền trát.',
      'c. Các yêu cầu đặc biệt khác của thiết kế.',
      'd. Tất cả các chỉ tiêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Kiểm tra chỉ tiêu độ đặc chắc và bám dính của lớp trát với nền trát bằng cách sau:',
    options: [
      'a. Gõ nhẹ lên mặt trát, tất cả những chỗ bộp phải phá ra làm lại.',
      'b. Quan sát bằng mắt thường, mặt trát không có vết rạn chân chim, vữa chảy, vết hằn dụng cụ trát...',
      'c. Sử dụng thiết bị chuyên ngành để thí nghiệm kiểm tra.',
      'd. Kiểm tra theo trình tự thi công, không cần kiểm tra sau khi đã thi công hoàn thành.',
    ],
    correct: 0
  },
  {
    question: 'Kiểm tra công tác lắp dựng giàn giáo, ván khuôn để xây tường theo yêu cầu sau:',
    options: [
      'a. Không dùng loại giàn giáo chống, dựa vào tường đang xây.',
      'b. Không bắc ván lên tường mới xây.',
      'c. Giàn giáo phải cách tường đang xây ít nhất 5cm.',
      'd. Tất cả các yêu cầu trên.',
    ],
    correct: 3
  },
  {
    question: 'Kiểm tra giám sát khối xây gạch phải đảm bảo các nguyên tắc kỹ thuật thi công như sau:',
    options: [
      'a. Đúng khối lượng được duyệt.',
      'b. Đúng tiến độ thi công được duyệt.',
      'c. Ngang - bằng; Đứng - thẳng; Góc - vuông; Mạch không trùng; Thành một khối đặc chắc.',
      'd. Các câu trên đều đúng.',
    ],
    correct: 2
  },
  {
    question: 'Các hàng gạch đặt ngang trong khối xây phải đảm bảo yêu cầu sau:',
    options: [
      'a. Xây ở hàng đầu tiên (dưới cùng) và hàng sau hết (trên cùng).',
      'b. Xây ở cao trình đỉnh cột, tường.',
      'c. Xây trong các bộ phận nhô ra của kết cấu khối xây (gờ, mái đua…).',
      'd. Tất cả các câu trên đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Khi nghiệm thu công tác thi công kết cấu gạch đá, phải kiểm tra một trong những việc sau:',
    options: [
      'a. Chiều dày và độ đặc của các mạch vữa liên kết, vị trí các hàng gạch ngang.',
      'b. Việc thi công chính xác các khe lún, khe co giãn.',
      'c. Tài liệu xác định mác vật liệu, bán thành phẩm và sản phẩm được sử dụng.',
      'd. Tất cả các câu trên đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Khi lựa chọn dây chuyền công nghệ xử lý nước cấp cho đô thị, bên cạnh các tiêu chí về thành phần tính chất của nước thô, công suất của trạm cấp nước, yêu cầu chất lượng nước cấp cho sinh hoạt theo quy định, cần căn cứ vào các tiêu chí nào khác?',
    options: [
      'a. Yêu cầu tiết kiệm diện tích.',
      'b. Yêu cầu tiết kiệm diện tích, chi phí đầu tư và vận hành.',
      'c. Yêu cầu tiết kiệm năng lượng.',
      'd. Yêu cầu tiết kiệm diện tích và năng lượng.',
    ],
    correct: 2
  },
  {
    question: 'Trong dây chuyền công nghệ khử sắt trong nước, khi nào phải sử dụng bể lắng tiếp xúc?',
    options: [
      'a. Khi hàm lượng cặn lớn nhất sau làm thoáng nhỏ hơn 15 mg/l',
      'b. Khi hàm lượng cặn lớn nhất sau làm thoáng lớn hơn 15 mg/l',
      'c. Khi hàm lượng cặn lớn nhất sau làm thoáng nhỏ hơn 20 mg/l',
      'd. Khi hàm lượng cặn lớn nhất sau làm thoáng lớn hơn 20 mg/l',
    ],
    correct: 3
  },
  {
    question: 'Diện tích tối thiểu khu đất xây dựng trạm xử lý nước công suất từ 60.000-120.000 m3/ngđ được dự báo trong quy hoạch cấp nước là bao nhiêu ha?',
    options: [
      'a. 3 ha',
      'b. 4 ha',
      'c. 5 ha',
      'd. 6 ha',
    ],
    correct: 1
  },
  {
    question: 'Trạm bơm cấp I bơm nước mặt có phân đợt xây dựng thì phân đợt như thế nào?',
    options: [
      'a. Phần nhà trạm được xây cho từng giai đoạn, phần thiết bị lắp đặt phù hợp với từng giai đoạn.',
      'b. Phần nhà trạm được xây cho hai giai đoạn ngay từ đợt đầu, phần thiết bị lắp đặt phù hợp với từng giai đoạn.',
      'c. Phần nhà trạm được xây cho hai giai đoạn ngay từ đợt đầu, phần thiết bị lắp đặt cho cả hai giai đoạn.',
      'd. Phần nhà trạm xây cho từng giai đoạn, phần thiết bị lắp đặt phù hợp với từng giai đoạn.',
    ],
    correct: 1
  },
  {
    question: 'Trong dây chuyền công nghệ xử lý nước cấp, phải bố trí ngăn tách khí khi sử dụng công trình nào?',
    options: [
      'a. Bể tạo bông có lớp cặn lơ lửng, bể lắng đứng, bể lắng trong có tầng cặn lơ lửng,',
      'b. Bể tạo bông kiểu vách ngăn, bể lắng trong có tầng cặn lơ lửng, bể lọc tiếp xúc,',
      'c. Bể tạo bông có lớp cặn lơ lửng, bể lắng trong có tầng cặn lơ lửng, bể lọc tiếp xúc',
      'd. Bể tạo bông kiểu vách ngăn, Bể tạo bông có lớp cặn lơ lửng, bể lắng trong có tầng cặn lơ lửng',
    ],
    correct: 2
  },
  {
    question: 'Khi khử trùng nước bằng clo hoặc các hợp chất chứa clo trong dây chuyền công nghệ xử lý nước cấp, hàm lượng clo dư được quy định như thế nào?',
    options: [
      'a. Lớn hơn 0,5 mg/l trên toàn bộ mạng lưới',
      'b. Lớn hơn 0,5 mg/l ở đầu mạng lưới cấp nước và không nhỏ hơn 0,3 mg/l ở cuối mạng lưới',
      'c. Nhỏ hơn 0,5 mg/l trên toàn bộ mạng lưới ở đầu mạng lưới cấp nước và không nhỏ hơn 0,3 mg/l ở cuối mạng lưới',
      'd. Nhỏ hơn 0,5 mg/l trên toàn bộ mạng lưới',
    ],
    correct: 2
  },
  {
    question: 'Trong trạm định lượng Clo, phải thiết kế hệ thống thông gió cơ khí hoạt động thường xuyên với số lần thay đổi không khí là bao nhiêu lần trong 1 giờ.',
    options: [
      'a. 4 lần/h',
      'b. 6 lần/h',
      'c. 10 lần/h',
      'd. 12 lần/h',
    ],
    correct: 1
  },
  {
    question: 'Độ sâu đặt ống cấp nước dưới đất (tính từ mặt đất đến đỉnh ống) được quy định như thế nào?',
    options: [
      'a. Khi D ≤ 300 mm: không nhỏ hơn 0,6 m; khi D > 300 mm: không nhỏ hơn 1,0 m.',
      'b. Khi D ≤ 300 mm: không nhỏ hơn 0,7 m; khi D > 300 mm: không nhỏ hơn 1,0 m.',
      'c. Khi D ≤ 300 mm: không nhỏ hơn 0,8 m; khi D > 300 mm: không nhỏ hơn 1,0 m.',
    ],
    correct: 1
  },
  {
    question: 'Trong thiết kế mạng lưới cấp nước đô thị, đối với mạng lưới xây mới hoàn toàn, áp lực tối thiểu cần thiết tại các điểm nút chính (mạng cấp 1) là bao nhiêu m?',
    options: [
      'a. 10 m',
      'b. 12 m',
      'c. 15 m',
      'd. 20 m',
    ],
    correct: 2
  },
  {
    question: 'Đối với mạng lưới cấp nước đô thị, áp lực tự do trong mạng lưới cấp nước chữa cháy phải đảm bảo tối thiểu là bao nhiêu m?',
    options: [
      'a. ≥ 10m',
      'b. ≥12m',
      'c. ≥15m',
      'd. ≥20m',
    ],
    correct: 0
  },
  {
    question: 'Trạm bơm cấp II bơm nước sạch sử dụng biến tần, trong giờ dùng nước ít, số vòng quay của máy bơm không được giảm đến dưới bao nhiêu % số vòng quay định mức',
    options: [
      'a. 40%',
      'b. 50%',
      'c. 60%',
      'd. 70%',
    ],
    correct: 1
  },
  {
    question: 'Sắp xếp thứ tự các công trình chính của hệ thống cấp nước cho đúng:',
    options: [
      'a. Khai thác, điều hoà, xử lý nước, vận chuyển và phân phối nước tới các đối tượng dùng nước.',
      'b. Khai thác, điều hoà, vận chuyển, xử lý nước và phân phối nước tới các đối tượng dùng nước.',
      'c. Khai thác, vận chuyển, điều hoà, xử lý nước và phân phối nước tới các đối tượng dùng nước.',
      'd. Khai thác, xử lý nước, điều hòa, vận chuyển và phân phối nước tới các đối tượng dùng nước.',
    ],
    correct: 3
  },
  {
    question: 'Khi độ dao động mực nước các mùa từ 6 m trở lên phải bố trí 2 hàng cửa thu nước ở độ cao khác nhau. Khoảng cách theo chiều cao giữa 2 hàng cửa tối thiểu là:',
    options: [
      'a. 2 m',
      'b. 3 m',
      'c. 4 m',
      'd. 5 m',
    ],
    correct: 1
  },
  {
    question: 'Việc bố trí ống hút của trạm bơm cấp nước, số lượng ống hút chung phải ít nhất là 2 ống. Trạm bơm cho phép đặt 1 ống hút có công suất?',
    options: [
      'a. Nhỏ hơn 1 000 m3/ngày',
      'b. Nhỏ hơn 3 000 m3/ngày',
      'c. Nhỏ hơn 5 000 m3/ngày',
      'd. Nhỏ hơn 10 000 m3/ngày',
    ],
    correct: 1
  },
  {
    question: 'Việc bố trí ống đẩy của trạm bơm cấp nước, phải bảo đảm ít nhất có 2 ống đẩy chung, trong trường hợp nào cho phép bố trí 1 ống đẩy chung?',
    options: [
      'a. Khi công suất nhỏ hơn 1 000 m3/ngày hoặc trong hệ thống có nhiều nhà máy cùng cấp nước vào mạng lưới',
      'b. Khi công suất nhỏ hơn 3 000 m3/ngày hoặc trong hệ thống có nhiều nhà máy cùng cấp nước vào mạng lưới',
      'c. Khi công suất nhỏ hơn 5 000 m3/ngày hoặc trong hệ thống có nhiều nhà máy cùng cấp nước vào mạng lưới',
      'd. Khi công suất nhỏ hơn 10 000 m3/ngày hoặc trong hệ thống có nhiều nhà máy cùng cấp nước vào mạng lưới',
    ],
    correct: 1
  },
  {
    question: 'Diện tích mặt bằng của trạm bơm giếng khoan tối thiểu là bao nhiêu m2',
    options: [
      'a. 8 m2',
      'b. 12 m2',
      'c. 16 m2',
      'd. 20 m2',
    ],
    correct: 1
  },
  {
    question: 'Phải xử lý nước rửa lọc khi trạm/ nhà máy xử lý nước cấp có công suất từ bao nhiêu m3/ngđ trở lên?',
    options: [
      'a. Công suất từ 3 000 m3/ngđ',
      'b. Công suất từ 5 000 m3/ngđ',
      'c. Công suất từ 10 000 m3/ngđ',
      'd. Công suất từ 30 000 m3/ngđ',
    ],
    correct: 2
  },
  {
    question: 'Khi nào công trình đơn vị trong trạm xử lý nước cấp tối thiểu phải có 2 đơn nguyên?',
    options: [
      'a. Khi công suất trạm từ 1.000 m3/ngđ trở lên',
      'b. Khi công suất trạm từ 2.000 m3/ngđ trở lên',
      'c. Khi công suất trạm từ 3.000 m3/ngđ trở lên',
      'd. Khi công suất trạm từ 5.000 m3/ngđ trở lên',
    ],
    correct: 2
  },
  {
    question: 'Hàm lượng cặn trong nước sau bể lắng đối với dây chuyền công nghệ xử lý nước cấp được quy định:',
    options: [
      'b. Hàm lượng cặn trong nước sau bể lắng không được vượt quá 15 mg/l',
      'c. Hàm lượng cặn trong nước sau bể lắng không được vượt quá 20 mg/l',
      'd. Hàm lượng cặn trong nước sau bể lắng không được vượt quá 30 mg/l',
    ],
    correct: 2
  },
  {
    question: 'Trong dây chuyền công nghệ xử lý nước cấp, quy định phải xây dựng công trình lắng sơ bộ trong trường hợp:',
    options: [
      'a. Nước có hàm lượng cặn lớn hơn 1 000 mg/l',
      'b. Nước có hàm lượng cặn lớn hơn 1 500 mg/l',
      'c. Nước có hàm lượng cặn lớn hơn 2 000 mg/l',
      'd. Nước có hàm lượng cặn lớn hơn 2 500 mg/l',
    ],
    correct: 1
  },
  {
    question: 'Giới hạn tốc độ lọc tính toán trong bể lọc chậm là:',
    options: [
      'a. Từ 0,05 - 0,1 m/h',
      'b. Từ 0,1 - 0,3 m/h',
      'c. Từ 0,3 - 0,5 m/h',
      'd. Từ 0,5 - 1,0 m/h',
    ],
    correct: 1
  },
  {
    question: 'Trong dây chuyền công nghệ xử lý nước cấp, chiều cao lớp nước trên bề mặt lớp lọc của bể lọc nhanh trọng lực được quy định:',
    options: [
      'a. Tối thiểu là 0,8 m',
      'b. Tối thiểu là 1,0 m',
      'c. Tối thiểu là 1,2 m',
      'd. Tối thiểu là 1,5 m',
    ],
    correct: 3
  },
  {
    question: 'Ở chế độ làm việc bình thường của bể lọc nhanh trọng lực với vật liệu lọc cát thạch anh được thiết kế với tốc độ lọc là:',
    options: [
      'a. 0,5 - 5 m/h',
      'b. 5 - 10 m/h',
      'c. 10 - 15 m/h',
      'd. 15 - 30 m/h',
    ],
    correct: 1
  },
  {
    question: 'Trong bể lọc nhanh trọng lực, hệ thống phân phối bằng chụp lọc được thiết kế khi áp dụng biện pháp rửa bằng nước kết hợp với không khí, số lượng chụp lọc được quy định như thế nào?',
    options: [
      'a. Không dưới 40 cái/m2 diện tích lọc của bể',
      'b. Không dưới 50 cái/m2 diện tích lọc của bể',
      'c. Không dưới 60 cái/m2 diện tích lọc của bể',
      'd. Không dưới 90 cái/m2 diện tích lọc của bể',
    ],
    correct: 1
  },
  {
    question: 'Đường ống cấp nước đặt qua sông, kênh, rạch phải đặt sâu hơn đáy sông, kênh rạch bao nhiêu m?',
    options: [
      'a. Ít nhất là 0,3 m',
      'b. Ít nhất là 0,5 m',
      'c. Ít nhất là 1,0 m',
      'd. Ít nhất là 1,5 m',
    ],
    correct: 1
  },
  {
    question: 'Đường ống dẫn cấp nước và mạng lưới phải đặt dốc về phía van xả cặn với độ dốc được quy định:',
    options: [
      'a. Không nhỏ hơn 0,001',
      'b. Không nhỏ hơn 0,002',
      'c. Không nhỏ hơn 0,003',
      'd. Không nhỏ hơn 0,005',
    ],
    correct: 0
  },
  {
    question: 'Khi nào bể mê tan phải được xem xét như một phương án để phân hủy cặn lắng của nước thải?',
    options: [
      'a. Khi trạm XLNT có công suất từ 5 000 m3/ngđ trở lên',
      'b. Khi trạm XLNT có công suất từ 6 000 m3/ngđ trở lên',
      'c. Khi trạm XLNT có công suất từ 7 000 m3/ngđ trở lên',
      'd. Khi trạm XLNT có công suất từ 8 000 m3/ngđ trở lên',
    ],
    correct: 2
  },
  {
    question: 'Đối với bãi lọc cát sỏi, hào lọc và bãi lọc ngập nước trồng cây để XLNT, chiều dày lớp đất không bão hòa (tính từ đáy bãi lọc đến mực nước ngầm cao nhất) là bao nhiêu m đối với đất cát, mùn, cát pha?',
    options: [
      'a. 1,0 m',
      'b. 1,5 m',
      'c. 2,0 m',
      'd. > 2,5 m',
    ],
    correct: 1
  },
  {
    question: 'Trong trạm/nhà máy XLNT, đối với mương ôxy hóa tuần hoàn, lượng bùn hoạt tính dư được xác định trong khoảng là:',
    options: [
      'a. 0,2-0,3 kg/kg BOD5',
      'b. 0,3-0,4 kg/kg BOD5',
      'c. 0,4-0,5 kg/kg BOD5',
      'd. 0,5-0,6 kg/kg BOD5',
    ],
    correct: 2
  },
  {
    question: 'Đường kính tối thiểu của ống, cống thoát nước mưa, cống thoát nước chung ngoài đường phố?',
    options: [
      'a. 300 mm',
      'b. 400 mm',
      'c. 450 mm',
      'd. 500 mm',
    ],
    correct: 1
  },
  {
    question: 'Độ dốc tối thiểu của rãnh thoát nước mưa bên đường.',
    options: [
      'a. Không nhỏ hơn 0,002',
      'b. Không nhỏ hơn 0,003',
      'c. Không nhỏ hơn 0,004',
      'd. Không nhỏ hơn 0,005',
    ],
    correct: 1
  },
  {
    question: 'Trong trường hợp đặc biệt, khi trạm xử lý nước thải (XLNT) hoặc sân phơi bùn bắt buộc phải đặt ở đầu hướng gió chính của đô thị, khoảng cách an toàn về môi trường phải tăng lên tối thiểu bao nhiêu lần so với khi Trạm XLNT đặt ở cuối hướng gió chính?',
    options: [
      'a. 1,2 lần',
      'b. 1,5 lần',
      'c. 1,8 lần',
      'd. 2 lần',
    ],
    correct: 1
  },
  {
    question: 'Trong trạm/nhà máy XLNT, chiều sâu hồ sinh học hiếu khí làm thoáng cưỡng bức được quy định thế nào?',
    options: [
      'a. Không dưới 3 m',
      'b. Không dưới 4 m',
      'c. Không quá 3 m',
      'd. Không quá 4 m',
    ],
    correct: 3
  },
  {
    question: 'Trong trạm bơm nước thải, khi nào ngăn thu cần chia ra 2 ngăn (nhưng không làm tăng thể tích chung)',
    options: [
      'a. Trạm bơm công suất lớn hơn 60.000 m3/ngđ',
      'b. Trạm bơm công suất lớn hơn 80.000 m3/ngđ',
      'c. Trạm bơm công suất lớn hơn 100.000 m3/ngđ',
      'd. Trạm bơm công suất lớn hơn 120.000 m3/ngđ',
    ],
    correct: 2
  },
  {
    question: 'Trong trạm/nhà máy XLNT, thể tích ngăn thu của trạm bơm cặn tươi, cặn đã lên men hoặc bùn hoạt tính xác định theo khối lượng bùn cần xả ra từ những nguồn nào?Bể nén bùn phải được bố trí trong các công trình xử lý nước thải có?',
    options: [
      'a. Bể mê tan',
      'b. Bể lọc sinh học',
      'c. Hồ sinh học',
      'd. Bể aeroten',
    ],
    correct: 3
  },
  {
    question: 'Trong trạm/nhà máy XLNT, khi công suất của trạm bơm không khí là bao nhiều thì cần ít nhất 2 máy làm việc?',
    options: [
      'a. 3.000 m3/h',
      'b. 4.000 m3/h',
      'c. 5.000 m3/h',
      'd. 6.000 m3/h',
    ],
    correct: 2
  },
  {
    question: 'Trong trạm/nhà máy XLNT, bể điều hòa khuấy trộn cơ khí được sử dụng khi nào?',
    options: [
      'a. Khi hàm lượng chất lơ lửng trên 200 mg/l với chế độ nước vào bể bất kỳ',
      'b. Khi hàm lượng chất lơ lửng trên 300 mg/l với chế độ nước vào bể bất kỳ',
      'c. Khi hàm lượng chất lơ lửng trên 400 mg/l với chế độ nước vào bể bất kỳ',
      'd. Khi hàm lượng chất lơ lửng trên 500 mg/l với chế độ nước vào bể bất kỳ',
    ],
    correct: 3
  },
  {
    question: 'Cấp công trình cấp I của công trình xử lý nước thải được quy định có tổng công suất bao nhiêu m3/ngđ?',
    options: [
      'a. Lớn hơn hoặc bằng 10.000 m3/ngđ',
      'b. Lớn hơn hoặc bằng 20.000 m3/ngđ',
      'c. Lớn hơn hoặc bằng 30.000 m3/ngđ',
      'd. Lớn hơn hoặc bằng 50.000 m3/ngđ',
    ],
    correct: 1
  },
  {
    question: 'Cấp công trình cấp I của tuyến cống thoát nước mưa, cống chung có tổng chiều dài lớn hơn 1.000m được quy định về đường kính trong của cống như thế nào?',
    options: [
      'a. Lớn hơn hoặc bằng 2.000 mm',
      'b. Lớn hơn hoặc bằng 1.500 mm',
      'c. Lớn hơn hoặc bằng 1.200 mm',
      'd. Lớn hơn hoặc bằng 1.000 mm',
    ],
    correct: 0
  },
  {
    question: 'Hệ thống thoát nước phải phù hợp các yếu tố:',
    options: [
      'a. Quy mô đô thị, yêu cầu vệ sinh,',
      'b. Yêu cầu vệ sinh, điều kiện tự nhiên,',
      'c. Hiện trạng đô thị và hiện trạng hệ thống thoát nước.',
      'd. Quy mô đô thị, yêu cầu vệ sinh, điều kiện tự nhiên, hiện trạng đô thị và hiện trạng hệ thống thoát nước.',
    ],
    correct: 3
  },
  {
    question: 'Khi lựa chọn hệ thống thoát nước, các khu đô thị xây dựng mới phải xây dựng',
    options: [
      'a. Hệ thống thoát nước nửa riêng',
      'b. Hệ thống thoát nước chung',
      'c. Hệ thống thoát nước riêng',
      'd. Hệ thống thoát nước riêng hoặc nửa riêng',
    ],
    correct: 2
  },
  {
    question: 'Lượng nước thải sinh hoạt thu gom được so với tiêu chuẩn cấp nước sinh hoạt?',
    options: [
      'a. Phải đạt ≥60%',
      'b. Phải đạt ≥70%',
      'c. Phải đạt ≥80%',
      'd. Phải đạt ≥90%',
    ],
    correct: 2
  },
  {
    question: 'Đường kính tối thiểu của ống, cống thoát nước thải ngoài đường phố?',
    options: [
      'a. 100 mm',
      'b. 150 mm',
      'c. 200 mm.',
      'd. 250 mm',
    ],
    correct: 2
  },
  {
    question: 'Vận tốc tính toán nhỏ nhất trong mạng lưới thoát nước tự chảy đối với các loại kích thước ống, cống, kênh, mương khác nhau được quy định:',
    options: [
      'a. 0,5 - 1,3 m/s',
      'b. 0,7 - 1,3 m/s',
      'c. 0,7 - 1,5 m/s',
      'd. 0,8 - 1,6 mm/s',
    ],
    correct: 1
  },
  {
    question: 'Độ đầy của ống thoát nước thải có D = 200 - 300 mm?',
    options: [
      'a. Không quá 0,6 D',
      'b. Không quá 0,65 D',
      'c. Không quá 0,7 D',
      'd. Không quá 0,75 D',
    ],
    correct: 0
  },
  {
    question: 'Độ sâu chôn ống nhỏ nhất đối với tất cả các loại đường kính ống (tính từ cao độ mặt đường đến đỉnh ống) tại khu vực có xe cơ giới qua lại?',
    options: [
      'a. 0,3 m',
      'b. 0,5 m',
      'c. 0,7 m',
      'd. 0,9 m',
    ],
    correct: 1
  },
  {
    question: 'Cống có đường kính nhỏ hơn hay bằng 800 mm, kích thước bên trong giếng thăm là:',
    options: [
      'a. D = 700 mm hoặc 700 x 700 mm',
      'b. D = 800 mm hoặc 800 x 800 mm',
      'c. D = 900 mm hoặc 900 x 900 mm;',
      'd. D = 1 000 mm hoặc 1 000 x 1 000 mm;',
    ],
    correct: 3
  },
  {
    question: 'Trạm/nhà máy XLNT phải xây dựng bể lắng cát khi nào?',
    options: [
      'a. Có công suất ≥ 100 m3/ngày đêm',
      'b. Có công suất ≥ 500 m3/ngày đêm',
      'c. Có công suất ≥ 1000 m3/ngày đêm',
      'd. Có công suất bất kỳ.',
    ],
    correct: 0
  },
  {
    question: 'Trong trạm/nhà máy XLNT phải bố trí thiết bị thu dầu mỡ khi nào?',
    options: [
      'a. Nồng độ dầu mỡ lớn hơn 50 mg/l.',
      'b. Nồng độ dầu mỡ lớn hơn 100 mg/l.',
      'c. Nồng độ dầu mỡ lớn hơn 150 mg/l.',
      'd. Nồng độ dầu mỡ lớn hơn 200 mg/l.',
    ],
    correct: 1
  },
  {
    question: 'Trong trạm/nhà máy XLNT, thời gian lưu thủy lực trong bể điều hòa lưu lượng và nồng độ?',
    options: [
      'a. Không dưới 6 giờ',
      'b. Không dưới 12 giờ',
      'c. Không dưới 18 giờ',
      'd. Không dưới 24 giờ',
    ],
    correct: 0
  },
  {
    question: 'Trong trạm/nhà máy XLNT, nồng độ chất rắn lơ lửng của dòng nước thải trước khi vào các công trình xử lý sinh học được quy định thế nào?',
    options: [
      'a. Dưới 150 mg/l',
      'b. Dưới 200 mg/l',
      'c. Dưới 250 mg/l',
      'd. Dưới 300 mg/l',
    ],
    correct: 0
  },
  {
    question: 'Trong trạm/nhà máy XLNT, thời gian tuyển nổi cần thiết trong thiết bị hay bể tuyển nổi?',
    options: [
      'a. Không dưới 15 phút',
      'b. Không dưới 20 phút',
      'c. Không dưới 25 phút',
    ],
    correct: 1
  },
  {
    question: 'Giếng thăm của mạng lưới thoát nước, chiều cao phần công tác của giếng (tính từ sàn công tác tới dàn đỡ cổ giếng) được quy định:',
    options: [
      'a. ≥ 1,2 m',
      'b. ≥ 1,5 m',
      'c. ≥ 1,8 m',
      'd. ≥ 2,0 m',
    ],
    correct: 2
  },
  {
    question: 'Trong trạm/nhà máy XLNT, nên tái sinh bùn hoạt tính cho bể aeroten đẩy trong trường hợp nào?',
    options: [
      'a. Khi BOD5 của nước thải đưa vào bể aeroten lớn hơn 150 mg/l (1)',
      'b. Nước thải sản xuất có các chất khó ôxy hóa sinh hóa (2)',
      'c. Nước thải chỉ được xử lý sinh học không hoàn toàn (3)',
      'd. Tất cả các trường hợp (1), (2), (3)',
    ],
    correct: 3
  },
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
  {
    question: 'Mật độ kiểm tra độ chặt của mỗi lớp đất đắp sau khi đầm nén xong được quy định như thế nào?',
    options: [
      'a. Tối thiểu 3 vị trí trên 1000 m2',
      'b. Tối thiểu 2 vị trí trên 1000 m2',
      'c. Tối thiểu 2 vị trí trên 1500 m2',
      'd. Tối thiểu 3 vị trí trên 1500 m2',
    ],
    correct: 1
  },
  {
    question: 'Khi nghiệm thu độ bằng phẳng của mặt trên cùng nền đường ô tô cấp III sau khi thi công (cả với nền đào và nền đắp) bằng thước dài 3 m, phải thỏa mãn điều kiện nào sau đây?',
    options: [
      'a. 100% số khe hở dưới thước dài 3 m không vượt quá 15 mm',
      'b. 70% số khe hở dưới thước dài 3 m không vượt quá 7 mm, còn lại không vượt quá 15 mm',
      'c. 70% số khe hở dưới thước dài 3 m không vượt quá 15 mm, còn lại không vượt quá 20 mm.',
      'd. 100% số khe hở dưới thước dài 3 m không vượt quá 20 mm',
    ],
    correct: 2
  },
  {
    question: 'Khi kiểm tra nghiệm thu kích thước hình học của nền đường sau thi công đối với đường cao tốc, cấp I, II và III, sai số cho phép của vị trí trục tim tuyến đường là bao nhiêu?',
    options: [
      'a. Không quá 30 mm',
      'b. Không quá 50 mm',
      'c. Không quá 70 mm',
      'd. Không quá 100 mm',
    ],
    correct: 1
  },
  {
    question: 'Nhiệt độ tối thiểu cho phép đổ hỗn hợp bê tông nhựa nóng từ xe ô tô vào phễu của máy rải là bao nhiêu?',
    options: [
      'a. 110oC khi sử dụng loại nhựa đường 60/70',
      'b. 120oC khi sử dụng loại nhựa đường 60/70',
      'c. 125oC khi sử dụng loại nhựa đường 60/70',
      'd. 130oC khi sử dụng loại nhựa đường 60/70',
    ],
    correct: 2
  },
  {
    question: 'Điều kiện thời tiết nào dưới đây xảy ra thì không được phép thi công hỗn hợp bê tông nhựa rải nóng?',
    options: [
      'a. Nhiệt độ không khí lớn hơn 15oC',
      'b. Trời mưa',
      'c. Nhiệt độ không khí thấp hơn 15oC',
      'd. Cả hai trường hợp B và C',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp nào dưới đây được dùng để xác định hàm lượng nhựa tối ưu của hỗn hợp bê tông nhựa chặt được sử dụng ở Việt Nam?',
    options: [
      'a. Phương pháp Marshall',
      'b. Phương pháp Superpave',
      'c. Phương pháp Hveen.',
      'd. Tất cả các phương pháp trên.',
    ],
    correct: 0
  },
  {
    question: 'Chỉ tiêu nào dưới đây không dùng để đánh chất lượng của nhựa đường đặc 60/70?',
    options: [
      'a. Độ kim lún ở 25oC',
      'b. Độ ổn định lưu trữ 24h',
      'c. Điểm hóa mềm (dụng cụ vòng và bi)',
      'd. Độ kéo dài ở 25oC',
    ],
    correct: 1
  },
  {
    question: 'Có thể sử dụng phương pháp nào dưới đây để kiểm tra phục vụ cho công tác nghiệm thu độ bằng phẳng mặt đường bê tông nhựa?',
    options: [
      'a. Phương pháp dùng thước 3 m',
      'b. Phương pháp sử dụng thiết bị đo IRI',
      'c. Cả hai phương pháp A và B',
      'd. Phương pháp sử dụng thiết bị đo độ xóc tích lũy',
    ],
    correct: 2
  },
  {
    question: 'Không được phép thi công mặt đường bê tông xi măng trong các điều kiện nào dưới đây?',
    options: [
      'a. Mưa tại hiện trường',
      'b. Tốc độ gió ≥ 10,8 m/s (cấp 6 trở lên)',
      'c. Nhiệt độ không khí ở hiện trường thi công < 40oC',
      'd. Cả A và',
    ],
    correct: 3
  },
  {
    question: 'Có thể sử dụng phương pháp nào dưới đây để kiểm tra độ bằng phẳng của mặt đường bê tông xi măng phục vụ cho việc nghiệm thu?',
    options: [
      'a. Phương pháp sử dụng thiết bị phân tích trắc dọc APL',
      'b. Phương pháp sử dụng thiết bị đo IRI',
      'c. Phương pháp sử dụng thiết bị đo mặt cắt kiểu không tiếp xúc',
      'd. Phương pháp sử dụng thiết bị đo độ xóc tích lũy',
    ],
    correct: 1
  },
  {
    question: 'Trong thi công móng cọc đóng bằng búa hơi hoặc búa diezen, nếu đóng cọc chưa đến độ sâu thiết kế mà cọc không xuống được hoặc độ chối rất nhỏ. Cách giải quyết thế nào?',
    options: [
      'a. Thay búa nặng hơn và đóng tiếp.',
      'b. Thay búa rung để rung hạ cọc.',
      'c. Ngừng đóng, cắt cọc.',
      'd. Kiểm tra lại độ chối lý thuyết, nghỉ một thời gian sau đó đóng tiếp rồi mới quyết định.',
    ],
    correct: 3
  },
  {
    question: 'Khi đổ bê tông cọc khoan nhồi trong hố khoan có nước hoặc dung dịch betonite, việc đổ bê tông sẽ thực hiện theo cách nào?',
    options: [
      'a. Đổ liên tục cho đến khi kết thúc.',
      'b. Chia thành các đợt đổ, thời gian mỗi đợt giới hạn trong 4 giờ.',
      'c. Chia thành các đợt đổ, thời gian nghỉ giữa mỗi đợt không ít hơn 4 giờ.',
      'd. Cả 3 cách làm trên đều được.',
    ],
    correct: 0
  },
  {
    question: 'Để xây dựng đài cọc có đỉnh đài nằm thấp hơn mực nước thi công. Nhà thầu đã làm vòng vây ngăn nước, nhưng hút nước trong vòng vây không cạn. Khi đó cần phải làm gì?',
    options: [
      'a. Đổ bê tông đài cọc trong nước bằng phương pháp dùng ống rút thẳng đứng.',
      'b. Đổ bê tông đài cọc trong nước bằng phương pháp vữa dâng.',
      'c. Đổ bê tông trong nước để bịt đáy vòng vây, hút cạn nước rồi thi công đài cọc.',
      'd. Có thể làm theo một trong ba cách trên',
    ],
    correct: 2
  },
  {
    question: 'Thử tải giàn giáo trong xây dựng cầu nhằm mục đích gì?',
    options: [
      'a. Kiểm tra độ bền các bộ phận của giàn giáo.',
      'b. Kiểm tra độ cứng của giàn giáo.',
      'c. Khử các biến dạng không đàn hồi của giàn giáo và biến dạng dư của nền móng giàn giáo.',
      'd. Cả 3 mục đích trên',
    ],
    correct: 2
  },
  {
    question: 'Khi cẩu lắp cấu kiện dầm cầu đúc sẵn bằng BTCT hoặc khi căng cốt thép trong kết cấu BTCT dự ứng lực trước căng sau, yêu cầu cường độ bê tông đạt bao nhiêu?',
    options: [
      'a. ≥ 70% R28',
      'b. ≥ 80% R28',
      'c. ≥ 90% R28',
      'd. Tùy theo quy định của thiết kế',
    ],
    correct: 3
  },
  {
    question: 'Khi chế tạo dầm cầu BTCT dự ứng lực theo công nghệ căng sau, việc căng các bó theo cách nào sau đây là đúng?',
    options: [
      'a. Căng đồng thời tất cả các bó.',
      'b. Căng từng bó theo thứ tự đã được tính toán trước của tư vấn thiết kế.',
      'c. Căng từng bó theo thứ tự bất kì.',
      'd. Có thể áp dụng một trong ba cách trên',
    ],
    correct: 1
  },
  {
    question: 'Cảng nào trong số sau đây chưa đủ điều kiện để được xác định là một cảng biển:',
    options: [
      'a. Được xây dựng ở vùng chịu ảnh hưởng của thủy triều.',
      'b. Được xây dựng ở vùng cửa sông, ven biển.',
      'c. Được xây dựng trên sông nằm sâu trong nội địa, nhưng có khả năng tiếp nhận tàu biển.',
      'd. Được xây dựng trên sông, có khả năng tiếp nhận cả tàu sông và tàu biển.',
    ],
    correct: 0
  },
  {
    question: 'Khi nhận bàn giao mặt bằng xây dựng công trình cảng, phải tiến hành bàn giao mốc tọa độ và cao độ giữa các bên:',
    options: [
      'a. Chủ đầu tư bàn giao mốc cho Nhà thầu thi công với sự có mặt của Tư vấn giám sát và Tư vấn thiết kế.',
      'b. Tư vấn giám sát bàn giao mốc cho Nhà thầu thi công với sự có mặt của Chủ đầu tư và Tư vấn thiết kế.',
      'c. Tư vấn thiết kế bàn giao mốc cho Nhà thầu thi công với sự có mặt của Chủ đầu tư và Tư vấn giám sát.',
      'd. Tư vấn thiết kế giao mốc cho Chủ đầu tư với sự có mặt của Tư vấn giám sát và Nhà thầu thi công',
    ],
    correct: 2
  },
  {
    question: 'Khi nào cần phải tiến hành quan trắc biến dạng (lún, chuyển dịch ngang) trong thi công các công trình thủy:',
    options: [
      'a. Khi công trình có sự cố;',
      'b. Khi có quy định trong thiết kế được duyệt.',
      'c. Tư vấn giám sát yêu cầu.',
      'd. Trong toàn bộ quá trình xây dựng.',
    ],
    correct: 3
  },
  {
    question: 'Thi công nạo vét luồng tàu và khu nước cảng không thể thực hiện được bằng công nghệ/thiết bị sau:',
    options: [
      'a. Máy xúc gầu dây đặt trên sà lan.',
      'b. Máy xúc gầu nghịch đặt trên sà lan.',
      'c. Tàu xén thổi',
      'd. Tàu hút bụng',
    ],
    correct: 1
  },
  {
    question: 'Phương pháp thi công móng cọc nào không thể áp dụng khi xây dựng công trình bến dạng cầu tàu:',
    options: [
      'a. Thi công bằng phương pháp đóng.',
      'b. Thi công bằng phương pháp khoan nhồi.',
      'c. Thi công bằng phương pháp ép.',
      'd. Thi công bằng phương pháp rung.',
    ],
    correct: 2
  },
  {
    question: 'Phương pháp thi công móng cọc khoan phù hợp khi xây dựng công trình bến dạng cầu tàu:',
    options: [
      'a. Khoan lỗ vào nền đất và đóng cọc vào nền qua lỗ khoan.',
      'b. Khoan lỗ vào nền đất và đổ bê tông dưới nước tạo thành cọc.',
      'c. Đóng ống vách thép vào nền đất, khoan đất bên trong và đổ bê tông dưới nước.',
      'd. Bất kỳ phương pháp nào nêu trên',
    ],
    correct: 2
  },
  {
    question: 'Trình tự các bước thi công chính đối với công trình bến dạng cầu tàu thông thường được thực hiện theo thứ tự như sau:',
    options: [
      'a. (1) Nạo vét, (2) San lấp bãi và xử lý nền (nếu có), (3) Đóng cọc; (4) Đổ đá mái dốc gầm bến, (5) Thi công kết cấu trên, (6) Thi công tường chắn hoặc kè bờ; (7) Thi công bãi sau bến và hệ thống kỹ thuật.',
      'b. (1) Đóng cọc; (2) San lấp bãi và sử lý nền (nếu có); (3) Nạo vét; (4) Đổ đá mái dốc gầm bến, (5) Thi công kết cấu trên, (6) Thi công tường chắn hoặc kè bờ; (7) Thi công bãi sau bến và hệ thống kỹ thuật.',
      'c. (1) Nạo vét, (2) San lấp bãi và sử lý nền (nếu có), (3) Đổ đá mái dốc gầm bến; (4) Đóng cọc; (5) Thi công kết cấu trên, (6) Thi công tường chắn hoặc kè bờ; (7) Thi công bãi sau bến và hệ thống kỹ thuật.',
      'd. Bất kỳ một trong 3 phương án nêu trên.',
    ],
    correct: 0
  },
  {
    question: 'Điều kiện địa chất công trình nào sau đây có thể áp dụng giải pháp kết cấu trọng lực dạng thùng chìm BTCT khối lớn để xây dựng công trình bến.',
    options: [
      'a. Nền đất sét ở trạng thái nửa cứng đến cứng.',
      'b. Nền đá gốc.',
      'c. Nền cát chặt, cuội sỏi.',
      'd. Bất kỳ một trong 3 phương án nêu trên.',
    ],
    correct: 3
  },
  {
    question: 'Địa điểm để thi công đúc thùng chìm BTCT khối lớn phải được lựa chọn ở đâu trong các trường hợp sau:',
    options: [
      'a. Trong ụ khô.',
      'b. Trên ụ nổi.',
      'c. Trên bãi gần mép nước, sau đó hạ thủy bằng đường trượt.',
      'd. Một trong 3 phương án trên.',
    ],
    correct: 3
  },
  {
    question: 'Quá trình thi công đổ bê tông thùng chìm BTCT khối lớn phải thực hiện theo yêu cầu như sau:',
    options: [
      'a. Đổ bê tông liên tục từ khi bắt đầu cho đến khi xong toàn bộ kết cấu thùng chìm.',
      'b. Đổ bê tông phần đáy trước, sau đó lần lượt đến vách chính và vách ngăn.',
      'c. Đổ bê tông từng bộ phận kết cấu theo chiều cao của thùng chìm.',
      'd. Một trong 3 phương án trên.',
    ],
    correct: 2
  },
  {
    question: 'Mực nước phù hợp để hạ thủy thùng chìm:',
    options: [
      'a. Mực nước khi triều cao.',
      'b. Mực nước khi triều thấp',
      'c. Mực nước khi triều trung bình.',
      'd. Một trong 3 phương án trên.',
    ],
    correct: 3
  },
  {
    question: 'Lấp vật liệu trong thùng chìm:',
    options: [
      'a. Cát các loại (hạt mịn, hạt thô).',
      'b. Đá các loại (đá dăm, đá hộc hoặc đá không phân cỡ)',
      'c. Lấp bằng bê tông.',
      'd. Một trong 3 phương án trên.',
    ],
    correct: 3
  },
  {
    question: 'Thi công kết cấu trên của thùng chìm phải thực hiện theo biện pháp sau:',
    options: [
      'a. Bằng bê tông đổ tại chỗ.',
      'b. Bằng BTCT đúc sẵn, lắp ghép.',
      'c. Bằng BTCT đúc sẵn, lắp ghép kết hợp bê tông đổ tại chỗ.',
      'd. Một trong 3 phương án trên.',
    ],
    correct: 3
  },
  {
    question: 'Những loại cọc bê tông nào sau đây không thể áp dụng làm móng cho công trình bến kết cấu dạng cầu tàu:',
    options: [
      'a. Cọc BTCT tiết diện vuông.',
      'b. Cọc ống BTCT dự ứng lực.',
      'c. Cọc ván BTCT.',
      'd. Cọc ống thép.',
    ],
    correct: 2
  },
  {
    question: 'Khi cẩu cọc BTCT phải treo tối thiểu cọc tại:',
    options: [
      'a. Một vị trí.',
      'b. Hai vị trí.',
      'c. Ba vị trí.',
      'd. Một trong 3 trường hợp trên.',
    ],
    correct: 1
  },
  {
    question: 'Việc tạo dự ứng lực cho cốt thép trong chế tạo cọc ống BTCT dự ứng lực được thực hiện khi nào:',
    options: [
      'a. Căng trước khi đổ bê tông.',
      'b. Căng sau khi đổ bê tông.',
      'c. Vừa căng ứng lực vừa đổ bê tông.',
      'd. Một trong 3 phương án trên.',
    ],
    correct: 0
  },
  {
    question: 'Có những phương pháp đóng cọc nào không thể áp dụng trong thi công công trình bến dạng cầu tầu:',
    options: [
      'a. Đóng cọc bằng tàu chuyên dụng',
      'b. Đóng cọc bằng búa treo trên cần cẩu và giá dẫn hướng.',
      'c. Đóng cọc bằng búa di chuyển trên hệ thống ray.',
      'd. Bất kỳ một trong 3 phương án trên.',
    ],
    correct: 2
  },
  {
    question: 'Độ chối khi đóng cọc bằng búa diezl được xác định dựa trên cơ sở nào sau đây:',
    options: [
      'a. Độ lún trung bình của cọc/1 nhát búa trong suốt quá trình đóng.',
      'b. Độ lún của cọc/1 nhát búa cuối cùng.',
      'c. Độ lún trung bình của cọc/1 nhát búa trong 01 mét cuối cùng.',
      'c. Độ lún trung bình của cọc/1 nhát búa trong loạt đóng cuối cùng.',
    ],
    correct: 3
  },
  {
    question: 'Điều kiện để coi là hoàn thành thi công đóng cho một cọc:',
    options: [
      'a. Cọc đã được đóng đến cao độ thiết kế.',
      'b. Cọc được đóng đến độ sâu đạt độ chối thiết kế.',
      'c. Cọc được đóng đến cao độ và đạt độ chối thiết kế.',
      'd. Cọc đóng chưa đến cao độ, nhưng đã đạt độ chối thiết kế.',
    ],
    correct: 2
  },
  {
    question: 'Khi đóng cọc có sai lệch về vị trí lớn hơn cho phép, không thể xử lý bằng các biện pháp sau:',
    options: [
      'a. Kéo và neo giữ cọc vào vị trí thiết kế.',
      'b. Nhổ lên và đóng thay thế cọc khác.',
      'c. Đóng bổ sung cọc khác.',
      'c. Không xử lý cọc, mà điều chỉnh kết cấu trên cho phù hợp',
    ],
    correct: 0
  },
  {
    question: 'Sức chịu tải thực tế tại hiện trường của cọc đóng trong kết cấu cầu tàu không thể xác định bằng phương pháp nào đây sau:',
    options: [
      'a. Phương pháp đo độ chối đóng cọc',
      'b. Phương pháp thử động biến dạng lớn PDA (Pile Dymamic Analyze).',
      'c. Phương pháp thử động biến dạng nhỏ PIT (Pile Intergity Test).',
      'd. Phương pháp thử tĩnh.',
    ],
    correct: 2
  },
  {
    question: 'Trước khi thi công, thành phần cấp phối của bê tông được xác định bằng phương pháp sau:',
    options: [
      'a. Dựa trên loại, cấp bê tông được quy định trong thiết kế',
      'b. Dựa trên cơ sở thiết kế công thức trộn.',
      'c. Dựa trên thí nghiệm trong phòng với vật liệu dự kiến sẽ sử dụng.',
      'd. Thực hiện tất cả các bước trên.',
    ],
    correct: 3
  },
  {
    question: 'Khi đổ bê tông công trình cảng, việc lấy mẫu được thực hiện khi nào:',
    options: [
      'a. Bê tông vừa được trộn xong ở trạm đang xả xuống xe chở.',
      'b. Bê tông được vận chuyển đến vị trí thi công, trước hoặc đang đổ vào ván khuôn.',
      'c. Bê tông làm mẫu được lấy ra từ trong ván khuôn',
      'd. Bất kỳ một trong 3 thời điểm nêu trên.',
    ],
    correct: 1
  },
  {
    question: 'Vật liệu nào được sử dụng làm lớp ballast trên đường sắt Việt Nam?',
    options: [
      'a. Cấp phối đá dăm loại I',
      'b. Cấp phối đá dăm loại II',
      'c. Đá dăm tiêu chuẩn kích cỡ 25 - 50 mm',
      'd. Đá dăm tiêu chuẩn kích cỡ 40 - 60 mm',
    ],
    correct: 2
  },
  {
    question: 'Vật liệu nào được sử dụng làm lớp subballast trên đường sắt Việt Nam?',
    options: [
      'a. Cấp phối đá dăm loại I - Dmax = 25 mm',
      'b. Cấp phối đá dăm loại II',
      'c. Đá dăm tiêu chuẩn kích cỡ 25 - 50 mm',
      'd. Đá dăm tiêu chuẩn kích cỡ 40 - 60 mm',
    ],
    correct: 0
  },
  {
    question: 'Nếu đang phơi đất để hạ độ ẩm nhưng chưa đạt độ ẩm quy định mà trời sắp mưa thì cần đầm lèn ngay để bảo vệ lớp dưới đó được lèn chặt nhằm hạn chế nước thấm vào trong đất đang phơi. Sau đó lớp đầm tạm này sẽ xử lý như thế nào?',
    options: [
      'a. Không phải xử lý gì và có thể thi công các lớp tiếp theo',
      'b. Cần cầy xới lớp đầm tạm và trộn thêm đất khô vào để đắp',
      'c. Cần đào bỏ lớp đất đầm tạm thay bằng lớp đất đạt tiêu chuẩn độ ẩm để đắp',
      'd. Nếu còn khả năng thì đầm tiếp đạt độ chặt, nếu không phải cầy xới băm nhỏ, phơi lại',
    ],
    correct: 3
  },
  {
    question: 'Nếu trong thi công lỡ đào rãnh lấn vào đường thì xử lý thế nào?',
    options: [
      'a. Không phải xử lý',
      'b. Đắp đất bù lại',
      'c. Không đắp đất bù lại, mà có biện pháp gia cường chống xói lở',
      'd. Đáp án b hoặc đáp án c',
    ],
    correct: 2
  },
  {
    question: 'Khi đắp hoặc bù lớp đất nhỏ hơn 10 cm thì cần phải thi công như thế nào để đảm bảo sự dính bám và đồng nhất?',
    options: [
      'a. Cầy xới lớp đất dưới, tưới ẩm, lấy đất cùng loại băm nhỏ 2 - 4 cm rải lên để đắp',
      'b. Đào sâu lớp mặt xuống cho đủ chiều dầy quy định rồi mới rải đất lên đắp',
      'c. Đắp lớp đất cùng loại dầy 20 cm sau đó gọt bớt để đảm bảo chiều dầy 10 cm',
      'd. Một trong ba đáp án trên đều được',
    ],
    correct: 0
  },
  {
    question: 'Khi đắp đất hai bên mang cống thì cần phải:',
    options: [
      'a. Chia thành từng lớp nằm ngang và đắp lần lượt từng bên',
      'b. Chia thành từng lớp nằm ngang đối xứng, đắp đồng thời cả hai bên',
      'c. Rải đất hai bên mang cống tới cao độ đỉnh cống và đầm đồng thời cả hai bên',
      'd. Đáp án a hoặc đáp án b',
    ],
    correct: 1
  },
  {
    question: 'Trong một trắc ngang nếu sử dụng hai loại đất đắp có tính thấm nước khác nhau thì khi thi công cần phải tuân theo điều kiện nào dưới đây?',
    options: [
      'a. Cần phải phân thành từng lớp đắp xen kẽ nhau',
      'b. Mỗi loại đất được đắp thành một lớp trên suốt mặt cắt ngang',
      'c. Khi lớp đất dễ thấm nước đắp trên lớp khó thấm nước, dốc ngang mặt lớp dưới phải ≥ 4%',
      'd. Cả đáp án b và đáp án c',
    ],
    correct: 3
  },
  {
    question: 'Công tác rải đất để đầm trên nền đất yếu hay nền bão hòa nước thì cần được tiến hành như thế nào?',
    options: [
      'a. Rải đất ở giữa trước rồi tiến ra mép ngoài biên',
      'b. Rải đất từ mép ngoài biên vào giữa',
      'c. Theo đáp án a nhưng khi đắp tới độ cao 3m thì rải đất từ mép biên vào giữa',
      'd. Đáp án a hoặc đáp án b đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Biện pháp nào khi thi công để đảm bảo được độ chặt yêu cầu khi đắp đất mái dốc và mép biên?',
    options: [
      'a. Cần rải đất rộng hơn đường biên thiết kế 20 - 30 cm theo chiều thẳng so với mái dốc',
      'b. Cần tăng số công đầm ở những vị trí này',
      'c. Cần tăng cường thêm đầm thủ công sau đầm máy',
      'd. Cả đáp án a và b',
    ],
    correct: 0
  },
  {
    question: 'Xây dựng đường hầm theo phương pháp công nghệ NATM, ổn định của hầm được đảm bảo bởi yếu tố nào dưới đây?',
    options: [
      'a. Hệ thống chống đỡ.',
      'b. Khối đất đá xung quanh và hệ thống chống đỡ.',
      'c. Vỏ hầm.',
      'd. Liên hợp giữa đất đá xung quanh, hệ thống chống đỡ và vỏ hầm.',
    ],
    correct: 3
  },
  {
    question: 'Kết cấu chống đỡ hầm theo NATM cần phải như thế nào?',
    options: [
      'a. Rất cứng để chống lại sự biến dạng của đất đá.',
      'b. Rất mềm để không can thiệp vào sự phân bố lại ứng suất của đất đá.',
      'c. Có độ cứng phù hợp với hình dạng của gương hầm.',
      'd. Có độ cứng phù hợp, dựa theo kết quả quan trắc hiện trường và nghiên cứu về ứng xử của đất đá xung quanh vách hang và gương hầm.',
    ],
    correct: 3
  },
  {
    question: 'Trong xây dựng hầm theo công nghệ NATM, khi nào thì lắp đặt hệ thống chống đỡ?',
    options: [
      'a. Ngay lập tức để ngăn chặn biến dạng của đất đá.',
      'b. Tại thời điểm phù hợp, dựa theo kết quả quan trắc hiện trường và nghiên cứu về ứng xử của đất đá.',
      'c. Tại thời điểm đất đá kết thúc quá trình biến dạng.',
      'd. Tại thời điểm phù hợp với điều kiện thi công.',
    ],
    correct: 1
  },
  {
    question: 'Khi xây dựng hầm theo công nghệ NATM, nếu gặp địa tầng yếu, giải pháp nào được ưu tiên áp dụng?',
    options: [
      'a. Tăng chiều dày lớp bê tông phun.',
      'b. Tăng thêm số lượng neo đá.',
      'c. Tăng cường hệ thống chống đỡ ban đầu bằng các vòm thép hình.',
      'd. Tăng chiều dày vỏ hầm.',
    ],
    correct: 2
  },
  {
    question: 'Công tác đào hầm bằng phương pháp khoan nổ mìn có tính chu kỳ. Một chu kỳ đào bao gồm các công đoạn chính. Công việc nào sau đây là không đúng:',
    options: [
      'a. Đo đạc, định vị',
      'b. Khoan lỗ mìn',
      'c. Nổ mìn và thông gió',
      'd. Đổ bê tông vỏ hầm',
    ],
    correct: 3
  },
  {
    question: 'Khi giám sát công tác nổ mìn, công tác nào phải làm trước trong số các việc sau:',
    options: [
      'a. Kiểm tra gương đào và trạng thái của lỗ mìn trước khi nạp',
      'b. Kiểm tra đảm bảo an toàn cho người và thiết bị máy móc.',
      'c. Trước khi nổ mìn máy móc phải di chuyển đến khoảng cách an toàn.',
      'd. Kiểm tra hộ chiếu khoan nổ',
    ],
    correct: 3
  },
  {
    question: 'Khi chuẩn bị công tác đào, công tác nào phải làm trước trong số các công việc sau:',
    options: [
      'a. Kiểm tra bề mặt gương đào trước khi khoan.',
      'b. Đục bỏ các khối đá treo, tiêu hủy các vật liệu nổ còn sót lại.',
      'c. Kiểm tra vị trí, hướng và chiều sâu các lỗ khoan theo đúng hộ chiếu khoan nổ.',
      'd. Kiểm tra điều kiện địa chất trước gương đào để dự đoán điều kiện địa chất của bước đào tiếp theo.',
    ],
    correct: 3
  },
  {
    question: 'Các nội dung đo đạc nào sau đây là bắt buộc thực hiện để kiểm soát trạng thái ứng suất-biến dạng:',
    options: [
      'a. Đo biến dạng và ứng suất đá xung quanh hầm',
      'b. Đo ứng suất bê tông phun, đo ứng suất thanh neo',
      'c. Đo lượng nước ngầm thoát ra trong Hầm',
      'd. Cả a và b đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Tư vấn giám sát cần kiểm tra các nội dung nào về thiết kế ván khuôn cho vỏ hầm:',
    options: [
      'a. Hình dạng và kích thước ván khuôn phải phù hợp với vỏ hầm thiết kế.',
      'b. Độ cứng ván khuôn hầm phải đủ để chịu được áp lực của bê tông không biến dạng quá mức cho phép.',
      'c. Kiểm tra số lượng và vị trí các cửa sổ đổ bê tông sao cho thuận lợi khi thi công và giám sát.',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Tư vấn giám sát cần kiểm tra các nội dung nào sau đây về lớp phòng nước:',
    options: [
      'a. Khoan đặt ống thoát nước ngầm tại khu vực nước ngầm lớn.',
      'b. Lắp đặt lớp phòng nước trên bề mặt hệ thống kết cấu chống đỡ.',
      'c. Lắp đặt hệ thống ống thoát nước ngầm sau vỏ hầm.',
      'd. Lắp đặt hệ thống ống dẫn nước ngang, kênh trung tâm và hệ thống thông rửa ống thoát nước ngầm.',
    ],
    correct: 1
  },
  {
    question: 'Tư vấn giám sát cần kiểm tra các nội dung nào sau đây về lớp phòng nước:',
    options: [
      'a. Kiểm tra lớp phòng nước mềm và cùng với nó là lớp vải địa kỹ thuật đảm bảo khi lắp đặt không bị trùng, rách, thủng.',
      'b. Giám sát mối nối các tấm của lớp phòng nước.',
      'c. Lớp phòng nước phải được gắn cố định chắc chắn vào vách hang đào để đảm bảo không bị hỏng và rơi xuống trong quá trình đổ bê tông vỏ hầm.',
      'd. Cả 3 đáp án trên.',
    ],
    correct: 3
  },
  {
    question: 'Nội dung nào sau đây không được bao gồm trong Công việc đo đạc kiểm tra địa kỹ thuật:',
    options: [
      'a. Đo biến dạng với tọa độ 3 phương, thực hiện với khoảng cách 10 đến 30m theo chiều dài hầm.',
      'b. Đo dẫn hướng thi công hầm bằng thiết bị Laser.',
      'c. Đo ứng suất và biến dạng đất đá xung quanh hầm, thực hiện tại 01 mặt cắt cho đá loại V hoặc loại VI hoặc theo yêu cầu của Kỹ sư.',
      'd. Đo hệ số đào vượt',
    ],
    correct: 3
  },
  {
    question: 'Các công trình xây dựng tuyến Metro có thể được chấp nhận và đưa vào khai thác toàn bộ hoặc từng phần, hoặc theo các tổ hợp khởi động, nếu được quy định trong hồ sơ thiết kế. Nhưng hạng mục nào sau đây không nhất thiết phải có trong thành phần tổ hợp khởi động:',
    options: [
      'a. Nhà và công trình phục vụ những người làm việc của tàu điện ngầm.',
      'b. Công trình và thiết bị đảm bảo điều kiện sức khỏe và an toàn lao động cho những người làm việc của tàu điện ngầm.',
      'c. Công trình và thiết bị bảo đảm an toàn cháy.',
      'd. Các giải pháp bảo vệ môi trường xung quanh.',
    ],
    correct: 0
  },
  {
    question: 'Độ sụt hoặc độ cứng của hỗn hợp bê tông vỏ hầm phải được xác định tùy thuộc:',
    options: [
      'a. Hàm lượng cốt thép',
      'b. Không quan tâm đến tính chất công trình và điều kiện thời tiết',
      'c. Phương pháp vận chuyển và đổ bê tông vỏ hầm',
      'd. Cả a và c đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Cấp bê tông thấp nhất có thể sử dụng làm vỏ hầm là bao nhiêu:',
    options: [
      'a. 25 MPa',
      'b. 30MPa',
      'c. 28Mpa',
      'd. 32Mpa',
    ],
    correct: 2
  },
  {
    question: 'Điều kiện để dỡ ván khuôn đúc bê tông vỏ hầm là:',
    options: [
      'a. Ván khuôn được tháo dỡ trong vòng 12 giờ từ khi đổ bê tông như vậy có thể đúc 1 đốt trong vòng 1 ngày.',
      'b. Khi nào bê tông phải có đủ cường độ để chịu trọng lượng bản thân.',
      'c. Khi cường độ có thể đạt được ít nhất 8Mpa.',
      'd. Kết hợp cả 3 điều kiện trên',
    ],
    correct: 3
  },
  {
    question: 'Trong quá trình đào Hầm bằng máy TBM cần có nhiều loại thông tin quan trọng để điều hành xây dựng bằng TBM. Trong danh sách sau đây, thông tin nào là không cần thiết:',
    options: [
      'a. Đo thời gian của một shift bao gồm tất cả các hoạt động.',
      'b. Thời gian ngừng việc bao gồm cả thời gian đóng cửa.',
      'c. Ghi chép về đường ép và xoắn, thời gian làm việc của TBM cho một chu tình đào.',
      'd. Cường độ bê tông vỏ hầm đúc sẵn',
    ],
    correct: 3
  },
  {
    question: 'Trước khi thi công đại trà nền đường, phải thi công thí điểm một đoạn dài tối thiểu 100 m trong trường hợp nào dưới đây?',
    options: [
      'a. Nền đắp đối với đường cao tốc, đường cấp I, cấp II và cấp III.',
      'b. Nền đào hoặc đắp có áp dụng kỹ thuật, công nghệ hoặc vật liệu mới.',
      'c. Nền đường đặc biệt (trên đất yếu, nền vùng sạt lở, nền đào đá cứng, nền đắp bằng vật liệu nhẹ).',
      'd. Cả ba trường hợp trên.',
    ],
    correct: 3
  },
  {
    question: 'Khi nền tự nhiên có độ dốc ngang từ 20% đến 50%, trước khi đắp nền đường, cần phải có biện pháp xử lý như thế nào?',
    options: [
      'a. Đắp trực tiếp trên mặt nền tự nhiên.',
      'b. Đào bỏ lớp đất hữu cơ, sau đó đắp trực tiếp',
      'c. Kết hợp đánh bậc cấp và đào bỏ lớp hữu cơ trước khi đắp.',
      'd. Xây dựng công trình chống đỡ phía dưới dốc (tường chắn các loại).',
    ],
    correct: 2
  },
  {
    question: 'Trước khi đầm nén, đất đã rải phải có độ ẩm như thế nào?',
    options: [
      'a. Độ ẩm tốt nhất, với sai số cho phép là ± 1%.',
      'b. Độ ẩm tốt nhất, với sai số cho phép là ± 2%',
      'c. Độ ẩm tốt nhất, với sai số cho phép là ± 3%',
      'd. Độ ẩm tốt nhất, với sai số cho phép là ± 4%',
    ],
    correct: 1
  },
  {
    question: 'Để đảm bảo chất lượng công tác đắp nền đường, phải dùng biện pháp thi công nào dưới đây?',
    options: [
      'a. Đắp lấn dần từ chỗ cao xuống chỗ thấp',
      'b. Đắp thành từng lớp từ chỗ thấp nhất lên cao dần',
      'c. Đắp lẫn lộn các loại đất, đá, đất lẫn đá trên cùng một đoạn nền đường',
      'd. Đắp loại đất có chỉ số sức chịu tải CBR thấp ở trên và cao ở phía dưới',
    ],
    correct: 1
  },
  {
    question: 'Loại vật liệu nào phù hợp để đắp đoạn tiếp giáp giữa mố cấu hoặc lưng cống với nền đường đắp liền kề?',
    options: [
      'a. Vật liệu có tính thoát nước tốt, tính nén lún nhỏ như đất lẫn sỏi cuội, cát lẫn đá dăm, cát hạt vừa, cát hạt thô',
      'b. Đất có tính thoát nước kém',
      'c. Cát mịn',
      'd. Đá phong hóa',
    ],
    correct: 0
  },
  {
    question: 'Để đảm bảo an toàn lao động trong quá trình thi công nền đường bằng phương pháp nổ mìn, phải thực hiện tốt nội dung nào dưới đây?',
    options: [
      'a. Thi công nổ mìn về ban đêm',
      'b. Lắp đặt thuốc nổ ở các lỗ mìn cũ không nổ',
      'c. Phải có cảnh báo và hiệu lệnh phòng tránh cho công trường và dân cư xung quanh',
      'd. Đáp án a và b',
    ],
    correct: 2
  },
  {
    question: 'Sai số cho phép về vị trí tim rãnh xây cho phép đối với đường cấp III, IV và V là bao nhiêu?',
    options: [
      'a. 10 mm',
      'b. 50 mm',
      'c. 70 mm',
      'd. 100 mm',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp nào dưới đây thường được sử dụng để xác định mô đun đàn hồi của nền đất ở hiện trường?',
    options: [
      'a. Phương pháp dùng tấm ép cứng',
      'b. Phương pháp dùng cần đo võng Benkelman',
      'c. Phương pháp dùng thiết bị đo độ võng FWD',
      'd. Phương pháp dùng chùy xuyên động DCP',
    ],
    correct: 0
  },
  {
    question: 'Chỉ tiêu nào dưới đây thường được dùng để đánh giá chất lượng của hỗn hợp cấp phối đá dăm khi xem xét chấp nhận nguồn cung cấp vật liệu?',
    options: [
      'a. Độ hào mòn Los-Angeles của cốt liệu',
      'b. Hàm lượng hạt thoi dẹt',
      'c. Độ ẩm',
      'd. Đáp án a và b',
    ],
    correct: 3
  },
  {
    question: 'Mật độ kiểm tra độ chặt lu lèn lớp móng cấp phối đá dăm để phục vụ công tác nghiệm thu như thế nào?',
    options: [
      'a. 7000 m2 kiểm tra tại 2 vị trí ngẫu nhiên',
      'b. 9000 m2 kiểm tra tại 2 vị trí ngẫu nhiên',
      'c. 7000 m2 kiểm tra tại 3 vị trí ngẫu nhiên',
      'd. 9000 m2 kiểm tra tại 3 vị trí ngẫu nhiên',
    ],
    correct: 0
  },
  {
    question: 'Khe hở tối đa cho phép dưới thước 3 m khi nghiệm thu độ bằng phẳng của lớp móng trên cấp phối đá dăm là bao nhiêu?',
    options: [
      'a. 3 mm',
      'b. 5 mm',
      'c. 7 mm',
      'd. 10 mm',
    ],
    correct: 1
  },
  {
    question: 'Để xác định giới hạn dẻo và giới hạn chảy của cấp phối thiên nhiên, tiến hành thí nghiệm với phần vật liệu lọt sàng nào dưới đây?',
    options: [
      'a. Sàng 2,36 mm',
      'b. Sàng 4,75 mm',
      'c. Sàng 0,425 mm',
      'd. Sàng 1,18 mm',
    ],
    correct: 2
  },
  {
    question: 'Có thể sử dụng phương pháp nào dưới đây để bảo dưỡng lớp móng cấp phối gia cố xi măng?',
    options: [
      'a. Tưới nước trực tiếp lên mặt lớp cấp phối gia cố xi măng hàng tuần.',
      'b. Tưới nhũ tương nhựa đường a xít với lượng 0,8 - 1,0 lít/m2',
      'c. Phủ kín 5 cm cát trên bề mặt lớp cấp phối gia cố xi măng và tưới nước giữ cho cát ẩm trong vòng 7 ngày',
      'd. Đáp án b hoặc c',
    ],
    correct: 3
  },
  {
    question: 'Khi thi công mặt đường thấm nhậm nhựa, quy định về nhiệt độ đối với nhựa đường 60/70 trước khi phun tưới là bao nhiêu?',
    options: [
      'a. 150oC ± 10oC',
      'b. 160oC ± 10oC',
      'c. 170oC ± 10oC',
      'd. 180oC ± 10oC',
    ],
    correct: 1
  },
  {
    question: 'Nhiệt độ không khí tối thiểu cho phép thi công mặt đường láng nhựa nóng là bao nhiêu?',
    options: [
      'a. 0oC',
      'b. 5oC',
      'c. 10oC',
      'd. 15oC',
    ],
    correct: 3
  },
  {
    question: 'Có thể sử dụng phương pháp nào dưới đây để kiểm tra phục vụ cho công tác nghiệm thu độ nhám của mặt đường bê tông nhựa?',
    options: [
      'a. Phương pháp sử dụng con lắc Anh.',
      'b. Phương pháp rắc cát',
      'c. Phương pháp dùng thiết bị MTM',
      'd. Phương pháp đo cự li hãm xe',
    ],
    correct: 1
  },
  {
    question: 'Để xác định độ chặt của bê tông nhựa ở hiện trường, có thể sử dụng phương pháp nào?',
    options: [
      'a. Đem so sánh khối lượng thể tích của mẫu khoan ở hiện trường và mẫu đúc trong phòng thí nghiệm từ hỗn hợp lấy ở trạm ở lý trình tương ứng.',
      'b. Phương pháp dùng phễu rót cát',
      'c. Phương pháp đồng vị phóng xạ',
      'd. Tất cả các phương pháp trên',
    ],
    correct: 0
  },
  {
    question: 'Khi thi công bằng công nghệ ván khuôn trượt, độ sụt yêu cầu của hỗn hợp bê tông xi măng là bao nhiêu?',
    options: [
      'a. 10 - 20 mm',
      'b. 20 - 30 mm',
      'c. 20 - 40 mm',
      'd. 40 - 60 mm',
    ],
    correct: 0
  },
  {
    question: 'Thí nghiệm rắc cát dùng để xác định chỉ tiêu nào dưới đây?',
    options: [
      'a. Độ góc cạnh của cát',
      'b. Độ bằng phẳng',
      'c. Độ nhám',
      'd. Độ chặt của vật liệu',
    ],
    correct: 2
  },
  {
    question: 'Công việc nào sau đây không thuộc nội dung công tác hoàn thiện?',
    options: [
      'a. Khôi phục lại các mốc đường chuyền các cấp, cọc tim tuyến',
      'b. Sửa chữa những chỗ thừa, thiếu bề rộng, độ cao của nền đường',
      'c. Gọt mái đào, vỗ lại mái đắp chuẩn bị cho công tác gia cố nếu cần thiết',
      'd. Hoàn chỉnh rãnh thoát nước, gọt mui luyện của nền đường',
    ],
    correct: 0
  },
  {
    question: 'Khi đào cấp thì kích thước cấp phụ thuộc yếu tố nào?',
    options: [
      'a. Phương pháp thi công thủ công hay cơ giới',
      'b. Phương tiện đầm lèn',
      'c. Cả hai đáp án a và b',
      'd. Loại đất của nền đất thiên nhiên',
    ],
    correct: 2
  },
  {
    question: 'Nguyên tắc khi lấy mẫu để kiểm tra chất lượng đầm nén nền đường cần lấy ở những vị trí nào?',
    options: [
      'a. Ở mép đường, nền đắp đầu cầu, hai bên sườn cống, lưng tường chắn',
      'b. Ở những chỗ đại diện và những nơi đặc biệt quan trọng',
      'c. Phân bố đều trên mặt bằng và mặt cắt công trình, cứ mỗi lớp đắp lấy một đợt mẫu',
      'd. Cả đáp án b và c',
    ],
    correct: 3
  },
  {
    question: 'Mái đường cần được gia cố trong trường hợp nào?',
    options: [
      'a. Nền đắp cao trên 1m hoặc dưới 1m nhưng dùng đất không tốt',
      'b. Nền đường đắp cao trên 6 m và sử dụng đất đắp không tốt',
      'c. Nền đường bị ảnh hưởng của dòng nước chảy, đường qua đồng chiêm trũng',
      'd. Cả hai đáp án a và đáp án c',
    ],
    correct: 3
  },
  {
    question: 'Những tiêu chí có thể được dùng để kiểm tra chất lượng đất đắp là gì?',
    options: [
      'a. Độ chặt yêu cầu',
      'b. Thành phần hạt so với thiết kế',
      'c. Hệ số thấm, sức kháng trượt của vật liệu và mức độ co ngót khi đầm nén',
      'd. Cả ba đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Ở khu vực đồng bằng, nếu nền đắp dưới 2 m và dốc ngang là 5% thì rãnh dọc được đào như thế nào?',
    options: [
      'a. Ở phía thấp và mép rãnh cách chân đường tối thiểu 1 m',
      'b. Ở phía cao và mép rãnh cách chân đường tối thiểu 1 m',
      'c. Ở cả hai bên và mép rãnh cách chân đường tối thiểu 0,5 m',
      'd. Đáp án a hoặc đáp án b',
    ],
    correct: 1
  },
  {
    question: 'Khi thiết kế nổ mìn gần các công trình, thiết bị thì phương pháp nổ mìn nào là thích hợp nhất?',
    options: [
      'a. Nổ mìn vi sai hoặc nổ định hướng',
      'b. Nổ mìn ốp hoặc nổ mìn nông',
      'c. Nổ mìn buồng',
      'd. Cả hai đáp án a và b',
    ],
    correct: 0
  },
  {
    question: 'Sai lệch về độ ẩm của đất đắp so với độ ẩm tốt nhất dao động trong khoảng nào để khi đắp đất đạt được khối lượng thể tích khô lớn nhất?',
    options: [
      'a. Đối với đất dính 10%; đối với đất không dính 20% của độ ẩm tốt nhất',
      'b. Đối với đất dính 20%; đối với đất không dính 10% của độ ẩm tốt nhất',
      'c. 10% không phân biệt loại đất',
      'd. 20% không phân biệt loại đất',
    ],
    correct: 0
  },
  {
    question: 'Mục đích của công tác đầm thí nghiệm trước khi thi công đại trà là để xác định được:',
    options: [
      'a. Loại máy đầm hiệu quả nhất của đơn vị thi công',
      'b. Áp suất đầm, số lần đầm, chiều dầy lớp đất, độ ẩm tốt nhất và độ ẩm khống chế',
      'c. Chiều dầy tối đa của lớp đất đầm nén tương ứng với loại máy đầm',
      'd. Cả ba đáp án trên',
    ],
    correct: 1
  },
  {
    question: 'Nền đường sau khi thi công xong xuất hiện vết nứt, trường hợp nào vẫn được nghiệm thu?',
    options: [
      'a. Nứt nẻ nhỏ, vết nứt ngắn, đứt đoạn không có hướng nhất định',
      'b. Nứt dải liên tục theo tim hoặc các hướng khác',
      'c. Mặt bị dộp (bóc bánh đa).',
      'd. Không có trường hợp nào được nghiệm thu trong ba đáp án trên',
    ],
    correct: 0
  },
  {
    question: 'Khi kiểm tra nghiệm thu độ bằng phẳng mặt nền đường yêu cầu khe hở dưới đáy thước không được vượt quá trị số nào?',
    options: [
      'a. 3 cm',
      'b. 2 cm đối với nền đất và 3-5cm đối với nền đá',
      'c. 3-5 cm đối với nền đất và 2cm đối với nền đá từ cấp 4 đến cấp 1',
      'd. 2 cm đối với nền đất và 3-5cm đối với nền đá từ cấp 4 đến cấp 1',
    ],
    correct: 3
  },
  {
    question: 'Trong công tác nghiệm thu kiến trúc tầng trên đường sắt, trường hợp nào sẽ phải nghiệm thu lại?',
    options: [
      'a. Có một trong những sai sót về cự ly, thủy bình, phương hướng, cao thấp, chèn tà vẹt',
      'b. Có sai sót đồng thời cả về cự ly và thủy bình',
      'c. Có sai sót đồng thời về cự ly, thủy bình và phương hướng',
      'd. Có sai sót đồng thời về cự ly, thủy bình, phương hướng, cao thấp và chèn tà vẹt',
    ],
    correct: 0
  },
  {
    question: 'Trong công tác nghiệm thu kiến trúc tầng trên đường sắt có mối nối của đường chính tuyến thì chiều dài nghiệm thu đường quy định là bao nhiêu?',
    options: [
      'a. Toàn bộ chiều dài tuyến thi công',
      'b. 10% tổng chiều dài tuyến thi công',
      'c. 1000 m',
      'd. 10% tổng chiều dài tuyến thi công nhưng không được nhỏ hơn 1000 m',
    ],
    correct: 2
  },
  {
    question: 'Tiêu chuẩn kỹ thuật nghiệm thu công tác chèn tà vẹt đường sắt có mối nối trên đường chính tuyến và đường đón gửi tàu phải đảm bảo những yêu cầu nào?',
    options: [
      'a. Số lượng tà vẹt lỏng lẻ tẻ không vượt quá 4%',
      'b. Không có tà vẹt mối lỏng',
      'c. Không có tà vẹt lỏng liên tiếp giữa cầu',
      'd. Cả ba đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Nội dung công tác nghiệm thu khe hở ray trên đường chính tuyến và đường đón gửi tàu?',
    options: [
      'a. Kiểm tra sai số giữa khe hở thực tế so với khe hở tiêu chuẩn',
      'b. Kiểm tra sai số giữa tổng số khe hở thực tế so với tổng số khe hở tiêu chuẩn/1km',
      'c. Cả đáp án a và đáp án  b',
      'd. Đáp án a hoặc đáp án b',
    ],
    correct: 2
  },
  {
    question: 'Tiêu chuẩn kỹ thuật nào dùng cho nghiệm thu kiến trúc tầng trên đường sắt không mối nối?',
    options: [
      'a. Cự ly, thủy bình, phương hướng, cao thấp và chèn tà vẹt',
      'b. Nhiệt độ khóa ray, lượng chuyển vị đường',
      'c. Lực kháng ngang đá ba lát',
      'd. Cả ba đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Trên đường sắt không mối nối, yêu cầu lực cản ngang và lực cản dọc của đá ba lát lên tà vẹt là bao nhiêu?',
    options: [
      'a. 400 kg/m và 600 kg/m',
      'b. 600 kg/m và 400 kg/m',
      'c. 400 kg/m theo cả hai phương',
      'd. 600 kg/m theo cả hai phương',
    ],
    correct: 0
  },
  {
    question: 'Vật liệu làm lớp ballast đường sắt phải đáp ứng những yêu cầu nào về mặt kích cỡ sau đây?',
    options: [
      'a. Cỡ hạt 25mm - 50 mm chiếm tỉ lệ ≥ 90% khối lượng toàn bộ',
      'b. Kích cỡ hạt < 25 mm nhưng > 20 mm phải < 5% khối lượng toàn bộ',
      'c. Kích cỡ hạt > 50 mm nhưng < 65 mm phải < 5% khối lượng toàn bộ',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Hàm lượng sét (nếu có) trong vật liệu làm lớp ballast đường sắt không được vượt quá trị số nào sau đây?',
    options: [
      'a. 0,1 % khối lượng',
      'b. 0,5 % khối lượng',
      'c. 1 % khối lượng',
      'd. 5 % khối lượng',
    ],
    correct: 1
  },
  {
    question: 'Cường độ chịu nén ở trạng thái khô của đá làm lớp ballast đường sắt phải lớn hơn giá trị nào sau đây?',
    options: [
      'a. 700 kg/cm2',
      'b. 750 kg/cm2',
      'c. 800 kg/cm2',
      'd. 1000 kg/cm2',
    ],
    correct: 2
  },
  {
    question: 'Yêu cầu về độ mài mòn trong thùng quay của đá làm lớp ballast đường sắt phải nhỏ hơn giá trị nào sau đây?',
    options: [
      'a. 10 % khối lượng ban đầu',
      'b. 20 % khối lượng ban đầu',
      'c. 30 % khối lượng ban đầu',
      'd. 50 % khối lượng ban đầu',
    ],
    correct: 2
  },
  {
    question: 'Khi hỗn hợp bê tông bị mất độ sụt quá nhanh, TVGS cần kiểm tra nguyên nhân nào?',
    options: [
      'a. Nhiệt độ XM và cốt liệu cao.',
      'b. Nguồn vật liệu thay đổi so với vật liệu đã làm thí nghiệm xác định cấp phối.',
      'c. Cách trộn phụ gia hóa dẻo không phù hợp.',
      'd. Cả 3 nguyên nhân trên',
    ],
    correct: 3
  },
  {
    question: 'Khi thi công kết cấu nhịp BTCT ứng suất trước , nếu sử dụng bê tông có phụ gia hóa dẻo và phát triển nhanh cường độ, sau khi đổ bê tông bao lâu có thể tiến hành căng cốt thép ứng suất trước?',
    options: [
      'a. 3- 4 ngày.',
      'b. 7 ngày.',
      'c. 14 ngày.',
      'd. Tùy theo kết quả thí nghiệm và theo thiết kế',
    ],
    correct: 3
  },
  {
    question: 'Khi chọn phương pháp lao lắp kết cấu nhịp cầu BTCT, cần xem xét yếu tố nào dưới đây?',
    options: [
      'a. Chiều dài nhịp, trọng lượng khối dầm cần cẩu lắp',
      'b. Số lượng nhịp',
      'c. Địa hình, địa chất, thủy văn',
      'd. Cả 3 yếu tố trên.',
    ],
    correct: 3
  },
  {
    question: 'Trong các yếu tố dưới đây, yếu tố nào không ảnh hưởng đến độ võng của kết cấu nhịp cầu dầm BTDUL thi công theo công nghệ đúc hẫng cân bằng?',
    options: [
      'a. Tải trọng xe đúc và trọng lượng các đốt dầm.',
      'b. Lực căng các thanh neo đốt dầm K0 vào đỉnh trụ.',
      'c. Lực căng cốt thép ứng suất trước trong dầm.',
      'd. Nhiệt độ môi trường, từ biến và co ngót của bê tông',
    ],
    correct: 1
  },
  {
    question: 'Phương pháp căng đồng thời tất cả các bó cốt thép ứng suất trước có thể áp dụng cho trường hợp nào dưới đây?',
    options: [
      'a. Chế tạo các cấu kiện BTCT ƯST lắp ghép theo phương pháp căng trước.',
      'b. Chế tạo các cấu kiện BTCT ƯST lắp ghép theo phương pháp căng sau.',
      'c. Thi công kết cấu nhịp cầu BTCT ƯST theo công nghệ đúc dầm trên hệ giàn giáo và ván khuôn di động.',
      'd. Thi công kết cấu nhịp cầu BTCT ƯST theo công nghệ đúc đẩy.',
    ],
    correct: 0
  },
  {
    question: 'Nhà thầu biên soạn Quy trình thi công một hạng mục xây dựng đã trình Tư vấn giám sát và được thông qua. Nếu xẩy ra sai sót thì ai chịu trách nhiệm:',
    options: [
      'a. Nhà thầy xây dưng',
      'b. Tư vấn GS đã duyệt Quy trình đó',
      'c. Cả a và b',
      'd. Chủ đầu tư',
    ],
    correct: 2
  },
  {
    question: 'Tải trọng thử tải bằng bao nhiêu phần trăm tải trọng tác dụng lên kết cấu phụ tạm:',
    options: [
      'a. 30%',
      'b. 70%',
      'c. 100%',
      'd. 125%',
    ],
    correct: 3
  },
  {
    question: 'Nhà thầu dùng Giá lao cầu tự chế và Cần cẩu nổi tự chế trên hệ nổi để lao cầu. Ai có quyền kiểm tra và cho phép sử dụng Giá lao cầu và Hệ cẩu nổi này:',
    options: [
      'a. Tư vấn giám sát',
      'b. Cục Đăng kiểm Bộ GTVT',
      'c. Sở Xây dựng địa phương',
      'd. Chủ đầu tư',
    ],
    correct: 1
  },
  {
    question: 'Thời điểm phù hợp nhất để hạ dầm cầu lên gối là lúc nào:',
    options: [
      'a. Bất cứ lúc nào đã chuẩn bị xong',
      'b. Sáng sớm hoặc ban đêm khi nhiệt độ thấp nhất trong ngày',
      'c. Giữa trưa hoặc lúc nhiệt độ cao nhất trong ngày',
      'd. Lúc nhiệt độ gần với nhiệt độ trung bình năm',
    ],
    correct: 3
  },
  {
    question: 'Thời điểm nào là hợp lý nhất để đo kiểm tra cao độ các đốt kết cấu nhịp đang dúc hẫng và điều chỉnh ván khuôn đốt đúc tiếp theo:',
    options: [
      'a. Trước khi lắp cốt thép thường của đốt tiếp theo',
      'b. Sau khi lắp cốt thép thường của đốt tiếp theo, ngay trước khi đổ bê tông đốt tiếp theo',
      'c. Trước khi lắp cốt thép thường của đốt tiếp theo, vào thời điểm sáng sớm trước khi có nắng',
      'd. Trước khi lắp cốt thép thường của đốt tiếp theo, vào buổi trưa nắng gắt.',
    ],
    correct: 2
  },
  {
    question: 'Điểm dừng khi đổ bê tông dầm, bản trong kết cấu bến dạng cầu tàu:',
    options: [
      'a. Tại ½ chiều dài nhịp.',
      'b. Tại ¼ chiều dài nhịp',
      'c. Tại vị trí gối đỡ.',
      'd. Tại vị trí bất kỳ trong 3 vị trí trên.',
    ],
    correct: 1
  },
  {
    question: 'Khi bắt buộc phải bố trí điểm dừng đối với bê tông đổ tại chỗ, việc xử lý bề mặt mối nối phải được thực hiện trong khoảng thời gian sau:',
    options: [
      'a. Trong vòng 2 h.',
      'b. Trong vòng 4 h.',
      'c. Trong vòng 6 h',
      'd. Trong vòng 9 h.',
    ],
    correct: 0
  },
  {
    question: 'Khi đổ bê tông được chia thành nhiều lớp, việc đầm bê tông phải được thực hiện như sau:',
    options: [
      'a. Đầm xuyên đến vị trí tiếp giáp giữa 2 lớp vừa đổ và lớp dưới.',
      'b. Đầm xuyên khoảng 5 cm của lớp dưới.',
      'c. Đầm xuyên khoảng 10 cm của lớp dưới.',
      'd. Đầm xuyên vào toàn bộ chiều dày của lớp dưới.',
    ],
    correct: 2
  },
  {
    question: 'Chiều cao cho phép bê tông rơi tự do khi đổ bê tông:',
    options: [
      'a. Dưới 1 m.',
      'b. Dưới 1.5 m',
      'c. Dưới 2 m',
      'd. Dưới 3 m',
    ],
    correct: 1
  },
  {
    question: 'Cho phép lắp dựng các bộ phận kết cấu khác lên trên kết cấu bê tông đổ tại chỗ sau khi cường độ đã đạt:',
    options: [
      'a. Đạt 50% cường độ thiết kế.',
      'b. Đạt 70% cường độ thiết kế',
      'c. Đạt 90% cường độ thiết kế',
      'd. Đạt 100% cường độ thiết kế',
    ],
    correct: 1
  },
  {
    question: 'Cho phép lắp dựng các bộ phận kết cấu khác lên trên kết bê tông đổ tại chỗ sau khi cường độ đã đạt:',
    options: [
      'a. Đạt 50% cường độ thiết kế.',
      'b. Đạt 70% cường độ thiết kế',
      'c. Đạt 90% cường độ thiết kế',
      'd. Đạt 100% cường độ thiết kế',
    ],
    correct: 1
  },
  {
    question: 'Công tác hạ cọc tường cừ vào nền đất có thể thực hiện bằng thiết bị như sau:',
    options: [
      'a. Bằng búa diêzel.',
      'b. Bằng búa hơi',
      'c. Bằng búa rung.',
      'd. Bằng bất kỳ một trong 3 thiết bị nêu trên',
    ],
    correct: 2
  },
  {
    question: 'Khi tường cừ hạ bị nghiêng theo hình rẻ quạt dọc theo tuyến bến, cần phải xử lý bằng phương pháp như sau:',
    options: [
      'a. Hạ cọc tiếp theo không liên kết khóa với hàng cọc bị xiên để đảm bảo độ thẳng, rồi hàn với nhau (cả dưới nước và trên khô) để đảm bảo liên kết.',
      'b. Chế tạo cọc vát dần để khắc phục độ xiên',
      'c. Nhổ lên đóng lại để đảm bảo độ thằng.',
      'd. Bất kỳ trong 3 phương pháp nêu trên.',
    ],
    correct: 1
  },
  {
    question: 'Việc đóng một cọc cừ được coi là hoàn thành khi:',
    options: [
      'a. Hạ cọc đến cao độ thiết kế.',
      'b. Hạ cọc đến khi đạt độ chối thiết kế',
      'c. Hạ cọc đến cao độ thiết kế và đạt độ chối thiết kế',
      'd. Bất kỳ trong 3 trường hợp nêu trên.',
    ],
    correct: 0
  },
  {
    question: 'Việc đổ bê tông dầm mũ tường cừ trong điều kiện một phần luôn bị ngập nước không thể tiến hành được bằng phương pháp như sau:',
    options: [
      'a. Đúc sẵn bộ phận kết cấu luôn bị ngập.',
      'b. Đổ bê tông dưới nước bằng phương pháp rút ống thẳng đứng',
      'c. Đổ bê tông dưới nước bằng phương pháp vữa dâng',
      'd. Chế tạo ván khuôn thép kín cho phần kết cấu ở dưới nước để đổ trong điều kiện khô.',
    ],
    correct: 2
  },
  {
    question: 'TVGS có bắt buộc phải kiểm tra Danh mục các phép thử được phép thực hiện của PTN mà Nhà thầu đệ trình:',
    options: [
      'a. Không nhất thiết vì công tác kiểm tra chất lượng là trách nhiệm của NT.',
      'b. Không cần thiết, vì PTN đã được cấp dấu LAS thì đương nhiên được thực hiện các phép thử.',
      'c. Nhất thiết phải kiểm tra và so sánh với những phép thử phải thực hiện trong dự án.',
      'd. Nếu PTN đã có chứng chỉ hợp chuẩn, còn hiệu lực và không bị đình chỉ hoạt động thì không cần thiết phải kiểm tra',
    ],
    correct: 2
  },
  {
    question: 'TVGS xử lý thế nào trong trường hợp: khi đang thực hiện dự án, phát hiện thấy tem hiệu chuẩn của thiết bị thí nghiệm - thử nghiệm đã hết hiệu lực..',
    options: [
      'a. Không có ý kiến gì vì thiết bị đã được kiểm tra trước khi chấp thuận cho PTN hoạt động trong dự án.',
      'b. Tiếp tục cho làm thí nghiệm, sau đó yêu cầu PTN kiểm tra hiệu chuẩn bổ sung.',
      'c. Không có xử lý gì vì các phép thử trước đây cũng đã tiến hành trên chính thiết bị ấy.',
      'd. Đình chỉ thí nghiệm, yêu cầu PTN mời đơn vị có chức năng đến kiểm tra, hiệu chuẩn lại.',
    ],
    correct: 3
  },
  {
    question: 'TVGS có nhất thiết phải giám sát quá trình lấy mẫu, vận chuyển và bàn giao mẫu cùng với Nhà thầu không?',
    options: [
      'a. Không nhất thiết, vì TVGS không thể có đủ người để làm các công việc ấy.',
      'b. Bắt buộc, vì công việc này có ảnh hưởng lớn đến tính đúng đắn của phép thử.',
      'c. Chỉ nên đi vài lần đầu, các lần sau có thể để NT tự làm công việc này.',
      'd. Không cần thiết, vì TVGS chỉ cần kiểm tra quá trình thí nghiệm của NT là đủ',
    ],
    correct: 0
  },
  {
    question: 'Công tác giám sát thi công, yêu cầu về kiểm tra kết quả lao dọc và sang ngang dầm BTCT, Độ sai lệch cho phép đường tim nhịp cầu lao ra so với thiết kế:',
    options: [
      'a. Không lớn hơn 40mm',
      'b. Không lớn hơn 50mm',
      'c. Không lớn hơn 60mm',
      'd. Không lớn hơn 70mm',
    ],
    correct: 0
  },
  {
    question: 'Các chỉ tiêu cần quan tâm khi chấp nhận chứng chỉ thí nghiệm cốt thép là gì?',
    options: [
      'a. Giới hạn chảy, giới hạn bền, độ dãn dài, đường kính uốn và góc uốn',
      'b. Loại, đường kính, giới hạn chảy',
      'c. Loại, đường kính, giới hạn chảy, giới hạn bền, độ dãn dài, đường kính uốn và góc uốn, tính hàn (khi có mối hàn)',
      'd. Phương án A và B',
    ],
    correct: 2
  },
  {
    question: 'Trình tự đổ bê tông mặt cắt dầm hộp nào là hợp lý nhất:',
    options: [
      'a. bản đáy hộp, 2 góc hộp bên dưới, 2 thành hộp, bản nắp hộp',
      'b. bản đáy hộp, 2 thành hộp, bản nắp hộp',
      'c. 2 góc hộp bên dưới, bản đáy hộp, 2 thành hộp, bản nắp hộp',
      'd. 2 góc hộp bên dưới, 2 thành hộp, bản nắp hộp',
    ],
    correct: 2
  },
  {
    question: 'Việc thử tải xe đúc hẫng cầu BTCT DUL được thực hiện khi nào:',
    options: [
      'a. Phương án 1: ngay sau khi chế tạo xong xe đúc tại nhà máy chế tạo',
      'b. Phương án 2: sau khi lắp ráp hoàn chỉnh xe đúc tại vị trí trên đốt K0 chưa bao gồm phần ván khuôn',
      'c. Phương án 3: sau khi lắp ráp hoàn chỉnh xe đúc tại vị trí trên đốt K0 bao gồm cả phần ván khuôn',
      'd. Phương án 4: cả thử tải trong Nhà máy (Phương án 1) và phương án 3',
    ],
    correct: 3
  },
  {
    question: 'Khi thi công đúc hẫng đốt K0, dùng loại phụ gia nào là đúng:',
    options: [
      'a. Phụ gia siêu dẻo, siêu giảm nước, tăng cường độ cao sớm',
      'b. Phụ gia siêu dẻo, siêu giảm nước, kéo dài thời gian ninh kết, tăng cường độ cao',
      'c. Phụ gia cuốn khí.',
      'd. Phụ gia trợ bơm.',
    ],
    correct: 1
  },
  {
    question: 'Khi thi công đúc hẫng các đốt dầm và đốt hợp long, dùng loại phụ gia nào là đúng:',
    options: [
      'a. Phụ gia siêu dẻo, siêu giảm nước, tăng cường độ cao sớm',
      'b. Phụ gia siêu dẻo, siêu giảm nước, kéo dài thời gian ninh kết, tăng cường độ cao',
      'c. Phụ gia cuốn khí',
      'd. Phụ gia trợ bơm',
    ],
    correct: 0
  },
  {
    question: 'Khi thi công đúc đốt hợp long, chọn cấp bê tông thế nào?',
    options: [
      'a. Giống như cấp bê tông của các đốt đúc hẫng khác',
      'c. Tùy Tư vấn giám sát quyết định',
    ],
    correct: 0
  },
  {
    question: 'Độ sụt tối thiểu hợp lý của hỗn hợp bê tông khi đúc hẫng là bao nhiêu:',
    options: [
      'a. Phương án 1: 5 cm',
      'b. Phương án 2: 10 cm',
      'c. Phương án 3: 15 cm',
      'd. Tùy chọn một trong 3 cách nêu trên do Tư vấn giám sát quyết định',
    ],
    correct: 1
  },
  {
    question: 'Số lượng cọc khoan nhồi cần phải kiểm tra siêu âm trên một công trường cầu là bao nhiêu:',
    options: [
      'a. tất cả các cọc',
      'b. ít nhất 50% tổng số cọc',
      'c. do Tư vấn giám sát quyết định',
      'd. kết hợp B và C',
    ],
    correct: 3
  },
  {
    question: 'Loại vật liệu nào dưới đây có thể sử dụng để đắp nền đường?',
    options: [
      'a. Đất á cát',
      'b. Đất bùn, đất than bùn',
      'c. Đất mùn lẫn hữu cơ có thành phần hữu cơ quá 10%, đất có lẫn cỏ và rễ cây, lẫn rác thải sinh hoạt',
      'd. Đất có lẫn thành phần muối dễ hòa tan quá 5%',
    ],
    correct: 0
  },
  {
    question: 'Công việc nào sau đây không phải là công tác chuẩn bị thi công nền đường?',
    options: [
      'a. Khôi phục và cố định các cọc định vị tuyến đường thiết kế',
      'b. Xử lý mặt nền tự nhiên trước khi đắp nền',
      'c. Định vị các điểm đặc trưng của nền đường',
      'd. Dọn dẹp mặt bằng thi công',
    ],
    correct: 1
  },
  {
    question: 'Mục đích của đoạn thi công thử nghiệm nền đường là gì?',
    options: [
      'a. Khẳng định các thông số chính của công nghệ đầm nén cần đạt được trong quá trình thi công đại trà',
      'b. Khẳng định các chỉ tiêu và phương pháp kiểm soát chất lượng trong quá trình thi công',
      'c. Khẳng định công nghệ và phương án tổ chức thi công.',
      'd. Tất cả các đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Phương án đắp đất nào được phép sử dụng để đắp đoạn tiếp giáp giữa mố cầu với nền đường đắp liền kề?',
    options: [
      'a. Đắp thành từng lớp xiên lấn dần từ phía nền đắp về mố cầu.',
      'b. Đắp thành từng lớp từ dưới lên trên với chiều dày đầm nén từ 20 đến 30 cm',
      'c. Đắp thành từng lớp từ dưới lên trên với chiều dày đầm nén không quá 20 cm.',
      'd. Đắp thành từng lớp từ dưới lên trên với chiều dày đầm nén từ 30 đến 40 cm.',
    ],
    correct: 2
  },
  {
    question: 'Trong thi công nền đường, đất đào thừa phải đổ ở đâu?',
    options: [
      'a. Đổ ở một số khu vực nhất định được phép đổ.',
      'b. Đổ ở sông suối và các vị trí trũng gần tuyến đường đang thi công',
      'c. Đổ ở sườn dốc phía dưới nền đường đào',
      'd. Đổ ở khu vực đất canh tác gần tuyến đường đang thi công',
    ],
    correct: 0
  },
  {
    question: 'Để phục vụ nghiệm thu nền đường cần kiểm tra những nội dung nào dưới đây?',
    options: [
      'a. Kiểm tra các biên bản đã thực hiện trong quá trình thi công.',
      'b. Kiểm tra các yếu tố hình học của nền đường.',
      'c. Kiểm tra chất lượng công tác gia cố mái taluy nền đường.',
      'd. Tất cả các đáp án trên.',
    ],
    correct: 3
  },
  {
    question: 'Trong quá trình thi công ấn bấc thấm, với mỗi lần ấn bấc thấm không cần phải kiểm tra nội dung nào sau đây?',
    options: [
      'a. Các chỉ tiêu cơ lý của bấc thấm',
      'b. Vị trí và phương thẳng đứng của bấc thấm',
      'c. Chiều dài bấc thấm',
      'd. Phần bấc thấm thừa ra trên mặt tầng đệm cát',
    ],
    correct: 0
  },
  {
    question: 'Loại lu nào thích hợp để lu lèn mặt đường đá dăm nước?',
    options: [
      'a. Lu bánh cứng',
      'b. Lu bánh lốp',
      'c. Lu chấn động',
      'd. Lu chân cừu',
    ],
    correct: 0
  },
  {
    question: 'Kiểm tra độ chặt của lớp móng đá dăm nước ở hiện trường bằng cách nào dưới đây?',
    options: [
      'a. Quan sát các vệt hằn của bánh lu trên bề mặt',
      'b. Phương pháp dùng phễu rót cát',
      'c. Phương pháp thử mức độ vỡ của đá rải ra mặt đường khi lu chạy qua',
      'd. Đáp án a và c',
    ],
    correct: 3
  },
  {
    question: 'Nội dung nào dưới đây không cần thiết phải kiểm tra khi nghiệm thu lớp móng cấp phối đá dăm?',
    options: [
      'a. Kích thước hình học (cao độ, độ dốc ngang, chiều rộng, chiều dày)',
      'b. Độ bằng phẳng',
      'c. Độ nhám',
      'd. Độ chặt lu lèn',
    ],
    correct: 2
  },
  {
    question: 'Để kiểm tra độ chặt lu lèn của lớp cấp phối đá dăm ở hiện trường thường dùng phương pháp nào dưới đây?',
    options: [
      'a. Phương pháp đồng vị phóng xạ',
      'b. Phương pháp dùng phễu rót cát',
      'c. Phương pháp dao đai đốt cồn',
      'd. Phương pháp dùng phao Covalep',
    ],
    correct: 1
  },
  {
    question: 'Để kiểm tra thành phần hạt của cấp phối đá dăm ở hiện trường, có thể dùng phương pháp nào dưới đây?',
    options: [
      'a. Phương pháp sử dụng tỷ trọng kế',
      'b. Kiểm tra thông qua chứng chỉ vật liệu của nhà sản xuất',
      'c. Phương pháp sàng',
      'd. Kiểm tra bằng mắt tại hiện trường',
    ],
    correct: 2
  },
  {
    question: 'Kiểm tra khả năng chống mài mòn của vật liệu cấp phối đá dăm được thực hiện bằng phương pháp nào?',
    options: [
      'a. Lấy mẫu thí nghiệm xác định chỉ tiêu LA',
      'b. Dùng búa đập sau đó quan sát đánh giá bằng mắt',
      'c. Quan sát bằng mắt sau khi lu lèn',
      'd. Kiểm tra chỉ tiêu LA từ chứng chỉ vật liệu của nhà sản xuất',
    ],
    correct: 0
  },
  {
    question: 'Để tránh hiện tượng cấp phối thiên nhiên bị phân tầng trong quá trình vận chuyển, không dùng biện pháp nào dưới đây?',
    options: [
      'a. Dùng máy xúc lên xe ô tô vận chuyển',
      'b. Dùng xẻng hất lên xe',
      'c. Dùng sọt chuyển lên xe',
      'd. Đổ vật liệu ở chiều cao không quá 1,0 m.',
    ],
    correct: 1
  },
  {
    question: 'Chỉ tiêu nào dưới đây cần phải kiểm tra để nghiệm thu lớp móng cấp phối thiên nhiên?',
    options: [
      'a. Kích thước hình học',
      'b. Độ bằng phẳng',
      'c. Độ chặt đầm nén',
      'd. Tất cả các đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Thí nghiệm trên các mẫu khoan mẫu ở hiện trường không cho phép xác định được chỉ tiêu nào dưới đây của lớp móng cấp phối gia cố xi măng?',
    options: [
      'a. Khối lượng thể tích khô của mẫu',
      'b. Cường độ chịu nén',
      'c. Độ bằng phẳng',
      'd. Cường độ ép chẻ',
    ],
    correct: 2
  },
  {
    question: 'Độ rỗng dư của bê tông nhựa chặt (BTNc. thường được quy định như thế nào?',
    options: [
      'a. Từ 2% đến 5%',
      'b. Từ 3% đến 8%',
      'c. Từ 3% đến 6%',
      'd. Từ 3% đến 5%',
    ],
    correct: 2
  },
  {
    question: 'Để tưới dính bám trước khi thi công bê tông nhựa lớp trên, có thể sử dụng loại vật liệu nào?',
    options: [
      'a. Nhũ tương nhựa đường a xít phân tách chậm CSS-1h',
      'b. Nhựa lỏng đông đặc nhanh RC70',
      'c. Nhũ tương nhựa đường a xít phân tách nhanh CRS-1',
      'd. Tất cả các loại vật liệu trên.',
    ],
    correct: 3
  },
  {
    question: 'Tổ hợp lu nào dưới đây được sử dụng phổ biến để thi công bê tông nhựa rải nóng?',
    options: [
      'a. Lu bánh thép phối hợp với lu bánh lốp',
      'b. Lu rung phối hợp với lu bánh thép',
      'c. Lu rung phối hợp với lu chân cừu',
      'd. Lu rung phối hợp với lu bánh lốp',
    ],
    correct: 0
  },
  {
    question: 'Trong quá trình thi công, cần phải kiểm tra nhiệt độ của hỗn hợp bê tông nhựa nóng tại thời điểm nào dưới đây?',
    options: [
      'a. Trên xe vận chuyển trước khi đổ vào phễu rải',
      'b. Khi rải hỗn hợp',
      'c. Khi lu lèn hỗn hợp',
      'd. Tất cả các đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Chỉ tiêu nào dưới đây dùng để đánh giá chất lượng của cát dùng để chế tạo hỗn hợp bê tông nhựa nóng?',
    options: [
      'a. Mô đun độ lớn',
      'b. Hệ số đương lượng cát',
      'c. Độ góc cạnh của cát',
      'd. Tất cả các đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Nội dung nào dưới đây không cần phải kiểm tra khi nghiệm thu mặt đường bê tông nhựa?',
    options: [
      'a. Kích thước hình học (bề rộng, độ dốc ngang, chiều dày và cao độ)',
      'b. Cường độ chịu nén',
      'c. Độ chặt lu lèn',
      'd. Độ bằng phẳng và độ nhám mặt đường',
    ],
    correct: 1
  },
  {
    question: 'Trường hợp đang thi công bê tông nhựa gặp mưa, cần phải làm gì?',
    options: [
      'a. Báo về trạm trộn ngừng cung cấp hỗn hợp bê tông nhựa',
      'b. Tiếp tục lu lèn nếu bê tông nhựa đã lu được trên 2/3 số lượt lu yêu cầu.',
      'c. Đáp án a và b',
      'd. Tiếp tục thi công theo đúng trình tự công nghệ được duyệt.',
    ],
    correct: 2
  },
  {
    question: 'Phương pháp nào dưới đây được sử dụng phổ biến để xác định mô đun đàn hồi chung của kết cấu áo đường mềm có lớp mặt bằng bê tông nhựa?',
    options: [
      'a. Phương pháp dùng tấm ép cứng',
      'b. Phương pháp dùng cần đo võng Benkelman',
      'c. Phương pháp dùng dùng thiết bị đo độ võng FWD',
      'd. Phương pháp dùng chùy xuyên động DCP',
    ],
    correct: 1
  },
  {
    question: 'Thời gian tối đa cho phép từ khi hỗn hợp bê tông xi măng ra khỏi buồng trộn đến khi rải xong phụ thuộc vào những yếu tố nào dưới đây?',
    options: [
      'a. Nhiệt độ không khí khi thi công',
      'b. Công nghệ rải',
      'c. Loại phụ gia chậm đông kết (nếu có)',
      'd. Tất cả các đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Giải pháp nào không được phép sử dụng khi bảo dưỡng mặt đường bê tông xi măng?',
    options: [
      'a. Tưới nước trực tiếp lên mặt đường trong thời gian bảo dưỡng',
      'b. Phun tạo màng giữ ẩm',
      'c. Rải màng giữ ẩm kết hợp với tưới nước',
      'd. Rải vải địa kỹ thuật, bao tải ẩm phủ kết hợp với tưới nước',
    ],
    correct: 0
  },
  {
    question: 'Để đánh giá chất lượng của mặt đường bê tông xi măng khi nghiệm thu, chỉ tiêu nào sau đây được sử dụng?',
    options: [
      'a. Cường độ nén của bê tông xi măng',
      'b. Cường độ kéo khi uốn của bê tông xi măng',
      'c. Độ mài mòn, cường độ chịu nén của đá gốc',
      'd. Độ mài mòn của bê tông xi măng',
    ],
    correct: 1
  },
  {
    question: 'Kiểm tra lượng nhựa đường phun tưới trên mặt đường khi thi công bằng cách nào:',
    options: [
      'a. Quan sát bằng mắt để đánh giá',
      'b. Kiểm tra bằng cách rải tấm cứng trên đường trước khi phun tưới nhựa qua',
      'c. Kiểm tra khối lượng nhựa đường sử dụng tương ứng với diện tích đã tưới.',
      'd. Kết hợp các cách trên để kiểm tra',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp Marshall được dùng để làm gì:',
    options: [
      'a. Xác định cấp phối cốt liệu tối ưu cho hỗn hợp bê tông nhựa chặt rải nóng',
      'b. Xác định hàm lượng nhựa tối ưu tương ứng với một cấp phối cốt liệu xác định của hỗn hợp bê tông nhựa chặt rải nóng',
      'c. Xác định các chỉ tiêu thể tích của hỗn hợp bê tông nhựa',
      'd. Xác định khả năng kháng lún của hỗn hợp bê tông nhựa',
    ],
    correct: 1
  },
  {
    question: 'Số lượng mẫu bê tông nhựa tối thiểu cần phải đúc để xác định hàm lượng nhựa tối ưu trong phương pháp thiết kế Marshall:',
    options: [
      'a. 18 mẫu',
      'b. 15 mẫu',
      'c. 12 mẫu',
      'd. 5 mẫu',
    ],
    correct: 1
  },
  {
    question: 'Phương pháp phễu rót cát sử dụng ở hiện trường dùng để xác định chỉ tiêu nào đây:',
    options: [
      'a. Độ chặt của vật liệu',
      'b. Độ bằng phẳng',
      'c. Độ nhám',
      'd. Độ ẩm của vật liệu',
    ],
    correct: 0
  },
  {
    question: 'Khi kiểm tra nghiệm thu kích thước hình học của nền đường sau thi công đối với đường cấp IV, V và VI, sai số cho phép của vị trí trục tim tuyến đường là bao nhiêu:',
    options: [
      'a. Không quá 30 mm',
      'b. Không quá 50 mm',
      'c. Không quá 70 mm',
      'd. Không quá 100 mm',
    ],
    correct: 3
  },
  {
    question: 'Độ rỗng dư của bê tông nhựa rỗng (BTNR) thường được quy định như thế nào:',
    options: [
      'a. Lớn hơn 6%',
      'b. Từ 5% đến 12%',
      'c. Từ 8% đến 12%',
      'd. Từ 7% đến 20%',
    ],
    correct: 0
  },
  {
    question: 'Có thể sử dụng phương pháp nào dưới đây để bảo dưỡng lớp móng cấp phối gia cố xi măng:',
    options: [
      'a. Tưới nước trực tiếp lên mặt lớp cấp phối gia cố xi măng hàng tuần.',
      'b. Tưới nhũ tương nhựa đường a xít với lượng 0,8 - 1,0 lít/m2',
      'c. Dùng lều bạt che nắng trên diện thi công',
      'd. Cả ba phương án trên',
    ],
    correct: 1
  },
  {
    question: 'Việc phát hiện những sai sót bất hợp lý trong hồ sơ thiết kế và đề nghị đơn vị có thẩm quyền bổ sung, chỉnh lý được tiến hành trong công tác nào sau đây?',
    options: [
      'a. Công tác chuẩn bị',
      'b. Công tác thi công',
      'c. Công tác nghiệm thu',
      'd. Cả ba đáp án trên',
    ],
    correct: 0
  },
  {
    question: 'Công việc nào không thuộc nội dung cơ bản của công tác lập biện pháp tổ chức thi công?',
    options: [
      'a. Giao nhận mốc GPS, mốc đường chuyền, cọc chỉ giới đường sắt',
      'b. Xác định hướng thi công, mũi thi công, tập trung đúng mức cho công trình trọng điểm',
      'c. Lập biểu đồ điều phối đất hợp lý trên toàn tuyến',
      'd. Tính toán bố trí nhân lực, máy móc thiết bị thi công',
    ],
    correct: 0
  },
  {
    question: 'Loại đất nào sau đây có thể dùng để đắp nền đường sắt?',
    options: [
      'a. Đất lẫn sỏi, sỏi ong,',
      'b. Đất cát, đất á cát, đất á sét',
      'c. Đất muối, đất mùn, đất bùn',
      'd. Cả đáp án a và b',
    ],
    correct: 3
  },
  {
    question: 'Đối với đất sét (có thành phần hạt sét dưới 50%) không được dùng trong trường hợp nào sau đây?',
    options: [
      'a. Nền đường khô ráo, không bị ngập, chân nền đường thoát nước nhanh',
      'b. Nền đắp cao dưới 2m tính từ dưới lên',
      'c. Khoảng giới hạn từ cao độ thiết kế xuống là 0,5m',
      'd. Cả ba đáp án trên',
    ],
    correct: 2
  },
  {
    question: 'Khi độ dốc ngang mặt đất tự nhiên lớn hơn 10% thì hố đấu được đào ở phía nào?',
    options: [
      'a. Ở phía trên',
      'b. Ở phía dưới',
      'c. Cả 2 bên',
      'd. Cả ba đáp án trên đều được',
    ],
    correct: 0
  },
  {
    question: 'Hệ số chuyển đổi từ đất tự nhiên sang đất tơi phụ thuộc vào yếu tố nào?',
    options: [
      'a. Phương pháp khai thác',
      'b. Chiều sâu lớp đất lấy',
      'c. Loại đất',
      'd. Cả ba đáp án trên',
    ],
    correct: 2
  },
  {
    question: 'Chiều dầy lớp đất ướt nằm trên mực nước ngầm đối với cát thô, cát hạt trung và cát hạt nhỏ?',
    options: [
      'a. 0,1 m',
      'b. 0,3 m',
      'c. 0,5 m',
      'd. 1,0 m',
    ],
    correct: 1
  },
  {
    question: 'Chiều dầy lớp đất ướt nằm trên mực nước ngầm đối với cát mịn và đất cát pha?',
    options: [
      'a. 0,1 m',
      'b. 0,3 m',
      'c. 0,5 m',
      'd. 1,0 m',
    ],
    correct: 2
  },
  {
    question: 'Chiều dầy lớp đất ướt nằm trên mực nước ngầm đối với đất pha sét, đất sét và hoàng thổ?',
    options: [
      'a. 0,1 m',
      'b. 0,3 m',
      'c. 0,5 m',
      'd. 1,0 m',
    ],
    correct: 0
  },
  {
    question: 'Yêu cầu nào không phải là yêu cầu đúng của kỹ thuật đầm lèn?',
    options: [
      'a. Cần đầm lèn cho đồng đều trên suốt bề rộng của nền đường',
      'b. Cần đầm chặt dứt điểm từng vệt đầm rồi mới chuyển sang đầm vệt khác',
      'c. Khi đầm, các vết đầm của hai sân đầm phải chồng lên nhau',
      'd. Trong một sân đầm vết đầm sau phải đè lên vết đầm trước',
    ],
    correct: 1
  },
  {
    question: 'Khi thi công cơ giới, trong một sân đầm, vết đầm sau phải đè lên vết đầm trước với chiều rộng bằng bao nhiêu?',
    options: [
      'a. 15 cm',
      'b. 20 cm',
      'c. 25 cm',
      'd. 50 cm',
    ],
    correct: 1
  },
  {
    question: 'Trong công tác nghiệm thu nền đường sắt thì sai số độ dốc thực tế so với hồ sơ thiết kế không được được vượt quá giá trị nào sau đây?',
    options: [
      'a. 1 ‰',
      'b. 2 ‰',
      'c. 2,5 ‰',
      'd. 5 ‰',
    ],
    correct: 2
  },
  {
    question: 'Trong công tác nghiệm thu nền đường sắt thì sai số độ chặt thực tế so với độ chặt yêu cầu không được được vượt quá giá trị nào sau đây?',
    options: [
      'a. 0 %',
      'b. 1 %',
      'c. 2 %',
      'd. 2,5 %',
    ],
    correct: 2
  },
  {
    question: 'Chiều cao mui luyện tối thiểu và tối đa tương ứng là bao nhiêu?',
    options: [
      'a. 5 cm và 7 cm',
      'b. 6 cm và 11 cm',
      'c. 7 cm và 12 cm',
      'd. 10 cm và 18 cm',
    ],
    correct: 3
  },
  {
    question: 'Khi thi công đường sắt khổ 1000 mm thì mái dốc mui luyện tối thiểu và tối đa tương ứng là bao nhiêu?',
    options: [
      'a. 5 % và 7 %',
      'b. 6 % và 11 %',
      'c. 7 % và 12 %',
      'd. 10 % và 18 %',
    ],
    correct: 2
  },
  {
    question: 'Khi thi công đường sắt khổ 1435 mm và đường sắt khổ lồng thì mái dốc mui luyện tối thiểu và tối đa tương ứng là bao nhiêu?',
    options: [
      'a. 5 % và 7 %',
      'b. 6 % và 11 %',
      'c. 7 % và 12 %',
      'd. 10 % và 18 %',
    ],
    correct: 1
  },
  {
    question: 'Trong công tác nghiệm thu kích thước rãnh thoát nước thì bao nhiêu mét cần kiểm tra một lần?',
    options: [
      'a. 10 m',
      'b. 20 m',
      'c. 50 m',
      'd. 100 m',
    ],
    correct: 1
  },
  {
    question: 'Máy đầm nào không được dùng để đầm đất dính?',
    options: [
      'a. Đầm bánh hơi',
      'b. Đầm chân cừu',
      'c. Máy đầm rung',
      'd. Máy đầm nện',
    ],
    correct: 2
  },
  {
    question: 'Máy đầm nào không được dùng để đầm đất không dính?',
    options: [
      'a. Đầm bánh hơi',
      'b. Đầm chân cừu',
      'c. Máy đầm rung',
      'd. Máy đầm nện chấn động',
    ],
    correct: 1
  },
  {
    question: 'Đường đi của máy đầm như thế nào là đúng yêu cầu kỹ thuật đầm lèn?',
    options: [
      'a. Theo hướng thẳng góc với trục của công trình và từ ngoài mép vào tim của công trình',
      'b. Theo hướng thẳng góc với trục của công trình và từ tim ra ngoài mép của công trình',
      'c. Theo hướng dọc trục của công trình đắp và từ ngoài mép vào tim của công trình',
      'd. Theo hướng dọc trục của công trình đắp và từ tim ra ngoài mép của công trình',
    ],
    correct: 2
  },
  {
    question: 'Khi đắp đất hoàn trả lại vào hố móng thì có được phép tận dụng đất đào để đắp không?',
    options: [
      'a. Không được phép',
      'b. Được phép',
      'c. Được phép tận dụng nếu mỏ đất đắp quá xa',
      'd. Được phép sử dụng nếu đất đào đảm bảo chất lượng',
    ],
    correct: 3
  },
  {
    question: 'Với độ dốc của đáy nền đường thì cần phải xử lý đánh cấp trước khi đắp?',
    options: [
      'a. < 10 %',
      'b. 10 % - 20 %',
      'c. 20 % - 33 %',
      'd. > 33 %',
    ],
    correct: 2
  },
  {
    question: 'Khi nghiệm thu nền đường cần kiểm tra:',
    options: [
      'a. Chất lượng đắp đất, khối lượng thể tích khô',
      'b. Cao độ và độ dốc nền,',
      'c. Kích thước hình học',
      'd. Cả ba đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Sai lệch cho phép của trục tim đường so với thiết kế là bao nhiêu?',
    options: [
      'a. 1 cm',
      'b. 5 cm',
      'c. 10 cm',
      'd. 50 cm',
    ],
    correct: 1
  },
  {
    question: 'Trong công tác nghiệm thu kiến trúc tầng trên đường sắt không mối nối, sai số cự ly giữa các tà vẹt phải không được vượt quá trị số nào sau đây?',
    options: [
      'a. 5 mm',
      'b. 15 mm',
      'c. 20 mm',
      'd. 50 mm',
    ],
    correct: 1
  },
  {
    question: 'Yêu cầu nào là bắt buộc khi tiến hành nổ mìn?',
    options: [
      'a. Chỉ được nổ mìn ở những khu vực thi công cách xa khu dân cư',
      'b. Tổ chức bảo quản và cung cấp thuốc nổ an toàn',
      'c. Báo trước cho cơ quan địa phương, nhân dân và giải thích các tín hiệu, báo hiệu',
      'd. Cả hai đáp án b và c',
    ],
    correct: 3
  },
  {
    question: 'Công tác nổ phá được coi là không đạt yêu cầu khi khối lượng đất đá nổ phá ra thực tế nhỏ hơn bao nhiêu % so với khối lượng thiết kế?',
    options: [
      'a. 20 %',
      'b. 30 %',
      'c. 50 %',
      'd. 80 %',
    ],
    correct: 1
  },
  {
    question: 'Khi thi công nền đường đắp thì chiều dầy lớp đất đắp được quy định như thế nào?',
    options: [
      'a. 20 cm',
      'b. 30 cm',
      'c. Được quy định trong quy trình tùy theo từng loại đất',
      'd. Tùy theo điều kiện thi công, loại đất, loại máy đầm, độ chặt yêu cầu',
    ],
    correct: 3
  },
  {
    question: 'Khi bắt buộc phải thi công nền đường trong mùa mưa thì cần phải thực hiện các biện pháp nào sau đây?',
    options: [
      'a. Đắp đất theo từng lớp đất nghiêng ra ngoài',
      'b. Thoát nước tốt bãi, hố lấy đất',
      'c. Bố trí diện thi công hẹp, quá trình đào, vận chuyển, san đầm đất không quá 1 buổi làm việc',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Khi bạt mái công trình đất, có thể dùng máy ủi và máy san để bạt mái trong trường hợp nào?',
    options: [
      'a. Chiều cao đắp < 3m; độ dốc mái ≤ 1: 3',
      'b. Chiều cao đắp > 3m; độ dốc mái ≤ 1: 3',
      'c. Chiều cao đắp < 3m; độ dốc mái > 1: 3',
      'd. Chiều cao đắp > 3m; độ dốc mái > 1: 3',
    ],
    correct: 1
  },
  {
    question: 'Khi đắp đất trong vùng đầm lầy cần đặc biệt lưu ý đến những công việc nào sau đây?',
    options: [
      'a. Chuẩn bị nền móng: chặt cây, đào gốc, vớt rác rong rêu',
      'b. Bóc lớp than bùn trong phạm vi đáy móng đến lớp đất nguyên thổ, vét sạch hết bùn',
      'c. Theo dõi trạng thái của nền đắp khi máy thi công đi lại',
      'd. Cả 3 đáp án trên',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp xử lý lớp đắp bị bùng nhùng khi đắp đập đất đầm nén?',
    options: [
      'a. Không cần xử lý',
      'b. Cào xới, trộn với đất khô rồi đầm lại',
      'c. Chờ phần bùng nhùng khô cứng rồi đắp tiếp',
      'd. Đào hết phần bùng nhùng rồi đắp lại',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp xử lý hai vai đập bên sườn núi khi đắp đập đất đầm nén?',
    options: [
      'a. Xử lý kiểu dật cấp bậc thang',
      'b. Bạt mái theo thiết kế và đào tường răng cắm vào sườn núi',
      'c. Bạt mái song song với mặt đất tự nhiên',
      'd. Bóc hết lớp hữu cơ trên mặt',
    ],
    correct: 1
  },
  {
    question: 'Số lượng mẫu cần thiết khi kiểm tra thành phần hạt của tầng lọc là bao nhiêu?',
    options: [
      'a. 1 tổ mẫu/(20-40) m3',
      'b. 1 tổ mẫu/(30-50) m3',
      'c. 1 tổ mẫu/(20-50) m3',
      'd. 1 tổ mẫu/(40-60) m3',
    ],
    correct: 2
  },
  {
    question: 'Điều kiện nào để kết luận là độ đầm chặt của một lớp đất đạt yêu cầu?',
    options: [
      'a. Độ thiếu hụt so với yêu cầu thiết kế của dung trọng khô thực tế không vượt quá 0,03 T/m3',
      'b. Số mẫu không đạt yêu cầu thiết kế không quá 5% của tổng số mẫu lấy thí nghiệm',
      'c. Cả 2 điều kiện a và b',
      'd. Cả 2 điều kiện a, b và các mẫu không đạt yêu cầu không tập trung vào 1 vùng',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp lựa chọn thành phần bê tông có mác từ M15 trở lên?',
    options: [
      'a. Thiết kế thông qua Phòng thí nghiệm',
      'b. Tra theo định mức Dự toán',
      'c. Tra bảng tính sẵn trong Tiêu chuẩn',
      'd. Lấy theo công trình tương tự',
    ],
    correct: 0
  },
  {
    question: 'Khi chuyển vữa bê tông có độ sụt nhỏ hơn 40mm thì góc nghiêng giới hạn của băng chuyền khống chế bằng bao nhiêu?',
    options: [
      'a. Khi chuyển lên: 15o; khi chuyển xuống: 10o.',
      'b. Khi chuyển lên: 15o; khi chuyển xuống: 12o.',
      'c. Khi chuyển lên: 12o; khi chuyển xuống: 10o.',
      'd. Khi chuyển lên: 12o; khi chuyển xuống: 8o.',
    ],
    correct: 1
  },
  {
    question: 'Điều kiện nào thì cho phép độn đá hộc ở vùng chịu kéo của bê tông khối lớn?',
    options: [
      'a. Kích thước max của đá hộc không vượt quá 1/3 kích thước nhỏ nhất của khối đổ',
      'b. Hình dạng đá không bị thoi dẹt; cường độ đá không thấp hơn cường độ của cốt liệu lớn của bê tông.',
      'c. Cả hai điều kiện trên',
      'd. Không cho phép.',
    ],
    correct: 3
  },
  {
    question: 'Điều kiện nào cho phép phụt vữa vào nền đá theo thứ tự từ dưới lên trên?',
    options: [
      'a. Với các hố khoan đợt 2 và các đợt tiếp theo nếu việc phụt thử nghiệm theo cách này tại hiện trường cho kết quả tốt.',
      'b. Khi phụt từ dưới lên mà số đoạn có hiện tượng dung dịch xì qua thành nút lên phía trên chiếm không quá 10% số đoạn phụt.',
      'c. Cả 2 điều kiện trên.',
      'd. Không cho phép trong mọi điều kiện.',
    ],
    correct: 2
  },
  {
    question: 'Phương pháp nào để xử lý khi dung dịch vữa phụt xuất hiện trên mặt nền đá mà không bịt được các lỗ rò?',
    options: [
      'a. Giảm áp lực phụt xuống cho đến khi không còn vữa chảy ra và phụt tiếp với áp lực mới này.',
      'b. Pha phụ gia đông cứng nhanh hoặc phụ gia tạo bọt vào vữa rồi phụt tiếp.',
      'c. Dừng phụt trong thời gian 1 giờ rồi phụt lại.',
      'd. Dừng phụt, coi như đã đạt yêu cầu.',
    ],
    correct: 1
  },
  {
    question: 'Khi kiểm tra xử lý độ ẩm của đất đắp cho phù hợp với độ ẩm thiết kế cần lấy mẫu ở vị trí nào?',
    options: [
      'a. Lấy ở phần trên của lớp đất.',
      'b. Lấy ở phần dưới của lớp đất.',
      'c. Lấy ở khoảng giữa của lớp đất.',
      'd. Lấy ở cả trên và dưới của lớp đất.',
    ],
    correct: 3
  },
  {
    question: 'Khi không có điều kiện đắp đập lên cao đều thì chọn vị trí mặt nối tiếp theo nguyên tắc nào?',
    options: [
      'a. Không đặt ở khoảng lòng sông.',
      'b. Không đặt ở vị trí có chiều cao đập lớn nhất.',
      'c. Cả 2 ý (a và b).',
      'd. Không hạn chế, bố trí tùy theo điều kiện thi công.',
    ],
    correct: 2
  },
  {
    question: 'Khi đắp đập đồng chất, mái dốc của mặt nối tiếp hướng ngang (hướng vuông góc với tim đập) chọn bằng bao nhiêu?',
    options: [
      'a. Không nhỏ hơn 2.',
      'b. Không nhỏ hơn 2,5.',
      'c. Không nhỏ hơn 3.',
      'd. Không nhỏ hơn 3,5.',
    ],
    correct: 0
  },
  {
    question: 'Cần lấy bao nhiêu mẫu khi kiểm tra độ ẩm, dung trọng khô, thành phần hạt của đất lẫn nhiều cát cuội sỏi để đắp thân đập?',
    options: [
      'a. 1 tổ mẫu/(200-300) m3.',
      'b. 1 tổ mẫu/(300-400) m3.',
      'c. 1 tổ mẫu/(200-400) m3.',
      'd. 1 tổ mẫu/(400-500) m3.',
    ],
    correct: 2
  },
  {
    question: 'Khi lớp đã đầm có chiều dày lớn hơn 40 cm thì cách lấy mẫu để kiểm tra tại một vị trí như thế nào?',
    options: [
      'a. 1 mẫu ở giữa, 2 mẫu ở đáy (tiếp giáp với lớp dưới).',
      'b. 2 mẫu ở giữa, 1 mẫu ở đáy.',
      'c. 1 mẫu ở đỉnh, 1 mẫu ở giữa, 1 mẫu ở đáy.',
      'd. 3 mẫu ở khoảng giữa.',
    ],
    correct: 0
  },
  {
    question: 'Số lượng mẫu khi kiểm tra dung trọng đất ở phạm vi đầm thủ công, đầm cóc là bao nhiêu?',
    options: [
      'a. 1 tổ mẫu/(25-30) m2.',
      'b. 1 tổ mẫu/(30-40) m2.',
      'c. 1 tổ mẫu/(40-50) m2.',
      'd. 1 tổ mẫu/(25-50) m2.',
    ],
    correct: 3
  },
  {
    question: 'Khi một lớp đầm chưa đạt yêu cầu thiết kế thì cần xử lý như thế nào?',
    options: [
      'a. Cần xới lên rồi đầm lại cho đến khi đạt yêu cầu.',
      'b. Cần đầm lại cho đến khi đạt yêu cầu.',
      'c. Cần đào bỏ hết lớp không đạt rồi đắp lớp mới.',
      'd. Cần bóc bỏ phần trên mặt của lớp không đạt rồi đầm lại cho đến khi đạt.',
    ],
    correct: 1
  },
  {
    question: 'Khi thi công đổ bê tông khối lớn mà dùng đầm dùi thì chiều dày lớp đổ bê tông chọn bằng bao nhiêu?',
    options: [
      'a. Không nhỏ hơn 2 lần chiều dài phần công tác của đầm.',
      'b. Không nhỏ hơn 1,5 lần chiều dài phần công tác của đầm.',
      'c. Không nhỏ hơn 1,25 lần chiều dài phần công tác của đầm.',
      'd. Không hạn chế, tùy điều kiện thực tế để chọn.',
    ],
    correct: 2
  },
  {
    question: 'Khi đầm bê tông bằng đầm dùi thì bước di chuyển của đầm chọn như thế nào?',
    options: [
      'a. Không quá 1,25 lần bán kính tác dụng của đầm.',
      'b. Không quá 1,5 lần bán kính tác dụng của đầm.',
      'c. Không quá 1,75 lần bán kính tác dụng của đầm.',
      'd. Không quá 2 lần bán kính tác dụng của đầm.',
    ],
    correct: 1
  },
  {
    question: 'Khi vận chuyển vữa bê tông bằng ô tô tự đổ thì chiều dày lớp bê tông trong thùng xe cần khống chế bằng bao nhiêu?',
    options: [
      'a. Lớn hơn 30 cm.',
      'b. Lớn hơn 35 cm.',
      'c. Lớn hơn 40 cm.',
      'd. Lớn hơn 50 cm.',
    ],
    correct: 2
  },
  {
    question: 'Khi đổ bê tông khối lớn, thời gian thích hợp để đầm lại sau khi đầm lần thứ nhất lấy bằng bao nhiêu?',
    options: [
      'a. 0,5 giờ đến 1 giờ.',
      'b. 1 giờ đến 1,5 giờ.',
      'c. 1,5 giờ đến 2 giờ.',
      'd. Không cho phép đầm lại.',
    ],
    correct: 3
  },
  {
    question: 'Khi đổ bê tông khối lớn, sử dụng xi măng pooc lăng, nhiệt độ khối đổ 20-30oC thì thời gian cho phép tạm ngừng để không sinh khe lạnh là bao nhiêu?',
    options: [
      'a. 60 phút.',
      'b. 90 phút.',
      'c. 120 phút.',
      'd. Không được ngừng',
    ],
    correct: 1
  },
  {
    question: 'Nếu thời gian tạm ngừng đổ bê tông vượt quá giới hạn quy định thì cho phép xử lý bề mặt khi cường độ của lớp bê tông bên dưới đạt bằng bao nhiêu?',
    options: [
      'a. 25 daN/cm2.',
      'b. 20 daN/cm2.',
      'c. 15 daN/cm2.',
      'd. Không hạn chế.',
    ],
    correct: 0
  },
  {
    question: 'Khi kiểm tra độ chống thấm của bê tông thì tần suất lấy mẫu phải như thế nào?',
    options: [
      'a. 300 m3 lấy 1 mẫu.',
      'b. 400 m3 lấy 1 mẫu.',
      'c. 500 m3 lấy 1 mẫu, số mẫu tối thiểu phải bằng 3.',
      'd. 500 m3 lấy 1 mẫu, số mẫu tối thiểu phải bằng 1.',
    ],
    correct: 3
  },
  {
    question: 'Khi phụt vữa vào nền đá, điều kiện bố trí lớp gia tải là như thế nào?',
    options: [
      'a. Không cần lớp gia tải khi nền đá nguyên khối, ít nứt nẻ, khi phụt thử nghiệm cho kết quả tốt.',
      'b. Không cần lớp gia tải khi áp lực phụt thiết kế không lớn hơn 0,2 MPa.',
      'c. Cả hai ý trên.',
      'd. Cần bố trí lớp gia tải trong mọi trường hợp.',
    ],
    correct: 2
  },
  {
    question: 'Khi phụt vữa vào nền đá, bố trí hố khoan phụt thử nghiệm trước khi phụt đại trà như thế nào?',
    options: [
      'a. Không cần phụt thử nghiệm.',
      'b. Toàn bộ hố khoan phụt thử nghiệm được chọn trong số hố khoan ở đồ án thiết kế',
      'c. Khoan phụt thử nghiệm tiến hành ngoài phạm vi đồ án thiết kế.',
      'd. Một nửa số hố khoan phụt thử nghiệm nằm ngoài phạm vi đồ án thiết kế.',
    ],
    correct: 1
  },
  {
    question: 'Khi thi công phụt vữa tạo màn chống thấm, chiều sâu hố khoan được xác định như thế nào?',
    options: [
      'a. Theo vị trí thực tế của lớp đá được chọn làm ranh giới của màn chống thấm.',
      'b. Thông qua kết quả xác định độ thấm nước thực tế của đất đá phía dưới màn.',
      'c. Theo cả hai ý trên',
      'd. Theo đúng bản vẽ thiết kế.',
    ],
    correct: 2
  },
  {
    question: 'Trong thí nghiệm ép nước trước khi phụt vữa, áp lực và lưu lượng phụt lấy bằng bao nhiêu?',
    options: [
      'a. Theo trị số áp lực cao nhất và lưu lượng lớn nhất có thể nhưng không vượt quá giới hạn cho phép do thiết kế quy định.',
      'b. Lấy nhỏ hơn 10% so với trị số quy định của thiết kế.',
      'c. Lấy lớn hơn 10% so với trị số quy định của thiết kế.',
      'd. Lấy lớn hơn 15% so với trị số quy định của thiết kế.',
    ],
    correct: 0
  },
  {
    question: 'Khi khoan phụt tạo màn chống thấm với nhiều hàng khoan, hố khoan kiểm tra được bố trí như thế nào?',
    options: [
      'a. Trùng với hố khoan phụt.',
      'b. Ở tâm trên mặt bằng của 3 hố khoan phụt kề nhau.',
      'c. Nằm trên hàng khoan phụt nhưng có hướng xiên góc.',
      'd. Do tư vấn thiết kế quy định.',
    ],
    correct: 3
  },
  {
    question: 'Trường hợp nào thì cần xử lý độ ẩm của đất nền trước khi đắp đập?',
    options: [
      'a. Khi độ ẩm đất nền khác với độ ẩm đất đắp.',
      'b. Khi độ ẩm đất nền lớn hơn độ ẩm đất đắp.',
      'c. Khi độ ẩm đất nền nhỏ hơn độ ẩm đất đắp.',
      'd. Không cần xử lý độ ẩm của đất nền.',
    ],
    correct: 0
  },
  {
    question: 'Trước khi rải đắp lớp mới, cần xử lý mặt lớp đã đắp như thế nào?',
    options: [
      'a. Cào xới các phần mặt lớp bị nhẵn do xe hoặc người đi lại.',
      'b. Tưới đảm bảo độ ẩm khống chế nếu mặt lớp bị khô.',
      'c. Cả hai ý trên.',
      'd. Không cần phải xử lý.',
    ],
    correct: 2
  },
  {
    question: 'Khi vận hành đầm đất theo đường vòng, tốc độ dịch chuyển của máy đầm lấy bằng bao nhiêu?',
    options: [
      'a. Từ 0,5 đến 1 km/h trên toàn hành trình.',
      'b. Từ 1 đến 2 km/h trên toàn hành trình.',
      'c. Từ 1,5 đến 2 km/h trên toàn hành trình.',
      'd. Từ 1 đến 2 km/h, giảm tốc độ ở các đoạn đường vòng.',
    ],
    correct: 3
  },
  {
    question: 'Khi đầm đất theo hướng song song với tim đập, chiều rộng vết đầm chồng lấn lên nhau được khống chế như thế nào?',
    options: [
      'a. Không nhỏ hơn 20 cm.',
      'b. Không nhỏ hơn 30 cm.',
      'c. Không nhỏ hơn 35 cm.',
      'd. Không nhỏ hơn 40 cm.',
    ],
    correct: 1
  },
  {
    question: 'Khi đầm đất theo hướng vuông góc với tim đập, chiều rộng vết đầm chồng lấn lên nhau được khống chế như thế nào?',
    options: [
      'a. Không nhỏ hơn 30 cm.',
      'b. Không nhỏ hơn 40 cm.',
      'c. Không nhỏ hơn 50 cm.',
      'd. Không nhỏ hơn 60 cm.',
    ],
    correct: 2
  },
  {
    question: 'Khi đắp đập đất, sai lệch độ ẩm đất đắp so với độ ẩm tốt nhất cho phép bằng bao nhiêu?',
    options: [
      'a. 2,5%',
      'b. 3%',
      'c. 3,5%',
      'd. 4%',
    ],
    correct: 1
  },
  {
    question: 'Khi đắp trong phạm vi 1 m giáp với công trình xây đúc phải dùng biện pháp nào?',
    options: [
      'a. Chọn loại đất thịt, đất sét không lẫn sạn sỏi, tạp chất.',
      'b. Dùng đầm cóc để đầm chặt đất.',
      'c. Dùng đầm chày gỗ, đầm bàn bằng gang tại đường viền tiếp giáp.',
      'd. Tất cả các biện pháp trên.',
    ],
    correct: 3
  },
  {
    question: 'Để kiểm tra dung trọng khô của đất á sét, á cát đắp phần thân đập, số lượng mẫu cần thiết là bao nhiêu?',
    options: [
      'a. 1 tổ mẫu/(100-200) m3.',
      'b. 1 tổ mẫu/(150-250) m3.',
      'c. 1 tổ mẫu/(200-250) m3.',
      'd. 1 tổ mẫu/(100-150) m3.',
    ],
    correct: 0
  },
  {
    question: 'Để kiểm tra dung trọng khô của đất sét, á sét đắp tường tâm, tường nghiêng của đập, số lượng mẫu cần thiết là bao nhiêu?',
    options: [
      'a. 1 tổ mẫu/50 m3.',
      'b. 1 tổ mẫu/100 m3.',
      'c. 1 tổ mẫu/150 m3.',
      'd. 1 tổ mẫu/200 m3.',
    ],
    correct: 1
  },
  {
    question: 'Cần sử dụng phương pháp nào để xác định dung trọng của đất dính?',
    options: [
      'a. Phương pháp dao vòng hay phóng xạ.',
      'b. Phương pháp dao vòng loại lớn.',
      'c. Phương pháp dao vòng.',
      'd. Phương pháp phóng xạ.',
    ],
    correct: 0
  },
  {
    question: 'Cần sử dụng phương pháp nào để xác định dung trọng của đất có nhiều dăm sạn, sỏi?',
    options: [
      'a. Phương pháp dao vòng loại lớn.',
      'b. Phương pháp phóng xạ.',
      'c. Phương pháp hố đào.',
      'd. Theo a hoặc',
    ],
    correct: 3
  },
  {
    question: 'Cần kiểm tra tầng lọc ngược theo những nội dung nào?',
    options: [
      'a. Chiều dày và thành phần hạt của từng lớp.',
      'b. Mặt nối tiếp: không cho phép các lớp so le, gãy khúc, trộn lẫn.',
      'c. Cả a và',
      'b. d. Cả a, b và độ phẳng của mặt lớp.',
    ],
    correct: 2
  },
  {
    question: 'Khi lát mái thượng lưu đập cần kiểm tra theo các nội dung nào?',
    options: [
      'a. Mặt các tấm không chênh lệch nhau quá 5% chiều dày tấm lát.',
      'b. Mặt tấm phía trên không nhô cao hơn tấm phía dưới.',
      'c. Cả a và',
      'b. d. Cả a, b và khe hở giữa các tấm không vượt quá quy định của thiết kế.',
    ],
    correct: 3
  },
  {
    question: 'Thành phần bê tông tại hiện trường được hiệu chỉnh theo nguyên tắc nào?',
    options: [
      'a. Không thay đổi lượng xi măng (X).',
      'b. Không thay đổi lượng nước (N).',
      'c. Không thay đổi tỷ lệ N/X.',
      'd. Không thay đổi độ sụt.',
    ],
    correct: 2
  },
  {
    question: 'Khi đổ bê tông khối lớn, thời gian cho phép để dỡ cốp pha là bao nhiêu?',
    options: [
      'a. Không dưới 4 ngày.',
      'b. Không dưới 5 ngày.',
      'c. Không dưới 6 ngày.',
      'd. Không dưới 7 ngày.',
    ],
    correct: 3
  },
  {
    question: 'Khi đổ bê tông khối lớn mà khối đổ có thể tích trên 1000 m3 thì tần suất lấy mẫu thí nghiệm cường độ là bao nhiêu?',
    options: [
      'a. 1 tổ mẫu/600 m3.',
      'b. 1 tổ mẫu/500 m3.',
      'c. 1 tổ mẫu/400 m3.',
      'd. 1 tổ mẫu/300 m3.',
    ],
    correct: 1
  },
  {
    question: 'Khi đổ bê tông khối lớn mà khối đổ có thể tích dưới 1000 m3 thì tần suất lấy mẫu thí nghiệm cường độ là bao nhiêu?',
    options: [
      'a. 1 tổ mẫu/250 m3.',
      'b. 1 tổ mẫu/200 m3.',
      'c. 1 tổ mẫu/150 m3.',
      'd. 1 tổ mẫu/100 m3.',
    ],
    correct: 0
  },
  {
    question: 'Bê tông đổ được coi là đạt yêu cầu khi kiểm tra cường độ tuổi 28 ngày bằng ép mẫu đúc tại hiện trường cho giá trị trung bình của từng tổ mẫu không nhỏ hơn mác thiết kế, kèm theo điều kiện nào sau đây?',
    options: [
      'a. Không có mẫu nào có cường độ dưới 75% mác thiết kế.',
      'b. Không có mẫu nào có cường độ dưới 80% mác thiết kế.',
      'c. Không có mẫu nào có cường độ dưới 85% mác thiết kế.',
      'd. Không có mẫu nào có cường độ dưới 90% mác thiết kế.',
    ],
    correct: 2
  },
  {
    question: 'Khi đổ bê tông, bê tông cốt thép toàn khối, mức sai lệch cho phép theo chiều dài hoặc nhịp của kết cấu là bao nhiêu?',
    options: [
      'a. 15 mm.',
      'b. 20 mm.',
      'c. 25 mm.',
      'd. 30 mm.',
    ],
    correct: 1
  },
  {
    question: 'Khi đổ bê tông, bê tông cốt thép toàn khối, mức sai lệch tiết diện ngang cho phép là bao nhiêu?',
    options: [
      'a. 14 mm.',
      'b. 12 mm.',
      'c. 10 mm.',
      'd. 8 mm.',
    ],
    correct: 3
  },
  {
    question: 'Khi đổ bê tông, bê tông cốt thép toàn khối, độ lệch cho phép của bề mặt kết cấu tính trên toàn bộ mặt phẳng công trình là bao nhiêu?',
    options: [
      'a. 35 mm.',
      'b. 30 mm.',
      'c. 25 mm.',
      'd. 20 mm.',
    ],
    correct: 3
  },
  {
    question: 'Đối với kết cấu khối lớn, sai số cho phép về khoảng cách giữa các thanh thép chịu lực đã lắp dựng đặt riêng biệt là bao nhiêu?',
    options: [
      'a. 20 mm.',
      'b. 30 mm.',
      'c. 35 mm.',
      'd. 40 mm.',
    ],
    correct: 1
  },
  {
    question: 'Đối với kết cấu khối lớn, sai số cho phép về khoảng cách giữa các thanh thép phân bố trong một hàng là bao nhiêu?',
    options: [
      'a. 40 mm.',
      'b. 35 mm.',
      'c. 30 mm.',
      'd. 25 mm.',
    ],
    correct: 0
  },
  {
    question: 'Trong thi công khoan phụt vữa vào nền đá, sau khi phụt xong một đợt, điều kiện nào dẫn đến yêu cầu phải bổ sung thêm hố khoan phụt?',
    options: [
      'a. Tồn tại vùng có lượng mất nước đơn vị vượt quá 10 lần so với trị số trung bình của tất cả các hố đã khoan phụt trong đợt.',
      'b. Tồn tại vùng mà việc phụt chưa được hoàn tất theo chỉ dẫn trong Tiêu chuẩn.',
      'c. Tồn tại các hố khoan không đạt tới độ sâu thiết kế.',
      'd. Tất cả các điều kiện trên.',
    ],
    correct: 3
  },
  {
    question: 'Trong quá trình khoan phụt vữa vào nền đá, trường hợp nào thì phải dừng khoan để xử lý?',
    options: [
      'a. Khi đang khoan thấy hiện tượng mất nước.',
      'b. Khi đang khoan thì vách hố khoan bị sập',
      'c. Xảy ra đồng thời cả a và',
      'b. d. Xảy ra một trong hai trường hợp (a hoặc b).',
    ],
    correct: 3
  },
  {
    question: 'Sau thời gian ngừng phụt đối với đoạn phụt chưa đạt độ chối quy định, trước khi phụt lại cần phải làm gì?',
    options: [
      'a. Tiến hành khoan xoáy, nạo sạch vữa đông cứng.',
      'b. Tiến hành thí nghiệm ép nước để quyết định chọn loại vữa phụt tiếp.',
      'c. Cả a và',
      'b. d. Tiếp tục phụt lại bình thường.',
    ],
    correct: 2
  },
  {
    question: 'Khi phụt vữa vào nền đá, nếu dung dịch vữa trào qua miệng các hố khoan lân cận thì trình tự xử lý như thế nào?',
    options: [
      'a. Giảm từ (30-50)% áp lực phụt.',
      'b. Đặt nút bịt các hố khoan có trào vữa.',
      'c. Thực hiện theo a, b, sau đó tiếp tục phụt với áp lực như cũ.',
      'd. Thực hiện theo a,b, sau đó tiếp tục phụt với áp lực bằng 80% áp lực cũ.',
    ],
    correct: 2
  },
  {
    question: 'Tổng chiều dài các hố khoan kiểm tra chất lượng phụt vữa tạo màn chống thấm phải bằng bao nhiêu so với tổng chiều dài các hố khoan đã phụt?',
    options: [
      'b. (3-5)%.',
      'c. (10-12)%.',
      'd. (12-15)%.',
    ],
    correct: 0
  },
  {
    question: 'Để kiểm tra công tác phụt xi măng gia cố nền, cần sử dụng phương pháp nào?',
    options: [
      'a. Ép nước thí nghiệm.',
      'b. Địa vật lý.',
      'c. Cả a và',
      'b. d. Theo quy định của thiết kế.',
    ],
    correct: 3
  },
  {
    question: 'Hồ sơ hoàn công công tác phụt vữa xi măng tạo màn chống thấm bao gồm những tài liệu nào?',
    options: [
      'a. Nhật ký khoan, nhật ký phụt xi măng, biên bản xác nhận các công việc bị che khuất, biên bản thử nghiệm hố khoan kiểm tra.',
      'b. Mặt cắt hoàn công.',
      'c. Cả a, b, kèm theo Báo cáo kỹ thuật.',
      'd. Cả a và',
    ],
    correct: 2
  },
  {
    question: 'Trước khi ngăn dòng và dâng nước trong hồ phải thực hiện các công tác nào? làm các công tác thu dọn và xử lý lòng hồ nào?',
    options: [
      'a. Xử các mái đất có khả năng sạt trượt khi ngập nước, tổ chức công tác tái định cư, thi công bãi đánh cá',
      'b. Di chuyển mồ mả, di dời hoặc bảo vệ không cho ngập các công trình văn hóa',
      'c. Khai thác hết lâm sản, khoáng sản trong lòng hồ',
      'd. Các đáp án đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Hãy chọn phương pháp xử lý nền hợp lý để xử lý nền đá nứt nẻ của đập đất?',
    options: [
      'a. Phương pháp khoan phụt vữa xi măng',
      'b. Phương pháp khoan cọc nhồi',
      'c. Phương pháp đóng cọc bê tông cốt thép',
      'd. Tất cả các phương pháp đã nêu',
    ],
    correct: 0
  },
  {
    question: 'Khi xử lý nền và vai đập đất, ở những vị trí chưa đắp đập ngay được, chiều dày lớp bảo vệ cần để lại là bao nhiêu?',
    options: [
      'a. Từ 20 cm đến 30 cm.',
      'b. Từ 50 cm đến 60 cm.',
      'c. Từ 80 cm đến 100 cm.',
      'd. Các đáp án đều đúng.',
    ],
    correct: 0
  },
  {
    question: 'Khi kiểm tra các mỏ đất để đắp đập cần thực hiện các công việc nào?',
    options: [
      'a. Bề dày lớp đất hữu cơ, hiện trạng cây cối, chiều dày của từng lớp, tình hình phân bố các lớp kẹp, tính chất cơ lý của đất',
      'b. Mặt bằng phân bố của mỏ, điều kiện khai thác và vận chuyển đến đập',
      'c. Điều kiện địa chất thủy văn, tình hình ngập nước của từng mỏ trong mùa mưa',
      'd. Tất cả các công việc đã nêu',
    ],
    correct: 3
  },
  {
    question: 'Độ ẩm của đất dùng để đắp đập đất đồng chất được phép sai lệch như thế nào so với độ ẩm tốt nhất?',
    options: [
      'a. Không quá ± 3 %',
      'b. Không quá ± 5 %',
      'c. Không quá ± 6 %',
      'd. Không quá ± 4 %',
    ],
    correct: 0
  },
  {
    question: 'Để thoát nước mưa trong quá trình thi công, độ dốc của mặt đất đã san trên mặt đập về thượng hoặc hạ lưu, hoặc đồng thời về cả hai phía là bao nhiêu?',
    options: [
      'a. Từ 18 % đến 20 %',
      'b. Từ 2 % đến 5 %',
      'c. Từ 18 % đến 25 %',
      'd. Từ 20 % đến 25 %',
    ],
    correct: 1
  },
  {
    question: 'Hệ số đầm nén của đất đắp (độ chặt K) được quy định như thế nào khi thi công đắp đất đê quai ngăn dòng?',
    options: [
      'a. K ≥ 0,98',
      'b. K ≥ 0,96',
      'c. K ≥ 0,95',
    ],
    correct: 2
  },
  {
    question: 'Hệ số đầm nén của đất đắp (độ chặt K) được quy định như thế nào khi thi công đắp đập đất cấp I?',
    options: [
      'a. K ≥ 0,95',
      'b. K ≥ 0,97',
      'c. K ≥ 0,96',
      'd. K ≥ 0,94',
    ],
    correct: 1
  },
  {
    question: 'Đối với đập đất đồng chất, vật liệu đất đắp đập phải có hệ số thấm sau khi đầm nén là bao nhiêu?',
    options: [
      'a. Không được lớn hơn 1 x 10-3 cm/s',
      'b. Không được lớn hơn 1 x 10-2 cm/s',
      'c. Không được lớn hơn 1 x 10-4 cm/s',
      'd. Các trị số đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Trị số hệ số mái dốc m nào thỏa mãn quy định về hệ số mái dốc của mặt nối tiếp hướng ngang (hướng vuông góc với tim đập) của đập đồng chất?',
    options: [
      'a. m = 3,0',
      'b. m = 2,5',
      'c. m = 2,0',
      'd. Các trị số đều thỏa mãn',
    ],
    correct: 3
  },
  {
    question: 'Đắp tường tâm được quy định như thế nào theo chiều cao của thân đập?',
    options: [
      'a. Luôn thấp hơn khối đất đắp liền kề ở thân đập ít nhất là 2 m',
      'b. Luôn thấp hơn khối đất đắp liền kề ở thân đập ít nhất là 1 m',
      'c. Luôn thấp hơn khối đất đắp liền kề ở thân đập ít nhất là 0,5 m',
      'd. Luôn đắp cao hơn khối đất đắp liền kề ở thân đập',
    ],
    correct: 0
  },
  {
    question: 'Thi công tường nghiêng của đập đất làm bằng các loại vải địa kỹ thuật (geosynthetic - clayliners) phải thực hiện đúng quy định nào?',
    options: [
      'a. Phải trải trên lớp đất dính có chiều dày tối thiểu là 1 m và phải phủ lên một lớp đất bảo vệ có chiều dày tối thiểu là 1 m',
      'b. Phải trải trên lớp cát hạt mịn có chiều dày tối thiểu là 1 m',
      'c. Phải trải trên lớp đá dăm có chiều dày tối thiểu là 1 m',
      'd. Các đáp án đều sai',
    ],
    correct: 0
  },
  {
    question: 'Nếu chênh lệch chiều cao của hai đoạn đập liền nhau lớn hơn 5 m, mặt nối tiếp được xử lý như thế nào với hệ số dốc mái của mặt nối tiếp m = 3,5?',
    options: [
      'a. Trên mặt nối tiếp cứ 5 m phải làm một cơ với chiều rộng ít nhất là 4 m',
      'b. Không cần làm cơ',
      'c. Trên mặt nối tiếp cứ 5 m phải làm một cơ với chiều rộng ít nhất là 6 m',
      'd. Trên mặt nối tiếp cứ 5 m phải làm một cơ với chiều rộng ít nhất là 5 m',
    ],
    correct: 1
  },
  {
    question: 'Nếu chênh lệch chiều cao của hai đoạn đập liền nhau lớn hơn 5 m, mặt nối tiếp được xử lý như thế nào với hệ số dốc mái của mặt nối tiếp m = 2?',
    options: [
      'a. Trên mặt nối tiếp cứ 5 m phải làm một cơ với chiều rộng ít nhất là 2 m',
      'b. Không cần làm cơ',
      'c. Trên mặt nối tiếp cứ 5 m phải làm một cơ với chiều rộng ít nhất là 4 m',
      'd. Trên mặt nối tiếp cứ 5 m phải làm một cơ với chiều rộng ít nhất là 3 m',
    ],
    correct: 2
  },
  {
    question: 'Khi đắp đất phần thân đập đất tiếp giáp với cống ngầm bằng bê tông cốt thép yêu cầu về đất đắp được quy định như thế nào trong phạm vi 1 m kể từ đường viền tiếp giáp?',
    options: [
      'a. Đất đắp phải là đất thịt, đất sét không lẫn sạn sỏi và các tạp chất khác',
      'b. Đất đắp phải là đất cát hạt mịn',
      'c. Đất đắp phải là đất sét lẫn 30% sỏi',
      'd. Các đáp án đã nêu đều đúng quy định',
    ],
    correct: 0
  },
  {
    question: 'Khi đắp đất phần thân đập đất tiếp giáp với cống ngầm bằng bê tông cốt thép yêu cầu về thiết bị đầm đất được quy định như thế nào trong phạm vi 1 m kể từ đường viền tiếp giáp?',
    options: [
      'a. Các loại thiết bị đầm đất đã nêu đều đúng quy định',
      'b. Đầm đất bằng máy đầm lăn phẳng 9 tấn',
      'c. Đầm đất bằng máy đầm có vấu rung 16 tấn',
      'd. Đầm đất bằng máy đầm cóc',
    ],
    correct: 0
  },
  {
    question: 'Khi thi công tầng lọc ngược, các lớp lọc có chiều dày 12 cm được đầm theo quy định nào?',
    options: [
      'a. Sử dụng đầm lăn phẳng - rung có tải trọng 9 tấn',
      'b. Sử dụng đầm lăn phẳng - rung có tải trọng 16 tấn',
      'c. Đầm bằng thủ công',
      'd. Sử dụng đầm lăn phẳng - rung có tải trọng 12 tấn',
    ],
    correct: 2
  },
  {
    question: 'Khi phân đoạn để đắp tầng lọc ngược phải tuân theo quy định như thế nào?',
    options: [
      'a. Không được để xảy ra hiện tượng so le trên mặt bằng',
      'b. Không được để xảy ra hiện tượng gãy đoạn trên mặt đứng',
      'c. Chỗ tiếp giáp với đoạn thi công sau phải đắp thành bậc thang có bề rộng mặt bậc nhất ít nhất 40 cm',
      'd. Tất cả các quy định đã nêu',
    ],
    correct: 3
  },
  {
    question: 'Số lượng mẫu thí nghiệm độ ẩm của đất sét khi thi công đập đất đồng chất được quy định như thế nào?',
    options: [
      'a. Khoảng 200 m3 đất đắp lấy 01 tổ mẫu thí nghiệm',
      'b. Khoảng 100 m3 đất đắp lấy 01 tổ mẫu thí nghiệm',
      'c. Khoảng 150 m3 đất đắp lấy 01 tổ mẫu thí nghiệm',
      'd. Các quy định đã nêu đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Số lượng mẫu thí nghiệm dung trọng khô của đất sét khi thi công tường tâm của đập đất được quy định như thế nào?',
    options: [
      'a. Khoảng 200 m3 đất đắp lấy 01 tổ mẫu thí nghiệm',
      'b. Khoảng 500 m3 đất đắp lấy 01 tổ mẫu thí nghiệm',
      'c. Khoảng 100 m3 đất đắp lấy 01 tổ mẫu thí nghiệm',
      'd. Các quy định đã nêu đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Số lượng mẫu thí nghiệm hệ số thấm của đất sét khi thi công tường tâm của đập đất được quy định như thế nào?',
    options: [
      'a. Khoảng 20 0000 m3 đất đắp lấy 01 tổ mẫu thí nghiệm',
      'b. Khoảng 50 0000 m3 đất đắp lấy 01 tổ mẫu thí nghiệm',
      'c. Khoảng 25 000 m3 đất đắp lấy 01 tổ mẫu thí nghiệm',
      'd. Các quy định đã nêu đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Số lượng mẫu thí nghiệm thành phần hạt của vật liệu tầng lọc của đập đất được quy định như thế nào?',
    options: [
      'a. Từ 50 m3 đến 100 m3 vật liệu tầng lọc lấy 01 tổ mẫu thí nghiệm',
      'b. Từ 20 m3 đến 50 m3 vật liệu tầng lọc lấy 01 tổ mẫu thí nghiệm',
      'c. Từ 10 m3 đến 15 m3 vật liệu tầng lọc lấy 01 tổ mẫu thí nghiệm',
    ],
    correct: 1
  },
  {
    question: 'Số lượng mẫu thí nghiệm dung trọng khô của đất sét khi thi công đắp đất chung quanh cống ngầm trong thân đập đất (đầm bằng máy đầm cóc. được quy định như thế nào?',
    options: [
      'a. Khoảng 25 m2 đất đắp lấy 01 tổ mẫu thí nghiệm',
      'b. Khoảng 50 m2 đất đắp lấy 01 tổ mẫu thí nghiệm',
      'c. Khoảng 35 m2 đất đắp lấy 01 tổ mẫu thí nghiệm',
      'd. Các quy định đã nêu đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Dung trọng khô thực tế được thấp hơn yêu cầu thiết kế bao nhiêu?',
    options: [
      'a. 0,03 T/m3',
      'b. 0,3 T/m3',
      'c. 0,1 T/m3',
      'd. 0,2 T/m3',
    ],
    correct: 0
  },
  {
    question: 'Dung sai cho phép đối với vị trí tim đập trong thi công đập đất là bao nhiêu?',
    options: [
      'a. Khoảng 100 cm',
      'b. Khoảng 80 cm',
      'c. Không quá 50 cm',
      'd. Khoảng 200 cm',
    ],
    correct: 2
  },
  {
    question: 'Dung sai cho phép đối với hệ số mái dốc của đập (m) trong thi công đập đất là bao nhiêu?',
    options: [
      'a. Không quá 1,5 lần hệ số mái dốc thiết kế',
      'b. Từ 1,0 đến 1,1 lần hệ số mái dốc thiết kế',
      'c. Không quá 1,3 lần hệ số mái dốc thiết kế',
      'd. Các dung sai đã nêu đều được phép',
    ],
    correct: 1
  },
  {
    question: 'Dung sai cho phép đối với chiều dày tường tâm của đập (m) trong thi công đập đất là bao nhiêu?',
    options: [
      'a. Không được vượt quá chiều dày thiết kế',
      'b. Có thể nhỏ hơn đến 1,1 lần chiều dày thiết kế',
      'c. Lớn hơn hoặc bằng chiều dày thiết kế',
      'd. Các dung sai đã nêu đều được phép',
    ],
    correct: 2
  },
  {
    question: 'Công tác ván khuôn khi thi công công trình thủy lợi phải đảm bảo những yêu cầu nào?',
    options: [
      'a. Chịu lực ổn định',
      'b. Hình dạng, kích thước khối đổ theo yêu cầu; Kín nước, phẳng, nhẵn',
      'c. Dựng lắp và tháo dỡ dễ dàng; Dễ lắp dựng cốt thép, thuận tiện cho công tác đổ bê tông; Sử dụng được nhiều lần',
      'd. Phải đảm bảo các yêu cầu đã nêu',
    ],
    correct: 3
  },
  {
    question: 'Sai lệch của mặt phẳng cốp pha và các đường giao nhau của chúng so với chiều dài thẳng đứng cho phép như thế nào khi thi công rãnh van, khe phai?',
    options: [
      'a. ± 10 mm',
      'b. ± 5 mm',
      'c. ± 3 mm',
      'd. ± 1 mm',
    ],
    correct: 2
  },
  {
    question: 'Sai lệch của mặt phẳng cốp pha và các đường giao nhau của chúng so với chiều dài thẳng đứng cho phép như thế nào khi thi công móng cống?',
    options: [
      'a. ± 10 mm',
      'b. ± 5 mm',
      'c. ± 3 mm',
      'd. ± 1 mm',
    ],
    correct: 1
  },
  {
    question: 'Sai lệch về cao trình cốp pha so với bản vẽ thiết kế khi thi công bản đáy cống?',
    options: [
      'a. ± 10 mm',
      'b. ± 5 mm',
      'c. ± 3 mm',
      'd. ± 15 mm',
    ],
    correct: 3
  },
  {
    question: 'Thời gian tối thiểu cho phép tháo dỡ ván khuôn khi thi công bê tông trụ pin của đập tràn trong mùa đông?',
    options: [
      'a. Đủ 01 ngày',
      'b. Đủ 02 ngày',
      'c. Đủ 10 giờ',
      'd. Các đáp án đều sai',
    ],
    correct: 1
  },
  {
    question: 'Khoảng cách từ đầu mép thép đã uốn đến thanh thép tối thiểu được quy định như thế nào?',
    options: [
      'a. 3, 5 lần đường kính cốt thép',
      'b. 2, 5 lần đường kính cốt thép',
      'c. 1, 5 lần đường kính cốt thép',
      'd. Các quy định đã nêu nếu đúng',
    ],
    correct: 0
  },
  {
    question: 'Yêu cầu kỹ thuật khi nối 02 thanh cốt thép bằng cách buộc là gì?',
    options: [
      'a. Chỉ cần buộc ở giữa đoạn nối',
      'b. Phải buộc ở 2 đầu đoạn nối',
      'c. Phải buộc ít nhất ở giữa và 2 đầu đoạn nối',
      'd. Các yêu cầu đã nêu',
    ],
    correct: 2
  },
  {
    question: 'Khi kiểm tra công tác cốt thép của móng công trình trạm bơm, sai số về chiều dày lớp bảo vệ cho phép như thế nào?',
    options: [
      'a. 20 mm',
      'b. 10 mm',
      'c. 15 mm',
      'd. Các sai số đã nêu',
    ],
    correct: 1
  },
  {
    question: 'Hàm lượng bùn, bụi, sét bột theo % khối lượng của mẫu cát để thi công kết cấu bê tông dưới nước cho phép như thế nào?',
    options: [
      'a. Không được vượt quá 5%',
      'b. Không được vượt quá 4%',
      'c. Không được vượt quá 2%',
      'd. Không được vượt quá 3%',
    ],
    correct: 2
  },
  {
    question: 'Việc kiểm tra chất lượng xi măng tại hiện trường xây dựng nhất thiết phải được tiến hành trong trường hợp nào dưới đây?',
    options: [
      'a. Khi thiết kế thành phần cấp khối bê tông',
      'b. Khi có sự nghi ngờ về chất lượng xi măng',
      'c. Khi xi măng đã để trong kho trên 3 tháng kể từ ngày sản xuất',
      'd. Tất cả các trường hợp đã nêu',
    ],
    correct: 3
  },
  {
    question: 'Hàm lượng sun fat và sunfur tính đổi ra SO3 (% khối lượng) cho phép trong đá dăm?',
    options: [
      'a. Không được vượt quá 0,5 %',
      'b. Không được vượt quá 1 %',
      'c. Không được vượt quá 3 %',
      'd. Không được vượt quá 2 %',
    ],
    correct: 0
  },
  {
    question: 'Yêu cầu về độ sụt của vữa bê tông thủy công khi sử dụng bơm bê tông để vận chuyển là gì?',
    options: [
      'a. Không nhỏ hơn 4 cm',
      'b. Không nhỏ hơn 10 cm',
      'c. Không nhỏ hơn 7 cm',
      'd. Không nhỏ hơn 6 cm',
    ],
    correct: 1
  },
  {
    question: 'Thời gian vận chuyển vữa bê tông cho phép (kể từ lúc trút hỗn hợp bê tông ra khỏi trạm trộn đến lúc đổ vào khoảnh đổ) đối với bê tông không có phụ gia, nhiệt độ ngoài trời là 25oC?',
    options: [
      'a. Không quá 90 phút',
      'b. Không quá 60 phút',
      'c. Không quá 30 phút',
      'd. Không quá 45 phút',
    ],
    correct: 3
  },
  {
    question: 'Khi đổ bê tông sử dụng thiết bị đầm là máy đầm dùi chấn động, độ dày lớn nhất cho phép của mỗi lớp hỗn hợp bê tông đổ xuống khoảnh đổ là bao nhiêu?',
    options: [
      'a. 1,5 chiều dài bộ phận công tác của máy đầm',
      'b. 0,8 chiều dài bộ phận công tác của máy đầm',
      'c. 0,5 chiều dài bộ phận công tác của máy đầm',
      'd. Các độ dày đã nêu đều được phép',
    ],
    correct: 1
  },
  {
    question: 'Để kiểm tra cường độ của bê tông đối với kết cấu khối lớn của công trình thủy lợi có 2 000 m3, số lượng tổ mẫu thí nghiệm (mỗi tổ gồm 3 mẫu) được quy định như thế nào?',
    options: [
      'a. 1 000 m3 lấy một tổ mẫu',
      'b. 250 m3 lấy một tổ mẫu',
      'c. 500 m3 lấy một tổ mẫu',
    ],
    correct: 2
  },
  {
    question: 'Để kiểm tra cường độ của bê tông đối với kết cấu khối lớn của công trình thủy lợi có 900 m3, số lượng tổ mẫu thí nghiệm (mỗi tổ gồm 3 mẫu) được quy định như thế nào?',
    options: [
      'a. Chỉ cần lấy một tổ mẫu',
      'b. 450 m3 lấy một tổ mẫu',
      'c. 300 m3 lấy một tổ mẫu',
      'd. 250 m3 lấy một tổ mẫu',
    ],
    correct: 3
  },
  {
    question: 'Để kiểm tra cường độ của bê tông móng của một trạm, số lượng tổ mẫu thí nghiệm (mỗi tổ gồm 3 mẫu) được quy định như thế nào?',
    options: [
      'a. Chỉ cần lấy một tổ mẫu',
      'b. 300 m3 lấy một tổ mẫu',
      'c. 100 m3 lấy một tổ mẫu',
      'd. 200 m3 lấy một tổ mẫu',
    ],
    correct: 2
  },
  {
    question: 'Số lượng nhóm mẫu kiểm tra chống thấm của bê tông quy định như thế nào đối với khối đổ bê tông 1 500 m3 tường chống thấm của đập bê tông?',
    options: [
      'a. Chỉ cần lấy một tổ mẫu',
      'b. 500 m3 lấy một tổ mẫu',
      'c. 100 m3 lấy một tổ mẫu',
      'd. 200 m3 lấy một tổ mẫu',
    ],
    correct: 1
  },
  {
    question: 'Số lượng nhóm mẫu kiểm tra chống thấm của bê tông quy định như thế nào đối với khối đổ bê tông 300 m3 tường chống thấm của đập bê tông?',
    options: [
      'a. Chỉ cần lấy một tổ mẫu',
      'b. 150 m3 lấy một tổ mẫu',
      'c. 300 m3 lấy một tổ mẫu',
      'd. 200 m3 lấy một tổ mẫu',
    ],
    correct: 0
  },
  {
    question: 'Đối với móng, độ lệch của các mặt phẳng và các đường cắt nhau của các mặt phẳng đó so với đường thẳng đứng hoặc với chiều nghiêng thiết kế, tính cho toàn bộ chiều cao kết cấu là bao nhiêu?',
    options: [
      'a. 50 mm',
      'b. 30 mm',
      'c. 20 mm',
      'd. 40 mm',
    ],
    correct: 2
  },
  {
    question: 'Ngoài việc kiểm tra toàn bộ nội dung theo đồ án thiết kế, cần chú ý các công tác quan trọng nào sau trong công tác xử lý nền kênh đắp?',
    options: [
      'a. Công việc bóc bỏ tầng phủ hữu cơ, Công tác thu dọn nền, vét bùn lầy/',
      'b. Hệ thống thoát nước',
      'c. Chất lượng nền kênh và các biện pháp xử lý.',
      'd. Tất cả các công việc đã nêu',
    ],
    correct: 3
  },
  {
    question: 'Đối với những đoạn kênh đào phải kiểm tra những nội dung chính nào sau đây?',
    options: [
      'a. Kích thước mặt cắt kênh (rộng, cao, mái dốc, cơ), cao độ và độ dốc đáy kênh so với đồ án thiết kế.',
      'b. Gia cố thêm độ chặt của lòng kênh trong trường hợp địa chất xấu.',
      'c. Biện pháp thoát nước mưa để tránh gây xói lở, sạt mái và ảnh hưởng đến tiến độ thi công; Biện pháp xử lý nước ngầm, cát đùn, cát chảy;',
      'd. Tất cả các nội dung đã nêu đều đúng.',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp nào được sử dụng để kiểm tra hệ số thấm K sau khi khoan phụt vữa cho một đoạn hay toàn bộ tuyến đê?',
    options: [
      'a. Đổ nước thí nghiệm trực tiếp ngoài hiện trường để xác định hệ số thấm K.',
      'b. Ép nước hố khoan để kiểm tra.',
      'c. Khoan lấy mẫu để kiểm tra.',
      'd. Tất cả các ý trên đều đúng',
    ],
    correct: 0
  },
  {
    question: 'Các yêu cầu tối thiểu về hệ số thấm K trong công tác khoan phụt vữa được quy định như thế nào?',
    options: [
      'a. Hệ số thấm K tại mỗi lỗ khoan không được lớn hơn 15 % so với quy định của thiết kế',
      'b. Tổng số các lỗ khoan đạt yêu cầu chất lượng phải lớn hơn 80 %',
      'c. Hệ số thấm K tại hai lỗ khoan liền nhau không được lớn hơn 10 % so với quy định của thiết kế',
      'd. Hệ số thấm K tại mỗi lỗ khoan không được lớn hơn 5 % so với quy định của thiết kế, đồng thời tổng số các lỗ khoan đạt yêu cầu chất lượng phải lớn hơn 90 % và không có hai lỗ khoan kiểm tra liền nhau không đạt yêu cầu về hệ số thấm.',
    ],
    correct: 3
  },
  {
    question: 'Các công việc cần kiểm tra của công tác khoan phụt xi măng vào nền đá gồm?',
    options: [
      'a. Kiểm tra chứng chỉ chất lượng các vật liệu để chế tạo dung dịch phụt. Loại vật liệu nào chưa có chứng chỉ thì phải tiến hành thí nghiệm để xác định chất lượng;',
      'b. Kiểm tra tác nghiệp trong quá trình thi công và sự phù hợp với đồ án thiết kế, quy trình thi công và tiêu chuẩn hiện hành. Việc kiểm tra này nhằm xác định kết quả khoan phụt và tiến độ hoàn thành toàn bộ công tác dự kiến trong đồ án thiết kế hoặc hoàn thành một giai đoạn nào đó.',
      'c. Kiểm tra nghiệm thu thực hiện theo quy định về nghiệm thu công việc xây dựng',
      'd. Tất cả các công việc đã nêu đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Phương pháp nào được dùng để kiểm tra chất lượng thi công giếng giảm áp?',
    options: [
      'a. Ép nước kiểm tra.',
      'b. Đổ nước kiểm tra.',
      'c. Bơm nước kiểm tra.',
      'd. Tất cả các phương pháp đã nêu đều đúng',
    ],
    correct: 2
  },
  {
    question: 'Khi nào thì hệ thống hạ mực nước ngầm được phép đưa vào vận hành?',
    options: [
      'a. Sau khi hệ thống đã vận hành thử và làm việc bình thường liên tục trong 12 h thỏa mãn mọi yêu cầu của thiết kế.',
      'b. Sau khi hệ thống đã vận hành thử và làm việc bình thường liên tục trong 24 h thỏa mãn mọi yêu cầu của thiết kế.',
      'c. Sau khi hệ thống đã vận hành thử và làm việc bình thường liên tục trong 36 h thỏa mãn mọi yêu cầu của thiết kế.',
      'd. Sau khi hệ thống đã vận hành thử và làm việc bình thường liên tục trong 38 h thỏa mãn mọi yêu cầu của thiết kế.',
    ],
    correct: 1
  },
  {
    question: 'Phương pháp nào được sử dụng để liên kết các tấm kim loại làm vật kín nước?',
    options: [
      'a. Phải gia công vật kín nước bằng kim loại theo đúng chủng loại vật liệu, hình dạng và kích thước do thiết kế quy định. Nối các tấm kim loại kín nước bằng liên kết hàn.',
      'b. Phải gia công vật kín nước bằng kim loại theo đúng chủng loại vật liệu, hình dạng và kích thước do thiết kế quy định. Nối các tấm kim loại kín nước bằng keo gián.',
      'c. Phải gia công vật kín nước bằng kim loại theo đúng chủng loại vật liệu, hình dạng và kích thước do thiết kế quy định. Nối các tấm kim loại kín nước bằng liên kết đinh tán.',
      'd. Tất cả các phương pháp đã nêu đều đúng',
    ],
    correct: 0
  },
  {
    question: 'Các nội dung cần kiểm tra trước khi nghiệm thu khớp nối biến dạng theo đồ án thiết kế được duyệt là gì?',
    options: [
      'a. Kiểm tra chất lượng các vật liệu và bán thành phẩm;',
      'b. Kiểm tra các chế phẩm được chế tạo tại công trường;',
      'c. Kiểm tra thi công lắp đặt khớp nối',
      'd. Tất cả các nội dung đã nêu đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Trong quá trình thi không khớp nối, phải kiểm tra các các nội dung chính nào?',
    options: [
      'a. Kích thước, hình dạng, vị trí đặt các chi tiết đúc sẵn theo thiết kế, các tấm đồng ômêga, các vật kín nước khác (bằng kim loại, chất dẻo, cao su). Kiểm tra định vị và gia cố các chi tiết khớp nối trước khi đổ bê tông ở một bên khe khớp nối cũng như trước khi đổ bê tông ở bên kia khe khớp.',
      'b. Chất lượng xử lý bề mặt bê tông trước khi sơn bitum, Chất lượng lớp đã sơn, trát trước khi sơn, trát lớp tiếp theo;',
      'c. Kích thước, chất lượng các mối hàn nối của các tấm kim loại kín nước.',
      'd. Tất cả các nội dung đã nêu đều đúng',
    ],
    correct: 3
  },
  {
    question: 'Khi nào thì nhà thầu thi công được phép tiến hành khoan khoan nổ mìn đào đá trong xây dựng công trình thủy lợi?',
    options: [
      'a. Phải đảm bảo cả 3 điều kiện đã nêu',
      'b. Khi có đồ án thiết kế, hộ chiếu nổ mìn.',
      'c. Khi có biện pháp đảm bảo an toàn trong quá trình thi công nổ mìn được cơ quan có thẩm quyền phê duyệt, được Hội đồng nghiệm thu công tác chuẩn bị nổ mìn chấp thuận.',
      'd. Khi được sự chấp thuận của các cơ quan chứng năng.',
    ],
    correct: 0
  },
];
