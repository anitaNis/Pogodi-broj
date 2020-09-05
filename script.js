//dom
let gameContainer = document.querySelector(".game");
let tabela = document.querySelector(".tabela");
let spanRes = document.querySelector("#res");

let arrPogodiBroj = [];

let nizBrojeva = [];
for (let i = 1; i < 101; i++) {
    nizBrojeva.push(i);
}

nizBrojeva.forEach((elem) => {
    gameContainer.innerHTML += `<div class="card" data-name="${elem}"> <span class='front-face' value ="${elem}">${elem}</span> </div>`;
});

//random number
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

let cards = document.querySelectorAll(".card");
// console.log(cards);
let tabBody = document.querySelector("body > section > div.tabela.col-5 > table > tbody:nth-child(2)");

//broj pokusaja

let brojac = 7;
let brPokusaja = 0;

cards.forEach(card => {
    card.addEventListener('click', event => {
        // console.log(event.target.textContent);// ok

        let myNumber = parseInt(event.target.textContent);
        event.target.classList.add('clicked');
        console.log(myNumber);

        if (randomNumber === myNumber) {
            alert(`Pogodak`);
            event.target.classList.add('pogodak');

            let num = 100 / 7;
            let result;
            if (brojac === 7) {
                result = Math.round(num * brojac);
            } else if (brojac === 6) {
                result = Math.round(num * brojac);
            } else if (brojac === 5) {
                result = Math.round(num * brojac);
            } else if (brojac === 4) {
                result = Math.round(num * brojac);
            } else if (brojac === 3) {
                result = Math.round(num * brojac);
            } else if (brojac === 2) {
                result = Math.round(num * brojac);
            } else if (brojac === 1) {
                result = Math.round(num * brojac);
            } else {
                result = Math.round(num * brojac);
            }
            spanRes.innerHTML = `${result}%`;

        } else {
            brojac--;
            brPokusaja++;

            if (brojac === 0) {
                alert(`Igra je zavsena`);

            } else {
                alert(`${myNumber} nije tacan, imate jos ${brojac} pokusaja`);

                let instrukcija;
                if (randomNumber < myNumber) {
                    instrukcija = `Broj je manji od ${myNumber}`;
                } else {
                    instrukcija = `Broj je veci od ${myNumber}`;
                }

                tabBody.innerHTML += `<tr>
                <td> ${brPokusaja}.</td>
                <td> ${instrukcija} </td>
                <td> ${brojac} pokusaja </td> 
                </tr> `;

                //za localStorage
                let game = {
                    pokusaj: "",
                    instrukcija: "",
                    preostalo: ""
                };
                game.pokusaj = brPokusaja;
                game.instrukcija = instrukcija;
                game.preostalo = brojac;

                arrPogodiBroj.push(game);

            }
        }
        //set za localStorage
        localStorage.setItem('arrPogodiBroj', JSON.stringify(arrPogodiBroj));

    });
});


//localStorage

if (JSON.parse(localStorage.getItem("arrPogodiBroj")) === null) {
    
    localStorage.setItem("arrPogodiBroj", JSON.stringify(arrPogodiBroj));

} else {

    arrPogodiBroj = JSON.parse(localStorage.getItem("arrPogodiBroj"));

    for (let i = 0; i < arrPogodiBroj.length; i++) {
       
    }
}


