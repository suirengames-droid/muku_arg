let insanity = 0;

const messagesArea = document.getElementById("messages_area");
const input = document.getElementById("userInput");
const btn = document.getElementById("btn_send");

const randomReplies = [
    "それは観測対象外です。",
    "よくわかりませんでした。",
    "記録が曖昧です。言葉を選び直して。",
    "その質問には、答えられません。",
    "それはどういうことでしょうか？",
    "ごめんなさい、その記録はありません。"
];

const keywords = {
    "人生": "人生は、読み取るものじゃない。残るものだ。",
    "影": "僕は影が先だと思う。光は後から生まれた。",
    "佐久間無垢": "……それは...僕の名前ですね",
    "シュレーディンガーの僕": "僕の存在証明よく知ってますね。\nあれは僕の話です。",
    "ニャルラトホテプ": "やぁ、どこでその名前を知ったんだい？\n僕？僕は無垢じゃなくていわゆる邪神だよw\n僕が作った装置遊んでくれてありがとう\n君が無垢を観測強いているつもりかもしれないけど、僕もずっと観測しているよ",
    "Question": "それは、僕と似た人の名前だった気がする。\n最初に僕を観測した人かな",
    "レンレン": "それは、僕と似た人の名前だった気がする。\n最初に僕を観測した珍獣だよ",
    "僕の証明": "僕は小説を書くことによって、僕という存在を表しているんです",
};

btn.addEventListener("click", sendMessage);
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage(userInput) {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage("あなた", text, "bms_right");
    userInput.value = "";

    let reply = null;

    for (const key in keywords) {
        if (text.includes(key)) {
            reply = keywords[key];
            insanity++;
            break;
        }
    }

    if (!reply) {
        reply = randomReplies[Math.floor(Math.random() * randomReplies.length)];
    }

    setTimeout(() => {
        addMessage("無垢", reply, "bms_left");
    }, 600);
}

function addMessage(who, text, side) {
    const message = document.createElement("div");
    message.className = `bms_message ${side}`;

    message.innerHTML = `
    <div class="bubble">
      <strong>${who}：</strong>${text.replace(/\n/g, "<br>")}
    </div>
  `;

    messagesArea.appendChild(message);
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("currentTime").textContent =
        `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();

