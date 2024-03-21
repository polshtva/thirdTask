function isValid(s) {
    const arrVal = [];
    const objVal = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let char of s) {
        if (char in objVal) {
            arrVal.push(char);
        } else {
            if (arrVal.length === 0 || objVal[arrVal.pop()] !== char) {
                return false;
            }
        }
    }
    return arrVal.length === 0;
}

document.querySelector('.btn').addEventListener('click', function() {
    const input = document.querySelector('.input-data').value;
    const resultDiv = document.querySelector('.result');
    const isValidSequence = isValid(input);
    resultDiv.textContent = isValidSequence ? true : false;
});