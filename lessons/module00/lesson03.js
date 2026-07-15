Lesson(

	Hero({
		chapter: 0,
		lesson: 3,
		title: "Cài đặt môi trường lập trình",
		description: "Chuẩn bị đầy đủ công cụ để viết, biên dịch, chạy và gỡ lỗi chương trình C trên máy tính.",
		duration: "30 phút",
		difficulty: "Beginner"
	}),

	Objectives(
		"Hiểu các công cụ cần thiết để học lập trình C.",
		"Cài đặt Visual Studio Code.",
		"Cài đặt GCC Compiler.",
		"Biết cách tạo và chạy chương trình đầu tiên.",
		"Kiểm tra môi trường đã sẵn sàng."
	),

	Section(
		"Môi trường lập trình gồm những gì?",

		Text("Để học lập trình C, bạn cần chuẩn bị một số công cụ cơ bản. Mỗi công cụ đảm nhiệm một vai trò khác nhau trong quá trình phát triển chương trình."),

		Table(
			["Công cụ", "Vai trò"],
			[
				["Visual Studio Code", "Soạn thảo mã nguồn"],
				["GCC", "Biên dịch chương trình C"],
				["Terminal", "Chạy các lệnh biên dịch"],
				["Debugger", "Gỡ lỗi chương trình"]
			]
		),

		Remember("Trình soạn thảo mã nguồn không phải là trình biên dịch.")
	),

	Section(
		"Visual Studio Code",

		Text("Visual Studio Code (VS Code) là trình soạn thảo mã nguồn miễn phí, nhẹ và hỗ trợ rất nhiều ngôn ngữ lập trình."),

		List(
			"Giao diện đơn giản.",
			"Hỗ trợ mở rộng bằng Extension.",
			"Tích hợp Terminal.",
			"Hỗ trợ Debug."
		),

		Tip("Trong toàn bộ khóa học, chúng ta sẽ sử dụng VS Code.")
	),

	Section(
		"GCC Compiler",

		Text("GCC (GNU Compiler Collection) là trình biên dịch phổ biến dành cho ngôn ngữ C và C++."),

		Definition(
			"GCC",
			"Trình biên dịch chuyển đổi mã nguồn C thành chương trình thực thi."
		),

		Code(
			"bash",
			`gcc main.c -o main`
		),

		Output(
			"Lệnh trên tạo chương trình thực thi có tên main."
		)
	),

	Section(
		"Cấu trúc thư mục",

		Text("Nên tổ chức thư mục học tập ngay từ đầu để dễ quản lý các bài học và bài tập."),

		Code(
			"text",
			`Programming-C/
│
├── lesson01/
├── lesson02/
├── lesson03/
├── exercises/
└── projects/`
		),

		Note("Mỗi bài học nên có thư mục riêng để lưu mã nguồn.")
	),

	Section(
		"Tạo chương trình đầu tiên",

		OrderedList(
			"Tạo thư mục mới.",
			"Tạo tệp main.c.",
			"Viết mã nguồn.",
			"Biên dịch chương trình.",
			"Chạy chương trình."
		),

		Example(
			"Ví dụ",

			Code(
				"c",
				`#include <stdio.h>

int main(void)
{
    printf("Hello, World!\n");
    return 0;
}`
			),

			Output(
				`Hello, World!`
			)
		)
	),

	Section(
		"Kiểm tra môi trường",

		Text("Sau khi cài đặt xong, hãy kiểm tra xem các công cụ đã hoạt động bình thường hay chưa."),

		Table(
			["Kiểm tra", "Kết quả mong đợi"],
			[
				["VS Code mở được", "✓"],
				["Terminal hoạt động", "✓"],
				["gcc --version", "Hiển thị phiên bản GCC"],
				["Biên dịch thành công", "✓"],
				["Chạy được chương trình", "✓"]
			]
		)
	),

	Section(
		"Một số lỗi thường gặp",

		Accordion(
			"Không tìm thấy gcc",

			Text("Nguyên nhân phổ biến là GCC chưa được cài đặt hoặc chưa được thêm vào PATH.")
		),

		Accordion(
			"Không chạy được chương trình",

			Text("Hãy kiểm tra xem quá trình biên dịch có xuất hiện lỗi hay không.")
		),

		Accordion(
			"Không mở được Terminal",

			Text("Khởi động lại VS Code hoặc kiểm tra cấu hình Terminal của hệ điều hành.")
		)
	),

	Section(
		"Lời khuyên",

		Quote(
			"Thiết lập môi trường đúng ngay từ đầu sẽ giúp bạn tiết kiệm rất nhiều thời gian trong suốt quá trình học."
		),

		Warning("Không nên sao chép mã nguồn mà không tự gõ lại.")
	),

	Exercise(
		"Cài đặt đầy đủ VS Code và GCC trên máy tính của bạn."
	),

	Challenge(
		"Tự tạo một thư mục mới, viết lại chương trình Hello World và biên dịch thành công mà không cần xem lại hướng dẫn."
	),

	Summary(
		"Hiểu các thành phần của môi trường lập trình.",
		"Cài đặt VS Code.",
		"Cài đặt GCC.",
		"Biên dịch và chạy chương trình đầu tiên.",
		"Sẵn sàng bắt đầu viết chương trình C."
	),

	Navigation()

);