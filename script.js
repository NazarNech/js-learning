// coding challenge #3

const numberOfComptetitions = 3;

const dolphinsAverageScore = (97 + 112 + 101) / numberOfComptetitions;
const koalasAverageScore = (109 + 95 + 106) / numberOfComptetitions;

console.log(`Dolphins Score: ${Number(dolphinsAverageScore.toFixed(1))}${'\n'}Koalas Score: ${Number((koalasAverageScore.toFixed(1)))}`);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100)
    console.log('Dolphins are winners');
else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100)
    console.log('Koalas are winners');
else if ((dolphinsAverageScore >= 100 && koalasAverageScore >= 100) && dolphinsAverageScore == koalasAverageScore)
    console.log('It`s draw! :)');