document.getElementById('cash-out-btn').addEventListener('click', function (event){
    event.preventDefault();
    const accountNumber = document.getElementById('acc-number').value;
    const amount = getInputValueByID('cash-amount');
    const pin = getInputValueByID('pin');
    const mainBalance = getInnerTextByID('main-balance');
    
  
    if(accountNumber.length === 11){
        if(pin === 1234){
          
            const subtract = mainBalance - amount;
            setInnerTextByIdValue('main-balance', subtract);
        }
        else{
            alert('PIN not valid');
        }
    }
    else{
        alert('Account number is not valid');
    }
})