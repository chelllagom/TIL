//1.
// let add = new Function("x+y", "return x+y;");
// console.log(add(3,4));

//2.
// function add(x, y){
//     return x+y;
// }
// console.log(add(3,4,5,6));
// console.log(add());

// //3.
// function add1(){
//     return arguments[0] + arguments[1];
// }
// console.log(add1(3,4,5,6));
// console.log(add1());

// alert(window.a);
// a = 1;

// var f1 = function(){
//     //함수 안에서도 전역객체가 사용되는구나,,,
//     a=1;
//     console.log(window.a);
//     var a;
// }
// f1();

// {
//     var a = 1;
// }
// alert(a);
//=>지역이 없구나,,,

// a = 100;
// function f1(){
//     console.log(a);
//     a = 10;
//     f2();
//     console.log(a);
    
//     function f2(){
//         a = 20;
//         f3();
//         function f3(){
//             var a = 30;
//         }
//     }
//     console.log(a);
// }
// f1();
// var a = 80;
// console.log(a);


var f3;
function f1(){
    var a = 10;

    var f2 = function() {
        a++;
        console.log(a);
    }
    f2();
    f3 = f2;
    //메모리 누수가 발생한다,
    console.log(a);
}
f1();
f3();
f3();
f3();
f1();

var funcs = [];

for(var i=0; i<3; i++){
    funcs[i] = function(){
        console.log(i);
    };
    //funcs[i]();
}

funcs[0](); 
//왜 3? i가 안죽어서 2를 가지고 있음...
//클로저...함수 안의 함수가 아우터변수를 참조하고 있으면 클로저가 됨...
funcs[1]();
funcs[2]();

for(var a=0; a<3; a++){
    funcs[a]();
}


//use like java class
function Exam(){
    this.kor = 30;
    //console.log(kor);
    //this는 자기가 사용하는 기본 객체이다.
    console.log(this.kor);
    console.log(window.kor);
}

//when call function add new, the function can call constructor
//var exam1 = new Exam();
//exam1.kor = 50;
//console.log("exam1 ", exam1);
//console.log("exam1.kor ", exam1.kor);

new Exam(); // 생성자 호출해서 객체 1개 만듬,,,,
Exam();     // window.Exam()과 같다,,,? ㅠㅠ 전역 객체(함수) 호출
//window.kor를 접근할 수 있는거지 가지고 있는것은 아니고
//가지고 있는 것은 this.kor뿐이다.

// function Exam(){
//     this.kor = 30;
//     this.eng = 40;
//     this.math = 50;

//     this.total = function(){
//         return this.kor + this.eng + this.math;
//     }
// }

// var exam = new Exam();
// console.log(exam.total());