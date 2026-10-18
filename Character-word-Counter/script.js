const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");

textInput.addEventListener("input", () => {

    const text = textInput.value;

    // Character Count
    charCount.textContent = text.length;

    // Word Count
    const words = text.trim();

    if (words === "") {
        wordCount.textContent = 0;
    } else {
        wordCount.textContent = words.split(/\s+/).length;
    }

    // Sentence Count
    const sentences = text.match(/[.!?]+/g);

    sentenceCount.textContent = sentences ? sentences.length : 0;

});