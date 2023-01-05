//1.
let brands = ["애플", "구글", "아마존", "마이크로소프트", "메타"];
// console.log(brands.toString());

//2.
// console.log(brands.join(" * "));
// console.log(brands.join(""));
// console.log(brands.sort());

//3.
let arr1 = ["A", "B"];
let arr2 = ["C", "D"];
let arr3 = ["E", "F", "G"];
let arr4 = [...arr1, ...arr2, ...arr3];
console.log(arr4.slice(1, 2)); //1 인덱스에서 2-1개 리턴

let points = [40, 100, 1, 5, 25, 10];
console.log(points.sort());