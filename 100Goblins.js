const goblins = [];
const gobNum = 100;
let counter = 1;
const result = [];

//initiate the sick goblins
for (let i = 0; i < gobNum; i++) {
    goblins.push(false);
}

//curing goblins
for (let i = 1; i <= gobNum; i++) {
    for (let j = i; j <= gobNum; j += i) {
        goblins.splice(j - 1, 1, !goblins[j - 1]);
    }
}

//pick only the cured goblins
goblins.forEach((element, idx) => {
    if (element === true) {
        result.push(idx + 1);
    }
});

console.log(result);
