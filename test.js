let result = [];
for (let i = 1; i < 10; i++) {
    if (i%3 ===0) {
        break;
    }
    result.push(i);
}

console.log(result);