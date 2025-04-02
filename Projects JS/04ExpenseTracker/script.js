document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalAmountDisplay = document.getElementById('total-amount');


    let expenses = [];
    let totalAmount = calculateTotal();

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim())  // type is String.

        if(name != "" && !isNaN(amount) && amount > 0){
            const newExpense = {
                id: Date.now(),
                name: name,
                amount: amount
            }
            expenses.push(newExpense);
            saveExpenseToLocal();
            renderExpenses();
            updateTotal();


            // Clear Input
            expenseNameInput.value = "";
            expenseAmountInput.value = "";
        }
    })

    function renderExpenses(){
        
    }

    function calculateTotal(){
        return expenses.reduce((sum, expense) => sum + expense.amount , 0)
    }

    function saveExpenseToLocal(){
        localStorage.setItem("expenses" , JSON.stringify(expenses));  // key, value pairs
    }

    function updateTotal(){
        totalAmount = calculateTotal();
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }
})