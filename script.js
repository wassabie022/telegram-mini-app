const slider = document.getElementById('slider');
const amountInput = document.getElementById('amountInput');
const displayAmount = document.getElementById('displayAmount');

// Обновление суммы при изменении ползунка
slider.addEventListener('input', function() {
    const value = slider.value;
    amountInput.value = value;
    displayAmount.textContent = value + '₽';
});

// Обновление ползунка при вводе суммы вручную
amountInput.addEventListener('input', function() {
    const value = amountInput.value;
    slider.value = value;
    displayAmount.textContent = value + '₽';
});
