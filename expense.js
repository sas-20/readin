document.addEventListener('DOMContentLoaded', function() {
    const transactionForm = document.getElementById('transaction-form');
    const transactionHistory = document.getElementById('transaction-history');
    const totalIncomeDisplay = document.getElementById('total-income');
    const totalExpensesDisplay = document.getElementById('total-expenses');
    const remainingBudgetDisplay = document.getElementById('remaining-budget');
    const goalForm = document.querySelector('.goal-form');
    const goalList = document.getElementById('goal-list');
    const generateReportButton = document.getElementById('generate-report-btn');
    const reportOutput = document.getElementById('report-output');

    let totalIncome = 0;
    let totalExpenses = 0;

    transactionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const transactionType = document.getElementById('transaction-type').value;
        const transactionAmount = parseFloat(document.getElementById('transaction-amount').value);

        if (transactionAmount) {
            const transactionItem = document.createElement('li');
            transactionItem.textContent = ${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}: $${transactionAmount.toFixed(2)};
            transactionHistory.appendChild(transactionItem);

            if (transactionType === 'income') {
                totalIncome += transactionAmount;
                totalIncomeDisplay.textContent = $${totalIncome.toFixed(2)};
            } else {
                totalExpenses += transactionAmount;
                totalExpensesDisplay.textContent = $${totalExpenses.toFixed(2)};
                remainingBudgetDisplay.textContent = $${(totalIncome - totalExpenses).toFixed(2)};
            }

            transactionForm.reset();
        } else {
            alert('Please enter a valid transaction amount.');
        }
    });

    goalForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const goalName = document.getElementById('goal-name').value;
        const goalAmount = parseFloat(document.getElementById('goal-amount').value);

        if (goalName && goalAmount) {
            const goalItem = document.createElement('li');
            goalItem.textContent = ${goalName}: $${goalAmount.toFixed(2)};
            goalList.appendChild(goalItem);

            goalForm.reset();
        } else {
            alert('Please enter both goal name and amount.');
        }
    });

    generateReportButton.addEventListener('click', function() {
        const reportType = document.getElementById('report-type').value;

        let reportContent = '';

        switch(reportType) {
            case 'income':
                reportContent = Total Income: $${totalIncome.toFixed(2)};
                break;
            case 'expenses':
                reportContent = Total Expenses: $${totalExpenses.toFixed(2)};
                break;
            case 'balance':
                reportContent = Remaining Budget: $${(totalIncome - totalExpenses).toFixed(2)};
                break;
            default:
                reportContent = 'Invalid report type';
        }

        reportOutput.textContent = reportContent;
    });
});
