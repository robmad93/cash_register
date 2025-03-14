# cash_register
## Description

This is a simple cash register application that calculates the change due when a customer makes a purchase. It also displays the cash available in the drawer and handles different scenarios such as insufficient funds, exact payment, and closing the drawer when the exact amount is given. This was my attempt for certification project 4 of the JS Algorithms and Data Structures course from freecodecamp.org.

## Features

- Displays the total price of the item.
- Accepts input for cash provided by the customer.
- Calculates and displays the correct change in denominations.
- Shows a message when exact cash is provided.
- Handles cases where there is insufficient cash in the register.
- Updates the cash drawer dynamically.

## Technologies Used
- HTML
- CSS
- JavaScript

## How to Use
1. Open index.html in a browser.
2. Enter the cash amount given by the customer in the input field.
3. Click the "Purchase" button.

The app will determine the appropriate change and update the display accordingly.

## Expected Outputs

- If the customer provides less cash than required, an alert is displayed.
- If the exact amount is given, the message "No change due - customer paid with exact cash" appears.
- If change is due, it is displayed with denominations.
- If the total cash in the drawer equals the change due, the status will be "CLOSED".
- If the register does not have enough money, the status will be "INSUFFICIENT_FUNDS".

## Example Scenarios

Total: $1.87, Cash Given: $5.00

Status: OPEN with the correct breakdown of change.

Total: $1.87, Cash Given: $1.87

No change due - customer paid with exact cash.

Total: $19.50, Cash Given: $20.00, Drawer has only $0.01

Status: INSUFFICIENT_FUNDS.


## Acknowledgements

Thanks to freecodecamp.org for the project idea and guidelines.
