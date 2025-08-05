let scores = [0, 0, 0];

function addPoints(player, value) {
    scores[player] += value;
    if (scores[player] < 0) scores[player] = 0;
    document.getElementById(`score${player}`).textContent = scores[player];
}

function checkGalo(player) {
    if (scores[player] >= 50) {
        const audio = document.getElementById("galoAudio");
        audio.play();
        alert(`🐓 Galo cantou para o Jogador ${player}!`);
    } else {
        alert("Ainda não chegou a 50 pontos!");
    }
}
