const resetButton = document.getElementById("reset");
const inputField = document.getElementById("markdown-input");
const preview = document.getElementById("preview");

inputField.addEventListener("input", (e) => {
	let markdownText = e.target.value;

	const html = marked.parse(markdownText);
	markdownText = html.replace(/\n/g, "<br />\n");
	// // Heading1-6
	// markdownText = markdownText.replace(/^#\s+(.*)$/gm, "<h1>$1</h1>");
	// markdownText = markdownText.replace(/^##\s+(.*)$/gm, "<h2>$1</h2>");
	// markdownText = markdownText.replace(/^###\s+(.*)$/gm, "<h3>$1</h3>");
	// markdownText = markdownText.replace(/^####\s+(.*)$/gm, "<h4>$1</h4>");
	// markdownText = markdownText.replace(/^#####\s+(.*)$/gm, "<h5>$1</h5>");
	// markdownText = markdownText.replace(/^######\s+(.*)$/gm, "<h6>$1</h6>");

	// // Horizontal line
	// markdownText = markdownText.replace(/^---$/gm, "<hr />");

	// // Bold text: **text**
	// markdownText = markdownText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

	// // Italic text: _text_
	// markdownText = markdownText.replace(/_(.*?)_/g, "<em>$1</em>");

	preview.innerHTML = markdownText;
	preview.querySelectorAll("pre code").forEach((block) => {
		hljs.highlightBlock(block);
	});
});
