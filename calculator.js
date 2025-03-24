// calculator.js
/**
 * Calculator application with basic arithmetic operations
 * Handles input validation and edge cases
 */

/**
 * Performs calculation based on operation type
 * @param {string} operation - The arithmetic operation to perform
 */
function calculate(operation) {
    // Get DOM elements
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    // Clear previous error
    errorDiv.textContent = '';

    // Get and validate input values
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    // Input validation
    if (isNaN(num1) || isNaN(num2)) {
        errorDiv.textContent = 'Please enter valid numbers';
        return;
    }

    let result;
    try {
        switch (operation) {
            case 'add':
                result = add(num1, num2);
                break;
            case 'subtract':
                result = subtract(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            default:
                throw new Error('Invalid operation');
        }

        // Format result to handle floating point precision
        result = Number(result.toFixed(10));
        resultDiv.textContent = `Result: ${result}`;

    } catch (error) {
        errorDiv.textContent = error.message;
    }
}

/**
 * Addition operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of numbers
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtraction operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of numbers
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplication operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of numbers
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Division operation with zero check
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Quotient of numbers
 * @throws {Error} If division by zero attempted
 */
function divide(a, b) {
    if (Math.abs(b) < Number.EPSILON) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}