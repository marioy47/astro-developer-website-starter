// src/scripts/dark-mode.ts

/**
 * Adds/Removes the `dark` class in the <body> when the `selector` checkbox is toggled.
 *
 * @param selector a `querySelector()` compatible element.
 * @returns void
 */
export const toggleDarkModeIfChecked = (selector: string): void => {
	const toggle = document.querySelector(selector);
	if (null === toggle) return;
	const [root] = document.getElementsByTagName("body");
	toggle.addEventListener("click", (ev) => {
		if ((ev.target as HTMLInputElement).checked) {
			root.classList.add("dark");
			localStorage.theme = "dark";
		} else {
			root.classList.remove("dark");
			localStorage.theme = "light";
		}
	});
};

/**
 * Set's the initial status of the checkbox that changes the theme by looking
 * a the `localStorage`.
 *
 * @param selector `querySelector()` compatible element.
 * @returns void
 */
export const setInitialInputStatus = (selector: string): void => {
	const toggle = document.querySelector(selector);
	if (null === toggle) return;
	if ("theme" in localStorage) {
		if (localStorage.theme === "dark") {
			const [root] = document.getElementsByTagName("body");
			root.classList.add("dark");
			(toggle as HTMLInputElement).checked = true;
		}
	}
};
