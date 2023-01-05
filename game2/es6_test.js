// let kor = 20;
// let eng = 30;

// let obj1 = {
//     kor:kor,
//     eng:eng,
//     total:function(){
//         return this.kor+this.eng;
//     }
// }

// function print(exam){
//     console.log("kor:"+exam.kor);
//     console.log("eng:"+exam.eng);
//     console.log("total:"+exam.total());
// }
// print(obj1);

//es6----------------------------------------

// let obj2 = {kor, eng, total(){
//     return this.kor+this.eng;
// }}

// function print1({kor,eng}){
//     console.log("kor:"+kor);
//     console.log("eng:"+eng);
// }
// print1(obj2);

// function print2(exam){
//     //변수 선언
//     let {kor, eng, aa=9} = exam;

//     console.log("kor:"+kor);
//     console.log("eng:"+eng);
//     console.log("aa:"+aa);
//     console.log("total:"+exam.total());
// }
// print2(obj2);


//20220104----------------------------------------
//1.----------------------------------------------
//console.log(x);
let x = 3; //Uncaught ReferenceError: Cannot access 'x' before initialization

//2.----------------------------------------------
let year=2023, month=1, day=4;
let regdate = year+"-"+month+"-"+day;
//console.log(regdate);

//use padStart -> 1 to "01"
let dateFormat = function(year, month, day){
    return `${year.toString().padStart(2,0)}-${month.toString().padStart(2,0)}-${day.toString().padStart(2,0)}`;
}

let template = dateFormat(year,month,day);
//console.log(template);

//3.----------------------------------------------
let className = "p-select", title = "스마트 폰";
//multi line
let product = 
`<section class="${className}">
    <h1>${title}</h1>
</section>`;
//console.log(product);

//4.----------------------------------------------
//no use escape
let product1 = 
String.raw`<section class="${className}">\n\n\n
    <h1>${title}</h1>
</section>`;
//console.log(product1);

//5.----------------------------------------------
//심볼 (key값에 변수가 적용 가능, 거기에 연산도 가능!)
// let style = {
//     [cssAttr+"handler"] : "red",
//     width : "100px"
// };

//6.----------------------------------------------
let attrName = "kor";
let exam = {
    [attrName]:10, //[attrName]은 값이 담긴다, 여기서는 "kor"
    eng:20,
    math:30
};
//console.log(`kor:${exam.kor}`);

//7.----------------------------------------------
//Object Destructuring
//let {kor, eng} = exam; //아래코드와 같다
//let kor = exam.kor;
//let eng = exam.eng;
//console.log(kor);

//8.----------------------------------------------
//Object Destructuring
//let {eng:english} = exam; //이름 변경
//console.log(english);

//9.----------------------------------------------
//Object Destructuring
let {kor, eng:english, math=30} = exam; //다른 변수 값 대입 후 사용
//console.log(math);

//10.----------------------------------------------
//Object Destructuring
exam = {
    [attrName]:10,
    eng:20,
    math:30,
    student:{
        name:"Han",
        phone:"010-2222-3333",
    },
};
let {student:{name,phone}} = exam; //계층도 뽑아낼 수 있다.
//console.log(name);
//console.log(phone);

//11.----------------------------------------------
//Array Destructuring
let kors = [1,2,3];
let kors2 = [4,5,6];
let [kor1, kor2, kor3] = kors;
// console.log(kor1);

[kor1, kor2, kor3] = kors2;
// console.log(kor1);

//Object이면 ()로 쪼개야한다.
let std1 = {name:"dragon", phone:"010"};
({name, phone} = std1);
// console.log(name);
// console.log(phone);

//12.----------------------------------------------
//Array Destructuring for swap
let a,b;
[a, b] = kors2;
//  console.log(a);
//  console.log(b);

[a, b] = [b, a]; //swap
// console.log(a);
// console.log(b);

//13.----------------------------------------------
//Array Destructuring for last index
let [, , eng3] = kors;
// console.log(eng3);

//14.----------------------------------------------
//Array Destructuring + spread operator
let nums = [1,2,3,4,5,6,7,8,9,10];
let [n1, n2, ...rest] = nums;
// console.log(rest);

//15.----------------------------------------------
//Set
//let set = new Set();
let set = new Set([2,3,4]);
set.add(5);
set.add("5");
set.add(2);
set.add(5);
// console.log(set.size);

// for(let x of set)
    // console.log(typeof x, x);

//has() delete() clear()..

//iterator? index?가 없어서 출력 안됨
// for(let x in set)
    // console.log(x);

//16.----------------------------------------------
// set.forEach((v, k)=>{
//     console.log(k, v);
// })

//17.----------------------------------------------
//Map
//일회성으로 사용할 데이터 구조라면 class가 아닌 map을 사용하는 것이 좋다.
let map = new Map();
map.set("id", 1);
map.set(1, `key가 number?`);
map.set(title, `title이란?`);
map.set(`title`, `title이란?`);

// console.log(`foreach-----------------`);
// map.forEach((v, k)=>{
//     console.log(k, v);
// })
// console.log(`foreach-----------------`);

// for(let x of map)
//     console.log(x);

// console.log(`spread-----------------`);
// console.log(...map);

//18.----------------------------------------------
//Map key, value 꺼내기
// for(let x of map.keys())
//     console.log(x, map.get(x));

// console.log(`-----------------`);
//of가 map의 iterator를 가지고 있어서?
// for(let [k, v] of map)
//     console.log(k, v);

// console.log(`-----------------`);
//map.entries() -> set의 iterator를 반환
// for(let [k, v] of map.entries())
//     console.log(k,v);

// for(let n of map)
//     console.log(`n : ${n[1]}`);
    
//19.----------------------------------------------
//Object -> Map
let obj = {
    a: 1,
    b: 2,
    c: 3,
};

let newMap = new Map(Object.entries(obj));
// console.log(newMap);

// for(let x of newMap)
//     console.log(x);

// for(let x of Object.entries(obj))
//     console.log(x);

//20.----------------------------------------------
//map()
let list = [
    {id:1, title:`haha`},
    {id:2, title:`hoho`},
    {id:3, title:`hihi`},
    {id:4, title:`hehe`},
]

let titleSpan = list.map((i) => `<span>${i.title}</span>`);
console.log(titleSpan);

//What is iterator?