Lesson(

	Hero({
		chapter: 1,
		lesson: 6,
		title: "Chú thích (Comments)",
		description: "Tìm hiểu cách sử dụng chú thích để giải thích mã nguồn và nâng cao khả năng đọc hiểu chương trình.",
		duration: "25 phút",
		difficulty: "Beginner"
	}),

	Objectives(
		"Hiểu mục đích của comment.",
		"Biết hai loại comment trong C.",
		"Biết khi nào nên và không nên dùng comment.",
		"Viết mã nguồn có comment hợp lý."
	),

	Section(
		"Comment là gì?",

		Text("Comment là phần văn bản được thêm vào mã nguồn để giải thích chương trình. Trình biên dịch sẽ bỏ qua toàn bộ nội dung comment."),

		Definition(
			"Comment",
			"Đoạn văn bản giúp con người đọc và hiểu mã nguồn, không ảnh hưởng đến việc thực thi chương trình."
		),

		Info("Comment chỉ dành cho lập trình viên, không dành cho máy tính.")
	),

	Section(
		"Comment một dòng",

		Text("Comment một dòng bắt đầu bằng //. Nội dung phía sau // sẽ được bỏ qua đến hết dòng."),

		Code(
			"c",
			`// This is a comment
printf("Hello, World!\\n");`
		),

		Quiz({
			question: "Ký hiệu nào dùng để tạo comment một dòng trong C?",
			choices: [
				"#",
				"//",
				"/*",
				"--"
			],
			answer: 1,
			explanation: "// được sử dụng để tạo comment một dòng."
		})
	),

	Section(
		"Comment nhiều dòng",

		Text("Comment nhiều dòng bắt đầu bằng /* và kết thúc bằng */."),

		Code(
			"c",
			`/*
This is
a multi-line
comment.
*/
printf("Programming in C\\n");`
		),

		TrueFalse(
			"Nội dung bên trong /* ... */ sẽ được trình biên dịch thực thi.",
			false
		),

		FillBlank(
			"Comment nhiều dòng bắt đầu bằng __________.",
			"/*"
		)
	),

	Section(
		"Khi nào nên dùng comment?",

		List(
			"Giải thích thuật toán phức tạp.",
			"Mô tả mục đích của một hàm.",
			"Ghi chú các giả định quan trọng.",
			"Đánh dấu phần cần cải thiện."
		),

		Tip("Comment nên giải thích 'tại sao', không nên giải thích những điều đã quá hiển nhiên.")
	),

	Section(
		"Khi nào không nên dùng comment?",

		Example(
			"Comment không cần thiết",

			Code(
				"c",
				`// Increase i by 1
i++;`
			)
		),

		Example(
			"Code tự mô tả",

			Code(
				"c",
				`studentCount++;`
			)
		),

		Warning("Nếu tên biến và tên hàm đủ rõ ràng thì thường không cần thêm comment.")
	),

	Section(
		"Ví dụ",

		Code(
			"c",
			`#include <stdio.h>

int main(void)
{
    // Display a greeting
    printf("Hello, World!\\n");

    return 0;
}`
		),

		Output(
			`Hello, World!`
		)
	),

	Section(
		"Flashcards",

		Flashcard(
			"//",
			"Comment một dòng."
		),

		Flashcard(
			"/* ... */",
			"Comment nhiều dòng."
		),

		Flashcard(
			"Compiler",
			"Không biên dịch nội dung comment."
		)
	),

	Section(
		"Kiểm tra nhanh",

		Quiz({
			question: "Mục đích chính của comment là gì?",
			choices: [
				"Làm chương trình chạy nhanh hơn.",
				"Giúp lập trình viên hiểu mã nguồn.",
				"Giảm dung lượng chương trình.",
				"Thay thế biến."
			],
			answer: 1,
			explanation: "Comment giúp con người đọc và bảo trì mã nguồn."
		}),

		TrueFalse(
			"Comment có thể thay đổi kết quả thực thi của chương trình.",
			false
		)
	),

	Exercise(
		"Thêm comment vào chương trình Hello World để giải thích từng phần của chương trình."
	),

	Challenge(
		"Viết lại chương trình Hello World với comment rõ ràng. Sau đó xóa toàn bộ comment và kiểm tra xem kết quả chạy có thay đổi hay không."
	),

	Summary(
		"Comment không được thực thi.",
		"C có hai loại comment.",
		"Comment giúp mã nguồn dễ hiểu hơn.",
		"Chỉ comment khi thực sự cần thiết."
	),

	Navigation()

);