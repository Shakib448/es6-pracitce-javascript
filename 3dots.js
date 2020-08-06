const ages = [12, 14, 15, 13, 16];
const ages2 = [11, 22, 33, 55, 66];
const ages3 = [111, 222, 333, 555, 666];

const allAges = ages.concat(ages2).concat(ages3);

const allAges2 = [...ages, ...ages2, ...ages3];

// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;

const takaPoisa = [650, 450, 250]
const maximum = Math.max(...takaPoisa);

console.log(maximum);