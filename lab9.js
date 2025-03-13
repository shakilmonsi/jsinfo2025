class Calculator {
    // Method to handle different numbers of arguments
    add(...args) {
        return args.reduce((sum, num) => sum + num, 0);
    }
}

// Create an instance of Calculator
const calculator = new Calculator();

// Call the add method with 2 arguments
console.log(calculator.add(2, 3));  // 5

// Call the add method with 3 arguments
console.log(calculator.add(2, 3, 4));  // 9
