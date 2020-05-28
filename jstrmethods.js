// indexOf and lastIndexOf
// let word = "Excalibure";
// let sentense = "In the end, we decided to sell the chidlren and go on vacation.";
// let log = console.log;
// // log(word.toLowerCase().indexOf("e"));
// // log(word.toLowerCase().lastIndexOf("e"));
// // log(sentense.toLowerCase().indexOf("t"));
// // log(sentense.toLowerCase().lastIndexOf("t"));
// // log(sentense.indexOf("e",10))
// log(sentense.indexOf("the", sentense.indexOf("we ")))
// let paragraph = "Nobody calls me Lebowski, you got the wrong guy, I'm the Dude, man.";
// // let find = ' ';
// // let replace = '';
// let newPara="".concat(paragraph);
// // while(newPara.indexOf(find) > -1) {
// //     newPara = newPara.replace(find, replace);
// // }
// console.log(newPara);
// console.log(paragraph);
// let name = "            amesh           ";
//  name = name.trim();
// console.log(name.padStart(25,"lolasasdasdasdasdasdasdasd"));
// let str1 = "d1111.567 tonnes of apple sauce";
// console.log(parseInt(str1));
// console.log(parseFloat(str1));
// let nm =`bob`;
// let obj = {
//     name: 'bob',
//     age: 45
// }
// Object.defineProperty(obj,"test", {
//     value : "Shag",
//     writable: true,
//     configurable: true,
//     enumerable: false,
// } )
// for (let prop in obj.value ) {
//     console.log('sdsds', prop);
// }
// nm = 'non'
// console.log(Object.keys(nm));
// console.log(Object.values(nm));
// console.log(Object.isExtensible(nm));
// console.log(Object.isFrozen(nm));
// console.log(Object.isSealed(nm));
// let twoD = [[1,2,3],[4,5,6]];
// let rows = twoD.length;
// for (let i=0; i < rows ; i++) {
//     let items = twoD[i].length;
//     for (let n=0; n<items; n++) {
//         console.log(twoD[i][n]);
//     }
// }
// let bigHero = {characters:[
//             {name: 'hiro', voice:'Ryan Potter'},
//             {name: 'Baymax', voice:'Scott Adsit'},
//             {name: 'Go Go Tamago', voice:'Jamie Chung'},
//             {name: 'Fred', voice:'TJ Miller'},
//             ]
//         };
// let chars = bigHero.characters;
// for (let i of chars) {
//     for (let lol of chars) {
//     console.log(i,lol, chars[i]);
//     }
// }
// let twoD = [[1,2,3],[4,5,6]];
// let rows = twoD.length;
// for (let rowsd of twoD) {
//     for (let rowsl in rowsd)
//     console.log(rowsl);
// }
// let lol = [1,2,3,4,5,6];
// let odd = lol.filter(function(num) {
//     if num %2 === 0 {
//         return true
//     }
// });
// console.log(odd);
// let dwarves = ['Bigur', 'Thorin', 'Bombur'];
// dwarves.forEach(function(item, index, array) {
//     if (item ==='Thorin') {
//         item=item.toUpperCase();
//     } else {
//         item = item.toLowerCase();
//     }
//     console.log(index,item);
//     });
// let a = [1,2,3,4,5,6];
// let b = [1,2,4,5,6];
// for (i in b) {
//     a.push(b[i]);
// }
// console.log(a);
// let r = Math.random;
// console.log(r);
// let dad = [1,2,3];
// let mom = dad.forEach((idx,el) => {
//        bob = idx+1;
//       console.log(bob);
// });
// console.log(bob);
// dad.map((idx,el) => {
//     return idx = idx +1 ;
// });
// console.log(dad);
// function descendingOrder(n){
//     let sorted = [];
//     sorted = n.sort
//     let sorted = n.sort();
//     console.log(sorted);
//   }
//   descendingOrder(123456789);
// function x (a){
//   console.log("1");
//   a();
//   console.log("2");
//   return function(a);
// }
// function y(){
// console.log('3');
// }
// let e = x(y);
// e();
// b();
// let english = function greet(msg) {
//   return function(name) {
//     console.log(msg, name);
//   }
// }
// // let english = greet("hi");
// english("hi")('tom');
// let timmy = setTimeout (log, 100, "Hello", 12, true);
// clearTimeout(timmy);
// function log (msg,ssss) {
//   console.log("message", msg,ssss) ;
//   clearInterval(tommy);
// }
// let tommy = setInterval(log, 5000, 'goodbye', 's');
// function dos() {
// return "d";
// }
// var lol = function () {
//   return "s";
// }
// console.log(lol);
// let lol = function () {
//   console.log('hi');
// }
// setTimeout(lol,1000);
// setTimeout(lol,2000);
// setTimeout(lol,3000);
// setTimeout(lol,4000);
// setTimeout(lol,5000);
// let d = new Date();
// let d5 = d.getDay();
// console.log(d);
// console.log(d.toLocaleDateString());
// let obj1 = {
//     prop1: () => console.log('prop1')
// };
// let obj2 = {
//     prop2: () => console.log('prop2')
// };
// Object.setPrototypeOf(obj2, obj1);
// // Object.getPrototypeOf(obj2).prop1();
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj1)));
//   function spinWords(box){
//     let arrayNew = box.split(" ");
//     let reversed = arrayNew.map(function (p) {
//         if(p.length>=5) {
//             return p.split('').reverse().join("");
//         } else {
//             return p;
//         }
//     })
//     return reversed.join(" ");
// }
//   console.log (spinWords("This issdsdsd another test"));

// Array find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Array findIndex
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

<<<<<<< HEAD

// let cities = ["Ankara", "Istanbul", "Antalya", "Bursa", "Trabzon"];
// let city = "Bursa";
// let chars = 7;

// let match1 = cities.find(item => {
//     if (city === item) return true;
//     y=2;
// });
// // console.log("item from cities that matched was", match1);


// let match2 = cities.find(item => chars === item.length);
// // console.log('item with matching length was', match2);

// let index = cities.findIndex(
//     item => item.toLocaleLowerCase().indexOf("t") > -1
// );
// // console.log(`Letter "t" found in item at index ${index}`);

// let person = {
//     id: 123,
//     name: "Recep",
//     town: "Istanbul"
// };
// let match3 = cities.find (function (item) {
//     if (item === this.town) return true;
// }, person);
// console.log(person.name, "lives in matching town", match3);
// console.log(global.y);

// let otherProto = function () {
//     this.prop1 = 456;
//     this.inner = function () {
//         console.log("inner");
//     };
// };
// otherProto.someMethod = function() {
//     console.log("this is otherproto");
// };

// let obj = new otherProto();
// console.log(obj.__proto__.__proto__.__proto__);
// "use strict";

let names = [1,2,4];

for ( p of names) {
    console.log(p);
}
=======
// let lol = function () {
//   console.log('hi');
// }


// setTimeout(lol,1000);
// setTimeout(lol,2000);
// setTimeout(lol,3000);
// setTimeout(lol,4000);
// setTimeout(lol,5000);

// try {
//   let url = "http://jsonplaceholder.typicode.com";
//   console.log((url).then((response) => {}));
//   console.log('hello');
// }catch(err) {
//   console.log('caught', err.name, err.message);
// }finally{
//   console.log('Took you a long time');
// }

// console.log('end');
let bob = function(num, str) {
    console.log('bob', num, str, this);
    // return true;
}
let bill = {
    name: 'bill murray',
    movie: 'lost in Translaton',
    myMethod: function(fn) {
        let n = arguments[1];
        let s = arguments[2];
        fn.apply(bill, [n,s]);
    }
}
bill.myMethod(bob,4,'ciao');
>>>>>>> 26feaca7252246c547fbd0c55af09b899435e32b
