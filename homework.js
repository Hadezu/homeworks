const expense = {
    firstAnswer: prompt("Введите обязательную статью расходов в этом месяце?"),
    secondAnswer: prompt("Во сколько обойдется?")
};

let money = prompt("Ваш бюджет на месяц?", ""),
     time = prompt("Введите дату в формате YYYY-MM-DD", "");

const appData = {
        budget: money,
        timeDate: time,
        expenses: expense,
        optionalExpenses: 0,
        income: 0,
        savings: false

    };

console.log(`Your budget is ${appData.budget} for ${expense.firstAnswer}`);