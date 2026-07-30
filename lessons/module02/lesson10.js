Lesson(

	Hero({
		chapter: 2,
		lesson: 10,
		title: "Hằng số (Constants)",
		description: "Tìm hiểu hằng số trong C, sự khác nhau giữa biến và hằng số, cũng như cách sử dụng từ khóa const để bảo vệ dữ liệu.",
		duration: "35 phút",
		difficulty: "Beginner"
	}),

	Objectives(
		"Hiểu hằng số là gì.",
		"Phân biệt biến và hằng số.",
		"Biết cách khai báo hằng số bằng từ khóa const.",
		"Biết khi nào nên sử dụng hằng số."
	),

	Section(
		"Hằng số là gì?",

		Text("Hằng số là giá trị không thay đổi trong suốt quá trình chương trình thực thi. Khi một giá trị không cần thay đổi, nên sử dụng hằng số thay vì biến."),

		Definition(
			"Constant",
			"Giá trị không được phép thay đổi sau khi được khởi tạo."
		),

		Quiz({
			question: "Đặc điểm quan trọng nhất của hằng số là gì?",
			choices: [
				"Có thể thay đổi bất cứ lúc nào.",
				"Chỉ lưu được số nguyên.",
				"Không thể thay đổi giá trị sau khi khởi tạo.",
				"Luôn được nhập từ bàn phím."
			],
			answer: 2,
			explanation: "Hằng số không được phép thay đổi sau khi được khởi tạo."
		})
	),

	Section(
		"Khai báo hằng số",

		Text("Trong C, hằng số thường được khai báo bằng từ khóa const."),

		Code(
			"c",
			`const int DAYS_IN_WEEK = 7;
const float PI = 3.14159f;`
		),

		Remember("Từ khóa const phải đứng trước kiểu dữ liệu.")
	),

	Section(
		"Sử dụng hằng số",

		Text("Hằng số được sử dụng giống như biến khi đọc giá trị, nhưng không thể gán lại giá trị mới."),

		Code(
			"c",
			`const int MAX_SCORE = 100;

printf("%d\n", MAX_SCORE);`
		),

		Output(
			`100`
		),

		TrueFalse(
			"Có thể đọc giá trị của hằng số giống như biến.",
			true
		)
	),

	Section(
		"Điều gì xảy ra khi thay đổi hằng số?",

		Text("Nếu cố gắng gán giá trị mới cho một hằng số, trình biên dịch sẽ báo lỗi."),

		Code(
			"c",
			`const int DAYS = 7;

DAYS = 30;`
		),

		Warning("Không thể thay đổi giá trị của một hằng số sau khi đã khởi tạo."),

		FillBlank(
			"Từ khóa dùng để khai báo hằng số là __________.",
			"const"
		)
	),

	Section(
		"So sánh biến và hằng số",

		Table(
			["Đặc điểm", "Biến", "Hằng số"],
			[
				["Có thể thay đổi giá trị", "Có", "Không"],
				["Chiếm vùng nhớ", "Có", "Có"],
				["Khai báo", "int age;", "const int DAYS = 7;"],
				["Mục đích", "Lưu dữ liệu thay đổi", "Lưu dữ liệu cố định"]
			]
		),

		Quiz({
			question: "Trường hợp nào nên sử dụng hằng số?",
			choices: [
				"Tuổi của người dùng.",
				"Số lượng sản phẩm trong kho.",
				"Số ngày trong một tuần.",
				"Điểm thi của học sinh."
			],
			answer: 2,
			explanation: "Số ngày trong một tuần luôn là 7 nên phù hợp sử dụng hằng số."
		})
	),

	Section(
		"Khi nào nên dùng hằng số?",

		List(
			"Các giá trị toán học như PI.",
			"Số ngày trong tuần.",
			"Số tháng trong năm.",
			"Kích thước cố định của bộ đệm.",
			"Các giá trị không thay đổi trong chương trình."
		),

		Tip("Việc sử dụng hằng số giúp chương trình dễ đọc, dễ bảo trì và tránh sửa nhầm dữ liệu.")
	),

	Section(
		"Ví dụ hoàn chỉnh",

		Code(
			"c",
			`#include <stdio.h>

int main(void)
{
    const float PI = 3.14159f;
    float radius = 5.0f;

    float area = PI * radius * radius;

    printf("Area = %.2f\n", area);

    return 0;
}`
		),

		Output(
			`Area = 78.54`
		)
	),

	Section(
		"Lỗi thường gặp",

		Accordion(
			"Quên khởi tạo hằng số",

			Text("Nên khởi tạo giá trị ngay khi khai báo hằng số.")
		),

		Accordion(
			"Cố gắng thay đổi giá trị",

			Text("Mọi phép gán mới cho hằng số đều gây lỗi biên dịch.")
		),

		Accordion(
			"Dùng biến thay cho hằng số",

			Text("Nếu một giá trị không bao giờ thay đổi, hãy dùng const để chương trình rõ ràng hơn.")
		)
	),

	Section(
		"Kiểm tra kiến thức",

		Quiz({
			question: "Câu lệnh nào khai báo đúng một hằng số số thực?",
			choices: [
				"float const PI;",
				"const float PI = 3.14f;",
				"constant float PI = 3.14;",
				"float PI const = 3.14;"
			],
			answer: 1,
			explanation: "Đây là cú pháp khai báo đúng của hằng số."
		}),

		TrueFalse(
			"Có thể thay đổi giá trị của hằng số sau khi chương trình bắt đầu chạy.",
			false
		),

		FillBlank(
			"Hằng số giúp bảo vệ dữ liệu __________.",
			"không thay đổi"
		)
	),

	Section(
		"Ghi nhớ nhanh",

		Flashcard(
			"const",
			"Từ khóa dùng để khai báo hằng số."
		),

		Flashcard(
			"Variable",
			"Có thể thay đổi giá trị."
		),

		Flashcard(
			"Constant",
			"Không thể thay đổi giá trị sau khi khởi tạo."
		)
	),

	Exercise(
		"Khai báo các hằng số PI, DAYS_IN_WEEK và MONTHS_IN_YEAR. In giá trị của chúng ra màn hình."
	),

	Challenge(
		"Viết chương trình tính chu vi và diện tích hình tròn sử dụng hằng số PI và bán kính do người dùng nhập từ bàn phím."
	),

	Summary(
		"Hằng số lưu trữ dữ liệu không thay đổi.",
		"Sử dụng từ khóa const để khai báo hằng số.",
		"Hằng số không thể được gán giá trị mới.",
		"Hãy sử dụng hằng số cho các giá trị cố định trong chương trình."
	),

	Navigation()

);