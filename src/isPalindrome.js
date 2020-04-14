/**
 * @param {number} x
 * @return {boolean}
 */
var violence = function(x) {
    let tmp = x + ''
    let arr = tmp.split('')
    return +arr.reverse().join('') === x
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let rev = 0;
    while (rev < x) {
        rev = rev * 10 + x % 10;
        console.log(rev)
        x = ~~(x / 10);
        console.log(x)
    }
    return (rev === x) || (~~(rev / 10) === x)
};

var a = isPalindrome(12321)
console.log(a)


// export {
//     violence,
//     isPalindrome
// }
