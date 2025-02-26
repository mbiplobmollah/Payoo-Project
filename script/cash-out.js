document.getElementById('cash-out-btn').addEventListener('click', function (event){
    	event.preventDefault();
        const amount = document.getElementById('cash-amount').value;
        const convertAmount = parseFloat(amount);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertMainBalance = parseFloat(mainBalance);
        const pin = document.getElementById('pin').value;

        if(parseInt(pin) === 1234 && convertAmount > 0){
            const subtract = convertMainBalance - convertAmount;
            document.getElementById('main-balance').innerText = subtract;
        }
        else{
            alert('Need correct PIN and Amount')
        }
})