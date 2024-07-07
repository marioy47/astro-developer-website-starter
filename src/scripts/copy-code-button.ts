// src/scripts/copy-code-button.ts
/**
 * @module copyCodeButton
 */

/**
 * String or emoji to use for the copy button when is still not clicked.
 */
let copyButtonInactive: string;
/**
 * String or emoji for the copy button when is clicked.
 */
let copyButtonActive: string;

/**
 * Requried style  of the button to be at the top-right of the code.
 */
const buttonDeafultStyle = `
position: absolute;
top: .3em;
right: .5em;
`;

/**
 * Gets called when the copy-code button is clicked.
 */
async function copyCode(
	codeBlock: HTMLPreElement,
	copyButton: HTMLButtonElement,
) {
	const textToCopy = codeBlock.innerText.replace(copyButton.innerText, "");

	await navigator.clipboard.writeText(textToCopy);
	copyButton.innerText = copyButtonActive;

	setTimeout(() => {
		copyButton.innerText = copyButtonInactive;
	}, 2000);
}

/**
 * Should be called when the document loads or in the footer.
 * @param iconButtonInactive Icon or emoji to display when button is not clicked yet. By defaul `copyButtonInactive` local var.
 * @param iconButtonActive Icon or emoji to display when button is clicked. By defaul `copyButtonInactive` local var.
 */
export function addCopyCodeButtons(
	iconButtonInactive: string,
	iconButtonActive: string,
) {
	copyButtonInactive = iconButtonInactive;
	copyButtonActive = iconButtonActive;
	const codeBlocks = Array.from(document.querySelectorAll("pre"));

	for (const codeBlock of codeBlocks) {
		codeBlock.setAttribute("tabindex", "0");

		const copyButton = document.createElement("button");
		copyButton.innerText = copyButtonInactive;
		copyButton.classList.value = "copy-code";
		copyButton.setAttribute("style", buttonDeafultStyle);
		copyButton.setAttribute("title", "Copy code to clipboard");
		copyButton?.addEventListener("click", async () => {
			await copyCode(codeBlock, copyButton);
		});
		codeBlock.appendChild(copyButton);

		const wrapper = document.createElement("div");
		wrapper.style.position = "relative";
		codeBlock.parentNode?.insertBefore(wrapper, codeBlock);
		wrapper.appendChild(codeBlock);
	}
}
