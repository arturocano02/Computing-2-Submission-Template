**CID:** 01866563

# Project
This repository is for the submission of your **Computing 2: Applications** coursework.

You should complete the proforma and populate this repository with your project submission.

* **Repository Creation Check:** Tuesday 4th May 18:00 – Update your CID in this file to check your submission.
* **Peer Assessment Deadline:** Tuesday 8th June 18:00
* **Final Submission Deadline:** Thursday 17th June 16:00

# Computing 2 Submission Proforma

For each section, write a maximum of 200 words.

## Brief
This web app is supposed to help users keep track of the amount of money being spent on shopping every week. The idea is the following: the user sets themselves a weekly budget and then introduces the items he/she is going to buy in the shop and an estimated price (or amount willing to spend for that item). 

Every time an item is added, the cost is deducted from the budget and is displayed in the balance. The items are then listed on the right hand side of the screen so that the user can keep track. I tried to make a local storage so that the values were kept when the user refreshed the page, but I didn't manage to do this succesfully.


## Coding
The web abb is split into different modules completing different tasks. I have used 2 functions in my main.js, they are relatively simple but they do the job.

The overall way my web app works is by sending and completing requests from and to handler.js and main.js. There is also another file that contains a function whose sole purpose is to subtract 2 numbers together.

The coding of the test created is very simple and this is due to the difficulties I was facing when trying to write tests. I ended up writing an easy one just to check that I could do it and that it would work.

## UX/UI
The interface is very straightforward. The user adds the money by inserting a value and clicking the button "Add Money" which changes to a brown colour when you hover above it. The same works for "Add Expense" but this category includes a name as well.

When the inputted values are not what is expected, an error message shows up indicating what is wrong. E.g. if the budget amount inputted is "ja75k" instead of a number, the response will be a pop up message saying "Please enter a valid number". 

Finally, if the user adds an expense, that when deducted from the balance,l will result in a negative answer, an alert message pops up saying "You are broke, STOP OVERSPENDING!" and the background colour of the web app changes from green to red.

## Data
My program sends a request from the main.js to the handler.js through ajax. The handler then determines the response and sends it back to main.js. This is how the code knows whether the inputs are valid or not, and if they are, what calculations should be done with them.  All the datatypes are mostly natural numbers or strings. These are easy to manipulate.

## Debugging
A method I used to quickly find out what was wrong with my code was using console.log to display the last step my code should have reached. This then gave me insights into where my code was going wrong.

At the end I created a test file using property testing. The test itself is extremeley easy and possibly useless, but it was done in order to fulfil the criteria. I did try to code other more advanced tests but was unsuccessful.

There were no major issues to debug as the functionality of this web app is very uncomplicated.

## Best Practice
There is only one JSlint error in the whole web app and it is located in the handler.js file. Every time I try to fix this my code stops working hence I just left it as it is.
The code is commented throughout and the files are seperated according to their purpose. I mostly used const and var to descirbe my functions and variables. 