// Proměnná zachycuje stav hry

let turn;
let turn1; // Uložení hodnoty aktuálního hodu
let rounds = []; // Pole pro uložení všech hodů
let roundss = [];
let timer = false; // Proměnná pro uložení časovače
let player = 0;

/* Funkce zajišťující animaci */
function animace() {
    // Do proměnné hod bude uloženo náhodné číslo v rozsahu 1-6
    turn = Math.ceil(Math.random() * 6);
    // Změna obrázku podle aktuálního hodu
    dice.src = `img/kostka${turn}.png`;

}
function animace1() {
    // Do proměnné hod bude uloženo náhodné číslo v rozsahu 1-6
    turn1 = Math.ceil(Math.random() * 6);
    // Změna obrázku podle aktuálního hodu
    dice.src = `img/kostka${turn}.png`;
}

function max(){
    let mx = 1;
    rounds.forEach(function(value, index){
        if(value > mx) mx = value;
    });
    return mx;
}

function min(){
    let mn = 6;
    rounds.forEach(function(value, index){
        if(value < mn) mn = value;
    });
    return mn;
}

function sum(){
    let s = 0;
    for (let i = 0; i < rounds.length; i++ ){
        s += rounds[i];
    }
    return s;
}

function sum1(){
    let s = 0;
    for (let i = 0; i < roundss.length; i++ ){
        s += roundss[i];
    }
    return s;
}

function stats(){
    let results  = `<p>Aktuální hod: ${turn} </p>`;
    results += `<p>Přehled hodů: ${rounds} </p>`;
    results += `<p>Počet hodů: ${rounds.length} </p>`;
    results += `<p>Součet: ${sum()} </p>`;
    if(sum() > 25 ){
        alert("vyhrál hráč číslo 1");
    }
    results += `<p>Průměr hodů: ${sum() / rounds.length} </p>`;
    return results;
}

function stats1(){
    let results  = `<p>Aktuální hod: ${turn} </p>`;
    results += `<p>Přehled hodů: ${roundss} </p>`;
    results += `<p>Počet hodů: ${roundss.length} </p>`;
    results += `<p>Součet: ${sum1()} </p>`;
    if(sum1() > 25 ){
        alert("vyhrál hráč číslo 2");
    }
    results += `<p>Průměr hodů: ${sum1() / roundss.length} </p>`;
    return results;
}

function nextPlayer(){
    if(player === 0){
        player = 1;
        document.querySelector(".player1").classList.remove("active");
    document.querySelector(".player2").classList.add("active");
    }else{
        player = 0;
        document.querySelector(".player2").classList.remove("active");
    document.querySelector(".player1").classList.add("active");
    }
    
}

play.addEventListener('click', function() {
    if (!timer) {
        play.innerText = 'STOP'
        timer = setInterval(animace, 40);
    } else {
        play.innerText = 'HREJ';
        clearInterval(timer);
        timer = false;
        rounds.push(turn);
        if(player === 0){
            result.innerHTML = stats(); 
    }else{
        result1.innerHTML = stats1();
    }
    }
})

play1.addEventListener('click', function() {
    if (!timer) {
        play.innerText = 'STOP'
        timer = setInterval(animace, 40);
    } else {
        play.innerText = 'HREJ';
        clearInterval(timer);
        timer = false;
        roundss.push(turn);
        if(player === 1){
            result2.innerHTML = stats1();
        }
        }
})

change.addEventListener('click', function() {
nextPlayer();
})
