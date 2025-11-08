
const output = document.getElementById("response");

if (!('webkitSpeechRecognition' in window)) {
  output.innerHTML = "⚠️ आपका ब्राउज़र Voice Support नहीं करता!";
} else {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "hi-IN";
  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    output.innerHTML = `<b>आपने कहा:</b> ${text}`;
    reply(text);
  };

  recognition.onerror = () => {
    output.innerHTML = "❌ कुछ गड़बड़ हुई, फिर से कोशिश करें।";
  };

  window.startListening = () => {
    recognition.start();
    output.innerHTML = "🎤 सुन रहा हूँ...";
  };
}

function reply(text) {
  let answer = "";
  if (text.includes("नमस्ते")) answer = "नमस्ते अंकित, मैं टोनी बोल रहा हूँ!";
  else if (text.includes("कैसे हो")) answer = "मैं बहुत बढ़िया हूँ, आप कैसे हैं?";
  else if (text.includes("समय") || text.includes("टाइम")) answer = "अभी समय है " + new Date().toLocaleTimeString();
  else if (text.includes("नाम")) answer = "मेरा नाम AK-Tony AI है।";
  else answer = "माफ़ करना, मैं ये समझ नहीं पाया।";

  output.innerHTML += `<br><b>Tony:</b> ${answer}`;
  speak(answer);
}

function speak(text) {
  const voice = new SpeechSynthesisUtterance(text);
  voice.lang = "hi-IN";
  speechSynthesis.speak(voice);
}
