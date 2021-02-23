//case 1 - 배열 안에 객체
const objects = [
    { name : '멍멍이'},
    { name : '야옹이'},
];

//push - 배열에 추가하기
objects.push({
    name : '냠냠이'
});

console.log(objects);

//length - 배열의 길이
console.log(`배열의 길이 : ${objects.length}`);


//case 2 - 배열 안에 배열
const array = [
    1, true, {a : 1}, [1, 2, 3, 4]
];

console.log(array[4]);