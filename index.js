const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const output = document.getElementById('output');

function updateOutput() {
    const selectedValues = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    });

    if (selectedValues.length > 0) {
        output.textContent = `Вы справились с: ${selectedValues.join(', ')}`;
    } else {
        output.textContent = 'Пока ничего не сделано.';
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateOutput);
});

updateOutput();
