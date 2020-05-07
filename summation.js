function summation(arr) {
    let sum = 1;

    function summer() {
        for (let i=0; i<arr.length; i++) {
            sum *= arr[i]
        }

    }
summer();

return sum;

}

console.log(summation([1,2,3,4]));