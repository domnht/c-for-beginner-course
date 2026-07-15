"use strict";

const App = {
	root: null,
	lesson: null,
	module: null,

	init() {
		this.root = document.getElementById("app");
		this.loadTheme();
		this.loadLesson();
		window.addEventListener("hashchange", () => this.highlightSidebar());
		window.addEventListener("scroll", () => this.highlightSidebar(), { passive: true });
	},

	loadLesson() {
		const lessonId = this.getLessonId();
		const info = this.findLesson(lessonId);

		if (!info) {
			renderLesson(this.root, null);
			return;
		}

		this.lesson = info.lesson;
		this.module = info.module;

		const script = document.createElement("script");
		script.src = `lessons/${info.module.id}/${info.lesson.id}.js`;

		script.onload = () => {
			const lesson = getLesson();
			renderLesson(this.root, lesson);
			this.bind();
			this.restoreScroll();
		};

		script.onerror = () => renderLesson(this.root, null);

		document.body.append(script);
	},

	findLesson(id) {
		for (const module of Course.modules) {
			for (const lesson of module.lessons) {
				if (lesson.id === id) {
					return {
						module,
						lesson
					};
				}
			}
		}
		return null;
	},

	getLessonId() {
		const p = new URLSearchParams(location.search);
		return p.get("lesson") ?? Course.modules[0].lessons[0].id;
	},

	bind() {
		this.bindSidebar();
		this.bindTheme();
		this.bindKeyboard();
		this.highlightSidebar();
	},

	bindSidebar() {
		qsa(".sidebar a").forEach(a => {
			a.onclick = () => this.closeSidebar();
		});
	},

	highlightSidebar() {
		const sections = qsa(".section");
		const links = qsa(".sidebar a");

		if (!sections.length) return;

		let current = sections[0].id;

		sections.forEach(section => {
			if (section.getBoundingClientRect().top <= 120)
				current = section.id;
		});

		links.forEach(link => {
			// link.classList.toggle(
			// 	"active",
			// 	link.getAttribute("href") === "#" + current
			// );
			qsa(".sidebar nav a[href^='#']").forEach(link=>{
				link.classList.toggle(
					"current",
					link.getAttribute("href")==="#"+current
				);
			});
		});
	},

	bindTheme() {
		const button = qs("[data-theme-toggle]");
		if (!button) return;

		button.onclick = () => {

			this.setTheme(
				document.body.dataset.theme === "dark"
					? "light"
					: "dark"

			);

		};
	},

	loadTheme() {
		this.setTheme(
			localStorage.getItem("theme") ?? "light",
			false
		);
	},

	setTheme(theme, save = true) {
		document.body.dataset.theme = theme;
		if (save) localStorage.setItem("theme", theme);
	},

	bindKeyboard() {

		document.addEventListener("keydown", e => {

			if (e.key === "/") {

				const input = qs(".search input");

				if (input) {

					e.preventDefault();

					input.focus();

				}

			}

			if (e.altKey && e.key.toLowerCase() === "t") {

				e.preventDefault();

				this.setTheme(

					document.body.dataset.theme === "dark"
						? "light"
						: "dark"

				);

			}

		});

	},

	saveScroll() {
		sessionStorage.setItem(
			`scroll:${this.lesson.id}`,
			String(window.scrollY)
		);
	},

	restoreScroll() {
		const y = sessionStorage.getItem(`scroll:${this.lesson.id}`);
		if (y !== null) {
			requestAnimationFrame(() => {
				window.scrollTo(0, Number(y));
			});
		}
	},

	openSidebar() {
		qs(".sidebar")?.classList.add("open");
	},

	closeSidebar() {
		qs(".sidebar")?.classList.remove("open");
	},

	previousLesson() {
		const lessons = Course.modules.flatMap(m => m.lessons);
		const i = lessons.findIndex(l => l.id === this.lesson.id);
		return i > 0 ? lessons[i - 1] : null;
	},

	nextLesson() {
		const lessons = Course.modules.flatMap(m => m.lessons);
		const i = lessons.findIndex(l => l.id === this.lesson.id);
		return i >= 0 && i < lessons.length - 1 ? lessons[i + 1] : null;
	},

	openLesson(id) {
		location.search = `?lesson=${id}`;
	}

};

window.App = App;

document.addEventListener("DOMContentLoaded", () => App.init());
