Lesson(

	Hero({
		chapter: 0,
		lesson: 2,
		title: "Lập trình là gì?",
		description: "Tìm hiểu khái niệm chương trình, ngôn ngữ lập trình, trình biên dịch và quy trình máy tính thực thi một chương trình.",
		duration: "20 phút",
		difficulty: "Beginner"
	}),

	Objectives(
		"Hiểu khái niệm lập trình.",
		"Phân biệt chương trình và ngôn ngữ lập trình.",
		"Hiểu vai trò của trình biên dịch.",
		"Nắm được quy trình tạo ra một chương trình thực thi."
	),

	Section(
		"Lập trình là gì?",

		Text("Lập trình là quá trình thiết kế thuật toán và viết các chỉ dẫn để máy tính thực hiện một công việc cụ thể."),

		Definition(
			"Program",
			"Một tập hợp các chỉ dẫn được viết theo một ngôn ngữ lập trình để máy tính thực hiện."
		),

		Note("Máy tính không tự hiểu ý tưởng của con người. Mọi thao tác đều phải được mô tả thành các chỉ dẫn rõ ràng.")
	),

	Section(
		"Ngôn ngữ lập trình",

		Text("Con người và máy tính sử dụng những ngôn ngữ hoàn toàn khác nhau. Ngôn ngữ lập trình đóng vai trò là cầu nối giữa hai bên."),

		Table(
			["Ngôn ngữ", "Đối tượng sử dụng"],
			[
				["Ngôn ngữ tự nhiên", "Con người"],
				["Ngôn ngữ lập trình", "Con người và trình biên dịch"],
				["Ngôn ngữ máy", "CPU"]
			]
		),

		Tip("C là một ngôn ngữ lập trình bậc cao nhưng vẫn rất gần với phần cứng.")
	),

	Section(
		"Tại sao cần ngôn ngữ lập trình?",

		Text("Nếu chỉ sử dụng ngôn ngữ máy, lập trình viên phải làm việc trực tiếp với các dãy số nhị phân rất khó đọc và khó bảo trì."),

		Example(
			"So sánh",

			List(
				"Ngôn ngữ máy rất nhanh nhưng khó viết.",
				"Ngôn ngữ lập trình dễ đọc, dễ sửa và dễ bảo trì.",
				"Trình biên dịch sẽ chuyển đổi chương trình sang ngôn ngữ máy."
			)
		)
	),

	Section(
		"Quy trình phát triển chương trình",

		OrderedList(
			"Phân tích bài toán.",
			"Thiết kế thuật toán.",
			"Viết mã nguồn.",
			"Biên dịch.",
			"Chạy chương trình.",
			"Kiểm thử và sửa lỗi."
		),

		Remember("Viết mã nguồn chỉ là một bước trong toàn bộ quá trình phát triển phần mềm.")
	),

	Section(
		"Mã nguồn và chương trình thực thi",

		Definition(
			"Source Code",
			"Tệp văn bản chứa mã nguồn do lập trình viên viết."
		),

		Definition(
			"Executable",
			"Tệp chương trình đã được biên dịch và có thể chạy trên hệ điều hành."
		),

		Table(
			["Thành phần", "Ý nghĩa"],
			[
				["Source Code", ".c"],
				["Object File", ".o hoặc .obj"],
				["Executable", ".exe hoặc chương trình thực thi trên Linux/macOS"]
			]
		)
	),

	Section(
		"Trình biên dịch",

		Text("Trình biên dịch (Compiler) là phần mềm chuyển đổi mã nguồn sang mã máy để CPU có thể thực thi."),

		Quote(
			"Compile once, execute many times."
		),

		Info("Trong khóa học này chúng ta sẽ sử dụng GCC làm trình biên dịch.")
	),

	Section(
		"Ví dụ",

		Text("Một lập trình viên viết chương trình bằng ngôn ngữ C."),

		Code(
			"text",
			`Source Code (.c)
        │
        ▼
 Compiler
        │
        ▼
 Object File
        │
        ▼
   Linker
        │
        ▼
 Executable`
		),

		Output(
			"Người dùng chạy chương trình thực thi trên máy tính."
		)
	),

	Section(
		"Kiến thức cần nhớ",

		List(
			"Chương trình là tập hợp các chỉ dẫn.",
			"Ngôn ngữ lập trình giúp con người giao tiếp với máy tính.",
			"CPU chỉ thực thi ngôn ngữ máy.",
			"Compiler chuyển mã nguồn thành chương trình thực thi."
		)
	),

	Exercise(
		"Tìm hiểu và kể tên ít nhất 10 ngôn ngữ lập trình mà bạn biết."
	),

	Challenge(
		"Tìm hiểu sự khác nhau giữa Compiler và Interpreter."
	),

	Summary(
		"Hiểu khái niệm lập trình.",
		"Biết vai trò của ngôn ngữ lập trình.",
		"Hiểu chức năng của Compiler.",
		"Nắm được quy trình từ mã nguồn đến chương trình thực thi."
	),

	Navigation()

);