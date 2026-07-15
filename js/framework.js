"use strict";

function createComponent(t, p = {}, c = []) {
    return {
        type: t,
        version: 1,
        props: p,
        children: c.flat().filter(Boolean)
    }
}
const LessonStore = (() => {
    let l = null;
    return {
        set: t => l = t,
        get: () => l
    }
})();

function Lesson(...c) {
    const l = createComponent("lesson", {}, c);
    return LessonStore.set(l), l
}

function Hero(p = {}) {
    return createComponent("hero", p)
}

function Objectives(...i) {
    return createComponent("objectives", {
        items: i
    })
}

function Section(t, ...c) {
    return createComponent("section", {
        title: t
    }, c)
}

function Text(c) {
    return createComponent("text", {
        content: c
    })
}

function Paragraph(c) {
    return createComponent("text", {
        content: c
    })
}

function List(...i) {
    return createComponent("list", {
        items: i.flat()
    })
}

function OrderedList(...i) {
    return createComponent("ordered-list", {
        items: i.flat()
    })
}

function Table(h = [], r = []) {
    return createComponent("table", {
        headers: h,
        rows: r
    })
}

function Image(s, a = "", c = "") {
    return createComponent("image", {
        src: s,
        alt: a,
        caption: c
    })
}

function Divider() {
    return createComponent("divider")
}

function Note(c) {
    return createComponent("note", {
        content: c
    })
}

function Tip(c) {
    return createComponent("tip", {
        content: c
    })
}

function Warning(c) {
    return createComponent("warning", {
        content: c
    })
}

function Info(c) {
    return createComponent("info", {
        content: c
    })
}

function Definition(t, d) {
    return createComponent("definition", {
        term: t,
        description: d
    })
}

function Example(t, ...c) {
    return createComponent("example", {
        title: t
    }, c)
}

function Remember(c) {
    return createComponent("remember", {
        content: c
    })
}

function Quote(c, a = "") {
    return createComponent("quote", {
        content: c,
        author: a
    })
}

function Code(l, c) {
    return createComponent("code", {
        language: l,
        content: c
    })
}

function Output(c) {
    return createComponent("output", {
        content: c
    })
}

function Quiz(p) {
    return createComponent("quiz", p)
}

function TrueFalse(q, a) {
    return createComponent("true-false", {
        question: q,
        answer: a
    })
}

function FillBlank(q, a) {
    return createComponent("fill-blank", {
        question: q,
        answer: a
    })
}

function Accordion(t, ...c) {
    return createComponent("accordion", {
        title: t
    }, c)
}

function Exercise(c) {
    return createComponent("exercise", {
        content: c
    })
}

function Challenge(c) {
    return createComponent("challenge", {
        content: c
    })
}

function Summary(...i) {
    return createComponent("summary", {
        items: i.flat()
    })
}

function Navigation() {
    return createComponent("navigation")
}

function Column(...c) {
    return createComponent("column", {}, c)
}

function Columns(...c) {
    return createComponent("columns", {}, c)
}

function Tabs(...c) {
    return createComponent("tabs", {}, c)
}

function Tab(t, ...c) {
    return createComponent("tab", {
        title: t
    }, c)
}

function Flashcard(f, b) {
    return createComponent("flashcard", {
        front: f,
        back: b
    })
}

function getLesson() {
    return LessonStore.get()
}
