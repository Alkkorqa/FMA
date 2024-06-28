const calcOperation = document.querySelector('.calc-operation');
const calcTyped = document.querySelector('.calc-typed');


function youClicked(n) {
    if (n === '=') {
        if (calcOperation.textContent != '') {
            calcTyped.textContent = eval(calcOperation.textContent);
        }
    }

    else {
        calcOperation.textContent += n;

    }

    if (n === 'C') {
        calcOperation.textContent = '';
        calcTyped.textContent = '0';
    }

    if (n === 'openC'){}
    if (n === 'closeC'){}
}