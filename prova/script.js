document.getElementById('simulate-button').addEventListener('click', function() {
    var amount = parseFloat(document.getElementById('investment-amount').value);
    var period = parseInt(document.getElementById('investment-period').value);
    var plan = parseFloat(document.getElementById('investment-plan').value);

    if (!isNaN(amount) && !isNaN(period) && !isNaN(plan)) {
        var result = amount * period * plan;
        document.getElementById('investment-return').textContent = result.toFixed(2);
    } else {
        document.getElementById('investment-return').textContent = 'Preencha todos os campos corretamente.';
    }
});

document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});