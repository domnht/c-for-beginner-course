Lesson(

	Hero({
		chapter: 1,
		lesson: 7,
		title: "Coding Style",
		description: "Học cách trình bày mã nguồn rõ ràng, nhất quán và dễ bảo trì thông qua các quy tắc Coding Style cơ bản.",
		duration: "30 phút",
		difficulty: "Beginner"
	}),

	Objectives(
		"Hiểu Coding Style là gì.",
		"Biết cách thụt lề và định dạng mã nguồn.",
		"Biết quy tắc đặt tên.",
		"Nhận biết mã nguồn tốt và chưa tốt."
	),

	Section(
		"Coding Style là gì?",

		Text("Coding Style là tập hợp các quy tắc giúp mã nguồn thống nhất, dễ đọc và dễ bảo trì. Coding Style không làm chương trình chạy nhanh hơn nhưng giúp lập trình viên làm việc hiệu quả hơn."),

		Definition(
			"Coding Style",
			"Tập hợp các quy tắc về cách trình bày và tổ chức mã nguồn."
		),

		Remember("Code được đọc nhiều hơn rất nhiều so với số lần được viết.")
	),

	Section(
		"Ví dụ",

		Columns(

			Column(

				Text("Khó đọc"),

				Code(
					"c",
					`#include <stdio.h>
int main(){printf("Hello");return 0;}`
				)

			),

			Column(

				Text("Dễ đọc"),

				Code(
					"c",
					`#include <stdio.h>

int main(void)
{
    printf("Hello");
    return 0;
}`
				)

			)

		),

		Quiz({
			question: "Đoạn mã nào dễ đọc và dễ bảo trì hơn?",
			choices: [
				"Đoạn bên trái.",
				"Đoạn bên phải."
			],
			answer: 1,
			explanation: "Việc xuống dòng và thụt lề giúp người đọc nhanh chóng nhận biết cấu trúc chương trình."
		})
	),

	Section(
		"Thụt lề (Indentation)",

		Text("Mỗi khối lệnh bên trong dấu ngoặc nhọn nên được thụt vào một mức. Trong khóa học này, chúng ta sử dụng 4 dấu cách."),

		Code(
			"c",
			`if(score >= 5)
{
    printf("Pass");
}`
		),

		TrueFalse(
			"Việc thụt lề làm thay đổi kết quả thực thi của chương trình.",
			false
		),

		Tip("Hãy thiết lập VS Code tự động định dạng mã nguồn khi lưu tệp.")
	),

	Section(
		"Đặt tên",

		Table(
			["Đối tượng", "Quy tắc"],
			[
				["Biến", "camelCase"],
				["Hằng", "UPPER_CASE"],
				["Hàm", "camelCase"],
				["Tên tệp", "lowercase"]
			]
		),

		Flashcard(
			"camelCase",
			"firstName, studentCount, totalScore"
		),

		Flashcard(
			"UPPER_CASE",
			"MAX_SIZE, PI, BUFFER_LENGTH"
		)
	),

	Section(
		"Khoảng trắng",

		Text("Sử dụng khoảng trắng hợp lý giúp mã nguồn dễ quan sát hơn."),

		Example(
			"Đúng",

			Code(
				"c",
				`int sum = a + b;`
			)
		),

		Example(
			"Chưa tốt",

			Code(
				"c",
				`int sum=a+b;`
			)
		),

		FillBlank(
			"Trong khóa học này, mỗi mức thụt lề sử dụng ______ dấu cách.",
			"4"
		)
	),

	Section(
		"Một số nguyên tắc",

		OrderedList(
			"Mỗi câu lệnh trên một dòng.",
			"Không viết nhiều câu lệnh trên cùng một dòng.",
			"Sử dụng tên biến có ý nghĩa.",
			"Thụt lề nhất quán.",
			"Đặt khoảng trắng hợp lý.",
			"Giữ chương trình gọn gàng."
		),

		Info("Một Coding Style nhất quán giúp làm việc nhóm hiệu quả hơn.")
	),

	Section(
		"Kiểm tra",

		Quiz({
			question: "Coding Style ảnh hưởng trực tiếp đến điều gì?",
			choices: [
				"Tốc độ thực thi chương trình.",
				"Khả năng đọc và bảo trì mã nguồn.",
				"Dung lượng tệp thực thi.",
				"Hiệu năng của CPU."
			],
			answer: 1,
			explanation: "Coding Style giúp con người đọc, hiểu và bảo trì mã nguồn dễ dàng hơn."
		}),

		TrueFalse(
			"Tên biến nên ngắn nhất có thể, kể cả khi khó hiểu.",
			false
		)
	),

	Exercise(
		"Định dạng lại chương trình Hello World theo đúng Coding Style của khóa học."
	),

	Challenge(
		"Viết lại một chương trình bất kỳ theo hai cách: một cách khó đọc và một cách đúng Coding Style. So sánh cảm nhận khi đọc hai phiên bản."
	),

	Summary(
		"Coding Style giúp mã nguồn dễ đọc.",
		"Thụt lề không ảnh hưởng đến kết quả chạy.",
		"Sử dụng tên biến có ý nghĩa.",
		"Giữ cách trình bày nhất quán trong toàn bộ chương trình."
	),

	Navigation()

);