//객체
const dog = {
    name : '멍멍이',
    age : 2,
    sound: 'mung mung!',
    say(){
        console.log(this.sound);
    }
};


console.log(dog.name);
console.log(dog);

//객체 추가 생성
const cat = {
    name : '야옹이',
    sound : '야옹!',
};

cat.say = dog.say;
dog.say();
cat.say();

//function을 꺼내 사용하면 this가 값을 찾지 못한다!
const catSay = cat.say;
catSay();

//비구조 할당-객체 구조 분해 : 객체 내부의 key 값을 사용할 수 있게 해줌
const { age } = dog;
console.log(age);

function print({ name, age }){
    const text = `${name}의 나이는 ${age}살 입니다.`;
    console.log(text);
}

print(dog);