var time = 60;
var score = 0;
var hitrn = 0;

var increaseScore = () => {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}


var getNewHit = () => {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#newHit").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click", (val) => {
    var clickNumber = Number(val.target.textContent); 
    if (hitrn === clickNumber) {
        increaseScore();
        CreaateBubble();
        getNewHit();
    }
})


var CreaateBubble = () => {
    var clutter = '';
    for (var i = 1; i <= 198; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}
var timerStart = () => {
    var timerInt = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timer").textContent = time;
        }
        else {
            clearInterval(timerInt);
            document.querySelector(
              "#pbtm"
            ).innerHTML = `<h1>Gamer Over! your score was ${score}</h1> `;
            // alert(score + "!")
        }
    }, 1000);
}

timerStart();
CreaateBubble();
getNewHit();
// increaseScore();