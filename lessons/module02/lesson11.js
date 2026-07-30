Lesson(

	Hero({
		chapter: 2,
		lesson: 11,
		title: "Các kiểu dữ liệu cơ bản",
		description: "Khám phá các kiểu dữ liệu cơ bản trong C, hiểu mục đích của từng kiểu và biết cách lựa chọn kiểu dữ liệu phù hợp.",
		duration: "40 phút",
		difficulty: "Beginner"
	}),

	Objectives(
		"Hiểu kiểu dữ liệu là gì.",
		"Biết các kiểu dữ liệu cơ bản trong C.",
		"Phân biệt dữ liệu số nguyên, số thực, ký tự và logic.",
		"Biết lựa chọn kiểu dữ liệu phù hợp."
	),

	Section(
		"Kiểu dữ liệu là gì?",

		Text("Mỗi biến trong C đều có một kiểu dữ liệu. Kiểu dữ liệu xác định loại giá trị mà biến có thể lưu trữ, lượng bộ nhớ được sử dụng và các phép toán có thể thực hiện."),

		Definition(
			"Data Type",
			"Quy định loại dữ liệu mà một biến có thể lưu trữ."
		),

		Remember("Muốn khai báo một biến, trước tiên phải xác định kiểu dữ liệu của nó.")
	),

	Section(
		"Các kiểu dữ liệu cơ bản",

		Table(
			["Kiểu", "Mục đích", "Ví dụ"],
			[
				["int", "Lưu số nguyên", "25"],
				["float", "Lưu số thực", "3.14"],
				["double", "Lưu số thực có độ chính xác cao", "3.1415926535"],
				["char", "Lưu một ký tự", 'A'],
				["_Bool", "Lưu giá trị đúng hoặc sai", "true / false"]
			]
		),

		Quiz({
			question: "Kiểu dữ liệu nào phù hợp nhất để lưu tuổi của một người?",
			choices: [
				"char",
				"int",
				"float",
				"double"
			],
			answer: 1,
			explanation: "Tuổi thường là số nguyên nên sử dụng kiểu int."
		})
	),

	Section(
		"Kiểu số nguyên",

		Text("Kiểu int dùng để lưu các giá trị nguyên như số lượng học sinh, tuổi hoặc điểm số nguyên."),

		Code(
			"c",
			`int age = 20;
int students = 35;`
		),

		Output(
			`age = 20
students = 35`
		),

		TrueFalse(
			"Kiểu int có thể lưu giá trị 18.",
			true
		)
	),

	Section(
		"Kiểu số thực",

		Text("Khi dữ liệu có phần thập phân, hãy sử dụng float hoặc double."),

		Code(
			"c",
			`float temperature = 36.5f;
double pi = 3.141592653589793;`
		),

		Tip("double có độ chính xác cao hơn float.")
	),

	Section(
		"Kiểu ký tự",

		Text("Kiểu char chỉ lưu một ký tự duy nhất và được đặt trong dấu nháy đơn."),

		Code(
			"c",
			`char grade = 'A';
char answer = 'Y';`
		),

		Warning("Chuỗi \"Hello\" không phải là kiểu char vì chứa nhiều ký tự.")
	),

	Section(
		"Kiểu logic",

		Text("Kiểu _Bool chỉ lưu hai giá trị: đúng hoặc sai. Trong các phiên bản C hiện đại, thường kết hợp với thư viện stdbool.h để sử dụng bool, true và false."),

		Code(
			"c",
			`#include <stdbool.h>

bool passed = true;`
		),

		Flashcard(
			"true",
			"Giá trị đúng."
		),

		Flashcard(
			"false",
			"Giá trị sai."
		)
	),

	Section(
		"Chọn kiểu dữ liệu phù hợp",

		Columns(

			Column(

				Text("✔ Phù hợp"),

				List(
					"int → tuổi",
					"float → nhiệt độ",
					"double → số π",
					"char → giới tính (M/F)",
					"bool → đã đăng nhập hay chưa"
				)

			),

			Column(

				Text("✘ Chưa phù hợp"),

				List(
					"float → tuổi",
					"char → điểm trung bình",
					"int → chữ cái",
					"bool → chiều cao"
				)

			)

		),

		Quiz({
			question: "Kiểu dữ liệu nào phù hợp để lưu ký tự 'A'?",
			choices: [
				"int",
				"float",
				"char",
				"double"
			],
			answer: 2,
			explanation: "char được dùng để lưu một ký tự."
		})
	),

	Section(
		"Ví dụ hoàn chỉnh",

		Code(
			"c",
			`#include <stdio.h>
#include <stdbool.h>

int main(void)
{
    int age = 18;
    float score = 8.5f;
    char grade = 'A';
    bool passed = true;

    printf("Age: %d\n", age);
    printf("Score: %.1f\n", score);
    printf("Grade: %c\n", grade);
    printf("Passed: %d\n", passed);

    return 0;
}`
		),

		Output(
			`Age: 18
Score: 8.5
Grade: A
Passed: 1`
		)
	),

	Section(
		"Lỗi thường gặp",

		Accordion(
			"Gán sai kiểu dữ liệu",

			Text("Ví dụ: lưu số thực vào biến char hoặc lưu ký tự vào biến int mà không hiểu quá trình chuyển đổi kiểu.")
		),

		Accordion(
			"Quên hậu tố f",

			Text("Khi khai báo float bằng hằng số thực, nên thêm hậu tố f, ví dụ: 3.14f.")
		),

		Accordion(
			"Nhầm giữa char và chuỗi",

			Text("char chỉ lưu một ký tự, còn chuỗi là một mảng ký tự.")
		)
	),

	Section(
		"Kiểm tra kiến thức",

		Quiz({
			question: "Kiểu dữ liệu nào có độ chính xác cao hơn float?",
			choices: [
				"char",
				"int",
				"double",
				"bool"
			],
			answer: 2,
			explanation: "double có độ chính xác cao hơn float."
		}),

		TrueFalse(
			"Kiểu char chỉ lưu được một ký tự.",
			true
		),

		FillBlank(
			"Kiểu dữ liệu dùng để lưu số nguyên là __________.",
			"int"
		)
	),

	Section(
		"Ghi nhớ nhanh",

		Flashcard(
			"int",
			"Lưu số nguyên."
		),

		Flashcard(
			"float",
			"Lưu số thực."
		),

		Flashcard(
			"double",
			"Lưu số thực có độ chính xác cao."
		),

		Flashcard(
			"char",
			"Lưu một ký tự."
		),

		Flashcard(
			"bool",
			"Lưu giá trị đúng hoặc sai."
		)
	),

	Exercise(
		"Khai báo các biến để lưu tên viết tắt của học sinh (một ký tự), tuổi, điểm trung bình và trạng thái đạt môn học. Gán giá trị phù hợp rồi in ra màn hình."
	),

	Challenge(
		"Xây dựng chương trình lưu thông tin của một sản phẩm gồm: số lượng, giá bán, mã phân loại (một ký tự) và trạng thái còn hàng hay hết hàng. Chọn kiểu dữ liệu phù hợp cho từng thông tin và giải thích lý do."
	),

	Summary(
		"Mỗi biến đều phải có một kiểu dữ liệu.",
		"int dùng cho số nguyên.",
		"float và double dùng cho số thực.",
		"char lưu một ký tự.",
		"bool lưu giá trị đúng hoặc sai.",
		"Chọn đúng kiểu dữ liệu giúp chương trình chính xác và tiết kiệm bộ nhớ."
	),

	Navigation()

);