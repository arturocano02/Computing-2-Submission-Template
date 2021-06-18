import Ajax from "./ajax.js";
import Bla from "./budget.js";

const addmoney_button = document.getElementById("addMoney");
const addexpense_button = document.getElementById("addExpense");
const colours = ["#e76f51", "#2a9d8f"]; //red and green

var curBalance = parseInt(document.getElementById("curBalance").innerHTML);

addmoney_button.onclick = function () {
    var money = parseInt(document.getElementById("money").value);
    addMoney(money);//add money to the budget on click of button
};

addexpense_button.onclick = function () {
    var expenseName = document.getElementById("expenseName").value;
    var expenseAmount = parseInt(document.getElementById("expenseAmount").value);
    addExpense(curBalance, expenseAmount, expenseName);
};
var totalBudget = parseInt(document.getElementById("totalBudget").innerHTML);


const addMoney = function (money) {

    const request = {
        "task": "money_is_valid",
        "money": money
    };

    const template = Ajax.query(request);
    console.log("Request: " + JSON.stringify(request));

    template.then(function (response) {
        console.log("Response: " + JSON.stringify(response));
        if (response.valid) {
            totalBudget += money; //value added to budget
            curBalance += money;
            document.getElementById("totalBudget").innerHTML = totalBudget;
            document.getElementById("curBalance").innerHTML = curBalance;
        } else {
            alert("Please enter a valid number");
        }
    });
};

var addExpense = function (balance, amount, name) {
    const request = {
        "task": "add_expense",
        "money": amount,
        "name": name,
        "balance": balance
    };
    const template = Ajax.query(request);
    console.log("Request: " + JSON.stringify(request));

    template.then(function (response) {
        console.log("Response: " + JSON.stringify(response));
        if (response.ts === "emptyname") {
            //if empty string
            alert("Please enter an expense name");
        } else if (response.ts === "emptyamount") {
            alert("Please enter a valid amount");
        } else if (response.ts === "dothemaths") {
            var a = Bla.subtraction(balance, amount);
            console.log("a");
            console.log(a);
            document.getElementById("curBalance").innerHTML = a;
            var para1 = document.createElement("p");
            var para2 = document.createElement("p");
            curBalance -= balance - a;
            console.log(balance);//used for debugging
            para1.textContent = "Expense Name : " + name;
            para2.textContent = "Expense Amount : " + JSON.stringify(amount);
            document.getElementById("addedExpenses").appendChild(para1);
            document.getElementById("addedExpenses").appendChild(para2);
        } else if (response.ts === "broke") {
            document.body.style.background = colours[0];
            //background colour changes
            alert("You are broke, STOP OVERSPENDING!");
        }
    });
};



