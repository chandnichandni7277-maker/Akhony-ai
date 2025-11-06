# Akhony-ai
Aktony AI ek smart assistant project hai jo automation aur intelligent responses ke liye design kiya gaya hai.
<!DOCTYPE html>
<html>
<head>
<title>AK-Tony AI</title>
<style>
body {
  font-family: Arial, sans-serif;
  background: #111;
  color: white;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
header {
  background: #222;
  padding: 10px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 2px solid #444;
}
#chatBox {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
}
.msg {
  margin: 8px 0;
  padding: 10px;
  border-radius: 5px;
  max-width: 80%;
}
.user { background: #0084ff; align-self: flex-end; }
.bot { background: #333; }
#inputArea {
  display: flex;
  padding: 10px;
  background: #000;
}
input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
button {
  padding: 10px;
  margin-left: 5px;
  background: #00c853;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
</head>

<body>
<header>🤖 AK-Tony AI</header>

<div id="chatBox"></div>

<div id="inputArea">
  <input id="userInput" placeholder="Type your message...">
  <button onclick="sendMsg()">Send</button>
</div>

<script>
function addMsg(text, who) {
  let box = document.getElementById("chatBox");
  let div = document.createElement("div");
  div.className = "msg " + who;
  div.innerText = text;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function sendMsg() {
  let input = document.getElementById("userInput");
  let text = input.value.trim();
  if (!text) return;
  
  addMsg(text, "user");
  input.value = "";

  // Temporary AI reply (real AI later)
  setTimeout(() => {
    addMsg("Processing... (Real AI connecting soon)", "bot");
  }, 500);
}
</script>

</body>
</html>
