"use strict";

// Constants + Registry + Public API + Core Renderer
const Renderers=Object.create(null);
function registerRenderer(type,renderer){Renderers[type]=renderer}

function renderLesson(root,lesson){root.replaceChildren();if(!lesson){root.append(renderEmpty());return}const layout=el("div","layout"),sidebar=renderSidebar(),main=el("main","main"),container=el("div","container");lesson.children.forEach(node=>container.append(render(node)));main.append(container);layout.append(sidebar,main);root.append(layout)}
function render(component){if(!component)return document.createTextNode("");const renderer=Renderers[component.type]??renderUnknown;return renderer(component)}
function renderUnknown(component){const box=el("div","warning");box.textContent=`Renderer not found: ${component.type}`;return box}
registerRenderer("hero",renderHero);
registerRenderer("objectives",renderObjectives);
registerRenderer("section",renderSection);
registerRenderer("text",renderText);
registerRenderer("list",renderList);
registerRenderer("ordered-list",renderOrderedList);
registerRenderer("table",renderTable);
registerRenderer("image",renderImage);
registerRenderer("divider",renderDivider);
registerRenderer("quote",renderQuote);
registerRenderer("note",renderNote);
registerRenderer("tip",renderTip);
registerRenderer("warning",renderWarning);
registerRenderer("info",renderInfo);
registerRenderer("definition",renderDefinition);
registerRenderer("remember",renderRemember);
registerRenderer("example",renderExample);
registerRenderer("code",renderCode);
registerRenderer("output",renderOutput);
registerRenderer("quiz",renderQuiz);
registerRenderer("true-false",renderTrueFalse);
registerRenderer("fill-blank",renderFillBlank);
registerRenderer("accordion",renderAccordion);
registerRenderer("exercise",renderExercise);
registerRenderer("challenge",renderChallenge);
registerRenderer("summary",renderSummary);
// registerRenderer("navigation",renderNavigation);
registerRenderer("navigation",()=>renderNavigation());
registerRenderer("columns",renderColumns);
registerRenderer("flashcard",renderFlashcard);

// 2. Content Renderers
function renderHero(c){const s=el("section","hero"),p=c.props;if(p.chapter&&p.lesson)s.append(badge(`Chapter ${p.chapter} · Lesson ${p.lesson}`,"hero-tag"));if(p.title)s.append(title(p.title,"hero-title","h1"));if(p.description)s.append(text(p.description,"hero-description"));const m=el("div","hero-meta");if(p.duration)m.append(badge(p.duration));if(p.difficulty)m.append(badge(p.difficulty));s.append(m);return s}
function renderObjectives(c){const s=section("Learning Objectives"),u=el("ul");c.props.items.forEach(i=>u.append(item(i)));s.append(u);return s}
function renderSection(c){const s=el("section","section");s.id=slug(c.props.title);s.append(title(c.props.title));c.children.forEach(i=>s.append(render(i)));return s}
function renderText(c){return text(c.props.content)}
function renderList(c){const u=el("ul");c.props.items.forEach(i=>u.append(item(i)));return u}
function renderOrderedList(c){const o=el("ol");c.props.items.forEach(i=>o.append(item(i)));return o}
function renderTable(c){const t=el("table"),h=t.createTHead().insertRow();c.props.headers.forEach(i=>{const th=document.createElement("th");th.textContent=i;h.append(th)});const b=t.createTBody();c.props.rows.forEach(r=>{const tr=b.insertRow();r.forEach(v=>tr.insertCell().textContent=v)});return t}
function renderImage(c){const f=document.createElement("figure"),i=document.createElement("img");i.src=c.props.src;i.alt=c.props.alt??"";i.loading="lazy";f.append(i);if(c.props.caption){const g=document.createElement("figcaption");g.textContent=c.props.caption;f.append(g)}return f}
function renderDivider(){return document.createElement("hr")}
function renderQuote(c){const q=document.createElement("blockquote");q.textContent=c.props.content;if(c.props.author){const f=document.createElement("footer");f.textContent=c.props.author;q.append(f)}return q}

// 3. Learning Renderers
function renderNote(c){return message("note",c.props.content)}
function renderTip(c){return message("tip",c.props.content)}
function renderWarning(c){return message("warning",c.props.content)}
function renderInfo(c){return message("info",c.props.content)}
function renderDefinition(c){const d=el("div","definition"),t=el("div","definition-title");t.textContent=c.props.term;d.append(t,text(c.props.description));return d}
function renderRemember(c){const d=el("div","remember"),t=document.createElement("strong");t.textContent="Remember";d.append(t,text(c.props.content));return d}
function renderExample(c){const e=el("div","example");if(c.props.title){const h=document.createElement("strong");h.className="example-title";h.textContent=c.props.title;e.append(h)}c.children.forEach(i=>e.append(render(i)));return e}

// 4. Programming Renderers
function renderCode(c){const w=el("div","code"),h=el("div","code-header"),l=document.createElement("span"),b=el("button","code-copy"),p=document.createElement("pre"),x=document.createElement("code");l.textContent=(c.props.language??"text").toUpperCase();b.type="button";b.textContent="Copy";b.onclick=()=>copyCode(c.props.content,b);x.textContent=c.props.content??"";p.append(x);h.append(l,b);w.append(h,p);return w}
function renderOutput(c){const d=el("div","output");d.textContent=c.props.content??"";return d}
function copyCode(content,button){navigator.clipboard.writeText(content??"").then(()=>{const t=button.textContent;button.textContent="Copied";setTimeout(()=>button.textContent=t,1200)}).catch(()=>{})}

// 5. Interactive Renderers
function renderQuiz(c){const q=el("div","quiz"),t=el("div","quiz-question"),o=el("div","quiz-options"),r=el("div","quiz-result");t.textContent=c.props.question??"";(c.props.choices??[]).forEach((v,i)=>{const x=el("div","quiz-option");x.textContent=v;x.onclick=()=>{if(o.dataset.done)return;o.dataset.done=1;[...o.children].forEach((e,n)=>e.classList.add(n===c.props.answer?"correct":"wrong"));r.className=`quiz-result ${i===c.props.answer?"correct":"wrong"}`;r.textContent=i===c.props.answer?"Correct!":"Incorrect.";if(c.props.explanation){const e=el("div","quiz-explanation");e.textContent=c.props.explanation;r.append(e)}};o.append(x)});q.append(t,o,r);return q}
function renderTrueFalse(c){return renderQuiz({props:{question:c.props.question,choices:["True","False"],answer:c.props.answer?0:1,explanation:c.props.explanation}})}
function renderFillBlank(c){const w=el("div","fill-blank"),q=document.createElement("p"),r=el("div","fill-blank-row"),i=document.createElement("input"),b=document.createElement("button"),s=document.createElement("span");q.textContent=c.props.question??"";i.type="text";i.autocomplete="off";b.type="button";b.textContent="Check";b.onclick=()=>{const ok=i.value.trim()===String(c.props.answer??"");s.className=`quiz-result ${ok?"correct":"wrong"}`;s.textContent=ok?"Correct!":"Incorrect."};r.append(i,b,s);w.append(q,r);return w}
function renderAccordion(c){const d=el("div","accordion"),e=document.createElement("details"),s=document.createElement("summary"),b=el("div","accordion-body");s.textContent=c.props.title??"";c.children.forEach(x=>b.append(render(x)));e.append(s,b);d.append(e);return d}
function renderExercise(c){const d=el("div","exercise"),h=document.createElement("strong"),p=document.createElement("p");h.textContent="Exercise";p.textContent=c.props.content??"";d.append(h,p);return d}
function renderChallenge(c){const d=el("div","challenge"),h=document.createElement("strong"),p=document.createElement("p");h.textContent="Challenge";p.textContent=c.props.content??"";d.append(h,p);return d}
function renderFlashcard(c){const d=el("div","flashcard"),f=c.props.front??"",b=c.props.back??"";d.textContent=f;d.onclick=()=>{const flip=d.classList.toggle("flipped");d.textContent=flip?b:f};return d}

// 6. Layout Renderers
function renderSummary(c){const s=section("Summary"),u=el("ul");(c.props.items??[]).forEach(i=>u.append(item(i)));s.append(u);return s}
// function renderNavigation(c){const n=el("div","navigation");if(c.props.previous){const p=link("← Previous",`?lesson=${c.props.previous}`),t=document.createElement("small");t.textContent=c.props.previous;p.append(t);n.append(p)}else n.append(document.createElement("div"));if(c.props.next){const x=link("Next →",`?lesson=${c.props.next}`),t=document.createElement("small");t.textContent=c.props.next;x.append(t);n.append(x)}return n}
function renderNavigation(){const e=el("div","navigation"),n=App.previousLesson(),t=App.nextLesson();if(n){const t=link("← Previous",`?lesson=${n.id}`),i=document.createElement("small");i.textContent=n.title,t.append(i),e.append(t)}else e.append(document.createElement("div"));if(t){const n=link("Next →",`?lesson=${t.id}`),i=document.createElement("small");i.textContent=t.title,n.append(i),e.append(n)}return e}
function renderColumns(c){const g=el("div","columns");c.children.forEach(col=>{const d=el("div","column");(col.children??[]).forEach(i=>d.append(render(i)));g.append(d)});return g}
// function renderSidebar(lesson){const a=el("aside","sidebar"),h=el("div","sidebar-header"),n=document.createElement("nav");h.textContent="Programming C";lesson.children.filter(i=>i.type==="section").forEach(i=>n.append(link(i.props.title,`#${slug(i.props.title)}`)));a.append(h,n);return a}
function renderSidebar(){const e=el("aside","sidebar"),t=el("div","sidebar-header");t.textContent=Course.title;const n=document.createElement("nav");return Course.modules.forEach(e=>{const t=document.createElement("h4");t.textContent=e.title,n.append(t),e.lessons.forEach(e=>{const t=link(e.title,`?lesson=${e.id}`);App.lesson&&e.id===App.lesson.id&&t.classList.add("active"),n.append(t)})}),e.append(t,n),e}

// 7. DOM Helpers + Utility Helpers
function renderEmpty(){const c=el("div","container"),w=el("div","warning");w.textContent="No lesson loaded.";c.append(w);return c}
function el(tag,className=""){const e=document.createElement(tag);if(className)e.className=className;return e}
function text(content,className="text"){const p=el("p",className);p.textContent=content??"";return p}
function title(content,className="section-title",tag="h2"){const h=document.createElement(tag);if(className)h.className=className;h.textContent=content??"";return h}
function section(name){const s=el("section","section");s.id=slug(name);s.append(title(name));return s}
function badge(content,className="badge"){const s=el("span",className);s.textContent=content??"";return s}
function item(content){const l=document.createElement("li");l.textContent=content??"";return l}
function link(content,href="#"){const a=document.createElement("a");a.href=href;a.textContent=content??"";return a}
function message(type,content){const d=el("div",type);d.textContent=content??"";return d}
function card(className="card"){return el("div",className)}
function slug(value){return String(value??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
function escapeHtml(value){return String(value??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}
function copy(text){return navigator.clipboard.writeText(String(text??""))}
function toast(messageText,duration=2000){let t=document.querySelector(".toast");if(!t){t=el("div","toast");document.body.append(t)}t.textContent=messageText;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove("show"),duration)}
function qs(selector,parent=document){return parent.querySelector(selector)}
function qsa(selector,parent=document){return [...parent.querySelectorAll(selector)]}