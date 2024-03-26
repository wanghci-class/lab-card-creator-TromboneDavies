document.getElementById("preview").addEventListener("click", preview);
document.getElementById("save").addEventListener("click", save);

function preview() {
    to = document.getElementById("to_input").value;
    from = document.getElementById("from_input").value;
    title = document.getElementById("title_input").value;
    subtitle = document.getElementById("subtitle_input").value;
    message = document.getElementById("message_input").value;

    document.querySelector(".title-text").textContent = title;
    document.querySelector(".subtitle-text").textContent = subtitle;
    document.querySelector(".to-text").textContent = to;
    document.querySelector(".message-text").textContent = message;
    document.querySelector(".from-text").textContent = from;
}

function save() {
    cards = localStorage.getItem("cards");
    if (cards == null) {
        cards = [];
    } else {
        cards = JSON.parse(cards);
    }

    to = document.getElementById("to_input").value;
    from = document.getElementById("from_input").value;
    title = document.getElementById("title_input").value;
    subtitle = document.getElementById("subtitle_input").value;
    message = document.getElementById("message_input").value;

    new_card = {"to":to, "from":from, "title":title, "subtitle":subtitle, "message":message};
    cards.push(new_card);

    localStorage.setItem("cards", JSON.stringify(cards));
}