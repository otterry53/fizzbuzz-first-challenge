$(document).ready(function () {
    for (var myNumber = 1; myNumber <= 100; myNumber++) {
        if (myNumber % 15 === 0) {
            $('body').append("<br>fizzbuzz");
        } else if (myNumber % 3 === 0) {
            $('body').append("<br>fizz");
        } else if (myNumber % 5 === 0) {
            $('body').append("<br>buzz");
        } else {
            $('body').append("<br>" + myNumber);
        }
    }
});
//fix github
