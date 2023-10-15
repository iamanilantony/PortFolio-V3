const typingText = document.querySelector(".typing-text");

const ranIndex = Math.floor(Math.random() * paragraphs.length);
typingText.innerHTML = paragraphs[ranIndex];
