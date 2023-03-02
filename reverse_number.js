var reverse = function (x) {
    let rev = 0;
    let pop;
    while (x != 0) {
        pop = x % 10;
        rev = rev * 10 + pop;
        x = parseInt(x / 10);
    }
    if (rev > Math.pow(2, 31) || -rev < -Math.pow(2, 31)) {
        return 0
    }
    else {
        return rev
    }
};