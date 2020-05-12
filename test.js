// let result = [];
// for (let i = 1; i < 10; i++) {
//     if (i%3 ===0) {
//         break;
//     }
//     result.push(i);
// }

// console.log(result);
//
//
//let cat = {
//    name: "Breakfast",
//    age: 8,
//    purr: function () {
//      console.log("meow!");
//    }
//  };
//  console.log(cat.name);
//  console.log(cat.age);
//  cat.purr();
//
//
//function blockScope() {
//  if (true) {
//    var x = 'var';
//    let y = 'let';
//    console.log(x); // 'var'
//    console.log(y); // 'let'
//  }
//  console.log(x); // 'var'
//  console.log(y); // ReferenceError: y is not defined
//}
//blockScope(); // evoking the function
//console.log(x); // ReferenceError: x is not defined
//console.log(y); // ReferenceError: y is not defined
//
//

// const fun = function() {
    // console.log("So much fun");
//   };
//
//   fun.amount = 100;
// fun();
//

// function sumArray(array) {
//     if (array.length ===0) return 0;
//     return  sumArray(array.slice(1)) + array[0] ;
// }

// console.log (sumArray([4,10,-1,2]))

// function reverseString(str) {
//     if (str.length === 0) return "";
//     return reverseString(str.slice(1)) + str[0];
// }

// console.log(reverseString("friends"));

// function flatten(data) {
//     if (!Array.isArray(data)) return [data] ;

//     let allElements = [];
//     data.forEach((el) => {
//         let flattened = flatten(el);
//         allElements.push(...flattened);
//     });

//     return allElements;
// }
// console.log (flatten([1,2,3,4,[1,2,3,4]]));


// if (1 || "" || undefined || null || NaN) {
//     console.log('In JavaScript, this will not print.')
//   }


// function divisors(int) {
//     let box = []
//     for(var j = 2; j < int; j++)
//     if(int % j === 0) return false;
//     return int > 1;


//     // if isPrime(int) = true {
//     //     for (let i=2; i<int; i++) {
//     //     if (int%i == 0) {
//     //     console.log(i);
//     //      }
//     //      }
//     //     }
// }

//   divisors(13); // should return [2,3,4,6]
