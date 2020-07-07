const gobNum = 100;
const goblins = new Array(gobNum).fill(false); //initiate the sick goblins
const result = [];

//curing goblins
goblins.forEach((gob, idx) => {
    for (let j = idx + 1; j <= gobNum; j += idx + 1) {
        goblins[j - 1] = !goblins[j - 1];
    }
})

//pick only the cured goblins
goblins.forEach((element, idx) => {
    element && result.push(idx + 1);
});

console.log(result);