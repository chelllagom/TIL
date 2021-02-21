//객체
const dog = {
    key : 'value',
    name : '멍멍이',
    age : 2,
    sample : {
        a : 1,
        b : 2,
    }
}

console.log(dog.name);
console.log(dog);


//비구조 할당-객체 구조 분해 : 객체 내부의 key 값을 사용할 수 있게 해줌
const { age } = dog;
console.log(age);

function print({ name, age }){
    const text = `${name}의 나이는 ${age}살 입니다.`;
    console.log(text);
}

print(dog);