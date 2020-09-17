const express = require('express');

const PORT = process.env.PORT || 8087;

const app = express();

app.get('/', (req, res) => {
    res.send('Добрый день! Этот сервис эмулирует получение случайного значения. /diceRoller - кидание двух костей; /coinFlipper - подбрасывание монеты. ;)$)$)');
});

app.get('/diceRoller', (req, res) => {
    var rqa1 = getRandomInt(6, 1);
    var rqa2 = getRandomInt(6, 1);
    result = rqa1 + " & " + rqa2 + " = " + (rqa1 + rqa2);
    res.send(result);
});

app.get('/coinFlipper', (req, res) => {
    var rqa = getRandomInt(1, 0);
    result = (rqa != 0) ? "Решка" : "Орел"
    res.send(result);
});

app.listen(PORT);
console.log(`Running on this port ${PORT}`)

function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}