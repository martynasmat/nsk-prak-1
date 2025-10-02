const conversations = {
    web: [
        { text: "How can I help?"},
        { text: "How do I make a responsive website?"},
        { text: "You can use media queries in CSS!"}
    ],
    eggs: [
        { text: "How can I help?"},
        { text: "How to boil an egg?"},
        { text: "Put it in boiling water for 7-10 minutes."}
    ],
    university: [
        { text: "How can I help?"},
        { text: "How do I pass university classes?"},
        { text: "Stay consistent and don't fall behind."}
    ],
    wage: [
        { text: "How can I help?"},
        { text: "What is the average wage in Lithuania?"},
        { text: "Around €1900 gross per month (2025)."}
    ],
    photoshop: [
        { text: "How can I help?"},
        { text: "How do I change the background in Photoshop?"},
        { text: "Use the Select Subject tool and then mask the background."}
    ],
    euroleague: [
        { text: "How can I help?"},
        { text: "What's the Euroleague schedule?"},
        { text: "Check the official site for the latest fixtures."}
    ]
};

const msgContainer = document.querySelector(".chat__messages");

function loadConversation(id) {
    msgContainer.innerHTML = "";
    conversations[id].forEach(msg => {
        const div = document.createElement("div");
        div.classList.add("chat__messages__message");
        div.innerHTML = `<p class="message-text">${msg.text}</p>`;
        msgContainer.appendChild(div);
    });
}

document.querySelectorAll(".history__item").forEach(item => {
    item.addEventListener("click", () => {
        const id = item.dataset.id;
        loadConversation(id);
    });
});