#! /usr/bin/env node
import inquirer from "inquirer";
// Initializae user Balance and Pin code
let myBalance = 10000; // Dollor
let myPin = 1234; // Password
// Print Welcome Message
console.log("Welcome to code with Aamir Khan - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, Login Successfuly!");
    // console.log(`Current Account Balance Is" ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance"],
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter The Amount to Withdraw:",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect, Try Again!");
}
