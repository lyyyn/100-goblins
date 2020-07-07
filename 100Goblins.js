const goblins = [];
const gobNum = 10;
let counter = 1;


//initiate the sick goblins
for (let i = 1; i <= gobNum; i++) {
    goblins.push(false);
}

for (let i = 1; i <= gobNum; i++) {

    for (let j = i; j <= gobNum; j += i) {
        goblins.splice(j - 1, 1, !goblins[j - 1]);
    }
}
