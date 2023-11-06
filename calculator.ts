import * as inquirer from 'inquirer';

// Function to perform basic arithmetic operations
function performOperation(operator: string, num1: number, num2: number): number {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            throw new Error('Invalid operator');
    }
}

// Prompt the user for input
async function getCalculatorInput(): Promise<void> {
    const questions = [
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (value) => !isNaN(parseFloat(value)),
        },
        {
            type: 'input',
            name: 'operator',
            message: 'Enter the operator (+, -, *, /):',
            validate: (value) => ['+', '-', '*', '/'].includes(value),
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (value) => !isNaN(parseFloat(value)),
        },
    ];

    const answers = await inquirer.prompt(questions);

    const result = performOperation(
        answers.operator,
        parseFloat(answers.num1),
        parseFloat(answers.num2)
    );

    console.log(`Result: ${result}`);
}


getCalculatorInput();
