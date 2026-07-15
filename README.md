# Programming C

A lightweight Static Learning Framework built with **HTML**, **CSS**, and **Vanilla JavaScript**.

The framework is designed for writing programming courses with a clean and consistent JavaScript DSL.

---

# Features

* No build tools
* No frameworks
* No dependencies
* Offline ready
* Responsive
* Dark mode
* Clean architecture
* Component-based lesson DSL
* Easy to extend
* AI-friendly lesson format

---

# Project Structure

```text
Programming-C/

├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── framework.js
│   ├── renderer.js
│   └── app.js
│
├── lessons/
│   ├── lesson01.js
│   ├── lesson02.js
│   └── ...
│
├── snippets/
│
├── examples/
│
├── exports/
│
└── assets/
    ├── fonts/
    ├── icons/
    └── images/
```

---

# Design Goals

* Minimal
* Elegant
* Consistent
* Readable
* Fast
* Offline
* Maintainable

---

# Lesson DSL

Every lesson is written with JavaScript instead of HTML.

Example:

```javascript
Lesson(

    Hero({

        chapter: 1,
        lesson: 1,
        title: "Giới thiệu ngôn ngữ C"

    }),

    Objectives(

        "Biết ngôn ngữ C là gì",
        "Viết chương trình đầu tiên"

    ),

    Section(

        "Khái niệm",

        Text(`
Ngôn ngữ C là ngôn ngữ lập trình bậc trung.
`),

        Note(`
Được phát triển bởi Dennis Ritchie.
`)

    ),

    Summary(

        "Biết lịch sử",
        "Biết cấu trúc chương trình"

    )

);
```

---

# Core Principles

## Declarative

Lessons describe content.

The framework renders everything.

---

## Component Driven

Every UI element is a component.

Example:

* Hero
* Section
* Text
* Note
* Code
* Quiz
* Summary

---

## Immutable

Components never manipulate the DOM.

They only return data objects.

---

## Single Renderer

Only the renderer creates HTML elements.

---

## Consistent UI

Every lesson shares the same layout.

---

# Writing Lessons

Create a new file inside:

```text
lessons/
```

Example:

```text
lesson03.js
```

Write the lesson using the provided DSL.

No HTML is required.

---

# Styling

All styles are located in:

```text
css/style.css
```

Do not create lesson-specific styles.

---

# Assets

Images:

```text
assets/images/
```

Icons:

```text
assets/icons/
```

Fonts:

```text
assets/fonts/
```

---

# Code Snippets

Reusable C source files:

```text
snippets/
```

---

# Example Programs

Small demo programs:

```text
examples/
```

---

# Export Folder

Generated HTML or PDF files:

```text
exports/
```

---

# Browser Support

Latest versions of:

* Chrome
* Edge
* Firefox
* Safari

---

# License

Personal educational project.
