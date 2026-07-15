"use strict";

const Course = {
	title: "Lập trình C",
	version: "1.0",
	modules: [
		{
			id: "module00",
			title: "Giới thiệu",
			lessons: [
				{ id: "lesson01", title: "Chào mừng đến với khóa học Lập trình C" },
				{ id: "lesson02", title: "Lập trình là gì?" },
				{ id: "lesson03", title: "Cài đặt môi trường lập trình" }
			]
		},
		{
			id: "module01",
			title: "Chương trình C đầu tiên",
			lessons: [
				{ id: "lesson04", title: "Chương trình C đầu tiên" },
				{ id: "lesson05", title: "Cấu trúc của một chương trình C" },
				{ id: "lesson06", title: "Chú thích (Comments)" },
				{ id: "lesson07", title: "Coding Style" },
				{ id: "lesson08", title: "Quy trình biên dịch chương trình C" }
			]
		},
		{
			id: "module02",
			title: "Biến và kiểu dữ liệu",
			lessons: [
				{ id: "lesson09", title: "Biến" },
				{ id: "lesson10", title: "Hằng số" },
				{ id: "lesson11", title: "Các kiểu dữ liệu cơ bản" },
				{ id: "lesson12", title: "Kiểu số nguyên" },
				{ id: "lesson13", title: "Kiểu số thực" },
				{ id: "lesson14", title: "Kiểu ký tự" },
				{ id: "lesson15", title: "Kiểu Boolean" },
				{ id: "lesson16", title: "Toán tử sizeof" },
				{ id: "lesson17", title: "Chuyển đổi kiểu dữ liệu" },
				{ id: "lesson18", title: "Quy tắc đặt tên" }
			]
		},
		{
			id: "module03",
			title: "Nhập và xuất dữ liệu",
			lessons: [
				{ id: "lesson19", title: "Hàm printf()" },
				{ id: "lesson20", title: "Hàm scanf()" },
				{ id: "lesson21", title: "Chuỗi định dạng" },
				{ id: "lesson22", title: "Ký tự Escape" },
				{ id: "lesson23", title: "Các lỗi thường gặp khi nhập xuất" }
			]
		},
		{
			id: "module04",
			title: "Toán tử",
			lessons: [
				{ id: "lesson24", title: "Toán tử số học" },
				{ id: "lesson25", title: "Toán tử gán" },
				{ id: "lesson26", title: "Toán tử so sánh" },
				{ id: "lesson27", title: "Toán tử logic" },
				{ id: "lesson28", title: "Toán tử tăng và giảm" },
				{ id: "lesson29", title: "Độ ưu tiên của toán tử" },
				{ id: "lesson30", title: "Biểu thức" }
			]
		},
		{
			id: "module05",
			title: "Cấu trúc rẽ nhánh",
			lessons: [
				{ id: "lesson31", title: "Câu lệnh if" },
				{ id: "lesson32", title: "Câu lệnh if...else" },
				{ id: "lesson33", title: "Câu lệnh if lồng nhau" },
				{ id: "lesson34", title: "Câu lệnh switch" },
				{ id: "lesson35", title: "Toán tử điều kiện" }
			]
		},
		{
			id: "module06",
			title: "Vòng lặp",
			lessons: [
				{ id: "lesson36", title: "Vòng lặp while" },
				{ id: "lesson37", title: "Vòng lặp do...while" },
				{ id: "lesson38", title: "Vòng lặp for" },
				{ id: "lesson39", title: "Câu lệnh break" },
				{ id: "lesson40", title: "Câu lệnh continue" },
				{ id: "lesson41", title: "Vòng lặp lồng nhau" }
			]
		},
		{
			id: "module07",
			title: "Hàm",
			lessons: [
				{ id: "lesson42", title: "Hàm" },
				{ id: "lesson43", title: "Tham số" },
				{ id: "lesson44", title: "Giá trị trả về" },
				{ id: "lesson45", title: "Phạm vi của biến" },
				{ id: "lesson46", title: "Biến cục bộ" },
				{ id: "lesson47", title: "Biến toàn cục" },
				{ id: "lesson48", title: "Đệ quy" }
			]
		},
		{
			id: "module08",
			title: "Mảng",
			lessons: [
				{ id: "lesson49", title: "Mảng một chiều" },
				{ id: "lesson50", title: "Nhập dữ liệu cho mảng" },
				{ id: "lesson51", title: "Xuất dữ liệu từ mảng" },
				{ id: "lesson52", title: "Các thuật toán cơ bản trên mảng" },
				{ id: "lesson53", title: "Mảng hai chiều" },
				{ id: "lesson54", title: "Ma trận" }
			]
		},
		{
			id: "module09",
			title: "Chuỗi",
			lessons: [
				{ id: "lesson55", title: "Mảng ký tự" },
				{ id: "lesson56", title: "Chuỗi trong C" },
				{ id: "lesson57", title: "Các hàm xử lý chuỗi" },
				{ id: "lesson58", title: "Xử lý chuỗi thủ công" }
			]
		},
		{
			id: "module10",
			title: "Con trỏ",
			lessons: [
				{ id: "lesson59", title: "Tổng quan về bộ nhớ" },
				{ id: "lesson60", title: "Con trỏ" },
				{ id: "lesson61", title: "Các toán tử của con trỏ" },
				{ id: "lesson62", title: "Con trỏ và biến" },
				{ id: "lesson63", title: "Con trỏ và mảng" },
				{ id: "lesson64", title: "Số học con trỏ" },
				{ id: "lesson65", title: "Con trỏ tới con trỏ" },
				{ id: "lesson66", title: "Con trỏ hàm" }
			]
		},
		{
			id: "module11",
			title: "Hàm và con trỏ",
			lessons: [
				{ id: "lesson67", title: "Truyền tham trị" },
				{ id: "lesson68", title: "Truyền tham chiếu" },
				{ id: "lesson69", title: "Hoán đổi hai biến" },
				{ id: "lesson70", title: "Truyền mảng vào hàm" }
			]
		},
		{
			id: "module12",
			title: "Cấp phát bộ nhớ động",
			lessons: [
				{ id: "lesson71", title: "malloc()" },
				{ id: "lesson72", title: "calloc()" },
				{ id: "lesson73", title: "realloc()" },
				{ id: "lesson74", title: "free()" },
				{ id: "lesson75", title: "Rò rỉ bộ nhớ" }
			]
		},
		{
			id: "module13",
			title: "Cấu trúc",
			lessons: [
				{ id: "lesson76", title: "struct" },
				{ id: "lesson77", title: "Cấu trúc lồng nhau" },
				{ id: "lesson78", title: "Mảng cấu trúc" },
				{ id: "lesson79", title: "Con trỏ tới cấu trúc" },
				{ id: "lesson80", title: "typedef" }
			]
		},
		{
			id: "module14",
			title: "Tệp",
			lessons: [
				{ id: "lesson81", title: "Làm việc với tệp" },
				{ id: "lesson82", title: "Hàm fopen()" },
				{ id: "lesson83", title: "Đọc tệp" },
				{ id: "lesson84", title: "Ghi tệp" },
				{ id: "lesson85", title: "Tệp nhị phân" }
			]
		},
		{
			id: "module15",
			title: "Lập trình nhiều tệp",
			lessons: [
				{ id: "lesson86", title: "Header File" },
				{ id: "lesson87", title: "Source File" },
				{ id: "lesson88", title: "Include Guard" },
				{ id: "lesson89", title: "Dự án nhiều tệp" }
			]
		},
		{
			id: "module16",
			title: "Thuật toán cơ bản",
			lessons: [
				{ id: "lesson90", title: "Độ phức tạp thời gian" },
				{ id: "lesson91", title: "Độ phức tạp bộ nhớ" },
				{ id: "lesson92", title: "Tìm kiếm tuyến tính" },
				{ id: "lesson93", title: "Tìm kiếm nhị phân" },
				{ id: "lesson94", title: "Sắp xếp nổi bọt" },
				{ id: "lesson95", title: "Sắp xếp chọn" },
				{ id: "lesson96", title: "Sắp xếp chèn" }
			]
		},
		{
			id: "module17",
			title: "Dự án thực hành",
			lessons: [
				{ id: "lesson97", title: "Máy tính bỏ túi" },
				{ id: "lesson98", title: "Quản lý sinh viên" },
				{ id: "lesson99", title: "Máy tính ma trận" },
				{ id: "lesson100", title: "Dự án tổng kết" }
			]
		}
	]
};
