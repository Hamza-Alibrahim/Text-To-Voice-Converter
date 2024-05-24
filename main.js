let select = document.querySelector("select"),
    voices = [],
    speech = new SpeechSynthesisUtterance();
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => {
        select.options[i] = new Option(voice.name, i);
    });
};
select.addEventListener("change", () => {
    speech.voice = voices[select.value];
});
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});