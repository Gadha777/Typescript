//print 
let numbers = [22, 33, 44];
console.log(numbers);
// sum of an array
function arraySum(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    console.log("sum of the array = " + sum);
}
arraySum([1, 2, 3, 4, 5]);