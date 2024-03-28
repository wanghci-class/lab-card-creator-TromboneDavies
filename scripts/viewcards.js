cards = JSON.parse(localStorage.getItem('cards'));
template = document.getElementById("card-template");
main = document.getElementById("card-list");

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    console.log(card);
    cardView = template.content.cloneNode(true);

    d = cardView.querySelector(".delete-btn");
    d.addEventListener("click", function(event) {
        cards.splice(i, 1);
        localStorage.setItem('cards', JSON.stringify(cards));
        location.reload();
    });



    let titleText = cardView.querySelector(".title-text");
    titleText.textContent = card["title"];
    let subtitleText = cardView.querySelector(".subtitle-text");
    subtitleText.textContent = card["subtitle"];
    let fromText = cardView.querySelector(".from-text");
    fromText.textContent = card["from"];
    let toText = cardView.querySelector(".to-text");
    toText.textContent = card["to"];
    let messageText = cardView.querySelector(".message-text");
    messageText.textContent = card["message"];


    function updateCard() {
        card.title = titleText.textContent;
        card.subtitle = subtitleText.textContent;
        card.from = fromText.textContent;
        card.to = toText.textContent;
        card.message = messageText.textContent;
        localStorage.setItem('cards', JSON.stringify(cards));
    }

    titleText.addEventListener("input", updateCard);
    subtitleText.addEventListener("input", updateCard);
    toText.addEventListener("input", updateCard);
    fromText.addEventListener("input", updateCard);
    messageText.addEventListener("input", updateCard);

    main.appendChild(cardView);
}
