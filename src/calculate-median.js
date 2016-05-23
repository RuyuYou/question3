function calculate_median(arr) {
    //请勿改动函数名
    var evenNumber = selectAllEvenNumber(arr);
    var medianNumber = buildMedianNumber(evenNumber);
    return medianNumber;
}

function selectAllEvenNumber(array) {
    var evenNumber = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumber.push(array[i]);
        }
    }
    return evenNumber;
}

function buildMedianNumber(evenNumber) {
    var medianNumber;
    if (evenNumber.length % 2 === 0) {
        var sumMedianNumber = evenNumber[evenNumber.length / 2] + evenNumber[evenNumber.length / 2 - 1];
        medianNumber = sumMedianNumber / 2;
    } else {
        medianNumber = evenNumber[Math.floor(evenNumber.length / 2)];
    }
    return medianNumber;
}

module.exports = calculate_median;
