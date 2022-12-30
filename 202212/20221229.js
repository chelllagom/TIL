//1.
// var date = new Date();
// var y = date.getFullYear();
// var m = date.getMonth();
// var h = date.getHours();

// console.log(y,m,h);

//2.
//숫자를 입력받아서 짝수면 짝수, 홀수면 alert
// //prompt로 받으면 다 문자열로 넘어온다!
// var input = Number(prompt("",));
// if(input%2 == 0)
//     console.log(input);
// else
//     alert(input);

//3.
//콘솔창에서 1에서 30까지 띄어쓰기로 한줄 출력
// var output = "";
// for(let i=1; i<=30; i++){
//     output += i + " ";
// }
// console.log(output);


////////////////////////////////////////////////////////////////

//use like java class
// function Exam(){
//     this.kor = 30;
//     //console.log(kor);
//     //this는 자기가 사용하는 기본 객체이다.
//     console.log(this.kor);
//     console.log(window.kor);
// }

//when call function add new, the function call constructor
//var exam1 = new Exam();
//exam1.kor = 50;
//console.log("exam1 ", exam1);
//console.log("exam1.kor ", exam1.kor);

// new Exam(); // 생성자 호출해서 객체 1개 만듬,,,,
// Exam();     // window.Exam()과 같다,,,? ㅠㅠ 전역 객체(함수) 호출
//window.kor를 접근할 수 있는거지 가지고 있는것은 아니고
//가지고 있는 것은 this.kor뿐이다.

// function Exam(){
//     this.kor = 30;
//     this.eng = 40;
//     this.math = 50;

//     this.total = function(){
//         return arguments[0]+arguments[1]+arguments[2];
//     }
//     this.total1 = function(kor,eng,math){
//         return kor+eng+math;
//     }
// }

// var exam = new Exam();
// console.log(exam.total(1,2,3));
// console.log(exam.total1(1,2,3));
// console.log(kor+eng+math);

// var exam1 = new Exam();
// console.log(exam1.total());



//////////////////////////////////////////////////////////////
//why use prototype
//공유할 정보가 있을 때 프로토타입을 사용
//자바의 상속(is a) 효과를 흉내낼 수 있다.
//생성자가 될 수 있는(함수가 될 수 있는) 객체에만 사용 가능하다.

function Exam(){
    this.kor = 30;
    this.eng = 40;
    this.math = 50;

    Exam.prototype.total = function(){
        return this.kor+this.eng+this.math;
    }
}


// function Exam(){
//     this.kor = 30;
//     this.eng = 40;
//     this.math = 50;

//     //prototype과 this 모두 함수를 가지고 있을 경우 this 함수가 실행됨
//     //(우선순위가 더 높다)
//     this.total = function(){
//         return this.kor + this.eng + this.math;
//     }
// }

// Exam.prototype = {
//     total : function(){
//         return this.kor + this.eng + this.math;
//     },
//     avg : function(){
//         return this.total()/3;
//     },
// }

 var exam = new Exam();
// console.log(exam.total());
// var exam1 = new Exam();
// console.log(exam1.total());



// var ar = [];
// var ar1 = [];
// ar.total = function(){
//     return 30;
// }

// Array.prototype.total = function(){
//     return 40;
// }
//위와 같은 코드
// ar.constructor.prototype.total = function(){
//     return 40;
// }

//console.log("call this.total", ar.total());    //30
//console.log("call prototype.total", ar1.total());   //40


//모든 객체는 자신의 생성자를 알 수 있다.
// //console.log(ar.constructor);
// console.log(typeof ar.constructor);     //function
// console.log(typeof Array);              //function
// console.log(ar.constructor === Array);  //true
// console.log(ar.constructor.prototype.constructor.prototype);  //true

//////////////////////////////////////////////////////////////////////////////

//일회용 객체 생성
//프로토타입만 받아옴
var exam2 = Object.create(exam);
console.log(exam);
console.log(exam2);
