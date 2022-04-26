'use strict';

const calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas && (avgDolphins >= 2 * avgKoalas))
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    else if (avgKoalas > avgDolphins && (avgKoalas >= 2 * avgDolphins))
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
    else
        console.log('No one win :)');
}

checkWinner(calAverage(85, 54, 41), calAverage(23, 34, 27));

