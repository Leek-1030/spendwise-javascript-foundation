
// ====================================
// SPENDWISE - JAVASCRIPT FOUNDATION
// ====================================

// 1. STORE APPLICATION DATA

let monthlyBudget = 0;
let expense1 = 0;
let expense2 = 0;
let expense3 = 0;

// 2. CREATE REUSABLE FUNCTIONS

function calculateTotalExpenses() {
    return expense1 + expense2 + expense3;
}

function calculateRemainingBalance() {
    return monthlyBudget - calculateTotalExpenses();
}

// 3. COLLECT USER INPUT

function startBudget() {

    monthlyBudget = Number(prompt("Enter your monthly budget in KES:"));

    expense1 = Number(prompt("Enter your first expense in KES:"));

    expense2 = Number(prompt("Enter your second expense in KES:"));

    expense3 = Number(prompt("Enter your third expense in KES:"));

    // Check that all inputs are valid
    if (
        !Number.isFinite(monthlyBudget) ||
        !Number.isFinite(expense1) ||
        !Number.isFinite(expense2) ||
        !Number.isFinite(expense3) ||
        monthlyBudget < 0 ||
        expense1 < 0 ||
        expense2 < 0 ||
        expense3 < 0
    ) {
        alert("Please enter valid positive numbers.");
        return;
    }

    // 4. PERFORM BUDGET CALCULATIONS

    let totalExpenses = calculateTotalExpenses();
    let remainingBalance = calculateRemainingBalance();

    // 5. DISPLAY RESULTS IN CONSOLE

    console.clear();

    console.log("===== SPENDWISE BUDGET =====");

    console.log("Monthly Budget: KES " + monthlyBudget);

    console.log("Expense 1: KES " + expense1);

    console.log("Expense 2: KES " + expense2);

    console.log("Expense 3: KES " + expense3);

    console.log("===== BUDGET CALCULATIONS =====");

    console.log("Total Expenses: KES " + totalExpenses);

    console.log("Remaining Balance: KES " + remainingBalance);

    console.log("===== REUSABLE FUNCTIONS =====");

    console.log("Total Expenses: KES " + calculateTotalExpenses());

    console.log("Remaining Balance: KES " + calculateRemainingBalance());

    alert("Budget calculations completed! Check your browser console.");
}
