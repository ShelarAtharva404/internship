function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,22,34,55,3,21,23,44,55,67,78,90];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);
