let scoreA = 0;
let scoreB = 0;

function addPoints(team, value) {
    const max = parseInt(document.getElementById("maxPoints").value);

    if (team === 'A') {
        scoreA = Math.max(0, scoreA + value);
        document.getElementById("scoreA").textContent = scoreA;
    } else {
        scoreB = Math.max(0, scoreB + value);
        document.getElementById("scoreB").textContent = scoreB;
    }

    checkWinner(max);
}

function checkWinner(max) {
    const winnerEl = document.getElementById("winner");
    if (scoreA >= max && scoreB >= max) {
        winnerEl.textContent = "Empate!";
    } else if (scoreA >= max) {
        winnerEl.textContent = "🏆 Time A venceu!";
    } else if (scoreB >= max) {
        winnerEl.textContent = "🏆 Time B venceu!";
    } else {
        winnerEl.textContent = "";
    }
}

function resetGame() {
    scoreA = 0;
    scoreB = 0;
    document.getElementById("scoreA").textContent = 0;
    document.getElementById("scoreB").textContent = 0;
    document.getElementById("winner").textContent = "";
}
