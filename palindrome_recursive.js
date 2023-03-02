var isPalindrome = function(s) {
    s=s.replace(/[^a-z0-9]/gi,"").toLowerCase()
    var strLen = s.length;
    if (strLen === 0 || strLen === 1) {
        return true;
    }
    
    if (s[0] === s[strLen - 1]) {
        return isPalindrome( s.slice(1, strLen - 1) );
    }
    
    return false;
};