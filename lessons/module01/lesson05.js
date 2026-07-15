Lesson(

	Hero({
		chapter: 1,
		lesson: 5,
		title: "Cấu trúc của một chương trình C",
		description: "Tìm hiểu các thành phần cơ bản của một chương trình C và vai trò của từng thành phần.",
		duration: "30 phút",
		difficulty: "Beginner"
	}),

	Objectives(
		"Nhận biết các thành phần của chương trình C.",
		"Hiểu vai trò của hàm main().",
		"Hiểu ý nghĩa của dấu ngoặc và câu lệnh.",
		"Đọc được cấu trúc một chương trình đơn giản."
	),

	Section(
		"Quan sát chương trình",

		Code(
			"c",
			`#include <stdio.h>

int main(void)
{
    printf("Hello, World!\\n");
    return 0;
}`
		),

		Text("Mặc dù chương trình chỉ có vài dòng nhưng mỗi thành phần đều có một nhiệm vụ riêng.")
	),

	Section(
		"Các thành phần",

		Table(
			["Thành phần", "Vai trò"],
			[
				["#include", "Khai báo thư viện."],
				["main()", "Điểm bắt đầu của chương trình."],
				["{ }", "Khối lệnh."],
				["printf()", "Hiển thị dữ liệu."],
				["return 0;", "Kết thúc chương trình."]
			]
		),

		Definition(
			"Block",
			"Một nhóm câu lệnh được đặt giữa dấu ngoặc nhọn { }."
		)
	),

	Section(
		"Hàm main()",

		Text("Mọi chương trình C đều bắt đầu thực thi từ hàm main(). Nếu không có hàm này, chương trình sẽ không thể biên dịch thành công."),

		Remember("main() luôn là điểm bắt đầu của chương trình C.")
	),

	Section(
		"Câu lệnh",

		Text("Mỗi câu lệnh thường kết thúc bằng dấu chấm phẩy (;)."),

		Code(
			"c",
			`printf("Hello");
printf("World");
`
		),

		Warning("Quên dấu ';' là lỗi cú pháp rất phổ biến.")
	),

	Section(
		"Kiểm tra kiến thức",

		Quiz({
			question: "Chương trình C bắt đầu thực thi từ đâu?",
			choices: [
				"printf()",
				"main()",
				"#include",
				"return"
			],
			answer: 1,
			explanation: "Hệ điều hành luôn gọi hàm main() đầu tiên."
		}),

		TrueFalse(
			"Không có hàm main(), chương trình C vẫn có thể chạy.",
			false
		),

		FillBlank(
			"Hàm __________ là điểm bắt đầu của chương trình C.",
			"main"
		)
	),

	Section(
		"Ghi nhớ nhanh",

		Flashcard(
			"main()",
			"Điểm bắt đầu của mọi chương trình C."
		),

		Flashcard(
			"{ }",
			"Định nghĩa một khối lệnh."
		),

		Flashcard(
			";",
			"Kết thúc một câu lệnh."
		)
	),

	Section(
		"Ví dụ",

		Example(
			"Chương trình hợp lệ",

			Code(
				"c",
				`#include <stdio.h>

int main(void)
{
    printf("Programming in C\\n");
    return 0;
}`
			)
		),

		Example(
			"Chương trình không hợp lệ",

			Code(
				"c",
				`#include <stdio.h>

printf("Hello");
`
			)
		),

		Info("Chương trình trên không có hàm main() nên sẽ không biên dịch được.")
	),

	Exercise(
		"Viết lại chương trình Hello World và xác định đâu là thư viện, đâu là hàm main(), đâu là các câu lệnh."
	),

	Challenge(
		"Xóa từng thành phần trong chương trình (ví dụ: xóa return 0;, xóa dấu ;, xóa main()) rồi thử biên dịch để quan sát thông báo lỗi."
	),

	Summary(
		"Một chương trình C gồm nhiều thành phần.",
		"main() là điểm bắt đầu của chương trình.",
		"Dấu ngoặc nhọn tạo khối lệnh.",
		"Mỗi câu lệnh thường kết thúc bằng dấu ';'."
	),

	Navigation()

);