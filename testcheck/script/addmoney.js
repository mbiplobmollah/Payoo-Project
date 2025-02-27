document.getElementById('add-money-btn').addEventListener('click', function (event){
    event.preventDefault();
    const amount =  getInputValueByID('amount');
   
    const pin = getInputValueByID('pin');
    const account = document.getElementById('acc-number').value;
    const accountNumber = getInputValueByID('acc-number');
    const mainBalance = getInnerTextByID('main-balance')
    
   if(account.length === 11){
    if(pin === 1234){
      const sum =  mainBalance + amount;
      setInnerTextByIdValue('main-balance',sum)
    }
    else{
        alert('Need correct PIN')
    }
   }
    else{
        alert('Need correct Account')
    }



})