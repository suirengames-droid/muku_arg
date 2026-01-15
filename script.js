let insanity = 0;
const chat = document.getElementById("chat");
const input = document.getElementById("input");

// ランダム返答用
const randomReplies = [
  "それは観測対象外です。",
  "よくわかりませんでした",
  "記録が曖昧です。言葉を選び直して。",
  "その質問には、答えられません。",
  "それはどういうことでしょうか？",
  "ごめんなさい、その記録はありません\n僕の証明…"
];

// キーワード分岐
const keywords = {
  "人生": "人生は、読み取るものじゃない。残るものだ。",
  "影": "僕は影が先だと思う。光は後から生まれた。",
  "佐久間無垢": "……それは...僕の名前ですね",
  "シュレーディンガーの僕": "僕の存在証明よく知ってますね。\nあれは僕の話です。",
  "ニャルラトホテプ": "やぁ、どこでその名前を知ったんだい？\n僕？僕は無垢じゃなくていわゆる邪神だよw\n僕が作った装置遊んでくれてありがとう！\n君が無垢を観測強いているつもりかもしれないけど、僕もずっと観測しているよ",
  "Question": "それは、僕と似た人の名前だった気がする。\n最初に僕を観測した人かな",
  "レンレン": "それは、僕と似た人の名前だった気がする。\n最初に僕を観測した珍獣だよ",
  "僕の証明": "僕は小説を書くことによって、僕という存在を表しているんです",
};

//狂気度が増すワード
const insanityKeywords = [
  "影",
  "観測",
  "存在",
  "名前",
  "記録",
  "読む",
  "覗く"
];
function sendMessage() {
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
