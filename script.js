const messages = document.getElementById("messages");

function addMessage(text, className) {
  const div = document.createElement("div");
  div.className = `message ${className}`;
  div.innerText = text;
  messages.appendChild(div);
}

addMessage("ようこそ、観測者様。\nこれは人生読み取り装置です。", "muku");

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value;
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  respond(text);
}

function respond(text) {
  if (text.includes("影先性")) {
    addMessage("その言葉を知っているなら、外を見るべきだ。\nXで @sakuma_muku を探して。", "muku");
    return;
  }

  addMessage("記録中……。\n続けて入力して。", "muku");
}
