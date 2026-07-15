Lesson(

    Hero({
        chapter: 0,
        lesson: 1,
        title: "Giới thiệu khóa học Lập trình C",
        description: "Giới thiệu khóa học, mục tiêu, phương pháp học và lộ trình để xây dựng nền tảng lập trình vững chắc trước khi học Đại học ngành Công nghệ thông tin.",
        duration: "15 phút",
        difficulty: "Beginner"
    }),

    Objectives(
        "Hiểu mục tiêu của khóa học.",
        "Biết đối tượng phù hợp với khóa học.",
        "Hiểu phương pháp học hiệu quả.",
        "Nắm được cấu trúc của toàn bộ khóa học.",
        "Biết những kiến thức sẽ đạt được sau khi hoàn thành."
    ),

    Section(
        "Giới thiệu",

        Text("Chào mừng bạn đến với khóa học Lập trình C. Đây là khóa học được xây dựng dành cho người mới bắt đầu và hướng đến việc hình thành nền tảng lập trình vững chắc trước khi bước vào chương trình Đại học ngành Công nghệ thông tin."),

        Text("Khóa học không chỉ dạy cú pháp của ngôn ngữ C mà còn tập trung phát triển tư duy phân tích, tư duy giải quyết vấn đề và phương pháp xây dựng chương trình đúng ngay từ đầu."),

        Info("Bạn không cần có bất kỳ kiến thức lập trình nào trước khi bắt đầu.")
    ),

    Section(
        "Đối tượng của khóa học",

        List(
            "Học sinh chuẩn bị vào Đại học.",
            "Sinh viên năm nhất ngành Công nghệ thông tin.",
            "Người mới bắt đầu học lập trình.",
            "Người muốn xây dựng nền tảng trước khi học các ngôn ngữ khác."
        ),

        Tip("Nếu bạn học nghiêm túc toàn bộ khóa học này, việc tiếp cận C++, Java, C#, Python hoặc JavaScript sau này sẽ dễ dàng hơn rất nhiều.")
    ),

    Section(
        "Mục tiêu",

        Text("Sau khi hoàn thành khóa học, bạn sẽ có thể:"),

        OrderedList(
            "Đọc và hiểu chương trình C.",
            "Viết chương trình từ đơn giản đến trung bình.",
            "Phân tích bài toán trước khi lập trình.",
            "Sử dụng thành thạo các cấu trúc điều khiển.",
            "Viết hàm và chia chương trình thành nhiều module.",
            "Làm việc với mảng, chuỗi, con trỏ và cấu trúc.",
            "Đọc và ghi dữ liệu từ tệp.",
            "Hoàn thành các dự án C quy mô nhỏ."
        )
    ),

    Section(
        "Phương pháp học",

        Definition(
            "Active Learning",
            "Không chỉ đọc và xem ví dụ mà phải trực tiếp gõ mã nguồn, chạy chương trình, sửa lỗi và tự giải bài tập."
        ),

        Text("Mỗi bài học trong khóa học đều được xây dựng theo cùng một cấu trúc nhằm giúp bạn học tập một cách hệ thống."),

        Table(
            ["Bước", "Hoạt động"],
            [
                ["1", "Đọc lý thuyết"],
                ["2", "Quan sát ví dụ"],
                ["3", "Gõ lại mã nguồn"],
                ["4", "Chạy chương trình"],
                ["5", "Thay đổi chương trình"],
                ["6", "Hoàn thành bài tập"],
                ["7", "Làm thử thách"]
            ]
        ),

        Remember("Lập trình là kỹ năng. Chỉ đọc lý thuyết sẽ không giúp bạn trở thành lập trình viên.")
    ),

    Section(
        "Cấu trúc khóa học",

        Text("Khóa học gồm 18 module với 100 bài học được sắp xếp từ cơ bản đến nâng cao."),

        Table(
            ["Module", "Nội dung"],
            [
                ["00", "Introduction"],
                ["01", "First Program"],
                ["02", "Variables and Data Types"],
                ["03", "Input / Output"],
                ["04", "Operators"],
                ["05", "Selection"],
                ["06", "Loops"],
                ["07", "Functions"],
                ["08", "Arrays"],
                ["09", "Strings"],
                ["10", "Pointers"],
                ["11", "Functions with Pointers"],
                ["12", "Dynamic Memory"],
                ["13", "Structures"],
                ["14", "Files"],
                ["15", "Modular Programming"],
                ["16", "Algorithms"],
                ["17", "Mini Projects"]
            ]
        )
    ),

    Section(
        "Lời khuyên",

        Quote(
            "Programs must be written for people to read, and only incidentally for machines to execute.",
            "Harold Abelson"
        ),

        Example(
            "Một thói quen tốt",

            Text("Sau mỗi bài học, hãy tự viết lại toàn bộ ví dụ mà không nhìn tài liệu. Sau đó thử thay đổi dữ liệu đầu vào hoặc thêm chức năng nhỏ để kiểm tra xem bạn đã thực sự hiểu chương trình hay chưa.")
        ),

        Warning("Đừng cố gắng học thật nhanh. Hãy học thật chắc từng bài.")
    ),

    Section(
        "Bạn đã sẵn sàng chưa?",

        Text("Trong bài học tiếp theo, chúng ta sẽ tìm hiểu lập trình là gì, chương trình máy tính hoạt động như thế nào và vì sao ngôn ngữ C vẫn được sử dụng rộng rãi sau hơn 50 năm."),

        Exercise("Tạo một thư mục riêng cho khóa học trên máy tính của bạn. Đây sẽ là nơi lưu toàn bộ mã nguồn và bài tập trong suốt quá trình học."),

        Challenge("Hãy tìm hiểu trước khái niệm 'Programming Language' và thử kể tên ít nhất 5 ngôn ngữ lập trình mà bạn đã từng nghe đến.")
    ),

    Summary(
        "Hiểu mục tiêu của khóa học.",
        "Biết đối tượng phù hợp.",
        "Biết phương pháp học hiệu quả.",
        "Nắm được cấu trúc gồm 18 module và 100 bài học.",
        "Sẵn sàng bắt đầu học lập trình C."
    ),

    Navigation()

);
