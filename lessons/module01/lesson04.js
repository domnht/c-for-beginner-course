Lesson(

	Hero({
		chapter: 1,
		lesson: 4,
		title: "Chương trình C đầu tiên",
		description: "Viết, biên dịch và chạy chương trình C đầu tiên để hiểu quy trình phát triển một chương trình hoàn chỉnh.",
		duration: "30 phút",
		difficulty: "Beginner"
	}),

	Objectives(
		"Viết chương trình C đầu tiên.",
		"Biên dịch chương trình bằng GCC.",
		"Chạy chương trình thực thi.",
		"Hiểu ý nghĩa của từng dòng mã nguồn."
	),

	Section(
		"Chương trình đầu tiên",

		Text("Theo truyền thống, chương trình đầu tiên khi học một ngôn ngữ lập trình sẽ hiển thị dòng chữ 'Hello, World!'. Chương trình rất nhỏ nhưng chứa hầu hết các thành phần cơ bản của một chương trình C."),

		Code(
			"c",
			`#include <stdio.h>

int main(void)
{
    printf("Hello, World!\\n");
    return 0;
}`
		),

		Output(
			`Hello, World!`
		)
	),

	Section(
		"Viết mã nguồn",

		Text("Tạo một tệp có tên main.c và nhập chính xác chương trình trên."),

		Note("Phần mở rộng của tệp mã nguồn C luôn là .c.")
	),

	Section(
		"Biên dịch chương trình",

		Text("Sau khi lưu tệp, mở Terminal tại thư mục chứa main.c và thực hiện lệnh sau."),

		Code(
			"bash",
			`gcc main.c -o main`
		),

		Output(
			"Không có thông báo lỗi nghĩa là chương trình đã được biên dịch thành công."
		),

		Tip("Nếu xuất hiện lỗi, hãy đọc kỹ thông báo của trình biên dịch trước khi sửa.")
	),

	Section(
		"Chạy chương trình",

		Columns(

			Column(

				Text("Windows"),

				Code(
					"bash",
					`main.exe`
				)

			),

			Column(

				Text("Linux / macOS"),

				Code(
					"bash",
					`./main`
				)

			)

		),

		Output(
			`Hello, World!`
		)
	),

	Section(
		"Điều gì đã xảy ra?",

		OrderedList(
			"Bạn viết mã nguồn.",
			"GCC đọc mã nguồn.",
			"GCC tạo chương trình thực thi.",
			"Hệ điều hành chạy chương trình.",
			"Chương trình hiển thị kết quả lên màn hình."
		),

		Remember("Máy tính không chạy trực tiếp tệp .c mà chạy chương trình thực thi được tạo sau khi biên dịch.")
	),

	Section(
		"Giải thích nhanh",

		Table(
			["Thành phần", "Chức năng"],
			[
				["#include <stdio.h>", "Sử dụng thư viện nhập xuất chuẩn."],
				["main()", "Điểm bắt đầu của chương trình."],
				["printf()", "Hiển thị dữ liệu lên màn hình."],
				["return 0;", "Kết thúc chương trình thành công."]
			]
		),

		Info("Trong các bài học tiếp theo, chúng ta sẽ tìm hiểu chi tiết từng thành phần.")
	),

	Section(
		"Lỗi thường gặp",

		Accordion(
			"Sai tên tệp",

			Text("Đảm bảo tệp được lưu với phần mở rộng .c, không phải .txt.")
		),

		Accordion(
			"Thiếu dấu ;",

			Text("Mỗi câu lệnh trong C thường kết thúc bằng dấu chấm phẩy (;).")
		),

		Accordion(
			"Không tìm thấy gcc",

			Text("Kiểm tra lại việc cài đặt GCC và biến môi trường PATH.")
		)
	),

	Section(
		"Thực hành",

		Exercise(
			"Viết lại chương trình Hello, World! mà không nhìn tài liệu."
		),

		Challenge(
			"Thay chuỗi \"Hello, World!\" bằng tên của bạn rồi biên dịch và chạy lại chương trình."
		)
	),

	Summary(
		"Viết chương trình C đầu tiên.",
		"Biết cách biên dịch bằng GCC.",
		"Biết cách chạy chương trình.",
		"Hiểu quy trình từ mã nguồn đến chương trình thực thi."
	),

	Navigation()

);