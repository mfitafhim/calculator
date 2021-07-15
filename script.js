var resultField = $('#result');
function insertNumber(number) {
    var exNumber = resultField.val();
    resultField.val(exNumber + number)
}

function cResult() {
    resultField.val('');
}

function resultNumber() {
    var result = eval(resultField.val()) 
    resultField.val(result);
}