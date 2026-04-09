function getInnerText(id) {
    const x = document.getElementById(id).innerText;
    return x;
}

function setInnerText(id, value) {
    const x = document.getElementById(id);
    x.innerText = value;
}

const hearts = document.getElementsByClassName('heart');
for (const heart of hearts) {
    heart.addEventListener("click", function (e) {
        let count = parseInt(getInnerText('loveCount'));
        count = count + 1;
        setInnerText("loveCount", count);
    });
}

const copies = document.getElementsByClassName('copyB');
for (const copy of copies) {
    copy.addEventListener("click", function (e) {
        const btn = e.currentTarget;
        if (btn.innerText === "Copied!") {
            return;
        }

        let count = parseInt(getInnerText('copyCount'));
        count = count + 1;
        setInnerText("copyCount", count);

        const cardElement = e.currentTarget.closest('.card');
        const phn = cardElement.querySelector('h1').innerText;
        navigator.clipboard.writeText(phn).then(() => {

            const og = btn.innerHTML;
            btn.innerText = "Copied!";
            setTimeout(() => {
                btn.innerHTML = og;
            }, 900);
        });
    });
}


const calls = document.getElementsByClassName('callB');
for (const call of calls) {
    call.addEventListener("click", function (e) {
        let coin = parseInt(getInnerText("goldCount"));
        if (coin < 20) {
            alert("You don't have enough coins to make a call");
            return;
        }

        const cardElement = e.currentTarget.closest('.card');
        const title = cardElement.querySelector("h5").innerText;
        const phn = cardElement.querySelector("h1").innerText;

        alert("Calling.. " + title + " .." + phn);
        coin -= 20;
        setInnerText("goldCount", coin);

        // History Functionality
        const cards = document.getElementById("clearable");
        const time = new Date().toLocaleTimeString();
        const newCard = `
            <div class="historyCard">
                    <div class="name">
                        <h4 class="historyTitle">${title}</h4>
                        <p class="cardDescription">${phn}</p>
                    </div>
                    <p>${time}</p>
                </div>
        `

        cards.insertAdjacentHTML('beforeend', newCard);
    });
}

document.getElementById("clearB")
    .addEventListener("click", function (e) {
        document.getElementById("clearable").innerHTML = " ";
    })
