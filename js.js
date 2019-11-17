
//Task  1 

function myFunction(n) {
  
    if (n <= 1) return n;
    return myFunction(n-1)+ " " +n;
}
console.log(myFunction(10));
//Task 2

const fromAtoB = (a, b) => {
    if (a === b) {
      return b;
    } else if (a < b) {
      return a + ' ' + fromAtoB(a + 1, b);
    } else {
      return fromAtoB(a, b + 1) + ' ' + b;
    }
  };
  console.log(fromAtoB(10, 1));
//task 3 

//Task 4 

function myFunctionOne(n) {
  
    if (n >= 1) return n;
    return myFunctionOne(n-1)+ " " +n;
}
console.log(myFunctionOne(10));
//Task 5

function myFunctionTow(n) {
  
    if (n === 1) return n;
    return myFunctionTow(n-1)+ " " +n;
}
console.log(myFunctionTow(10));
//Task 12 

let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6];
let NewArr = arrOne.concat(arrTwo);
console.log(NewArr);


// 13 
 arr = ['a', 'b', 'c'];
 arr.push(1,2,3) ;
 console.log (arr);
//14
arr1 = [1, 2, 3];
arr1.unshift(4, 5, 6. );
console.log(arr1);

//15
arr2 = [1, 2, 3, 4, 5];
console.log(arr2.slice(1,2,3));
//16

arr3 = [1, 2, 3, 4, 5];
console.log(arr3.slice(4,5));
//Task 17

arr4 =[1, 2, 3, 4, 5];
console.log(arr4.splice(1,4,5))

//18 

arr5 =[1, 2, 3, 4, 5];
console.log(arr5.splice(2, 3, 4));
//Task 19 

arr6 =[1, 2, 3, 4, 5];
console.log(arr6.splice(1, 2, 3, 'a', 'b', 'c', 4, 5));
//20

arr7 =[1, 2, 3, 4, 5];
console.log(arr6.splice(1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'));