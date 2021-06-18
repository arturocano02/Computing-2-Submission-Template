import { response } from "express";

const handler = function (request) {
    const response = {

    };

    const task = request.task;

    if (task === "money_is_valid"){
        const money = request.money;
        if(money === "" || Number.isNaN(money) || money === null) {
        //check whether it is empty, not a number or null
            response.valid = false;
        } else {
            response.valid = true;
        }
    } else if (task === "add_expense"){
        const expenseAmount = request.money;
        const expenseName = request.name;
        const curBalance = request.balance;
        if (expenseName.length === ""){
            response.ts = "emptyname";
        } else if(expenseAmount === "" || Number.isNaN(expenseAmount)) {
            response.ts = "emptyamount";
        }
         else if(expenseAmount <= curBalance){
//only if the amount is less than the balance, will the operations be done
            response.ts = "dothemaths";
        }
        else if(expenseAmount > curBalance){
            response.ts = "broke";
        }
    }

    return response;
};

export default Object.freeze(handler)