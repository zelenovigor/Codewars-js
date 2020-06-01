function expandedForm(num) {
    var digits = num.toString()
    var output = []

    for (var i = 0; i < digits.length; i++) {
        if (digits[i] > 0) {
            var zeros = ''
            // console.log(digits.length-i-1)
            for (var z = digits.length - i - 1; z > 0; z--) {
                zeros += '0'
            }
            output.push(Number(digits[i] + zeros))
        }
    }
    return output.join(' + ')
}



console.log(expandedForm(7304))