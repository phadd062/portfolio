import {
	d as l,
	o as c,
	c as m,
	r as x,
	i as b,
	a as _,
	w as f,
	u as i,
	b as n,
	e as p,
	f as h,
	t as N,
	g as r,
	h as T,
	j as L,
	k as $,
	p as w,
	l as C,
	n as S,
	m as B,
	q as A,
	s as I,
	v as M,
	F as O,
} from "./vendor.02c60b07.js";
const j = function () {
	const e = document.createElement("link").relList;
	if (e && e.supports && e.supports("modulepreload")) return;
	for (const t of document.querySelectorAll('link[rel="modulepreload"]')) o(t);
	new MutationObserver((t) => {
		for (const s of t)
			if (s.type === "childList")
				for (const u of s.addedNodes)
					u.tagName === "LINK" && u.rel === "modulepreload" && o(u);
	}).observe(document, { childList: !0, subtree: !0 });
	function d(t) {
		const s = {};
		return (
			t.integrity && (s.integrity = t.integrity),
			t.referrerpolicy && (s.referrerPolicy = t.referrerpolicy),
			t.crossorigin === "use-credentials"
				? (s.credentials = "include")
				: t.crossorigin === "anonymous"
				? (s.credentials = "omit")
				: (s.credentials = "same-origin"),
			s
		);
	}
	function o(t) {
		if (t.ep) return;
		t.ep = !0;
		const s = d(t);
		fetch(t.href, s);
	}
};
j();
const E = l({
		emits: ["change"],
		setup(a, { emit: e }) {
			return (d, o) => (
				c(),
				m(
					"select",
					{
						onChange: o[0] || (o[0] = (t) => e("change", t)),
						class:
							"px-3 py-1.5 text-base font-normal text-gray-700 bg-slate-50 border border-solid border-slate-50 dark:border-slate-900 rounded transition ease-in-out focus:text-gray-700 focus:bg-slate-50 focus:border-slate-900 focus:outline-none",
					},
					[x(d.$slots, "default")],
					32
				)
			);
		},
	}),
	F = ["selected"],
	H = ["selected"],
	P = ["selected"],
	V = l({
		setup(a) {
			const e = b("darkMode"),
				d = b("selectThemeCategory");
			return (o, t) => (
				c(),
				_(
					E,
					{ onChange: t[0] || (t[0] = (s) => i(d)(s)) },
					{
						default: f(() => [
							n(
								"option",
								{ selected: i(e) === "light", value: "light" },
								"Light Theme",
								8,
								F
							),
							n(
								"option",
								{ selected: i(e) === "dark", value: "dark" },
								"Dark Theme",
								8,
								H
							),
							n(
								"option",
								{
									selected: i(e) !== "light" && i(e) !== "dark",
									value: "system",
								},
								" System Theme ",
								8,
								P
							),
						]),
						_: 1,
					}
				)
			);
		},
	}),
	v = l({
		props: { NavButtonLabel: null, NavTo: null },
		setup(a) {
			return (e, d) => {
				const o = p("router-link");
				return (
					c(),
					_(
						o,
						{ class: "nav-button", to: a.NavTo },
						{ default: f(() => [h(N(a.NavButtonLabel), 1)]), _: 1 },
						8,
						["to"]
					)
				);
			};
		},
	}),
	D = {
		class:
			"bg-slate-300 bg-opacity-50 dark:bg-slate-900 dark:bg-opacity-100 flex justify-between items-center border-b-2 border-b-slate-900 px-1 pt-[2px]",
	},
	G = {
		class:
			"flex justify-around items-center w-full md:w-5/12 lg:w-1/3 xl:w-1/4 2xl:w-1/5",
	},
	R = {
		class:
			"md:flex justify-around items-center hidden md:w-1/2 lg:w-5/12 xl:w-1/3 2xl:w-1/4",
	},
	q = n(
		"div",
		{ class: "text-slate-900 dark:text-gray-50 font-semibold text-xl mb-1" },
		" | ",
		-1
	),
	z = {
		target: "_blank",
		href: "https://github.com/phadd062",
		class: "nav-button",
	},
	K = h(" LinkedIn "),
	W = {
		target: "_blank",
		href: "https://github.com/phadd062",
		class: "nav-button",
	},
	J = h(" GitHub "),
	Q = l({
		setup(a) {
			return (e, d) => {
				const o = p("font-awesome-icon");
				return (
					c(),
					m("nav", D, [
						n("div", G, [
							r(v, { NavButtonLabel: "Home", NavTo: "/" }),
							r(v, { NavButtonLabel: "About", NavTo: "/about" }),
							r(v, { NavButtonLabel: "Portfolio", NavTo: "/about" }),
							r(v, { NavButtonLabel: "Resume", NavTo: "/about" }),
						]),
						n("div", R, [
							n("div", null, [r(V)]),
							q,
							n("a", z, [r(o, { icon: i(T) }, null, 8, ["icon"]), K]),
							n("a", W, [r(o, { icon: i(L) }, null, 8, ["icon"]), J]),
						]),
					])
				);
			};
		},
	}),
	U = l({
		setup(a) {
			const e = $("system");
			w("darkMode", e);
			const d = () => {
				"theme" in localStorage || localStorage.setItem("theme", e.value);
				const s = localStorage.getItem("theme");
				s === "light"
					? (e.value = "light")
					: s === "dark"
					? (e.value = "dark")
					: (s === "system" || localStorage.setItem("theme", "system"),
					  (e.value = "system"));
			};
			w("selectThemeCategory", (s) => {
				localStorage.setItem("theme", s.target.value), d();
			}),
				d();
			const t = C(() =>
				window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light"
			);
			return (s, u) => {
				const k = p("router-view");
				return (
					c(),
					m(
						"div",
						{ class: S(e.value !== "system" ? e.value : i(t)) },
						[r(Q), n("main", null, [r(k)])],
						2
					)
				);
			};
		},
	});
var y = (a, e) => {
	const d = a.__vccOpts || a;
	for (const [o, t] of e) d[o] = t;
	return d;
};
const X = {},
	Y = B(
		'<div class="grid grid-cols-4 gap-3 p-3 bg-gray-50"><div class="bg-white p-3 rounded-md col-span-3">1</div><div class="bg-white p-3 rounded-md">2</div><div class="bg-white p-3 rounded-md">3</div><div class="bg-white p-3 rounded-md">4</div><div class="bg-white p-3 rounded-md">5</div><div class="bg-white p-3 rounded-md row-span-4">6</div><div class="bg-white p-3 rounded-md">7</div><div class="bg-white p-3 rounded-md">8</div><div class="bg-white p-3 rounded-md">9</div><div class="bg-white p-3 rounded-md">2</div><div class="bg-white p-3 rounded-md">1</div><div class="bg-white p-3 rounded-md row-span-2">10</div><div class="bg-white p-3 rounded-md col-span-2">9</div><div class="bg-white p-3 rounded-md">9</div><div class="bg-white p-3 rounded-md">9</div></div><div class="grid grid-cols-4 gap-3 p-3 bg-gray-200 dark:bg-slate-400"><div class="bg-white p-3 rounded-md col-span-3">1</div><div class="bg-white p-3 rounded-md">2</div><div class="bg-white p-3 rounded-md">3</div><div class="bg-white p-3 rounded-md">4</div><div class="bg-white p-3 rounded-md">5</div><div class="bg-white p-3 rounded-md row-span-4">6</div><div class="bg-white p-3 rounded-md">7</div><div class="bg-white p-3 rounded-md">8</div><div class="bg-white p-3 rounded-md">9</div><div class="bg-white p-3 rounded-md">2</div><div class="bg-white p-3 rounded-md">1</div><div class="bg-white p-3 rounded-md row-span-2">10</div><div class="bg-white p-3 rounded-md col-span-2">9</div><div class="bg-white p-3 rounded-md">9</div><div class="bg-white p-3 rounded-md">9</div></div>',
		2
	);
function Z(a, e) {
	return Y;
}
var ee = y(X, [["render", Z]]);
const te = {};
function se(a, e) {
	return c(), m("h1", null, "This is me Peter!");
}
var oe = y(te, [["render", se]]);
const g = A(U),
	de = I({
		history: M(),
		routes: [
			{ path: "/", component: ee },
			{ path: "/about", component: oe },
		],
	});
g.use(de);
g.component("FontAwesomeIcon", O);
g.mount("#app");
