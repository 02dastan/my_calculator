const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent === ',' ? '.' : this.textContent;
        const current = display.textContent;
        const lastChar = current.slice(-1);
        
        if (value === '=') {
            display.textContent = eval(current);
        } else if (this.querySelector('img')) {
            if (current.length > 1) {
                display.textContent = current.slice(0, -1);
            } else {
                display.textContent = '0';
            }
        } else {
            if (current === '0' && !['+', '-', '*', '/', '.'].includes(value)) {
                display.textContent = value;
            } else if (value === '0') {
                const lastNumber = current.split(/[\+\-\*\/]/).pop();
                if (lastNumber !== '0') {
                    display.textContent += value;
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (!['+', '-', '*', '/', '.'].includes(lastChar)) {
                    display.textContent += value;
                }
            } else if (value === '.') {
                const lastNumber = current.split(/[\+\-\*\/]/).pop();
                if (lastNumber !== '' && !lastNumber.includes('.')) {
                    display.textContent += value;
                }
            } else {
                const lastNumber = current.split(/[\+\-\*\/]/).pop();
                if (lastNumber === '0') {
                    display.textContent = current.slice(0, -1) + value;
                } else {
                    display.textContent += value;
                }
            }
        }
    });
});
