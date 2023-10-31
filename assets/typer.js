const typingText = document.querySelector(".typing-text");
const inputField = document.querySelector(".input-field");
const wpmField = document.querySelector(".time-left");
let startTime = (characterCount = words = mistakes = 0);
let index = 0;

const startTimer = () => (startTime = new Date().getTime());
const loadPara = () => {
  const ranIndex = Math.floor(Math.random() * paragraphs.length);
  typingText.innerHTML = "";
  const para = paragraphs[ranIndex].split("");
  para.forEach(
    alphabet =>
      (typingText.innerHTML += `<span class="text-gray-600">${alphabet}</span>`)
  );
};

const initTyping = () => {
  if (startTime === 0) startTimer();
  words = inputField.value.split(/\s+/).filter(word => word !== "");
  const currentChar = inputField.value.split("")[index];
  const characters = typingText.querySelectorAll("span");
  characters[index].classList.remove(
    "border-b-2",
    "text-blue-400",
    "border-blue-400",
    "border-blink",
    "animation-blink"
  );
  if (currentChar === null || !currentChar) {
    index--;
    characterCount--;
    if (characters[index].classList.contains("text-red-400")) mistakes--;
    characters[index].classList.remove(
      "text-red-400",
      "bg-red-100",
      "text-white"
    );
  } else {
    characterCount++;
    if (currentChar === characters[index].innerText) {
      characters[index].classList.add("text-white");
    } else {
      mistakes++;
      characters[index].classList.add("text-red-400", "bg-red-100");
    }
    index++;
    characters[index].classList.add(
      "border-b-2",
      "text-blue-400",
      "border-blue-400",
      "animation-blink"
    );
  }
  calculateWpm();
};

const calculateWpm = () => {
  const currentTime = new Date().getTime();
  const totalTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
  const finalWordCount = words.length - mistakes / 5;
  const wpm = Math.floor(finalWordCount / totalTimeInSeconds * 60);
  wpmField.innerText = wpm === Infinity || !wpm ? 0 : wpm;
};

loadPara();
inputField.addEventListener("input", initTyping);
document.addEventListener("keydown", inputField.focus());
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    loadPara();
    index = 0;
    inputField.value = "";
    startTimer();
    wpm = 0;
  }
});
inputField.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key === "a") {
    e.preventDefault();
  }
});
typingText.addEventListener("click", () => inputField.focus());
