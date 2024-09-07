#! /usr/bin/env node

console.log("\n\t Welcome to Hasnain's Coding World\n");
import inquirer from "inquirer";
let todos = [];
let condition = (true);
while (condition) {
    let answer = await inquirer.prompt([{
            message: "What do you want to Add in Your Todos ?",
            type: "input",
            name: "todo"
        },
        {
            message: "Do you want To Add More ?",
            type: "confirm",
            name: "Opinion",
            default: "false"
        }
    ]);
    todos.push(answer.todo);
    condition = answer.Opinion;
    console.log(todos);
}
