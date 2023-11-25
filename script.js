// Function to calculate the total cost of purchasing apples
function calculateTotalCost(quantityApples){
    var unitPrice;

    if( quantityApples < 12 ){
        unitPrice = 1.30 ;
    } else {
        unitPrice = 1.00;
    }
    
    var totalCost = quantityApples * unitPrice;

    
    return { //return as an object the total value of the purchase cost and the unit value of the apple
        total: totalCost.toFixed(2),
        unitaryValue: unitPrice.toFixed(2),
    }
}
// Function that is triggered after clicking the button
function viewCalculateCost(){
    var purchasedApples = document.getElementById( 'quantityApples' ).value;

    // convert string to integer
    purchasedApples = parseInt(purchasedApples); 

    // input validation
    if(!isNaN(purchasedApples) && purchasedApples > 0){
        var { total, unitaryValue } = calculateTotalCost( purchasedApples );
        document.getElementById('unitaryValue').innerHTML = "Valor unitário do produto = R$ " + unitaryValue
        document.getElementById('result').innerHTML = "Valor total do custo da compra = R$ " + total;
    } else {
        alert( "Digite apenas números maiores que zero." );
    }
}