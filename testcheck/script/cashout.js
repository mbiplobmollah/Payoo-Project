document.getElementById('cash-out-btn').addEventListener('click', function (event){
    event.preventDefault();
    const accountNumber = document.getElementById('acc-number').value;
    const amount = getInputValueByID('cash-amount');
    const pin = getInputValueByID('pin');
    const mainBalance = getInnerTextByID('main-balance');
    
  if(amount > mainBalance){
    alert('Invalid Amount');
    return;
  }
    if(accountNumber.length === 11){
        if(pin === 1234){
          
            const subtract = mainBalance - amount;
            setInnerTextByIdValue('main-balance', subtract);

            
    const container = document.getElementById('transaction-container');

    const p = document.createElement('p');
    p.innerText= `
    cash-out ${amount} from ${accountNumber} account
    `
    container.appendChild(p);



        }
        else{
            alert('PIN not valid');
        }
    }
    else{
        alert('Account number is not valid');
    }
})