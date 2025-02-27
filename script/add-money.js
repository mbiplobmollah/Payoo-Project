document.getElementById('add-money-btn').addEventListener('click', function (event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertAmount = parseFloat(amount);
    const pin = document.getElementById('pin').value;
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertMainBalance = parseFloat(mainBalance);

    if(parseInt(pin)=== 1234 && convertAmount > 0){
        const sum =convertMainBalance + convertAmount;
        document.getElementById('main-balance').innerText = sum;
        
    }
    else{
        alert('Need correct PIN and Amount')
    }
})