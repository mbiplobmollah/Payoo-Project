document.getElementById('login-btn').addEventListener('click', function (event){
    event.preventDefault();
    const accNumber = document.getElementById('acc-number').value;
    const pin = document.getElementById('pin').value;
    if(accNumber.length === 11){
        if(Number(pin) === 1234){
            window.location.href= "./main.html"
        }
        else{
            alert('pin is wrong')
        }
    }
    else{
        alert('need valid account number')
    }
})