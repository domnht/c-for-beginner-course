Lesson(

	Hero({
		chapter: 2,
		lesson: 9,
		title: "Biến (Variables)",
		description: "Tìm hiểu khái niệm biến, cách khai báo, khởi tạo và sử dụng biến trong chương trình C.",
		duration: "35 phút",
		difficulty: "Beginner"
	}),

	Objectives(
		"Hiểu khái niệm biến.",
		"Biết cách khai báo biến.",
		"Biết cách khởi tạo và gán giá trị cho biến.",
		"Hiểu quy tắc sử dụng biến."
	),

	Section(
		"Biến là gì?",

		Text("Biến là một vùng nhớ có tên dùng để lưu trữ dữ liệu trong khi chương trình đang thực thi. Giá trị của biến có thể thay đổi trong quá trình chạy chương trình."),

		Definition(
			"Variable",
			"Một vùng nhớ có tên dùng để lưu trữ dữ liệu."
		),

		Quiz({
			question: "Biến dùng để làm gì?",
			choices: [
				"Lưu trữ dữ liệu.",
				"In dữ liệu ra màn hình.",
				"Biên dịch chương trình.",
				"Kết thúc chương trình."
			],
			answer: 0,
			explanation: "Biến được dùng để lưu trữ dữ liệu trong bộ nhớ."
		})
	),

	Section(
		"Khai báo biến",

		Text("Trước khi sử dụng, biến phải được khai báo với một kiểu dữ liệu."),

		Code(
			"c",
			`int age;
float score;
char grade;`
		),

		Table(
			["Kiểu dữ liệu", "Ví dụ"],
			[
				["int", "int age;"],
				["float", "float score;"],
				["char", "char grade;"]
			]
		),

		Remember("Biến phải được khai báo trước khi sử dụng.")
	),

	Section(
		"Khởi tạo biến",

		Text("Bạn có thể gán giá trị cho biến ngay khi khai báo."),

		Code(
			"c",
			`int age = 18;
float score = 8.5f;
char grade = 'A';`
		),

		Output(
			`age = 18
score = 8.5
grade = A`
		),

		TrueFalse(
			"Có thể khởi tạo giá trị cho biến ngay khi khai báo.",
			true
		)
	),

	Section(
		"Gán giá trị",

		Text("Giá trị của biến có thể thay đổi nhiều lần trong quá trình thực thi chương trình."),

		Code(
			"c",
			`int age = 18;

age = 19;
age = 20;`
		),

		Tip("Dấu = trong C là phép gán, không phải phép so sánh.")
	),

	Section(
		"Ví dụ hoàn chỉnh",

		Example(

			"Chương trình sử dụng biến",

			Code(
				"c",
				`#include <stdio.h>

int main(void)
{
    int age = 18;

    printf("Age: %d\n", age);

    age = 19;

    printf("Age: %d\n", age);

    return 0;
}`
			),

			Output(
				`Age: 18
Age: 19`
			)

		),

		Info("Sau mỗi phép gán, giá trị cũ của biến sẽ được thay thế bằng giá trị mới.")
	),

	Section(
		"Lỗi thường gặp",

		Accordion(

			"Chưa khai báo biến",

			Text("Sử dụng biến trước khi khai báo sẽ làm chương trình không biên dịch được.")

		),

		Accordion(

			"Đặt tên không hợp lệ",

			Text("Tên biến không được bắt đầu bằng chữ số và không được chứa khoảng trắng.")

		),

		Accordion(

			"Đọc giá trị chưa khởi tạo",

			Text("Một biến cục bộ chưa được khởi tạo sẽ chứa giá trị không xác định.")

		)
	),

	Section(
		"Kiểm tra kiến thức",

		Quiz({
			question: "Câu lệnh nào khai báo đúng một biến số nguyên?",
			choices: [
				"number int;",
				"int number;",
				"number = int;",
				"integer number;"
			],
			answer: 1,
			explanation: "Cú pháp khai báo đúng là: kiểu dữ liệu trước, tên biến sau."
		}),

		TrueFalse(
			"Giá trị của biến có thể thay đổi trong khi chương trình chạy.",
			true
		),

		FillBlank(
			"Từ khóa dùng để khai báo biến số nguyên là __________.",
			"int"
		)
	),

	Section(
		"Ghi nhớ nhanh",

		Flashcard(
			"Variable",
			"Vùng nhớ có tên dùng để lưu dữ liệu."
		),

		Flashcard(
			"Declaration",
			"Khai báo biến."
		),

		Flashcard(
			"Assignment",
			"Gán giá trị cho biến."
		)
	),

	Exercise(
		"Khai báo ba biến để lưu tên, tuổi và điểm trung bình của một học sinh. Gán giá trị phù hợp và in các giá trị đó ra màn hình."
	),

	Challenge(
		"Viết chương trình khai báo hai biến số nguyên, hoán đổi giá trị của chúng bằng một biến trung gian rồi in kết quả trước và sau khi hoán đổi."
	),

	Summary(
		"Biến dùng để lưu trữ dữ liệu.",
		"Biến phải được khai báo trước khi sử dụng.",
		"Có thể khởi tạo giá trị khi khai báo.",
		"Giá trị của biến có thể thay đổi trong quá trình thực thi."
	),

	Navigation()

);