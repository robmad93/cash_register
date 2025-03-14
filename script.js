let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

document.getElementById('purchase-btn').addEventListener('click', function() {
    let cashGiven = parseFloat(document.getElementById('cash').value);
    let changeDue = document.getElementById('change-due');

    if (cashGiven < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }
    
    if (cashGiven === price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
        return;
    }

    let change = cashGiven - price;
    let changeArray = [];
    let totalCID = cid.reduce((sum, denom) => sum + denom[1], 0);
    totalCID = Math.round(totalCID * 100) / 100;

    if (totalCID < change) {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    let denominations = [
        ["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10],
        ["FIVE", 5], ["ONE", 1], ["QUARTER", 0.25],
        ["DIME", 0.1], ["NICKEL", 0.05], ["PENNY", 0.01]
    ];

    let originalCID = JSON.parse(JSON.stringify(cid));
    
    for (let [name, value] of denominations) {
        let available = cid.find(denom => denom[0] === name)[1];
        let amountToGive = 0;

        while (change >= value && available > 0) {
            change = Math.round((change - value) * 100) / 100;
            available = Math.round((available - value) * 100) / 100;
            amountToGive = Math.round((amountToGive + value) * 100) / 100;
        }
        if (amountToGive > 0) {
            changeArray.push(`${name}: $${amountToGive}`);
        }
    }

    if (change > 0) {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }
    
    let remainingCID = originalCID.reduce((sum, denom) => sum + denom[1], 0) - (cashGiven - price);
    remainingCID = Math.round(remainingCID * 100) / 100;
    
    if (remainingCID === 0) {
        changeDue.textContent = `Status: CLOSED ${changeArray.join(" ")}`;
    } else {
        changeDue.textContent = `Status: OPEN ${changeArray.join(" ")}`;
    }
});
