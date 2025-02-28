document.getElementById('add-money-btn').addEventListener('click', function (event){
    event.preventDefault();
    const amount =  getInputValueByID('amount');
   
    const pin = getInputValueByID('pin');
    const account = document.getElementById('acc-number').value;
    const accountNumber = getInputValueByID('acc-number');
    const mainBalance = getInnerTextByID('main-balance')
    const selectedBank = document.getElementById('allbank').value;
    

    if(amount <0){
        alert('Enter a valid Amount');
        return;
    }

   if(account.length === 11){
    if(pin === 1234){
      const sum =  mainBalance + amount;
      setInnerTextByIdValue('main-balance',sum)

    const container = document.getElementById('transaction-container');

    // one way of doing transaction;
    // const p = document.createElement('p');
    // p.innerText= `
    // added ${amount} from ${account} account
    // `
    // container.appendChild(p);
        // another way of doing transaction;
    const div = document.createElement('div');
    div.classList.add('bg-red-400')
    div.innerHTML = `
    <h1 class = "text-yellow-300">Added Money from ${selectedBank}</h1>
    <h3>${amount}</h3>
    <p>account number: ${account}</p>
    `
    container.appendChild(div);





    }
    else{
        alert('Need correct PIN')
    }
   }
    else{
        alert('Need correct Account')
    }



})