//type guards
function swapIdType(id) {
    if (typeof id === 'string') {
        // can ue string methods
        return parseInt(id);
    }
    else {
        //can use number methods and properties
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
console.log(idOne);
console.log(idTwo);