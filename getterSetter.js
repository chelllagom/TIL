//객체 안에 getter, setter를 만들 수 있다.
//getter 함수는 return이 반드시 존재해야한다.
//예제 1
const numbers = {
    a : 1,
    b : 2,
    get sum(){
        console.log('sum 함수가 실행됩니다.');
        return this.a + this.b;
    }
};

console.log(numbers.sum);
console.log('===================');
numbers.b = 5;
console.log(numbers.sum);


//예제 2
const dog = {
    _name : '멍멍이',
    get name(){
        console.log(`이름은 ${this._name}입니다.`)
        return 'get 완료!';
    },
    set name(value){
        console.log(`이름이 ${value}로 바뀝니다.`);
        this._name = value;
    }
}

console.log('===================');
console.log(dog.name);
dog.name = '뭉뭉이';
console.log(dog.name);

