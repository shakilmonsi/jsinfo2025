
// Lab 10: Static Methods
// Instructions:
// Create a class MathUtils with static methods: add() and subtract().
// Call these methods without creating an instance of the class.
// Expected Output:
// 8
// 6

class MathUtils {
    // Static method to add two numbers
    static add(a, b) {
        return a + b;
    }

    // Static method to subtract two numbers
    static subtract(a, b) {
        return a - b;
    }
}

// Call static methods without creating an instance of MathUtils
console.log(MathUtils.add(5, 3));       // 8
console.log(MathUtils.subtract(10, 4)); // 6
