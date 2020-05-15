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




def row_sum_odd_numbers(n):
    matrix = [[0 for x in range(n)] for y in range(n)]
    index = 1
    for i in range(0, n+1):
        for j in range(0, i):
            matrix[i-1][j] = index
            index += 2
    return sum(matrix[n-1])



print(row_sum_odd_numbers(2))   # => 8
print(row_sum_odd_numbers(41))  # => 68921


# BEST PRACTICE!
def best_practice(n):
    return n**3


    row_sum_odd_numbers(1); # 1
    row_sum_odd_numbers(2); # 3 + 5 = 8
