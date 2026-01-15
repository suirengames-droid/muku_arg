const chat = document.getElementById("chat");
const input = document.getElementById("input");

// ランダム返答用
const randomReplies = [
  "それは観測対象外です。",
  "よくわかりませんでした",
  "記録が曖昧です。言葉を選び直して。",
  "その質問には、答えられません。",
  "僕が何をしたっていうの…"
];

// キーワード分岐
const keywords = {
  "人生": "人生は、読み取るものじゃない。残るものだ。",
  "影": "僕は影が先だと思う。光は後から生まれた。",
  "佐久間無垢": "……その名前を、どこで知った？"
};

function send() {
  const text = input.value;
  input.value = "";

  addMessage("あなた", text);

  let reply = null;

  // キーワードチェック
  for (const key in keywords) {
    if (text.includes(key)) {
      reply = keywords[key];
      break;
    }
  }

  // なければランダム
  if (!reply) {
    reply = randomReplies[Math.floor(Math.random() * randomReplies.length)];
  }

  setTimeout(() => {
    addMessage("無垢", reply);
  }, 800);
}

function addMessage(who, text) {
  chat.innerHTML += `<p><b>${who}：</b>${text}</p>`;
}
