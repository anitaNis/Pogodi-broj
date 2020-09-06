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
            //trenutni procenat uspesnosti
            result = Math.ceil(num * brojac);
            spanRes.innerHTML = `${result}%`;
            console.log(result);

            arrPogodiBroj.push(result);

        } else {
            brojac--;
            brPokusaja++;

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
        }

        if (brojac === 0) {
            result = 0;
            spanRes.innerHTML = `${result}%`;
            arrPogodiBroj.push(result);
            alert(`Igra je zavsena. Trazeni brooj je: ${randomNumber}`);
        }
        //set za localStorage
        localStorage.setItem('arrPogodiBroj', JSON.stringify(arrPogodiBroj));

    });
});

let uspeh = document.querySelector("#uspeh");
//localStorage

if (JSON.parse(localStorage.getItem("arrPogodiBroj")) === null) {

    localStorage.setItem("arrPogodiBroj", JSON.stringify(arrPogodiBroj));
} else {

    arrPogodiBroj = JSON.parse(localStorage.getItem("arrPogodiBroj"));
    let sum = 0;
    for (let i = 0; i < arrPogodiBroj.length; i++) {
        sum += arrPogodiBroj[i];
    }

    console.log(arrPogodiBroj);
    arsr = Math.ceil(sum / arrPogodiBroj.length);

    console.log(`ukupan procenat uspesnosti je: ${arsr}%`);
    uspeh.innerHTML = `${arsr}%`;
}


