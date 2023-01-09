import aaa, {test1 as t, anotherTest, varATest, b
    //, insideTest
} from './m1.js';

import {test as qwer, myNumber, m2} from './m2.js';

aaa(); // default function test call

//test1(); // function test1 call
t(); // function test1 call as name t

anotherTest(); // function anotherTest call
//insideTest(); // Uncaught SyntaxError: does not provide insideTest

varATest();
b();
////////////////////////////////////////////////////
console.log(`///////////////////////////////////////m2 start`);
qwer(); // function test call as qwer name
console.log(`m2 myNumber is ${myNumber}`); // use number
console.log(`m2 m2 is ${m2.a}`); // use number
