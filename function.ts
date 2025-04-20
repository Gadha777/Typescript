// Function that returns the sum of two numbers
function addTwonum(a: number, b: number): number {
    return a + b;
}

let sum: number = addTwonum(2, 3);
console.log(sum);

// Function that logs the total sum of an array of numbers
function addAllnumbers(items: number[]): void {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllnumbers([1, 2, 3, 4, 5]);

// Function that returns a combined string
function displaystring(string1: string, string2: string): string {
    return string1 + "  " + string2;
}

const result: string = displaystring("Hello", "World");
console.log(result);
