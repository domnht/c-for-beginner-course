Lesson(

	Hero({
		chapter: 2,
		lesson: 12,
		title: "Kiểu số nguyên (int)",
		description: "Tìm hiểu kiểu dữ liệu int, phạm vi giá trị, các phép toán cơ bản và những lỗi thường gặp khi làm việc với số nguyên.",
		duration: "40 phút",
		difficulty: "Beginner"
	}),

	Objectives(
		"Hiểu vai trò của kiểu int.",
		"Biết cách khai báo và sử dụng biến int.",
		"Thực hiện các phép toán với số nguyên.",
		"Nhận biết hiện tượng tràn số nguyên."
	),

	Section(
		"Kiểu int là gì?",

		Text("Kiểu int được sử dụng để lưu trữ các số nguyên, tức là những số không có phần thập phân. Đây là kiểu dữ liệu được sử dụng nhiều nhất trong lập trình C."),

		Definition(
			"int",
			"Kiểu dữ liệu dùng để lưu các giá trị số nguyên."
		),

		Quiz({
			question: "Giá trị nào có thể lưu trong biến int?",
			choices: [
				"25",
				"3.14",
				"'A'",
				"\"Hello\""
			],
			answer: 0,
			explanation: "int chỉ dùng để lưu số nguyên."
		})
	),

	Section(
		"Khai báo biến int",

		Text("Biến số nguyên được khai báo bằng từ khóa int."),

		Code(
			"c",
			`int age;
int year;
int score;`
		),

		Remember("Mỗi biến chỉ cần khai báo một lần trong cùng phạm vi.")
	),

	Section(
		"Khởi tạo giá trị",

		Text("Bạn có thể gán giá trị ngay khi khai báo hoặc gán sau đó."),

		Code(
			"c",
			`int age = 18;
int score = 95;

score = 100;`
		),

		TrueFalse(
			"Biến int có thể thay đổi giá trị trong khi chương trình chạy.",
			true
		)
	),

	Section(
		"Các phép toán với số nguyên",

		Text("Biến int hỗ trợ đầy đủ các phép toán số học."),

		Code(
			"c",
			`int a = 15;
int b = 4;

printf("%d\n", a + b);
printf("%d\n", a - b);
printf("%d\n", a * b);
printf("%d\n", a / b);
printf("%d\n", a % b);`
		),

		Output(
			`19
11
60
3
3`
		),

		Quiz({
			question: "Kết quả của 15 / 4 với kiểu int là gì?",
			choices: [
				"3",
				"3.5",
				"4",
				"15"
			],
			answer: 0,
			explanation: "Phép chia giữa hai số nguyên sẽ bỏ phần thập phân."
		})
	),

	Section(
		"Phép chia số nguyên",

		Text("Nếu cả hai toán hạng đều là int thì kết quả cũng là số nguyên."),

		Columns(

			Column(

				Text("Ví dụ"),

				Code(
					"c",
					`int result = 7 / 2;

printf("%d", result);`
				),

				Output("3")

			),

			Column(

				Text("Muốn có kết quả thập phân"),

				Code(
					"c",
					`float result = 7 / 2.0f;

printf("%.1f", result);`
				),

				Output("3.5")

			)

		),

		Tip("Đây là lỗi rất phổ biến đối với người mới học C.")
	),

	Section(
		"Giới hạn của kiểu int",

		Text("Biến int chỉ lưu được các giá trị trong một phạm vi nhất định. Nếu vượt quá giới hạn này, hiện tượng tràn số (Integer Overflow) có thể xảy ra."),

		Info("Trên hầu hết các hệ thống hiện nay, int có kích thước 4 byte, nhưng điều này phụ thuộc vào trình biên dịch và hệ điều hành."),

		Flashcard(
			"Integer Overflow",
			"Kết quả vượt quá phạm vi lưu trữ của kiểu int."
		)
	),

	Section(
		"Ví dụ hoàn chỉnh",

		Code(
			"c",
			`#include <stdio.h>

int main(void)
{
    int width = 8;
    int height = 5;

    int area = width * height;

    printf("Area = %d\n", area);

    return 0;
}`
		),

		Output(
			`Area = 40`
		)
	),

	Section(
		"Lỗi thường gặp",

		Accordion(
			"Chia hai số nguyên",

			Text("Nhiều người mong đợi kết quả là số thực, nhưng C chỉ trả về phần nguyên nếu cả hai toán hạng đều là int.")
		),

		Accordion(
			"Chia cho 0",

			Text("Không được chia một số nguyên cho 0. Chương trình có thể bị lỗi hoặc dừng bất thường.")
		),

		Accordion(
			"Tràn số nguyên",

			Text("Khi kết quả vượt quá phạm vi của int, giá trị nhận được sẽ không còn chính xác.")
		),

		Warning("Luôn kiểm tra dữ liệu đầu vào trước khi thực hiện phép chia.")
	),

	Section(
		"Kiểm tra kiến thức",

		Quiz({
			question: "Toán tử nào dùng để lấy phần dư của phép chia số nguyên?",
			choices: [
				"/",
				"%",
				"*",
				"="
			],
			answer: 1,
			explanation: "Toán tử % trả về phần dư của phép chia số nguyên."
		}),

		Quiz({
			question: "Kết quả của 20 / 6 là bao nhiêu nếu cả hai toán hạng đều là int?",
			choices: [
				"3",
				"3.3",
				"4",
				"2"
			],
			answer: 0,
			explanation: "Phần thập phân sẽ bị loại bỏ."
		}),

		TrueFalse(
			"7 / 2 cho kết quả 3.5 khi cả hai toán hạng đều là int.",
			false
		),

		FillBlank(
			"Toán tử lấy phần dư là __________.",
			"%"
		)
	),

	Section(
		"Ghi nhớ nhanh",

		Flashcard(
			"int",
			"Lưu số nguyên."
		),

		Flashcard(
			"/",
			"Phép chia số nguyên bỏ phần thập phân nếu cả hai toán hạng đều là int."
		),

		Flashcard(
			"%",
			"Trả về phần dư của phép chia."
		)
	),

	Exercise(
		"Viết chương trình nhập chiều dài và chiều rộng của hình chữ nhật, sau đó tính chu vi và diện tích bằng kiểu int."
	),

	Challenge(
		"Viết chương trình nhập vào tổng số giây và chuyển đổi thành số giờ, phút và giây còn lại. Chỉ sử dụng kiểu int và các phép chia, lấy phần dư."
	),

	Summary(
		"int dùng để lưu số nguyên.",
		"Phép chia số nguyên không giữ phần thập phân.",
		"Toán tử % dùng để lấy phần dư.",
		"int có giới hạn về phạm vi giá trị.",
		"Cần cẩn thận với phép chia cho 0 và hiện tượng tràn số."
	),

	Navigation()

);