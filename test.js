let result = [];
for (let i = 1; i < 10; i++) {
    if (i%3 ===0) {
        break;
    }
    result.push(i);
}

console.log(result);


let cat = {
    name: "Breakfast",
    age: 8,
    purr: function () {
      console.log("meow!");
    }
  };
  console.log(cat.name);
  console.log(cat.age);
  cat.purr();


function blockScope() {
  if (true) {
    var x = 'var';
    let y = 'let';
    console.log(x); // 'var'
    console.log(y); // 'let'
  }
  console.log(x); // 'var'
  console.log(y); // ReferenceError: y is not defined
}
blockScope(); // evoking the function
console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
