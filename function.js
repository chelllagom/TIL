// 기존 함수
function getGrade(score){
    if(score === 100){
        return 'A';
    }else if(score >= 90){
        return 'B';
    }else{
        return 'C';
    }
}

const grade = getGrade(20);
console.log(grade);


// // 화살표 함수(예제 1)
// const add = (a, b) => {
//     return a + b;
// }

const add = (a, b) => a + b;

const sum = add(1, 2);
console.log(sum);

// 화살표 함수(예제 2)
const hello = (name) => {
    console.log(`Hello, ${name}!`);
}
hello('han');


//화살표 함수와 function의 this 값이 다르다!
