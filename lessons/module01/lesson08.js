Lesson(

	Hero({
		chapter: 1,
		lesson: 8,
		title: "Quy trình biên dịch chương trình C",
		description: "Hiểu các bước từ mã nguồn C đến chương trình thực thi và vai trò của Compiler, Object File và Linker.",
		duration: "35 phút",
		difficulty: "Beginner"
	}),

	Objectives(
		"Hiểu quy trình biên dịch chương trình C.",
		"Phân biệt Source File, Object File và Executable.",
		"Hiểu vai trò của Compiler và Linker.",
		"Biết các bước khi chạy một chương trình C."
	),

	Section(
		"Tổng quan",

		Text("Khi bạn nhấn nút Build hoặc gõ lệnh gcc, chương trình không được tạo ra ngay lập tức. Trình biên dịch phải thực hiện nhiều bước để chuyển mã nguồn thành chương trình thực thi."),

		Code(
			"text",
			`Source Code (.c)
       │
       ▼
 Compiler
       │
       ▼
 Object File (.o/.obj)
       │
       ▼
 Linker
       │
       ▼
 Executable`
		),

		Remember("Máy tính không chạy trực tiếp tệp .c.")
	),

	Section(
		"Bước 1 - Source Code",

		Definition(
			"Source Code",
			"Mã nguồn do lập trình viên viết bằng ngôn ngữ C."
		),

		Code(
			"c",
			`#include <stdio.h>

int main(void)
{
    printf("Hello, World!\n");
    return 0;
}`
		),

		Quiz({
			question: "Phần mở rộng mặc định của tệp mã nguồn C là gì?",
			choices: [
				".cpp",
				".exe",
				".c",
				".obj"
			],
			answer: 2,
			explanation: "Mã nguồn C được lưu trong các tệp có phần mở rộng .c."
		})
	),

	Section(
		"Bước 2 - Compiler",

		Text("Compiler đọc mã nguồn, kiểm tra lỗi cú pháp và chuyển đổi chương trình sang mã máy trung gian (Object File)."),

		Code(
			"bash",
			`gcc -c main.c`
		),

		Output(
			"Tạo ra tệp main.o (hoặc main.obj trên một số hệ thống)."
		),

		TrueFalse(
			"Compiler tạo ra chương trình thực thi ngay sau khi đọc mã nguồn.",
			false
		)
	),

	Section(
		"Bước 3 - Linker",

		Text("Nếu chương trình sử dụng các thư viện hoặc nhiều tệp mã nguồn, Linker sẽ kết hợp chúng thành một chương trình hoàn chỉnh."),

		Definition(
			"Linker",
			"Thành phần chịu trách nhiệm liên kết các Object File và thư viện để tạo chương trình thực thi."
		),

		Code(
			"bash",
			`gcc main.c -o main`
		),

		Output(
			"Tạo chương trình thực thi có tên main."
		)
	),

	Section(
		"Bước 4 - Chạy chương trình",

		Text("Sau khi quá trình biên dịch hoàn tất, hệ điều hành sẽ nạp chương trình vào bộ nhớ và CPU bắt đầu thực thi từ hàm main()."),

		Flashcard(
			"Compiler",
			"Chuyển Source Code thành Object File."
		),

		Flashcard(
			"Linker",
			"Kết hợp Object File và thư viện."
		),

		Flashcard(
			"Executable",
			"Chương trình có thể chạy trên hệ điều hành."
		)
	),

	Section(
		"So sánh",

		Table(
			["Thành phần", "Vai trò"],
			[
				["Source Code", "Mã nguồn do lập trình viên viết."],
				["Compiler", "Biên dịch mã nguồn."],
				["Object File", "Kết quả sau khi biên dịch."],
				["Linker", "Liên kết các Object File."],
				["Executable", "Chương trình có thể thực thi."]
			]
		)
	),

	Section(
		"Kiểm tra kiến thức",

		Quiz({
			question: "Thành phần nào tạo ra Object File?",
			choices: [
				"CPU",
				"Compiler",
				"Terminal",
				"Debugger"
			],
			answer: 1,
			explanation: "Compiler tạo Object File từ Source Code."
		}),

		Quiz({
			question: "Linker có nhiệm vụ gì?",
			choices: [
				"Viết mã nguồn.",
				"Kết hợp Object File thành chương trình thực thi.",
				"Hiển thị kết quả lên màn hình.",
				"Kiểm tra chính tả của mã nguồn."
			],
			answer: 1,
			explanation: "Linker chịu trách nhiệm tạo Executable."
		}),

		FillBlank(
			"Compiler tạo ra tệp __________ trước khi Linker hoạt động.",
			"Object File"
		)
	),

	Section(
		"Lỗi thường gặp",

		Accordion(
			"Compiler báo lỗi",

			Text("Hãy đọc dòng đầu tiên của thông báo lỗi. Thông thường đó là nguyên nhân gốc của vấn đề.")
		),

		Accordion(
			"Không tạo được Executable",

			Text("Có thể vẫn còn lỗi biên dịch hoặc Linker không tìm thấy thư viện cần thiết.")
		),

		Warning("Không nên sửa lỗi một cách ngẫu nhiên. Hãy đọc và hiểu thông báo lỗi trước.")
	),

	Exercise(
		"Biên dịch chương trình Hello World bằng lệnh gcc main.c -o main và chạy chương trình vừa tạo."
	),

	Challenge(
		"Tìm hiểu thêm về bốn giai đoạn của GCC: Preprocessing, Compilation, Assembly và Linking. Bạn chưa cần hiểu chi tiết, chỉ cần biết tên và vai trò của từng giai đoạn."
	),

	Summary(
		"Source Code là mã nguồn.",
		"Compiler tạo Object File.",
		"Linker tạo Executable.",
		"Hệ điều hành chạy Executable từ hàm main()."
	),

	Navigation()

);