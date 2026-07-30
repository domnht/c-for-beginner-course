Lesson(

	Hero({
		chapter: 2,
		lesson: 14,
		title: "Kiểu ký tự (char)",
		description: "Tìm hiểu cách lưu trữ ký tự bằng kiểu char, bảng mã ASCII và mối quan hệ giữa ký tự với giá trị số trong ngôn ngữ C.",
		duration: "40 phút",
		difficulty: "Beginner"
	}),

	Objectives(
		"Hiểu kiểu dữ liệu char.",
		"Biết cách khai báo và sử dụng biến char.",
		"Hiểu mối quan hệ giữa ký tự và mã ASCII.",
		"Biết thực hiện các phép toán đơn giản với ký tự."
	),

	Section(
		"Kiểu char là gì?",

		Text("Kiểu char được dùng để lưu một ký tự duy nhất, chẳng hạn như chữ cái, chữ số hoặc ký hiệu đặc biệt."),

		Definition(
			"char",
			"Kiểu dữ liệu dùng để lưu một ký tự duy nhất."
		),

		Code(
			"c",
			`char grade = 'A';
char answer = 'Y';
char digit = '8';`
		),

		Remember("Giá trị của kiểu char luôn được đặt trong dấu nháy đơn (').")
	),

	Section(
		"Khai báo và sử dụng",

		Text("Bạn có thể khai báo biến char giống như các kiểu dữ liệu khác."),

		Code(
			"c",
			`char letter = 'C';

printf("%c\n", letter);`
		),

		Output(
			`C`
		),

		Quiz({
			question: "Định dạng nào dùng để in một biến char?",
			choices: [
				"%d",
				"%f",
				"%c",
				"%s"
			],
			answer: 2,
			explanation: "%c được sử dụng để in một ký tự."
		})
	),

	Section(
		"Ký tự và mã ASCII",

		Text("Trong máy tính, mỗi ký tự được lưu dưới dạng một số nguyên theo bảng mã ASCII."),

		Table(
			["Ký tự", "Mã ASCII"],
			[
				["'A'", "65"],
				["'B'", "66"],
				["'a'", "97"],
				["'b'", "98"],
				["'0'", "48"],
				["'9'", "57"]
			]
		),

		Info("Biến char thực chất lưu một giá trị số nguyên đại diện cho ký tự đó.")
	),

	Section(
		"In mã ASCII",

		Text("Có thể in mã ASCII của một ký tự bằng định dạng %d."),

		Code(
			"c",
			`char ch = 'A';

printf("%c\n", ch);
printf("%d\n", ch);`
		),

		Output(
			`A
65`
		),

		TrueFalse(
			"Ký tự 'A' có mã ASCII bằng 65.",
			true
		)
	),

	Section(
		"Phép toán với ký tự",

		Text("Vì char lưu một giá trị số nên có thể thực hiện các phép toán đơn giản."),

		Code(
			"c",
			`char letter = 'A';

printf("%c\n", letter + 1);
printf("%c\n", letter + 2);`
		),

		Output(
			`B
C`
		),

		Tip("Việc cộng hoặc trừ trên char thực chất là cộng hoặc trừ trên mã ASCII.")
	),

	Section(
		"Chữ hoa và chữ thường",

		Text("Trong bảng mã ASCII, chữ thường có mã lớn hơn chữ hoa 32 đơn vị."),

		Code(
			"c",
			`char upper = 'A';
char lower = upper + 32;

printf("%c\n", lower);`
		),

		Output(
			`a`
		),

		Flashcard(
			"'A'",
			"ASCII = 65"
		),

		Flashcard(
			"'a'",
			"ASCII = 97"
		),

		Flashcard(
			"32",
			"Khoảng cách giữa chữ hoa và chữ thường trong bảng ASCII."
		)
	),

	Section(
		"Ký tự và chữ số",

		Text("Ký tự '5' khác hoàn toàn với số nguyên 5."),

		Columns(

			Column(

				Text("Số nguyên"),

				Code(
					"c",
					`int number = 5;`
				)

			),

			Column(

				Text("Ký tự"),

				Code(
					"c",
					`char digit = '5';`
				)

			)

		),

		Warning("Ký tự '5' có mã ASCII là 53, không phải giá trị số nguyên 5.")
	),

	Section(
		"Ví dụ hoàn chỉnh",

		Code(
			"c",
			`#include <stdio.h>

int main(void)
{
    char grade = 'A';

    printf("Grade: %c\n", grade);
    printf("ASCII : %d\n", grade);

    return 0;
}`
		),

		Output(
			`Grade: A
ASCII : 65`
		)
	),

	Section(
		"Lỗi thường gặp",

		Accordion(
			"Dùng nháy kép",

			Text("\"A\" là chuỗi ký tự, không phải một giá trị char.")
		),

		Accordion(
			"Nhầm giữa ký tự và số",

			Text("'7' khác hoàn toàn với số nguyên 7.")
		),

		Accordion(
			"Dùng sai định dạng printf",

			Text("char nên được in bằng %c. Nếu dùng %d sẽ in mã ASCII.")
		)
	),

	Section(
		"Kiểm tra kiến thức",

		Quiz({
			question: "Giá trị nào là một ký tự hợp lệ?",
			choices: [
				"A",
				"'A'",
				"\"'A'\"",
				"65"
			],
			answer: 1,
			explanation: "Một ký tự trong C được đặt trong dấu nháy đơn."
		}),

		Quiz({
			question: "Kết quả của đoạn mã sau là gì?\nchar ch='B'; printf(\"%c\", ch+1);",
			choices: [
				"A",
				"B",
				"C",
				"66"
			],
			answer: 2,
			explanation: "'B' có mã ASCII là 66, cộng thêm 1 sẽ thành 'C'."
		}),

		TrueFalse(
			"Biến char chỉ lưu được một ký tự.",
			true
		),

		FillBlank(
			"Định dạng dùng để in một ký tự là __________.",
			"%c"
		)
	),

	Section(
		"Ghi nhớ nhanh",

		Flashcard(
			"char",
			"Lưu một ký tự."
		),

		Flashcard(
			"%c",
			"In ký tự."
		),

		Flashcard(
			"%d",
			"In mã ASCII của ký tự."
		),

		Flashcard(
			"'A'",
			"Ký tự được đặt trong dấu nháy đơn."
		)
	),

	Exercise(
		"Khai báo ba biến char để lưu chữ cái đầu của họ, tên và một ký hiệu bất kỳ. In cả ký tự và mã ASCII của từng biến."
	),

	Challenge(
		"Viết chương trình nhập một ký tự chữ cái in hoa và in ra chữ cái in thường tương ứng mà không sử dụng hàm thư viện chuyển đổi ký tự."
	),

	Summary(
		"char dùng để lưu một ký tự.",
		"Ký tự được đặt trong dấu nháy đơn.",
		"Mỗi ký tự tương ứng với một mã ASCII.",
		"Có thể thực hiện phép toán đơn giản trên char.",
		"Phân biệt ký tự '5' với số nguyên 5."
	),

	Navigation()

);