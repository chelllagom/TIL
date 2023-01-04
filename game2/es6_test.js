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