// src/scripts/copy-code-button.ts

let copyButtonInactive: string;
let copyButtonActive: string;

const buttonDeafultStyle = `
position: absolute;
top: .3em;
right: .5em;
`;

async function copyCode(
	codeBlock: HTMLPreElement,
	copyButton: HTMLButtonElement,
) {
	const codeText = codeBlock.innerText;
	const buttonText = copyButton.innerText;
	const textToCopy = codeText.replace(buttonText, "");

	await navigator.clipboard.writeText(textToCopy);
	copyButton.innerText = copyButtonActive;

	setTimeout(() => {
		copyButton.innerText = copyButtonInactive;
	}, 2000);
}

export function addCopyCodeButtons(
	iconButtonInactive: string,
	iconButtonActive: string,
) {
	copyButtonInactive = iconButtonInactive;
	copyButtonActive = iconButtonActive;
	const codeBlocks = Array.from(document.querySelectorAll("pre"));

	for (const codeBlock of codeBlocks) {
		const wrapper = document.createElement("div");
		wrapper.style.position = "relative";

		const copyButton = document.createElement("button");
		copyButton.innerText = copyButtonInactive;
		copyButton.classList.value = "copy-code";
		copyButton.setAttribute("style", buttonDeafultStyle);

		codeBlock.setAttribute("tabindex", "0");
		codeBlock.appendChild(copyButton);

		codeBlock.parentNode?.insertBefore(wrapper, codeBlock);
		wrapper.appendChild(codeBlock);

		copyButton?.addEventListener("click", async () => {
			await copyCode(codeBlock, copyButton);
		});
	}
}
