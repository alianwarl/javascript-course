let d;

d = new Date();

d = d.toString();

d = new Date(2021, 11, 10, 12, 59, 59);

d = new Date('2021-07-10T17:30:00');
d = new Date('07/10/2021 17:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

d = Date.now(); // unix timestamp

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(d);

d = Math.floor(Date.now() /1000);

console.log(d);