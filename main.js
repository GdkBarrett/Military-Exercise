let recruitName = `Morgan`;
let recruitAge = 19;
let recruitRank = `Private`;
let recruitAgeNextYear = (recruitAge + 1);

// console.log (recruitName);
// console.log (recruitAge);
// console.log (recruitRank);
// console.log (recruitAgeNextYear);

if (recruitAge < 18) {console.log ('You are too young for the military!');}
else if (recruitName === 'Rugen') {console.log ('My name is Inigo Montoya, you killed my father, prepare to die.');}
else if (recruitRank === 'Captain') {console.log (`Aye Aye Captain ${recruitName}`);}
else if (recruitRank === 'Private' && recruitAge > 40) {console.log ('What have you been doing with your life?');}
else {console.log (`Hello ${recruitRank} ${recruitName}, I cannot wait to celebrate your ${recruitAgeNextYear}th birthday next year!`);} 
