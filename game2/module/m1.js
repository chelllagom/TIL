export default function test(){
    console.log(`m1 test`);
}

export function test1(){
    console.log(`m1 test1`);
}

export function anotherTest(){
    console.log(`m1 anotherTest`);
}

function insideTest(){
    console.log(`m1 insideTest`);
}

export var varATest = function(){
    console.log(`m1 varATest`);
}

export let b = ()=>{
    console.log(`m1 b`);
}