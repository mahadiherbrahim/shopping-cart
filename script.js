function handleProductChange(isIncrease) {
    const caseInput = document.getElementById('case-input');
    const caseCount = parseInt(caseInput.value);
    let caseTotalCount = caseCount;
    if (isIncrease == true) {
        caseTotalCount = caseCount + 1;
    } else if (isIncrease == false && caseCount > 0) {
        caseTotalCount = caseCount - 1;
    }
    caseInput.value = caseTotalCount;
    const casePrice = caseTotalCount * 60;
    document.getElementById('case-price').innerText = casePrice;
}