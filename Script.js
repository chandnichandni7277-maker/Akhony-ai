const output = document.getElementById("output");

// Check browser speech support
if (!('webkitSpeechRecognition' in window)) {
  output.innerHTML = "⚠️ आपका ब्राउज़र Voice Support नहीं करता!";
} else {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "hi-IN";

  recognition.onresult = function (event) {
    const userSpeech = event.results[0][0].transcript;
    output.innerHTML = `<b>आपने कहा:</b> ${userSpeech}`;
    replyToUser(userSpeech);
  };

  recognition.onerror = function (event) {
    output.innerHTML = "⚠️ कोई गलती हुई, कृपया फिर से बोलो।";
  };

  window.startListening = function () {
    recognition.start();
    output.innerHTML = "🎤 सुन रहा हूँ...";
  };
}

// Simple AI Response
function replyToUser(text) {
  let reply = "";

  if (text.includes("नमस्ते")) reply = "नमस्ते! मैं Tony AI हूँ, आपकी मदद के लिए तैयार हूँ।";
  else if (text.includes("कैसे हो")) reply = "मैं बहुत अच्छा हूँ, आप कैसे हैं?";
  else if (text.includes("समय") || text.includes("टाइम")) reply = "अभी समय है: " + new Date().toLocaleTimeString();
  else if (text.includes("नाम")) reply = "मेरा नाम AK-Tony AI है।";
  else reply = "माफ़ कीजिए, मैं ये नहीं समझ पाया।";

  output.innerHTML += `<br><b>Tony:</b> ${reply}`;
  speak(reply);
}

// Text-to-speech
function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "hi-IN";
  utter.rate = 1;
  utter.pitch = 1;
  speechSynthesis.speak(utter);
}
