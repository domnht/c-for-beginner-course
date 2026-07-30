Lesson(

	Hero({
		chapter: 2,
		lesson: 13,
		title: "Kiểu số thực (float và double)",
		description: "Tìm hiểu cách lưu trữ số thực trong C, sự khác nhau giữa float và double, cũng như những lưu ý khi tính toán với số thực.",
		duration: "40 phút",
		difficulty: "Beginner"
	}),

	Objectives(
		"Hiểu khi nào cần sử dụng số thực.",
		"Biết sự khác nhau giữa float và double.",
		"Biết khai báo và sử dụng biến số thực.",
		"Hiểu các sai số thường gặp khi tính toán với số thực."
	),

	Section(
		"Số thực là gì?",

		Text("Số thực là những số có phần thập phân, ví dụ 3.14, 9.5 hoặc -0.25. Trong C, hai kiểu dữ liệu số thực được sử dụng phổ biến là float và double."),

		Definition(
			"Floating-point Number",
			"Số có thể chứa phần thập phân."
		),

		Quiz({
			question: "Giá trị nào phù hợp với kiểu số thực?",
			choices: [
				"25",
				"3.14",
				"'A'",
				"true"
			],
			answer: 1,
			explanation: "3.14 là một số thực."
		})
	),

	Section(
		"Kiểu float",

		Text("Kiểu float thường sử dụng 4 byte bộ nhớ và phù hợp với các phép tính không yêu cầu độ chính xác quá cao."),

		Code(
			"c",
			`float temperature = 36.5f;
float score = 8.75f;`
		),

		Remember("Khi viết hằng số float, nên thêm hậu tố f ở cuối.")
	),

	Section(
		"Kiểu double",

		Text("Kiểu double thường sử dụng 8 byte bộ nhớ và có độ chính xác cao hơn float."),

		Code(
			"c",
			`double pi = 3.141592653589793;
double distance = 1250.456789;`
		),

		Quiz({
			question: "Kiểu dữ liệu nào có độ chính xác cao hơn?",
			choices: [
				"char",
				"int",
				"float",
				"double"
			],
			answer: 3,
			explanation: "double có độ chính xác cao hơn float."
		})
	),

	Section(
		"So sánh float và double",

		Table(
			["Đặc điểm", "float", "double"],
			[
				["Kích thước (thường gặp)", "4 byte", "8 byte"],
				["Độ chính xác", "Thấp hơn", "Cao hơn"],
				["Sử dụng", "Thông thường", "Tính toán chính xác hơn"]
			]
		),

		Flashcard(
			"float",
			"4 byte (thường gặp), độ chính xác vừa phải."
		),

		Flashcard(
			"double",
			"8 byte (thường gặp), độ chính xác cao hơn."
		)
	),

	Section(
		"In số thực",

		Text("Để in số thực bằng printf(), sử dụng các định dạng như %f hoặc %.nf để quy định số chữ số sau dấu thập phân."),

		Code(
			"c",
			`float score = 8.75f;

printf("%f\n", score);
printf("%.2f\n", score);
printf("%.1f\n", score);`
		),

		Output(
			`8.750000
8.75
8.8`
		),

		TrueFalse(
			"%.2f sẽ hiển thị hai chữ số sau dấu thập phân.",
			true
		)
	),

	Section(
		"Phép chia số thực",

		Text("Nếu ít nhất một toán hạng là số thực, kết quả của phép chia cũng sẽ là số thực."),

		Columns(

			Column(

				Text("Chia số nguyên"),

				Code(
					"c",
					`printf("%d", 7 / 2);`
				),

				Output("3")

			),

			Column(

				Text("Chia số thực"),

				Code(
					"c",
					`printf("%.1f", 7 / 2.0);`
				),

				Output("3.5")

			)

		),

		Tip("Chỉ cần một toán hạng là float hoặc double thì phép chia sẽ cho kết quả số thực.")
	),

	Section(
		"Sai số số thực",

		Text("Máy tính lưu số thực theo dạng nhị phân nên không phải mọi số thập phân đều được biểu diễn chính xác tuyệt đối."),

		Code(
			"c",
			`float a = 0.1f;
float b = 0.2f;

printf("%.20f\n", a + b);`
		),

		Info("Đừng so sánh trực tiếp hai số thực bằng toán tử == trong các bài toán yêu cầu độ chính xác cao.")
	),

	Section(
		"Ví dụ hoàn chỉnh",

		Code(
			"c",
			`#include <stdio.h>

int main(void)
{
    float radius = 5.0f;
    const float PI = 3.14159f;

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
			"Quên hậu tố f",

			Text("3.14 mặc định là double. Khi làm việc với float, nên viết 3.14f.")
		),

		Accordion(
			"Nhầm giữa chia số nguyên và chia số thực",

			Text("7 / 2 cho kết quả 3, còn 7 / 2.0 cho kết quả 3.5.")
		),

		Accordion(
			"So sánh số thực bằng ==",

			Text("Do sai số làm tròn, hai số thực tưởng như bằng nhau có thể khác nhau một lượng rất nhỏ.")
		),

		Warning("Sai số số thực là đặc điểm của cách lưu trữ dữ liệu, không phải lỗi của ngôn ngữ C.")
	),

	Section(
		"Kiểm tra kiến thức",

		Quiz({
			question: "Kết quả của 9 / 2.0 là gì?",
			choices: [
				"4",
				"4.0",
				"4.5",
				"5"
			],
			answer: 2,
			explanation: "Có một toán hạng là số thực nên kết quả là 4.5."
		}),

		Quiz({
			question: "Định dạng nào in số thực với hai chữ số sau dấu thập phân?",
			choices: [
				"%d",
				"%c",
				"%.2f",
				"%s"
			],
			answer: 2,
			explanation: "%.2f in số thực với hai chữ số sau dấu thập phân."
		}),

		TrueFalse(
			"double thường có độ chính xác cao hơn float.",
			true
		),

		FillBlank(
			"Kiểu số thực có độ chính xác cao hơn float là __________.",
			"double"
		)
	),

	Section(
		"Ghi nhớ nhanh",

		Flashcard(
			"float",
			"Kiểu số thực thông dụng."
		),

		Flashcard(
			"double",
			"Kiểu số thực có độ chính xác cao hơn."
		),

		Flashcard(
			"%f",
			"Định dạng dùng để in số thực."
		),

		Flashcard(
			"%.2f",
			"In hai chữ số sau dấu thập phân."
		)
	),

	Exercise(
		"Khai báo các biến lưu chiều dài và chiều rộng của một hình chữ nhật bằng kiểu float. Tính chu vi và diện tích rồi in kết quả với hai chữ số sau dấu thập phân."
	),

	Challenge(
		"Viết chương trình nhập bán kính của một hình tròn (kiểu double), tính chu vi và diện tích, sau đó in kết quả với ba chữ số sau dấu thập phân."
	),

	Summary(
		"float và double dùng để lưu số thực.",
		"double có độ chính xác cao hơn float.",
		"Sử dụng %f hoặc %.nf để in số thực.",
		"Phép chia có số thực sẽ cho kết quả số thực.",
		"Số thực có thể xuất hiện sai số khi lưu trữ và tính toán."
	),

	Navigation()

);